/**
 * rollout-toc-slide.mjs
 * Replaces raw TOC HTML in all 17 tech-talk decks with <TocSlide> component.
 * Run from: slides/   →   node scripts/rollout-toc-slide.mjs
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const DECKS_DIR = join(__dir, '..', 'tech-talks')

// ── Section data for every deck ────────────────────────────────────────────

const DECK_SECTIONS = {
  'agentic-journey.md': [
    { icon: '📥', title: 'Phase 1: Agentic Intake',    subtitle: 'Automatic triage & duplicate detection',          blurb: '20-30 min → 3 min per issue',            slide: 4  },
    { icon: '📋', title: 'Phase 2: Agentic Planning',  subtitle: 'Historical context research & execution plans',    blurb: '2-4 hours → 15 min planning time',       slide: 7  },
    { icon: '💻', title: 'Phase 3: Agentic Coding',    subtitle: 'Implementation from approved plans',               blurb: '8-12 hours → 1-2 hours to PR',           slide: 10 },
    { icon: '🔍', title: 'Phase 4: Code Review',       subtitle: 'Security & outcome validation',                    blurb: '2-4 hours → 20 min review time',         slide: 12 },
  ],
  'agent-teams.md': [
    { icon: '🧱', title: 'Subagents: The Building Block', subtitle: 'Isolated context windows for delegation',         blurb: 'The primitive behind all multi-agent patterns',           slide: 4  },
    { icon: '👥', title: 'Agent Teams',                   subtitle: 'Organized specialists via Squad',                 blurb: 'Role-based coordination with persistent memory',          slide: 9  },
    { icon: '🚀', title: 'Autonomous Execution',          subtitle: 'Background agents + worktrees',                   blurb: '85 active min → 27: supervision-free execution',          slide: 13 },
    { icon: '🎭', title: 'Multi-Model Deliberation',      subtitle: 'AgentCouncil collaborative & adversarial',        blurb: 'Claude + GPT + Gemini debate to stress-test answers',     slide: 17 },
  ],
  'agentic-sdlc.md': [
    { icon: '📐', title: 'AgentRC Maturity Model',   subtitle: '5 levels from functional to autonomous',          blurb: 'What each level unlocks for speed, automation, and safety', slide: 4  },
    { icon: '🏗️', title: 'Repository Topology',      subtitle: 'Agent-native monorepo patterns',                  blurb: 'Eliminate coordination overhead, enable atomic changes',     slide: 11 },
    { icon: '📋', title: 'PR Workflows',              subtitle: 'Outcome validation at scale',                     blurb: 'From line-by-line review to evidence-based governance',     slide: 15 },
    { icon: '🏭', title: 'Trust Manufacturing',       subtitle: 'CI as a trust factory',                           blurb: '<10 min PR checks, zero-flake tolerance, attestations',    slide: 19 },
  ],
  'agentic-workflows.md': [
    { icon: '🎯', title: 'The Opportunity',         subtitle: 'Intent-driven automation with AI agents',     blurb: 'Write what you want to happen, AI figures out how',  slide: 4  },
    { icon: '🏗️', title: 'Core Architecture',       subtitle: 'Markdown → Secure YAML compilation',          blurb: 'Sandboxed agents, validated write operations',        slide: 7  },
    { icon: '🔒', title: 'Safe Outputs',            subtitle: 'Security-first write operations',             blurb: 'AI decides, sanitized handlers execute',              slide: 11 },
    { icon: '🏭', title: 'Agent Factory Patterns',  subtitle: '100+ proven workflow patterns',               blurb: 'Specialization reveals possibilities',                 slide: 13 },
  ],
  'copilot-hooks.md': [
    { icon: '🔄', title: 'Lifecycle Control',         subtitle: '8 hook events for governance',            blurb: 'SessionStart, PreToolUse, PostToolUse, SubagentStart, Stop', slide: 4  },
    { icon: '🛡️', title: 'Preventive Enforcement',    subtitle: 'PreToolUse power',                        blurb: 'Deny operations before execution, modify inputs, require approval', slide: 8  },
    { icon: '📋', title: 'Observability & Audit',     subtitle: 'Complete lifecycle logging',              blurb: 'JSON Lines format, structured queries, compliance evidence', slide: 12 },
    { icon: '🏢', title: 'Real-World Patterns',       subtitle: 'HIPAA, SOC 2, quality gates',             blurb: 'Multi-layer security, context injection, compliance trails', slide: 16 },
  ],
  'copilot-code-review.md': [
    { icon: '⚙️', title: 'Setup & Configuration',         subtitle: 'From enablement to first review in 15 minutes', blurb: 'Rulesets UI + custom instruction files',                              slide: 4  },
    { icon: '💬', title: 'Understanding Review Feedback',  subtitle: 'Six capability categories with examples',        blurb: 'Security, quality, tests, performance, compliance, architecture',     slide: 9  },
    { icon: '📊', title: 'Measuring ROI',                  subtitle: 'Calculator + optional automation',               blurb: '40-60% cycle time reduction, 90%+ security improvement',             slide: 12 },
    { icon: '🏛️', title: 'Enterprise Compliance',          subtitle: 'HIPAA, PCI-DSS, SOC2 guidance patterns',         blurb: 'Custom instruction files for regulatory standards',                   slide: 16 },
  ],
  'copilot-azure-mcp.md': [
    { icon: '💬', title: 'Live Azure Context',           subtitle: 'Conversational resource discovery and config extraction', blurb: 'Query live state without portal tab-switching', slide: 4  },
    { icon: '🔄', title: 'The Prototype Loop',           subtitle: 'Plan Mode validation before deployment',                  blurb: '45 minutes → 8 minutes with live context',     slide: 8  },
    { icon: '⚙️', title: 'Configuration & Setup',        subtitle: '10-minute installation and connection',                   blurb: 'VS Code, npm, or Docker — your choice',        slide: 12 },
    { icon: '🛡️', title: 'Guardrails & Trust Boundaries',subtitle: 'RBAC-scoped access and read-only mode',                  blurb: 'Safe exploration without elevation',            slide: 15 },
  ],
  'copilot-acp.md': [
    { icon: '🎯', title: 'The LSP Analogy',        subtitle: 'ACP is "LSP for AI agents"',              blurb: 'From N×M integrations to N+M standard protocol',   slide: 4  },
    { icon: '🏗️', title: 'Protocol Architecture',  subtitle: 'Four-layer design',                       blurb: 'Transport → Protocol → Session → Application',     slide: 7  },
    { icon: '🚀', title: 'Getting Started',         subtitle: 'From zero to connected',                  blurb: 'Start server, connect SDK, send first prompt',     slide: 11 },
    { icon: '🛡️', title: 'Security & Use Cases',   subtitle: 'Trust boundaries and real-world patterns',blurb: 'Zed integration, CI/CD, polyrepo workflows',        slide: 14 },
  ],
  'vscode-latest.md': [
    { icon: '🤖', title: 'Agent Sessions & Orchestration', subtitle: 'Multi-session workflows and specialized agents', blurb: '4 agent types, subagents, worktree isolation',        slide: 4  },
    { icon: '🧩', title: 'Agent Customization',             subtitle: 'Skills, Plugins, and org-level control',        blurb: 'GA Agent Skills, /create-* commands, /init',          slide: 9  },
    { icon: '🧠', title: 'Claude Integration',              subtitle: 'Thinking tokens and Anthropic SDK',              blurb: 'Visible reasoning, steering, context editing',        slide: 14 },
    { icon: '🔒', title: 'Security & UX',                   subtitle: 'Sandboxing, automation, and browser tools',      blurb: 'Terminal sandboxing, YOLO mode, agentic browser',     slide: 17 },
  ],
  'copilot-web.md': [
    { icon: '🔄', title: 'Delegation Loop',      subtitle: 'From assignment to draft PR',        blurb: 'Asynchronous, evidence-driven',         slide: 4  },
    { icon: '✍️', title: 'Writing Issues',        subtitle: 'Specs that produce quality PRs',     blurb: 'Template-driven, image-capable',         slide: 9  },
    { icon: '🔒', title: 'Trust & Configuration', subtitle: 'Environment setup and firewall',      blurb: 'Setup before enforcement',              slide: 13 },
    { icon: '✅', title: 'Review Workflow',        subtitle: 'Mobile-ready, agents-first',          blurb: '4hr → 30min turnaround',                slide: 17 },
  ],
  'copilot-sdk.md': [
    { icon: '🏗️', title: 'Architecture',          subtitle: 'How SDK wraps Copilot CLI',               blurb: 'Agent runtime as a library',                    slide: 4  },
    { icon: '🚀', title: 'Getting Started',        subtitle: 'Install, configure, first SDK call',      blurb: 'pip install in 15 minutes',                     slide: 7  },
    { icon: '🌐', title: 'Advanced Patterns',      subtitle: 'Web APIs and scheduled automation',        blurb: 'Embed agents in any application',                slide: 10 },
    { icon: '📊', title: 'Real-World Use Cases',   subtitle: 'Release notes, test analysis, more',       blurb: '2 hours → 10 minutes automation wins',           slide: 13 },
  ],
  'copilot-primitives.md': [
    { icon: '📖', title: 'Instructions',     subtitle: 'The foundation — always-on context',    blurb: 'Transform Copilot in 5 minutes',                    slide: 4  },
    { icon: '🔧', title: 'Skills',           subtitle: 'On-demand expertise packs',              blurb: 'Progressive loading keeps context efficient',       slide: 9  },
    { icon: '📋', title: 'Custom Prompts',   subtitle: 'Reusable workflow templates',            blurb: 'Standardized team tasks via /command',              slide: 11 },
    { icon: '🤖', title: 'Custom Agents',    subtitle: 'Specialized AI personas',                blurb: 'Constrained tools + guided handoffs',               slide: 13 },
  ],
  'copilot-memory.md': [
    { icon: '🧠', title: 'How Memory Works',         subtitle: 'Agent-accessible memory tool and storage lifecycle', blurb: 'Agent writes, reads, and manages files across sessions', slide: 4  },
    { icon: '⚙️', title: 'Enabling & Managing',      subtitle: 'Configuration, visibility, and control',             blurb: 'Settings, visibility controls, and manual editing',      slide: 8  },
    { icon: '💾', title: 'What to Store',             subtitle: 'Persistence criteria and best practices',            blurb: 'What persists vs. what stays in conversation context',   slide: 11 },
    { icon: '🔐', title: 'Privacy & Best Practices', subtitle: 'Security model and effective usage',                  blurb: 'No sensitive data, curate actively, review regularly',   slide: 15 },
  ],
  'mcp-apps.md': [
    { icon: '🧩', title: 'Component Types',    subtitle: 'Charts, tables, forms, trees, cards', blurb: 'Five built-in components for most visualization needs',   slide: 4  },
    { icon: '🏗️', title: 'Building MCP Apps',  subtitle: 'MCP server implementation',            blurb: 'Complete server structure returning component specs',     slide: 10 },
    { icon: '💡', title: 'Real-World Patterns', subtitle: 'Practical use cases',                  blurb: 'Dashboards, drill-down, forms, navigation',              slide: 13 },
    { icon: '🔧', title: 'Real-World Impact',   subtitle: 'Three proven use cases',               blurb: 'Metrics dashboards, database queries, scaffolding forms', slide: 17 },
  ],
  'copilot-cli.md': [
    { icon: '🎯', title: 'Plan Mode & Steering',    subtitle: 'Collaborative planning before implementation',    blurb: '45 min → 8 min debugging, 8 attempts → 2',          slide: 6  },
    { icon: '⚡', title: 'Operating Modes',          subtitle: 'Interactive, programmatic, and cloud delegation', blurb: 'IDE and terminal stay completely free',               slide: 10 },
    { icon: '🤖', title: 'Built-in Agents',          subtitle: 'Specialized agents and /fleet fan-out',          blurb: 'Explicit parallel orchestration',                     slide: 14 },
    { icon: '🚀', title: 'Use Cases & Reference',    subtitle: 'Real-world patterns plus CLI reference',          blurb: '90 min → 15 min scaffolding, commands & config',      slide: 17 },
  ],
  'copilot-chat-internals.md': [
    { icon: '🎯', title: 'Agent Debug Panel',        subtitle: 'Real-time event monitoring',              blurb: 'v1.110 flagship debugging tool',              slide: 4  },
    { icon: '🔍', title: 'Request Inspection',        subtitle: 'See what\'s sent, how models think',      blurb: 'Debug View + Thinking + Context',             slide: 7  },
    { icon: '⚙️', title: 'Config & Infrastructure',  subtitle: 'Validate customizations, debug tools',    blurb: 'Diagnostics + Logs + MCP',                   slide: 11 },
    { icon: '🔧', title: 'Troubleshooting Patterns', subtitle: 'Systematic diagnostic workflows',          blurb: 'Minutes to root cause, not hours',            slide: 14 },
  ],
  'enterprise-patterns.md': [
    { icon: '🏢', title: 'Organization-Wide Standards', subtitle: 'Custom instructions at scale',           blurb: 'One config, hundreds of developers aligned automatically',  slide: 4  },
    { icon: '🧠', title: 'Skills & Knowledge Bases',    subtitle: 'Institutional knowledge that scales',    blurb: 'Domain expertise that loads on demand',                    slide: 8  },
    { icon: '🔐', title: 'Governance & Licensing',      subtitle: 'Control, compliance, and cost optimization', blurb: 'Seat management, policy controls, audit trails',         slide: 11 },
    { icon: '📊', title: 'Scaling & Measurement',       subtitle: 'Adoption, ROI, and federated governance', blurb: 'Self-service onboarding, metrics, 16× knowledge ROI',     slide: 15 },
  ],
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function buildTocComponent(sections) {
  const rows = sections.map(s => {
    // Inside :sections='[...]' (single-quoted attr), apostrophes break the attr boundary
    // and double quotes break the inner JS strings. Escape both safely.
    const esc = str => str
      .replace(/\\/g, '\\\\')   // backslash first
      .replace(/"/g, '\\"')     // escape double quotes (we're inside "...")
      .replace(/'/g, '\u2019')  // replace apostrophes with right single quotation mark (')
    const blurb    = esc(s.blurb)
    const title    = esc(s.title)
    const subtitle = esc(s.subtitle)
    return `    { icon: "${s.icon}", title: "${title}", subtitle: "${subtitle}", blurb: "${blurb}", slide: ${s.slide} },`
  })
  return `<!-- SLIDE: Table of Contents -->\n<TocSlide\n  :sections='[\n${rows.join('\n')}\n  ]'\n/>`
}

// Match the TOC slide: from comment to the line just before the next ---
// The TOC block ends with two closing </div>s and then a blank line before ---
const TOC_BLOCK_RE = /<!-- SLIDE: Table of Contents -->\n[\s\S]*?(?=\n---\n)/

function addTocImport(content) {
  if (content.includes("import TocSlide from './components/TocSlide.vue'")) {
    return content // already has it
  }
  return content.replace(
    "import CoreQuestionSlide from './components/CoreQuestionSlide.vue'",
    "import CoreQuestionSlide from './components/CoreQuestionSlide.vue'\nimport TocSlide from './components/TocSlide.vue'"
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────

let passed = 0
let failed = 0

for (const [filename, sections] of Object.entries(DECK_SECTIONS)) {
  const filepath = join(DECKS_DIR, filename)
  let content

  try {
    content = readFileSync(filepath, 'utf8')
  } catch (e) {
    console.error(`❌ Could not read ${filename}: ${e.message}`)
    failed++
    continue
  }

  if (!TOC_BLOCK_RE.test(content)) {
    console.error(`❌ ${filename}: TOC block not found`)
    failed++
    continue
  }

  const replacement = buildTocComponent(sections)
  let updated = content.replace(TOC_BLOCK_RE, replacement)
  updated = addTocImport(updated)

  writeFileSync(filepath, updated, 'utf8')
  console.log(`✅ ${filename}`)
  passed++
}

console.log(`\nDone: ${passed} updated, ${failed} failed.`)
