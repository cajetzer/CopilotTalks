# agent_architecture / facts

Confirmed facts about agent-teams and ACP slide decks — framing, demo identity, structural decisions an agent reading only the deck would miss.

> **On colors and chrome:** section accent colors (Part 1→cyan, Part 2→blue, Part 3→indigo, Part 4→purple) and per-card palettes are owned by `slides/tech-talks/components/useSectionTheme.ts`. Do not duplicate that mapping here — read the helper. Decks that still use raw inline Tailwind (e.g. agent-teams.md as of 2026-04-17) follow the same progression and should migrate to `SectionOpenerSlide` + Tier-1 components when touched.

---

## copilot-acp demo: uses MSBart2/cli-acp (ACP Agent Orchestrator web app)

`schema_version: 1` | `date: 2026-04-17`

The companion demo for the copilot-acp tech-talk is **not** a TypeScript SDK tutorial. It is a live walkthrough of `github.com/MSBart2/cli-acp` — an ACP Agent Orchestrator web app the author built. An agent reading only the deck will see the URL on one slide but miss the framing.

**What cli-acp is:**
- React + Vite frontend + Node.js + Express + Socket.IO backend
- Spawns one `copilot --acp --stdio` process per repository
- Orchestrator/worker role model: one coordinator, N repo-scoped workers
- Broadcast prompts to all workers; orchestrator synthesizes coalesced results
- Session persistence: save → Restore (review only) or Re-spawn (live agents)
- Dependency manifest (`acp-manifest.json`) with `dependsOn`/`dependedBy` for cross-repo context injection

**5 demo scenarios:**
1. Start app, launch orchestrator + workers (FanHub tracks as workers)
2. First broadcast + Orchestrator Focus synthesis
3. Targeted follow-up to one worker (broadcast vs. target distinction)
4. Dependency-aware routing with `acp-manifest.json`
5. Save → Restore vs. Re-spawn session lifecycle

**Source:** `demos/copilot-acp-walkthrough.md` and `github.com/MSBart2/cli-acp/blob/main/SCENARIO.md`
# agent_architecture / facts

Confirmed facts about agent-teams and ACP slide decks — structure, color, and breadcrumb decisions.

---

## agent-teams.md: Section accent color map

`schema_version: 1` | `date: 2026-04-08`

Each section in agent-teams.md has a fixed accent color. All chrome (background gradient, pill gradient, divider line, active dot + shadow color) must use the section's accent:

| Section | Accent |
|---------|--------|
| Part 1 — Subagents | cyan |
| Part 2 — Agent Teams | blue/indigo |
| Part 3 — Autonomous Execution | indigo |
| Part 4 — Multi-Model Deliberation | purple |

Mixing accents breaks visual continuity. s12 was accidentally purple (Part 4) instead of blue/indigo (Part 2) — required a full chrome correction.

**Source:** agent-teams.md — s12 color normalization fix.

---

## agent-teams.md: Breadcrumb pill naming convention

`schema_version: 1` | `date: 2026-04-08`

Section content slides use this breadcrumb pill format: `{emoji} {Section Name}: {Topic}`

| Section | Prefix |
|---------|--------|
| Part 1 — Subagents | `🧱 Subagents:` |
| Part 2 — Agent Teams | `👥 Agent Teams:` |
| Part 3 — Autonomous Execution | `🚀 Autonomous:` |
| Part 4 — Multi-Model Deliberation | `🎭 Multi-Model:` |

**Source:** agent-teams.md — all Part 2–4 breadcrumb pills (lines ~452, ~532, ~598, ~658, ~781, ~857, ~920, ~1011, ~1081, ~1147, ~1209 as of 2026-04).

---

## agent-teams.md: Section opener slides do NOT get progress dots

`schema_version: 1` | `date: 2026-04-08`

Section opener slides (Part 1, Part 2, Part 3, Part 4) use a large section number + title layout. They do **not** get pill breadcrumbs or progress dots. Only the content slides within each section receive them.

**Source:** agent-teams.md — Part 1–4 openers at lines 128, 404, 734, 969.

---

## copilot-acp.md: Deck structure and section mapping (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

**Slide count:** 25 slides (at max budget). Section opener slide numbers: Part 1=4, Part 2=9, Part 3=13, Part 4=18.

**Section arc (recipe-driven):**
- Part 1 "N×M Problem" (cyan, 4 body): HeroStat (N×M crisis) → BeforeAfterPanels (before/after ACP) → WorkflowShowdown (LSP precedent) → FourCardGrid (what ACP standardizes)
- Part 2 "Protocol Architecture" (blue, 3 body): FrameworkMappingRows (4-layer stack) → BeforeAfterMetrics (LSP analogy N×M→N+M) → ThreeColumnCard (ACP vs MCP vs LSP)
- Part 3 "SDK Ecosystem" (indigo, 4 body): AITerminalTranscript (copilot --acp --stdio) → CodeWithFeatures (14-line TypeScript SDK) → FourCardGrid (4 official SDKs) → TwoColPaired (MCP integration + flywheel)
- Part 4 "Permissions & Security" (purple, 3 body): WorkflowShowdown (permission flow) → TwoColPaired (interactive vs policy-based) → FrameworkMappingRows (enterprise security table)

**Key framing decisions:**
- N×M = the problem framing throughout (not just "lock-in") — makes the math explicit
- LSP analogy is the centerpiece of Part 2, not Part 1 — Part 1 seeds it, Part 2 pays it off
- Security section framed as "adoption enablers" not restrictions — answers "can I ship this?"

**Source:** `slides/tech-talks/copilot-acp.md`, `tech-talks/copilot-acp/deck.recipe.yml`

---

## copilot-acp demo: uses MSBart2/cli-acp (ACP Agent Orchestrator web app) (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

The companion demo for the copilot-acp tech-talk is **not** a TypeScript SDK tutorial. It is a live walkthrough of `github.com/MSBart2/cli-acp` — an ACP Agent Orchestrator web app the author built.

**What cli-acp is:**
- React + Vite frontend + Node.js + Express + Socket.IO backend
- Spawns one `copilot --acp --stdio` process per repository
- Orchestrator/worker role model: one coordinator, N repo-scoped workers
- Broadcast prompts to all workers; orchestrator synthesizes coalesced results
- Session persistence: save → Restore (review only) or Re-spawn (live agents)
- Dependency manifest (`acp-manifest.json`) with `dependsOn`/`dependedBy` for cross-repo context injection

**5 demo scenarios map to the repo's own docs:**
1. Start app, launch orchestrator + workers (FanHub tracks as workers)
2. First broadcast + Orchestrator Focus synthesis
3. Targeted follow-up to one worker (broadcast vs. target distinction)
4. Dependency-aware routing with `acp-manifest.json`
5. Save → Restore vs. Re-spawn session lifecycle

**Source:** `demos/copilot-acp-walkthrough.md` and `github.com/MSBart2/cli-acp/blob/main/SCENARIO.md`

---

## copilot-acp.md: Part 4 use-case slides structure (post 2026-04-09 session)

`schema_version: 1` | `date: 2026-04-09`

Part 4 of copilot-acp.md contains 4 slides (1 security + 3 use cases). Slide count is now **24** (was 22).

| Slide | Name | Dots | Accent |
|-------|------|------|--------|
| s16 | Permission Model | 1 of 4, cyan | blue/cyan |
| s17 | Use Case — Zed Editor Integration | 2 of 4, cyan | blue/cyan |
| s18 | Use Case — CI/CD Code Review Dashboard | 3 of 4, violet | violet/purple |
| s19 | Use Case — Polyrepo Development | 4 of 4, indigo | indigo/blue |

All three use-case slides share the same layout: pill + dots header → headline h2 → subheading p → 3-col Problem/Solution/Outcome grid (flex-col full-height cards with footer annotations) → bottom insight strip.

**Source:** copilot-acp.md — s17 split and slides s18/s19 added 2026-04-09.

---



`schema_version: 1` | `date: 2026-04-08`

| Date | Count | Change |
|------|-------|--------|
| Session start 2026-04 | 23 | baseline |
| After s11 split | 24 | Squad → team formation + memory/persistence |
| After s21 split | 25 | AgentCouncil vs Squad → decision table + combining workflow |
