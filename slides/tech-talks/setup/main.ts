import { defineAppSetup } from '@slidev/types'
import ThankYouSlide from '../components/structure/ThankYouSlide.vue'
import TitleSlide from '../components/structure/TitleSlide.vue'

export default defineAppSetup(({ app, router }) => {
  app.component('ThankYouSlide', ThankYouSlide)
  app.component('TitleSlide', TitleSlide)
})
