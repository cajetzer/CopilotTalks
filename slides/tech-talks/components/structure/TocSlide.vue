<!--
  TocSlide Styling Architecture:

  This component uses a three-layer styling approach that must be preserved:

  Layer 1: Layout & Structure (style.css)
    • Positioning: position: absolute, z-index
    • Layout: flex, flex-direction, justify-content, grid
    • Sizing: height, width, border-radius
    • Spacing: padding, margin, gap
    Example: .sv-toc-slide { position: relative; display: flex; height: 100%; }

  Layer 2: Typography & Effects (inline Tailwind utilities)
    • Grid layout: grid, grid-cols-2, gap-4
    • Sizing: text-2xl, font-bold, text-sm, text-xs
    • Spacing: p-4, mb, mt
    • Positioning: relative, absolute
    • Effects: rounded-lg, border, line-clamp
    Example: class="grid grid-cols-2 gap-4" and class="text-2xl font-bold"

  Layer 3: Dynamic Colors (Vue theme object)
    • cardStyles computed array with 4 color sets (one per section)
    • DARK_THEME and LIGHT_THEME for structural colors (pill, divider, title)
    • Applied via :class="cardStyles[i].bg" for dynamic switching
    • Never hardcode colors in the template
    Example: :class="cardStyles[0].bg" → "from-cyan-900/30 to-blue-900/30"

  WHY THIS MATTERS:
  The 4 table-of-contents cards each need distinct colors that react to isDark.
  Using computed cardStyles ensures the colors update when the theme changes.

  DO NOT:
  - Move card colors to styles.css (breaks isDark reactivity)
  - Add inline style="" attributes
  - Hardcode colors in the template
-->

<script setup>
import { computed } from 'vue'
import { isDark } from '../useTheme'

const props = defineProps({
  sections: {
    type: Array,
    required: true,
    validator: (val) => val.length === 4,
  },
})

// Prop length limits — read by build-all.ps1 for static lint enforcement
const SECTIONS_MAX   = 4   // sections array must be exactly 4 items
const CARD_TITLE_MAX = 49
const CARD_BLURB_MAX = 100

const validationError = computed(() => {
  if (!props.sections || props.sections.length !== 4)
    return `[TocSlide] ❌ sections must contain exactly 4 items (got ${props.sections?.length ?? 'none'})`
  for (let i = 0; i < props.sections.length; i++) {
    if (!props.sections[i].icon)  return `[TocSlide] ❌ sections[${i}].icon is required`
    if (!props.sections[i].blurb) return `[TocSlide] ❌ sections[${i}].blurb is required`
  }
  return null
})

props.sections?.forEach((s, i) => {
  if (s.title?.length > CARD_TITLE_MAX)
    console.warn(`[TocSlide] sections[${i}].title too long (${s.title.length} chars, max ${CARD_TITLE_MAX}): "${s.title}"`)
  if (s.blurb?.length > CARD_BLURB_MAX)
    console.warn(`[TocSlide] sections[${i}].blurb too long (${s.blurb.length} chars, max ${CARD_BLURB_MAX}): "${s.blurb.slice(0, 50)}…"`)
})

// Card styles: Primer brand palette
const DARK_CARD_STYLES = [
  { bg: 'from-[#232925]/70 to-[#232925]/50', border: 'border-[#8534F3]/40', hover: 'hover:border-[#B870FF]', titleGrad: 'from-[#8534F3] to-[#B870FF]', shadow: 'shadow-lg shadow-[#8534F3]/10', blurb: 'text-[#c9d1d9]', partNum: 'text-[#B870FF]/80' },
  { bg: 'from-[#232925]/70 to-[#232925]/50', border: 'border-[#238636]/40', hover: 'hover:border-[#0FBF3E]', titleGrad: 'from-[#238636] to-[#0FBF3E]', shadow: 'shadow-lg shadow-[#238636]/10', blurb: 'text-[#c9d1d9]', partNum: 'text-[#0FBF3E]/80' },
  { bg: 'from-[#232925]/70 to-[#232925]/50', border: 'border-[#B870FF]/40', hover: 'hover:border-[#8534F3]', titleGrad: 'from-[#B870FF] to-[#8534F3]', shadow: 'shadow-lg shadow-[#B870FF]/10', blurb: 'text-[#c9d1d9]', partNum: 'text-[#B870FF]/80' },
  { bg: 'from-[#232925]/70 to-[#232925]/50', border: 'border-[#0FBF3E]/40', hover: 'hover:border-[#238636]', titleGrad: 'from-[#0FBF3E] to-[#238636]', shadow: 'shadow-lg shadow-[#0FBF3E]/10', blurb: 'text-[#c9d1d9]', partNum: 'text-[#0FBF3E]/80' },
]
const LIGHT_CARD_STYLES = [
  { bg: 'from-white/90 to-gray-100/80', border: 'border-purple-200', hover: 'hover:border-purple-300', titleGrad: 'from-purple-700 to-emerald-700', shadow: 'shadow-lg shadow-purple-100/70', blurb: 'text-gray-700', partNum: 'text-purple-700/80' },
  { bg: 'from-white/90 to-gray-100/80', border: 'border-emerald-200', hover: 'hover:border-emerald-300', titleGrad: 'from-emerald-700 to-green-700', shadow: 'shadow-lg shadow-emerald-100/70', blurb: 'text-gray-700', partNum: 'text-emerald-700/80' },
  { bg: 'from-white/90 to-gray-100/80', border: 'border-violet-200', hover: 'hover:border-violet-300', titleGrad: 'from-violet-700 to-purple-700', shadow: 'shadow-lg shadow-violet-100/70', blurb: 'text-gray-700', partNum: 'text-violet-700/80' },
  { bg: 'from-white/90 to-gray-100/80', border: 'border-green-200', hover: 'hover:border-green-300', titleGrad: 'from-green-700 to-emerald-700', shadow: 'shadow-lg shadow-green-100/70', blurb: 'text-gray-700', partNum: 'text-green-700/80' },
]

// Structural/ambient theme classes
const DARK_THEME = {
  ambientBg:    'from-[#101411] via-[#101411] to-black',
  orb:          'from-[#43179E]/15 via-[#238636]/8 to-transparent',
  pill:         'from-[#43179E]/80 to-[#238636]/80',
  divider:      'from-[#8534F3]/60 to-transparent',
  subtitleText: 'text-[#c9d1d9]',
}
const LIGHT_THEME = {
  ambientBg:    'from-white via-gray-100 to-gray-50',
  orb:          'from-purple-200/25 via-emerald-200/20 to-transparent',
  pill:         'from-purple-500 to-emerald-500',
  divider:      'from-purple-300/60 to-transparent',
  subtitleText: 'text-gray-600',
}

const cardStyles = computed(() => isDark.value ? DARK_CARD_STYLES : LIGHT_CARD_STYLES)
const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)
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
    <div class="absolute inset-0 bg-gradient-to-br" :class="t.ambientBg"></div>

    <!-- Animated blur orb in top-right -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl rounded-full blur-3xl" :class="t.orb"></div>

    <!-- ===== HEADER SECTION ===== -->
    <!-- Section label pill + divider -->
    <div class="relative z-10 flex items-center gap-3 mb-4">
      <span class="px-4 py-1 bg-gradient-to-r rounded-full text-white text-xs font-semibold tracking-wide shadow-lg" :class="t.pill">
        📖 Table of Contents
      </span>
      <div class="flex-1 h-px bg-gradient-to-r" :class="t.divider"></div>
    </div>

    <!-- ===== CONTENT SECTION ===== -->
    <!-- 2x2 grid of major sections -->
    <div class="relative z-10 flex-1 min-h-0 flex flex-col">
      <div class="grid grid-cols-2 grid-rows-2 gap-6 mt-2 flex-1">
        <!-- Section card (clickable to navigate) -->
        <div
          v-for="(section, i) in sections"
          :key="i"
          @click="$nav.go(section.slide)"
          class="cursor-pointer group h-full"
        >
          <div
            class="relative p-7 bg-gradient-to-br rounded-xl border-2 hover:scale-[1.02] transition-all duration-300 overflow-hidden h-full"
            :class="[cardStyles[i].bg, cardStyles[i].border, cardStyles[i].hover, cardStyles[i].shadow]"
          >
            <!-- Large icon watermark (background) -->
            <div class="absolute bottom-2 right-4 text-9xl opacity-10 select-none pointer-events-none leading-none">
              {{ section.icon }}
            </div>

            <!-- Part number badge (top-right) -->
            <div class="absolute top-3 right-4 text-xs font-bold tracking-widest uppercase" :class="cardStyles[i].partNum">
              Part {{ i + 1 }}
            </div>

            <!-- Section title with gradient text -->
            <div class="relative text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2" :class="cardStyles[i].titleGrad">
              {{ section.title }}
            </div>

            <!-- Section subtitle -->
            <div class="relative text-sm mt-1" :class="t.subtitleText">
              {{ section.subtitle }}
            </div>

            <!-- Section description/blurb -->
            <div class="relative text-sm mt-3" :class="cardStyles[i].blurb">
              {{ section.blurb }}
            </div>
          </div>
        </div>
      </div>

      <!-- Footer hint text -->
      <div class="mt-3 mb-1 text-center text-sm" :class="t.subtitleText">
        Click any section to jump directly there
      </div>
    </div>
    </template>
  </div>
</template>
