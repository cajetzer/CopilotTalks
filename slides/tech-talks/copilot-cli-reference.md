<script setup>
import { isDark } from './components/useTheme'
</script>

<!-- SLIDE: Interactive Mode Commands -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
<div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white/20' : 'bg-gray-300'"></div>
</div>
<span class="text-xs ml-1" :class="isDark ? 'text-white/40' : 'text-gray-400'">1 of 11</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4" :class="isDark ? 'text-white' : 'text-gray-900'">Interactive Mode &#8212; Type <code class="px-2 py-0.5 rounded" :class="isDark ? 'bg-zinc-800 text-yellow-300' : 'bg-amber-100 text-amber-900'">/</code> to explore</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="copilot - interactive session" prompt="/" size="lg">
<div class="space-y-1 text-sm leading-relaxed">
<div class="font-semibold mt-1" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Agent environment</div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/init</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Initialize AGENTS.md for this repo</span></div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/agent</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Select a custom agent</span></div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/skills</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Manage skills</span></div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/mcp</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Manage MCP servers</span></div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/plugin</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Manage plugins</span></div>
<div class="font-semibold mt-3" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Models &amp; subagents</div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/model</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Select AI model</span></div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/delegate</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Hand off &#8594; GitHub PR</span></div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/fleet</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Parallel subagent execution</span></div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/tasks</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">View background tasks</span></div>
<div class="font-semibold mt-3" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Code</div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/diff</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Review current changes</span></div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/pr</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Operate on pull requests</span></div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/review</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Code review agent</span></div>
<div><span class="w-24 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/plan</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Implementation plan before coding</span></div>
</div>
</TerminalFrame>
<TerminalFrame title="copilot - interactive session (cont.)" size="lg">
<div class="space-y-1 text-sm leading-relaxed">
<div class="font-semibold mt-1" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Session</div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/resume</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Switch sessions</span></div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/compact</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Summarize context window</span></div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/context</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Show token usage</span></div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/share</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Export session to file / gist</span></div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/rewind</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Undo last turn + revert files</span></div>
<div class="font-semibold mt-3" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Permissions</div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/allow-all</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Enable all tools/paths/URLs</span></div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/add-dir</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Whitelist a directory</span></div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/cwd</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Change working directory</span></div>
<div class="font-semibold mt-3" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Research &amp; More</div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/research</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Deep research via GitHub + web</span></div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/changelog</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">CLI version history (+ AI summary)</span></div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/ide</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Connect to VS Code workspace</span></div>
<div><span class="w-28 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">/new</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Fresh conversation</span></div>
</div>
</TerminalFrame>
</div>
</div>
</div>

---

<!-- SLIDE: Non-Interactive Mode (Scripting) -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-xs" :class="isDark ? 'text-white/40' : 'text-gray-400'">2 of 11</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4" :class="isDark ? 'text-white' : 'text-gray-900'">Non-Interactive Mode &#8212; Scriptable AI</h2>
<TerminalFrame title="shell" size="full">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># One-shot prompt, exits after response</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot -p "Fix the failing test in auth.test.ts" --allow-all</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Quiet output &#8212; only agent response, no stats (great for piping)</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot -p "Summarize this PR" --silent | pbcopy</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Autopilot &#8212; continues autonomously until done</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot -p "Migrate all API routes to use the new auth middleware" --allow-all --autopilot</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Share session output as a GitHub gist</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot -p "Audit this repo for security issues" --allow-all --share-gist</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Structured JSON output for CI pipelines</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot -p "Run tests and report failures" --allow-all --output-format json</div>
</div>
</TerminalFrame>
</div>
</div>

---

<!-- SLIDE: Permissions Model -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-xs" :class="isDark ? 'text-white/40' : 'text-gray-400'">3 of 11</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4" :class="isDark ? 'text-white' : 'text-gray-900'">Permissions &#8212; Granular Control</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="fine-grained permissions" size="lg">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Allow specific tool categories</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot --allow-tool=write --allow-tool=shell</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Allow all git except push</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot --allow-tool='shell(git:*)' \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">        --deny-tool='shell(git push)'</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Restrict to specific directories</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot --add-dir ~/workspace --add-dir /tmp</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Allow GitHub API access</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot --allow-url=github.com</div>
</div>
</TerminalFrame>
<TerminalFrame title="yolo mode (trust, but verify)" size="lg">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Enable everything &#8212; tools, paths, URLs</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot --yolo</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Same as:</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot --allow-all-tools \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">        --allow-all-paths \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">        --allow-all-urls</div>
<div class="mt-2"><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">--allow-all</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">   shorthand for all three</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">--yolo</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">        alias for --allow-all</span></div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Required for non-interactive (-p) mode</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot -p "..." --allow-all-tools</div>
</div>
</TerminalFrame>
</div>
</div>
</div>

---

<!-- SLIDE: copilot init -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-xs" :class="isDark ? 'text-white/40' : 'text-gray-400'">4 of 11</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4" :class="isDark ? 'text-white' : 'text-gray-900'"><code class="px-2 rounded" :class="isDark ? 'bg-zinc-800 text-yellow-300' : 'bg-amber-100 text-amber-900'">copilot init</code> &#8212; Bootstrap Your Repo</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="shell" prompt="copilot init" size="lg">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div class="italic" :class="isDark ? 'text-zinc-300' : 'text-gray-600'">Analyzing codebase structure...</div>
<div class="italic" :class="isDark ? 'text-zinc-300' : 'text-gray-600'">Detecting build system: npm</div>
<div class="italic" :class="isDark ? 'text-zinc-300' : 'text-gray-600'">Detecting test framework: jest</div>
<div class="italic" :class="isDark ? 'text-zinc-300' : 'text-gray-600'">Detecting language: TypeScript</div>
<div class="mt-2" :class="isDark ? 'text-green-400' : 'text-green-700'">&#10003; Created .github/copilot-instructions.md</div>
</div>
</TerminalFrame>
<div class="flex flex-col gap-4 text-sm">
<div class="rounded-lg p-4 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">What it generates</div>
<div :class="isDark ? 'text-zinc-300' : 'text-gray-700'">Analyzes your repo with read-only tools and writes <code :class="isDark ? 'text-yellow-300' : 'text-amber-800'">.github/copilot-instructions.md</code> with:</div>
<ul class="mt-2 space-y-1 list-disc list-inside" :class="isDark ? 'text-zinc-400' : 'text-gray-700'">
<li>Build &amp; test commands</li>
<li>Coding conventions</li>
<li>Project structure overview</li>
<li>Technology stack details</li>
</ul>
</div>
<div class="rounded-lg p-4 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Why it matters</div>
<div :class="isDark ? 'text-zinc-400' : 'text-gray-700'">Every future session in this repo automatically loads these instructions &#8212; no need to re-explain your project to Copilot.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: copilot login -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-xs" :class="isDark ? 'text-white/40' : 'text-gray-400'">5 of 11</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4" :class="isDark ? 'text-white' : 'text-gray-900'"><code class="px-2 rounded" :class="isDark ? 'bg-zinc-800 text-yellow-300' : 'bg-amber-100 text-amber-900'">copilot login</code> &#8212; Authentication</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="shell" size="lg">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Interactive browser flow (default)</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot login</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># GitHub Enterprise Cloud (data residency)</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot login --host https://example.ghe.com</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Headless / CI &#8212; use env var instead of login</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">COPILOT_GITHUB_TOKEN=github_pat_... copilot</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Token precedence order:</div>
<div :class="isDark ? 'text-zinc-400' : 'text-gray-600'">  COPILOT_GITHUB_TOKEN</div>
<div :class="isDark ? 'text-zinc-400' : 'text-gray-600'">  GH_TOKEN</div>
<div :class="isDark ? 'text-zinc-400' : 'text-gray-600'">  GITHUB_TOKEN</div>
</div>
</TerminalFrame>
<div class="flex flex-col gap-4 text-sm">
<div class="rounded-lg p-4 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Supported token types</div>
<ul class="space-y-1 list-disc list-inside" :class="isDark ? 'text-zinc-400' : 'text-gray-700'">
<li>Fine-grained PATs (v2) with <em>Copilot Requests</em> permission</li>
<li>OAuth tokens from GitHub Copilot CLI app</li>
<li>OAuth tokens from GitHub CLI (gh) app</li>
</ul>
<div class="mt-2 text-xs" :class="isDark ? 'text-red-400' : 'text-red-600'">&#10007; Classic PATs (ghp_...) are not supported</div>
</div>
<div class="rounded-lg p-4 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Token storage</div>
<div :class="isDark ? 'text-zinc-400' : 'text-gray-700'">Stored in system credential store. Falls back to plain text in <code :class="isDark ? 'text-yellow-300' : 'text-amber-800'">~/.copilot/</code> if no credential store is available.</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: copilot plugin -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-xs" :class="isDark ? 'text-white/40' : 'text-gray-400'">6 of 11</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4" :class="isDark ? 'text-white' : 'text-gray-900'"><code class="px-2 rounded" :class="isDark ? 'bg-zinc-800 text-yellow-300' : 'bg-amber-100 text-amber-900'">copilot plugin</code> &#8212; Extend with Plugins</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="shell" size="lg">
<div class="space-y-1 text-sm leading-relaxed font-mono">
<div :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Browse the default marketplace</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot plugin marketplace browse copilot-plugins</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Install from GitHub repository</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot plugin install github/my-plugin</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Install from local directory</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot plugin install ./my-local-plugin</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># List installed plugins</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot plugin list</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Update / uninstall</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot plugin update my-plugin</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot plugin uninstall my-plugin</div>
</div>
</TerminalFrame>
<div class="flex flex-col gap-4 text-sm">
<div class="rounded-lg p-4 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">What plugins can add</div>
<ul class="space-y-1 list-disc list-inside" :class="isDark ? 'text-zinc-400' : 'text-gray-700'">
<li>Additional skills &amp; agents</li>
<li>Git hooks</li>
<li>MCP servers</li>
<li>LSP servers</li>
</ul>
</div>
<div class="rounded-lg p-4 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Built-in marketplaces</div>
<div class="font-mono text-xs space-y-1">
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">copilot-plugins</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-700'"> github/copilot-plugins</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">awesome-copilot</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-700'"> github/awesome-copilot</span></div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Configuration Settings -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-xs" :class="isDark ? 'text-white/40' : 'text-gray-400'">7 of 11</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4" :class="isDark ? 'text-white' : 'text-gray-900'"><code class="px-2 rounded" :class="isDark ? 'bg-zinc-800 text-yellow-300' : 'bg-amber-100 text-amber-900'">copilot help config</code> &#8212; Key Settings</h2>
<TerminalFrame title="~/.copilot/config.json" size="full">
<div class="grid grid-cols-2 gap-x-8 text-sm leading-relaxed">
<div>
<div class="font-semibold mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Behavior</div>
<div class="space-y-1 font-mono text-xs">
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">model</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; AI model (gpt-5.2, claude-sonnet-4.6, ...)</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">autoUpdate</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; auto-download CLI updates (default: true)</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">experimental</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; enable experimental features</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">renderMarkdown</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; render markdown in terminal</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">respectGitignore</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; hide gitignored files from @ picker</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">includeCoAuthoredBy</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; add Co-authored-by to commits</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">compactPaste</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; collapse large pastes (&gt;10 lines)</span></div>
</div>
<div class="font-semibold mt-4 mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Terminal</div>
<div class="space-y-1 font-mono text-xs">
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">mouse</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; enable mouse support in alt screen</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">beep</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; beep when attention required</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">banner</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; always / once / never</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">bashEnv</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; BASH_ENV support for bash shells</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">powershellFlags</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; startup flags for pwsh (Windows)</span></div>
</div>
</div>
<div>
<div class="font-semibold mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Security</div>
<div class="space-y-1 font-mono text-xs">
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">allowed_urls</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; pre-approved URL/domain list</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">denied_urls</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; blocked domains (takes precedence)</span></div>
</div>
<div class="font-semibold mt-4 mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Available models</div>
<div class="font-mono text-xs space-y-0.5" :class="isDark ? 'text-zinc-400' : 'text-gray-600'">
<div>claude-sonnet-4.6 &nbsp; claude-opus-4.6</div>
<div>claude-haiku-4.5 &nbsp; claude-sonnet-4.5</div>
<div>gpt-5.4 &nbsp; gpt-5.3-codex &nbsp; gpt-5.2</div>
<div>gpt-5.2-codex &nbsp; gpt-5.1 &nbsp; gpt-4.1</div>
<div>gpt-5.4-mini &nbsp; gpt-5-mini</div>
</div>
<div class="font-semibold mt-4 mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Teams</div>
<div class="font-mono text-xs">
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">companyAnnouncements</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; messages shown in banner on startup</span></div>
</div>
</div>
</div>
</TerminalFrame>
</div>
</div>

---

<!-- SLIDE: Environment Variables -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-xs" :class="isDark ? 'text-white/40' : 'text-gray-400'">8 of 11</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4" :class="isDark ? 'text-white' : 'text-gray-900'"><code class="px-2 rounded" :class="isDark ? 'bg-zinc-800 text-yellow-300' : 'bg-amber-100 text-amber-900'">copilot help environment</code> &#8212; Key Env Vars</h2>
<TerminalFrame title="environment" size="full">
<div class="grid grid-cols-2 gap-x-8 text-xs leading-relaxed font-mono">
<div>
<div class="font-semibold text-sm mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Authentication</div>
<div class="space-y-1">
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_GITHUB_TOKEN</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; PAT / OAuth token (highest precedence)</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">GH_TOKEN</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; GitHub CLI token (second)</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">GITHUB_TOKEN</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; CI token (third)</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">GH_HOST</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; GitHub Enterprise hostname</span></div>
</div>
<div class="font-semibold text-sm mt-4 mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Behavior</div>
<div class="space-y-1">
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_ALLOW_ALL</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">=true &#8212; skip all confirmations</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_MODEL</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; override AI model</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_AUTO_UPDATE</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">=false &#8212; disable auto-update</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_HOME</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; override ~/.copilot directory</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_OFFLINE</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">=true &#8212; no network (needs BYOK)</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_CUSTOM_INSTRUCTIONS_DIRS</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; extra AGENTS.md dirs</span></div>
</div>
</div>
<div>
<div class="font-semibold text-sm mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">BYOK &#8212; Bring Your Own Key</div>
<div class="space-y-1">
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_PROVIDER_BASE_URL</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; custom API endpoint</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_PROVIDER_TYPE</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; openai / azure / anthropic</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_PROVIDER_API_KEY</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; API key</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_PROVIDER_WIRE_API</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; completions / responses</span></div>
</div>
<div class="font-semibold text-sm mt-4 mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Proxy &amp; Output</div>
<div class="space-y-1">
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">HTTP_PROXY / HTTPS_PROXY</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; outbound proxy URL</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">NO_PROXY</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; bypass list (comma-separated)</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">NO_COLOR</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; disable color output</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">PLAIN_DIFF</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">=true &#8212; disable rich diff</span></div>
</div>
<div class="font-semibold text-sm mt-4 mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">OpenTelemetry</div>
<div class="space-y-1">
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">OTEL_EXPORTER_OTLP_ENDPOINT</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; enables OTel automatically</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">COPILOT_OTEL_FILE_EXPORTER_PATH</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'"> &#8212; JSON-lines output file</span></div>
</div>
</div>
</div>
</TerminalFrame>
</div>
</div>

---

<!-- SLIDE: BYOK - Custom Model Providers -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-xs" :class="isDark ? 'text-white/40' : 'text-gray-400'">9 of 11</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-xl !font-bold !m-0 mb-4" :class="isDark ? 'text-white' : 'text-gray-900'">BYOK &#8212; Bring Your Own Key</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="shell" size="lg">
<div class="space-y-1 text-xs leading-relaxed font-mono">
<div :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Ollama (local, no auth required)</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">COPILOT_PROVIDER_BASE_URL=http://localhost:11434/v1 \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">COPILOT_MODEL=deepseek-coder-v2:16b \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Custom OpenAI-compatible endpoint</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">COPILOT_PROVIDER_BASE_URL=https://my-api.example.com/v1 \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">COPILOT_PROVIDER_API_KEY=sk-... \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">COPILOT_MODEL=gpt-4 \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'"># Azure OpenAI with deployment name</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">COPILOT_PROVIDER_TYPE=azure \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">COPILOT_PROVIDER_BASE_URL=https://my.openai.azure.com \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">COPILOT_PROVIDER_MODEL_ID=gpt-4 \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">COPILOT_PROVIDER_WIRE_MODEL=my-gpt4-deployment \</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">copilot</div>
</div>
</TerminalFrame>
<div class="flex flex-col gap-4 text-sm">
<div class="rounded-lg p-4 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Provider types</div>
<div class="font-mono text-xs space-y-1">
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">openai</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-700'"> &#8212; default; covers Ollama, vLLM, Foundry Local</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">azure</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-700'"> &#8212; Azure OpenAI (host URL only)</span></div>
<div><span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">anthropic</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-700'"> &#8212; Anthropic API</span></div>
</div>
</div>
<div class="rounded-lg p-4 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">When to use</div>
<ul class="text-xs list-disc list-inside space-y-1" :class="isDark ? 'text-zinc-400' : 'text-gray-700'">
<li>Air-gapped or offline environments</li>
<li>Enterprise contracts with specific model providers</li>
<li>Local development with Ollama / Foundry Local</li>
<li>Cost control with self-hosted models</li>
</ul>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: /fleet - Parallel Subagent Execution -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-xs" :class="isDark ? 'text-white/40' : 'text-gray-400'">10 of 11</span>
</div>
<div class="relative z-10 mt-2">
<h2 class="!text-lg !font-bold !m-0 mb-3" :class="isDark ? 'text-white' : 'text-gray-900'"><code class="px-2 rounded" :class="isDark ? 'bg-zinc-800 text-yellow-300' : 'bg-amber-100 text-amber-900'">/fleet</code> &#8212; Parallel Subagent Execution</h2>
<div class="grid grid-cols-2 gap-4">
<TerminalFrame title="copilot - interactive session" prompt="/fleet" size="lg">
<div class="space-y-1 text-[11px] leading-relaxed font-mono">
<div class="italic" :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Refactor auth module, add unit tests,</div>
<div class="italic" :class="isDark ? 'text-zinc-400' : 'text-gray-600'">update API docs, run the linter.</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'">/fleet</div>
<div class="mt-1" :class="isDark ? 'text-zinc-300' : 'text-gray-700'">&#10003; Plan &#8212; 4 subtasks identified</div>
<div class="mt-2" :class="isDark ? 'text-zinc-500' : 'text-gray-500'">[subagent-1] Refactor auth module</div>
<div :class="isDark ? 'text-zinc-500' : 'text-gray-500'">[subagent-2] Write unit tests</div>
<div :class="isDark ? 'text-zinc-500' : 'text-gray-500'">[subagent-3] Update API documentation</div>
<div :class="isDark ? 'text-zinc-500' : 'text-gray-500'">[subagent-4] Run linter across repo</div>
<div class="mt-2 italic" :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Running in parallel...</div>
<div class="mt-1" :class="isDark ? 'text-green-400' : 'text-green-700'">&#10003; [subagent-4] Linter: 3 warnings fixed</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">&#10003; [subagent-1] Auth refactored</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">&#10003; [subagent-3] 12 endpoints updated</div>
<div :class="isDark ? 'text-green-400' : 'text-green-700'">&#10003; [subagent-2] 24 tests added, passing</div>
<div class="mt-2 font-semibold" :class="isDark ? 'text-green-400' : 'text-green-700'">&#10003; All subtasks complete</div>
</div>
</TerminalFrame>
<div class="flex flex-col gap-2 text-sm">
<div class="rounded-lg p-2.5 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-1 text-xs" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">How it works</div>
<ul class="text-xs list-disc list-inside space-y-0.5" :class="isDark ? 'text-zinc-400' : 'text-gray-700'">
<li>Main agent acts as orchestrator</li>
<li>Decomposes prompt into independent subtasks</li>
<li>Runs in parallel, each with its own context</li>
<li>Manages dependencies; merges results</li>
</ul>
</div>
<div class="rounded-lg p-2.5 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-1 text-xs" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Best used for</div>
<ul class="text-xs list-disc list-inside space-y-0.5" :class="isDark ? 'text-zinc-400' : 'text-gray-700'">
<li>Multi-file refactors + test generation</li>
<li>Audits + fixes across modules</li>
<li>Large dependency updates in monorepos</li>
</ul>
</div>
<div class="rounded-lg p-2.5 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-1 text-xs" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Power combos</div>
<div class="font-mono text-xs space-y-0.5">
<div :class="isDark ? 'text-zinc-400' : 'text-gray-700'">Shift+Tab &#8594; plan &#8594; <span :class="isDark ? 'text-yellow-300' : 'text-amber-800'">Accept + autopilot + /fleet</span></div>
<div class="italic" :class="isDark ? 'text-zinc-300' : 'text-gray-700'">&quot;Use GPT-5.3-Codex to refactor...&quot;</div>
<div class="italic" :class="isDark ? 'text-zinc-300' : 'text-gray-700'">&quot;Use @test-writer to create tests...&quot;</div>
</div>
</div>
</div>
</div>
</div>
</div>

---

<!-- SLIDE: Where the Magic Lives - ~/.copilot -->
<div class="h-full flex flex-col justify-start relative overflow-hidden px-14">
<div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent"></div>
<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div class="relative z-10 flex items-center gap-3 mb-3">
<span class="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full text-white text-xs font-semibold tracking-wide shadow-lg">⌨️ Reference &amp; Syntax</span>
<div class="flex-1 h-px bg-gradient-to-r from-purple-400/60 to-transparent"></div>
<span class="text-xs" :class="isDark ? 'text-white/40' : 'text-gray-400'">11 of 11</span>
</div>
<div class="relative z-10 mt-1">
<h2 class="!text-base !font-bold !m-0 mb-0.5" :class="isDark ? 'text-white' : 'text-gray-900'">Where the Magic Lives &#8212; <code class="px-2 rounded" :class="isDark ? 'bg-zinc-800 text-yellow-300' : 'bg-amber-100 text-amber-900'">~/.copilot/</code></h2>
<div class="text-[10px] mb-2" :class="isDark ? 'text-white/50' : 'text-gray-500'">How Copilot remembers everything &#8212; in-session and between sessions</div>
<div class="grid grid-cols-2 gap-3">
<TerminalFrame title="~/.copilot/" size="lg">
<div class="space-y-0.5 text-[10px] leading-relaxed font-mono">
<div><span class="w-36 inline-block" :class="isDark ? 'text-yellow-300' : 'text-amber-800'">agents/</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">custom agents</span></div>
<div><span class="w-36 inline-block" :class="isDark ? 'text-yellow-300' : 'text-amber-800'">skills/</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">skill packs</span></div>
<div><span class="w-36 inline-block" :class="isDark ? 'text-yellow-300' : 'text-amber-800'">ide/</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">IDE bridge</span></div>
<div><span class="w-36 inline-block" :class="isDark ? 'text-yellow-300' : 'text-amber-800'">logs/ session-state/</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">in-session state</span></div>
<div><span class="w-36 inline-block" :class="isDark ? 'text-yellow-300' : 'text-amber-800'">pkg/</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">CLI &amp; auto-update</span></div>
<div><span class="w-36 inline-block" :class="isDark ? 'text-yellow-300' : 'text-amber-800'">restart/</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">restart staging</span></div>
<div><span class="w-36 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">config.json</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">settings</span></div>
<div><span class="w-36 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">permissions-*.json</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">allow/deny rules</span></div>
<div><span class="w-36 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">session-store.db</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">past sessions (SQLite)</span></div>
<div><span class="w-36 inline-block" :class="isDark ? 'text-green-400' : 'text-green-700'">command-history-*.json</span><span :class="isDark ? 'text-zinc-400' : 'text-gray-600'">prompt history</span></div>
</div>
</TerminalFrame>
<div class="flex flex-col gap-1.5 text-xs">
<div class="rounded-lg p-2 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-0.5" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">In-session</div>
<ul class="text-[10px] list-disc list-inside space-y-0" :class="isDark ? 'text-zinc-400' : 'text-gray-700'">
<li><code :class="isDark ? 'text-yellow-300' : 'text-amber-800'">session-state/</code> &#8212; context, tasks, subagent state</li>
<li><code :class="isDark ? 'text-yellow-300' : 'text-amber-800'">ide/</code> &#8212; live editor bridge</li>
<li><code :class="isDark ? 'text-yellow-300' : 'text-amber-800'">logs/</code> &#8212; execution logs</li>
</ul>
</div>
<div class="rounded-lg p-2 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-0.5" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Between-session</div>
<ul class="text-[10px] list-disc list-inside space-y-0" :class="isDark ? 'text-zinc-400' : 'text-gray-700'">
<li><code :class="isDark ? 'text-yellow-300' : 'text-amber-800'">session-store.db</code> &#8212; all conversations, resumable</li>
<li><code :class="isDark ? 'text-yellow-300' : 'text-amber-800'">command-history-*.json</code> &#8212; up-arrow recall</li>
<li><code :class="isDark ? 'text-yellow-300' : 'text-amber-800'">permissions-*.json</code> &#8212; persistent approvals</li>
</ul>
</div>
<div class="rounded-lg p-2 border" :class="isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-300'">
<div class="font-semibold mb-0.5" :class="isDark ? 'text-cyan-400' : 'text-cyan-800'">Portable capabilities</div>
<ul class="text-[10px] list-disc list-inside space-y-0" :class="isDark ? 'text-zinc-400' : 'text-gray-700'">
<li><code :class="isDark ? 'text-yellow-300' : 'text-amber-800'">agents/</code> &amp; <code :class="isDark ? 'text-yellow-300' : 'text-amber-800'">skills/</code> follow you everywhere</li>
<li>Override with <code :class="isDark ? 'text-yellow-300' : 'text-amber-800'">$COPILOT_HOME</code></li>
</ul>
</div>
</div>
</div>
</div>
</div>
