<template>
  <div class="sv-title-slide">
    <div class="sv-title-bg" :class="backgroundClass"></div>
    <div class="sv-title-orb" :class="orbClass"></div>
    <div class="sv-title-logo">
      <div class="sv-title-logo-glow">
        <img :src="logoSrc" :class="logoClass" alt="" />
      </div>
      <img :src="logoSrc" :class="[logoClass, 'relative']" :alt="logoAlt" />
    </div>
    <h1 class="sv-title-heading" :class="headingClass">{{ title }}</h1>
    <div class="sv-title-pill-wrap">
      <span class="sv-title-pill" :class="pillClass">{{ subtitle }}</span>
    </div>
    <div v-if="tagline" class="sv-title-tagline">{{ tagline }}</div>
    <div class="sv-title-divider" :class="dividerClass"></div>
  </div>

  <div class="sv-title-meta">
    <span class="text-sm opacity-50">{{ meta }}</span>
  </div>
</template>

<script setup>
import defaultTechTalkLogoSrc from "../tech-talks/sdp-logo.png";

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  tagline: { type: String, default: "" },
  meta: { type: String, default: "" },
  logoSrc: { type: String, default: defaultTechTalkLogoSrc },
  logoAlt: { type: String, default: "SDP Logo" },
  logoClass: { type: String, default: "w-64" },
  backgroundClass: {
    type: String,
    default:
      "bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20",
  },
  orbClass: {
    type: String,
    default:
      "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
  },
  headingClass: {
    type: String,
    default:
      "!text-5xl !font-bold !mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent",
  },
  pillClass: {
    type: String,
    default:
      "bg-gradient-to-r from-cyan-600/80 to-blue-600/80 shadow-lg shadow-cyan-500/25",
  },
  dividerClass: {
    type: String,
    default: "bg-gradient-to-r from-transparent via-cyan-400 to-transparent",
  },
});
</script>
