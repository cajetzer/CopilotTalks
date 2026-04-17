---
name: mempalace
description: Read from and write to the MemPalace project memory store. Use when starting complex content work (query for prior context) or finishing a session that changed content (write diary entries). Never invoke during agent pre-flight gates.
infer: false
---

# MemPalace Skill

MemPalace is the project-level semantic memory store for CopilotTraining authoring decisions, patterns, and cross-reference knowledge. It is **separate from Copilot Memory** (which is personal/cross-project). MemPalace = _this repo's_ institutional knowledge.

**Cardinal rule: MemPalace suggests; repo files confirm.**
I

---

## When to Use This Skill

### READ — Query MemPalace BEFORE generating content

Invoke after pre-flight gates complete, before starting content generation:

| Trigger                                         | Query to run                                                |
| ----------------------------------------------- | ----------------------------------------------------------- |
| Generating slides for a talk                    | `"What patterns or gotchas exist for [topic]?"`             |
| Writing a new tech-talk                         | `"What voice/framing decisions exist for this section?"`    |
| Creating workshop exercises                     | `"What persona voice and arc decisions apply to [module]?"` |
| Placing a card in index-custom.html             | `"Which section does [topic] belong in?"`                   |
| Updating content that overlaps another artifact | Check cross-reference table: `"What else covers [topic]?"`  |

**Never query MemPalace during pre-flight.** Pre-flight gates (README exists → not archived → TEMPLATE.md → SECTIONS.md) must complete first using live repo files. MemPalace comes after.

### WRITE — Update MemPalace at session END

After completing content work, write diary entries for anything future sessions should know:

| What changed                            | Hall to write      | Example                                                           |
| --------------------------------------- | ------------------ | ----------------------------------------------------------------- |
| Discovered a recurring build gotcha     | `hall_facts`       | `"BOM at file start breaks Slidev frontmatter"`                   |
| Archived a talk                         | `hall_events`      | `"multi-step-tasks archived 2026-04-07: merged into agent-teams"` |
| Found a pattern that consistently works | `hall_discoveries` | `"cockpit wrapper div eliminates 90% of HTML balance errors"`     |
| Made a framing/voice decision           | `hall_preferences` | `"agentic-sdlc opener: lead with the 10-15 features/day stat"`    |
| Identified a cross-reference drift      | `hall_facts`       | Cross-reference table entry update                                |

**Never write during a session mid-stream.** Diary writes happen at session END only — after the work is saved and verified.

**Write mechanism: always use `replace_string_in_file` or `multi_replace_string_in_file` to edit the hall `.md` files directly** (e.g. `memories/repo/wing_infra/hall_facts.md`). Never use the `memory` tool with `/memories/repo/` paths — that routes to Copilot's personal memory service, not the repo files, and the entries will be invisible in the workspace.

---

## What NEVER to Write

- Archived talk content (rationale only, as `hall_events`)
- Slide deck CSS or Slidev layout details (too volatile, too noisy)
- Secrets, tokens, credentials
- Speculation — only write confirmed facts and decisions
- Anything that duplicates what's in the repo file itself ("copilot-memory is about memory" is useless; "copilot-memory uses a 3-layer model, not 4" is useful)

---

## Wing Reference

Queries and writes should target the appropriate wing:

| Wing                         | What lives here                                                       |
| ---------------------------- | --------------------------------------------------------------------- |
| `wing_copilot_tools`         | Chat, CLI, Azure MCP, Code Review, Web, VS Code talks                 |
| `wing_customization_context` | Primitives, Hooks, Memory, SDK, MCP Apps talks                        |
| `wing_agent_architecture`    | Agent Teams, ACP talks                                                |
| `wing_agentic_sdlc`          | Workflows, Journey, SDLC, Enterprise Patterns talks                   |
| `wing_exec_talks`            | Delivery, Economics, Labor talks                                      |
| `wing_workshop`              | All workshop modules + persona decisions                              |
| `wing_infra`                 | Slidev patterns, frontmatter rules, build gotchas, archival rationale |
| `wing_rmathis`               | Editorial voice, framing philosophy, author taste decisions           |

---

## Hall Reference

| Hall               | Use for                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------- |
| `hall_facts`       | Locked, confirmed decisions — build rules, encoding gotchas, transport protocol choices |
| `hall_events`      | Milestones, archival decisions, major restructures with dates                           |
| `hall_discoveries` | Breakthroughs — patterns that solved persistent problems                                |
| `hall_preferences` | Author taste — framing choices, voice decisions, style calls                            |
| `hall_advice`      | Patterns that consistently work — opener structures, slide counts, card descriptions    |

---

## Content Change → MemPalace Update Protocol

When you update a content artifact, ask:

1. **Does this change a confirmed fact?** → Update or add `hall_facts` entry
2. **Does this retire or archive something?** → Write `hall_events` with date and rationale
3. **Does this affect a cross-reference?** → Update the cross-reference table in `wing_infra/hall_facts`
4. **Did you discover something new that would save time next session?** → Write `hall_discoveries` or `hall_advice`

If none of the above apply, no write is needed.

---

## Cross-Reference Table

Maintained in `wing_infra/hall_facts`. Topics covered in multiple artifacts — check for drift when updating either:

- **MCP transport:** `05-mcp-servers`, `mcp-apps`
- **Instructions files:** `01-instructions`, `copilot-primitives`
- **Agent sessions:** `vscode-latest`, `06-custom-agents`
- **Memory layers:** `copilot-memory`, `05-mcp-servers`

When updating a listed artifact: query the paired artifact to verify alignment before publishing.

---

## Example Workflow (Slide Generator)

```
1. Pre-flight completes:
   README exists ✓ → not archived ✓ → TEMPLATE.md ✓ → SECTIONS.md ✓ → deck.recipe.yml ✓

2. QUERY MemPalace (now):
   "What patterns or gotchas exist for [talk-slug]?"
   → Returns: "cockpit wrapper eliminates HTML balance errors" (hall_discoveries)
   → Returns: "Thank-you slide pattern: blur-2xl double-logo, gradient h1" (hall_advice)
   Apply these to generation.

3. Generate slides.

4. Session END — WRITE diary:
   "Discovered: agentic-sdlc opener stat (10-15 features/day) works best as hero number on slide 2"
   → wing_agentic_sdlc / hall_discoveries
```

---

## MemPalace Is NOT

- ❌ A replacement for reading repo files — always confirm against source
- ❌ A wake-up injection context (don't front-load sessions with palace dumps)
- ❌ Copilot Memory (that's personal/cross-project preferences)
- ❌ A content archive (use git history for that)
