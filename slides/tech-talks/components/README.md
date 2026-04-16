---
status: active
updated: 2026-04-16
---

# Tech-Talk Component Library

This directory contains reusable Vue components for CopilotTraining tech-talk slide decks. Every component follows consistent design patterns for dark/light mode, typography, and theming.

## Deck Structure & Component Sequence

Every tech-talk deck follows this structure:

```
1. TitleSlide              — Custom per deck (hero, title, subtitle, tagline)
2. CoreQuestionSlide       — The central question this talk answers
3. TocSlide                — 4 major sections ("Table of Contents")
4. SectionOpenerSlide (×1-4) — Part intro slides (colors change per part)
   [Content slides]        — Custom HTML in markdown (no component)
5. BeforeAfterSlide        — Deck-wide value recap before WYCDT
6. WhatYouCanDoTodaySlide  — Actionable next steps (Today/Week/Month)
7. ReferencesSlide         — Documented sources and links
8. ThankYouSlide           — Closing slide (custom per deck)
```

**Required components** (appear in every deck): TitleSlide, TocSlide, WYCDT, References, ThankYou
**Conditional components**: CoreQuestion (optional), BeforeAfter (recap slides), SectionOpener (1-4 parts)

---

## Component File Structure

Every component file MUST follow this exact structure (in order):

**1. Documentation Comment Block (at top)**
   - Describes the three-layer styling architecture
   - Explains Layer 1 (CSS structure), Layer 2 (Tailwind), Layer 3 (Vue theme)
   - Lists examples and DO NOT anti-patterns
   - ~30-35 lines, ends with `-->`

**2. `<script setup>` Block**
   - Vue imports (`computed`, `isDark`)
   - JSDoc comment (if complex props)
   - Theme definitions (DARK_THEME, LIGHT_THEME, or per-card styles)
   - Computed properties for theme switching
   - Props definition with validation
   - Helper functions (if any)

**3. `<template>` Block**
   - Markup only
   - Binding to theme object via `:class="t.property"`
   - Inline Tailwind utilities
   - No colors or styling logic (all in script)

**Example structure:**
```vue
<!--
  MyComponent Styling Architecture:
  ... [documentation] ...
-->

<script setup>
import { computed } from 'vue'
import { isDark } from './useTheme'

const DARK_THEME = { /* ... */ }
const LIGHT_THEME = { /* ... */ }
const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)

defineProps({
  /* ... */
})
</script>

<template>
  <!-- markup using :class="t.color" -->
</template>
```

**Why this order?**
- Logical reading: understand architecture → see behavior → see markup
- Vue SFC convention: script before template
- Quick context: comments at top make component intent immediately clear
- Consistency: all agents and developers know where to find what

---

## Design Conventions

### 0. Styling Architecture (Three-Layer Pattern)

**CRITICAL:** Every component in this library uses a strict three-layer styling architecture. This pattern is intentional and must never be deviated from.

#### The Three Layers

**Layer 1: Layout & Structure (style.css)**
- Contains all positioning, layout, and sizing rules
- Examples: `position: absolute`, `z-index`, `flex`, `width`, `height`, `padding`, `margin`, `border-radius`, `filter: blur()`
- Completely static—**never contains colors**
- Location: `slides/style.css`

**Layer 2: Typography & Effects (inline Tailwind utilities)**
- Applied directly in templates as class attributes
- Examples: `w-64`, `!text-5xl`, `!font-bold`, `shadow-lg`, `bg-clip-text`, `text-transparent`, `relative`
- Non-color utilities that enhance readability and maintainability
- Static—doesn't change per component instance
- Location: `:class=""` attributes in component templates

**Layer 3: Dynamic Colors (Vue theme object)**
- All color values defined in `DARK_THEME` and `LIGHT_THEME` objects in each component
- Applied via `computed` property that reacts to `isDark` ref
- Colors are theme-aware: dark/light switching
- Enables runtime toggling without CSS variables, media queries, or data attributes
- Location: `<script setup>` in each component

#### Why This Pattern Exists

**The Core Problem:** CSS color classes (like `from-cyan-900/20`) are static. Once in CSS, they can't react to Vue's `isDark` ref. CSS variables + `@apply` would be cleaner syntactically but would require additional infrastructure (data attributes, CSS custom property updates, etc.) that adds complexity.

**The Solution:** Keep layout static in CSS, keep colors dynamic in Vue. This gives:
- Clear separation of concerns (CSS = structure, Vue = behavior)
- Simple dark/light switching without extra tooling
- Explicit visibility in the template: `:class="t.bg"` makes it obvious the color is theme-dependent
- Backward compatibility: no changes needed to `style.css` to support new themes

**Why It's Worth The Split:**
- Designers can edit `style.css` for layout changes without touching Vue
- Engineers can add new themes by just extending DARK_THEME and LIGHT_THEME
- Dark/light toggle works instantly because `isDark` is a simple ref

#### What NOT to Do

❌ **Never move colors to `style.css`**
```css
/* BAD: Colors in CSS break isDark reactivity */
.sv-title-bg {
  @apply bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20;
}
```

❌ **Never use inline `style=""` attributes**
```vue
<!-- BAD: Inline styles are not reactive and bypass Tailwind -->
<div style="background: linear-gradient(...)">Content</div>
```

❌ **Never hardcode color classes in the template**
```vue
<!-- BAD: Color classes in template break the pattern -->
<div class="from-cyan-900/20 via-blue-900/10">Content</div>
<!-- GOOD: Use the theme object -->
<div :class="t.bg">Content</div>
```

❌ **Never use CSS variables or data-theme attributes**
```css
/* BAD: Adds complexity we don't need */
:root { --title-bg: ...; }
[data-theme="light"] { --title-bg: ...; }
```

#### How to Add New Components

Every new component **must** follow this three-layer pattern from day one:

1. Add structural classes to `style.css`
2. Add layout/effects Tailwind to the template
3. Add DARK_THEME and LIGHT_THEME objects to the component
4. Add the documentation comment at the top of `<template>` or `<script setup>`

See any existing component for an example. Look at the comment block at the top of each file for the specific pattern.

---

### 1. Section Label Pills

All "framing" components (CoreQuestion, TOC, WYCDT, BeforeAfter) have a hardcoded section label pill above the title.

```vue
<span class="px-4 py-1 bg-gradient-to-r rounded-full text-white text-xs font-semibold tracking-wide shadow-lg" :class="t.pill">
  🤔 The Core Question
</span>
```

**Rule:** Pill text is **hardcoded in the component template**. Do NOT pass as a prop. This ensures consistency across all decks.

**Current pills by component:**
- CoreQuestionSlide: `🤔 The Core Question`
- TocSlide: `📖 Table of Contents`
- WhatYouCanDoTodaySlide: `✅ What You Can Do Today`
- BeforeAfterSlide: `📊 The Value Recap`

### 2. Title Styling

All "framing" components use consistent title styling:

```vue
<div class="relative z-10 mb-4">
  <div class="text-2xl font-bold" :class="t.title">{{ title }}</div>
</div>
```

**Standard:** `text-2xl font-bold` with `t.title` (dark: `text-white` / light: `text-gray-900`)

**Exception:** SectionOpenerSlide uses gradient text (`bg-clip-text text-transparent`) with `text-5xl` because section titles are larger and need visual emphasis.

### 3. Dark/Light Theme Structure

Every component has this theme structure:

```typescript
const DARK_THEME = {
  ambientBg: 'from-X-900/20 via-Y-900/10 to-transparent',
  orb: 'from-X-500/10 to-transparent',
  pill: 'from-X-600/80 to-Y-600/80',
  title: 'text-white',
  // ... component-specific properties
}

const LIGHT_THEME = {
  ambientBg: 'from-X-100/30 via-Y-100/20 to-transparent',
  orb: 'from-X-200/20 to-transparent',
  pill: 'from-X-400/80 to-Y-400/80',
  title: 'text-gray-900',
  // ... component-specific properties
}

const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)
```

**Rule:** Colors are hardcoded in the component, never passed as props. All color values for both themes must be defined from day one (even if light mode is untested).

**Core colors by theme:**
| Property | Dark | Light |
|----------|------|-------|
| bg (ambient) | `-900/20` opacity | `-100/30` opacity |
| orb blur | `-500/10` opacity | `-200/20` opacity |
| pill gradient | `-600/80` to `-600/80` | `-400/80` to `-400/80` |
| text (title) | `text-white` | `text-gray-900` |

### 4. Using the Theme System

```vue
<!-- In template, always use t.property -->
<div :class="['absolute inset-0 bg-gradient-to-br', t.ambientBg]"></div>
<div :class="['text-2xl font-bold', t.title]">{{ title }}</div>
```

Never hardcode color class strings in the template. All colors flow from `t` computed property.

### 5. isDark Composable

```typescript
import { isDark } from './useTheme'

const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)
```

`isDark` is a `ref(true)` by default in `useTheme.ts`. To enable dynamic dark/light toggling, replace with:

```typescript
import { useDark } from '@slidev/client'
const isDark = useDark()
```

---

## Component Reference

### TitleSlide

**Purpose:** Opening slide with deck hero, title, subtitle, tagline, and metadata.

**Props:**
- `title` (string, required) — Main deck title
- `subtitle` (string, required) — Subtitle
- `tagline` (string, required) — Brief descriptor
- `meta` (string, optional) — Additional metadata line

**Example:**
```vue
<TitleSlide
  title="GitHub Copilot ACP"
  subtitle="The Agent Client Protocol"
  tagline="Universal AI integration for any editor, tool, or workflow"
  meta="CopilotTraining Tech Talk"
/>
```

**Deck Position:** Slide 1

**Notes:**
- Custom per deck — no component defaults
- Logo is hardcoded: `src='../sdp-logo.png'`

---

### CoreQuestionSlide

**Purpose:** Frame the central question this talk answers. Shows 6 supporting cards for context.

**Props:**
- `question` (string, required, ≤100 chars) — The core question in quotes
- `subtext` (string, optional, ≤160 chars total with highlight) — Leading phrase
- `highlight` (string, required) — Bold emphasized phrase in the question
- `cards` (array, required, exactly 6) — `{ icon, title, description }`

**Example:**
```vue
<CoreQuestionSlide
  question="How do you scale AI integration without rebuilding for every tool?"
  subtext="Today, the challenge is:"
  highlight="editor fragmentation vs. agent velocity"
  :cards="[
    { icon: '🔌', title: 'N×M Problem', description: 'Every editor × every agent = fragmentation' },
    // ... 5 more cards
  ]"
/>
```

**Deck Position:** After TitleSlide, before TocSlide (optional)

**Notes:**
- Section label pill: `🤔 The Core Question`
- Title styling: `text-2xl font-bold`
- Color scheme: Cyan→Blue→Indigo gradient
- Question card has special styling (lighter bg, bold text)

---

### TocSlide

**Purpose:** "Table of Contents" showing the 4 major sections of the deck.

**Props:**
- `sections` (array, required, exactly 4) — `{ icon, title, subtitle, blurb }`

**Example:**
```vue
<TocSlide
  :sections="[
    { icon: '🎯', title: 'Section 1', subtitle: 'The Problem', blurb: 'Why this matters' },
    // ... 3 more sections
  ]"
/>
```

**Deck Position:** After CoreQuestionSlide (or after TitleSlide if no CoreQuestion)

**Notes:**
- Section label pill: `📖 Table of Contents`
- Title styling: `text-2xl font-bold`
- Color scheme: Cyan→Blue→Indigo→Purple (4 cards, one per color)
- Each card is clickable (Slidev nav feature, not component prop)

---

### SectionOpenerSlide

**Purpose:** Introduce each major section (Part 1, 2, 3, 4) with a themed title, 3 supporting cards, and terminal context.

**Props:**
- `partNumber` (number, required, 1-4) — Controls color progression and progress dots
- `title` (string, required) — Section title
- `subtitle` (string, required) — Section subtitle
- `cards` (array, required, exactly 3) — `{ icon, title, blurb }`
- `terminal` (object, required) — `{ context, detail }` — Terminal frame content

**Example:**
```vue
<SectionOpenerSlide
  :partNumber="1"
  title="The Protocol Revolution"
  subtitle="Why standardization unlocks velocity"
  :cards="[
    { icon: '📐', title: 'N×M Problem', blurb: 'Every editor × every agent = fragmentation' },
    // ... 2 more cards
  ]"
  :terminal='{ context: "Before: Each editor builds custom plugin", detail: "After: One ACP server, any editor" }'
/>
```

**Deck Position:** One per major section (typically 1-4 slides total)

**Notes:**
- Section label pill: Varies (`⚡ The Problem`, `🔧 The Solution`, etc.)
- **NO hardcoded pill** — pass via component context or derive from section
- Title styling: `text-5xl font-bold` **gradient text** (exception to standard styling)
- Color scheme: Changes per part (Cyan→Blue→Indigo, then Blue→Indigo→Purple, etc.)
- Progress dots: Shows which part (e.g., "2 of 3")
- Terminal frame: Monospace context + detail line

---

### BeforeAfterSlide

**Purpose:** Recap deck-wide value and transformation. Shows before/after two-column comparison + 3 metrics.

**Props:**
- `header` (string, required) — Contextual header describing what's being compared (e.g., "From Manual Bottlenecks to Agentic Velocity")
- `leftLabel` (string, required) — "❌ Before X" label
- `leftItems` (array, required) — Simple string items (before state)
- `rightLabel` (string, required) — "✅ After/With X" label
- `rightItems` (array, required) — Simple string items (after state)
- `metrics` (array, required, exactly 3) — `{ value, detail }` — Outcome metrics

**Example:**
```vue
<BeforeAfterSlide
  header="🌐 From Tool Silos to Universal Protocol"
  leftLabel="❌ Before ACP"
  :leftItems="[
    'Every editor needs custom plugin',
    'Brittle update cycles',
    'Editor lock-in',
    'No CI/CD integration'
  ]"
  rightLabel="✅ With ACP"
  :rightItems="[
    'One protocol, any editor',
    'Stable integrations',
    'Complete editor freedom',
    'Universal integration'
  ]"
  :metrics="[
    { value: 'N×M → N+M', detail: 'Integration complexity' },
    { value: '2-3 weeks → 2-3 days', detail: 'Time to new editor' },
    { value: 'Any Editor', detail: 'Full agent parity' }
  ]"
/>
```

**Deck Position:** Right before WhatYouCanDoTodaySlide

**Notes:**
- Section label pill: `📊 The Value Recap` (hardcoded, component frame)
- Header: Rendered below pill as `text-2xl font-bold` (contextual description of the before/after topic)
- Color scheme: Blue ambient, red/green two-column, cyan/blue/indigo metrics
- Items are simple strings, not nested objects
- Metrics is **required**, exactly 3 items

---

### WhatYouCanDoTodaySlide

**Purpose:** Actionable next steps organized by timeframe (Today/This Week/This Month).

**Props:**
- `today` (array, required, ≤5 items) — Immediate actions
- `thisWeek` (array, required, ≤5 items) — Short-term actions
- `thisMonth` (array, required, ≤5 items) — Medium-term actions
- `footer` (string, required) — Key takeaway sentence

**Example:**
```vue
<WhatYouCanDoTodaySlide
  :today="['Check CLI version', 'Start ACP daemon', 'Verify stdio connection']"
  :thisWeek="['Install SDK', 'Run example', 'Implement policy']"
  :thisMonth="['Clone orchestrator', 'Connect to polyrepos', 'Scale to multi-agent']"
  footer="ACP gives you a vendor-neutral protocol for multi-agent systems."
/>
```

**Deck Position:** After BeforeAfterSlide, before ReferencesSlide

**Notes:**
- Section label pill: `✅ What You Can Do Today` (hardcoded)
- Color scheme: Pink/Rose ambient, Green/Blue/Purple columns, Cyan footer
- Column timeframes are hardcoded (Today / This Week / This Month)
- Each column shows icon and colored list
- Footer card is always Cyan

---

### ReferencesSlide

**Purpose:** Display curated references organized by category (docs, SDKs, tutorials, community).

**Props:**
- `groups` (array, required) — `{ title, color, items }` where items are `{ href, label, description }`

**Example:**
```vue
<ReferencesSlide
  :groups='[
    { title: "🤖 Official Docs", color: "cyan", items: [
        { href: "https://agentclientprotocol.com", label: "ACP Spec", description: "Official spec and architecture" },
        // ...
    ] },
    { title: "🛠️ SDKs", color: "purple", items: [
        // ...
    ] }
  ]'
/>
```

**Deck Position:** Before ThankYouSlide

**Notes:**
- Section label pill: (auto-generated, not hardcoded)
- Color is per-group (cyan, purple, green, etc.)
- Each group has a title, icon, and category
- Links are clickable during presentation

---

### ThankYouSlide

**Purpose:** Closing slide with deck summary and takeaways.

**Props:**
- `title` (string, required) — Slide title (typically "Thank You")
- `subtitle` (string, required) — Deck subtitle
- `cards` (array, required) — `{ icon, value, detail, subdetail }` — Key metrics
- `prompt` (string, required) — Call-to-action or discussion prompt

**Example:**
```vue
<ThankYouSlide
  title="Thank You"
  subtitle="GitHub Copilot ACP: Universal AI Integration"
  :cards="[
    { icon: '🔌', value: 'N+M', detail: 'Integrations', subdetail: 'Instead of N×M' },
    { icon: '📚', value: '4', detail: 'Protocol Layers', subdetail: 'Context, Completion, Tools, LLM' },
    { icon: '🛠️', value: 'Any', detail: 'Editor or Tool', subdetail: 'Build once, run everywhere' }
  ]"
  prompt="Questions? Let's discuss agent integration."
/>
```

**Deck Position:** Final slide

**Notes:**
- Custom per deck — no component defaults
- Logo is hardcoded: `src='../sdp-logo.png'` with `logoClass='w-64'` prop support
- Color scheme: Blue ambient
- Cards show key value propositions
- Prompt is the closing call-to-action

---

## Adding a New Component

When creating a new component, follow this checklist:

### 1. Theme Structure
- [ ] Create `DARK_THEME` and `LIGHT_THEME` objects with matching properties
- [ ] Define all colors upfront (even for untested light mode)
- [ ] Use `isDark` composable to toggle: `const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)`

### 2. Props & Validation
- [ ] Document each prop with type and validation
- [ ] Use `console.error()` for validation failures (required props, wrong array length)
- [ ] Use `console.warn()` for overflow risks (text length limits)

### 3. Section Label Pill (if framing component)
- [ ] Hardcode the section label and icon
- [ ] Use `t.pill` class
- [ ] Include divider line to the right
- [ ] Never make pill text a prop

### 4. Title Styling
- [ ] Use `text-2xl font-bold` (or `text-5xl` for gradient if SectionOpener-like)
- [ ] Bind to `t.title` computed property
- [ ] Include `mb-4` margin below

### 5. Ambient Background
- [ ] Include gradient backdrop: `<div class="absolute inset-0 bg-gradient-to-br" :class="t.ambientBg"></div>`
- [ ] Include blur orb: `<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl" :class="t.orb"></div>`
- [ ] Wrap content in `relative z-10` divs

### 6. Testing
- [ ] Build: `npm run build -- tech-talks/copilot-acp.md`
- [ ] Preview: `npm run dev tech-talks/copilot-acp.md`
- [ ] Verify dark and light modes (if enabled)

---

## Common Patterns

### Removing Optional Section Label
If a component should NOT have a pill, use `v-if`:

```vue
<div v-if="sectionLabel" class="relative z-10 flex items-center gap-3 mb-4">
  <span ...>{{ sectionLabel }}</span>
</div>
```

### Grid Layouts
Use TailwindCSS grid helpers:

```vue
<div class="grid grid-cols-2 gap-4">
  <!-- 2-column layout -->
</div>

<div class="grid grid-cols-3 gap-3">
  <!-- 3-column layout -->
</div>
```

### Color Consistency Across Groups
When displaying multiple items with different colors:

```typescript
const DARK_STYLES = [
  { bg: 'from-cyan-900/30...', border: 'border-cyan-500/30', title: 'text-cyan-300' },
  { bg: 'from-blue-900/30...', border: 'border-blue-500/30', title: 'text-blue-300' },
  { bg: 'from-indigo-900/30...', border: 'border-indigo-500/30', title: 'text-indigo-300' },
]

<div v-for="(item, idx) in items" :key="idx" :class="[DARK_STYLES[idx].bg, DARK_STYLES[idx].border]">
```

---

## Testing & Validation

### Quick Visual Check
```bash
cd slides
npm run dev tech-talks/copilot-acp.md
# Navigate to the slide and verify appearance
```

### Build Validation
```bash
npm run build -- tech-talks/copilot-acp.md
# Check for build errors or warnings
```

### Screenshot Capture
```bash
node scripts/capture-before-after-slides.js copilot-acp
# Produces PNG files in captures/ directory
```

---

## Design Philosophy

### Why Hardcoded, Not Props?

- **Consistency**: Prevents accidental color/style drift across decks
- **Simplicity**: Deck authors focus on content, not styling
- **Maintainability**: Change appearance in one place for all decks
- **Dark/light parity**: Colors are defined for both themes from day one

### Why Dark Mode First?

Dark mode is the canonical theme. Light mode colors are included but may be untested visually. When you add a component, define light-mode colors using the reference mapping in this README.

### Why Blue Ambient for Most Components?

Blue is the canonical "frame" color (section openers are exceptions with color-per-part). It's calm, professional, and doesn't compete with content.

---

## References

- [Slidev Documentation](https://sli.dev/)
- [TailwindCSS Color Reference](https://tailwindcss.com/docs/customizing-colors)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [useTheme.ts](./useTheme.ts) — Dark/light mode composable
