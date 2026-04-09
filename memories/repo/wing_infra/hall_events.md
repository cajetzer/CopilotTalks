# wing_infra / hall_events

Milestones, archival decisions, and major restructures.

---

## Slide style refresh: ALL tech-talk decks verified clean (2026-04-09 session)

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
| `copilot-code-review.md` | ✅ 26/26 | `1d1f624` |

**Total: 18 decks, 404 slides — all clean.**

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
