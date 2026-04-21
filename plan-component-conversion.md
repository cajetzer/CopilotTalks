# Plan: Inline HTML → Component Conversion

## TL;DR
A repeatable playbook for converting raw inline HTML slides in any tech-talk deck to standardized content components. Per-deck working files live in `plan-decks/<deck>.md`.

---

## Deck Progress

| Deck | Status | Raw slides | Working file |
|---|---|---|---|
| `copilot-cli` | � Conformed | 25 | [plan-decks/copilot-cli.md](plan-decks/copilot-cli.md) |
| `agent-teams` | � Cataloged | 14 | [plan-decks/agent-teams.md](plan-decks/agent-teams.md) |
| `agentic-journey` | � Conformed | 11 | [plan-decks/agentic-journey.md](plan-decks/agentic-journey.md) |
| `agentic-sdlc` | � Conformed | 16 | [plan-decks/agentic-sdlc.md](plan-decks/agentic-sdlc.md) |
| `agentic-workflows` | � Conformed | 7 | [plan-decks/agentic-workflows.md](plan-decks/agentic-workflows.md) |
| `copilot-acp` | � Conformed | 2 | [plan-decks/copilot-acp.md](plan-decks/copilot-acp.md) |
| `copilot-azure-mcp` | � Conformed | 11 | [plan-decks/copilot-azure-mcp.md](plan-decks/copilot-azure-mcp.md) |
| `copilot-chat-internals` | � Conformed | 7 | [plan-decks/copilot-chat-internals.md](plan-decks/copilot-chat-internals.md) |
| `copilot-code-review` | � Conformed | 14 | [plan-decks/copilot-code-review.md](plan-decks/copilot-code-review.md) |
| `copilot-hooks` | 🔵 Cataloged | 15 | [plan-decks/copilot-hooks.md](plan-decks/copilot-hooks.md) |
| `copilot-memory` | � Conformed | 13 | [plan-decks/copilot-memory.md](plan-decks/copilot-memory.md) |
| `copilot-plugins` | � Conformed | 7 | [plan-decks/copilot-plugins.md](plan-decks/copilot-plugins.md) |
| `copilot-primitives` | � Conformed | 5 | [plan-decks/copilot-primitives.md](plan-decks/copilot-primitives.md) |
| `copilot-sdk` | � Conformed | 6 | [plan-decks/copilot-sdk.md](plan-decks/copilot-sdk.md) |
| `copilot-web` | � Conformed | 10 | [plan-decks/copilot-web.md](plan-decks/copilot-web.md) |
| `enterprise-patterns` | � Conformed | 11 | [plan-decks/enterprise-patterns.md](plan-decks/enterprise-patterns.md) |
| `mcp-apps` | � Conformed | 15 | [plan-decks/mcp-apps.md](plan-decks/mcp-apps.md) |
| `vscode-latest` | � Conformed | 14 | [plan-decks/vscode-latest.md](plan-decks/vscode-latest.md) |

**Status key:** ⬜ Not started · 🟡 In Progress · 🔵 Cataloged · 🟢 Conformed · ✅ Done

---

## Component Taxonomy (reference)

### Structural Components — position-locked, never touch
Live in `slides/tech-talks/components/structure/`. Enforced by the slide generator. Never use as body content.

| Component | Deck Position |
|---|---|
| `TitleSlide` | Slide 1 |
| `CoreQuestionSlide` | Slide 2 |
| `TocSlide` | Slide 3 |
| `SectionOpenerSlide` | First slide of each Part (1–4) |
| `BeforeAfterSlide` | Closing comparison (N-3) |
| `WhatYouCanDoTodaySlide` | N-2 |
| `ReferencesSlide` | N-1 |
| `ThankYouSlide` | Last slide |

### Content Components — Tier-1 body, conversion targets
Live in `slides/tech-talks/components/`. Use for body slides between section openers.

`FourCardGridSlide` · `CodeWithFeaturesSlide` · `BeforeAfterMetricsSlide` · `BeforeAfterPanelsSlide` · `ThreeColumnCardSlide` · `ProblemSolutionOutcomeSlide` · `TwoColPairedConceptsSlide`

New components created during this work are also content-tier: standard chrome props (`partNumber`, `pillIcon`, `pillLabel`, `title`, `insight?`), no position-locking.

---

## The Playbook (run per deck)

### Phase 1 — Catalog + Pattern Map
1. Read the deck file. List every `<!-- SLIDE: -->` that is raw HTML (not a component invocation).
2. Describe each slide's visual pattern: `grid` · `code+features` · `before/after` · `terminal` · `stacked-list` · `hero-stat` · `tier-header`
3. Map each to a candidate existing component or flag `new component needed`.
4. Record the catalog in `plan-decks/<deck>.md`.

### Phase 2 — Direct Conversion + Build
- Convert all ✅ mapped slides using existing components. No component files touched.
- Build: `.\build.ps1 Tech-talks` from `slides/` → verify `[OK]` on the deck.
- Visually inspect converted slides.

### Phase 3 — Conditional Maps
- For each "Conditional" slide, inspect visually and decide: map as-is, update existing component (≤1 optional prop, no layout change), or flag as new component needed.

### Phase 4 — New Component Creation
- Create only when ≥2 slides share the same visual gap AND no existing component covers it within the update rule.
- Build after each new component. All decks must remain `[OK]`.
- New component props follow content-tier standard chrome.

### Phase 5 — Update Generator + Template
- `slides/TEMPLATE.md` — add usage examples for each new component.
- `.github/agents/slide-generator.agent.md` — add to component catalog (name, props, when-to-use).
- `slides/tech-talks/components/README.md` — add documentation block.

### Phase 6 — Final Build + Inspect
- Full build: `.\build.ps1 -Parallel` → all decks `[OK]`.
- Inspect converted slides visually.
- Mark deck ✅ in the progress table above.

---

## Rules

- Only create a new component when ≥2 slides share the same visual gap AND no existing component can absorb it with ≤1 optional prop change.
- Never update a component's fixed-count constraints (CoreQuestionSlide: 6 cards, TocSlide: 4, SectionOpenerSlide: 3, BeforeAfterSlide: 3 metrics) — use a different component instead.
- Structural components are never used as body content.
- Build must pass `[OK]` for all decks before moving to the next phase.

---

## Key Files

- `slides/tech-talks/components/` — content components
- `slides/tech-talks/components/structure/` — structural components
- `slides/tech-talks/components/README.md` — component docs
- `slides/TEMPLATE.md` — deck authoring template
- `.github/agents/slide-generator.agent.md` — generator agent
- `slides/build.ps1` — build script (run from `slides/`)
