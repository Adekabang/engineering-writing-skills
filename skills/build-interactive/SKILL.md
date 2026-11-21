---
name: build-interactive
description: Build a figure the reader drives — reader-stepped mechanisms with step buttons, linked-highlight explorers, parameter simulations and what-if toggles — that works without JavaScript, respects reduced motion and survives client-side navigation. Use when the user wants an interactive or animated diagram, a "try it" widget, a simulation, or asks why an interactive figure breaks after page navigation.
---

# Build an interactive figure

Tiers and build details: [../planetscale-style-figures/references/visual-language.md](../planetscale-style-figures/references/visual-language.md)
(sections "Three tiers", "Tier 2", "Tier 3", "Choosing a tier").
Catalogue, sections E and F: [../planetscale-style-figures/references/figure-types.md](../planetscale-style-figures/references/figure-types.md).

## Is interaction worth it?

Use interaction only when the reader learns more by acting: stepping through order, changing an
input, or picking an item to see what links to it. If the reader would only watch, a stepped or
static figure is enough.

## Rules

- **Reader-driven.** No autoplay. A "STEP n OF m" header, numbered step buttons and a replay.
- **No-JavaScript final state.** The server renders the last step; scripts only add the steps.
- **Reduced motion.** With `prefers-reduced-motion`, jump to states without animating packets.
- **Plays only when visible**; pauses offscreen.
- **Client-side navigation.** Initialise on the router's page-load event and mark figures as ready,
  so a second visit does not skip to the final step or lose its buttons. In Astro:
  `document.addEventListener('astro:page-load', init)` plus a `[data-ready]` guard.
- **Styles for script-created elements** must be global (scoped CSS does not reach them).
- **Text alternative** narrates every step; buttons have labels and `aria-pressed`.

## Steps

1. Write the claim and the beats, or the input and what it changes.
2. Build the static final state first and check that it reads alone.
3. Add the steps or the control.
4. Test: each step, reduced motion, dark mode, 375 px, and after navigating away and back
   ([review-figures](../review-figures/SKILL.md)).

## Project conventions

If the project documents its own rules (for example in `AGENTS.md`, `CLAUDE.md` or a contributing
guide), they win over this skill. If the project already has a figure component with steps, replay,
reduced motion and re-initialisation, reuse it. A new kind of widget (simulation, slider) needs its own
component and tests; agree on it with the user first.
