<!--
  HeroStatSlide

  Layer 1 (style.css):    none added — layout uses Tailwind grid
  Layer 2 (Tailwind):     grid-cols-2, gap, padding, font sizes, rounded, border
  Layer 3 (Vue theme):
    • Section-tinted CHROME via useSectionChrome(partNumber): ambient bg, orb, pill, divider
    • Hero number gradient: section-matched (cyan/blue → blue/indigo → indigo/purple → purple/pink)
    • Supporting card palette via useSectionCards(partNumber)

  Use when: one oversized statistic earns attention, supporting cards contextualize it.
  The stat (left) dominates visual weight; 2–4 cards (right) explain what lives behind the number.

  Distinct from TwoStatContrastSlide (dual-stat, no supporting cards) and FourCardGridSlide
  (2×2 taxonomy grid with no hero number).

  DO NOT:
  - Pass any color/style/class prop
  - Use for slides without a dominant single statistic (use FourCardGridSlide instead)
-->

<script setup>
import { computed } from 'vue'
import { isDark } from './useTheme'
import { useSectionChrome, useSectionCards } from './useSectionTheme'

const props = defineProps({
  partNumber:   { type: Number, required: true },
  pillIcon:     { type: String, required: true },
  pillLabel:    { type: String, required: true },
  title:        { type: String, required: true },
  subtitle:     { type: String, required: true },
  hero:         { type: Object, required: true },  // { value, label, source }
  supporting:   { type: Array,  required: true },  // 2–4: { icon, title, description }
  insight:      { type: Object, required: true },  // { icon, text }
  progressDots: { type: Object, required: true },  // { current, total, activeColor } — activeColor is a Tailwind class string, e.g. 'bg-cyan-400 shadow-lg shadow-cyan-500/50'
})

const validationError = computed(() => {
  if (!props.partNumber || props.partNumber < 1 || props.partNumber > 4)
    return `[HeroStatSlide] ❌ partNumber must be 1–4 (got ${props.partNumber})`
  if (!props.supporting || props.supporting.length < 2 || props.supporting.length > 4)
    return `[HeroStatSlide] ❌ supporting must contain 2–4 items (got ${props.supporting?.length ?? 'none'})`
  return null
})

const chrome    = useSectionChrome(() => props.partNumber)
const cardStyle = useSectionCards(() => props.partNumber)

const HERO_GRADIENTS_DARK  = ['from-cyan-400 to-blue-400', 'from-blue-400 to-indigo-400', 'from-indigo-400 to-purple-400', 'from-purple-400 to-pink-400']
const HERO_GRADIENTS_LIGHT = ['from-cyan-600 to-blue-600', 'from-blue-600 to-indigo-600', 'from-indigo-600 to-purple-600', 'from-purple-600 to-pink-600']

const heroGradient = computed(() => {
  const idx = Math.min(Math.max(props.partNumber - 1, 0), 3)
  return (isDark.value ? HERO_GRADIENTS_DARK : HERO_GRADIENTS_LIGHT)[idx]
})

// Prop length limits — read by build-all.ps1 for static lint enforcement
const TITLE_MAX = 80
const CARD_TITLE_MAX = 40
const DESC_MAX = 100
props.supporting?.forEach((s, i) => {
  if (s.title?.length > CARD_TITLE_MAX)
    console.warn(`[HeroStatSlide] supporting[${i}].title is ${s.title.length} chars (max ${CARD_TITLE_MAX}): "${s.title}"`)
  if (s.description?.length > DESC_MAX)
    console.warn(`[HeroStatSlide] supporting[${i}].description is ${s.description.length} chars (max ${DESC_MAX}): "${s.description.slice(0, 50)}…"`)
})

const DARK = {
  title:      'text-white',
  subtitle:   'text-gray-400',
  heroLabel:  'text-white/70',
  heroSource: 'text-white/40',
  cardDesc:   'text-white/70',
  insight:    'bg-gray-900/50 border-gray-700/50 text-gray-200',
}
const LIGHT = {
  title:      'text-gray-900',
  subtitle:   'text-gray-500',
  heroLabel:  'text-gray-600',
  heroSource: 'text-gray-400',
  cardDesc:   'text-gray-700',
  insight:    'bg-gray-100/80 border-gray-200 text-gray-800',
}
const t = computed(() => isDark.value ? DARK : LIGHT)
</script>

<template>
  <div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
    <div v-if="validationError" class="absolute inset-0 bg-red-950 flex flex-col items-center justify-center z-50 p-12">
      <div class="text-red-400 text-4xl mb-4">⛔</div>
      <div class="font-mono text-red-300 text-base text-center leading-relaxed max-w-2xl">{{ validationError }}</div>
    </div>
    <template v-else>
    <div class="absolute inset-0 bg-gradient-to-br" :class="chrome.ambientBg"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl" :class="chrome.orb"></div>

    <!-- Pill breadcrumb + dots (top right) -->
    <div class="relative z-10 flex items-center gap-3 mb-4">
      <span class="px-4 py-1 bg-gradient-to-r border rounded-full text-xs font-semibold tracking-wide shadow-lg" :class="[chrome.pill, chrome.pillText]">
        {{ pillIcon }} {{ pillLabel }}
      </span>
      <div class="flex-1 h-px bg-gradient-to-r from-transparent to-transparent" :class="chrome.divider"></div>
      <div class="flex items-center gap-2">
        <div
          v-for="n in progressDots.total" :key="n"
          class="w-2 h-2 rounded-full"
          :class="n === progressDots.current ? progressDots.activeColor : 'bg-white/20'"
        ></div>
        <span class="text-white/40 text-xs ml-1">{{ progressDots.current }} of {{ progressDots.total }}</span>
      </div>
    </div>

    <!-- Title + subtitle -->
    <div class="relative z-10 mb-3">
      <div class="text-lg font-bold" :class="t.title">{{ title }}</div>
      <div class="text-sm mt-0.5" :class="t.subtitle">{{ subtitle }}</div>
    </div>

    <!-- Body: hero stat left, cards right -->
    <div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
      <div class="grid grid-cols-2 gap-6 flex-1 min-h-0">

        <!-- Left: hero number -->
        <div class="flex flex-col justify-center items-center">
          <div class="text-8xl font-black bg-gradient-to-r bg-clip-text text-transparent mb-2 leading-none" :class="heroGradient">
            {{ hero.value }}
          </div>
          <div class="text-sm text-center max-w-xs" :class="t.heroLabel">{{ hero.label }}</div>
          <div class="mt-3 text-xs italic text-center" :class="t.heroSource">{{ hero.source }}</div>
        </div>

        <!-- Right: supporting cards -->
        <div class="flex flex-col justify-center gap-3 text-xs">
          <div
            v-for="(card, i) in supporting" :key="'s-' + i"
            class="p-3 rounded-lg border"
            :class="[cardStyle[i].bg, cardStyle[i].border]"
          >
            <div class="font-semibold mb-1" :class="cardStyle[i].title">
              <span v-if="card.icon" class="mr-1">{{ card.icon }}</span>{{ card.title }}
            </div>
            <div :class="t.cardDesc">{{ card.description }}</div>
          </div>
        </div>
      </div>

      <!-- Insight bar -->
      <div class="rounded-lg border px-4 py-2 text-sm" :class="t.insight">
        <span class="mr-2">{{ insight.icon }}</span>{{ insight.text }}
      </div>
    </div>
    </template>
  </div>
</template>
