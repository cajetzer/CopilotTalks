# wing_infra / hall_discoveries

Breakthroughs — patterns that solved persistent problems in Slidev slide authoring.

---

## ASCII art causes severe overflow; CSS cards are the fix

`schema_version: 1` | `date: 2026-04-08`

ASCII art / monospace diagrams in Slidev slides consume significantly more vertical space than their line count suggests due to line-height and font metrics. Replace ASCII flow diagrams with CSS card layouts (flex/grid with `bg-*-900/20` backgrounds and colored borders). CSS cards convey the same information at roughly half the height and are visually consistent with the cockpit style.

**Source:** agent-teams.md s10 Coordinator Pattern — ASCII diagram replaced with CSS card layout, resolving severe overflow.

---

## Harness dot detection: regex must match both w-2 and w-2.5 variants

`schema_version: 1` | `date: 2026-04-08`

The inspect-slide.js `hasProgressDots()` originally used `/w-2\s+h-2\s+rounded-full/` which missed `w-2.5 h-2.5` (used in agentic-sdlc). Fixed to `/w-2\.?5?\s+h-2\.?5?\s+rounded-full/`. Always test the harness against both dot styles after any regex change.

**Source:** agentic-sdlc false positive scan — 12 slides flagged as missing dots when they already had correct w-2.5 span dots. Fixed in commit 23e6563.

---

## Tip banners cause overflow on slides with 2-col cards + code block

`schema_version: 1` | `date: 2026-04-09`

A consistent overflow pattern found across many regenerated decks: slides with a 2-column card grid PLUS a settings code block PLUS a green tip/info banner at the bottom reliably exceed slide height.

The tip banner pattern that causes the issue:
```html
<div class="mt-2 p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 text-center">
  <div class="text-xs font-semibold text-green-300">💡 ...</div>
</div>
```
Each banner adds ~44px (mt-2 + p-2 + text line).

**Fix strategy (in order of preference):**
1. Remove the tip banner entirely — they are supplemental and not missed
2. Change `gap-4` → `gap-3` on the card grid (saves 4px)
3. Reduce `mt-3` → `mt-2` on the code section (saves 4px)
4. If still overflowing, add explicit `max-h-*` to the pre element

**Source:** vscode-latest.md — 10 slides overflowing, all fixed by removing banners and changing gap-4→gap-3; copilot-memory.md, enterprise-patterns.md had same pattern.

---

## Scrollable code block: the correct fix for code-heavy overflow

`schema_version: 1` | `date: 2026-04-10`

When a slide has a large fenced code block that overflows the bottom of the slide, **do not tighten spacing or reduce font size** — the code is already at minimum readable size. Instead, make the code container vertically scrollable.

**Pattern:** add `flex flex-col flex-1 min-h-0` to the parent container, then `overflow-y-auto` to the code wrapper:
```html
<div class="relative z-10 flex-1 min-h-0 flex flex-col gap-3">
  <div class="...text description..."></div>
  <div class="flex flex-col flex-1 min-h-0">
    <pre class="... overflow-y-auto flex-1 min-h-0">...</pre>
  </div>
</div>
```

`flex-1 min-h-0` on both the outer flex column and the pre element is required — without `min-h-0`, flexbox does not constrain the child's scroll boundary.

**User preference (confirmed):** This is the explicitly preferred approach for code-heavy slides. Do not try to compress code content — scrollable is always better than illegibly small.

**Source:** agentic-workflows.md s9 "Core Message Flow" — code block overflow resolved this way; approach confirmed by user.
