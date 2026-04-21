# customization_context / facts

Confirmed facts about Copilot customization topics: primitives, hooks, memory, SDK, MCP apps, and plugins.

---

## mcp-apps deck: conformance state as of 2026-04-21

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/mcp-apps.md` is 🟢 Conformed. 1 raw HTML slide remains by design.

| Slide | Name | Status | Notes |
|---|---|---|---|
| 5 | Charts Component | `CodeWithFeaturesSlide` (partNumber=1, left, 4 features) | ✅ converted 2026-04-21 |
| 6 | Tables Component | `CodeWithFeaturesSlide` (partNumber=1, left, 4 features) | ✅ converted 2026-04-21 |
| 7 | Forms Component | `CodeWithFeaturesSlide` (partNumber=1, left, 2 features) | ✅ converted 2026-04-21; combined Forms+Trees+Cards into single slide (was two-panel left side) |
| 8 | Custom Components | `CodeWithFeaturesSlide` (partNumber=1, left, 2 features) | ✅ converted 2026-04-21; no insight (sandboxed custom component) |
| 9 | Component Decision Tree | Raw HTML | 2×2 decision grid + full-width "Don't Use When" callout — bespoke decision-tree layout |
| 11 | MCP Server Structure | `CodeWithFeaturesSlide` (partNumber=2, left, 3 features) | ✅ converted 2026-04-21 |
| 12 | Callback Handling | `CodeWithFeaturesSlide` (partNumber=2, left, 2 features) | ✅ converted 2026-04-21 |
| 13 | Configuration and Testing | `CodeWithFeaturesSlide` (partNumber=2, left, 2 features) | ✅ converted 2026-04-21 |
| 15 | Dashboard Pattern | `CodeWithFeaturesSlide` (partNumber=3, left, 2 features) | ✅ converted 2026-04-21 |
| 16 | Progressive Drill-Down | `CodeWithFeaturesSlide` (partNumber=3, left, 2 features) | ✅ converted 2026-04-21 |
| 17 | Form-Driven Workflow | `CodeWithFeaturesSlide` (partNumber=3, left, 2 features) | ✅ converted 2026-04-21 |
| 18 | Hierarchical Navigation | `CodeWithFeaturesSlide` (partNumber=3, left, 2 features) | ✅ converted 2026-04-21 |
| 20 | Use Case 1: System Metrics Dashboard | `BeforeAfterMetricsSlide` (partNumber=4, 3 metrics) | ✅ converted 2026-04-21 |
| 21 | Use Case 2: Database Query Results | `BeforeAfterMetricsSlide` (partNumber=4, 3 metrics) | ✅ converted 2026-04-21 |
| 22 | Use Case 3: Project Scaffolding Forms | `BeforeAfterMetricsSlide` (partNumber=4, 3 metrics) | ✅ converted 2026-04-21 |

Slide 9 is genuinely bespoke (2×2 decision grid + full-width warning callout) — do not attempt to force into existing components.

---

## copilot-plugins deck: conformance state as of 2026-04-21

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/copilot-plugins.md` is 🟢 Conformed. 3 raw HTML slides remain by design.

| Slide | Name | Status | Notes |
|---|---|---|---|
| 6 | Installing and Managing Plugins | `ThreeColumnCardSlide` (partNumber=1) | ✅ converted 2026-04-21 |
| 8 | CLI vs VS Code UI | `TwoColPairedConceptsSlide` (partNumber=1) | ✅ converted 2026-04-21 |
| 12 | Configuration as Code Benefits | Raw HTML | Asymmetric 2-col: stacked before/after left + tall principles card right |
| 13 | Per-Repository Configuration | `ThreeColumnCardSlide` (partNumber=2) | ✅ converted 2026-04-21; items are plain strings (plugin names) |
| 17 | Lockfile Workflow | Raw HTML | 4-col horizontal lifecycle with big numbers — no component covers horizontal step sequences |
| 18 | CI Integration | `CodeWithFeaturesSlide` (partNumber=3, left) | ✅ converted 2026-04-21 |
| 21 | Use Case — Standardized Code Review | Raw HTML | Mixed layout: prose+YAML code top, full-width 3-step workflow below |

---

## copilot-primitives deck: conformance state as of 2026-04-21

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/copilot-primitives.md` is 🟢 Conformed. 3 raw HTML slides remain by design.

| Slide | Name | Status | Notes |
|---|---|---|---|
| 10 | Skills — Templates | Raw HTML | 2×2 card grid + code block below — no single component covers both |
| 12 | Custom Prompts — Component Generator | `CodeWithFeaturesSlide` (partNumber=3, top) | ✅ converted 2026-04-21 |
| 14 | Custom Agents — Planner Example | `CodeWithFeaturesSlide` (partNumber=4, left) | ✅ converted 2026-04-21 |
| 15 | Custom Agents — Advanced Patterns | Raw HTML | 2-card asymmetric (Squad + AgentCouncil) with embedded code — ThreeColumnCardSlide requires 3 columns |
| 16 | Choosing the Right Primitive | Raw HTML | 2-col adoption guide + 4-col tag grid — two distinct layout regions, no component covers both |

Slides 15 and 16 are genuinely bespoke; do not attempt to force them into existing components. Slide 10 could split into two slides if a future code-above-cards component is created.

---

## copilot-cli deck: conformance state as of 2026-04-22

`schema_version: 1` | `date: 2026-04-22`

`slides/tech-talks/copilot-cli.md` is 🟢 Conformed. Build verified exit code 0.

13 slides converted; 8 kept raw HTML by design.

| Slide | Name | Component | progressDots |
|---|---|---|---|
| 7 | Plan Mode: The Fundamental Shift | `BeforeAfterPanelsSlide` | 1/6 cyan |
| 9 | Real-Time Steering | `TwoColPairedConceptsSlide` | 3/6 cyan |
| 11 | Operating Modes | `FourCardGridSlide` | 5/6 cyan |
| 14 | Built-in Agents | `FourCardGridSlide` | 1/6 blue |
| 15 | /fleet Fan-Out | `CodeWithFeaturesSlide` (left) | 2/6 blue |
| 16 | Cloud Delegation | `CodeWithFeaturesSlide` (left) | 3/6 blue |
| 18 | Extensibility | `ThreeColumnCardSlide` | 5/6 blue |
| 19 | Mental Model Shift | `BeforeAfterPanelsSlide` | 6/6 blue |
| 21 | How --remote Works | `CodeWithFeaturesSlide` (left) | 1/4 indigo |
| 22 | Why --remote Matters | `ThreeColumnCardSlide` | 2/4 indigo |
| 26 | Log Forensics | `CodeWithFeaturesSlide` (left) | 1/3 purple |
| 27 | Infra Patrol & Multi-Machine | `TwoColPairedConceptsSlide` | 2/3 purple |
| 28 | GitHub.com Integration | `FourCardGridSlide` | 3/3 purple |

**Kept raw HTML (8 slides):**
- Slide 4: Distance Model — `ConceptStackSlide` not yet built
- Slide 5: The 84% Problem — hero stat variant, no matching component
- Slide 8: Docker Debugging Demo — terminal block demo slide
- Slide 10: Reasoning Models — 4-tier header layout, bespoke
- Slide 12: CI/CD Automation — terminal block demo slide
- Slide 17: Context Management — asymmetric layout, no matching component
- Slide 23: Combination Patterns — `ConceptStackSlide` not yet built
- Slide 24: Walking-to-Meeting Demo — terminal block demo slide

**Do NOT touch:** ReferencesSlide (user constraint), ThankYouSlide, BeforeAfterSlide, WhatYouCanDoTodaySlide — all already use components.

---

## copilot-plugins framing: CLI-first, personal vs team infrastructure distinction (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

The copilot-plugins tech-talk uses a **CLI-first framing** throughout — every section leads with CLI commands before mentioning VS Code UI equivalents. This is an intentional structural decision.

**Key framing distinction:** `copilot plugin` commands vs `apm` orchestration. The talk explicitly separates:

- **`copilot plugin install/list/update/uninstall`** — personal toolbox, ad-hoc exploration, single plugins
- **`apm install` + `apm.yml` manifest** — team infrastructure, reproducible configuration, orchestrated stack

**The "aha moment"** the talk builds toward: understanding WHEN to use each path. Not "one is better than the other" — they serve different coordination needs.

**Why this matters for future agents:** An agent reading only the deck might treat these as interchangeable commands or focus on VS Code UI. The CLI-first structure and the personal/team distinction are deliberate pedagogical choices that need to be preserved in any slide generation or content updates.

**Mental model encoded in the demo:** The walkthrough (`demos/copilot-plugins-walkthrough.md`) uses Exercise 2 (`copilot plugin install`) for personal exploration, then Exercise 3 (`apm install`) for team setup. Exercise 6 reinforces the "which command when" table. This progression is the teaching spine.

**Cross-references:**
- Demo file: `demos/copilot-plugins-walkthrough.md`
- README: `tech-talks/copilot-plugins/README.md`
- Deck recipe: `tech-talks/copilot-plugins/deck.recipe.yml`
