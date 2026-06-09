# Exec-Talk Profile

Use this profile when generating `slides/exec-talks/*.md` from content under `exec-talks/`.

## Purpose

Exec-talk decks are strategic narratives for decision-makers. They should frame business outcomes, operating implications, and action clarity.

- Audience: C-level leaders, VPs, and business/technology decision-makers
- Tone: concise, credible, strategic
- Goal: support informed executive decisions with practical next actions

## Visual System

- Base canvas: `bg-[#101411]` with neutral surfaces (`#232925`, gray scale)
- Primary accent: Copilot Purple (`#8534F3`, `#B870FF`) for strategic emphasis
- Secondary accent: GitHub Green (`#0FBF3E`, `#238636`) for outcomes and confidence
- Progression: neutral framing → purple strategic emphasis → green execution emphasis

## Title Slide

Use a raw HTML title slide with restrained Primer accents.

```html
<!-- SLIDE: Title -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-[#101411]"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#8534F3]/20 to-[#0FBF3E]/10 rounded-full blur-3xl"></div>
<div class="relative z-10 w-72 h-20 flex items-center justify-center">
<!-- Replace this div with an <img src="./your-logo.png" class="w-72 relative" alt="Your Logo" /> once you have a logo asset -->
<span class="text-4xl opacity-40">◈</span>
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-[#8534F3] to-[#B870FF] bg-clip-text text-transparent relative z-10">{TITLE}</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-[#8534F3]/20 border border-[#8534F3]/40 rounded-full text-white text-xl font-medium">{SUBTITLE}</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">{TAGLINE}</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-[#8534F3] to-transparent rounded-full relative z-10"></div>
</div>
<div class="abs-br m-6 flex gap-2"><span class="text-sm opacity-50">{FOOTER_TEXT}</span></div>
```

## Required Opening Flow

Default sequence:

1. Title
2. Strategic context / why now
3. Decision framework or agenda

## Preferred Slide Archetypes

Use these heavily for exec-talk decks:

- Strategic context and market timing
- Value model and measurable outcomes
- Risk, governance, and control model
- Operating model changes and accountability
- Recommended decisions and sequencing
- What leaders can do this quarter

## Avoid

- Low-level implementation details as primary narrative
- Overly technical command-by-command walkthroughs
- Busy color treatment that obscures decision clarity

## Closing Pattern

Default close sequence:

1. Decision Summary
2. What Leaders Can Do Next
3. References and Thank You
