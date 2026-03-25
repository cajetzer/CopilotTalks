# Exercise 5.3: Validate Running Character Detail API

## 🔨 Exercise

### Exercise 5.3: Validate Running Character Detail API — "From Database Confidence to Runtime Confidence"

**Lead:** Elena ⭐ | **Support:** Marcus 🤝 | **Time:** 15 min

#### 📖 The Challenge

The team can now inspect FanHub data directly and investigate duplicate character records. But one important risk remains:

**the running API can still drift from what the character-detail experience expects.**

That drift shows up when:

- the database has the right data, but the API omits a field
- the API uses a surprising fallback shape
- optional fields come back differently than the UI expects
- developers only validate the database and never query the running service

Elena wants runtime confidence, not just schema confidence.

#### 🔄 The Transformation

| Before ❌ | After ✨ |
|-----------|----------|
| Elena starts the backend, runs curl commands, reads raw JSON, and manually compares responses to what the character-detail flow expects. It works, but it is slow and easy to skip. | Elena asks Copilot to query the running FanHub API through MCP and validate the character-detail response shape. Copilot returns the live response, highlights missing/changed fields, and flags likely frontend risks in under a minute. |
| **Validation time:** 10 min/cycle<br>**Runtime drift visibility:** low<br>**Skipped checks:** common under time pressure | **Validation time:** 30-60 sec/cycle<br>**Runtime drift visibility:** high<br>**Skipped checks:** reduced |

#### 🎯 Your Goal

Configure a FanHub API MCP server and use it to validate that the running character-detail endpoints match the behavior your character features expect.

#### 📋 Steps

1. **Create a simple FanHub API MCP server**

   Create `mcp-servers/fanhub-api-server.js`:

   ```javascript
    const http = require("http");
    const readline = require("readline");

    const API_BASE_URL = process.env.FANHUB_API_URL || "http://localhost:5265";

    function send(id, result) {
      process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, result }) + "\n");
    }

    function sendError(id, code, message) {
      process.stdout.write(
        JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } }) + "\n",
      );
    }

    function getJson(path) {
      return new Promise((resolve, reject) => {
        http
          .get(`${API_BASE_URL}${path}`, (res) => {
            let data = "";
            res.on("data", (chunk) => (data += chunk));
            res.on("end", () => {
              if (res.statusCode >= 400) {
                reject(new Error(`API returned ${res.statusCode}: ${data}`));
                return;
              }
              resolve(JSON.parse(data));
            });
          })
          .on("error", reject);
      });
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });

    rl.on("line", async (line) => {
      let request;
      try {
        request = JSON.parse(line);
      } catch {
        return;
      }

      const { id, method, params } = request;

      if (method === "initialize") {
        send(id, {
          protocolVersion: "2024-11-05",
          capabilities: { tools: {} },
          serverInfo: { name: "fanhub-api", version: "1.0.0" },
        });
        return;
      }

      if (method === "notifications/initialized") {
        return; // no response needed
      }

      if (method === "tools/list") {
        send(id, {
          tools: [
            {
              name: "get_characters",
              description: "Fetch all characters from the running FanHub API",
              inputSchema: { type: "object", properties: {} },
            },
            {
              name: "get_character_by_id",
              description:
                "Fetch a single character detail record from the running FanHub API",
              inputSchema: {
                type: "object",
                properties: {
                  id: { type: "string", description: "Character ID" },
                },
                required: ["id"],
              },
            },
          ],
        });
        return;
      }

      if (method === "tools/call") {
        const tool = params.name;
        const args = params.arguments || {};

        try {
          if (tool === "get_characters") {
            const data = await getJson("/api/characters");
            send(id, { content: [{ type: "text", text: JSON.stringify(data) }] });
            return;
          }

          if (tool === "get_character_by_id") {
            const data = await getJson(`/api/characters/${args.id}`);
            send(id, { content: [{ type: "text", text: JSON.stringify(data) }] });
            return;
          }

          sendError(id, -32601, `Unknown tool: ${tool}`);
        } catch (err) {
          send(id, {
            content: [{ type: "text", text: `Error: ${err.message}` }],
            isError: true,
          });
        }
        return;
      }

      // Unknown method
      sendError(id, -32601, `Method not found: ${method}`);
    });
   ```

2. **Add the API server to `.vscode/mcp.json`**

   ```json
   {
     "servers": {
        "fanhub-db": {
        "command": "npx",
        "args": ["-y", "mcp-sqlite"],
        "env": {
        "SQLITE_DB_PATH": "${workspaceFolder}/dotnet/fanhub.db"
      },
       "fanhub-api": {
         "type": "stdio",
         "command": "node",
         "args": ["./mcp-servers/fanhub-api-server.js"],
         "env": {
           "FANHUB_API_URL": "'http://localhost:5265"
         }
       }
     }
   }
   ```

3. **Create a validation prompt**

   Create `.github/prompts/validate-character-api-contract.prompt.md`:

   ````markdown
   ---
   mode: ask
   description: Validate the running FanHub character API against expected character-detail behavior.
   ---

   Use `#mcp-fanhub-api` and, when useful, `#mcp-fanhub-db`.

   Your job:
   1. Query the running FanHub API for the character-detail response
   2. Identify missing or surprising fields
   3. Compare runtime behavior to what the UI and tests likely expect
   4. Flag fallback or optional-field risks before the PR

   Return:
   - endpoint checked
   - response observations
   - likely frontend/test risks
   - recommendation: looks safe / needs follow-up
   ````

4. **Run the validation**

   ```
   @workspace /validate-character-api-contract Validate the running character detail API.
   Focus on optional fields, fallback behavior, and anything that could break the
   character detail experience.
   ```

#### ✅ Success Criteria

- [ ] `mcp-servers/fanhub-api-server.js` exists and runs
- [ ] `.vscode/mcp.json` includes the `fanhub-api` MCP server
- [ ] Copilot can query the running FanHub API in chat
- [ ] The validation workflow highlights runtime risks for character-detail behavior

#### 📚 Official Docs

- [MCP Servers in VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)
- [MCP Server Development Guide](https://code.visualstudio.com/docs/copilot/guides/mcp-developer-guide)

---

## 🔗 What You Built

**In this exercise:**
- `mcp-servers/fanhub-api-server.js` — MCP wrapper around the running FanHub API
- `.github/prompts/validate-character-api-contract.prompt.md` — Reusable runtime validation workflow

**How it compounds:**

| Previous Modules | This Module | Combined Power |
|------------------|-------------|----------------|
| Exercise 5.1: FanHub DB access | Running API access | The team can now compare stored data with runtime behavior |
| Exercise 5.2: MCP-aware skill upgrade | API validation | The upgraded skill can now be checked against the running service, not just database assumptions |

---

## ➡️ Next Up

**[Module 6: Custom Agents](../06-custom-agents/README.md)** — Next, package the skill, live data access, and runtime validation into an agent that can run the workflow end to end.

> *"We have the local workflow, the database access, and the running API checks. Module 6 is where we stop juggling them manually and let an agent orchestrate them."*
> — Sarah, pointing to the next step

---
