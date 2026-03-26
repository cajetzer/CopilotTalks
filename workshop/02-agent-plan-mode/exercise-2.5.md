# Exercise 2.4: Execute the Plan and Populate Your Universe

## 🔨 Exercise

### Exercise 2.4: Execute the Plan and Populate Your Universe — "From Roadmap to Reality"

**Lead:** Sarah ⭐ | **Support:** Marcus 🤝, David 🤝 | **Time:** 15 min

#### 📖 The Challenge

It's 11:30 AM. Sarah is looking at `docs/universe-dashboard-plan.md` — the most thorough pre-implementation roadmap the team has ever produced. Three exercises of plan mode research, two merged plans, a sequenced dependency chain. And zero lines of code written.

*"Plans don't ship product,"* Sarah says. *"And I've learned the hard way that handing a plan to an AI in default mode without instruction leads to drift. It starts adding things. It skips steps. It makes reasonable assumptions that conflict with what we actually decided."*

Sarah's approach: hand the roadmap to agent mode as explicit instructions — step by step — and watch every file change. If the agent deviates from the plan, she decides in real time whether the deviation is an improvement or a mistake. And when the feature is running, she does something that changes the feel of the whole exercise: she opens the quick-add form and enters real characters, locations, and facts from her show. The counters change from `0 · 0 · 0` to something real. *"That's when it started feeling like my site,"* she'll say.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Start coding from memory → DB migration forgotten until runtime error, API routes created in wrong order, React component has no real data to test against, fandom content never added because there's no easy UI | Execute from roadmap → every step in order, app runs on first attempt, quick-add form immediately populated with show-specific data, counters reflect real content |
| **Runtime errors from skipped migration:** 1–2 per sprint<br>**Time from "code done" to "data in DB":** Days (manual SQL)<br>**Sense of personalization:** Low | **Runtime errors:** 0 (followed plan)<br>**Time from "code done" to "data in DB":** Minutes (used the form you just built)<br>**Sense of personalization:** High — your show, your data |

**Time saved:** Hours of debugging and manual DB work → minutes of form submission

#### 🎯 Your Goal

Switch from plan mode to agent mode, hand the merged roadmap to Copilot as explicit execution instructions, verify the running feature, and then populate your site with at least 6 real entries from your chosen show.

#### 📋 Steps

1. **Switch from Plan Mode to Agent Mode**

   In Copilot Chat, switch the mode selector from **Plan** back to **Agent**. This is a meaningful switch: agent mode can now write files, run terminal commands, and modify the codebase. The research phase is over.

   Open `docs/universe-dashboard-plan.md` in the editor so you have it visible while the agent works.

2. **Give the Execution Prompt**

   Reference the roadmap file and issue this instruction:

   ```
   Execute this plan. Start with the database schema, then the API endpoints, then the React component, then wire it into the homepage.
   ```

   Watch the agent work file by file. It should follow the dependency sequence from the roadmap: migration → routes → component → homepage.

   **Your job during execution:** Monitor for deviations. If the agent:

   - Creates a table named differently than `lore_entries` → flag it and ask it to match the plan
   - Adds a feature not in the roadmap (e.g., pagination, search) → decide whether to accept or revert
   - Skips a step → point it back to the roadmap

   This active monitoring is the human judgment that plan mode preserved for you. You understood the plan, so you can evaluate deviations in context.

3. **Verify the Running Feature**

   Start the FanHub app and confirm:

   - **Homepage loads** with all three stat cards visible
   - **Initial counters show `0`** — the tables exist but no data is in them yet
   - **The "Add to Universe" panel** appears (collapsed or open) with a type selector and name/description fields
   - **Form submits successfully** — open the browser Network tab, submit the form, and confirm a `POST` request goes out and returns `200`
   - **Counter refreshes** after submit — the correct card (not all three) increments by 1

   If any of these fail, check the roadmap for the step that was skipped or misimplemented. Ask the agent to revisit that specific step rather than rerunning everything.

4. **Populate Your Universe (The Payoff)**

   Open the "Add to Universe" form and start entering real data from your show. Use the type selector to add entries across all three categories:

   **If you're working with Breaking Bad:**
   - Character: Walter White — "Chemistry teacher turned methamphetamine manufacturer, motivated by pride as much as survival"
   - Character: Jesse Pinkman — "Walt's former student, whose moral conscience becomes the show's emotional center"
   - Character: Saul Goodman — "Criminal lawyer who provides Walt and Jesse with legal cover and criminal connections"
   - Location: Albuquerque — "The New Mexico city where almost every scene in the series takes place"
   - Location: The Superlab — "Industrial-scale meth lab built beneath a laundry facility, hidden in plain sight"
   - Canon Fact: "Walt's chemistry knowledge predates his cancer diagnosis — his meth quality reflects decades of academic expertise, not desperation"

   **For any other show:** Add at least 3 characters, 2 locations, and 1 canon fact. Use details that only a fan of the show would know — not just Wikipedia summaries. The specificity matters; it's what makes the accuracy check in Module 3 meaningful.

   After each submission, watch the matching counter increment. After all six entries: the counters show real numbers. The site now has actual data from your chosen show.

5. **Answer the Debrief Question**

   Before moving on, write your answer to this question in your notes:

   > *Did Copilot follow the plan faithfully? Where did it deviate — and was the deviation an improvement or a mistake?*

   At least one deviation is likely. Name one you accepted (the agent saw a useful pattern you hadn't specified) and, if you can, one you overrode (the agent made an assumption that conflicted with the plan). This reflection closes the loop on the entire plan → execute arc.

#### ✅ Success Criteria

- [ ] Agent mode used (not plan mode) for all code execution
- [ ] Homepage renders all three stat cards with live counts fetched from the API
- [ ] "Add to Universe" form accepts input, posts to the DB, and refreshes the correct counter
- [ ] At least 6 entries added from your show (3 characters, 2 locations, 1 canon fact)
- [ ] Network tab confirms the API call on form submit
- [ ] You can describe one decision Copilot made that you accepted — and one you overrode (or explain why no overrides were needed)

#### 📚 Official Docs

- [Agent Mode in VS Code Chat](https://code.visualstudio.com/docs/copilot/chat/chat-agent) — How agent mode executes multi-step tasks autonomously
- [Planning in VS Code Chat](https://code.visualstudio.com/docs/copilot/chat/chat-planning) — The full plan → execute workflow end to end

---

## 🔗 What You Built

**In this exercise:**
- A running "Universe at a Glance" section on the FanHub homepage with live animated stat counters
- A working "Add to Universe" form that writes to the database and refreshes the correct counter
- At least 6 real entries from your chosen show now in the database

**How it compounds:**

| Previous Modules | This Exercise | Combined Power |
|------------------|---------------|----------------|
| `copilot-instructions.md` (Module 1) | Agent execution | The agent followed your naming and styling conventions without being reminded — because the instructions were already in context |
| Exercises 2.1–2.3 (Plans + Roadmap) | Execution fidelity | The agent had a concrete roadmap to follow, not a vague prompt — every implementation step had a defined reason and sequence |
| Show data entered here | Module 3 foundation | The characters, locations, and canon facts you just added become the target data for Elena's accuracy-check prompt in Module 3 |

**Why this matters:** The data you entered in Step 4 isn't busywork. In Module 3, Elena will build a reusable accuracy-check prompt that validates whether FanHub's content matches real show canon. The specific entries you added here — the ones that require fan knowledge, not Wikipedia knowledge — are exactly what that prompt will test. Plan mode made the implementation safe; your show data makes it yours.

---

## ➡️ Next Module

**[Module 3: Custom Prompts](../03-custom-prompts/README.md)** — Elena has been running the same show-accuracy validation by hand five times a sprint. She's done. Module 3 turns that repeated check into a reusable `.prompt.md` file — and the first thing it validates is the data you just added.

> *"I've typed the same accuracy check into Copilot so many times I could write it in my sleep. There has to be a way to save it."*
> — Elena, ready for Module 3

---
