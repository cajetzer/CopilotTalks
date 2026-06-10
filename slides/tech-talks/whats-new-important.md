---
theme: default
colorSchema: dark
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub Copilot Refresher
  CopilotTraining Tech Talk
drawings:
  persist: false
transition: slide-left
title: GitHub Copilot Refresher
mdc: true
section: Developers
status: active
updated: 2026-06-10
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
import ThreeColumnCardSlide from './components/ThreeColumnCardSlide.vue'
import FourCardGridSlide from './components/FourCardGridSlide.vue'
import HeroStatSlide from './components/HeroStatSlide.vue'
</script>

<!-- SLIDE: Title -->
<TitleSlide
  title="GitHub Copilot Refresher"
  subtitle="What’s New and Important for Hackathon Builders"
  tagline="Pick the right surface, delegate the right work, and start building faster"
  meta="GitHub Copilot · Developers · 30 minutes"
/>

---

<!-- SLIDE: Core Question -->
<CoreQuestionSlide
  question="What should developers try first to get the biggest Copilot payoff during a hackathon?"
  subtext="The answer is not more prompts — it is"
  highlight="the right surface, the right setup, and the right delegation pattern."
  :cards='[
    { icon: "⚡", title: "Agent Mode", description: "Use bounded implementation work to let Copilot iterate instead of just suggest" },
    { icon: "🧭", title: "Surface Fit", description: "Chat for quick questions, CLI for systems work, and GitHub.com for review and triage" },
    { icon: "🧰", title: "Setup Stack", description: "Instructions, skills, and MCP turn one session into a reusable workflow" },
    { title: "30 minutes", description: "Enough time to set up the highest-leverage Copilot defaults before coding starts" },
    { title: "Fastest path", description: "A small setup investment compounds across every hackathon session" },
    { title: "Review-ready", description: "Agent output becomes easier to trust when the workflow is bounded and explicit" }
  ]'
/>

---

<!-- SLIDE: Table of Contents -->
<TocSlide
  :sections='[
    { icon: "🗺️", title: "Landscape", subtitle: "Which surface for which task", blurb: "Map the main Copilot surfaces and what each is best for", slide: 4 },
    { icon: "🤖", title: "Agent Mode", subtitle: "Delegate bounded work", blurb: "Show why outcome-based delegation changes the hackathon workflow", slide: 6 },
    { icon: "🧰", title: "Customization", subtitle: "Instructions, skills, MCP", blurb: "Make one setup stack pay off across every session", slide: 8 },
    { icon: "🎯", title: "Playbook", subtitle: "A 30-minute kickoff plan", blurb: "Give the audience a concrete checklist they can use immediately", slide: 10 }
  ]'
/>

---

<!-- SLIDE: Part 1 — The Copilot Landscape -->
<SectionOpenerSlide
  :partNumber="1"
  title="The Copilot Landscape"
  subtitle="Pick the right surface for the job instead of trying every surface at once."
  :cards='[
    { icon: "💬", title: "VS Code chat", blurb: "Fast answers, narrow code questions, quick iteration" },
    { icon: "🤖", title: "Agent Mode", blurb: "Delegation for multi-step implementation and review" },
    { icon: "🧪", title: "CLI + GitHub.com", blurb: "Systems work, remote debugging, and review workflows" }
  ]'
  :terminal='{ context: "Best surface = best task fit", detail: "Chat for ideas · Agent for implementation · CLI for systems · GitHub.com for review" }'
/>

---

<!-- SLIDE: Surface Fit -->
<ThreeColumnCardSlide
  :partNumber="1"
  pillIcon="🗺️"
  pillLabel="Surface Fit"
  title="Choose the Surface That Matches the Problem"
  :columns='[
    { icon: "🧑‍💻", title: "Editor work", description: "Use chat or Agent Mode when the task is a bounded code change you can review in the IDE", items: ["Refactors", "Tests", "Issue-to-PR workflows"] },
    { icon: "🖥️", title: "Terminal work", description: "Use CLI when the problem lives in containers, logs, CI, or remote environments", items: ["Debugging", "Automation", "Remote sessions"] },
    { icon: "✨", title: "Review and automation", description: "Use GitHub.com and CLI when the goal is validation, automation, and fast iteration on real project work", items: ["PR review", "CI tasks", "Terminal automation"] }
  ]'
  :progressDots='{ current: 1, total: 3, activeColor: "bg-cyan-400 shadow-lg shadow-cyan-500/50" }'
/>

---

<!-- SLIDE: Part 2 — Agent Mode -->
<SectionOpenerSlide
  :partNumber="2"
  title="Agent Mode"
  subtitle="The biggest mindset shift is from prompting to delegation."
  :cards='[
    { icon: "🎯", title: "Bounded tasks", blurb: "Use it when scope, constraints, and acceptance criteria are clear" },
    { icon: "📝", title: "Outcome-led", blurb: "Describe the result; let the agent choose the path" },
    { icon: "✅", title: "Review-first", blurb: "Check the draft, refine it, and approve what is ready" }
  ]'
  :terminal='{ context: "Describe the goal → review the result", detail: "Best fit for issue-driven work and small refactors" }'
/>

---

<!-- SLIDE: Why Agent Mode Wins -->
<HeroStatSlide
  :partNumber="2"
  pillIcon="🤖"
  pillLabel="Agent Mode: Why It Matters"
  title="Use It for Multi-Step Work That Benefits from Iteration"
  subtitle="This is the most useful Copilot shift for a hackathon because the task is reviewable, bounded, and fast to verify."
  :hero='{ value: "1 task", label: "Describe the outcome, let Copilot iterate through the implementation path", source: "Best for refactors, tests, issue-to-PR workflows, and small features" }'
  :supporting='[
    { icon: "🧩", title: "Clear boundaries", description: "Acceptance criteria make the agent’s actions easier to trust" },
    { icon: "🔁", title: "Iterative output", description: "The agent can revise and re-run until the result is good enough" },
    { icon: "🧠", title: "Human review", description: "You stay in control by reviewing the draft instead of typing every line" }
  ]'
  :insight='{ icon: "💡", text: "In a hackathon, the right question is not \"Can Copilot write this?\" — it is \"Can I safely delegate this bounded task to Copilot?\"" }'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-purple-400 shadow-lg shadow-purple-500/50" }'
/>

---

<!-- SLIDE: Part 3 — Customization Stack -->
<SectionOpenerSlide
  :partNumber="3"
  title="The Setup Stack That Multiplies Results"
  subtitle="One instruction file, one skill, one MCP connection can improve every session that follows."
  :cards='[
    { icon: "📄", title: "Instructions", blurb: "Teach Copilot your repo conventions and build/test preferences" },
    { icon: "🧩", title: "Skills & agents", blurb: "Reuse repeatable workflows instead of rewriting the same prompts" },
    { icon: "🔌", title: "MCP", blurb: "Connect the external tools your app already depends on" }
  ]'
  :terminal='{ context: "Setup once → better results everywhere", detail: "This is the highest-ROI investment in the first 30 minutes" }'
/>

---

<!-- SLIDE: The Multipliers -->
<FourCardGridSlide
  :partNumber="3"
  pillIcon="🧰"
  pillLabel="Customization Stack"
  title="The Multipliers You Should Try First"
  :cards='[
    { icon: "📄", title: "Repo instructions", description: "A shared .github/copilot-instructions.md sets language, testing, and style defaults" },
    { icon: "🧩", title: "One reusable skill", description: "Create a small workflow for bug triage, release notes, or test generation" },
    { icon: "🔌", title: "One MCP server", description: "Connect a database, API, or tooling surface that your app depends on" },
    { icon: "⚙️", title: "Fast feedback loop", description: "These settings reduce re-explanation and improve every subsequent prompt" }
  ]'
  :insight='{ icon: "🚀", text: "The goal is not to build a huge custom setup. The goal is to remove friction from the first 10 minutes of every session." }'
  :progressDots='{ current: 1, total: 2, activeColor: "bg-green-400 shadow-lg shadow-green-500/50" }'
/>

---

<!-- SLIDE: Part 4 — 30-Minute Hackathon Playbook -->
<SectionOpenerSlide
  :partNumber="4"
  title="30-Minute Hackathon Playbook"
  subtitle="Use this checklist before the first line of production code is written."
  :cards='[
    { icon: "🧭", title: "Pick the surface", blurb: "Chat, Agent Mode, CLI, or GitHub.com based on the task" },
    { icon: "🛠️", title: "Set the defaults", blurb: "Instructions, one skill, and one MCP connection if needed" },
    { icon: "⚡", title: "Delegate one bounded task", blurb: "Review the result and use that to guide the rest of the session" }
  ]'
  :terminal='{ context: "30-minute kickoff plan", detail: "Try one bounded task with real output before the hackathon gets busy" }'
/>

---

<!-- SLIDE: Before/After -->
<BeforeAfterSlide
  header="From Prompting Everything to Delegating the Right Work"
  :leftItems='["Open Copilot and start over-explaining the repo", "Type every step manually", "Re-learn the same conventions each session", "Use the same surface for every task"]'
  :rightItems='["Set one instruction file and one reusable skill", "Delegate bounded work to Agent Mode", "Match the surface to the task at hand", "Use small setup investments that compound all day"]'
  :metrics='[
    { value: "30 min", detail: "Enough time to set up the highest-leverage defaults" },
    { value: "1 setup stack", detail: "Instructions + skills + MCP = reusable acceleration" },
    { value: "Faster iteration", detail: "Less re-explanation and more real implementation" }
  ]'
/>

---

<!-- SLIDE: What You Can Do Today -->
<WhatYouCanDoTodaySlide
  :today='["Create a repo-level Copilot instructions file", "Try Agent Mode on one bounded feature task", "Use CLI for one systems or debugging problem"]'
  :thisWeek='["Add one reusable skill for a team workflow", "Connect one MCP server for a real dependency", "Review an AI-generated draft PR before approving"]'
  :thisMonth='["Standardize a hackathon starter pack for your team", "Measure which surface saves the most time", "Document the best prompts and settings for your stack"]'
  footer="The best Copilot setup is the one that makes the next task visibly faster to start."
/>

---

<!-- SLIDE: References -->
<ReferencesSlide
  :groups='[
    { title: "📖 Official Documentation", color: "cyan", items: [
      { href: "https://docs.github.com/en/copilot", label: "GitHub Copilot documentation", description: "Core concepts, setup, and how-to guides" },
      { href: "https://github.com/features/copilot/whats-new", label: "What’s new with GitHub Copilot", description: "Latest product updates and previews" }
    ] },
    { title: "📰 Related Reading", color: "purple", items: [
      { href: "https://github.blog/ai-and-ml/github-copilot/", label: "GitHub Copilot blog and announcements", description: "Feature deep dives and release notes" }
    ] }
  ]'
/>

---

<!-- SLIDE: Thank You -->
<ThankYouSlide
  title="GitHub Copilot Refresher"
  subtitle="What’s New and Important for Hackathon Builders"
  :cards='[
    { value: "Choose", detail: "the right surface for the task" },
    { value: "Delegate", detail: "bounded work with Agent Mode" },
    { value: "Set up once", detail: "and let the setup compound across the event" }
  ]'
  prompt="Which Copilot capability will you try first during the hackathon?"
/>
