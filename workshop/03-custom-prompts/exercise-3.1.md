# Exercise 3.1: Creating Your First Prompt File

## 🔨 Exercise

### Exercise 3.1: Creating Your First Prompt File — "From Copy-Paste to Function Call"

**Lead:** Elena ⭐ | **Support:** Marcus 🤝 | **Time:** 8 min

#### 📖 The Challenge

It's 2:00 PM on Monday. Elena has already asked for tests twice for the Module 2 character detail enhancements: once for the new tagline/summary behavior, once for status badges. Each time she types the same prompt by hand: _"Generate comprehensive tests for this character detail change. Include UI behavior, API shape, fallback states, and edge cases."_ It takes 3 minutes to type carefully, and occasionally she forgets to mention empty states or unknown badge values, leading to inconsistent output.

Marcus notices the same pattern as the team works through their combined roadmap from Module 2. The enhancement plans are solid, but the repeated request for test coverage is still manual. Elena realizes this is exactly the kind of repeated work prompt files should eliminate.

Elena realizes: _"These are functions I'm calling repeatedly. I should define them once and invoke them by name."_

#### 🔄 The Transformation

| Before ❌                                                                                                                                                                                      | After ✨                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Elena types 3-minute prompt manually 5 times per day. Sometimes forgets to mention empty states or badge edge cases, leading to incomplete test coverage. Different wording each time produces inconsistent results. | Elena types `/character-test-suite` in chat (5 seconds). Prompt always includes summary states, status badge edge cases, and test naming conventions. Identical comprehensive results every time. |
| **Time:** 3 min per invocation<br>**Invocations:** 5/day<br>**Total time:** 15 min/day<br>**Standards compliance:** Variable                                                                   | **Time:** 0.1 min (6 seconds) per invocation<br>**Invocations:** 5/day<br>**Total time:** 0.5 min/day<br>**Standards compliance:** 100%                        |

**Time saved:** 14.5 minutes/day × 5 days/week = 72.5 minutes/week = **4.8 hours/month**

#### 🎯 Your Goal

Create your first workspace prompt file that standardizes test generation for the character detail enhancements and makes it invokable via `/character-test-suite`.

#### 📋 Steps

1. **Create the prompts directory structure**

   Workspace prompt files live in `.github/prompts/` so the entire team can use them:

   ```bash
   mkdir -p .github/prompts
   ```

   This folder will store all your team's reusable prompt functions (invokable task templates), version-controlled alongside your code.

2. **Create your first prompt file**

    In VS Code, create `.github/prompts/character-test-suite.prompt.md`:

   ```markdown
   ---
    name: character-test-suite
    description: "Generate tests for character detail enhancements following team standards"
    agent: "agent"
    tools: ["codebase"]
    ---

    Generate a comprehensive test suite for ${file} following our testing standards.

    Focus on the current character detail enhancement work from Module 2:
    - Character tagline or summary rendering
    - Status badge rendering and formatting
    - Empty or missing values
    - Response shape changes that support the page

    Requirements:

    - **Unit tests** for all public functions
    - **Integration tests** for API endpoints or page-level interactions
    - **Edge cases**: empty summaries, missing statuses, unknown badge values, null values
    - **Framework**: Use Jest syntax
    - **Naming**: Follow `describe` → `it` pattern with descriptive names
    - **Assertions**: Prefer specific matchers (`toBe`, `toEqual`, `toThrow`) over generic ones

    Reference:
    - Existing test patterns from the workspace
    - [Feature roadmap](../../fanhub/docs/FEATURE-CHARACTER-ENHANCEMENTS.md)
    ```

   **Key elements:**
   - **YAML frontmatter**: Configures how the prompt executes (agent, tools, model)
   - **`${file}` variable**: Automatically references the currently open file
   - **Explicit requirements**: Never forgets edge cases or naming conventions
   - **Reference patterns**: Uses `tools: ['codebase']` to learn from existing tests

3. **Invoke your prompt function**

    Open any source file that needs tests (for example, the character detail page or related route file), then in Copilot Chat:

   ```
    /character-test-suite
   ```

   Watch Copilot:
   - Read your prompt file
   - Substitute `${file}` with the currently open file
   - Analyze existing test patterns in your codebase
   - Generate comprehensive test suite following all your standards

    **Expected result:** A test plan or generated test file that covers tagline/summary behavior, status badge rendering, and the most important fallback states—all following Jest conventions and your naming patterns.

4. **Verify the function behavior**

    Open a different file and invoke `/character-test-suite` again. Notice:
   - ✅ Identical standards applied every time
   - ✅ Same comprehensive coverage (never forgets edge cases)
   - ✅ Consistent naming and structure
   - ✅ Context-aware (uses the current file each time)

   **This is the power of prompt files:** Your expertise, codified once, applied consistently forever.

#### ✅ Success Criteria

- [ ] `.github/prompts/character-test-suite.prompt.md` exists and contains YAML frontmatter + prompt body
- [ ] Typing `/character-test-suite` in chat shows your custom prompt in the autocomplete list
- [ ] Running `/character-test-suite` on a source file generates comprehensive tests following your standards
- [ ] Generated tests include unit tests, integration tests, and edge cases without manual reminders

#### 📚 Official Docs

- [Prompt Files in VS Code](https://code.visualstudio.com/docs/copilot/customization/prompt-files) — Complete guide to creating prompt files with YAML frontmatter and variables
- [VS Code Variables Reference](https://code.visualstudio.com/docs/editor/variables-reference) — All available variables like `${file}`, `${selection}`, `${workspaceFolder}`

---

## 🔗 What You Built

**In this exercise:**

- `.github/prompts/character-test-suite.prompt.md` — Reusable test generation function for the character detail enhancement work

**How it compounds:**

| Previous Modules                                         | This Exercise                                          | Combined Power                                                              |
| -------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------- |
| Module 1: copilot-instructions.md sets testing standards | Prompt file enforces those standards automatically     | Standards documented once, enforced automatically through prompt invocation |
| Module 2: Combined enhancement roadmap                   | Prompt file generates tests for each planned change    | Planning + immediate test generation = faster follow-through on the roadmap |

**Why this matters:** You just turned 3 minutes of careful typing into 6 seconds of function invocation. More importantly, you turned fuzzy reminders like "don't forget badge edge cases" into guaranteed consistency. Elena's testing instincts are now team knowledge, not tribal knowledge.

---

## ➡️ Next Up

**[Exercise 3.2: Referencing Standards and Docs](exercise-3.2.md)** — Take your prompt functions to the next level by linking them to your ARCHITECTURE.md and copilot-instructions.md files, ensuring they always reference the latest standards.

> _"The test prompt is great, but I'm still retyping our standards and roadmap every time I review these character detail changes. Can I link to the source of truth instead?"_
> — Sarah, about to discover prompt file Markdown links

---
