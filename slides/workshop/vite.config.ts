import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    watch: {
      // Docker bind mounts don't propagate native FS events on Mac/Windows.
      // Polling ensures Vite detects saves and HMR fires in a devcontainer.
      usePolling: true,
      interval: 1000,
    },
  },
})
