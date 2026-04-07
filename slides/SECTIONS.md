# Slide Index Sections

> **AUTHORITATIVE SOURCE:** `slides/index-custom.html` is the source of truth for what talks exist and their sections.
> This file describes what's currently deployed in the HTML.
>
> Used by:
> - `.github/agents/slide-generator.agent.md` (card placement logic)
> - `.github/copilot-instructions.md` (valid `section:` frontmatter values)
>
> **To add/remove/deprecate a section:**
> 1. Edit `slides/index-custom.html` (add/remove `<div class="sub-group">` or `<a class="card">` elements)
> 2. Then update this file to match what's deployed
> 3. Agents read this file at runtime — they pick up the reference

---

## Section Map

Each entry defines:
- **Section name** — the exact string used in README frontmatter `section:` field
- **Icon** — emoji used in the index sub-group header
- **Parent container** — which top-level `<div class="section ...">` block it belongs to
- **Contents** — what talks belong here (informational, not exhaustive)

---

### 🔬 Tech Talks

Top-level container class: `section tech-talks`

| Section Name | Icon | Slug | Tagline | Contents |
|---|---|---|---|---|
| `Copilot Tools` | 💬 | `copilot-tools` | Where you interact with Copilot every day | Chat Internals, CLI, CLI + Azure MCP, Code Review, Web, What's New in VS Code |
| `Customization & Context` | 🧩 | `customization-context` | Making it yours — instructions, skills, and integrations | Primitives, Hooks, Memory, SDK, MCP Apps |
| `Agent Architecture` | 🤖 | `agent-architecture` | Patterns for composing and orchestrating multi-agent systems | Agent Teams, ACP, ~~Multi-Step Tasks~~ (merged), ~~Parallel Execution~~ (merged) |
| `Agentic SDLC` | 🚀 | `agentic-sdlc` | Transforming the full software delivery lifecycle with AI agents | Workflows, Journey, SDLC, Enterprise Patterns |

---

### 💼 Executive Talks

Top-level container class: `section exec-talks`

| Section Name | Icon | Slug | Contents |
|---|---|---|---|
| `Executive Talks` | 💼 | `exec-talks` | Agentic Delivery, Agentic Economics, Agentic Labor |

> Executive Talks have no sub-groups — cards go directly in the `exec-talks` section grid.

---

### 🎓 Workshop

Top-level container class: `section workshop`

| Section Name | Icon | Slug | Contents |
|---|---|---|---|
| `Workshop` | 🎓 | `workshop` | Modules 00–06 (numbered, no sub-groups) |

> Workshop modules are numbered, not grouped into sub-groups.

---

## Card Lifecycle

Cards in `index-custom.html` can have multiple states:

| State | Badge | Meaning | Example |
|---|---|---|---|
| **Active** | none | Current, in production, recommended | Copilot CLI, Agent Teams |
| **Deprecated** | `<span class="badge-deprecated">Merged</span>` | Superseded by another talk; content archived into that talk | Multi-Step Tasks (merged into Agent Teams) |

Deprecated cards remain in the HTML for link preservation and historical records, but are visually muted (opacity 0.45, grayscale filter) and non-clickable.

---

## index-custom.html Structure Reference

```
<div class="section tech-talks">
  <div class="sub-group">  ← Copilot Tools (💬)
  <div class="sub-group">  ← Customization & Context (🧩)
  <div class="sub-group">  ← Agent Architecture (🤖)
  <div class="sub-group">  ← Agentic SDLC (🚀)

<div class="section exec-talks">
  <div class="grid">       ← Executive Talks (no sub-groups)

<div class="section workshop">
  <div class="grid">       ← Workshop modules (no sub-groups)

<div class="section repos">
  <div class="grid">       ← Related Repos (external links, not talk slides)
```

---

## Changing Sections

When you add, rename, or deprecate a section:

1. **Edit `slides/index-custom.html`** — add/remove `<div class="sub-group">` blocks or `<a class="card">` elements
2. **Then update this file** — keep the table in sync with what's actually deployed
3. **Agents pick up the change automatically** — they read this file at runtime

> **Key rule:** The `section:` field in README frontmatter must exactly match a **Section Name** in the table above (case-sensitive).
> If a README has `section: "Copilot Tools"`, it's placed in the `copilot-tools` sub-group.
