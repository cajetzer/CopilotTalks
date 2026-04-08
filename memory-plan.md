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
│  Agent Diary            (JSONL, git-tracked)     │
│  Post-session structured entries; hall_proposals │
├─────────────────────────────────────────────────┤
│  Repo Files             (authoritative source)   │
│  Current truth — READMEs, slides, instructions   │
└─────────────────────────────────────────────────┘
```

**Cardinal rule: MemPalace suggests; repo files confirm.**

> **Note:** The SQL Session Store was removed. For a solo author with a git-tracked repo, the Agent Diary (append-only JSONL, written at session END) is the session store. Git diff is the audit trail. No ORM, no schema migration, no separate dependency.

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

### Agent Diary Quality Gate

Bad diary entries (overly specific, stale, ambiguous) are worse than no entries. Copilot writes entries as `hall_pending` and presents them for a single yes/no review at session end — no 48-hour wait, no separate workflow. You see a list: "These entries are proposed — approve all, edit, or drop." One interaction, then done. Speculation doesn't get promoted; validated facts do.

### Write Authority Model

| Who writes | Surface | How |
|------------|---------|-----|
| Copilot | `/memories/repo/` JSON entries | Post-session, after one-shot review |
| You (direct decision) | Tell Copilot: "Add to KNOWLEDGE.md: ..." | Copilot writes it |
| Palace aggregation (Track B) | Copilot seeds KNOWLEDGE.md → `hall_facts` | One command when server is running |

**KNOWLEDGE.md** (Track A): Copilot creates and maintains this file. You don't edit it directly — you tell Copilot what to add and it handles the format, `grep_search` indexing, and cross-referencing.

### Staleness Mechanism

Add a `date` field to every `/memories/repo/` JSON entry at write time. A weekly CI check flags entries where `date` is older than 90 days for human review. The CI script only flags — it does not delete. The author decides whether to update or retire each entry.

### Persona Voice Drift Guard

PERSONAS.md is the voice authority for all six personas — but persona drift across 7 modules is incremental and silent. The PERSONAS.md `.aaak` entry must include a **voice fingerprint per persona**: ~200 tokens each, covering characteristic phrases, sentence patterns, and forbidden phrases. When module-creator generates new exercises, it queries this fingerprint as part of pre-flight. This guard is higher-priority than any infrastructure work because persona drift is the failure mode nobody notices until it's widespread.

### Cold-Start UX

Session 1 with an empty palace adds MCP call latency for zero return. The cross-reference table (populated on Day 0 by humans) is the cold-start bootstrap: it ensures the palace has at least one immediately useful resource from the first session. Any agent querying the palace in a cold session will find the cross-reference table and can answer "does this topic appear in multiple places?" immediately.

---

## Two-Track Architecture

The roadmap runs as two parallel tracks. Track A delivers value immediately; Track B extends it. If Phase 0 fails, Track A is the complete and final architecture.

| | Track A (Zero Infrastructure) | Track B (Server-Backed) |
|-|-------------------------------|------------------------|
| **When** | This week — Day 0 forward | After Phase 0 validates |
| **Storage** | `/memories/repo/` JSON + `KNOWLEDGE.md` | ChromaDB + MemPalace MCP server |
| **Retrieval** | `grep_search` (exact match) | Semantic vector search |
| **Value** | ~60% of total plan value | Remaining ~40% |
| **If Track B fails** | Track A is final answer | — |

**Track A wins that don't need Track B:**
- Cross-reference table (drift governance)
- Inverse mining entries (session amnesia)
- Persona voice fingerprints (.aaak files)
- `hall_proposals` write path in agents (governance as pull)
- Staleness CI check
- Write authority model for human sessions

---

## Wild Ideas Worth Pursuing

### 1. Replace `copilot-instructions.md` with a 2KB MCP-First Bootstrap

The current instructions file is 207K characters of load-bearing prose, compressed and re-expanded every session. The architectural end-state: replace it with a minimal stub that says *"query MemPalace for what you need."* Every rule becomes a `hall_facts` entry — searchable, composable, retrievable on demand. Context budget drops from 30K burned at startup to ~2K, with the remainder available for actual content.

**Pre-flight gates remain inviolable** — agents still read `TEMPLATE.md`, `SECTIONS.md`, and live frontmatter from repo files. MemPalace handles institutional rules, not current state. This is a Phase 4 target after palace recall is proven reliable — but naming it now means every intermediate decision points in the right direction.

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

### Day 0 — Immediate Wins (No Infrastructure Required, ≤2 hours)

Do this *before* Phase 0. These actions deliver value regardless of whether Track B (server) ever ships.

- [ ] **Run inverse mining**: pick 2–3 recent sessions with regressions or repeated mistakes; ask an agent to retrodict *"what `/memories/repo/` entries would have prevented these failures?"* Write results as JSON entries. Target: 10–15 new entries.
- [ ] **Build the cross-reference table** as a single `/memories/repo/` entry (template in Wild Ideas §3). Populate manually: MCP transport, instructions files, agent sessions, memory layers. 30 minutes. This is your cold-start bootstrap AND drift detector.
- [ ] **Add `schema_version: 1`** to all existing `/memories/repo/` JSON entries to guard against hall/wing name evolution.
- [ ] Run 2 sessions with the new memories active; measure whether session amnesia is reduced.

**Gate for Track B:** Only start Phase 0 after Day 0 entries are in place. If Day 0 entries alone solve 60%+ of session amnesia, validate whether ChromaDB is needed before investing further.

### Phase 0 — Environment Validation (1 day)

> **Binary decision point — define before starting:** if ChromaDB + MCP do not run natively on Windows (no WSL), Track A (zero-infrastructure, see Two-Track Architecture section) is the **final answer**, not a fallback. Write this down before investing in mining.

- [ ] Confirm Copilot CLI MCP config syntax (`.vscode/mcp.json` or equivalent)
- [ ] Verify MemPalace Python server + ChromaDB + MCP stdio work on Windows natively (not WSL)
- [ ] Test ChromaDB close/reopen persistence: verify previously written memories survive a session restart
- [ ] Test archive filter: verify `status: archived` YAML detection works on the 8 archived talks

**Gate:** If ChromaDB/MCP don't work natively on Windows, Track A is the final architecture. Do not invest in mining until Track B (server) is confirmed working.

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

### Phase 2b — Agent Diary: Slide Generator + Tech Talk Generator (3 days each)

> **Sequencing change:** Tech Talk Generator moves here, not Phase 3. It has *more* repeated-session friction than Slide Generator (voice drift, research redundancy, rearguing framing every session). Start Slide Generator diary first as proof of concept, then Tech Talk Generator research phase integration.

**Slide Generator (first):**
- [ ] Implement post-session write hook
- [ ] Implement search-on-demand query (after pre-flight, before content generation)
- [ ] Add `hall_proposals` write path: when mid-session drift or improvement is noticed, write a structured proposal entry instead of a comment that disappears — governance as pull, not push
- [ ] Run 3 slide generation sessions with diary active
- [ ] Measure time-to-first-working-slide vs baseline

**Tech Talk Generator (second):**
- [ ] Research phase integration only initially (Research Brief gate remains inviolable)
- [ ] After 3+ successful generations with diary active, expand to content generation phase

### Phase 3 — Expand and Institutionalize (ongoing)
- Mine git history (archival commits, major refactors)
- Extend diary to module-creator
- Create `.aaak` companion files for remaining key READMEs
- Assess whether `copilot-instructions.md` → palace bootstrap is ready (Wild Ideas §1)

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Mining archived content → contradicted memories | Exclude `**/archive/**` + `status: archived` at indexing time |
| Mining slides → noisy recall | Never mine slide decks; mine `deck.recipe.yml` for authoring rationale |
| Mining stubs not full docs | Mine `/docs/agents/*-FULL.md`, not `.github/` stubs |
| Palace staleness | `date` field on every entry; CI script flags entries >90 days; re-mine after major changes |
| Agents over-trusting memory | Cardinal rule: MemPalace suggests; repo files confirm; wrong recall flagged stale when it contradicts pre-flight |
| Bypassing pre-flight gates | Search-on-demand only for Tech Talk Generator + Slide Generator |
| ChromaDB on Windows | Validate natively (not WSL) in Phase 0; binary decision point before mining investment; WSL filesystem namespace is a known hazard |
| MCP server unavailable / crashed | Agents fall back to KNOWLEDGE.md + grep; log the miss; queue re-query at session end |
| Wing/hall taxonomy evolves | `schema_version` field on all entries; old memories marked stale not deleted |
| Wrong memory ships in content | Agent Diary quality gate: entries start in `hall_pending`; author promotes before becoming `hall_facts` |
| Persona voice drift | PERSONAS.md `.aaak` entry with per-persona voice fingerprint; queried by module-creator during pre-flight |
| Cold-start latency with no value | Cross-reference table (Day 0) is pre-populated by humans; first session has utility immediately |
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
pip install mempalace  # pin a version: pip install mempalace==X.Y.Z
mempalace init C:\Users\rmathis\source\CopilotTraining
claude mcp add mempalace -- python -m mempalace.mcp_server
```
