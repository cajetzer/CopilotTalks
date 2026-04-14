# Exec-Talk Profile

Use this profile when generating `slides/exec-talks/*.md` from content under `exec-talks/`.

## Purpose

Executive talks are decision-making decks. They should communicate strategic value, operating model implications, risk, and investment posture.

- Audience: executives, directors, transformation leads, enterprise stakeholders
- Tone: concise, strategic, credible
- Goal: clarify business implications and recommended action, not teach implementation details

## Visual System

- Primary gradient: `from-blue-400 via-cyan-400 to-green-400`
- Background gradient: `from-blue-900/20 via-cyan-900/10 to-green-900/20`
- Pill/accent gradient: `from-blue-600/80 to-cyan-600/80`
- Progression: blue → cyan → green

## Title Slide

Use a raw HTML title slide with the exec-talk color system.

```html
<!-- SLIDE: Title -->
<div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-green-900/20"></div>
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-green-500/20 rounded-full blur-3xl"></div>
<div class="relative z-10">
<div class="absolute inset-0 blur-2xl opacity-50"><img src="./sdp-logo.png" class="w-64" alt="" /></div>
<img src="./sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
</div>
<h1 class="!text-5xl !font-bold !mt-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent relative z-10">{TITLE}</h1>
<div class="mt-4 relative z-10">
<span class="px-6 py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-full text-white text-xl font-medium shadow-lg shadow-blue-500/25">{SUBTITLE}</span>
</div>
<div class="mt-8 text-lg opacity-70 relative z-10">{TAGLINE}</div>
<div class="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full relative z-10"></div>
</div>
<div class="abs-br m-6 flex gap-2"><span class="text-sm opacity-50">{FOOTER_TEXT}</span></div>
```

## Required Opening Flow

Default sequence:

1. Title
2. Strategic context or market shift
3. TOC or decision framework

## Preferred Slide Archetypes

Use these heavily for exec talks:

- Why now / market shift
- Business value model
- Risk and governance framing
- Operating model transformation
- Capability maturity or adoption stages
- Investment tradeoff slide
- Recommended actions for leadership

## Avoid

- Low-level implementation details
- Dense code or tool-specific command examples
- Workshop-style exercise framing

## Closing Pattern

Default close sequence:

1. What Leaders Can Do Next
2. Strategic References or Sources
3. Thank You