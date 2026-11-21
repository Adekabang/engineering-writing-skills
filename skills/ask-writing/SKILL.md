---
name: ask-writing
description: >-
  Route a writing or figure request to the one right skill in this collection (planning,
  writing, drawing, charting, interactive figures, redrawing, reviewing, bilingual checks, plain
  English and Indonesian). Invoke by name when unsure which skill to use.
disable-model-invocation: true
---

# Ask: which writing skill?

> Links below point to sibling skill folders. If a skill is not installed next to this one, read it at <https://github.com/Adekabang/engineering-writing-skills/tree/main/skills/>.

Pick **one** skill for the user's request, say why in one sentence, then follow it. Read the chosen
skill's `SKILL.md` before you recommend it. Do not list the whole map back to the user.

If the request spans several stages, name the first skill and say which one comes next.

## Map

| The user says… | Use |
|---|---|
| "I want to write about X", "outline a post", "what should this chapter explain?" | [plan-post](../plan-post/SKILL.md) |
| "Write a PlanetScale-style post", "rewrite this chapter", "draft the article" | [planetscale-style-blog](../planetscale-style-blog/SKILL.md) |
| "Draw the architecture", "show the request path", "a sequence diagram of the login", "timeline of the incident", "how the firewall rules match" | [draw-mechanism](../draw-mechanism/SKILL.md) |
| "Chart these numbers", "compare the latencies", "show how much bigger" | [chart-evidence](../chart-evidence/SKILL.md) |
| "Make it interactive", "let the reader try", "a simulation of…", "click an item to highlight…" | [build-interactive](../build-interactive/SKILL.md) |
| "Replace this old SVG", "convert the ASCII diagram", "redraw the Mermaid chart" | [redraw-diagram](../redraw-diagram/SKILL.md) |
| "I need a figure" and none of the above clearly fits | [planetscale-style-figures](../planetscale-style-figures/SKILL.md) |
| "Review this draft", "is this ready?", "what's wrong with this page?" | [review-post](../review-post/SKILL.md) |
| "Check the diagrams", "the figure looks off", "screenshot the figures" | [review-figures](../review-figures/SKILL.md) |
| "Do the English and Indonesian pages match?" | [check-bilingual](../check-bilingual/SKILL.md) |
| "Make the English plainer", "US spelling", "too many semicolons" | [plain-english](../plain-english/SKILL.md) |
| "Perbaiki bahasa Indonesianya", "fix the Indonesian", "it reads like a translation" | [plain-indonesian](../plain-indonesian/SKILL.md) |

## Tie-breaks

- Reading or judging only → a review skill. Changing content → a writing or drawing skill.
- A whole post or chapter → `planetscale-style-blog` (it calls `plan-post` and the figure skills).
- One figure → the narrow figure skill; several mixed figures → `planetscale-style-figures`.
