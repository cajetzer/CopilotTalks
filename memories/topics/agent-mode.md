# topics / agent-mode

**Topic:** Agent Mode / Agentic Workflows

---

## Canonical description

Agent Mode is GitHub Copilot's capability to autonomously plan and execute multi-step tasks — reading files, running terminal commands, calling MCP tools, and iterating toward a goal with minimal per-step human approval. In VS Code, it is invoked via the chat panel's agent toggle. The broader agentic ecosystem includes: multi-agent coordination (agent teams), protocol-level composition (ACP), lifecycle integration (agentic SDLC), and organizational adoption patterns (enterprise patterns). "Agent mode" the feature vs "agentic" as an architectural pattern are distinct — agent mode is one entry point into a larger agentic capability set.

---

## Coverage map

| Artifact | Depth | Notes |
|---|---|---|
| `slides/tech-talks/agentic-workflows.md` | Primary | Core agentic patterns — plan/act/verify loop, tool use, iteration |
| `slides/tech-talks/agentic-journey.md` | Primary | The maturity arc from autocomplete → inline → chat → agent mode |
| `slides/tech-talks/agentic-sdlc.md` | Primary | Agent mode integrated across the full SDLC: intake, implementation, review, release |
| `slides/tech-talks/agent-teams.md` | Primary | Coordinating multiple agents — coordinator/subagent patterns, AgentCouncil |
| `slides/tech-talks/copilot-acp.md` | Primary | ACP (Agent Communication Protocol) — how agents communicate and compose |
| `slides/tech-talks/enterprise-patterns.md` | Major section | Agent governance, approval gates, org-scale adoption of agent mode |
| `slides/tech-talks/vscode-latest.md` | Secondary | Agent mode UI improvements per VS Code release; new tool integrations |
| `slides/tech-talks/copilot-primitives.md` | Secondary | Agents as a primitive type alongside instructions, skills, and extensions |
| `slides/tech-talks/copilot-sdk.md` | Secondary | SDK APIs for building, invoking, and composing agents programmatically |
| `slides/tech-talks/copilot-hooks.md` | Secondary | Hooks fire on agent lifecycle events; used for guardrails and audit |
| `workshop/02-agent-plan-mode/` | Primary | Hands-on workshop: using agent plan mode for task planning |
| `workshop/06-custom-agents/` | Primary | Hands-on workshop: building custom agents with instructions and tools |

---

## Framing notes

- **`agentic-journey`** is the best entry point for audiences new to agent mode — it builds context before introducing the mechanics
- **`agentic-workflows`** is the best entry point for audiences who understand agent mode but want to use it effectively — patterns-first, not features-first
- **`agentic-sdlc`** is the highest-level view: agent mode as a transformation of *how teams work*, not just how individuals code
- **`agent-teams`** covers multi-agent coordination which requires understanding single-agent mode first — it typically pairs with `agentic-workflows`
- **`copilot-acp`** is the most protocol-focused; it assumes agent mode familiarity and goes deep on the communication layer
- The `agentic-journey` maturity arc (autocomplete → inline → chat → agent → teams) is a useful framing device referenced across multiple talks — keep it consistent

## Drift risks

- VS Code agent mode UI changes frequently (`vscode-latest` captures these) — the mechanics described in `agentic-workflows` and `agentic-sdlc` may lag behind the actual UX
- The "approval gates" and "YOLO mode" (auto-approval) framing in `enterprise-patterns` and `agentic-sdlc` is sensitive to policy changes — verify against current VS Code docs before delivery
- `copilot-acp` is tightly coupled to the ACP spec version; if the protocol evolves, the tool-call and message format slides need updating
