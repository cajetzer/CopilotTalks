<!--
  AITerminalTranscriptSlide

  A cinematic terminal block rendering a multi-turn AI conversation:
  green shell prompt, cyan user input, yellow "thinking" state, white
  indented assistant response lines, and green outcome checkmarks.

  Makes AI capability tangible — instead of claiming it, shows it.
  The thinking beat creates suspense; the outcome lines deliver payoff.

  Semantic terminal colors are hardcoded per architecture:
    prompt   → text-green-400       ($ command)
    user     → text-cyan-300        (> "user input")
    thinking → text-yellow-300/80   (🤔 Copilot:)
    response → text-white/70 pl-4   (indented assistant lines)
    divider  → border-t cyan line
    outcome  → text-green-400       (✅ result)
  Chrome and progress dots respond to partNumber.

  Props:
    partNumber    1–4, drives chrome + progress dot accent
    pillIcon      emoji for the section badge
    pillLabel     text for the section badge
    title         slide headline
    subtitle      optional sub-headline
    transcript    Array of turn objects — see types below:
                  { type: 'prompt',   text: string }
                  { type: 'user',     text: string }
                  { type: 'thinking', label?: string }  label defaults to "🤔 Copilot:"
                  { type: 'response', lines: string[] }
                  { type: 'divider' }
                  { type: 'outcome',  text: string }
    footerMetric  optional bottom-right caption (e.g. "8 min → 45 sec")
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
  transcript:   { type: Array,  required: true },
  footerMetric: { type: String, required: false, default: '' },
  progressDots: { type: Object, required: true }, // { current, total, activeColor }
})

validatePartNumber(props.partNumber, 'AITerminalTranscriptSlide')

const chrome = useSectionChrome(() => props.partNumber)

// Prop length limits — read by build-all.ps1 for static lint enforcement
const TITLE_MAX = 80
const TRANSCRIPT_MAX = 12
if (props.transcript && props.transcript.length > TRANSCRIPT_MAX)
  console.warn(`[AITerminalTranscriptSlide] transcript has ${props.transcript.length} turns (max ${TRANSCRIPT_MAX})`)

const DARK = {
  title:    'text-white',
  subtitle: 'text-white/60',
  terminal: 'bg-gray-950/60 border-cyan-500/20',
}
const LIGHT = {
  title:    'text-gray-900',
  subtitle: 'text-gray-600',
  terminal: 'bg-gray-900/80 border-cyan-500/30',
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

    <!-- Terminal block -->
    <div class="relative z-10 flex-1 min-h-0">
      <div class="font-mono text-xs rounded-xl border p-4 space-y-1.5 overflow-y-auto h-full" :class="t.terminal">
        <template v-for="(turn, i) in transcript" :key="'t-' + i">
          <!-- $ prompt -->
          <div v-if="turn.type === 'prompt'" class="text-green-400">$ {{ turn.text }}</div>
          <!-- > user input -->
          <div v-else-if="turn.type === 'user'" class="text-cyan-300">&gt; "{{ turn.text }}"</div>
          <!-- thinking / planning state -->
          <div v-else-if="turn.type === 'thinking'">
            <div class="text-yellow-300/80 mt-1">{{ turn.label || '🤔 Copilot:' }}</div>
          </div>
          <!-- assistant response lines -->
          <div v-else-if="turn.type === 'response'">
            <div v-for="(line, j) in turn.lines" :key="'r-' + j" class="text-white/70 pl-4">{{ line }}</div>
          </div>
          <!-- horizontal divider -->
          <div v-else-if="turn.type === 'divider'" class="border-t border-cyan-500/20 my-1"></div>
          <!-- ✅ outcome -->
          <div v-else-if="turn.type === 'outcome'" class="text-green-400">✅ {{ turn.text }}</div>
        </template>
      </div>
    </div>

    <!-- Optional footer metric -->
    <div v-if="footerMetric" class="relative z-10 mt-2 text-right text-xs italic text-white/40">{{ footerMetric }}</div>
  </div>
</template>
