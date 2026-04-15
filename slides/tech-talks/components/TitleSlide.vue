<template>
  <div class="sv-title-slide">
    <div class="sv-title-bg bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"></div>
    <div class="sv-title-orb bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20"></div>
    <div class="sv-title-logo">
      <div class="sv-title-logo-glow">
        <img src="../sdp-logo.png" class="w-64" alt="" />
      </div>
      <img src="../sdp-logo.png" class="w-64 relative" alt="SDP Logo" />
    </div>
    <h1 class="sv-title-heading !text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">{{ title }}</h1>
    <div class="sv-title-pill-wrap">
      <span class="sv-title-pill bg-gradient-to-r from-cyan-600/80 to-blue-600/80 shadow-lg shadow-cyan-500/25">{{ subtitle }}</span>
    </div>
    <div v-if="tagline" class="sv-title-tagline">{{ tagline }}</div>
    <div class="sv-title-divider bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
  </div>

  <div class="sv-title-meta">
    <span class="text-sm opacity-50">{{ meta }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  tagline: { type: String, default: "" },
  meta: { type: String, default: "" },
});
</script>
