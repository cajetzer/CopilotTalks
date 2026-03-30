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
          name: "get_lore",
          description: "Fetch all lore entries from the running FanHub API",
          inputSchema: { type: "object", properties: {} },
        },
        {
          name: "get_lore_by_id",
          description:
            "Fetch a single lore entry by ID from the running FanHub API",
          inputSchema: {
            type: "object",
            properties: {
              id: { type: "string", description: "Lore entry ID" },
            },
            required: ["id"],
          },
        },
        {
          name: "create_lore",
          description: "Create a new lore entry via the running FanHub API",
          inputSchema: {
            type: "object",
            properties: {
              showId: {
                type: "number",
                description: "Show ID (1 for Breaking Bad)",
              },
              category: {
                type: "string",
                description:
                  "Category (e.g. Location, Faction, Story Beat, Theme, Production)",
              },
              title: { type: "string", description: "Title of the lore entry" },
              description: {
                type: "string",
                description: "Full description of the lore entry",
              },
            },
            required: ["showId", "category", "title", "description"],
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
      if (tool === "get_lore") {
        const data = await getJson("/api/lore");
        send(id, { content: [{ type: "text", text: JSON.stringify(data) }] });
        return;
      }

      if (tool === "get_lore_by_id") {
        const data = await getJson(`/api/lore/${args.id}`);
        send(id, { content: [{ type: "text", text: JSON.stringify(data) }] });
        return;
      }

      if (tool === "create_lore") {
        const body = JSON.stringify(args);
        const apiUrl = new URL("/api/lore", API_BASE_URL);
        const postData = await new Promise((resolve, reject) => {
          const req = http.request(
            {
              hostname: apiUrl.hostname,
              port: apiUrl.port,
              path: apiUrl.pathname,
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(body),
              },
            },
            (res) => {
              let data = "";
              res.on("data", (chunk) => (data += chunk));
              res.on("end", () => {
                if (res.statusCode >= 400) {
                  reject(new Error(`API returned ${res.statusCode}: ${data}`));
                  return;
                }
                resolve(JSON.parse(data));
              });
            },
          );
          req.on("error", reject);
          req.write(body);
          req.end();
        });
        send(id, {
          content: [{ type: "text", text: JSON.stringify(postData) }],
        });
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
