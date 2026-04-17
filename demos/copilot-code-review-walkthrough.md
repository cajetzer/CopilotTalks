# Demo: GitHub Copilot Code Review — From Bottleneck to Accelerator

**Source talk:** `tech-talks/copilot-code-review/`
**Core question:** How can Copilot Code Review reduce PR review time while maintaining (or improving) quality?
**Target repo:** [github.com/MSBart2/FanHub](https://github.com/MSBart2/FanHub) — fork it to your account to follow along

---

## Prerequisites

- Fork `github.com/MSBart2/FanHub` to your own GitHub account
- GitHub Copilot license with Code Review enabled
- Repository admin access (to configure Rulesets)

---

## Exercise 1: Enable Automatic Code Review via Rulesets

Code review configuration is entirely UI-based through GitHub Rulesets — no YAML, no config files.

1. Go to your FanHub fork → **Settings** → **Code and automation** → **Rules** → **Rulesets**
2. Click **New ruleset** → **New branch ruleset**
3. Set target: `main` and any feature branches
4. Under **Rules**, find **Require Copilot code review** and enable it
5. Save the ruleset

From this point on, every PR opened against those branches will automatically get a Copilot review within 1-2 minutes of creation — before any human reviewer looks at it.

**What to notice:** This is a repository governance decision, not a per-developer workflow. It applies consistently to every PR from everyone — senior engineers, new hires, and the coding agent alike. No one can open a PR that skips the automated review.

---

## Exercise 2: Open a PR and Watch Copilot Review It

Create a deliberate change to FanHub that has a real quality issue, then watch Copilot catch it.

Add an endpoint that's missing input validation to `routes/characters.js` (Node.js track):

```javascript
// Add this route — intentionally missing validation
router.get('/characters/search', async (req, res) => {
  const query = req.query.name;  // no sanitization
  const results = await db.query(
    `SELECT * FROM characters WHERE name LIKE '%${query}%'`  // SQL injection risk
  );
  res.json(results);
});
```

Commit this to a branch and open a PR. Within a minute or two, Copilot will post inline review comments:

- On the `db.query` line: flags the string interpolation as a SQL injection risk and suggests a parameterized query
- On the route itself: notes missing input length validation
- On the response: may note missing error handling

Review the comments. Click **Resolve** on each one as you address it, or click **Apply suggestion** if Copilot offered a direct code fix.

**What to notice:** Copilot's comments are inline, specific, and educational — they explain *why* something is a risk, not just that it is. New developers learn team standards from the feedback, not just from human reviewers.

---

## Exercise 3: Add Custom Review Instructions

Copilot's review behavior can be guided through instruction files in `.github/`. These are the same files that shape behavior in VS Code chat and for the coding agent — one investment, consistent behavior everywhere.

Create `.github/copilot-instructions.md` in your FanHub fork:

```markdown
# FanHub Code Review Standards

## Security
- All database queries must use parameterized statements — never string interpolation
- User input must be validated for type, length, and allowed character sets before use
- API responses must not include internal error details in production

## Testing
- New routes must have at least one happy-path and one error-path test
- Test files must follow the pattern `*.test.js` in the `__tests__` directory

## Style
- Use `async/await` — not callback patterns or raw Promise chains
- Route handlers must not exceed 30 lines; extract logic to service functions
```

Open another PR. Copilot's review comments will now reflect the custom standards — flagging callback patterns, oversized handlers, and missing test coverage in addition to the generic quality checks.

**What to notice:** Custom instructions are additive. You're not replacing Copilot's judgment — you're layering your team's standards on top. The instructions apply to human-authored code, agent-authored code, and code review equally.

---

## Exercise 4: Request an On-Demand Review with `@github-copilot`

You don't have to wait for the automatic review. On any open PR, add a comment mentioning `@github-copilot` to request an immediate focused review:

```
@github-copilot Can you review this for security issues specifically? Focus on authentication and authorization.
```

Or to ask about a specific section:

```
@github-copilot The changes to `routes/characters.js` — are there any edge cases in the search logic I might have missed?
```

Copilot responds as a review comment within a minute, focused on the specific question.

**What to notice:** This is the "hybrid review" model from the talk. Copilot handles the mechanical checks automatically. Humans use `@github-copilot` to ask targeted questions that would take time to investigate manually. Senior reviewers spend their attention on architecture and business logic — not formatting and security patterns.

---

## Exercise 5: Add a Topic-Specific Instruction File

For focused enforcement — a specific language, framework, or compliance area — create topic-scoped instruction files under `.github/instructions/`:

Create `.github/instructions/api-patterns.instructions.md`:

```markdown
---
applyTo: "routes/**/*.js"
---

# FanHub API Route Patterns

All route files matched by this instruction follow these additional standards:

- Routes must use the Express Router pattern, not `app.get()` directly
- All routes must have JSDoc comments with `@param` and `@returns`
- Error responses must return JSON with `{ error: string, code: string }` shape
- Rate limiting middleware must be applied to any route that accepts user input
```

The `applyTo` frontmatter limits this instruction to files matching `routes/**/*.js` — it won't affect test files, config files, or other paths.

Open a PR that touches a routes file. Copilot's review will now include checks specific to API patterns for route files, while still applying the general `copilot-instructions.md` standards everywhere.

**What to notice:** Instructions compose. The general file sets baseline standards; topic files add depth for specific areas. This mirrors how a good human reviewer adjusts their focus based on what file they're looking at.

---

## Key Takeaways

| Pattern | How it works |
|---------|-------------|
| Enable automatic review | GitHub Rulesets → Require Copilot review (UI only, no YAML) |
| Custom baseline standards | `.github/copilot-instructions.md` |
| Topic-scoped standards | `.github/instructions/<topic>.instructions.md` with `applyTo:` frontmatter |
| On-demand focused review | `@github-copilot` in any PR comment |
| Applies to agent-authored code | Same instructions, same review — no separate config |

**The through-line:** Code review stops being the bottleneck when Copilot handles the mechanical layer. Human reviewers focus on what only humans can evaluate — intent, architecture, business logic.

## References

- [GitHub Copilot Code Review — Concepts](https://docs.github.com/en/copilot/concepts/agents/code-review)
- [Configure Automatic Code Review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review)
- [Using Copilot Code Review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
