<template>
  <div
    class="h-full flex flex-col items-center justify-center relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br"
      :class="t.ambientBg"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r rounded-full blur-3xl"
      :class="t.orb"
    ></div>

    <div class="relative z-10 flex flex-col items-center text-center">
      <div class="relative mb-2">
        <div class="absolute inset-0 blur-2xl opacity-50">
          <img src="../sdp-logo.png" class="w-28" alt="" />
        </div>
        <img src="../sdp-logo.png" class="w-28 relative" alt="SDP Logo" />
      </div>

      <h1
        class="!text-4xl !font-bold !mb-2 bg-gradient-to-r bg-clip-text text-transparent"
        :class="t.heading"
      >
        {{ title }}
      </h1>

      <div class="mb-3">
        <span
          class="px-6 py-1 bg-gradient-to-r rounded-full text-white text-sm font-medium shadow-lg"
          :class="t.pill"
        >
          {{ subtitle }}
        </span>
      </div>

      <div class="grid gap-2 max-w-3xl text-sm mb-3" :class="gridColsClass">
        <div
          v-for="(card, index) in cards"
          :key="index"
          :class="cardStyles[index % 4].card"
          class="p-2 rounded-xl border"
        >
          <div class="text-2xl mb-1">{{ card.icon }}</div>
          <div :class="cardStyles[index % 4].value" class="text-xl font-bold">
            {{ card.value }}
          </div>
          <div class="text-xs opacity-80 mt-1">{{ card.detail }}</div>
          <div :class="cardStyles[index % 4].subdetail" class="text-xs mt-1">
            {{ card.subdetail }}
          </div>
        </div>
      </div>

      <div class="text-sm opacity-70">
        {{ prompt }}
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent"
      :class="t.divider"
    ></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { isDark } from './useTheme'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  cards: { type: Array, required: true },
  prompt: { type: String, required: true },
});

const gridColsClass = computed(() => {
  if (props.cards.length === 4) return "grid-cols-4";
  if (props.cards.length === 2) return "grid-cols-2";
  return "grid-cols-3";
});

const DARK_CARD_STYLES = [
  { card: "bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-cyan-500/40",     value: "text-cyan-300",   subdetail: "text-cyan-400/70"   },
  { card: "bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border-blue-500/40",   value: "text-blue-300",   subdetail: "text-blue-400/70"   },
  { card: "bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/40", value: "text-indigo-300", subdetail: "text-indigo-400/70" },
  { card: "bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/40",  value: "text-purple-300", subdetail: "text-purple-400/70" },
]
const LIGHT_CARD_STYLES = [
  { card: "bg-gradient-to-br from-cyan-100/80 to-blue-100/80 border-cyan-300",     value: "text-cyan-700",   subdetail: "text-cyan-600/80"   },
  { card: "bg-gradient-to-br from-blue-100/80 to-indigo-100/80 border-blue-300",   value: "text-blue-700",   subdetail: "text-blue-600/80"   },
  { card: "bg-gradient-to-br from-indigo-100/80 to-purple-100/80 border-indigo-300", value: "text-indigo-700", subdetail: "text-indigo-600/80" },
  { card: "bg-gradient-to-br from-purple-100/80 to-pink-100/80 border-purple-300",   value: "text-purple-700", subdetail: "text-purple-600/80" },
]

const DARK_THEME = {
  ambientBg: 'from-cyan-900/20 via-blue-900/10 to-indigo-900/20',
  orb:       'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
  heading:   'from-cyan-400 via-blue-400 to-indigo-400',
  pill:      'from-cyan-600/80 to-blue-600/80 shadow-cyan-500/25',
  divider:   'via-cyan-400/50',
}
const LIGHT_THEME = {
  ambientBg: 'from-cyan-100/30 via-blue-50/20 to-indigo-50/10',
  orb:       'from-cyan-200/30 via-blue-200/20 to-indigo-200/10',
  heading:   'from-cyan-600 via-blue-600 to-indigo-600',
  pill:      'from-cyan-500 to-blue-500 shadow-cyan-300/50',
  divider:   'via-cyan-300/50',
}

const cardStyles = computed(() => isDark.value ? DARK_CARD_STYLES : LIGHT_CARD_STYLES)
const t = computed(() => isDark.value ? DARK_THEME : LIGHT_THEME)
</script>
