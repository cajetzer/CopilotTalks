#!/usr/bin/env node
/**
 * update-references-slides.mjs
 *
 * Replaces the inline HTML References slide in each active tech-talk deck
 * with a <ReferencesSlide> component call, and adds the import to the
 * script setup block if not already present.
 *
 * Usage: node slides/scripts/update-references-slides.mjs [slug]
 *   (omit slug to update all decks)
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TECH_TALKS_DIR = resolve(__dirname, "..", "tech-talks");

// ─── Structured reference data (extracted from each deck) ────────────────────
const DECKS = [
  {
    slug: "agent-teams",
    groups: [
      {
        title: "Core Mechanism",
        color: "cyan",
        items: [
          { href: "https://code.visualstudio.com/docs/copilot/agents/subagents", label: "VS Code Subagents", description: "Context isolation, parallel execution" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom Agents in VS Code", description: "YAML frontmatter, tools, models" },
          { href: "https://code.visualstudio.com/updates/v1_109#_agent-orchestration", label: "VS Code 1.109 Agent Orchestration", description: "Invocation controls, parallel support" },
          { href: "https://code.visualstudio.com/docs/copilot/agents/background-agents", label: "Background Agents", description: "Hand-off workflow, worktree integration" },
          { href: "https://git-scm.com/docs/git-worktree", label: "Git Worktrees", description: "Technical reference, lifecycle" },
          { href: "https://code.visualstudio.com/updates/v1_109#_agent-session-management", label: "VS Code 1.109 Session Management", description: "Session picker, multi-agent monitoring" },
        ],
      },
      {
        title: "Production Implementations",
        color: "purple",
        items: [
          { href: "https://github.com/bradygaster/squad", label: "Squad Repository", description: "Persistent memory, parallel execution, GitHub Issues" },
          { href: "https://github.com/bradygaster/squad/blob/main/docs/guide.md", label: "Squad Product Guide", description: "Comprehensive usage guide" },
          { href: "https://github.com/bradygaster/squad/blob/main/docs/features/ralph.md", label: "Ralph Work Monitor", description: "Autonomous backlog processing" },
          { href: "https://github.com/Sentry01/AgentCouncil", label: "AgentCouncil Repository", description: "Multi-model deliberation for Copilot CLI" },
          { label: "Agentic SDLC", description: "Repo/CI/CD patterns for agent volume at scale" },
          { label: "Agentic Workflows", description: "GitHub-native automation patterns" },
          { label: "Custom Agents Workshop", description: "Hands-on creation and testing" },
          { label: "Copilot Primitives", description: "Instructions, prompts, skills, agents" },
        ],
      },
    ],
  },
  {
    slug: "agentic-journey",
    groups: [
      {
        title: "📖 Official Documentation",
        color: "cyan",
        items: [
          { href: "https://docs.github.com/en/copilot", label: "GitHub Copilot Documentation", description: "Core concepts, getting started guide, and overview" },
          { href: "https://docs.github.com/en/copilot/concepts/coding-agent/coding-agent", label: "Copilot Coding Agent for PRs", description: "Agent-assisted PR workflows and review" },
          { href: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line", label: "Using Copilot in the Command Line", description: "CLI installation and programmatic mode" },
          { href: "https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions", label: "GitHub Actions Workflow Syntax", description: "Triggers, jobs, steps, and permissions" },
        ],
      },
      {
        title: "🎓 Related Content",
        color: "purple",
        items: [
          { label: "Agentic SDLC", description: "Full Gen-4 transformation: repository topology, PR workflows, CI trust factory" },
          { label: "Agent Teams", description: "Specialized agent patterns for complex multi-agent coordination" },
          { label: "Copilot Hooks", description: "Governance and control mechanisms for agent behavior" },
          { label: "Enterprise Patterns", description: "Organization-wide adoption patterns and rollout strategies" },
        ],
      },
    ],
  },
  {
    slug: "agentic-sdlc",
    groups: [
      {
        title: "🤖 AgentRC & GitHub",
        color: "cyan",
        items: [
          { href: "https://github.com/MSBart2/agentrc", label: "AgentRC Framework", description: "Repository AI-readiness maturity model and workflow automation" },
          { href: "https://github.com/MSBart2/agentrc/blob/feat/workflow-automation-pillar/docs/maturity-models.md", label: "AgentRC Maturity Model Docs", description: "L1–L5 level definitions, checks, and progression criteria" },
          { href: "https://docs.github.com/en/actions", label: "GitHub Actions Documentation", description: "CI/CD workflow automation, parallelization, and caching strategies" },
          { href: "https://docs.github.com/en/copilot", label: "GitHub Copilot Documentation", description: "Agent mode, custom instructions, MCP integration" },
        ],
      },
      {
        title: "🛠️ Tools & Standards",
        color: "purple",
        items: [
          { href: "https://nx.dev", label: "Nx Monorepo Tools", description: "Build orchestration, module boundaries, affected analysis, caching" },
          { href: "https://slsa.dev", label: "SLSA Framework", description: "Supply chain security levels and software attestation standards" },
          { href: "https://bazel.build/basics/hermeticity", label: "Hermetic Builds (Bazel)", description: "Deterministic build principles for reproducible trust signals" },
          { label: "Related Tech Talks", description: "Agentic Journey · Agent Teams · Enterprise Patterns · Agentic Workflows" },
        ],
      },
    ],
  },
  {
    slug: "agentic-workflows",
    groups: [
      {
        title: "Official Documentation",
        color: "cyan",
        items: [
          { label: "Introduction & Overview", description: "github.github.com/gh-aw/introduction/overview/" },
          { label: "Security Architecture", description: "github.github.com/gh-aw/introduction/architecture/" },
          { label: "Safe Outputs Reference", description: "github.github.io/gh-aw/reference/safe-outputs/" },
          { label: "Quick Start Guide", description: "github.github.com/gh-aw/setup/quick-start/" },
        ],
      },
      {
        title: "Key Resources",
        color: "purple",
        items: [
          { label: "Peli's Agent Factory Blog", description: "github.github.com/gh-aw/blog/2026-01-12-..." },
          { label: "Meet the Workflows", description: "github.github.com/gh-aw/blog/2026-01-13-..." },
          { label: "GitHub Blog Announcement", description: "github.blog/ai-and-ml/automate-repository-tasks..." },
          { label: "Community Examples", description: "josh-ops.com/posts/github-agentic-workflows/" },
        ],
      },
    ],
  },
  {
    slug: "copilot-acp",
    groups: [
      {
        title: "🤖 Official Docs & Protocol",
        color: "cyan",
        items: [
          { href: "https://agentclientprotocol.com", label: "Agent Client Protocol (ACP)", description: "Official spec, architecture overview, and quick start" },
          { href: "https://docs.github.com/en/copilot/reference/acp-server", label: "Copilot CLI ACP Server Reference", description: "Server modes, integration examples, TypeScript client" },
          { href: "https://github.com/agentclientprotocol/agent-client-protocol", label: "ACP GitHub Repository", description: "Open source protocol spec and community libraries" },
          { href: "https://zed.dev/acp", label: "Zed ACP Integration", description: "How Zed implemented ACP client support" },
        ],
      },
      {
        title: "🛠️ SDKs & Implementation",
        color: "purple",
        items: [
          { href: "https://www.npmjs.com/package/@agentclientprotocol/sdk", label: "TypeScript SDK (npm)", description: "Reference implementation with full type safety" },
          { href: "https://pypi.org/project/agent-client-protocol/", label: "Python SDK (PyPI)", description: "Python client and agent implementation" },
          { href: "https://crates.io/crates/agent-client-protocol", label: "Rust SDK (crates.io)", description: "Rust library for building ACP clients and agents" },
          { label: "Related Tech Talks", description: "Copilot CLI · MCP Apps · Agent Teams · Customization" },
        ],
      },
    ],
  },
  {
    slug: "copilot-azure-mcp",
    groups: [
      {
        title: "Official Documentation",
        color: "cyan",
        items: [
          { href: "https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/get-started", label: "Get started with Azure MCP Server", description: "Installation, authentication, and first queries" },
          { href: "https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/", label: "Azure MCP Server Documentation", description: "Service coverage, API reference, configuration options" },
          { href: "https://github.com/Azure/azure-mcp", label: "Azure MCP Server GitHub Repository", description: "Source code, examples, community contributions" },
          { href: "https://spec.modelcontextprotocol.io/", label: "Model Context Protocol Specification", description: "MCP standard, tool discovery, client-server architecture" },
          { href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-best-practices", label: "Best practices for GitHub Copilot CLI", description: "Custom instructions, permissions, MCP integration" },
          { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server", label: "Add an MCP server to Copilot CLI", description: "Connection configuration and verification" },
          { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli", label: "Using GitHub Copilot CLI", description: "Interactive mode, Plan Mode, cloud delegation" },
        ],
      },
      {
        title: "Community Resources",
        color: "purple",
        items: [
          { href: "https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azure-mcp-server", label: "Azure MCP Server - VS Code Extension", description: "VS Code extension setup and usage" },
          { href: "https://mcpservers.org/servers/github-com-microsoft-mcp", label: "Azure MCP Server - MCP Registry", description: "Complete service list and capability matrix" },
          { label: "Related CopilotTraining Talks", description: "GitHub Copilot CLI · MCP Apps · Agentic Workflows" },
        ],
      },
    ],
  },
  {
    slug: "copilot-chat-internals",
    groups: [
      {
        title: "📖 Primary Documentation",
        color: "cyan",
        items: [
          { href: "https://code.visualstudio.com/docs/copilot/chat/chat-debug-view", label: "Chat Debug View", description: "Complete guide to request inspection and debugging" },
          { href: "https://code.visualstudio.com/docs/copilot/troubleshooting", label: "Troubleshoot AI in VS Code", description: "Comprehensive troubleshooting reference" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/mcp-servers", label: "MCP Servers", description: "Configuring and debugging external tool servers" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/custom-instructions", label: "Custom Instructions", description: "Instructions configuration reference" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom Agents", description: "Building agents with focused tools and personas" },
          { href: "https://code.visualstudio.com/updates/v1_110", label: "VS Code v1.110", description: "Agent Debug Panel debut" },
          { href: "https://code.visualstudio.com/updates", label: "Latest Release Notes", description: "Keep up with new debugging and agent features" },
        ],
      },
      {
        title: "🎓 Related CopilotTraining Content",
        color: "purple",
        items: [
          { label: "Copilot Primitives", description: "Foundation: Learn context mechanisms before debugging them" },
          { label: "Copilot Hooks", description: "Governance: Use Debug View to inspect hook execution" },
          { label: "Custom Agents Workshop", description: "Application: Debug agent tool invocations" },
          { label: "Custom Instructions Workshop", description: "Configuration: Troubleshoot instruction load failures" },
        ],
      },
    ],
  },
  {
    slug: "copilot-cli",
    groups: [
      {
        title: "Official Documentation",
        color: "cyan",
        items: [
          { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli", label: "About GitHub Copilot CLI", description: "Core concepts and capabilities" },
          { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet", label: "Running tasks in parallel with /fleet", description: "Parallel orchestration documentation" },
          { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli", label: "Use Copilot CLI", description: "Command syntax and workflows" },
          { href: "https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli", label: "Install Copilot CLI", description: "Setup for all platforms" },
          { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-instructions", label: "Custom instructions", description: "Repository-specific behavior configuration" },
        ],
      },
      {
        title: "Additional Resources",
        color: "purple",
        items: [
          { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server", label: "Add an MCP server", description: "Extending with external tools" },
          { href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing", label: "Finding and installing plugins", description: "Plugin ecosystem and marketplaces" },
          { href: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-cli-plugins", label: "About plugins", description: "Plugin concepts and capabilities" },
          { href: "https://github.blog/changelog/2026-01-21-github-copilot-cli-plan-before-you-build-steer-as-you-go/", label: "Plan Mode announcement", description: "Latest features blog post" },
          { href: "https://github.com/github/copilot-cli", label: "Public repository", description: "Issue tracking and community discussions" },
        ],
      },
    ],
  },
  {
    slug: "copilot-code-review-new",
    groups: [
      {
        title: "Official Documentation",
        color: "cyan",
        items: [
          { label: "GitHub Copilot Code Review - Concepts", description: "Core review architecture and model behavior" },
          { label: "Configure Automatic Code Review", description: "Setting up auto-review triggers and scope" },
          { label: "Using Copilot Code Review", description: "Requesting reviews, interpreting suggestions" },
          { label: "Copilot Enterprise Documentation", description: "Enterprise deployment and governance options" },
        ],
      },
      {
        title: "Industry Research",
        color: "purple",
        items: [
          { label: "GitHub Blog: Copilot Code Review Launch", description: "Announcement and key metrics" },
          { label: "Microsoft DevBlogs: AI Code Review Best Practices", description: "Implementation guidance" },
          { label: "Stack Overflow Developer Survey 2024", description: "Code review bottleneck statistics" },
          { label: "OWASP Top 10 2024", description: "Vulnerability categories caught by AI review" },
          { label: "GitHub Security Lab: AI in Application Security", description: "73% fewer false positives" },
          { label: "Gartner: AI-Augmented Software Engineering", description: "Market analysis and adoption trends" },
        ],
      },
    ],
  },
  {
    slug: "copilot-code-review",
    groups: [
      {
        title: "📖 Official Documentation",
        color: "cyan",
        items: [
          { href: "https://docs.github.com/en/copilot/concepts/agents/code-review", label: "GitHub Copilot Code Review - Concepts", description: "Core review architecture and model behavior" },
          { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review", label: "Configure Automatic Code Review", description: "Setting up auto-review triggers and scope" },
          { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review", label: "Using Copilot Code Review", description: "Requesting reviews, interpreting suggestions" },
          { href: "https://docs.github.com/en/enterprise-cloud@latest/copilot/copilot-business-only/copilot-business-code-review", label: "GitHub Copilot Enterprise Deployment", description: "Enterprise deployment and governance" },
          { href: "https://github.blog/2024-02-14-github-copilot-code-review-now-generally-available/", label: "Copilot Code Review Launch", description: "43% time reduction — GA announcement" },
          { href: "https://github.blog/engineering/code-review-agent-architecture/", label: "Building the Code Review Agent", description: "Architecture deep-dive from GitHub Engineering" },
        ],
      },
      {
        title: "📊 Industry Research",
        color: "purple",
        items: [
          { href: "https://survey.stackoverflow.co/2024/code-review-tools", label: "Stack Overflow 2024", description: "68% cite code review as a bottleneck" },
          { href: "https://www.infoq.com/articles/measuring-developer-productivity-2024/", label: "InfoQ: Measuring Developer Productivity", description: "Frameworks for quantifying review impact" },
          { href: "https://owasp.org/www-project-top-ten/", label: "OWASP Top 10 2024", description: "Vulnerability categories caught by AI review" },
          { href: "https://securitylab.github.com/research/ai-application-security/", label: "GitHub Security Lab: AI in AppSec", description: "73% fewer false positives reported" },
          { href: "https://devblogs.microsoft.com/engineering/ai-powered-code-review/", label: "Microsoft: AI Code Review Best Practices", description: "Implementation guidance for teams" },
        ],
      },
    ],
  },
  {
    slug: "copilot-hooks",
    groups: [
      {
        title: "📖 Official Docs",
        color: "cyan",
        items: [
          { href: "https://code.visualstudio.com/docs/copilot/customization/hooks", label: "Agent Hooks in VS Code", description: "Configuration reference and examples" },
          { href: "https://docs.github.com/en/copilot/concepts/agents", label: "Copilot Agents Concepts", description: "Agent types, capabilities, and security model" },
          { href: "https://docs.github.com/en/copilot/reference/hooks-configuration", label: "Hooks Config Reference", description: "Full schema, trigger types, and output handling" },
          { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents", label: "Hooks How-Tos", description: "Step-by-step guides for common hook patterns" },
        ],
      },
      {
        title: "🔗 Related Topics",
        color: "purple",
        items: [
          { label: "Terminal Sandboxing", description: "OS-level controls that complement hooks" },
          { label: "Custom Instructions", description: "Shaping agent behavior proactively" },
          { label: "Enterprise Patterns", description: "Org-wide governance with hooks" },
          { label: "Custom Agents", description: "Building agents with built-in hook compliance" },
        ],
      },
    ],
  },
  {
    slug: "copilot-memory",
    groups: [
      {
        title: "Official Documentation",
        color: "cyan",
        items: [
          { href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory", label: "GitHub Docs: Copilot Memory", description: "Core concepts, enabling memory, curation guide" },
          { href: "https://github.com/settings/copilot", label: "GitHub Settings: Manage Memory", description: "View, edit, and delete stored memories; privacy controls" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/custom-instructions", label: "Custom Instructions Guide", description: "Complementary feature for team standards (works with memory)" },
        ],
      },
      {
        title: "🎓 Related Content",
        color: "purple",
        items: [
          { label: "Copilot Primitives", description: "Instructions, prompts, skills, and agents — the full customization stack" },
          { label: "Enterprise Patterns", description: "Org-level memory governance and privacy controls" },
          { label: "Custom Instructions Workshop", description: "Pair memory with explicit instructions for maximum consistency" },
        ],
      },
    ],
  },
  {
    slug: "copilot-primitives",
    groups: [
      {
        title: "📖 Overview & Getting Started",
        color: "cyan",
        items: [
          { href: "https://code.visualstudio.com/docs/copilot/copilot-customization", label: "Customize AI in Visual Studio Code", description: "Comprehensive customization overview" },
          { href: "https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot", label: "Adding repository custom instructions", description: "Repo-scoped instructions reference" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/custom-instructions", label: "Use custom instructions in VS Code", description: "VS Code instructions configuration" },
          { href: "https://docs.github.com/en/copilot/reference/custom-instructions-support", label: "Custom instructions support reference", description: "Surface support matrix and limits" },
        ],
      },
      {
        title: "🌐 Open Standards & Community",
        color: "purple",
        items: [
          { href: "https://code.visualstudio.com/docs/copilot/customization/agent-skills", label: "Use Agent Skills in VS Code", description: "Skill file format and invocation" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/prompt-files", label: "Use prompt files in VS Code", description: "Reusable prompt templates" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom agents in VS Code", description: ".agent.md definitions and configuration" },
          { href: "https://agents.md/", label: "AGENTS.md open format", description: "Cross-vendor agent instruction standard" },
          { href: "https://agentskills.io/", label: "Agent Skills open standard", description: "Community skill library and spec" },
          { href: "https://github.com/github/awesome-copilot", label: "Awesome Copilot repository", description: "Community prompts, skills, and agents" },
        ],
      },
    ],
  },
  {
    slug: "copilot-sdk",
    groups: [
      {
        title: "Primary Documentation",
        color: "cyan",
        items: [
          { href: "https://github.com/github/copilot-sdk", label: "GitHub Copilot SDK Repository", description: "Installation, API reference, language-specific examples" },
          { href: "https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/", label: "SDK Blog Announcement", description: "Technical preview announcement and architecture overview" },
          { href: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line", label: "Copilot CLI Documentation", description: "Understanding the agent runtime SDK wraps" },
        ],
      },
      {
        title: "Additional Resources",
        color: "purple",
        items: [
          { href: "https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md", label: "Python SDK Cookbook", description: "Python-specific patterns and recipes" },
          { href: "https://docs.github.com/en/copilot/concepts/billing/copilot-requests", label: "Copilot Requests & Billing", description: "Understanding quotas and usage tracking" },
          { href: "https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md", label: "BYOK Documentation", description: "Bring Your Own Key for custom model providers" },
        ],
      },
    ],
  },
  {
    slug: "copilot-web",
    groups: [
      {
        title: "VS Code Documentation",
        color: "cyan",
        items: [
          { href: "https://code.visualstudio.com/docs/copilot/copilot-coding-agent", label: "GitHub Copilot coding agent", description: "Core concepts and VS Code integration" },
          { href: "https://docs.github.com/en/copilot/concepts/coding-agent", label: "GitHub Docs — About the Coding Agent", description: "Architecture, security model, capabilities, and limitations" },
          { href: "https://docs.github.com/en/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent", label: "Customizing the Development Environment", description: "copilot-setup-steps.yml reference, runner config, and options" },
          { href: "https://docs.github.com/en/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent", label: "Customizing or Disabling the Agent Firewall", description: "Allowlist management, org/repo controls, and firewall limitations" },
        ],
      },
      {
        title: "GitHub Blog & Resources",
        color: "purple",
        items: [
          { href: "https://github.blog/changelog/2025-05-19-github-copilot-coding-agent-now-available-for-copilot-enterprise-and-copilot-pro-users/", label: "GitHub Blog — Assigning Issues with Coding Agent", description: "Delegation workflow, evidence bundle, and PR lifecycle" },
          { href: "https://github.blog/ai-and-ml/github-copilot/onboarding-your-ai-peer-programmer/", label: "Onboarding Your AI Peer Programmer", description: "Issue quality, setup strategies, and team adoption patterns" },
          { href: "https://docs.github.com/en/copilot/reference/copilot-allowlist-reference", label: "Copilot Allowlist Reference", description: "Complete list of hosts in the recommended allowlist" },
          { href: "https://github.blog/changelog/2025-07-30-copilot-coding-agent-custom-setup-steps-are-now-more-reliable/", label: "Custom Setup Steps — More Reliable", description: "Failure resilience and setup log visibility improvements" },
        ],
      },
    ],
  },
  {
    slug: "enterprise-patterns",
    groups: [
      {
        title: "🤖 GitHub Copilot Enterprise",
        color: "cyan",
        items: [
          { href: "https://docs.github.com/en/copilot/managing-copilot/managing-copilot-for-your-enterprise", label: "Managing Copilot for Your Enterprise", description: "Org policies, model access controls, seat management, and audit logs" },
          { href: "https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-organization-instructions", label: "Organization-Wide Custom Instructions", description: "Org-level and repo-level instructions, AGENTS.md, .github/copilot-instructions.md" },
          { href: "https://docs.github.com/en/copilot/concepts/agents/about-agent-skills", label: "Organizational Agent Skills (GA)", description: "Centrally versioned domain skills deployed across all org repositories" },
          { href: "https://docs.github.com/en/copilot/how-tos/provide-context/use-copilot-spaces", label: "Copilot Spaces (Knowledge Bases)", description: "Multi-repo context — organize repos into spaces for cross-codebase queries" },
        ],
      },
      {
        title: "📊 Metrics, Licensing & Standards",
        color: "purple",
        items: [
          { href: "https://docs.github.com/en/rest/copilot/copilot-metrics", label: "Copilot Usage Metrics API", description: "Acceptance rates, active users, feature adoption — org and team breakdowns" },
          { href: "https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access", label: "Flexible Licensing Strategies", description: "Full seats, usage-based, and review-only tiers for cost optimization" },
          { href: "https://agents.md/", label: "AGENTS.md Open Format", description: "Cross-vendor standard for agent instruction files and repo conventions" },
          { label: "Related Tech Talks", description: "Agentic Journey · Agentic SDLC · Agent Teams · Agentic Workflows" },
        ],
      },
    ],
  },
  {
    slug: "mcp-apps",
    groups: [
      {
        title: "Primary Documentation",
        color: "cyan",
        items: [
          { href: "https://code.visualstudio.com/blogs/2026/01/26/mcp-apps-support", label: "MCP Apps Blog Post", description: "Introduction and capabilities" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/mcp-servers", label: "VS Code MCP Servers Docs", description: "Integration guide" },
          { href: "https://modelcontextprotocol.io/", label: "Model Context Protocol Spec", description: "Core protocol details" },
          { href: "https://github.com/modelcontextprotocol/servers", label: "MCP Apps Playground", description: "Working examples" },
          { href: "https://github.com/modelcontextprotocol/typescript-sdk", label: "MCP TypeScript SDK", description: "SDK for building servers" },
          { href: "https://code.visualstudio.com/updates/v1_109#_support-for-mcp-apps", label: "VS Code 1.109 Release Notes", description: "MCP Apps announcement" },
        ],
      },
      {
        title: "Related Content",
        color: "purple",
        items: [
          { label: "MCP Servers Workshop", description: "MCP fundamentals, tool development, configuration" },
          { label: "Custom Agents", description: "Building agents that leverage MCP Apps for visualization" },
          { label: "Agent Skills", description: "Packaging MCP Apps workflows as reusable skills" },
        ],
      },
    ],
  },
  {
    slug: "multi-step-tasks",
    groups: [
      {
        title: "📖 Primary Documentation",
        color: "cyan",
        items: [
          { href: "https://code.visualstudio.com/docs/copilot/agents/subagents", label: "VS Code Subagents Documentation", description: "Core concepts, invocation patterns, usage scenarios, and custom agent integration" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom Agents Documentation", description: "Create specialized agents for subagent roles with focused tools and instructions" },
          { href: "https://code.visualstudio.com/docs/copilot/agents/overview", label: "Agents Overview", description: "Understanding agent types (local, background, cloud) and when to use each" },
        ],
      },
      {
        title: "🔧 Additional Resources",
        color: "purple",
        items: [
          { href: "https://code.visualstudio.com/docs/copilot/chat/chat-sessions", label: "Chat Sessions", description: "Managing agent sessions and context across conversations" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/prompt-files", label: "Prompt Files", description: "Create reusable prompt templates with subagent workflows" },
          { href: "https://code.visualstudio.com/docs/copilot/chat/chat-tools", label: "Tools in Chat", description: "Understanding tools available to agents and subagents" },
        ],
      },
    ],
  },
  {
    slug: "parallel-execution",
    groups: [
      {
        title: "📚 Related Patterns",
        color: "cyan",
        items: [
          { label: "Need task decomposition?", description: "→ See multi-step-tasks" },
          { label: "Need specialized roles?", description: "→ See agent-teams" },
        ],
      },
      {
        title: "🔗 Resources",
        color: "purple",
        items: [
          { label: "VS Code: Background Agents", description: "Worktree isolation for parallel workstreams" },
          { label: "VS Code: Cloud Agents", description: "Remote execution and scaling" },
          { label: "VS Code 1.109: Session Management", description: "Session picker and monitoring" },
          { label: "Git Worktrees", description: "Technical reference for isolated environments" },
          { label: "Related Talks", description: "Agentic SDLC (Part 2) · Copilot CLI" },
        ],
      },
    ],
  },
  {
    slug: "terminal-sandboxing",
    groups: [
      {
        title: "📖 Primary Resources",
        color: "cyan",
        items: [
          { label: "Terminal Sandbox Configuration", description: "Setup guide, settings reference, examples" },
          { label: "VS Code 1.109 Release Notes", description: "Feature announcement and capabilities" },
          { label: "Agentic Mode Security", description: "Complete security model overview" },
          { label: "Terminal Tool Lifecycle", description: "awaitTerminal, killTerminal details" },
        ],
      },
      {
        title: "Related Topics",
        color: "purple",
        items: [
          { label: "Chat Diagnostics", description: "View blocked attempts and sandbox status" },
          { label: "Enterprise Security", description: "Organization policies and compliance" },
          { label: "Copilot Hooks", description: "Complementary governance at the agent layer" },
          { label: "Custom Agents", description: "Design agents that respect sandbox boundaries" },
        ],
      },
    ],
  },
  {
    slug: "vscode-latest",
    groups: [
      {
        title: "📦 Release Notes (v1.108–v1.115)",
        color: "cyan",
        items: [
          { href: "https://code.visualstudio.com/updates/v1_115", label: "v1.115 (Apr 8)", description: "VS Code Agents app, terminal tools" },
          { href: "https://code.visualstudio.com/updates/v1_114", label: "v1.114 (Apr 1)", description: "Video in chat, simplified #codebase" },
          { href: "https://code.visualstudio.com/updates/v1_113", label: "v1.113 (Mar 25)", description: "Customizations editor, nested subagents" },
          { href: "https://code.visualstudio.com/updates/v1_112", label: "v1.112 (Mar 18)", description: "Browser debugging, MCP sandboxing" },
          { href: "https://code.visualstudio.com/updates/v1_111", label: "v1.111 (Mar 9)", description: "Autopilot mode, weekly releases begin" },
          { href: "https://code.visualstudio.com/updates/v1_110", label: "v1.110 (Feb)", description: "Agent Plugins, browser tools, /create-*" },
          { href: "https://code.visualstudio.com/updates/v1_109", label: "v1.109 (Jan)", description: "Skills GA, Claude Agent, Memory" },
          { href: "https://code.visualstudio.com/updates/v1_108", label: "v1.108 (Dec)", description: "Skills experimental, Agent Sessions" },
        ],
      },
      {
        title: "📘 Documentation",
        color: "purple",
        items: [
          { href: "https://code.visualstudio.com/docs/copilot/overview", label: "GitHub Copilot in VS Code", description: "Features, agents, customization" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/agent-plugins", label: "Agent Plugins", description: "Installing and creating bundles" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/agent-skills", label: "Agent Skills", description: "Creating SKILL.md files" },
          { href: "https://code.visualstudio.com/docs/copilot/customization/custom-agents", label: "Custom Agents", description: ".agent.md definitions" },
          { href: "https://code.visualstudio.com/docs/copilot/agents/background-agents", label: "Background Agents", description: "Git worktree isolation" },
          { href: "https://code.visualstudio.com/docs/copilot/chat/mcp-servers", label: "MCP Servers", description: "Model Context Protocol setup" },
          { href: "https://code.visualstudio.com/docs/copilot/chat/copilot-memory", label: "Copilot Memory", description: "Persistent context across sessions" },
          { href: "https://code.visualstudio.com/docs/copilot/chat/chat-customizations", label: "Chat Customizations", description: "Unified customization editor" },
        ],
      },
    ],
  },
];

// ─── Build component call string ─────────────────────────────────────────────
function esc(str) {
  // Escape backslashes and double-quotes for use inside double-quoted JS strings
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function buildItem(item) {
  if (item.href) {
    return `{ href: "${esc(item.href)}", label: "${esc(item.label)}", description: "${esc(item.description)}" }`;
  }
  return `{ label: "${esc(item.label)}", description: "${esc(item.description)}" }`;
}

function buildGroup(group) {
  const items = group.items.map((i) => `        ${buildItem(i)}`).join(",\n");
  return `    { title: "${esc(group.title)}", color: "${group.color}", items: [\n${items}\n    ] }`;
}

function buildComponentCall(deck) {
  const groups = deck.groups.map(buildGroup).join(",\n");
  return `\n<!-- SLIDE: References -->\n<ReferencesSlide\n  :groups='[\n${groups}\n  ]'\n/>`;
}

// ─── Update a single deck file ────────────────────────────────────────────────
function updateDeck(deck) {
  const filePath = resolve(TECH_TALKS_DIR, `${deck.slug}.md`);
  let content;
  try {
    content = readFileSync(filePath, "utf8");
  } catch {
    console.log(`  SKIP ${deck.slug}: file not found`);
    return false;
  }

  // Split on slide separators (handles both \n---\n and \n\n---\n\n variants)
  const SEP = "\n---\n";
  const parts = content.split(SEP);

  // Find the References slide (handles "References" and "References & Resources")
  const refIdx = parts.findIndex((p) => /<!-- SLIDE: References/.test(p));
  if (refIdx === -1) {
    console.log(`  SKIP ${deck.slug}: no References slide found`);
    return false;
  }

  // Replace slide content
  parts[refIdx] = buildComponentCall(deck);

  let updated = parts.join(SEP);

  // Add import if not already present
  if (!updated.includes("import ReferencesSlide")) {
    updated = updated.replace(
      /import TitleSlide from '\.\/components\/TitleSlide\.vue'/,
      "import TitleSlide from './components/TitleSlide.vue'\nimport ReferencesSlide from './components/ReferencesSlide.vue'"
    );
  }

  writeFileSync(filePath, updated);
  console.log(`  ✅ ${deck.slug}`);
  return true;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const filter = process.argv[2] || null;
const decks = filter ? DECKS.filter((d) => d.slug === filter) : DECKS;

console.log(`Updating ${decks.length} deck(s)...\n`);
let ok = 0;
for (const deck of decks) {
  if (updateDeck(deck)) ok++;
}
console.log(`\nDone. ${ok}/${decks.length} updated.`);
