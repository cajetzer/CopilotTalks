<!--
  BeforeAfterSlide Styling Architecture:

  This component uses a three-layer styling approach that must be preserved:

  Layer 1: Layout & Structure (style.css)
    • Positioning: position: absolute, z-index, inset
    • Layout: flex, flex-direction, justify-content
    • Sizing: height, border-radius
    • Spacing: padding, margin, gap
    Example: .sv-before-after-slide { position: relative; display: flex; }

  Layer 2: Typography & Effects (inline Tailwind utilities)
    • Grid layout: grid, grid-cols-2, grid-cols-3, gap
    • Sizing: text-sm, text-xs, text-xl, font-bold
    • Spacing: p-3, mb-2, mb-4, mt-1
    • Positioning: relative, absolute
    Example: class="grid grid-cols-3 gap-3" and class="font-bold text-xl"

  Layer 3: Dynamic Colors (Vue theme object)
    • DARK_THEME and LIGHT_THEME objects with ambient, orb, pill, colors
    • metricStyles computed array for per-metric colors
    • Applied via :class="t.leftBg" for left column, etc.
    • Never hardcode colors in the template
    Example: :class="metricStyles[idx].bg" → "from-cyan-900/30 to-cyan-800/20"

  WHY THIS MATTERS:
  The metric colors are in a computed array so they react to isDark. This ensures
  the 3-column metrics grid always shows the correct colors without duplication.

  DO NOT:
  - Move left/right/metric colors to styles.css (breaks isDark reactivity)
  - Add inline style="" attributes
  - Hardcode gradients like "from-red-900/30" in the template
-->

<script setup>
import { computed } from 'vue'
import { isDark } from '../useTheme'

const props = defineProps({
  header:      { type: String, required: true },
  leftItems:   { type: Array,  required: true },
  rightItems:  { type: Array,  required: true },
  metrics:     { type: Array,  required: true }, // exactly 3: { value, detail }
})

const validationError = computed(() => {
  if (!props.metrics || props.metrics.length !== 3)
    return `[BeforeAfterSlide] ❌ metrics must contain exactly 3 items (got ${props.metrics?.length ?? 'none'})`
  return null
})

// Prop length limits — read by build-all.ps1 for static lint enforcement
const ITEMS_MAX  = 4
const HEADER_MAX = 80
if (props.header?.length > HEADER_MAX)
  console.warn(`[BeforeAfterSlide] header is ${props.header.length} chars (max ${HEADER_MAX})`)
if (props.leftItems && props.leftItems.length > ITEMS_MAX)
  console.warn(`[BeforeAfterSlide] leftItems has ${props.leftItems.length} items (max ${ITEMS_MAX})`)
if (props.rightItems && props.rightItems.length > ITEMS_MAX)
  console.warn(`[BeforeAfterSlide] rightItems has ${props.rightItems.length} items (max ${ITEMS_MAX})`)

const DARK_THEME = {
  ambientBg: 'from-[#101411] via-[#101411] to-black',
  orb: 'from-[#43179E]/15 via-[#238636]/8 to-transparent',
  pill: 'from-[#43179E]/80 to-[#238636]/80',
  header: 'text-white',
  leftBg: 'bg-gradient-to-br from-red-900/30 to-red-800/20',
  leftBorder: 'border-red-500/30',
  leftLabel: 'text-red-300',
  leftItem: 'bg-red-900/20',
  rightBg: 'bg-gradient-to-br from-[#238636]/20 to-[#0FBF3E]/10',
  rightBorder: 'border-[#238636]/30',
  rightLabel: 'text-[#0FBF3E]',
  rightItem: 'bg-[#238636]/10',
  metricContainers: [
    { bg: 'bg-gradient-to-br from-[#232925]/70 to-[#232925]/50', border: 'border-[#8534F3]/30', value: 'text-[#B870FF]' },
    { bg: 'bg-gradient-to-br from-[#232925]/70 to-[#232925]/50', border: 'border-[#238636]/30', value: 'text-[#0FBF3E]' },
    { bg: 'bg-gradient-to-br from-[#232925]/70 to-[#232925]/50', border: 'border-[#B870FF]/30', value: 'text-[#B870FF]' },
  ],
  metricDetail: 'text-white/50',
  itemText: 'text-[#c9d1d9]',
}

const LIGHT_THEME = {
  ambientBg: 'from-white via-gray-100 to-gray-50',
  orb: 'from-purple-200/25 via-emerald-200/20 to-transparent',
  pill: 'from-purple-500 to-emerald-500',
  header: 'text-gray-900',
  leftBg: 'bg-gradient-to-br from-red-50 to-orange-50',
  leftBorder: 'border-red-200',
  leftLabel: 'text-red-700',
  leftItem: 'bg-red-100',
  rightBg: 'bg-gradient-to-br from-green-50 to-emerald-50',
  rightBorder: 'border-green-200',
  rightLabel: 'text-emerald-700',
  rightItem: 'bg-emerald-100',
  metricContainers: [
    { bg: 'bg-white/80', border: 'border-purple-200', value: 'text-purple-700' },
    { bg: 'bg-white/80', border: 'border-emerald-200', value: 'text-emerald-700' },
    { bg: 'bg-white/80', border: 'border-violet-200', value: 'text-violet-700' },
  ],
  metricDetail: 'text-gray-600',
  itemText: 'text-gray-700',
}

const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)
const metricStyles = computed(() => isDark.value ? DARK_THEME.metricContainers : LIGHT_THEME.metricContainers)
</script>

<template>
  <!-- Full-height container -->
  <div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
    <div v-if="validationError" class="absolute inset-0 bg-red-950 flex flex-col items-center justify-center z-50 p-12">
      <div class="text-red-400 text-4xl mb-4">⛔</div>
      <div class="font-mono text-red-300 text-base text-center leading-relaxed max-w-2xl">{{ validationError }}</div>
    </div>
    <template v-else>
    <!-- Ambient gradient background -->
    <div :class="['absolute inset-0 bg-gradient-to-br', t.ambientBg]"></div>

    <!-- Animated blur orb in top-right -->
    <div :class="['absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl', t.orb]"></div>

    <!-- ===== HEADER SECTION ===== -->
    <!-- Section label pill + divider -->
    <div class="relative z-10 flex items-center gap-3 mb-4">
      <span :class="['px-4 py-1 bg-gradient-to-r', t.pill, 'rounded-full text-white text-xs font-semibold tracking-wide shadow-lg']">
        📊 The Value Recap
      </span>
      <div class="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
    </div>

    <!-- Contextual header describing the before/after topic -->
    <div class="relative z-10 mb-4">
      <div :class="['text-2xl font-bold', t.header]">
        {{ header }}
      </div>
    </div>

    <!-- ===== MAIN CONTENT SECTION ===== -->
    <div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
      <!-- Two-column before/after comparison -->
      <div class="grid grid-cols-2 gap-4">
        <!-- LEFT COLUMN: BEFORE STATE -->
        <div :class="['p-3 rounded-xl border', t.leftBg, t.leftBorder]">
          <!-- Column label -->
          <div :class="['font-bold mb-2 text-sm', t.leftLabel]">
            Before
          </div>
          <!-- Before items list -->
          <div :class="['space-y-1.5 text-xs', t.itemText]">
            <div v-for="(item, idx) in leftItems" :key="'left-' + idx" :class="['p-1.5 rounded', t.leftItem]">
              {{ item }}
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: AFTER STATE -->
        <div :class="['p-3 rounded-xl border', t.rightBg, t.rightBorder]">
          <!-- Column label -->
          <div :class="['font-bold mb-2 text-sm', t.rightLabel]">
            After
          </div>
          <!-- After items list -->
          <div :class="['space-y-1.5 text-xs', t.itemText]">
            <div v-for="(item, idx) in rightItems" :key="'right-' + idx" :class="['p-1.5 rounded', t.rightItem]">
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <!-- THREE-COLUMN METRICS GRID: Shows key outcome numbers -->
      <div class="grid grid-cols-3 gap-3 text-center">
        <div v-for="(metric, idx) in metrics" :key="'metric-' + idx" :class="['p-3 rounded-lg border', metricStyles[idx].bg, metricStyles[idx].border]">
          <!-- Metric value (main number) -->
          <div :class="['font-bold text-xl', metricStyles[idx].value]">
            {{ metric.value }}
          </div>
          <!-- Metric description (label) -->
          <div :class="['text-xs mt-1', t.metricDetail]">
            {{ metric.detail }}
          </div>
        </div>
      </div>
    </div>
    </template>
  </div>
</template>
