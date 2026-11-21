# Engineering writing skills

Agent skills for writing first-principles engineering explanations in the style of the
PlanetScale engineering blog, and for drawing the figures that carry them: stepped mechanisms,
sequence ladders, timelines, rule walkthroughs, evidence charts, explorers and simulations, in one
consistent visual language. Each skill does one job. Two umbrella skills cover the whole job when
no narrower skill fits.

These skills imitate the *method and visual grammar* of those posts. They contain no text or art
from them and are not affiliated with PlanetScale.

Not sure which one to use? Run `/ask-writing` and describe what you want.

## Install

**Claude Code plugin** (all skills, updates with `/plugin update`):

```
/plugin marketplace add Adekabang/engineering-writing-skills
/plugin install engineering-writing@engineering-writing-skills
```

Plugin skills are namespaced, for example `/engineering-writing:review-post`.

**skills CLI** (works with several agents):

```
npx skills add Adekabang/engineering-writing-skills
```

**By hand:** copy folders from `skills/` into a project's `.claude/skills/`, or into
`~/.claude/skills/` for every project. Copy `planetscale-style-blog` and
`planetscale-style-figures` together with any narrow skill, because the narrow skills link to
their shared references.

## Before you write

| Skill | Use it to |
|---|---|
| [ask-writing](skills/ask-writing/SKILL.md) | Pick the right skill for a request. Invoke it by name. |
| [plan-post](skills/plan-post/SKILL.md) | Pin one mechanism, collect evidence, choose the arc and write the outline and figure plan. |

## Main flow: write and draw

| Skill | Use it to |
|---|---|
| [planetscale-style-blog](skills/planetscale-style-blog/SKILL.md) | Write or revise a whole post or chapter, from plan to self-review. Umbrella and fallback for writing. |
| [planetscale-style-figures](skills/planetscale-style-figures/SKILL.md) | Design and build any figure. Umbrella and fallback for figures; holds the visual language and the figure-type catalogue. |
| [draw-mechanism](skills/draw-mechanism/SKILL.md) | Topologies, stepped mechanisms, ladders, timelines, rule walkthroughs. |
| [chart-evidence](skills/chart-evidence/SKILL.md) | Bar charts, log-scale comparisons and scale visuals from measured numbers. |
| [build-interactive](skills/build-interactive/SKILL.md) | Figures the reader drives: steps, explorers, simulations, what-ifs. |
| [redraw-diagram](skills/redraw-diagram/SKILL.md) | Replace an old SVG, Mermaid or text-art diagram without losing information. |

## Upkeep: check existing work

These skills only report. They change nothing unless you ask for the fixes.

| Skill | Use it to |
|---|---|
| [review-post](skills/review-post/SKILL.md) | Review a draft strictly against the writing checklist; approve or block. |
| [review-figures](skills/review-figures/SKILL.md) | Audit figures with screenshots in every step, theme and width. |
| [check-bilingual](skills/check-bilingual/SKILL.md) | Compare a page with its translation for facts, requirements, figures and anchors. |

## Using them in a project

The skills are general. Put your project's own rules in `AGENTS.md` or `CLAUDE.md` — page genres,
citation rules, languages that change together, where figure data lives, which figure component and
tests to use. Every skill has a "Project conventions" section that defers to those rules.

## License

[MIT](LICENSE).
