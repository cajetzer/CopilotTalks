<template>
  <div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

    <!-- Breadcrumb pill -->
    <div class="relative z-10 flex items-center gap-3 mb-4">
      <span class="px-4 py-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">📚 References</span>
      <div class="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
    </div>

    <!-- Two-column groups grid -->
    <div class="relative z-10 flex-1 min-h-0">
      <div class="grid grid-cols-2 gap-4 text-xs">
        <div v-for="group in groups" :key="group.title">
          <div :class="titleCls(group.color)" class="font-bold mb-2 text-sm">{{ group.title }}</div>
          <div class="space-y-1.5">
            <div
              v-for="item in group.items"
              :key="item.label"
              class="p-2 bg-gray-900/50 rounded border border-gray-700/50"
            >
              <a
                v-if="item.href"
                :href="item.href"
                :class="linkCls(group.color)"
                class="font-medium"
              >{{ item.label }}</a>
              <span
                v-else
                :class="spanCls(group.color)"
                class="font-medium"
              >{{ item.label }}</span>
              <div class="text-gray-400 mt-0.5">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * ReferencesSlide — standard references layout for tech-talk decks.
 *
 * Props:
 *   groups: Array<{
 *     title:  string   — group heading (e.g. "📖 Official Documentation")
 *     color:  string   — accent color key (cyan | purple | blue | indigo | green |
 *                        pink | orange | rose | amber | teal)
 *     items:  Array<{
 *       href?:       string  — if present, renders as <a>; otherwise <span>
 *       label:       string  — link/reference text
 *       description: string  — secondary line of text
 *     }>
 *   }>
 */

const COLORS = {
  cyan:   { title: "text-cyan-300",   link: "text-cyan-400 hover:text-cyan-300",     span: "text-cyan-400"   },
  purple: { title: "text-purple-300", link: "text-purple-400 hover:text-purple-300", span: "text-purple-400" },
  blue:   { title: "text-blue-300",   link: "text-blue-400 hover:text-blue-300",     span: "text-blue-400"   },
  indigo: { title: "text-indigo-300", link: "text-indigo-400 hover:text-indigo-300", span: "text-indigo-400" },
  green:  { title: "text-green-300",  link: "text-green-400 hover:text-green-300",   span: "text-green-400"  },
  pink:   { title: "text-pink-300",   link: "text-pink-400 hover:text-pink-300",     span: "text-pink-400"   },
  orange: { title: "text-orange-300", link: "text-orange-400 hover:text-orange-300", span: "text-orange-400" },
  rose:   { title: "text-rose-300",   link: "text-rose-400 hover:text-rose-300",     span: "text-rose-400"   },
  amber:  { title: "text-amber-300",  link: "text-amber-400 hover:text-amber-300",   span: "text-amber-400"  },
  teal:   { title: "text-teal-300",   link: "text-teal-400 hover:text-teal-300",     span: "text-teal-400"   },
};

defineProps({
  groups: { type: Array, required: true },
});

const titleCls = (c) => (COLORS[c] || COLORS.cyan).title;
const linkCls  = (c) => (COLORS[c] || COLORS.cyan).link;
const spanCls  = (c) => (COLORS[c] || COLORS.cyan).span;
</script>
