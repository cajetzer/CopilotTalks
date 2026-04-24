<!-- SLIDE: Spine Reframe -->
<!-- SPINE: Shared foundation — imported by exec-delivery, exec-labor, exec-economics -->
<!-- No frontmatter or script setup — components are imported by the parent deck -->

<ThreeColumnCardSlide
  :partNumber="1"
  pillIcon="🧭"
  pillLabel="Before We Begin"
  title="This Is Not a Technology Evaluation"
  :columns='[
    { icon: "🔧", title: "Not about which tool to buy", description: "Tool selection is an output, not the decision. The AI landscape will shift again next quarter." },
    { icon: "📊", title: "Not about benchmark scores", description: "Synthetic benchmarks do not predict delivery throughput or competitive position." },
    { icon: "🎯", title: "An investment decision", description: "Organizational capacity. Competitive position. Capital allocation. Those are the questions." }
  ]'
  :insight='{ icon: "💡", text: "The organizations moving fastest are not those with the best tools. They are those who built the infrastructure to use them." }'
  :progressDots='{ current: 1, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The 67% Problem -->

<HeroStatSlide
  :partNumber="1"
  pillIcon="📊"
  pillLabel="The Coverage Gap"
  title="The 67% Problem"
  :hero='{ value: "67%", label: "of delivery labor has no AI coverage", source: "McKinsey Global Institute, 2023" }'
  :supporting='[
    { icon: "🔍", title: "Discovery & Planning", description: "Issue triage, impact analysis, architecture decisions — 20–30% of project budgets" },
    { icon: "🛡️", title: "Compliance & Governance", description: "Security review, audit trails, regulatory checks — $4.88M average breach cost" },
    { icon: "📚", title: "Knowledge & Handoffs", description: "Onboarding, documentation drift, institutional memory — 50–200% replacement cost" },
    { icon: "✅", title: "Validation & Testing", description: "Risk-weighted coverage, quality assurance — $11K/minute production outage cost" }
  ]'
  :insight='{ icon: "💡", text: "AI coding tools address the ~33% of developer time spent writing new code. The other 67% — every activity surrounding code — has no coverage." }'
  :progressDots='{ current: 2, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The Shift -->

<BeforeAfterPanelsSlide
  :partNumber="1"
  pillIcon="✈️"
  pillLabel="The Shift"
  title="From Coders to Captains"
  :before='{
    header: "Developer as Coder",
    items: [
      { text: "Productivity", detail: "lines of code written" },
      { text: "Bottleneck", detail: "typing speed" },
      { text: "Value", detail: "syntax knowledge" },
      { text: "AI role", detail: "faster autocomplete" }
    ]
  }'
  :after='{
    header: "Developer as Captain",
    items: [
      { text: "Productivity", detail: "missions completed" },
      { text: "Bottleneck", detail: "instrument monitoring capacity" },
      { text: "Value", detail: "judgment & decisions" },
      { text: "AI role", detail: "autopilot — we still fly" }
    ]
  }'
  :insight='{ icon: "✈️", text: "The question isn&#39;t about replacement. It&#39;s whether developers have the instruments they need to fly safely." }'
  :progressDots='{ current: 3, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The Flight System -->

<FrameworkMappingRowsSlide
  :partNumber="1"
  pillIcon="🗼"
  pillLabel="The System"
  title="The Flight Operations System"
  :rows='[
    { label: "FAA", description: "Sets rules for all flights — safety standards and enforcement", tag: "Security · Compliance · Legal" },
    { label: "Air Traffic", description: "Coordinates active flights — sequencing, routing, go/no-go decisions", tag: "CTO · VP Engineering" },
    { label: "Ground Crew", description: "Prepares aircraft and instruments before and after every flight", tag: "Platform · DevOps" },
    { label: "Captains", description: "Plans the mission, makes judgment calls, lands safely — accountable", tag: "Developers" },
    { label: "Autopilot", description: "Executes mechanical flight — code generation, test iteration", tag: "Agentic AI" }
  ]'
  footnote="Most organizations have Captains and Autopilot. Ground Crew and the instrument panel are missing."
  :progressDots='{ current: 4, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The Labor Arbitrage -->

<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="💰"
  pillLabel="The Arbitrage"
  title="The Labor Arbitrage"
  :left='{
    header: "Agent Execution Cost",
    icon: "🤖",
    items: [
      { text: "$2–5 per hour", detail: "API compute + infrastructure overhead" },
      { text: "Structured repeatable tasks", detail: "Triage, planning docs, compliance checks, documentation" },
      { text: "Concurrent sessions", detail: "One developer can supervise 3–4 agents simultaneously" }
    ]
  }'
  :right='{
    header: "The Condition",
    icon: "⚙️",
    items: [
      { text: "$70–150 per hour", detail: "Human engineer loaded cost — salary + benefits + overhead" },
      { text: "Manual review cancels the arbitrage", detail: "2-hour review at $100/hr + $3 agent = $203 vs $200 human-only" },
      { text: "Automated verification: 86% savings", detail: "Drops review from 2 hrs to 15 min — the instrument panel makes it work" }
    ]
  }'
  :insight='{ icon: "💡", text: "The arbitrage is real — but only when verification is automated. The instrument panel is what makes agent economics work." }'
  :progressDots='{ current: 5, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The Competitive Window -->

<HeroStatSlide
  :partNumber="1"
  pillIcon="⏱️"
  pillLabel="The Window"
  title="The Competitive Window"
  :hero='{ value: "208×", label: "more frequent deployments", source: "DORA 2023 · Accelerate State of DevOps" }'
  :supporting='[
    { icon: "📊", title: "The Baseline, Not the Goal", description: "Elite teams deploy 208× more than low performers — this is the current operating norm, not a pilot metric" },
    { icon: "🔄", title: "The Advantage Compounds", description: "Documented workflows, trained teams, calibrated governance — none of this can be rushed later" },
    { icon: "⚠️", title: "The Window Is Closing", description: "Organizations investing in 2025–2026 establish positions latecomers cannot replicate on a shorter timeline" }
  ]'
  :insight='{ icon: "🎯", text: "The tools are available to everyone. The readiness is earned over time — and it is compounding right now for your competitors." }'
  :progressDots='{ current: 6, total: 6, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>
