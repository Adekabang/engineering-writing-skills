---
name: chart-evidence
description: >-
  Turn measured numbers into an honest evidence figure — bar charts, log-scale comparisons,
  before/after measurements, scale and unit visuals — with units, source and setup on the
  figure. Use when the user wants to chart benchmark results, latencies, sizes, counts or costs,
  or show how much bigger or slower one thing is than another. Not for invented or illustrative
  data.
---

# Chart evidence

> Requires `planetscale-style-figures`, installed next to this skill (links use `../`). If it is missing, read <https://github.com/Adekabang/engineering-writing-skills/tree/main/skills/planetscale-style-figures>.

Catalogue, sections C and D: [../planetscale-style-figures/references/figure-types.md](../planetscale-style-figures/references/figure-types.md).
Visual language: [../planetscale-style-figures/references/visual-language.md](../planetscale-style-figures/references/visual-language.md).

## Rules

- **Measured values only.** Every value comes from real output, a cited source or a run you did.
  State the setup (tool, version, hardware, data size) in the figure's scope note. If the numbers
  are illustrative, this is not an evidence chart: draw a mechanism instead and label it illustrative.
- **One question per chart.** "Which failure takes longest?" — not every metric you have.
- **Units on every value**, and a comparison the reader can feel ("3.02 s vs 0.01 s, 300× longer").
- **Log scale** when values span more than about two orders of magnitude; say so on the axis.
- **No fake charts.** Do not build a chart out of boxes when the data needs a line or scatter plot;
  if the renderer cannot draw the needed type, say so and propose the builder.
- **Order bars by the point** you are making (largest first, or the order of the story).

## Steps

1. Collect the values with their source; put the raw output on the page near the chart.
2. Choose bar, log bar, before/after pair or scale visual from the catalogue.
3. Write the one-sentence claim as the figure's lead-in.
4. Build, then run [review-figures](../review-figures/SKILL.md).

## Project conventions

If the project documents its own rules (for example in `AGENTS.md`, `CLAUDE.md` or a contributing
guide), they win over this skill. Use the project's bar or chart builder when it has one, and put the
source and setup in the figure's scope note in every language. Line charts, unit grids and scatter plots
need a real chart builder; do not fake them with boxes.
