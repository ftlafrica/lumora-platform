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

const adminAuditEvents = [
  { time: "2026-08-07T08:20:00.000Z", action: "metrics_viewed", area: "Executive Command", severity: "Info", actor: "Leadership" },
  { time: "2026-08-07T08:13:00.000Z", action: "failed_payment_queue_reviewed", area: "Payments", severity: "Medium", actor: "Finance" },
  { time: "2026-08-07T08:04:00.000Z", action: "model_fallback_spike_detected", area: "AI Ops", severity: "High", actor: "Model Ops" },
  { time: "2026-08-07T07:56:00.000Z", action: "mobile_release_health_checked", area: "Platform", severity: "Info", actor: "Developer" },
  { time: "2026-08-07T07:42:00.000Z", action: "moderation_appeal_queue_sampled", area: "Safety", severity: "Medium", actor: "Moderator" }
];

const platformControls = {
  releases: [
    { surface: "Web", version: "2026.08.07-web.4", channel: "production", status: "Stable", rollout: 100, health: "99.98% uptime" },
    { surface: "iOS", version: "1.0.4 beta", channel: "testflight", status: "Crash review", rollout: 24, health: "12 crash clusters" },
    { surface: "Android", version: "1.0.6 beta", channel: "internal", status: "Healthy", rollout: 36, health: "0 critical crashes" },
    { surface: "API", version: "0.3.0-admin", channel: "local", status: "Watch", rollout: 100, health: "0.8% errors" }
  ],
  featureFlags: [
    { key: "admin_audit_feed", surface: "Admin", state: "on", rollout: 100, owner: "Platform" },
    { key: "api_chat_router", surface: "Web/Mobile", state: "on", rollout: 100, owner: "AI Ops" },
    { key: "voice_circle_native", surface: "Mobile", state: "beta", rollout: 20, owner: "Mobile" },
    { key: "premium_upgrade_flow", surface: "Web", state: "on", rollout: 100, owner: "Growth" },
    { key: "force_mobile_update", surface: "Mobile", state: "armed", rollout: 0, owner: "Platform" }
  ],
  guardrails: {
    maintenanceMode: false,
    rollbackReady: true,
    forceUpdateArmed: true,
    killSwitches: 1
  }
};

const paymentOperations = {
  plans: [
    { plan: "Free", users: "14.2K", mrr: "$0", status: "Acquisition" },
    { plan: "Plus", users: "2.9K", mrr: "$23.2K", status: "Healthy" },
    { plan: "Pro", users: "1.1K", mrr: "$19.8K", status: "Growth" },
    { plan: "Teams", users: "47 orgs", mrr: "$141K", status: "Enterprise" }
  ],
  queues: [
    { queue: "Failed payment retry", count: 31, owner: "Finance", priority: "Today" },
    { queue: "Refund review", count: 8, owner: "Finance", priority: "High value" },
    { queue: "Teams invoice prep", count: 14, owner: "Revenue Ops", priority: "This week" },
    { queue: "Tax/VAT export", count: 3, owner: "Finance", priority: "Month close" }
  ],
  invoices: [
    { id: "INV-LUM-1048", account: "EduBridge Africa", amount: "$4,800", status: "Due in 4 days" },
    { id: "INV-LUM-1049", account: "MarketUnion NG", amount: "$2,250", status: "Paid" },
    { id: "INV-LUM-1050", account: "Creator Desk", amount: "$890", status: "Retrying card" }
  ],
  revenueMix: { proTeamsPercent: 73, consumerPercent: 27, churnRisk: "4.2%", dunningRecovery: "$11.4K" }
};

const userOperations = {
  summary: { consumers: "18.4K", organizations: 47, enterpriseSeats: 1280, riskReviews: 92 },
  accountQueues: [
    { queue: "Account support", count: 214, owner: "Support", status: "SLA 91%" },
    { queue: "Suspensions", count: 17, owner: "Trust", status: "Active" },
    { queue: "Data export requests", count: 9, owner: "Privacy", status: "Pending" },
    { queue: "High-risk sessions", count: 31, owner: "Security", status: "Review" }
  ],
  organizations: [
    { name: "EduBridge Africa", seats: 320, country: "Nigeria", controls: "SSO ready", health: "Expansion" },
    { name: "MarketUnion NG", seats: 210, country: "Nigeria", controls: "Domain claim", health: "Healthy" },
    { name: "Swahili Learning Hub", seats: 184, country: "Kenya", controls: "SCIM planned", health: "Onboarding" },
    { name: "Creator Desk", seats: 96, country: "Ghana", controls: "Policy templates", health: "Support watch" }
  ],
  controls: [
    { control: "SSO readiness", status: "14 orgs enabled", owner: "Security" },
    { control: "SCIM provisioning", status: "6 orgs queued", owner: "Enterprise" },
    { control: "Domain claims", status: "11 pending", owner: "Support" },
    { control: "Workspace policy templates", status: "Drafted", owner: "Product" }
  ]
};

const modelOperations = {
  routePolicies: [
    { policy: "Translation", primary: "AfriNLLB", fallback: "Meta NLLB-200", status: "Healthy" },
    { policy: "Speech", primary: "Meta MMS", fallback: "Simba-H", status: "Watch latency" },
    { policy: "Social tone", primary: "AfroXLMR-Social", fallback: "AfroXLMR", status: "Healthy" },
    { policy: "General African language", primary: "AfroXLMR", fallback: "InkubaLM", status: "Healthy" }
  ],
  fallbackQueues: [
    { queue: "Low-confidence dialects", count: 128, owner: "Language Quality", priority: "High" },
    { queue: "Speech model latency", count: 37, owner: "Voice Ops", priority: "Medium" },
    { queue: "Unsupported language pairs", count: 24, owner: "Model Ops", priority: "High" },
    { queue: "Tone correction review", count: 312, owner: "Native reviewers", priority: "Today" }
  ],
  health: modelRegistry.map((model, index) => ({
    name: model.name,
    readiness: model.readiness,
    latencyMs: 260 + index * 28,
    successRate: index % 4 === 0 ? "98.6%" : "99.1%",
    status: model.readiness === "A" ? "Ready" : "Watch"
  }))
};

const safetyOperations = {
  summary: { moderationFlags: 418, appeals: 44, corrections: 1284, correctionsPending: 312, safetyAlerts: 19 },
  moderationQueues: [
    { queue: "Unsafe content", count: 118, owner: "Trust", priority: "High" },
    { queue: "Spam and abuse", count: 73, owner: "Trust", priority: "Medium" },
    { queue: "PII review", count: 29, owner: "Privacy", priority: "High" },
    { queue: "Appeals", count: 44, owner: "Moderator", priority: "Today" }
  ],
  languageQuality: [
    { queue: "Native-speaker review", count: 312, owner: "Language QA", priority: "High" },
    { queue: "Dialect confidence", count: 128, owner: "Language Quality", priority: "High" },
    { queue: "Tone corrections", count: 284, owner: "Community Ops", priority: "Medium" },
    { queue: "Meaning changed reports", count: 41, owner: "Reviewers", priority: "Today" }
  ],
  policySignals: [
    { signal: "Jailbreak attempts", count: 19, trend: "3 high", owner: "Safety" },
    { signal: "Hallucination reports", count: 27, trend: "7 eval regressions", owner: "AI QA" },
    { signal: "Bias reports", count: 11, trend: "Watch", owner: "Policy" },
    { signal: "Red-team findings", count: 3, trend: "Open", owner: "Security" }
  ],
  guardrails: [
    "No sensitive admin data in consumer profile.",
    "Escalate medical, legal, and financial advice risk.",
    "Route dialect corrections to native-speaker review.",
    "Log moderation decisions with reviewer identity."
  ]
};

const growthOperations = {
  summary: { visitorsToday: 4812, newVisitors: 2184, returningVisitors: 2628, signupConversion: "12.4%", mobileWebShare: "38%" },
  funnel: [
    { label: "Visitors", value: "4,812", width: 100 },
    { label: "Started chat", value: "2,940", width: 72 },
    { label: "Created profile", value: "1,284", width: 44 },
    { label: "Picked language", value: "1,028", width: 37 },
    { label: "Upgraded", value: "842", width: 28 }
  ],
  countries: [
    { country: "Nigeria", users: "8,420", growth: "+16%", languages: "Yoruba, Hausa, Igbo, Pidgin" },
    { country: "Kenya", users: "2,880", growth: "+11%", languages: "Swahili, English" },
    { country: "South Africa", users: "2,410", growth: "+9%", languages: "Zulu, Xhosa, English" },
    { country: "Ghana", users: "1,940", growth: "+14%", languages: "Twi/Akan, Ewe, English" },
    { country: "Ethiopia", users: "1,220", growth: "+7%", languages: "Amharic, Oromo" }
  ],
  channels: [
    { channel: "Organic search", visitors: "1,420", conversion: "11.8%", note: "Language queries" },
    { channel: "Community referrals", visitors: "1,106", conversion: "15.4%", note: "Diaspora groups" },
    { channel: "Creator campaigns", visitors: "884", conversion: "13.2%", note: "Video demos" },
    { channel: "Direct", visitors: "792", conversion: "10.7%", note: "Returning users" }
  ],
  devices: [
    { device: "Mobile web", share: "38%", trend: "+6%" },
    { device: "Desktop web", share: "44%", trend: "+3%" },
    { device: "Tablet", share: "8%", trend: "+1%" },
    { device: "API/Partner", share: "10%", trend: "+2%" }
  ]
};

const accessOperations = {
  summary: { roles: 6, auditEvents: 1904, criticalThreats: 0, ssoEnabledOrgs: 14, pendingApprovals: 7 },
  roles: [
    { role: "Seed Admin", access: "Full platform", users: 1, approval: "Root approval" },
    { role: "Leadership", access: "Executive metrics, finance summaries, growth", users: 5, approval: "Seed admin" },
    { role: "Developer", access: "Models, API, logs, releases, feature flags", users: 12, approval: "Engineering lead" },
    { role: "Finance", access: "Payments, invoices, plans, refunds, taxes", users: 4, approval: "CFO/Seed admin" },
    { role: "Support", access: "Tickets, account assistance, non-sensitive user context", users: 18, approval: "Support lead" },
    { role: "Moderator", access: "Safety queues, appeals, content policy", users: 24, approval: "Trust lead" }
  ],
  approvals: [
    { request: "Finance role elevation", requester: "Revenue Ops", owner: "CFO", status: "Pending" },
    { request: "Developer incident view", requester: "Platform", owner: "Engineering lead", status: "Approved" },
    { request: "Support market escalation", requester: "Support", owner: "Support lead", status: "Pending" },
    { request: "Moderator queue expansion", requester: "Trust", owner: "Trust lead", status: "Review" }
  ],
  compliance: [
    { control: "MFA/passkeys", status: "Required", owner: "Security" },
    { control: "RBAC/ABAC policy engine", status: "Prototype", owner: "Platform" },
    { control: "Immutable audit log", status: "Designed", owner: "Security" },
    { control: "GDPR/data residency requests", status: "Privacy reviewed", owner: "Legal" },
    { control: "SSO/SCIM", status: "14 orgs enabled", owner: "Enterprise" }
  ],
  seedPolicy: [
    "Only seed admins can grant admin access.",
    "Limited access must be scoped by role, product surface, country, and approval workflow.",
    "Sensitive admin data must never appear in consumer profiles.",
    "Production requires SSO, MFA/passkeys, RBAC/ABAC, immutable audit logs, and device trust."
  ]
};

const actionOperations = {
  summary: { openActions: 12, highPriority: 4, blocked: 2, dueToday: 7, completedToday: 18 },
  incidents: [
    { id: "INC-2407", title: "iOS beta crash cluster", area: "Mobile", severity: "High", owner: "Mobile Team", status: "Investigating", eta: "1 hr" },
    { id: "INC-2408", title: "Speech model latency watch", area: "AI Ops", severity: "Medium", owner: "Voice Ops", status: "Mitigating", eta: "3 hrs" },
    { id: "INC-2409", title: "Failed payment retry spike", area: "Payments", severity: "Medium", owner: "Finance", status: "Queued", eta: "Today" },
    { id: "INC-2410", title: "Dialect correction backlog", area: "Language QA", severity: "High", owner: "Native reviewers", status: "Escalated", eta: "2 days" }
  ],
  decisions: [
    { decision: "Keep mobile force-update armed, not active", owner: "Platform", rationale: "Crash cluster is contained to beta users.", status: "Approved" },
    { decision: "Prioritize Yoruba, Swahili, Hausa quality reviews", owner: "Language QA", rationale: "Highest traffic and most correction volume.", status: "In review" },
    { decision: "Route enterprise invoices through finance queue", owner: "Revenue Ops", rationale: "Teams revenue concentration requires manual verification.", status: "Approved" }
  ],
  followUps: [
    { task: "Publish model fallback incident note", owner: "Model Ops", due: "Today", status: "Drafting" },
    { task: "Prepare investor/admin metrics export", owner: "Leadership", due: "Tomorrow", status: "Queued" },
    { task: "Validate seed-admin approval workflow", owner: "Security", due: "This week", status: "Blocked on SSO" },
    { task: "Review country-level language adoption gaps", owner: "Growth", due: "Friday", status: "Ready" }
  ],
  runbooks: [
    { runbook: "Model fallback spike", trigger: "Fallback rate > 8% for 15 minutes", owner: "AI Ops" },
    { runbook: "Payment retry surge", trigger: "Failed payment count > 25 today", owner: "Finance" },
    { runbook: "Mobile crash cluster", trigger: "Crash-free sessions below 99.5%", owner: "Mobile" },
    { runbook: "Safety escalation", trigger: "High severity moderation queue > 20", owner: "Trust" }
  ]
};

const apiOperations = {
  summary: { customers: 320, callsToday: "9.2M", errorRate: "0.8%", activeKeys: 486, webhooksQueued: 42 },
  keys: [
    { name: "EduBridge production", owner: "EduBridge Africa", scope: "chat, translate, voice", usage: "1.8M calls", status: "Healthy" },
    { name: "MarketUnion server key", owner: "MarketUnion NG", scope: "chat, market, webhooks", usage: "940K calls", status: "Rate watch" },
    { name: "Creator Desk beta", owner: "Creator Desk", scope: "creator, translate", usage: "284K calls", status: "Healthy" },
    { name: "Public docs sandbox", owner: "Developer Relations", scope: "demo-only", usage: "18K calls", status: "Restricted" }
  ],
  quotas: [
    { tier: "Free API", limit: "1K/day", used: "68%", action: "Throttle at 90%" },
    { tier: "Builder", limit: "250K/mo", used: "44%", action: "Normal" },
    { tier: "Teams", limit: "2M/mo", used: "71%", action: "Notify at 85%" },
    { tier: "Enterprise", limit: "Custom", used: "58%", action: "Account manager review" }
  ],
  webhooks: [
    { event: "message.completed", deliveries: "2.1M", failures: 18, status: "Healthy" },
    { event: "translation.reviewed", deliveries: "184K", failures: 7, status: "Healthy" },
    { event: "payment.upgraded", deliveries: "8.4K", failures: 3, status: "Retrying" },
    { event: "safety.escalated", deliveries: "412", failures: 0, status: "Protected" }
  ],
  sdks: [
    { sdk: "JavaScript", version: "0.3.1", adoption: "62%", status: "Current" },
    { sdk: "Python", version: "0.2.8", adoption: "21%", status: "Patch queued" },
    { sdk: "React Native", version: "0.1.4", adoption: "11%", status: "Beta" },
    { sdk: "REST only", version: "v1", adoption: "6%", status: "Supported" }
  ],
  errorQueues: [
    { queue: "Rate limit disputes", count: 14, owner: "Developer Support", priority: "Medium" },
    { queue: "Webhook retries", count: 42, owner: "Platform", priority: "Today" },
    { queue: "Invalid model route requests", count: 128, owner: "AI Ops", priority: "Review" },
    { queue: "Suspicious API behavior", count: 6, owner: "Security", priority: "High" }
  ]
};

const knowledgeOperations = {
  summary: { collections: 36, chunks: "1.9M", indexingJobs: 8, staleSources: 12, restrictedSources: 18 },
  collections: [
    { name: "African language guides", owner: "Language QA", chunks: "420K", freshness: "2 hrs", access: "Internal reviewers" },
    { name: "Education local examples", owner: "Learning", chunks: "310K", freshness: "1 day", access: "Classroom mode" },
    { name: "Market and business templates", owner: "Growth", chunks: "188K", freshness: "5 hrs", access: "Pro/Teams" },
    { name: "Enterprise customer workspaces", owner: "Enterprise", chunks: "640K", freshness: "Live sync", access: "Tenant scoped" }
  ],
  sources: [
    { source: "Uploaded documents", volume: "18.4K files", policy: "Tenant scoped", status: "Healthy" },
    { source: "Language reviewer notes", volume: "42K corrections", policy: "Internal", status: "Growing" },
    { source: "Public knowledge packs", volume: "86 packs", policy: "Licensed/open", status: "Review" },
    { source: "Conversation memories", volume: "User opt-in only", policy: "Private", status: "Guarded" }
  ],
  indexingJobs: [
    { job: "Yoruba proverb pack refresh", progress: "82%", owner: "Language QA", status: "Indexing" },
    { job: "Teams workspace embeddings", progress: "64%", owner: "Enterprise", status: "Running" },
    { job: "Market Mode template cleanup", progress: "39%", owner: "Growth", status: "Queued" },
    { job: "Safety policy retrieval pack", progress: "91%", owner: "Trust", status: "Validating" }
  ],
  permissions: [
    { control: "Tenant isolation", status: "Required", owner: "Security" },
    { control: "Source licensing", status: "Manual review", owner: "Legal" },
    { control: "User memory opt-in", status: "On by setting", owner: "Privacy" },
    { control: "PII redaction before indexing", status: "Designed", owner: "Trust" }
  ],
  qualityQueues: [
    { queue: "Stale source review", count: 12, owner: "Knowledge Ops", priority: "This week" },
    { queue: "Low retrieval confidence", count: 84, owner: "AI QA", priority: "High" },
    { queue: "License verification", count: 21, owner: "Legal", priority: "Before publish" },
    { queue: "Dialect mismatch reports", count: 37, owner: "Language QA", priority: "Today" }
  ]
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
    platform: {
      webUptime: "99.98%",
      apiErrors: "0.8%",
      mobileReleases: ["iOS 1.0.4 beta", "Android 1.0.6 beta"],
      activeFlags: platformControls.featureFlags.filter(flag => flag.state === "on" || flag.state === "beta").length,
      canaries: platformControls.releases.filter(release => release.rollout < 100).length
    },
    safety: { moderationFlags: 418, appeals: 44, correctionsPending: 312 },
    access: { auditEvents: adminAuditEvents.length, activeAdminSessions: 1 }
  };
}

function recordAdminEvent(action, area = "Admin API", severity = "Info", actor = "Seed Admin") {
  const event = { time: new Date().toISOString(), action, area, severity, actor };
  adminAuditEvents.unshift(event);
  adminAuditEvents.splice(50);
  return event;
}

function adminAuditTrail() {
  return {
    events: adminAuditEvents,
    summary: {
      total: adminAuditEvents.length,
      highSeverity: adminAuditEvents.filter(event => event.severity === "High").length,
      mediumSeverity: adminAuditEvents.filter(event => event.severity === "Medium").length
    }
  };
}

function adminPlatformControls() {
  return platformControls;
}

function adminPaymentOperations() {
  return paymentOperations;
}

function adminUserOperations() {
  return userOperations;
}

function adminModelOperations() {
  const readiness = modelRegistry.reduce((acc, model) => {
    acc[model.readiness] = (acc[model.readiness] || 0) + 1;
    return acc;
  }, {});
  return {
    registry: modelRegistry,
    health: modelOperations.health,
    routePolicies: modelOperations.routePolicies,
    fallbackQueues: modelOperations.fallbackQueues,
    readiness,
    summary: {
      modelSources: modelRegistry.length,
      averageRouteMs: 428,
      successRate: "99.1%",
      fallbackChains: modelOperations.routePolicies.length
    }
  };
}

function adminSafetyOperations() {
  return safetyOperations;
}

function adminGrowthOperations() {
  return growthOperations;
}

function adminAccessOperations() {
  return accessOperations;
}

function adminActionOperations() {
  return actionOperations;
}

function adminApiOperations() {
  return apiOperations;
}

function adminKnowledgeOperations() {
  return knowledgeOperations;
}

function adminAccessSession(operator = "Seed Admin") {
  const issuedAt = new Date().toISOString();
  const accessEvent = recordAdminEvent("seed_admin_session_issued", "Access", "Info", operator);
  const metricsEvent = recordAdminEvent("metrics_access_enabled", "Admin API", "Info", operator);
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
      "access:grant",
      "api:manage",
      "knowledge:operate"
    ],
    audit: [
      accessEvent,
      metricsEvent
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

    if (request.method === "GET" && url.pathname === "/v1/admin/audit") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("audit_feed_viewed", "Access", "Info", "Seed Admin");
      return sendJson(response, 200, adminAuditTrail());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/platform") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("platform_controls_viewed", "Platform", "Info", "Developer");
      return sendJson(response, 200, adminPlatformControls());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/payments") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("payment_operations_viewed", "Payments", "Info", "Finance");
      return sendJson(response, 200, adminPaymentOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/users") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("user_operations_viewed", "Users", "Info", "Support");
      return sendJson(response, 200, adminUserOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/models") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("model_operations_viewed", "AI Ops", "Info", "Model Ops");
      return sendJson(response, 200, adminModelOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/safety") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("safety_operations_viewed", "Safety", "Info", "Moderator");
      return sendJson(response, 200, adminSafetyOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/growth") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("growth_operations_viewed", "Growth", "Info", "Leadership");
      return sendJson(response, 200, adminGrowthOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/access") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("access_operations_viewed", "Access", "Info", "Seed Admin");
      return sendJson(response, 200, adminAccessOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/actions") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("operations_action_center_viewed", "Operations", "Info", "Leadership");
      return sendJson(response, 200, adminActionOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/api") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("api_management_viewed", "API Management", "Info", "Developer");
      return sendJson(response, 200, adminApiOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/knowledge") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("knowledge_operations_viewed", "Knowledge", "Info", "AI Ops");
      return sendJson(response, 200, adminKnowledgeOperations());
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

module.exports = { createServer, detectTask, routeModel, simulateReply, adminMetrics, adminAccessSession, adminAuditTrail, adminPlatformControls, adminPaymentOperations, adminUserOperations, adminModelOperations, adminSafetyOperations, adminGrowthOperations, adminAccessOperations, adminActionOperations, adminApiOperations, adminKnowledgeOperations, plans };
