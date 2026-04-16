<script setup>
import { computed } from 'vue'
import { isDark } from './useTheme'

const props = defineProps({
  sections: {
    type: Array,
    required: true,
    validator: (val) => {
      if (val.length !== 4) {
        console.error('[TocSlide] ❌ sections must contain exactly 4 items (got ' + val.length + ')')
        return false
      }
      return true
    },
  },
})

// Overflow guards — limits: title ≤40, subtitle ≤80, blurb ≤100
props.sections.forEach((s, i) => {
  if (!s.icon) {
    console.error('[TocSlide] ❌ sections[' + i + '].icon is required')
  }
  if (!s.blurb) {
    console.error('[TocSlide] ❌ sections[' + i + '].blurb is required')
  }
  if ((s.title?.length ?? 0) > 40) {
    console.warn('[TocSlide] ⚠️ sections[' + i + '].title is ' + s.title.length + ' chars (limit: 40). Risk of overflow.')
  }
  if ((s.subtitle?.length ?? 0) > 80) {
    console.warn('[TocSlide] ⚠️ sections[' + i + '].subtitle is ' + s.subtitle.length + ' chars (limit: 80). Risk of overflow.')
  }
  if ((s.blurb?.length ?? 0) > 100) {
    console.warn('[TocSlide] ⚠️ sections[' + i + '].blurb is ' + s.blurb.length + ' chars (limit: 100). Risk of overflow.')
  }
})

// Card styles: cyan → blue → indigo → purple
const DARK_CARD_STYLES = [
  { bg: 'from-cyan-900/40 to-blue-900/40',     border: 'border-cyan-500/50',   hover: 'hover:border-cyan-400',   titleGrad: 'from-cyan-300 to-blue-300',     shadow: 'shadow-lg shadow-cyan-500/10',   blurb: 'text-cyan-400/70'   },
  { bg: 'from-blue-900/40 to-indigo-900/40',   border: 'border-blue-500/50',   hover: 'hover:border-blue-400',   titleGrad: 'from-blue-300 to-indigo-300',   shadow: 'shadow-lg shadow-blue-500/10',   blurb: 'text-blue-400/70'   },
  { bg: 'from-indigo-900/40 to-purple-900/40', border: 'border-indigo-500/50', hover: 'hover:border-indigo-400', titleGrad: 'from-indigo-300 to-purple-300', shadow: 'shadow-lg shadow-indigo-500/10', blurb: 'text-indigo-400/70' },
  { bg: 'from-purple-900/40 to-pink-900/40',   border: 'border-purple-500/50', hover: 'hover:border-purple-400', titleGrad: 'from-purple-300 to-pink-300',   shadow: 'shadow-lg shadow-purple-500/10', blurb: 'text-purple-400/70' },
]
const LIGHT_CARD_STYLES = [
  { bg: 'from-cyan-100/80 to-blue-100/80',     border: 'border-cyan-300',   hover: 'hover:border-cyan-500',   titleGrad: 'from-cyan-600 to-blue-600',     shadow: 'shadow-lg shadow-cyan-200/50',   blurb: 'text-cyan-700/80'   },
  { bg: 'from-blue-100/80 to-indigo-100/80',   border: 'border-blue-300',   hover: 'hover:border-blue-500',   titleGrad: 'from-blue-600 to-indigo-600',   shadow: 'shadow-lg shadow-blue-200/50',   blurb: 'text-blue-700/80'   },
  { bg: 'from-indigo-100/80 to-purple-100/80', border: 'border-indigo-300', hover: 'hover:border-indigo-500', titleGrad: 'from-indigo-600 to-purple-600', shadow: 'shadow-lg shadow-indigo-200/50', blurb: 'text-indigo-700/80' },
  { bg: 'from-purple-100/80 to-pink-100/80',   border: 'border-purple-300', hover: 'hover:border-purple-500', titleGrad: 'from-purple-600 to-pink-600',   shadow: 'shadow-lg shadow-purple-200/50', blurb: 'text-purple-700/80' },
]

// Structural/ambient theme classes
const DARK_THEME = {
  ambientBg:    'from-blue-900/20 via-indigo-900/10 to-transparent',
  orb:          'from-blue-500/10 to-transparent',
  pill:         'from-blue-600/80 to-indigo-600/80',
  divider:      'from-blue-400/60 to-transparent',
  subtitleText: 'text-gray-300',
}
const LIGHT_THEME = {
  ambientBg:    'from-blue-100/40 via-indigo-50/20 to-transparent',
  orb:          'from-blue-200/30 to-transparent',
  pill:         'from-blue-500 to-indigo-500',
  divider:      'from-blue-300/60 to-transparent',
  subtitleText: 'text-gray-600',
}

const cardStyles = computed(() => isDark.value ? DARK_CARD_STYLES : LIGHT_CARD_STYLES)
const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)
</script>

<template>
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br" :class="t.ambientBg"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl" :class="t.orb"></div>
<div class="relative z-10 flex items-center gap-3 mb-4">
<span class="px-4 py-1 bg-gradient-to-r rounded-full text-white text-xs font-semibold tracking-wide shadow-lg" :class="t.pill">📖 Table of Contents</span>
<div class="flex-1 h-px bg-gradient-to-r" :class="t.divider"></div>
</div>
<div class="relative z-10 flex-1 min-h-0 flex flex-col">
<div class="grid grid-cols-2 grid-rows-2 gap-6 mt-2 flex-1">
<div
v-for="(section, i) in sections"
:key="i"
@click="$nav.go(section.slide)"
class="cursor-pointer group h-full">
<div
class="relative p-7 bg-gradient-to-br rounded-xl border-2 hover:scale-[1.02] transition-all duration-300 overflow-hidden h-full"
:class="[cardStyles[i].bg, cardStyles[i].border, cardStyles[i].hover, cardStyles[i].shadow]">
<div class="absolute bottom-2 right-4 text-9xl opacity-10 select-none pointer-events-none leading-none">{{ section.icon }}</div>
<div class="relative text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2" :class="cardStyles[i].titleGrad">{{ section.title }}</div>
<div class="relative text-sm mt-1" :class="t.subtitleText">{{ section.subtitle }}</div>
<div class="relative text-sm mt-3" :class="cardStyles[i].blurb">{{ section.blurb }}</div>
</div>
</div>
</div>
<div class="mt-3 mb-1 text-center text-sm opacity-40">Click any section to jump directly there</div>
</div>
</div>
</template>
