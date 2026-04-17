<!--
  ProblemSolutionOutcomeSlide

  3-col narrative: red Problem → blue Solution → emerald Outcome.
  Semantic palette is HARDCODED. Section partNumber tints chrome only
  (ambient bg, orb, pill, divider). Optional metrics row appears under
  the outcome column when provided.

  DO NOT shift red/blue/green by partNumber.
-->

<script setup>
import { computed } from 'vue'
import { isDark } from './useTheme'
import { useSectionChrome, validatePartNumber } from './useSectionTheme'

const props = defineProps({
  partNumber: { type: Number, required: true },
  pillIcon:   { type: String, required: true },
  pillLabel:  { type: String, required: true },
  title:      { type: String, required: true },
  problem:    { type: Object, required: true }, // { header, items: Array<string | { title, detail }> }
  solution:   { type: Object, required: true }, // { header, items, code?: { language, content } }
  outcome:    { type: Object, required: true }, // { header, items, metrics?: Array<{ value, label }> }
  insight:    { type: Object, required: false, default: null },
})

validatePartNumber(props.partNumber, 'ProblemSolutionOutcomeSlide')

const chrome = useSectionChrome(() => props.partNumber)

const DARK_SEMANTIC = {
  problemBg: 'bg-gradient-to-br from-red-900/30 to-red-800/20',
  problemBorder: 'border-red-500/30',
  problemLabel: 'text-red-300',
  problemItem: 'bg-red-900/20',
  problemItemTitle: 'text-red-200',

  solutionBg: 'bg-gradient-to-br from-blue-900/30 to-blue-800/20',
  solutionBorder: 'border-blue-500/30',
  solutionLabel: 'text-blue-300',
  solutionItem: 'bg-blue-900/20',
  solutionItemTitle: 'text-blue-200',

  outcomeBg: 'bg-gradient-to-br from-emerald-900/30 to-emerald-800/20',
  outcomeBorder: 'border-emerald-500/30',
  outcomeLabel: 'text-emerald-300',
  outcomeItem: 'bg-emerald-900/20',
  outcomeItemTitle: 'text-emerald-200',
  outcomeMetric: 'bg-emerald-900/30 border-emerald-500/40 text-emerald-200',

  title: 'text-white',
  insight: 'bg-gray-900/50 border-gray-700/50 text-gray-200',
  itemDetail: 'text-white/70',
}
const LIGHT_SEMANTIC = {
  problemBg: 'bg-gradient-to-br from-red-100/40 to-red-50/30',
  problemBorder: 'border-red-300/60',
  problemLabel: 'text-red-700',
  problemItem: 'bg-red-100/50',
  problemItemTitle: 'text-red-800',

  solutionBg: 'bg-gradient-to-br from-blue-100/40 to-blue-50/30',
  solutionBorder: 'border-blue-300/60',
  solutionLabel: 'text-blue-700',
  solutionItem: 'bg-blue-100/50',
  solutionItemTitle: 'text-blue-800',

  outcomeBg: 'bg-gradient-to-br from-emerald-100/40 to-emerald-50/30',
  outcomeBorder: 'border-emerald-300/60',
  outcomeLabel: 'text-emerald-700',
  outcomeItem: 'bg-emerald-100/50',
  outcomeItemTitle: 'text-emerald-800',
  outcomeMetric: 'bg-emerald-100/60 border-emerald-300 text-emerald-800',

  title: 'text-gray-900',
  insight: 'bg-gray-100/80 border-gray-200 text-gray-800',
  itemDetail: 'text-gray-700',
}
const sem = computed(() => isDark.value ? DARK_SEMANTIC : LIGHT_SEMANTIC)

const itemTitle = (it) => typeof it === 'string' ? it : it.title
const itemDetail = (it) => typeof it === 'string' ? null : it.detail

const GRID_COLS = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4' }
const outcomeMetricsGrid = computed(() => {
  const n = (props.outcome.metrics || []).length
  return GRID_COLS[n] || 'grid-cols-2'
})
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
      <div class="text-2xl font-bold" :class="sem.title">{{ title }}</div>
    </div>

    <div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
      <div class="grid grid-cols-3 gap-3 flex-1 min-h-0">
        <!-- Problem -->
        <div class="p-3 rounded-xl border overflow-hidden" :class="[sem.problemBg, sem.problemBorder]">
          <div class="font-bold mb-2 text-sm" :class="sem.problemLabel">❌ {{ problem.header }}</div>
          <div class="space-y-1.5 text-xs">
            <div v-for="(item, idx) in problem.items" :key="'p-' + idx" class="p-1.5 rounded" :class="sem.problemItem">
              <div class="font-semibold" :class="sem.problemItemTitle">{{ itemTitle(item) }}</div>
              <div v-if="itemDetail(item)" class="opacity-80 mt-0.5" :class="sem.itemDetail">{{ itemDetail(item) }}</div>
            </div>
          </div>
        </div>

        <!-- Solution -->
        <div class="p-3 rounded-xl border overflow-hidden" :class="[sem.solutionBg, sem.solutionBorder]">
          <div class="font-bold mb-2 text-sm" :class="sem.solutionLabel">💡 {{ solution.header }}</div>
          <div class="space-y-1.5 text-xs">
            <div v-for="(item, idx) in solution.items" :key="'s-' + idx" class="p-1.5 rounded" :class="sem.solutionItem">
              <div class="font-semibold" :class="sem.solutionItemTitle">{{ itemTitle(item) }}</div>
              <div v-if="itemDetail(item)" class="opacity-80 mt-0.5" :class="sem.itemDetail">{{ itemDetail(item) }}</div>
            </div>
          </div>
          <pre v-if="solution.code" class="mt-2 p-2 rounded bg-gray-950/80 border border-gray-700/50 text-xs overflow-x-auto"><code>{{ solution.code.content }}</code></pre>
        </div>

        <!-- Outcome -->
        <div class="p-3 rounded-xl border overflow-hidden" :class="[sem.outcomeBg, sem.outcomeBorder]">
          <div class="font-bold mb-2 text-sm" :class="sem.outcomeLabel">✅ {{ outcome.header }}</div>
          <div class="space-y-1.5 text-xs">
            <div v-for="(item, idx) in outcome.items" :key="'o-' + idx" class="p-1.5 rounded" :class="sem.outcomeItem">
              <div class="font-semibold" :class="sem.outcomeItemTitle">{{ itemTitle(item) }}</div>
              <div v-if="itemDetail(item)" class="opacity-80 mt-0.5" :class="sem.itemDetail">{{ itemDetail(item) }}</div>
            </div>
          </div>
          <div v-if="outcome.metrics && outcome.metrics.length" class="mt-2 grid gap-1.5" :class="outcomeMetricsGrid">
            <div v-for="(m, idx) in outcome.metrics" :key="'om-' + idx" class="p-2 rounded border text-center" :class="sem.outcomeMetric">
              <div class="font-bold text-base">{{ m.value }}</div>
              <div class="text-xs opacity-80">{{ m.label }}</div>
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
