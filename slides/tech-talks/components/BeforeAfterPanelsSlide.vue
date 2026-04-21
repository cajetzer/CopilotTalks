<!--
  BeforeAfterPanelsSlide

  Same as BeforeAfterMetricsSlide minus the metric-tile row.
  Use when a slide contrasts before/after states without quantified outcomes.

  Layer 3:
    • Section-tinted CHROME via useSectionChrome(partNumber)
    • Hardcoded SEMANTIC colors: red Before / emerald After
-->

<script setup>
import { computed } from 'vue'
import { isDark } from './useTheme'
import { useSectionChrome, validatePartNumber } from './useSectionTheme'

const props = defineProps({
  partNumber:   { type: Number, required: true },
  pillIcon:     { type: String, required: true },
  pillLabel:    { type: String, required: true },
  title:        { type: String, required: true },
  before:       { type: Object, required: true }, // { header, items: Array<string | { title, detail }> }
  after:        { type: Object, required: true },
  insight:      { type: Object, required: false, default: null },
  progressDots: { type: Object, required: true },
})

validatePartNumber(props.partNumber, 'BeforeAfterPanelsSlide')

const chrome = useSectionChrome(() => props.partNumber)

const DARK_SEMANTIC = {
  beforeBg: 'bg-gradient-to-br from-red-900/30 to-red-800/20',
  beforeBorder: 'border-red-500/30',
  beforeLabel: 'text-red-300',
  beforeItem: 'bg-red-900/20',
  beforeItemTitle: 'text-red-200',
  beforeItemDetail: 'text-red-100/70',
  afterBg: 'bg-gradient-to-br from-emerald-900/30 to-emerald-800/20',
  afterBorder: 'border-emerald-500/30',
  afterLabel: 'text-emerald-300',
  afterItem: 'bg-emerald-900/20',
  afterItemTitle: 'text-emerald-200',
  afterItemDetail: 'text-emerald-100/70',
  title: 'text-white',
  insight: 'bg-gray-900/50 border-gray-700/50 text-gray-200',
}
const LIGHT_SEMANTIC = {
  beforeBg: 'bg-gradient-to-br from-red-100/40 to-red-50/30',
  beforeBorder: 'border-red-300/60',
  beforeLabel: 'text-red-700',
  beforeItem: 'bg-red-100/50',
  beforeItemTitle: 'text-red-800',
  beforeItemDetail: 'text-red-900/70',
  afterBg: 'bg-gradient-to-br from-emerald-100/40 to-emerald-50/30',
  afterBorder: 'border-emerald-300/60',
  afterLabel: 'text-emerald-700',
  afterItem: 'bg-emerald-100/50',
  afterItemTitle: 'text-emerald-800',
  afterItemDetail: 'text-emerald-900/70',
  title: 'text-gray-900',
  insight: 'bg-gray-100/80 border-gray-200 text-gray-800',
}
const sem = computed(() => isDark.value ? DARK_SEMANTIC : LIGHT_SEMANTIC)

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
      <div class="flex items-center gap-2">
        <div v-for="n in progressDots.total" :key="n"
          class="w-2 h-2 rounded-full"
          :class="n === progressDots.current ? progressDots.activeColor : 'bg-white/20'">
        </div>
        <span class="text-white/40 text-xs ml-1">{{ progressDots.current }} of {{ progressDots.total }}</span>
      </div>
    </div>

    <div class="relative z-10 mb-4">
      <div class="text-2xl font-bold" :class="sem.title">{{ title }}</div>
    </div>

    <div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
      <div class="grid grid-cols-2 gap-4 flex-1 min-h-0">
        <div class="p-4 rounded-xl border overflow-hidden" :class="[sem.beforeBg, sem.beforeBorder]">
          <div class="font-bold mb-3 text-base" :class="sem.beforeLabel">{{ before.header }}</div>
          <div class="space-y-2 text-sm">
            <div v-for="(item, idx) in before.items" :key="'b-' + idx" class="p-2 rounded" :class="sem.beforeItem">
              <div class="font-semibold" :class="sem.beforeItemTitle">{{ itemTitle(item) }}</div>
              <div v-if="itemDetail(item)" class="text-xs opacity-80 mt-0.5" :class="sem.beforeItemDetail">{{ itemDetail(item) }}</div>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-xl border overflow-hidden" :class="[sem.afterBg, sem.afterBorder]">
          <div class="font-bold mb-3 text-base" :class="sem.afterLabel">{{ after.header }}</div>
          <div class="space-y-2 text-sm">
            <div v-for="(item, idx) in after.items" :key="'a-' + idx" class="p-2 rounded" :class="sem.afterItem">
              <div class="font-semibold" :class="sem.afterItemTitle">{{ itemTitle(item) }}</div>
              <div v-if="itemDetail(item)" class="text-xs opacity-80 mt-0.5" :class="sem.afterItemDetail">{{ itemDetail(item) }}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="insight" class="rounded-lg border px-4 py-2 text-sm" :class="sem.insight">
        <span class="mr-2">{{ insight.icon }}</span>{{ insight.text }}
      </div>
    </div>
  </div>
</template>
