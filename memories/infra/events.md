# infra / events

Milestones, archival decisions, and major restructures.

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
All 13 body-slide archetypes are now REQUIRED. There is no inline HTML fallback. Both files updated to enforce: "Every body content slide must use one of the 13 Tier-1 components — do not write inline HTML for body slides."

Prior language ("OPTIONAL but PREFERRED", "inline HTML is still welcome for one-of-a-kind layouts") removed entirely. Future slide generation agents have no permission to emit raw HTML for body slides.

---

## copilot-cli conformed (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/copilot-cli.md` promoted to 🟢 Conformed status. 13 slides converted, 8 kept raw HTML. Build: ✓ 2.89s, exit 0.

**Converted:**
- Slides 7, 19 → `<BeforeAfterPanelsSlide>` (Parts 1, 2)
- Slides 9, 27 → `<TwoColPairedConceptsSlide>` (Parts 1, 4)
- Slides 11, 14, 28 → `<FourCardGridSlide>` (Parts 1, 2, 4)
- Slides 15, 16, 21, 26 → `<CodeWithFeaturesSlide>` codePosition=left (Parts 2, 2, 3, 4)
- Slides 18, 22 → `<ThreeColumnCardSlide>` (Parts 2, 3)

**Kept raw HTML (8 slides):** Slides 4 (Distance Model — stacked rows, ConceptStackSlide needed), 5 (84% Problem — hero-stat layout), 8 (Docker Demo — terminal block), 10 (Reasoning Models — 4-tier header), 12 (CI/CD Demo — terminal block), 17 (Context Management — asymmetric layout), 23 (Combination Patterns — ConceptStackSlide needed), 24 (Walking-to-Meeting Demo — terminal block).

**User constraint:** ReferencesSlide must not be touched — leave as-is.

**No new conversion gotchas** — all replacements matched cleanly. This deck had no orphan HTML issues. Adjacent-slide rule observed throughout.

---



`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/copilot-azure-mcp.md` promoted to 🟢 Conformed status. 7 slides converted, 4 kept raw HTML.

- **Slide 7** (Mental Model Shift) → `<TwoColPairedConceptsSlide>` partNumber=1; left=Move Away From (3 items), right=Move Toward (3 items); insight about conversational infrastructure
- **Slide 10** (The Compression Effect) → `<BeforeAfterMetricsSlide>` partNumber=2; before=Traditional Prototype Loop 4 steps / after=Plan Mode + Azure MCP 4 steps; metrics: 45 min / 8 min / 5.6×
- **Slide 11** (Rapid Environment Cloning) → `<BeforeAfterMetricsSlide>` partNumber=2; before=Manual Process (~2 hours) 4 string items / after=With Azure MCP (15 min) 4 string items; metrics: 8× / 2 hrs→15 min / 85%
- **Slide 14** (Service Selection and Verification) → `<FourCardGridSlide>` partNumber=3; 4 cards: Service Selection / Restart After Config / Verification Test / Key Points
- **Slide 16** (Understanding RBAC Inheritance) → `<TwoColPairedConceptsSlide>` partNumber=4; left=RBAC Scoping 4 `{ title, detail }` items (Reader/Contributor/Owner/Recommendation) / right=What MCP Can See 6 string items; insight about server-side enforcement
- **Slide 17** (Read-Only Mode) → `<CodeWithFeaturesSlide>` partNumber=4, codePosition=left; bash code for `az ad sp create-for-rbac`; 3 features: Verify Read-Only / Benefits / Upgrade to Write
- **Slide 18** (Subscription Boundaries) → `<CodeWithFeaturesSlide>` partNumber=4, codePosition=left; JSON `mcp-servers.json` with 2 server entries; 2 features: Trust Building Path / What to Resist
- **Slides 5, 6, 9, 13** kept raw HTML — bespoke layouts: query showcase, nested workflow cards, 4-step irregular grid, heterogeneous install/config/auth layout

**Orphan HTML issue on slide 17:** My `replace_string_in_file` oldString only captured the outer container + pill header — the title div and content grid remained as orphaned raw HTML after the component invocation. Required a second targeted removal of the orphan block. Future slide 17-style conversions: always include enough of the raw HTML in oldString to avoid leaving orphans.

**Double-backslash in JSON code prop:** Used `\\"` (two backslashes + quote) in file instead of `\"` (single backslash + quote) for inner quotes in the JSON content string. This caused Vue parser error "Expecting Unicode escape \uXXXX". Fixed by rewriting the `:code` prop with correct `\"` escaping. For JSON code props with inner quotes: use `\"` in the file, which means `\\\"` in the newString JSON parameter (not `\\\\\"`).

---



`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/copilot-web.md` promoted to 🟢 Conformed status.

- **Slide 5** (Triggering the Agent) → `<ThreeColumnCardSlide>` partNumber=1, 3 columns: GitHub.com / VS Code / GitHub Mobile, each with 2 string items + insight
- **Slide 7** (The Evidence Bundle) → `<FourCardGridSlide>` partNumber=1, 4 cards: Summary / Test Results / Files Modified / Firewall Alerts
- **Slide 10** (Effective Issue Anatomy) → `<BeforeAfterPanelsSlide>` partNumber=2, before=Weak issue / after=Effective issue; insight with 4 elements (Criteria, Scope, Context, Constraints)
- **Slide 11** (Image-Based Issue Creation) → `<ProblemSolutionOutcomeSlide>` partNumber=2, problem=Old Way (14 min) / solution=With Web Copilot (2 min) / outcome with 2 metrics
- **Slide 13** (copilot-setup-steps.yml) → `<CodeWithFeaturesSlide>` partNumber=3, codePosition=left, YAML code; 4 features: Runs Before Firewall / Testable in CI / Logs Visible / Failure-Resilient
- **Slide 14** (The Agent Firewall) → `<TwoColPairedConceptsSlide>` partNumber=3 (NOT BeforeAfterMetricsSlide — content has code block on right, no true metrics); left=Default Allowlist string items / right=Blocked Connection Log code block; insight with limitations
- **Slide 15** (Firewall Configuration Levels) → `<TwoColPairedConceptsSlide>` partNumber=3, left=Organization Level 4 `{ title, detail }` items / right=Repository Level 4 `{ title, detail }` items
- **Slide 17** (Evidence-First Review) → `<ProblemSolutionOutcomeSlide>` partNumber=4, problem=Read Bundle / solution=Review Diff / outcome=Approve or Iterate with 2 metric items
- **Slide 18** (Mobile Review) → `<CodeWithFeaturesSlide>` partNumber=4, codePosition=left, @review-enforcer markdown; 3 features: Review on Mobile / Custom Review Agent / 4 hr → 30 min
- **Slide 19** (What to Delegate) → `<BeforeAfterPanelsSlide>` partNumber=4, before=Keep Human / after=Delegate to Coding Agent (semantic color swap: red=keep, green=delegate)
- **Slides 6 & 8** kept raw HTML — slide 6: 8-step sandbox sequence in 2-column numbered layout (awaits ConceptStackSlide); slide 8: 2-region layout (Constraint/Why + 3-col Lead/Agent/Reviewer) needs 2 components

**Slide 15 orphan fix:** The `oldString` for the opening `<div>` of slide 15 only matched through `mb-3` before the title div. The title div and entire body remained as orphaned raw HTML after the component invocation. Fixed by a second replacement targeting the orphaned block end-to-end through the `---` separator.

**Build:** ✓ 2.60s, no errors.

---

## copilot-sdk conformed (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/copilot-sdk.md` promoted to 🟢 Conformed status.

- **Slide 6** (SDK Capabilities / What You Get) → `<FourCardGridSlide>` partNumber=1, 4 cards: Core Agent Features / Advanced Features / SDK-Specific Advantages / Security & Production; insight: "Same production-tested runtime as Copilot CLI — no rebuilding agent infrastructure."
- **Slide 8** (Installation & Basic Usage) → `<CodeWithFeaturesSlide>` partNumber=2, codePosition=left, Python basic chat code; 3 feature cards: Install SDK (pip/npm/go commands) / Prerequisites / First Run
- **Slide 11** (Pattern 2: Web API with SDK) → `<CodeWithFeaturesSlide>` partNumber=3, codePosition=left, Flask PR analysis code; 2 feature cards: Security (restricted tools, sandboxed dir) / Integration (webhooks, CI/CD, dashboards)
- **Slide 14** (Use Case 1: Release Engineering) → `<BeforeAfterMetricsSlide>` partNumber=4, 3 metrics: Before 2+ hrs / After 10 min / 92% reduction
- **Slide 15** (Use Case 2: Test Infrastructure) → `<BeforeAfterMetricsSlide>` partNumber=4, 3 metrics: Before 45 min / After 5 min / 60% CI blockage reduction
- **Slide 16** (Use Case 3: Code Review Bots) → `<BeforeAfterMetricsSlide>` partNumber=4, 3 metrics: 50% faster reviews / 2x PR throughput / Instant feedback
- **Slides 5, 9, 12** kept raw HTML — slide 5: 4-stage horizontal flow diagram (Application→SDK→CLI→Service) with responsibility boxes, no component match; slides 9 & 12: full Python scripts (release-notes.py, scheduled automation), await TerminalDemoSlide component

**Build:** ✓ 2.60s, no errors.

---

## copilot-chat-internals conformed (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/copilot-chat-internals.md` promoted to 🟢 Conformed status.

- **Slide 6** (Agent Debug Panel vs Chat Debug View) → `<TwoColPairedConceptsSlide>` partNumber=1, string items
- **Slide 7** (Custom Instructions Not Loading) → `<ProblemSolutionOutcomeSlide>` partNumber=1
- **Slide 10** (Thinking Tokens & Context) → `<TwoColPairedConceptsSlide>` partNumber=2, `{ title, detail }` items
- **Slide 11** (Thinking Reveals Prompt Ambiguity) → `<ProblemSolutionOutcomeSlide>` partNumber=2
- **Slide 13** (Diagnostics View & Extension Logs) → `<TwoColPairedConceptsSlide>` partNumber=3, mixed string + `{ title, detail }` items
- **Slide 14** (MCP Servers & Network Diagnostics) → `<TwoColPairedConceptsSlide>` partNumber=3
- **Slide 16** (Common Troubleshooting Workflows) → `<FourCardGridSlide>` partNumber=4
- **Slides 5 & 9** kept raw HTML — 6-card grid exceeds FourCardGridSlide limit; slide 9 pipeline stack awaits ConceptStackSlide component

**Build gotcha:** Multiple apostrophes in contractions (couldn't, weren't, didn't, Doesn't) inside single-quoted `:prop='...'` bindings each caused `Unterminated string constant`. Fixed one per build iteration. Rule reinforced: **scan all new prop strings for contractions before building** — replace with "could not", "were not", "did not", "does not".

**Build:** ✓ 2.54s, no errors.

---

## copilot-acp conformed (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/copilot-acp.md` promoted to 🟢 Conformed status.

- **Slide 18** (CI/CD Code Review Dashboard) → `<ProblemSolutionOutcomeSlide>` partNumber=4, `solution.code` used for the Python ACP session snippet
- **Slide 19** (Polyrepo Development) → `<ProblemSolutionOutcomeSlide>` partNumber=4, `solution.code` used for the bash workspace session snippet
- **Slides 8, 9, 10, 12, 13, 14, 16, 20** kept raw HTML — bidirectional sequence diagram, 4-col comparison table, numbered step sequences (1→4 across two slides), permission flow diagram, and multi-panel mixed-content orchestrator slide

Note: this deck already had `ProblemSolutionOutcomeSlide` imported and used (slide 17 — Zed Editor Integration). Slides 18/19 followed the same partNumber=4 pattern.

**Build:** ✓ 2.71s, no errors.

---

## agentic-workflows conformed (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/agentic-workflows.md` promoted to 🟢 Conformed status.

- **Slide 5** (Intent-Driven Automation) → `<FourCardGridSlide>` partNumber=1
- **Slide 6** (The Shift) → `<BeforeAfterPanelsSlide>` partNumber=1
- **Slide 8** (Three-Phase Architecture) → `<ThreeColumnCardSlide>` partNumber=2
- **Slide 9** (Markdown to YAML Example) → `<CodeWithFeaturesSlide>` partNumber=2, codePosition=top, 3 metric chips as features
- **Slide 10** (Execution Flow) → `<TwoColPairedConceptsSlide>` partNumber=2, 5-step items each side
- **Slide 15** (Use Case — Issue Triage) → `<FourCardGridSlide>` partNumber=4
- **Slide 16** (Mental Model Shift) → `<ThreeColumnCardSlide>` partNumber=4, string item arrays (8/6/5 items)
- **Slides 12 & 14** kept raw HTML — 8 cards and 6 cards respectively; FourCardGridSlide limit is exactly 4

**Build:** ✓ 2.65s, no errors.

---

## copilot-plugins conformed (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/copilot-plugins.md` promoted to 🟢 Conformed status.

- **Slide 6** (Installing and Managing Plugins) → `<ThreeColumnCardSlide>` partNumber=1, 3 columns (Install/Update/Remove)
- **Slide 8** (CLI vs VS Code UI) → `<TwoColPairedConceptsSlide>` partNumber=1, insight for sync note
- **Slide 13** (Per-Repository Configuration) → `<ThreeColumnCardSlide>` partNumber=2, string items (plugin names)
- **Slide 18** (CI Integration) → `<CodeWithFeaturesSlide>` partNumber=3, codePosition=left, 3 features
- **Slides 12, 17, 21** kept as raw HTML — asymmetric 2-col+principles, 4-col horizontal lifecycle, and mixed prose+code+3-step workflow

**Build:** ✓ 2.64s, no errors.

---

## copilot-primitives conformed (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/copilot-primitives.md` promoted to 🟢 Conformed status.

- **Slide 12** (Custom Prompts — Component Generator) → `<CodeWithFeaturesSlide>` partNumber=3, `codePosition="top"`, 2 features
- **Slide 14** (Custom Agents — Planner Example) → `<CodeWithFeaturesSlide>` partNumber=4, `codePosition="left"`, 2 features + insight bar
- **Slides 10, 15, 16** kept as raw HTML — no component covers mixed 2×2 grid+code, asymmetric 2-card+code, or 2-col guide+4-col tag-grid layouts

**Build gotcha hit:** apostrophe in `team's standards` inside a single-quoted `:code='...'` binding caused `Unterminated string constant`. Fixed by rewriting without possessive. Confirms the existing discoveries rule: bare `'` terminates a single-quoted prop attribute.

**3 raw HTML slides remain** in this deck (10, 15, 16) — candidates for new component creation if ≥2 other decks share the same gap.

---

## agentic-journey conformed (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/agentic-journey.md` promoted to 🟢 Conformed status. 6 slides converted, 5 kept raw HTML.

- **Slide 6** (Agentic Shift) → `<BeforeAfterPanelsSlide>` partNumber=1; before=Traditional AI Assistance (5 items) / after=Agentic AI (5 items); no metrics
- **Slide 8** (Planning Phase) → `<FourCardGridSlide>` partNumber=2; 4 cards: Clarification / Constraint Analysis / Task Decomposition / Execution Plan
- **Slide 12** (The Context Window Problem) → `<BeforeAfterMetricsSlide>` partNumber=3; before=Context Overload 4 items / after=Intelligent Context Management 4 items; 3 metrics
- **Slide 13** (Context Strategies) → `<ThreeColumnCardSlide>` partNumber=3; 3 columns: Scoped Instructions / Memory-Aided / Context Compression; each with `items` arrays
- **Slide 15** (Team Coordination) → `<TwoColPairedConceptsSlide>` partNumber=4; left=Parallel Agents 5 items / right=Validation Chain 5 items; insight about 40% productivity gain
- **Slide 16** (The Agentic Journey) → `<FourCardGridSlide>` partNumber=4; 4 milestone cards: First Experiment / First Win / First Workflow / First Team Adoption
- **Slides 5, 9, 11, 17, 18** kept raw HTML — 6-step horizontal sequence flow, 4-phase vertical execution with nested details, multi-panel execution transparency with progress bars, 5-phase numbered journey map, 3-tier adoption pyramid

**Build:** ✓ 2.58s, no errors.

---

## copilot-code-review conformed (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/copilot-code-review.md` promoted to 🟢 Conformed status. 7 slides converted, 7 kept raw HTML.

- **Slide 8** (Phased Rollout Strategy) → `<FourCardGridSlide>` partNumber=1; 4 cards: Pilot / Tune / Expand / Standardize; insight about phased approach reducing risk
- **Slide 12** (Balancing Automation and Human Review) → `<TwoColPairedConceptsSlide>` partNumber=2; left=Copilot Handles 6 string items / right=Humans Handle 6 string items; insight about 60% less mechanical review
- **Slide 15** (Quality Metrics — Beyond Time Savings) → `<FourCardGridSlide>` partNumber=3; 4 cards: Production Incidents / Revert Rate / Security Vulnerabilities / Faster Onboarding
- **Slide 18** (Compliance Through Instruction Files) → `<CodeWithFeaturesSlide>` partNumber=4, codePosition=left; markdown compliance.instructions.md with Security Standards + Data Protection sections; 3 features: Important Caveat / Benefits / Best Practices
- **Slide 19** (HIPAA Compliance Example) → `<CodeWithFeaturesSlide>` partNumber=4, codePosition=left; markdown hipaa.instructions.md with HIPAA Requirements / Transmission Security / Audit Compliance; 2 features: Real-World Impact / Key Patterns
- **Slide 20** (PCI-DSS Payment Security) → `<CodeWithFeaturesSlide>` partNumber=4, codePosition=left; markdown pci-dss.instructions.md with Card Data Handling / Access Control / Encryption; 2 features: E-Commerce Case Study / Key Enforcement
- **Slides 5, 6, 7, 10, 11, 14, 16, 21** kept raw HTML — security selector grid, inline diff with violation markers, 4-step numbered trigger flow, PR summary overlay, severity rubric table, live terminal output simulation, enterprise team stats panel, and SOC2 audit trail generation layout

**Slide 18 replacement failure:** Initial `oldString` was cut off at the amber caveat div opening — did not extend far enough into the unique content to match. Required re-reading the file at shifted line numbers (slide 15 removal caused ~50-line offset) then constructing a matching `oldString` from actual file content.

**Slide 19 orphan HTML:** Partial `oldString` (cut at pill badge line) left the remaining slide body as orphaned raw HTML after the `<CodeWithFeaturesSlide />` invocation. Cleared with a single targeted replacement of the orphan block (from `<span class="...">2 of 4</span>` through `</div>`) combined with the slide 20 replacement.

**Build:** ✓ 2.83s, no errors.

---

## Phase 1 catalog complete: all 18 tech-talk decks cataloged (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

All 18 raw HTML slides cataloged across all tech-talk decks. Working files created in `plan-decks/<deck>.md` for every deck. Progress table in `plan-component-conversion.md` fully populated.

**Totals:** ~185 raw HTML slides across 18 decks
**Direct maps (existing components):** ~110 slides
**Conditional:** ~40 slides
**Keep raw HTML (genuinely bespoke):** ~35 slides

**Best decks to start Phase 2 (most direct maps, no new components needed):**
1. `copilot-memory` — 12/13 direct maps, 0 keep raw
2. `enterprise-patterns` — 10/11 direct maps, 0 keep raw
3. `mcp-apps` — 13/15 direct maps (CodeWithFeaturesSlide dominates)
4. `agentic-workflows` — 8/9 direct maps, 0 keep raw

---

## copilot-plugins tech-talk created (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

New tech-talk added: **Copilot Plugins & APM: Composable AI Extensions**

**Files created:**
- `tech-talks/copilot-plugins/README.md` — CLI-first framing, distinguishes `copilot plugin` vs `apm` workflows
- `tech-talks/copilot-plugins/deck.recipe.yml` — slide generation recipe
- `demos/copilot-plugins-walkthrough.md` — 6-exercise CLI-driven demo (superseded; see fanhub-plugin entry below)
- `slides/tech-talks/copilot-plugins.md` — 21-slide deck, builds clean
- `memories/customization_context/facts.md` — new topic bench for CLI-first framing

**Section placement:** Customization & Context

**Framing decision:** CLI-first throughout. Core insight: `copilot plugin` = personal exploration, `apm` = team infrastructure as code.

---

## Slide generator updated: Tier-1 component catalog + COMPONENT-ARCHETYPES.md pre-flight (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

- `slides/tech-talks/template.md` — new "Tier-1 Body-Content Components" section with selection quick-reference table, universal props, and full prop schemas + usage examples for all 7 components. Also strengthened `&#34;`/`&quot;` entity prohibition with explanation + curly-quote alternative.
- `.github/agents/slide-generator.agent.md` — new pre-flight step 8 (read COMPONENT-ARCHETYPES.md), new "Tier-1 Body Components (PREFERRED, not required)" subsection, checklist item. Renumbered Common Mistakes step ref.
- First real-world test (copilot-plugins.md): 6/12 body slides used Tier-1 components; 4 used inline HTML for genuinely non-matching layouts. `&#34;` entity bug caught and fixed during build; one-shot repair pattern written to `infra/discoveries.md`.

---

## fanhub-plugin APM demo package created (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Created `demos/fanhub-plugin/` — a complete, installable APM plugin package sourced from the workshop module folders (Breaking Bad / ASP.NET Core / Blazor stack).

**Contents:** 28 files — `.github/copilot-instructions.md`, `docs/architecture.md`, `docs/breaking-bad-universe.md`, 6 prompts, 3 skills (including `new-card-skill` with scripts + templates), `mcp-servers/fanhub-api-server.js`, `.vscode/mcp.json`, 2 agents, `apm.yml`, `WALKTHROUGH.md`, `README.md`.

**Use:** Module 00 closing reveal. Clone fanhub-unplugged → show frustration → `apm install` → ask Copilot same question → reveal → pivot to "now let's build it."

**Key insight confirmed:** `docs/architecture.md` ships as part of the payload and is read automatically by Copilot as codebase context — the single highest-value file in the package.

**Source for all files:** `workshop/01-instructions/`, `workshop/03-custom-prompts/`, `workshop/04-agent-skills/skills/`, `workshop/05-mcp-servers/`, `workshop/06-custom-agents/`. NOT `examples/completed-config/` (that's the Node/React stack).

---

## copilot-plugins tech-talk created (2026-04-17 — SUPERSEDED by entry above)

---

## Memory store renamed and flattened: MemPalace → Workbench, prefixes dropped (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Renamed the project memory store from MemPalace to Workbench (eliminates naming collision with the `workshop/` content domain) and flattened the storage layout in two passes.

**Pass 1 \u2014 metaphor rename (via `git mv`, history preserved):**
- Skill folder: `.github/skills/mempalace/` → `.github/skills/workbench/`
- 4 memory folders: `memories/repo/wing_*` → `memories/repo/bench_*`
- 9 files: `hall_*.md` → `drawer_*.md`

**Pass 2 \u2014 flatten layout (via `git mv`):**
- Dropped the `repo/` intermediate folder; bench folders now live directly under `memories/`
- Dropped the `bench_` prefix on folders → `memories/{infra,workshop,agent_architecture,agentic_sdlc}/`
- Dropped the `drawer_` prefix on files → `{facts,events,discoveries,advice,preferences}.md`
- Merged the lone `infra/facts/slidev-subdirectory-components.md` entry into `infra/facts.md` and removed the redundant `facts/` subdirectory

**Final layout:**
```
memories/
  agent_architecture/facts.md
  agentic_sdlc/preferences.md
  infra/{facts,events,discoveries,advice}.md
  workshop/{facts,preferences}.md
```

**Content updates:**
- `SKILL.md` fully rewritten with new bench/drawer terminology and unprefixed paths
- `AGENTS.md`, `AGENTS.aaak` updated
- `slide-generator.agent.md`, `tech-talk-generator.agent.md` paths updated
- All 9 file h1 headers now `# {bench} / {drawer}` (e.g. `# infra / facts`)

**Invocation now:** `@workbench` (was `@mempalace`).

**Intentionally untouched:** `memory-plan.md` at repo root \u2014 historical planning artifact preserving the original MemPalace design rationale and the older `wing_/hall_/repo/` taxonomy.
**Same-day addendum — protocol + prune:**
- Added gate-5 (topic-specific gate) to the Content Change → Workbench Update Protocol in `SKILL.md`. Distinguishes "topic-specific framing/audience/ordering knowledge an agent reading only the deck would miss" (→ topic bench) from "we used component X / fixed a Slidev gotcha" (→ `infra`). Empty topic benches now explicitly acceptable.
- Added "Workbench Update (session end)" steps to `slide-generator.agent.md` (step 7) and `tech-talk-generator.agent.md` (step 3a) pointing back at the protocol.
- Pruned `agent_architecture/facts.md` from 4 entries to 1 (+ pointer): removed the agent-teams accent color map (now duplicated in `useSectionTheme.ts`), the breadcrumb pill convention (mechanical, visible in deck), and the copilot-acp Part 4 slide structure (now owned by Tier-1 components). Kept only the MSBart2/cli-acp demo framing entry, which is genuinely non-derivable from the deck.
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

**Production conversions completed (one slide per component proven live):**
- `copilot-acp.md`: BeforeAfterPanels ("Before vs After ACP"), FourCardGrid ("Key Capabilities"), ProblemSolutionOutcome ("Use Case — Zed")
- `copilot-primitives.md`: ThreeColumnCard ("Three Selectors"), CodeWithFeatures ×3 (Repo-Wide / Path-Specific / AGENTS.md), TwoColPairedConcepts ("Skills: Scripts")
- `copilot-hooks.md`: BeforeAfterMetrics ("HIPAA Audit Trail")
- `agent-teams.md`: TwoColPairedConcepts ("Two Modes")

**Status updated** in `slides/COMPONENT-ARCHETYPES.md` (Implementation Status section). Remaining ~68 slides await mechanical sweep using established patterns.

---

## Two-column slide conformance: Tier 1 complete — 15 of 114 slides audited and conformed (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Audited all 114 two-column capture PNGs across 17 tech-talk decks against a single reference layout (`agent-teams-s20-two-modes.png`). Classified into tiers:

- **6 already conforming** — no changes needed
- **15 easy (Tier 1)** — simple structure, bottom bar addition only
- **65 Tier 2** — right structural bones but dense content needing more rework
- **28 Out** — truly different layouts (before/after, code-heavy, asymmetric)

**Tier 1 work completed:** 11 slides edited across 5 decks (agent-teams s12/s13/s15/s17, agentic-workflows s05/s15, copilot-cli s29, copilot-hooks s11, copilot-memory s12/s13). 4 already had bottom bars. All 5 decks build clean.

**Before/after screenshots** saved to `captures/twocol-conformance/` (15 before + 11 after PNGs).

**Full audit** saved to `captures/twocol/audit-results.md` with per-slide classifications.

**Key criterion refined with user:** "less content = easier to conform" — number of cards doesn't matter, just that the slide follows a 2-col layout and can easily accept a bottom bar. Slides with title/subtitle above misplaced bars (like agent-teams s07) are NOT easy candidates.

**Next:** Tier 2 (65 slides) requires content condensing before conformance.

---

## Content slide component archetypes cataloged: 11 types cover 98% of all slides (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Audited all 17 active tech-talk decks (~192 content slides) and clustered them into 11 reusable component archetypes. Catalog saved to `slides/COMPONENT-ARCHETYPES.md` with typed props, structural rules, and 3-5 example slides per archetype.

**The 11 archetypes (by frequency):**
1. `TwoColComparisonSlide` (48, 25%) — two-column before/after or paired-concept
2. `CardGridSlide` (32, 17%) — 2×2 or 2×3 uniform card grid
3. `CodeExplainerSlide` (24, 13%) — code block + explanatory cards
4. `MultiColCardsSlide` (22, 11%) — 3-5 equal-width card columns
5. `UseCaseSlide` (16, 8%) — Problem → Solution → Outcome narrative
6. `SequentialFlowSlide` (14, 7%) — numbered step progression
7. `BeforeAfterMetricsSlide` (12, 6%) — before/after + quantified metrics
8. `TerminalDemoSlide` (8, 4%) — terminal frame + annotations
9. `HeroStatSlide` (6, 3%) — large hero stat + supporting cards
10. `DecisionMatrixSlide` (6, 3%) — grid/table comparing options
11. `ProgressionSlide` (4, 2%) — level/phase progression with detail panel

**Only 4 outlier slides** (architectural diagrams in agent-teams and agentic-sdlc) don't fit any archetype.

**Top 4 cover 66% of all slides.** Implementation priority follows this frequency order.

**Next steps:** User picks an exemplar deck, then components get built and rolled out.

---

## Section color consistency enforced across all 17 tech-talk decks (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Fixed 7 decks where content slides used wrong section colors. The canonical 4-part color sequence (from SectionOpenerSlide.vue) must be followed by ALL content slides within each section:

- **Part 1:** cyan → blue → indigo
- **Part 2:** blue → indigo → purple
- **Part 3:** indigo → purple → pink
- **Part 4:** purple → pink → rose

**5 structural elements must match per section:**
1. Background gradient: `bg-gradient-to-br from-{primary}-900/20 via-{secondary}-900/10`
2. Ambient orb: `bg-gradient-to-bl from-{primary}-500/10`
3. Pill badge: `from-{primary}-600/80 to-{secondary}-600/80`
4. Active progress dot: `bg-{primary}-400 shadow-lg shadow-{primary}-500/50`
5. Accent line: `h-px bg-gradient-to-r from-{primary}-400/60`

**Decks fixed:** copilot-acp (64 lines), copilot-sdk (19), agentic-sdlc (10), copilot-primitives (7), agentic-journey (4), enterprise-patterns (3), agentic-workflows (1). Total: 108 line changes.

**Audit script pattern:** Parse deck → find `:partNumber="N"` boundaries → check color tokens in structural elements between boundaries → report mismatches. Code review caught that accent lines were initially missed.

---

## demos/ folder created: 7 tech-talk companion walkthroughs (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Created `demos/` at repo root containing grounded hands-on walkthroughs for the 7 STRONG YES tech-talks (from `plan-tech-talk-demos.md` evaluation):

| File | Source talk | Primary demo target |
|------|-------------|--------------------|
| `copilot-cli-walkthrough.md` | tech-talks/copilot-cli | FanHub Node.js track |
| `copilot-acp-walkthrough.md` | tech-talks/copilot-acp | github.com/MSBart2/cli-acp |
| `copilot-azure-mcp-walkthrough.md` | tech-talks/copilot-azure-mcp | FanHub imagined on Azure App Service |
| `copilot-code-review-walkthrough.md` | tech-talks/copilot-code-review | Forked FanHub with Rulesets |
| `copilot-coding-agent-walkthrough.md` | tech-talks/copilot-web | Forked FanHub with copilot-setup-steps.yml |
| `agentic-sdlc-walkthrough.md` | tech-talks/agentic-sdlc | Forked FanHub + AgentRC levels |
| `agent-teams-walkthrough.md` | tech-talks/agent-teams | FanHub + Squad + AgentCouncil |

**Origin:** AgentCouncil evaluation of all 17 tech-talks; 7 STRONG YES candidates selected based on hands-on value, practitioner need, and setup-to-result loop under 1 hour. Full rationale in `plan-tech-talk-demos.md`.

---

## copilot-cli reframed around --remote: "AI at the Point of Work" (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

The `copilot-cli` tech-talk was comprehensively reframed from "Terminal-Native AI for Developers and DevOps" to **"AI at the Point of Work"** using a 3-phase collaborative council (Alpha/Opus 4.6, Beta/GPT-5.4, Gamma/GPT-5.4-mini → synthesis by Opus 4.6).

**Structural spine: "Removing Distance."** Each section removes a different constraint between you and the work:
- **Intent** → Plan Mode
- **Complexity** → /fleet fan-out
- **Context** → Auto-compaction + Memory
- **Time** → Cloud delegation (&)
- **Geography** → `--remote` (the culmination)

**Tagline:** "Start Anywhere. Steer Anywhere. Resume Anywhere."

**Key narrative lines:**
- "SSH moves your keystrokes. `--remote` moves a reasoning session."
- "The terminal was never the destination. It was the first viewport."
- "The session is the unit of work, not the shell."

**README changes (tech-talks/copilot-cli/README.md):**
- New title, core question, problem framing ("Distance Between You and the Work")
- New major section: "Remote Sessions: The Last Distance Falls"
- Distance Model table added to Mental Model Shift
- Use cases expanded from 3 → 6 (added walking-to-meeting debug, log forensics, infra patrol, multi-machine orchestration)
- 249 lines added, 44 replaced

**Slide deck changes (slides/tech-talks/copilot-cli.md):**
- Full regeneration: 32 content slides + 10 preserved appendix reference slides = 42 total
- 4-act structure: Part 1 "The Terminal Sees Reality" (cyan), Part 2 "Scaling the Reach" (blue), Part 3 "Anywhere" (indigo), Part 4 "Real-World Patterns" (purple)
- `--remote` gets 4 dedicated slides in Part 3 (how it works, why it matters, combination patterns, walking-to-meeting demo)
- Distance Model slide (slide 4) serves as the structural spine introduction
- deck.recipe.yml updated with new subtitle, tagline, and highlight moments
- Build verified clean ✅

**Cross-reference note:** The --remote section references Copilot Hooks for governance. If copilot-hooks talk changes guardrail patterns, verify alignment here.

---

## SectionOpenerSlide component created and rolled out to all 17 tech-talk decks (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

All 17 active tech-talk decks had their raw HTML Part N section opener slides replaced with a shared `SectionOpenerSlide` component. This was the largest-footprint component rollout to date (4 slides per deck × 17 decks = 68 slides replaced).

**Component location:** `slides/tech-talks/components/SectionOpenerSlide.vue`
**Import path:** `./components/SectionOpenerSlide.vue`
**Rollout script:** `slides/scripts/rollout-section-opener-slide.mjs`
**Capture script:** `slides/scripts/capture-section-openers.js` → outputs `captures/<deck>-part-N.png`

**Props:**
- `partNumber` (1–4): controls color scheme (1=cyan, 2=blue, 3=indigo, 4=purple) — **not configurable per deck**
- `title`: part title string
- `subtitle`: one-sentence description
- `cards`: exactly 3 items `{ icon, title, blurb }`
- `terminal`: `{ context, detail }` — context line + metric/outcome punchline

**Color progression is hardcoded by partNumber** — no color prop exists or should be added. Each part number has a fixed DARK_THEMES[n] and LIGHT_THEMES[n] entry.

**Template and generator updated:** `slides/tech-talks/template.md` now has a full Section Openers section. `slide-generator.agent.md` checklist updated to require the component and forbid raw HTML openers.

**68 screenshots captured** to `captures/` (`agent-teams-part-1.png` … `vscode-latest-part-4.png`).

---

## All 5 tech-talk components refactored for dark/light theme readiness (2026-04-14)\n\n`schema_version: 1` | `date: 2026-04-14`\n\nAll 5 components now use a shared `useTheme.ts` pattern. Currently hardcoded to dark. Flipping to dynamic requires one line change in `useTheme.ts`.\n\n**Files changed:**\n- `slides/tech-talks/components/useTheme.ts` — created; exports `isDark = ref(true)`\n- `TitleSlide.vue` — DARK_THEME / LIGHT_THEME + computed `t`\n- `TocSlide.vue` — DARK/LIGHT_CARD_STYLES + DARK/LIGHT_THEME + computed `cardStyles` + `t`\n- `CoreQuestionSlide.vue` — same pattern as TocSlide\n- `ThankYouSlide.vue` — DARK/LIGHT_CARD_STYLES replaces 3 helper functions; DARK/LIGHT_THEME\n- `ReferencesSlide.vue` — DARK/LIGHT_COLORS map + DARK/LIGHT_THEME + computed `colors` + `t`\n\n**Light mode color values set but untested** — palette uses same cyan\u2192blue\u2192indigo\u2192purple progression with lighter tones (`*-100/80` bg, `*-300` border, `*-700` text). Visual review needed when light mode is activated.\n\n**Build verified:** `npm run build -- tech-talks/copilot-acp.md` \u2705\n\n---\n\n## TitleSlide style props removed; TocSlide added to generator template (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

**TitleSlide cleanup:** All style pass-through props (`backgroundClass`, `orbClass`, `headingClass`, `pillClass`, `dividerClass`, `logoClass`) removed from `TitleSlide.vue`. No deck ever passed them — they were dead props. Colors are now hardcoded inline, consistent with `TocSlide` and all other components. Props reduced to: `title`, `subtitle`, `tagline`, `meta`.

**Generator template updated:** `slides/tech-talks/template.md` now includes a full `TocSlide` (slide 3) section with usage example and constraints. Required Opening Flow updated to list all 3 required opening components.

**Agent instructions updated:** `slide-generator.agent.md` now has a REQUIRED slide 3 entry for `TocSlide`, replaces the old raw-HTML TOC rules with component-only instructions, and adds slide 3 to the pre-submit checklist.

---

## TocSlide component created and rolled out to all 17 tech-talk decks (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

All 17 active tech-talk decks received a shared `TocSlide` component replacing the raw inline HTML Table of Contents slides.

**Component location:** `slides/tech-talks/components/TocSlide.vue`
**Import path:** `./components/TocSlide.vue`
**Rollout script:** `slides/scripts/rollout-toc-slide.mjs`
**Capture script:** `slides/scripts/capture-toc-slides.mjs` (spins up slidev dev per-deck, outputs to `captures/<deck>-toc.png`)

Pre-work: 3 decks required section restructuring before rollout:
- `copilot-sdk`: 3 → 4 sections (split Part 2 into Getting Started + Advanced Patterns)
- `copilot-cli`: 5 → 4 sections (merged Part 4+5 into Use Cases & Reference)
- `enterprise-patterns`: 5 → 4 sections (merged Part 4+5 into Scaling & Measurement)

**Builds verified:** `agentic-journey`, `copilot-acp`, `enterprise-patterns` ✅

---

## CoreQuestionSlide component rollout complete across all 17 tech-talk decks (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

Slide 2 (Core Question) in all 17 active tech-talk decks converted from inline HTML to the shared `CoreQuestionSlide` component. Pilot: `copilot-cli.md`. Remaining 16 done in batch.

**Cards synthesized:** each deck received 3 audience/use-case cards (row 1, with icons) + 3 insight/stat cards (row 2, preserving existing pain-point data).

**Color normalization:** `copilot-acp.md` was converted from amber/orange to standard cyan/blue during rollout.

**Template updated:** `slides/tech-talks/template.md` now marks CoreQuestionSlide as REQUIRED slide 2.

**Builds verified:** `agent-teams`, `copilot-acp`, `enterprise-patterns` all passed ✅.

---

## Tech-talk sections restructured: Agent Architecture + Agentic SDLC → Agentic Engineering (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

The two sub-groups **Agent Architecture** (🤖) and **Agentic SDLC** (🚀) were merged into a single **Agentic Engineering** (⚡) sub-group in `slides/index-custom.html` and `slides/SECTIONS.md`.

**Agentic Engineering now contains:** Agent Teams, Copilot ACP, GitHub Agentic Workflows, Agentic Journey, Agentic SDLC.

Note: Enterprise Patterns moved to **Copilot Tools** (also 2026-04-14) — it was in the old Agentic SDLC sub-group but fits better with the tools-facing audience.

Valid `section:` values as of 2026-04-14: `Copilot Tools`, `Customization & Context`, `Agentic Engineering`.

---

## Infrastructure cleanup: template paths moved, capture scripts consolidated (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

**Template files moved** from `slides/templates/` to:
- `slides/tech-talks/template.md`
- `slides/exec-talks/template.md`
- `slides/workshop/template.md`

References updated in `slides/TEMPLATE.md` and `.github/agents/slide-generator.agent.md`.

**Capture scripts consolidated.** All old capture scripts deleted (`quick-capture.js`, `recapture-*.js`, `capture-screenshots.js`, `capture-with-server.js`, `capture-thank-you-slides.js`, `capture-title-thanks.ps1`). `thankyou-screenshots/` folder deleted. Canonical script is `slides/scripts/capture-deck-slides.js` — run from `slides/`, output to `captures/` at repo root. `inspect-slide.js` also updated to output to `captures/`.

---

## vscode-latest tech-talk updated to v1.115 (2026-04-13)

`schema_version: 1` | `date: 2026-04-13`

The `vscode-latest` tech-talk README and slides were expanded to cover VS Code releases **v1.108 – v1.115** (8 releases total, up from 3).

**Key changes:**
- VS Code moved to **weekly stable releases** starting v1.111 (March 9, 2026)
- Major new features added: **Autopilot mode** (v1.111), **VS Code Agents companion app** (v1.115), **Chat Customizations editor** (v1.113), **nested subagents** (v1.113), **MCP server sandboxing** (v1.112)
- Duration changed from 30-45 minutes to 45-60 minutes
- Slides regenerated: 24 slides covering all 8 releases

**Cross-reference note:** Workshop module `06-custom-agents` covers agent sessions — verify alignment if updating either artifact.

**Files changed:**
- `tech-talks/vscode-latest/README.md` — expanded with v1.111-v1.115 content
- `slides/tech-talks/vscode-latest.md` — regenerated (24 slides)

---

## copilot-code-review tech-talk: Complete rewrite to remove hallucinations (2026-04-10)

`schema_version: 1` | `date: 2026-04-10`

The `copilot-code-review` tech-talk README and slides were completely rewritten to remove pervasive hallucinated content. The original version (dated 2026-03-19) contained fabricated configuration patterns that don't exist in the actual GitHub Copilot Code Review product.

**Hallucinations removed:**
- Fictional `copilot-review.yml` YAML config files with invented `triggers`, `severity_threshold`, `focus`, `pattern`, `require_context` schema
- Non-existent `examples/` directory with `copilot-review-metrics.yml` and `pr-workflow-guide.md`
- References to non-existent tech-talks: `../copilot-chat/` and `../copilot-workspace/`
- Fabricated compliance ruleset YAML schemas

**Rewritten to reflect actual product:**
- Configuration via **GitHub Rulesets UI** (Settings → Code and automation → Rules)
- Custom behavior via **`.github/copilot-instructions.md`** (Markdown)
- Language-specific rules via **`.github/instructions/<topic>.instructions.md`** (Markdown with YAML frontmatter containing only `applyTo` globs)

**Authoritative source:** `tech-talks/copilot-code-review/research.md` — contains verified URLs and facts from official GitHub docs. **Always regenerate from research.md** for this talk to avoid hallucination recurrence.

**Files changed:**
- `tech-talks/copilot-code-review/README.md` — rewritten via Tech Talk Generator agent + manual cleanup
- `slides/tech-talks/copilot-code-review.md` — deleted and recreated (24 slides)

---

## copilot-acp.md: Part 4 use-case slides restructured (2026-04-09)

`schema_version: 1` | `date: 2026-04-09`

Slide 17 (Zed Editor Integration) was split into three standalone slides. Deck grew from **22 → 24 slides**. Each use-case slide got visual weight additions: headline, subheading, expanded code, full-height cards with footer annotations, and a bottom insight strip. The slide count entry in the all-decks table below is now stale — copilot-acp.md is at 24 slides, not 22.

---



`schema_version: 1` | `date: 2026-04-09`

Multi-session effort completed. All 16 active tech-talk decks are at cockpit style and verified 100% clean by the Playwright harness.

| Deck | Slides | Commit |
|------|--------|--------|
| `agentic-sdlc.md` | ✅ Exemplar | — |
| `copilot-cli.md` | ✅ Prior session | — |
| `agentic-journey.md` | ✅ 21/21 | `0b0d55f` |
| `agentic-workflows.md` | ✅ 19/19 | `a5809ad` |
| `agent-teams.md` | ✅ 25/25 | `84f9ff9` |
| `copilot-acp.md` | ✅ 22/22 | committed |
| `copilot-chat-internals.md` | ✅ 19/19 | committed |
| `mcp-apps.md` | ✅ 25/25 | committed |
| `copilot-azure-mcp.md` | ✅ 21/21 | committed |
| `copilot-web.md` | ✅ 21/21 | committed |
| `terminal-sandboxing.md` | ✅ 25/25 | `d41694f` |
| `copilot-sdk.md` | ✅ 18/18 | `7510288` |
| `copilot-primitives.md` | ✅ 18/18 | `e13d3f0` |
| `copilot-memory.md` | ✅ 23/23 | `5695d5d` |
| `enterprise-patterns.md` | ✅ 22/22 | `507a335` |
| `copilot-hooks.md` | ✅ 25/25 | `d47f85e` |
| `vscode-latest.md` | ✅ 24/24 | `4374a80` |
| `copilot-code-review.md` | ✅ 24/24 | rewritten 2026-04-10 |

**Total: 18 decks, 402 slides — all clean.**

---

## Slide style refresh: tech-talk decks refreshed to cockpit style (2026-04-10 session)

`schema_version: 1` | `date: 2026-04-10`

Multi-session effort to bring all active tech-talk slide decks up to the cockpit-style exemplar (`agentic-sdlc.md`). Status at end of 2026-04-10 session:

| Deck | Status | Commit |
|------|--------|--------|
| `agentic-sdlc.md` | ✅ Exemplar (not touched) | — |
| `copilot-cli.md` | ✅ Done (prior session) | — |
| `agentic-journey.md` | ✅ Done, 21/21 clean | `0b0d55f` |
| `agentic-workflows.md` | ✅ Done, 19/19 clean | `a5809ad` |
| `agent-teams.md` | ✅ Done, 25/25 clean | `84f9ff9` |
| `copilot-acp.md` | ✅ Done (dots + overflow fixed) | committed |
| 15 remaining decks | 🔄 Not yet started | — |

Remaining: copilot-azure-mcp, copilot-chat-internals, copilot-chat, copilot-code-review, copilot-hooks, copilot-memory, copilot-primitives, copilot-sdk, copilot-web, enterprise-patterns, mcp-apps, multi-step-tasks, parallel-execution, terminal-sandboxing, vscode-latest.

**Tool built:** `slides/scripts/inspect-slide.js` — Playwright harness that scans each deck for overflow and missing progress dots. Run: `node scripts/inspect-slide.js <slug> scan` from `slides/` directory.

---
