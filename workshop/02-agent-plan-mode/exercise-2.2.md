# Exercise 2.2: Planning a Second Enhancement

## 🔨 Exercise

### Exercise 2.2: Planning a Second Enhancement — "Same Workflow, New Scope"

**Lead:** David ⭐ | **Support:** Elena 🤝, Sarah 🤝 | **Time:** 8 min

#### 📖 The Challenge

The team has a clean plan for a character tagline from Exercise 2.1, but David notices something important: another lightweight enhancement is waiting right behind it. The character detail page would also benefit from small visual status badges—signals like `Hero`, `Villain`, `Alive`, or `Retired` that help users scan the page faster.

Before plan mode, teams often handled this kind of follow-up work badly: they planned one enhancement carefully, then restarted from scratch on the next one. That led to duplicated codebase exploration, inconsistent assumptions, and small UX additions that quietly expanded in scope.

David wants to prove a better pattern: *"Once we've seen how to plan one small enhancement, we should be able to repeat the workflow for the next one without losing discipline."*

Elena adds: *"And because badges are visual and data-driven, we need to think about display rules early—before implementation starts."*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Team finishes one plan, then manually restarts discovery for the next small enhancement → repeated codebase exploration, inconsistent assumptions, scope drift | Team uses the same planning workflow again for a second enhancement → focused plan, clearer scope, less duplicated analysis |
| **Planning time for follow-up enhancement:** 15 min<br>**Missed UI requirements:** 2<br>**Scope clarity:** Uneven | **Planning time for follow-up enhancement:** 6 min<br>**Missed UI requirements:** 0<br>**Scope clarity:** High |

#### 🎯 Your Goal

Use the plan agent to create a second focused implementation plan for adding status badges to the character detail experience.

#### 📋 Steps

1. **Start a New Plan Request for Status Badges**
   
     Stay in plan mode and enter a new request focused only on badges:

    ```
    @workspace Add status badges to the existing character detail experience:
    - Frontend: Render compact status badges near the character name or summary
    - Backend/API: Ensure the page has the status values it needs
    - Keep the enhancement lightweight and consistent with existing FanHub UI patterns
    ```

    **What to observe:** You're using the exact same planning workflow from Exercise 2.1, but now for a separate, equally scoped enhancement. This reinforces that plan mode is reusable, not a one-off trick.

2. **Review the Badge Plan**
   
    Examine the generated plan and confirm it stays narrow. It should include:

    - **Summary**: A lightweight enhancement to display status badges
    - **Implementation Steps**: Updates to data source/response shape, UI rendering, and tests
    - **Open Questions**: Ambiguities like "What badge values are allowed?" or "What happens when there are no badges?"
    - **Dependencies**: Data/API updates before frontend rendering, tests after behavior is defined

    **Use David's lens:** Does the plan stay small and avoid expanding into a larger profile redesign?

    **Use Elena's lens:** Are visual edge cases covered—empty badges, multiple badges, unknown values?

    **Use Sarah's lens:** Does the plan reference existing styling and naming patterns?

3. **Refine the Plan if Needed**
   
    If the plan is too vague or too broad, refine it in plan mode:
   
   ```
    Update the plan to address these gaps:
    
    1. Specify where status badge values come from
    2. Add fallback behavior when a character has no statuses
    3. Add test file modifications for badge rendering and response shape
    4. Add edge case handling for unknown badge values or too many badges
    5. Ensure badge styling matches existing FanHub patterns
     ```
   
    The result should still be a compact plan, not a larger feature pitch.

4. **Save the Badge Plan**
   
    Save the status badge plan to a separate file:

    ```
    fanhub/docs/FEATURE-STATUS-BADGES.md
    ```

    You now have two scoped plans: one for tagline/summary, one for status badges. That sets up the final exercise, where you combine them into a single roadmap.

#### ✅ Success Criteria

- [ ] Plan agent generates a focused status badge plan with specific file paths
- [ ] Plan stays lightweight and scoped to badges only
- [ ] Data/API, frontend, and test steps are all represented
- [ ] Edge cases such as empty or unknown badge values are addressed
- [ ] Badge plan saved as a separate artifact for later sequencing

#### 📚 Official Docs

- [Planning in VS Code Chat](https://code.visualstudio.com/docs/copilot/chat/chat-planning#_how-to-plan-a-task) — Iterating on plans before implementation
- [Configure Tools for Agents](https://code.visualstudio.com/docs/copilot/chat/chat-tools) — Understanding what the plan agent can and can't analyze

---

## 🔗 What You Built

**In this exercise:**
- `fanhub/docs/FEATURE-STATUS-BADGES.md` — Implementation plan for adding status badges to the character detail page
- A second scoped planning workflow that mirrors Exercise 2.1 without restarting from scratch

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| ARCHITECTURE.md (Module 1) | Plan agent research | Badge plan follows the existing project structure automatically |
| copilot-instructions.md (Module 1) | Standards-aware planning | Badge plan references existing UI and naming conventions |
| Exercise 2.1 (Tagline plan) | Repeatable planning workflow | One successful plan becomes a reusable pattern for the next enhancement |

---

## ➡️ Next Up

**[Exercise 2.3: Combining Plans into a Delivery Roadmap](exercise-2.3.md)** — Merge the tagline and badge plans into one prioritized roadmap the team can actually ship.

> *"Now we have two good plans. The real question is how to sequence them without duplicating work."*  
> — David, turning separate plans into a practical roadmap

---
