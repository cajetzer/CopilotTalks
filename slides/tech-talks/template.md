# Tech-Talk Profile

Use this profile when generating `slides/tech-talks/*.md` from content under `tech-talks/`.

## Purpose

Tech talks are practitioner-facing. They should feel concrete, current, and capability-led.

- Audience: developers, platform engineers, DevOps engineers, architects
- Tone: technical, direct, outcome-based
- Goal: show what changed, why it matters now, and how it fits into real workflows

## Visual System

- Primary gradient: `from-cyan-400 via-blue-400 to-indigo-400`
- Background gradient: `from-cyan-900/20 via-blue-900/10 to-indigo-900/20`
- Pill/accent gradient: `from-cyan-600/80 to-blue-600/80`
- Close progression: cyan → blue → indigo → purple → pink

---

## Deck Structure

Every tech-talk deck has 6 fixed slides — 3 opening, 3 closing — with content slides in between.

```
Slide 1 — Title              ← TitleSlide
Slide 2 — Core Question      ← CoreQuestionSlide (REQUIRED)
Slide 3 — Table of Contents  ← TocSlide (REQUIRED)
...content slides...
N-3     — Before/After       ← BeforeAfterSlide (REQUIRED)
N-2     — What You Can Do Today  ← WhatYouCanDoTodaySlide (REQUIRED)
N-1     — References             ← ReferencesSlide (REQUIRED)
N       — Thank You              ← ThankYouSlide (REQUIRED)
```

All component imports go in a single `<script setup>` block at the top of the deck:

```html
<script setup>
import TitleSlide from './components/TitleSlide.vue'
import CoreQuestionSlide from './components/CoreQuestionSlide.vue'
import TocSlide from './components/TocSlide.vue'
import BeforeAfterSlide from './components/BeforeAfterSlide.vue'
import SectionOpenerSlide from './components/SectionOpenerSlide.vue'
import WhatYouCanDoTodaySlide from './components/WhatYouCanDoTodaySlide.vue'
import ReferencesSlide from './components/ReferencesSlide.vue'
import ThankYouSlide from './components/ThankYouSlide.vue'
</script>
```

---

## Opening Slides (1–3)

### Slide 1 — Title

```html
<!-- SLIDE: Title -->
<TitleSlide
  title="{TITLE}"
  subtitle="{SUBTITLE}"
  tagline="{TAGLINE}"
  meta="{FOOTER_TEXT}"
/>
```

### Slide 2 — Core Question (REQUIRED)

```html
<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="{THE_CORE_QUESTION}"
  subtext="{SETUP_TEXT_WITHOUT_HIGHLIGHT}"
  highlight="{BOLD_COLORED_PUNCHLINE}"
  :cards='[
    { icon: "🔧", title: "Audience Persona 1", description: "What this persona gets from this talk" },
    { icon: "👥", title: "Audience Persona 2", description: "What this persona gets from this talk" },
    { icon: "🚀", title: "Audience Persona 3", description: "What this persona gets from this talk" },
    { title: "Key Pain / Stat 1", description: "Concrete number or constraint driving the problem" },
    { title: "Key Pain / Stat 2", description: "Concrete number or constraint driving the problem" },
    { title: "Key Pain / Stat 3", description: "Concrete number or constraint driving the problem" }
  ]'
/>
```

- Cards 0–2 (row 1): audience/use-case — include `icon` (renders as ghost watermark)
- Cards 3–5 (row 2): insight/stat/pain — `icon` optional
- Exactly 6 cards required
- `title` ≤ 40 chars · `description` ≤ 90 chars · `question` ≤ 100 chars · `subtext`+`highlight` ≤ 160 chars

### Slide 3 — Table of Contents (REQUIRED)

```html
<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🔧", title: "Section One",   subtitle: "One-line description", blurb: "What the audience learns", slide: 4  },
    { icon: "⚙️", title: "Section Two",   subtitle: "One-line description", blurb: "What the audience learns", slide: 8  },
    { icon: "🚀", title: "Section Three", subtitle: "One-line description", blurb: "What the audience learns", slide: 12 },
    { icon: "🎯", title: "Section Four",  subtitle: "One-line description", blurb: "What the audience learns", slide: 16 },
  ]'
/>
```

- Exactly 4 sections required
- `slide` must be the actual slide number of that section's Part opener — count after generating
- `title` ≤ 40 chars · `subtitle` ≤ 80 chars · `blurb` ≤ 100 chars
- Outer attribute uses single quotes; inner JSON uses double quotes

---

## Closing Slides (N-3 to N)

### Slide N-3 — Before/After (REQUIRED)

```html
<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="{TRANSFORMATION_TITLE}"
  :leftItems='["item 1", "item 2", "item 3", "item 4"]'
  :rightItems='["item 1", "item 2", "item 3", "item 4"]'
  :metrics='[
    { value: "{VALUE_1}", detail: "{DETAIL_1}" },
    { value: "{VALUE_2}", detail: "{DETAIL_2}" },
    { value: "{VALUE_3}", detail: "{DETAIL_3}" }
  ]'
/>
```

- `header`: transformation title describing the before→after journey (e.g., "From Manual Reviews to Scalable Quality")
- `leftItems`: exactly 4 bullets describing the "before" state (no need for labels — "Before" is hardcoded)
- `rightItems`: exactly 4 bullets describing the "after" state (no need for labels — "After" is hardcoded)
- `metrics`: exactly 3 quantified outcomes showing impact (value + detail pair)
- Placed immediately before What You Can Do Today (N-3 position)

### Slide N-2 — What You Can Do Today (REQUIRED)

```html
<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["item 1", "item 2", "item 3"]'
  :thisWeek='["item 1", "item 2", "item 3"]'
  :thisMonth='["item 1", "item 2", "item 3"]'
  footer="Single-sentence key takeaway for this deck."
/>
```

- Column labels hardcoded: **Today / This Week / This Month** — do not pass labels or icons
- Colors enforced by column position (green / blue / purple) — no color props
- Max 5 items per column; `footer` must be a single sentence
- Items should be concrete, actionable, imperative verbs

### Slide N-1 — References (REQUIRED)

```html
<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Documentation", color: "cyan", items: [
        { href: "https://...", label: "{LINK_LABEL}", description: "{DESCRIPTION}" }
    ] },
    { title: "🛠️ Related Content", color: "purple", items: [
        { label: "{TALK_OR_RESOURCE_TITLE}", description: "{DESCRIPTION}" }
    ] }
  ]'
/>
```

- Use `href` for external links; omit `href` for cross-references to other talks
- `color` accepts: `cyan`, `purple`, `blue`, `indigo`, `green`, `pink`, `orange`, `rose`, `amber`, `teal`

### Slide N — Thank You (REQUIRED)

```html
<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="{TALK_TITLE}"
  subtitle="{TALK_FULL_TITLE}"
  :cards="[
    { value: '{CALL_OUT_1}', detail: '{DETAIL_1}' },
    { value: '{CALL_OUT_2}', detail: '{DETAIL_2}' },
    { value: '{CALL_OUT_3}', detail: '{DETAIL_3}' },
  ]"
  prompt="{DISCUSSION_PROMPT}"
/>
```

---

## Section Openers (REQUIRED for each Part N slide)

Every Part N slide uses `SectionOpenerSlide`. The component handles the full centered layout, ambient orb, color progression, 3-column card preview, and terminal callout.

```html
<!-- SLIDE: Part 1 — {SECTION_TITLE} -->
<SectionOpenerSlide
  :partNumber="1"
  title="{SECTION_TITLE}"
  subtitle="{ONE_LINE_DESCRIPTION_OF_WHAT_THIS_PART_COVERS}"
  :cards='[
    { icon: "{EMOJI}", title: "{CARD_TITLE}", blurb: "{SHORT_BLURB}" },
    { icon: "{EMOJI}", title: "{CARD_TITLE}", blurb: "{SHORT_BLURB}" },
    { icon: "{EMOJI}", title: "{CARD_TITLE}", blurb: "{SHORT_BLURB}" },
  ]'
  :terminal='{ context: "{CONTEXT_LINE}", detail: "{METRIC_OR_OUTCOME}" }'
/>
```

- `partNumber`: 1–4 (controls the color scheme — 1=cyan, 2=blue, 3=indigo, 4=purple)
- `title`: the Part title (matches the `<!-- SLIDE: Part N — {title} -->` comment)
- `subtitle`: one sentence describing what this part teaches
- `cards`: exactly 3 items; `blurb` ≤ 60 chars; titles ≤ 30 chars
- `terminal.context`: descriptive setup line
- `terminal.detail`: the metric/outcome (e.g., "X → Y" or a punchline)
- Section openers do **not** get progress dots
- Apostrophes inside single-quoted `:cards='[...]'` and `:terminal='...'` must use `&#39;`

---

## Common Rules (All Component Slides)

- Apostrophes inside single-quoted array props (`:prop='[...]'`) must use `&#39;`
- Always include a blank line between `/>` and the next `---` separator
- Never use `&quot;` — use double quotes inside the JSON array

---

## Content Slides

### Preferred Archetypes

- Capability reveal
- Workflow before/after
- Architecture breakdown
- Tool comparison with constraints
- Sequence/flow slide
- Operational demo framing
- Metrics and impact

### Avoid

- Abstract strategy language without concrete workflow evidence
- Long instructional walkthroughs better suited for workshop decks
- Executive ROI framing as the primary narrative

---

## Recipe Integration

Tech talks should also load `deck.recipe.yml` when present. The recipe controls per-talk framing and emphasis, but this profile controls the visual system and the allowed archetype family.