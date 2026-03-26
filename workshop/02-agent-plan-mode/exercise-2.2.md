# Exercise 2.2: Plan the Quick-Add Form

## 🔨 Exercise

### Exercise 2.2: Plan the Quick-Add Form — "Continuity Is the Test"

**Lead:** David ⭐ | **Support:** Elena 🤝, Sarah 🤝 | **Time:** 10 min

#### 📖 The Challenge

It's 10:30 AM. David reviews the 2.1 plan and nods — the stat cards are well-designed. Then he spots the gap: *the counters can show counts, but there's no way to add data without opening a database client.* He wants an "Add to Universe" form panel right on the homepage, so participants can type in a character name or location and watch the counter tick up in real time.

The form sounds straightforward. But David has been in enough architectural reviews to know that "simple form" often means "three hidden problems." He's seen two developers spend hours on a form that inserted into the wrong table, skipped validation, and had no UX feedback when submission failed. More relevant right now: the form needs to reference the `lore_entries` table that was *planned* in Exercise 2.1 but hasn't been built yet. If plan mode doesn't maintain context across planning sessions, the second plan will propose a different table name — and the two plans will conflict before implementation even starts.

*"The continuity check is the whole point,"* David says. *"Does the second plan know what the first plan decided?"*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Plan the form independently from the stat cards → different table name assumed, form posts to wrong endpoint, counter doesn't refresh after submit, discovered during integration testing | Run the second plan in the same chat session as the first → plan mode inherits context, references `lore_entries` correctly, proposes the POST endpoint and counter-refresh pattern as a connected sequence |
| **Integration bugs from dual-plan drift:** 2–3 per feature pair<br>**Time to discover:** During testing, 45 min in<br>**Rework required:** High | **Integration bugs from dual-plan drift:** 0<br>**Human judgment calls surfaced:** 1–2 deliberately<br>**Rework required:** None (resolved before coding) |

**Time saved:** 45 min integration debugging → 0, replaced by 2 min of reading the plan carefully

#### 🎯 Your Goal

In the same Copilot Chat session from Exercise 2.1, run a second plan mode prompt to design the quick-add form panel. Then verify the plan correctly references the `lore_entries` table from the first plan — and identify at least one decision the plan surfaced that required your own judgment.

#### 📋 Steps

1. **Stay in the Same Chat Session**

   Do not open a new Copilot Chat window. Stay in the same session where you ran the Exercise 2.1 plan. This is important: plan mode's research context is session-scoped. The second plan should "remember" that the first plan decided to use `lore_entries` with a `type` column.

   If you accidentally closed the session, you can still proceed — but note in your annotations that you restarted, and check extra carefully whether the plan references the same table name.

2. **Enter the Form Plan Prompt**

   Enter this prompt in the same plan mode session:

   ```
   Add a collapsible "Add to Universe" form panel next to the stat cards. The form should let me add a Character, Location, or Canon Fact by selecting a type and filling in a name and description. On submit, the matching stat card should refresh with the new count.
   ```

   Wait for the plan to generate. This prompt has more moving parts than Exercise 2.1 — expect the plan to take 90–120 seconds and surface more open questions.

3. **Run the Continuity Check**

   When the plan finishes, search it for the word `lore_entries`. The plan should:

   - Reference `lore_entries` as the target table for Location and Canon Fact inserts
   - Propose a `POST /api/lore-entries` endpoint (not a new table)
   - Show the Character insert as a separate `POST /api/characters` endpoint

   If the plan proposes a *different* table name (like `universe_facts` or `locations`) — that's drift. Note it. This is the exact failure mode David described: two independently-planned features that conflict at the table level.

   Breaking Bad example of what good continuity looks like in the plan:
   > *"Insert into `lore_entries` with `type: 'location'` when submitting Albuquerque, and `type: 'canon_fact'` when submitting 'Walter White's chemistry background is self-taught.'"*

   For your show: the type selector ("Character / Location / Canon Fact") is what makes every participant's form unique. A Stranger Things participant types "Eleven" in the Character field; a Game of Thrones participant types "King's Landing" in the Location field. Same form component, your show's data.

4. **Find the Open Question**

   Every good plan surfaces at least one decision it couldn't make without human input. Look for questions like:

   - *"Should the counter refresh optimistically (instant UI update before the server confirms) or wait for the POST to return a success response?"*
   - *"What should happen if a duplicate character name is submitted?"*
   - *"Should the form collapse back automatically after a successful add, or stay open?"*

   Pick one. Write your answer. This is the human judgment that plan mode is deliberately leaving for you — it surfaces decisions it can't make, rather than guessing and embedding a silent assumption in code.

5. **Save the Form Plan**

   Copy the plan or use the "Open in Editor" button. You'll need it in Exercise 2.3 for the merge step.

#### ✅ Success Criteria

- [ ] Second plan generated in the same chat session as Exercise 2.1
- [ ] Plan references `lore_entries` as the shared table (continuity confirmed — or drift documented if it occurred)
- [ ] `POST /api/characters` and `POST /api/lore-entries` endpoints identified in the plan
- [ ] At least one open question the plan raised, answered with your own judgment
- [ ] Plan saved for use in Exercise 2.3

#### 📚 Official Docs

- [Planning in VS Code Chat](https://code.visualstudio.com/docs/copilot/chat/chat-planning#_how-to-plan-a-task) — Iterating on plans and maintaining session context
- [Configure Tools for Agents](https://code.visualstudio.com/docs/copilot/chat/chat-tools) — Understanding what plan mode can and cannot infer

---

## 🔗 What You Built

**In this exercise:**
- A second plan covering the form panel, POST endpoints, form state management, and counter-refresh pattern
- A continuity check result: whether plan mode maintained context across two planning prompts in a single session

**How it compounds:**

| Previous Modules | This Exercise | Combined Power |
|------------------|---------------|----------------|
| `copilot-instructions.md` (Module 1) | Form naming conventions | The plan proposes endpoint names that match your team's conventions — without you specifying them |
| Exercise 2.1 plan | Session continuity | The form plan inherits the table schema from the stat card plan — one decision, not two |

**Why this matters:** The continuity check is a habit, not a one-time trick. On real teams, parallel planning creates silent conflicts that only surface during integration. Running sequential plans in one session — and verifying they reference the same artifacts — is a discipline that plan mode makes easy to enforce.

---

## ➡️ Next Exercise

**[Exercise 2.3: Combine Plans into a Delivery Roadmap](exercise-2.3.md)** — Marcus takes both plans and merges them into one conflict-free, dependency-sequenced delivery roadmap. The two plans overlap in three places — the merge step surfaces them all.

> *"Two plans, shared tables, overlapping homepage changes. Let's make sure we build this once, not twice."*
> — Marcus, ready to merge

---
