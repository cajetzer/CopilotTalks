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

## Title Slide

Use the shared component for slide 1.

```html
<script setup>
import TitleSlide from './components/TitleSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
title="{TITLE}"
subtitle="{SUBTITLE}"
tagline="{TAGLINE}"
meta="{FOOTER_TEXT}"
/>
```

Do not inline the legacy raw HTML hero for tech talks unless the user explicitly asks for a custom variant.

## Required Opening Flow

Default sequence:

1. Title
2. Context slide: usually `The Opportunity`, the core question, or a capability shift
3. TOC if the deck has multiple major sections

## Preferred Slide Archetypes

Use these heavily for tech talks:

- Capability reveal
- Workflow before/after
- Architecture breakdown
- Tool comparison with constraints
- Sequence/flow slide
- Operational demo framing
- Metrics and impact
- References to primary docs

## Avoid

- Abstract strategy language without concrete workflow evidence
- Long instructional walkthroughs better suited for workshop decks
- Executive ROI framing as the primary narrative

## Closing Pattern

Use this close sequence unless the recipe says otherwise:

1. What You Can Do Today
2. References
3. Thank You

For the References slide, use the shared component:

```html
<script setup>
import ReferencesSlide from './components/ReferencesSlide.vue'
</script>

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

**Notes on the groups prop:**
- Use `href` for external links (renders as `<a>`); omit `href` for cross-references to other talks (renders as styled `<span>`)
- `color` accepts: `cyan`, `purple`, `blue`, `indigo`, `green`, `pink`, `orange`, `rose`, `amber`, `teal`
- Apostrophes inside item strings must be escaped as `&#39;` (the outer attribute uses single quotes)
- Always include blank line between `/>` and the next `---` separator

For the final slide, use the shared component:

```html
<script setup>
import ThankYouSlide from './components/ThankYouSlide.vue'
</script>

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

## Recipe Integration

Tech talks should also load `deck.recipe.yml` when present. The recipe controls per-talk framing and emphasis, but this profile controls the visual system and the allowed archetype family.