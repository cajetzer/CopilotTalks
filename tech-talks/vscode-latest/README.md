---
status: active
updated: 2026-04-13
section: "Copilot Tools"
references:
  - url: https://code.visualstudio.com/updates/v1_115
    label: "VS Code release notes: April 8, 2026 (v1.115)"
    verified: 2026-04-13
  - url: https://code.visualstudio.com/updates/v1_114
    label: "VS Code release notes: April 1, 2026 (v1.114)"
    verified: 2026-04-13
  - url: https://code.visualstudio.com/updates/v1_113
    label: "VS Code release notes: March 25, 2026 (v1.113)"
    verified: 2026-04-13
  - url: https://code.visualstudio.com/updates/v1_112
    label: "VS Code release notes: March 18, 2026 (v1.112)"
    verified: 2026-04-13
  - url: https://code.visualstudio.com/updates/v1_111
    label: "VS Code release notes: March 9, 2026 (v1.111)"
    verified: 2026-04-13
  - url: https://code.visualstudio.com/updates/v1_110
    label: "VS Code release notes: February 2026 (v1.110)"
    verified: 2026-04-13
  - url: https://code.visualstudio.com/updates/v1_109
    label: "VS Code release notes: January 2026 (v1.109)"
    verified: 2026-04-13
  - url: https://code.visualstudio.com/updates/v1_108
    label: "VS Code release notes: December 2025 (v1.108)"
    verified: 2026-04-13
  - url: https://code.visualstudio.com/docs/copilot/overview
    label: "GitHub Copilot in VS Code documentation"
    verified: 2026-04-13
  - url: https://code.visualstudio.com/docs/copilot/customization/agent-plugins
    label: "Agent Plugins documentation"
    verified: 2026-04-13
  - url: https://code.visualstudio.com/docs/copilot/customization/agent-skills
    label: "Agent Skills documentation"
    verified: 2026-04-13
  - url: https://code.visualstudio.com/docs/copilot/agents/background-agents
    label: "Background Agents documentation"
    verified: 2026-04-13
---

# What's New in Copilot for VS Code: v1.108 – v1.115

> **The Question This Talk Answers:**
> *"What are the most impactful new Copilot features in VS Code's recent releases, and how do I start using them today?"*

**Duration:** 45-60 minutes | **Target Audience:** Developers using GitHub Copilot in VS Code

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Every developer using Copilot in VS Code should know what shipped. These features are available today and change daily workflows. |
| **Compelling** | 🟢 High | Organized by theme so practitioners see how features connect. Concrete settings and demos for each capability. |
| **Actionable** | 🟢 High | Every feature is available now in VS Code 1.108+. Settings provided inline. Enable features during or right after the talk. |

**Overall Status:** 🟢 Ready to use

---


## Eight Releases at a Glance

> **Note:** Starting with v1.111 (March 2026), VS Code moved to **weekly stable releases**.

| Release | Date | Headline Theme |
|---------|------|----------------|
| **v1.115** | April 8, 2026 | **VS Code Agents companion app**, terminal tools for background commands, browser tool improvements [^9] |
| **v1.114** | April 1, 2026 | Video in chat, Copy Final Response, simplified #codebase semantic search, /troubleshoot previous sessions, TypeScript 6.0 [^8] |
| **v1.113** | March 25, 2026 | **Chat Customizations editor**, configurable thinking effort, **nested subagents**, MCP in CLI/Claude agents, session forking [^7] |
| **v1.112** | March 18, 2026 | **Integrated browser debugging**, Copilot CLI Autopilot, **MCP server sandboxing**, image/binary support, **monorepo customizations** [^6] |
| **v1.111** | March 9, 2026 | **Weekly releases begin**, **Autopilot mode**, agent permissions picker, agent-scoped hooks, debug events snapshot [^5] |
| **v1.110** | February 2026 | Agent Plugins, agentic browser tools, context compaction, session forking, /create-* commands, Explore subagent [^1] |
| **v1.109** | January 2026 | Claude Agent preview, Agent Skills GA, terminal sandboxing, Copilot Memory, MCP Apps, integrated browser [^2] |
| **v1.108** | December 2025 | Agent Skills (experimental), agent sessions UX improvements, terminal IntelliSense rework, 6,000 issues closed [^3] |

---

## 🧠 The Shift

> **The Core Insight:** From **one AI assistant you converse with** to **a team of specialized AI agents you orchestrate across local, background, cloud, and Claude sessions — now with full autonomy via Autopilot**

---

<!-- 🎬 MAJOR SECTION: Autopilot & Agent Autonomy -->
## Autopilot & Agent Autonomy (v1.111 → v1.115)

The biggest evolution in recent releases is **agent autonomy**. Agents can now work completely independently, approving their own actions and iterating until tasks complete.

### Autopilot Mode (v1.111)

**Autopilot** lets agents operate fully autonomously — auto-approving tool calls, retrying on errors, and continuing until the task is complete [^5]:

```json
// Enable Autopilot mode (on by default in Insiders)
"chat.autopilot.enabled": true
```

### Permission Levels (v1.111 → v1.112)

The permissions picker in Chat view controls agent autonomy per-session [^5] [^6]:

| Permission Level | Behavior |
|-----------------|----------|
| **Default Approvals** | Uses your configured approval settings with confirmation dialogs |
| **Bypass Approvals** | Auto-approves all tool calls, auto-retries on errors |
| **Autopilot** | Full autonomy: auto-approves, auto-retries, auto-responds to questions, continues until `task_complete` |

**New in v1.112:** Copilot CLI sessions now support the same permission levels [^6].

### VS Code Agents Companion App (Preview, v1.115)

A new companion app ships alongside VS Code Insiders, built specifically for agent-native development [^9]:

- **Parallelize tasks** — Run agent sessions across multiple repos simultaneously (each in its own worktree)
- **Monitor and review** — Track session progress, view diffs inline, leave feedback, create PRs
- **Customizations carry over** — All your instructions, agents, skills, MCP servers, hooks, and themes work in the Agents app
- **No extra install** — Ships with VS Code Insiders; launch from Command Palette: **Chat: Open Agents Application**

```json
// The Agents app uses the same customization files as VS Code
// No additional configuration needed
```

---

<!-- 🎬 MAJOR SECTION: Agent Sessions & Orchestration -->
## Agent Sessions & Orchestration

The biggest evolution across these three releases is how VS Code manages multiple agent sessions. What started as a single Chat view conversation is now a unified multi-agent platform [^6].

### Agent Sessions in the Chat View (v1.108)

Agent sessions are integrated directly into the Chat view [^3]:

- **Compact mode** — Shows the three most recent sessions when Chat view is narrow
- **Side-by-side mode** — Full session list with search and filters when Chat view is wide
- **Status indicators** — In-progress, unread, needs attention (visible in the VS Code command center)

```json
// Control orientation
"chat.viewSessions.orientation": "sideBySide"  // or "stacked", "auto"
```

### Switching and Delegating Between Agent Types (v1.108 → v1.110)

VS Code now supports four agent types optimized for different workflows [^1] [^2]:

| Agent Type | Best For | Key Trait |
|-----------|---------|----------|
| **Local** | Interactive planning, exploration | Real-time in Chat view |
| **Background** | Autonomous multi-file tasks | Runs in isolated Git worktree |
| **Cloud** | Cross-repo operations at scale | GitHub-hosted infrastructure |
| **Claude** | Complex reasoning, architecture | Anthropic SDK with thinking tokens |

The session type picker lets you start in one mode and hand off to another — plan locally, then click **Continue in → Background** to let the agent implement autonomously while you continue working [^2].

### Background Agents with Git Worktree Isolation (v1.108)

Background agents run in dedicated Git worktrees, preventing conflicts with your active workspace [^3]:

- Agent creates a new worktree automatically for the session
- Changes are committed per turn to the worktree — your main workspace is untouched
- Review via diff view when the agent completes; apply all, cherry-pick, or discard
- Multiple background agents can run simultaneously in separate worktrees

```json
// Copy extra files into worktrees (e.g., git-ignored config)
"git.worktreeIncludeFiles": ["config/local.json", ".env.local"]
```

**New in v1.110:** Background agents now support `/compact` for manual context compaction, slash commands for prompts/hooks/skills, and session renaming [^1].

### Parallel Subagents & Explore (v1.108 → v1.110)

Agents can delegate subtasks to **subagents** that operate in their own context windows [^2] [^3]. Subagents run in parallel, significantly speeding up tasks that can be split into independent parts.

**New in v1.110:** A dedicated **Explore subagent** handles all codebase research for the Plan agent [^1]. Explore is read-only, uses only search and file read tools, and runs on fast models (Claude Haiku 4.5, Gemini 3 Flash) by default.

```json
// Override the model used by Explore
"chat.exploreAgent.defaultModel": "claude-haiku-4-5"
```

### Session Management (v1.109 → v1.110)

A new experimental welcome page surfaces your agent sessions front and center when you open VS Code [^2]:

```json
"workbench.startupEditor": "agentSessionsWelcomePage"
```

**New in v1.110:** Fork sessions with `/fork` to branch conversations without losing context. Context compaction (`/compact`) manually summarizes history when approaching context limits. Plans persist to session memory across turns [^1].

### Nested Subagents (v1.113)

Subagents can now invoke other subagents, enabling complex multi-step workflows [^7]:

```json
// Enable nested subagent invocations
"chat.subagents.allowInvocationsFromSubagents": true
```

This unlocks recursive task execution — an orchestrator agent can delegate to specialist agents, which can further delegate subtasks.

### MCP in Copilot CLI & Claude Agents (v1.113)

MCP servers configured in VS Code are now available to Copilot CLI and Claude agents [^7]. This bridges your workspace MCP configuration to all agent types:

- User-defined MCP servers work across all session types
- Workspace MCP servers (from `mcp.json`) are bridged automatically
- Session forking also works in Copilot CLI and Claude agents

```json
// Fork sessions in Copilot CLI (enabled by default in Insiders)
"github.copilot.chat.cli.forkSessions.enabled": true
```

---

<!-- 🎬 MAJOR SECTION: Agent Customization -->
## Agent Customization

### Chat Customizations Editor (Preview, v1.113)

A unified UI for managing all chat customizations in one place [^7]:

- **Organized tabs** for custom instructions, prompt files, custom agents, and agent skills
- **Embedded code editor** with syntax highlighting and validation
- **AI-assisted generation** — create customizations from scratch or have AI generate them
- **Marketplace browsing** — add MCP servers and agent plugins directly

Open via: **Configure Chat (gear icon)** in Chat view, or **Chat: Open Chat Customizations** from Command Palette.

### Agent Skills — From Experimental to GA (v1.108 → v1.109)

Agent Skills package domain expertise into reusable folders that agents load on-demand. Skills went from experimental in v1.108 to **generally available and enabled by default** in v1.109 [^2] [^3]:

```
.github/skills/
  api-design/
    SKILL.md          # Instructions, templates, validation
  security-review/
    SKILL.md
```

Each `SKILL.md` has a description in its frontmatter — agents match skills to tasks automatically.

```json
// Skills are enabled by default in v1.109+
"chat.useAgentSkills": true,

// Add custom skill locations
"chat.agentSkillsLocations": {
  "~/.copilot/skills": true,
  "shared/team-skills": true
}
```

Extension authors can also package skills using the `chatSkills` contribution point [^2].

### Agent Plugins (Experimental, v1.110)

Agent Plugins are prepackaged bundles of chat customizations — skills, commands, agents, MCP servers, and hooks — installable directly from the Extensions view [^1]:

```json
// Enable agent plugins
"chat.plugins.enabled": true,

// Add additional plugin marketplaces (GitHub repos)
"chat.plugins.marketplaces": ["copilot-plugins", "awesome-copilot"],

// Register local plugin directories
"chat.plugins.paths": {"/path/to/local/plugin": true}
```

Search and install plugins with `@agentPlugins` in the Extensions view or via the **Chat: Plugins** command.

### Custom Agent Controls (v1.109)

Custom agents (`.agent.md` files) gained powerful new attributes [^2]:

- **`user-invokable: false`** — Create agents accessible only as subagents, not from the agents dropdown
- **`disable-model-invocation`** — Prevent an agent from being invoked automatically by other agents
- **`agents: ['Modify', 'Search']`** — Restrict which subagents a given agent can invoke
- **Multiple model support** — Specify fallback models in order of preference

```markdown
---
name: architect
model: ['Claude Sonnet 4.5 (copilot)', 'GPT-5 (copilot)']
tools: ['readFiles', 'codeSearch', 'agent']
agents: ['Modify', 'Search']
user-invokable: true
---

You are an experienced software architect...
```

### Organization-Wide Instructions (v1.108 → v1.109)

**Org-level custom agents** and **org-level custom instructions** let GitHub organizations enforce consistent AI guidance across all developers [^2] [^3]:

```json
// Enabled by default in v1.109+
"github.copilot.chat.organizationInstructions.enabled": true
```

### Create Agent Customizations from Chat (v1.110)

Generate agent customization files directly from conversations using `/create-*` slash commands [^1]:

- `/create-prompt` — Generate a reusable prompt file
- `/create-instruction` — Generate an instruction file for project conventions
- `/create-skill` — Extract a multi-step workflow into a skill package
- `/create-agent` — Create a specialized custom agent persona
- `/create-hook` — Create a hook configuration for lifecycle automation

After debugging an issue, use `/create-skill` to capture the procedure as reusable expertise. Natural language works too: "save this workflow as a skill".

### `/init` — Bootstrap Your Workspace for AI (v1.109)

The new `/init` slash command analyzes your project structure and generates a tailored `copilot-instructions.md` or `AGENTS.md` file automatically [^2].

### Agent Debug Panel (Preview, v1.110 → v1.112)

The new Agent Debug panel provides deep visibility into chat sessions and customization loading [^1]:

- Real-time chat events including system prompts, tool calls, and customization events
- See exactly which prompt files, skills, hooks, and agents are loaded for a session
- Chart view displays visual hierarchy of events for quick structural understanding
- Replaces the old Diagnostics chat action with richer detail

Open from Command Palette: **Developer: Open Agent Debug Panel**, or select the gear icon in Chat view → **View Agent Logs**.

**New in v1.111:** Debug events snapshot — attach `#debugEventsSnapshot` as context in chat to troubleshoot agent behavior [^5].

**New in v1.112:** Export/import debug logs for offline analysis and sharing. The `/troubleshoot` skill analyzes logs directly in conversation [^6].

### Agent-Scoped Hooks (Preview, v1.111)

Custom agent frontmatter now supports hooks that only run for that specific agent [^5]:

```markdown
---
name: security-reviewer
hooks:
  preProcess: validate-scope
  postProcess: generate-report
---
```

Enable with: `"chat.useCustomAgentHooks": true`

### Monorepo Customizations Discovery (v1.112)

In monorepo setups, VS Code now discovers customization files from parent folders up to the repository root [^6]:

```json
// Enable parent repository discovery
"chat.useCustomizationsInParentRepositories": true
```

This applies to all customization types: instructions, prompt files, custom agents, skills, and hooks. Share repository-wide guidance across all packages without opening the full monorepo.

---

<!-- 🎬 MAJOR SECTION: Claude & Anthropic Integration -->
## Claude & Anthropic Integration

### Claude Agent (v1.109 → v1.110)

VS Code supports the **Claude Agent SDK** directly — delegate tasks using the Anthropic agent harness with models from your GitHub Copilot subscription [^2]. Claude Agent appears as a session type alongside Local, Background, and Cloud.

**New in v1.110:** Steering and queuing for mid-conversation redirects, session renaming, context window rendering with compaction, additional slash commands (`/compact`, `/agents`, `/hooks`), and significant performance improvements [^1].

### Thinking Tokens (v1.108 → v1.113)

Anthropic models now show **thinking tokens** — visible reasoning that shows hypothesis formation, tool selection, and error recovery in real-time [^2]:

```json
// Choose detailed or compact thinking style
"chat.thinking.style": "detailed",

// Collapse tool sections to reduce noise
"chat.agent.thinking.collapsedTools": ["terminal", "search"],

// Auto-expand failing tool calls
"chat.tools.autoExpandFailures": true
```

The Messages API with **interleaved thinking** enables Claude to reason between tool calls, providing more contextual multi-step responses [^2].

**New in v1.113:** Configurable thinking effort directly in the model picker — no settings needed [^7]. Select a reasoning model (Claude Sonnet 4.6, GPT-5.4) and choose Low/Medium/High effort. The picker label shows the current level (e.g., "GPT-5.3-Codex · Medium").

> **Note:** The `github.copilot.chat.anthropic.thinking.budgetTokens` and `github.copilot.chat.responsesApiReasoningEffort` settings are deprecated in favor of the model picker UI.

### Additional Claude Features (v1.109 → v1.113)

- **Tool search tool** — Helps Claude discover the most relevant tools from a large pool [^2]
- **Context editing (Experimental)** — Clears tool results and thinking tokens from previous turns [^2]
- **`getDiagnostics` tool** — Let the agent access editor and workspace problems (v1.110) [^1]
- **Custom thinking phrases** — Customize loading text during reasoning (v1.110) [^1]
- **Claude session listing via SDK** — Sessions now use official Claude agent SDK APIs (v1.113) [^7]

```json
"chat.agent.thinking.phrases": {
  "mode": "replace",
  "phrases": ["Analyzing architecture...", "Evaluating patterns..."]
}
```

---

<!-- 🎬 MAJOR SECTION: Security & Trust -->
## Security & Trust

### MCP Server Sandboxing (v1.112)

Run locally configured stdio MCP servers in a sandboxed environment on macOS and Linux [^6]:

```json
// In mcp.json - enable per-server sandboxing
{
  "servers": {
    "my-server": {
      "command": "node",
      "args": ["./server.js"],
      "sandboxEnabled": true
    }
  }
}
```

When a sandboxed server needs additional folder or domain access, VS Code prompts for permission and updates the sandbox configuration.

### Terminal Sandboxing (v1.109 → v1.110)

OS-level sandboxing restricts agent-executed terminal commands [^2]:

- **File system**: Read/write only within the workspace directory
- **Network**: Blocked by default; specific domains can be allowlisted
- **Supported on**: macOS (`sandbox-exec`) and Linux (Landlock/seccomp)

```json
{
  "chat.tools.terminal.sandbox.enabled": true,
  "chat.tools.terminal.sandbox.network": ["github.com", "npmjs.com"]
}
```

**New in v1.110:** Trusted domains can be selected via `allowTrustedDomains` in network settings. No installation required on macOS; Linux works without ripgrep. Improved detection with clear feedback on blocked domains [^1].

### Auto-Approval & YOLO Mode (v1.108 → v1.110)

Auto-approval has expanded progressively across releases [^1] [^2] [^3]:

| Release | New Auto-Approved Commands |
|---------|---------------------------|
| v1.108 | `git ls-files`, `rg`, `sed`, workspace npm scripts via `npm`/`pnpm`/`yarn` |
| v1.109 | `Set-Location`, `dir`, `docker` (safe sub-commands), `npm`/`yarn`/`pnpm` (safe sub-commands) |
| v1.110 | `/autoApprove` and `/yolo` slash commands for global auto-approve toggle |

```json
"chat.tools.terminal.enableAutoApprove": true,
"chat.tools.terminal.autoApproveWorkspaceNpmScripts": true
```

**New in v1.110:** Toggle auto-approve directly from chat with `/autoApprove` or `/yolo` (and disable with `/disableAutoApprove` or `/disableYolo`) [^1].

### Terminal Tool Improvements (v1.109 → v1.110)

- **Richer command details** — Inline syntax highlighting for Python/Node/Ruby, working directory display, command intent description on hover [^2]
- **Output streaming** — Long-running commands auto-expand to show progress; quick commands stay collapsed [^2]
- **Interactive input** — Embedded terminals support direct typing for confirmation prompts [^2]
- **Timeout property** — Required on all terminal tool calls; prevents hung processes [^2]
- **Background management** — `awaitTerminal` and `killTerminal` tools for proper lifecycle control [^2]
- **No shell history** — Agent-executed commands no longer appear in shell history (v1.108) [^3]
- **Collapsible terminal calls** — Terminal output displayed as collapsible sections to reduce noise (v1.110) [^1]
- **Prevent auto-suspend** — VS Code asks the OS not to suspend while chat requests run (v1.110) [^1]

---

<!-- 🎬 MAJOR SECTION: Chat UX & Productivity -->
## Chat UX & Productivity

### Integrated Browser Debugging (v1.112)

Debug web apps end-to-end without leaving VS Code [^6]:

- Set breakpoints, step through code, inspect variables in an integrated browser
- Supports most Chrome and Edge configurations
- Self-signed certificate bypass for local development

```json
"workbench.browser.enableChatTools": true
```

**New in v1.115:** Browser agent tools have better labels with links to target tabs, long-running script support, and reduced duplicate tab opening [^9].

### Agentic Browser Tools (Experimental, v1.110 → v1.115)

Agents can now autonomously interact with the integrated browser to validate web app changes while building them [^1]:

- **Page navigation**: `openBrowserPage`, `navigatePage`
- **Page content**: `readPage`, `screenshotPage`
- **User interaction**: `clickElement`, `hoverElement`, `dragElement`, `typeInPage`, `handleDialog`
- **Custom automation**: `runPlaywrightCode`

Pages opened by agents run in private, in-memory sessions. Explicitly share a page to give the agent temporary access.

### Terminal Tools Improvements (v1.115)

New capabilities for agents to interact with background terminals [^9]:

- **`send_to_terminal` tool** — Send input to background terminals (passwords, confirmations)
- **Background notifications** — Agents are notified when background commands complete or need input

```json
// Enable background terminal notifications (experimental)
"chat.tools.terminal.backgroundNotifications": true
```

### Simplified Workspace Search (v1.114)

The `#codebase` tool is now purely semantic — no more fuzzy text search fallback [^8]:

- Consistent, high-quality semantic search results
- Unified index management (no more local vs remote distinction)
- VS Code builds and manages indexes automatically on demand
- Workspaces that had local indexes will need reindexing

### /troubleshoot for Previous Sessions (v1.114)

Diagnose chat issues from any previous session, not just the current one [^8]:

```
/troubleshoot #session
```

This triggers a session picker to select from previous chat sessions for analysis.

### Image & Video Support (v1.112 → v1.114)

- **Image/binary file support** (v1.112) — Agents can read images and binary files (hexdump format) [^6]
- **Image carousel** (v1.112) — View agent-generated images in a dedicated viewer [^6]
- **Video preview** (v1.114) — Chat image carousel now supports video playback [^8]

```json
"chat.imageCarousel.enabled": true,
"imageCarousel.explorerContextMenu.enabled": true
```

### Copy Final Response (v1.114)

Copy only the final Markdown response, excluding tool calls and process details [^8]. Right-click in chat → **Copy Final Response**.

### Tools for Usages and Rename (v1.110)

New `usages` and `rename` tools leverage existing LSP capabilities for precise code navigation and refactoring [^1]. Agents should pick these up automatically, but you can hint with `#rename` or `#usages`.

### Mermaid Diagrams in Chat (v1.109)

Chat responses can now render interactive Mermaid diagrams — flowcharts, sequence diagrams, and more. Pan, zoom, and open in a full-sized editor [^2].

### Ask Questions Tool (v1.109 → v1.110)

Instead of making assumptions, the agent can present clarifying questions with single/multi-select options, free text, and recommended answers. The **Plan agent** uses this in a structured 4-phase workflow: Discovery → Alignment → Design → Refinement [^2].

**New in v1.110:** The tool moved into VS Code core for improved reliability. Send steering messages without dismissing questions first. Keyboard navigation with Alt+N/Alt+P [^1].

### Context Window & Compaction (v1.109 → v1.110)

A context window indicator in the chat input area shows token usage breakdown by category on hover [^2].

**New in v1.110:** Manual context compaction with `/compact` summarizes conversation history to free up space. Add instructions like `/compact focus on database decisions`. Available for local, background, and Claude sessions [^1].

### Copilot Memory (Preview, v1.109)

Persistent context across sessions — the agent can store and recall important information like preferences, conventions, and project context [^2]:

```json
"github.copilot.chat.copilotMemory.enabled": true
```

**New in v1.110:** Plans created by the Plan agent persist to session memory and stay available across turns, including after context compaction [^1].

### Integrated Browser (Preview, v1.109)

A full integrated browser replaces the limited Simple Browser. Sign into websites, use DevTools, send elements to chat for AI assistance [^2]:

```json
"workbench.browser.openLocalhostLinks": true,
"simpleBrowser.useIntegratedBrowser": true
```

### MCP Apps (v1.109)

MCP servers can display rich interactive UI in the client — flame graphs, custom visualizations, and more [^2].

### Chat UX Improvements (v1.110)

- **Redesigned model picker** — Organized sections (Auto, Featured, Recent, Other), search box, rich hover with model capabilities [^1]
- **Contextual tips** — Feature discovery suggestions based on your usage patterns (`chat.tips.enabled`) [^1]
- **Inline chat hover mode** — New lightweight UI via `inlineChat.renderMode` [^1]
- **Inline chat affordance** — Easier access to inline chat via `inlineChat.affordance` (editor or gutter) [^1]
- **Edit mode deprecated** — Agent mode now handles everything; edit mode hidden by default [^1]

### External Indexing for Non-GitHub Workspaces (v1.109)

Workspaces not hosted on GitHub can now be remotely indexed for fast semantic search (`#codebase`), providing the same code search experience as GitHub-hosted repos [^2].

### Language Models Editor (v1.108 → v1.109)

A centralized editor for managing all language models — toggle visibility, add providers, configure API keys, manage multiple configurations per provider [^2] [^3]. Model configurations are now stored in a dedicated `chatLanguageModels.json` file.

### Inline Chat UX Revamp (v1.108 → v1.110)

Inline chat is optimized for quick single-file code changes, with a lightweight contextual rendering mode [^2] [^3]. In v1.110, inline chat queues messages into existing agent sessions when files have pending changes [^1].

---

## 🧠 Mental Model Shift

> **The Core Insight:** From **one AI assistant you converse with** to **a team of autonomous AI agents you orchestrate — with Autopilot, they work independently until tasks complete**

### Move Toward ✅

- ✅ **Autopilot mode**: Let agents work autonomously; enable Autopilot for complex multi-step tasks
- ✅ **VS Code Agents app**: Run parallel sessions across repos with the new companion app (Insiders)
- ✅ **Multi-session workflows**: Plan locally → implement in background → review worktree diff → merge selectively
- ✅ **Domain-specific Skills**: Capture team expertise once in `SKILL.md` files; agents apply it automatically
- ✅ **Visible reasoning**: Use thinking effort picker (Low/Medium/High) on complex tasks
- ✅ **Sandboxed autonomy**: Enable Autopilot with MCP server sandboxing for safe autonomous operation
- ✅ **Organization consistency**: Org-level agents and instructions enforce standards across teams
- ✅ **Agent Plugins**: Install prepackaged customizations from Extensions view for instant capability boosts
- ✅ **Browser debugging**: Let agents debug web apps autonomously with integrated browser

### Move Away From ⚠️

- ⚠️ **Single long conversations**: Context overflow degrades quality; use subagents and session handoffs instead
- ⚠️ **Manual approval fatigue**: Use Bypass Approvals or Autopilot instead of clicking "allow" 50 times
- ⚠️ **Per-developer customization**: Use Chat Customizations editor for unified management
- ⚠️ **Separate tool configs**: Monorepo discovery shares customizations automatically

### Move Against 🛑

- 🛑 **Unsandboxed Autopilot**: Never enable Autopilot without MCP/terminal sandboxing
- 🛑 **Context dumping**: Never paste an entire codebase — use `#codebase` semantic search, subagents, and targeted context

---

## ✅ What You Can Do Today

**Immediate (5 minutes):**
- [ ] Update VS Code to v1.115+
- [ ] Try Autopilot: enable `"chat.autopilot.enabled": true`, then select Autopilot in permissions picker
- [ ] Try `/init` to bootstrap workspace instructions for your project
- [ ] Use the thinking effort picker in model selector (Low/Medium/High)
- [ ] Try `/fork` to branch a conversation for exploring alternatives

**Short-Term (30 minutes):**
- [ ] Open Chat Customizations editor (gear icon in Chat view) to explore unified management
- [ ] Enable terminal sandboxing: `"chat.tools.terminal.sandbox.enabled": true`
- [ ] Enable MCP server sandboxing in `mcp.json` with `"sandboxEnabled": true`
- [ ] Create your first Agent Skill in `.github/skills/` for a common team pattern
- [ ] Use `/compact` to manually compact a long conversation
- [ ] Try `/troubleshoot #session` to diagnose a previous chat session

**Explore Further (1 hour):**
- [ ] Enable nested subagents: `"chat.subagents.allowInvocationsFromSubagents": true`
- [ ] Enable monorepo customization discovery: `"chat.useCustomizationsInParentRepositories": true`
- [ ] Try VS Code Agents app (Insiders): Command Palette → **Chat: Open Agents Application**
- [ ] Enable background terminal notifications: `"chat.tools.terminal.backgroundNotifications": true`
- [ ] Use `/create-skill` to extract a debugging workflow from a conversation
- [ ] Try integrated browser debugging with `"workbench.browser.enableChatTools": true`
- [ ] Enable Copilot Memory: `"github.copilot.chat.copilotMemory.enabled": true`

---

## Key Settings Reference

Quick reference for all settings mentioned in this talk:

```json
{
  // Agent Sessions & Orchestration
  "chat.viewSessions.orientation": "sideBySide",
  "git.worktreeIncludeFiles": [],
  "chat.exploreAgent.defaultModel": "claude-haiku-4-5",

  // Agent Customization
  "chat.useAgentSkills": true,
  "chat.agentSkillsLocations": {},
  "chat.customAgentInSubagent.enabled": true,
  "github.copilot.chat.organizationInstructions.enabled": true,
  "chat.plugins.enabled": true,
  "chat.plugins.marketplaces": [],

  // Claude & Anthropic (thinking effort now in model picker UI)
  "chat.thinking.style": "detailed",
  "chat.tools.autoExpandFailures": true,
  "chat.agent.thinking.phrases": {},

  // Autopilot & Autonomy (v1.111+)
  "chat.autopilot.enabled": true,

  // Security & Trust
  "chat.tools.terminal.sandbox.enabled": true,
  "chat.tools.terminal.sandbox.network": [],
  "chat.tools.terminal.enableAutoApprove": true,
  "chat.tools.terminal.autoApproveWorkspaceNpmScripts": true,

  // Monorepo & Customization (v1.112+)
  "chat.useCustomizationsInParentRepositories": true,
  "chat.subagents.allowInvocationsFromSubagents": true,
  "chat.useCustomAgentHooks": true,

  // Productivity
  "github.copilot.chat.copilotMemory.enabled": true,
  "workbench.browser.openLocalhostLinks": true,
  "workbench.browser.enableChatTools": true,
  "github.copilot.chat.githubMcpServer.enabled": true,
  "chat.tips.enabled": true,
  "chat.imageCarousel.enabled": true,
  "chat.tools.terminal.backgroundNotifications": true,
  "inlineChat.renderMode": "hover",
  "inlineChat.affordance": "editor"
}
```

---

## Related Patterns

- **[Copilot Chat](../copilot-chat/)** — Deep dive on context mechanisms and chat architecture
- **[Copilot CLI](../copilot-cli/)** — Command-line Copilot experience
- **[Custom Agents & Skills](../copilot-primitives/)** — Comprehensive guide to agent customization primitives
- **[Terminal Sandboxing](../terminal-sandboxing/)** — Deep dive on sandboxing configuration
- **[Copilot Memory](../copilot-memory/)** — Detailed exploration of persistent context

See [DECISION-GUIDE.md](../DECISION-GUIDE.md) for complete navigation help.

---

## 📖 References

[^1]: **[VS Code Release Notes: February 2026 (v1.110)](https://code.visualstudio.com/updates/v1_110)** — Agent Plugins, agentic browser tools, context compaction, session forking, /create-* commands, Explore subagent

[^2]: **[VS Code Release Notes: January 2026 (v1.109)](https://code.visualstudio.com/updates/v1_109)** — Chat UX, Agent Sessions, Agent Customization, Claude Agent, terminal sandboxing, Copilot Memory, MCP Apps

[^3]: **[VS Code Release Notes: December 2025 (v1.108)](https://code.visualstudio.com/updates/v1_108)** — Agent Skills experimental, Agent Sessions view, terminal IntelliSense rework, housekeeping

[^4]: **[GitHub Copilot in VS Code Documentation](https://code.visualstudio.com/docs/copilot/overview)** — Comprehensive guide to Copilot features, agent types, and customization

[^5]: **[VS Code Release Notes: March 9, 2026 (v1.111)](https://code.visualstudio.com/updates/v1_111)** — Weekly releases begin, Autopilot mode, agent permissions picker, agent-scoped hooks, debug events snapshot

[^6]: **[VS Code Release Notes: March 18, 2026 (v1.112)](https://code.visualstudio.com/updates/v1_112)** — Integrated browser debugging, Copilot CLI Autopilot, MCP server sandboxing, image/binary support, monorepo customizations

[^7]: **[VS Code Release Notes: March 25, 2026 (v1.113)](https://code.visualstudio.com/updates/v1_113)** — Chat Customizations editor, configurable thinking effort, nested subagents, MCP in CLI/Claude agents, session forking

[^8]: **[VS Code Release Notes: April 1, 2026 (v1.114)](https://code.visualstudio.com/updates/v1_114)** — Video in chat, Copy Final Response, simplified #codebase semantic search, /troubleshoot previous sessions, TypeScript 6.0

[^9]: **[VS Code Release Notes: April 8, 2026 (v1.115)](https://code.visualstudio.com/updates/v1_115)** — VS Code Agents companion app, terminal tools for background commands, browser tool improvements

[^10]: **[Agent Plugins Documentation](https://code.visualstudio.com/docs/copilot/customization/agent-plugins)** — Installing and creating agent plugin bundles

[^11]: **[Agent Skills Documentation](https://code.visualstudio.com/docs/copilot/customization/agent-skills)** — Creating and using Agent Skills in VS Code

[^12]: **[Custom Agents Documentation](https://code.visualstudio.com/docs/copilot/customization/custom-agents)** — Defining custom agents with `.agent.md` files

[^13]: **[Background Agents Documentation](https://code.visualstudio.com/docs/copilot/agents/background-agents)** — Using background agents with Git worktree isolation

---

## 🎭 Behind the Scenes

### The Copilot Extension Unification

In v1.108, inline suggestions began being served from the GitHub Copilot **Chat** extension. By v1.109, the original GitHub Copilot extension was **fully deprecated** and auto-uninstalled on update [^2]. All AI functionality now lives in a single extension: GitHub Copilot Chat.

### Weekly Releases (v1.111+)

Starting with v1.111 (March 9, 2026), VS Code transitioned to **weekly stable releases** instead of monthly. This enables faster feature delivery and bug fixes, but means staying current requires more frequent updates [^5].

### Engineering Highlights

- **v1.108 Housekeeping**: The VS Code team closed **5,951 issues** across all repositories, including 2,872 in the core `microsoft/vscode` repo and 1,659 in `microsoft/vscode-copilot-release` [^3]
- **TypeScript-Go (tsgo)**: VS Code now defaults to TSGo for development, with built-in extensions compiling in under a second [^1]
- **Extension bundling with esbuild**: Most built-in extensions migrated from webpack to esbuild for faster builds [^1]
- **macOS DMG installer**: VS Code ships DMG images for native drag-and-drop installation [^2]
- **Windows 11 context menu**: Right-click in File Explorer now shows VS Code in the top-level context menu [^2]
- **Kitty graphics protocol**: Terminal now supports high-fidelity image rendering (v1.110) [^1]
- **Modal editors**: Experimental floating editor experience for Settings, Keyboard Shortcuts, etc. (v1.110) [^1]
- **Edit mode deprecated**: Hidden by default in v1.110, fully removed in v1.125 [^1]
- **Autopilot architecture** (v1.111): Autopilot builds on the existing bypass-approvals flow with a new state machine for autonomous operation — retry on failure, auto-respond to tool results, and completion detection [^5]
- **VS Code Agents app** (v1.115): The standalone companion app shares VS Code's core runtime, enabling parallel agent sessions without consuming IDE resources [^9]
- **TypeScript 6.0 support** (v1.114): Full semantic support for new TS 6.0 features including improved type inference [^8]
- **Simplified #codebase** (v1.114): Pure semantic search replaces fuzzy fallback, reducing false positives for large codebases [^8]
