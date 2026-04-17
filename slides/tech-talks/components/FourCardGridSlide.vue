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
import { useSectionChrome, useSectionCards, validatePartNumber } from './useSectionTheme'

const props = defineProps({
  partNumber: { type: Number, required: true },
  pillIcon:   { type: String, required: true },
  pillLabel:  { type: String, required: true },
  title:      { type: String, required: true },
  cards:      { type: Array,  required: true }, // exactly 4: { icon, title, description }
  insight:    { type: Object, required: false, default: null },
})

validatePartNumber(props.partNumber, 'FourCardGridSlide')
if (props.cards.length !== 4) {
  console.error('[FourCardGridSlide] ❌ cards must contain exactly 4 items (got ' + props.cards.length + ')')
}

const chrome    = useSectionChrome(() => props.partNumber)
const cardStyle = useSectionCards(() => props.partNumber)

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
    <div class="absolute inset-0 bg-gradient-to-br" :class="chrome.ambientBg"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl" :class="chrome.orb"></div>

    <div class="relative z-10 flex items-center gap-3 mb-4">
      <span class="px-4 py-1 bg-gradient-to-r border rounded-full text-xs font-semibold tracking-wide shadow-lg" :class="[chrome.pill, chrome.pillText]">
        {{ pillIcon }} {{ pillLabel }}
      </span>
      <div class="flex-1 h-px bg-gradient-to-r from-transparent to-transparent" :class="chrome.divider"></div>
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
  </div>
</template>
