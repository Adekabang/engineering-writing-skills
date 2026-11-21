---
name: check-bilingual
description: Read-only comparison of a page with its translation (for example English and Indonesian) — facts, numbers, requirement words (must, should, may), conditions, links, heading anchors, figures and untranslated text — reporting every mismatch. Use when the user asks whether the English and Indonesian pages match, after editing one language, or before merging a bilingual change.
---

# Check bilingual parity

Read-only. Report mismatches; do not fix unless asked.

Find the two files from the project's convention (for example `docs/page.md` and `docs/id/page.md`);
if it is not documented, ask. The examples below use English and Indonesian; map the requirement words
to the languages you compare.

## Compare, section by section

1. **Structure.** Same headings in the same order; same number of lists, tables, rows and columns.
2. **Facts and values.** Numbers, units, versions, dates, IDs, IP addresses, ports and clause
   references are identical.
3. **Requirement words.** must ↔ *harus*/*wajib*, must not ↔ *tidak boleh*/*dilarang*,
   should ↔ *sebaiknya*/*seharusnya*, may/can ↔ *dapat*/*boleh*. A change in strength is a mismatch.
4. **Conditions, exceptions and negation.** "only if", "unless", "except", "not" survive in both.
5. **Links.** Same targets (with the locale prefix the project uses), same anchors, same sources.
6. **Figures.** The same `<Figure figure="…">` keys in the same places, with `language` set per page.
7. **Untranslated text.** English sentences left in the Indonesian page outside code, quotes and
   product UI labels.
8. **Anchors.** Explicit `{#id}` anchors that other pages link to exist in both.

A quick structural pass helps first: compare heading lists, `<Figure` lines and URL lists of both
files, then read the sections that differ.

## Output

| Section | English | Indonesian | Problem |
|---|---|---|---|

Most severe first: changed requirement strength or values, then missing facts, then links and
figures, then style. End with "No mismatches found" when that is true, and say which sections you read.
