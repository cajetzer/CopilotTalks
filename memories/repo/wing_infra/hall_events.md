# wing_infra / hall_events

Milestones, archival decisions, and major restructures.

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
