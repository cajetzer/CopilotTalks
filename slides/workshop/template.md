# Workshop Profile

Use this profile when generating `slides/workshop/*.md` from content under `workshop/`.

## Purpose

Workshop decks are hands-on instructional assets. They should move participants through setup, framing, exercise execution, validation, and recap.

- Audience: practitioners in training sessions
- Tone: clear, practical, guided
- Goal: support delivery of a live learning module with concrete exercises and checkpoints

## Visual System

- Base canvas: `bg-[#101411]` with neutral surfaces (`#232925`, gray scale)
- Primary accent: Copilot Purple (`#8534F3`, `#B870FF`)
- Secondary accent: GitHub Green (`#0FBF3E`, `#238636`)
- Progression: purple emphasis → green emphasis → neutral close

## Title Slide

Use a raw HTML title slide with the Primer color system.

```html
<!-- SLIDE: Title -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-[#101411]"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#8534F3]/20 to-[#0FBF3E]/10 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-72" alt="" /></div>
<img src="./sdp-logo.png" class="w-72 relative" alt="SDP Logo" />
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
2. Objectives or module framing
3. Agenda / flow / exercise map

## Preferred Slide Archetypes

Use these heavily for workshop decks:

- Objectives and outcomes
- Demo setup / environment expectations
- Exercise framing
- Task instructions at slide level
- Validation checkpoints
- Common failure modes
- Debrief and recap
- Next module / next exercise

## Avoid

- Executive strategy framing as the main narrative
- Long market overviews
- Pure capability theater without learner action

## Closing Pattern

Default close sequence:

1. Key Takeaways
2. What to Practice Next
3. Next Module / Wrap-up