#!/usr/bin/env node
/**
 * capture-toc-slides.mjs
 *
 * For each of the 17 tech-talk decks, finds the "Table of Contents" slide
 * number, starts a slidev dev server for that deck, screenshots it, then
 * moves on. Screenshots are saved to captures/<deck>-toc.png.
 *
 * Usage (from slides/ directory):
 *   node scripts/capture-toc-slides.mjs
 */

import { execSync, spawn } from "child_process";
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SLIDES_DIR = path.resolve(__dirname, "..");
const CAPTURES_DIR = path.resolve(SLIDES_DIR, "..", "captures");
const DECKS_DIR = path.join(SLIDES_DIR, "tech-talks");
const PORT = 3030;

const DECKS = [
  "agentic-journey",
  "agent-teams",
  "agentic-sdlc",
  "agentic-workflows",
  "copilot-hooks",
  "copilot-code-review",
  "copilot-azure-mcp",
  "copilot-acp",
  "vscode-latest",
  "copilot-web",
  "copilot-sdk",
  "copilot-primitives",
  "copilot-memory",
  "mcp-apps",
  "copilot-cli",
  "copilot-chat-internals",
  "enterprise-patterns",
];

/** Count SLIDE comments up to and including "Table of Contents" */
function findTocSlideNumber(deck) {
  const mdPath = path.join(DECKS_DIR, `${deck}.md`);
  const content = fs.readFileSync(mdPath, "utf8");
  const lines = content.split("\n");
  let count = 0;
  for (const line of lines) {
    if (line.startsWith("<!-- SLIDE:")) {
      count++;
      if (line.includes("Table of Contents")) return count;
    }
  }
  return null;
}

/** Check if port is responding */
function isPortAlive(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}`, (res) => {
      res.destroy();
      resolve(true);
    });
    req.on("error", () => resolve(false));
    req.setTimeout(2000, () => { req.destroy(); resolve(false); });
  });
}

/** Kill whatever is on port 3030 */
function killPort(port) {
  try {
    const result = execSync(`netstat -ano | findstr :${port}`, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });
    const pids = new Set();
    for (const line of result.split("\n")) {
      const m = line.trim().match(/\s(\d+)$/);
      if (m) pids.add(m[1]);
    }
    for (const pid of pids) {
      try { execSync(`taskkill /PID ${pid} /F`, { stdio: "pipe" }); } catch {}
    }
  } catch {}
}

/** Start slidev dev for a deck and wait for it to be ready */
async function startSlidev(deck) {
  console.log(`  [slidev] Starting dev server for ${deck}...`);
  killPort(PORT);
  await new Promise(r => setTimeout(r, 1500));

  const child = spawn(
    "cmd",
    ["/c", `npm run dev -- tech-talks/${deck}.md --port ${PORT} 2>&1`],
    { cwd: SLIDES_DIR, stdio: "ignore", detached: true }
  );
  child.unref();

  // Wait up to 30s for port to respond
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    await new Promise(r => setTimeout(r, 2000));
    if (await isPortAlive(PORT)) {
      console.log(`  [slidev] Ready on port ${PORT}`);
      await new Promise(r => setTimeout(r, 2000)); // extra settle time
      return;
    }
  }
  throw new Error(`Slidev dev server for ${deck} did not start in time`);
}

/** Take a screenshot of slide N and save to captures/<deck>-toc.png */
async function screenshot(browser, deck, slideNum) {
  const url = `http://localhost:${PORT}/${slideNum}`;
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });
  await new Promise(r => setTimeout(r, 1500)); // let Vue render
  const outPath = path.join(CAPTURES_DIR, `${deck}-toc.png`);
  await page.screenshot({ path: outPath, fullPage: false });
  await page.close();
  console.log(`  [capture] Saved: captures/${deck}-toc.png`);
  return outPath;
}

// ── Main ─────────────────────────────────────────────────────────────────────

fs.mkdirSync(CAPTURES_DIR, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];

for (const deck of DECKS) {
  console.log(`\n── ${deck} ──`);
  const slideNum = findTocSlideNumber(deck);
  if (!slideNum) {
    console.log(`  [skip] No "Table of Contents" slide found`);
    results.push({ deck, status: "no-toc" });
    continue;
  }
  console.log(`  [info] TOC is slide ${slideNum}`);

  try {
    await startSlidev(deck);
    const outPath = await screenshot(browser, deck, slideNum);
    results.push({ deck, slideNum, status: "ok", path: outPath });
  } catch (err) {
    console.error(`  [error] ${err.message}`);
    results.push({ deck, slideNum, status: "error", error: err.message });
  }
}

await browser.close();
killPort(PORT);

console.log("\n\n═══════════════════════════════════════");
console.log("SUMMARY");
console.log("═══════════════════════════════════════");
for (const r of results) {
  const icon = r.status === "ok" ? "✅" : r.status === "no-toc" ? "⚠️" : "❌";
  console.log(`${icon}  ${r.deck.padEnd(28)} ${r.status === "ok" ? `slide ${r.slideNum} → captures/${r.deck}-toc.png` : r.status}`);
}
