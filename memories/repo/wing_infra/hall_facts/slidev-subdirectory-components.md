# Slidev Component Registration When Running Decks from Subdirectories

**Date:** 2026-04-14
**Session context:** Debugging blank ThankYouSlide and TitleSlide components in agentic-journey.md

## The Problem

Components worked on slide 1 but failed on all other slides with:
```
[Vue warn]: Failed to resolve component: TitleSlide
```

Browser dev tools showed slide 1 had imports, but slides 2+ tried to resolve components globally and failed.

## Root Cause

**When running `slidev tech-talks/agentic-journey.md`, Slidev treats `tech-talks/` as the project root**, not `slides/`.

This means:
- `<script setup>` blocks in the markdown file **only apply to slide 1**
- Slides 2+ rely on global component registration via `setup/main.ts`
- Slidev looks for `tech-talks/setup/main.ts`, NOT `slides/setup/main.ts`
- Components must be in `tech-talks/components/`, NOT `slides/components/`

## Solution

For each tech-talk subdirectory deck, create:

1. **`tech-talks/[talk]/components/`** — copy shared components here
2. **`tech-talks/[talk]/setup/main.ts`** — register components globally
3. **Update imports in deck** to use `./components/` not `../components/`
4. **Fix asset paths** in copied components (e.g., logo imports)

## Impact

This pattern is required for ANY custom component used across multiple slides in subdirectory-served decks. Without it, components only work on slide 1.

**Status:** Confirmed working in agentic-journey.md after applying this pattern.
