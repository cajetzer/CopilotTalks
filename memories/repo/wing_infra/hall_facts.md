# wing_infra / hall_facts

Confirmed, locked facts about Slidev infrastructure, build rules, and structural gotchas.

---

## Slidev: Title slide must have <!-- SLIDE: --> comment

`schema_version: 1` | `date: 2026-04-08`

Every slide — including slide 1 (the title slide) — must begin with a `<!-- SLIDE: Name -->` comment. Copilot frequently omits this on the title slide, which shifts all subsequent `<!-- SLIDE: -->` counts off by one. The Nth `<!-- SLIDE: -->` comment = slide N only when slide 1 has the comment.

**Fix:** After generating, verify the first content block (after the opening `---` frontmatter) starts with `<!-- SLIDE: Title -->`.

**Source:** Recurring agent mistake confirmed across multiple deck generations.

---

## Slidev: Progress dots wrapper munge

`schema_version: 1` | `date: 2026-04-08`

After adding a progress dots block inside a pill row, the slide title wrapper div **must** immediately follow the closing `</div>` of the flex row. Missing it renders all content invisible.

Canonical structure after pill row:
```
</div>                                      ← closes flex items-center pill row
<div class="relative z-10 mb-2">           ← title wrapper — MUST be present
  <div>title</div>
  <div>subtitle</div>
</div>
<div class="relative z-10 flex-1 min-h-0"> ← content area
  ...
</div>
</div>                                      ← closes h-full outer
```

**Source:** agent-teams.md — s11 and s21 both went blank from this exact omission (two incidents, one session).

---

## Slidev: Stray closing div after progress dots collapses outer container

`schema_version: 1` | `date: 2026-04-08`

When inserting a dots block inside a pill row, do NOT add an extra `</div>` after it. The dots div is a sibling inside the flex row. One extra `</div>` closes the outer `h-full` container early — all content after it renders outside the slide and is invisible.

**Source:** agent-teams.md — same munge pattern caused both s11 and s21 blank-content bugs.

---

## Slidev: Build after structural edits

`schema_version: 1` | `date: 2026-04-08`

Run `cd slides && npm exec slidev build tech-talks/<deck>.md --base /CopilotTraining/tech-talks/<deck>/ --out dist/tech-talks/<deck>` after any structural edit (adding slides, restructuring wrappers, inserting HTML blocks). VS Code diagnostics do **not** catch Vue template parse errors such as missing end tags — only the build catches them.

**Source:** agent-teams.md polish session — build skipped throughout; recommended in checkpoint next-steps as a risk.

---

## Slidev: Canonical pill row + title structure for cockpit-style slides

`schema_version: 1` | `date: 2026-04-08`

The complete required structure for a section content slide breadcrumb area:

```html
<div class="relative z-10 flex items-center gap-3 mb-2">
  <span class="px-4 py-1 bg-gradient-to-r from-{accent}-600/80 ...">🏷 Section: Topic</span>
  <div class="flex-1 h-px bg-gradient-to-r from-{accent}-400/60 to-transparent"></div>
  <div class="flex items-center gap-2">
    <div class="w-2 h-2 rounded-full bg-white/20"></div>   <!-- inactive -->
    <div class="w-2 h-2 rounded-full bg-{accent}-400 shadow-lg shadow-{accent}-500/50"></div>  <!-- active -->
    <span class="text-white/40 text-xs ml-1">N of M</span>
  </div>
</div>
<div class="relative z-10 mb-2">          ← title wrapper — always required
  <div class="text-lg font-bold text-white mb-0.5">Title</div>
  <div class="text-xs text-white/50">Subtitle</div>
</div>
<div class="relative z-10 flex-1 min-h-0">
  <!-- content -->
</div>
```

Any deviation — extra wrapper, missing title div, extra closing tag — causes invisible content.

**Source:** agent-teams.md recurring munge; two separate incidents confirmed.

---

## Slidev: BOM encoding breaks frontmatter parsing

`schema_version: 1` | `date: 2026-04-08`

A UTF-8 BOM (`\xEF\xBB\xBF`) at the start of a `.md` file causes Slidev to treat the YAML frontmatter block as slide 1 content instead of metadata. The title slide renders as raw YAML text.

**Fix:** Write files with `UTF8Encoding($false)` in PowerShell (no BOM). When editing existing files, open in VS Code and use "Save with Encoding → UTF-8" (not UTF-8 with BOM).

**Source:** Known Slidev gotcha; referenced in memory-plan.md as a recurring agent re-discovery.

---

## Slidev: Structural rules (separator, frontmatter, HTML)

`schema_version: 1` | `date: 2026-04-08`

| Rule | Detail |
|------|--------|
| `---` separator | Must be on its own line with blank lines before and after — never `---<!-- SLIDE:` on same line |
| Literal `---` in HTML | Escape as `&#45;&#45;&#45;` — a literal `---` inside content splits the slide |
| No per-slide frontmatter | Never `layout:`, `class:`, `transition:` between `---` separators — use CSS in the content div |
| `layout: two-cols` | Replace with `<div class="grid grid-cols-2 gap-4">` inside the content wrapper |
| TOC navigation | Use `@click="$nav.go(N)"` — never `<a href="#anchor">` hash links |
| No Mermaid diagrams | Always use styled HTML divs — Mermaid is not supported in this Slidev setup |
| Slide count method | Nth `<!-- SLIDE: -->` comment = slide N (with separator rule enforced, `\n---\n` count also works) |
| Content slides layout | Never plain centered `h1` — only title, section openers, and thank-you use centered layouts |
| Mixed quotes | Use `"` everywhere in HTML attributes — never mix `"` and `'` |
| 4+ space indentation | Keep all HTML flush-left — 4+ spaces triggers markdown code block rendering |

**Source:** Recurring agent authoring errors across multiple deck generations.

---

## Slidev: Two valid progress dot styles (w-2 div vs w-2.5 span)

`schema_version: 1` | `date: 2026-04-08`

Two dot styles are in use across decks — both are correct:

| Style | Element | Class | Used in |
|-------|---------|-------|---------|
| Small div | `<div>` | `w-2 h-2 rounded-full` | agentic-journey, agent-teams |
| Medium span | `<span>` | `w-2.5 h-2.5 rounded-full` | agentic-sdlc |

Active dot: `bg-{accent}-400 shadow-lg shadow-{accent}-500/50`
Inactive dot: `bg-white/20`

Both styles render identically in Slidev. Do not "fix" one style to match the other.

**Source:** inspect-slide.js harness initially missed the w-2.5 span variant and falsely reported agentic-sdlc as having missing dots. Fixed in commit 23e6563.

---

## Slidev: Standalone closing slides are exempt from progress dots

`schema_version: 1` | `date: 2026-04-08`

Closing slides (ROI Analysis, Next Steps/What You Can Do Today, References, Thank You) use their own accent colors and do NOT get progress dots. They are standalone topic slides, not numbered content slides within any Part.

Identifying markers:
- Pill label: "💰 ROI Analysis", "✅ Next Steps", "📚 References", or no pill (Thank You)
- Background gradient: different color family from the preceding section (e.g., emerald or cyan when section is purple)
- Position: after the last numbered section's content slides, before Thank You

The inspect-slide.js harness flags these as false positives (colorInconsistent + missingDots) because section tracking propagates through the deck. This is expected behavior — they are not bugs.

**Source:** agentic-journey.md s16-s19 and agentic-sdlc.md s23-s25 both confirmed as intentional standalone slides.

---

## Slidev harness: stale server = wrong screenshots

`schema_version: 1` | `date: 2026-04-10`

`inspect-slide.js` reuses any process already listening on port 3030 without verifying which deck is served. When switching between decks, stale screenshots from the previous deck can persist and give completely wrong overflow readings.

**Symptoms:** screenshot counter in the slide shows `N/X` where X ≠ the expected slide count, OR a familiar slide from the previous deck appears in the screenshot.

**Fix procedure (run every time you switch decks):**
```powershell
# 1. Kill any process on port 3030
Get-NetTCPConnection -LocalPort 3030 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
# 2. Delete stale screenshots for the deck you're about to scan
Remove-Item slides/.harness/<deck>-*.png -Force -ErrorAction SilentlyContinue
# 3. Then run: node scripts/inspect-slide.js <deck> scan
```

**Source:** copilot-acp session — s9 and s18 screenshots showed agent-teams content (25-slide deck vs 21-slide copilot-acp). Wasted a full debugging pass.

---

## Slidev: Section opener footer code block causes +64px overflow

`schema_version: 1` | `date: 2026-04-09`

The Slide Generator sometimes appends a footer code block to section opener slides:
```html
<div class="mt-5 font-mono text-xs bg-gray-950/80 border border-gray-700/50 rounded-lg px-5 py-3 text-left max-w-xl">
  <span class="text-gray-400">tagline text</span><br />
  <span class="text-cyan-300 mt-1 block">↳ follow-on text</span>
</div>
```
This block adds exactly ~64px to section openers. Section openers in `agentic-sdlc.md` (the exemplar) do NOT have this element. Always remove it from all section openers after generation.

**Symptoms:** All section opener slides overflow by exactly +64px.

**Source:** terminal-sandboxing.md and copilot-memory.md — found on all 4 section openers in each deck.

---

## Slidev: flex-1 overflow-y-auto without max-h-* does NOT prevent harness overflow

`schema_version: 1` | `date: 2026-04-09`

Adding `overflow-y-auto` and `min-h-0` to a flex child constrains the visual scroll area but does NOT reduce `scrollHeight` as measured by the Playwright harness. The harness checks `element.scrollHeight > element.clientHeight + 6` — `flex-1 min-h-0 overflow-y-auto` does not change scrollHeight.

**The only reliable fix:** Add an explicit `max-h-*` class to the scrollable container (e.g., `max-h-64`, `max-h-52`). This constrains the rendered CSS height, which reduces the parent's scrollHeight.

**Source:** copilot-primitives.md s7 and s12 — `min-h-0` added first, harness still reported overflow; explicit `max-h-64` / `max-h-52` resolved it.

---

## Cross-Reference Table

Topics covered in multiple artifacts — check for drift when updating either:

| Topic | Artifacts | Last verified |
|-------|-----------|---------------|
| MCP transport & server setup | `workshop/05-mcp-servers/` (2026-02-15), `tech-talks/mcp-apps/` (2026-03-01) | 2026-04-08 |
| Instructions files & `.instructions.md` | `workshop/01-instructions/` (2026-01-20), `tech-talks/copilot-primitives/` (2026-03-23) | 2026-04-08 |
| Agent sessions & custom agents | `tech-talks/vscode-latest/` (2026-03-05), `workshop/06-custom-agents/` (2026-02-10) | 2026-04-08 |
| Memory layers (3-layer model) | `tech-talks/copilot-memory/` (2026-02-01), `workshop/05-mcp-servers/` (2026-02-15) | 2026-04-08 |
| Prompt files & `.prompt.md` | `workshop/03-custom-prompts/` (2026-01-25), `tech-talks/copilot-primitives/` (2026-03-23) | 2026-04-08 |
| Agent orchestration patterns | `tech-talks/agent-teams/` (2026-04-07), `tech-talks/agent-orchestration/` (2026-03-10) | 2026-04-08 |

**How to use:** When updating one artifact, query — *"what else covers this topic?"* — then verify alignment manually. Update `Last verified` date when confirmed still consistent.

**Source:** memory-plan.md Wild Ideas §3; built from `slides/SECTIONS.md` and README scan.

---

## inspect-slide: Multi-viewport testing catches responsive overflow

`schema_version: 2` | `date: 2026-04-10`

inspect-slide tests overflow at 3 breakpoints: 1920px (desktop), 1366px (laptop), 768px (tablet). Content that fits at 1920px can overflow at smaller responsive sizes. This was the root cause of false negatives on copilot-azure-mcp slides 16-18 — both showed 340px+ overflow at 1366px but earlier test runs reported "ok" when only testing 1920px. 

**Critical:** Always validate slides at all 3 breakpoints. Grid-based layouts are especially prone to responsive overflow.

**Source:** copilot-azure-mcp review session 2026-04-10 — identified via Adversarial Council debug process and confirmed by re-running tests at each breakpoint.

---

## inspect-slide: HTML tag balance validation

`schema_version: 1` | `date: 2026-04-10`

inspect-slide reports div tag balance within each slide (e.g., "31 opens, 30 closes"). Unmatched opens/closes prevent proper Slidev rendering — the slide may not display at all or render with invisible content. Always check inspect-slide JSON output for `"syntaxError": true` before concluding a slide is clean.

**Pattern:** Unclosed wrapper div on copilot-chat-internals s18 had outer `<div class="relative z-10 flex-1 min-h-0">` that was never closed, causing the slide not to render.

**Source:** copilot-chat-internals review session 2026-04-10 — inspect-slide caught the error (31 opens, 30 closes), guided fix.

---

## inspect-slide: Trigger phrases for natural language invocation

`schema_version: 1` | `date: 2026-04-10`

Configured skill responds to: "inspect slide", "review slide", "check slide", "slide overflow", "slide review", "inspect deck", "review deck". Users can invoke using natural language instead of explicit command syntax. Improves usability and discoverability of the tool.

**Source:** skill config session 2026-04-10 — .github/skills/inspect-slide/SKILL.md triggers field.

---

## GitHub Copilot Code Review: Rulesets (UI) + instruction files, not YAML config

`schema_version: 1` | `date: 2026-04-09`

GitHub Copilot Code Review is configured via **Rulesets in the GitHub UI** (Settings → Code and automation → Rules), not via YAML config files. Custom behavior is defined in **`.github/copilot-instructions.md`** (Markdown format) and **`.github/instructions/<topic>.instructions.md`** (Markdown with YAML frontmatter containing only `applyTo` glob patterns).

**No official support for:**
- `copilot-review.yml` or `compliance-rules.yml` files
- YAML schemas with fields like `triggers`, `severity_threshold`, `focus`, `pattern`, `require_context`, `condition`, `rule` IDs
- File-based trigger or configuration logic

This was a **critical hallucination in copilot-code-review tech-talk** content — completely rewritten to reflect accurate API.

**Source:** Verified against GitHub official docs (https://docs.github.com/en/copilot/using-github-copilot/code-review and https://docs.github.com/en/copilot/tutorials/use-custom-instructions). Hallucination audit completed 2026-04-09.

---

## Slidev: Multi-line YAML in code blocks breaks Vue parser

`schema_version: 1` | `date: 2026-04-09`

A `<code>` block containing YAML with pipe syntax (`|`) or multi-line strings causes Slidev's Vue template parser to fail silently. The slide shows "An error occurred on this slide" in the browser, but inspect-slide.js reports `"syntaxError": false` (because the HTML tag balance is correct — the Vue error is runtime, not structural).

**Affected slides in this session:**
- copilot-code-review s5: YAML with `version: 1 review:\n  triggers:\n  ...` inline with opening tag
- copilot-code-review s10: YAML with `rules:\n  - id: "pii-encryption"\n    message: |\n      ...` (pipe multi-line)

**Fix:** Flatten YAML examples to single-line keys without inline comments or pipe strings. If pipe is necessary, convert to a simple multi-line YAML block outside of `<code>` tags or remove the YAML entirely.

**Source:** copilot-code-review slide review session 2026-04-09 — both slides fixed by removing multi-line YAML from code blocks.

