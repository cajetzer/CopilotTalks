# Exercise 1.1: Create ARCHITECTURE.md

## 🔨 Exercise

### Exercise 1.1: Create ARCHITECTURE.md — "Reduce Context Waste with Structural Documentation"

**Lead:** David ⭐ | **Support:** All 🤝 | **Time:** 10 min

#### 📖 The Challenge

David looks at the FanHub codebase and sees what every architect fears—a project with no map. The frontend is React, the backend is Express, but nowhere is this documented. Every time someone asks Copilot a simple question like "where should database queries go?" it has to analyze hundreds of files to figure out the structure.

Sarah chimes in: *"I timed it. Without architecture docs, Copilot takes 8 seconds to answer 'where do routes live?' because it's scanning the entire codebase. That's wasted time and wasted tokens on every query."* Marcus adds: *"And when I ask about database patterns, it gives me three different approaches because it can't tell which one we're actually using."*

David knows the solution: *"Before we write another line of code, we need ARCHITECTURE.md. Not a detailed spec—just enough structure so Copilot (and new developers) understand what goes where and why."*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Ask Copilot "where do database queries go?" → Analyzes 847 files → Response in 8 seconds → Suggests 3 different patterns | Ask Copilot "where do database queries go?" → References ARCHITECTURE.md → Response in 2 seconds → Suggests correct `src/database/` pattern |
| **Response Time:** 8 seconds<br>**Files Analyzed:** 847<br>**Suggestions:** Inconsistent (3 patterns) | **Response Time:** 2 seconds<br>**Files Analyzed:** 1 (architecture doc)<br>**Suggestions:** Consistent (documented pattern) |

#### 🎯 Your Goal

Create `fanhub/docs/ARCHITECTURE.md` that gives Copilot (and humans) structural understanding of the FanHub project in under 2 minutes of reading.

#### 📋 Steps

1. **Open Copilot Chat and use `@workspace` to analyze the structure**

   ```
   @workspace Analyze the FanHub project structure. Create an ARCHITECTURE.md
   that includes:
   - Tech stack (frontend, backend, database)
   - Folder structure (what goes where)
   - Data flow (how requests move through the system)
   - Key patterns (how we handle routes, database queries, API calls)

   Keep it concise—focus on structure, not implementation details.
   Save to fanhub/docs/ARCHITECTURE.md
   ```

   **Expected behavior:** Copilot analyzes the workspace and generates documentation covering the React frontend, Express backend, SQLite database, and folder organization.

2. **Review the generated ARCHITECTURE.md**

   Open `fanhub/docs/ARCHITECTURE.md` and verify it includes:
   - **Tech Stack** section listing React, Express, SQLite, Docker
   - **Folder Structure** section showing `/frontend`, `/backend`, `/docs`
   - **Data Flow** section explaining request routing
   - **Key Patterns** section describing how routes, database access, and error handling work

   Look for any inaccuracies (files that don't exist, wrong patterns) and correct them.

3. **Test the improvement with a query**

   In Copilot Chat, ask:
   ```
   @workspace Where should I add a new database query for retrieving show details?
   ```

   **Expected result:** Copilot references ARCHITECTURE.md and immediately suggests `backend/src/database/` following the documented pattern. Response should be faster (2-3 seconds) and more specific than before.

4. **Refine based on team feedback**

   Share the ARCHITECTURE.md with the team. Ask:
   - Is the tech stack complete?
   - Does the folder structure match reality?
   - Are the key patterns accurate?

   Make any necessary adjustments before committing.

#### ✅ Success Criteria

- [ ] `fanhub/docs/ARCHITECTURE.md` exists and is under 200 lines (concise, not exhaustive)
- [ ] Document includes: Tech Stack, Folder Structure, Data Flow, Key Patterns
- [ ] Test query shows faster response time (compare before/after with timer)
- [ ] Copilot now references ARCHITECTURE.md when answering structural questions (visible in chat responses)
- [ ] Team agrees document is accurate (no major corrections needed)

> 📂 **Compare Your Work**: [`examples/completed-config/docs/ARCHITECTURE.md`](../examples/completed-config/docs/ARCHITECTURE.md)

#### 📚 Official Docs

- [VS Code: Copilot Chat Context](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-context) — How `@workspace` provides project-wide context
- [GitHub Docs: Prompt Engineering](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot) — Best practices for effective prompts

---

## 🔗 What You Built

**In this exercise:**
- `fanhub/docs/ARCHITECTURE.md` — Project structure documentation that reduces context waste and speeds up AI queries

**Impact metrics:**
- Query response time: 8s → 2s (75% faster)
- Files analyzed per query: 847 → 1
- Consistency: 3 conflicting patterns → 1 documented pattern

---

## ➡️ Next Up

**[Exercise 1.2: Create copilot-instructions.md](exercise-1.2.md)** — Now that Copilot knows your structure, teach it your standards

> *"Architecture documentation tells Copilot WHERE things go. Now we need to tell it HOW to write them."*
> — Sarah, ready to enforce React patterns automatically

---
