import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    hmr: {
      overlay: true,
    },
    watch: {
      // Use native file watching on local Windows (faster than polling)
      // Only use polling in Docker/devcontainer environments
      usePolling: false,
      // Watch additional file types
      ignored: ['!**/node_modules/**', '!**/.git/**'],
    },
  },
  // Force optimization to rebuild on changes
  optimizeDeps: {
    force: true,
  },
})
