# wing_agent_architecture / hall_facts

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

## agent-teams.md: Slide count history

`schema_version: 1` | `date: 2026-04-08`

| Date | Count | Change |
|------|-------|--------|
| Session start 2026-04 | 23 | baseline |
| After s11 split | 24 | Squad → team formation + memory/persistence |
| After s21 split | 25 | AgentCouncil vs Squad → decision table + combining workflow |
