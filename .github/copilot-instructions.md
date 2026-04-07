# Copilot Instructions for CopilotTraining Content Development

## Repository Structure

This repository contains three types of content, each with different purposes and guidelines:

- **`workshop/`** — Hands-on training modules with personas, exercises, and metrics (15+ years experience → newcomers)
- **`tech-talks/`** — Technical deep-dives for practitioners (30-60 min presentations on specific capabilities)
- **`exec-talks/`** — Executive thought leadership (strategic context for leadership decision-making)

---

## Content-Type Specific Guidelines

### Workshop Content (`workshop/` directory)

**Purpose:** Hands-on training with progressive skill-building through personas and exercises

**Key characteristics:**

- Persona-driven narratives (Sarah, Marcus, David, Elena, Rafael)
- Outcome-based language (what was built/validated, not "learned")
- Quantifiable metrics in Before/After comparisons
- Hands-on exercises with concrete artifacts

**For content creation:** Use `module-planner` or `module-creator` agents (detailed requirements in `.github/agents/`)

**Persona reference:** [workshop/00-orientation/PERSONAS.md](../workshop/00-orientation/PERSONAS.md)

### Tech Talk Content (`tech-talks/` directory)

**Purpose:** Technical deep-dives for practitioners exploring specific capabilities or patterns

**Key characteristics:**

- Clear opportunity statement framed as discovery (not problem/pain)
- Technical depth with practical examples
- Architectural diagrams and system flows
- Implementation guidance and tradeoffs
- Concrete takeaways for immediate application
- Required working artifacts (configs, workflows, code samples)

**Voice:** Optimistic curiosity — illuminate what's now possible, tell a "good news" story

- Lead with discovery: "What this unlocks", "Now possible", "This enables"
- Avoid alarmist language: "The Maintenance Tax", "Falls Short", "Pain Points"
- Avoid comparative negativity: Frame the new approach directly, not "better than before"
- Section naming: "The Opportunity" not "The Problem", "Evolving Practices" not "Retire These"

**For content creation:** Use `Tech Talk Generator` agent (detailed requirements in `.github/agents/tech-talk-generator.agent.md`)

**Template reference:** [tech-talks/TEMPLATE.md](../tech-talks/TEMPLATE.md)

**Tone:** Expert-to-expert, assumes technical background, focuses on "how" and "why"

### Executive Talk Content (`exec-talks/` directory)

**Purpose:** Thought leadership for technical leaders making strategic decisions about AI adoption

**Key characteristics:**

- Strategic framing with business context
- Industry parallels and analogies (aviation, manufacturing, etc.)
- Organizational implications and transformation patterns
- Risk mitigation and governance frameworks
- C-level/VP-level decision criteria

**Tone:** Authoritative but accessible, focuses on "what this means" for the organization

---

## Universal Formatting Guidelines

_Apply to all content types_

### Emoji Vocabulary

| ----- | ---------------------------------- | ---------------------------------------------------- |
| ⏰ | Time markers | `## ⏰ 10:30 AM — The Prompt Problem` |
| 📖 | Story/narrative sections | `## 📖 The Story` |
| 🎯 | Objectives, goals, exercises | `## 🎯 Learning Objectives` |
| 🧠 | Mindful moments (philosophical) | `## 🧠 Mindful Moment: Clarity Over Cleverness` |
| 📚 | Key concepts, documentation | `## 📚 Key Concepts` |
| 🔨 | Exercises section header | `## 🔨 Exercises` |
| ❌ | "Before" frustration | `#### ❌ The "Before" — What Frustration Looks Like` |
| ✨ | "After" improvement | `#### ✨ The "After" — The Improved Experience` |
| ✅ | Success criteria, checklists | `#### ✅ Success Criteria` |
| 💭 | Persona thoughts/reactions | `#### 💭 Elena's Realization` |
| 🚀 | Challenge extensions, quick starts | `#### 🚀 Challenge Extension` |
| 🔗 | Connections, cross-references | `## 🔗 Compounding Value` |
| ➡️ | Next steps, navigation | `## ➡️ Next Up` |
| 💡 | Tip callouts | `💡 **Pro Tip**: ...` |
| 🌐 | Bonus/web-related content | `## 🌐 Bonus: Advanced Techniques` |
| 📊 | Metrics tables | `## 📊 Success Metrics` |
| 🎭 | Behind the scenes | `## 🎭 Behind the Scenes` |
| ⭐ | Lead exercise marker (personas) | `⭐ *You lead this one*` |
| 🤝 | Collaboration marker (personas) | `🤝 *Team collaboration*` |
| 😰 | Fear/before state | `- 😰 Worried that...` |

---

## Tone and Voice

- **Respectful** — Treat all experience levels with dignity
- **Practical** — Focus on what works, not theory for theory's sake
- **Honest** — Acknowledge limitations and tradeoffs
- **Encouraging** — Celebrate progress, normalize learning curves

---

## Slide Generation Guidelines

When creating Slidev presentations, follow these principles:

- **Maximum 15-20 slides per module** — Force focused, essential content only
- **Extract content from source README** — Preserve persona quotes, metrics, and exercise objectives
- **Visual hierarchy** — Use emoji vocabulary consistently (🎯, ⏰, 📊, etc.)
- **Beautiful, polished design** — Dark cockpit-style with Tailwind CSS, never use Mermaid diagrams
- **Balanced HTML for Slidev** — When a slide uses raw HTML, keep wrapper tags strictly balanced. Prefer one obvious outer container for section-opener slides, and verify every opened `<div>` is closed before the `---` slide separator.
- **Ending slide quality** — Decks should include a polished references slide before the final slide and a designed thank-you slide, not plain closing text.

### Slide Separator Rules (CRITICAL)

**`---` must always be on its own line, surrounded by newlines — never on the same line as any other content.**

✅ Correct:
```
</div>

---

<!-- SLIDE: Next Slide -->
```

❌ Wrong — breaks counting and causes parse errors:
```
</div>
---<!-- SLIDE: Next Slide -->
---
layout: two-cols
---
```

**Never use per-slide frontmatter blocks** (`layout:`, `class:`, `transition:`, etc.) between `---` separators. These create double-separator patterns that break slide counting. Instead:
- Replace `layout: two-cols` with a `grid grid-cols-2` CSS div
- Replace `class: text-center` with `class="... text-center ..."` on the outer content wrapper

With this rule enforced, **slide N = the Nth `\n---\n` separator** — no special-case parsing needed.

### Slide Name Comments (required)

Every content slide **must** begin with a named HTML comment on its own line:

```
---

<!-- SLIDE: Slide Name Here -->
<div class="...">
```

Use the slide's pill label or heading text as the name. The comment enables both name-based lookup and human navigation of the file.

**The Nth `<!-- SLIDE: -->` comment = Slidev slide N** (1-indexed). To find slide 5:
```powershell
$comments = [regex]::Matches($content, '<!-- SLIDE:.*?-->')
$name = $comments[4].Value  # index 4 = slide 5
```

**To find a slide by name:**
```powershell
[regex]::Match($content, '(?s)<!-- SLIDE: Mindset Shift -->.*?(?=\n---\n)').Value
```

**When editing or inserting slides**, always refer to them by their `<!-- SLIDE: Name -->` comment, not by position number.

### Slide Frontmatter Requirements

All slide files **must** include these fields in the YAML frontmatter:

- `status: active` or `status: archived` — Indicates whether the deck is live or frozen
- `updated: YYYY-MM-DD` — Date of last modification

**Archived slides (`status: archived`) must never be modified, regenerated, or fixed by any agent or skill.** If an agent encounters an archived slide, it must stop and inform the user. The build scripts (`build-all.sh`, `build-all.ps1`) automatically skip archived slides — their last-built output remains deployed until manually removed.

### Tech Talk / Exec Talk Frontmatter Requirements

All tech talk and exec talk README.md files **must** include YAML frontmatter at the top:

```yaml
---
status: active # or "archived"
updated: 2026-02-08 # last modification date
section: "Customization & Context" # index-custom.html sub-group
---
```

**Fields:**

- `status` — `active` or `archived`. Archived talks must never be modified by agents.
- `updated` — Date of last modification (YYYY-MM-DD). Agents must update this when modifying content.
- `section` — The sub-group in `slides/index-custom.html` where the slide card belongs. Valid values are defined in **[`slides/SECTIONS.md`](../slides/SECTIONS.md)** (single source of truth). Current values: `Copilot Tools`, `Customization & Context`, `Agent Architecture`, `Agentic SDLC`, `Executive Talks`, `Workshop`.
- `references` — _(optional)_ Array of authoritative URLs used as sources for the talk's content. Each entry has:
  - `url` — _(required)_ Full URL to the official documentation or source
  - `label` — _(required)_ Short human-readable description of the page
  - `verified` — _(required)_ Date (YYYY-MM-DD) when the URL was last confirmed accurate and accessible

  Example:

  ```yaml
  references:
    - url: https://docs.github.com/en/copilot/...
      label: "Official overview page"
      verified: 2026-02-17
  ```

  Agents should populate `references` from the talk's `research.md` URLs when creating or updating content. The `scripts/check-references.mjs` script validates that all reference URLs are still accessible.

**Change detection:** When generating slides, compare the README's `updated` date against the slide file's `updated` date. If the README is newer, the slide needs regeneration. If the slide is newer or equal, it's already up to date.

### Slide Index "NEW" Badge

`slides/index-custom.html` displays a **NEW** badge on cards for slides updated within the last 7 days. This is driven by a `SLIDE_DATES` JavaScript map inside the HTML file, which maps topic slugs to their `updated:` dates from frontmatter.

**After any slide is created, modified, or has its `updated:` date changed**, agents must run the sync script to keep the badge data current:

```bash
node slides/scripts/sync-index-dates.mjs
```

Use `--check` to verify without modifying (useful in CI). The script reads `updated:` from all slide frontmatter and rewrites the `SLIDE_DATES` map in `index-custom.html`.

**For slide generation:** Use the `slide-generator` agent (see `.github/agents/slide-generator.agent.md`)

### Recommended Workflow

```
Use slide-generator agent to create slides for workshop/03-custom-prompts
```

This generates slides from the module README (selective, 15-20 slides), updates the slide index, and reports completion.

**Persona reference:** [workshop/00-orientation/PERSONAS.md](../workshop/00-orientation/PERSONAS.md)

---

## Quick Voice Checklist

Before submitting content, verify:

- [ ] **Outcomes not learning** — Shows what was built/validated, not what was discovered
- [ ] **Metrics included** — At least 2-3 quantified improvements in Before/After
- [ ] **Evidence-based** — Demonstrates through action, not claims understanding
- [ ] **Persona-authentic** — Uses the persona's unique lens (Sarah=ROI, David=expertise, etc.)
- [ ] **Professional tone** — Treats all as experienced professionals validating tools

---

## MemPalace — Project Memory

MemPalace is the project-level semantic memory store for CopilotTraining authoring decisions, patterns, and cross-references. It is **separate from Copilot Memory** (personal/cross-project).

**Cardinal rule: MemPalace suggests; repo files confirm.**

- **Query** after pre-flight gates complete, before content generation
- **Write** at session END after content work is saved and verified
- **Never** query during pre-flight — live repo files take precedence there
- **Never** front-load sessions with palace dumps (search-on-demand only)

For full usage patterns, timing gates, wing/hall reference, and the content-change → update protocol, use the `mempalace` skill:

```
@mempalace
```

---

## Agent Invocation Guidelines

When calling subagents (via `runSubagent`), keep prompts minimal:

- **Trust agent configuration** — Agents already have access to this file and their own `.agent.md` instructions
- **Don't repeat rules** — Never re-state guidelines from copilot-instructions.md or agent definitions
- **Be concise** — Just specify the target (e.g., "Generate slides for workshop/03-custom-prompts")
- **Let agents work** — They're configured to follow workspace conventions automatically

**Bad example:**

> "Generate slides following the slide generation guidelines, using emoji vocabulary, dark cockpit-style, max 15-20 slides..."

**Good example:**

> "Generate slides for workshop/03-custom-prompts"
