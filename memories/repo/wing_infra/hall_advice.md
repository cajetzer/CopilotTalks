# wing_infra / hall_advice

Patterns that consistently work for Slidev slide authoring and editing.

---

## Slidev: Content limits per slide (hard limits)

`schema_version: 1` | `date: 2026-04-08`

| Element | Maximum | If Exceeded |
|---------|---------|-------------|
| Bullets per column | 5 | Split into (1/2)/(2/2) slides |
| Paragraph length | 200 chars | Break into bullets or split |
| Use cases per slide | 2 | "Part 1" / "Part 2" |
| Code examples per slide | 1 | Dedicated "Implementation" slide |
| Comparison pairs | 3 | Split slides |
| Grid items | 6 (2×3) | Continuation slide |
| Vertical div stacks | 3 | Grid layout or split |

Prefer splitting over condensing — more slides with clear content beats fewer cramped slides.

**Source:** Established limits from slide authoring experience across multiple decks.

---

## Overflow fix hierarchy: try in this order

`schema_version: 1` | `date: 2026-04-10`

When inspect-slide.js reports overflow on a content slide, fix attempts in this order:

| Step | Technique | When to use |
|------|-----------|-------------|
| 1 | Tighten spacing: `mb-N→mb-(N-1)`, `gap-N→gap-(N-1)`, `p-N→p-(N-1)` | Most cards and text lists — first pass always |
| 2 | Reduce font: `text-sm→text-xs` on body, `text-base→text-sm` on headings | When step 1 gains < 8px or doesn't clear |
| 3 | Scrollable code: `flex flex-col flex-1 min-h-0` + `overflow-y-auto` | Slides with a dominant code block |
| 4 | Restructure to 2-col grid: `grid grid-cols-2` | 3+ stacked full-width cards after two passes of step 1 |
| 5 | Split slide | When content genuinely requires more space than one slide allows |

**Do NOT** compress code block content (font size, line wrapping). Step 3 (scrollable) is always preferable to illegibly tiny code.

**For closing-section slides** (What You Can Do Today): reduce `mt-N` on the Key Takeaway box first — these slides use an explicit `mt-` offset that adds significant height.

**Source:** Refined across agent-teams, agentic-workflows, agentic-journey, and copilot-acp fix sessions.

---

## Slidev: Editorial ranking — README order ≠ slide order

`schema_version: 1` | `date: 2026-04-08`

README files are comprehensive reference docs; slide decks are curated presentations. Before picking content:
1. Score use cases on novelty, differentiation, and audience impact
2. Prefer recent additions over established patterns
3. Elevate surprising integrations ("I didn't know it could do that" moments)
4. Compress or skip table-stakes demos (basic Docker debugging, CI/CD triage)
5. Keep 2-3 use cases with the most dramatic metrics; drop the rest

**Source:** Recurring issue where agents transcribed README sections in order instead of curating for presentation value.

---

## After splitting a slide, update ALL sibling dot totals in the section

`schema_version: 1` | `date: 2026-04-08`

When splitting a slide that belongs to a section with progress dots, update ALL earlier slides in that section to reflect the new total. The new slide only handles itself — sibling slides must be updated manually.

**Example:** Splitting s21 changed Part 4 from 3 to 4 slides. s19 "1 of 3" and s20 "2 of 3" both required updates to "1 of 4" and "2 of 4".

**Source:** agent-teams.md — Part 4 dot count correction after s21 split.

---

## Split slide narrative rule: table on A, workflow/install on B

`schema_version: 1` | `date: 2026-04-08`

When splitting an overflowing slide, put the decision/comparison table on slide A and the workflow/install/how-to content on slide B. This keeps "why/what" separate from "how", improves presentation flow, and gives each half adequate breathing room.

**Source:** agent-teams.md — s11 split (team formation vs memory/persistence), s21 split (decision table vs combining workflow + install).

---

## Progress dots: three things must sync when section size changes

`schema_version: 1` | `date: 2026-04-08`

Progress dot rows have three parts that must all update together when section size changes — **for every deck, not just agent-teams**:
1. Visual dot elements count (add/remove `<div class="w-2 h-2 rounded-full ...">` divs)
2. Active dot position (which dot gets `bg-{accent}-400` vs `bg-white/20`)
3. "N of M" label text

Partial updates produce visually inconsistent slides that are subtle to spot when scrolling.

**Source:** agent-teams.md — s19/s20 dot total update from "of 3" to "of 4" required all three components.
