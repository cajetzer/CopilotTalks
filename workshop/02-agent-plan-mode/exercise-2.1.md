# Exercise 2.1: Invoking Plan Mode

## 🔨 Exercise

### Exercise 2.1: Invoking Plan Mode — "Research Before Code"

**Lead:** Marcus ⭐ | **Support:** Sarah 🤝 | **Time:** 8 min

#### 📖 The Challenge

Marcus has been assigned a lightweight enhancement to the character detail experience: add a short tagline or summary beneath the character name. The change sounds simple, but he still has to figure out where the page gets its data, which files shape the response, and how FanHub handles display patterns consistently.

The old approach: spend 20 minutes manually exploring the codebase, opening files, tracing imports, checking existing patterns, and hoping he doesn't miss a dependency between the API response and the UI. Last sprint, he missed 3 dependencies across similar enhancements, leading to mismatched UI states and cleanup work that should have been avoided.

Sarah has been watching this pattern across the team: *"We spend more time figuring out what to change than actually changing it. There has to be a better way to map the work before diving in."*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Marcus spends 20 minutes manually analyzing: opening page components, tracing API responses, checking where summary content belongs, making notes about what needs to change, second-guessing dependencies | Marcus invokes plan mode: types one request, waits 90 seconds, gets a focused implementation plan with file paths, step ordering, dependencies, and open questions |
| **Planning time:** 20 min<br>**Missed dependencies:** 3 per sprint<br>**Confidence:** Low (guessing) | **Planning time:** 7 min (2 min AI + 5 min review)<br>**Missed dependencies:** 0 per sprint<br>**Confidence:** High (validated plan) |

#### 🎯 Your Goal

Use the plan agent to research and generate an implementation plan for adding a character tagline or summary to the existing character detail experience.

#### 📋 Steps

1. **Open Copilot Chat in Plan Mode**
   
   Open the Chat view (`Ctrl+Alt+I` or `Cmd+Alt+I` on Mac) and select **Plan** from the agents dropdown at the top. You should see the plan agent icon (📋) indicating you're in planning mode, not default chat mode.
   
   Why plan mode? Because it uses read-only research tools to analyze your codebase comprehensively before proposing any changes. The default agent starts implementing immediately; plan mode separates research from execution.

2. **Request the Character Tagline Plan**
   
   In the plan mode chat, enter this request:
   
   ```
     @workspace Add a lightweight enhancement to the existing character detail experience:
     - Frontend: Display a short character tagline or summary beneath the name
     - Backend/API: Ensure the page has the summary data it needs
     - Follow existing FanHub patterns for routing, error handling, and styling
     ```
   
   Press Enter and wait for the plan agent to research your codebase. This takes 60-120 seconds—it's reading ARCHITECTURE.md, copilot-instructions.md, analyzing existing patterns, mapping dependencies, and identifying constraints.
   
   **What to observe:** The plan agent doesn't make any code changes. It's gathering context to propose a research-based implementation plan.

3. **Review the Generated Plan**
   
   Examine the plan output, which should include:
   
     - **Summary**: High-level approach (e.g., "Update character response shape, enhance existing page, add focused tests")
     - **Implementation Steps**: Ordered tasks like:
      - Step 1: Update the character data source or response mapping to include tagline/summary
      - Step 2: Update the existing character detail page to render the new content
      - Step 3: Add tests for missing summaries and empty-state behavior
     - **Open Questions**: Ambiguities like "What should display when no tagline exists?" or "Should long summaries be truncated?"
     - **Dependencies**: What order steps must execute (data/API updates before frontend rendering, implementation before tests are finalized)
   
   **Note the file paths:** The plan references specific files in your FanHub codebase. It analyzed your project structure from ARCHITECTURE.md and existing code patterns.
   
    **Note the time:** Planning took ~2 minutes of AI research plus your ~5 minutes of review = 7 minutes total, compared to 20 minutes of manual analysis.

4. **Save the Plan (Don't Execute Yet)**
   
   Use the **"Open in Editor"** button to save the plan as a markdown file, or simply copy the plan content into a new file:
   
    ```
     fanhub/docs/FEATURE-CHARACTER-TAGLINE.md
    ```
   
   Don't execute the plan yet—that's Exercise 2.3. Right now, focus on seeing how plan mode researches and proposes implementation strategies.
   
   **Why save it?** Plans become documentation: a record of *what* you're building, *why*, and *how* the pieces fit together. Share with team members, reference during implementation, or revisit when requirements change.

#### ✅ Success Criteria

- [ ] Plan agent generates 4-6 implementation steps with specific file paths
- [ ] Plan includes summary, steps, open questions, and dependencies sections
- [ ] File paths reference your actual FanHub codebase structure (e.g., `backend/src/routes/`, `frontend/src/pages/`)
- [ ] Planning completed in ~7 minutes (compared to 20 minutes manual analysis)
- [ ] Plan saved for review and team discussion

#### 📚 Official Docs

- [Planning in VS Code Chat](https://code.visualstudio.com/docs/copilot/chat/chat-planning) — How the plan agent researches tasks and generates implementation plans
- [Context Engineering Guide](https://code.visualstudio.com/docs/copilot/guides/context-engineering-guide) — How `@workspace` enables comprehensive codebase analysis

---

## 🔗 What You Built

**In this exercise:**
- `fanhub/docs/FEATURE-CHARACTER-TAGLINE.md` — Implementation plan with step-by-step breakdown, dependencies, and open questions

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| ARCHITECTURE.md (Module 1) | Plan agent research | Plan understands your tech stack, folder structure, and data flow automatically |
| copilot-instructions.md (Module 1) | Plan agent proposals | Plans follow your coding standards and patterns without explicit reminders |

---

## ➡️ Next Up

**[Exercise 2.2: Validating and Refining Plans](exercise-2.2.md)** — Review the AI-generated plan with David's architectural expertise to catch what AI can't see.

> *"The plan looks solid, but I see three things that could break in production..."*  
> — David, applying 20 years of experience to the AI-generated plan

---
