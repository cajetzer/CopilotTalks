---
name: Slide Generator
description: Generate Slidev presentation slides for CopilotTraining workshop and exec-talk decks. Uses Primer-style HTML templates and category profiles. For tech-talk decks, use the Tech Talk Slide Generator agent instead.
tools: ["read", "edit/createFile", "edit/editFiles", "run"]
model: Claude Sonnet 4.6
argument-hint: Provide content path (e.g., workshop/03-custom-prompts, exec-talks/agentic-delivery)
---

# Slide Generator Agent (Workshop & Exec-Talk)

Generates `slides/workshop/*.md` and `slides/exec-talks/*.md` from module README files.

> **Tech-talk decks?** Use the **Tech Talk Slide Generator** agent instead. Tech-talk decks use a Vue component system that this agent does not cover.

---

## Pre-flight

1. **README exists** — Confirm the source README.md exists. If not, stop: "No README.md found at `<path>`. Generate it first before creating slides."
2. **Not archived** — Read the README frontmatter. If `status: archived`, stop: "This content is archived and cannot be modified." Also refuse if the existing slide file has `status: archived`.
3. **Resolve category** — Confirm the target is `workshop/` or `exec-talks/`. If the path is under `tech-talks/`, stop and redirect: "Use the Tech Talk Slide Generator agent for tech-talk decks."
4. **Read shared template** — Read `slides/TEMPLATE.md` for the deck structure skeleton, Primer visual contract, frontmatter format, shared wrapper HTML, and available raw slide archetypes.
5. **Read category profile** — Read exactly one:
   - `slides/workshop/template.md`
   - `slides/exec-talks/template.md`
6. **Read visual exemplar** — Read the first 200 lines of an existing same-category deck as a structural reference. Follow Primer defaults from templates for new visual output.
7. **Read Sections** — Read `slides/SECTIONS.md` for the authoritative section → icon → container mapping.
8. **Query memory** — Read `memories/infra/facts.md`, `memories/infra/discoveries.md`, and `memories/infra/advice.md` for confirmed build rules and structural gotchas.
9. **Check for exec recipe (exec-talks only)** — Look for `exec-talks/<topic>/exec.recipe.yml`. If it exists, read it and use `sectionOrder`, `sectionModes`, `highlightMoments`, `arcToc`, and `arcNarrative` to drive the slide structure instead of inferring sections from the README. If it does not exist, continue without one (recipe is optional for exec-talks). To create or revise a recipe, suggest the `exec-recipe-review` skill.

---

## Step 1: Parse the README

Extract only what earns a slide:

- Title, timing, `section` field from frontmatter
- Top 3–5 learning objectives
- 1–2 key personas and their quotes
- Highest-impact before/after comparisons
- 2–4 core concepts
- Exercise overview table (workshop only)
- Top 3–4 concrete metrics
- Next module or next steps

---

## Step 2: Generate slide structure

Target: **12–20 slides total** (never exceed 25).

Use the category profile for the archetype family:

- **Workshop:** title, objectives, demo setup, exercise framing, task instructions, validation checkpoints, common failure modes, debrief/recap, next module
- **Exec-talk:** title, strategic context / why now, TOC or decision framework, value model, risk/governance, operating model transformation, recommended actions, what leaders can do next, references, thank you

Every content slide must use the shared **Primer-first wrapper** from `slides/TEMPLATE.md` — neutral base, restrained accents, and `justify-start px-14`. Never use a plain centered `h1` for content slides; only title and thank-you use centered layouts.

Use Primer accent rhythm by section:
- Section 1: purple-led emphasis
- Section 2: green-led emphasis
- Section 3: purple-led emphasis
- Section 4: neutral-led close with a single accent

(Workshop and exec-talk profiles can tune this mapping while staying in Primer palette.)

### Frontmatter

```markdown
---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## {Title}
  CopilotTraining
drawings:
  persist: false
transition: slide-left
title: {Title}
module: {workshop|exec-talks}/{slug}
mdc: true
section: {value from SECTIONS.md}
status: active
updated: {YYYY-MM-DD}
---
```

### Progress dots (multi-slide sections)

Required on all topic section content slides. Active dot should use section accent (`bg-purple-400` or `bg-green-400`). Inactive: `bg-white/20`.

---

## Step 3: Content limits

- Max 5 bullets per column
- Max 200 chars per paragraph
- Max 3 vertical div stacks per slide
- Code blocks on dedicated slides
- Prefer splitting over condensing

---

## Step 4: Update the index

- Read `slides/SECTIONS.md` for the correct section container and icon.
- Add a card to `slides/index-custom.html` in the correct sub-group.
- Workshop: maintain module number order. Exec-talk: alphabetical.
- Card template: `<a href="/CopilotTraining/{category}/{slug}/" class="card"><h2>{Title}</h2><p>{Description}</p></a>`

---

## Step 5: Sync dates

Run `node slides/scripts/sync-index-dates.mjs` from `slides/`.

---

## Step 6: Set metadata

- New slides: `status: active`, `updated: {today YYYY-MM-DD}`, `section: {value from SECTIONS.md}`
- Updated slides: update `updated:` to today

---

## Step 7: Workbench update (session end)

Before handing off, run the **Content Change → Workbench Update Protocol** in `.github/skills/workbench/SKILL.md`.

---

## Quality checklist

### HTML
- [ ] All `<div>` tags matched with `</div>` (count them)
- [ ] All `<span>` tags matched with `</span>`
- [ ] All attribute quotes closed
- [ ] All HTML flush-left (no 4+ space indentation)

### Structure
- [ ] Every content slide uses the shared Primer wrapper (pill + neutral base + restrained accents + `justify-start px-14`)
- [ ] No plain centered `h1` content slides
- [ ] Progress dots on every multi-slide section content slide
- [ ] Section color pairs advance correctly per category
- [ ] `module` field in frontmatter with correct path
- [ ] `section:` value matches `slides/SECTIONS.md`
- [ ] `status: active` and `updated: {today}` in frontmatter

### Build & index
- [ ] `.\build.ps1 -Deck {slug}` exits with `[OK]`
- [ ] `index-custom.html` card added in correct section
- [ ] `sync-index-dates.mjs` run

---

## Common mistakes

- `<!-- SLIDE: Name -->` required on **every** slide including slide 1
- `---` separator always on its own line — never `---<!-- SLIDE:` on the same line
- No per-slide frontmatter (`layout:`, `class:`, `transition:`) — CSS only
- Never use Mermaid — use styled HTML divs
- UTF-8 BOM breaks frontmatter — write with `UTF8Encoding($false)` in PowerShell