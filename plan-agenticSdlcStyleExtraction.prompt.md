# Slide Component Extraction — Lessons Learned & Working Pattern

## What Didn't Work

The original plan (this file) attempted a CSS class extraction approach: define shared `sv-*` classes in `style.css`, convert all decks to use them, enforce a canonical markup contract. It never got traction because:

- The contract was too abstract to verify — no way to confirm 21 decks were actually consistent
- CSS classes don't enforce structure — decks could still diverge silently
- Bulk refactors across 21 decks at once are fragile and hard to validate

## What Actually Worked

**Vue components in `slides/tech-talks/components/`.**

Three components extracted and shipped:

| Component | File | Props |
|---|---|---|
| `TitleSlide` | `components/TitleSlide.vue` | `title`, `subtitle`, `tagline`, `meta`, `logoClass` |
| `ThankYouSlide` | `components/ThankYouSlide.vue` | `title`, `subtitle`, `cards[]`, `prompt`, `logoClass` |
| `ReferencesSlide` | `components/ReferencesSlide.vue` | `:groups` array |

All 21 active tech-talk decks use all three components.

## The Pattern That Works

For each new component:

1. **Pick exactly one slide type** that appears in every deck (Title, Thank You, References)
2. **Build the component** in `slides/tech-talks/components/`
3. **Wire it into one deck first** — confirm it builds and renders correctly
4. **Roll it out to all decks** — systematic find/replace, one deck at a time or in batch
5. **Update the template** (`slides/tech-talks/template.md`) with the correct usage pattern
6. **Update the generator** (`.github/agents/slide-generator.agent.md`) to require the component for new decks

Never start the rollout until step 3 is verified. Never skip step 5 or 6.

## Component Authoring Rules

- Import path: `./components/ComponentName.vue` (relative to `slides/tech-talks/`)
- Apostrophes in single-quoted `:prop='[...]'` values must be escaped as `&#39;`
- Always include a blank line before `---` after a self-closing component tag (`/>`)
- Logo is hardcoded in `TitleSlide` and `ThankYouSlide` — do not add `logoSrc`/`logoAlt` props

## Remaining Candidates

Slides that appear in every deck and could become components:

| Slide Type | Status | Notes |
|---|---|---|
| Title | ✅ Done | `TitleSlide.vue` |
| Thank You | ✅ Done | `ThankYouSlide.vue` |
| References | ✅ Done | `ReferencesSlide.vue` |
| Core Question | 🔲 Candidate | High variance in content; worth attempting |
| Section Opener | 🔲 Candidate | "Part N" pattern is already very consistent across decks |
| Table of Contents | 🔲 Candidate | Lower priority — structure varies more by deck |

Follow the same pattern for any future component: one deck pilot → verify → roll out → update template + generator.
