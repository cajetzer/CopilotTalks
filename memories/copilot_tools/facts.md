# copilot_tools / facts

Confirmed facts about Copilot Tools tech-talk decks — framing, structure, and decisions an agent reading only the deck would miss.

---

## copilot-cli.md: Deck structure and section mapping (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

**Slide count:** 28 slides. The recipe explicitly states the 25-slide ceiling does not apply for this 45-minute talk. Section opener slide numbers: Part 1=4, Part 2=10, Part 3=15, Part 4=20.

**Section arc (recipe-driven):**
- Part 1 "The Terminal Sees Reality" (cyan, 5 body): HeroStat (84%/16% problem) → FrameworkMappingRows (Distance Model: Intent/Complexity/Context/Time/Geography) → AITerminalTranscript (Plan Mode Docker debug: 45min→8min) → BeforeAfterMetrics (8 attempts→2) → FourCardGrid (4 operating modes)
- Part 2 "Range and Delegation" (blue, 4 body): AITerminalTranscript (/fleet fan-out: 3 workstreams in parallel) → BeforeAfterMetrics (sequential vs /fleet) → TwoColPaired (cloud delegation & vs blocking) → FourCardGrid (infinite sessions: auto-compact, repo memory, /compact, additive instructions)
- Part 3 "Work Where the Problem Is" (indigo, 4 body): HeroStat (--remote intro, public preview 2026-04-13) → AITerminalTranscript (walking-to-meeting debug demo) → TwoColPaired (Geography + Compliance closing together) → FrameworkMappingRows (4 combination patterns)
- Part 4 "Patterns That Actually Stick" (purple, 4 body): BeforeAfterPanels (log forensics — compliance violation prevented) → WorkflowShowdown (infra patrol vs traditional monitoring) → TwoColPaired (GitHub.com integration — context loss prevented) → CodeWithFeatures (CI/CD headless copilot -p)

**Key framing decisions:**
- "The Distance Model" (5 named gaps: Intent, Complexity, Context, Time, Geography) is the structural spine — each section closes at least one distance explicitly
- S1 is the live-demo peak (Plan Mode Docker debug), S3 is the marquee reveal (--remote walking-to-meeting), S2 is the deliberate breath between them
- Geography + Compliance close simultaneously in S3 — not separated; compliance is by architecture, not policy
- S4 slides each headline a failure mode prevented, not a feature — transforms feature catalog into practitioner guidance
- Recipe note preserved: DO NOT cut to 25 slides on regeneration — 28 is correct for a 45-minute talk

**Required trailer — always append after ThankYouSlide:**
The deck must end with a Slidev `src:` include that pulls in the reference slide file:
```
---
src: ./copilot-cli-reference.md
---
```
This must appear as the final block in the file, after `ThankYouSlide`. It is not a `<!-- SLIDE: -->` component — it is a raw Slidev frontmatter include. Do not omit it when regenerating.

**Source:** `slides/tech-talks/copilot-cli.md`, `tech-talks/copilot-cli/deck.recipe.yml`

---

## copilot-chat-internals.md: Deck structure and section mapping (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

**Slide count:** 24 slides. Section opener slide numbers: Part 1=4, Part 2=9, Part 3=14, Part 4=17.

**Section arc (recipe-driven):**
- Part 1 “Agent Debug Panel: Real-Time Events” (cyan, 4 body): FourCardGrid (4 event stream types) → AITerminalTranscript (YAML syntax error caught in 90 sec) → TwoColPaired (Chart View + Loaded Customizations) → WorkflowShowdown (reload-and-pray vs panel-first)
- Part 2 “Chat Debug View: Full Pipeline” (blue, 4 body): FrameworkMappingRows (5-stage request pipeline) → AITerminalTranscript (wrong file in context demo) → FourCardGrid (thinking token insights) → BeforeAfterMetrics (/compact + /fork context management)
- Part 3 “Customization Diagnostics” (indigo, 2 body): FrameworkMappingRows (4 failure modes + fixes) → TwoColPaired (Diagnostics View vs Extension Logs)
- Part 4 “Systematic Troubleshooting” (purple, 3 body): FrameworkMappingRows (4 symptom → tool decision map) → WorkflowShowdown (ad-hoc vs systematic) → HeroStat (4 min diagnosis)

**Key framing decisions:**
- Core stat: 45 min → 4 min (config error diagnosis) — appears in BeforeAfterSlide, HeroStat, terminal detail on Part 3 opener
- Part 1 is the wow-moment section — Agent Debug Panel (v1.110) is the entry hook; LSP analogy not used here
- Part 2 unifies 3 sub-features (Chat Debug View, Thinking Tokens, Context Management) into one pipeline mental model
- Part 3 is intentionally short (2 slides) — config diagnostics are the bridge between wow and systematic patterns
- Decision map in Part 4 slide 18 maps 4 symptoms to 4 tools — this is the practitioner take-home artifact

**Source:** `slides/tech-talks/copilot-chat-internals.md`, `tech-talks/copilot-chat-internals/deck.recipe.yml`

---

## copilot-azure-mcp.md: Deck structure and section mapping (2026-04-22)

`schema_version: 1` | `date: 2026-04-22`

**Slide count:** 24 slides. Section opener slide numbers: Part 1=4, Part 2=9, Part 3=14, Part 4=17.

**Section arc (recipe-driven):**
- Part 1 "Live Azure Context" (cyan, 4 body): FourCardGrid (4 capabilities) → AITerminalTranscript (live query demo) → TwoColPaired (config extraction old vs new) → BeforeAfterMetrics (environment clone)
- Part 2 "Prototype Loop" (blue, 4 body): WorkflowShowdown (traditional vs Plan Mode) → AITerminalTranscript (Plan Mode demo with firewall gap catch) → CodeWithFeatures (generated Bicep) → HeroStat (82% time reduction)
- Part 3 "Configuration & Setup" (indigo, 2 body): CodeWithFeatures (install + config) → ThreeColumnCard (40+ services, scope 3 categories)
- Part 4 "Guardrails & Trust" (purple, 3 body): FrameworkMappingRows (RBAC model) → TwoColPaired (read-only vs write strategies) → WorkflowShowdown (escalation path)

**Key framing decisions:**
- "Hook → value → adoption → trust" is the narrative arc — config before guardrails is deliberate (practitioners need the how before they sell the safe)
- The 45 min → 8 min stat is the anchor number; appears in TocSlide blurb, Part 2 opener, WorkflowShowdown, and HeroStat
- Part 3 (Setup) is intentionally short (2 slides) — it's the adoption enabler, not the value story

**Source:** `slides/tech-talks/copilot-azure-mcp.md`, `tech-talks/copilot-azure-mcp/deck.recipe.yml`
