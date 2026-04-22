# Slide Visual Design System

This file is the authoritative shared reference for Slidev deck primitives used across CopilotTraining decks. The slide-generator agent reads this file before generating slides.

Category-specific visuals and archetypes live in these profile docs and must also be read before generation:

- `slides/tech-talks/template.md`
- `slides/exec-talks/template.md`
- `slides/workshop/template.md`

---

## Deck Structure (REQUIRED — use as skeleton for every deck)

Every deck follows this 5-section skeleton. Total slide budget: **under 25 slides**.

| Section | Slides | Color | Purpose |
|---------|--------|-------|---------|
| **Opener** | Title + TOC | deck category colors | Hook and navigation |
| **Part 1** | 1 opener + 2–5 content | `cyan → blue` | First topic |
| **Part 2** | 1 opener + 2–5 content | `blue → indigo` | Second topic |
| **Part 3** | 1 opener + 2–5 content | `indigo → purple` | Third topic |
| **Close** | What You Can Do Today + References + Thank You | `purple → pink` | Action and wrap-up |

**Rules:**
- Each topic section = 1 Section Opener + 2–5 content slides (progress dots required on all)
- Add a Part 4 (`purple → pink`) only when content genuinely warrants it; shift Close to `pink → rose`
- Close is always exactly 3 slides: What You Can Do Today → References → Thank You
- TOC must link to each Part opener by slide number using `@click="$nav.go(N)"`
- Target total: **under 25 slides**. Each part earns more slides based on topic depth — don't pad, don't cram.

---

## Category Profiles

Use category profiles for colors, title-slide style, and category-specific archetypes.

| Category | Profile | Notes |
|---|---|---|
| **Workshop** | `slides/workshop/template.md` | Instructional decks with exercise and validation archetypes |
| **Tech-talks** | `slides/tech-talks/template.md` | Practitioner decks with capability-led narrative and `TitleSlide` |
| **Exec-talks** | `slides/exec-talks/template.md` | Strategic decks with value, risk, and operating-model framing |

### Color Progression Within a Deck

| Progression | Colors | Use For |
|---|---|---|
| Cool→Warm | cyan → blue → indigo → purple → pink | Common multi-part progression for technical deep dives |
| Warm→Cool | orange → red → purple → blue | Common workshop pacing pattern |
| Professional | blue → cyan → green | Common exec-talk progression |

**Section color pairings (in order):**
- Section 1: `from-cyan-400 to-blue-400`
- Section 2: `from-blue-400 to-indigo-400`
- Section 3: `from-indigo-400 to-purple-400`
- Section 4: `from-purple-400 to-pink-400`
- Section 5: `from-pink-400 to-rose-400`

---

## CSS Quick Reference

| Element | Pattern |
|---|---|
| Gradient text | `bg-gradient-to-r from-X-400 to-Y-400 bg-clip-text text-transparent` |
| Cards | `bg-gradient-to-br from-X-900/30 to-Y-900/30 rounded-xl border border-X-500/30` |
| Hover zoom | `hover:scale-105 transition-all duration-300` |
| Glow shadow | `shadow-lg shadow-X-500/10` |
| Flow arrows | `<div class="text-2xl text-gray-500">→</div>` |
| Glowing orb | `bg-gradient-to-r ... rounded-full blur-3xl` |
| Impact callout | `bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border` |

### Color Coding Conventions

| Purpose | Background | Border/Accent | Text |
|---|---|---|---|
| Human authority | `bg-blue-900/60` | `border-blue-400` | `text-blue-300` |
| AI/Automation | `bg-green-900/60` | `border-green-400` | `text-green-300` |
| Warning/Danger | `bg-red-900/40` | `border-red-500` | `text-red-400` |
| Caution | `bg-yellow-900/40` | `border-yellow-500` | `text-yellow-400` |
| Neutral/Info | `bg-gray-800` | `border-gray-600` | `text-gray-300` |
| Success/Highlight | `bg-gradient-to-r from-blue-600 to-blue-800` | — | `text-white` |

---

## Slide Frontmatter

**CRITICAL: Always include the `module` field for the footer.**

```markdown
---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Module Title
  CopilotTraining
drawings:
  persist: false
transition: slide-left
title: Module Title
module: workshop/01-instructions
status: active
updated: YYYY-MM-DD
mdc: true
---
```

**`module` field format:**
- Workshop: `module: workshop/{folder-name}`
- Tech talks: `module: tech-talks/{folder-name}`
- Exec talks: `module: exec-talks/{folder-name}`

---

## ⛔ Tech-Talk Decks: Stop Here

**If you are generating a `slides/tech-talks/*.md` deck, stop reading this file.**

Tech-talk decks use Vue components for every slide — Title, CoreQuestion, ToC, SectionOpeners, all 13 body archetypes, BeforeAfter, WhatYouCanDoToday, References, and ThankYou. The raw HTML patterns below this line do not apply. They will produce incorrect output if used in a tech-talk deck.

👉 **Go to `slides/tech-talks/template.md`** — it has the full component catalog, prop schemas, import block, and usage examples for every required slide.

The sections below apply only to **workshop** and **exec-talk** decks, which still use inline HTML.

---

## Title Slide (workshop / exec-talk only)

Do not choose the title-slide pattern from this file alone. Resolve the deck category first, then load the matching category profile and use its title-slide pattern.

- Tech talks: `slides/tech-talks/template.md`
- Exec talks: `slides/exec-talks/template.md`
- Workshop: `slides/workshop/template.md`

Every category title slide still follows the same shared content contract:

- `{TITLE}`
- `{SUBTITLE}`
- `{TAGLINE}`
- `{FOOTER_TEXT}`

Use this generic shape only as a shared reference for the required content fields.

```html
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br {BACKGROUND_GRADIENT}"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r {ORB_GRADIENT} rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-64" alt="" /></div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r {TEXT_GRADIENT} bg-clip-text text-transparent relative z-10">{TITLE}</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r {PILL_GRADIENT} rounded-full text-white text-xl font-medium shadow-lg {SHADOW_COLOR}">{SUBTITLE}</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">{TAGLINE}</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-{ACCENT_COLOR}-400 to-transparent rounded-full relative z-10"></div>
</div>
<div class="abs-br m-6 flex gap-2"><span class="text-sm opacity-50">{FOOTER_TEXT}</span></div>
```

---

## Standard Content Slide (REQUIRED for ALL content slides)

This is the **cockpit template** — use it for every non-title, non-section-opener slide. It provides consistent depth (layered gradients + breadcrumb) that matches the visual style of `agentic-sdlc.md`. **Never use a plain centered `h1` without this wrapper.**

Replace `{SECTION_COLOR}`, `{NEXT_COLOR}` with the section's color pair (e.g., `cyan`/`blue` for section 1, `blue`/`indigo` for section 2). Replace `{SECTION_EMOJI} {Section Name}` with the section's icon and name.

```html
<!-- SLIDE: Slide Name -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-{SECTION_COLOR}-900/20 via-{NEXT_COLOR}-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-{SECTION_COLOR}-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-{SECTION_COLOR}-600/80 to-{NEXT_COLOR}-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">{SECTION_EMOJI} {Section Name}</span>
<div class="flex-1 h-px bg-gradient-to-r from-{SECTION_COLOR}-400/60 to-transparent"></div>
</div>
<div class="relative z-10 mb-3">
<div class="text-lg font-bold text-white mb-1">{Slide Headline}</div>
<div class="text-sm text-gray-400">{Optional subtitle or context line}</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
{CONTENT}
</div>
</div>
```

### Progress Dots (for multi-slide sections)

Progress dots are **required on all topic section content slides**. Active dot: `bg-{SECTION_COLOR}-400 shadow-lg shadow-{SECTION_COLOR}-500/50`. Inactive: `bg-white/20`.

```html
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📐 Section Name</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-white/40 text-xs ml-1">1 of 3</span>
</div>
```

---

## Section Opener Slide (REQUIRED for each major section)

Use this **rich section opener** (no `layout:` frontmatter — CSS only). The larger orb (`w-[600px]`) creates more visual impact than on regular content slides. Adapt `{PART_N}`, colors, title, subtitle, teaser cards, and monospace callout per section.

```html
<!-- SLIDE: Part N — Section Title -->

<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-{SECTION_COLOR}-900/25 via-{NEXT_COLOR}-900/15 to-{ACCENT_COLOR}-900/20"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-{SECTION_COLOR}-500/10 via-{NEXT_COLOR}-500/10 to-{ACCENT_COLOR}-500/10 rounded-full blur-3xl"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="mb-4 px-4 py-1.5 bg-gradient-to-r from-{SECTION_COLOR}-600/40 to-{NEXT_COLOR}-600/40 rounded-full border border-{SECTION_COLOR}-400/30 text-{SECTION_COLOR}-300 text-sm font-medium tracking-widest uppercase">Part {N}</div>
<h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r from-{SECTION_COLOR}-400 via-{NEXT_COLOR}-300 to-{ACCENT_COLOR}-400 bg-clip-text text-transparent leading-tight">{Section Title}</h1>
<h2 class="!text-2xl !font-normal !m-0 opacity-70 mb-6">{Section Subtitle}</h2>
<div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-{SECTION_COLOR}-400 to-transparent mb-6"></div>
<div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
<div class="px-4 py-3 bg-{SECTION_COLOR}-900/30 rounded-xl border border-{SECTION_COLOR}-500/30">
<div class="text-2xl mb-1">{EMOJI_1}</div>
<div class="text-{SECTION_COLOR}-300 font-semibold">{Teaser 1}</div>
<div class="text-xs opacity-70 mt-1">{Detail 1}</div>
</div>
<div class="px-4 py-3 bg-{NEXT_COLOR}-900/30 rounded-xl border border-{NEXT_COLOR}-500/30">
<div class="text-2xl mb-1">{EMOJI_2}</div>
<div class="text-{NEXT_COLOR}-300 font-semibold">{Teaser 2}</div>
<div class="text-xs opacity-70 mt-1">{Detail 2}</div>
</div>
<div class="px-4 py-3 bg-{ACCENT_COLOR}-900/30 rounded-xl border border-{ACCENT_COLOR}-500/30">
<div class="text-2xl mb-1">{EMOJI_3}</div>
<div class="text-{ACCENT_COLOR}-300 font-semibold">{Teaser 3}</div>
<div class="text-xs opacity-70 mt-1">{Detail 3}</div>
</div>
</div>
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
<span class="text-gray-400">{Short tagline statement}</span><br />
<span class="text-{SECTION_COLOR}-300 mt-1 block">↳ {One-line payoff}</span>
</div>
</div>
</div>
```

---

## Thank You Slide

**Tech-talk decks:** use `ThankYouSlide` component — props are `title`, `subtitle`, `cards`, `prompt`. See `slides/tech-talks/template.md`.

**Workshop / exec-talk decks:** see *End / Thank You Slide* section below for raw HTML in the category color scheme.

---

## TOC Slide with Gradient Cards (REQUIRED)

Use `@click="$nav.go(N)"` where N = slide number of the target section divider. Never use `<a href="#anchor">`. **Do not use `layout:` frontmatter** — wrap everything in a full-height div instead.

### 4-section (2×2 grid)

```html
<!-- SLIDE: Table of Contents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-6">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Table of Contents</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-6 mt-2 max-w-4xl mx-auto">
<div @click="$nav.go(5)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">🎯</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Section 1</div>
<div class="text-sm text-gray-300 mt-1">Brief description</div>
<div class="text-xs text-cyan-400/70 mt-2">Key metric</div>
</div>
</div>
<div @click="$nav.go(9)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">🔧</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Section 2</div>
<div class="text-sm text-gray-300 mt-1">Brief description</div>
<div class="text-xs text-blue-400/70 mt-2">Key metric</div>
</div>
</div>
<div @click="$nav.go(13)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">💡</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Section 3</div>
<div class="text-sm text-gray-300 mt-1">Brief description</div>
<div class="text-xs text-indigo-400/70 mt-2">Key metric</div>
</div>
</div>
<div @click="$nav.go(17)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
<div class="text-3xl mb-2">🚀</div>
<div class="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Section 4</div>
<div class="text-sm text-gray-300 mt-1">Brief description</div>
<div class="text-xs text-purple-400/70 mt-2">Key metric</div>
</div>
</div>
</div>
<div class="mt-6 text-center text-sm opacity-60">Click any section to jump directly there</div>
</div>
</div>
```(3-column grid)

```html
<!-- SLIDE: Table of Contents -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-6">
<span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📖 Table of Contents</span>
<div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-6 mt-2 max-w-5xl mx-auto">
<div @click="$nav.go(5)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
<div class="text-3xl mb-2">🏗️</div>
<div class="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Part 1</div>
<div class="text-sm text-gray-300 mt-1">Topic Name</div>
<div class="text-xs text-cyan-400/70 mt-2">Brief description</div>
</div>
</div>
<div @click="$nav.go(10)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10">
<div class="text-3xl mb-2">📋</div>
<div class="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Part 2</div>
<div class="text-sm text-gray-300 mt-1">Topic Name</div>
<div class="text-xs text-blue-400/70 mt-2">Brief description</div>
</div>
</div>
<div @click="$nav.go(15)" class="cursor-pointer group">
<div class="p-5 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/10">
<div class="text-3xl mb-2">🏭</div>
<div class="text-lg font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Part 3</div>
<div class="text-sm text-gray-300 mt-1">Topic Name</div>
<div class="text-xs text-indigo-400/70 mt-2">Brief description</div>
</div>
</div>
</div>
<div class="mt-6 text-center text-sm opacity-60">Each part is independent → Jump to what you need</div>
</div>
</div>
```

---

## Comparison Panels (Before/After)

```html
<div class="grid grid-cols-2 gap-6 mt-4">
<div class="p-4 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl border-2 border-red-500/30">
<div class="text-center mb-3">
<div class="text-2xl">❌</div>
<div class="font-bold text-red-300">Before / Without</div>
</div>
<div class="space-y-2 text-sm">
<div class="p-2 bg-red-900/30 rounded">Point 1</div>
<div class="p-2 bg-red-900/30 rounded">Point 2</div>
<div class="p-2 bg-red-900/30 rounded">Point 3</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-xl border-2 border-emerald-500/30">
<div class="text-center mb-3">
<div class="text-2xl">✨</div>
<div class="font-bold text-emerald-300">After / With</div>
</div>
<div class="space-y-2 text-sm">
<div class="p-2 bg-emerald-900/30 rounded">Point 1</div>
<div class="p-2 bg-emerald-900/30 rounded">Point 2</div>
<div class="p-2 bg-emerald-900/30 rounded">Point 3</div>
</div>
</div>
</div>
```

---

## Flow Diagram (for processes)

```html
<div class="flex items-center justify-center gap-3 flex-wrap">
<div class="p-3 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 rounded-lg border border-cyan-500/30 text-center min-w-[120px] hover:scale-105 transition-transform">
<div class="text-2xl mb-1">📝</div>
<div class="text-sm font-semibold text-cyan-300">Step 1</div>
<div class="text-xs opacity-70">Description</div>
</div>
<div class="text-2xl text-gray-500">→</div>
<div class="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30 text-center min-w-[120px] hover:scale-105 transition-transform">
<div class="text-2xl mb-1">🎯</div>
<div class="text-sm font-semibold text-blue-300">Step 2</div>
<div class="text-xs opacity-70">Description</div>
</div>
<div class="text-2xl text-gray-500">→</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 rounded-lg border border-indigo-500/30 text-center min-w-[120px] hover:scale-105 transition-transform">
<div class="text-2xl mb-1">✨</div>
<div class="text-sm font-semibold text-indigo-300">Step 3</div>
<div class="text-xs opacity-70">Description</div>
</div>
</div>
```

---

## The Opportunity Slide

**Never use "The Problem" — use "The Opportunity" instead.** Wrap in the Standard Content Slide cockpit template.

```html
<!-- SLIDE: The Opportunity -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">🔓 The Opportunity</span>
<div class="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-2">
<div class="p-4 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-500/30">
<div class="text-xl mb-2">🎯</div>
<div class="font-semibold text-amber-300">Opportunity 1</div>
<div class="text-sm opacity-80 mt-1">Description of what becomes possible</div>
</div>
<div class="p-4 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30">
<div class="text-xl mb-2">⚡</div>
<div class="font-semibold text-orange-300">Opportunity 2</div>
<div class="text-sm opacity-80 mt-1">Description of what becomes possible</div>
</div>
</div>
</div>
</div>
```

---

## Solution Flow Slide

```html
# ✨ The Solution

<div class="flex items-center justify-center gap-3 flex-wrap mt-4">
<!-- 3-5 flow items using the Flow Diagram pattern above -->
</div>
<div class="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 text-center">
<div class="text-lg font-semibold text-green-300">Result: {Clear outcome statement}</div>
</div>
```

---

## Key Takeaways Slide

Wrap in the Standard Content Slide cockpit template.

```html
<!-- SLIDE: Key Takeaways -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">✅ Key Takeaways</span>
<div class="flex-1 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-2 gap-4 mt-4 max-w-4xl mx-auto">
<div class="p-4 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
<div class="flex items-center gap-3">
<div class="text-2xl font-bold text-cyan-400">1</div>
<div>
<div class="font-semibold text-cyan-300">Takeaway Title</div>
<div class="text-sm opacity-80">Brief explanation</div>
</div>
</div>
</div>
<div class="p-4 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-500/30">
<div class="flex items-center gap-3">
<div class="text-2xl font-bold text-blue-400">2</div>
<div>
<div class="font-semibold text-blue-300">Takeaway Title</div>
<div class="text-sm opacity-80">Brief explanation</div>
</div>
</div>
</div>
</div>
</div>
</div>
```

---

## What You Can Do Today Slide

**Tech-talk decks:** use `WhatYouCanDoTodaySlide` component — see `slides/tech-talks/template.md`.

**Workshop / exec-talk decks:** this label is tech-talk specific. Use your category profile's closing pattern (workshop: Key Takeaways → What to Practice Next; exec-talk: What Leaders Can Do Next).

---

## References Slide

**Tech-talk decks:** use `ReferencesSlide` component — see `slides/tech-talks/template.md`.

**Workshop / exec-talk decks:** include a brief sources list if applicable, or omit.

---

## End / Thank You Slide

Use the category color scheme from the title slide. **No `layout:` frontmatter** — the outer div handles full-height centering.

```html
<!-- SLIDE: Thank You -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-48" alt="" /></div>
<img src="./sdp-logo.png" class="w-48 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent relative z-10">Thank You!</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-lg font-medium shadow-lg shadow-cyan-500/25">{TITLE}: {SUBTITLE}</span>
</div>
<div class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-3xl mx-auto relative z-10">
<div class="p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/30">
<div class="text-cyan-300 font-bold text-lg">{CALL_OUT_1}</div>
<div class="text-gray-300 mt-2 text-xs">{DETAIL_1}</div>
</div>
<div class="p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/30">
<div class="text-blue-300 font-bold text-lg">{CALL_OUT_2}</div>
<div class="text-gray-300 mt-2 text-xs">{DETAIL_2}</div>
</div>
<div class="p-3 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/30">
<div class="text-indigo-300 font-bold text-lg">{CALL_OUT_3}</div>
<div class="text-gray-300 mt-2 text-xs">{DETAIL_3}</div>
</div>
</div>
<div class="mt-6 text-sm opacity-60 relative z-10">{DISCUSSION_PROMPT}</div>
<div class="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
```

---

## Persona Card

```html
<div class="grid grid-cols-2 gap-8 mt-8">
<div class="p-6 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
<div class="text-4xl mb-2">👨‍💼</div>
<div class="text-xl font-bold text-blue-300">David</div>
<div class="text-sm opacity-75 mb-3">Staff Engineer · 20 years</div>
<div class="text-sm italic opacity-90">"Same investment, double the payoff."</div>
</div>
</div>
```

---

## Grid Layout Reference

```html
<!-- Comparisons (Before/After) -->
<div class="grid grid-cols-2 gap-8">...</div>

<!-- Process Steps (3-4 phases) -->
<div class="grid grid-cols-4 gap-3">...</div>

<!-- Checklists/Features (2×4 or 3×3) -->
<div class="grid grid-cols-2 gap-2 text-xs">...</div>

<!-- Hierarchy (org charts, systems) -->
<div class="flex flex-col items-center gap-3">...</div>
```

---

## Callout Boxes

```html
<!-- Key punchline -->
<div class="p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg text-center">
<div class="text-2xl font-bold text-white">Key insight goes here.</div>
</div>

<!-- Warning -->
<div class="p-3 bg-gradient-to-r from-red-900/40 to-gray-800 rounded-lg text-center">
<span class="text-white font-bold">⚠️ Warning message</span>
</div>

<!-- Impact bar -->
<div class="mt-4 p-3 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-lg text-center">
<span class="text-white font-bold">Impact: 2+ hours → 10 minutes</span>
</div>

<!-- Bottom tagline -->
<div class="mt-4 text-center text-sm text-gray-400 italic">Closing thought or attribution</div>
```

---

## Aesthetic Guidelines

- **Dark mode first** — dark backgrounds look more polished; use `dark:` variants
- **Consistent spacing** — `gap-2` (tight), `gap-4` (standard), `gap-8` (breathing room)
- **Readable text** — `text-xs` (dense), `text-sm` (body), `text-xl`+ (headlines)
- **Icon + text pairings** — always pair emojis with labels for scannability
- **Border accents** — `border-l-4` for list items, full borders for cards
- **Never use Mermaid diagrams** — render inconsistently; always use styled HTML divs
- **Flush-left HTML** — never 4+ space indentation (markdown treats it as a code block)
