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
import { useSectionChrome, useSectionCards, validatePartNumber } from './useSectionTheme'

const props = defineProps({
  partNumber:   { type: Number, required: true },
  pillIcon:     { type: String, required: true },
  pillLabel:    { type: String, required: true },
  title:        { type: String, required: true },
  subtitle:     { type: String, required: false, default: '' },
  hero:         { type: Object, required: true },  // { value, label, source? }
  supporting:   { type: Array,  required: true },  // 2–4: { icon?, title, description }
  insight:      { type: Object, required: false, default: null },
  progressDots: { type: Object, required: false, default: null },
})

validatePartNumber(props.partNumber, 'HeroStatSlide')
if (props.supporting.length < 2 || props.supporting.length > 4) {
  console.error('[HeroStatSlide] ❌ supporting must contain 2–4 items (got ' + props.supporting.length + ')')
}

const chrome    = useSectionChrome(() => props.partNumber)
const cardStyle = useSectionCards(() => props.partNumber)

// Hero number gradient follows section color progression
const HERO_GRADIENTS_DARK  = ['from-cyan-400 to-blue-400', 'from-blue-400 to-indigo-400', 'from-indigo-400 to-purple-400', 'from-purple-400 to-pink-400']
const HERO_GRADIENTS_LIGHT = ['from-cyan-600 to-blue-600', 'from-blue-600 to-indigo-600', 'from-indigo-600 to-purple-600', 'from-purple-600 to-pink-600']

const heroGradient = computed(() => {
  const idx = Math.min(Math.max(props.partNumber - 1, 0), 3)
  return (isDark.value ? HERO_GRADIENTS_DARK : HERO_GRADIENTS_LIGHT)[idx]
})

const DARK = {
  title:      'text-white',
  subtitle:   'text-gray-400',
  heroLabel:  'text-white/70',
  heroSource: 'text-white/40',
  cardDesc:   'text-white/70',
  insight:    'bg-gray-900/50 border-gray-700/50 text-gray-200',
  dotInactive: 'bg-white/30',
  dotActive:   'bg-white',
}
const LIGHT = {
  title:      'text-gray-900',
  subtitle:   'text-gray-500',
  heroLabel:  'text-gray-600',
  heroSource: 'text-gray-400',
  cardDesc:   'text-gray-700',
  insight:    'bg-gray-100/80 border-gray-200 text-gray-800',
  dotInactive: 'bg-gray-400/50',
  dotActive:   'bg-gray-700',
}
const t = computed(() => isDark.value ? DARK : LIGHT)
</script>

<template>
  <div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
    <div class="absolute inset-0 bg-gradient-to-br" :class="chrome.ambientBg"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl" :class="chrome.orb"></div>

    <!-- Pill breadcrumb + divider -->
    <div class="relative z-10 flex items-center gap-3 mb-4">
      <span class="px-4 py-1 bg-gradient-to-r border rounded-full text-xs font-semibold tracking-wide shadow-lg" :class="[chrome.pill, chrome.pillText]">
        {{ pillIcon }} {{ pillLabel }}
      </span>
      <div class="flex-1 h-px bg-gradient-to-r from-transparent to-transparent" :class="chrome.divider"></div>
    </div>

    <!-- Title + optional subtitle -->
    <div class="relative z-10 mb-3">
      <div class="text-lg font-bold" :class="t.title">{{ title }}</div>
      <div v-if="subtitle" class="text-sm mt-0.5" :class="t.subtitle">{{ subtitle }}</div>
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
          <div v-if="hero.source" class="mt-3 text-xs italic text-center" :class="t.heroSource">{{ hero.source }}</div>
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

      <!-- Optional insight bar -->
      <div v-if="insight" class="rounded-lg border px-4 py-2 text-sm" :class="t.insight">
        <span v-if="insight.icon" class="mr-2">{{ insight.icon }}</span>{{ insight.text }}
      </div>

      <!-- Progress dots -->
      <div v-if="progressDots" class="flex justify-center gap-2 pb-1">
        <div
          v-for="n in progressDots.total" :key="n"
          class="w-2 h-2 rounded-full transition-all"
          :class="n === progressDots.current ? t.dotActive : t.dotInactive"
        ></div>
      </div>
    </div>
  </div>
</template>
