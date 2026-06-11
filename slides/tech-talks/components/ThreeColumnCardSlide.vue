<!--
  ThreeColumnCardSlide

  Three equal cards arranged in a row using the section's card progression.
  Each card: icon + title + (description OR items list).
  Optional bottom insight bar.

  Use for "three options", "three tiers", "three capabilities".
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
  columns:      { type: Array,  required: true }, // 2-3: { icon?, title, description?, items? (string[] or { title, detail }[]) }
  insight:      { type: Object, required: false, default: null },
  progressDots: { type: Object, required: true }, // { current: N, total: M, activeColor: 'bg-...' }
})

const validationError = computed(() => {
  if (!props.partNumber || props.partNumber < 1 || props.partNumber > 4)
    return `[ThreeColumnCardSlide] ❌ partNumber must be 1–4 (got ${props.partNumber})`
  if (!props.columns || props.columns.length < 2 || props.columns.length > 3)
    return `[ThreeColumnCardSlide] ❌ columns must contain 2–3 items (got ${props.columns?.length ?? 'none'})`
  return null
})

const chrome = useSectionChrome(() => props.partNumber)
const cards  = useSectionCards(() => props.partNumber)

// Prop length limits — read by build-all.ps1 for static lint enforcement
const TITLE_MAX = 80
const CARD_TITLE_MAX = 40
const DESC_MAX = 100
const ITEMS_MAX = 5
const GRID_COLS = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
}
const columnsGrid = computed(() => GRID_COLS[props.columns.length] || 'grid-cols-3')
props.columns?.forEach((col, i) => {
  if (col.title?.length > CARD_TITLE_MAX)
    console.warn(`[ThreeColumnCardSlide] columns[${i}].title is ${col.title.length} chars (max ${CARD_TITLE_MAX}): "${col.title}"`)
  if (col.description?.length > DESC_MAX)
    console.warn(`[ThreeColumnCardSlide] columns[${i}].description is ${col.description.length} chars (max ${DESC_MAX}): "${col.description.slice(0, 50)}…"`)
  if (col.items && col.items.length > ITEMS_MAX)
    console.warn(`[ThreeColumnCardSlide] columns[${i}].items has ${col.items.length} items (max ${ITEMS_MAX})`)
})

const DARK = {
  title: 'text-white',
  description: 'text-white/80',
  itemBg: 'bg-gray-900/40 border-gray-700/40 text-gray-200',
  insight: 'bg-gray-900/50 border-gray-700/50 text-gray-200',
  dotInactive: 'bg-white/20',
  dotCounter: 'text-white/40',
}
const LIGHT = {
  title: 'text-gray-900',
  description: 'text-gray-700',
  itemBg: 'bg-white/60 border-gray-200 text-gray-800',
  insight: 'bg-gray-100/80 border-gray-200 text-gray-800',
  dotInactive: 'bg-gray-300',
  dotCounter: 'text-gray-400',
}
const t = computed(() => isDark.value ? DARK : LIGHT)

const itemTitle = (it) => typeof it === 'string' ? it : it.title
const itemDetail = (it) => typeof it === 'string' ? null : it.detail
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
          :class="n === progressDots.current ? progressDots.activeColor : t.dotInactive">
        </div>
        <span class="text-xs ml-1" :class="t.dotCounter">{{ progressDots.current }} of {{ progressDots.total }}</span>
      </div>
    </div>

    <div class="relative z-10 mb-4">
      <div class="text-2xl font-bold" :class="t.title">{{ title }}</div>
    </div>

    <div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
      <div class="grid gap-4 flex-1 min-h-0" :class="columnsGrid">
        <div v-for="(col, i) in columns" :key="'c-' + i" class="p-4 rounded-xl border overflow-hidden" :class="[cards[i].bg, cards[i].border]">
          <div class="text-3xl mb-2" v-if="col.icon">{{ col.icon }}</div>
          <div class="font-bold text-base mb-2" :class="cards[i].title">{{ col.title }}</div>
          <div v-if="col.description" class="text-sm" :class="t.description">{{ col.description }}</div>
          <div v-if="col.items && col.items.length" class="mt-2 space-y-1.5 text-xs">
            <div v-for="(item, idx) in col.items" :key="'i-' + idx" class="p-1.5 rounded border" :class="t.itemBg">
              <div class="font-semibold">{{ itemTitle(item) }}</div>
              <div v-if="itemDetail(item)" class="opacity-80 mt-0.5">{{ itemDetail(item) }}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="insight" class="rounded-lg border px-4 py-2 text-sm" :class="t.insight">
        <span class="mr-2">{{ insight.icon }}</span>{{ insight.text }}
      </div>
    </div>
    </template>
  </div>
</template>
