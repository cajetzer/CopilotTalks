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
import { useSectionChrome, useSectionCards } from './useSectionTheme'

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

// Enforce row count
if (!props.rows || props.rows.length < 2 || props.rows.length > 6)
  console.warn(`[FrameworkMappingRowsSlide] rows must have 2–6 items (got ${props.rows?.length ?? 'none'})`)

const chrome = useSectionChrome(() => props.partNumber)
const cards  = useSectionCards(() => props.partNumber)

// Cycle through section card palette for row colors
const rowColor = (i) => cards.value[i % cards.value.length]

const DARK = {
  title:       'text-white',
  subtitle:    'text-white/60',
  description: 'text-white/80',
  footnote:    'text-white/40',
}
const LIGHT = {
  title:       'text-gray-900',
  subtitle:    'text-gray-600',
  description: 'text-gray-700',
  footnote:    'text-gray-500',
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
          :class="n === progressDots.current ? progressDots.activeColor : 'bg-white/20'"
        ></div>
        <span class="text-white/40 text-xs ml-1">{{ progressDots.current }} of {{ progressDots.total }}</span>
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
          v-for="(row, i) in rows" :key="'row-' + i"
          class="p-3 rounded-lg border flex items-center gap-4 text-sm"
          :class="[rowColor(i).bg, rowColor(i).border]"
        >
          <div class="w-28 shrink-0 font-bold" :class="rowColor(i).title">{{ row.label }}</div>
          <div class="flex-1" :class="t.description">{{ row.description }}</div>
          <div class="shrink-0 text-xs font-mono" :class="rowColor(i).title">{{ row.tag }}</div>
        </div>
      </div>
    </div>

    <!-- Optional footnote -->
    <div v-if="footnote" class="relative z-10 mt-2 text-center text-xs italic" :class="t.footnote">{{ footnote }}</div>
  </div>
</template>
