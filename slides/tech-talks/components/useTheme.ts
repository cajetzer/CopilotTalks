import { ref } from 'vue'

// Hardcoded to dark theme.
// To enable dynamic dark/light mode, replace with:
//   import { useDark } from '@slidev/client'
//   export const isDark = useDark()
export const isDark = ref(true)
