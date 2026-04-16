<template>
  <div class="sv-title-slide">
    <div class="sv-title-bg bg-gradient-to-br" :class="t.bg"></div>
    <div class="sv-title-orb bg-gradient-to-r" :class="t.orb"></div>
    <div class="sv-title-logo">
      <div class="sv-title-logo-glow">
        <img src="../sdp-logo.png" class="w-64" alt="" />
      </div>
      <img src="../sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
    </div>
    <h1 class="sv-title-heading !text-5xl !font-bold !mt-8 bg-gradient-to-r bg-clip-text text-transparent" :class="t.heading">{{ title }}</h1>
    <div class="sv-title-pill-wrap">
      <span class="sv-title-pill bg-gradient-to-r shadow-lg" :class="t.pill">{{ subtitle }}</span>
    </div>
    <div v-if="tagline" class="sv-title-tagline">{{ tagline }}</div>
    <div class="sv-title-divider bg-gradient-to-r from-transparent to-transparent" :class="t.divider"></div>
  </div>

  <div class="sv-title-meta">
    <span class="text-sm opacity-50">{{ meta }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { isDark } from './useTheme';

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  tagline: { type: String, default: "" },
  meta: { type: String, default: "" },
});

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
