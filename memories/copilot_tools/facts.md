# copilot_tools / facts

Confirmed facts about Copilot Tools tech-talk decks — framing, structure, and decisions an agent reading only the deck would miss.

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
