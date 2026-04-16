<script setup>
import { computed } from 'vue'
import { isDark } from './useTheme'

// Hardcoded column definitions — labels and icons are canonical, not configurable
const COLUMNS = [
  { label: 'Today',      icon: '⚡' },
  { label: 'This Week',  icon: '🗓️' },
  { label: 'This Month', icon: '🚀' },
]

const props = defineProps({
  today:     { type: Array, required: true },
  thisWeek:  { type: Array, required: true },
  thisMonth: { type: Array, required: true },
  footer:    { type: String, required: true },
})

const itemSets = computed(() => [props.today, props.thisWeek, props.thisMonth])

// Overflow guards
itemSets.value.forEach((items, i) => {
  if (items.length > 5) {
    console.warn('[WhatYouCanDoTodaySlide] ⚠️ ' + COLUMNS[i].label + ' has ' + items.length + ' items (limit: 5). Risk of overflow.')
  }
})

// Fixed 3-column color scheme (enforced — not configurable per deck)
// Col 0: green/emerald  — Immediate
// Col 1: blue/indigo    — Short-Term
// Col 2: purple/pink    — Advanced
const DARK_COL_STYLES = [
  { bg: 'from-green-900/30 to-emerald-900/30',  border: 'border-green-500/30',  heading: 'text-green-300',  bullet: 'text-green-400'  },
  { bg: 'from-blue-900/30 to-indigo-900/30',    border: 'border-blue-500/30',   heading: 'text-blue-300',   bullet: 'text-blue-400'   },
  { bg: 'from-purple-900/30 to-pink-900/30',    border: 'border-purple-500/30', heading: 'text-purple-300', bullet: 'text-purple-400' },
]
const LIGHT_COL_STYLES = [
  { bg: 'from-green-100/80 to-emerald-100/80',  border: 'border-green-300',  heading: 'text-green-700',  bullet: 'text-green-600'  },
  { bg: 'from-blue-100/80 to-indigo-100/80',    border: 'border-blue-300',   heading: 'text-blue-700',   bullet: 'text-blue-600'   },
  { bg: 'from-purple-100/80 to-pink-100/80',    border: 'border-purple-300', heading: 'text-purple-700', bullet: 'text-purple-600' },
]

// Structural/ambient theme classes (pink/rose — canonical WYCDT accent color, enforced)
const DARK_THEME = {
  ambientBg:   'from-pink-900/20 via-rose-900/10 to-transparent',
  orb:         'from-pink-500/10 to-transparent',
  pill:        'from-pink-600/80 to-rose-600/80',
  divider:     'from-pink-400/60 to-transparent',
  footerCard:  'from-cyan-900/30 to-blue-900/30 border-cyan-500/30',
  footerTitle: 'text-cyan-300',
  footerText:  'text-white/90',
}
const LIGHT_THEME = {
  ambientBg:   'from-pink-100/40 via-rose-50/20 to-transparent',
  orb:         'from-pink-200/30 to-transparent',
  pill:        'from-pink-500 to-rose-500',
  divider:     'from-pink-300/60 to-transparent',
  footerCard:  'from-cyan-50/80 to-blue-50/80 border-cyan-300',
  footerTitle: 'text-cyan-600',
  footerText:  'text-gray-700',
}

const colStyles = computed(() => isDark.value ? DARK_COL_STYLES : LIGHT_COL_STYLES)
const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)
</script>

<template>
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br" :class="t.ambientBg"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl" :class="t.orb"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r rounded-full text-white text-xs font-semibold tracking-wide shadow-lg" :class="t.pill">✅ What You Can Do Today</span>
<div class="flex-1 h-px bg-gradient-to-r" :class="t.divider"></div>
</div>
<div class="relative z-10 flex-1 min-h-0">
<div class="grid grid-cols-3 gap-3">
<div v-for="(col, i) in COLUMNS" :key="i" class="flex flex-col">
<div class="p-4 bg-gradient-to-br rounded-xl border flex-1 relative overflow-hidden" :class="[colStyles[i].bg, colStyles[i].border]">
<div class="absolute top-1 right-2 text-7xl opacity-10 select-none pointer-events-none leading-none">{{ col.icon }}</div>
<div class="font-bold mb-3 text-sm" :class="colStyles[i].heading">{{ col.label }}</div>
<div class="text-xs opacity-90 space-y-2">
<div v-for="(item, j) in itemSets[i]" :key="j" class="flex items-start gap-2">
<span :class="colStyles[i].bullet">□</span>
<span>{{ item }}</span>
</div>
</div>
</div>
</div>
</div>
<div class="mt-3 p-3 bg-gradient-to-br rounded-xl border" :class="t.footerCard">
<div class="font-bold mb-1 text-base" :class="t.footerTitle">🔑 Key Takeaway</div>
<div class="text-sm" :class="t.footerText">{{ footer }}</div>
</div>
</div>
</div>
</template>
