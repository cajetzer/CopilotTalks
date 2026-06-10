<!--
  SectionOpenerSlide Styling Architecture:

  This component uses a three-layer styling approach that must be preserved:

  Layer 1: Layout & Structure (style.css)
    • Positioning: position: absolute, z-index
    • Layout: flex, flex-direction, justify-content, grid
    • Sizing: height, width, border-radius
    • Spacing: padding, margin, gap
    Example: .sv-section-opener-slide { position: relative; display: flex; }

  Layer 2: Typography & Effects (inline Tailwind utilities)
    • Sizing: text-5xl, font-bold, text-xs, text-xl
    • Grid layout: grid, grid-cols-3, gap-4
    • Spacing: p-4, mb, mt, px-8
    • Positioning: relative, absolute
    • Effects: bg-clip-text, text-transparent, rounded-lg, border, line-clamp
    Example: class="text-5xl font-bold" and class="grid grid-cols-3 gap-4"

  Layer 3: Dynamic Colors (Vue theme object)
    • colorThemes object with 4 complete color sets (one per partNumber)
    • Each part has distinct gradients and text colors
    • Applied via computed colors based on props.partNumber
    • Never hardcode colors in the template
    Example: colors.value.title → "from-cyan-300 via-blue-300 to-indigo-300"

  WHY THIS MATTERS:
  SectionOpener is the only component where title uses gradient text (text-5xl with
  bg-clip-text). Each of 4 parts needs distinct gradient colors that react to isDark.
  Using colorThemes ensures proper part-to-color mapping.

  DO NOT:
  - Move part colors to styles.css (breaks isDark reactivity and partNumber logic)
  - Add inline style="" attributes
  - Hardcode gradients in the template
-->

<script setup>
import { computed } from 'vue'
import { isDark } from '../useTheme'

const TITLE_MAX    = 40
const SUBTITLE_MAX = 120
const CARD_TITLE_MAX = 30
const CARD_BLURB_MAX = 75

const props = defineProps({
  partNumber: { type: Number, required: true },
  title:      { type: String, required: true },
  subtitle:   { type: String, required: true },
  cards:      { type: Array,  required: true }, // exactly 3: { icon, title, blurb }
  terminal:   { type: Object, required: true }, // { context, detail }
})

// Dev-tools warnings — build is pure Vite bundle so these only fire in browser
if (props.title?.length > TITLE_MAX)
  console.warn(`[SectionOpenerSlide] title too long (${props.title.length} chars, max ${TITLE_MAX}): "${props.title.slice(0, 40)}…"`)
if (props.subtitle?.length > SUBTITLE_MAX)
  console.warn(`[SectionOpenerSlide] subtitle too long (${props.subtitle.length} chars, max ${SUBTITLE_MAX}): "${props.subtitle.slice(0, 40)}…"`)
props.cards?.forEach((c, i) => {
  if (c.title?.length > CARD_TITLE_MAX)
    console.warn(`[SectionOpenerSlide] cards[${i}].title too long (${c.title.length} chars, max ${CARD_TITLE_MAX}): "${c.title}"`)
  if (c.blurb?.length > CARD_BLURB_MAX)
    console.warn(`[SectionOpenerSlide] cards[${i}].blurb too long (${c.blurb.length} chars, max ${CARD_BLURB_MAX}): "${c.blurb.slice(0, 40)}…"`)
})

const validationError = computed(() => {
  if (!props.partNumber || props.partNumber < 1 || props.partNumber > 4)
    return `[SectionOpenerSlide] ❌ partNumber must be 1–4 (got ${props.partNumber})`
  if (!props.cards || props.cards.length !== 3)
    return `[SectionOpenerSlide] ❌ cards must contain exactly 3 items (got ${props.cards?.length ?? 'none'})`
  if (!props.terminal?.context || !props.terminal?.detail)
    return `[SectionOpenerSlide] ❌ terminal prop must have { context, detail } strings`
  return null
})

// Color progression hardcoded by part number — not configurable per deck
// Part 1: cyan → blue → indigo
// Part 2: blue → indigo → purple
// Part 3: indigo → purple → pink
// Part 4: purple → pink → rose

const DARK_THEMES = [
  {
    ambientBg: 'from-gray-950/95 via-gray-900/95 to-black',
    orb: 'from-purple-500/10 via-emerald-500/10 to-transparent',
    pill: 'from-purple-700/50 to-emerald-700/50 border-purple-400/30 text-white',
    h1: 'from-purple-300 via-emerald-300 to-green-300',
    divider: 'via-purple-400/60',
    arrow: 'text-purple-300',
    subtitle: null,
    cards: [
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
    ],
  },
  {
    ambientBg: 'from-gray-950/95 via-gray-900/95 to-black',
    orb: 'from-green-500/10 via-purple-500/10 to-transparent',
    pill: 'from-emerald-700/50 to-purple-700/50 border-emerald-400/30 text-white',
    h1: 'from-emerald-300 via-purple-300 to-green-300',
    divider: 'via-emerald-400/60',
    arrow: 'text-emerald-300',
    subtitle: null,
    cards: [
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
    ],
  },
  {
    ambientBg: 'from-gray-950/95 via-gray-900/95 to-black',
    orb: 'from-violet-500/10 via-green-500/10 to-transparent',
    pill: 'from-violet-700/50 to-green-700/50 border-violet-400/30 text-white',
    h1: 'from-violet-300 via-green-300 to-emerald-300',
    divider: 'via-violet-400/60',
    arrow: 'text-violet-300',
    subtitle: null,
    cards: [
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
    ],
  },
  {
    ambientBg: 'from-gray-950/95 via-gray-900/95 to-black',
    orb: 'from-emerald-500/10 via-purple-500/10 to-transparent',
    pill: 'from-emerald-700/50 to-purple-700/50 border-emerald-400/30 text-white',
    h1: 'from-emerald-300 via-purple-300 to-violet-300',
    divider: 'via-emerald-400/60',
    arrow: 'text-emerald-300',
    subtitle: null,
    cards: [
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
      { bg: 'bg-gray-900/60', border: 'border-gray-700/60', title: 'text-white', blurb: 'text-gray-300' },
    ],
  },
]

const LIGHT_THEMES = [
  {
    ambientBg: 'from-white via-gray-100 to-gray-50',
    orb: 'from-purple-200/25 via-emerald-200/20 to-transparent',
    pill: 'from-purple-500 to-emerald-500 border-purple-300 text-white',
    h1: 'from-purple-700 via-emerald-700 to-green-700',
    divider: 'via-purple-400/60',
    arrow: 'text-purple-700',
    terminalArrow: 'text-purple-700',
    subtitle: 'text-gray-700',
    cards: [
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
    ],
  },
  {
    ambientBg: 'from-white via-gray-100 to-gray-50',
    orb: 'from-emerald-200/25 via-purple-200/20 to-transparent',
    pill: 'from-emerald-500 to-purple-500 border-emerald-300 text-white',
    h1: 'from-emerald-700 via-purple-700 to-green-700',
    divider: 'via-emerald-400/60',
    arrow: 'text-emerald-700',
    terminalArrow: 'text-emerald-700',
    subtitle: 'text-gray-700',
    cards: [
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
    ],
  },
  {
    ambientBg: 'from-white via-gray-100 to-gray-50',
    orb: 'from-violet-200/25 via-green-200/20 to-transparent',
    pill: 'from-violet-500 to-green-500 border-violet-300 text-white',
    h1: 'from-violet-700 via-green-700 to-emerald-700',
    divider: 'via-violet-400/60',
    arrow: 'text-violet-700',
    terminalArrow: 'text-violet-700',
    subtitle: 'text-gray-700',
    cards: [
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
    ],
  },
  {
    ambientBg: 'from-white via-gray-100 to-gray-50',
    orb: 'from-emerald-200/25 via-purple-200/20 to-transparent',
    pill: 'from-emerald-500 to-purple-500 border-emerald-300 text-white',
    h1: 'from-emerald-700 via-purple-700 to-violet-700',
    divider: 'via-emerald-400/60',
    arrow: 'text-emerald-700',
    terminalArrow: 'text-emerald-700',
    subtitle: 'text-gray-700',
    cards: [
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
      { bg: 'bg-white/80', border: 'border-gray-200', title: 'text-gray-900', blurb: 'text-gray-700' },
    ],
  },
]

const theme = computed(() => (isDark.value ? DARK_THEMES : LIGHT_THEMES)[props.partNumber - 1])
</script>

<template>
  <!-- Full-height centered container -->
  <div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
    <!-- Prop validation error — renders instead of content when props are wrong -->
    <div v-if="validationError" class="absolute inset-0 bg-red-950 flex flex-col items-center justify-center z-50 p-12">
      <div class="text-red-400 text-4xl mb-4">⛔</div>
      <div class="font-mono text-red-300 text-base text-center leading-relaxed max-w-2xl">{{ validationError }}</div>
    </div>
    <template v-else>
    <!-- Ambient gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br" :class="theme.ambientBg"></div>

    <!-- Animated blur orb (centered) -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r rounded-full blur-3xl" :class="theme.orb"></div>

    <!-- ===== CENTER CONTENT ===== -->
    <div class="relative z-10 flex flex-col items-center text-center">
      <!-- ===== PART PILL ===== -->
      <!-- Part number indicator -->
      <div class="mb-4 px-4 py-1.5 bg-gradient-to-r rounded-full border text-sm font-medium tracking-widest uppercase" :class="theme.pill">
        Part {{ partNumber }}
      </div>

      <!-- ===== SECTION TITLE ===== -->
      <!-- Main title with gradient text (larger size) -->
      <h1 class="!text-5xl !font-bold !mb-3 bg-gradient-to-r bg-clip-text text-transparent leading-tight" :class="theme.h1">
        {{ title }}
      </h1>

      <!-- ===== SECTION SUBTITLE ===== -->
      <!-- Supporting subtitle (smaller size) -->
      <h2 class="!text-2xl !font-normal !m-0 mb-6" :class="theme.subtitle ?? 'opacity-70'">
        {{ subtitle }}
      </h2>

      <!-- ===== DIVIDER ===== -->
      <!-- Decorative separator line -->
      <div class="w-24 h-0.5 bg-gradient-to-r from-transparent to-transparent mb-6" :class="theme.divider"></div>

      <!-- ===== CONTEXT CARDS ===== -->
      <!-- Three supporting context cards -->
      <div class="grid grid-cols-3 gap-3 text-sm max-w-3xl">
        <!-- Context card -->
        <div v-for="(card, i) in cards" :key="i" class="px-4 py-3 rounded-xl border" :class="[theme.cards[i].bg, theme.cards[i].border]">
          <!-- Card icon -->
          <div class="text-2xl mb-1">
            {{ card.icon }}
          </div>

          <!-- Card title -->
          <div class="font-semibold" :class="theme.cards[i].title">
            {{ card.title }}
          </div>

          <!-- Card description -->
          <div class="text-xs mt-1" :class="theme.cards[i].blurb ?? 'opacity-70'">
            {{ card.blurb }}
          </div>
        </div>
      </div>

      <!-- ===== TERMINAL CONTEXT ===== -->
      <!-- Terminal/console-style context box -->
      <div class="mt-5 font-mono text-xs bg-gray-950/90 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
        <!-- Context line (before state) -->
        <span class="text-gray-300">
          {{ terminal.context }}
        </span>
        <!-- Arrow pointer + detail line (after state) -->
        <br />
        <span class="mt-1 block" :class="theme.terminalArrow ?? theme.arrow">
          ↳ {{ terminal.detail }}
        </span>
      </div>
    </div>
    </template>
  </div>
</template>
