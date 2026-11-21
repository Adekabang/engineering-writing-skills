---
name: plain-indonesian
description: Edit or write Indonesian technical documentation in plain language (bahasa Indonesia yang lugas) — short active sentences, one instruction per sentence, sentence-case headings, EYD, consistent "Anda", natural word order instead of translationese — while keeping established technical terms, requirement words (harus, wajib, dapat), values, code and anchors, and verifying afterwards that nothing was lost. Use when the user asks to improve Indonesian docs, fix translationese or untranslated English, apply EYD, or run a language pass over Indonesian pages.
---

# Plain Indonesian for technical documentation

The reader should understand each sentence on the first read, whether they are an expert or new to
the topic. Plain does not mean informal and does not mean shorter at any cost: keep every fact,
condition and warning. Formal Indonesian can still sound like a person speaking.

## Never change

- **Requirement strength.** *harus*, *wajib*, *tidak boleh*, *dilarang*, *sebaiknya*, *dapat*,
  *boleh*, *jangan* keep their exact force. *harus* never becomes *sebaiknya*.
- **Values and identifiers.** Numbers inside code, IDs, versions, IP addresses, ports, clause
  references, file paths, commands, config keys, URLs. (Prose numbers follow EYD, below.)
- **Conditions, exceptions, negation and order.** *hanya jika*, *kecuali*, *tidak*, *bukan*, and the
  order of steps.
- **Literal material.** Code blocks, command output, logs, quotations, product UI labels the reader
  must click (**Firewall → Aliases**), and official names (*Kementerian Komunikasi dan Digital*).
- **Anchors.** If a heading's text changes, keep its old anchor with an explicit id
  (`## Teks baru {#anchor-lama}`) where the site supports it.
- **Established technical terms.** Keep loanwords readers use at work: *firewall*, *routing*,
  *VLAN*, *backup*, *deployment*, *container*, *log*. Keep field terms even when a general style
  guide dislikes them: *dampak* in risk analysis (likelihood × impact), *penanganan insiden*.
  One term for one concept; if the project has a glossary, it decides.

## Fix

**Untranslated English**
Translate English sentences, list items, table cells, captions and link text that are not literal
material. Use the English source for meaning. Do not leave "English / Indonesia" doubled text.

**Translationese** (struktur terjemahan)
- Natural order, subject–verb–object, with a named actor:
  "Proxy menolak permintaan itu", not "Permintaan tersebut ditolak oleh proxy".
- Verbs over nominalisations: *periksa log*, not *melakukan pemeriksaan terhadap log*.
- Split noun stacks and semicolon chains into short sentences, one idea each.
- Aim for 10–20 words per sentence; split anything over about 25.

**Form of address**
The reader is *Anda* (capital A), consistently. Replace *kamu*/*-mu*. Use *kita* only where the
authors speak about themselves or narrate with the reader; where *kita* is really an instruction,
use *Anda* or an imperative. Use *kami* for the organisation.

**Words**
- *memakai*/*menggunakan* (not *memanfaatkan*, *mengoptimalkan* where not technical) ·
  *membantu* (not *memfasilitasi*) · *agar*/*supaya* (not *dalam rangka*, *guna*) ·
  *tentang*/*untuk* (not a vague *terkait*; keep *terkait* when it means "related").
- Drop office jargon and clichés: *ekosistem*, *sinergi*, *akselerasi*, *robust*, *leverage* —
  unless part of a name.
- Casual words become standard: *kalau* → *jika*, *kenapa* → *mengapa*, *tapi* → *tetapi*,
  *gampang* → *mudah*, *bila* → *jika*.
- Inclusive terms: *allowlist*/*blocklist* (not *whitelist*/*blacklist*), unless a product term.

**Symbols and abbreviations**
- `&` → *dan*; slash pairs → words (*baca atau tulis*), keeping notation such as TCP/IP, CI/CD.
- *dll.* → *dan lainnya*, or finish the list · *dsb.* → *dan sebagainya* · *mis.* → *misalnya* ·
  *yaitu* for "i.e." · *s/d* → *sampai*.
- *via* → *melalui* in prose.

**EYD in prose**
- Thousands with a dot, decimals with a comma: 1.500, 0,5, 99,5%.
- `Rp75.000`, `50%` (no space).
- Dates: *4 Juni 2026*. Ranges: *10 hingga 20 orang*, *4 sampai 8 Juni 2026*.
- Never apply this inside code, versions, IDs, IP addresses, scores written in a tool's own format
  (CVSS 9.8) or standards clauses.

**Headings and titles**
- Sentence case (*huruf kapital hanya di awal*), except proper nouns, acronyms and product names:
  *Uji konektivitas jaringan*, not *Uji Konektivitas Jaringan*.
- Translate English headings, keep the anchor.
- Link text that names another page matches that page's current Indonesian title.

**Formatting**
- Bold only for labels and defined terms, not for emphasis. No all-caps emphasis (*JANGAN*).
- Lists start with a lead-in sentence ending in a colon; one idea per item.
- Numbered steps only when order matters; each step starts with a verb (imperative).

## Read-aloud check (RASA)

Read each paragraph as if aloud:
1. **Ritmis:** does it flow, with varied sentence length, or does the reader stumble?
2. **Akurat:** is every word exactly right, with no vague *cukup*, *beberapa*, *berbagai*?
3. **Sarat makna:** does each sentence carry meaning, or is it long and empty?
4. **Alami:** does it sound like natural Indonesian, or like a translation from English?

## Verify nothing was lost

Compare the old version (for example `git show HEAD:<file>`) with the new, on every edited page:
- Count *harus*, *wajib*, *tidak boleh*, *dilarang*, *dapat*, *jangan*, *tidak*. Counts may rise when
  English is translated or sentences split; a fall needs an explanation.
- Count external and internal links; they should match.
- Compare heading anchors; every old anchor still exists.
- Compare code blocks; they are byte-identical.
- Grep for leftovers: *kamu*, ` & `, *dll.*, *mis.*, Title Case headings, English sentences.

## Project conventions

The project's own rules (`AGENTS.md`, `CLAUDE.md`, a style guide, a glossary) win over this skill.
If the page has an English source, keep both saying the same thing; report differences with
[check-bilingual](../check-bilingual/SKILL.md).

## Credit

The plain-language, EYD and RASA ideas were inspired by orepras's public "bahasa-indonesia-plain"
gist. This skill is written independently for technical documentation.
