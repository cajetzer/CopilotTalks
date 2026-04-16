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
import { isDark } from './useTheme'

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
    validator: (val) => {
      if (val.length !== 6) {
        console.error('[CoreQuestionSlide] ❌ cards must contain exactly 6 items (got ' + val.length + ')')
        return false
      }
      return true
    },
  },
})

// Overflow guards — limits: question ≤100, subtext+highlight ≤160, title ≤40, description ≤90
if (props.question.length > 100) {
  console.warn('[CoreQuestionSlide] ⚠️ question is ' + props.question.length + ' chars (limit: 100). Risk of overflow.')
}
const subtextLen = (props.subtext + ' ' + props.highlight).length
if (subtextLen > 160) {
  console.warn('[CoreQuestionSlide] ⚠️ subtext+highlight is ' + subtextLen + ' chars (limit: 160). Risk of overflow.')
}
props.cards.forEach((card, i) => {
  if ((card.title?.length ?? 0) > 40) {
    console.warn('[CoreQuestionSlide] ⚠️ cards[' + i + '].title is ' + card.title.length + ' chars (limit: 40). Risk of overflow.')
  }
  if ((card.description?.length ?? 0) > 90) {
    console.warn('[CoreQuestionSlide] ⚠️ cards[' + i + '].description is ' + card.description.length + ' chars (limit: 90). Risk of overflow.')
  }
})

// Card styles (row 1: prominent /30, row 2: muted /20)
const DARK_CARD_STYLES = [
  { bg: 'from-cyan-900/30 to-blue-900/30',     border: 'border-cyan-500/30',   title: 'text-cyan-300'   },
  { bg: 'from-blue-900/30 to-indigo-900/30',   border: 'border-blue-500/30',   title: 'text-blue-300'   },
  { bg: 'from-indigo-900/30 to-purple-900/30', border: 'border-indigo-500/30', title: 'text-indigo-300' },
  { bg: 'from-cyan-900/20 to-teal-900/20',     border: 'border-teal-500/20',   title: 'text-teal-400'   },
  { bg: 'from-blue-900/20 to-cyan-900/20',     border: 'border-blue-500/20',   title: 'text-blue-400'   },
  { bg: 'from-purple-900/20 to-indigo-900/20', border: 'border-purple-500/20', title: 'text-purple-400' },
]
const LIGHT_CARD_STYLES = [
  { bg: 'from-cyan-100/80 to-blue-100/80',     border: 'border-cyan-300',   title: 'text-cyan-700'   },
  { bg: 'from-blue-100/80 to-indigo-100/80',   border: 'border-blue-300',   title: 'text-blue-700'   },
  { bg: 'from-indigo-100/80 to-purple-100/80', border: 'border-indigo-300', title: 'text-indigo-700' },
  { bg: 'from-cyan-50/80 to-teal-50/80',       border: 'border-teal-200',   title: 'text-teal-600'   },
  { bg: 'from-blue-50/80 to-cyan-50/80',       border: 'border-blue-200',   title: 'text-blue-600'   },
  { bg: 'from-purple-50/80 to-indigo-50/80',   border: 'border-purple-200', title: 'text-purple-600' },
]

// Structural/ambient theme classes
const DARK_THEME = {
  ambientBg:    'from-cyan-900/20 via-blue-900/10 to-transparent',
  orb:          'from-cyan-500/10 to-transparent',
  pill:         'from-cyan-600/80 to-blue-600/80',
  divider:      'from-cyan-400/60 to-transparent',
  questionCard: 'from-cyan-900/30 to-blue-900/30 border-cyan-500/30',
  questionText: 'text-cyan-200',
  highlight:    'text-cyan-300',
}
const LIGHT_THEME = {
  ambientBg:    'from-cyan-100/40 via-blue-50/20 to-transparent',
  orb:          'from-cyan-200/30 to-transparent',
  pill:         'from-cyan-500 to-blue-500',
  divider:      'from-cyan-300/60 to-transparent',
  questionCard: 'from-cyan-50/80 to-blue-50/80 border-cyan-300',
  questionText: 'text-cyan-800',
  highlight:    'text-cyan-600',
}

const cardStyles = computed(() => isDark.value ? DARK_CARD_STYLES : LIGHT_CARD_STYLES)
const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)
</script>

<template>
  <!-- Full-height container with flex column layout -->
  <div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
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
        <div class="text-base opacity-90 line-clamp-2">
          <span>{{ subtext }} </span>
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
        <div class="relative text-[10px] leading-tight opacity-70 line-clamp-3">
          {{ card.description }}
        </div>
      </div>
    </div>
  </div>
</template>
