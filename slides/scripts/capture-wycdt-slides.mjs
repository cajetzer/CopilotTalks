#!/usr/bin/env node
/**
 * capture-wycdt-slides.mjs
 *
 * For each of the 14 tech-talk decks that contain a "What You Can Do Today"
 * slide, finds its slide number, starts a slidev dev server, screenshots it,
 * then moves on. Screenshots are saved to captures/<deck>-wycdt.png.
 *
 * Usage (from slides/ directory):
 *   node scripts/capture-wycdt-slides.mjs
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

/** Count SLIDE comments up to and including "What You Can Do Today" */
function findWycdtSlideNumber(deck) {
  const mdPath = path.join(DECKS_DIR, `${deck}.md`);
  const content = fs.readFileSync(mdPath, "utf8");
  const lines = content.split("\n");
  let count = 0;
  for (const line of lines) {
    if (line.startsWith("<!-- SLIDE:")) {
      count++;
      if (line.includes("What You Can Do Today") || line.includes("Next Steps") || line.includes("WYCDT")) return count;
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

/** Take a screenshot of slide N and save to captures/<deck>-wycdt.png */
async function screenshot(browser, deck, slideNum) {
  const url = `http://localhost:${PORT}/${slideNum}`;
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });
  await new Promise(r => setTimeout(r, 1500)); // let Vue render
  const outPath = path.join(CAPTURES_DIR, `${deck}-wycdt.png`);
  await page.screenshot({ path: outPath, fullPage: false });
  await page.close();
  console.log(`  [capture] Saved: captures/${deck}-wycdt.png`);
  return outPath;
}

// ── Main ─────────────────────────────────────────────────────────────────────

fs.mkdirSync(CAPTURES_DIR, { recursive: true });

const browser = await chromium.launch();
let passed = 0;
let failed = 0;

for (const deck of DECKS) {
  console.log(`\n[${DECKS.indexOf(deck) + 1}/${DECKS.length}] ${deck}`);
  const slideNum = findWycdtSlideNumber(deck);
  if (!slideNum) {
    console.warn(`  [skip] No WYCDT slide found in ${deck}`);
    failed++;
    continue;
  }
  console.log(`  [info] WYCDT is slide ${slideNum}`);
  try {
    await startSlidev(deck);
    await screenshot(browser, deck, slideNum);
    passed++;
  } catch (err) {
    console.error(`  [error] ${err.message}`);
    failed++;
  } finally {
    killPort(PORT);
    await new Promise(r => setTimeout(r, 1000));
  }
}

await browser.close();
killPort(PORT);

console.log(`\n✅ Done — ${passed} captured, ${failed} failed`);
