<!--
  CoreQuestionSlide Styling Architecture:

  This component uses a three-layer styling approach that must be preserved:

  Layer 1: Layout & Structure (style.css)
    • Positioning: position: absolute, z-index, inset
    • Layout: flex, flex-direction, justify-content
    • Sizing: width, height, border-radius
    • Spacing: margin, padding, gap
    Example: .sv-core-question-slide { position: relative; display: flex; }

  Layer 2: Typography & Effects (inline Tailwind utilities)
    • Sizing: text-2xl, font-bold, text-xs, text-5xl
    • Effects: shadow-lg, rounded-lg, border, overflow
    • Grid layout: grid, grid-cols-3, gap-4
    • Positioning: relative, absolute
    Example: class="grid grid-cols-3 gap-4" and class="text-2xl font-bold"

  Layer 3: Dynamic Colors (Vue theme object)
    • DARK_CARD_STYLES and LIGHT_CARD_STYLES for per-card colors
    • DARK_THEME and LIGHT_THEME for structural colors (pill, divider, text)
    • Applied via :class for dark/light switching
    • Never hardcode colors in the template
    Example: :class="cardStyles[i].bg" → "from-cyan-900/30 to-blue-900/30"

  WHY THIS MATTERS:
  The card styles and theme colors must be computed properties so they react
  to isDark changes. This is why we define DARK_CARD_STYLES and LIGHT_CARD_STYLES
  as separate arrays, not single CSS classes.

  DO NOT:
  - Move card colors to styles.css (breaks isDark reactivity)
  - Add inline style="" attributes
  - Hardcode color class strings like "bg-cyan-900/30" in the template
-->

<script setup>
import { computed } from 'vue'
import { isDark } from '../useTheme'

const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  subtext: {
    type: String,
    required: true,
  },
  highlight: {
    type: String,
    required: true,
  },
  cards: {
    type: Array,
    required: true,
    validator: (val) => val.length === 6,
  },
})

// Prop length limits — read by build-all.ps1 for static lint enforcement
const CARD_TITLE_MAX = 40
const DESC_MAX       = 90

const validationError = computed(() => {
  if (!props.cards || props.cards.length !== 6)
    return `[CoreQuestionSlide] ❌ cards must contain exactly 6 items (got ${props.cards?.length ?? 'none'})`
  return null
})

props.cards?.forEach((c, i) => {
  if (c.title?.length > CARD_TITLE_MAX)
    console.warn(`[CoreQuestionSlide] cards[${i}].title too long (${c.title.length} chars, max ${CARD_TITLE_MAX}): "${c.title}"`)
  if (c.description?.length > DESC_MAX)
    console.warn(`[CoreQuestionSlide] cards[${i}].description too long (${c.description.length} chars, max ${DESC_MAX}): "${c.description.slice(0, 50)}…"`)
})

const DARK_CARD_STYLES = [
  { bg: 'from-[#232925]/70 to-[#232925]/50', border: 'border-[#8534F3]/30', title: 'text-[#B870FF]', desc: 'text-[#c9d1d9]' },
  { bg: 'from-[#232925]/70 to-[#232925]/50', border: 'border-[#238636]/30', title: 'text-[#0FBF3E]', desc: 'text-[#c9d1d9]' },
  { bg: 'from-[#232925]/70 to-[#232925]/50', border: 'border-[#B870FF]/30', title: 'text-[#B870FF]', desc: 'text-[#c9d1d9]' },
  { bg: 'from-[#232925]/70 to-[#232925]/50', border: 'border-[#0FBF3E]/30', title: 'text-[#0FBF3E]', desc: 'text-[#c9d1d9]' },
  { bg: 'from-[#232925]/70 to-[#232925]/50', border: 'border-[#8534F3]/20', title: 'text-[#B870FF]', desc: 'text-[#c9d1d9]' },
  { bg: 'from-[#232925]/70 to-[#232925]/50', border: 'border-[#238636]/20', title: 'text-[#0FBF3E]', desc: 'text-[#c9d1d9]' },
]
const LIGHT_CARD_STYLES = [
  { bg: 'from-white/90 to-gray-100/80', border: 'border-purple-200', title: 'text-purple-700', desc: 'text-gray-700' },
  { bg: 'from-white/90 to-gray-100/80', border: 'border-emerald-200', title: 'text-emerald-700', desc: 'text-gray-700' },
  { bg: 'from-white/90 to-gray-100/80', border: 'border-violet-200', title: 'text-violet-700', desc: 'text-gray-700' },
  { bg: 'from-white/90 to-gray-100/80', border: 'border-green-200', title: 'text-green-700', desc: 'text-gray-700' },
  { bg: 'from-white/90 to-gray-100/80', border: 'border-purple-100', title: 'text-purple-600', desc: 'text-gray-700' },
  { bg: 'from-white/90 to-gray-100/80', border: 'border-emerald-100', title: 'text-emerald-600', desc: 'text-gray-700' },
]

// Structural/ambient theme classes
const DARK_THEME = {
  ambientBg:    'from-[#101411] via-[#101411] to-black',
  orb:          'from-[#43179E]/15 via-[#238636]/8 to-transparent',
  pill:         'from-[#43179E]/80 to-[#238636]/80',
  divider:      'from-[#8534F3]/60 to-transparent',
  questionCard: 'from-[#232925]/70 to-[#232925]/50 border-[#8534F3]/30',
  questionText: 'text-white',
  subtext:      'text-[#c9d1d9]',
  highlight:    'text-[#0FBF3E]',
}
const LIGHT_THEME = {
  ambientBg:    'from-white via-gray-100 to-gray-50',
  orb:          'from-purple-200/25 via-emerald-200/20 to-transparent',
  pill:         'from-purple-500 to-emerald-500',
  divider:      'from-purple-300/60 to-transparent',
  questionCard: 'from-white/90 to-gray-100/80 border-purple-200',
  questionText: 'text-gray-900',
  subtext:      'text-gray-700',
  highlight:    'text-emerald-700',
}

const cardStyles = computed(() => isDark.value ? DARK_CARD_STYLES : LIGHT_CARD_STYLES)
const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)
</script>

<template>
  <!-- Full-height container with flex column layout -->
  <div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
    <div v-if="validationError" class="absolute inset-0 bg-red-950 flex flex-col items-center justify-center z-50 p-12">
      <div class="text-red-400 text-4xl mb-4">⛔</div>
      <div class="font-mono text-red-300 text-base text-center leading-relaxed max-w-2xl">{{ validationError }}</div>
    </div>
    <template v-else>
    <!-- Ambient gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br" :class="t.ambientBg"></div>

    <!-- Animated blur orb in top-right -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl" :class="t.orb"></div>

    <!-- Header pill and divider line -->
    <div class="relative z-10 flex items-center gap-3 mb-4">
      <span class="px-4 py-1 bg-gradient-to-r rounded-full text-white text-xs font-semibold tracking-wide shadow-lg" :class="t.pill">
        🤔 The Core Question
      </span>
      <div class="flex-1 h-px bg-gradient-to-r" :class="t.divider"></div>
    </div>

    <!-- Central question card -->
    <div class="relative z-10">
      <div class="p-6 bg-gradient-to-br rounded-xl border max-w-4xl mx-auto mb-5" :class="t.questionCard">
        <!-- Question text in quotes -->
        <div class="text-2xl font-bold mb-3 line-clamp-2" :class="t.questionText">
          "{{ question }}"
        </div>
        <!-- Subtext + highlighted phrase -->
        <div class="text-base line-clamp-3" :class="t.subtext">
          <span>{{ subtext }}</span>
          <br />
          <span class="font-semibold" :class="t.highlight">{{ highlight }}</span>
        </div>
      </div>
    </div>

    <!-- Six supporting context cards (3x2 grid) -->
    <div class="relative z-10 grid grid-cols-3 gap-4 text-sm">
      <div
        v-for="(card, i) in cards"
        :key="i"
        class="relative p-4 bg-gradient-to-br rounded-lg border overflow-hidden"
        :class="[cardStyles[i].bg, cardStyles[i].border]"
      >
        <!-- Large icon watermark (background) -->
        <div class="absolute bottom-1 right-2 text-5xl opacity-10 select-none pointer-events-none leading-none">
          {{ card.icon }}
        </div>
        <!-- Card title -->
        <div class="relative text-xs font-semibold mb-1 line-clamp-2" :class="cardStyles[i].title">
          {{ card.title }}
        </div>
        <!-- Card description -->
        <div class="relative text-[10px] leading-tight line-clamp-3" :class="cardStyles[i].desc">
          {{ card.description }}
        </div>
      </div>
    </div>
    </template>
  </div>
</template>
