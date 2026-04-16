/**
 * rollout-section-opener-slide.mjs
 * Replaces raw HTML Part section opener slides in all 16 tech-talk decks
 * with <SectionOpenerSlide> component calls.
 * Run from: slides/   →   node scripts/rollout-section-opener-slide.mjs
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const DECKS_DIR = join(__dir, '..', 'tech-talks')

// Escape helper: values sit inside a single-quoted Vue attribute, inner strings use double quotes.
// → escape double quotes, replace apostrophes with curly right single-quote to avoid attr breakage.
const esc = str => str
  .replace(/\\/g, '\\\\')
  .replace(/"/g, '\\"')
  .replace(/'/g, '\u2019')

// ── Per-deck section opener data ─────────────────────────────────────────────

const DECK_SECTIONS = {
  'agentic-journey.md': [
    {
      partNumber: 1,
      title: 'Agentic Intake',
      subtitle: 'Automatic triage, duplicate detection, and routing',
      cards: [
        { icon: '🔍', title: 'Context Gathering', blurb: 'Issue analysis + related file detection' },
        { icon: '🔄', title: 'Duplicate Detection', blurb: 'Search 6 months history, 88% accuracy' },
        { icon: '🎯', title: 'Smart Routing', blurb: 'Classification, priority, team assignment' },
      ],
      terminal: { context: 'Every new issue triggers automated analysis', detail: '20-30 min → 3 min per issue' },
    },
    {
      partNumber: 2,
      title: 'Agentic Planning',
      subtitle: 'Historical context research & execution plan generation',
      cards: [
        { icon: '🔍', title: 'Historical Context', blurb: 'Understand related issues and patterns' },
        { icon: '📋', title: 'Execution Plan', blurb: 'Step-by-step implementation roadmap' },
        { icon: '✋', title: 'Human Approval', blurb: 'Review before implementation starts' },
      ],
      terminal: { context: 'Estimate accuracy with historical context', detail: '±20% estimate vs ±50% without' },
    },
    {
      partNumber: 3,
      title: 'Agentic Coding',
      subtitle: 'Implementation from approved plans',
      cards: [
        { icon: '✅', title: 'Plan-Driven', blurb: 'Follow the established execution plan' },
        { icon: '🔄', title: 'Auto-PR Creation', blurb: 'Autonomous PR with passing tests' },
        { icon: '💻', title: 'Copilot Agent', blurb: 'Background execution from approved plan' },
      ],
      terminal: { context: 'Connecting Phase 2 plan to GitHub Copilot agent', detail: '8-12 hours → 1-2 hours to PR' },
    },
    {
      partNumber: 4,
      title: 'Code Review Agent',
      subtitle: 'Security, logic, performance, and test coverage validation',
      cards: [
        { icon: '🔒', title: 'Security Scan', blurb: 'OWASP vulnerabilities, injection risks' },
        { icon: '⚡', title: 'Performance Check', blurb: 'N+1 queries, bottlenecks, optimization' },
        { icon: '🧪', title: 'Test Coverage', blurb: 'Coverage metrics and gap analysis' },
      ],
      terminal: { context: 'Code review accelerated by AI', detail: '2-4 hours → 20 min review time' },
    },
  ],

  'agentic-sdlc.md': [
    {
      partNumber: 1,
      title: 'AgentRC Maturity Model',
      subtitle: '5 levels from functional to autonomous',
      cards: [
        { icon: '📐', title: 'AgentRC Levels', blurb: '5 stages from functional to autonomous' },
        { icon: '⚡', title: 'The Breakpoint', blurb: 'Where Level 3 habits fail at Level 5 volume' },
        { icon: '🔄', title: 'New Operating Model', blurb: 'Evidence-based trust at machine velocity' },
      ],
      terminal: { context: 'Level 5 requires Level 5 infrastructure', detail: 'not just more agents' },
    },
    {
      partNumber: 2,
      title: 'Repository Topology',
      subtitle: 'Rewiring code boundaries for agent-native delivery',
      cards: [
        { icon: '🏗️', title: 'Monorepo Design', blurb: 'Atomic changes across the full stack' },
        { icon: '🎯', title: 'Module Boundaries', blurb: 'Build-time enforcement, zero drift' },
        { icon: '⚡', title: 'War Story', blurb: '6-hour feature drop to 45 minutes' },
      ],
      terminal: { context: 'Eliminate cross-repo coordination', detail: 'the hidden tax on agent throughput' },
    },
    {
      partNumber: 3,
      title: 'PR Workflows',
      subtitle: 'Scaling governance from line-by-line review to outcome validation',
      cards: [
        { icon: '📋', title: 'Intent-Based PRs', blurb: 'Evidence bundles, not implementation reviews' },
        { icon: '🔺', title: 'Governance Pyramid', blurb: 'Tiered automation by risk level' },
        { icon: '💰', title: 'Economic Shift', blurb: 'Scarcity moves from code to review bandwidth' },
      ],
      terminal: { context: '300 lines/day human review can\u2019t scale to 15,000 lines/day', detail: 'the model must change' },
    },
    {
      partNumber: 4,
      title: 'Trust Manufacturing',
      subtitle: 'Transforming CI from quality gate to trust evidence production',
      cards: [
        { icon: '⏱️', title: '10-Minute Rule', blurb: 'Fast CI = agent throughput × safety' },
        { icon: '🎯', title: 'Zero-Flake Tolerance', blurb: 'Flaky tests block 15 PRs/day at scale' },
        { icon: '🏭', title: 'Attestations', blurb: 'Automated trust signals at shipping velocity' },
      ],
      terminal: { context: 'CI becomes a trust factory', detail: 'production rate must match agent output rate' },
    },
  ],

  'agentic-workflows.md': [
    {
      partNumber: 1,
      title: 'The Opportunity',
      subtitle: 'Intent-driven automation with AI agents',
      cards: [
        { icon: '📝', title: 'Markdown Workflows', blurb: 'Natural language instructions, not YAML' },
        { icon: '🔐', title: 'Security-First', blurb: 'Read-only AI + validated write operations' },
        { icon: '🎯', title: 'Context-Aware', blurb: 'AI adapts decisions to repository state' },
      ],
      terminal: { context: 'From scripting "how" to declaring "what"', detail: 'AI navigates the path' },
    },
    {
      partNumber: 2,
      title: 'Core Architecture',
      subtitle: 'Markdown → Secure YAML compilation',
      cards: [
        { icon: '📝', title: 'Author in Markdown', blurb: 'Natural language workflow definitions' },
        { icon: '🔒', title: 'Compile to YAML', blurb: 'Secure lock files with isolation' },
        { icon: '⚡', title: 'Execute Safely', blurb: 'Read-only AI + validated handlers' },
      ],
      terminal: { context: 'Three-phase workflow execution', detail: 'authoring → compilation → execution' },
    },
    {
      partNumber: 3,
      title: 'Safe Outputs',
      subtitle: 'Security-first write operations',
      cards: [
        { icon: '🔒', title: 'Declared Operations', blurb: 'Pre-approved write operations' },
        { icon: '🛡️', title: 'Validation Pipeline', blurb: 'Sanitize, rate-limit, domain-check' },
        { icon: '📝', title: 'Audit Trail', blurb: 'Every action logged with markers' },
      ],
      terminal: { context: 'AI decides, validated handlers execute', detail: 'security through separation of concerns' },
    },
    {
      partNumber: 4,
      title: 'Agent Factory Patterns',
      subtitle: '100+ proven workflow patterns',
      cards: [
        { icon: '🏭', title: 'Peli\u2019s Factory', blurb: '100+ specialized workflows tested continuously' },
        { icon: '🎯', title: 'Specialization Wins', blurb: 'Many focused agents > one monolithic agent' },
        { icon: '🔄', title: 'Continuous Patterns', blurb: 'Daily improvements that compound over time' },
      ],
      terminal: { context: 'Repository-level AI automation is transformative', detail: 'embedded agents have outsized impact' },
    },
  ],

  'copilot-acp.md': [
    {
      partNumber: 1,
      title: 'The LSP Analogy',
      subtitle: 'Standardizing editor ↔ agent communication',
      cards: [
        { icon: '📐', title: 'N×M Problem', blurb: 'Every editor × every agent = fragmentation' },
        { icon: '⚡', title: 'N+M Solution', blurb: 'One protocol connects any editor to any agent' },
        { icon: '🔄', title: 'Proven Pattern', blurb: 'LSP did this for language servers, ACP for AI' },
      ],
      terminal: { context: 'Before: Each editor builds custom AI plugin', detail: 'After: Implement ACP client once, connect to any agent' },
    },
    {
      partNumber: 2,
      title: 'Protocol Architecture',
      subtitle: 'Four layers of standardization',
      cards: [
        { icon: '🔌', title: 'Transport', blurb: 'NDJSON over stdio/TCP' },
        { icon: '🔄', title: 'Protocol', blurb: 'JSON-RPC bidirectional' },
        { icon: '💬', title: 'Session', blurb: 'Stateful context management' },
      ],
      terminal: { context: 'Inspired by LSP\u2019s proven design', detail: 'Four layers decouple editors from agents' },
    },
    {
      partNumber: 3,
      title: 'Getting Started',
      subtitle: 'From zero to connected in 5 minutes',
      cards: [
        { icon: '🚀', title: 'Start ACP Server', blurb: 'One command launches Copilot as protocol server' },
        { icon: '🔌', title: 'Connect SDK', blurb: 'TypeScript, Python, Rust, or Kotlin client' },
        { icon: '💬', title: 'Send Prompt', blurb: 'Create session and stream responses' },
      ],
      terminal: { context: 'Prerequisites: Copilot subscription + CLI installed', detail: 'Node.js v22+ for TypeScript SDK examples' },
    },
    {
      partNumber: 4,
      title: 'Security & Use Cases',
      subtitle: 'Trust boundaries and real-world patterns',
      cards: [
        { icon: '🛡️', title: 'Permission Model', blurb: 'Every tool invocation requires approval' },
        { icon: '🎯', title: 'Editor Integration', blurb: 'Zed: 2 weeks vs 3+ months custom build' },
        { icon: '🔄', title: 'Polyrepo Workflows', blurb: 'Cross-repo context in one session' },
      ],
      terminal: { context: 'Agents never bypass permission layer', detail: 'Enterprise-ready trust without blind faith' },
    },
  ],

  'copilot-azure-mcp.md': [
    {
      partNumber: 1,
      title: 'Live Azure Context',
      subtitle: 'Conversational resource discovery and config extraction',
      cards: [
        { icon: '💬', title: 'Ask, Don\u2019t Browse', blurb: 'Query what exists without portal' },
        { icon: '📋', title: 'Extract Configs', blurb: 'Live resources become templates' },
        { icon: '🔍', title: 'Session Context', blurb: 'Previous queries stay in memory' },
      ],
      terminal: { context: 'No more portal tab-switching', detail: 'infrastructure state in conversation' },
    },
    {
      partNumber: 2,
      title: 'The Prototype Loop',
      subtitle: 'Plan Mode validation before deployment',
      cards: [
        { icon: '💭', title: 'Plan With AI', blurb: 'Clarifying questions before code' },
        { icon: '✅', title: 'Validate Against Live State', blurb: 'Catch mismatches pre-deployment' },
        { icon: '⚡', title: 'Generate Infrastructure Code', blurb: 'Production-validated Bicep output' },
      ],
      terminal: { context: 'Traditional: 4-6 deploy-fail-adjust cycles', detail: 'With Plan Mode: 1-2 cycles, validated first' },
    },
    {
      partNumber: 3,
      title: 'Configuration & Setup',
      subtitle: '10-minute installation and connection',
      cards: [
        { icon: '📦', title: 'Install MCP Server', blurb: 'VS Code, npm, or Docker' },
        { icon: '🔐', title: 'Authenticate', blurb: 'Uses existing az login credentials' },
        { icon: '🔌', title: 'Connect to CLI', blurb: 'Single JSON config file' },
      ],
      terminal: { context: '10 minutes from install to first query', detail: 'no new auth required — inherits Azure CLI session' },
    },
    {
      partNumber: 4,
      title: 'Guardrails & Trust Boundaries',
      subtitle: 'RBAC-scoped access and read-only mode',
      cards: [
        { icon: '🔐', title: 'RBAC Inheritance', blurb: 'No privilege elevation' },
        { icon: '👀', title: 'Read-Only Mode', blurb: 'Safe production exploration' },
        { icon: '🔒', title: 'Subscription Boundaries', blurb: 'Separate dev/prod access' },
      ],
      terminal: { context: 'Start with Reader role on production', detail: 'upgrade to Contributor only on dedicated dev subscriptions' },
    },
  ],

  'copilot-chat-internals.md': [
    {
      partNumber: 1,
      title: 'Agent Debug Panel',
      subtitle: 'Real-time event monitoring with chart visualization',
      cards: [
        { icon: '📊', title: 'Live Event Stream', blurb: 'Every chat event as it happens' },
        { icon: '🎨', title: 'Chart View', blurb: 'Visualize flow, timing, chains' },
        { icon: '✅', title: 'Customization Audit', blurb: 'Verify config file load status' },
      ],
      terminal: { context: 'VS Code 1.110 flagship debugging feature', detail: 'your live dashboard for AI interactions' },
    },
    {
      partNumber: 2,
      title: 'Request Inspection',
      subtitle: 'See what\'s sent, understand model reasoning, manage context',
      cards: [
        { icon: '🔍', title: 'Chat Debug View', blurb: 'Complete request/response breakdown' },
        { icon: '🧠', title: 'Thinking Tokens', blurb: 'Model reasoning visibility' },
        { icon: '📊', title: 'Context Control', blurb: '/compact, /fork, window indicator' },
      ],
      terminal: { context: 'From "why did it do that?" to "I see why it did that"', detail: 'evidence-based prompt refinement' },
    },
    {
      partNumber: 3,
      title: 'Config & Infrastructure',
      subtitle: 'Validate customizations, debug tools, troubleshoot infrastructure',
      cards: [
        { icon: '⚙️', title: 'Diagnostics View', blurb: 'Config validation & load status' },
        { icon: '📜', title: 'Extension Logs', blurb: 'Network, auth, lifecycle events' },
        { icon: '🔌', title: 'MCP Servers', blurb: 'External tool management' },
      ],
      terminal: { context: 'From silent failures to clear root causes', detail: 'infrastructure-level troubleshooting' },
    },
    {
      partNumber: 4,
      title: 'Troubleshooting Patterns',
      subtitle: 'Systematic workflows for common AI debugging scenarios',
      cards: [
        { icon: '📋', title: 'Proven Workflows', blurb: 'Step-by-step diagnostic patterns' },
        { icon: '⚡', title: 'Fast Root Cause', blurb: 'Minutes, not hours' },
        { icon: '🎯', title: 'Evidence-Based', blurb: 'No more guesswork' },
      ],
      terminal: { context: 'From reactive firefighting to systematic debugging', detail: 'repeatable investigation processes' },
    },
  ],

  'copilot-cli.md': [
    {
      partNumber: 1,
      title: 'Plan Mode & Steering',
      subtitle: 'Collaborative planning before implementation',
      cards: [
        { icon: '🎯', title: 'Fundamental Shift', blurb: 'Plan first, implement second' },
        { icon: '❓', title: 'ask_user Tool', blurb: 'Agent seeks input when uncertain' },
        { icon: '📊', title: 'Real Impact', blurb: 'Significantly fewer debugging iterations' },
      ],
      terminal: { context: '8 debugging attempts → 2 with Plan Mode', detail: '45 min debugging session → 8 min' },
    },
    {
      partNumber: 2,
      title: 'Operating Modes',
      subtitle: 'Interactive, programmatic, and cloud delegation',
      cards: [
        { icon: '💬', title: 'Interactive', blurb: 'Real-time chat with agent steering' },
        { icon: '🤖', title: 'Programmatic', blurb: 'Integrate into scripts and automation' },
        { icon: '☁️', title: 'Cloud Delegation', blurb: 'GitHub-hosted background execution' },
      ],
      terminal: { context: 'IDE and terminal stay completely free', detail: 'agents run where you want them' },
    },
    {
      partNumber: 3,
      title: 'Built-in Agents',
      subtitle: 'Specialized agents and /fleet fan-out',
      cards: [
        { icon: '🔍', title: 'Explore', blurb: 'Fast read-only codebase research' },
        { icon: '⚙️', title: 'Task', blurb: 'General purpose implementation agent' },
        { icon: '📋', title: 'Plan', blurb: 'Strategic planning and estimation' },
      ],
      terminal: { context: 'Orchestrator assigns work to subagents', detail: '/fleet coordinates explicit parallel execution' },
    },
    {
      partNumber: 4,
      title: 'Use Cases & Reference',
      subtitle: 'Real-world patterns and complete CLI reference',
      cards: [
        { icon: '🌱', title: 'Greenfield', blurb: 'Project scaffolding (90 → 15 min)' },
        { icon: '🐛', title: 'Debugging', blurb: 'Root cause analysis (45 → 8 min)' },
        { icon: '🐙', title: 'GitHub.com', blurb: 'Web interface for CLI agents' },
      ],
      terminal: { context: 'Time shifts from writing code', detail: 'to planning and reviewing' },
    },
  ],

  'copilot-code-review.md': [
    {
      partNumber: 1,
      title: 'Setup & Configuration',
      subtitle: 'From enablement to first review in 15 minutes',
      cards: [
        { icon: '⚙️', title: 'Rulesets UI', blurb: 'Visual configuration dashboard' },
        { icon: '📝', title: 'Custom Instructions', blurb: 'Team-specific patterns and standards' },
        { icon: '🎯', title: 'Language-Specific', blurb: 'TypeScript, Python, Go support' },
      ],
      terminal: { context: 'No YAML config files, no complex setup', detail: 'UI-driven configuration in 15 minutes' },
    },
    {
      partNumber: 2,
      title: 'Understanding Review Feedback',
      subtitle: 'Six capability categories with examples',
      cards: [
        { icon: '🔒', title: 'Security', blurb: 'Vulnerability detection and injection risks' },
        { icon: '✨', title: 'Quality', blurb: 'Code standards and patterns' },
        { icon: '⚡', title: 'Performance', blurb: 'Optimization opportunities' },
      ],
      terminal: { context: 'Hybrid analysis: Fast static layer → AST → LLM contextual', detail: 'multi-layered review approach' },
    },
    {
      partNumber: 3,
      title: 'Measuring ROI',
      subtitle: 'Calculator + optional automation',
      cards: [
        { icon: '📊', title: 'Time-Savings', blurb: 'PR review cycle acceleration' },
        { icon: '🔐', title: 'Quality', blurb: '90%+ security improvement metrics' },
        { icon: '💰', title: 'Calculator', blurb: 'ROI dashboard for leadership' },
      ],
      terminal: { context: '40-60% cycle time reduction', detail: '90%+ security improvement' },
    },
    {
      partNumber: 4,
      title: 'Enterprise Compliance',
      subtitle: 'HIPAA, PCI-DSS, SOC2 guidance patterns',
      cards: [
        { icon: '🏥', title: 'HIPAA', blurb: 'Healthcare compliance patterns' },
        { icon: '💳', title: 'PCI-DSS', blurb: 'Payment card compliance' },
        { icon: '🛡️', title: 'SOC2', blurb: 'Security control compliance' },
      ],
      terminal: { context: 'Custom instruction files for regulatory standards', detail: 'automation + human judgment for compliance' },
    },
  ],

  'copilot-hooks.md': [
    {
      partNumber: 1,
      title: 'Lifecycle Control',
      subtitle: '8 hook events for governance',
      cards: [
        { icon: '🔄', title: '8 Events', blurb: 'SessionStart to Stop — complete lifecycle coverage' },
        { icon: '🛡️', title: 'Preventive Control', blurb: 'Gate dangerous operations before execution' },
        { icon: '📋', title: 'Observability', blurb: 'Complete lifecycle logging and audit' },
      ],
      terminal: { context: 'Governance without velocity loss', detail: '8 hooks cover the complete agent lifecycle' },
    },
    {
      partNumber: 2,
      title: 'Preventive Enforcement',
      subtitle: 'PreToolUse is the only hook that can deny operations',
      cards: [
        { icon: '🛡️', title: 'Block Before Execution', blurb: 'Deny dangerous operations outright' },
        { icon: '✏️', title: 'Modify Inputs', blurb: 'Sanitize or transform parameters' },
        { icon: '🤝', title: 'Require Approval', blurb: 'Gate on human authorization' },
      ],
      terminal: { context: 'Other hooks observe — PreToolUse controls', detail: 'single control point for gating' },
    },
    {
      partNumber: 3,
      title: 'Observability & Audit',
      subtitle: 'Complete lifecycle logging for compliance and debugging',
      cards: [
        { icon: '📋', title: 'JSON Lines', blurb: 'Structured event logging format' },
        { icon: '🔍', title: 'Complete Trails', blurb: 'Full audit path with context' },
        { icon: '📊', title: 'SQL-Like Queries', blurb: 'Searchable event database' },
      ],
      terminal: { context: '2-3 hours per audit request', detail: '→ 5 minutes with structured logs' },
    },
    {
      partNumber: 4,
      title: 'Real-World Patterns',
      subtitle: 'Proven implementations for security, compliance, and quality',
      cards: [
        { icon: '🏥', title: 'HIPAA', blurb: 'Healthcare compliance automation' },
        { icon: '🛡️', title: 'SOC2', blurb: 'Security compliance enforcement' },
        { icon: '✅', title: 'Quality Gates', blurb: 'Automated standards enforcement' },
      ],
      terminal: { context: 'Governance that scales', detail: 'across teams and regulatory frameworks' },
    },
  ],

  'copilot-memory.md': [
    {
      partNumber: 1,
      title: 'How Memory Works',
      subtitle: 'Agent-accessible memory tool and storage lifecycle',
      cards: [
        { icon: '💾', title: 'Store Operation', blurb: 'Agent writes memory to persistent store' },
        { icon: '🔍', title: 'Retrieve Operation', blurb: 'Agents access prior context automatically' },
        { icon: '🔄', title: 'Cross-Environment', blurb: 'Memory spans IDE, CLI, and web' },
      ],
      terminal: { context: 'Agent writes, reads, and manages files', detail: 'across sessions automatically' },
    },
    {
      partNumber: 2,
      title: 'Enabling & Managing',
      subtitle: 'Configuration, visibility, and control over stored memories',
      cards: [
        { icon: '⚙️', title: 'Single Setting', blurb: 'One config line enables the memory tool' },
        { icon: '👀', title: 'Full Transparency', blurb: 'View all stored memory files' },
        { icon: '⏱️', title: '28-Day Expiration', blurb: 'Automatic cleanup policy' },
      ],
      terminal: { context: 'One config line enables memory tool', detail: 'default 28-day retention' },
    },
    {
      partNumber: 3,
      title: 'What to Store',
      subtitle: 'Persistence criteria and best practices',
      cards: [
        { icon: '💾', title: 'Ideal Candidates', blurb: 'Preferences, patterns, project context' },
        { icon: '🚫', title: 'What NOT to Store', blurb: 'Secrets, PII, or temporary state' },
        { icon: '✅', title: 'Persistence Test', blurb: 'Is it useful weeks from now?' },
      ],
      terminal: { context: 'What persists vs. what stays in conversation context', detail: 'strategic memory architecture' },
    },
    {
      partNumber: 4,
      title: 'Privacy & Best Practices',
      subtitle: 'Security model and effective usage',
      cards: [
        { icon: '🔐', title: 'Privacy-First', blurb: 'No sensitive data in memory' },
        { icon: '🧹', title: 'Memory Hygiene', blurb: 'Curate actively, review regularly' },
        { icon: '📈', title: 'Progressive Profiles', blurb: 'Build understanding over time' },
      ],
      terminal: { context: 'No sensitive data, curate actively', detail: 'review regularly' },
    },
  ],

  'copilot-primitives.md': [
    {
      partNumber: 1,
      title: 'Instructions',
      subtitle: 'The foundation — always-on context',
      cards: [
        { icon: '📖', title: 'Always Active', blurb: 'Injected into every request automatically' },
        { icon: '🎯', title: 'Three Selectors', blurb: 'Repo-wide, path-specific, directory-local' },
        { icon: '⚡', title: '5-Minute Setup', blurb: 'Immediate project-aware responses' },
      ],
      terminal: { context: 'One file = team-aware Copilot', detail: 'encode conventions once, apply everywhere' },
    },
    {
      partNumber: 2,
      title: 'Skills',
      subtitle: 'On-demand expertise packs',
      cards: [
        { icon: '📦', title: 'Progressive Loading', blurb: '3 levels: discovery → instructions → resources' },
        { icon: '🎯', title: 'AI-Activated', blurb: 'Loaded when task matches skill description' },
        { icon: '🔁', title: 'Cross-Tool Portable', blurb: 'VS Code + CLI + coding agent' },
      ],
      terminal: { context: 'Unlike always-on instructions', detail: 'skills load only when relevant' },
    },
    {
      partNumber: 3,
      title: 'Custom Prompts',
      subtitle: 'Reusable workflow templates',
      cards: [
        { icon: '⌨️', title: 'User-Invoked', blurb: 'Triggered via /command in chat' },
        { icon: '📋', title: 'Variable Interpolation', blurb: '{{componentName}}, ${selection}, ${file}' },
        { icon: '🔄', title: 'Reuses Instructions', blurb: 'No duplication of conventions' },
      ],
      terminal: { context: 'Turn frequent tasks into /commands', detail: 'standardize workflows across the team' },
    },
    {
      partNumber: 4,
      title: 'Custom Agents',
      subtitle: 'Specialized AI personas with constrained tools',
      cards: [
        { icon: '🔒', title: 'Tool Constraints', blurb: 'Exactly which tools are available — and which aren\u2019t' },
        { icon: '🤝', title: 'Guided Handoffs', blurb: 'Plan → Implement → Review with context preserved' },
        { icon: '🎭', title: 'Session Persona', blurb: 'Instructions, model, and temperature per role' },
      ],
      terminal: { context: 'Different tasks need different capabilities', detail: 'constrain tools to prevent accidental edits' },
    },
  ],

  'copilot-sdk.md': [
    {
      partNumber: 1,
      title: 'Architecture & Capabilities',
      subtitle: 'How SDK wraps the Copilot CLI agent runtime',
      cards: [
        { icon: '🔌', title: 'JSON-RPC Interface', blurb: 'SDK spawns CLI in server mode via stdio' },
        { icon: '🌐', title: 'Multi-Language SDKs', blurb: 'Python, TypeScript, Go, .NET' },
        { icon: '⚡', title: 'Production Features', blurb: 'Streaming, memory, MCP, BYOK, permissions' },
      ],
      terminal: { context: 'CLI is the agent runtime', detail: 'SDK is how you control it programmatically' },
    },
    {
      partNumber: 2,
      title: 'Getting Started',
      subtitle: 'Install, configure, and make your first SDK call',
      cards: [
        { icon: '📦', title: 'Installation', blurb: 'pip install in 15 minutes' },
        { icon: '⚙️', title: 'CLI Tool Pattern', blurb: 'Release notes generator example' },
        { icon: '🎯', title: 'Streamable Results', blurb: 'Real-time output handling' },
      ],
      terminal: { context: 'Install SDK in 15 minutes, embed agents', detail: 'no months-long platform build' },
    },
    {
      partNumber: 3,
      title: 'Advanced Patterns',
      subtitle: 'Web APIs and scheduled automation',
      cards: [
        { icon: '🌐', title: 'Web APIs', blurb: 'REST endpoints exposing SDK capabilities' },
        { icon: '⏰', title: 'Scheduled Tasks', blurb: 'Automated analysis on cron schedules' },
        { icon: '🔗', title: 'Integration', blurb: 'Jira, Slack, CI/CD webhooks' },
      ],
      terminal: { context: 'From simple scripts to production services', detail: 'embed agents in any application' },
    },
    {
      partNumber: 4,
      title: 'Real-World Use Cases',
      subtitle: 'Production deployments with measurable outcomes',
      cards: [
        { icon: '📝', title: 'Release Notes', blurb: '2 hours → 10 minutes (92% reduction)' },
        { icon: '🧪', title: 'Test Analysis', blurb: '45 min → 5 min per failure' },
        { icon: '🚨', title: 'Incident Response', blurb: '40% faster MTTR' },
      ],
      terminal: { context: 'From manual analysis to automated intelligence', detail: 'real time savings at production scale' },
    },
  ],

  'copilot-web.md': [
    {
      partNumber: 1,
      title: 'The Delegation Loop',
      subtitle: 'From Issue Assignment to Draft PR',
      cards: [
        { icon: '🔄', title: 'Three Triggers', blurb: 'Browser, VS Code, or mobile — same async session' },
        { icon: '🔬', title: 'Sandboxed Execution', blurb: 'Ephemeral Ubuntu runner, destroyed after use' },
        { icon: '⚖️', title: 'Separation of Duties', blurb: 'Assigner cannot approve — enforced by GitHub' },
      ],
      terminal: { context: 'Developer involvement begins at code review', detail: 'closed loop from issue to reviewable PR' },
    },
    {
      partNumber: 2,
      title: 'Writing Issues That Work',
      subtitle: 'Specs That Produce Quality PRs',
      cards: [
        { icon: '✍️', title: 'Issue Anatomy', blurb: 'Criteria, scope, context, constraints' },
        { icon: '📸', title: 'Image-Based Creation', blurb: 'Screenshot → structured issue in 2 minutes' },
        { icon: '⚡', title: '85% Time Savings', blurb: '14 min → 2 min per issue filed' },
      ],
      terminal: { context: 'The quality of the agent\u2019s PR is a direct reflection', detail: 'of the quality of the issue' },
    },
    {
      partNumber: 3,
      title: 'Trust & Configuration',
      subtitle: 'Environment Setup and the Agent Firewall',
      cards: [
        { icon: '📄', title: 'Setup Steps', blurb: 'copilot-setup-steps.yml controls the environment' },
        { icon: '🛡️', title: 'Agent Firewall', blurb: 'Default allowlist + custom rules' },
        { icon: '🏢', title: 'Config Levels', blurb: 'Org and repo-level controls' },
      ],
      terminal: { context: 'Setup before enforcement — get the environment right first', detail: 'firewall activates after setup steps complete' },
    },
    {
      partNumber: 4,
      title: 'The Review Workflow',
      subtitle: 'From Draft PR to Merge',
      cards: [
        { icon: '📋', title: 'Evidence-First', blurb: 'Read bundle before touching the diff' },
        { icon: '📱', title: 'Mobile Review', blurb: '4 hr → 30 min turnaround' },
        { icon: '🧠', title: 'What to Delegate', blurb: 'Design judgment stays human' },
      ],
      terminal: { context: 'The coding agent opens a draft PR — never merges', detail: 'review is where teams maintain quality and build trust' },
    },
  ],

  'enterprise-patterns.md': [
    {
      partNumber: 1,
      title: 'Organization-Wide Standards',
      subtitle: 'Custom instructions at scale',
      cards: [
        { icon: '🏢', title: 'Org Instructions', blurb: 'Define once, apply everywhere' },
        { icon: '🔁', title: '16× ROI', blurb: 'Knowledge multiplication across teams' },
        { icon: '⚡', title: 'Instant Updates', blurb: 'One change propagates to all repos' },
      ],
      terminal: { context: 'Senior architect knowledge reaches 500 developers', detail: 'instantly — baseline consistency without per-repo config' },
    },
    {
      partNumber: 2,
      title: 'Skills & Knowledge Bases',
      subtitle: 'Institutional knowledge that scales',
      cards: [
        { icon: '🧠', title: 'Org Skills (GA)', blurb: 'Encode domain expertise once' },
        { icon: '📚', title: 'Knowledge Bases', blurb: 'Multi-repo context (Enterprise)' },
        { icon: '🔄', title: 'Central Updates', blurb: 'Change once, propagate everywhere' },
      ],
      terminal: { context: 'From documentation (often outdated) to executable systems', detail: 'senior architect knowledge reaches 500 developers instantly' },
    },
    {
      partNumber: 3,
      title: 'Governance & Licensing',
      subtitle: 'Control, compliance, and cost optimization',
      cards: [
        { icon: '🔐', title: 'Model Governance', blurb: 'Control which AI models teams access' },
        { icon: '💰', title: 'Flexible Licensing', blurb: '30-40% cost reduction via smart deployment' },
        { icon: '✅', title: 'Compliance Auto', blurb: 'Encode regulatory requirements' },
      ],
      terminal: { context: 'Balance AI capability with enterprise requirements', detail: 'cost optimization + risk reduction + audit readiness' },
    },
    {
      partNumber: 4,
      title: 'Scaling & Measurement',
      subtitle: 'Adoption, ROI, and federated governance',
      cards: [
        { icon: '📊', title: 'Metrics Framework', blurb: 'Leading, intermediate, lagging indicators' },
        { icon: '🎓', title: 'Self-Service Kit', blurb: '30-minute quick start' },
        { icon: '💰', title: 'ROI Reporting', blurb: 'Data-driven CFO narrative' },
      ],
      terminal: { context: 'Enable 50+ teams simultaneously', detail: 'self-service onboarding + quantifiable metrics = scalable adoption' },
    },
  ],

  'mcp-apps.md': [
    {
      partNumber: 1,
      title: 'Component Types',
      subtitle: 'Five built-in components for most visualization needs',
      cards: [
        { icon: '📊', title: 'Charts & Tables', blurb: 'Interactive data visualization with hover, zoom, sort, filter' },
        { icon: '📝', title: 'Forms & Trees', blurb: 'Structured input and hierarchical navigation' },
        { icon: '🎨', title: 'Cards & Custom', blurb: 'Rich visual blocks and specialized components' },
      ],
      terminal: { context: 'MCP tools return component specs', detail: 'VS Code renders them inline in chat' },
    },
    {
      partNumber: 2,
      title: 'Building MCP Apps',
      subtitle: 'Complete MCP server implementation returning components',
      cards: [
        { icon: '🏗️', title: 'Server Structure', blurb: 'MCP SDK, tools list, component response' },
        { icon: '🔄', title: 'Callback Handling', blurb: 'Forms and trees trigger tool calls on interaction' },
        { icon: '⚙️', title: 'Configuration', blurb: 'Add to .vscode/mcp.json and test in chat' },
      ],
      terminal: { context: 'Return type: "component" in content array', detail: 'VS Code detects and renders accordingly' },
    },
    {
      partNumber: 3,
      title: 'Real-World Patterns',
      subtitle: 'Practical use cases demonstrating MCP Apps value',
      cards: [
        { icon: '📊', title: 'Multi-Component Dashboards', blurb: 'Single query returns comprehensive view' },
        { icon: '🔍', title: 'Progressive Drill-Down', blurb: 'Chart callbacks show detailed tables' },
        { icon: '📝', title: 'Form-Driven Workflows', blurb: 'Multi-step guided processes' },
      ],
      terminal: { context: 'Summary → Details without new prompts', detail: 'preserves context, faster iteration' },
    },
    {
      partNumber: 4,
      title: 'Real-World Impact',
      subtitle: 'Three proven use cases with measurable time savings',
      cards: [
        { icon: '📊', title: 'Metrics Dashboards', blurb: '15-20 min → 90 sec (8× more frequent analysis)' },
        { icon: '🔍', title: 'Database Queries', blurb: '10 min → 2 min per query (240 min/day saved)' },
        { icon: '🏗️', title: 'Scaffolding Forms', blurb: '20 min Slack thread → 3 min form (100% accuracy)' },
      ],
      terminal: { context: 'Eliminate export/import cycles', detail: 'explore data inline in chat' },
    },
  ],

  'vscode-latest.md': [
    {
      partNumber: 1,
      title: 'Agent Sessions & Orchestration',
      subtitle: 'From single-chat to multi-agent workflows',
      cards: [
        { icon: '🔄', title: '4 Agent Types', blurb: 'Local, Background, Cloud, Claude' },
        { icon: '🌳', title: 'Worktree Isolation', blurb: 'Background agents in dedicated Git worktrees' },
        { icon: '🤝', title: 'Subagents', blurb: 'Parallel delegation with Explore agent' },
      ],
      terminal: { context: 'Plan locally → implement in background → merge selectively', detail: 'multi-session workflow pattern' },
    },
    {
      partNumber: 2,
      title: 'Agent Customization',
      subtitle: 'Skills, Plugins, and org-level control',
      cards: [
        { icon: '🧩', title: 'Agent Skills GA', blurb: 'From experimental to enabled by default' },
        { icon: '📦', title: 'Agent Plugins', blurb: 'Prepackaged bundles from Extensions view' },
        { icon: '🏢', title: 'Org-Level Control', blurb: 'Enforce consistency across teams' },
      ],
      terminal: { context: 'Package domain expertise once', detail: 'agents apply it automatically' },
    },
    {
      partNumber: 3,
      title: 'Claude & Anthropic Integration',
      subtitle: 'Thinking tokens and visible reasoning',
      cards: [
        { icon: '🧠', title: 'Claude Agent SDK', blurb: 'Anthropic harness in VS Code' },
        { icon: '💭', title: 'Thinking Tokens', blurb: 'Visible hypothesis formation' },
        { icon: '🔧', title: 'Tool Search Tool', blurb: 'Discover relevant tools from large pools' },
      ],
      terminal: { context: 'See how Claude reasons through complex problems', detail: 'visible thinking tokens show hypothesis formation' },
    },
    {
      partNumber: 4,
      title: 'Security & UX',
      subtitle: 'Sandboxed autonomy and agentic browser tools',
      cards: [
        { icon: '🔒', title: 'Terminal Sandboxing', blurb: 'OS-level restriction on agent commands' },
        { icon: '⚡', title: 'YOLO Mode', blurb: '/yolo to toggle auto-approve globally' },
        { icon: '🌐', title: 'Agentic Browser', blurb: 'Agents interact with web apps autonomously' },
      ],
      terminal: { context: 'Auto-approve safe commands while sandboxing blocks system access', detail: 'sandboxed autonomy pattern' },
    },
  ],
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function buildComponent(part) {
  const e = esc
  const cards = part.cards
    .map(c => `    { icon: "${e(c.icon)}", title: "${e(c.title)}", blurb: "${e(c.blurb)}" },`)
    .join('\n')
  return (
    `<SectionOpenerSlide\n` +
    `  :partNumber="${part.partNumber}"\n` +
    `  title="${e(part.title)}"\n` +
    `  subtitle="${e(part.subtitle)}"\n` +
    `  :cards='[\n${cards}\n  ]'\n` +
    `  :terminal='{ context: "${e(part.terminal.context)}", detail: "${e(part.terminal.detail)}" }'\n` +
    `/>`
  )
}

function addImport(content) {
  if (content.includes("import SectionOpenerSlide from './components/SectionOpenerSlide.vue'")) {
    return content
  }
  // Insert after WhatYouCanDoTodaySlide import (or after TocSlide import as fallback)
  if (content.includes("import WhatYouCanDoTodaySlide from './components/WhatYouCanDoTodaySlide.vue'")) {
    return content.replace(
      "import WhatYouCanDoTodaySlide from './components/WhatYouCanDoTodaySlide.vue'",
      "import WhatYouCanDoTodaySlide from './components/WhatYouCanDoTodaySlide.vue'\nimport SectionOpenerSlide from './components/SectionOpenerSlide.vue'"
    )
  }
  return content.replace(
    "import TocSlide from './components/TocSlide.vue'",
    "import TocSlide from './components/TocSlide.vue'\nimport SectionOpenerSlide from './components/SectionOpenerSlide.vue'"
  )
}

// Match: SLIDE comment for Part N, blank line, raw HTML div block up to (not including) next ---
// The section opener is always a centered full-height div.
function buildPartRegex(partNumber) {
  return new RegExp(
    `(<!-- SLIDE: Part ${partNumber}[^\\n]*-->)\\n\\n<div[\\s\\S]*?(?=\\n---)`,
    ''
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────

let passed = 0
let failed = 0
let skipped = 0

for (const [filename, parts] of Object.entries(DECK_SECTIONS)) {
  const filepath = join(DECKS_DIR, filename)
  let content

  try {
    content = readFileSync(filepath, 'utf8')
  } catch (e) {
    console.error(`❌ Could not read ${filename}: ${e.message}`)
    failed++
    continue
  }

  // Skip if already converted
  if (content.includes('<SectionOpenerSlide')) {
    console.log(`⏭️  ${filename} (already converted)`)
    skipped++
    continue
  }

  let updated = content
  let replacements = 0

  for (const part of parts) {
    const re = buildPartRegex(part.partNumber)
    if (!re.test(updated)) {
      console.warn(`  ⚠️  Part ${part.partNumber} pattern not found in ${filename}`)
      continue
    }
    const component = buildComponent(part)
    updated = updated.replace(re, `$1\n\n${component}`)
    replacements++
  }

  if (replacements === 0) {
    console.error(`❌ ${filename}: no replacements made`)
    failed++
    continue
  }

  updated = addImport(updated)
  writeFileSync(filepath, updated, 'utf8')
  console.log(`✅ ${filename} (${replacements} parts replaced)`)
  passed++
}

console.log(`\nDone: ${passed} updated, ${skipped} skipped (already done), ${failed} failed.`)
