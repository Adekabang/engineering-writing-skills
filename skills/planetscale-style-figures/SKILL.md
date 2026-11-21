---
name: planetscale-style-figures
description: Design and build explanatory diagrams, animations and interactive figures in the visual language of the PlanetScale engineering blog — monospace uppercase labels, square boxes with an inset dashed outline, orthogonal connectors, one colour per flow, reader-stepped "STEP n OF m" mechanisms, charts from real data, simulations and explorers. Use on its own whenever the user wants a figure, diagram, chart, animation or interactive visual for a post, doc page or book chapter (including redrawing an existing diagram), or when the planetscale-style-blog skill hands over its figure plan. Umbrella skill: prefer draw-mechanism, chart-evidence, build-interactive or redraw-diagram when one clearly fits; use this one for mixed sets of figures or when unsure.
---

# PlanetScale-style figures

This skill turns one claim into one figure the reader can see, step through or play with. It works
alone (a single diagram for a doc page, a redraw of an old SVG, a chart for a report) or as the figure
half of the [planetscale-style-blog](../planetscale-style-blog/SKILL.md) skill, which plans the post
and hands over a figure plan.

Imitate the *grammar* of those figures, not their art, palette, text or brand. Never present a figure as
a PlanetScale asset.

## Narrower skills

| Job | Skill |
|---|---|
| Topologies, stepped mechanisms, ladders, timelines, rule walkthroughs | [draw-mechanism](../draw-mechanism/SKILL.md) |
| Bar charts, log-scale comparisons, scale visuals from measured data | [chart-evidence](../chart-evidence/SKILL.md) |
| Steps, explorers, simulations, what-ifs | [build-interactive](../build-interactive/SKILL.md) |
| Replacing an old SVG, Mermaid or text-art diagram | [redraw-diagram](../redraw-diagram/SKILL.md) |
| Screenshot audit of finished figures | [review-figures](../review-figures/SKILL.md) |

Read before drawing:
- [references/visual-language.md](references/visual-language.md) — the house visual language (mandatory),
  the three tiers (static, self-playing animation, interactive widget) and how each is built.
- [references/figure-types.md](references/figure-types.md) — the catalogue of figure types by the claim
  they prove, infrastructure and security patterns, micro-patterns and accessibility rules.

## Workflow

1. **Write the claim.** One sentence the figure must prove: "A broad rule above the deny rule lets the
   laptop reach the database." If there is no claim, there is no figure.
2. **Pick the type from the claim** in `figure-types.md` (structure, mechanism over time, quantity,
   evidence chart, simulation, explorer, framing device, infrastructure or security pattern). In a set
   of figures, mix 2–4 types; a page of only box-and-line diagrams is a smell.
3. **Pick the tier.** Static for layouts and decision charts; self-playing animation for a sequence the
   reader only watches; interactive for flow, scale or an input the reader should change. Prefer
   reader-driven steps (no autoplay) for anything the reader must follow.
4. **Storyboard the beats.** 2–4 steps for a stepped figure: for each, the one-sentence header, what
   appears or changes, and the outcome box text. Static figures get a description list naming every
   element and relationship instead.
5. **Collect the data.** Charts use measured values only, with the source and setup named. Illustrative
   values are labelled illustrative. Never invent output, latencies or benchmark numbers.
6. **Draw** in the visual language: monospace uppercase labels, square corners with an inset dashed
   outline, orthogonal lines with square end points, one colour per kind of flow labelled in that colour,
   hatching for the node that matters, cylinders for stores, refused paths as a × mark, a "STEP n OF m"
   header and an outcome box. Rounded cards, arrowheads, curves and generic flowchart styling are the
   usual reasons a figure looks wrong.
7. **Check** with the checklist below and the [review-figures](../review-figures/SKILL.md) screenshot audit, and fix every miss.

## Rules that are easy to break

- **Draw the mechanism; do not describe it.** A table, a numbered list or a timeline in a box is text,
  not a figure. Keep a table only for a true side-by-side comparison or for normative data (every cell).
- **One figure per idea.** Prefer several small figures to one crowded one; split a flow with more than
  about 20 nodes.
- **Lead-in and text alternative.** Introduce each figure with a sentence ending in a colon. The text
  alternative narrates every beat, so a reader who cannot see the motion loses nothing.
- **The final state stands alone.** It renders without JavaScript and with `prefers-reduced-motion`.
- **Theme-aware.** Colours come from the site's tokens, with dark mode keyed to the site's own theme
  attribute; fixed aspect ratio so the page does not jump.
- **Client-side navigation.** Interactive figures re-initialise on the router's page-load event (for
  Astro, `astro:page-load`), not only on first load.
- **Never replace a real screenshot** with an invented diagram, and never animate a screenshot.

## Project conventions

If the project documents its own rules (for example in `AGENTS.md`, `CLAUDE.md` or a contributing
guide), they win over this skill. Look there for where figure data lives, which component renders it,
which builders exist and which tests check geometry and languages; reuse them rather than starting a
new format. Preserve every fact when redrawing and keep superseded assets.

Without such a setup, build a self-contained inline SVG (tier 1–2) or a small HTML/JS widget (tier 3)
with the rules above, colours from the site's tokens and a text alternative in the page.

## Checklist

- [ ] The claim is written down and the figure proves it; the type fits the claim.
- [ ] Visual language: mono caps, square corners, inset dashed outline, orthogonal lines with square ends,
      flow colours labelled in place, hatch on the key node, outcome box per step.
- [ ] 2–4 steps for a stepped figure; each step changes one thing and has an outcome sentence.
- [ ] Every number has a unit and a source or stated setup; illustrative values are labelled.
- [ ] Lead-in sentence, text alternative or description list, and a no-JavaScript final state.
- [ ] Labels fit and do not overlap in every language the page ships.
- [ ] Screenshots checked: each step in light mode, dark mode, 375 px width, and after client-side navigation.
- [ ] No copied text, art or branding from the source publication.
