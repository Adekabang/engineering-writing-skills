---
name: planetscale-style-blog
description: >-
  Write or revise a whole technical engineering blog post in the style of the PlanetScale
  engineering blog — a deep, first-principles explanation of one system mechanism, with a short
  hook, sentence-case headings, naive-then-better reasoning, paired numbers, honest trade-offs,
  real command output, and a figure plan that the planetscale-style-figures skill builds. Use
  when the user asks for a "PlanetScale-style" post, an engineering deep-dive blog post, a
  documentation or book chapter in that style, or a blog draft about how a system (database,
  network, security control, failover, identity, storage) actually works. For a figure or
  diagram on its own, use planetscale-style-figures instead. Umbrella skill: for only an outline
  use plan-post, for only a review use review-post.
---

# PlanetScale-style engineering blog post

This skill writes engineering posts that teach one mechanism well. The model is the
PlanetScale engineering blog, for example:

- "Making 768 servers look like 1" (Ben Dicken) — a scale ladder that ends in a proxy/routing design.
- "Designing a reliable unplanned failover" (Shlomi Noach) — a failure-case taxonomy that ends in a safe promotion design.
- "What gets TOASTed in Postgres", "The hidden latency inside your database",
  "Anatomy of a (Postgres) search engine", "When to choose x86-64 vs aarch64".

Imitate the *method and voice*. Do not copy sentences, titles, diagrams, or brand
elements from those posts. Do not present the draft as a PlanetScale publication.

Read [references/style-guide.md](references/style-guide.md) before drafting. It holds
the detailed voice rules, phrase patterns, and per-post structure notes.

This skill owns the whole post: the mechanism, the argument, the voice, the structure, the
evidence and *which* figures the post needs. Drawing and building those figures is the job of
the [planetscale-style-figures](../planetscale-style-figures/SKILL.md) skill, which can also be
invoked on its own. Hand it the figure plan from step 3.

## Workflow

Steps 1–3 are the [plan-post](../plan-post/SKILL.md) skill and step 6 is the
[review-post](../review-post/SKILL.md) skill; follow them for those stages.

1. **Pin the one mechanism.** Write one sentence: "After reading, the reader can explain
   how X does Y, and why the obvious approach fails." If you cannot write it, ask the
   user. One post explains one mechanism; spin off the rest as "a topic for a future post".
2. **Collect evidence before prose.** Gather real numbers, real command output, real
   config, and primary sources. Run commands when the environment allows. Never invent
   output, benchmark results, or latencies. Mark any illustrative figure as illustrative.
3. **Choose the arc** (see the templates below) and write an outline of 6–9 sentence-case
   H2 headings plus a figure plan: for each figure, the claim it proves, the section it sits in,
   a figure type and tier, and its beats (see "Figures in the post"). Show the outline to the user
   for a long post before full drafting.
4. **Draft** following the voice rules. Target 1,800–3,000 words.
5. **Build the figures** with the planetscale-style-figures skill, from the figure plan.
   Typical counts: 3–7 static or animated figures, or up to ~12 small interactive ones for a
   scale-ladder post. Then reread the prose around each figure: the lead-in sentence and the
   paragraph after it must match what the figure finally shows.
6. **Self-review** with the checklist at the end of this file and fix every miss.

## Anatomy of a post

- **Title:** specific and concrete. A declarative claim, a "how/when/what" question, or a
  wry phrase with a number in it. Sentence case.
- **Deck (description):** one sentence that states the thesis. Not a summary of sections.
- **Hook (first 1–3 short paragraphs):** one of
  - a short declarative line that names a surprising fact or scale;
  - a reproducible experiment with a surprising result;
  - a callback to a previous post ("Last time we covered the planned case. This one is harder.");
  - a plain definition followed by the thing you should not do.
- **Problem framing:** state the constraint and the naive approach. Show exactly why the
  naive approach fails, with a concrete scenario.
- **First principles:** build up from the simplest system (one server, one row, one
  packet). Add one complication per section.
- **Mechanism:** the real design, step by step. Number the steps when order matters.
- **Trade-offs and failure modes:** what it costs, when it breaks, and what it does not
  solve. Include the honest "you might not need this" case.
- **Decision guidance:** "Which one to pick", "When to skip X", or "Signs you need X".
- **Close:** a short summary of the principles, one stated limit, a pointer to a
  follow-up. An optional one-line sign-off in the post's own voice.

## Arc templates

- **Scale ladder:** small system → it grows → three named bottlenecks (H3 each) → the
  design → the full request path as a numbered list → what is still unsolved.
- **Failure taxonomy:** scenario → "How do we know it failed?" → the ways failure
  presents → why one signal is not enough → the decision → the mechanics → cleanup of the
  old component → summary and limits.
- **Experiment-first:** surprising result → byte/step accounting → threshold or rule →
  mechanism → measured comparison with the setup stated → when to skip → decision chart.
- **History-then-argument:** how we got here (eras as H3s) → the hidden cost today →
  numbers and money compared → counter-case → signs you need it.

## Voice rules (short form)

- "We" is the team that built or studied the system. "You" is the reader. Use "Let's"
  to start a walkthrough.
- Short paragraphs: 1–4 sentences. Single-sentence paragraphs for emphasis.
- Mix short punchy sentences with 20–35 word explanatory sentences.
- State strong claims flatly, then qualify the specific claim that needs it
  ("usually", "on this workload"). Do not hedge everything.
- Humor is dry and one clause long, then back to mechanics. No jokes as paragraphs.
- Define a term in **bold** at first use. Use *italics* for stress only.
- Give numbers with units and a comparison: "10–20 ms for an HDD random read vs ≤1 ms for
  an in-datacenter round trip". Never "much faster".
- Every design choice names its cost.
- Headings: sentence case, 2–6 words, often a question or a blunt claim.
- Prose first. Bullets only for 3–5 enumerated cases. Avoid Markdown tables in the body
  unless the data is truly tabular; prefer a code block of real output.
- No emojis, no hype words ("blazing", "revolutionary", "seamless"), at most one or two
  exclamation marks in the whole post. Product mentions stay restrained and late.

## Code and output

- Show real commands and their real output, trimmed with `...` where needed.
- Make experiments reproducible: versions, seeds, data sizes, hardware.
- Follow a code block with a short explanation of what to notice in it.

## Figures in the post

Figures carry the argument in these posts, often more than the prose. Plan them with the text,
not after it:

- **One figure per idea or stage.** Each figure proves one sentence of the post. Scale-ladder
  posts use many small figures (10+), not a few big ones.
- **Show the mechanism at the moment the prose needs it.** The naive approach failing, the
  request path, the failure unfolding, the measured result. Do not save all figures for the end.
- **Vary the type with the claim.** Structure, mechanism over time, quantity, evidence chart,
  simulation, explorer. Mix 2–4 types; a post made only of box-and-line diagrams is a smell.
  The catalogue is in the planetscale-style-figures skill.
- **Draw, don't tabulate.** A table, numbered list or timeline in a box is text, not a figure.
  Keep a table only for a true side-by-side comparison, at most one per post.
- **Write around each figure.** Introduce it with a sentence ending in a colon, or refer to it
  ("in the figure above"). Invite interaction next to a widget ("Step through the failover").
  After it, say what to notice in one or two sentences.
- **Evidence figures need real data.** Charts and bars use measured values with the setup stated,
  the same rule as for command output.

For the visual language, tiers, accessibility and the build itself, use
[planetscale-style-figures](../planetscale-style-figures/SKILL.md).

## Project conventions

If the project documents its own rules (for example in `AGENTS.md`, `CLAUDE.md` or a contributing
guide), they win over this skill.
Look there for the page genre, citation rules, languages that must change together, components
to use, and where figures live. Without such rules, write plain Markdown, cite a public primary
source near each conceptual claim, and do not repeat the title or description as the first paragraph.

## Self-review checklist

- [ ] One mechanism. The one-sentence goal from step 1 is met.
- [ ] The hook is under ~60 words and is not the deck repeated.
- [ ] The naive approach appears and fails for a concrete, stated reason.
- [ ] Every number has a unit, a comparison, and a source or a stated setup.
- [ ] No invented output or benchmark. Illustrative values are labelled.
- [ ] Every design choice states its cost; there is a "you might not need this" or a limit.
- [ ] Headings are sentence case; 6–9 H2s; no heading is a generic "Introduction".
- [ ] Paragraphs are ≤4 sentences; bullets are used only for enumerations.
- [ ] Every figure in the plan proves one sentence of the post, sits where that sentence is,
      and has a lead-in and a "what to notice" sentence.
- [ ] Figure types vary with the claims; every chart names its data source.
- [ ] Each figure passed the planetscale-style-figures checklist.
- [ ] No emojis, hype, or copied PlanetScale text.
- [ ] The close has a summary, one limit, and a pointer forward.
