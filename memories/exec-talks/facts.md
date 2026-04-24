# exec-talks / facts

Confirmed facts specific to executive-audience talk structure, build patterns, and component usage.

---

## exec-spine: shared preamble injected via src:, 6 slides (2026-04-24)

`schema_version: 1` | `date: 2026-04-24`

All exec-talks share a 6-slide preamble deck at `slides/tech-talks/exec-spine.md`, injected into each deck via `src: ./exec-spine.md` in the frontmatter. The 6 spine slides appear **after** slide 1 (Title) and **before** CoreQuestion and TOC.

**Slide order (0-indexed for `$nav.go()`):**
```
0  — Title (the exec-talk's own TitleSlide)
1–6 — exec-spine slides (shared preamble, 6 slides)
7  — CoreQuestion
8  — TOC (TocSlide)
9  — Part 1 SectionOpener (first content section)
```

**Preamble does NOT count toward the 25-slide max** for body content. The spine slides are fixed infrastructure, not content slides.

**Injection frontmatter (at top of each exec-talk deck):**
```yaml
---
src: ./exec-spine.md
---
```
This appears immediately before the `<script setup>` block. The preamble slides inherit the deck's theme but have their own layout.

---

## TOC slide numbers: $nav.go() is 0-indexed (2026-04-24)

`schema_version: 1` | `date: 2026-04-24`

The `TocSlide` `slide:` values use `$nav.go(N)` navigation, which is **0-indexed** (slide 0 = first slide).

**Formula for exec-talks:**
- First SectionOpener = slide **9** (0=Title, 1–6=spine, 7=CoreQuestion, 8=TOC)
- Second SectionOpener = 9 + (body slides in Part 1)
- Third SectionOpener = previous + (body slides in Part 2)
- Fourth SectionOpener = previous + (body slides in Part 3)

**Example from exec-labor (TOC slide numbers):**
- Part 1 Hidden Labor Bill = 9
- Part 2 Exposure Ledger = 13 (9 + 3 body slides in Part 1 + 1 for the SectionOpener itself)
- Part 3 Multiplier Model = 17
- Part 4 Decision Window = 21

**Common mistake:** Using 1-indexed counts or forgetting that the SectionOpener slide itself counts toward the total when computing subsequent section slide numbers.

---

## exec-talk closing slides: BeforeAfterSlide is NOT used in exec-talks (2026-04-24)

`schema_version: 1` | `date: 2026-04-24`

Unlike standard tech-talk decks (which always end with BeforeAfterSlide → WhatYouCanDoTodaySlide → ReferencesSlide → ThankYouSlide), exec-talks use a different closing structure. The BeforeAfterSlide is a practitioner-facing component and does not fit the executive decision-making framing.

**Typical exec-talk closing sequence (from exec-labor):**
- BeforeAfterMetricsSlide (data summary — fits exec framing)
- WhatYouCanDoTodaySlide
- ReferencesSlide
- ThankYouSlide

The `WhatYouCanDoTodaySlide`, `ReferencesSlide`, and `ThankYouSlide` prop schemas are the same as in standard tech-talks — see `slides/facts.md` for full prop documentation.

---

## ThankYouSlide :cards must be on a single line (2026-04-24)

`schema_version: 1` | `date: 2026-04-24`

`ThankYouSlide :cards` is an array prop and must be written on a **single line** — multiline array props break the Vue template parser in Slidev. See `slides/facts.md` → "Multiline `:prop` array bindings break Vue template parser."

**Correct:**
```html
<ThankYouSlide :cards="[{ icon: '⏱️', value: '...', detail: '...', subdetail: '...' }, ...]" />
```

**Wrong:**
```html
<ThankYouSlide :cards="[
  { icon: '⏱️', value: '...' },
]" />
```
