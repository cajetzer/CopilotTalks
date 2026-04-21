# Deck: vscode-latest

**Status:** � Conformed — build verified 2026-04-21
**Deck file:** `slides/tech-talks/vscode-latest.md`
**Raw HTML slides:** 14 (out of 25 total)

---

## Phase 1 — Catalog

| Slide | Name | Pattern | Candidate Component | Verdict |
|---|---|---|---|---|
| 5 | Four Agent Types | 2×2 grid: Local / Background / Cloud / Claude (colored cards with bullets, gradient bg) | `FourCardGridSlide` | ✅ Map |
| 6 | Background Agents & Git Worktrees | 2-col (How It Works checklist / Review & Merge checklist) + JSON code block below | `TwoColPairedConceptsSlide` | Conditional |
| 7 | Subagents & Explore | 2-col (Subagents / Explore Subagent, bullets) + JSON code block + 2-row red/green comparison | `TwoColPairedConceptsSlide` | Conditional |
| 8 | Session Management | 3-col grid (/fork, /compact, Context Window) + 4-cell feature panel + JSON settings block | — | **Keep raw HTML** (3-col + feature grid + code block, multi-layer) |
| 10 | Agent Skills — Now GA | 2-col (dir tree structure / settings bullets) + JSON code block | `TwoColPairedConceptsSlide` | Conditional |
| 11 | Agent Plugins | 2-col (What's in a Plugin / How to Install) + JSON code block | `TwoColPairedConceptsSlide` | Conditional |
| 12 | /create-* Commands & /init | 2-col + 3-cell workflow panel + gradient banner | — | **Keep raw HTML** (complex multi-layer: 2-col + workflow strip + banner) |
| 13 | Org-Level Instructions & Custom Agent Controls | 2-col + YAML code block + cyan banner | — | **Keep raw HTML** (complex: 2-col + code + banner) |
| 15 | Thinking Tokens | 2-col (Visible Reasoning / Configuration settings) + JSON code block | `TwoColPairedConceptsSlide` | Conditional |
| 16 | Claude Agent SDK | 2-col (Available Features / Additional Features) + JSON code block | `TwoColPairedConceptsSlide` | Conditional |
| 17 | Copilot Memory | 2-col (What It Stores / v1.110 Enhancement) + JSON enable block | `TwoColPairedConceptsSlide` | Conditional |
| 19 | Terminal Sandboxing & Auto-Approval | 2-col (Terminal Sandboxing / YOLO Mode) + JSON settings code block | `TwoColPairedConceptsSlide` | Conditional |
| 20 | Agentic Browser Tools | 3-col mini-grid (Page Navigation / Page Content / User Interaction) + purple use-case panel with 3-step flow | `ThreeColumnCardSlide` | Conditional |
| 21 | Chat UX Improvements | 2×2 grid: Model Picker / Contextual Tips / Integrated Browser / External Indexing (4 cards) | `FourCardGridSlide` | ✅ Map |

**Summary:** 2 direct maps · 9 conditional · 3 keep raw HTML

### Keep Raw HTML rationale
- **Slide 8:** 3-col grid + 4-cell feature panel + JSON block — multi-layer composition.
- **Slide 12:** 2-col + 3-step workflow strip + gradient banner — genuinely stacked regions.
- **Slide 13:** 2-col + YAML block + cyan notification banner — multi-region composition.

---

## Phase 2 — Conversion Order

1. Slide 5 → `<FourCardGridSlide>` (Four Agent Types)
2. Slide 21 → `<FourCardGridSlide>` (Chat UX Improvements)

---

## Phase 3 — Conditional Decisions

Most conditional slides follow the same pattern: **2-col comparison + embedded JSON code block below**. The key question is whether `TwoColPairedConceptsSlide` can handle an embedded code block (JSON settings) below the two columns.

- **If yes** (e.g., via `insight` prop or a code-aware variant): slides 6, 7, 10, 11, 15, 16, 17, 19 → all ✅ Map → `TwoColPairedConceptsSlide` (8 slides in one batch)
- **If no:** keep all 8 as raw HTML — the JSON blocks are essential (they're the configuration being taught)

- **Slide 20** (Agentic Browser Tools): 3-col grid + integrated use-case panel with 3-step flow. `ThreeColumnCardSlide` covers the 3 cols; the use-case panel would need an `insight` slot. → Conditional on insight flexibility.

---

## Notes
- Total slides: 25 (11 structural, 14 raw HTML)
- Structural: Title, CoreQuestion, Toc, 4× SectionOpener (parts 1–4), BeforeAfter, WhatYouCanDoToday, References, ThankYou
- This deck is fundamentally a "new features roundup" — each section covers a recent VS Code release
- The dominant raw pattern (2-col + embedded JSON) is unique to this deck — no other deck has this volume of embedded config code
- The batch decision on `TwoColPairedConceptsSlide` + code support will determine whether this deck goes from 2→10 direct maps or stays at 2
