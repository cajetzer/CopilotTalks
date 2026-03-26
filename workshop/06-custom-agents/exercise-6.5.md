# Exercise 6.5: Explore Agent Teams with Squad

## 🎯 Objective

Install [Squad](https://github.com/bradygaster/squad/) and use it as an example of what becomes possible when you move from single custom agents to a persistent agent team.

> **Note:** This exercise is an "art of the possible" capstone. It is intentionally lighter-weight than the earlier FanHub exercises and focuses on installation, setup, and first use rather than deep customization.

**Lead:** Marcus ⭐ | **Support:** Sarah 🤝, Rafael 🤝

---

## 📖 The Story

### ❌ The "Before" — One Agent at a Time

**Monday 5:05 PM** — The team now has a strong Module 6 workflow:

- `@character-review` packages the review prompt, skill, and MCP flow
- `@implement` can execute from an approved Feature Spec
- handoffs make implementation and review feel connected

That is already a big improvement.

But Marcus is thinking bigger:

*"What if this wasn't just one agent at a time? What if we could see a whole team of specialists work in parallel—lead, backend, frontend, tester—while still keeping the work grounded in the repo?"*

Right now, the team understands **custom agents as roles**.

This exercise introduces the next idea: **agent teams**.

---

### ✨ The "After" — A Glimpse of Persistent Agent Teams

**The transformation:**

Marcus installs **Squad**, a project that creates a persistent AI development team in your repository.

Instead of one agent with one role, Squad gives you:

- a coordinating team
- persistent agent state in `.squad/`
- parallel specialist work
- decision logging that compounds across sessions

This is not replacing the Module 6 workflow. It is showing the next layer up:

**custom agents define focused roles**
→
**agent teams orchestrate many roles together**

**Results:**
- **Setup time:** a few commands to install and initialize
- **Payoff:** immediate exposure to a multi-agent development workflow
- **Perspective shift:** from "I made an agent" to "I can run an agent team"

---

### 💭 Marcus's Realization

> *"Our custom agents already made the workflow cleaner. Squad shows what happens when you take that one step further—persistent specialists, shared memory, and parallel work inside the repo itself. I don't need this for every task, but as a demonstration of where agent workflows can go next, it's exactly the kind of 'wait, we can do that?' moment I wanted at the end of the module."*

---

## 🔨 Steps

### Step 1: Install Squad

**Context:** Squad is an experimental CLI that scaffolds a persistent AI team in your repository.

**Task:**

1. Install the CLI globally:

```bash
npm install -g @bradygaster/squad-cli
```

2. In your project root, initialize Squad:

```bash
squad init
```

3. Confirm the setup created a `.squad/` directory in your repository.

**Validation:** `.squad/team.md` exists and Squad has initialized successfully in the repo.

---

### Step 2: Connect GitHub Authentication

**Context:** Squad can work with GitHub-aware workflows, and the project recommends authenticating with GitHub before deeper usage.

**Task:**

1. Sign in with GitHub CLI:

```bash
gh auth login
```

2. Verify authentication:

```bash
gh auth status
```

**Validation:** GitHub CLI shows you are logged in to `github.com`.

---

### Step 3: Launch Squad and Set Up the Team

**Context:** Once Squad is installed, you can use it directly from VS Code as an agent experience and let it propose a team for your repository.

**Task:**

1. In VS Code, open **Copilot Chat**.

2. Select the **Squad** agent if it is available.

3. Use a kickoff prompt like this:

```text
I'm starting a FanHub-style project. Set up the team.
We're building character-detail features with frontend, backend, testing, and review work.
```

4. When Squad proposes team members, confirm the setup.

5. If you want to try the CLI path instead, you can also launch Squad with:

```bash
copilot --agent squad --yolo
```

**Validation:** Squad responds with team proposals and initializes a working team for the repository.

---

### Step 4: Try a Simple Team Request

**Context:** This exercise is about seeing the orchestration model, not mastering every Squad command.

**Task:**

Try a simple request like:

```text
Team, help me think through the next character-detail improvement and what frontend, backend, and testing work it would require.
```

Observe what happens:

- how Squad routes work to different roles
- how multiple specialists can respond in parallel
- what gets written into `.squad/`
- how this feels different from invoking one agent manually

**Validation:** You can describe at least one clear difference between a single custom agent and a persistent agent team.

---

### Step 5: Compare Custom Agents vs. Agent Teams

**Context:** The goal is not to replace the earlier exercises. It is to understand how this example expands the design space.

**Task:**

Document these comparisons:

**Module 6 Custom Agents:**
- Focused, explicit roles
- Great for predictable handoff workflows
- Easy to reason about and teach
- Ideal for targeted review and implementation tasks

**Squad Agent Team:**
- Multi-agent orchestration
- Persistent team state in `.squad/`
- Parallel specialist work
- Better at showing the "art of the possible" for larger agent workflows

**Validation:** You can explain why Squad is a compelling capstone example even though the core module still focuses on building your own agents.

---

## ✅ Success Criteria

- [ ] `@bradygaster/squad-cli` is installed
- [ ] `squad init` runs successfully
- [ ] `.squad/team.md` exists
- [ ] GitHub CLI authentication is configured
- [ ] Squad can be launched and used for an initial team setup
- [ ] You have tried at least one simple team request
- [ ] You can explain the difference between a custom agent workflow and an agent-team workflow

---

## 🚀 Challenge Extension

**Explore a little further:**

1. **Run `squad status`** — inspect the current team state
2. **Open `.squad/decisions.md`** — see how team decisions are recorded
3. **Try the interactive shell** — run `squad` with no arguments and explore `/help`
4. **Compare with Module 6 agents** — decide where a small custom-agent workflow is better than a full agent team

---

## 📚 Key Concepts

**Custom agents vs. agent teams:**
- A custom agent is one workflow preset
- An agent team is a coordinated system of specialists
- Both can live in the repo
- They solve different layers of the same problem

**Persistence matters:**
- Squad writes shared team state into `.squad/`
- Decisions and team knowledge compound over time
- The team becomes part of the repository, not just a one-off session

**Why this exercise belongs here:**
- Module 6 teaches how to build focused agents
- Squad shows what the broader ecosystem can do beyond that
- It ends the module with a strong "here's where this can go next" example

---

## 🔗 Official Docs

- 📖 [Squad repository](https://github.com/bradygaster/squad/) — Overview, installation, commands, and concepts
- 📖 [Custom agents in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-agents) — Core agent model used earlier in this module

---

## ➡️ What's Next?

**[Module 8: Copilot Web](../08-copilot-web/README.md)** — Explore additional web-based workflows beyond custom agents, including workspace search, multi-file refactoring, and collaboration features.

> *"We built focused custom agents for FanHub. Squad gave us a glimpse of what happens when those ideas expand into a full persistent team. That's a strong place to leave Module 6."*
> — The team, seeing the broader horizon
