#!/usr/bin/env node
/**
 * capture-section-openers.js
 * Screenshots every section opener slide (Part 1, Part 2, …) from every
 * active tech-talk deck.
 *
 * Output: captures/<deck>-part-N.png
 *
 * Usage:
 *   node scripts/capture-section-openers.js            # all decks
 *   node scripts/capture-section-openers.js copilot-cli # one deck
 */

const { chromium } = require("playwright");
const { spawn, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const net = require("net");

const SLIDES_DIR = path.resolve(__dirname, "..");
const DECKS_DIR = path.join(SLIDES_DIR, "tech-talks");
const OUTPUT_DIR = path.resolve(SLIDES_DIR, "..", "captures");
const PORT = 3030;
const READY_WAIT_MS = 25000;
const VIEWPORT = { width: 1920, height: 1080 };

const DECKS = [
  "agent-teams",
  "agentic-journey",
  "agentic-sdlc",
  "agentic-workflows",
  "copilot-acp",
  "copilot-azure-mcp",
  "copilot-chat-internals",
  "copilot-cli",
  "copilot-code-review",
  "copilot-hooks",
  "copilot-memory",
  "copilot-primitives",
  "copilot-sdk",
  "copilot-web",
  "enterprise-patterns",
  "mcp-apps",
  "vscode-latest",
];

const filter = process.argv[2] || null;
const decks = filter ? DECKS.filter((d) => d === filter) : DECKS;

/**
 * Parse the deck .md file and return an array of:
 * { partNum: 1, slideNum: 5, label: "Part 1 — Subagents" }
 * where slideNum is 1-indexed counting from the first --- separator.
 */
function findSectionOpeners(slug) {
  const deckPath = path.join(DECKS_DIR, `${slug}.md`);
  const content = fs.readFileSync(deckPath, "utf8");
  const lines = content.split("\n");

  const results = [];
  let slideNum = 1; // Slidev slide numbers start at 1
  const SLIDE_SEP = /^---\s*$/;
  const PART_COMMENT = /<!--\s*SLIDE:\s*Part\s+(\d+)/i;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (SLIDE_SEP.test(line)) {
      slideNum++;
      continue;
    }
    const m = line.match(PART_COMMENT);
    if (m) {
      const partNum = parseInt(m[1], 10);
      // Extract full label from the comment
      const labelMatch = line.match(/<!--\s*SLIDE:\s*(Part\s+\d+[^>]*?)(?:\s*-->|$)/i);
      const label = labelMatch ? labelMatch[1].trim() : `Part ${partNum}`;
      results.push({ partNum, slideNum, label });
    }
  }
  return results;
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
      try {
        execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
      } catch {}
    }
  } catch {}
}

function waitForPort(port, timeoutMs) {
  return new Promise((resolve) => {
    const deadline = Date.now() + timeoutMs;
    function attempt() {
      const s = new net.Socket();
      s.setTimeout(1000);
      s.connect(port, "127.0.0.1", () => {
        s.destroy();
        resolve(true);
      });
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

async function captureDeckOpeners(slug) {
  const openers = findSectionOpeners(slug);
  if (openers.length === 0) {
    console.log(`\n=== ${slug} === (no Part slides found — skipping)`);
    return [];
  }

  console.log(`\n=== ${slug} === (${openers.length} part openers)`);
  openers.forEach((o) => console.log(`  Part ${o.partNum} → slide ${o.slideNum}: ${o.label}`));

  killPort(PORT);
  await new Promise((r) => setTimeout(r, 1000));

  const deckFile = `tech-talks/${slug}.md`;
  const child = spawn(
    "cmd",
    ["/c", `npm run dev -- ${deckFile} --port ${PORT}`],
    { cwd: SLIDES_DIR, detached: true, stdio: "ignore" }
  );
  child.unref();

  console.log(`  Waiting for server...`);
  const ready = await waitForPort(PORT, READY_WAIT_MS);
  if (!ready) {
    console.log(`  TIMEOUT — skipping all parts`);
    killPort(PORT);
    return openers.map((o) => ({ ...o, slug, ok: false }));
  }
  await new Promise((r) => setTimeout(r, 3000));

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    colorScheme: "dark",
  });

  const results = [];
  for (const opener of openers) {
    const page = await context.newPage();
    await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
    let ok = false;
    try {
      await page.goto(`http://localhost:${PORT}/${opener.slideNum}`, {
        waitUntil: "networkidle",
        timeout: 15000,
      });
      await page.waitForTimeout(1500);
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
      const filename = `${slug}-part-${opener.partNum}.png`;
      const outPath = path.join(OUTPUT_DIR, filename);
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`  Saved: ${filename}`);
      ok = true;
    } catch (e) {
      console.log(`  ERROR Part ${opener.partNum}: ${e.message}`);
    }
    await page.close();
    results.push({ ...opener, slug, ok });
  }

  await browser.close();
  killPort(PORT);
  await new Promise((r) => setTimeout(r, 500));
  return results;
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const allResults = [];
  for (const slug of decks) {
    const results = await captureDeckOpeners(slug);
    allResults.push(...results);
  }

  const failed = allResults.filter((r) => !r.ok);
  console.log(`\nDone.`);
  console.log(`  Total captured: ${allResults.filter((r) => r.ok).length}`);
  console.log(`  Failed: ${failed.length > 0 ? failed.map((r) => `${r.slug} Part ${r.partNum}`).join(", ") : "none"}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
