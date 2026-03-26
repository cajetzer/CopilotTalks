# Exercise 2.1: Plan the Universe Stat Cards

## 🔨 Exercise

### Exercise 2.1: Plan the Universe Stat Cards — "Research Before the First Line"

**Lead:** Marcus ⭐ | **Support:** Sarah 🤝, Elena 🤝 | **Time:** 10 min

#### 📖 The Challenge

It's 10:00 AM. Marcus opens the FanHub homepage and stares at placeholder text. The Breaking Bad data is all there in the database — one full season of characters, episodes, locations — but nothing surfaces on the site. He's been asked to add a "Universe at a Glance" section: three animated stat cards showing live counts of Characters, Locations, and Canon Facts.

The feature sounds small. That's the trap.

Last sprint Marcus started three features that "looked small" and hit mid-implementation walls: once when a UI change needed a DB migration he hadn't anticipated, once when two API routes collided because he hadn't checked what already existed, and once when a new React component needed to slot into the component tree in a way that broke existing styling. Total restart cost: about 90 minutes across those three incidents, and 2–3 discovered dependencies per feature *after* coding had started.

*"I keep figuring out the real scope halfway through,"* Marcus admits. *"I need to see the whole map before I take the first step."*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Marcus dives into coding, hits a missing DB migration 20 minutes in, discovers the API routes don't exist 30 minutes in, realizes he needs a new React component he hasn't planned for at the 45-minute mark | Marcus runs plan mode first: 90 seconds of codebase research surfaces the DB migration, the three new API routes, the React component, and exactly where it slots into the homepage — all before a line is written |
| **Planning time:** 30–35 min (gut-check + mid-feature discoveries)<br>**Discovered-late dependencies:** 2–3 per feature<br>**Restart incidents:** 3 last sprint | **Planning time:** 10 min (2 min AI research + 8 min review)<br>**Discovered-late dependencies:** 0<br>**Restart incidents:** 0 |

**Time saved:** 30+ min planning + 90 min restart recovery → 10 min planning + 0 recovery

#### 🎯 Your Goal

Switch Copilot to plan mode and run a single prompt to generate a complete implementation plan for the "Universe at a Glance" stat cards. The plan will surface every file that needs to change — before any code is written. Then annotate the plan with at least one refinement and save it for Exercise 2.3.

#### 📋 Steps

1. **Switch to Plan Mode**

   Open the Copilot Chat panel (`Ctrl+Alt+I` / `Cmd+Alt+I` on Mac). At the top of the chat input, find the **mode selector** (it shows "Ask", "Edit", or "Agent" depending on your current mode). Switch it to **Plan**.

   > **Why plan mode?** Plan mode is read-only by design — it can open files, read your codebase, analyze dependencies, and draft an implementation plan, but it will never write or modify a file until you explicitly approve. Default agent mode starts making changes immediately. Plan mode separates research from execution.

   You should see the mode indicator change. There's no code to run yet — you're just switching modes.

2. **Before You Prompt — Make Your Guess**

   Before entering the prompt, take 30 seconds and write down your answer to this question in your notes:

   > *How many files will this feature touch?*

   Most participants guess 2–3. Hold that guess — you'll compare it to the plan's output.

3. **Enter the Plan Prompt**

   In the plan mode chat, enter this prompt exactly:

   ```
   Add a "Universe at a Glance" section to the FanHub homepage with three stat cards showing live counts: Characters, Locations, and Canon Facts. Each card should fetch its count from the API and animate the number on load.
   ```

   Wait for plan mode to finish researching. This typically takes 60–120 seconds. Watch the tool calls — you'll see it reading ARCHITECTURE.md, your existing route files, the DB schema, the homepage component — all without making a change.

   **What to observe:** The read-only research is the feature of plan mode. Every file it reads is a file it might have *changed* without warning if you'd used agent mode instead.

4. **Count the Files**

   When the plan finishes, look at the **Implementation Steps** section. Count the distinct files the plan proposes touching:

   - A DB migration file (new table for `lore_entries` with a `type` column covering locations and canon facts)
   - Three new API route handlers: `GET /api/stats/characters`, `GET /api/stats/locations`, `GET /api/stats/canon-facts`
   - A new `<UniverseStats>` React component with fetch logic and CSS animation
   - The homepage component (to wire in `<UniverseStats>`)

   That's typically 5–7 files. Compare to your pre-prompt guess. The gap between your guess and the real count is the lesson plan mode teaches every time.

5. **Annotate at Least One Refinement**

   Read the plan carefully and add at least one annotation or clarification. Examples:

   - If the plan called the table `universe_facts`, note: *"Rename to `lore_entries` — matches our naming convention for world-building data"*
   - If the plan proposed class components, note: *"Prefer `useEffect` hooks — consistent with our functional component pattern"*
   - If the plan didn't specify animation style, note: *"Animate with a count-up on mount, 1-second duration, using CSS transitions"*

   Annotations become the refinement instructions you'll pass to agent mode in Exercise 2.4.

6. **Save the Plan**

   Copy the plan output (or use the "Open in Editor" button in Copilot Chat) and save it to:

   ```
   docs/universe-dashboard-plan.md
   ```

   You'll merge this with the Exercise 2.2 plan in Exercise 2.3.

#### ✅ Success Criteria

- [ ] Plan mode runs without making any code changes to the codebase
- [ ] Plan identifies the DB migration (new `lore_entries` table), three API routes, `<UniverseStats>` React component, and homepage wiring
- [ ] You recorded your pre-prompt file-count guess and compared it to the plan's actual count
- [ ] At least one plan refinement annotated (naming, pattern, or behavior)
- [ ] Plan saved to `docs/universe-dashboard-plan.md` for use in Exercise 2.3

#### 📚 Official Docs

- [Planning in VS Code Chat](https://code.visualstudio.com/docs/copilot/chat/chat-planning) — How plan mode researches tasks before proposing changes
- [Context Engineering Guide](https://code.visualstudio.com/docs/copilot/guides/context-engineering-guide) — How Copilot uses workspace context for comprehensive analysis

---

## 🔗 What You Built

**In this exercise:**
- `docs/universe-dashboard-plan.md` — A research-backed implementation plan with file paths, step ordering, and at least one refinement annotation

**How it compounds:**

| Previous Modules | This Exercise | Combined Power |
|------------------|---------------|----------------|
| `copilot-instructions.md` (Module 1) | Plan mode research | The plan already follows your naming conventions and project patterns — you didn't have to explain them |
| `ARCHITECTURE.md` (Module 1) | Dependency mapping | Plan mode read your architecture doc and used it to trace the data flow from DB → API → Component → Page |

**Why this matters:** The pre-prompt guess vs. actual file count is repeatable. Every time participants run plan mode on something that "looks simple," the gap appears. That gap represents bugs, restarts, and mid-feature surprises that plan mode eliminates permanently.

---

## ➡️ Next Exercise

**[Exercise 2.2: Plan the Quick-Add Form](exercise-2.2.md)** — David spots a gap in the 2.1 plan: there's no way to add data without a database client. Run a second plan mode pass to design the quick-add form — and check whether it correctly inherits context from the first plan.

> *"The counters show what's there. But how does data get there in the first place?"*
> — David, spotting the gap

---
