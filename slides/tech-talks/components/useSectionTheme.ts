// Section palette helper.
//
// Mirrors the color progression used by SectionOpenerSlide so that any
// content component can tint its CHROME (ambient bg, blur orb, header pill,
// divider) to match the deck section it appears in.
//
// Part 1 → cyan / blue / indigo
// Part 2 → blue / indigo / purple
// Part 3 → indigo / purple / pink
// Part 4 → purple / pink / rose
//
// Components that need section-aware NEUTRAL CARDS (TwoColPaired, ThreeColumn,
// FourCard, Code feature cards, etc.) also import the per-card palette below.
//
// Components must NOT override semantic colors (red=Before/Problem,
// green=After/Outcome, blue=Solution) using these arrays — those stay
// hardcoded inside each component.

import { computed, type ComputedRef } from 'vue'
import { isDark } from './useTheme'

export interface SectionChrome {
  ambientBg: string
  orb: string
  pill: string
  pillText: string
  divider: string
  accent: string // headline accent text color
}

export interface SectionCard {
  bg: string
  border: string
  title: string
  blurb: string
}

const DARK_CHROME: SectionChrome[] = [
  {
    ambientBg: 'from-cyan-900/25 via-blue-900/15 to-indigo-900/20',
    orb: 'from-cyan-500/10 via-blue-500/10 to-indigo-500/10',
    pill: 'from-cyan-600/40 to-blue-600/40 border-cyan-400/30',
    pillText: 'text-cyan-300',
    divider: 'via-cyan-400',
    accent: 'text-cyan-300',
  },
  {
    ambientBg: 'from-blue-900/25 via-indigo-900/15 to-purple-900/20',
    orb: 'from-blue-500/10 via-indigo-500/10 to-purple-500/10',
    pill: 'from-blue-600/40 to-indigo-600/40 border-blue-400/30',
    pillText: 'text-blue-300',
    divider: 'via-blue-400',
    accent: 'text-blue-300',
  },
  {
    ambientBg: 'from-indigo-900/25 via-purple-900/15 to-pink-900/20',
    orb: 'from-indigo-500/10 via-purple-500/10 to-pink-500/10',
    pill: 'from-indigo-600/40 to-purple-600/40 border-indigo-400/30',
    pillText: 'text-indigo-300',
    divider: 'via-indigo-400',
    accent: 'text-indigo-300',
  },
  {
    ambientBg: 'from-purple-900/25 via-pink-900/15 to-rose-900/20',
    orb: 'from-purple-500/10 via-pink-500/10 to-rose-500/10',
    pill: 'from-purple-600/40 to-pink-600/40 border-purple-400/30',
    pillText: 'text-purple-300',
    divider: 'via-purple-400',
    accent: 'text-purple-300',
  },
]

const LIGHT_CHROME: SectionChrome[] = [
  {
    ambientBg: 'from-cyan-100/40 via-blue-100/20 to-indigo-100/20',
    orb: 'from-cyan-200/30 via-blue-200/30 to-indigo-200/30',
    pill: 'from-cyan-500/20 to-blue-500/20 border-cyan-400/50',
    pillText: 'text-cyan-700',
    divider: 'via-cyan-500',
    accent: 'text-cyan-700',
  },
  {
    ambientBg: 'from-blue-100/40 via-indigo-100/20 to-purple-100/20',
    orb: 'from-blue-200/30 via-indigo-200/30 to-purple-200/30',
    pill: 'from-blue-500/20 to-indigo-500/20 border-blue-400/50',
    pillText: 'text-blue-700',
    divider: 'via-blue-500',
    accent: 'text-blue-700',
  },
  {
    ambientBg: 'from-indigo-100/40 via-purple-100/20 to-pink-100/20',
    orb: 'from-indigo-200/30 via-purple-200/30 to-pink-200/30',
    pill: 'from-indigo-500/20 to-purple-500/20 border-indigo-400/50',
    pillText: 'text-indigo-700',
    divider: 'via-indigo-500',
    accent: 'text-indigo-700',
  },
  {
    ambientBg: 'from-purple-100/40 via-pink-100/20 to-rose-100/20',
    orb: 'from-purple-200/30 via-pink-200/30 to-rose-200/30',
    pill: 'from-purple-500/20 to-pink-500/20 border-purple-400/50',
    pillText: 'text-purple-700',
    divider: 'via-purple-500',
    accent: 'text-purple-700',
  },
]

// Per-section card palettes. Each section provides 4 distinct card styles
// (used by FourCardGrid). Three-column components consume the first 3,
// two-column components consume the first 2.
const DARK_CARDS: SectionCard[][] = [
  [
    { bg: 'bg-cyan-900/30',   border: 'border-cyan-500/30',   title: 'text-cyan-300',   blurb: 'text-cyan-100/70' },
    { bg: 'bg-blue-900/30',   border: 'border-blue-500/30',   title: 'text-blue-300',   blurb: 'text-blue-100/70' },
    { bg: 'bg-indigo-900/30', border: 'border-indigo-500/30', title: 'text-indigo-300', blurb: 'text-indigo-100/70' },
    { bg: 'bg-sky-900/30',    border: 'border-sky-500/30',    title: 'text-sky-300',    blurb: 'text-sky-100/70' },
  ],
  [
    { bg: 'bg-blue-900/30',   border: 'border-blue-500/30',   title: 'text-blue-300',   blurb: 'text-blue-100/70' },
    { bg: 'bg-indigo-900/30', border: 'border-indigo-500/30', title: 'text-indigo-300', blurb: 'text-indigo-100/70' },
    { bg: 'bg-purple-900/30', border: 'border-purple-500/30', title: 'text-purple-300', blurb: 'text-purple-100/70' },
    { bg: 'bg-violet-900/30', border: 'border-violet-500/30', title: 'text-violet-300', blurb: 'text-violet-100/70' },
  ],
  [
    { bg: 'bg-indigo-900/30', border: 'border-indigo-500/30', title: 'text-indigo-300', blurb: 'text-indigo-100/70' },
    { bg: 'bg-purple-900/30', border: 'border-purple-500/30', title: 'text-purple-300', blurb: 'text-purple-100/70' },
    { bg: 'bg-pink-900/30',   border: 'border-pink-500/30',   title: 'text-pink-300',   blurb: 'text-pink-100/70' },
    { bg: 'bg-fuchsia-900/30',border: 'border-fuchsia-500/30',title: 'text-fuchsia-300',blurb: 'text-fuchsia-100/70' },
  ],
  [
    { bg: 'bg-purple-900/30', border: 'border-purple-500/30', title: 'text-purple-300', blurb: 'text-purple-100/70' },
    { bg: 'bg-pink-900/30',   border: 'border-pink-500/30',   title: 'text-pink-300',   blurb: 'text-pink-100/70' },
    { bg: 'bg-rose-900/30',   border: 'border-rose-500/30',   title: 'text-rose-300',   blurb: 'text-rose-100/70' },
    { bg: 'bg-fuchsia-900/30',border: 'border-fuchsia-500/30',title: 'text-fuchsia-300',blurb: 'text-fuchsia-100/70' },
  ],
]

const LIGHT_CARDS: SectionCard[][] = [
  [
    { bg: 'bg-cyan-100/80',   border: 'border-cyan-300',   title: 'text-cyan-700',   blurb: 'text-cyan-900/70' },
    { bg: 'bg-blue-100/80',   border: 'border-blue-300',   title: 'text-blue-700',   blurb: 'text-blue-900/70' },
    { bg: 'bg-indigo-100/80', border: 'border-indigo-300', title: 'text-indigo-700', blurb: 'text-indigo-900/70' },
    { bg: 'bg-sky-100/80',    border: 'border-sky-300',    title: 'text-sky-700',    blurb: 'text-sky-900/70' },
  ],
  [
    { bg: 'bg-blue-100/80',   border: 'border-blue-300',   title: 'text-blue-700',   blurb: 'text-blue-900/70' },
    { bg: 'bg-indigo-100/80', border: 'border-indigo-300', title: 'text-indigo-700', blurb: 'text-indigo-900/70' },
    { bg: 'bg-purple-100/80', border: 'border-purple-300', title: 'text-purple-700', blurb: 'text-purple-900/70' },
    { bg: 'bg-violet-100/80', border: 'border-violet-300', title: 'text-violet-700', blurb: 'text-violet-900/70' },
  ],
  [
    { bg: 'bg-indigo-100/80', border: 'border-indigo-300', title: 'text-indigo-700', blurb: 'text-indigo-900/70' },
    { bg: 'bg-purple-100/80', border: 'border-purple-300', title: 'text-purple-700', blurb: 'text-purple-900/70' },
    { bg: 'bg-pink-100/80',   border: 'border-pink-300',   title: 'text-pink-700',   blurb: 'text-pink-900/70' },
    { bg: 'bg-fuchsia-100/80',border: 'border-fuchsia-300',title: 'text-fuchsia-700',blurb: 'text-fuchsia-900/70' },
  ],
  [
    { bg: 'bg-purple-100/80', border: 'border-purple-300', title: 'text-purple-700', blurb: 'text-purple-900/70' },
    { bg: 'bg-pink-100/80',   border: 'border-pink-300',   title: 'text-pink-700',   blurb: 'text-pink-900/70' },
    { bg: 'bg-rose-100/80',   border: 'border-rose-300',   title: 'text-rose-700',   blurb: 'text-rose-900/70' },
    { bg: 'bg-fuchsia-100/80',border: 'border-fuchsia-300',title: 'text-fuchsia-700',blurb: 'text-fuchsia-900/70' },
  ],
]

export function validatePartNumber(partNumber: number, componentName: string): void {
  if (partNumber < 1 || partNumber > 4 || !Number.isInteger(partNumber)) {
    console.error('[' + componentName + '] ❌ partNumber must be 1–4 (got ' + partNumber + ')')
  }
}

export function useSectionChrome(partNumber: () => number): ComputedRef<SectionChrome> {
  return computed(() => {
    const idx = Math.min(Math.max(partNumber() - 1, 0), 3)
    return (isDark.value ? DARK_CHROME : LIGHT_CHROME)[idx]
  })
}

export function useSectionCards(partNumber: () => number): ComputedRef<SectionCard[]> {
  return computed(() => {
    const idx = Math.min(Math.max(partNumber() - 1, 0), 3)
    return (isDark.value ? DARK_CARDS : LIGHT_CARDS)[idx]
  })
}
