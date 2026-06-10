<!--
  ThankYouSlide Styling Architecture:

  This component uses a three-layer styling approach that must be preserved:

  Layer 1: Layout & Structure (style.css)
    • Positioning: position: absolute, z-index
    • Layout: flex, flex-direction, justify-content, align-items
    • Sizing: height, width
    • Spacing: margin, padding
    Example: .sv-thanks-slide { position: relative; display: flex; height: 100%; }

  Layer 2: Typography & Effects (inline Tailwind utilities)
    • Sizing: text-3xl, font-bold, text-sm, w-20
    • Effects: shadow-lg, rounded, border
    • Spacing: mb, mt, gap
    • Positioning: relative
    Example: class="text-3xl font-bold" and class="w-20"

  Layer 3: Dynamic Colors (Vue theme object)
    • DARK_THEME and LIGHT_THEME with orb, tagline, footer, etc.
    • Applied via :class="t.orb" for dynamic switching
    • Never hardcode colors in the template
    Example: :class="t.tagline" → "text-indigo-300" or "text-indigo-700"

  WHY THIS MATTERS:
  All color values must come from the theme object so isDark switching works.
  The theme object is reactive, inline styles and CSS classes are not.

  DO NOT:
  - Move colors to styles.css
  - Add inline style="" attributes
  - Hardcode color classes in the template
-->

<script setup>
import { computed } from "vue";
import { isDark } from '../useTheme'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  cards: { type: Array, required: true },
  prompt: { type: String, required: true },
});

const validationError = computed(() => {
  if (!props.cards || props.cards.length < 2 || props.cards.length > 4)
    return `[ThankYouSlide] ❌ cards must contain 2–4 items (got ${props.cards?.length ?? 'none'})`
  return null
})

// Prop length limits — read by build-all.ps1 for static lint enforcement
const TITLE_MAX    = 80
const SUBTITLE_MAX = 120
const PROMPT_MAX   = 160
if (props.title?.length > TITLE_MAX)
  console.warn(`[ThankYouSlide] title is ${props.title.length} chars (max ${TITLE_MAX})`)
if (props.subtitle?.length > SUBTITLE_MAX)
  console.warn(`[ThankYouSlide] subtitle is ${props.subtitle.length} chars (max ${SUBTITLE_MAX})`)
if (props.prompt?.length > PROMPT_MAX)
  console.warn(`[ThankYouSlide] prompt is ${props.prompt.length} chars (max ${PROMPT_MAX})`)

const gridColsClass = computed(() => {
  if (props.cards.length === 4) return "grid-cols-4";
  if (props.cards.length === 2) return "grid-cols-2";
  return "grid-cols-3";
});

const DARK_CARD_STYLES = [
  { card: "bg-[#161b22] border-[#30363d]", value: "text-[#58a6ff]", subdetail: "text-[#8b949e]" },
  { card: "bg-[#161b22] border-[#30363d]", value: "text-[#3fb950]", subdetail: "text-[#8b949e]" },
  { card: "bg-[#161b22] border-[#30363d]", value: "text-[#58a6ff]", subdetail: "text-[#8b949e]" },
  { card: "bg-[#161b22] border-[#30363d]", value: "text-[#3fb950]", subdetail: "text-[#8b949e]" },
]
const LIGHT_CARD_STYLES = [
  { card: "bg-white/80 border-gray-200", value: "text-purple-700", subdetail: "text-gray-700" },
  { card: "bg-white/80 border-gray-200", value: "text-emerald-700", subdetail: "text-gray-700" },
  { card: "bg-white/80 border-gray-200", value: "text-violet-700", subdetail: "text-gray-700" },
  { card: "bg-white/80 border-gray-200", value: "text-green-700", subdetail: "text-gray-700" },
]

const DARK_THEME = {
  ambientBg: 'from-[#0d1117] to-[#0d1117]',
  orb:       'from-transparent to-transparent',
  heading:   'from-[#e6edf3] to-[#e6edf3]',
  pill:      'from-[#238636] to-[#238636] shadow-none',
  divider:   'via-[#30363d]',
}
const LIGHT_THEME = {
  ambientBg: 'from-white via-gray-100 to-gray-50',
  orb:       'from-purple-200/25 via-emerald-200/20 to-transparent',
  heading:   'from-purple-700 via-emerald-700 to-green-700',
  pill:      'from-purple-500 to-emerald-500 shadow-purple-200/50',
  divider:   'via-purple-400/60',
}

const cardStyles = computed(() => isDark.value ? DARK_CARD_STYLES : LIGHT_CARD_STYLES)
const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)
</script>

<template>
  <!-- Full-height centered container -->
  <div class="h-full flex flex-col items-center justify-center relative overflow-hidden">
    <div v-if="validationError" class="absolute inset-0 bg-red-950 flex flex-col items-center justify-center z-50 p-12">
      <div class="text-red-400 text-4xl mb-4">⛔</div>
      <div class="font-mono text-red-300 text-base text-center leading-relaxed max-w-2xl">{{ validationError }}</div>
    </div>
    <template v-else>
    <!-- Ambient gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br" :class="t.ambientBg"></div>

    <!-- Animated blur orb (centered) -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r rounded-full blur-3xl" :class="t.orb"></div>

    <!-- ===== CENTER CONTENT ===== -->
    <div class="relative z-10 flex flex-col items-center text-center">
      <!-- ===== HEADING ===== -->
      <!-- Main title with gradient text -->
      <h1 class="!text-4xl !font-bold !mb-2 bg-gradient-to-r bg-clip-text text-transparent" :class="t.heading">
        {{ title }}
      </h1>

      <!-- ===== SUBTITLE PILL ===== -->
      <!-- Tagline in pill format -->
      <div class="mb-3">
        <span class="px-6 py-1 bg-gradient-to-r rounded-full text-white text-sm font-medium shadow-lg" :class="t.pill">
          {{ subtitle }}
        </span>
      </div>

      <!-- ===== CARDS SECTION ===== -->
      <!-- Grid of outcome/detail cards (2, 3, or 4 columns based on card count) -->
      <div class="grid gap-2 max-w-3xl text-sm mb-3" :class="gridColsClass">
        <!-- Card item -->
        <div
          v-for="(card, index) in cards"
          :key="index"
          :class="cardStyles[index % 4].card"
          class="p-2 rounded-xl border"
        >
          <!-- Card icon (large watermark) -->
          <div class="text-2xl mb-1">
            {{ card.icon }}
          </div>

          <!-- Card value (main number/metric) -->
          <div :class="cardStyles[index % 4].value" class="text-xl font-bold">
            {{ card.value }}
          </div>

          <!-- Card detail (metric description) -->
          <div class="text-xs opacity-80 mt-1">
            {{ card.detail }}
          </div>

          <!-- Card subdetail (additional info) -->
          <div :class="cardStyles[index % 4].subdetail" class="text-xs mt-1">
            {{ card.subdetail }}
          </div>
        </div>
      </div>

      <!-- ===== PROMPT/CTA ===== -->
      <!-- Call-to-action or final prompt -->
      <div class="text-sm opacity-70">
        {{ prompt }}
      </div>
    </div>

    <!-- ===== BOTTOM DIVIDER ===== -->
    <!-- Decorative bottom line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent" :class="t.divider"></div>
    </template>
  </div>
</template>
