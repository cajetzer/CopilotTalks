<!--
  MaturityLevelDrilldownSlide

  Deep-dive into a single level/stage of a maturity model or sequence.
  Structure: chrome header → title → italic blockquote → 3-column diagnostic grid.

  The 3-column grid uses fixed semantic colors per architecture:
    losses  → red   (Where Time Is Lost — the pain)
    changes → green (What Changes — the remedy)
    checks  → uses chrome.accent (Key Checks — section-harmonized verification)

  Pairs with MaturityJourneyRoadmapSlide: roadmap gives the wide shot,
  this component zooms into each level as its own scene.

  Props:
    partNumber    1–4, drives chrome + accent color for the checks column
    pillIcon      emoji for the section badge
    pillLabel     text for the section badge
    title         level name as headline (e.g. "🔧 Functional")
    subtitle      optional level tagline
    quote         blockquote text (the level's definition sentence)
    lossesLabel   optional header for red column  (default: "⏳ Where Time Is Lost")
    changesLabel  optional header for green column (default: "✅ What Changes")
    checksLabel   optional header for cyan column  (default: "🔍 Key Checks")
    lossItems     string[] — bullet lines for the red column
    changeItems   string[] — bullet lines for the green column
    checkItems    string[] — bullet lines for the accent column
    progressDots  { current, total, activeColor }
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
  subtitle:     { type: String, required: false, default: '' },
  quote:        { type: String, required: true },
  lossesLabel:  { type: String, required: false, default: '⏳ Where Time Is Lost' },
  changesLabel: { type: String, required: false, default: '✅ What Changes' },
  checksLabel:  { type: String, required: false, default: '🔍 Key Checks' },
  lossItems:    { type: Array,  required: true },  // string[]
  changeItems:  { type: Array,  required: true },  // string[]
  checkItems:   { type: Array,  required: true },  // string[]
  progressDots: { type: Object, required: true },  // { current, total, activeColor }
})

validatePartNumber(props.partNumber, 'MaturityLevelDrilldownSlide')

const chrome = useSectionChrome(() => props.partNumber)

// Prop length limits — read by build-all.ps1 for static lint enforcement
const TITLE_MAX = 80
const ITEMS_MAX = 5
if (props.lossItems && props.lossItems.length > ITEMS_MAX)
  console.warn(`[MaturityLevelDrilldownSlide] lossItems has ${props.lossItems.length} items (max ${ITEMS_MAX})`)
if (props.changeItems && props.changeItems.length > ITEMS_MAX)
  console.warn(`[MaturityLevelDrilldownSlide] changeItems has ${props.changeItems.length} items (max ${ITEMS_MAX})`)
if (props.checkItems && props.checkItems.length > ITEMS_MAX)
  console.warn(`[MaturityLevelDrilldownSlide] checkItems has ${props.checkItems.length} items (max ${ITEMS_MAX})`)

const DARK = {
  title:       'text-white',
  subtitle:    'text-white/60',
  quote:       'bg-gray-900/50 border-white/10 text-gray-300',
  lossesPanel: 'bg-gradient-to-br from-red-950/60 to-gray-900/80 border-red-500/20',
  lossesTitle: 'text-red-400',
  changesPanel: 'bg-gradient-to-br from-green-950/60 to-gray-900/80 border-green-500/20',
  changesTitle: 'text-green-400',
  checksPanel: 'bg-gradient-to-br from-gray-900/60 to-gray-900/80 border-gray-700/30',
  body:        'text-gray-300',
  dotInactive: 'bg-white/20',
  dotCounter:  'text-white/40',
}
const LIGHT = {
  title:       'text-gray-900',
  subtitle:    'text-gray-600',
  quote:       'bg-gray-100/80 border-gray-200 text-gray-700',
  lossesPanel: 'bg-red-50 border-red-200',
  lossesTitle: 'text-red-600',
  changesPanel: 'bg-green-50 border-green-200',
  changesTitle: 'text-green-700',
  checksPanel: 'bg-gray-100 border-gray-200',
  body:        'text-gray-800',
  dotInactive: 'bg-gray-300',
  dotCounter:  'text-gray-400',
}
const t = computed(() => isDark.value ? DARK : LIGHT)
</script>

<template>
  <div class="h-full flex flex-col justify-center relative overflow-hidden px-14 py-4">
    <div class="absolute inset-0 bg-gradient-to-br" :class="chrome.ambientBg"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl" :class="chrome.orb"></div>

    <!-- Chrome header -->
    <div class="relative z-10 flex items-center gap-3 mb-3">
      <span class="px-4 py-1 bg-gradient-to-r border rounded-full text-xs font-semibold tracking-wide shadow-lg" :class="[chrome.pill, chrome.pillText]">
        {{ pillIcon }} {{ pillLabel }}
      </span>
      <div class="flex-1 h-px bg-gradient-to-r from-transparent to-transparent" :class="chrome.divider"></div>
      <div class="flex items-center gap-2">
        <div
          v-for="n in progressDots.total" :key="n"
          class="w-2 h-2 rounded-full"
          :class="n === progressDots.current ? progressDots.activeColor : t.dotInactive"
        ></div>
        <span class="text-xs ml-1" :class="t.dotCounter">{{ progressDots.current }} of {{ progressDots.total }}</span>
      </div>
    </div>

    <!-- Title -->
    <div class="relative z-10 mb-3">
      <div class="text-xl font-bold mb-0.5" :class="t.title">{{ title }}</div>
      <div v-if="subtitle" class="text-sm" :class="t.subtitle">{{ subtitle }}</div>
    </div>

    <!-- Blockquote -->
    <div class="relative z-10 mb-3 p-3 rounded-xl border text-sm italic" :class="t.quote">
      "{{ quote }}"
    </div>

    <!-- 3-column diagnostic grid -->
    <div class="relative z-10 grid grid-cols-3 gap-3">
      <!-- Red: losses -->
      <div class="p-3 rounded-xl border" :class="t.lossesPanel">
        <div class="text-xs font-bold mb-2 uppercase tracking-wider" :class="t.lossesTitle">{{ lossesLabel }}</div>
        <div class="text-xs space-y-1.5" :class="t.body">
          <div v-for="(item, i) in lossItems" :key="'loss-' + i">• {{ item }}</div>
        </div>
      </div>
      <!-- Green: changes -->
      <div class="p-3 rounded-xl border" :class="t.changesPanel">
        <div class="text-xs font-bold mb-2 uppercase tracking-wider" :class="t.changesTitle">{{ changesLabel }}</div>
        <div class="text-xs space-y-1.5" :class="t.body">
          <div v-for="(item, i) in changeItems" :key="'chg-' + i">• {{ item }}</div>
        </div>
      </div>
      <!-- Section-accented: checks -->
      <div class="p-3 rounded-xl border" :class="t.checksPanel">
        <div class="text-xs font-bold mb-2 uppercase tracking-wider" :class="chrome.accent">{{ checksLabel }}</div>
        <div class="text-xs space-y-1.5" :class="t.body">
          <div v-for="(item, i) in checkItems" :key="'chk-' + i">• {{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
