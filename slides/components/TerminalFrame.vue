<template>
  <div
    class="terminal-frame font-mono text-sm rounded-xl overflow-hidden shadow-2xl shadow-black/60"
    :class="[sizeClass]"
  >
    <!-- Title bar -->
    <div class="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700/60">
      <span class="w-3 h-3 rounded-full bg-red-500/90"></span>
      <span class="w-3 h-3 rounded-full bg-yellow-500/90"></span>
      <span class="w-3 h-3 rounded-full bg-green-500/90"></span>
      <span class="ml-3 text-zinc-400 text-xs tracking-wide">{{ title }}</span>
    </div>

    <!-- Body -->
    <div
      class="bg-zinc-950 text-zinc-100 p-5 overflow-y-auto leading-relaxed"
      :class="[bodyHeightClass]"
    >
      <!-- Prompt line -->
      <div v-if="prompt" class="mb-3 flex items-start gap-2">
        <span class="text-cyan-400 select-none shrink-0">{{ promptSymbol }}</span>
        <span class="text-cyan-300 font-semibold">{{ prompt }}</span>
      </div>

      <!-- Rendered lines (default slot or :lines prop) -->
      <slot>
        <div
          v-for="(line, i) in parsedLines"
          :key="i"
          class="whitespace-pre-wrap"
          :class="lineClass(line)"
          v-html="renderLine(line)"
        />
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  /** Window title bar text */
  title: { type: String, default: 'terminal' },

  /** Optional: prompt command shown above output */
  prompt: { type: String, default: '' },

  /** Shell prompt symbol */
  promptSymbol: { type: String, default: '$' },

  /**
   * Array of line objects or plain strings.
   * Line object: { text: string, type?: 'header'|'command'|'flag'|'example'|'dim'|'error'|'success'|'' }
   * A plain string defaults to type ''.
   */
  lines: { type: Array, default: () => [] },

  /**
   * Size preset: 'sm' | 'md' | 'lg' | 'full'
   */
  size: { type: String, default: 'md' },
})

const parsedLines = computed(() =>
  props.lines.map(l => (typeof l === 'string' ? { text: l, type: '' } : l))
)

const sizeClass = computed(() => ({
  sm: 'max-w-xl',
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
  full: 'w-full',
}[props.size] ?? 'max-w-2xl'))

const bodyHeightClass = computed(() => ({
  sm: 'max-h-48',
  md: 'max-h-72',
  lg: 'max-h-[30rem]',
  full: '',
}[props.size] ?? 'max-h-72'))

function lineClass(line) {
  return {
    header:  'text-cyan-400 font-semibold mt-3 mb-1',
    command: 'text-green-400',
    flag:    'text-yellow-300/90',
    example: 'text-zinc-400 italic',
    dim:     'text-zinc-500',
    error:   'text-red-400',
    success: 'text-green-400',
    '':      'text-zinc-200',
  }[line.type] ?? 'text-zinc-200'
}

/**
 * Very lightweight inline highlighter.
 * Bolds anything in backticks; colors flag-like tokens (--word) in the rendered text.
 */
function renderLine(line) {
  let t = line.text
    // escape HTML
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  // backtick inline code
  t = t.replace(/`([^`]+)`/g, '<code class="text-cyan-300 bg-zinc-800 px-1 rounded">$1</code>')
  // bold --flags inline within normal lines
  if (line.type === '' || line.type === 'flag') {
    t = t.replace(/(--[\w-]+)/g, '<span class="text-yellow-300/90">$1</span>')
  }
  return t
}
</script>

<style scoped>
.terminal-frame {
  border: 1px solid rgb(63 63 70 / 0.7); /* zinc-700 */
}
</style>
