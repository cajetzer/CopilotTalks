# MemPalace Implementation Plan for CopilotTraining

*Synthesized from 3-agent collaborative council + rubber-duck critique*

---

## The Core Problem

207K characters of institutional knowledge squeezed through a 30K character window. The current fix (condensed `.github/` stubs + full `/docs/` backups) is a compression hack, not a memory architecture. Four root problems persist:

1. **Session Amnesia** — every agent session starts cold; decisions vanish
2. **Cross-Content Consistency Drift** — 21 active talks, 7 modules evolving independently
3. **Agent Expertise Decay** — slide-generator rediscovers BOM encoding and wrapper balance from scratch every session
4. **Editorial Memory Loss** — *why* talks were archived, *why* the voice guide exists — lives only in git blame

---

## Best Uses / Benefits

| # | Benefit | Concrete Example |
|---|---------|-----------------|
| 1 | **Recover editorial memory** | "Why did we archive subagents?" → instant answer, not `git log --all --grep` archaeology |
| 2 | **Preserve agent expertise** | Slide-generator remembers BOM encoding breaks Slidev frontmatter, cockpit patterns — without re-reading 44K of instructions |
| 3 | **Reuse proven exemplars** | "Find the best deck opener" → retrieves agentic-sdlc S1 pattern immediately |
| 4 | **Reduce context bloat** | Move institutional knowledge OUT of `.github/` stubs INTO the palace; stubs stay lean |
| 5 | **Active governance** | Detect drift: "Module 05 and mcp-apps talk both cover MCP setup — are they consistent?" |

---

## Four-Layer Memory Model

```
┌─────────────────────────────────────────────────┐
│  Copilot Memory         (GitHub-native)          │
│  Personal cross-project preferences              │
├─────────────────────────────────────────────────┤
│  MemPalace              (MCP server, local)      │
│  Repo-level authoring rationale & exemplars      │
├─────────────────────────────────────────────────┤
│  SQL Session Store      (structured audit trail) │
│  What happened turn-by-turn                      │
├─────────────────────────────────────────────────┤
│  Repo Files             (authoritative source)   │
│  Current truth — READMEs, slides, instructions   │
└─────────────────────────────────────────────────┘
```

**Cardinal rule: MemPalace suggests; repo files confirm.**

**Critical distinction:** MemPalace ≠ Copilot Memory. Copilot Memory = personal cross-project preferences (synced to GitHub, applies everywhere). MemPalace = project-level semantic memory for *this repo's* authoring decisions. The `copilot-memory` tech talk teaches a 3-layer model; MemPalace is a 4th layer that must be clearly documented.

---

## Palace Architecture

### Wings — Mapped to index-custom.html (Authoritative Source)

**Content wings** map 1:1 to deployed sections in `index-custom.html`:

| Wing | Section | Active Talks |
|------|---------|-------------|
| `wing_copilot_tools` | Copilot Tools | Chat Internals, CLI, CLI + Azure MCP, Code Review, Web, What's New in VS Code |
| `wing_customization_context` | Customization & Context | Primitives, Hooks, Memory, SDK, MCP Apps |
| `wing_agent_architecture` | Agent Architecture | Agent Teams, ACP *(+ deprecated: Multi-Step Tasks, Parallel Execution)* |
| `wing_agentic_sdlc` | Agentic SDLC | Workflows, Journey, SDLC, Enterprise Patterns |
| `wing_exec_talks` | Executive Talks | Agentic Delivery, Agentic Economics, Agentic Labor |
| `wing_workshop` | Workshop | Orientation, Instructions, Agent Plan Mode, Prompts-to-Skills, MCP Servers, Custom Agents |

**Authoring/infrastructure wings** (cross-cutting, not tied to sections):

| Wing | Purpose |
|-----|---------|
| `wing_infra` | Slidev build patterns, frontmatter conventions, deck.recipe.yml, archived talk rationale |
| `wing_rmathis` | Author editorial voice, framing philosophy, tone decisions |

**No `wing_slides`** — slides are derivative artifacts; their patterns belong in `wing_infra`.

### Rooms

- **Artifact rooms** (by content slug): `copilot-memory`, `agentic-sdlc`, `05-mcp-servers`
- **Topic rooms** (cross-cutting patterns): `context-limits`, `slidev-patterns`, `persona-design`, `voice-and-tone`
- Start with artifact rooms only; add topic rooms after observing search misses.

### Halls Mapping

| Hall | CopilotTraining Meaning | Example |
|------|------------------------|---------|
| `hall_facts` | Locked decisions | "BOM encoding breaks Slidev frontmatter parsing" |
| `hall_events` | Milestones, archival decisions | "subagents archived 2025-03-10: merged into agent-teams" |
| `hall_discoveries` | Breakthroughs | "cockpit wrapper eliminates 90% of slide HTML balance errors" |
| `hall_preferences` | Author taste | "Lead with discovery framing, not problem framing" |
| `hall_advice` | Patterns that work | "Tech talk openers: 3-word tagline + single bold stat" |

---

## Mining Strategy

### Archive Exclusion Rule (CRITICAL — enforced at indexing time)

- Exclude all paths matching `**/archive/**`
- Exclude any file with `status: archived` in YAML frontmatter
- **Exception:** Archive *rationale* IS mined — as `hall_events` entries. Content excluded; archival decision preserved.

### What to Mine

| Phase | Source | Mode | Notes |
|-------|--------|------|-------|
| 1 | `/docs/agents/*-FULL.md` + `/docs/*-SKILL.md` | projects | Mine full docs, NOT `.github/` stubs |
| 1 | `.github/copilot-instructions.md` | projects | Voice rules, taxonomy, emoji vocab |
| 1 | `workshop/00-orientation/PERSONAS.md` | projects | **VOICE AUTHORITY** — 6 persona archetypes, voice/tone per persona |
| 1 | Workshop READMEs (7 active modules, archive excluded) | projects | Persona arcs, exercise designs |
| 1 | Tech-talk READMEs (13 active talks only) | projects | Opportunity framings, talk structures |
| 1 | `tech-talks/*/deck.recipe.yml` (6 files) | projects | Per-talk slide adaptation rationale |
| 1 | `COPILOT-CONTEXT-LIMIT-SOLUTION.md`, `slides/SECTIONS.md` | projects | Architecture decisions |
| 2 | 50-100 exported sessions from session_store | convos | Editorial decisions, failure patterns |
| 3 | Git history (archival commits, major refactors) | general | Lineage, decision reversals |

### What NEVER to Mine

| Source | Why Excluded |
|--------|-------------|
| **Slide decks** (`slides/**/*.md` — 881 files, ~7.8MB) | Derivative artifacts. Duplicate recall. CSS noise. Not canonical knowledge. |
| `**/archive/**` content | Retired/superseded patterns |
| `.github/agents/*.agent.md` stubs | 1-3K compressed summaries. Mine `/docs/` full versions instead. |
| `node_modules/`, generated/vendored artifacts | Obvious |

---

## Agent Integration

### MCP Registration

```json
{
  "servers": {
    "mempalace": {
      "command": "python",
      "args": ["-m", "mempalace.server"],
      "env": { "MEMPALACE_HOME": "${workspaceFolder}/.mempalace" }
    }
  }
}
```

### Search-on-Demand Pattern (NOT Wake-Up Injection)

Two agents have mandatory pre-flight gates that wake-up injection would bypass:

| Agent | Pre-Flight Gate | Risk |
|-------|----------------|------|
| **Tech Talk Generator** | Research Brief → user approval before ANY content generation | Memories bias structural proposals; bypass Research Brief gate |
| **Slide Generator** | 6-step pre-flight (README exists → not archived → TEMPLATE.md → exemplar → SECTIONS.md → deck.recipe.yml) | Could cache "active" inference; bypass live frontmatter check |

**Rule:** For Tech Talk Generator and Slide Generator — MemPalace is search-on-demand ONLY. Invoked **after** pre-flight completes, **before** content generation. Never as wake-up context.

### Agent Diary Pattern (first integration)

After each session, slide-generator writes structured entries to `wing_infra`:

```
hall_facts: "BOM at file start renders frontmatter as slide 1. Fix: UTF8Encoding($false)."
hall_discoveries: "cockpit wrapper pattern: one outer div class='min-h-screen' handles 90% of balance errors"
```

Diary writes happen at session **END** only — never before pre-flight.

---

## Wild Ideas Worth Pursuing
o
### 2. Companion `.aaak` Files
Place `.aaak` files alongside key READMEs — same info, ~30x smaller, regenerated weekly. Agents check `.aaak` first for orientation, fall back to full README only when needed.

### 3. Cross-Reference Table (replaces Knowledge Graph)

A lightweight `hall_facts` entry in MemPalace listing topics that appear in multiple content artifacts:

```
hall_facts: "Topics covered in multiple places (check for drift when updating either):"
  - MCP transport: 05-mcp-servers (2026-02-15), mcp-apps (2026-03-01)
  - Instructions files: 01-instructions (2026-01-20), copilot-primitives (2026-03-23)
  - Agent sessions: vscode-latest (2026-03-05), 06-custom-agents (2026-02-10)
  - Memory layers: copilot-memory (2026-02-01), 05-mcp-servers (2026-02-15)
```

**How to use:** When you update one artifact, query the table — *"what else covers this topic?"* — then manually verify alignment. On-demand, not automated. Cross-wing entries (e.g., `wing_workshop` ↔ `wing_customization_context`) are especially valuable since those pairs are easiest to forget.

**Why not the knowledge graph:** Edge declarations require manual maintenance nobody will sustain. False positives (intentional differences between local/prod configs) create noise. The cross-reference table gets 80% of the value at 5% of the complexity.

**Populate:** 30 minutes once during Phase 1 mining. Update when new talks/modules are added.

---

## Implementation Roadmap

### Phase 0 — Environment Validation (1 day)
- [ ] Verify MemPalace Python server + ChromaDB + MCP stdio work on Windows natively
- [ ] Confirm Copilot CLI MCP config syntax (`.vscode/mcp.json` or equivalent)
- [ ] Write SQL session_store → MemPalace convos converter script
- [ ] Test archive filter: verify `status: archived` YAML detection works on the 8 archived talks

**Gate:** If ChromaDB/MCP don't work on Windows, identify WSL fallback before proceeding.

### Phase 1 — Curated Mining (6 hours)
- [ ] Mine curated sources per table above (34-43 drawers expected)
- [ ] Validation: run 10 representative queries; target 7/10 useful, non-contradictory results
- [ ] If <5/10 useful, prune before adding more content

### Phase 2 — Governance Queries Pilot (2 days)
**Not Tech Talk Generator or Slide Generator** — start with low-stakes, ground-truth-verifiable queries:
- Section placement lookups ("which section does copilot-hooks belong in?" → verify vs SECTIONS.md)
- Frontmatter checklist recall
- Archival rationale ("why was agentic-repos archived?")
- Persona reference ("what is Elena's role and voice?")

**Success metric:** Retrieval precision >60% across 20 governance queries.

### Phase 2b — Agent Diary for Slide Generator (3 days)
- [ ] Implement post-session write hook
- [ ] Implement search-on-demand query (after pre-flight, before content generation)
- [ ] Run 3 slide generation sessions with diary active
- [ ] Measure time-to-first-working-slide vs baseline

### Phase 3 — Tech Talk Generator Integration (1 week)
- Research phase only initially (not structure selection)
- Research Brief gate remains inviolable
- After 5+ successful generations, expand to content generation phase

### Phase 4 — Expand and Institutionalize (ongoing)
- Mine session history (50-100 sessions)
- Mine git history (archival commits, major refactors)
- Extend diary to module-creator, tech-talk-generator
- First attempt: generate `copilot-instructions.md` from palace
- Create `.aaak` companion files for 5 key READMEs
- Coherence tracking / knowledge graph

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Mining archived content → contradicted memories | Exclude `**/archive/**` + `status: archived` at indexing time |
| Mining slides → noisy recall | Never mine slide decks; mine `deck.recipe.yml` for authoring rationale |
| Mining stubs not full docs | Mine `/docs/agents/*-FULL.md`, not `.github/` stubs |
| Palace staleness | Tie writes to concrete events; freshness decay metric; re-mine after major changes |
| Agents over-trusting memory | Cardinal rule: MemPalace suggests; repo files confirm |
| Bypassing pre-flight gates | Search-on-demand only for Tech Talk Generator + Slide Generator |
| Windows compatibility | Validate in Phase 0 before investing in mining |
| MemPalace ↔ Copilot Memory confusion | Usage guide + callout in copilot-memory tech talk |

---

## Success Metrics

| Metric | Target | Why |
|--------|--------|-----|
| Retrieval precision (% memories used in final output) | >60% first 20 sessions | Flags taxonomy too broad |
| Freshness decay (% memories contradicting repo state at 60 days) | <10% | Most important — archived talks silently invalidate memories |
| Context budget impact (chars added per session) | <2,000 chars/session | Prevents re-hitting 30K limit |
| Generated content quality delta (human rating with vs. without) | MemPalace ≥ control | The actual goal |
| Agent pre-flight completion rate | 100% | Validates pre-flight gates are never bypassed |
| Time to first working slide build | ~2.5 hrs → ≤45 min | Slide-generator diary headline metric |
| Build failures from known-solvable issues | 3-5/session → ≤1/session | Diary actually prevents repeat failures |

---

## Install Reference

```bash
pip install mempalace
mempalace init C:\Users\rmathis\source\CopilotTraining
claude mcp add mempalace -- python -m mempalace.mcp_server
```
