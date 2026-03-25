# Exercise 3.2: Referencing Standards and Docs

## 🔨 Exercise

### Exercise 3.2: Referencing Standards and Docs — "Link Once, Use Forever"

**Lead:** Sarah ⭐ | **Support:** David 🤝 | **Time:** 7 min

#### 📖 The Challenge

Sarah is reviewing the Module 2 character detail enhancements, but she keeps retyping the same context: the team standards from Module 1, the architecture guidance, and the roadmap they just built for tagline/summary plus status badges. Takes 3 minutes to type, and she occasionally skips a check because she's reconstructing the review prompt from memory.

David notices the same issue: the source of truth already exists in `.github/copilot-instructions.md`, `ARCHITECTURE.md`, and the Module 2 roadmap. The team is duplicating documentation: once in the files, again in every review prompt.

Sarah realizes: _"Why am I copying standards into prompts? I should link to the source of truth. When standards evolve, prompts automatically reference the latest version."_

#### 🔄 The Transformation

| Before ❌                                                                                                                                                                            | After ✨                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sarah types 8-line review prompt manually. Lists standards and roadmap context she remembers, occasionally forgets a check. When docs update, the prompt stays stale. | Sarah types `/character-review` (1 line). Prompt links to copilot-instructions.md, ARCHITECTURE.md, and the enhancement roadmap. It always uses current standards and current scope. |
| **Lines typed:** 8<br>**Setup time:** 3 min<br>**Missed checks:** 2-3 per week<br>**Version drift:** Constant                                                                        | **Lines typed:** 1<br>**Setup time:** 6 seconds<br>**Missed checks:** 0<br>**Version drift:** Impossible (always references latest)                                           |

**Impact:** 3 minutes saved per review × 12 reviews/week = **36 minutes/week**. More importantly: **0 violations make it through** because prompts never forget documented standards.

#### 🎯 Your Goal

Create a character detail review prompt that links to your existing documentation, ensuring reviews always reference current standards and the current enhancement roadmap.

#### 📋 Steps

1. **Create a documentation-linked prompt file**

    Create `.github/prompts/character-review.prompt.md`:

   ```markdown
   ---
    name: character-review
    description: "Review character detail enhancements against team standards and roadmap"
    agent: "ask"
    ---

    Review the character detail enhancement work in ${file} against:

    - [Team standards](../../.github/copilot-instructions.md)
    - [Architecture guidance](../examples/completed-config/docs/ARCHITECTURE.md)
    - [Character enhancement roadmap](../../fanhub/docs/FEATURE-CHARACTER-ENHANCEMENTS.md)

    Check for compliance with:

    **UI and code standards**:

    - Existing component and API patterns
    - Clear handling for tagline/summary rendering
    - Clear handling for status badge rendering
    - Empty and missing value behavior
    - Accessibility and consistency with existing UI patterns

    **Roadmap alignment**:

    - Work matches the planned scope from Module 2
    - No extra redesign work has slipped in
    - Shared backend, frontend, and test changes stay grouped logically

    Provide:

    1. **Compliance summary** — Which standards are met, which are violated
   2. **Specific issues** — Line numbers and exact problems
   3. **Fix recommendations** — Code examples showing corrections
   4. **Priority** — Critical (blocks merge) vs. Nice-to-have (optional improvement)
   ```

   **Key elements:**
   - **Relative Markdown links**: `[.github/copilot-instructions.md](../../.github/copilot-instructions.md)` references the actual file
    - **Multiple document references**: Links standards, architecture guidance, and the enhancement roadmap
   - **Structured output**: Specifies exactly what format you want returned
   - **agent: 'ask'**: Uses analysis agent (no code changes, just review)

2. **Invoke the documentation-aware review**

    Open a character detail related file and run:

   ```
    /character-review
   ```

   Watch Copilot:
   - Read the prompt file
    - Fetch content from `.github/copilot-instructions.md`, `ARCHITECTURE.md`, and the Module 2 roadmap
    - Analyze the current file against all three documents
   - Return structured review with line numbers and priorities

   **Expected output:**

   ```
    ✅ COMPLIANCE SUMMARY:
    Met: Scope stays lightweight, summary rendering matches roadmap
    Violated: Badge empty-state behavior unclear, missing accessibility label

   ❌ SPECIFIC ISSUES:
    Line 47: Summary fallback text does not match planned empty-state behavior
    Line 82: Badge markup needs aria-label support
    File: Test updates don't cover unknown badge values

   🔧 FIX RECOMMENDATIONS:
   [Detailed code examples with corrections]

   🚨 PRIORITY:
    Critical: Align empty-state behavior with roadmap
    Nice-to-have: Improve badge semantics
   ```

3. **Test automatic documentation updates**

    Make a change to `.github/copilot-instructions.md` or adjust the roadmap file. For example, add:

   ```markdown
    - **UI empty states**: Always render a clear fallback for missing character metadata
   ```

    Now run `/character-review` again. Notice the review now includes the updated empty-state rule—**without modifying the prompt file**. The prompt automatically references the updated guidance.

   **This is the power of documentation links:** Standards evolve, prompts stay synchronized automatically.

4. **Create a roadmap alignment review prompt**

    Following the same pattern, create `.github/prompts/roadmap-review.prompt.md`:

   ```markdown
   ---
    name: roadmap-review
    description: "Validate character enhancement work against the current roadmap"
    agent: "ask"
    ---

    Review ${file} against the current character enhancement roadmap in [FEATURE-CHARACTER-ENHANCEMENTS.md](../../fanhub/docs/FEATURE-CHARACTER-ENHANCEMENTS.md).

    Validate:

    - Scope matches the approved enhancement plan
    - Shared work is grouped logically
    - No unnecessary redesign or expansion is introduced
    - Tests align with the planned changes

    Flag any violations with specific examples and corrections.
    ```

    Test by running `/roadmap-review` on any relevant file. David's sequencing instincts are now executable as a function.

#### ✅ Success Criteria

- [ ] `.github/prompts/character-review.prompt.md` uses Markdown links to reference copilot-instructions.md, ARCHITECTURE.md, and the roadmap
- [ ] Running `/character-review` on a relevant file produces structured review output with compliance summary
- [ ] Updating the standards or roadmap automatically changes future `/character-review` results (no prompt file changes needed)
- [ ] `.github/prompts/roadmap-review.prompt.md` created and validates roadmap alignment

#### 📚 Official Docs

- [Prompt Files - Referencing Files](https://code.visualstudio.com/docs/copilot/customization/prompt-files#_body) — How to use Markdown links to include other workspace files in prompts
- [VS Code Workspace Context](https://code.visualstudio.com/docs/copilot/copilot-customization#_workspace-context) — How Copilot accesses workspace files referenced in prompts

---

## 🔗 What You Built

**In this exercise:**

- `.github/prompts/character-review.prompt.md` — Review function that always references the current standards and enhancement roadmap
- `.github/prompts/roadmap-review.prompt.md` — Scope validation function that checks work against the approved roadmap

**How it compounds:**

| Previous Modules                                    | This Exercise                           | Combined Power                                                      |
| --------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------- |
| Module 1: ARCHITECTURE.md documents system design   | Prompt links to ARCHITECTURE.md         | Structure and implementation guidance stay visible in every review  |
| Module 1: copilot-instructions.md defines standards | Prompt links to copilot-instructions.md | Standards enforced consistently without manual checking             |
| Module 2: Character enhancement roadmap             | Prompt links to the approved roadmap    | Reviews stay aligned to the actual story arc instead of generic code review |

**Why this matters:** Sarah no longer has to reconstruct the same review context every time the team touches the character detail page. The standards and roadmap are documented once and enforced automatically through `/character-review`. **Documentation becomes automation.**

---

## ➡️ Next Up

**[Exercise 3.3: Variable-Driven Prompts](exercise-3.3.md)** — Make prompts even more powerful by using variables to capture dynamic context like the current file, selected text, or user input.

> _"The documentation links are brilliant, but I still retype the next enhancement name and file context every time we plan follow-on work. Can prompts capture that automatically?"_  
> — Marcus, about to discover prompt file variables

---
