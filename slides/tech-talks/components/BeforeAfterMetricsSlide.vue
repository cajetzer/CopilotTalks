<!--
  BeforeAfterMetricsSlide

  Layer 1 (style.css):    none added — layout uses Tailwind grid
  Layer 2 (Tailwind):     grid-cols-2, gap, padding, font-bold, text sizes
  Layer 3 (Vue theme):
    • Section-tinted CHROME via useSectionChrome(partNumber): ambient bg, orb, pill, divider
    • Hardcoded SEMANTIC colors: red Before / emerald After (never partNumber-driven)
    • Per-section metric tile palette via useSectionCards(partNumber)

  Used for any 2-col before/after slide that ALSO has a row of 2-4 metric tiles.
  Distinct from BeforeAfterPanelsSlide (no metrics) and UseCaseBeforeAfterSlide
  (mandatory code block + single outcome pill).

  DO NOT:
  - Pass any color/style/class prop
  - Override the red/green semantic palette by partNumber
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
  before:       { type: Object, required: true }, // { header: string, items: Array<string | { title, detail }> }
  after:        { type: Object, required: true }, // same shape
  metrics:      { type: Array,  required: true }, // 2–4: { value: string, label: string }
  insight:      { type: Object, required: false, default: null }, // optional: { icon, text }
  progressDots: { type: Object, required: true },
})

const validationError = computed(() => {
  if (!props.partNumber || props.partNumber < 1 || props.partNumber > 4)
    return `[BeforeAfterMetricsSlide] ❌ partNumber must be 1–4 (got ${props.partNumber})`
  if (!props.metrics || props.metrics.length < 2 || props.metrics.length > 4)
    return `[BeforeAfterMetricsSlide] ❌ metrics must contain 2–4 items (got ${props.metrics?.length ?? 'none'})`
  return null
})

const chrome = useSectionChrome(() => props.partNumber)
const cards  = useSectionCards(() => props.partNumber)

// Prop length limits — read by build-all.ps1 for static lint enforcement
const TITLE_MAX = 80
const ITEMS_MAX = 5
if (props.before?.items && props.before.items.length > ITEMS_MAX)
  console.warn(`[BeforeAfterMetricsSlide] before.items has ${props.before.items.length} items (max ${ITEMS_MAX})`)
if (props.after?.items && props.after.items.length > ITEMS_MAX)
  console.warn(`[BeforeAfterMetricsSlide] after.items has ${props.after.items.length} items (max ${ITEMS_MAX})`)

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

const GRID_COLS = { 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4' }
const metricsGrid = computed(() => GRID_COLS[props.metrics.length] || 'grid-cols-3')
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
      <div class="text-2xl font-bold" :class="sem.title">{{ title }}</div>
    </div>

    <div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
      <div class="grid grid-cols-2 gap-4">
        <div class="p-3 rounded-xl border" :class="[sem.beforeBg, sem.beforeBorder]">
          <div class="font-bold mb-2 text-sm" :class="sem.beforeLabel">{{ before.header }}</div>
          <div class="space-y-1.5 text-xs">
            <div v-for="(item, idx) in before.items" :key="'b-' + idx" class="p-1.5 rounded" :class="sem.beforeItem">
              <div class="font-semibold" :class="sem.beforeItemTitle">{{ itemTitle(item) }}</div>
              <div v-if="itemDetail(item)" class="text-xs opacity-80 mt-0.5" :class="sem.beforeItemDetail">{{ itemDetail(item) }}</div>
            </div>
          </div>
        </div>

        <div class="p-3 rounded-xl border" :class="[sem.afterBg, sem.afterBorder]">
          <div class="font-bold mb-2 text-sm" :class="sem.afterLabel">{{ after.header }}</div>
          <div class="space-y-1.5 text-xs">
            <div v-for="(item, idx) in after.items" :key="'a-' + idx" class="p-1.5 rounded" :class="sem.afterItem">
              <div class="font-semibold" :class="sem.afterItemTitle">{{ itemTitle(item) }}</div>
              <div v-if="itemDetail(item)" class="text-xs opacity-80 mt-0.5" :class="sem.afterItemDetail">{{ itemDetail(item) }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-3 text-center" :class="metricsGrid">
        <div v-for="(metric, idx) in metrics" :key="'m-' + idx" class="p-3 rounded-lg border" :class="[cards[idx % cards.length].bg, cards[idx % cards.length].border]">
          <div class="font-bold text-xl" :class="cards[idx % cards.length].title">{{ metric.value }}</div>
          <div class="text-xs mt-1 opacity-80" :class="cards[idx % cards.length].blurb">{{ metric.label }}</div>
        </div>
      </div>

      <div v-if="insight" class="rounded-lg border px-4 py-2 text-sm" :class="sem.insight">
        <span class="mr-2">{{ insight.icon }}</span>{{ insight.text }}
      </div>
    </div>
    </template>
  </div>
</template>
