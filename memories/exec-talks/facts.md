# exec-talks / facts

Confirmed facts specific to executive-audience talk structure, build patterns, and component usage.

---

## exec-spine: shared preamble injected via src:, 3 slides (updated 2026-04-24)

`schema_version: 1` | `date: 2026-04-24`

All exec-talks share a 3-slide preamble deck at `slides/tech-talks/exec-spine.md`, injected into each deck via `src: ./exec-spine.md` in the frontmatter. The 3 spine slides appear **after** slide 1 (Title) and **before** CoreQuestion and TOC.

**Slide order (0-indexed for `$nav.go()`):**
```
0  — Title (the exec-talk's own TitleSlide)
1–3 — exec-spine slides (shared preamble, 3 slides)
4  — CoreQuestion
5  — TOC (TocSlide)
6  — Part 1 SectionOpener (first content section)
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
- First SectionOpener = slide **6** (0=Title, 1–3=spine, 4=CoreQuestion, 5=TOC)
- Second SectionOpener = 6 + (body slides in Part 1) + 1 (for the opener itself)
- Third SectionOpener = previous + (body slides in Part 2) + 1
- Fourth SectionOpener = previous + (body slides in Part 3) + 1

**Example from exec-delivery (TOC slide numbers, 3 body in Part1, 3 in Part2, 2 in Part3, 3 in Part4):**
- Part 1 The Shift = 6
- Part 2 The Flight Model = 10 (6 + 1 + 3)
- Part 3 The Risk = 14 (10 + 1 + 3)
- Part 4 The Decision = 17 (14 + 1 + 2)

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
