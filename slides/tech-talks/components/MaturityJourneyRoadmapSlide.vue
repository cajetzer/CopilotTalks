<!--
  MaturityJourneyRoadmapSlide

  Horizontal stage progression (e.g. L1→L5 maturity model) with chevron
  separators. One stage can be marked isTarget to receive an accent badge.

  Turns the talk into a quest: the audience locates themselves
  ("where we are") and sees the target ("where we're going").

  Stage colors are a fixed internal five-step progression
  (slate → blue → indigo → cyan → emerald) independent of section theme.
  Chrome responds to partNumber. Supports 2–5 stages.

  Props:
    partNumber    1–4, drives chrome + progress dot accent
    pillIcon      emoji for the section badge
    pillLabel     text for the section badge
    title         slide headline
    subtitle      optional sub-headline
    stages        Array<{ label, name, description, icon?, isTarget? }>
                  label = short id shown large (e.g. "L1", "Phase 2")
                  isTarget = true adds "TARGET" badge with highlight ring
    caption       optional bottom-center caption text
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
  stages:       { type: Array,  required: true }, // 2–5 items: { label, name, description, icon?, isTarget? }
  caption:      { type: String, required: false, default: '' },
  progressDots: { type: Object, required: true }, // { current, total, activeColor }
})

const validationError = computed(() => {
  if (!props.partNumber || props.partNumber < 1 || props.partNumber > 4)
    return `[MaturityJourneyRoadmapSlide] ❌ partNumber must be 1–4 (got ${props.partNumber})`
  if (!props.stages || props.stages.length < 2 || props.stages.length > 5)
    return `[MaturityJourneyRoadmapSlide] ❌ stages must have 2–5 items (got ${props.stages?.length ?? 'none'})`
  return null
})

const chrome = useSectionChrome(() => props.partNumber)

// Internal stage color progression — independent of section theme
const STAGE_PALETTE = [
  { bg: 'from-slate-700/50 to-slate-800/50',     border: 'border-slate-500/40',   divider: 'bg-slate-500',   label: 'text-slate-400',   name: 'text-slate-300',   desc: 'text-slate-400/80',  chevron: 'text-slate-600'   },
  { bg: 'from-blue-900/50 to-blue-800/50',       border: 'border-blue-500/40',    divider: 'bg-blue-500',    label: 'text-blue-400',    name: 'text-blue-300',    desc: 'text-blue-200/70',   chevron: 'text-blue-700'    },
  { bg: 'from-indigo-900/50 to-indigo-800/50',   border: 'border-indigo-500/40',  divider: 'bg-indigo-500',  label: 'text-indigo-400',  name: 'text-indigo-300',  desc: 'text-indigo-200/70', chevron: 'text-indigo-600'  },
  { bg: 'from-cyan-900/50 to-cyan-800/50',       border: 'border-cyan-500/40',    divider: 'bg-cyan-500',    label: 'text-cyan-400',    name: 'text-cyan-300',    desc: 'text-cyan-200/70',   chevron: 'text-cyan-600'    },
  { bg: 'from-emerald-900/50 to-emerald-800/50', border: 'border-emerald-500/40', divider: 'bg-emerald-500', label: 'text-emerald-400', name: 'text-emerald-300', desc: 'text-emerald-200/70', chevron: 'text-emerald-600' },
]

// Distribute palette evenly when fewer than 5 stages
const stageColors = computed(() => {
  const n = props.stages.length
  if (n === 5) return STAGE_PALETTE
  const step = (STAGE_PALETTE.length - 1) / (n - 1)
  return props.stages.map((_, i) => STAGE_PALETTE[Math.round(i * step)])
})

const DARK = {
  title:   'text-white',
  subtitle: 'text-white/60',
  caption: 'text-white/40',
}
const LIGHT = {
  title:   'text-gray-900',
  subtitle: 'text-gray-600',
  caption: 'text-gray-500',
}
const t = computed(() => isDark.value ? DARK : LIGHT)
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
    <div class="relative z-10 mb-4">
      <div class="text-lg font-bold mb-0.5" :class="t.title">{{ title }}</div>
      <div v-if="subtitle" class="text-xs" :class="t.subtitle">{{ subtitle }}</div>
    </div>

    <!-- Stage progression -->
    <div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
      <div class="flex items-stretch gap-0 flex-1 min-h-0">
        <template v-for="(stage, i) in stages" :key="'s-' + i">
          <!-- Stage card -->
          <div
            class="flex-1 flex flex-col p-3 bg-gradient-to-b rounded-xl border text-center relative"
            :class="[stageColors[i].bg, stageColors[i].border, stage.isTarget ? 'ring-2 ring-offset-1 ring-offset-transparent' : '']"
          >
            <!-- TARGET badge -->
            <div v-if="stage.isTarget" class="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-emerald-500/80 rounded-full text-white text-[10px] font-bold tracking-wide whitespace-nowrap">
              TARGET
            </div>
            <div class="text-3xl font-black leading-none mb-1 mt-1" :class="stageColors[i].label">{{ stage.label }}</div>
            <div class="w-full h-px mb-2 opacity-30" :class="stageColors[i].divider"></div>
            <div class="text-sm font-bold mb-1" :class="stageColors[i].name">{{ stage.name }}</div>
            <div class="text-xs flex-1" :class="stageColors[i].desc">{{ stage.description }}</div>
            <div v-if="stage.icon" class="mt-2 text-lg">{{ stage.icon }}</div>
          </div>
          <!-- Chevron separator -->
          <div v-if="i < stages.length - 1" class="flex items-center px-1 text-xl font-thin shrink-0" :class="stageColors[i].chevron">›</div>
        </template>
      </div>

      <!-- Optional caption -->
      <div v-if="caption" class="text-center text-xs italic" :class="t.caption">{{ caption }}</div>
    </div>
    </template>
  </div>
</template>
