---
status: active
updated: 2026-06-10
section: "Developers"
references:
  - url: https://code.visualstudio.com/docs/copilot/overview
    label: "GitHub Copilot in VS Code"
    verified: 2026-05-13
  - url: https://code.visualstudio.com/docs/copilot/customization/custom-instructions
    label: "Custom instructions in VS Code"
    verified: 2026-05-13
  - url: https://code.visualstudio.com/docs/copilot/customization/agent-skills
    label: "Agent Skills in VS Code"
    verified: 2026-05-13
  - url: https://code.visualstudio.com/docs/copilot/customization/mcp-servers
    label: "MCP Servers in VS Code"
    verified: 2026-05-13
  - url: https://code.visualstudio.com/docs/copilot/agents/background-agents
    label: "Background Agents in VS Code"
    verified: 2026-05-13
  - url: https://code.visualstudio.com/docs/copilot/customization/custom-agents
    label: "Custom Agents in VS Code"
    verified: 2026-05-13
  - url: https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
    label: "Adding repository custom instructions for GitHub Copilot"
    verified: 2026-05-13
  - url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli
    label: "About GitHub Copilot CLI"
    verified: 2026-05-13
  - url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review
    label: "Using Copilot Code Review"
    verified: 2026-05-13
  - url: https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent
    label: "About the Copilot coding agent"
    verified: 2026-05-13
  - url: https://code.visualstudio.com/updates/v1_120
    label: "VS Code release notes: May 2026 (v1.120)"
    verified: 2026-05-13
---

# GitHub Copilot Refresher: What's New and Important

> **The Question This Talk Answers:**
> *"Which Copilot capabilities are worth investing in right now — and how do we get set up in 30 minutes for a full-day hackathon?"*

**Duration:** 30 minutes | **Target Audience:** Developers (hackathon)

---

## 📊 Content Fitness

| Criterion | Assessment | Notes |
|-----------|-----------|-------|
| **Relevant** | 🟢 High | Copilot has expanded across 5+ surfaces; developers at a hackathon need fast orientation before they can move. Every item covered is available today. |
| **Compelling** | 🟢 High | The surface map alone is the "aha" moment — most developers use one surface when three would compound. The 30-minute setup ROI across an 8-hour hackathon is concrete and demonstrable. |
| **Actionable** | 🟢 High | Four copy-ready artifacts are included. The Hackathon Playbook section closes with a task menu developers reference all day. |

**Overall Status:** 🟢 Ready to use

---

## The Opportunity

### What's Now Possible

- **Agent Mode in VS Code**
  Set the Chat panel to Agent mode and Copilot executes multi-file, multi-step tasks autonomously — reading files, running terminal commands, iterating on errors — until the goal is met.[^1]

- **The Agents Window and Canvases**
  A dedicated companion app (stable preview as of v1.120[^12]) provides a dashboard for managing multiple parallel agent sessions, each in an isolated Git worktree, reviewable and steer-able from any browser via remote session support.[^5]

- **Customization that compounds**
  A `.github/copilot-instructions.md` file committed to the repo shapes every Copilot interaction — chat, Agent Mode, code review, CLI sessions, and the coding agent — from one configuration source.[^7]

- **MCP servers extend Copilot's reach**
  Model Context Protocol servers connect Copilot to local filesystems, databases, GitHub APIs, web fetchers, and custom tools — configured in a single JSON file with no plugin code required.[^4]

- **GitHub.com Copilot handles PR review and issue triage**
  Copilot can review pull requests and help with issue-driven work directly from the browser, which makes it a strong fit for review-heavy or async task management during a hackathon.[^9]

- **Code review runs as an AI agent on every PR**
  Copilot reviews pull requests like a thoughtful peer — flagging logic issues, style drift, and security smells — triggered manually or automatically on every open PR.[^9]

### The Emerging Practice

Copilot has become a **layered fleet**, not a single chat window. The developers who get the most out of a hackathon are the ones who spend the first 30 minutes on foundation work: a tight `copilot-instructions.md` with stack conventions, two or three MCP servers scoped to their project, and one Agent Mode test to confirm the setup works. That 30-minute investment then compounds across every task for the rest of the day.

The surface map matters too. Agent Mode in VS Code handles complex, multi-file implementation. The CLI handles DevOps, scripting, and terminal automation. GitHub.com Copilot handles PR review and async issue delegation from any device. Picking the right surface for each task type cuts context-switching time in half compared to routing everything through a single chat window.

The newest capability shift is **delegation fluency** — the move from "type code suggestions" to "describe a goal and review the result." Teams already comfortable with that shift are running two or three parallel background agents on independent branches simultaneously, reviewing diffs rather than writing code line by line.

---

## How It Works: The 2026 Copilot Landscape

### What It Does

GitHub Copilot in 2026 operates across five distinct surfaces, all sharing the same underlying model access, customization files, and MCP tool layer.[^1] A `copilot-instructions.md` written once applies equally to VS Code chat, Agent Mode, the coding agent, CLI sessions, and code review — the configuration investment compounds across every surface automatically.

### The Five Surfaces at a Glance

| Surface | Where | Best For |
|---------|-------|----------|
| **VS Code Chat** | Editor | Interactive coding, inline edits, quick questions, `#codebase` exploration |
| **VS Code Agent Mode** | Editor | Autonomous multi-file tasks, iterative implementation, background execution |
| **Agents Window / Canvases** | VS Code + browser | Parallel sessions, background agents, cross-device steering, session history |
| **GitHub.com Copilot** | Browser / mobile | PR review, issue triage, async coding-agent delegation |
| **Copilot CLI** | Terminal | DevOps automation, Plan Mode, parallel `/fleet` tasks, remote session control |

### Architecture Overview

Every surface shares three foundational layers.[^1] The **intelligence layer** provides model access (GPT-4.1, Claude Sonnet 4, Claude Opus 4 depending on task complexity) plus the content from customization files. The **tool layer** exposes file system access, terminal execution, browser interaction, and any MCP servers configured in `.vscode/mcp.json`. The **context layer** is shaped by `copilot-instructions.md`, path-specific instruction files, skills, and AGENTS.md — all version-controlled in the repository.

The practical implication: a well-configured repo gives every surface a head start. The same instructions that shape VS Code chat responses also apply when the coding agent opens a PR, when the CLI runs an autonomous task, and when Copilot reviews a pull request for style drift.

**Official Documentation:**
- 📖 **[GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview)** — Comprehensive capability overview[^1]
- 📖 **[Adding repository custom instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)** — How instructions reach all surfaces[^7]

---

## 🖼️ Visual Assets

No external images are included with this talk. Recommended visuals when generating a slide deck:

- **Surface map** — A layered diagram showing the five surfaces sharing one configuration and tool layer
- **Compounding stack** — The `instructions → skills → MCP → agents` layering model from the Copilot Primitives talk
- **Agent Mode task flow** — Goal input → file reads → edits → terminal execution → error iteration → completion

---

## 📦 Key Artifacts

### Primary Artifacts

*Shown inline with explanation in the major sections below*

- **`surface-cheatsheet.md`** — Quick-reference table for which Copilot surface to reach for in each hackathon scenario
- **`.github/copilot-instructions.md`** — Hackathon starter template that gives every Copilot surface project context in under 15 minutes
- **`.vscode/mcp.json`** — MCP server starter configuration connecting the three most useful hackathon servers
- **`hackathon-30min-setup.md`** — Minute-by-minute setup checklist plus a task menu for the most common hackathon scenarios

### Supporting Files

- **[Copilot Primitives talk](../copilot-primitives/)** — Deep dive on the full instructions → skills → agents configuration model
- **[Copilot CLI talk](../copilot-cli/)** — Full CLI reference including Plan Mode, `/fleet`, Chronicle memory, and remote sessions
- **[Copilot Code Review talk](../copilot-code-review/)** — Automatic review setup, custom review agents, and compliance enforcement

---

## 🎯 Mental Model Shift

> **The Core Insight:** Copilot is not a single chat window — it's a layered fleet of surfaces, agents, and tools that all compound from the same configuration foundation, and the developers who invest in that foundation first move the fastest all day.

### Move Toward (Embrace These Patterns)

- ✅ **Configuration-first hackathon start**: Spend 30 minutes on instructions, MCP, and one test task → every subsequent task benefits from project-aware context for the remaining hours[^2][^7]
- ✅ **Goal-oriented Agent Mode prompts**: Describe the outcome and constraints, not the steps → agents self-correct when they hit errors and find efficient paths through the codebase[^1]
- ✅ **Surface-task matching**: Pick the right surface for each task type → VS Code Agent Mode for implementation, CLI for scripting, and GitHub.com for async PR review[^8]

### Move Away From (Evolving Practices)

- 🔄 **Repeating context in every chat message**: Once instructions are in place, project conventions load automatically → reserve prompt space for the actual task, not the setup
- 🔄 **Single-surface Copilot use**: Using only VS Code chat misses CLI automation and async PR review → try one new surface per sprint during the hackathon
- 🔄 **Sequential implementation of parallel work**: Independent features run cleanly in separate background agent sessions simultaneously → shift to reviewing diffs rather than writing code in series

### Move Against (Active Resistance)

- 🛑 **Skipping instructions setup to "save time"**: Generic Copilot responses during a hackathon compound into hours of rework — the 15-minute setup is the highest-ROI activity of the opening hour
- 🛑 **Open-ended Agent Mode prompts on wide scope**: Agents need clear boundaries and acceptance criteria; vague prompts produce unfocused output that requires more review time than the code would have taken to write directly

> **What This Looks Like:** Two developers at a hackathon. One opens VS Code and starts chatting immediately. The other spends 20 minutes creating instructions and connecting an MCP server scoped to the project's database. By hour three, the second developer's agent tasks complete on the first try — no extra context, no rework. By hour six, they're running two background agents in parallel while reviewing diffs. Same tools, different starting investment.

---

## When to Use This Pattern

### Decision Tree

```
Q: What does the task need right now?
│
├─ Interactive coding, exploration, single-file edits
│  → VS Code Chat (Ask mode)
│  └─ Best for: one-file focus, quick Q&A, #codebase search
│
├─ Multi-file feature, autonomous implementation, iteration
│  → VS Code Agent Mode
│  └─ Best for: full feature builds, refactors, test scaffolding
│
├─ Multiple parallel tasks on independent branches
│  → Agents Window + Background Agents
│  └─ Best for: running feature A and feature B simultaneously
│
├─ Terminal automation, scripting, DevOps, CI/CD
│  → Copilot CLI
│  └─ Best for: build scripts, migrations, data transforms, GitHub Actions
│
├─ Review-heavy or async work
│  → GitHub.com Copilot
│  └─ Best for: PR review, issue triage, and async delegation
│
└─ Well-understood, bounded task — issue already written
   → Coding Agent (assign issue on GitHub.com)
   └─ Best for: async delegation while focused on other work
```

### Use These Patterns When

- The hackathon project has a defined stack that fits in a `copilot-instructions.md` file
- Tasks are bounded enough to express as goals with clear acceptance criteria
- The team is comfortable reviewing diffs rather than writing every line by hand
- Independent work streams exist that could run in parallel on separate branches

### Boundaries Worth Knowing

- **Agent Mode + large monorepos**: Long file trees consume context budget; scope tasks to specific modules and use `#codebase` search rather than broad directory reads
- **MCP servers require local tooling**: `npx`-based MCP servers need Node.js installed — verify dependencies before the hackathon clock starts
- **PR review is not a replacement for local validation**: Use Copilot on GitHub.com to catch issues early, but still run your own tests and checks before shipping
- **Coding agent needs a clear issue**: The agent's PR quality directly reflects the issue's clarity — vague issues produce vague PRs[^10]

---

<!-- 🎬 MAJOR SECTION: Landscape -->
## The Copilot Landscape: Which Surface for Which Task

Before choosing a task, choosing the right surface saves significant time. The surface cheatsheet below is the first artifact — paste it into the repo or pin it in a browser tab for quick reference throughout the hackathon.

### Surface Cheatsheet

```markdown
# surface-cheatsheet.md
# GitHub Copilot: Which Surface for What?

| Task                              | Surface                       | How to Start                                        |
|-----------------------------------|-------------------------------|-----------------------------------------------------|
| Interactive chat, inline help     | VS Code Chat (Ask mode)       | Ctrl+I or open Chat panel                           |
| Multi-file feature, autonomous    | VS Code Agent Mode            | Chat panel → mode selector → Agent                  |
| Parallel tasks, background agents | Agents Window                 | Command Palette: "Open Agents Application"          |
| Terminal, scripting, DevOps       | Copilot CLI                   | copilot -p "task description"                       |
| PR review, issue triage           | GitHub.com Copilot            | Open PR → Request review → Copilot                  |
| Async implementation              | Coding Agent                  | GitHub issue → Assignees → Copilot                  |
| Quick shell command help          | gh copilot suggest            | gh copilot suggest "how do I..."                    |
| Explain an unfamiliar command     | gh copilot explain            | gh copilot explain "[command]"                      |
```

### VS Code: Ask vs. Agent Mode

VS Code Copilot Chat operates in two primary modes. **Ask mode** is conversational — Copilot responds, suggests, and explains within the chat panel. **Agent mode** is autonomous — Copilot executes across files and the terminal.[^1]

In Agent mode, Copilot can:
- Read files across the entire workspace using `#codebase` search
- Write and edit files directly without copy-paste
- Run terminal commands and inspect their output, retrying when errors occur
- Iterate until the task criteria are met, not just until the first suggestion is produced
- Spawn **background agents** in isolated Git worktrees for long-running tasks

The mode selector is in the Chat input. Switching to Agent mode unlocks a tools picker showing which capabilities are active — including any MCP servers configured in `.vscode/mcp.json`.

### The Agents Window: Parallel Session Management

The VS Code Agents Window (stable preview, v1.120[^12]) is a dedicated companion app for managing multiple agent sessions simultaneously:

- Each session runs in its own Git worktree — active workspace is untouched throughout
- Sessions can be steered from any device via remote session URLs[^5]
- Completed sessions show all edits inline; apply selectively, cherry-pick, or discard
- The same instructions, skills, MCP servers, and hooks from VS Code apply automatically — zero additional configuration

For a hackathon, this means two developers can each run independent background agents on separate features, review diffs in the Agents Window between tasks, and apply selectively — multiplying team output without blocking each other's workspace.


<!-- 🎬 MAJOR SECTION: Agent Mode -->
## Agent Mode: Delegate, Don't Type

The highest-leverage shift in recent Copilot releases is **Agent Mode** — moving from "Copilot suggests the next line" to "Copilot implements the whole thing, fixes errors, and stops when the goal is met."[^1]

### How Agent Mode Works

1. **Goal intake** — Describe the task as an outcome with constraints: *"Add a `/users/:id` endpoint with input validation, Prisma query, and error handling matching existing patterns in `src/routes/`"*
2. **Context gathering** — The agent reads relevant files using `#codebase` search, building a picture of existing patterns before writing anything
3. **Implementation** — Edits happen directly to the workspace; `copilot-instructions.md` shapes conventions automatically without repeating them in the prompt
4. **Iteration** — Failed terminal commands trigger self-correction; failing tests trigger targeted fixes before the agent reports completion
5. **Completion** — When goal conditions are met, the agent stops and summarizes what changed and why

### Writing Effective Agent Mode Prompts

Goal-oriented prompts outperform step-by-step instructions in Agent Mode:

```
# Effective: outcome + context + hard constraints
"Add a password reset flow:
  - POST /auth/forgot-password sends a tokenized reset link via email
  - POST /auth/reset-password validates the token, updates the hashed password
  Follow patterns in src/routes/auth.ts for route structure and error handling.
  Tests required for both endpoints. No new npm dependencies."

# Less effective: enumerate every step
"First create a route file, then add the forgot-password endpoint,
 then create the email helper, then add the reset endpoint, then write tests..."
```

The agent needs three things: **what success looks like**, **where existing patterns live**, and **hard constraints** (tests required, no new deps, etc.). Instructions in `copilot-instructions.md` handle standing project constraints — prompts carry only task-specific context.

### The Hackathon Starter Instructions File

This is the highest-ROI artifact in the talk. Fill it in once and every Copilot surface — chat, Agent Mode, CLI, code review, coding agent — picks it up automatically.[^2][^7]

```markdown
# .github/copilot-instructions.md

# Project: [Your Project Name]
# Event: [Hackathon Name]

## Stack
- Frontend: [e.g., React 18 + TypeScript + Vite + Tailwind]
- Backend: [e.g., Node.js 22 + Express + Prisma 6]
- Database: [e.g., PostgreSQL 16]
- Testing: [e.g., Vitest + React Testing Library + Supertest]
- Deployment: [e.g., Vercel (frontend) + Railway (backend)]

## Code Conventions
- TypeScript everywhere; `any` type is not permitted
- `async/await` over callbacks or raw Promise chains
- Error handling: throw typed errors, never swallow exceptions silently
- Tests: co-locate `*.test.ts` files alongside each route handler
- Component files under 200 lines; split into sub-components when larger

## Architecture
- API routes in `src/routes/`; shared middleware at the router level
- All database access through Prisma in `src/db/`; no raw SQL queries
- Shared TypeScript types in `src/types/`; never duplicate type definitions
- Environment variables accessed only through `src/config.ts`

## Build & Run
- Install: `npm install`
- Dev server: `npm run dev`
- Tests: `npm test`
- Build: `npm run build`

## Agent Guidance
- New API endpoints always include a corresponding Prisma migration
- Never add npm dependencies without noting the reason in a comment
- Keep each PR to one feature or fix — no bundled refactors with features
- Tests must pass before considering any implementation task complete
```

**Key points:**
- The **Agent Guidance** block is the hackathon-specific section — this is where project-scoped guardrails live that prevent the agent from expanding scope during time-pressured work
- Fill in Stack and Architecture before starting any agent tasks — these are the highest-value lines for output quality
- Commit this file at the start of the hackathon; all teammates get identical project-aware Copilot behavior immediately

### Background Agents for Parallel Work

When a task is well-defined but will take time, background agents free the editor for other work:

- **Launch**: In the Chat panel, describe the task then click **Continue in Background**
- **Isolation**: The agent creates a new Git worktree — the main workspace is untouched throughout
- **Review**: When complete, a diff appears in the Agents Window; apply all edits, cherry-pick, or discard
- **Parallel**: Two or three background agents run simultaneously on independent tasks without conflict

A practical hackathon pattern: start a background agent on a database migration + model update, then use the editor for the frontend work that depends on the new fields. When the background agent finishes, review and apply, then continue the frontend task with the new schema available.

---

<!-- 🎬 MAJOR SECTION: Practical Stack -->
## The Practical Stack: MCP, CLI, and Code Review

Once Agent Mode is configured and instructions are in place, three additions cover most remaining hackathon Copilot value: MCP servers for tool reach, the CLI for terminal-native tasks, and code review for shipping confidently.

### MCP: Connecting Copilot to Project Tools

Model Context Protocol servers extend what Copilot can _do_ — not just what it knows.[^4] An MCP server lets the agent query a database, fetch a URL, search GitHub issues, read API documentation, or call a custom service without any plugin code.

Configure servers in `.vscode/mcp.json`:

```json
// .vscode/mcp.json
{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem",
               "${workspaceFolder}"],
      "type": "stdio"
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "type": "stdio",
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${env:GITHUB_TOKEN}"
      }
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"],
      "type": "stdio"
    }
  }
}
```

After saving, reload VS Code. MCP tools appear in the Agent Mode tools picker automatically — no further configuration needed.

**The three most useful hackathon MCP servers:**

| Server | Package | What It Unlocks |
|--------|---------|-----------------|
| `filesystem` | `@modelcontextprotocol/server-filesystem` | Structured directory reads, file creation outside the workspace |
| `github` | `@modelcontextprotocol/server-github` | Search issues, read PRs, fetch repo metadata, create issues programmatically |
| `fetch` | `@modelcontextprotocol/server-fetch` | Fetch any URL, parse live documentation, read external API specs |

Add database servers for data-heavy projects:
- SQLite: `@modelcontextprotocol/server-sqlite`
- PostgreSQL: `@modelcontextprotocol/server-postgres`

### Agent Skills: Reusable Workflows

Skills[^3] extend an agent with a specific capability — running the test suite with failure analysis, generating a Prisma schema diff, or calling a deployment API. Unlike MCP servers (which provide _data access_), skills wrap a _workflow or script_. For a hackathon, a test-runner skill is often the highest value addition:

```markdown
# .github/skills/test-runner/SKILL.md
---
name: Run and Fix Tests
description: Runs the test suite, reports failures with context, suggests fixes
---

## When to Use
When asked to run tests, diagnose test failures, or verify that changes pass.

## Steps
1. Run `npm test` and capture full output
2. For each failing test: identify the failure reason, locate the source file,
   explain the specific fix needed
3. If fixable without changing test intent, apply the fix and re-run to confirm

## Notes
- Always run the full suite, not individual files, unless scope is specified
- Report test coverage summary when `--coverage` flag is available
```

### Copilot CLI: Terminal-Native AI

The Copilot CLI runs as a terminal-resident agent — useful for tasks that are inherently command-line: scaffolding CI/CD workflows, running data migrations, managing infrastructure, or working on a remote machine.[^8]

```bash
# Run a task with full agent autonomy
copilot -p "Generate a GitHub Actions workflow that runs our test suite
            on every PR and posts coverage percentage as a PR check"

# Plan Mode: inspect intended actions before execution
copilot -p "Migrate all users table queries to the new Prisma v6 schema" --plan

# Quick shell command assistance
gh copilot suggest "find all TypeScript files modified in the last 24 hours"

# Explain an unfamiliar command
gh copilot explain "git log --oneline --graph --all --decorate"
```

**Plan Mode** is valuable during a hackathon where the codebase changes rapidly: the agent shows a list of planned actions and waits for confirmation. This adds ~30 seconds but prevents surprise file changes during a live demo or near a submission deadline.

### Code Review: Ship with Confidence

Before pushing to a demo or final submission, Copilot code review catches what fatigue misses.[^9] Request a review on any PR from the GitHub.com interface:

1. Open the pull request on GitHub.com
2. Click **Request review** → choose **Copilot**
3. Review comments appear inline on the diff within 60–120 seconds

Copilot review reliably flags: logic errors and off-by-one bugs, missing error handling and unguarded edge cases, security patterns (hardcoded secrets, injection risks, unvalidated input), and style drift from conventions in `copilot-instructions.md`.

Worth knowing: Copilot review is a fast first-pass quality gate — it catches the bugs that slip through after 10 hours of focused coding, not a substitute for an architectural review on critical design decisions.


<!-- 🎬 MAJOR SECTION: Hackathon Playbook -->
## Hackathon Playbook: 30-Minute Setup + Task Menu

The setup below takes 30 minutes at the start of the event and compounds across the full day. The task menu is a reference to keep open throughout — reach for it whenever a new task starts.

### The 30-Minute Setup Checklist

```markdown
# hackathon-30min-setup.md

## Minutes 0–5: Enable Agent Mode
- [ ] Open VS Code → Copilot Chat panel
- [ ] Click the mode selector → choose Agent
- [ ] Quick validation: "List the top-level directories in this repo and
      describe what each one contains"
      → Confirm the agent reads the workspace correctly

## Minutes 5–15: Custom Instructions
- [ ] Create .github/copilot-instructions.md
      (use the starter template from this talk)
- [ ] Fill in: Stack, Architecture, Build & Run, Agent Guidance sections
- [ ] Test with a real task: "Add a hello world GET endpoint at /healthz
      following existing route patterns"
      → Confirm output matches stack conventions: TypeScript, correct file
        locations, co-located test file created automatically

## Minutes 15–25: MCP Servers
- [ ] Create .vscode/mcp.json (use the starter from this talk)
- [ ] Add `filesystem` server (universally useful)
- [ ] Add `github` server if working with GitHub APIs or issues
- [ ] Add a database server if the project has one:
        SQLite  → @modelcontextprotocol/server-sqlite
        Postgres → @modelcontextprotocol/server-postgres
- [ ] Reload VS Code window
- [ ] Confirm MCP tools appear in the Agent Mode tools picker

## Minutes 25–30: First Real Task + Bonus Surfaces
- [ ] Run one real agent task: "Scaffold the initial project structure and
      the first [feature] endpoint with a co-located test"
      → Benchmark how much the instructions improved the first result
- [ ] Visit github.com/spark → describe the hackathon UI in 2 sentences
- [ ] If not already installed:
        npm install -g @github/copilot-cli
        copilot --version

---

## Hackathon Task Menu

| Scenario                      | Best Surface           | Starter Prompt / Command                                                    |
|-------------------------------|------------------------|-----------------------------------------------------------------------------|
| Scaffold a new feature        | Agent Mode             | "Add [feature] with full CRUD, Prisma schema, error handling, and tests"    |
| Debug failing tests           | Agent Mode             | "Fix all failing tests in [file]. Explain each fix before applying it."     |
| Write API documentation       | Agent Mode             | "Generate OpenAPI docs for all routes in src/routes/"                       |
| Add a database migration      | Agent Mode + MCP       | "Add [field] to [model], generate migration, update all affected queries"   |
| Refactor a module             | Agent Mode             | "Refactor [module] to [pattern]. All tests must remain green."              |
| Review a PR before merge      | GitHub.com             | Open PR → Request review → Copilot                                          |
| Write a CI/CD workflow        | Copilot CLI            | copilot -p "write a GitHub Actions workflow that [task]"                    |
| Understand the codebase       | VS Code Chat           | #codebase explain the overall architecture and main data flows              |
| Run two features in parallel  | Agents Window          | Launch background agents on branches feature/A and feature/B                |
| Explain a shell command       | gh copilot             | gh copilot explain "[command]"                                              |
| Get a shell command fast      | gh copilot             | gh copilot suggest "how do I [task] in bash"                                |
```

---

## Real-World Use Cases

### Use Case 1: Day-One Project Bootstrap

**The Scenario:** A hackathon team has 30 minutes from kickoff to their first committed feature. The codebase is a cloned starter template with no project-specific Copilot configuration.

**How It Works:** One developer creates `copilot-instructions.md` with stack and conventions while another sets up `mcp.json`. A third runs an Agent Mode task to scaffold the initial data model. By the 30-minute mark, all three have identical project-aware Copilot behavior and the first feature is building in a branch.

**Example:**
```
Agent Mode prompt:
"Read the starter template and scaffold a full user authentication module:
 POST /auth/register (hashed password, validation), POST /auth/login
 (JWT response), GET /auth/me (JWT-protected). Follow conventions in
 copilot-instructions.md. Tests required for all three endpoints."
```

**What You Get:** Authentication module with routes, Prisma schema, JWT utilities, and test coverage — produced in ~8 minutes, ready for diff review and iteration. Total human writing: the prompt.

---

### Use Case 2: Review-First Submission

**The Scenario:** The team has a working feature but wants a fast quality gate before the final demo or merge.

**How It Works:** One developer opens the pull request on GitHub.com and asks Copilot to review the diff. The agent flags missing validation, brittle error handling, and style drift, then the developer fixes the important items before the final push.

**Example:**
```
GitHub.com Copilot review prompt:
"Review this PR for logic errors, missing edge-case handling, security smells,
 and convention drift. Prioritize the top 5 issues that would matter in a live demo."
```

**What You Get:** A faster pre-demo quality pass with fewer obvious mistakes in the final build.

---

### Use Case 3: Parallel Feature Development

**The Scenario:** Two independent features are on the board but only one developer is free. Both need to land before the submission deadline.

**How It Works:** The developer defines both tasks with clear acceptance criteria, launches Feature A as a background agent in its own Git worktree, then implements Feature B interactively in the main editor. When the background agent completes, they review the diff in the Agents Window, apply it, run tests, and push.

**What You Get:** Two features merged in roughly the time it would have taken to write one — with test coverage on both. The parallel pattern is especially effective for teams with independent frontend and backend work.

---

### Use Case 4: Pre-Submit Code Review

**The Scenario:** 20 minutes before submission. All features are working but nobody has reviewed the full diff for obvious problems — fatigue is real.

**How It Works:** Open every open PR on GitHub.com and request Copilot review. Within 90 seconds per PR, inline comments flag a hardcoded test token left in a route handler, an unhandled promise rejection in a background job, and an off-by-one in a pagination helper. Two real bugs get fixed; the stylistic suggestions get dismissed. The submission lands cleaner than any last-hour human review would have caught.

**What You Get:** A consistent, fast quality gate that catches the class of bugs that appear after hours of focused coding — in under 2 minutes per PR.

---

## What You Can Do Today

### ⏱ 15 Minutes

- [ ] Switch VS Code Copilot Chat to **Agent mode** and complete one real task end-to-end
- [ ] Create `.github/copilot-instructions.md` with the current project's stack, one architecture note, and one build command
- [ ] Run `gh copilot suggest` on one question that would normally go to a search engine

### ⏱ 1 Hour

- [ ] Fill out the complete hackathon instructions template (stack + conventions + architecture + agent guidance)
- [ ] Add the three-server `mcp.json` starter and confirm MCP tools appear in Agent Mode
- [ ] Request a Copilot code review on any currently open PR
- [ ] Visit `github.com/spark` and generate a prototype for a current project idea

### ⏱ 2–4 Hours (Full Hackathon Configuration)

- [ ] Add a test-runner skill so Agent Mode self-diagnoses failures without manual prompting
- [ ] Launch one background agent on an independent task and practice reviewing the diff in the Agents Window
- [ ] Add path-specific instructions for a framework-specific file group (e.g., `.github/instructions/react.instructions.md` with `applyTo: "src/components/**"`)
- [ ] Run a Copilot CLI task using **Plan Mode** to inspect the agent's intended actions before execution
- [ ] Configure automatic code review on PRs via the GitHub repository settings

---

## Related Patterns

| Talk | What It Adds Beyond This Primer |
|------|--------------------------------|
| **[Copilot Primitives](../copilot-primitives/)** | Complete instructions → skills → prompts → agents configuration model with production-ready examples for every primitive |
| **[Copilot CLI](../copilot-cli/)** | Full CLI reference: Plan Mode, `/fleet` fan-out, Chronicle session memory, remote session steering |
| **[Copilot Code Review](../copilot-code-review/)** | Automatic review configuration, custom review agents, language-specific rules, compliance enforcement patterns |
| **[Copilot Web (Coding Agent)](../copilot-web/)** | Detailed guide to issue-to-PR delegation, `copilot-setup-steps.yml` environment configuration, Agent Firewall |
| **[MCP Apps](../mcp-apps/)** | Building MCP servers that return rich interactive UI inside chat responses |
| **[VS Code Latest](../vscode-latest/)** | Full changelog of Copilot features across v1.110–v1.120: Autopilot, Agents Window, nested subagents, BYOK, OpenTelemetry tracing |

---

## 📚 References

### Official Documentation

[^1]: **[GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview)** — Comprehensive overview of all Copilot capabilities in VS Code, including Agent mode and tool access
[^2]: **[Custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)** — How `copilot-instructions.md` and path-scoped instructions files are loaded and applied
[^3]: **[Agent Skills in VS Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills)** — Skill definition format, relevance-matching loading mechanics, and example patterns
[^4]: **[MCP Servers in VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)** — Configuring `mcp.json`, server discovery, tool availability in Agent mode
[^5]: **[Background Agents in VS Code](https://code.visualstudio.com/docs/copilot/agents/background-agents)** — Git worktree isolation model, remote session steering, and the Agents Window
[^6]: **[Custom Agents in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-agents)** — Agent file format, tool restrictions, handoff patterns, model preferences
[^7]: **[Adding repository custom instructions for GitHub Copilot](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)** — How instructions propagate across GitHub.com, VS Code, CLI, and the coding agent
[^8]: **[About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli)** — CLI architecture, Plan Mode, `/fleet` parallel execution, and terminal-native task patterns
[^9]: **[Using Copilot Code Review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)** — Manual and automatic review request flow, what the review agent examines
[^10]: **[About the Copilot coding agent](https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent)** — Issue-to-PR delegation model, sandbox architecture, and issue quality guidance
### Release Notes

[^12]: **[VS Code release notes: May 2026 (v1.120)](https://code.visualstudio.com/updates/v1_120)** — Agents Window stable preview, command risk assessment, terminal output compression, BYOK thinking effort
