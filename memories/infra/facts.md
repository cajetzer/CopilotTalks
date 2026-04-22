# infra / facts

Confirmed, locked facts about Slidev infrastructure, build rules, and structural gotchas.

---

## Do NOT use runSubagent for slide generation — use direct agent invocation (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

The Tech Talk Slide Generator produces a full slide deck (18–24 slides + build commands). This consistently exceeds the subagent response length cap, causing the task to fail with "response hit the length limit."

**Never use `runSubagent` for slide generation.** Instead, tell the user to invoke the agent directly in a new Copilot Chat session:

```
@Tech Talk Slide Generator tech-talks/{topic}
```

Same applies to any other agent that produces large file outputs (Tech Talk Generator, Module Creator).

---

## Multiline `:prop` array bindings break Vue template parser in Slidev (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

Writing a `:cards` (or any array prop) as a multiline attribute value causes `Error parsing JavaScript expression: Unexpected token, expected ","` in the Vite/Vue compiler. Slidev processes `.md` files as Vue SFCs — newlines inside a dynamic attribute value are invalid.

**Broken:**
```
:cards="[
  { icon: '⏱️', value: '...' },
]"
```

**Fixed:** collapse to a single line:
```
:cards="[{ icon: '⏱️', value: '...' }, { icon: '🎯', value: '...' }]"
```

Also: `&#39;` HTML entities inside `:prop` bindings cause attribute-name parse errors. Use escaped single quotes (`\'`) instead, or rewrite to avoid apostrophes.

**Applies to:** `ThankYouSlide :cards`, `CoreQuestionSlide :cards`, any component that takes an array prop. The slide generator must always write array props on a single line.

---

## Slide generator MUST emit blank line between --- and <!-- SLIDE: --> (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

Every `---` slide separator **must be followed by a blank line** before the `<!-- SLIDE: Name -->` comment. Writing `---\n<!-- SLIDE:` (no blank line) causes slides to render blank — Slidev's renderer requires `---\n\n<!-- SLIDE:`.

**Broken (causes blank slides):**
```
/>

---
<!-- SLIDE: Core Question -->
```

**Correct:**
```
/>

---

<!-- SLIDE: Core Question -->
```

**Bulk fix in PowerShell:**
```powershell
$content = [System.IO.File]::ReadAllText($path)
$fixed = $content -replace "---`n(<!-- SLIDE:)", "---`n`n`$1"
[System.IO.File]::WriteAllText($path, $fixed, [System.Text.UTF8Encoding]::new($false))
```

This affected both `copilot-cli.md` and `copilot-chat-internals.md` before being fixed. When generating any new deck, always write `---\n\n<!-- SLIDE:` — never `---\n<!-- SLIDE:`.

---

## Apostrophes and contractions in single-quoted props always break builds (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

Any `'` character inside a single-quoted HTML attribute (`:prop='[...]'`) terminates the attribute — HTML parsing happens before Vue template compilation. There is no valid escape: `\'` passes the `\` as literal but the `'` still ends the attribute; `&#39;` works for display text but causes attribute-name parse errors inside JS expressions (`:cards='[{"k": "can&#39;t"}]'` fails).

**Rule: rewrite to avoid apostrophes entirely.** Contractions → full words (`don't` → `do not`, `can't` → `cannot`, `won't` → `will not`). For possessives, rephrase (`the agent's context` → `the agent context`).

**Known failure patterns:**
- `description: "Concurrent writes don\'t corrupt"` — `\'` does NOT escape the single quote in HTML
- `description: "can&#39;t access"` — HTML entity inside a JS expression causes attribute-name parse error
- `blurb: "User's workspace"` — bare `'` terminates the single-quoted outer attribute

**Safe pattern:** use double-quoted outer attribute only when `:cards` must contain apostrophes — but then inner strings must use single quotes, making the apostrophe problem worse. Avoid both by rewriting the text.

---

## Commas in `tag` prop values break UnoCSS CSS generation (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

`FrameworkMappingRowsSlide` (and any component that uses a `tag` prop for UnoCSS attribute selectors) must **not have commas** in `tag` values. UnoCSS maps the value directly into a CSS attribute selector; a comma inside produces `[rows~="\$2\,250\/mo\\"]` which PostCSS cannot parse — it raises "Unclosed bracket" and crashes the Vite dev server.

**Broken (crash at dev-server startup):**
```
{ label: "Revert rate", tag: "$2,250/mo" }
```

**Fixed:**
```
{ label: "Revert rate", tag: "$2.25K/mo" }
```

Rule: use `.` separators, abbreviate (K/M), or drop the number entirely. Never embed a bare comma in a `tag` prop value. This applies to any component whose props are mapped to UnoCSS attribute selectors.

---

## SectionOpenerSlide prop limits: title ≤40 chars, subtitle ≤120 chars (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

`SectionOpenerSlide` uses `text-5xl font-bold` for the title and `text-2xl font-normal opacity-70` for the subtitle. At slide width:
- **title** wraps at ~40 chars — anything longer causes visible text overflow
- **subtitle** overflows the slide height at >120 chars (crowding the card row)

Both limits are enforced in two places:
1. **`SectionOpenerSlide.vue`** — `console.warn` in `<script setup>` (fires in browser dev tools only)
2. **`scripts/build-all.ps1` `Invoke-PropLint`** — non-blocking `[WARN] line N:` at build time

The recipe `sectionModes[].note` values are typically 150–165 chars — always condense to ≤120 when using as subtitle. The limits are in addition to the existing `card.title ≤30` and `card.blurb ≤75` limits.

---

## Prop linter calibrated limits in build-all.ps1 (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

The `Invoke-PropLint` function in `scripts/build-all.ps1` enforces these limits, calibrated against real deck content to avoid false positives:

| Component | Prop | Max | Notes |
|---|---|---|---|
| `FrameworkMappingRowsSlide` | `label` | 13 | `w-28` column at `text-sm font-bold` wraps at ~13 chars |
| `FrameworkMappingRowsSlide` | `description` | 70 | Center column overflow threshold |
| `SectionOpenerSlide` | `card.blurb` | 75 | Template says 60, raised to 75 after real-deck calibration |
| `SectionOpenerSlide` | `card.title` | 30 | |
| `CoreQuestionSlide` | `card.title` | 40 | |
| `CoreQuestionSlide` | `card.description` | 90 | |
| `TocSlide` | `section.title` | 49 | Template says 40, raised to 49 after real-deck calibration |
| `TocSlide` | `section.blurb` | 100 | |
| All 13 Tier-1 body components | `title` | 80 | |

Warnings are **non-blocking** — build reports `[OK]`, violations appear as `[WARN] line N:` in yellow. Summary count appears at end of build output.

---

## FrameworkMappingRowsSlide layout limits: label ≤13 chars, description ≤70 chars (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

`FrameworkMappingRowsSlide` uses a `w-28` (7rem) fixed-width label column at `text-sm font-bold`. At this size, labels wrap at ~13 characters. Labels longer than 13 chars **will visually wrap to two lines**, breaking the row layout.

- `label` max: **13 chars** (enforced by `Invoke-PropLint` in `build-all.ps1`)
- `description` max: **70 chars** (enforced by same linter)
- Both limits emit `[WARN] line N:` in build output with slide title and char count
- No ⛔ overlay in the component — slide renders with the wrapping label visible; build script is the gate

**Examples of labels at the limit:**
- `"Code Review"` (11 chars) ✔
- `"Pull Requests"` (13 chars) ✔ borderline
- `"Labels & Assign"` (15 chars) ✘ wraps

**The linter is in `scripts/build-all.ps1` `Invoke-PropLint` function.** See `infra/discoveries.md` → "Static prop linting" for the full pattern.

---



`schema_version: 1` | `date: 2026-04-21`

`slides/tech-talks/component-test.md` exists solely as a **visual testing harness** for the 13 Tier-1 body components. It is **not a tech-talk**. Never include it when listing tech-talks, counting tech-talks, generating content for tech-talks, or running conformance sweeps. Exclude it from any "all tech-talks" enumeration.

---

## `throw` inside Vue `<script setup>` is useless — Vite build passes, slide goes blank (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

Vue SSR's error boundary silently catches any exception thrown inside `<script setup>` (including `computed`, reactive initializers, and setup-time validation). The Vite build reports exit code 0 with no warnings. The slide renders blank. There is no console output visible to the deck author.

**Consequence:** any `throw new Error(...)` or `validatePartNumber()` call inside a component's script is dead code from an authoring-feedback perspective. It will never surface a visible error.

**Replacement:** use `validationError = computed(...)` + `<div v-if="validationError">` overlay in the template. See `infra/discoveries.md` → "Visual prop error guard" for the canonical pattern.

**All 20 components updated** (13 body + 7 structure) as of 2026-04-21. `validatePartNumber()` in `useSectionTheme.ts` still exists but is no longer called by any component.

---

## Structure component authoring edges: TitleSlide, SectionOpenerSlide.terminal (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

**TitleSlide file order is reversed** — `<template>` block appears before `<script setup>` (unusual; all other components follow script-first order). It also has **two sibling root elements** (`sv-title-slide` + `sv-title-meta`) — a Vue 3 fragment. When wrapping in an error guard, you cannot use `absolute inset-0` (no single root wrapper); instead give the error div `class="h-full bg-red-950 ..."` and wrap both sibling divs in `<template v-else>`.

**SectionOpenerSlide.terminal is required and must be an object** — passing it as `undefined` or omitting it causes a Vue TypeError (`Cannot read properties of undefined (reading 'context')`). The slide goes silently blank. Shape: `{ context: string, detail: string }`. This is the most common authoring mistake in component-test.md — check every SectionOpenerSlide invocation for a valid `:terminal` binding.

**ThankYouSlide correct props** — `title`, `subtitle`, `cards` (array of 2–4 items with `{ icon, value, detail, subdetail }`), and `prompt`. Props `message` and `links` do NOT exist; using them causes a blank slide with no error. The `cards` array must be 2–4 items — the visual guard enforces this now.

---

## Tier-1 body component catalog: 13 components, inline HTML forbidden (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

As of 2026-04-21, there are **13 Tier-1 body-content components** (up from 8). All 13 are in `slides/tech-talks/components/`. Using inline HTML for body slides is **forbidden** — `slide-generator.agent.md` and `slides/tech-talks/template.md` both enforce this.

**Original 8:** `BeforeAfterMetricsSlide`, `BeforeAfterPanelsSlide`, `ProblemSolutionOutcomeSlide`, `TwoColPairedConceptsSlide`, `ThreeColumnCardSlide`, `FourCardGridSlide`, `CodeWithFeaturesSlide`, `HeroStatSlide`

**5 new additions:**
- `WorkflowShowdownStepsSlide` — before/after workflow step comparison
- `MaturityJourneyRoadmapSlide` — horizontal maturity arc with level callouts
- `AITerminalTranscriptSlide` — AI terminal transcript display
- `MaturityLevelDrilldownSlide` — single maturity-level drilldown with bullets
- `FrameworkMappingRowsSlide` — taxonomy/classification row grid

**All 13 require** `partNumber` (1–4) and `progressDots: { current, total, activeColor }`. Full prop schemas in `slides/tech-talks/template.md`. Visual reference deck: `slides/tech-talks/component-test.md`.

---

## ALL Tier-1 body components require `progressDots` (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

All 8 Tier-1 body-content components require `progressDots: { current: N, total: M, activeColor: string }`. There are no exceptions — the previous split (5 required, 3 not) is obsolete as of this date.

**All 8 require progressDots:**
- `TwoColPairedConceptsSlide`
- `ThreeColumnCardSlide`
- `CodeWithFeaturesSlide`
- `BeforeAfterPanelsSlide`
- `HeroStatSlide`
- `FourCardGridSlide`
- `BeforeAfterMetricsSlide`
- `ProblemSolutionOutcomeSlide`

**`activeColor` by partNumber** (Tailwind class string passed verbatim):
| Part | activeColor |
|------|-------------|
| 1 | `bg-cyan-400 shadow-lg shadow-cyan-500/50` |
| 2 | `bg-blue-400 shadow-lg shadow-blue-500/50` |
| 3 | `bg-indigo-400 shadow-lg shadow-indigo-500/50` |
| 4 | `bg-purple-400 shadow-lg shadow-purple-500/50` |

**`current` / `total`:** derived from the slide's position within its section (the raw HTML showed "N of M" in the header-row dot cluster).

**Additional:** `HeroStatSlide.insight` is **required** (not optional), unlike the optional `insight` on all other components.

**Retroactive impact:** Vue does not fail builds for missing required props. Always supply `progressDots` on every body component invocation.

---

## Slidev component registration when running decks from subdirectories (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

When running `slidev tech-talks/agentic-journey.md`, Slidev treats `tech-talks/` as the project root, not `slides/`. Consequences:

- `<script setup>` blocks in the markdown file **only apply to slide 1**
- Slides 2+ rely on global component registration via `setup/main.ts`
- Slidev looks for `tech-talks/setup/main.ts`, NOT `slides/setup/main.ts`
- Components must be in `tech-talks/components/`, NOT `slides/components/`

**Fix pattern (applied per subdirectory-served deck):**
1. Create `tech-talks/[talk]/components/` and copy shared components in
2. Create `tech-talks/[talk]/setup/main.ts` that registers components globally
3. Update deck imports to `./components/` not `../components/`
4. Fix asset paths in the copied components (e.g. logo imports)

Without this pattern, components only render on slide 1; slides 2+ fail with `[Vue warn]: Failed to resolve component: TitleSlide`. Confirmed working in agentic-journey.md.

---

## Tailwind JIT requires literal class strings: dynamic `grid-cols-${N}` is silently dropped (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Any component that needs a variable column count must use a lookup constant containing literal class names. Tailwind's JIT scanner reads source as text and cannot resolve runtime concatenation.

**Wrong:** `<div :class="'grid-cols-' + count">` — class is generated at runtime, JIT never sees it, no CSS emitted.

**Right:**
```ts
const GRID_COLS: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
}
const gridClass = computed(() => GRID_COLS[props.count] ?? 'grid-cols-2')
```

Applied in `BeforeAfterMetricsSlide.vue`, `ProblemSolutionOutcomeSlide.vue`, `CodeWithFeaturesSlide.vue` (2026-04-17). Same rule applies to `col-span-N`, `gap-N`, any other Tailwind utility with a numeric variant.

---

## `multi_replace_string_in_file` across adjacent slides in a deck silently absorbs neighboring content (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

When converting multiple consecutive raw-HTML slides in a Slidev `.md` deck to component invocations in a single `multi_replace_string_in_file` call, mismatched closing `</div>` counts in the oldString patterns can absorb the **next** slide's wrapper divs silently. Symptom: build fails downstream with Vue parser errors like `Illegal '/' in tags` (e.g. `/class="...">`), and an unrelated slide is found half-deleted.

**Safe approaches:**
1. Convert one slide per call, verify the surrounding `<!-- SLIDE: ... -->` markers are intact afterward, then move on
2. OR rewrite the **entire affected region** in one replacement that includes ALL the original content end-to-end (so any over-match is visible)

**Real failure 2026-04-17:** Three consecutive `Instructions — *` slides in `copilot-primitives.md` were converted in one multi-replace; the `Skills — Scripts` slide that followed was clobbered. Required a follow-up rewrite of the whole region as TwoColPairedConceptsSlide. Build broke for one round before the fix.

---

## Content slide colors must match their section's partNumber color scheme (2026-04-17)

`schema_version: 1` | `date: 2026-04-17`

Every content slide between two SectionOpenerSlide boundaries must use colors matching that section's `partNumber`. The mapping is fixed and non-negotiable:

| Part | Primary | Secondary | Background | Orb | Pill | Dot | Accent Line |
|------|---------|-----------|------------|-----|------|-----|-------------|
| 1 | cyan | blue | `from-cyan-900/20 via-blue-900/10` | `from-cyan-500/10` | `from-cyan-600/80 to-blue-600/80` | `bg-cyan-400` | `from-cyan-400/60` |
| 2 | blue | indigo | `from-blue-900/20 via-indigo-900/10` | `from-blue-500/10` | `from-blue-600/80 to-indigo-600/80` | `bg-blue-400` | `from-blue-400/60` |
| 3 | indigo | purple | `from-indigo-900/20 via-purple-900/10` | `from-indigo-500/10` | `from-indigo-600/80 to-purple-600/80` | `bg-indigo-400` | `from-indigo-400/60` |
| 4 | purple | pink | `from-purple-900/20 via-pink-900/10` | `from-purple-500/10` | `from-purple-600/80 to-pink-600/80` | `bg-purple-400` | `from-purple-400/60` |

**Card content colors** (borders, text accents within cards) may vary for semantic purposes (red for problems, green for solutions) — only the 5 structural elements (bg, orb, pill, dot, accent line) must conform.

**Enforcement:** Run the section color audit script to detect mismatches. All 17 decks verified clean as of 2026-04-17.

---

## Build script wrapper pattern: delegates from slides/ root to scripts/ directory (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

The main build orchestrator (`scripts/build-all.ps1`) must run from the `scripts/` directory to ensure correct path resolution. A wrapper script at `slides/build.ps1` enables calling from any context:

```powershell
# At scripts/build-all.ps1:
$SlidesDir = Split-Path -Parent $PSScriptRoot  # resolves to slides/

# At slides/build.ps1 wrapper:
$ScriptsDir = Join-Path $PSScriptRoot scripts
Push-Location $ScriptsDir
& .\.\build-all.ps1 @args
Pop-Location
```

**Usage from any directory:**
```powershell
# From anywhere, call the wrapper
& "C:\...\slides\build.ps1" Tech-talks

# Or from slides/ directory
.\build.ps1 Tech-talks
```

**Parameters:** All parameters are forwarded unchanged via `@args`. Supports `Tech-talks`, `workshop`, `exec-talks`, `-Verbose` flag.

**Why this matters:** Agents/automation tools can reliably invoke the build from different working directories without path context issues. The wrapper handles directory navigation automatically.

**Documentation:** `slides/scripts/README.md` explains the pattern and provides complete usage reference.

---

## Build script: exit code check replaces Test-Path for success detection (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

The build script previously used `Test-Path "$OutputDir/$Category/$BaseName"` to detect success. This is **wrong** — if a prior build succeeded, the folder exists even when the current build fails, causing `[OK]` to be shown for broken decks.

**Fix:** Capture `$LASTEXITCODE` immediately after the `npx slidev build` call and use that as the success indicator. Suppress output with `2>&1` assignment (not `| Out-Null`) to keep the exit code intact.

```powershell
$buildOutput = npx slidev build ... 2>&1
$buildExitCode = $LASTEXITCODE   # capture before anything else
if ($buildExitCode -eq 0) { ... }
```

**Note:** `| Out-Null` discards exit code; `2>&1` capture preserves it.

---

## Build script: parallel mode with live progress (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

The build script supports `-Parallel` flag (PowerShell 7+) using `Start-ThreadJob -ThrottleLimit 4`. Pattern for live progress:

1. Collect all decks into a flat list first (avoids per-category loop structure)
2. Start all jobs via `Start-ThreadJob -ThrottleLimit 4` (auto-queues, max 4 concurrent)
3. Drain with `Wait-Job -Any` loop — prints each result as it finishes
4. `$null = $remaining.Remove($done)` — suppress the bool return from `List.Remove()`

**Gotcha:** `$using:hashtable` doesn't work reliably across thread runspaces. Extract scalar values before the job and pass those instead:
```powershell
$category = $_.Category; $baseName = $_.BaseName
Start-ThreadJob { $cat = $using:category; $base = $using:baseName; ... }
```

**Gotcha:** `ForEach-Object -Parallel` blocks until all complete — no live progress. Use `Start-ThreadJob` + `Wait-Job -Any` drain loop instead.

---

## Slidev generates index.html in category dirs — exclude from git (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

Slidev regenerates `slides/workshop/index.html`, `slides/tech-talks/index.html`, and `slides/exec-talks/index.html` on every build. These are not used (the repo uses `slides/index-custom.html` instead) and produce a build warning:

```
[Slidev] Ignored provided index.html with doctype declaration.
This file may be generated by Slidev, please remove it from your project.
```

**Fix:** Add all three paths to `.gitignore`. Remove existing tracked copies with `git rm --cached`. The files will continue to be generated locally but will not be committed.

---

## PowerShell emoji parser errors: use ASCII text equivalents (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

PowerShell's `Write-Host` cmdlet sometimes fails to parse emoji Unicode characters in string literals. This is particularly true when emoji appear in variable interpolations or complex string contexts, causing output pipeline issues.

**Problem examples:**
```powershell
# FAILS: Emoji in interpolated string
Write-Host "🚀 Building $Folder presentations..."

# FAILS: Emoji in output
Write-Host "✅ $Category/$BaseName built"
```

**Solution:** Use ASCII text placeholders instead:
```powershell
# WORKS: ASCII placeholders
Write-Host "[ROCKET] Building $Folder presentations..."
Write-Host "[OK] $Category/$BaseName built"
```

**Mapping:** 🚀→`[ROCKET]` | 📁→`[FOLDER]` | 📦→`[BOX]` | 📢→`[SPEAKER]` | 📂→`[OPEN_FOLDER]` | 🔨→`[HAMMER]` | ✅→`[OK]` | ❌→`[FAILED]` | ⏭️→`[SKIP]` | 🔬→`[SCIENCE]` | 📚→`[BOOKS]` | 📄→`[DOC]` | ✨→`[DONE]` | ⏱️→`[CLOCK]`

**All scripts updated:** `scripts/build-all.ps1` uses ASCII equivalents throughout. Output remains readable and colorized per line.

---

## SectionOpenerSlide: props, constraints, and color architecture (2026-04-21)

`schema_version: 1` | `date: 2026-04-21`

`SectionOpenerSlide` is a **structural** component (lives in `components/structure/`), not a Tier-1 body component — it does **not** take `progressDots`.

**Props (all required):**
| Prop | Type | Constraint |
|------|------|-----------|
| `partNumber` | Number | 1–4; logged as error outside this range |
| `title` | String | Rendered as gradient text (text-5xl, bg-clip-text) |
| `subtitle` | String | Secondary heading below title |
| `cards` | Array | Exactly 3 items: `{ icon, title, blurb }` — error logged if not 3 |
| `terminal` | Object | `{ context, detail }` |

**Color architecture — `colorThemes` object with 4 complete sets:**

Colors are keyed by `partNumber` and applied via `computed(() => colors.value.X)`. Never hardcode gradients in the template — all colors live in `DARK_THEMES` / `LIGHT_THEMES` arrays indexed by `partNumber - 1`.

| Part | Gradient arc | h1 gradient |
|------|-------------|-------------|
| 1 | cyan → blue → indigo | `from-cyan-400 via-blue-300 to-indigo-400` |
| 2 | blue → indigo → purple | `from-blue-400 via-indigo-300 to-purple-400` |
| 3 | indigo → purple → pink | `from-indigo-400 via-purple-300 to-pink-400` |
| 4 | purple → pink → rose | `from-purple-400 via-pink-300 to-rose-400` |

Each theme object: `{ ambientBg, orb, pill, h1, divider, arrow, cards[3] }`. Cards array has 3 entries with `{ bg, border, title }` matching the gradient arc colors.

**Three-layer styling (same pattern as all components):**
- Layer 1 (style.css): positioning, layout, sizing, spacing
- Layer 2 (inline Tailwind): typography, effects — `text-5xl font-bold bg-clip-text text-transparent`
- Layer 3 (Vue colorThemes): all gradients and text colors via computed theme object

**Do NOT:**
- Move part colors to `style.css` (breaks `isDark` reactivity and `partNumber` logic)
- Add `style=""` attributes
- Hardcode gradient strings in the template
- Remove or trim `DARK_THEMES` / `LIGHT_THEMES` entries — even though light mode is currently disabled (`isDark = ref(true)` in `useTheme.ts`), the `LIGHT_THEMES` array is already authored and must stay; removing it breaks dark/light switching the moment `useDark()` is wired in

---

## useTheme.ts pattern: how dark/light mode works in tech-talk components (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

All 5 tech-talk components share a single `isDark` reactive ref from `slides/tech-talks/components/useTheme.ts`.

**To activate dark/light mode:** Edit `useTheme.ts` — replace `ref(true)` with `useDark()` from `@slidev/client`.

**Pattern used in every component:**
```ts
import { computed } from 'vue'
import { isDark } from './useTheme'

const DARK_THEME = { ambientBg: '...', orb: '...', pill: '...', ... }
const LIGHT_THEME = { ambientBg: '...', orb: '...', pill: '...', ... }
const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)
```

For card arrays (TocSlide, CoreQuestionSlide, ThankYouSlide):
```ts
const DARK_CARD_STYLES = [ { bg, border, hover, titleGrad, shadow, blurb }, ... ]
const LIGHT_CARD_STYLES = [ { bg, border, hover, titleGrad, shadow, blurb }, ... ]
const cardStyles = computed(() => isDark.value ? DARK_CARD_STYLES : LIGHT_CARD_STYLES)
```

**Light mode color mapping (reference):**
- `*-900/40` bg → `*-100/80` bg
- `border-*-500/50` → `border-*-300`
- `text-*-300` title → `text-*-700` title
- `text-*-400/70` blurb → `text-*-700/80` blurb
- `bg-gray-900/50 border-gray-700/50` item row → `bg-gray-100/80 border-gray-200`
- `text-gray-400` desc → `text-gray-600`

**Build verified:** `npm run build -- tech-talks/copilot-acp.md` ✅ (April 2026)

---

## Component input guards: required when creating or editing any component (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

**Every component — new or edited — must guard all inputs.** This is a two-part requirement:

### 1. Component-side: `console.warn` + `*_MAX` constants

For each prop that has a layout impact, add:

```ts
// Prop length limits — read by build-all.ps1 for static lint enforcement
const TITLE_MAX    = 80    // or whatever the layout-tested limit is
const CARD_TITLE_MAX = 40
const DESC_MAX     = 100
const ITEMS_MAX    = 5
```

Then add runtime warnings immediately after:

```ts
props.cards?.forEach((c, i) => {
  if (c.title?.length > CARD_TITLE_MAX)
    console.warn(`[MySlide] cards[${i}].title is ${c.title.length} chars (max ${CARD_TITLE_MAX}): "${c.title}"`)
  if (c.description?.length > DESC_MAX)
    console.warn(`[MySlide] cards[${i}].description is ${c.description.length} chars (max ${DESC_MAX}): "${c.description.slice(0, 50)}…"`)
})
```

For array counts, use count guards with `const ITEMS_MAX = N`:

```ts
if (props.items && props.items.length > ITEMS_MAX)
  console.warn(`[MySlide] items has ${props.items.length} items (max ${ITEMS_MAX})`)
```

The `console.warn` fires in the browser dev server. The `const *_MAX = N` constants are the source of truth picked up by `build-all.ps1` at build time.

### 2. `build-all.ps1`: add extractor entry if using a new constant name

`scripts/build-all.ps1` scans all `.vue` files for `const *_MAX = N` patterns at startup (the `$COMPONENT_LIMITS` block). It cross-references against `$PROP_EXTRACTORS` to know how to extract that value from deck markdown for static lint.

**Current `$PROP_EXTRACTORS` keys** (add new ones when introducing new constant names):

| Constant name | Extraction type | Pattern |
|---|---|---|
| `TITLE_MAX` | `attr` | `title="([^"]+)"` |
| `SUBTITLE_MAX` | `attr` | `subtitle="([^"]+)"` |
| `LABEL_MAX` | `match` | `label:\s*"([^"]+)"` |
| `DESC_MAX` | `match` | `description:\s*"([^"]+)"` |
| `CARD_TITLE_MAX` | `match` | `title:\s*"([^"]+)"` |
| `CARD_BLURB_MAX` | `match` | `blurb:\s*"([^"]+)"` |
| `ROW_MAX` | `count` | `label:\s*"[^"]+"` |
| `HEADER_MAX` | `attr` | `header="([^"]+)"` |
| `PROMPT_MAX` | `attr` | `prompt="([^"]+)"` |
| `FOOTER_MAX` | `attr` | `footer="([^"]+)"` |
| `TAGLINE_MAX` | `attr` | `tagline="([^"]+)"` |

If you add a new `*_MAX` constant (e.g. `STEP_LABEL_MAX`) that doesn't match any existing extractor, add a new entry to `$PROP_EXTRACTORS` in `build-all.ps1`. Otherwise the static linter silently skips that constant (the component warns at runtime only).

**Rule:** any constant name in `$PROP_EXTRACTORS` is automatically enforced at build time across all decks — no per-component code needed in the build script.

---

## Tech Talk Slide Generator: no `---` separator between `</script>` and the Title slide (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

The Tech Talk Slide Generator (and any agent writing Slidev decks) must **not** place a `---` slide separator between the closing `</script>` tag and the first `<!-- SLIDE: Title -->` comment. The `<script setup>` block is frontmatter-adjacent — it belongs to slide 1 automatically. An extra `---` before the TitleSlide creates a blank slide 1 and shifts all TOC slide numbers off by one.

**Wrong:**
```markdown
</script>

---

<!-- SLIDE: Title -->
<TitleSlide ... />
```

**Correct:**
```markdown
</script>

<!-- SLIDE: Title -->
<TitleSlide ... />
```

The first `---` separator belongs **after** the TitleSlide closing `/>`, not before it.

---

## Tech-talk component convention: no style pass-through props (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

All 5 tech-talk components (`TitleSlide`, `TocSlide`, `CoreQuestionSlide`, `ThankYouSlide`, `ReferencesSlide`) use **hardcoded styles only** — no style props are accepted or passed from deck files.

**Rationale:** Style props were on `TitleSlide` originally but no deck ever passed them. Removed April 2026. Hardcoding keeps dark/light mode changes in one place per component and prevents style drift between decks.

**Rule for new components:** Never add `backgroundClass`, `headingClass`, `pillClass`, or similar style-string props. Put all color/gradient decisions inside the component's `CARD_STYLES` constant or inline in the template.

**TitleSlide current props:** `title` (required), `subtitle` (required), `tagline` (default `""`), `meta` (default `""`). That's it.

---

## CoreQuestionSlide component: props, constraints, and usage (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

The `CoreQuestionSlide` component is **REQUIRED as slide 2** in all tech-talk decks.

**Import:**
```js
import CoreQuestionSlide from './components/CoreQuestionSlide.vue'
```

**Props:**
| Prop | Type | Required | Notes |
|------|------|----------|-------|
| `question` | String | ✅ | The core question text, quoted. Max 100 chars. |
| `subtext` | String | — | Setup sentence before the highlight. |
| `highlight` | String | ✅ | Bold colored punchline. `subtext`+`highlight` ≤ 160 chars combined. |
| `:cards` | Array (6) | ✅ | Exactly 6 `{ icon?, title, description }` objects. |

**Card schema:** `{ icon?: string, title: string, description: string }`
- `title` ≤ 40 chars; `description` ≤ 90 chars
- Cards 0-2 (row 1): audience/use-case cards — include `icon`, renders as ghost watermark
- Cards 3-5 (row 2): insight/stat cards — `icon` optional
- Exactly 6 cards — component `console.error`s if count differs

**Apostrophe rule:** `:cards='[...]'` uses single-quoted attribute. Escape apostrophes in strings as `&#39;`.

**Separator rule:** blank line required before `---` after `/>` closing tag.

**Usage:**
```html
<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="The core question?"
subtext="Setup text without the punchline —"
highlight="The highlighted punchline goes here."
:cards='[
  { icon: "🔧", title: "Audience Persona 1", description: "What they get" },
  { icon: "👥", title: "Audience Persona 2", description: "What they get" },
  { icon: "🚀", title: "Audience Persona 3", description: "What they get" },
  { title: "Key Stat 1", description: "Concrete constraint or metric" },
  { title: "Key Stat 2", description: "Concrete constraint or metric" },
  { title: "Key Stat 3", description: "Concrete constraint or metric" }
]'
/>
```

---

## TocSlide component: props, constraints, and apostrophe/quote gotcha (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

The `TocSlide` component is **REQUIRED as slide 3** in all tech-talk decks (after Title and Core Question).

**Import:**
```js
import TocSlide from './components/TocSlide.vue'
```

**Props:**
| Prop | Type | Required | Notes |
|------|------|----------|-------|
| `:sections` | Array (4) | ✅ | Exactly 4 `{ icon, title, subtitle, blurb, slide }` objects. |

**Section schema:** `{ icon: string, title: string, subtitle: string, blurb: string, slide: number }`
- All fields required — component `console.error`s if `icon` or `blurb` missing
- `title` ≤ 40 chars; `subtitle` ≤ 80 chars; `blurb` ≤ 100 chars (warns if exceeded)
- `slide` = the Slidev slide number for that section's Part opener slide

**CRITICAL — attribute quoting gotcha:**
The attribute is single-quoted: `:sections='[...]'`. Two failure modes:
1. **Apostrophes in string values** (e.g. `what's`) terminate the attribute early → `Unterminated string constant`
   Fix: replace with Unicode right single quote `'` (U+2019) or rephrase
2. **`&quot;` HTML entities** in string values get decoded to `"` by the HTML parser, breaking the inner JS double-quoted strings
   Fix: use `\"` or rephrase to avoid quotes entirely

**Safe approach:** avoid apostrophes and double quotes in all section data strings.

**Color progression:** fixed cyan → blue → indigo → purple (card 1 → 4). Cannot be changed per-deck.

**Usage:**
```html
<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🎯", title: "Section One", subtitle: "Subtitle text", blurb: "Blurb text", slide: 4 },
    { icon: "🏗️", title: "Section Two", subtitle: "Subtitle text", blurb: "Blurb text", slide: 8 },
    { icon: "🚀", title: "Section Three", subtitle: "Subtitle text", blurb: "Blurb text", slide: 12 },
    { icon: "🛡️", title: "Section Four", subtitle: "Subtitle text", blurb: "Blurb text", slide: 16 },
  ]'
/>
```

---

## WhatYouCanDoTodaySlide component: props, constraints, and usage (2026-04-15)

`schema_version: 1` | `date: 2026-04-15`

The `WhatYouCanDoTodaySlide` component is **REQUIRED as slide N-2** (immediately before References) in all tech-talk decks.

**Import:**
```js
import WhatYouCanDoTodaySlide from './components/WhatYouCanDoTodaySlide.vue'
```

**Props:**
| Prop | Type | Required | Notes |
|------|------|----------|-------|
| `:today` | Array | ✅ | Items for the "Today" column. Max 5. |
| `:thisWeek` | Array | ✅ | Items for the "This Week" column. Max 5. |
| `:thisMonth` | Array | ✅ | Items for the "This Month" column. Max 5. |
| `footer` | String | ✅ | Single-sentence Key Takeaway. |

**Hardcoded (not configurable):**
- Column labels: **Today / This Week / This Month**
- Column icons: ⚡ / 🗓️ / 🚀 — rendered as `text-7xl opacity-10` background decoration in upper-right of each card
- Column colors: green/emerald (col 0), blue/indigo (col 1), purple/pink (col 2)
- Footer title: "🔑 Key Takeaway"
- Ambient theme: pink/rose

**Apostrophe rule:** `:today='[...]'` etc. use single-quoted attributes. Escape apostrophes in strings as `&#39;`.

**Separator rule:** blank line required before `---` after `/>` closing tag.

**Usage:**
```html
<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["item 1", "item 2", "item 3"]'
  :thisWeek='["item 1", "item 2", "item 3"]'
  :thisMonth='["item 1", "item 2", "item 3"]'
  footer="Single-sentence key takeaway for this deck."
/>
```

**Build verified:** all 17 active tech-talk decks ✅ (April 2026)

---

## Tech-talk deck structure: 6 fixed slides (2026-04-15)

`schema_version: 1` | `date: 2026-04-15`

All tech-talk decks share a canonical 6-slide frame — 3 opening, 3 closing. Content slides fill the middle.

```
Slide 1   — Title               ← TitleSlide
Slide 2   — Core Question       ← CoreQuestionSlide (REQUIRED)
Slide 3   — Table of Contents   ← TocSlide (REQUIRED)
...content slides...
Slide N-2 — What You Can Do Today ← WhatYouCanDoTodaySlide (REQUIRED)
Slide N-1 — References          ← ReferencesSlide (REQUIRED)
Slide N   — Thank You           ← ThankYouSlide (REQUIRED)
```

All 6 imports go in a **single** `<script setup>` block at the top of the deck. The canonical import block is in `slides/tech-talks/template.md`.

**Rule for new components:** always add to the fixed frame rather than inserting ad-hoc between content slides.

---

## Tech-talk template.md is now the authoritative prop/usage reference (2026-04-15)

`schema_version: 1` | `date: 2026-04-15`

As of 2026-04-15, `slides/tech-talks/template.md` is the single authoritative source for all component prop schemas, escaping rules, and usage examples. The slide-generator agent (`slide-generator.agent.md`) now defers to it with a pointer rather than duplicating content.

**Do not duplicate prop schemas in both files.** If a prop schema needs updating, update `template.md` only. The generator reads it in pre-flight step 5.

`schema_version: 1` | `date: 2026-04-14`

All tech-talk deck `.md` files must import `TitleSlide` and `ThankYouSlide` using `./components/` (relative to `slides/tech-talks/`). Using `../components/` resolves to the root `slides/components/` folder which does NOT contain these components — build fails with `UNRESOLVED_IMPORT`. Fixed 2026-04-14 across all 21 active tech-talk decks.

**Correct:**
```js
import ThankYouSlide from './components/ThankYouSlide.vue'
import TitleSlide from './components/TitleSlide.vue'
```

**Wrong (causes build failure):**
```js
import ThankYouSlide from '../components/ThankYouSlide.vue'
```

---

## `TitleSlide` and `ThankYouSlide`: `logoSrc`/`logoAlt` props removed (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

Both `TitleSlide.vue` and `ThankYouSlide.vue` (in `slides/tech-talks/components/`) no longer accept `logoSrc` or `logoAlt` props. The logo is hardcoded as `src="../sdp-logo.png"` `alt="SDP Logo"` in the template. The `import defaultTechTalkLogoSrc` line was also removed.

**`logoClass` prop is KEPT** — it remains on both components (default `"w-64"`) because `parallel-execution.md` overrides it with `logoClass="w-20"`.

---

## `section:` frontmatter is required in all tech-talk decks (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

All 17 active tech-talk `.md` files must include a `section:` field in YAML frontmatter. The field must match one of the valid values in `slides/SECTIONS.md`.

**Valid values (as of 2026-04-14):**
- `Copilot Tools`
- `Customization & Context`
- `Agentic Engineering`

**Correct placement** — between `mdc:` and `status:`:
```yaml
module: tech-talks/<slug>
mdc: true
section: Agentic Engineering
status: active
updated: YYYY-MM-DD
```

All 17 decks were updated 2026-04-14. The slide generator agent and `slides/tech-talks/template.md` should emit this field for new decks.

---

## ReferencesSlide component: apostrophe escaping required in single-quoted attribute (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

The `<ReferencesSlide :groups='[...]' />` prop uses single-quoted attribute syntax (required because the JSON array uses double quotes internally). Any apostrophe in item string values — e.g. `Peli's` — will **terminate the attribute early**, causing:

```
[plugin:vite:vue] Error parsing JavaScript expression: Unterminated string constant
```

**Fix:** escape apostrophes in all item `label` and `description` strings as `&#39;`.

**Correct:**
```html
{ label: "Peli&#39;s Agent Factory Blog", description: "..." }
```

**Wrong (breaks build):**
```html
{ label: "Peli's Agent Factory Blog", description: "..." }
```

Also confirmed: the `---` slide separator must have a blank line **before** it when immediately following a self-closing component tag (`/>`). Missing the blank line causes a silent parse failure.

---

## VS Code Remote (legacy-4): dev tunnel URL for Slidev on port 3030 (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

When running `npm run dev` from `slides/` on the remote machine **legacy-4**, VS Code automatically creates a dev tunnel and forwards port 3030. The tunnel URL is:

```
https://9gbdmjtg-3030.use2.devtunnels.ms/21
```

The VS Code built-in browser (`simpleBrowser.show`) can open `https://9gbdmjtg-3030.use2.devtunnels.ms:3030` to view the live Slidev deck inside the editor — the hostname will likely change each session

**Workflow to view slides from remote:**
1. `cd slides && npm run dev .\tech-talks\<deck>.md` on legacy-4
2. In VS Code: `Ctrl+Shift+P` → `Simple Browser: Show` → `http://localhost:3030`
   — OR use the tunnel URL above if connecting from an external browser.

https://vscode.dev/tunnel/legacy-4 to connect to VSCode on remote

---

## Slidev dev server: `--remote` flag in devcontainer requires `--remote=` (2026-04-13)

`schema_version: 1` | `date: 2026-04-13`

In the CopilotTraining devcontainer, Slidev's `--remote` flag must be passed as `--remote=` (with explicit empty `=`) when other positional args (e.g. the entry file) follow it. Because `--remote` is typed as `[string]` in yargs, passing `--remote` without `=` causes yargs to consume the next positional argument (the entry filename) as the remote password, breaking the dev server.

**Correct `package.json` scripts entry:**
```json
"dev": "slidev --remote= --open"
```

**Effect:** Binds to `0.0.0.0` (all interfaces) with no password, allowing VS Code devcontainer port forwarding to reach the server on port 3030.

---

## BeforeAfterSlide component: props, constraints, and usage (2026-04-16)

`schema_version: 1` | `date: 2026-04-16`

The `BeforeAfterSlide` component is **REQUIRED as slide N-3** (immediately before What You Can Do Today) in all tech-talk decks. Labels are hardcoded as "Before" and "After" — do not pass them as props.

**Import:**
```js
import BeforeAfterSlide from './components/BeforeAfterSlide.vue'
```

**Props:**
| Prop | Type | Required | Notes |
|------|------|----------|-------|
| `header` | String | ✅ | Transformation title. Max 80 chars. (e.g., "From Manual Reviews to Scalable Quality") |
| `:leftItems` | Array (4) | ✅ | Exactly 4 bullets describing the "before" state. Max 100 chars per item. |
| `:rightItems` | Array (4) | ✅ | Exactly 4 bullets describing the "after" state. Max 100 chars per item. |
| `:metrics` | Array (3) | ✅ | Exactly 3 quantified outcomes: `[{ value: string, detail: string }, ...]`. Max 60 chars per field. |

**Hardcoded (not configurable):**
- Left label: **Before** (red/rose theme)
- Right label: **After** (green/emerald theme)
- Metrics render with cyan/blue/indigo bullets and `→` progression arrow
- Metric cards styled with gray backgrounds and transparent borders

**Apostrophe rule:** `:leftItems='[...]'` uses single-quoted attributes. Escape apostrophes in strings as `&#39;`.

**Separator rule:** blank line required before `---` after `/>` closing tag.

**Slide comment:** must use `<!-- SLIDE: Before/After -->` for standardized searching across all decks.

**Usage:**
```html
<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="From Manual Reviews to Scalable Quality"
  :leftItems='[
    "Time-consuming manual code review process",
    "Inconsistent feedback and coding standards",
    "Delays blocking developer productivity",
    "Limited reviewer scalability"
  ]'
  :rightItems='[
    "Intelligent automated review with real-time suggestions",
    "Consistent, contextual guidance applied instantly",
    "Developers unblocked within seconds",
    "Reviews scale to thousands of pull requests"
  ]'
  :metrics='[
    { value: "80%", detail: "faster review time" },
    { value: "10x", detail: "more consistent feedback" },
    { value: "4.2h", detail: "saved per developer per week" }
  ]'
/>
```

**Build verified:** all 17 active tech-talk decks ✅ (April 2026)

---

**Also added** `"forwardPorts": [3030]` to `.devcontainer/devcontainer.json` for automatic port forwarding on container rebuild.

**Source:** Diagnosed 2026-04-13 — server was listening on `IPv6 localhost:3030` only; `curl localhost:3030` worked inside container but browser hung from host.

---

## Slidev: `---` in code blocks must be escaped as HTML entities (2026-04-13)

`schema_version: 1` | `date: 2026-04-13`

Literal `---` appearing on its own line inside a `<code>` or `<pre>` block is parsed by Slidev as a slide separator, even when enclosed in HTML tags. This breaks the slide structure and causes Vue template parse errors ("Element is missing end tag").

**Affected pattern:** YAML frontmatter examples with `---` delimiters:
```html
<!-- WRONG: causes slide split -->
<pre><code class="language-yaml">---
name: my-agent
---</code></pre>

<!-- CORRECT: renders as "---" but doesn't split -->
<pre><code class="language-yaml">&#45;&#45;&#45;
name: my-agent
&#45;&#45;&#45;</code></pre>
```

**Entity:** `&#45;` = hyphen. Three hyphens = `&#45;&#45;&#45;`.

**Source:** vscode-latest.md slide 13 (Org-Level Instructions) — YAML agent frontmatter example with `---` caused build failure. Fixed by escaping.

---

## GitHub Docs URL restructuring (2026-04-12)

`schema_version: 1` | `date: 2026-04-12`

GitHub Docs has restructured Copilot URLs. Many old paths are 404. Future reference slides must use new paths.

**Dead paths (404):**
- `customizing-copilot/customizing-the-behavior-of-github-copilot`
- `building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension`
- `managing-copilot/.../managing-access-for-copilot-in-your-enterprise`
- `enterprise-cloud@latest/copilot/copilot-chat/...`
- `rest/copilot/copilot-metrics` (legacy API closed April 2, 2026)

**New structure — verified working:**
- Custom instructions: `how-tos/configure-custom-instructions/add-organization-instructions`
- Agent skills: `concepts/agents/about-agent-skills`
- Knowledge Bases / Copilot Spaces: `how-tos/provide-context/use-copilot-spaces`
- Enterprise access management: `how-tos/administer-copilot/manage-for-enterprise/manage-access`
- Usage & adoption metrics: `how-tos/administer-copilot/view-usage-and-adoption`
- Managing Copilot for enterprise: `managing-copilot/managing-copilot-for-your-enterprise` (still works)

**Rule:** All base URLs are `https://docs.github.com/en/copilot/`. Verify any reference link older than 2026-03 against live docs before publishing.

**Source:** enterprise-patterns.md References slide link audit, session 2026-04-12.

---

## Slidev: Title slide must have <!-- SLIDE: --> comment

`schema_version: 1` | `date: 2026-04-08`

Every slide — including slide 1 (the title slide) — must begin with a `<!-- SLIDE: Name -->` comment. Copilot frequently omits this on the title slide, which shifts all subsequent `<!-- SLIDE: -->` counts off by one. The Nth `<!-- SLIDE: -->` comment = slide N only when slide 1 has the comment.

**Fix:** After generating, verify the first content block (after the opening `---` frontmatter) starts with `<!-- SLIDE: Title -->`.

**Source:** Recurring agent mistake confirmed across multiple deck generations.

---

## Slidev: Progress dots wrapper munge

`schema_version: 1` | `date: 2026-04-08`

After adding a progress dots block inside a pill row, the slide title wrapper div **must** immediately follow the closing `</div>` of the flex row. Missing it renders all content invisible.

Canonical structure after pill row:
```
</div>                                      ← closes flex items-center pill row
<div class="relative z-10 mb-2">           ← title wrapper — MUST be present
  <div>title</div>
  <div>subtitle</div>
</div>
<div class="relative z-10 flex-1 min-h-0"> ← content area
  ...
</div>
</div>                                      ← closes h-full outer
```

**Source:** agent-teams.md — s11 and s21 both went blank from this exact omission (two incidents, one session).

---

## Slidev: Stray closing div after progress dots collapses outer container

`schema_version: 1` | `date: 2026-04-08`

When inserting a dots block inside a pill row, do NOT add an extra `</div>` after it. The dots div is a sibling inside the flex row. One extra `</div>` closes the outer `h-full` container early — all content after it renders outside the slide and is invisible.

**Source:** agent-teams.md — same munge pattern caused both s11 and s21 blank-content bugs.

---

## Slidev: Build after structural edits

`schema_version: 1` | `date: 2026-04-08`

Run `cd slides && npm exec slidev build tech-talks/<deck>.md --base /CopilotTraining/tech-talks/<deck>/ --out dist/tech-talks/<deck>` after any structural edit (adding slides, restructuring wrappers, inserting HTML blocks). VS Code diagnostics do **not** catch Vue template parse errors such as missing end tags — only the build catches them.

**Source:** agent-teams.md polish session — build skipped throughout; recommended in checkpoint next-steps as a risk.

---

## Slidev: Canonical pill row + title structure for cockpit-style slides

`schema_version: 1` | `date: 2026-04-08`

The complete required structure for a section content slide breadcrumb area:

```html
<div class="relative z-10 flex items-center gap-3 mb-2">
  <span class="px-4 py-1 bg-gradient-to-r from-{accent}-600/80 ...">🏷 Section: Topic</span>
  <div class="flex-1 h-px bg-gradient-to-r from-{accent}-400/60 to-transparent"></div>
  <div class="flex items-center gap-2">
    <div class="w-2 h-2 rounded-full bg-white/20"></div>   <!-- inactive -->
    <div class="w-2 h-2 rounded-full bg-{accent}-400 shadow-lg shadow-{accent}-500/50"></div>  <!-- active -->
    <span class="text-white/40 text-xs ml-1">N of M</span>
  </div>
</div>
<div class="relative z-10 mb-2">          ← title wrapper — always required
  <div class="text-lg font-bold text-white mb-0.5">Title</div>
  <div class="text-xs text-white/50">Subtitle</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
  <!-- content -->
</div>
```

Any deviation — extra wrapper, missing title div, extra closing tag — causes invisible content.

**Source:** agent-teams.md recurring munge; two separate incidents confirmed.

---

## Slidev: BOM encoding breaks frontmatter parsing

`schema_version: 1` | `date: 2026-04-08`

A UTF-8 BOM (`\xEF\xBB\xBF`) at the start of a `.md` file causes Slidev to treat the YAML frontmatter block as slide 1 content instead of metadata. The title slide renders as raw YAML text.

**Fix:** Write files with `UTF8Encoding($false)` in PowerShell (no BOM). When editing existing files, open in VS Code and use "Save with Encoding → UTF-8" (not UTF-8 with BOM).

**Source:** Known Slidev gotcha; referenced in memory-plan.md as a recurring agent re-discovery.

---

## Slidev: Structural rules (separator, frontmatter, HTML)

`schema_version: 1` | `date: 2026-04-08`

| Rule | Detail |
|------|--------|
| `---` separator | Must be on its own line with blank lines before and after — never `---<!-- SLIDE:` on same line |
| Literal `---` in HTML | Escape as `&#45;&#45;&#45;` — a literal `---` inside content splits the slide |
| No per-slide frontmatter | Never `layout:`, `class:`, `transition:` between `---` separators — use CSS in the content div |
| `layout: two-cols` | Replace with `<div class="grid grid-cols-2 gap-4">` inside the content wrapper |
| TOC navigation | Use `@click="$nav.go(N)"` — never `<a href="#anchor">` hash links |
| No Mermaid diagrams | Always use styled HTML divs — Mermaid is not supported in this Slidev setup |
| Slide count method | Nth `<!-- SLIDE: -->` comment = slide N (with separator rule enforced, `\n---\n` count also works) |
| Content slides layout | Never plain centered `h1` — only title, section openers, and thank-you use centered layouts |
| Mixed quotes | Use `"` everywhere in HTML attributes — never mix `"` and `'` |
| 4+ space indentation | Keep all HTML flush-left — 4+ spaces triggers markdown code block rendering |

**Source:** Recurring agent authoring errors across multiple deck generations.

---

## Slidev: Two valid progress dot styles (w-2 div vs w-2.5 span)

`schema_version: 1` | `date: 2026-04-08`

Two dot styles are in use across decks — both are correct:

| Style | Element | Class | Used in |
|-------|---------|-------|---------|
| Small div | `<div>` | `w-2 h-2 rounded-full` | agentic-journey, agent-teams |
| Medium span | `<span>` | `w-2.5 h-2.5 rounded-full` | agentic-sdlc |

Active dot: `bg-{accent}-400 shadow-lg shadow-{accent}-500/50`
Inactive dot: `bg-white/20`

Both styles render identically in Slidev. Do not "fix" one style to match the other.

**Source:** inspect-slide.js harness initially missed the w-2.5 span variant and falsely reported agentic-sdlc as having missing dots. Fixed in commit 23e6563.

---

## Slidev: Standalone closing slides are exempt from progress dots

`schema_version: 1` | `date: 2026-04-08`

Closing slides (ROI Analysis, Next Steps/What You Can Do Today, References, Thank You) use their own accent colors and do NOT get progress dots. They are standalone topic slides, not numbered content slides within any Part.

Identifying markers:
- Pill label: "💰 ROI Analysis", "✅ Next Steps", "📚 References", or no pill (Thank You)
- Background gradient: different color family from the preceding section (e.g., emerald or cyan when section is purple)
- Position: after the last numbered section's content slides, before Thank You

The inspect-slide.js harness flags these as false positives (colorInconsistent + missingDots) because section tracking propagates through the deck. This is expected behavior — they are not bugs.

**Source:** agentic-journey.md s16-s19 and agentic-sdlc.md s23-s25 both confirmed as intentional standalone slides.

---

## Slidev harness: stale server = wrong screenshots

`schema_version: 1` | `date: 2026-04-10`

`inspect-slide.js` reuses any process already listening on port 3030 without verifying which deck is served. When switching between decks, stale screenshots from the previous deck can persist and give completely wrong overflow readings.

**Symptoms:** screenshot counter in the slide shows `N/X` where X ≠ the expected slide count, OR a familiar slide from the previous deck appears in the screenshot.

**Fix procedure (run every time you switch decks):**
```powershell
# 1. Kill any process on port 3030
Get-NetTCPConnection -LocalPort 3030 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
# 2. Delete stale screenshots for the deck you're about to scan
Remove-Item slides/.harness/<deck>-*.png -Force -ErrorAction SilentlyContinue
# 3. Then run: node scripts/inspect-slide.js <deck> scan
```

**Source:** copilot-acp session — s9 and s18 screenshots showed agent-teams content (25-slide deck vs 21-slide copilot-acp). Wasted a full debugging pass.

---

## Slidev: Section opener footer code block causes +64px overflow

`schema_version: 1` | `date: 2026-04-09`

The Slide Generator sometimes appends a footer code block to section opener slides:
```html
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
  <span class="text-gray-400">tagline text</span><br />
  <span class="text-cyan-300 mt-1 block">↳ follow-on text</span>
</div>
```
This block adds exactly ~64px to section openers. Section openers in `agentic-sdlc.md` (the exemplar) do NOT have this element. Always remove it from all section openers after generation.

**Symptoms:** All section opener slides overflow by exactly +64px.

**Source:** terminal-sandboxing.md and copilot-memory.md — found on all 4 section openers in each deck.

---

## Slidev: flex-1 overflow-y-auto without max-h-* does NOT prevent harness overflow

`schema_version: 1` | `date: 2026-04-09`

Adding `overflow-y-auto` and `min-h-0` to a flex child constrains the visual scroll area but does NOT reduce `scrollHeight` as measured by the Playwright harness. The harness checks `element.scrollHeight > element.clientHeight + 6` — `flex-1 min-h-0 overflow-y-auto` does not change scrollHeight.

**The only reliable fix:** Add an explicit `max-h-*` class to the scrollable container (e.g., `max-h-64`, `max-h-52`). This constrains the rendered CSS height, which reduces the parent's scrollHeight.

**Source:** copilot-primitives.md s7 and s12 — `min-h-0` added first, harness still reported overflow; explicit `max-h-64` / `max-h-52` resolved it.

---

## Cross-Reference Table

Topics covered in multiple artifacts — check for drift when updating either:

| Topic | Artifacts | Last verified |
|-------|-----------|---------------|
| MCP transport & server setup | `workshop/05-mcp-servers/` (2026-02-15), `tech-talks/mcp-apps/` (2026-03-01) | 2026-04-08 |
| Instructions files & `.instructions.md` | `workshop/01-instructions/` (2026-01-20), `tech-talks/copilot-primitives/` (2026-03-23) | 2026-04-08 |
| Agent sessions & custom agents | `tech-talks/vscode-latest/` (2026-04-13), `workshop/06-custom-agents/` (2026-02-10) | 2026-04-13 |
| Memory layers (3-layer model) | `tech-talks/copilot-memory/` (2026-02-01), `workshop/05-mcp-servers/` (2026-02-15) | 2026-04-08 |
| Prompt files & `.prompt.md` | `workshop/03-custom-prompts/` (2026-01-25), `tech-talks/copilot-primitives/` (2026-03-23) | 2026-04-08 |
| Agent orchestration patterns | `tech-talks/agent-teams/` (2026-04-07), `tech-talks/agent-orchestration/` (2026-03-10) | 2026-04-08 |

**How to use:** When updating one artifact, query — *"what else covers this topic?"* — then verify alignment manually. Update `Last verified` date when confirmed still consistent.

**Source:** memory-plan.md Wild Ideas §3; built from `slides/SECTIONS.md` and README scan.

---

## inspect-slide: Multi-viewport testing catches responsive overflow

`schema_version: 2` | `date: 2026-04-10`

inspect-slide tests overflow at 3 breakpoints: 1920px (desktop), 1366px (laptop), 768px (tablet). Content that fits at 1920px can overflow at smaller responsive sizes. This was the root cause of false negatives on copilot-azure-mcp slides 16-18 — both showed 340px+ overflow at 1366px but earlier test runs reported "ok" when only testing 1920px.

**Critical:** Always validate slides at all 3 breakpoints. Grid-based layouts are especially prone to responsive overflow.

**Source:** copilot-azure-mcp review session 2026-04-10 — identified via Adversarial Council debug process and confirmed by re-running tests at each breakpoint.

---

## inspect-slide: HTML tag balance validation

`schema_version: 1` | `date: 2026-04-10`

inspect-slide reports div tag balance within each slide (e.g., "31 opens, 30 closes"). Unmatched opens/closes prevent proper Slidev rendering — the slide may not display at all or render with invisible content. Always check inspect-slide JSON output for `"syntaxError": true` before concluding a slide is clean.

**Pattern:** Unclosed wrapper div on copilot-chat-internals s18 had outer `<div class="relative z-10 flex-1 min-h-0">` that was never closed, causing the slide not to render.

**Source:** copilot-chat-internals review session 2026-04-10 — inspect-slide caught the error (31 opens, 30 closes), guided fix.

---

## inspect-slide: Trigger phrases for natural language invocation

`schema_version: 1` | `date: 2026-04-10`

Configured skill responds to: "inspect slide", "review slide", "check slide", "slide overflow", "slide review", "inspect deck", "review deck". Users can invoke using natural language instead of explicit command syntax. Improves usability and discoverability of the tool.

**Source:** skill config session 2026-04-10 — .github/skills/inspect-slide/SKILL.md triggers field.

---

## GitHub Copilot Code Review: Rulesets (UI) + instruction files, not YAML config

`schema_version: 1` | `date: 2026-04-09`

GitHub Copilot Code Review is configured via **Rulesets in the GitHub UI** (Settings → Code and automation → Rules), not via YAML config files. Custom behavior is defined in **`.github/copilot-instructions.md`** (Markdown format) and **`.github/instructions/<topic>.instructions.md`** (Markdown with YAML frontmatter containing only `applyTo` glob patterns).

**No official support for:**
- `copilot-review.yml` or `compliance-rules.yml` files
- YAML schemas with fields like `triggers`, `severity_threshold`, `focus`, `pattern`, `require_context`, `condition`, `rule` IDs
- File-based trigger or configuration logic

This was a **critical hallucination in copilot-code-review tech-talk** content — completely rewritten to reflect accurate API.

**Source:** Verified against GitHub official docs (https://docs.github.com/en/copilot/using-github-copilot/code-review and https://docs.github.com/en/copilot/tutorials/use-custom-instructions). Hallucination audit completed 2026-04-09.

---

## Slidev: Multi-line YAML in code blocks breaks Vue parser

`schema_version: 1` | `date: 2026-04-09`

A `<code>` block containing YAML with pipe syntax (`|`) or multi-line strings causes Slidev's Vue template parser to fail silently. The slide shows "An error occurred on this slide" in the browser, but inspect-slide.js reports `"syntaxError": false` (because the HTML tag balance is correct — the Vue error is runtime, not structural).

**Affected slides in this session:**
- copilot-code-review s5: YAML with `version: 1 review:\n  triggers:\n  ...` inline with opening tag
- copilot-code-review s10: YAML with `rules:\n  - id: "pii-encryption"\n    message: |\n      ...` (pipe multi-line)

**Fix:** Flatten YAML examples to single-line keys without inline comments or pipe strings. If pipe is necessary, convert to a simple multi-line YAML block outside of `<code>` tags or remove the YAML entirely.

**Source:** copilot-code-review slide review session 2026-04-09 — both slides fixed by removing multi-line YAML from code blocks.
