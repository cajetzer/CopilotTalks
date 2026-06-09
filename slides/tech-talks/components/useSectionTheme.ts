// Section palette helper.
//
// Mirrors the color progression used by SectionOpenerSlide so that any
// content component can tint its CHROME (ambient bg, blur orb, header pill,
// divider) to match the deck section it appears in.
//
// Part 1 → neutral + purple accent
// Part 2 → neutral + green accent
// Part 3 → neutral + purple accent
// Part 4 → neutral + green accent
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
    accent: string  // headline accent text color
    h1: string      // gradient text for section title (SectionOpenerSlide)
    arrow: string   // terminal arrow color (SectionOpenerSlide)
}

export interface SectionCard {
    bg: string       // Tailwind class (used by FourCard, ThreeCol, TwoCol)
    border: string   // Tailwind class (used by FourCard, ThreeCol, TwoCol)
    bgColor: string       // CSS rgba value — used by FrameworkMappingRowsSlide via :style
    borderColor: string   // CSS rgba value — used by FrameworkMappingRowsSlide via :style
    title: string
    blurb: string
}

const DARK_CHROME: SectionChrome[] = [
    {
        ambientBg: 'from-gray-950/95 via-gray-900/95 to-gray-950/95',
        orb: 'from-purple-500/10 via-violet-500/10 to-indigo-500/10',
        pill: 'from-purple-700/30 to-violet-700/30 border-purple-400/30',
        pillText: 'text-purple-300',
        divider: 'via-purple-400',
        accent: 'text-purple-300',
        h1: 'from-purple-400 via-violet-300 to-fuchsia-400',
        arrow: 'text-purple-300',
    },
    {
        ambientBg: 'from-gray-950/95 via-gray-900/95 to-gray-950/95',
        orb: 'from-green-500/10 via-emerald-500/10 to-teal-500/10',
        pill: 'from-green-700/30 to-emerald-700/30 border-green-400/30',
        pillText: 'text-green-300',
        divider: 'via-green-400',
        accent: 'text-green-300',
        h1: 'from-green-400 via-emerald-300 to-teal-400',
        arrow: 'text-green-300',
    },
    {
        ambientBg: 'from-gray-950/95 via-gray-900/95 to-gray-950/95',
        orb: 'from-violet-500/10 via-purple-500/10 to-fuchsia-500/10',
        pill: 'from-violet-700/30 to-purple-700/30 border-violet-400/30',
        pillText: 'text-violet-300',
        divider: 'via-violet-400',
        accent: 'text-violet-300',
        h1: 'from-violet-400 via-purple-300 to-fuchsia-400',
        arrow: 'text-violet-300',
    },
    {
        ambientBg: 'from-gray-950/95 via-gray-900/95 to-gray-950/95',
        orb: 'from-emerald-500/10 via-green-500/10 to-teal-500/10',
        pill: 'from-emerald-700/30 to-green-700/30 border-emerald-400/30',
        pillText: 'text-emerald-300',
        divider: 'via-emerald-400',
        accent: 'text-emerald-300',
        h1: 'from-emerald-400 via-green-300 to-teal-400',
        arrow: 'text-emerald-300',
    },
]

const LIGHT_CHROME: SectionChrome[] = [
    {
        ambientBg: 'from-gray-100/80 via-white to-gray-100/80',
        orb: 'from-purple-200/25 via-violet-200/20 to-indigo-200/20',
        pill: 'from-purple-500/20 to-violet-500/20 border-purple-400/50',
        pillText: 'text-purple-700',
        divider: 'via-purple-500',
        accent: 'text-purple-700',
        h1: 'from-purple-700 via-violet-700 to-fuchsia-700',
        arrow: 'text-purple-700',
    },
    {
        ambientBg: 'from-gray-100/80 via-white to-gray-100/80',
        orb: 'from-green-200/25 via-emerald-200/20 to-teal-200/20',
        pill: 'from-green-500/20 to-emerald-500/20 border-green-400/50',
        pillText: 'text-green-700',
        divider: 'via-green-500',
        accent: 'text-green-700',
        h1: 'from-green-700 via-emerald-700 to-teal-700',
        arrow: 'text-green-700',
    },
    {
        ambientBg: 'from-gray-100/80 via-white to-gray-100/80',
        orb: 'from-violet-200/25 via-purple-200/20 to-fuchsia-200/20',
        pill: 'from-violet-500/20 to-purple-500/20 border-violet-400/50',
        pillText: 'text-violet-700',
        divider: 'via-violet-500',
        accent: 'text-violet-700',
        h1: 'from-violet-700 via-purple-700 to-fuchsia-700',
        arrow: 'text-violet-700',
    },
    {
        ambientBg: 'from-gray-100/80 via-white to-gray-100/80',
        orb: 'from-emerald-200/25 via-green-200/20 to-teal-200/20',
        pill: 'from-emerald-500/20 to-green-500/20 border-emerald-400/50',
        pillText: 'text-emerald-700',
        divider: 'via-emerald-500',
        accent: 'text-emerald-700',
        h1: 'from-emerald-700 via-green-700 to-teal-700',
        arrow: 'text-emerald-700',
    },
]

// Per-section card palettes. Each section provides 4 distinct card styles
// (used by FourCardGrid). Three-column components consume the first 3,
// two-column components consume the first 2.
// bgColor/borderColor use raw rgba so FrameworkMappingRowsSlide can apply them
// via :style — UnoCSS does not reliably scan .ts files, so dynamic class
// strings built here may not make it into the CSS bundle.
const DARK_CARDS: SectionCard[][] = [
    // Part 1: neutral + purple family
    [
        { bg: 'bg-gray-900/50', border: 'border-purple-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(168,85,247,0.3)', title: 'text-purple-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-violet-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(139,92,246,0.3)', title: 'text-violet-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-fuchsia-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(217,70,239,0.3)', title: 'text-fuchsia-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-indigo-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(99,102,241,0.3)', title: 'text-indigo-300', blurb: 'text-gray-300' },
    ],
    // Part 2: neutral + green family
    [
        { bg: 'bg-gray-900/50', border: 'border-green-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(34,197,94,0.3)', title: 'text-green-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-emerald-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(16,185,129,0.3)', title: 'text-emerald-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-teal-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(20,184,166,0.3)', title: 'text-teal-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-lime-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(132,204,22,0.3)', title: 'text-lime-300', blurb: 'text-gray-300' },
    ],
    // Part 3: neutral + purple family (alt)
    [
        { bg: 'bg-gray-900/50', border: 'border-violet-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(139,92,246,0.3)', title: 'text-violet-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-purple-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(168,85,247,0.3)', title: 'text-purple-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-fuchsia-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(217,70,239,0.3)', title: 'text-fuchsia-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-pink-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(236,72,153,0.3)', title: 'text-pink-300', blurb: 'text-gray-300' },
    ],
    // Part 4: neutral + green family (alt)
    [
        { bg: 'bg-gray-900/50', border: 'border-emerald-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(16,185,129,0.3)', title: 'text-emerald-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-green-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(34,197,94,0.3)', title: 'text-green-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-teal-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(20,184,166,0.3)', title: 'text-teal-300', blurb: 'text-gray-300' },
        { bg: 'bg-gray-900/50', border: 'border-lime-500/30', bgColor: 'rgba(17,24,39,0.5)', borderColor: 'rgba(132,204,22,0.3)', title: 'text-lime-300', blurb: 'text-gray-300' },
    ],
]

const LIGHT_CARDS: SectionCard[][] = [
    // Part 1: light neutral + purple family
    [
        { bg: 'bg-white', border: 'border-purple-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(216,180,254)', title: 'text-purple-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-violet-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(196,181,253)', title: 'text-violet-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-fuchsia-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(240,171,252)', title: 'text-fuchsia-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-indigo-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(165,180,252)', title: 'text-indigo-800', blurb: 'text-gray-700' },
    ],
    // Part 2: light neutral + green family
    [
        { bg: 'bg-white', border: 'border-green-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(134,239,172)', title: 'text-green-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-emerald-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(110,231,183)', title: 'text-emerald-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-teal-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(94,234,212)', title: 'text-teal-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-lime-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(190,242,100)', title: 'text-lime-800', blurb: 'text-gray-700' },
    ],
    // Part 3: light neutral + purple family (alt)
    [
        { bg: 'bg-white', border: 'border-violet-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(196,181,253)', title: 'text-violet-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-purple-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(216,180,254)', title: 'text-purple-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-fuchsia-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(240,171,252)', title: 'text-fuchsia-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-pink-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(249,168,212)', title: 'text-pink-800', blurb: 'text-gray-700' },
    ],
    // Part 4: light neutral + green family (alt)
    [
        { bg: 'bg-white', border: 'border-emerald-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(110,231,183)', title: 'text-emerald-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-green-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(134,239,172)', title: 'text-green-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-teal-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(94,234,212)', title: 'text-teal-800', blurb: 'text-gray-700' },
        { bg: 'bg-white', border: 'border-lime-300', bgColor: 'rgb(255,255,255)', borderColor: 'rgb(190,242,100)', title: 'text-lime-800', blurb: 'text-gray-700' },
    ],
]

export function validatePartNumber(partNumber: number, componentName: string): void {
    if (partNumber < 1 || partNumber > 4 || !Number.isInteger(partNumber)) {
        throw new Error('[' + componentName + '] ❌ partNumber must be 1–4 (got ' + partNumber + ')')
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
