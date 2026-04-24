---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## No Instruments, No Delivery
  The Enterprise Agentic Imperative
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: No Instruments, No Delivery
mdc: true
section: Executive Talks
status: active
updated: 2026-04-23
---

<script setup>
import TitleSlide from './components/structure/TitleSlide.vue'
import CoreQuestionSlide from './components/structure/CoreQuestionSlide.vue'
import TocSlide from './components/structure/TocSlide.vue'
import SectionOpenerSlide from './components/structure/SectionOpenerSlide.vue'
import BeforeAfterSlide from './components/structure/BeforeAfterSlide.vue'
import WhatYouCanDoTodaySlide from './components/structure/WhatYouCanDoTodaySlide.vue'
import ReferencesSlide from './components/structure/ReferencesSlide.vue'
import ThankYouSlide from './components/structure/ThankYouSlide.vue'
import BeforeAfterPanelsSlide from './components/BeforeAfterPanelsSlide.vue'
import FrameworkMappingRowsSlide from './components/FrameworkMappingRowsSlide.vue'
import HeroStatSlide from './components/HeroStatSlide.vue'
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import TwoColPairedConceptsSlide from './components/TwoColPairedConceptsSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="No Instruments, No Delivery"
  subtitle="The Enterprise Agentic Imperative"
  tagline="Agentic AI multiplies developer throughput — but only if you build the cockpit first."
  meta="Executive Talk · 45 minutes"
/>

---
src: ./exec-spine.md
---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="Can your developers safely fly agentic AI at enterprise scale?"
  subtext="The tools are available. The question is whether your organization has the infrastructure to use them safely."
  highlight="Instruments make speed safe. Without them, faster means failing faster at enterprise scale."
  :cards='[
    { icon: "👔", title: "Executive Decision-Makers", description: "What infrastructure must you fund before AI investment can return value?" },
    { icon: "🗼", title: "CTOs / VP Engineering", description: "How do you coordinate agentic sessions fleet-wide without mission conflicts?" },
    { icon: "🔒", title: "CISOs / Compliance Leaders", description: "How do you make AI-generated code auditable, insurable, and defensible?" },
    { title: "55% faster task completion", description: "GitHub / Microsoft Research, 2022 — with AI coding assistance" },
    { title: "208× more frequent deployments", description: "DORA 2023 — elite teams vs. low performers. Gap widens every quarter." },
    { title: "$4.88M average breach cost", description: "IBM 2024 — before SEC disclosure obligations, fines, and reputational damage" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "✈️", title: "The Shift", subtitle: "From Coders to Captains", blurb: "Business stakes and why enterprises face a different calculus than startups", slide: 10 },
    { icon: "🎛️", title: "The Flight Model", subtitle: "Phases, Instruments, Multiplier", blurb: "How agentic delivery works — and what infrastructure makes it safe", slide: 15 },
    { icon: "⚖️", title: "The Risk", subtitle: "Governance Charter", blurb: "Six liability categories and three executive readiness tests", slide: 19 },
    { icon: "🎯", title: "The Decision", subtitle: "Three Asks", blurb: "Named owners, timelines, and exactly what you are authorizing today", slide: 23 },
  ]'
/>

---

<!-- SLIDE: Part 1 — The Shift -->
<SectionOpenerSlide
  :partNumber="1"
  title="The Shift"
  subtitle="Developers are becoming captains — the enterprise question is whether you give them the cockpit"
  :cards='[
    { icon: "📊", title: "The Business Case", blurb: "55% faster, 20-45% uplift — and the DORA gap compounds every quarter" },
    { icon: "⚖️", title: "Enterprise Stakes", blurb: "$4.88M breach + SEC 4-day disclosure — your liability, not the vendor&#39;s" },
    { icon: "⏱️", title: "The Window", blurb: "18-24 months of institution-building that latecomers cannot compress" },
  ]'
  :terminal='{ context: "executive briefing", detail: "The question is not whether AI changes delivery. It already has." }'
/>

---

<!-- SLIDE: The Business Case Is Already Made -->
<HeroStatSlide
  :partNumber="1"
  pillIcon="📊"
  pillLabel="The Shift"
  title="The Business Case Is Already Made"
  subtitle="Three data points that close the investment debate."
  :hero='{ value: "55%", label: "faster task completion with AI coding assistance", source: "GitHub / Microsoft Research, 2022" }'
  :supporting='[
    { icon: "📈", title: "20–45% Enterprise Uplift", description: "Validated productivity gains across organizations — McKinsey Digital, 2023" },
    { icon: "🏆", title: "208× Deployment Frequency", description: "Elite teams vs. low performers — DORA 2023. The gap widens every quarter." },
    { icon: "⏱️", title: "18–24 Month Window", description: "Institutional muscle memory — governance, trained teams — cannot be rushed later." }
  ]'
  :insight='{ icon: "💡", text: "The debate is settled. The decision left is whether your organization captures the gain — or watches competitors compound it." }'
  :progressDots='{ current: 1, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Enterprise Delivery Stakes -->
<HeroStatSlide
  :partNumber="1"
  pillIcon="⚖️"
  pillLabel="The Shift"
  title="Enterprise Delivery Stakes"
  subtitle="Startups can experiment without these consequences. You cannot."
  :hero='{ value: "$4.88M", label: "average enterprise data breach cost", source: "IBM Cost of a Data Breach Report, 2024" }'
  :supporting='[
    { icon: "📋", title: "SEC 4-Day Disclosure (2023)", description: "Material cybersecurity incidents require disclosure within 4 business days — before fines." },
    { icon: "⚖️", title: "Your Liability, Not the Vendor&#39;s", description: "HIPAA, SOC2, FedRAMP violations from AI-generated code are your regulatory exposure." },
    { icon: "🏢", title: "A Different Calculus", description: "Competitors without compliance constraints ship AI code without checks. You cannot." }
  ]'
  :insight='{ icon: "🛡️", text: "Agentic AI without automated governance creates a new delivery risk category. The instrument panel is your defense." }'
  :progressDots='{ current: 2, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The Cockpit Question -->
<TwoColPairedConceptsSlide
  :partNumber="1"
  pillIcon="🎛️"
  pillLabel="The Shift"
  title="The Cockpit Question"
  :left='{
    header: "AI Tools You Have",
    icon: "🤖",
    items: [
      { text: "GitHub Copilot", detail: "Code completion and agentic chat" },
      { text: "Agent mode", detail: "Autonomous multi-step task execution" },
      { text: "Background agents", detail: "Runs while developer monitors" },
      { text: "Multi-agent workflows", detail: "Parallel execution at scale" }
    ]
  }'
  :right='{
    header: "Infrastructure You Need",
    icon: "🎛️",
    items: [
      { text: "Automated test suites", detail: "80%+ coverage — gates every deployment" },
      { text: "Security scanning in CI/CD", detail: "Every commit, not spot checks" },
      { text: "Compliance automation", detail: "SOC2, HIPAA, FedRAMP enforced at merge" },
      { text: "Fleet-wide observability", detail: "Leadership sees all active sessions" }
    ]
  }'
  :insight='{ icon: "✈️", text: "You have the autopilot. The question is whether you have the cockpit instruments to fly safely." }'
  :progressDots='{ current: 3, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: The Competitive Window -->
<HeroStatSlide
  :partNumber="1"
  pillIcon="⏱️"
  pillLabel="The Shift"
  title="The Competitive Window"
  subtitle="Institutional readiness is earned over time — and it is compounding right now."
  :hero='{ value: "18–24", label: "months to build institutional muscle memory", source: "enterprise delivery transformation timelines" }'
  :supporting='[
    { icon: "🔄", title: "What Compounds", description: "Calibrated governance, trained pilots, tested automation — none can be rushed on a shorter timeline." },
    { icon: "⚠️", title: "The Latecomer&#39;s Position", description: "Organizations investing in 2025-2026 establish positions that late movers cannot replicate." },
    { icon: "📊", title: "Tools Are Not the Moat", description: "The AI tools are available to everyone. Readiness infrastructure is the defensible position." }
  ]'
  :insight='{ icon: "🎯", text: "The window is not closing because tools change. It is closing because readiness takes time — and the clock is running." }'
  :progressDots='{ current: 4, total: 4, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — The Flight Model -->
<SectionOpenerSlide
  :partNumber="2"
  title="The Flight Model"
  subtitle="Four phases, six instruments, and the multiplier that makes AI investment return value"
  :cards='[
    { icon: "✈️", title: "Four Phases", blurb: "Human authority governs entry and exit. AI autonomy in cruise phase only." },
    { icon: "🎛️", title: "Six Instruments", blurb: "Automated governance gates — each maps to an enterprise liability." },
    { icon: "⚡", title: "The Multiplier", blurb: "One developer, 3-4 concurrent sessions. $20M capacity in a $10M org." },
  ]'
  :terminal='{ context: "flight model", detail: "The limit is instrument monitoring capacity, not typing speed." }'
/>

---

<!-- SLIDE: The Authorization Model -->
<FrameworkMappingRowsSlide
  :partNumber="2"
  pillIcon="✈️"
  pillLabel="The Flight Model"
  title="The Authorization Model"
  subtitle="Two phases controlled by humans, one by AI — pilots control the boundaries"
  :rows='[
    { label: "Pre-Flight", description: "Human defines scope, acceptance criteria, and agent limits — go/no-go", tag: "Human authority" },
    { label: "Takeoff", description: "Human initializes agent with bounded scope and begins execution", tag: "Human authority" },
    { label: "Cruise", description: "AI executes while developer monitors instruments and steers", tag: "AI + monitoring" },
    { label: "Landing", description: "Human reviews output, confirms all six instruments green, deploys", tag: "Human authority" }
  ]'
  footnote="No code deploys without a pilot signing off. The authorization model is what makes AI speed governable."
  :progressDots='{ current: 1, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: The Six Instruments -->
<FrameworkMappingRowsSlide
  :partNumber="2"
  pillIcon="🎛️"
  pillLabel="The Flight Model"
  title="The Six Instruments"
  subtitle="Each provides a single traffic-light reading — all green means cleared for deployment"
  :rows='[
    { label: "Test Health", description: "Automated test results gate deployment — red grounds the flight", tag: "Quality gate" },
    { label: "Security", description: "Vulnerability scan on every commit — $4.88M breach defense", tag: "SAST / DAST" },
    { label: "Performance", description: "Regression vs. production baseline — silent slowdowns drive churn", tag: "Baseline" },
    { label: "Compliance", description: "SOC2, HIPAA, FedRAMP violations blocked before merge", tag: "Policy gate" },
    { label: "Deploy Window", description: "Change management enforced automatically — no override needed", tag: "Risk guard" },
    { label: "Dependencies", description: "Supply chain CVE scan on every import — SolarWinds defense", tag: "CVE gate" }
  ]'
  footnote="Without these instruments, you cannot verify what the agent produced. You cannot fly multiple missions safely."
  :progressDots='{ current: 2, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: The Multiplier -->
<HeroStatSlide
  :partNumber="2"
  pillIcon="⚡"
  pillLabel="The Flight Model"
  title="The Multiplier"
  subtitle="Not faster typing — more missions in the same time."
  :hero='{ value: "$20M", label: "delivery capacity from a $10M engineering organization", source: "one developer supervising 3–4 concurrent agentic sessions" }'
  :supporting='[
    { icon: "🎛️", title: "Instruments Aggregate Status", description: "One dashboard covering 3-4 flights of test, security, and compliance is manageable." },
    { icon: "✈️", title: "Cruise Is Autonomous", description: "While agents execute, the developer monitors — not types. Parallel missions compound output." },
    { icon: "🔒", title: "The Catch", description: "Without instruments, developers can&#39;t safely supervise even one session. Cockpit first." }
  ]'
  :insight='{ icon: "💡", text: "A developer managing 3-4 concurrent sessions delivers throughput equivalent to tripling headcount — without tripling payroll." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-blue-400 shadow-lg shadow-blue-500/50" }'
/>

---

<!-- SLIDE: Part 3 — The Risk -->
<SectionOpenerSlide
  :partNumber="3"
  title="The Risk"
  subtitle="Six no-fly zones recast as executive liability categories — each with a dollar figure"
  :cards='[
    { icon: "⚖️", title: "Governance Charter", blurb: "Six AI actions requiring human authorization — six liability categories." },
    { icon: "🔍", title: "Three Questions", blurb: "Readiness tests: do agents amplify productivity or amplify risk?" },
    { icon: "💡", title: "Flight Clearance", blurb: "$1 in delivery automation returns $6 — instruments are clearance." },
  ]'
  :terminal='{ context: "governance", detail: "The flight plan protects the flight." }'
/>

---

<!-- SLIDE: The Governance Charter -->
<FrameworkMappingRowsSlide
  :partNumber="3"
  pillIcon="⚖️"
  pillLabel="The Risk"
  title="The Governance Charter"
  subtitle="Six categories of AI action requiring explicit human authorization"
  :rows='[
    { label: "DB Schema", description: "Schema changes are irreversible at scale — data breach exposure", tag: "$4.88M risk" },
    { label: "Security", description: "Bypassing a compliance check can trigger SEC 4-day disclosure", tag: "Regulatory" },
    { label: "Dependencies", description: "Supply chain trust decision — SolarWinds, Log4j precedent", tag: "Supply chain" },
    { label: "Prod Config", description: "Runtime config shifts behavior as dramatically as code changes", tag: "Deploy risk" },
    { label: "Access Ctrl", description: "Privilege escalation breaks the trust model for automation", tag: "Audit flag" },
    { label: "Integrations", description: "New external connections need legal, security, compliance sign-off", tag: "Architecture" }
  ]'
  footnote="These limits earn the agent broad autonomy within them. The flight plan protects the flight."
  :progressDots='{ current: 1, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Three Questions Before You Fly -->
<ThreeColumnCardSlide
  :partNumber="3"
  pillIcon="🔍"
  pillLabel="The Risk"
  title="Three Questions Before You Fly"
  :columns='[
    { icon: "🎛️", title: "Can your pilots read instruments?", description: "Know what to monitor, what red means, and when to intervene. If no: agents amplify risk." },
    { icon: "📊", title: "Do you have instruments?", description: "Automated gates block bad code. If no: you cannot verify what the agent produced." },
    { icon: "🗼", title: "Is your control tower staffed?", description: "Fleet-wide visibility across all agentic sessions. If no: missions conflict and crash." }
  ]'
  :insight='{ icon: "⚠️", text: "Any no is a gap in your instrument panel. Agents amplify whatever the organization already is — productive or not." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: The Investment Case -->
<HeroStatSlide
  :partNumber="3"
  pillIcon="💡"
  pillLabel="The Risk"
  title="The Investment Case"
  subtitle="The instrument panel is not IT overhead. It is flight clearance."
  :hero='{ value: "6×", label: "return on every dollar invested in delivery automation", source: "IBM / Ponemon Institute" }'
  :supporting='[
    { icon: "🛡️", title: "Risk Hedge, Not IT Cost", description: "The instrument panel caps your downside — $4.88M breach vs. a platform team budget." },
    { icon: "⚡", title: "Multiplier Enabler", description: "Without instruments, the multiplier inverts: flying blind across more missions simultaneously." },
    { icon: "⏱️", title: "Payback in Weeks", description: "A platform team of 3-5 engineers enabling 3-4x throughput. Payback is weeks, not quarters." }
  ]'
  :insight='{ icon: "💡", text: "Organizations that see testing as cost and compliance automation as bureaucracy will never safely fly at scale." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-indigo-400 shadow-lg shadow-indigo-500/50" }'
/>

---

<!-- SLIDE: Part 4 — The Decision -->
<SectionOpenerSlide
  :partNumber="4"
  title="The Decision"
  subtitle="Three asks, three named owners, three timelines — what you are authorizing today"
  :cards='[
    { icon: "🔍", title: "Authorize the Audit", blurb: "VP Engineering. Four weeks. Every gap is risk with open eyes." },
    { icon: "🏗️", title: "Fund the Cockpit", blurb: "3-5 platform engineers. Enabling infrastructure — not overhead." },
    { icon: "✈️", title: "Designate Pilots", blurb: "One team. 90 days. Baseline metrics before launch." },
  ]'
  :terminal='{ context: "authorization", detail: "You are not authorizing a technology. You are authorizing a new operating model." }'
/>

---

<!-- SLIDE: Action 1 — Platform Infrastructure Audit -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🔍"
  pillLabel="The Decision"
  title="Action 1: Authorize a Platform Audit"
  :columns='[
    { icon: "🔍", title: "What", description: "Assess which of the six instruments your delivery pipeline has. Map every gap explicitly." },
    { icon: "👤", title: "Owner: VP Engineering", description: "Leads the assessment with the delivery team. Results reported to leadership in four weeks." },
    { icon: "⏰", title: "Timeline: 4 Weeks", description: "Every gap is risk you are accepting with open eyes — and a ceiling on AI ROI." }
  ]'
  :insight='{ icon: "🎯", text: "This is the only ask with a hard deadline. The next two decisions depend on what this one finds." }'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Action 2 — Fund the Instrument Panel -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="🏗️"
  pillLabel="The Decision"
  title="Action 2: Fund the Instrument Panel"
  :columns='[
    { icon: "🏗️", title: "What", description: "Dedicated platform team building the six instrument capabilities into your delivery pipeline." },
    { icon: "💰", title: "Investment: 3-5 Engineers", description: "For a 50-developer org. Same infrastructure scales to 500 developers — payback in weeks." },
    { icon: "📈", title: "Return: $1 → $6", description: "IBM/Ponemon: $1 in delivery automation returns $6 — payback before the fiscal year ends." }
  ]'
  :insight='{ icon: "💡", text: "This is not a cost center. It is the capital decision that makes your existing AI spend return value instead of create risk." }'
  :progressDots='{ current: 2, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Action 3 — Designate a Pilot Team -->
<ThreeColumnCardSlide
  :partNumber="4"
  pillIcon="✈️"
  pillLabel="The Decision"
  title="Action 3: Designate a Pilot Team"
  :columns='[
    { icon: "✈️", title: "What", description: "Select one team to operate with a complete instrument panel and structured agentic workflow." },
    { icon: "📊", title: "Scope: 90-Day Pilot", description: "Measure delivery velocity, defect rate, and deploy frequency — baseline before launch, data after." },
    { icon: "🎯", title: "Output: Business Case", description: "That data is the board-ready case for scaling agentic delivery organization-wide." }
  ]'
  :insight='{ icon: "✈️", text: "You are not authorizing a technology. You are authorizing a new operating model. Start with one team. Measure everything." }'
  :progressDots='{ current: 3, total: 3, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Before and After -->
<BeforeAfterSlide
  header="The Instrument Panel Changes Everything"
  :leftItems='["One developer, one agentic session — manual verification at every step", "AI-generated code ships without automated security or compliance checks", "Flying blind across more missions amplifies failures, not productivity", "Risk is invisible until incident — SEC 4-day clock starts after the breach"]'
  :rightItems='["One developer, 3–4 concurrent sessions with aggregated instrument status", "Automated gates on every commit — security, compliance, quality enforced", "Fleet-wide visibility — CTO/VP Engineering coordinates from the control tower", "Speed compounds advantage safely — 208× deployments, 3× lower failure rate"]'
  :metrics='[
    { value: "3–4×", detail: "developer throughput with a full instrument panel" },
    { value: "$20M", detail: "delivery capacity unlocked in a $10M engineering org" },
    { value: "6×", detail: "ROI on every dollar invested in delivery automation" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Schedule the platform infrastructure audit with your VP Engineering — four-week deadline", "Map which of the six instruments your pipeline has and identify every gap explicitly"]'
  :thisWeek='["Designate a pilot team candidate and define baseline metrics before agentic workflow begins", "Draft the platform team investment proposal — 3-5 engineers, specific gaps, payback timeline"]'
  :thisMonth='["Fund and staff the platform team; begin remediating the highest-risk instrument gaps", "Pilot team completes first full agentic sprint with complete instrument monitoring active"]'
  footer="The organizations that win are not those with the most developers. They are those whose developers can safely fly the most planes."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📊 Research & Data", color: "cyan", items: [
      { href: "https://github.blog/2022-09-07-research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/", label: "GitHub / Microsoft Research, 2022", description: "55% faster task completion with AI coding assistance" },
      { label: "McKinsey Digital, 2023", description: "20-45% enterprise productivity uplift — The economic potential of generative AI" },
      { label: "DORA State of DevOps Report, 2023", description: "Elite teams deploy 208× more frequently with a 3× lower change failure rate" }
    ] },
    { title: "🛡️ Risk & Governance", color: "indigo", items: [
      { href: "https://www.ibm.com/reports/data-breach", label: "IBM Cost of a Data Breach Report, 2024", description: "$4.88M average cost before SEC disclosure obligations and regulatory fines" },
      { label: "IBM / Ponemon Institute", description: "$1 invested in delivery automation returns $6 in reduced incident costs and remediation" },
      { label: "SEC Cybersecurity Disclosure Rules, 2023", description: "Material cybersecurity incidents require disclosure within 4 business days" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="No Instruments, No Delivery"
  subtitle="The Enterprise Agentic Imperative"
  :cards="[{ icon: '⚡', value: '3–4×', detail: 'Developer Throughput', subdetail: 'Instrument monitoring capacity — not typing speed — is the ceiling' }, { icon: '💰', value: '$20M', detail: 'Capacity in a $10M Org', subdetail: 'One developer, 3–4 concurrent agentic sessions, without tripling payroll' }, { icon: '🛡️', value: '6×', detail: 'Automation ROI', subdetail: 'IBM/Ponemon: $1 in delivery automation returns $6 in incident savings' }, { icon: '✈️', value: '3 Asks', detail: 'Audit · Fund · Pilot', subdetail: 'VP Engineering · Platform team · One team, 90 days' }]"
  prompt="What is your biggest gap in the instrument panel right now?"
/>
