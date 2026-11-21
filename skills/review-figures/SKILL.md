---
name: review-figures
description: Read-only audit of the figures on a page — screenshot every step in light mode, dark mode, at 375 px and after client-side navigation, then check them against the PlanetScale-style visual language, label fit, overlaps, outcome boxes and text alternatives. Use when the user says a diagram looks off, asks to check or screenshot figures, or after building or redrawing a figure.
---

# Review figures

Read-only. Report findings; fix only when asked (then use the drawing skill that built the figure).

Standard: the visual language in
[../planetscale-style-figures/references/visual-language.md](../planetscale-style-figures/references/visual-language.md)
and the checklist in [../planetscale-style-figures/SKILL.md](../planetscale-style-figures/SKILL.md).

## Steps

1. **Run the automatic checks** if the project has them (figure tests, geometry or
   label-fit checks, a link checker).
2. **Screenshot** every figure on the page. With a dev or preview server running, use the
   [scripts/figshot.mjs](scripts/figshot.mjs) file in this skill's folder:

   ```
   node <this skill's folder>/scripts/figshot.mjs /docs/some-page/ <out-dir> [port]
   ```

   The script needs `playwright-core` (install it in a scratch folder, not the project) and Chrome
   (`CHROME_PATH` overrides the macOS default). It expects stepped figures marked with
   `data-boundary-figure`, step buttons with `data-step`, and the active step in `data-beat`; adapt
   the selectors for another figure component. It clicks each step, waits for it to become active,
   and saves each step in light mode, a mid-animation frame, and the final step in dark mode and at
   375 px. It prints any page errors. Without such a component, take the screenshots by hand.
3. **Open every image** and check each item below. Repeat for the other language's page.
4. **Navigation check.** Open another page, navigate back with a link (not a reload), and confirm the
   figure starts at step 1 with its buttons.

## Check

- Labels fit their boxes and do not overlap lines, marks or other labels, in both languages.
- Nothing is cut off at the canvas edge or at 375 px.
- Square corners, inset dashed outline, orthogonal lines with square ends, flow colours labelled.
- Each step changes one thing; the outcome box matches the header sentence.
- Packets travel the active path; refused paths end in a × at the deciding control.
- Dark mode keeps contrast; no colour carries meaning alone.
- A lead-in sentence sits above the figure; the text alternative names every element or step.

## Output

A list per figure key: OK, or each problem with the screenshot path and the step, theme or width
where it shows. Most severe first.
