<!--
  TitleSlide Styling Architecture:

  This component uses a three-layer styling approach that must be preserved:

  Layer 1: Layout & Structure (style.css)
    • Positioning: position: absolute, z-index, inset
    • Layout: flex, flex-direction, justify-content, align-items
    • Sizing: width, height, border-radius
    • Spacing: margin, padding
    Example: .sv-title-slide { position: relative; display: flex; height: 100%; }

  Layer 2: Typography & Effects (inline Tailwind utilities)
    • Sizing: w-64, !text-5xl, !font-bold, !mt-8
    • Effects: shadow-lg, bg-clip-text, text-transparent
    • Positioning: relative
    Example: class="w-64 relative" and class="!text-5xl !font-bold"

  Layer 3: Dynamic Colors (Vue theme object)
    • Component-aware color schemes defined in DARK_THEME and LIGHT_THEME
    • Applied via :class="t.bg" for dynamic dark/light switching
    • Never hardcode gradient colors in the template
    Example: :class="t.bg" → "from-cyan-900/20 via-blue-900/10 to-indigo-900/20"

  WHY THIS MATTERS:
  CSS variables + @apply would look cleaner but break theme switching. The theme
  object is Vue reactive (isDark ref), so it must drive color class selection.
  Splitting layout (CSS) from colors (Vue) is intentional and good.

  DO NOT:
  - Move gradient colors to styles.css (breaks isDark reactivity)
  - Add inline style="" attributes (loses Tailwind benefits)
  - Use data-theme attributes (conflicts with isDark ref logic)
-->

<template>
  <div v-if="validationError" class="h-full bg-red-950 flex flex-col items-center justify-center p-12">
    <div class="text-red-400 text-4xl mb-4">⛔</div>
    <div class="font-mono text-red-300 text-base text-center leading-relaxed max-w-2xl">{{ validationError }}</div>
  </div>
  <template v-else>
  <!-- Full-height container with flexbox centering -->
  <div class="sv-title-slide">
    <!-- Ambient gradient background -->
    <div class="sv-title-bg bg-gradient-to-br" :class="t.bg"></div>

    <!-- Animated blur orb -->
    <div class="sv-title-orb bg-gradient-to-r" :class="t.orb"></div>

    <!-- Primer-style opener: neutral canvas + restrained accent -->
    <div class="sv-title-kicker text-xs uppercase tracking-[0.35em] opacity-80">GitHub Copilot · Tech Talk</div>

    <!-- Main title with gradient text effect -->
    <h1 class="sv-title-heading !text-5xl !font-bold !mt-8 bg-gradient-to-r bg-clip-text text-transparent" :class="t.heading">
      {{ title }}
    </h1>

    <!-- Subtitle pill (theme-colored background) -->
    <div class="sv-title-pill-wrap">
      <span class="sv-title-pill bg-gradient-to-r shadow-lg" :class="t.pill">
        {{ subtitle }}
      </span>
    </div>

    <!-- Optional tagline text -->
    <div class="sv-title-tagline">
      {{ tagline }}
    </div>

    <!-- Decorative divider -->
    <div class="sv-title-divider bg-gradient-to-r from-transparent to-transparent" :class="t.divider"></div>
  </div>

  <!-- Bottom-right metadata (speaker info, date, etc.) -->
  <div class="sv-title-meta">
    <span class="text-sm opacity-50">
      {{ meta }}
    </span>
  </div>
  </template>
</template>

<script setup>
import { computed } from 'vue';
import { isDark } from '../useTheme';

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  tagline: { type: String, required: true },
  meta: { type: String, required: true },
});

const validationError = computed(() => {
  if (!props.title)    return '[TitleSlide] ❌ title is required'
  if (!props.subtitle) return '[TitleSlide] ❌ subtitle is required'
  if (!props.tagline)  return '[TitleSlide] ❌ tagline is required'
  if (!props.meta)     return '[TitleSlide] ❌ meta is required'
  return null
})

// Prop length limits — read by build-all.ps1 for static lint enforcement
// These limits are set to prevent wrapping at Slidev canvas width (980px):
//   TITLE_MAX: text-5xl (48px bold) — ~33 chars safely, 40 with narrow-char buffer
//   SUBTITLE_MAX: text-xl pill (20px) — ~65 chars before pill wraps
const TITLE_MAX    = 40
const SUBTITLE_MAX = 65
const TAGLINE_MAX  = 120
if (props.title?.length > TITLE_MAX)
  console.warn(`[TitleSlide] title is ${props.title.length} chars (max ${TITLE_MAX}): "${props.title}"`)
if (props.subtitle?.length > SUBTITLE_MAX)
  console.warn(`[TitleSlide] subtitle is ${props.subtitle.length} chars (max ${SUBTITLE_MAX}): "${props.subtitle}"`)
if (props.tagline?.length > TAGLINE_MAX)
  console.warn(`[TitleSlide] tagline is ${props.tagline.length} chars (max ${TAGLINE_MAX})`)

const DARK_THEME = {
  bg:      'from-gray-950/95 via-gray-900/95 to-black',
  orb:     'from-purple-500/10 via-emerald-500/10 to-transparent',
  heading: 'from-purple-300 via-emerald-300 to-green-300',
  pill:    'from-purple-700/60 to-emerald-700/60 shadow-purple-500/15',
  divider: 'via-purple-400/60',
}
const LIGHT_THEME = {
  bg:      'from-white via-gray-100 to-gray-50',
  orb:     'from-purple-200/25 via-emerald-200/20 to-transparent',
  heading: 'from-purple-700 via-emerald-700 to-green-700',
  pill:    'from-purple-500 to-emerald-500 shadow-purple-200/50',
  divider: 'via-purple-400/60',
}

const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME);
</script>
