# topics bench — Feature Topic Index

This bench is a **manually-curated topic index**. Each drawer covers one Copilot feature or concept that appears across multiple content artifacts at varying depths.

**Purpose:** When editing any artifact, query the relevant topic drawer to discover what else covers it and where cross-reference drift could occur. When finishing content work that changes how a topic is described or scoped, update the coverage map entry.

---

## Depth scale

| Depth | Meaning |
|---|---|
| **Primary** | This artifact's dedicated talk — the canonical source for this topic |
| **Major section** | One full part/section is explicitly about this topic |
| **Secondary** | 1–2 dedicated slides or a meaningful subsection |
| **Mention** | Referenced in passing; not a teaching focus |

---

## Drawers in this bench

| File | Topic |
|---|---|
| `mcp.md` | Model Context Protocol — servers, tools, transport, and MCP Apps |
| `copilot-cli.md` | GitHub Copilot CLI — `gh copilot`, `gh copilot suggest`, `gh copilot explain` |
| `agent-mode.md` | Agent Mode — agentic workflows, autonomous task execution, agent coordination |
| `custom-instructions.md` | Custom instructions — `.github/copilot-instructions.md`, prompt files, instruction primitives |
| `copilot-memory.md` | Copilot Memory — persistent context, memory MCP server, squad memory |

---

## Protocol

**At session start (when editing content touching a topic):**
1. Read the relevant topic drawer
2. Check the coverage map for artifacts that may drift if this topic's description changes
3. Note any "canonical description" divergence to flag during session

**At session end (when content changes affect a topic):**
1. Update the coverage map entry for any artifact you changed
2. Update the canonical description if the topic's scope or framing shifted
3. Add a note under the artifact's entry if something non-obvious happened

**Do not pre-create topic files** for topics that only appear in one artifact — those belong in that artifact's bench, not here. Topics earn a drawer when they appear meaningfully in 3+ artifacts.
