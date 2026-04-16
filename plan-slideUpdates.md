# Slide Component Extraction — Lessons Learned & Working Pattern

## What Didn't Work

The original plan (this file) attempted a CSS class extraction approach: define shared `sv-*` classes in `style.css`, convert all decks to use them, enforce a canonical markup contract. It never got traction because:

- The contract was too abstract to verify — no way to confirm 21 decks were actually consistent
- CSS classes don't enforce structure — decks could still diverge silently
- Bulk refactors across 21 decks at once are fragile and hard to validate

## What Actually Worked

**Vue components in `slides/tech-talks/components/`.**

Several components extracted and shipped: check /slides/tech-talks/components

All 17 active tech-talk decks use existing components.

## The Pattern That Works

For each new component:

1. **Pick exactly one slide type** to componentize
2. **Identify which decks contain it** — not all candidates appear in every deck; check before assuming coverage
3. **Take screenshots of that slide in every deck that has it** — save to `/captures`
4. **The user will identify the exemplar deck** (the best reference implementation to design the component from) and the **pilot deck** (the first deck to wire the component into for verification)
5. **Build the component** in `slides/tech-talks/components/`
6. **Wire it into the pilot deck** — run `cd slides && npm run build -- tech-talks/<deck>.md` to confirm it builds and renders correctly
6.5 **Wait for user confirmation and adjustments** - prompt the user to wait/continue
7. **Roll it out to all decks that have the slide** — systematic find/replace, one deck at a time or in batch
8. **Take screenshots of that slide in every deck** — save to `/captures`
9. **Run `node slides/scripts/sync-index-dates.mjs`** from the `slides/` directory to update the index
10. **Update the template** (`slides/tech-talks/template.md`) with the correct usage pattern
11. **Update the generator** (`.github/agents/slide-generator.agent.md`) to use the component for new decks

Never start the rollout until step 6 is verified. Never skip steps 8–11.

## Components Are Canonical — Decks Conform

When rolling out a component, decks that deviate from the component's expected structure are **updated to match the component**, not the reverse. The component defines the contract; individual deck variations are not accommodated with `v-if` logic, optional wrapper divs, or special-case props.

Rationale: adding per-deck escape hatches defeats the purpose of componentization — it makes the component harder to maintain, harder to theme, and harder to reason about. If a deck has genuinely distinct content needs, that's a different slide type, not a prop flag.

**In practice:** during rollout, if a deck's WYCDT (or Section Opener, etc.) has a slightly different column count, heading text, or footer structure, fix the deck to match the component — don't add a `showFooter` prop or `columnCount` override just to preserve the deviation.

## Component Authoring Rules

- Import path: `./components/ComponentName.vue` (relative to `slides/tech-talks/`)
- Apostrophes in single-quoted `:prop='[...]'` values must be escaped as `&#39;`
- Always include a blank line before `---` after a self-closing component tag (`/>`)
- Logo is hardcoded in `TitleSlide` and `ThankYouSlide` — do not add `logoSrc`/`logoAlt` props

## Dark/Light Mode Design

All components are built dark/light ready from day one using `useTheme.ts`.

**`slides/tech-talks/components/useTheme.ts`** — single shared flag:
```ts
import { ref } from 'vue'
// To enable dynamic switching: replace with useDark() from '@slidev/client'
export const isDark = ref(true)
```

**Per-component pattern** (required for every component, including new candidates):
```ts
import { computed } from 'vue'
import { isDark } from './useTheme'

const DARK_THEME = { ambientBg: 'bg-gradient-to-br from-X-900/20 ...', pill: '...', ... }
const LIGHT_THEME = { ambientBg: 'bg-gradient-to-br from-X-100/80 ...', pill: '...', ... }
const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)

const DARK_CARD_STYLES = [{ bg: '...', border: '...', title: '...' }, ...]
const LIGHT_CARD_STYLES = [{ bg: '...', border: '...', title: '...' }, ...]
const cardStyles = computed(() => isDark.value ? DARK_CARD_STYLES : LIGHT_CARD_STYLES)
```

Template binds only to `t.xxx` and `cardStyles[i].xxx` — **no raw color strings in templates**.

**Light mode color mapping reference:**

| Dark | Light |
|---|---|
| `*-900/40` bg | `*-100/80` bg |
| `border-*-500/50` | `border-*-300` |
| `text-*-300` title | `text-*-700` title |
| `text-*-400/70` blurb | `text-*-700/80` blurb |
| `bg-gray-900/50 border-gray-700/50` items | `bg-gray-100/80 border-gray-200` |
| `text-gray-400` desc | `text-gray-600` |

> ⚠️ Light mode values are written but **untested visually** — review needed when light mode is activated.

## Remaining Candidates

Slides that could become components. Deck counts are approximate — **verify which decks actually contain the slide before starting work**, as some types don't appear in every deck:

| Slide Type | Status | Notes |
|---|---|---|
| Title | ✅ Done | `TitleSlide.vue` |
| Thank You | ✅ Done | `ThankYouSlide.vue` |
| References | ✅ Done | `ReferencesSlide.vue` |
| Core Question | ✅ Done | `CoreQuestionSlide.vue` |
| Table of Contents | ✅ Done | `TocSlide.vue` |
| What You Can Do Today | ✅ Done | `WhatYouCanDoTodaySlide.vue` |
| Section Opener | ✅ Done | `SectionOpenerSlide.vue` — all 17 decks, 68 screenshots captured |
| Before / After | 🔲 Candidate | **3-4 decks** (copilot-acp, copilot-code-review, agentic-sdlc). Red ❌ / Green ✅ two-column comparison. Lower impact but simple to extract. |

**Priority order for next components:** WYCDT first (14 decks, simplest structure), then Section Opener (12+ decks, ~4 per deck so largest total rollout), then Before/After if warranted.

Follow the same pattern for any future component: check which decks have it → user picks exemplar + pilot → build → verify → roll out → screenshot → sync index → update template + generator.
