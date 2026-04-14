import { defineAppSetup } from '@slidev/types'
import ThankYouSlide from '../components/ThankYouSlide.vue'
import TitleSlide from '../components/TitleSlide.vue'

export default defineAppSetup(({ app, router }) => {
  app.component('ThankYouSlide', ThankYouSlide)
  app.component('TitleSlide', TitleSlide)
})
