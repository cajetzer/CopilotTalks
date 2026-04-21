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

    <!-- Logo section with glow effect -->
    <div class="sv-title-logo">
      <!-- Logo glow (blurred copy behind) -->
      <div class="sv-title-logo-glow">
        <img src="../../sdp-logo.png" class="w-64" alt="" />
      </div>
      <!-- Main logo (sharp, on top) -->
      <img src="../../sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
    </div>

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

const DARK_THEME = {
  bg:      'from-cyan-900/20 via-blue-900/10 to-indigo-900/20',
  orb:     'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
  heading: 'from-cyan-400 via-blue-400 to-indigo-400',
  pill:    'from-cyan-600/80 to-blue-600/80 shadow-cyan-500/25',
  divider: 'via-cyan-400',
}
const LIGHT_THEME = {
  bg:      'from-cyan-100/30 via-blue-50/20 to-indigo-50/10',
  orb:     'from-cyan-300/20 via-blue-200/20 to-indigo-200/10',
  heading: 'from-cyan-600 via-blue-600 to-indigo-600',
  pill:    'from-cyan-500 to-blue-500 shadow-cyan-300/50',
  divider: 'via-cyan-500',
}

const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME);
</script>
