<!--
  FrameworkMappingRowsSlide

  A vertical stack of labeled rows mapping concepts to explanations and tags.
  Each row: fixed-width colored label on the left → explanation text in center
  → monospace tag on the right.

  Creates the "I finally get the model" clarity moment. The slide audiences
  photograph — useful any time a multi-dimension framework needs to be
  presented as a scannable, memorable structure.

  Row colors come from useSectionCards() so they harmonize with the section
  theme automatically (cycling through the section's 4-card palette).
  Chrome and progress dots respond to partNumber.

  Props:
    partNumber    1–4, drives chrome + row card palette
    pillIcon      emoji for the section badge
    pillLabel     text for the section badge
    title         slide headline
    subtitle      optional sub-headline
    rows          Array<{ label, description, tag }>
                  label       — left anchor text, max 13 chars (enforced, w-28 column at text-sm font-bold)
                  description — center explanation, max 70 chars (enforced)
                  tag         — right monospace label (e.g. "Plan Mode")
                  2–6 rows required (enforced)
    footnote      optional bottom-center italic caption
    progressDots  { current, total, activeColor }
-->

<script setup>
import { computed } from 'vue'
import { isDark } from './useTheme'
import { useSectionChrome } from './useSectionTheme'

const props = defineProps({
  partNumber:   { type: Number, required: true },
  pillIcon:     { type: String, required: true },
  pillLabel:    { type: String, required: true },
  title:        { type: String, required: true },
  subtitle:     { type: String, required: false, default: '' },
  rows:         { type: Array,  required: true }, // [{ label, description, tag }] — 3–6 items
  footnote:     { type: String, required: false, default: '' },
  progressDots: { type: Object, required: true }, // { current, total, activeColor }
})

const DESC_MAX  = 70
const LABEL_MAX = 13

// Console warnings — dev tools feedback (build-all.ps1 linter catches these statically)
props.rows?.forEach((r, i) => {
  if (r.description?.length > DESC_MAX)
    console.warn(`[FrameworkMappingRowsSlide] row[${i}] description is ${r.description.length} chars (max ${DESC_MAX}): "${r.description.slice(0, 50)}…"`)
  if (r.label?.length > LABEL_MAX)
    console.warn(`[FrameworkMappingRowsSlide] row[${i}] label is ${r.label.length} chars (max ${LABEL_MAX}): "${r.label}"`)
})

// Enforce row count — hard cap at 6 (overflow causes slide content to run off-screen)
const ROW_MAX = 6
const ROW_MIN = 2
if (!props.rows || props.rows.length < ROW_MIN)
  console.warn(`[FrameworkMappingRowsSlide] rows must have at least ${ROW_MIN} items (got ${props.rows?.length ?? 'none'})`)
if (props.rows && props.rows.length > ROW_MAX)
  console.warn(`[FrameworkMappingRowsSlide] rows exceeds max ${ROW_MAX} (got ${props.rows.length}) — extra rows will be hidden`)

const safeRows = computed(() => (props.rows ?? []).slice(0, ROW_MAX))

const chrome = useSectionChrome(() => props.partNumber)

// 3-stop inline-CSS color gradient per part. Cycles i % 3 for any row count.
// All values are raw CSS — avoids UnoCSS not scanning .ts files for dynamic class strings.
// bg/border/label use different opacity levels so rows feel layered without competing.
const DARK_ROW_PALETTES = [
  // Part 1: cyan → blue → indigo
  [
    { bg: 'rgba(22,78,99,0.3)',    border: 'rgba(6,182,212,0.3)',   label: 'rgb(103,232,249)' },
    { bg: 'rgba(30,58,138,0.3)',   border: 'rgba(59,130,246,0.3)',  label: 'rgb(147,197,253)' },
    { bg: 'rgba(30,27,75,0.3)',    border: 'rgba(99,102,241,0.3)',  label: 'rgb(165,180,252)' },
  ],
  // Part 2: blue → indigo → violet
  [
    { bg: 'rgba(30,58,138,0.3)',   border: 'rgba(59,130,246,0.3)',  label: 'rgb(147,197,253)' },
    { bg: 'rgba(30,27,75,0.3)',    border: 'rgba(99,102,241,0.3)',  label: 'rgb(165,180,252)' },
    { bg: 'rgba(46,16,101,0.3)',   border: 'rgba(139,92,246,0.3)',  label: 'rgb(196,181,253)' },
  ],
  // Part 3: indigo → violet → purple
  [
    { bg: 'rgba(30,27,75,0.3)',    border: 'rgba(99,102,241,0.3)',  label: 'rgb(165,180,252)' },
    { bg: 'rgba(46,16,101,0.3)',   border: 'rgba(139,92,246,0.3)',  label: 'rgb(196,181,253)' },
    { bg: 'rgba(59,7,100,0.3)',    border: 'rgba(168,85,247,0.3)',  label: 'rgb(216,180,254)' },
  ],
  // Part 4: violet → purple → pink
  [
    { bg: 'rgba(46,16,101,0.3)',   border: 'rgba(139,92,246,0.3)',  label: 'rgb(196,181,253)' },
    { bg: 'rgba(59,7,100,0.3)',    border: 'rgba(168,85,247,0.3)',  label: 'rgb(216,180,254)' },
    { bg: 'rgba(131,24,67,0.3)',   border: 'rgba(236,72,153,0.3)',  label: 'rgb(249,168,212)' },
  ],
]

const LIGHT_ROW_PALETTES = [
  // Part 1: cyan → blue → indigo
  [
    { bg: 'rgba(207,250,254,0.8)', border: 'rgb(103,232,249)', label: 'rgb(14,116,144)' },
    { bg: 'rgba(219,234,254,0.8)', border: 'rgb(147,197,253)', label: 'rgb(29,78,216)' },
    { bg: 'rgba(224,231,255,0.8)', border: 'rgb(165,180,252)', label: 'rgb(67,56,202)' },
  ],
  // Part 2: blue → indigo → violet
  [
    { bg: 'rgba(219,234,254,0.8)', border: 'rgb(147,197,253)', label: 'rgb(29,78,216)' },
    { bg: 'rgba(224,231,255,0.8)', border: 'rgb(165,180,252)', label: 'rgb(67,56,202)' },
    { bg: 'rgba(237,233,254,0.8)', border: 'rgb(196,181,253)', label: 'rgb(109,40,217)' },
  ],
  // Part 3: indigo → violet → purple
  [
    { bg: 'rgba(224,231,255,0.8)', border: 'rgb(165,180,252)', label: 'rgb(67,56,202)' },
    { bg: 'rgba(237,233,254,0.8)', border: 'rgb(196,181,253)', label: 'rgb(109,40,217)' },
    { bg: 'rgba(243,232,255,0.8)', border: 'rgb(216,180,254)', label: 'rgb(126,34,206)' },
  ],
  // Part 4: violet → purple → pink
  [
    { bg: 'rgba(237,233,254,0.8)', border: 'rgb(196,181,253)', label: 'rgb(109,40,217)' },
    { bg: 'rgba(243,232,255,0.8)', border: 'rgb(216,180,254)', label: 'rgb(126,34,206)' },
    { bg: 'rgba(252,231,243,0.8)', border: 'rgb(249,168,212)', label: 'rgb(190,24,93)' },
  ],
]

const rowPalette = computed(() => {
  const palettes = isDark.value ? DARK_ROW_PALETTES : LIGHT_ROW_PALETTES
  return palettes[(props.partNumber - 1) % 4]
})

const rowColor = (i) => rowPalette.value[i % rowPalette.value.length]

// Prop length limits — read by build-all.ps1 for static lint enforcement
const TITLE_MAX = 80

const DARK = {
  title:       'text-white',
  subtitle:    'text-white/60',
  description: 'text-white/80',
  footnote:    'text-white/40',
  dotInactive: 'bg-white/20',
  dotCounter:  'text-white/40',
}
const LIGHT = {
  title:       'text-gray-900',
  subtitle:    'text-gray-600',
  description: 'text-gray-700',
  footnote:    'text-gray-500',
  dotInactive: 'bg-gray-300',
  dotCounter:  'text-gray-400',
}
const t = computed(() => isDark.value ? DARK : LIGHT)
</script>

<template>
  <div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
    <div class="absolute inset-0 bg-gradient-to-br" :class="chrome.ambientBg"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl" :class="chrome.orb"></div>

    <!-- Chrome header -->
    <div class="relative z-10 flex items-center gap-3 mb-4">
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
      <div class="text-lg font-bold mb-0.5" :class="t.title">{{ title }}</div>
      <div v-if="subtitle" class="text-xs" :class="t.subtitle">{{ subtitle }}</div>
    </div>

    <!-- Mapping rows -->
    <div class="relative z-10 flex-1 min-h-0 flex flex-col justify-center">
      <div class="space-y-2">
        <div
          v-for="(row, i) in safeRows" :key="'row-' + i"
          class="p-3 rounded-lg border flex items-center gap-4 text-sm"
          :style="{ backgroundColor: rowColor(i).bg, borderColor: rowColor(i).border }"
        >
          <div class="w-28 shrink-0 font-bold" :style="{ color: rowColor(i).label }">{{ row.label }}</div>
          <div class="flex-1" :class="t.description">{{ row.description }}</div>
          <div class="shrink-0 text-xs font-mono" :style="{ color: rowColor(i).label }">{{ row.tag }}</div>
        </div>
      </div>
    </div>

    <!-- Optional footnote -->
    <div v-if="footnote" class="relative z-10 mt-2 text-center text-xs italic" :class="t.footnote">{{ footnote }}</div>
  </div>
</template>
