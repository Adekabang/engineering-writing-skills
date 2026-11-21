// Usage: node figshot.mjs <page path, e.g. /book/03_data_and_keys/> <out dir> [port=4321]
// For every <figure data-boundary-figure>: each step in light 1280px (verified via data-beat),
// a mid-animation frame of the last step, and the final step in dark 1280px and light 375px.
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [path, out, port = '4321'] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const base = `http://localhost:${port}`;
const slug = path.replace(/^\/|\/$/g, '').replaceAll('/', '_') || 'root';
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const problems = [];
async function open(name, width, dark) {
  const page = await browser.newPage({ viewport: { width, height: 1000 }, deviceScaleFactor: 2, colorScheme: dark ? 'dark' : 'light' });
  page.on('pageerror', e => problems.push(`${name}: ${e.message}`));
  page.on('console', m => m.type() === 'error' && problems.push(`${name}: ${m.text()}`));
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await page.goto(base + path, { waitUntil: 'networkidle', timeout: 90000 });
      if (res && res.status() === 200) return page;
      problems.push(`${name}: HTTP ${res?.status()} (attempt ${attempt + 1})`);
    } catch (e) { problems.push(`${name}: ${e.message.split('\n')[0]} (attempt ${attempt + 1})`); }
    await page.waitForTimeout(3000);
  }
  return page;
}
async function select(page, fig, step) {
  for (let attempt = 0; attempt < 3; attempt++) {
    await fig.locator(`[data-step="${step}"]`).click();
    try { await page.waitForFunction(([el, s]) => el.dataset.beat === String(s), [await fig.elementHandle(), step], { timeout: 3000 }); return true; }
    catch { await page.waitForTimeout(1500); }
  }
  problems.push(`step ${step} never became active`); return false;
}
async function pass(name, width, dark, everyStep) {
  const page = await open(name, width, dark);
  const figs = page.locator('[data-boundary-figure]');
  const n = await figs.count();
  for (let i = 0; i < n; i++) {
    const fig = figs.nth(i);
    await fig.scrollIntoViewIfNeeded();
    const count = await fig.locator('[data-step]').count();
    if (count === 0) { await fig.screenshot({ path: `${out}/${slug}-${name}-f${i}.png` }); continue; }
    const steps = everyStep ? [...Array(count).keys()].map(k => k + 1) : [count];
    for (const s of steps) {
      await select(page, fig, s);
      if (everyStep && s === count) { await page.waitForTimeout(600); await fig.screenshot({ path: `${out}/${slug}-${name}-f${i}-s${s}-mid.png` }); }
      await page.waitForTimeout(1400);
      await fig.screenshot({ path: `${out}/${slug}-${name}-f${i}-s${s}.png` });
    }
  }
  if (await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)) problems.push(`${name}: horizontal overflow`);
  await page.close();
  return n;
}
const n = await pass('light', 1280, false, true);
await pass('dark', 1280, true, false);
await pass('375', 375, false, false);
await browser.close();
console.log(`${n} figure(s) on ${path}; screenshots in ${out}`);
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'no console errors, no overflow, HTTP 200');
