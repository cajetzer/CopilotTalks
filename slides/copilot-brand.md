# GitHub Copilot Branding Guide for Slidev Presentations

> Based on [brand.github.com](https://brand.github.com) and [primer.style](https://primer.style)

> **Slide context note:** Structure Vue components (`TitleSlide`, `SectionOpenerSlide`, etc.)
> use the **GitHub dark palette** (`#0d1117` bg, `#161b22` cards, `#e6edf3` text) rather than
> the vibrant Primer brand gradient palette. This ensures readability and professional polish
> in a presentation context. The colors below are the design token reference — for components,
> see `DARK_THEME` objects in `slides/tech-talks/components/structure/`.

## Copilot Theme Formula: 80/10/5/5

| Percentage | Category | Usage |
|------------|----------|-------|
| **80%** | Black/White | Primary backgrounds, body text, main content |
| **10%** | Neutral grays | Borders, secondary backgrounds, muted text |
| **5%** | GitHub Green | Success states, positive metrics, completions |
| **5%** | Copilot Purple | Hero elements, primary accents, key highlights |

---

## Color Palette

### Primary Colors (5% each)

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Copilot Purple | `#8534F3` | `[#8534F3]` | Hero titles, primary CTAs, sparkle elements |
| Purple Light | `#B870FF` | `[#B870FF]` | Hover states, secondary purple |
| Purple Dark | `#43179E` | `purple-900` | Deep backgrounds (sparingly) |
| GitHub Green | `#0FBF3E` | `[#0FBF3E]` | Success, ✓ checkmarks, positive states |
| Green Muted | `#238636` | `green-700` | Success backgrounds |

### Secondary Accent (2-3%)

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Copilot Orange | `#F08A3A` | `orange-500` | Claude/external, warmth, warnings |

### Neutral Palette (10% + 80% black/white)

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Gray 1 | `#232925` | `[#232925]` | Card backgrounds |
| Gray 2 | `#30363d` | `gray-700` | Borders, dividers |
| Gray 3 | `#484f58` | `gray-600` | Muted text, icons |
| Gray 4 | `#8b949e` | `gray-400` | Secondary text |
| Gray 6 (darkest) | `#101411` | `[#101411]` | Page background |
| White | `#FFFFFF` | `white` | Primary text, headings |
| Off-white | `#c9d1d9` | `gray-300` | Body text |

---

## Slidev Implementation

### Frontmatter (Standard)

```yaml
---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
fonts:
  sans: 'Mona Sans'
  mono: 'Mona Sans Mono'
transition: slide-left
mdc: true
---
```

### Title Slide

```html
<div class="relative h-full w-full flex items-center justify-center bg-[#101411]">
<div class="absolute inset-0 bg-gradient-to-br from-[#43179E]/10 via-transparent to-[#238636]/5"></div>
<div class="relative z-10 text-center px-8">
<h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-[#8534F3] to-[#B870FF] bg-clip-text text-transparent">
Title Here
</h1>
<p class="text-2xl text-gray-300">Subtitle</p>
</div>
</div>
```

### Card Components

**Neutral Card (default — use for most content):**
```html
<div class="bg-[#232925]/50 rounded-lg p-6 border border-gray-700">
<h3 class="text-xl font-bold text-white mb-3">Card Title</h3>
<p class="text-gray-300">Content here</p>
</div>
```

**Accent Card (sparingly — hero content only):**
```html
<div class="bg-[#232925]/50 rounded-lg p-6 border border-[#8534F3]/30">
<h3 class="text-xl font-bold text-[#8534F3] mb-3">🎯 Key Point</h3>
<p class="text-gray-300">Important content</p>
</div>
```

**Success Card (for positive outcomes):**
```html
<div class="bg-[#238636]/10 rounded-lg p-6 border border-[#238636]/30">
<h3 class="text-xl font-bold text-[#0FBF3E] mb-3">✓ Success</h3>
<p class="text-gray-300">Positive result</p>
</div>
```

### Text Hierarchy

| Element | Class | Notes |
|---------|-------|-------|
| H1 (title slides) | `text-6xl font-bold text-[#8534F3]` or gradient | Hero only |
| H1 (content slides) | `text-3xl font-bold text-white` | Use emoji prefix |
| H2 | `text-2xl font-bold text-white` | Section headers |
| H3 (card titles) | `text-xl font-bold text-white` | Default |
| H3 (accent) | `text-xl font-bold text-[#8534F3]` | Sparingly |
| Body | `text-gray-300` | Primary content |
| Muted | `text-gray-400` | Captions, dates |
| Code | `font-mono text-gray-300` | Inline code |

### Version Badges & Labels

```html
<!-- Version badge (all same neutral style) -->
<div class="bg-black/30 rounded px-3 py-2">
<span class="text-white font-bold">v1.109</span>
<span class="text-gray-400 text-sm ml-2">January 2026</span>
</div>

<!-- Feature label with sparse accent -->
<span class="text-[#8534F3] font-semibold">NEW</span>
```

### Code Blocks

```html
<div class="bg-black/40 rounded p-4 font-mono text-sm border border-gray-700">
<div class="text-gray-500">// Comment</div>
<div class="text-gray-300">"setting"<span class="text-gray-500">:</span> <span class="text-[#0FBF3E]">true</span></div>
</div>
```

### Gradients (Hero Elements Only)

```html
<!-- Title gradient (purple family) -->
<h1 class="bg-gradient-to-r from-[#8534F3] via-[#B870FF] to-[#8534F3] bg-clip-text text-transparent">

<!-- Background gradient (extremely subtle) -->
<div class="bg-gradient-to-br from-[#43179E]/10 via-transparent to-[#238636]/5">
```

---

## Standard Slide Layouts

The design system includes 11 pre-built slide layout classes in `style.css`. Use these instead of inline Tailwind to keep slides clean and consistent.

### Quick Reference

| Layout Class | Purpose | Use For |
|--------------|---------|---------|
| `slide-cover` | Title slide with logo + gradient text | First slide of every deck |
| `slide-question` | "The Question" quote box | Slide 2 — establishing the problem |
| `slide-nav-grid` | 2-column navigation cards | Table of contents |
| `slide-nav-grid-3` | 3-column navigation cards | Larger ToC |
| `slide-section` | Section divider | Breaking up major sections |
| `slide-compare-2` | Two-column comparison | "Do this / Don't do this" |
| `slide-compare-3` | Three-column comparison | Good / Caution / Bad |
| `slide-feature-grid` | Multi-column feature cards | Capabilities, features |
| `slide-table` | Styled data table | Reference tables |
| `slide-decision` | Decision tree / flowchart | ASCII-art decisions |
| `slide-closing` | Final recap slide | Last slide with summary |
| `slide-content` | Standard content | Everything else |

---

### 1. slide-cover — Title Slide

**Before (50+ lines inline):**
```html
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
  <div class="absolute inset-0 bg-[#101411]"></div>
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#8534F3]/15..."></div>
  <img src="./sdp-logo.png" class="w-64 relative" />
  <h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-[#8534F3] to-[#B870FF] bg-clip-text text-transparent">
    Title Here
  </h1>
  <!-- 30+ more lines... -->
</div>
```

**After (clean and semantic):**
```html
<div class="slide-cover">
  <div class="cover-orb"></div>
  <img class="logo" src="./sdp-logo.png" alt="Logo" />
  <h1>Title Here</h1>
  <div class="subtitle">Subtitle Text</div>
  <div class="tagline">Supporting tagline</div>
  <div class="divider"></div>
  <div class="meta">Tech Talk · 45 minutes</div>
</div>
```

**Children:**
- `.cover-orb` — Glowing purple background decoration
- `img.logo` — Logo with drop-shadow glow
- `h1` — Auto-styled gradient text
- `.subtitle` — Pill badge
- `.tagline` — Muted supporting text
- `.divider` — Gradient horizontal line
- `.meta` — Bottom-right metadata (duration, type)

---

### 2. slide-question — Quote Slide

```html
<div class="slide-question">
  <div class="quote-box">
    <div class="emoji">💭</div>
    <div class="quote">"How do I get relevant answers from Copilot?"</div>
  </div>
  <div class="audience">
    <span>Target: Developers & Engineering Teams</span>
  </div>
</div>
```

**Children:**
- `.quote-box` — Centered card container
- `.quote-box > .emoji` — Large emoji
- `.quote-box > .quote` — Purple gradient quote text
- `.audience` — Target audience pill

---

### 3. slide-nav-grid — Table of Contents

```html
<div class="slide-nav-grid">
  <h1>Table of Contents</h1>
  <div class="grid">
    <div class="nav-card" @click="$nav.go(5)">
      <div class="emoji">🎯</div>
      <div class="title">Context Mechanisms</div>
      <div class="desc">Implicit, #file, @workspace</div>
    </div>
    <div class="nav-card" @click="$nav.go(10)">
      <div class="emoji">🏗️</div>
      <div class="title">Chat Architecture</div>
      <div class="desc">Sidebar + inline modalities</div>
    </div>
    <!-- More cards... -->
  </div>
</div>
```

Use `slide-nav-grid-3` for 3-column variant.

**Children:**
- `h1` — Optional title
- `.grid` — Grid container
- `.nav-card` — Clickable cards with hover animation
- `.nav-card > .emoji`, `.title`, `.desc`

---

### 4. slide-section — Section Divider

```html
<div class="slide-section">
  <div class="emoji">🏗️</div>
  <h1>Chat Architecture</h1>
  <p>How the sidebar and inline modalities work together</p>
  <div class="meta">Section 2 of 4 · Architecture</div>
</div>
```

**Children:**
- `.emoji` — Large centered emoji
- `h1` — Gradient text title (auto-styled)
- `p` — Subtitle/description
- `.meta` — Section indicator

---

### 5. slide-compare-2 — Two-Column Comparison

```html
<div class="slide-compare-2">
  <h1>📊 Best Practices</h1>
  <div class="columns">
    <div class="col-good">
      <div class="header">✅ Move Toward</div>
      <div class="item">Use #file for precise context</div>
      <div class="item">Layer instructions progressively</div>
    </div>
    <div class="col-bad">
      <div class="header">🛑 Move Away From</div>
      <div class="item">Dumping entire codebase</div>
      <div class="item">No context at all</div>
    </div>
  </div>
</div>
```

**Children:**
- `h1` — Optional title
- `.columns` — Grid container
- `.col-good` — Green-themed column
- `.col-bad` — Red-themed column
- `.header` — Column header
- `.item` — Individual comparison items

---

### 6. slide-compare-3 — Three-Column Comparison

```html
<div class="slide-compare-3">
  <h1>📊 Context Strategy</h1>
  <div class="columns">
    <div class="col-good">
      <div class="header">✅ Move Toward</div>
      <div class="item">Explicit #file references</div>
    </div>
    <div class="col-caution">
      <div class="header">⚠️ Use Carefully</div>
      <div class="item">@workspace for broad searches</div>
    </div>
    <div class="col-bad">
      <div class="header">🛑 Move Away From</div>
      <div class="item">No context control</div>
    </div>
  </div>
</div>
```

Adds `.col-caution` (orange theme) between good and bad.

---

### 7. slide-feature-grid — Feature Cards

```html
<div class="slide-feature-grid">
  <h1>🎯 Key Capabilities</h1>
  <div class="grid">
    <div class="feature-card">
      <div class="emoji">🤝</div>
      <div class="title">Agent Mode</div>
      <div class="desc">Autonomous multi-step execution</div>
    </div>
    <div class="feature-card feature-card--accent">
      <div class="emoji">✨</div>
      <div class="title">Thinking Tokens</div>
      <div class="desc">See the AI's reasoning process</div>
    </div>
    <div class="feature-card feature-card--success">
      <div class="emoji">📊</div>
      <div class="title">Verified Results</div>
      <div class="desc">Confidence scoring for outputs</div>
    </div>
  </div>
</div>
```

**Grid variants:**
- `.grid` — Default 3 columns
- `.grid-2` — 2 columns
- `.grid-4` — 4 columns

**Card variants:**
- `.feature-card` — Neutral (default)
- `.feature-card--accent` — Purple border
- `.feature-card--success` — Green border + background
- `.feature-card--warning` — Orange border + background

---

### 8. slide-table — Data Table

```html
<div class="slide-table">
  <h1>📋 Command Reference</h1>
  <table>
    <thead>
      <tr>
        <th>Command</th>
        <th>Purpose</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>#file</code></td>
        <td>Add specific file context</td>
        <td><code>#file:src/auth.ts</code></td>
      </tr>
      <tr class="row-success">
        <td><code>@workspace</code></td>
        <td>Search entire codebase</td>
        <td><code>@workspace find auth handlers</code></td>
      </tr>
      <tr class="row-danger">
        <td><code>#codebase</code></td>
        <td>⚠️ Deprecated</td>
        <td>Use @workspace instead</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Row variants:**
- Default — neutral
- `.row-success` — green tint
- `.row-danger` — red tint

---

### 9. slide-decision — Decision Tree

```html
<div class="slide-decision">
  <h1>🔀 Choosing a Context Strategy</h1>
  <div class="flow">
Q: What's your scope?
├── <span class="highlight">Single file</span> → Use #file
├── <span class="highlight">Few related files</span> → Use multiple #file
├── <span class="node">Unknown location</span> → Use @workspace search
└── <span class="highlight">Entire codebase</span> → Use #codebase (careful!)
  </div>
</div>
```

**Span helpers:**
- `.highlight` — Green text for recommended paths
- `.connector` — Muted text for tree lines
- `.node` — Purple text for decision points

---

### 10. slide-closing — Recap Slide

```html
<div class="slide-closing">
  <h1>🎉 You Now Understand Context Mastery</h1>
  <div class="summary">From generic responses to codebase-specific solutions</div>
  <div class="grid">
    <div class="recap-card">
      <div class="emoji">🎯</div>
      <div class="title">Context Mechanisms</div>
      <div class="desc">6 tools for precise control</div>
    </div>
    <div class="recap-card">
      <div class="emoji">🏗️</div>
      <div class="title">Chat Architecture</div>
      <div class="desc">Sidebar + inline modalities</div>
    </div>
    <div class="recap-card">
      <div class="emoji">📊</div>
      <div class="title">Strategy Patterns</div>
      <div class="desc">Layering for efficiency</div>
    </div>
  </div>
  <div class="cta">Start applying these patterns in your next chat session</div>
  <div class="divider"></div>
</div>
```

**Children:**
- `h1` — Gradient recap title
- `.summary` — Main takeaway text
- `.grid` — Flex row of recap cards
- `.recap-card` — Summary cards
- `.cta` — Call-to-action text
- `.divider` — Decorative gradient line

---

### 11. slide-content — Standard Content

```html
<div class="slide-content">
  <h1>📚 Key Concepts</h1>
  <div class="content">
    <div class="card">
      <div class="font-bold text-white">Implicit Context</div>
      <div class="text-gray-300">Active file + selection automatically included</div>
    </div>
    <div class="callout callout--success">
      💡 Pro tip: Start with implicit context, add explicit only when needed
    </div>
  </div>
</div>
```

**Two-column variant:**
```html
<div class="slide-content">
  <h1>🔄 Before & After</h1>
  <div class="two-cols">
    <div>Left column content</div>
    <div>Right column content</div>
  </div>
</div>
```

---

### Callout Boxes

Use inside any slide layout for highlighting key points:

```html
<div class="callout callout--accent">💡 Key insight here</div>
<div class="callout callout--success">✅ This is the recommended approach</div>
<div class="callout callout--warning">⚠️ Use with caution</div>
<div class="callout callout--danger">🛑 Avoid this pattern</div>
```

---

### Utility Classes

**Audience Pill:**
```html
<div class="audience-pill">
  <span>Target: Enterprise Engineering Teams</span>
</div>
```

**Stat Badge:**
```html
<span class="stat-badge">Tech Talk · 45 minutes</span>
```

---

## Anti-Patterns (Avoid)

| ❌ Don't | ✓ Do Instead |
|----------|--------------|
| `bg-purple-900/30` on every card | `bg-[#232925]/50` for most cards |
| `text-purple-400` for all titles | `text-white` default, `text-[#8534F3]` for heroes |
| `border-purple-500/30` everywhere | `border-gray-700` default |
| Rainbow of accent colors per slide | One accent color per visual grouping |
| `from-cyan-400 via-blue-400 to-indigo-400` | `from-[#8534F3] to-[#B870FF]` |
| Emerald/violet for variety | Purple (primary) + Green (success) only |

---

## Color Usage by Context

| Context | Background | Border | Title | Body |
|---------|------------|--------|-------|------|
| Standard card | `bg-[#232925]/50` | `border-gray-700` | `text-white` | `text-gray-300` |
| Hero/key insight | `bg-[#232925]/50` | `border-[#8534F3]/30` | `text-[#8534F3]` | `text-gray-300` |
| Success/complete | `bg-[#238636]/10` | `border-[#238636]/30` | `text-[#0FBF3E]` | `text-gray-300` |
| Warning/external | `bg-orange-900/10` | `border-orange-500/30` | `text-orange-400` | `text-gray-300` |
| Code block | `bg-black/40` | `border-gray-700` | n/a | `text-gray-300` |

---

## Semantic Mapping

When converting from generic colors:

| Old Pattern | New Pattern | Reason |
|-------------|-------------|--------|
| `cyan-*` | `[#8534F3]` (purple) | Hero accent |
| `blue-*` | `gray-*` or `[#8534F3]` | Neutral or accent |
| `indigo-*` | `[#8534F3]` | Primary accent |
| `violet-*` | `[#43179E]` (dark purple) | Deep accent |
| `emerald-*` | `[#0FBF3E]` | Success only |
| `amber-*` / `rose-*` | `orange-500` | External/Claude |
| `teal-*` | `[#8534F3]` | Primary accent |

---

## Quick Reference

**Primary**: `#8534F3` (Copilot Purple)
**Success**: `#0FBF3E` (GitHub Green)
**External**: `#F08A3A` (Orange)
**Background**: `#101411` (Dark)
**Card BG**: `#232925` (Gray 1)
**Border**: `#30363d` (Gray 2)
**Text**: `#c9d1d9` (Gray 3 / text-gray-300)
**Muted**: `#8b949e` (Gray 4 / text-gray-400)
