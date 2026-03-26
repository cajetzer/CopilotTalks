# Exercise 2.3: Combining Plans into a Delivery Roadmap

## 🔨 Exercise

### Exercise 2.3: Combining Plans into a Delivery Roadmap — "Two Good Plans, One Smart Sequence"

**Lead:** Marcus ⭐ | **Support:** Elena 🤝 | **Time:** 7 min

#### 📖 The Challenge

Marcus now has two solid plans: one for adding a character tagline or summary, and one for adding status badges. Both are small. Both are reasonable. But if the team starts implementing them independently, they'll duplicate file analysis, repeat API changes, and risk doing the work in the wrong order.

Before this workflow, that kind of sequencing problem created quiet inefficiency: one developer would update the response shape for summaries, another would reopen the same files for badges, and the team would only later realize the work could have been grouped.

Now Marcus wants to turn two separate planning outputs into one practical roadmap: what should happen first, what can be combined, and where the dependencies overlap.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Create two separate plans and treat them as separate projects → duplicated steps, repeated file changes, unclear sequencing | Compare both plans, merge overlaps, and produce one prioritized roadmap → cleaner execution path, less duplicated effort |
| **Separate plans:** 2<br>**Duplicated steps:** 3<br>**Execution order clarity:** Low | **Combined roadmap:** 1<br>**Duplicated steps:** 0<br>**Execution order clarity:** High |

#### 🎯 Your Goal

Combine the tagline and status badge plans into one prioritized implementation roadmap the team can execute efficiently.

#### 📋 Steps

1. **Open Both Plans Side by Side**

    Open the saved plan from Exercise 2.1:

    - `fanhub/docs/FEATURE-CHARACTER-TAGLINE.md`

    And the saved plan from Exercise 2.2:

    - `fanhub/docs/FEATURE-STATUS-BADGES.md`

    Read them together. You are not implementing yet. You are identifying overlap, dependencies, and the best order of work.

2. **Identify Overlap Between the Plans**

    In plan mode or in your notes, compare the two plans and look for shared work:

    - Do both plans touch the same API endpoint or response shape?
    - Do both plans update the same page component?
    - Can tests for one enhancement be grouped with the other?
    - Are there setup steps that should happen once instead of twice?

    Create a short overlap list such as:

    - Shared backend response update
    - Shared frontend page component
    - Shared test file locations

3. **Ask Copilot to Build a Combined Roadmap**

    In plan mode, ask Copilot to merge the two plans:

    ```
    Combine these two enhancement plans into one prioritized implementation roadmap.

    Keep both enhancements lightweight.
    Remove duplicated steps.
    Group shared backend, frontend, and testing work.
    Show the best execution order with dependencies.
    ```

    **What to observe:** The plan agent is now acting like a sequencing assistant. Instead of generating a plan from scratch, it is synthesizing two smaller plans into one practical roadmap.

4. **Review the Combined Roadmap**

    Review the combined roadmap and verify:

    - [ ] The roadmap covers both tagline/summary and status badges
    - [ ] Shared steps are merged rather than repeated
    - [ ] The execution order is logical (data/API before UI, tests placed appropriately)
    - [ ] The scope stays lightweight
    - [ ] The roadmap is easier to execute than the two plans separately

    Save the combined roadmap as:

    ```
    fanhub/docs/FEATURE-CHARACTER-ENHANCEMENTS.md
    ```

#### ✅ Success Criteria

- [ ] Both enhancement plans reviewed together
- [ ] At least 2-3 overlapping steps identified and consolidated
- [ ] Combined roadmap produced with clear priorities and dependencies
- [ ] Shared backend, frontend, and test work grouped logically
- [ ] Final roadmap saved as a separate artifact for later execution

#### 📚 Official Docs

- [Planning in VS Code Chat](https://code.visualstudio.com/docs/copilot/chat/chat-planning#_how-to-plan-a-task) — Creating and refining plans for complex or multi-step work
- [Context Engineering Guide](https://code.visualstudio.com/docs/copilot/guides/context-engineering-guide) — How Copilot synthesizes workspace context into practical plans

---

## 🔗 What You Built

**In this exercise:**
- `fanhub/docs/FEATURE-CHARACTER-ENHANCEMENTS.md` — Combined implementation roadmap for tagline/summary plus status badges
- A prioritized execution sequence that removes duplicated steps across the two smaller plans

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| ARCHITECTURE.md (Module 1) | Roadmap synthesis | Combined roadmap still follows the project structure |
| copilot-instructions.md (Module 1) | Standards-aware sequencing | Shared UI and API work stays aligned with team conventions |
| Exercise 2.1 (Tagline plan) | Scoped enhancement planning | First plan establishes the baseline enhancement |
| Exercise 2.2 (Badge plan) | Multi-plan coordination | Second plan creates the need for sequencing and consolidation |

---

## ➡️ Next Module

**[Module 3: Custom Prompts](../03-custom-prompts/README.md)** — Turn repeated planning workflows into reusable prompt templates that capture your team's domain expertise.

> *"We just planned two related enhancements with the same workflow. Can we save that planning pattern as a reusable template?"*
> — Sarah, recognizing the next level of efficiency

---
