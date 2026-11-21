---
name: plain-english
description: >-
  Edit or write English technical documentation in plain language — short active sentences, one
  instruction per sentence, sentence-case headings, US spelling, everyday words, inclusive
  technical terms — without changing requirements, values, code or anchors, and verify
  afterwards that nothing was lost. Use when the user asks to make English docs plainer, clearer
  or easier for non-native readers, to apply US spelling, to fix Title Case or semicolon-heavy
  prose, or to run a language pass over pages.
---

# Plain English for technical documentation

The reader may be an expert, a newcomer or a non-native speaker running the page through a
translator. Each sentence should make sense on the first read. Plain does not mean shorter at any
cost: keep every fact, condition and warning.

## Never change

- **Requirement strength.** *must*, *must not*, *should*, *may*, *can*, *never* keep their exact force.
  "You must rotate keys" never becomes "Rotate keys when you can."
- **Values and identifiers.** Numbers, units, versions, dates, IDs, IP addresses, ports, clause
  references, file paths, commands, config keys, URLs.
- **Conditions, exceptions, negation and order.** "only if", "unless", "except", "not", and the
  sequence of steps.
- **Literal material.** Code blocks, command output, logs, quotations, product UI labels the reader
  must click, and official names (keep "Ministry of Defence", "Australian Cyber Security Centre").
- **Anchors.** Other pages link to headings. If a heading's text changes, keep its old anchor with an
  explicit id (`## New text {#old-anchor}`) where the site supports it.
- **Terms.** One term for one concept. If the project has a glossary, it decides the term.

## Fix

**Sentences**
- One idea or one instruction per sentence. Split semicolon chains into separate sentences.
- Active voice with a named actor: "The proxy rejects the request", not "The request is rejected".
- Aim for 12–20 words; split anything over about 25.
- Verbs over nominalisations: "check the log", not "perform a check of the log".

**Words**
- use (not utilize, leverage) · help (not facilitate) · start (not commence, initiate) ·
  finish (not finalize) · about (not regarding) · to (not in order to) · need (not require, in prose).
  Keep a word when it is the technical term ("the client initiates the handshake").
- Drop clichés: ecosystem, robust, seamless, journey, unlock, game-changer — unless part of a name.
- Replace idioms with literal words: low-hanging fruit, ballpark, out of the box, silver bullet.
- Inclusive terms: allowlist and blocklist (not whitelist, blacklist), primary and replica for
  databases, gap (not blind spot), quick check (not sanity check). Keep a product's own term or a
  literal config directive (`blacklist` in modprobe, a "master key" in a product).
- Generic person: "they", not "he" or "he/she".

**Symbols and abbreviations**
- `&` → "and"; slash pairs → words ("read or write", not "read/write"). Keep established notation:
  TCP/IP, CI/CD, I/O, paths, units, protocol/port.
- e.g. → for example · i.e. → that is · etc. → "and so on", or finish the list.
- Ranges in prose: "3 to 6 months". Keep dashes in tables, versions, IDs and clause ranges.

**Spelling: US English**
authorize, organize, prioritize, analyze, behavior, color, center, defense, catalog, artifact,
license (noun and verb), judgment, modeling, labeled, canceled, enroll. Follow the project if it has
chosen UK spelling instead; never mix.

**Headings and titles**
- Sentence case: capitalize the first word, proper nouns, acronyms and product names only.
- Descriptive, keyword first, under about 65 characters, no final period.
- Link text that names another page matches that page's current title.

**Formatting**
- Bold only for labels and defined terms, not for emphasis. No all-caps emphasis.
- Lists start with a lead-in sentence ending in a colon; one idea per item.
- Numbered steps only when order matters; each step starts with a verb.
- Descriptive link text, never "click here" or "read more".

## Read-aloud check

After editing, read each paragraph as if aloud (the RASA check):
1. **Rhythm:** does it flow, with varied sentence length, or does the reader stumble?
2. **Accuracy:** is every word exactly right, with no vague qualifier ("quite", "various")?
3. **Substance:** does each sentence carry meaning, or is it long and empty?
4. **Authentic voice:** does it sound like a person explaining, not a template or a translation?

## Verify nothing was lost

Run these on every edited page, comparing the old version (for example `git show HEAD:<file>`)
with the new:
- Count *must*, *must not*, *should*, *may*, *never*, *do not*. Counts may rise when sentences split;
  a fall needs an explanation.
- Count external links and internal links; they should match.
- Compare heading anchors; every old anchor still exists.
- Compare code blocks; they are byte-identical.
- Grep for leftovers: UK spellings, ` & `, `e.g.`, `i.e.`, `etc.`, whitelist, blacklist, Title Case
  headings, `;` outside tables and code.

## Project conventions

The project's own rules (`AGENTS.md`, `CLAUDE.md`, a style guide, a glossary) win over this skill.
If the page has a translation, change both together or report the difference with
[check-bilingual](../check-bilingual/SKILL.md).

## Credit

The plain-language, inclusive-language and RASA ideas were inspired by orepras's public
"english-plain" gist. This skill is written independently for technical documentation.
