---
name: draw-mechanism
description: Draw how a system is put together or what happens over time — network and service topologies, layered stacks, reader-stepped mechanisms with packets and refusals, sequence (ladder) diagrams, swimlane timelines with measured spans such as RPO/RTO, and first-match rule walkthroughs — in the PlanetScale-style visual language. Use when the user asks for an architecture diagram, request path, sequence diagram, incident or recovery timeline, firewall or policy evaluation, or any boxes-and-flows figure.
---

# Draw a mechanism

Visual language (mandatory): [../planetscale-style-figures/references/visual-language.md](../planetscale-style-figures/references/visual-language.md).
Type catalogue, sections A, B and H: [../planetscale-style-figures/references/figure-types.md](../planetscale-style-figures/references/figure-types.md).

## Pick the shape from the claim

| Claim | Shape |
|---|---|
| "These parts connect like this" | Static topology with groups (segments, hosts) and a description list |
| "Here is what happens to one request" | Stepped mechanism: 2–4 steps, a packet dot on the active path, outcome box per step |
| "This path is refused" | Stepped mechanism with a `denied` line and a × mark at the deciding control |
| "These parties exchange messages in this order" | Ladder: actors as columns, numbered messages top to bottom |
| "This happens over hours and the gap matters" | Timeline: lanes, bars, events, a measured span |
| "The first matching rule wins" | Rule walkthrough: packet fields, ordered rules, default rule last |

A ladder wider than about four actors stops fitting at 480 px; use a topology instead.

## Steps

1. Write the claim and the beats (what changes in each step, one outcome sentence each).
2. Name every box and line with short uppercase labels; keep full names for the description.
3. Route lines orthogonally; one colour per kind of flow, labelled in that colour.
4. Hatch the node that matters; cylinders for stores; groups as dashed rectangles.
5. Write the lead-in sentence for the page and the text alternative.
6. Run [review-figures](../review-figures/SKILL.md) before handing back.

## Project conventions

If the project documents its own rules (for example in `AGENTS.md`, `CLAUDE.md` or a contributing
guide), they win over this skill. Put the figure where the project keeps figure data and use its
builders for ladders, timelines and rule walkthroughs when they exist. Every label needs text in each
language the page ships that fits the box; run the project's figure tests.
