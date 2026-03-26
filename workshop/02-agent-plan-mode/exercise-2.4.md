# Exercise 2.3: Combine Plans into a Delivery Roadmap

## 🔨 Exercise

### Exercise 2.3: Combine Plans into a Delivery Roadmap — "Merge Before You Build"

**Lead:** Marcus ⭐ | **Support:** Elena 🤝 | **Time:** 10 min

#### 📖 The Challenge

It's 11:00 AM. Marcus has two plans on his screen: stat cards from Exercise 2.1 and the quick-add form from Exercise 2.2. Both are well-reasoned. Both mention the `lore_entries` table. Both touch the homepage component. And neither one specifies which to build first.

Two sprints ago, Marcus and a teammate wrote parallel plans for two features that shared a DB migration. They merged to main on the same day. The migration ran twice. The rollback cost them an afternoon.

*"Parallel plans need to be merged before anyone writes a line of code,"* Marcus says. *"It's not bureaucracy — it's just not paying for the same work twice."*

Elena adds the QA perspective: *"And the sequence matters. If the React component gets wired in before the API endpoint exists, I get nothing to test. DB schema first, API second, component third, homepage wiring last — or everything's blocked."*

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Ship two plans directly to implementation → `lore_entries` migration runs twice, homepage component updated twice in two PRs, counter-refresh logic written inconsistently in each feature branch | Merge both plans into one roadmap → one migration, one homepage update, one clear sequence: DB → API → Component → Wiring |
| **Duplicate steps across separate plans:** 3<br>**Merge conflicts from parallel implementation:** 2 last sprint<br>**Post-merge rework:** High | **Duplicate steps:** 0 (resolved before coding)<br>**Merge conflicts:** 0<br>**Post-merge rework:** None |

**Time saved:** 2 sprint-day incidents → 0, replaced by a 10-minute merge conversation with Copilot

#### 🎯 Your Goal

Share both plans with Copilot and ask it to produce a single merged delivery roadmap with no duplicate steps and a dependency-safe execution sequence. Verify the sequence yourself, then save the roadmap.

#### 📋 Steps

1. **Share Both Plans with Copilot**

   In the same plan mode session (or a new one if needed), paste in — or reference — the content of both plans:

   - The stat card plan from Exercise 2.1 (saved as `docs/universe-dashboard-plan.md` or in your notes)
   - The form panel plan from Exercise 2.2

   If both are in the same Copilot Chat session already, Copilot can reference them directly. If you saved them to files, open those files and use `#file:docs/universe-dashboard-plan.md` to reference them in the prompt.

2. **Enter the Merge Prompt**

   ```
   Combine these two plans into a single delivery roadmap. Identify any shared steps (like DB schema), resolve duplicates, and sequence everything so there are no dependency conflicts.
   ```

   The roadmap Copilot produces should arrive in this sequence:
   1. **DB schema and migration** — `lore_entries` table (shared between both plans, built once)
   2. **API routes** — `GET /api/stats/*` endpoints, then `POST /api/characters` and `POST /api/lore-entries`
   3. **React components** — `<UniverseStats>` first (read-only), then the form panel (write + refresh)
   4. **Homepage wiring** — import and render both components in the correct order

   If the roadmap doesn't arrive in this order, that's worth flagging.

3. **Spot-Check for Duplicates**

   Before accepting the roadmap, verify manually:

   - Is the `lore_entries` migration mentioned once or twice? (Should be once.)
   - Is the homepage component update mentioned once or twice? (Should be once.)
   - Does the form panel's counter-refresh reference the same API route the stat cards use? (It should.)

   Elena's QA lens: check that no component appears before its API endpoint in the sequence. If `<UniverseStats>` is listed before `GET /api/stats/characters` exists, the app will render broken state during development.

4. **Save the Merged Roadmap**

   Save the final combined roadmap to:

   ```
   docs/universe-dashboard-plan.md
   ```

   Overwrite the earlier partial draft from Exercise 2.1. The final version of this file is the artifact you hand to agent mode in Exercise 2.4.

#### ✅ Success Criteria

- [ ] Combined roadmap produced with no duplicate steps (DB migration appears once, homepage wiring appears once)
- [ ] Shared artifacts (`lore_entries` table, homepage component) correctly identified and merged into single steps
- [ ] Sequence is dependency-safe: DB → API → Components → Homepage wiring
- [ ] Roadmap saved as `docs/universe-dashboard-plan.md`

#### 📚 Official Docs

- [Planning in VS Code Chat](https://code.visualstudio.com/docs/copilot/chat/chat-planning#_how-to-plan-a-task) — Multi-step planning and plan synthesis
- [Context Engineering Guide](https://code.visualstudio.com/docs/copilot/guides/context-engineering-guide) — How Copilot synthesizes multiple context sources into coherent plans

---

## 🔗 What You Built

**In this exercise:**
- `docs/universe-dashboard-plan.md` (final version) — A single dependency-safe delivery roadmap covering both the stat cards and the quick-add form

**How it compounds:**

| Previous Modules | This Exercise | Combined Power |
|------------------|---------------|----------------|
| `copilot-instructions.md` (Module 1) | Merge arbitration | The merged roadmap follows your conventions without re-specifying them during the merge prompt |
| Exercise 2.1 plan | Shared foundation | DB schema from the first plan becomes the single source of truth in the merged roadmap |
| Exercise 2.2 plan | Conflict surface | Second plan exposed the overlap — merge step eliminated it before it could become a PR conflict |

**Why this matters:** On a real team, two engineers writing parallel plans for adjacent features is unavoidable. The merge step is the discipline that prevents double migrations, duplicate PRs, and integration failures. Plan mode makes the merge fast enough that skipping it is never worth the risk.

---

## ➡️ Next Exercise

**[Exercise 2.4: Execute the Plan and Populate Your Universe](exercise-2.4.md)** — Switch from plan mode back to agent mode and hand the merged roadmap to Copilot for execution. Then populate your site with real show data and watch the counters change from `0 · 0 · 0` to something real.

> *"The roadmap is perfect. Now let's find out if Copilot can follow it."*
> — Sarah, switching to agent mode

---
