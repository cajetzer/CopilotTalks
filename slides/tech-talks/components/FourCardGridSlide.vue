<!--
  FourCardGridSlide

  2×2 grid of cards using the section's full card palette (4 styles).
  Each card: icon + title + 1-2 line description.
  Optional bottom insight bar.

  Use for taxonomies of 4 (capabilities, agent types, focus areas).
-->

<script setup>
import { computed } from 'vue'
import { isDark } from './useTheme'
import { useSectionChrome, useSectionCards } from './useSectionTheme'

const props = defineProps({
  partNumber: { type: Number, required: true },
  pillIcon:   { type: String, required: true },
  pillLabel:  { type: String, required: true },
  title:      { type: String, required: true },
  cards:      { type: Array,  required: true }, // exactly 4: { icon, title, description }
  insight:    { type: Object, required: false, default: null },
  progressDots: { type: Object, required: true },
})

const validationError = computed(() => {
  if (!props.partNumber || props.partNumber < 1 || props.partNumber > 4)
    return `[FourCardGridSlide] ❌ partNumber must be 1–4 (got ${props.partNumber})`
  if (!props.cards || props.cards.length !== 4)
    return `[FourCardGridSlide] ❌ cards must contain exactly 4 items (got ${props.cards?.length ?? 'none'})`
  return null
})

const chrome    = useSectionChrome(() => props.partNumber)
const cardStyle = useSectionCards(() => props.partNumber)

// Prop length limits — read by build-all.ps1 for static lint enforcement
const CARDS_MAX      = 4   // cards array must be exactly 4 items
const TITLE_MAX      = 80
const CARD_TITLE_MAX = 40
const DESC_MAX       = 100
props.cards?.forEach((c, i) => {
  if (c.title?.length > CARD_TITLE_MAX)
    console.warn(`[FourCardGridSlide] cards[${i}].title is ${c.title.length} chars (max ${CARD_TITLE_MAX}): "${c.title}"`)
  if (c.description?.length > DESC_MAX)
    console.warn(`[FourCardGridSlide] cards[${i}].description is ${c.description.length} chars (max ${DESC_MAX}): "${c.description.slice(0, 50)}…"`)
})

const DARK = {
  title: 'text-white',
  description: 'text-white/80',
  insight: 'bg-gray-900/50 border-gray-700/50 text-gray-200',
}
const LIGHT = {
  title: 'text-gray-900',
  description: 'text-gray-700',
  insight: 'bg-gray-100/80 border-gray-200 text-gray-800',
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

    <div class="relative z-10 flex items-center gap-3 mb-4">
      <span class="px-4 py-1 bg-gradient-to-r border rounded-full text-xs font-semibold tracking-wide shadow-lg" :class="[chrome.pill, chrome.pillText]">
        {{ pillIcon }} {{ pillLabel }}
      </span>
      <div class="flex-1 h-px bg-gradient-to-r from-transparent to-transparent" :class="chrome.divider"></div>
      <div class="flex items-center gap-2">
        <div v-for="n in progressDots.total" :key="n"
          class="w-2 h-2 rounded-full"
          :class="n === progressDots.current ? progressDots.activeColor : 'bg-white/20'">
        </div>
        <span class="text-white/40 text-xs ml-1">{{ progressDots.current }} of {{ progressDots.total }}</span>
      </div>
    </div>

    <div class="relative z-10 mb-4">
      <div class="text-2xl font-bold" :class="t.title">{{ title }}</div>
    </div>

    <div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
      <div class="grid grid-cols-2 grid-rows-2 gap-4 flex-1 min-h-0">
        <div v-for="(card, i) in cards" :key="'c-' + i" class="p-5 rounded-xl border overflow-hidden flex flex-col" :class="[cardStyle[i].bg, cardStyle[i].border]">
          <div class="text-3xl mb-2">{{ card.icon }}</div>
          <div class="font-bold text-lg mb-2" :class="cardStyle[i].title">{{ card.title }}</div>
          <div class="text-sm" :class="t.description">{{ card.description }}</div>
        </div>
      </div>

      <div v-if="insight" class="rounded-lg border px-4 py-2 text-sm" :class="t.insight">
        <span class="mr-2">{{ insight.icon }}</span>{{ insight.text }}
      </div>
    </div>
    </template>
  </div>
</template>
