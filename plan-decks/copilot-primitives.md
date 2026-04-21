# Deck: copilot-primitives

**Status:** 🔵 Cataloged — conversion not yet started  
**Deck file:** `slides/tech-talks/copilot-primitives.md`  
**Raw HTML slides:** 5 (out of 20 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 10 | Skills — Templates | 2×2 card grid (What/Why cards) + full-width code example block + 3-item explanation grid | `FourCardGridSlide` | Conditional |
| 12 | Custom Prompts — Component Generator Example | Large code block + 2-col grid (Usage / Consistency) | `CodeWithFeaturesSlide` | ✅ Map |
| 14 | Custom Agents — Planner Example with Handoffs | 2-col: left code block; right 2 feature cards; bottom callout | `CodeWithFeaturesSlide` | ✅ Map |
| 15 | Custom Agents — Advanced Patterns | 2-col: Squad card (icon+title+list+code) / AgentCouncil card (icon+title+list+code) + bottom callout | `ThreeColumnCardSlide` (2-col variant) | Conditional |
| 16 | Choosing the Right Primitive | 2-col adoption guide (Sequence / Mistakes) + 4-col decision tag grid | — | Conditional |

**Summary:** 2 direct maps · 3 conditional · 0 keep raw HTML

---

## Phase 2 — Conversion Order

1. Slide 12 → `<CodeWithFeaturesSlide>` (Component Generator Example)
2. Slide 14 → `<CodeWithFeaturesSlide>` (Planner Example)

---

## Phase 3 — Conditional Decisions

- **Slide 10** (Skills — Templates): 2×2 grid + code example block below. `FourCardGridSlide` covers the card grid but has no code block slot. The code block is the key learning example. → Likely keep raw HTML or split into 2 slides.
- **Slide 15** (Advanced Patterns): 2 cards (Squad + AgentCouncil), each rich with icon + list + code snippet. `ThreeColumnCardSlide` designed for 3 equal cards. If a 2-col variant exists or can be created → ✅ Map. Otherwise keep raw HTML (asymmetric pairing).
- **Slide 16** (Choosing the Right Primitive): 2-col adoption guide (sequential text) + separate 4-col tag grid. Two distinct layout regions — no single component covers both. The 4-col tag grid could use `FourCardGridSlide` if split, but the adoption guide section has no match. → Keep raw HTML or refactor into 2 slides.

---

## Notes
- Total slides: 20 (15 structural, 5 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener (parts 1–4), ThreeColumnCardSlide (slide 5), 3× CodeWithFeaturesSlide (slides 6–8), TwoColPairedConceptsSlide (slide 9), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- This deck is already highly componentized (15/20 = 75% structural)
- Only 5 raw HTML slides remain; 2 direct maps, 3 conditional
- `CodeWithFeaturesSlide` already used 3× in the structural section — slides 12 and 14 are natural additions
