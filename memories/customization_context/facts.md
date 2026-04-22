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

## copilot-hooks deck: structure and section mapping (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

**Slide count:** 23 slides. Section opener slide numbers: Part 1=4, Part 2=7, Part 3=12, Part 4=16.

**Section arc (recipe-driven):**
- Part 1 "Phase 1: Lifecycle Control" (cyan, 2 body): FrameworkMappingRows (8 lifecycle events — label ≤13, description ≤70, tag shows "⚡ Prevents" for PreToolUse only) → CodeWithFeatures (JSON hook config format + 3 config fields)
- Part 2 "Phase 2: PreToolUse Enforcement" (blue, 4 body): HeroStat (<2s, the only preventive hook — 4 supporting cards for deny/ask/updatedInput/additionalContext) → CodeWithFeatures (deny response JSON format + updatedInput shape) → AITerminalTranscript (security denial demo: rm -rf blocked in 1.8s) → TwoColPaired (deny+ask vs allow+updatedInput — three risk tiers)
- Part 3 "Phase 3: Observability & Audit" (indigo, 3 body): CodeWithFeatures (JSON Lines audit.jsonl + jq queries) → FourCardGrid (4 compliance benefits: 100% coverage, jq, append-only, SIEM) → TwoColPaired (SessionStart context injection vs PostToolUse quality gates)
- Part 4 "Phase 4: Real-World Patterns" (purple, 3 body): ThreeColumnCard (HIPAA/SOC2/Code Quality configs) → FrameworkMappingRows (4 patterns: Multi-Layer/Quality Gate/Env Policies/Ctx Injection) → WorkflowShowdown (manual governance vs hooks)

**Key framing decisions:**
- Central insight is the "PreToolUse is the only hook that prevents" distinction — this lands in the HeroStat (Part 2 slide 1) and drives the entire Part 2 narrative
- The AITerminalTranscript in Part 2 shows the actual developer experience of a security denial — keeps the section concrete after the config-heavy slide before it
- Part 3 is labeled "Observability & Audit" (shortened from recipe name for SectionOpenerSlide title ≤40 chars) — recipe name is "Phase 3: Observability & Audit Trail"
- Part 4 ThreeColumnCard groups HIPAA, SOC2, and Code Quality as the three deployable compliance patterns — each has 4 concrete bullet items

**Build gotcha:** `don't` written as `don\'t` inside single-quoted `:features='[...]'` prop terminates the HTML attribute at the apostrophe — backslash is not an escape in HTML attribute parsing. Fix: always rewrite contractions to full words (`do not`, `cannot`, `will not`) in single-quoted prop values. This is a variant of the general apostrophe rule.

**Section value:** `Customization & Context`

**Source:** `slides/tech-talks/copilot-hooks.md`, `tech-talks/copilot-hooks/deck.recipe.yml`

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

---

## copilot-memory deck: generated 2026-04-22

`schema_version: 1` | `date: 2026-04-22`

`slides/tech-talks/copilot-memory.md` — 24 slides, 🟢 clean build, zero warnings.

**Section:** `Customization & Context`

**Arc:** Hook (stateless pain) → Mechanism → Activation → Decision framework

**Structure:**

| Part | Section | Emphasis | Slides | Components |
|---|---|---|---|---|
| 1 (cyan) | How Copilot Memory Works | high | 4 | FrameworkMappingRows, TwoColPaired, FourCardGrid, HeroStat |
| 2 (blue) | Enabling and Managing Memory | medium | 2 | CodeWithFeatures, FourCardGrid |
| 3 (indigo) | What to Store in Memory | high | 4 | FourCardGrid ×2, ThreeColumnCard, TwoColPaired |
| 4 (purple) | Privacy, Security and Usage | medium-high | 3 | TwoColPaired, FourCardGrid, HeroStat |

**TOC slide numbers:** Part 1=4, Part 2=9, Part 3=12, Part 4=17

**Highlight moments encoded:**
- Semantic retrieval: "prefer functional components" activates even when you never say "functional" → Part 1 HeroStat insight
- One toggle = cross-session persistence across VS Code, GitHub.com, CLI → Part 2 CodeWithFeatures
- 2-minute investment / permanent elimination of context warm-up → Part 4 HeroStat (99x ROI hero)
- Memory (personal) + Custom Instructions (team) compose cleanly → Part 3 TwoColPaired, BeforeAfterSlide
- 28-day auto-expiration → Part 1 HeroStat (hero value)
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
