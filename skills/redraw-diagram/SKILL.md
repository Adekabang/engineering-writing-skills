---
name: redraw-diagram
description: >-
  Replace an existing diagram — an SVG image, a Mermaid chart, or box-drawing / arrow text art
  in a code block — with a native figure in the PlanetScale-style visual language without losing
  any node, relationship, row, column or caveat. Use when the user asks to redraw, modernise,
  convert or restyle an old diagram, or to make legacy visuals match the rest of the site.
---

# Redraw a diagram

> Requires `planetscale-style-figures`, installed next to this skill (links use `../`). If it is missing, read <https://github.com/Adekabang/engineering-writing-skills/tree/main/skills/planetscale-style-figures>.

Visual language: [../planetscale-style-figures/references/visual-language.md](../planetscale-style-figures/references/visual-language.md).
For the new figure's shape, follow [draw-mechanism](../draw-mechanism/SKILL.md) or, for data, [chart-evidence](../chart-evidence/SKILL.md).

## Rules

- **Preserve every fact.** Every node label, relationship (including refused ones), table row and
  column, note and caption caveat from the source appears in the new figure's labels, steps or
  description. Abbreviate on the drawing; name things in full in the description.
- **Matrices stay tables.** When the cells are data, use a table with every row and column; add a
  drawing only if it helps reading.
- **Split big diagrams.** More than about 20 nodes → several figures, one per pattern or segment.
- **Keep literal details.** If text art holds IP addresses, VLAN IDs, ports, interface names or
  bandwidths the drawing cannot carry, keep the original block unchanged after the figure in a
  disclosure titled "Original text diagram".
- **Never replace a real screenshot** with an invented diagram.
- **Keep the old asset.** Do not delete superseded SVG files.
- **Not diagrams:** directory trees, config listings, command output and code. Leave them.

## Steps

1. Inventory the source: list every node, edge, row, column, note and caveat.
2. Decide static or stepped (paths and refusals are stepped; maps and hierarchies are static).
3. Draw; tick the inventory off against the new figure's text.
4. Replace the image with a lead-in sentence and the figure; add the disclosure if needed.
5. Run [review-figures](../review-figures/SKILL.md).

## Project conventions

If the project documents its own rules (for example in `AGENTS.md`, `CLAUDE.md` or a contributing
guide), they win over this skill. If the project keeps the source diagram's data (nodes, edges,
rows), record which figure redraws which source and check coverage in a test when one exists. Translate
the disclosure title for each language version of the page.
