<!--
  CodeWithFeaturesSlide

  Code block paired with 2-4 feature cards.

  Layouts:
    codePosition: 'left' → code on left ~60%, cards stacked on right ~40%
    codePosition: 'top'  → code on top, feature cards in row below

  Code rendered as plain monospaced block (no syntax highlighting beyond
  Slidev's default — content prop is raw text). Cards use section palette.
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
  code:         { type: Object, required: true }, // { language, content, filename? }
  codePosition: { type: String, required: true, validator: (v) => ['left', 'top'].includes(v) },
  features:     { type: Array,  required: true }, // 2–4: { icon?, title, description }
  insight:      { type: Object, required: false, default: null },
  progressDots: { type: Object, required: true }, // { current: N, total: M, activeColor: 'bg-...' }
})

const validationError = computed(() => {
  if (!props.partNumber || props.partNumber < 1 || props.partNumber > 4)
    return `[CodeWithFeaturesSlide] ❌ partNumber must be 1–4 (got ${props.partNumber})`
  if (!props.features || props.features.length < 2 || props.features.length > 4)
    return `[CodeWithFeaturesSlide] ❌ features must contain 2–4 items (got ${props.features?.length ?? 'none'})`
  if (!['left', 'top'].includes(props.codePosition))
    return `[CodeWithFeaturesSlide] ❌ codePosition must be 'left' or 'top' (got '${props.codePosition}')`
  return null
})

const chrome    = useSectionChrome(() => props.partNumber)
const cardStyle = useSectionCards(() => props.partNumber)

const DARK = {
  title: 'text-white',
  description: 'text-white/80',
  codeFrame: 'bg-gray-950/80 border-gray-700/50',
  filename: 'text-gray-400',
  insight: 'bg-gray-900/50 border-gray-700/50 text-gray-200',
}
const LIGHT = {
  title: 'text-gray-900',
  description: 'text-gray-700',
  codeFrame: 'bg-gray-50 border-gray-300',
  filename: 'text-gray-600',
  insight: 'bg-gray-100/80 border-gray-200 text-gray-800',
}
const t = computed(() => isDark.value ? DARK : LIGHT)

const GRID_COLS = { 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4' }
const featuresGrid = computed(() => GRID_COLS[props.features.length] || 'grid-cols-2')
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
      <div class="text-2xl font-bold" :class="t.title">{{ title }}</div>
    </div>

    <div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
      <!-- LEFT layout: code | cards -->
      <div v-if="codePosition === 'left'" class="grid grid-cols-5 gap-4 flex-1 min-h-0">
        <div class="col-span-3 rounded-xl border overflow-hidden flex flex-col" :class="t.codeFrame">
          <div v-if="code.filename" class="px-3 py-1.5 text-xs font-mono border-b border-gray-700/30" :class="t.filename">{{ code.filename }}</div>
          <pre class="flex-1 p-3 text-xs overflow-auto"><code>{{ code.content }}</code></pre>
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <div v-for="(f, i) in features" :key="'f-' + i" class="p-3 rounded-lg border flex-1" :class="[cardStyle[i].bg, cardStyle[i].border]">
            <div class="font-semibold text-sm" :class="cardStyle[i].title">
              <span v-if="f.icon" class="mr-1">{{ f.icon }}</span>{{ f.title }}
            </div>
            <div class="text-xs mt-1 opacity-80" :class="cardStyle[i].blurb">{{ f.description }}</div>
          </div>
        </div>
      </div>

      <!-- TOP layout: code on top, cards in row below -->
      <div v-else class="flex flex-col gap-3 flex-1 min-h-0">
        <div class="rounded-xl border overflow-hidden flex flex-col flex-1 min-h-0" :class="t.codeFrame">
          <div v-if="code.filename" class="px-3 py-1.5 text-xs font-mono border-b border-gray-700/30" :class="t.filename">{{ code.filename }}</div>
          <pre class="flex-1 p-3 text-xs overflow-auto"><code>{{ code.content }}</code></pre>
        </div>
        <div class="grid gap-3" :class="featuresGrid">
          <div v-for="(f, i) in features" :key="'f-' + i" class="p-3 rounded-lg border" :class="[cardStyle[i].bg, cardStyle[i].border]">
            <div class="font-semibold text-sm" :class="cardStyle[i].title">
              <span v-if="f.icon" class="mr-1">{{ f.icon }}</span>{{ f.title }}
            </div>
            <div class="text-xs mt-1 opacity-80" :class="cardStyle[i].blurb">{{ f.description }}</div>
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
