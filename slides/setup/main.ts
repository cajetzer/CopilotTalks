import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {

  // Handle 404 redirects with slide number preservation
  if (typeof window !== 'undefined') {
    // Check for slide query parameter from 404 redirect
    const urlParams = new URLSearchParams(window.location.search)
    const targetSlide = urlParams.get('slide')

    if (targetSlide && router) {
      // Navigate to the target slide after router is ready
      router.isReady().then(() => {
        const slideNumber = parseInt(targetSlide, 10)
        if (!isNaN(slideNumber) && slideNumber > 0) {
          // Use replace() instead of push() to avoid polluting browser history
          // This is restoring state after a 404 redirect, not user-initiated navigation
          router.replace(`/${slideNumber}`).then(() => {
            // Clean up the URL by removing the query parameter
            // Do this after router navigation completes to ensure URL is updated
            const cleanUrl = window.location.pathname + window.location.hash
            window.history.replaceState({}, '', cleanUrl)
          })
        }
      })
    }
  }
})
