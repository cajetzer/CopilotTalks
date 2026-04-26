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

// Prop length limits — read by build-all.ps1 for static lint enforcement
const TITLE_MAX = 80
const STEPS_MAX = 5
const STEPS_MIN = 2
if (!props.steps || props.steps.length < STEPS_MIN)
  console.warn(`[WorkflowShowdownStepsSlide] steps must have at least ${STEPS_MIN} items (got ${props.steps?.length ?? 'none'})`)
if (props.steps && props.steps.length > STEPS_MAX)
  console.warn(`[WorkflowShowdownStepsSlide] steps has ${props.steps.length} items (max ${STEPS_MAX})`)

const DARK = {
  title:        'text-white',
  subtitle:     'text-white/60',
  metric:       'bg-gray-900/50 border-gray-700/50 text-gray-200',
  colLeft:      'from-red-900/30 to-orange-900/20 border-red-500/30',
  colRight:     'from-green-900/30 to-emerald-900/20 border-green-500/30',
  divLeft:      'border-red-500/20',
  divRight:     'border-green-500/20',
  labelLeft:    'text-red-300',
  labelRight:   'text-green-300',
  circleLeft:   'bg-red-900/80 border-red-500/60 text-red-300',
  circleRight:  'bg-green-900/80 border-green-500/60 text-green-300',
  stepLabel:    'text-white/90',
  stepNote:     'text-white/50',
  outcomeLeft:  'bg-orange-900/40 border-orange-500/40 text-orange-300',
  outcomeRight: 'bg-emerald-900/40 border-emerald-500/40 text-emerald-300',
}
const LIGHT = {
  title:        'text-gray-900',
  subtitle:     'text-gray-600',
  metric:       'bg-gray-100/80 border-gray-200 text-gray-800',
  colLeft:      'from-red-50 to-orange-50 border-red-200',
  colRight:     'from-green-50 to-emerald-50 border-green-200',
  divLeft:      'border-red-300/60',
  divRight:     'border-green-300/60',
  labelLeft:    'text-red-700',
  labelRight:   'text-green-700',
  circleLeft:   'bg-red-100 border-red-400 text-red-700',
  circleRight:  'bg-green-100 border-green-400 text-green-700',
  stepLabel:    'text-gray-800',
  stepNote:     'text-gray-500',
  outcomeLeft:  'bg-orange-100 border-orange-300 text-orange-700',
  outcomeRight: 'bg-emerald-100 border-emerald-300 text-emerald-700',
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
      <div class="text-lg font-bold mb-0.5" :class="t.title">{{ title }}</div>
      <div v-if="subtitle" class="text-xs" :class="t.subtitle">{{ subtitle }}</div>
    </div>

    <!-- Showdown columns -->
    <div class="relative z-10 flex-1 min-h-0 flex flex-col gap-2">
      <div class="grid grid-cols-2 gap-4 flex-1 min-h-0 text-xs">

        <!-- Before (red/problem) -->
        <div class="p-4 bg-gradient-to-br rounded-xl border flex flex-col" :class="t.colLeft">
          <div class="flex items-center gap-2 mb-3 pb-2 border-b" :class="t.divLeft">
            <span class="text-base">❌</span>
            <span class="font-bold text-sm" :class="t.labelLeft">{{ leftLabel }}</span>
          </div>
          <div class="space-y-2.5 flex-1">
            <div v-for="(step, i) in steps" :key="'l-' + i" class="flex gap-3 items-start">
              <div class="w-5 h-5 rounded-full border flex items-center justify-center font-bold text-xs shrink-0" :class="t.circleLeft">{{ i + 1 }}</div>
              <div>
                <div class="font-semibold" :class="t.stepLabel">{{ step.left.label }}</div>
                <div v-if="step.left.note" class="mt-0.5" :class="t.stepNote">{{ step.left.note }}</div>
              </div>
            </div>
          </div>
          <div class="mt-3 flex items-center gap-2 p-2 rounded border" :class="t.outcomeLeft">
            <span class="text-base">{{ outcomeLeft.icon || '🔄' }}</span>
            <span class="font-semibold">{{ outcomeLeft.label }}</span>
          </div>
        </div>

        <!-- After (green/outcome) -->
        <div class="p-4 bg-gradient-to-br rounded-xl border flex flex-col" :class="t.colRight">
          <div class="flex items-center gap-2 mb-3 pb-2 border-b" :class="t.divRight">
            <span class="text-base">✅</span>
            <span class="font-bold text-sm" :class="t.labelRight">{{ rightLabel }}</span>
          </div>
          <div class="space-y-2.5 flex-1">
            <div v-for="(step, i) in steps" :key="'r-' + i" class="flex gap-3 items-start">
              <div class="w-5 h-5 rounded-full border flex items-center justify-center font-bold text-xs shrink-0" :class="t.circleRight">{{ i + 1 }}</div>
              <div>
                <div class="font-semibold" :class="t.stepLabel">{{ step.right.label }}</div>
                <div v-if="step.right.note" class="mt-0.5" :class="t.stepNote">{{ step.right.note }}</div>
              </div>
            </div>
          </div>
          <div class="mt-3 flex items-center gap-2 p-2 rounded border" :class="t.outcomeRight">
            <span class="text-base">{{ outcomeRight.icon || '✓' }}</span>
            <span class="font-semibold">{{ outcomeRight.label }}</span>
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
