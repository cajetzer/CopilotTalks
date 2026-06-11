---
status: active
updated: 2026-06-10
section: "Developers"
references:
  - url: https://code.visualstudio.com/docs/copilot/overview
    label: "GitHub Copilot in VS Code"
    verified: 2026-06-10
  - url: https://code.visualstudio.com/docs/copilot/customization/custom-instructions
    label: "Custom instructions in VS Code"
    verified: 2026-06-10
  - url: https://code.visualstudio.com/docs/copilot/agents/background-agents
    label: "Background Agents in VS Code"
    verified: 2026-06-10
  - url: https://code.visualstudio.com/docs/copilot/customization/mcp-servers
    label: "MCP Servers in VS Code"
    verified: 2026-06-10
  - url: https://github.com/features/copilot
    label: "GitHub Copilot in GitHub.com"
    verified: 2026-06-10
  - url: https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app
    label: "Customizing the GitHub Copilot app"
    verified: 2026-06-10
  - url: https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started
    label: "Getting started with the GitHub Copilot app"
    verified: 2026-06-10
  - url: https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/
    label: "GitHub Copilot app expanded technical preview"
    verified: 2026-06-10
  - url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli
    label: "About GitHub Copilot CLI"
    verified: 2026-06-10
  - url: https://code.visualstudio.com/updates/v1_120
    label: "VS Code release notes: May 2026 (v1.120)"
    verified: 2026-06-10
---

# GitHub Copilot: Latest Capabilities and Effective Patterns

> **The Question This Talk Answers:**
> *"What capabilities matured in the last four months? How do context management and token optimization change the value proposition?"*

**Duration:** 30 minutes | **Target Audience:** Developers (hands-on focus)

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Seven distinct Copilot surfaces now exist (including the GitHub Copilot App and the VS Code Agents app). Recent features: fleet mode parallelism, subagent composition, rubber-duck pattern, skill-based delegation, and app-centric orchestration. |
| **Compelling** | 🟢 High | Technical deep dive on how progressive disclosure and context management improve consistency and reduce unnecessary context loading in real workflows. |
| **Actionable** | 🟢 High | Specific context management techniques: scope reduction via skills, query filtering in MCP servers, and local validation gates. |

**Overall Status:** 🟢 Ready to use

---

## The Copilot Surface Map

### Seven Surfaces, One Configuration

GitHub Copilot reaches developers through seven distinct surfaces. Each surface shares the same underlying instruction files and MCP server configuration, but applies different tool access and interaction models:

| Surface | Access Mode | Execution | Best Fit |
|---------|-------------|-----------|----------|
| **VS Code Chat** | Interactive, conversational | Single-file edits, inline suggestions | Quick questions, exploration, `#codebase` search |
| **VS Code Agent Mode** | Goal-oriented, autonomous | Multi-file, terminal, iteration loops | Feature development, refactoring, scaffold generation |
| **Background Agents** | Fire-and-forget, parallel | Isolated Git worktree per agent | Parallel independent tasks, long-running ops |
| **VS Code Agents app (formerly Sessions)** | Companion app for session management | Parallel session control, steering, and diff review | Coordinating multiple running agent workstreams |
| **GitHub Copilot App** | Desktop, agent-native | Integrated terminal/browser, worktree sessions, MCP + skills | End-to-end agent sessions, review loops, reusable workflows |
| **GitHub.com Copilot** | Browser review interface | PR diff context only | Code review, issue triage, async delegation |
| **Copilot CLI** | Terminal, streaming | Full system access, file I/O | DevOps, scripting, infrastructure, Plan Mode |

### Shared Foundation

Every surface shares the same **context sources**: `copilot-instructions.md`, MCP server configuration, and tool access. The model selection varies by task complexity, but all surfaces read from the same instruction repository. This means a well-scoped instructions file, carefully designed MCP config, and strategic use of skills gives every surface the context it needs without repetition across prompts.

---

## Recent Capability Additions (Last 4 Months)

### 1. Fleet Mode and Parallel Execution

**GitHub Copilot App**, **VS Code Agent Mode**, and **Copilot CLI** support parallel execution patterns for independent tasks:

- **Parallel sessions in Copilot App**: Run multiple isolated sessions (worktree + branch per session), steer each session, and validate in integrated terminal/browser.
- **Background agents in VS Code**: Launch a task and click **Continue in Background**. The agent runs in an isolated Git worktree while main editor work continues.
- **`/fleet` in CLI**: Fan out independent tasks from the terminal when batch execution is the primary workflow.

**Context implication**: Parallel tasking reduces context reset overhead and keeps independent workstreams isolated, which improves consistency during implementation and review.

**Practical pattern**: Feature A (backend) in one session, Feature B (frontend) in another, then integrate and review diffs in a single review pass.

Reference: [Copilot app technical preview expansion](https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/) and [Copilot CLI concepts](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli)

### 2. Subagent Composition and Delegation

Agents can now spawn **subagents** to delegate bounded tasks:

- **Agent → Subagent pattern**: Main agent defines a subtask scope ("write the authentication module tests"), spawns a subagent with narrowed instructions, collects results, and continues.
- **Context efficiency**: Subagents receive only the subset of instructions relevant to their scope, reducing noise and improving focus.

Example: Refactoring task → Main agent reads architecture, identifies three modules → Spawns three subagents (one per module) → Collects and merges results. Context per subagent stays tightly scoped to a single module.

Reference: [Subagents and skills in the Copilot app](https://github.blog/changelog/2026-05-14-subagents-and-skills-in-github-copilot-app/)

### 3. Rubber Duck Pattern

**New in GitHub Copilot App** and **VS Code Chat**: Copilot can now act as a sounding board without changing code:

- Describe a design decision, ask Copilot to reflect back potential issues
- Explain error output and ask for interpretation before fixing
- Review architecture aloud with Copilot and catch misunderstandings

**Outcome**: Rubber duck sessions surface assumptions early and reduce avoidable rework before implementation.

Reference: [Copilot app technical preview expansion](https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/)

### 4. Skills-Based Context Gating

**Skills** (`.github/skills/`) are now the primary way to gate expensive operations:

- Define a skill: "Run tests, report failures, suggest fixes"
- **Agent uses skills automatically** when they match the task context
- Skill receives narrowed scope (e.g., "run tests in `src/auth/` only")
- Returns structured results without full codebase context

**Context implication**: A skill-based approach reduces repeated discovery work because the workflow is pre-loaded and scoped.

Reference: [Subagents and skills in the Copilot app](https://github.blog/changelog/2026-05-14-subagents-and-skills-in-github-copilot-app/) and [Customizing the Copilot app](https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app)

### 5. VS Code Agents Window, Remote Agents, and Session Sync

The VS Code agents experience matured from isolated chat sessions to cross-session orchestration:

- **Agents window in Stable preview** for multi-project, agent-first workflows
- **Remote agents** that continue running even when the client disconnects
- **Session sync** and `/chronicle` support for searchable cross-machine session history

This improves continuity for longer-running work and makes parallel agent operations easier to supervise.

Reference: [VS Code Copilot May releases](https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases/)

### 6. Terminal Safety and Context-Efficiency Controls

Recent terminal updates added execution and context controls that directly support context engineering:

- **Command risk assessment** for agent-initiated terminal actions
- **Expanded terminal output compression** before model ingestion
- **Sensitive prompt handling** that keeps secrets/codes in terminal input flows

These features reduce noisy context, improve operational safety, and keep terminal-native workflows reviewable.

Reference: [VS Code Copilot May releases](https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases/)

### 7. Cloud Agent: Branch-First and Plan-First Workflows

Cloud agent capabilities now support more flexible execution paths:

- Work on a **branch without automatically opening a PR**
- Run **plan-before-code** workflows and approve the approach before edits begin
- Launch **deep research** sessions for broad repository questions

This makes staged delegation (research -> plan -> implement -> review) a first-class workflow.

Reference: [Cloud agent: research, plan, and code](https://github.blog/changelog/2026-04-01-research-plan-and-code-with-copilot-cloud-agent/)

### 8. Visual Studio Plan Agent and Context Window Management

Visual Studio Copilot updates added stronger pre-implementation and context controls:

- **Plan agent** for read-only investigation and explicit implementation plans
- **Context window usage indicators** and summarize-to-compact controls
- **Multi-file summary diff** workflows for high-signal review after agent edits

These features align with intentional context disclosure and reduce ambiguity before code generation.

Reference: [Visual Studio Copilot May update](https://github.blog/changelog/2026-06-04-github-copilot-in-visual-studio-may-update/)

---

## Context Engineering: Progressive Disclosure by Design

This talk treats progressive disclosure as a **focused operating model**, not a product checkbox.  
The objective is intentional context design: disclose only the context required for the current decision.

Use this flow across Copilot surfaces:

1. **Intent layer (minimum viable context)**  
   Start with task objective, constraints, and acceptance criteria only.

2. **Structure layer (targeted repository context)**  
   Add only the files/modules needed for the current step (`#codebase`/targeted file reads).

3. **Runtime layer (tool-backed evidence)**  
   Add terminal output, test failures, logs, and MCP-backed data only when the task requires execution evidence.

4. **Validation layer (review-grade output)**  
   Gate completion through scoped checks (lint/test/build or equivalent) and produce diff-ready artifacts.

Patterns that enable this:

- **Scope reduction via skills**: encode recurring workflows so agents do less discovery and more execution.
- **MCP query filtering**: expose narrow tool scope first (folder/toolset/endpoint) and expand only when blocked.
- **Local validation gates**: keep implementation and verification in-loop.
- **Scope budgeting**: define boundaries up front; split tasks when dependency edges appear.

What changed with the latest surfaces is not that context engineering became possible - it is that app sessions, integrated terminal/browser, MCP support, and parallel session orchestration now make this pattern practical end to end in one workflow.

Reference: [awesome-ai-native context engineering patterns](https://github.com/danielmeppiel/awesome-ai-native)

---

## GitHub Copilot App (Technical Preview)

**GitHub Copilot App** (desktop, technical preview) is now a first-class surface:

| Aspect | Capability |
|--------|-----------|
| **Chat** | Multi-turn conversation, streaming responses |
| **Context** | Instructions, repository context, session history |
| **Tools** | Integrated terminal and browser, MCP servers, skills, canvases |
| **Cross-device** | Yes — cloud sync, session history |
| **Best for** | Agent session orchestration, diff-first review, issue/PR workflows, rubber ducking |

The GitHub Copilot App is an **agent-native desktop surface**: start from issues/PRs/prompts, run parallel isolated sessions, validate in integrated terminal/browser, and connect external tools via MCP servers.

---

## Execution Topologies (Replace One-Tool Habits)

Use one of these execution topologies based on where your task state lives.

### Topology A: App-Centric Orchestration

Use when the workflow starts from issues/PRs and needs parallel session management.

1. Plan in a Copilot App session (or quick chat), then split into bounded workstreams.
2. Run parallel app sessions for independent subtasks.
3. Validate behavior in integrated terminal/browser and MCP-connected tools.
4. Review and finalize from **My work** and/or GitHub.com.

Best fit: issue-driven feature work, review-heavy flows, multi-repo coordination.

### Topology B: IDE-Centric Implementation with App Oversight

Use when the implementation center is VS Code but orchestration and review span surfaces.

1. Implement in VS Code Agent Mode for deep local edits.
2. Offload independent work to background/app sessions when scope splits cleanly.
3. Use Copilot App for session visibility, steering, and cross-task continuity.
4. Finalize in GitHub.com or app review surfaces.

Best fit: refactors, module-level implementation, test-and-fix loops.

### Topology C: CLI-Centric Runtime Work

Use when runtime state is primary (containers, logs, CI, remote shells, scripts).

1. Run tasks in Copilot CLI or app terminal.
2. Use `/fleet` or parallel sessions for independent runtime operations.
3. Feed outputs back into app/IDE sessions for code-level follow-up.
4. Gate with review surfaces before merge.

Best fit: infra, release engineering, CI triage, operational debugging.

---

## Surface Selection Rules

Use these rules instead of per-task one-off choices:

1. **Start where authoritative state lives.** If state is in issues/PRs, start in app/GitHub.com. If state is in code structure, start in IDE. If state is in runtime, start in terminal.
2. **Split by dependency graph, not by preference.** Parallelize only truly independent workstreams; keep dependent changes in one session chain.
3. **Keep orchestration and execution distinct.** App sessions are strong for orchestration and continuity; IDE/CLI often own deep execution details.
4. **Move to review surfaces early.** Treat diff review as part of implementation, not a final step.
5. **Prefer scope escalation over context dumping.** Start narrow, expand context only when a concrete blocker appears.

---

## Related Talks

For deeper context on specific capabilities:

- **[Copilot Primitives](../copilot-primitives/)** — Full instructions → skills → agents model with production examples
- **[Copilot CLI](../copilot-cli/)** — Terminal-native patterns, Plan Mode, `/fleet`, Chronicle memory
- **[Agentic Workflows](../agentic-workflows/)** — Multi-step task patterns, plan/act/verify loops
- **[Agent Teams](../agent-teams/)** — Coordinating multiple agents, subagent delegation, AgentCouncil
- **[Copilot Code Review](../copilot-code-review/)** — Automatic review setup, compliance patterns
- **[VS Code Latest](../vscode-latest/)** — Per-release UI and feature updates across all surfaces

---

## Actionable Next Steps

### 15 Minutes

- [ ] Try rubber duck: Open GitHub Copilot App and describe a design decision without making changes
- [ ] Switch VS Code Agent to Plan Mode for one task: `copilot -p "task" --plan` to inspect intended actions before execution
- [ ] Check if your project already has `.github/copilot-instructions.md` — if so, read it; if not, start one

### 1 Hour

- [ ] Add a `.github/skills/` directory and define a skill for a recurring task (e.g., "Run and interpret test failures")
- [ ] Launch a background agent: describe one task, click **Continue in Background**, review the diff without blocking your workspace
- [ ] Scope an MCP server: instead of exposing the entire workspace, configure `filesystem` to expose only `src/`

### 2–4 Hours

- [ ] Context audit: Pick three recent tasks and note where context could have been narrowed or split into smaller scopes
- [ ] Parallel execution: Run two independent tasks with `/fleet` or background agents; measure time saved vs. sequential approach
- [ ] Integrate GitHub.com Copilot into code review: request review on an open PR and record feedback time vs. human review
- [ ] Test local validation gates: add a skill that runs tests after every change, signaling completion only when tests pass

---

## References

- **[GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview)** — Official documentation
- **[Customizing the GitHub Copilot app](https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app)** — App setup, skills, and MCP integration
- **[Getting started with the GitHub Copilot app](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)** — Session model, quick chats, and workflow entry points
- **[GitHub Copilot app technical preview](https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/)** — Preview scope and app capabilities
- **[VS Code Copilot May releases](https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases/)** — Agents window, remote sessions, terminal safety/efficiency updates
- **[Cloud agent: research, plan, and code](https://github.blog/changelog/2026-04-01-research-plan-and-code-with-copilot-cloud-agent/)** — Branch-first, plan-first, and deep research workflows
- **[Visual Studio Copilot May update](https://github.blog/changelog/2026-06-04-github-copilot-in-visual-studio-may-update/)** — Plan agent and context window management capabilities
- **[About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli)** — CLI reference
- **[VS Code v1.120 Release Notes](https://code.visualstudio.com/updates/v1_120)** — Latest features and UI updates
- **[awesome-ai-native](https://github.com/danielmeppiel/awesome-ai-native)** — External context-engineering pattern library
