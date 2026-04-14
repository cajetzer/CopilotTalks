<template>
  <div
    class="h-full flex flex-col items-center justify-center relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-indigo-900/20"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
    ></div>

    <div class="relative z-10 flex flex-col items-center text-center">
      <div class="relative mb-2">
        <div class="absolute inset-0 blur-2xl opacity-50">
          <img src="../sdp-logo.png" class="w-28" alt="" />
        </div>
        <img src="../sdp-logo.png" class="w-28 relative" alt="SDP Logo" />
      </div>

      <h1
        class="!text-4xl !font-bold !mb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
      >
        {{ title }}
      </h1>

      <div class="mb-3">
        <span
          class="px-6 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-full text-white text-sm font-medium shadow-lg shadow-cyan-500/25"
        >
          {{ subtitle }}
        </span>
      </div>

      <div class="grid gap-2 max-w-3xl text-sm mb-3" :class="gridColsClass">
        <div
          v-for="(card, index) in cards"
          :key="index"
          :class="getCardClass(index)"
          class="p-2 rounded-xl border"
        >
          <div class="text-2xl mb-1">{{ card.icon }}</div>
          <div :class="getCardValueClass(index)" class="text-xl font-bold">
            {{ card.value }}
          </div>
          <div class="text-xs opacity-80 mt-1">{{ card.detail }}</div>
          <div :class="getCardSubdetailClass(index)" class="text-xs mt-1">
            {{ card.subdetail }}
          </div>
        </div>
      </div>

      <div class="text-sm opacity-70">
        {{ prompt }}
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
    ></div>
  </div>
</template>

<script setup>
import { computed } from "vue";

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

const getCardClass = (index) => {
  const classes = [
    "bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-cyan-500/40",
    "bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border-blue-500/40",
    "bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/40",
    "bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/40",
  ];
  return classes[index % 4];
};

const getCardValueClass = (index) => {
  const classes = [
    "text-cyan-300",
    "text-blue-300",
    "text-indigo-300",
    "text-purple-300",
  ];
  return classes[index % 4];
};

const getCardSubdetailClass = (index) => {
  const classes = [
    "text-cyan-400/70",
    "text-blue-400/70",
    "text-indigo-400/70",
    "text-purple-400/70",
  ];
  return classes[index % 4];
};
</script>
