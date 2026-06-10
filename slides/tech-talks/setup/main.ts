import ThankYouSlide from '../components/structure/ThankYouSlide.vue'
import TitleSlide from '../components/structure/TitleSlide.vue'

function normalizeRouterBase(router: any) {
  const base: string = router?.options?.history?.base ?? ''
  const routerBase = base.endsWith('/') ? base.slice(0, -1) : base
  const routerBaseRelative = routerBase.replace(/^\//, '')

  if (!routerBase)
    return

  const stripBase = (path: string): string => {
    if (path.startsWith(routerBase))
      return path.slice(routerBase.length) || '/'
    if (routerBaseRelative && path.startsWith(routerBaseRelative))
      return path.slice(routerBaseRelative.length) || '/'
    return path
  }

  const originalPush = router.push.bind(router)
  const originalReplace = router.replace.bind(router)

  router.push = (to: any) => {
    if (to?.path)
      return originalPush({ ...to, path: stripBase(to.path) })
    if (typeof to === 'string')
      return originalPush(stripBase(to))
    return originalPush(to)
  }

  router.replace = (to: any) => {
    if (to?.path)
      return originalReplace({ ...to, path: stripBase(to.path) })
    if (typeof to === 'string')
      return originalReplace(stripBase(to))
    return originalReplace(to)
  }
}

export default ({ app, router }: any) => {
  app.component('ThankYouSlide', ThankYouSlide)
  app.component('TitleSlide', TitleSlide)

  if (typeof window !== 'undefined' && router) {
    normalizeRouterBase(router)

    router.isReady().then(() => {
      const targetSlide = new URLSearchParams(window.location.search).get('slide')
      const slideNumber = Number.parseInt(targetSlide?.match(/\d+$/)?.[0] ?? '', 10)
      if (Number.isInteger(slideNumber) && slideNumber > 0) {
        router.replace(`/${slideNumber}`).then(() => {
          const cleanUrl = window.location.pathname + window.location.hash
          window.history.replaceState({}, '', cleanUrl)
        })
      }
    })
  }
}