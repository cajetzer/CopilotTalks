<!--
  TwoColPairedConceptsSlide

  Two equal columns in the section's COOL palette (no opposition).
  Both columns share section colors (left = first card style,
  right = second card style). Use when comparing two non-opposed concepts
  (e.g. "two patterns", "two modes", "store vs retrieve").

  DO NOT use for before/after — use BeforeAfterPanelsSlide instead.
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
  left:       { type: Object, required: true }, // { header, icon?, items: Array<string | { title, detail }>, code?: { language, content } }
  right:      { type: Object, required: true },
  insight:    { type: Object, required: false, default: null },
})

validatePartNumber(props.partNumber, 'TwoColPairedConceptsSlide')

const chrome = useSectionChrome(() => props.partNumber)
const cards  = useSectionCards(() => props.partNumber)

const DARK = {
  title: 'text-white',
  itemBg: 'bg-gray-900/40',
  itemBorder: 'border-gray-700/40',
  itemDetail: 'text-white/70',
  insight: 'bg-gray-900/50 border-gray-700/50 text-gray-200',
}
const LIGHT = {
  title: 'text-gray-900',
  itemBg: 'bg-white/60',
  itemBorder: 'border-gray-200',
  itemDetail: 'text-gray-700',
  insight: 'bg-gray-100/80 border-gray-200 text-gray-800',
}
const t = computed(() => isDark.value ? DARK : LIGHT)

const itemTitle = (it) => typeof it === 'string' ? it : it.title
const itemDetail = (it) => typeof it === 'string' ? null : it.detail
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
      <div class="grid grid-cols-2 gap-4 flex-1 min-h-0">
        <div class="p-4 rounded-xl border overflow-hidden" :class="[cards[0].bg, cards[0].border]">
          <div class="font-bold mb-3 text-base" :class="cards[0].title">
            <span v-if="left.icon" class="mr-2">{{ left.icon }}</span>{{ left.header }}
          </div>
          <div class="space-y-2 text-sm">
            <div v-for="(item, idx) in left.items" :key="'l-' + idx" class="p-2 rounded border" :class="[t.itemBg, t.itemBorder]">
              <div class="font-semibold">{{ itemTitle(item) }}</div>
              <div v-if="itemDetail(item)" class="text-xs opacity-80 mt-0.5" :class="t.itemDetail">{{ itemDetail(item) }}</div>
            </div>
          </div>
          <pre v-if="left.code" class="mt-2 p-2 rounded bg-gray-950/80 border border-gray-700/50 text-xs overflow-x-auto"><code>{{ left.code.content }}</code></pre>
        </div>

        <div class="p-4 rounded-xl border overflow-hidden" :class="[cards[1].bg, cards[1].border]">
          <div class="font-bold mb-3 text-base" :class="cards[1].title">
            <span v-if="right.icon" class="mr-2">{{ right.icon }}</span>{{ right.header }}
          </div>
          <div class="space-y-2 text-sm">
            <div v-for="(item, idx) in right.items" :key="'r-' + idx" class="p-2 rounded border" :class="[t.itemBg, t.itemBorder]">
              <div class="font-semibold">{{ itemTitle(item) }}</div>
              <div v-if="itemDetail(item)" class="text-xs opacity-80 mt-0.5" :class="t.itemDetail">{{ itemDetail(item) }}</div>
            </div>
          </div>
          <pre v-if="right.code" class="mt-2 p-2 rounded bg-gray-950/80 border border-gray-700/50 text-xs overflow-x-auto"><code>{{ right.code.content }}</code></pre>
        </div>
      </div>

      <div v-if="insight" class="rounded-lg border px-4 py-2 text-sm" :class="t.insight">
        <span class="mr-2">{{ insight.icon }}</span>{{ insight.text }}
      </div>
    </div>
  </div>
</template>
