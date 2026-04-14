#!/usr/bin/env node
/**
 * capture-references-slides.js
 *
 * For each active tech-talk deck, starts slidev dev, navigates to the
 * References slide, captures a screenshot, and saves it to captures/.
 *
 * The References slide number is determined dynamically by counting
 * <!-- SLIDE: --> comments in the source file.
 *
 * Usage: node slides/scripts/capture-references-slides.js [deck-slug]
 *   (omit deck-slug to run all active decks)
 */

const { chromium } = require("playwright");
const { spawn, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const net = require("net");

const SLIDES_DIR = path.resolve(__dirname, "..");
const TECH_TALKS_DIR = path.join(SLIDES_DIR, "tech-talks");
const OUTPUT_DIR = path.resolve(SLIDES_DIR, "..", "captures");
const PORT = 3030;
const READY_WAIT_MS = 25000;
const VIEWPORT = { width: 1920, height: 1080 };

const SLUGS = [
  "agent-teams",
  "agentic-journey",
  "agentic-sdlc",
  "agentic-workflows",
  "copilot-acp",
  "copilot-azure-mcp",
  "copilot-chat-internals",
  "copilot-cli",
  "copilot-code-review",
  "copilot-code-review-new",
  "copilot-hooks",
  "copilot-memory",
  "copilot-primitives",
  "copilot-sdk",
  "copilot-web",
  "enterprise-patterns",
  "mcp-apps",
  "multi-step-tasks",
  "parallel-execution",
  "terminal-sandboxing",
  "vscode-latest",
];

/** Count <!-- SLIDE: --> comments to find the 1-based slide number of References */
function findReferencesSlideNum(slug) {
  const filePath = path.join(TECH_TALKS_DIR, `${slug}.md`);
  const content = fs.readFileSync(filePath, "utf8");
  const matches = [...content.matchAll(/<!-- SLIDE:/g)];
  for (let i = 0; i < matches.length; i++) {
    const snippet = content.slice(matches[i].index, matches[i].index + 60);
    if (/<!-- SLIDE: References/.test(snippet)) {
      return i + 1; // 1-indexed
    }
  }
  return null;
}

function killPort(port) {
  try {
    const result = execSync(`netstat -ano | findstr ":${port} "`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });
    const pids = new Set();
    for (const line of result.split("\n")) {
      const m = line.trim().match(/\s+(\d+)$/);
      if (m && m[1] !== "0") pids.add(m[1]);
    }
    for (const pid of pids) {
      try { execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" }); } catch {}
    }
  } catch {}
}

function waitForPort(port, timeoutMs) {
  return new Promise((resolve) => {
    const deadline = Date.now() + timeoutMs;
    function attempt() {
      const s = new net.Socket();
      s.setTimeout(1000);
      s.connect(port, "127.0.0.1", () => { s.destroy(); resolve(true); });
      s.on("error", () => {
        s.destroy();
        if (Date.now() < deadline) setTimeout(attempt, 1000);
        else resolve(false);
      });
      s.on("timeout", () => {
        s.destroy();
        if (Date.now() < deadline) setTimeout(attempt, 1000);
        else resolve(false);
      });
    }
    attempt();
  });
}

async function captureDeck(slug) {
  console.log(`\n=== ${slug} ===`);

  const slideNum = findReferencesSlideNum(slug);
  if (!slideNum) {
    console.log(`  SKIP: no References slide found`);
    return false;
  }
  console.log(`  References slide: #${slideNum}`);

  killPort(PORT);
  await new Promise((r) => setTimeout(r, 1000));

  const deckFile = `tech-talks/${slug}.md`;
  console.log(`  Starting slidev for ${deckFile}...`);
  const child = spawn(
    "npm",
    ["run", "dev", "--", deckFile, "--port", String(PORT)],
    {
      cwd: SLIDES_DIR,
      detached: true,
      stdio: "ignore",
      shell: true,
    }
  );
  child.unref();

  console.log(`  Waiting for server...`);
  const ready = await waitForPort(PORT, READY_WAIT_MS);
  if (!ready) {
    console.log(`  ERROR: server did not start in ${READY_WAIT_MS}ms`);
    killPort(PORT);
    return false;
  }
  // Extra settle time for compilation
  await new Promise((r) => setTimeout(r, 4000));

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    colorScheme: "dark",
  });
  const page = await context.newPage();
  await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });

  let success = false;
  try {
    console.log(`  Navigating to slide ${slideNum}...`);
    await page.goto(`http://localhost:${PORT}/${slideNum}`, {
      waitUntil: "networkidle",
      timeout: 20000,
    });
    await page.waitForTimeout(2000);

    // Hide Slidev UI chrome
    await page.evaluate(() => {
      for (const sel of [
        ".slidev-nav",
        ".slidev-progress",
        "[class*='slidev-controls']",
        ".nav-return",
      ]) {
        document.querySelectorAll(sel).forEach((el) => (el.style.display = "none"));
      }
    });

    const outPath = path.join(OUTPUT_DIR, `${slug}-references.png`);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log(`  Saved: captures/${slug}-references.png`);
    success = true;
  } catch (err) {
    console.log(`  ERROR: ${err.message}`);
  }

  await browser.close();
  killPort(PORT);
  await new Promise((r) => setTimeout(r, 500));
  return success;
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const filter = process.argv[2] || null;
  const slugs = filter ? SLUGS.filter((s) => s === filter) : SLUGS;

  console.log(`Capturing references slides for ${slugs.length} deck(s)...`);
  const results = { ok: [], failed: [] };

  for (const slug of slugs) {
    const ok = await captureDeck(slug);
    (ok ? results.ok : results.failed).push(slug);
  }

  console.log(`\n${"=".repeat(50)}`);
  console.log(`Done. ${results.ok.length}/${slugs.length} captured.`);
  if (results.failed.length) {
    console.log(`Failed: ${results.failed.join(", ")}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
