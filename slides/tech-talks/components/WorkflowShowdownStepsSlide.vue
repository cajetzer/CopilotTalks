<!--
  WorkflowShowdownStepsSlide

  Side-by-side numbered step comparison: the "before" path (red/problem)
  vs the "after" path (green/outcome). Steps are mirrored so the audience
  follows the divergence beat-by-beat.

  Use for workflow transformations where the contrast between old and new
  IS the narrative. Creates conflict → contrast → catharsis.

  Semantic colors are hardcoded (red=Before/Problem, green=After/Outcome)
  per architecture — they do not respond to partNumber.
  Chrome and progress dots respond to partNumber.

  Props:
    partNumber    1–4, drives chrome + progress dot accent
    pillIcon      emoji for the section badge
    pillLabel     text for the section badge
    title         slide headline
    subtitle      optional sub-headline
    leftLabel     label for the "before" column (e.g. "Traditional Workflow")
    rightLabel    label for the "after" column (e.g. "With GitHub Copilot")
    steps         Array<{ left: { label, note? }, right: { label, note? } }>
    outcomeLeft   { icon?, label } — the bad ending stamp
    outcomeRight  { icon?, label } — the good ending stamp
    summaryMetric optional bottom bar (e.g. "8 attempts → 2")
    progressDots  { current, total, activeColor }
-->

<script setup>
import { computed } from 'vue'
import { isDark } from './useTheme'
import { useSectionChrome, validatePartNumber } from './useSectionTheme'

const props = defineProps({
  partNumber:    { type: Number, required: true },
  pillIcon:      { type: String, required: true },
  pillLabel:     { type: String, required: true },
  title:         { type: String, required: true },
  subtitle:      { type: String, required: false, default: '' },
  leftLabel:     { type: String, required: true },
  rightLabel:    { type: String, required: true },
  steps:         { type: Array,  required: true }, // [{ left: { label, note? }, right: { label, note? } }]
  outcomeLeft:   { type: Object, required: true }, // { icon?, label }
  outcomeRight:  { type: Object, required: true }, // { icon?, label }
  summaryMetric: { type: String, required: false, default: '' },
  progressDots:  { type: Object, required: true }, // { current, total, activeColor }
})

validatePartNumber(props.partNumber, 'WorkflowShowdownStepsSlide')

const chrome = useSectionChrome(() => props.partNumber)

const DARK = {
  title:    'text-white',
  subtitle: 'text-white/60',
  metric:   'bg-gray-900/50 border-gray-700/50 text-gray-200',
}
const LIGHT = {
  title:    'text-gray-900',
  subtitle: 'text-gray-600',
  metric:   'bg-gray-100/80 border-gray-200 text-gray-800',
}
const t = computed(() => isDark.value ? DARK : LIGHT)
</script>

<template>
  <div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
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

    <!-- Showdown columns -->
    <div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
      <div class="grid grid-cols-2 gap-4 flex-1 min-h-0 text-xs">

        <!-- Before (red/problem) -->
        <div class="p-4 bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-xl border border-red-500/30 flex flex-col">
          <div class="flex items-center gap-2 mb-3 pb-2 border-b border-red-500/20">
            <span class="text-base">❌</span>
            <span class="font-bold text-red-300 text-sm">{{ leftLabel }}</span>
          </div>
          <div class="space-y-2.5 flex-1">
            <div v-for="(step, i) in steps" :key="'l-' + i" class="flex gap-3 items-start">
              <div class="w-5 h-5 rounded-full bg-red-900/80 border border-red-500/60 flex items-center justify-center text-red-300 font-bold text-xs shrink-0">{{ i + 1 }}</div>
              <div>
                <div class="font-semibold text-white/90">{{ step.left.label }}</div>
                <div v-if="step.left.note" class="opacity-60 mt-0.5">{{ step.left.note }}</div>
              </div>
            </div>
          </div>
          <div class="mt-3 flex items-center gap-2 p-2 bg-orange-900/40 rounded border border-orange-500/40">
            <span class="text-base">{{ outcomeLeft.icon || '🔄' }}</span>
            <span class="font-semibold text-orange-300">{{ outcomeLeft.label }}</span>
          </div>
        </div>

        <!-- After (green/outcome) -->
        <div class="p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-xl border border-green-500/30 flex flex-col">
          <div class="flex items-center gap-2 mb-3 pb-2 border-b border-green-500/20">
            <span class="text-base">✅</span>
            <span class="font-bold text-green-300 text-sm">{{ rightLabel }}</span>
          </div>
          <div class="space-y-2.5 flex-1">
            <div v-for="(step, i) in steps" :key="'r-' + i" class="flex gap-3 items-start">
              <div class="w-5 h-5 rounded-full bg-green-900/80 border border-green-500/60 flex items-center justify-center text-green-300 font-bold text-xs shrink-0">{{ i + 1 }}</div>
              <div>
                <div class="font-semibold text-white/90">{{ step.right.label }}</div>
                <div v-if="step.right.note" class="opacity-60 mt-0.5">{{ step.right.note }}</div>
              </div>
            </div>
          </div>
          <div class="mt-3 flex items-center gap-2 p-2 bg-emerald-900/40 rounded border border-emerald-500/40">
            <span class="text-base">{{ outcomeRight.icon || '✓' }}</span>
            <span class="font-semibold text-emerald-300">{{ outcomeRight.label }}</span>
          </div>
        </div>

      </div>

      <!-- Optional summary metric bar -->
      <div v-if="summaryMetric" class="text-center text-sm font-semibold rounded-lg border px-4 py-2" :class="t.metric">
        {{ summaryMetric }}
      </div>
    </div>
  </div>
</template>
