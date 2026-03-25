# Exercise 3.3: Variable-Driven Prompts

## 🔨 Exercise

### Exercise 3.3: Variable-Driven Prompts — "Context Without Copy-Paste"

**Lead:** Marcus ⭐ | **Support:** Rafael 🤝, Elena 🤝 | **Time:** 10 min

#### 📖 The Challenge

It's 4:30 PM. Marcus and Rafael are thinking about the next character detail enhancement after tagline/summary and status badges. Their current workflow:

1. Re-open the roadmap from Module 2 (1 min)
2. Type the next enhancement idea into chat by hand (1 min)
3. Re-explain which file or component they're looking at (1 min)
4. Add reminders about tests, edge cases, and scope limits (2 min)
5. Total: **5 minutes just to restate context** before planning even starts

Elena has the same problem when she's helping them think through testing implications. The team already has the roadmap, the current file, and the enhancement name—they shouldn't be retyping all of it.

Marcus realizes: _"Prompts can capture this context automatically using variables. I shouldn't manually copy what VS Code already knows."_

#### 🔄 The Transformation

| Before ❌ | After ✨ |
| --- | --- |
| Marcus manually retypes the next enhancement idea, roadmap context, and current file focus. Takes 5 minutes before planning begins. | Marcus opens the current file, runs `/character-enhancement-plan`, and the prompt captures the enhancement name plus current file context automatically. Structured planning starts in 30 seconds. |
| **Context gathering:** 5 min<br>**Manual steps:** 4 (reopen, copy, switch, paste)<br>**Context errors:** Frequent (stale roadmap, vague request) | **Context gathering:** 0.5 min<br>**Manual steps:** 1 (invoke prompt)<br>**Context errors:** Much lower (always current file, current input) |

**Time saved:** 4.5 minutes per planning request × 5 follow-on enhancements/sprint = **22.5 minutes/sprint**. More importantly: planning starts with **relevant context, every time**.

#### 🎯 Your Goal

Create a variable-driven prompt that automatically captures the next enhancement name and current file context, eliminating repetitive setup.

#### 📋 Steps

1. **Create an input-driven character enhancement planning prompt**

   Create `.github/prompts/character-enhancement-plan.prompt.md`:

   ```markdown
   ---
   name: character-enhancement-plan
   description: "Plan the next character detail enhancement with automatic context"
   agent: "agent"
   tools: ["codebase", "search/codebase"]
   argument-hint: "character-enhancement-plan <enhancement name>"
   ---

   Help me plan this next character detail enhancement:

   **Enhancement:** ${input:enhancementName:Describe the next enhancement}
   **Current file:** ${file}
   **File directory:** ${fileDirname}
   **Workspace root:** ${workspaceFolder}

   Use the current roadmap and file context to:

   1. Check the current enhancement roadmap in [FEATURE-CHARACTER-ENHANCEMENTS.md](../../fanhub/docs/FEATURE-CHARACTER-ENHANCEMENTS.md)
   2. Analyze how ${file} relates to the next enhancement
   3. Identify likely backend, frontend, and test changes
   4. Compare against [ARCHITECTURE.md](../examples/completed-config/docs/ARCHITECTURE.md)
   5. Keep the scope lightweight and aligned with existing patterns

   Provide:

   - **Recommended scope** — What should be included
   - **Likely files** — What should change
   - **Suggested order** — Best implementation sequence
   - **Open questions** — What needs clarification first
   ```

   **Key variables:**
   - `${input:enhancementName}` — Prompts the user for the next enhancement name
   - `${file}` — Currently open file's full path
   - `${fileDirname}` — Directory containing the file
   - `${workspaceFolder}` — Root folder of the workspace
   - `argument-hint` — Shows users how to invoke the prompt

2. **Use the planning prompt with automatic context capture**

   Simulate a follow-on planning workflow:

   a) Open a relevant file, such as the character detail page or route file

   b) Run in Copilot Chat:

   ```
   /character-enhancement-plan Add episode appearances to the character detail page
   ```

   Watch how variables get substituted:
   - `${input:enhancementName}` becomes `"Add episode appearances to the character detail page"`
   - `${file}` becomes the actual file you're viewing
   - `${workspaceFolder}` becomes the workspace root

   The prompt automatically:
   - Identifies which file is open
   - Captures the enhancement name
   - References the existing roadmap
   - Uses architecture documentation to keep the work scoped

   **No manual retyping.** Context is consistent because it's captured automatically.

3. **Create a selection-aware review helper**

   Elena wants a quick way to review a selected section of the roadmap or code. Create `.github/prompts/roadmap-sanity-check.prompt.md`:

   ```markdown
   ---
   name: roadmap-sanity-check
   description: "Review selected roadmap or code text with current file context"
   agent: "ask"
   tools: ["codebase"]
   argument-hint: "Select roadmap text or code first"
   ---

   Review this selected text in the context of ${file}:

   ~~~
   ${selection}
   ~~~

   Tell me:

   - Whether the scope still looks lightweight
   - Any missing edge cases or dependencies
   - Whether the current file is likely affected
   - What should be clarified before implementation
   ```

   **Selection variable:**
   - `${selection}` — Captures the currently selected roadmap text or code
   - `${file}` — Anchors the sanity check to the current file

4. **Test both variable patterns**

   In Copilot Chat, run:

   ```
   /character-enhancement-plan Add related characters to the character detail page
   ```

   Then select a portion of the roadmap or code and run:

   ```
   /roadmap-sanity-check
   ```

   Marcus and Elena now have:
   - An input-driven prompt for the next enhancement
   - A selection-driven prompt for quick scope checks
   - Less setup time before planning starts

#### ✅ Success Criteria

- [ ] `.github/prompts/character-enhancement-plan.prompt.md` uses `${input:enhancementName}`, `${file}`, and `${workspaceFolder}` variables
- [ ] Running `/character-enhancement-plan Add related characters` captures the enhancement name and current file context automatically
- [ ] `.github/prompts/roadmap-sanity-check.prompt.md` uses `${selection}` to review highlighted roadmap or code text
- [ ] Running `/roadmap-sanity-check` on selected text produces a scope-aware sanity check

#### 📚 Official Docs

- [VS Code Variables Reference](https://code.visualstudio.com/docs/editor/variables-reference) — Complete list of available variables: workspace, file, selection, input
- [Prompt Files - Variables](https://code.visualstudio.com/docs/copilot/customization/prompt-files#_variables) — How to use variables in prompt file body text

---

## 🔗 What You Built

**In this exercise:**

- `.github/prompts/character-enhancement-plan.prompt.md` — Planning function that accepts a follow-on enhancement name and current file context
- `.github/prompts/roadmap-sanity-check.prompt.md` — Scope-checking function that uses selected text and current file context

**How it compounds:**

| Previous Modules | This Exercise | Combined Power |
| --- | --- | --- |
| Module 1: ARCHITECTURE.md documents structure | Variables reference ARCHITECTURE.md by path | Prompts always check current architecture, no hardcoded paths |
| Module 2: Character enhancement roadmap | Variables feed in the next follow-on idea | The same story arc can keep moving without retyping all the setup |
| Exercise 3.2: Linked prompts to documentation | Variables add dynamic file and input context | Prompts stay grounded in current docs while adapting to the active task |

**Why this matters:** Marcus and Rafael were spending 5 minutes restating context before planning could begin. Now `/character-enhancement-plan` starts with the right file and the right enhancement name in seconds. Elena can sanity-check selected roadmap text without rebuilding the full prompt by hand.

**The function analogy is complete:** Prompts accept parameters (variables), execute with current context, return consistent results. Your best practices are now executable functions with perfect parameter binding.

---

## ➡️ Next Module

**[Module 4: Agent Skills](../04-agent-skills/README.md)** — Prompt files are perfect for specific tasks, but what if you want to give Copilot specialized domain knowledge and capabilities?

> _"These prompt functions are powerful, but I still want Copilot to understand our character-detail workflow more deeply than a single prompt can capture."_
> — Elena, about to discover agent skills

---
