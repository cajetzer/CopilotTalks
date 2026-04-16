<!--
  WhatYouCanDoTodaySlide Styling Architecture:

  This component uses a three-layer styling approach that must be preserved:

  Layer 1: Layout & Structure (style.css)
    • Positioning: position: absolute, z-index
    • Layout: flex, flex-direction, justify-content, grid, grid-cols
    • Sizing: height, width, border-radius
    • Spacing: padding, margin, gap
    Example: .sv-wycdt-slide { position: relative; display: flex; height: 100%; }

  Layer 2: Typography & Effects (inline Tailwind utilities)
    • Sizing: text-2xl, font-bold, text-xs, text-xl
    • Spacing: mb, mt, p-4, gap-3
    • Positioning: relative
    • Effects: rounded-lg, border, line-clamp
    Example: class="grid grid-cols-3 gap-4" and class="text-2xl font-bold"

  Layer 3: Dynamic Colors (Vue theme object)
    • DARK_THEME and LIGHT_THEME for column colors, text, backgrounds
    • columnStyles computed array for per-column (Today/Week/Month) colors
    • Applied via :class="columnStyles[i].bg" for dynamic switching
    • Never hardcode colors in the template
    Example: :class="columnStyles[0].bg" → "from-pink-900/30 to-rose-900/30"

  WHY THIS MATTERS:
  Each column (Today/Week/Month) needs its own color set that reacts to isDark.
  Using a computed columnStyles array keeps colors reactive and maintainable.

  DO NOT:
  - Move column colors to styles.css (breaks isDark reactivity)
  - Add inline style="" attributes
  - Hardcode colors like "from-pink-900/30" in the template
-->

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
  <!-- Full-height container -->
  <div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
    <!-- Ambient gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br" :class="t.ambientBg"></div>

    <!-- Animated blur orb in top-right -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl" :class="t.orb"></div>

    <!-- ===== HEADER SECTION ===== -->
    <!-- Section label pill + divider -->
    <div class="relative z-10 flex items-center gap-3 mb-3">
      <span class="px-4 py-1 bg-gradient-to-r rounded-full text-white text-xs font-semibold tracking-wide shadow-lg" :class="t.pill">
        ✅ What You Can Do Today
      </span>
      <div class="flex-1 h-px bg-gradient-to-r" :class="t.divider"></div>
    </div>

    <!-- ===== MAIN CONTENT SECTION ===== -->
    <div class="relative z-10 flex-1 min-h-0">
      <!-- Three-column timeframe grid: Today / This Week / This Month -->
      <div class="grid grid-cols-3 gap-3">
        <!-- Column for each timeframe -->
        <div v-for="(col, i) in COLUMNS" :key="i" class="flex flex-col">
          <!-- Column container -->
          <div class="p-4 bg-gradient-to-br rounded-xl border flex-1 relative overflow-hidden" :class="[colStyles[i].bg, colStyles[i].border]">
            <!-- Large icon watermark (background) -->
            <div class="absolute top-1 right-2 text-7xl opacity-10 select-none pointer-events-none leading-none">
              {{ col.icon }}
            </div>

            <!-- Column heading (Today / This Week / This Month) -->
            <div class="font-bold mb-3 text-sm" :class="colStyles[i].heading">
              {{ col.label }}
            </div>

            <!-- List of action items for this timeframe -->
            <div class="text-xs opacity-90 space-y-2">
              <div v-for="(item, j) in itemSets[i]" :key="j" class="flex items-start gap-2">
                <!-- Bullet point -->
                <span :class="colStyles[i].bullet">□</span>
                <!-- Action item text -->
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== FOOTER SECTION ===== -->
      <!-- Key takeaway message card -->
      <div class="mt-3 p-3 bg-gradient-to-br rounded-xl border" :class="t.footerCard">
        <!-- Footer heading icon -->
        <div class="font-bold mb-1 text-base" :class="t.footerTitle">
          🔑 Key Takeaway
        </div>
        <!-- Footer message text -->
        <div class="text-sm" :class="t.footerText">
          {{ footer }}
        </div>
      </div>
    </div>
  </div>
</template>
