---
name: review-post
description: Strict read-only review of a draft or published page against the PlanetScale-style writing checklist — one mechanism, hook, naive-then-better reasoning, numbers with units and sources, costs and limits, headings, paragraph length, figure placement — ending in Approve or Block with a Before | After | Why table. Use when the user asks to review a post, judge whether a chapter is ready, or find what is wrong with a page. Does not edit.
---

# Review a post

Read-only. Report; do not edit unless the user then asks for the fixes (use
[planetscale-style-blog](../planetscale-style-blog/SKILL.md) for that).

Standards: the checklist in [../planetscale-style-blog/SKILL.md](../planetscale-style-blog/SKILL.md)
and the voice rules in [../planetscale-style-blog/references/style-guide.md](../planetscale-style-blog/references/style-guide.md).

## Check, in this order

1. **Mechanism.** Can you write the one-sentence goal from the text alone? If not, Block.
2. **Opening.** Hook under about 60 words, not a repeat of the title or description.
3. **Reasoning.** The naive approach appears and fails for a concrete, stated reason.
4. **Evidence.** Every number has a unit, a comparison and a source or setup. Any output that looks
   invented, or illustrative values that are not labelled, means Block.
5. **Honesty.** Every design choice names its cost; there is a limit or "you might not need this".
6. **Shape.** 6–9 sentence-case H2s, no generic "Introduction"; paragraphs of 1–4 sentences;
   bullets only for real enumerations.
7. **Figures.** Each proves one sentence, sits where that sentence is, has a lead-in and a
   "what to notice" line. Types vary. (For drawing quality, use [review-figures](../review-figures/SKILL.md).)
8. **Close.** Summary, one limit, a pointer forward.

## Output

Start with **Approve** or **Block** and one sentence why. Then:

| Before | After | Why |
|---|---|---|
| quoted text or "missing: …" | the suggested replacement | the rule it breaks |

Most severe first; at most 15 rows. Block when any step 1, 4 or 5 issue exists.

## Project rules

Also check the project's own writing rules (`AGENTS.md`, `CLAUDE.md`, a style guide): genre, citation
rules, the distinction between a source requirement and the project's own choice, and every language
version the page must have. For parity between language versions, use
[check-bilingual](../check-bilingual/SKILL.md). If plain-language skills are installed, point to them for
sentence-level language fixes.
