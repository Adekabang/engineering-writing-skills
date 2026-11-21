---
name: plan-post
description: Plan an engineering explanation before drafting — pin the one mechanism, collect real evidence, choose an arc (scale ladder, failure taxonomy, experiment-first, history-then-argument), and write a sentence-case outline with a figure plan. Use when the user wants to outline a post or chapter, decide what a page should explain, or before any long draft with planetscale-style-blog.
---

# Plan a post

The output is an outline the user can approve: one goal sentence, 6–9 headings, the evidence list
and a figure plan. No prose draft yet.

Voice and structure details are in
[../planetscale-style-blog/references/style-guide.md](../planetscale-style-blog/references/style-guide.md).

## Steps

1. **Goal sentence.** "After reading, the reader can explain how X does Y, and why the obvious
   approach fails." If you cannot write it, ask the user. One post, one mechanism; park the rest as
   "a topic for a future post".
2. **Evidence first.** List the real numbers, command output, config and primary sources you have.
   Run commands when the environment allows. Mark gaps; never fill them with invented values.
3. **Arc.** Pick one:
   - *Scale ladder*: small system → it grows → named bottlenecks → the design → full request path → what is unsolved.
   - *Failure taxonomy*: scenario → how we know it failed → the ways failure presents → why one signal is not enough → the decision → cleanup → limits.
   - *Experiment-first*: surprising result → step accounting → rule → mechanism → measured comparison → when to skip.
   - *History-then-argument*: eras → hidden cost today → numbers compared → counter-case → signs you need it.
4. **Outline.** 6–9 sentence-case H2s, each a claim or a question, 2–6 words. Under each, one line
   on what the section proves and which evidence it uses.
5. **Figure plan.** For each figure: the sentence it proves, its section, a figure type from
   [../planetscale-style-figures/references/figure-types.md](../planetscale-style-figures/references/figure-types.md),
   its tier (static, self-playing, interactive) and its 2–4 beats. Mix 2–4 types.
6. **Show the outline** to the user before drafting anything long.

## Output format

```
Goal: After reading, the reader can …
Arc: …
Evidence: - … (source or setup)   Gaps: - …
Outline:
  ## Heading — proves … — uses …
Figures:
  F1 · section 2 · stepped mechanism · interactive · proves "…" · beats: 1 … 2 … 3 …
```

## Project conventions

If the project documents its own rules (for example in `AGENTS.md`, `CLAUDE.md` or a contributing
guide), they win over this skill. They may fix the genre, the citation rules, the
languages to plan together and whether pages must be diagram-first.
