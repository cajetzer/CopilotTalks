# Demo: Building Agent Systems — Subagents, Teams, and Autonomous Execution

**Source talk:** `tech-talks/agent-teams/`
**Core question:** What are the mechanisms that make multi-agent AI work — and how do I compose them into systems that handle complex tasks?
**Target repo:** [github.com/MSBart2/FanHub](https://github.com/MSBart2/FanHub) — VS Code with Copilot Chat in Agent mode, or Copilot CLI

---

## Prerequisites

- VS Code 1.109+ with Copilot Chat, OR Copilot CLI
- FanHub open in a workspace (any language track)
- Git installed (background agents use worktrees)
- For Exercise 4: `git clone https://github.com/bradygaster/squad` (Squad)
- For Exercise 5: `git clone https://github.com/Sentry01/AgentCouncil` (AgentCouncil)

---

## Exercise 1: Implicit Subagent Delegation (No Setup Required)

The simplest multi-agent pattern is already in every Copilot Chat session — you just need to use it deliberately. When you ask Copilot to research and then implement, you're asking one agent to do both. Context fills with planning notes, dead-end explorations, and research that's irrelevant to implementation. Quality drops.

Instead, delegate research to a subagent explicitly:

In VS Code Copilot Chat (Agent mode), type:

```
Run a subagent to research the best approach for adding pagination to the FanHub
characters API. Have it read the existing routes, the database layer, and any
similar patterns already in the codebase. Return only: recommended approach,
tradeoffs, and which files need to change. Don't implement — just research.
```

The subagent runs in an isolated context. When it finishes, it returns a focused summary — not its full exploration log. Your main context gets the output, not the journey.

Then, with the research summary in hand:

```
Based on that research, implement pagination for the characters API endpoint.
```

**What to notice:** The coordinator context stays clean — research context never mixed into implementation context. This is the mechanism behind every other multi-agent pattern.

---

## Exercise 2: Explicit Parallel Subagents

FanHub has bugs documented across its four language tracks — Node.js, .NET, Java, Go. The same bugs exist in all four implementations. Use explicit parallel subagents to investigate all four simultaneously:

```
Run four parallel subagents to investigate the duplicate character bug in FanHub:
- Subagent 1: Investigate the Node.js track (node/ folder)
- Subagent 2: Investigate the .NET track
- Subagent 3: Investigate the Java track
- Subagent 4: Investigate the Go track

Each subagent should: find where the duplicate originates, identify the fix,
and estimate how risky the change is (does it require a migration?).

Return a consolidated report comparing the four implementations.
```

All four run simultaneously. The consolidated report arrives faster than sequential investigation would, and it highlights where the implementations differ — which is often where the real bugs are.

**What to notice:** Parallelism is only safe when tasks are independent. The four tracks share bugs but not code — no merge conflicts, no coordination overhead. Spot these opportunities in your own codebase: independent investigations, parallel implementations of a spec, simultaneous analysis of separate modules.

---

## Exercise 3: Background Agents with Git Worktrees (VS Code 1.109+)

Background agents let you hand off long-running work and return to something else. They run in their own Git worktree — a separate working directory on the same repository, so they can write files without conflicting with your current work.

In VS Code, open Copilot Chat and:

1. Describe the task you want to hand off:
   ```
   I want to delegate a task to a background agent: audit all API routes in
   FanHub (node/routes/) for missing input validation, missing error handling,
   and SQL injection patterns. Write a report to AUDIT.md and add inline
   comments to the affected code.
   ```

2. VS Code 1.109 will offer to start a background agent session in a new worktree. Accept.

3. The session picker shows the background agent running. Close it and continue with other work.

4. When the agent finishes, the session appears as completed in the picker. Review AUDIT.md and the code comments.

**What to notice:** 85 minutes of active supervision (answering questions, approving steps) becomes roughly 10 minutes — briefing the agent at the start and reviewing results at the end. The agent's worktree is isolated, so your working directory was never touched during the audit.

---

## Exercise 4: Set Up a Persistent Team with Squad

Squad is a ready-to-run agent team system. Agents in a Squad have names, roles, and memory that compounds across sessions.

```bash
# Clone Squad into FanHub (or any working repo)
git clone https://github.com/bradygaster/squad .ai-team-setup
# Follow setup instructions in .ai-team-setup/README.md to initialize
```

Once initialized, Squad creates a `.ai-team/` directory in your repo:

```
.ai-team/
  team.md           # Who's on the team and their roles
  routing.md        # Which work goes to which agent
  decisions.md      # Shared decision log all agents read before working
  agents/
    researcher/
      charter.md    # Identity, expertise, boundaries
      history.md    # What this agent has learned across sessions
    implementer/
      charter.md
      history.md
    reviewer/
      charter.md
      history.md
```

Create a simple team for FanHub: a Researcher, an Implementer, and a Reviewer. Define their charters in `.ai-team/agents/<name>/charter.md`.

Now assign FanHub work through the team:

```
Using the Squad team, have the Researcher investigate the broken genre
filter bug in FanHub, the Implementer propose a fix, and the Reviewer
evaluate the proposal for correctness and edge cases.
```

**What to notice:** Team members accumulate knowledge in `history.md` across sessions. Next time you ask the Researcher about FanHub's data layer, it already knows from last session. Knowledge compounds — the team gets smarter about your codebase over time.

---

## Exercise 5: AgentCouncil for Hard Decisions

When a decision has real tradeoffs, get three perspectives simultaneously. AgentCouncil runs Claude, GPT, and Gemini in parallel in collaborative or adversarial modes.

```bash
git clone https://github.com/Sentry01/AgentCouncil
# Drop the skill into your Copilot CLI skills directory
cp -r AgentCouncil/skills/agent-council ~/.copilot/skills/
```

Then use it in a Copilot CLI session:

```bash
copilot
```

```
council: FanHub currently has four separate language implementations (Node.js, .NET,
Java, Go) of the same API. We're considering consolidating to one implementation.
Evaluate the tradeoffs: which language should we keep, what's the migration risk,
and what would we lose? Deliberate and give a recommendation.
```

Three models evaluate the question in parallel — Claude, GPT, Gemini. They share findings, challenge each other's assumptions, and converge on a recommendation.

For adversarial mode (deliberate debate):

```
council --adversarial: Same question above
```

Models actively argue against each other's positions. Use this when you want the weakest points in a direction to surface before you commit.

**What to notice:** Council isn't for every decision. Use it when the stakes are high enough that a bad call is expensive to reverse — architecture choices, technology selections, significant refactors. The value is model diversity: different training data, different reasoning patterns, different blind spots.

---

## Key Takeaways

| Pattern | Mechanism | When to use |
|---------|----------|-------------|
| Implicit delegation | `"Run a subagent to research..."` | Separate research from implementation |
| Parallel subagents | Multiple independent investigations in one prompt | Parallel analysis across unrelated areas |
| Background agents | VS Code 1.109 session picker + worktrees | Long-running tasks; hand off and continue |
| Squad persistent team | `github.com/bradygaster/squad` + `.ai-team/` | Ongoing work; knowledge that compounds |
| AgentCouncil deliberation | `github.com/Sentry01/AgentCouncil` + `council:` skill | High-stakes decisions; stress-test with model diversity |

**The through-line:** Single agents hit a ceiling around 300-500 LOC or 3-4 hours of work. Multi-agent composition lifts that ceiling — not by making agents smarter, but by giving them cleaner context and clearer boundaries.

## References

- [Custom agents in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-agents)
- [Subagent invocation and parallel execution](https://code.visualstudio.com/docs/copilot/agents/subagents)
- [Background agents](https://code.visualstudio.com/docs/copilot/agents/background-agents)
- [VS Code v1.109 agent orchestration](https://code.visualstudio.com/updates/v1_109#_agent-orchestration)
- [Squad — persistent agent team system](https://github.com/bradygaster/squad)
- [AgentCouncil — multi-model deliberation](https://github.com/Sentry01/AgentCouncil)
- [Git worktrees reference](https://git-scm.com/docs/git-worktree)
