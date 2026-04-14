# wing_infra / hall_facts

Confirmed, locked facts about Slidev infrastructure, build rules, and structural gotchas.

---

## CoreQuestionSlide component: props, constraints, and usage (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

The `CoreQuestionSlide` component is **REQUIRED as slide 2** in all tech-talk decks.

**Import:**
```js
import CoreQuestionSlide from './components/CoreQuestionSlide.vue'
```

**Props:**
| Prop | Type | Required | Notes |
|------|------|----------|-------|
| `question` | String | ✅ | The core question text, quoted. Max 100 chars. |
| `subtext` | String | — | Setup sentence before the highlight. |
| `highlight` | String | ✅ | Bold colored punchline. `subtext`+`highlight` ≤ 160 chars combined. |
| `:cards` | Array (6) | ✅ | Exactly 6 `{ icon?, title, description }` objects. |

**Card schema:** `{ icon?: string, title: string, description: string }`
- `title` ≤ 40 chars; `description` ≤ 90 chars
- Cards 0-2 (row 1): audience/use-case cards — include `icon`, renders as ghost watermark
- Cards 3-5 (row 2): insight/stat cards — `icon` optional
- Exactly 6 cards — component `console.error`s if count differs

**Apostrophe rule:** `:cards='[...]'` uses single-quoted attribute. Escape apostrophes in strings as `&#39;`.

**Separator rule:** blank line required before `---` after `/>` closing tag.

**Usage:**
```html
<!-- SLIDE: Core Question -->
<CoreQuestionSlide
question="The core question?"
subtext="Setup text without the punchline —"
highlight="The highlighted punchline goes here."
:cards='[
  { icon: "🔧", title: "Audience Persona 1", description: "What they get" },
  { icon: "👥", title: "Audience Persona 2", description: "What they get" },
  { icon: "🚀", title: "Audience Persona 3", description: "What they get" },
  { title: "Key Stat 1", description: "Concrete constraint or metric" },
  { title: "Key Stat 2", description: "Concrete constraint or metric" },
  { title: "Key Stat 3", description: "Concrete constraint or metric" }
]'
/>
```

---

## Tech-talk component import path must be `./components/` not `../components/` (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

All tech-talk deck `.md` files must import `TitleSlide` and `ThankYouSlide` using `./components/` (relative to `slides/tech-talks/`). Using `../components/` resolves to the root `slides/components/` folder which does NOT contain these components — build fails with `UNRESOLVED_IMPORT`. Fixed 2026-04-14 across all 21 active tech-talk decks.

**Correct:**
```js
import ThankYouSlide from './components/ThankYouSlide.vue'
import TitleSlide from './components/TitleSlide.vue'
```

**Wrong (causes build failure):**
```js
import ThankYouSlide from '../components/ThankYouSlide.vue'
```

---

## `TitleSlide` and `ThankYouSlide`: `logoSrc`/`logoAlt` props removed (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

Both `TitleSlide.vue` and `ThankYouSlide.vue` (in `slides/tech-talks/components/`) no longer accept `logoSrc` or `logoAlt` props. The logo is hardcoded as `src="../sdp-logo.png"` `alt="SDP Logo"` in the template. The `import defaultTechTalkLogoSrc` line was also removed.

**`logoClass` prop is KEPT** — it remains on both components (default `"w-64"`) because `parallel-execution.md` overrides it with `logoClass="w-20"`.

---

## `section:` frontmatter is required in all tech-talk decks (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

All 17 active tech-talk `.md` files must include a `section:` field in YAML frontmatter. The field must match one of the valid values in `slides/SECTIONS.md`.

**Valid values (as of 2026-04-14):**
- `Copilot Tools`
- `Customization & Context`
- `Agentic Engineering`

**Correct placement** — between `mdc:` and `status:`:
```yaml
module: tech-talks/<slug>
mdc: true
section: Agentic Engineering
status: active
updated: YYYY-MM-DD
```

All 17 decks were updated 2026-04-14. The slide generator agent and `slides/tech-talks/template.md` should emit this field for new decks.

---

## ReferencesSlide component: apostrophe escaping required in single-quoted attribute (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

The `<ReferencesSlide :groups='[...]' />` prop uses single-quoted attribute syntax (required because the JSON array uses double quotes internally). Any apostrophe in item string values — e.g. `Peli's` — will **terminate the attribute early**, causing:

```
[plugin:vite:vue] Error parsing JavaScript expression: Unterminated string constant
```

**Fix:** escape apostrophes in all item `label` and `description` strings as `&#39;`.

**Correct:**
```html
{ label: "Peli&#39;s Agent Factory Blog", description: "..." }
```

**Wrong (breaks build):**
```html
{ label: "Peli's Agent Factory Blog", description: "..." }
```

Also confirmed: the `---` slide separator must have a blank line **before** it when immediately following a self-closing component tag (`/>`). Missing the blank line causes a silent parse failure.

---

## VS Code Remote (legacy-4): dev tunnel URL for Slidev on port 3030 (2026-04-14)

`schema_version: 1` | `date: 2026-04-14`

When running `npm run dev` from `slides/` on the remote machine **legacy-4**, VS Code automatically creates a dev tunnel and forwards port 3030. The tunnel URL is:

```
https://9gbdmjtg-3030.use2.devtunnels.ms/21
```

The VS Code built-in browser (`simpleBrowser.show`) can open `https://9gbdmjtg-3030.use2.devtunnels.ms:3030` to view the live Slidev deck inside the editor — the hostname will likely change each session

**Workflow to view slides from remote:**
1. `cd slides && npm run dev .\tech-talks\<deck>.md` on legacy-4
2. In VS Code: `Ctrl+Shift+P` → `Simple Browser: Show` → `http://localhost:3030`
   — OR use the tunnel URL above if connecting from an external browser.

https://vscode.dev/tunnel/legacy-4 to connect to VSCode on remote

---

## Slidev dev server: `--remote` flag in devcontainer requires `--remote=` (2026-04-13)

`schema_version: 1` | `date: 2026-04-13`

In the CopilotTraining devcontainer, Slidev's `--remote` flag must be passed as `--remote=` (with explicit empty `=`) when other positional args (e.g. the entry file) follow it. Because `--remote` is typed as `[string]` in yargs, passing `--remote` without `=` causes yargs to consume the next positional argument (the entry filename) as the remote password, breaking the dev server.

**Correct `package.json` scripts entry:**
```json
"dev": "slidev --remote= --open"
```

**Effect:** Binds to `0.0.0.0` (all interfaces) with no password, allowing VS Code devcontainer port forwarding to reach the server on port 3030.

**Also added** `"forwardPorts": [3030]` to `.devcontainer/devcontainer.json` for automatic port forwarding on container rebuild.

**Source:** Diagnosed 2026-04-13 — server was listening on `IPv6 localhost:3030` only; `curl localhost:3030` worked inside container but browser hung from host.

---

## Slidev: `---` in code blocks must be escaped as HTML entities (2026-04-13)

`schema_version: 1` | `date: 2026-04-13`

Literal `---` appearing on its own line inside a `<code>` or `<pre>` block is parsed by Slidev as a slide separator, even when enclosed in HTML tags. This breaks the slide structure and causes Vue template parse errors ("Element is missing end tag").

**Affected pattern:** YAML frontmatter examples with `---` delimiters:
```html
<!-- WRONG: causes slide split -->
<pre><code class="language-yaml">---
name: my-agent
---</code></pre>

<!-- CORRECT: renders as "---" but doesn't split -->
<pre><code class="language-yaml">&#45;&#45;&#45;
name: my-agent
&#45;&#45;&#45;</code></pre>
```

**Entity:** `&#45;` = hyphen. Three hyphens = `&#45;&#45;&#45;`.

**Source:** vscode-latest.md slide 13 (Org-Level Instructions) — YAML agent frontmatter example with `---` caused build failure. Fixed by escaping.

---

## GitHub Docs URL restructuring (2026-04-12)

`schema_version: 1` | `date: 2026-04-12`

GitHub Docs has restructured Copilot URLs. Many old paths are 404. Future reference slides must use new paths.

**Dead paths (404):**
- `customizing-copilot/customizing-the-behavior-of-github-copilot`
- `building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension`
- `managing-copilot/.../managing-access-for-copilot-in-your-enterprise`
- `enterprise-cloud@latest/copilot/copilot-chat/...`
- `rest/copilot/copilot-metrics` (legacy API closed April 2, 2026)

**New structure — verified working:**
- Custom instructions: `how-tos/configure-custom-instructions/add-organization-instructions`
- Agent skills: `concepts/agents/about-agent-skills`
- Knowledge Bases / Copilot Spaces: `how-tos/provide-context/use-copilot-spaces`
- Enterprise access management: `how-tos/administer-copilot/manage-for-enterprise/manage-access`
- Usage & adoption metrics: `how-tos/administer-copilot/view-usage-and-adoption`
- Managing Copilot for enterprise: `managing-copilot/managing-copilot-for-your-enterprise` (still works)

**Rule:** All base URLs are `https://docs.github.com/en/copilot/`. Verify any reference link older than 2026-03 against live docs before publishing.

**Source:** enterprise-patterns.md References slide link audit, session 2026-04-12.

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
| Agent sessions & custom agents | `tech-talks/vscode-latest/` (2026-04-13), `workshop/06-custom-agents/` (2026-02-10) | 2026-04-13 |
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
