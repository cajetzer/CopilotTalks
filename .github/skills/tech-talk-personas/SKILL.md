---
name: tech-talk-personas
description: >
  Add persona-grounded audience framing to a tech-talk. Selects 2–3 relevant personas,
  adds a "Who This Hits" box and up to 3 reaction lines to the README, and adds persona
  speaker notes to the slide deck. Triggers: "add personas", "who this hits", "persona reactions",
  "audience framing".
infer: true
---

# Tech-Talk Personas Skill

Adds three types of persona-grounded content to a tech-talk:

1. **"Who This Hits" box** — placed in the README after the opening question; tells presenters and readers which archetypes this talk was written for
2. **Reaction Lines** — up to 3 inline callouts in the README, each surfacing a genuine persona concern at the moment it becomes relevant
3. **Speaker Notes** — persona perspective notes added to key slides in the slide deck, visible only in presenter mode

These are **additive and non-destructive**. This skill never rewrites existing content — it only inserts clearly-delineated persona annotations.

---

## When to Invoke

- After a tech-talk README is complete and a slide deck exists (or README only if deck hasn't been generated yet)
- When a presenter wants audience-awareness cues while delivering the talk
- When a talk feels abstract and needs grounding in real developer concerns

**Not for:** Workshop exercises, exec-talks, or any content with `status: archived`.

---

## Pre-Flight

Read all of these in one parallel pass before doing anything else:

- `tech-talks/{topic}/README.md` — full read; identify: opening question, core tension, section structure, metrics and before/after claims
- `workshop/00-orientation/personas/sarah.md`
- `workshop/00-orientation/personas/david.md`
- `workshop/00-orientation/personas/elena.md`
- `workshop/00-orientation/personas/jessica.md`
- `workshop/00-orientation/personas/marcus.md`
- `workshop/00-orientation/personas/rafael.md`

If `slides/tech-talks/{slug}.md` exists, read its first 30 lines to confirm it's not archived. If it exists and is active, you'll add speaker notes there in Step 3. If it doesn't exist yet, skip Step 3 and note it for the user.

Confirm `status: archived` is absent from the README frontmatter before proceeding.

---

## Step 1 — Persona Selection

Select **exactly 2–3 personas** whose lenses map directly to content in this talk. Do not force all six. If a persona's concern is not genuinely answered by something in the talk, exclude them.

**Lens reference:**

| Persona | Archetype | Lens |
|---|---|---|
| Sarah | Skeptical Senior | ROI, proof, measurable value |
| David | Seasoned Architect | Technical depth, architectural integrity, expertise amplification |
| Elena | Quality Champion | Coverage, edge cases, rigor without shortcuts |
| Jessica | Eager Junior | Learning speed, confidence, not being exposed as incompetent |
| Marcus | DevOps Developer | Workflow friction, automation, developer productivity |
| Rafael | Product Visionary | Business value, outcomes, stakeholder impact, effort vs. value |

**Selection criteria:**
- The talk has a concrete metric or ROI claim → include Sarah
- The talk covers architectural decisions or abstractions under pressure → include David
- The talk covers testing, correctness, or catching errors → include Elena
- The talk is explicitly about learning or getting started → consider Jessica
- The talk is about CLI, CI/CD, automating dev workflows → consider Marcus
- The talk connects technical capability to business outcome → consider Rafael

Write down your selected personas and the single sentence that justifies each before proceeding.

---

## Step 2 — README Edits

Make two edits to the README. Edit the file directly — do not create a separate file.

### 2a. "Who This Hits" Box

**Placement:** Immediately after the opening question or core framing paragraph — typically the first blockquote or bold question near the top of the README body, before the first `##` heading.

**Format:**
```markdown
> **🎯 Who This Hits Hardest:**
> If you [persona 1 concern in one clause] ([Name]), or [persona 2 concern] ([Name]) — this talk was written for you.
```

Rules:
- 2–3 personas max; one clause per persona
- Each clause describes a real concern surfaced by the talk, not a generic description
- The whole block fits on 2–3 lines — never longer
- Use first name only (Sarah, David, etc.)

Example:
```markdown
> **🎯 Who This Hits Hardest:**
> If you evaluate every new tool against measurable ROI (Sarah), or need to know
> the architecture holds under real enterprise pressure (David) — this talk was written for you.
```

### 2b. Reaction Lines

Add up to **3 reaction lines** total across the README. Place each one inline, immediately before or after the content that prompted it — not clustered together.

**Format:**
```markdown
> 💬 *[Name]'s question: "[One sharp, specific question in their voice]"*
```

Rules:
- Max 3 per talk — fewer is better if the moments aren't compelling
- Must surface a **genuine concern** — a question the persona would actually ask, not a compliment
- Never longer than one line
- Use the persona's voice (Sarah: drily skeptical; David: pleasantly pedantic; Elena: methodical suspicion; Marcus: snaps into focus on workflow; Rafael: outcome-focused; Jessica: quietly uncertain)
- Only place one at a high-stakes content moment: a before/after claim, a metric, a workflow change, a new capability demo
- Do not place two reaction lines within the same section

---

## Step 3 — Speaker Notes

Add persona speaker notes to the slide deck at `slides/tech-talks/{slug}.md`.

**How Slidev notes work:** Any markdown text placed after a slide's component invocation and before the next `---` separator appears in presenter mode only. Add notes directly below the `/>` closing of the relevant component.

**Where to add notes:**

| Slide | What to add |
|---|---|
| `TitleSlide` | 1–2 sentences on audience positioning: which personas are in the room, what they need to leave with |
| `CoreQuestionSlide` | One line per selected persona: what their version of this question sounds like |
| Each `SectionOpenerSlide` | One persona reaction to this section's promise — the concern they bring in, the thing they're waiting to see answered |
| `BeforeAfterSlide` | Persona reactions to the transformation: who's most moved by it and why |
| `WhatYouCanDoTodaySlide` | Which persona does which action; who is most likely to start today |

Skip body slides — notes on structural slides (openers, CoreQuestion, BeforeAfter) are enough.

**Format:**
```
/>

<!-- persona notes -->
**Audience lens:** Sarah — waiting for a concrete number; won't move until slide 8 delivers one. David — assessing whether the abstraction boundary is defensible.
```

Keep each note to 1–2 sentences max. Write in third-person present tense ("Sarah is waiting…", "David will challenge…"). These are cues for the presenter, not scripts.

---

## Quality Check

Before handing off:

- [ ] Exactly 2–3 personas selected; each justified by specific talk content
- [ ] "Who This Hits" box placed immediately after the opening question — not at the top of the file, not at the bottom of a section
- [ ] "Who This Hits" is 2–3 lines max; reads as a single thought
- [ ] Reaction lines: ≤ 3 total, none in the same section, each surfaces a genuine concern
- [ ] Each reaction line is one line only and uses the persona's authentic voice
- [ ] Speaker notes added to: TitleSlide, CoreQuestionSlide, all SectionOpenerSlides, BeforeAfterSlide, WhatYouCanDoTodaySlide
- [ ] Speaker notes are inside `<!-- persona notes -->` comments, 1–2 sentences each
- [ ] No existing README content was rewritten — only insertions
- [ ] No existing slide content was modified — only notes added below `/>` closers
