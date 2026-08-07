const http = require("http");
const { modelRegistry } = require("./model-registry");

const PORT = Number(process.env.PORT || 8787);
const SEED_ADMIN_CODE = process.env.LUMORA_SEED_ADMIN_CODE || "LUMORA-SEED-2026";

const plans = {
  Free: { messagesPerDay: 20, voiceMinutes: 5, modelPriority: "standard" },
  Plus: { messagesPerDay: 200, voiceMinutes: 60, modelPriority: "priority" },
  Pro: { messagesPerDay: 1000, voiceMinutes: 300, modelPriority: "advanced" },
  Teams: { messagesPerDay: 5000, voiceMinutes: 1500, modelPriority: "enterprise" }
};

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, X-Seed-Admin-Code",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
  });
  response.end(JSON.stringify(payload, null, 2));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", chunk => {
      body += chunk;
      if (body.length > 1_000_000) {
        request.destroy();
        reject(new Error("Request body too large"));
      }
    });
    request.on("end", () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function detectTask(text = "", explicitTask = "") {
  const lower = `${explicitTask} ${text}`.toLowerCase();
  if (lower.includes("translate")) return "translation";
  if (lower.includes("voice") || lower.includes("speak") || lower.includes("audio")) return "speech";
  if (lower.includes("market") || lower.includes("customer") || lower.includes("price")) return "market";
  if (lower.includes("class") || lower.includes("teach") || lower.includes("explain")) return "education";
  if (lower.includes("caption") || lower.includes("script") || lower.includes("creator")) return "creator";
  return "chat";
}

function routeModel({ text = "", task = "", language = "", plan = "Free" }) {
  const detectedTask = detectTask(text, task);
  const normalizedLanguage = language.toLowerCase();
  const planPolicy = plans[plan] || plans.Free;

  let primary = modelRegistry.find(model => model.name === "AfroXLMR");
  let fallback = modelRegistry.find(model => model.name === "InkubaLM");

  if (detectedTask === "translation") {
    primary = modelRegistry.find(model => model.name === "AfriNLLB");
    fallback = modelRegistry.find(model => model.name === "Meta NLLB-200");
  }

  if (detectedTask === "speech") {
    primary = modelRegistry.find(model => model.name === "Meta MMS");
    fallback = modelRegistry.find(model => model.name === "Simba-H");
  }

  if (detectedTask === "market" || text.toLowerCase().includes("slang")) {
    primary = modelRegistry.find(model => model.name === "AfroXLMR-Social");
    fallback = modelRegistry.find(model => model.name === "AfroXLMR");
  }

  if (["yoruba", "hausa", "swahili", "zulu", "xhosa"].some(item => normalizedLanguage.includes(item))) {
    fallback = modelRegistry.find(model => model.name === "InkubaLM") || fallback;
  }

  return {
    task: detectedTask,
    language: language || "auto-detect",
    plan,
    priority: planPolicy.modelPriority,
    chain: [
      primary,
      fallback,
      { name: "General LLM", type: "Reasoning/generation layer", readiness: "integration" },
      { name: "Lumora Tone Layer", type: "Tone, dialect, and cultural style adapter", readiness: "product" }
    ].filter(Boolean)
  };
}

function simulateReply({ text = "", language = "auto", bridgeLanguage = "English", tone = "Respectful", plan = "Free", task = "" }) {
  const route = routeModel({ text, task, language, plan });
  return {
    id: `lumora-${Date.now()}`,
    role: "assistant",
    meta: `Lumora - ${route.task} - ${tone} tone`,
    text: `I hear you. I would answer in ${language || "your selected language"}, bridge with ${bridgeLanguage} only where useful, and keep the tone ${tone.toLowerCase()}. This API is currently in simulation mode; the planned route is ${route.chain.map(item => item.name).join(" -> ")}.`,
    route
  };
}

function adminMetrics() {
  return {
    users: { total: 18420, newVisitorsToday: 2184, signupConversion: "12.4%" },
    revenue: { mrr: "$184K", arr: "$2.2M", upgradesToday: 842, failedPayments: 31 },
    ai: { requestsToday: "1.28M", averageRouteMs: 428, successRate: "99.1%", modelSources: modelRegistry.length },
    platform: { webUptime: "99.98%", apiErrors: "0.8%", mobileReleases: ["iOS 1.0.4 beta", "Android 1.0.6 beta"] },
    safety: { moderationFlags: 418, appeals: 44, correctionsPending: 312 }
  };
}

function adminAccessSession(operator = "Seed Admin") {
  const issuedAt = new Date().toISOString();
  return {
    sessionId: `admin-${Date.now()}`,
    operator,
    role: "Seed Admin",
    issuedAt,
    expiresInMinutes: 60,
    scopes: [
      "executive:read",
      "growth:read",
      "payments:read",
      "users:read",
      "models:operate",
      "safety:review",
      "platform:operate",
      "access:grant"
    ],
    audit: [
      { time: issuedAt, action: "seed_admin_session_issued", area: "Access", severity: "Info" },
      { time: issuedAt, action: "metrics_access_enabled", area: "Admin API", severity: "Info" }
    ]
  };
}

async function handler(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (request.method === "OPTIONS") return sendJson(response, 200, { ok: true });

  try {
    if (request.method === "GET" && url.pathname === "/health") {
      return sendJson(response, 200, { ok: true, service: "lumora-api-platform", mode: process.env.LUMORA_MODEL_MODE || "simulation" });
    }

    if (request.method === "GET" && url.pathname === "/v1/models") {
      return sendJson(response, 200, { models: modelRegistry });
    }

    if (request.method === "GET" && url.pathname === "/v1/plans") {
      return sendJson(response, 200, { plans });
    }

    if (request.method === "POST" && url.pathname === "/v1/route") {
      const body = await readJson(request);
      return sendJson(response, 200, routeModel(body));
    }

    if (request.method === "POST" && url.pathname === "/v1/chat") {
      const body = await readJson(request);
      return sendJson(response, 200, simulateReply(body));
    }

    if (request.method === "POST" && url.pathname === "/v1/admin/access/verify") {
      const body = await readJson(request);
      if (body.code !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      return sendJson(response, 200, adminAccessSession(body.operator || "Seed Admin"));
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/metrics") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      return sendJson(response, 200, adminMetrics());
    }

    return sendJson(response, 404, { error: "Route not found" });
  } catch (error) {
    return sendJson(response, 400, { error: error.message || "Bad request" });
  }
}

function createServer() {
  return http.createServer(handler);
}

if (require.main === module) {
  createServer().listen(PORT, () => {
    console.log(`Lumora API platform listening on http://localhost:${PORT}`);
  });
}

module.exports = { createServer, detectTask, routeModel, simulateReply, adminAccessSession, plans };
