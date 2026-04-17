# Demo: GitHub Copilot Coding Agent — From Issue to Pull Request

**Source talk:** `tech-talks/copilot-web/`
**Core question:** What if filing an issue was the same as fixing it?
**Target repo:** [github.com/MSBart2/FanHub](https://github.com/MSBart2/FanHub) — fork it to your account to follow along

---

## Prerequisites

- Fork `github.com/MSBart2/FanHub` to your own GitHub account
- GitHub Copilot license with coding agent enabled
- Repository admin access (to configure `copilot-setup-steps.yml`)

---

## Exercise 1: Configure the Agent's Runtime Environment

The coding agent runs in an ephemeral GitHub Actions environment. Before it can do useful work on FanHub, it needs to know how to set up the project. Create `.github/workflows/copilot-setup-steps.yml`:

```yaml
name: Copilot Setup Steps

on:
  workflow_dispatch:

jobs:
  copilot-setup-steps:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: node/package-lock.json

      - name: Install dependencies
        working-directory: node
        run: npm ci

      - name: Verify tests pass on clean setup
        working-directory: node
        run: npm test
```

Commit and push. This file tells the coding agent: here's how to install dependencies and verify your changes didn't break anything. Every coding agent session for FanHub will run this first.

**What to notice:** The agent runs the same environment your CI runs. There's no separate "agent environment" — you define one environment and it applies everywhere. If tests pass in CI, they'll pass in the agent's session.

---

## Exercise 2: Assign a Well-Scoped Issue to Copilot

The coding agent works best with issues that are specific, bounded, and self-contained. File this issue in your FanHub fork:

**Title:** Fix duplicate character in seed data — Jesse Pinkman appears twice

**Body:**
```
## Problem

The `/api/characters` endpoint returns Jesse Pinkman twice in the response.
This happens because the seed data (`node/data/seed.js`) contains a duplicate entry.

## Expected Behavior

Each character appears exactly once in the API response.

## Acceptance Criteria

- [ ] Remove the duplicate entry from the seed data
- [ ] Add a uniqueness check (or constraint) so this can't happen again
- [ ] Tests confirm the API returns the expected character count
```

Now assign the issue to Copilot: on the issue page, in the **Assignees** section, select **Copilot** from the list.

Go to `github.com/copilot` to watch the agent's session start. Within a few minutes, a draft PR will appear.

**What to notice:** The agent reads the issue, explores the codebase, makes changes across files, runs `npm test`, and opens a draft PR — all in a sandboxed ephemeral environment. The PR you receive has changes made, tests run, and a summary of what the agent did and why.

---

## Exercise 3: Review the Draft PR and Iterate

The agent opens a **draft** PR — it never merges. Open the PR and review what the agent produced.

Look at:
- The code changes (diff)
- The agent's PR description: what it changed and why
- The test run results (did the tests pass?)
- The evidence bundle at the bottom: if the Agent Firewall blocked any outbound connection, it's logged here

If you want a different approach, leave a PR comment:

```
The uniqueness check was added at the application layer, but I'd prefer a database-level
constraint. Can you move the check to the schema definition instead?
```

The agent reads the comment, pushes new commits, and re-runs the test suite. The review loop is: comment → agent acts → re-review. No need to re-file the issue.

**What to notice:** The person who assigned the issue cannot approve the PR — separation of duties is enforced by design. The agent is a contributor, not an auto-merger. Review is still required.

---

## Exercise 4: Add Repository-Level Coding Standards

The agent inherits the same `.github/copilot-instructions.md` that shapes VS Code chat responses. Add FanHub-specific standards so the agent's PRs match your team's conventions:

```markdown
# FanHub Development Standards

## Code Style
- Use `async/await` — never raw callbacks or Promise chains
- Validate all request inputs before processing
- Route handlers should be thin — extract business logic to service modules

## Testing
- New features require tests in `__tests__/` with the naming pattern `<feature>.test.js`
- Tests must include at least one success case and one error case

## Data Layer
- Never use string interpolation in SQL queries — always use parameterized statements
- Add database constraints (unique, not null) at the schema level, not just the application level
```

Assign another issue to Copilot (for example, "Add pagination to the characters API endpoint"). The agent's PR will reflect these standards — parameterized queries, tests in the right location, thin route handlers.

**What to notice:** Instructions compound. Every issue you assign to Copilot benefits from standards you defined once. New team members get consistent code from the agent just as they would from a senior engineer following the same guide.

---

## Exercise 5: Configure the Agent Firewall

By default, the coding agent runs with an allowlist of permitted outbound connections. For FanHub, configure what the agent is and isn't allowed to reach:

Go to your repository **Settings** → **Copilot** → **Agent Firewall**.

Review the default allowlist (typically includes `github.com`, npm registry, common package CDNs). Add your project's specific dependencies if needed.

Then assign an issue that requires a new npm package:

**Title:** Add helmet.js for HTTP security headers

```
Add the helmet npm package to FanHub's Express server for security headers.
Configure it with reasonable defaults.
```

Assign to Copilot. When the agent runs `npm install helmet`, the firewall will allow it (npm registry is on the default allowlist). If the agent tries to reach an unlisted endpoint, the attempt is blocked and logged in the PR evidence bundle.

Check the evidence bundle in the resulting PR to see the agent's network activity.

**What to notice:** The Agent Firewall is how you extend trust to the agent without giving it blanket internet access. Every blocked call is logged — the evidence bundle makes the agent's behavior auditable, not just effective.

---

## Key Takeaways

| Pattern | Detail |
|---------|--------|
| Setup file | `.github/workflows/copilot-setup-steps.yml` — defines the agent's runtime |
| Issue quality matters | Specific title + problem + acceptance criteria → better PRs |
| Assign from anywhere | Browser, VS Code chat, GitHub Mobile, GitHub CLI |
| Iteration is built in | PR comments → agent pushes new commits → re-review |
| Standards apply everywhere | `.github/copilot-instructions.md` shapes agent code and human code identically |
| Governance by design | Agent opens draft PRs; assigner cannot approve; firewall limits network access |

**The through-line:** The coding agent changes what "backlog" means. Tasks that were "too routine to prioritize" become "assign and review" — the bottleneck moves from coding to reviewing.

## References

- [About the Copilot coding agent](https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent)
- [Customizing the development environment](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment)
- [Customizing the agent firewall](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-firewall)
- [Assigning and completing issues with the coding agent](https://github.blog/ai-and-ml/github-copilot/assigning-and-completing-issues-with-coding-agent-in-github-copilot/)
