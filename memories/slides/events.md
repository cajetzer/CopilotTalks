# slides / events

Milestones for the Slidev slide system, component infrastructure, and build tooling.

---

## 5 new Tier-1 components added + inline HTML mandate (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

Tier-1 body component catalog expanded from 8 to 13. All 5 new components are fully implemented with dark/light theming, `progressDots`, and `partNumber`.

**New components (all in `slides/tech-talks/components/`):**
- `WorkflowShowdownStepsSlide` — side-by-side before/after workflow steps with numbered steps
- `MaturityJourneyRoadmapSlide` — horizontal maturity arc (e.g. L0→L3) with callouts
- `AITerminalTranscriptSlide` — AI terminal / shell transcript display with syntax regions
- `MaturityLevelDrilldownSlide` — single-level drilldown: label + bullets per maturity stage
- `FrameworkMappingRowsSlide` — taxonomy / classification rows (e.g. dimension × category grid)

**Policy change — `slide-generator.agent.md` and `slides/tech-talks/template.md` updated:**
All 13 body-slide archetypes are now REQUIRED. There is no inline HTML fallback.

---

## Slide generator updated: Tier-1 component catalog + COMPONENT-ARCHETYPES.md pre-flight (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

- `slides/tech-talks/template.md` — new "Tier-1 Body-Content Components" section with selection quick-reference table, universal props, and full prop schemas + usage examples for all 7 components.
- `.github/agents/slide-generator.agent.md` — new pre-flight step 8 (read COMPONENT-ARCHETYPES.md), new "Tier-1 Body Components" subsection.

---

## Memory store renamed and flattened: MemPalace → Workbench, prefixes dropped (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Renamed the project memory store from MemPalace to Workbench. Flattened storage layout:
- Skill folder: `.github/skills/mempalace/` → `.github/skills/workbench/`
- `memories/repo/wing_*` → `memories/repo/bench_*`
- `hall_*.md` → `drawer_*.md`
- Dropped the `repo/` intermediate folder; bench folders now live directly under `memories/`
- Dropped the `bench_` prefix on folders
- Dropped the `drawer_` prefix on files

**Invocation now:** `@workbench` (was `@mempalace`).

---

## Tier-1 slide components shipped: 7 reusable archetypes live in 4 decks (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Built and shipped the 7 highest-coverage components from `slides/COMPONENT-ARCHETYPES.md` Tier-1 list, plus a shared `useSectionTheme.ts` helper. All 27/27 decks build clean.

**Components in `slides/tech-talks/components/`:**
- `BeforeAfterMetricsSlide.vue` (14 target slides)
- `BeforeAfterPanelsSlide.vue` (12)
- `CodeWithFeaturesSlide.vue` (12; supports `codePosition: 'left' | 'top'`)
- `ThreeColumnCardSlide.vue` (10)
- `FourCardGridSlide.vue` (10)
- `TwoColPairedConceptsSlide.vue` (10)
- `ProblemSolutionOutcomeSlide.vue` (10)

---

## Two-column slide conformance: Tier 1 complete — 15 of 114 slides audited and conformed (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Audited all 114 two-column capture PNGs across 17 tech-talk decks. **Tier 1 work completed:** 11 slides edited across 5 decks. All 5 decks build clean.

- 6 already conforming — no changes needed
- 15 easy (Tier 1) — simple structure, bottom bar addition only
- 65 Tier 2 — right structural bones but dense content needing more rework
- 28 Out — truly different layouts

---

## Content slide component archetypes cataloged: 11 types cover 98% of all slides (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Audited all 17 active tech-talk decks (~192 content slides) and clustered them into 11 reusable component archetypes. Catalog saved to `slides/COMPONENT-ARCHETYPES.md`.

**Top 4 cover 66% of all slides:** TwoColComparisonSlide (25%), CardGridSlide (17%), CodeExplainerSlide (13%), MultiColCardsSlide (11%).

---

## Section color consistency enforced across all 17 tech-talk decks (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Fixed 7 decks where content slides used wrong section colors. **Decks fixed:** copilot-acp (64 lines), copilot-sdk (19), agentic-sdlc (10), copilot-primitives (7), agentic-journey (4), enterprise-patterns (3), agentic-workflows (1). Total: 108 line changes.

---

## SectionOpenerSlide component created and rolled out to all 17 tech-talk decks (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

All 17 active tech-talk decks had their raw HTML Part N section opener slides replaced with a shared `SectionOpenerSlide` component (4 slides per deck × 17 decks = 68 slides replaced).

**Component location:** `slides/tech-talks/components/SectionOpenerSlide.vue`
**Rollout script:** `slides/scripts/rollout-section-opener-slide.mjs`
**Color progression is hardcoded by partNumber** — no color prop exists or should be added.

---

## BeforeAfterSlide component simplified: hardcoded labels reduce prop complexity (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

Removed `leftLabel` and `rightLabel` props from BeforeAfterSlide component. Labels now hardcoded as "Before" and "After". All 17 tech-talk decks updated. Slide comment standardized to `<!-- SLIDE: Before/After -->` across all decks.

---

## All 5 tech-talk components refactored for dark/light theme readiness (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

All 5 components now use a shared `useTheme.ts` pattern. Currently hardcoded to dark. Flipping to dynamic requires one line change in `useTheme.ts`.

**Files changed:** `useTheme.ts` (created), `TitleSlide.vue`, `TocSlide.vue`, `CoreQuestionSlide.vue`, `ThankYouSlide.vue`, `ReferencesSlide.vue`.

---

## TitleSlide style props removed; TocSlide added to generator template (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

All style pass-through props (`backgroundClass`, `orbClass`, `headingClass`, `pillClass`, `dividerClass`, `logoClass`) removed from `TitleSlide.vue` — no deck ever passed them. Generator template updated to include full `TocSlide` usage example. `slide-generator.agent.md` updated with REQUIRED slide 3 entry.

---

## TocSlide component created and rolled out to all 17 tech-talk decks (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

All 17 active tech-talk decks received a shared `TocSlide` component replacing the raw inline HTML Table of Contents slides. Pre-work: 3 decks required section restructuring before rollout (copilot-sdk: 3→4 sections; copilot-cli: 5→4 sections; enterprise-patterns: 5→4 sections).

**Rollout script:** `slides/scripts/rollout-toc-slide.mjs`

---

## CoreQuestionSlide component rollout complete across all 17 tech-talk decks (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

Slide 2 (Core Question) in all 17 active tech-talk decks converted from inline HTML to the shared `CoreQuestionSlide` component. copilot-acp normalized from amber/orange to standard cyan/blue during rollout.

---

## Tech-talk sections restructured: Agent Architecture + Agentic SDLC → Agentic Engineering (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

The two sub-groups **Agent Architecture** (🤖) and **Agentic SDLC** (🚀) were merged into a single **Agentic Engineering** (⚡) sub-group in `slides/index-custom.html` and `slides/SECTIONS.md`.

**Valid `section:` values as of 2026-04-14:** `Copilot Tools`, `Customization & Context`, `Agentic Engineering`.

---

## Infrastructure cleanup: template paths moved, capture scripts consolidated (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

**Template files moved** from `slides/templates/` to `slides/tech-talks/template.md`, `slides/exec-talks/template.md`, `slides/workshop/template.md`.

**Capture scripts consolidated.** All old capture scripts deleted. Canonical script is `slides/scripts/capture-deck-slides.js`.

---

## All 18 tech-talk decks at cockpit style: complete (2026-04-09)

`schema_version: 1` | `date: 2026-04-09`

Multi-session effort completed. All 18 active tech-talk decks verified 100% clean. Total: 18 decks, 402 slides — all clean.

| Deck | Slides |
|------|--------|
| `agentic-sdlc.md` | ✅ Exemplar |
| `copilot-cli.md` | ✅ |
| `agentic-journey.md` | ✅ 21/21 |
| `agentic-workflows.md` | ✅ 19/19 |
| `agent-teams.md` | ✅ 25/25 |
| `copilot-acp.md` | ✅ 22/22 |
| `copilot-chat-internals.md` | ✅ 19/19 |
| `mcp-apps.md` | ✅ 25/25 |
| `copilot-azure-mcp.md` | ✅ 21/21 |
| `copilot-web.md` | ✅ 21/21 |
| `terminal-sandboxing.md` | ✅ 25/25 |
| `copilot-sdk.md` | ✅ 18/18 |
| `copilot-primitives.md` | ✅ 18/18 |
| `copilot-memory.md` | ✅ 23/23 |
| `enterprise-patterns.md` | ✅ 22/22 |
| `copilot-hooks.md` | ✅ 25/25 |
| `vscode-latest.md` | ✅ 24/24 |
| `copilot-code-review.md` | ✅ 24/24 |
