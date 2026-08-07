const MODEL_REGISTRY = [
  { name: "Masakhane NLP", type: "Models and datasets", languages: "Many African languages", source: "huggingface.co/masakhane", task: "NER, QA, sentiment, MT, benchmarks", readiness: "A" },
  { name: "InkubaLM", type: "Small language model", languages: "isiZulu, Yoruba, Hausa, Swahili, isiXhosa", source: "huggingface.co/lelapa/InkubaLM-0.4B", task: "Lightweight generation and fine-tuning", readiness: "A" },
  { name: "AfroLM", type: "Masked language model", languages: "23 African languages", source: "huggingface.co/bonadossou/afrolm_active_learning", task: "Classification, NER, sentiment, embeddings", readiness: "A" },
  { name: "AfriBERTa", type: "BERT-style model", languages: "11 African languages", source: "huggingface.co/castorini/afriberta_base", task: "Classification and NER", readiness: "B" },
  { name: "AfroXLMR", type: "XLM-R adapted model", languages: "17 African languages plus Arabic/French/English", source: "huggingface.co/Davlan/afro-xlmr-base", task: "Language understanding and classification", readiness: "A" },
  { name: "AfroXLMR-Social", type: "Social-domain model", languages: "19 African languages", source: "huggingface.co/Tadesse/AfroXLMR-Social", task: "Slang, tone, sentiment, informal text", readiness: "B" },
  { name: "AfriNLLB", type: "Translation model", languages: "African language pairs", source: "huggingface.co/AfriNLP/AfriNLLB-12enc-12dec-full-ft", task: "Translation", readiness: "A" },
  { name: "Meta NLLB-200", type: "Translation fallback", languages: "200+ languages", source: "huggingface.co/facebook/nllb-200-distilled-600M", task: "Broad translation fallback", readiness: "A" },
  { name: "Meta MMS", type: "Speech model", languages: "1000+ languages", source: "huggingface.co/facebook/mms-1b-all", task: "ASR and speech coverage", readiness: "B" },
  { name: "Simba-H", type: "African speech ecosystem", languages: "39 languages in listed checkpoint", source: "huggingface.co/UBC-NLP/Simba-H", task: "ASR/TTS benchmarking", readiness: "B" }
];

const LANGUAGES = [
  "Yoruba", "Hausa", "Igbo", "Nigerian Pidgin", "Swahili", "Zulu", "Xhosa", "Amharic", "Oromo", "Somali",
  "Wolof", "Twi/Akan", "Ewe", "Lingala", "Kinyarwanda", "Shona", "Sesotho", "Arabic", "French", "Portuguese", "English"
];

const TONES = ["Respectful", "Casual", "Street", "Business", "Teacher", "Storyteller", "Elder", "Youth", "Market"];

const PLANS = [
  { name: "Free", tag: "Start", price: "$0", desc: "For everyday discovery and basic language chat.", features: ["Core AI chat", "Basic language selection", "Limited voice input", "Community corrections"] },
  { name: "Plus", tag: "Everyday", price: "$8/mo", desc: "For users who want more tone, memory, and saved workflows.", features: ["More messages", "Tone Dial", "Language Passport", "WhatsApp export"] },
  { name: "Pro", tag: "Best value", price: "$18/mo", desc: "For creators, businesses, students, and power users.", features: ["Advanced Voice Circle", "Creator Studio", "Market Mode", "Local knowledge packs"], featured: true },
  { name: "Teams", tag: "Organizations", price: "Custom", desc: "For companies, schools, language groups, and governments.", features: ["Shared workspaces", "Admin analytics", "API access", "Priority language support"] }
];

const PLAN_LIMITS = { Free: 20, Plus: 200, Pro: 1000, Teams: 5000 };
const API_BASE_URL = "http://localhost:8787";

const MODES = [
  { id: "chat", label: "AI Chat", desc: "Natural multilingual conversation", prompt: "Ask in any African language, or mix naturally..." },
  { id: "translate", label: "Translate", desc: "Preserve meaning, dialect, and tone", prompt: "Paste text to translate while keeping the local feeling..." },
  { id: "voice", label: "Voice Circle", desc: "Speak, transcribe, translate, reply", prompt: "Describe the voice task you want Lumora to handle..." },
  { id: "market", label: "Market Mode", desc: "Customer replies, pricing, product copy", prompt: "Write a business or customer message with the right tone..." },
  { id: "classroom", label: "Classroom", desc: "Explain lessons with local examples", prompt: "Ask Lumora to teach a topic simply with familiar examples..." },
  { id: "creator", label: "Creator Studio", desc: "Captions, scripts, posts, campaigns", prompt: "Create content for social, video, or community channels..." }
];

const SEED_ADMIN_CODE = "LUMORA-SEED-2026";

const ADMIN_MODULES = [
  { title: "Executive Command", desc: "Users, visitors, active chats, AI requests, revenue, cost, health, and growth.", metrics: ["18.4K users", "4.8K visitors today", "$12.8K revenue today"] },
  { title: "Visitors and Growth", desc: "New visitors, returning visitors, country traffic, conversion funnels, web/mobile/API split.", metrics: ["2.1K new visitors", "38% mobile web", "12.4% signup conversion"] },
  { title: "Payments and Plans", desc: "Free, Plus, Pro, Teams, Enterprise, upgrades, failed payments, invoices, refunds, VAT/tax.", metrics: ["842 upgrades", "31 failed payments", "$184K MRR"] },
  { title: "User Management", desc: "Profiles, sessions, devices, plans, risk score, account actions, support and moderation history.", metrics: ["92 risk reviews", "214 support-linked users", "17 suspended"] },
  { title: "Organization Management", desc: "Enterprise customers, seats, SSO, SCIM, domains, workspace policies, audit logs.", metrics: ["47 orgs", "1,280 seats", "14 SSO enabled"] },
  { title: "AI Model Management", desc: "Hugging Face model registry, health, latency, versions, routing, fallback, A/B tests.", metrics: [`${MODEL_REGISTRY.length} model sources`, "428ms avg route", "99.1% success"] },
  { title: "AI Routing", desc: "Route by language, dialect, plan, task, region, latency, cost, model availability, safety.", metrics: ["54 languages", "8 route policies", "3 fallback chains"] },
  { title: "Language Quality", desc: "Corrections, native-speaker queues, dialect confidence, benchmark gaps, readiness by country.", metrics: ["1,284 corrections", "312 pending reviews", "11 A-ready markets"] },
  { title: "Knowledge Bases", desc: "RAG indexes, embeddings, local knowledge packs, document sources, permissions, indexing queue.", metrics: ["36 collections", "1.9M chunks", "8 indexing jobs"] },
  { title: "Prompt and Persona Ops", desc: "System prompts, tone templates, organization prompts, test sandbox, versioning, rollback.", metrics: ["22 prompt sets", "6 live tests", "2 rollbacks"] },
  { title: "Chat Operations", desc: "Conversation search, analytics, shared chats, escalations, satisfaction, deletion/recovery.", metrics: ["72K chats today", "4.7 avg turns", "93% helpful"] },
  { title: "Moderation Center", desc: "Flagged messages, unsafe content, spam, PII detection, appeals, review actions.", metrics: ["418 flags", "44 appeals", "96.2% auto-confidence"] },
  { title: "AI Safety Center", desc: "Jailbreak detection, hallucination reports, bias reports, red-team tests, benchmark regressions.", metrics: ["19 safety alerts", "7 eval regressions", "3 red-team reports"] },
  { title: "API Management", desc: "Keys, SDK usage, quotas, rate limits, webhooks, OAuth/JWT, logs, errors, analytics.", metrics: ["320 API customers", "9.2M calls", "0.8% errors"] },
  { title: "Mobile App Management", desc: "iOS/Android releases, minimum version, force update, push, crash reports, beta groups.", metrics: ["iOS 1.0.4", "Android 1.0.6", "12 crash clusters"] },
  { title: "Web App Management", desc: "Deployments, feature flags, environment variables, CDN, maintenance mode, domains, rollouts.", metrics: ["3 active flags", "99.98% uptime", "2 staged releases"] },
  { title: "Analytics Center", desc: "Revenue, retention, churn, activation, feature usage, voice usage, language adoption.", metrics: ["68% D30 retention", "4.2% churn", "21% voice usage"] },
  { title: "Finance and Cost", desc: "MRR, ARR, refunds, GPU cost, cloud cost, token cost, storage, forecasts, optimization.", metrics: ["$2.2M ARR", "$9.8K GPU today", "14% cost saved"] },
  { title: "Support Center", desc: "Tickets, live chat, SLA, priority queue, customer history, escalations, satisfaction.", metrics: ["184 open tickets", "91% SLA", "4.6 CSAT"] },
  { title: "Security and Compliance", desc: "RBAC, MFA, SSO, audit logs, data residency, GDPR, SOC 2, PCI, legal requests.", metrics: ["8 roles", "1,904 audit events", "0 critical threats"] },
  { title: "Infrastructure", desc: "Servers, queues, DB, Redis, object storage, vector DB, GPU clusters, CDN, incidents.", metrics: ["99.98% uptime", "61% GPU util", "0 incidents"] },
  { title: "Release and Feature Flags", desc: "Canary, rollback, percentage rollout, country rollout, plan rollout, kill switches.", metrics: ["2 canaries", "18 flags", "1 kill switch armed"] }
];

const ADMIN_SECTIONS = [
  { id: "overview", label: "Command", desc: "Executive health, growth, revenue, cost, and incident posture." },
  { id: "growth", label: "Growth", desc: "Visitors, activation, countries, devices, campaigns, and funnels." },
  { id: "analytics", label: "Analytics", desc: "Retention, activation, churn, feature usage, language adoption, and experiments." },
  { id: "reports", label: "Reports", desc: "Leadership packs, scheduled exports, report destinations, datasets, and evidence guardrails." },
  { id: "communications", label: "Comms", desc: "Broadcasts, campaigns, templates, incident notices, push/email health, and delivery guardrails." },
  { id: "payments", label: "Payments", desc: "Plans, upgrades, invoices, failed payments, refunds, taxes, and MRR." },
  { id: "finance", label: "Finance", desc: "Cost centers, margins, forecasts, refunds, cloud spend, model spend, and optimization queues." },
  { id: "users", label: "Users and Orgs", desc: "Consumer accounts, enterprise workspaces, risk, support, and seats." },
  { id: "support", label: "Support", desc: "Tickets, SLA, escalations, CSAT, macros, user-impact signals, and safe support boundaries." },
  { id: "models", label: "AI Ops", desc: "Hugging Face sources, routing, latency, fallbacks, quality, and costs." },
  { id: "knowledge", label: "Knowledge", desc: "RAG collections, sources, indexing, embeddings, permissions, freshness, and quality queues." },
  { id: "safety", label: "Safety", desc: "Moderation, corrections, privacy, red-team findings, appeals, and policy." },
  { id: "security", label: "Security", desc: "Threats, MFA/SSO, device trust, audit integrity, data requests, and compliance readiness." },
  { id: "platform", label: "Platform", desc: "Web, mobile, API, infrastructure, incidents, releases, and feature flags." },
  { id: "infrastructure", label: "Infrastructure", desc: "Services, queues, GPU clusters, databases, incidents, uptime, and reliability guardrails." },
  { id: "api", label: "API", desc: "Keys, quotas, SDKs, webhooks, rate limits, errors, and partner integration health." },
  { id: "access", label: "Access", desc: "Seed-admin grants, RBAC, audit logs, compliance, data residency, and SSO." },
  { id: "operations", label: "Operations", desc: "Incidents, decisions, follow-ups, runbooks, owners, ETAs, and leadership action tracking." }
];

const ADMIN_KPIS = [
  { label: "Total users", value: "18,420", trend: "+12.8%", tone: "good" },
  { label: "New visitors", value: "2,184", trend: "+18.4%", tone: "good" },
  { label: "Revenue today", value: "$12,840", trend: "+9.1%", tone: "gold" },
  { label: "AI requests", value: "1.28M", trend: "+22.6%", tone: "good" },
  { label: "Payment upgrades", value: "842", trend: "+7.3%", tone: "gold" },
  { label: "Avg response", value: "428ms", trend: "-11.2%", tone: "good" },
  { label: "Open safety alerts", value: "19", trend: "3 high", tone: "warn" },
  { label: "Platform health", value: "99.98%", trend: "stable", tone: "good" }
];

const ADMIN_FUNNELS = [
  { label: "Visitor to signup", value: "12.4%", width: 68 },
  { label: "Signup to first chat", value: "78.2%", width: 82 },
  { label: "Free to Plus", value: "8.7%", width: 45 },
  { label: "Plus to Pro", value: "21.3%", width: 59 }
];

const ADMIN_COUNTRIES = [
  { country: "Nigeria", users: "8,420", growth: "+16%", languages: "Yoruba, Hausa, Igbo, Pidgin" },
  { country: "Kenya", users: "2,880", growth: "+11%", languages: "Swahili, English" },
  { country: "South Africa", users: "2,410", growth: "+9%", languages: "Zulu, Xhosa, English" },
  { country: "Ghana", users: "1,940", growth: "+14%", languages: "Twi/Akan, Ewe, English" },
  { country: "Ethiopia", users: "1,220", growth: "+7%", languages: "Amharic, Oromo" }
];

const ADMIN_PAYMENTS = [
  { plan: "Free", users: "13,920", mrr: "$0", conversion: "baseline", status: "Healthy" },
  { plan: "Plus", users: "2,840", mrr: "$22,720", conversion: "8.7%", status: "Growing" },
  { plan: "Pro", users: "1,442", mrr: "$25,956", conversion: "21.3%", status: "Best ARPU" },
  { plan: "Teams", users: "218 org seats", mrr: "$135,400", conversion: "sales-led", status: "Expansion" }
];

const ADMIN_ALERTS = [
  { title: "3 model fallback spikes", area: "AI Routing", severity: "High", owner: "Model Ops", eta: "18 min" },
  { title: "31 failed payments need retry", area: "Billing", severity: "Medium", owner: "Finance", eta: "Today" },
  { title: "312 language corrections pending", area: "Quality", severity: "Medium", owner: "Language QA", eta: "2 days" },
  { title: "iOS beta crash cluster", area: "Mobile", severity: "High", owner: "Mobile Team", eta: "1 hr" }
];

const ADMIN_ROLES = [
  { role: "Seed Admin", access: "Full platform", users: 1, approval: "Root approval" },
  { role: "Leadership", access: "Executive metrics, finance summaries, growth", users: 5, approval: "Seed admin" },
  { role: "Developer", access: "Models, API, logs, releases, feature flags", users: 12, approval: "Engineering lead" },
  { role: "Finance", access: "Payments, invoices, plans, refunds, taxes", users: 4, approval: "CFO/Seed admin" },
  { role: "Support", access: "Tickets, account assistance, non-sensitive user context", users: 18, approval: "Support lead" },
  { role: "Moderator", access: "Safety queues, appeals, content policy", users: 24, approval: "Trust lead" }
];

const DEFAULT_STATE = {
  route: "welcome",
  activeChatId: "demo",
  drawerOpen: false,
  sheet: null,
  isSignedIn: false,
  authMode: "signup",
  activeMode: "chat",
  adminUnlocked: false,
  adminSection: "overview",
  adminApiStatus: "preview",
  adminMetrics: null,
  adminMetricsLoadedAt: null,
  adminSession: null,
  adminAudit: null,
  adminAuditLoadedAt: null,
  adminPlatform: null,
  adminPlatformLoadedAt: null,
  adminPayments: null,
  adminPaymentsLoadedAt: null,
  adminFinance: null,
  adminFinanceLoadedAt: null,
  adminUsers: null,
  adminUsersLoadedAt: null,
  adminModels: null,
  adminModelsLoadedAt: null,
  adminSafety: null,
  adminSafetyLoadedAt: null,
  adminSecurity: null,
  adminSecurityLoadedAt: null,
  adminGrowth: null,
  adminGrowthLoadedAt: null,
  adminAnalytics: null,
  adminAnalyticsLoadedAt: null,
  adminReports: null,
  adminReportsLoadedAt: null,
  adminCommunications: null,
  adminCommunicationsLoadedAt: null,
  adminInfrastructure: null,
  adminInfrastructureLoadedAt: null,
  adminAccess: null,
  adminAccessLoadedAt: null,
  adminActions: null,
  adminActionsLoadedAt: null,
  adminApi: null,
  adminApiLoadedAt: null,
  adminKnowledge: null,
  adminKnowledgeLoadedAt: null,
  adminSupport: null,
  adminSupportLoadedAt: null,
  user: {
    name: "Murewa Oyetoro",
    email: "murewa@example.com",
    country: "Nigeria",
    city: "Lagos",
    mainLanguage: "Yoruba",
    bridgeLanguage: "English",
    tone: "Respectful",
    plan: "Free"
  },
  settings: {
    theme: "midnight",
    fontScale: 1,
    voiceMode: true,
    showModelRoute: true,
    memoryEnabled: true,
    privacyMode: false
  },
  usage: {
    messagesToday: 4,
    voiceMinutes: 1.5,
    corrections: 0,
    savedPrompts: 3
  },
  chats: [
    {
      id: "demo",
      title: "Explain AI in Lagos Yoruba",
      messages: [
        { role: "user", meta: "Yoruba + English", text: "Explain artificial intelligence to my younger cousin, but make it sound natural for home." },
        { role: "ai", meta: "Lumora - Respectful teacher tone", text: "Think of AI like a sharp helper that has learned from many examples. If you ask it a question, it looks for patterns and gives you an answer. But we still guide it, correct it, and use our own sense." },
        { role: "user", meta: "Voice input", text: "Make it shorter, and add one Yoruba proverb feeling without forcing it." },
        { role: "ai", meta: "Lumora - Cultural style", text: "AI is a helper that learns from examples and answers from what it has seen. Like elders say, the person who asks for the road must still use their eyes. AI can guide, but we must still think." }
      ]
    }
  ]
};

let state = loadState();
let toastTimer = null;
const ROUTES = ["welcome", "fresh", "chat", "auth", "plans", "dashboard", "admin", "admin-preview"];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("lumora-web-state") || "null");
    return saved ? mergeState(DEFAULT_STATE, saved) : structuredClone(DEFAULT_STATE);
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function mergeState(base, saved) {
  return {
    ...structuredClone(base),
    ...saved,
    user: { ...base.user, ...(saved.user || {}) },
    settings: { ...base.settings, ...(saved.settings || {}) },
    usage: { ...base.usage, ...(saved.usage || {}) },
    chats: saved.chats && saved.chats.length ? saved.chats : base.chats
  };
}

function saveState() {
  localStorage.setItem("lumora-web-state", JSON.stringify(state));
}

async function loadAdminMetrics(force = false) {
  if (!state.adminUnlocked) return;
  if (!force && state.adminApiStatus === "loading") return;
  const lastLoaded = state.adminMetricsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  state.adminApiStatus = "loading";
  saveState();
  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/metrics`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Admin metrics unavailable.");
    state.adminMetrics = await response.json();
    state.adminApiStatus = "connected";
    state.adminMetricsLoadedAt = Date.now();
  } catch {
    state.adminApiStatus = "preview";
    state.adminMetricsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminAudit(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminAuditLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/audit`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Admin audit unavailable.");
    state.adminAudit = await response.json();
    state.adminApiStatus = "connected";
    state.adminAuditLoadedAt = Date.now();
  } catch {
    state.adminAuditLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminPlatform(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminPlatformLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/platform`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Platform controls unavailable.");
    state.adminPlatform = await response.json();
    state.adminApiStatus = "connected";
    state.adminPlatformLoadedAt = Date.now();
  } catch {
    state.adminPlatformLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminInfrastructure(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminInfrastructureLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/infrastructure`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Infrastructure reliability unavailable.");
    state.adminInfrastructure = await response.json();
    state.adminApiStatus = "connected";
    state.adminInfrastructureLoadedAt = Date.now();
  } catch {
    state.adminInfrastructureLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminSecurity(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminSecurityLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/security`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Security and compliance unavailable.");
    state.adminSecurity = await response.json();
    state.adminApiStatus = "connected";
    state.adminSecurityLoadedAt = Date.now();
  } catch {
    state.adminSecurityLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminReports(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminReportsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/reports`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Reporting and exports unavailable.");
    state.adminReports = await response.json();
    state.adminApiStatus = "connected";
    state.adminReportsLoadedAt = Date.now();
  } catch {
    state.adminReportsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminCommunications(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminCommunicationsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/communications`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Communications center unavailable.");
    state.adminCommunications = await response.json();
    state.adminApiStatus = "connected";
    state.adminCommunicationsLoadedAt = Date.now();
  } catch {
    state.adminCommunicationsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminPayments(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminPaymentsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/payments`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Payment operations unavailable.");
    state.adminPayments = await response.json();
    state.adminApiStatus = "connected";
    state.adminPaymentsLoadedAt = Date.now();
  } catch {
    state.adminPaymentsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminFinance(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminFinanceLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/finance`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Finance operations unavailable.");
    state.adminFinance = await response.json();
    state.adminApiStatus = "connected";
    state.adminFinanceLoadedAt = Date.now();
  } catch {
    state.adminFinanceLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminUsers(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminUsersLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/users`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("User operations unavailable.");
    state.adminUsers = await response.json();
    state.adminApiStatus = "connected";
    state.adminUsersLoadedAt = Date.now();
  } catch {
    state.adminUsersLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminModels(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminModelsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/models`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Model operations unavailable.");
    state.adminModels = await response.json();
    state.adminApiStatus = "connected";
    state.adminModelsLoadedAt = Date.now();
  } catch {
    state.adminModelsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminSafety(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminSafetyLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/safety`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Safety operations unavailable.");
    state.adminSafety = await response.json();
    state.adminApiStatus = "connected";
    state.adminSafetyLoadedAt = Date.now();
  } catch {
    state.adminSafetyLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminGrowth(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminGrowthLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/growth`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Growth operations unavailable.");
    state.adminGrowth = await response.json();
    state.adminApiStatus = "connected";
    state.adminGrowthLoadedAt = Date.now();
  } catch {
    state.adminGrowthLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminAnalytics(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminAnalyticsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/analytics`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Analytics center unavailable.");
    state.adminAnalytics = await response.json();
    state.adminApiStatus = "connected";
    state.adminAnalyticsLoadedAt = Date.now();
  } catch {
    state.adminAnalyticsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminAccess(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminAccessLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/access`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Access operations unavailable.");
    state.adminAccess = await response.json();
    state.adminApiStatus = "connected";
    state.adminAccessLoadedAt = Date.now();
  } catch {
    state.adminAccessLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminActions(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminActionsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/actions`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Operations action center unavailable.");
    state.adminActions = await response.json();
    state.adminApiStatus = "connected";
    state.adminActionsLoadedAt = Date.now();
  } catch {
    state.adminActionsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminApi(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminApiLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/api`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("API management unavailable.");
    state.adminApi = await response.json();
    state.adminApiStatus = "connected";
    state.adminApiLoadedAt = Date.now();
  } catch {
    state.adminApiLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminKnowledge(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminKnowledgeLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/knowledge`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Knowledge operations unavailable.");
    state.adminKnowledge = await response.json();
    state.adminApiStatus = "connected";
    state.adminKnowledgeLoadedAt = Date.now();
  } catch {
    state.adminKnowledgeLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminSupport(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminSupportLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/support`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Support center unavailable.");
    state.adminSupport = await response.json();
    state.adminApiStatus = "connected";
    state.adminSupportLoadedAt = Date.now();
  } catch {
    state.adminSupportLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

function localAdminSession() {
  const issuedAt = new Date().toISOString();
  return {
    sessionId: `preview-admin-${Date.now()}`,
    operator: "Seed Admin",
    role: "Seed Admin",
    issuedAt,
    expiresInMinutes: 60,
    scopes: ["executive:read", "growth:read", "payments:read", "users:read", "models:operate", "safety:review", "platform:operate", "access:grant", "api:manage", "knowledge:operate", "support:review", "finance:read", "analytics:read", "infrastructure:operate", "security:operate", "reporting:export", "communications:send"],
    audit: [
      { time: issuedAt, action: "preview_seed_admin_session", area: "Access", severity: "Preview" },
      { time: issuedAt, action: "api_unavailable_local_unlock", area: "Web", severity: "Info" }
    ]
  };
}

async function verifyAdminAccess(code) {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/access/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, operator: "Seed Admin" })
    });
    if (!response.ok) return { ok: false, message: "Seed admin code was not accepted." };
    const session = await response.json();
    state.adminApiStatus = "connected";
    return { ok: true, session, message: "Seed admin access granted through Lumora API." };
  } catch {
    if (code === SEED_ADMIN_CODE) {
      state.adminApiStatus = "preview";
      return { ok: true, session: localAdminSession(), message: "Seed admin preview unlocked. API verification is offline." };
    }
    return { ok: false, message: "Seed admin code was not accepted." };
  }
}

function unlockAdmin(session, route = "admin") {
  state.adminUnlocked = true;
  state.adminSession = session || localAdminSession();
  saveState();
  routeTo(route);
}

function routeTo(route, params = {}) {
  if (!ROUTES.includes(route)) route = "welcome";
  if (route === "admin-preview") {
    state.adminUnlocked = true;
    route = "admin";
  }
  state.route = route;
  if (params.chatId) state.activeChatId = params.chatId;
  state.drawerOpen = false;
  state.sheet = null;
  saveState();
  if (location.hash.slice(1) !== route) {
    history.pushState(null, "", `#${route}`);
  }
  render();
}

function currentChat() {
  return state.chats.find(chat => chat.id === state.activeChatId) || null;
}

function modeById(id = state.activeMode) {
  return MODES.find(mode => mode.id === id) || MODES[0];
}

function createChat(title = "New conversation", routeAfterCreate = true) {
  const id = `chat-${Date.now()}`;
  state.chats.unshift({ id, title, mode: state.activeMode, messages: [] });
  state.activeChatId = id;
  if (routeAfterCreate) routeTo("chat", { chatId: id });
  return state.chats[0];
}

function startFreshChat() {
  state.activeChatId = null;
  routeTo("fresh");
}

function setMode(modeId) {
  state.activeMode = modeId;
  state.drawerOpen = false;
  state.sheet = null;
  saveState();
  routeTo("fresh");
  setTimeout(() => showToast(`${modeById(modeId).label} ready.`), 40);
}

function selectRouteForPrompt(text) {
  const lower = text.toLowerCase();
  if (lower.includes("translate")) return "AfriNLLB -> NLLB fallback -> Tone Dial";
  if (lower.includes("voice") || lower.includes("speak")) return "MMS -> Simba-H eval -> Lumora tone layer";
  if (lower.includes("market") || lower.includes("customer")) return "AfroXLMR-Social -> General LLM -> Market Mode";
  return "InkubaLM/AfroXLMR -> General LLM -> Lumora tone layer";
}

function adminMetricValue(path, fallback) {
  const value = path.split(".").reduce((current, key) => current && current[key], state.adminMetrics);
  return value === undefined || value === null ? fallback : value;
}

function adminAuditEvents() {
  const session = state.adminSession || localAdminSession();
  if (state.adminAudit && Array.isArray(state.adminAudit.events) && state.adminAudit.events.length) return state.adminAudit.events;
  return session.audit || [];
}

function adminAuditSummaryValue(path, fallback) {
  const value = path.split(".").reduce((current, key) => current && current[key], state.adminAudit);
  return value === undefined || value === null ? fallback : value;
}

function adminPlatformData() {
  return state.adminPlatform || {
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
      { key: "force_mobile_update", surface: "Mobile", state: "armed", rollout: 0, owner: "Platform" }
    ],
    guardrails: { maintenanceMode: false, rollbackReady: true, forceUpdateArmed: true, killSwitches: 1 }
  };
}

function adminInfrastructureData() {
  return state.adminInfrastructure || {
    summary: { uptime: "99.98%", incidents: 0, gpuUtilization: "61%", queuePressure: "Normal", deployHealth: "Stable" },
    services: [
      { service: "API gateway", status: "Healthy", latency: "82ms p95", owner: "Platform" },
      { service: "Model router", status: "Watch", latency: "428ms avg", owner: "AI Ops" },
      { service: "Vector database", status: "Healthy", latency: "34ms p95", owner: "Knowledge Ops" },
      { service: "Realtime chat sync", status: "Healthy", latency: "61ms p95", owner: "Web/Mobile" },
      { service: "Billing webhooks", status: "Retry watch", latency: "42 queued", owner: "Revenue Ops" }
    ],
    clusters: [
      { cluster: "GPU inference A", region: "West Africa edge", load: "61%", status: "Healthy" },
      { cluster: "GPU inference B", region: "EU fallback", load: "38%", status: "Standby" },
      { cluster: "Embedding workers", region: "Africa/EU", load: "74%", status: "Busy" },
      { cluster: "Batch jobs", region: "Global", load: "49%", status: "Normal" }
    ],
    queues: [
      { queue: "Model route requests", depth: 1280, oldest: "11s", status: "Normal" },
      { queue: "Embedding indexing", depth: 8120, oldest: "4m", status: "Busy" },
      { queue: "Webhook retries", depth: 42, oldest: "18m", status: "Watch" },
      { queue: "Audit log writes", depth: 0, oldest: "0s", status: "Healthy" }
    ],
    incidents: [
      { id: "REL-904", title: "iOS beta crash cluster", severity: "High", owner: "Mobile", status: "Contained" },
      { id: "OPS-221", title: "Speech latency watch", severity: "Medium", owner: "Voice Ops", status: "Mitigating" },
      { id: "OPS-222", title: "Webhook retry backlog", severity: "Medium", owner: "Platform", status: "Retrying" }
    ],
    guardrails: [
      "Maintain rollback-ready deployment artifacts for web, mobile, and API.",
      "Escalate when API errors exceed 1% for 10 minutes or model route p95 exceeds 900ms.",
      "Protect audit logging and billing events as durable, never-loss queues.",
      "Keep GPU fallback capacity ready for high-traffic language launches."
    ]
  };
}

function adminSecurityData() {
  return state.adminSecurity || {
    summary: { criticalThreats: 0, mfaCoverage: "96%", ssoOrgs: 14, auditIntegrity: "Verified", dataRequests: 9 },
    threats: [
      { signal: "Suspicious API behavior", count: 6, severity: "High", owner: "Security", status: "Investigating" },
      { signal: "High-risk sessions", count: 31, severity: "Medium", owner: "Trust", status: "Review" },
      { signal: "Failed admin login attempts", count: 12, severity: "Medium", owner: "Security", status: "Rate limited" },
      { signal: "PII redaction queue", count: 29, severity: "High", owner: "Privacy", status: "Active" }
    ],
    accessPosture: [
      { control: "MFA/passkeys", coverage: "96%", status: "Required", owner: "Security" },
      { control: "SSO", coverage: "14 orgs", status: "Enabled", owner: "Enterprise" },
      { control: "Device trust", coverage: "82%", status: "Beta", owner: "Security" },
      { control: "Admin session expiry", coverage: "60 min", status: "Enforced", owner: "Platform" }
    ],
    compliance: [
      { program: "SOC 2 readiness", status: "Designed", owner: "Security", next: "Evidence collection" },
      { program: "GDPR/data rights", status: "Privacy reviewed", owner: "Legal", next: "Automated workflow" },
      { program: "PCI payment boundary", status: "Tokenized", owner: "Finance", next: "Processor attestation" },
      { program: "Data residency", status: "Policy draft", owner: "Legal", next: "Region mapping" }
    ],
    dataRequests: [
      { request: "Data export", count: 9, owner: "Privacy", sla: "7 days" },
      { request: "Deletion request", count: 4, owner: "Privacy", sla: "30 days" },
      { request: "Legal hold", count: 2, owner: "Legal", sla: "Active" },
      { request: "Enterprise DPA review", count: 6, owner: "Legal", sla: "This week" }
    ],
    guardrails: [
      "Sensitive admin data must never appear in consumer profile or support views.",
      "Security events require immutable audit logs with actor, time, scope, and source.",
      "Production admin access requires SSO/MFA, device trust, scoped roles, and approval workflow.",
      "Privacy requests must be reviewed before exports, deletion, or legal holds."
    ]
  };
}

function adminReportsData() {
  return state.adminReports || {
    summary: { scheduledReports: 12, exportsToday: 48, boardPacks: 3, dataFreshness: "5 min", restrictedReports: 7 },
    reportPacks: [
      { pack: "Leadership daily pulse", audience: "Leadership", cadence: "Daily 08:00", owner: "Operations", status: "Ready" },
      { pack: "Investor board pack", audience: "Board", cadence: "Monthly", owner: "Finance", status: "Drafting" },
      { pack: "Model quality review", audience: "AI Ops", cadence: "Weekly", owner: "Model Ops", status: "Ready" },
      { pack: "Security and compliance brief", audience: "Seed Admin", cadence: "Weekly", owner: "Security", status: "Restricted" }
    ],
    exports: [
      { export: "Revenue summary", format: "CSV/PDF", scope: "Finance", lastRun: "18 min ago", status: "Complete" },
      { export: "Visitor funnel", format: "CSV", scope: "Growth", lastRun: "42 min ago", status: "Complete" },
      { export: "Audit log evidence", format: "JSON/PDF", scope: "Security", lastRun: "2 hrs ago", status: "Restricted" },
      { export: "Language quality backlog", format: "CSV", scope: "AI Ops", lastRun: "3 hrs ago", status: "Queued" }
    ],
    schedules: [
      { schedule: "Daily leadership email", destination: "Leadership inbox", cadence: "Weekdays", nextRun: "Tomorrow 08:00" },
      { schedule: "Finance month-close pack", destination: "Finance drive", cadence: "Monthly", nextRun: "Aug 31" },
      { schedule: "Security evidence archive", destination: "Compliance vault", cadence: "Weekly", nextRun: "Monday" },
      { schedule: "Model quality scorecard", destination: "AI Ops workspace", cadence: "Friday", nextRun: "Today 17:00" }
    ],
    datasets: [
      { dataset: "Admin metrics warehouse", source: "Metrics API", freshness: "5 min", owner: "Analytics" },
      { dataset: "Billing events", source: "Payment processor", freshness: "15 min", owner: "Finance" },
      { dataset: "Audit logs", source: "Admin API", freshness: "Realtime", owner: "Security" },
      { dataset: "Model routing logs", source: "Model router", freshness: "10 min", owner: "AI Ops" }
    ],
    guardrails: [
      "Exports must preserve seed-admin scope, report owner, destination, and audit event.",
      "Sensitive reports require watermarking, expiry, and restricted download history.",
      "Board and investor packs must separate simulated prototype metrics from production data.",
      "Privacy, payment, and security evidence exports require approval before sharing."
    ]
  };
}

function adminCommunicationsData() {
  return state.adminCommunications || {
    summary: { activeCampaigns: 8, alertsQueued: 12, deliveryRate: "98.7%", pushOptIn: "64%", incidentNotices: 3 },
    campaigns: [
      { campaign: "Welcome language passport", audience: "New users", channel: "Email + in-app", owner: "Growth", status: "Live" },
      { campaign: "Pro creator upgrade", audience: "High-usage Free users", channel: "In-app", owner: "Revenue", status: "Testing" },
      { campaign: "Teams onboarding", audience: "Enterprise admins", channel: "Email", owner: "Customer Success", status: "Ready" },
      { campaign: "Voice Circle beta", audience: "Mobile beta users", channel: "Push", owner: "Mobile", status: "Queued" }
    ],
    broadcasts: [
      { notice: "Model latency watch", surface: "Web/Mobile", severity: "Medium", audience: "Affected users", status: "Draft" },
      { notice: "Scheduled maintenance", surface: "API", severity: "Info", audience: "API customers", status: "Approved" },
      { notice: "Payment retry guidance", surface: "Billing", severity: "Medium", audience: "Failed payment users", status: "Live" },
      { notice: "Security posture update", surface: "Admin", severity: "High", audience: "Seed admins", status: "Restricted" }
    ],
    templates: [
      { template: "Welcome and language setup", channel: "Email", locale: "EN + localized", owner: "Growth" },
      { template: "Upgrade confirmation", channel: "Email/In-app", locale: "EN", owner: "Revenue" },
      { template: "Safety appeal received", channel: "Email", locale: "EN + FR", owner: "Trust" },
      { template: "Enterprise incident update", channel: "Email + webhook", locale: "EN", owner: "Support" }
    ],
    delivery: [
      { channel: "Email", sentToday: "42K", success: "99.2%", issue: "Normal" },
      { channel: "Push", sentToday: "18K", success: "97.8%", issue: "Android token cleanup" },
      { channel: "In-app", sentToday: "64K", success: "99.9%", issue: "Healthy" },
      { channel: "Webhooks", sentToday: "8.4K", success: "98.1%", issue: "42 retries" }
    ],
    guardrails: [
      "Sensitive notices require audience scoping, approval status, expiry, and audit event.",
      "Incident communications must distinguish confirmed facts from investigation updates.",
      "Marketing campaigns must respect opt-in, country rules, language preference, and plan context.",
      "Admin/security broadcasts must never be visible in the consumer profile or normal dashboard."
    ]
  };
}

function adminPaymentData() {
  return state.adminPayments || {
    plans: ADMIN_PAYMENTS,
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
}

function adminFinanceData() {
  return state.adminFinance || {
    summary: { mrr: "$184K", arr: "$2.2M", grossMargin: "74%", gpuToday: "$9.8K", savingsIdentified: "14%" },
    costCenters: [
      { center: "Model inference", spend: "$9.8K today", driver: "1.28M requests", owner: "AI Ops", status: "Optimize" },
      { center: "Vector storage", spend: "$2.1K today", driver: "1.9M chunks", owner: "Knowledge Ops", status: "Healthy" },
      { center: "Web/mobile infrastructure", spend: "$1.4K today", driver: "4.8K visitors", owner: "Platform", status: "Stable" },
      { center: "Support operations", spend: "$620 today", driver: "184 open tickets", owner: "Support", status: "Watch SLA" }
    ],
    forecast: [
      { month: "Aug 2026", revenue: "$184K MRR", cost: "$48K", margin: "74%", note: "Current run rate" },
      { month: "Sep 2026", revenue: "$214K MRR", cost: "$56K", margin: "73%", note: "Teams growth" },
      { month: "Oct 2026", revenue: "$252K MRR", cost: "$67K", margin: "73%", note: "Mobile launch lift" },
      { month: "Nov 2026", revenue: "$301K MRR", cost: "$81K", margin: "72%", note: "Enterprise ramp" }
    ],
    refunds: [
      { queue: "High-value refund review", count: 8, exposure: "$4.2K", owner: "Finance" },
      { queue: "Failed payment recovery", count: 31, exposure: "$11.4K", owner: "Revenue Ops" },
      { queue: "Tax/VAT export", count: 3, exposure: "Month close", owner: "Finance" },
      { queue: "Invoice exception review", count: 6, exposure: "$18.7K", owner: "CFO" }
    ],
    optimization: [
      { action: "Cache repeated translation routes", savings: "$3.1K/mo", owner: "AI Ops", status: "Ready" },
      { action: "Batch low-priority embeddings", savings: "$1.8K/mo", owner: "Knowledge Ops", status: "Testing" },
      { action: "Move beta traffic to lower-cost pool", savings: "$2.4K/mo", owner: "Platform", status: "Queued" },
      { action: "Negotiate enterprise storage tier", savings: "$5.6K/mo", owner: "Finance", status: "In progress" }
    ],
    controls: [
      "Track cost per request by model route, plan, language, and customer segment.",
      "Separate revenue reporting from operational spend and cloud/model cost.",
      "Alert leadership when gross margin drops below 70% or failed payment exposure rises.",
      "Require finance approval for refunds above threshold and enterprise invoice exceptions."
    ]
  };
}

function adminUserData() {
  return state.adminUsers || {
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
}

function adminModelData(readiness = {}) {
  return state.adminModels || {
    registry: MODEL_REGISTRY,
    health: MODEL_REGISTRY.map((model, index) => ({
      name: model.name,
      readiness: model.readiness,
      latencyMs: 260 + index * 28,
      successRate: index % 4 === 0 ? "98.6%" : "99.1%",
      status: model.readiness === "A" ? "Ready" : "Watch"
    })),
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
    readiness,
    summary: { modelSources: MODEL_REGISTRY.length, averageRouteMs: 428, successRate: "99.1%", fallbackChains: 4 }
  };
}

function adminSafetyData() {
  return state.adminSafety || {
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
}

function adminGrowthData() {
  return state.adminGrowth || {
    summary: { visitorsToday: 4812, newVisitors: 2184, returningVisitors: 2628, signupConversion: "12.4%", mobileWebShare: "38%" },
    funnel: ADMIN_FUNNELS,
    countries: ADMIN_COUNTRIES,
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
}

function adminAnalyticsData() {
  return state.adminAnalytics || {
    summary: { d30Retention: "68%", churn: "4.2%", activation: "78.2%", voiceUsage: "21%", savedWorkflows: "14.6K" },
    retention: [
      { cohort: "Week 1", users: "4,820", d7: "74%", d30: "68%", note: "Strong language passport completion" },
      { cohort: "Week 2", users: "5,104", d7: "71%", d30: "64%", note: "Mobile web lift" },
      { cohort: "Week 3", users: "4,612", d7: "69%", d30: "61%", note: "Creator mode adoption" },
      { cohort: "Week 4", users: "5,880", d7: "76%", d30: "Projected 70%", note: "New welcome flow" }
    ],
    featureUsage: [
      { feature: "AI Chat", usage: "72K chats today", adoption: "84%", trend: "+12%" },
      { feature: "Translate", usage: "18K tasks", adoption: "38%", trend: "+9%" },
      { feature: "Voice Circle", usage: "21% of users", adoption: "21%", trend: "+6%" },
      { feature: "Creator Studio", usage: "9.4K tasks", adoption: "18%", trend: "+14%" },
      { feature: "Market Mode", usage: "7.8K tasks", adoption: "16%", trend: "+11%" }
    ],
    languageAdoption: [
      { language: "Yoruba", users: "5,420", satisfaction: "94%", trend: "+16%" },
      { language: "Swahili", users: "3,880", satisfaction: "92%", trend: "+11%" },
      { language: "Hausa", users: "2,710", satisfaction: "90%", trend: "+13%" },
      { language: "Nigerian Pidgin", users: "2,240", satisfaction: "93%", trend: "+18%" },
      { language: "Zulu/Xhosa", users: "1,860", satisfaction: "88%", trend: "+8%" }
    ],
    churnSignals: [
      { signal: "No second chat after signup", users: 612, risk: "High", owner: "Growth" },
      { signal: "Language mismatch correction", users: 284, risk: "Medium", owner: "Language QA" },
      { signal: "Hit Free plan limit twice", users: 438, risk: "Upgrade opportunity", owner: "Revenue" },
      { signal: "Voice latency above 2s", users: 91, risk: "Medium", owner: "Voice Ops" }
    ],
    experiments: [
      { test: "Neon centered composer onboarding", segment: "New users", lift: "+8.4%", status: "Winner" },
      { test: "Language Passport prompt chips", segment: "Mobile", lift: "+5.1%", status: "Running" },
      { test: "Pro upgrade after third saved workflow", segment: "Creators", lift: "+3.7%", status: "Review" },
      { test: "Voice Circle first-run guide", segment: "Voice users", lift: "+6.2%", status: "Queued" }
    ]
  };
}

function adminAccessData() {
  return state.adminAccess || {
    summary: { roles: ADMIN_ROLES.length, auditEvents: 1904, criticalThreats: 0, ssoEnabledOrgs: 14, pendingApprovals: 7 },
    roles: ADMIN_ROLES,
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
}

function adminActionData() {
  return state.adminActions || {
    summary: { openActions: 12, highPriority: 4, blocked: 2, dueToday: 7, completedToday: 18 },
    incidents: [
      { id: "INC-2407", title: "iOS beta crash cluster", area: "Mobile", severity: "High", owner: "Mobile Team", status: "Investigating", eta: "1 hr" },
      { id: "INC-2408", title: "Speech model latency watch", area: "AI Ops", severity: "Medium", owner: "Voice Ops", status: "Mitigating", eta: "3 hrs" },
      { id: "INC-2409", title: "Failed payment retry spike", area: "Payments", severity: "Medium", owner: "Finance", status: "Queued", eta: "Today" },
      { id: "INC-2410", title: "Dialect correction backlog", area: "Language QA", severity: "High", owner: "Native reviewers", status: "Escalated", eta: "2 days" }
    ],
    decisions: [
      { decision: "Keep mobile force-update armed, not active", owner: "Platform", rationale: "Crash cluster is contained to beta users.", status: "Approved" },
      { decision: "Prioritize Yoruba, Swahili, Hausa quality reviews", owner: "Language QA", rationale: "Highest traffic and correction volume.", status: "In review" },
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
}

function adminApiData() {
  return state.adminApi || {
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
}

function adminKnowledgeData() {
  return state.adminKnowledge || {
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
}

function adminSupportData() {
  return state.adminSupport || {
    summary: { openTickets: 184, sla: "91%", csat: "4.6", escalations: 23, highRiskUsers: 31 },
    queues: [
      { queue: "Account access", count: 58, owner: "Support", sla: "93%", priority: "Today" },
      { queue: "Billing questions", count: 42, owner: "Revenue Support", sla: "89%", priority: "Today" },
      { queue: "Language quality reports", count: 37, owner: "Language QA", sla: "86%", priority: "High" },
      { queue: "Enterprise workspace help", count: 24, owner: "Enterprise Support", sla: "96%", priority: "High" }
    ],
    escalations: [
      { id: "ESC-1184", user: "EduBridge workspace", issue: "SSO setup blocked", owner: "Enterprise", status: "Engineering review" },
      { id: "ESC-1185", user: "Creator Desk", issue: "Webhook delivery confusion", owner: "Developer Support", status: "Waiting on customer" },
      { id: "ESC-1186", user: "Marketplace seller", issue: "Tone output felt too formal", owner: "Language QA", status: "Native review" },
      { id: "ESC-1187", user: "Plus subscriber", issue: "Payment retry after bank decline", owner: "Revenue Support", status: "Retry scheduled" }
    ],
    satisfaction: [
      { channel: "In-app support", volume: 104, csat: "4.7", trend: "+0.2" },
      { channel: "Email", volume: 48, csat: "4.4", trend: "flat" },
      { channel: "Enterprise success", volume: 18, csat: "4.8", trend: "+0.1" },
      { channel: "Developer support", volume: 14, csat: "4.5", trend: "+0.3" }
    ],
    macros: [
      { macro: "Language answer correction", use: "31%", owner: "Language QA", status: "Current" },
      { macro: "Plan and billing explanation", use: "24%", owner: "Revenue Support", status: "Review" },
      { macro: "API key safety guidance", use: "18%", owner: "Developer Support", status: "Current" },
      { macro: "Account data export request", use: "9%", owner: "Privacy", status: "Restricted" }
    ],
    boundaries: [
      "Support can view plan, language preference, and recent non-sensitive activity.",
      "Support cannot view full private chats, raw payment tokens, admin scopes, or security secrets.",
      "High-risk sessions must escalate to Trust/Security before any restrictive account action.",
      "Data export and deletion requests must route through privacy-reviewed workflows."
    ]
  };
}

function formatAdminTime(timestamp) {
  if (!timestamp) return "Not loaded";
  return new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function adminStatusLabel() {
  if (state.adminApiStatus === "connected") return "API connected";
  if (state.adminApiStatus === "loading") return "Connecting API";
  return "Preview fallback";
}

function adminLiveKpis() {
  return [
    { label: "Total users", value: adminMetricValue("users.total", "18.4K"), trend: "+18% month", tone: "good" },
    { label: "New visitors", value: adminMetricValue("users.newVisitorsToday", "2,184"), trend: adminMetricValue("users.signupConversion", "12.4% conversion"), tone: "gold" },
    { label: "Requests today", value: adminMetricValue("ai.requestsToday", "1.28M"), trend: `${adminMetricValue("ai.successRate", "99.1%")} success`, tone: "good" },
    { label: "Revenue", value: adminMetricValue("revenue.mrr", "$184K"), trend: `${adminMetricValue("revenue.arr", "$2.2M")} ARR`, tone: "gold" },
    { label: "API errors", value: adminMetricValue("platform.apiErrors", "0.8%"), trend: `${adminMetricValue("platform.webUptime", "99.98%")} web uptime`, tone: "warn" },
    { label: "Safety flags", value: adminMetricValue("safety.moderationFlags", "418"), trend: `${adminMetricValue("safety.appeals", "44")} appeals`, tone: "warn" },
    { label: "Audit events", value: adminMetricValue("access.auditEvents", adminAuditSummaryValue("summary.total", "1,904")), trend: `${adminMetricValue("access.activeAdminSessions", "1")} admin session`, tone: "gold" }
  ];
}

function auditRow(event) {
  const time = event.time ? formatAdminTime(Date.parse(event.time)) : "Now";
  return `<div class="table-row"><strong>${event.action}</strong><span>${event.area || "Admin"}</span><span>${event.actor || event.severity || time}</span></div>`;
}

function releaseRow(release) {
  return `<div class="table-row"><strong>${release.surface}</strong><span>${release.version} / ${release.channel}</span><span>${release.status} - ${release.rollout}%</span></div>`;
}

function flagRow(flag) {
  return `<div class="table-row"><strong>${flag.key}</strong><span>${flag.surface} / ${flag.owner}</span><span>${flag.state} - ${flag.rollout}%</span></div>`;
}

function infrastructureServiceRow(item) {
  return `<div class="table-row"><strong>${item.service}</strong><span>${item.latency}</span><span>${item.status}</span></div>`;
}

function infrastructureClusterRow(item) {
  return `<div class="table-row"><strong>${item.cluster}</strong><span>${item.region}</span><span>${item.load} / ${item.status}</span></div>`;
}

function infrastructureQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.depth} depth</span><span>${item.oldest} / ${item.status}</span></div>`;
}

function infrastructureIncidentRow(item) {
  return `<div class="table-row"><strong>${item.id}</strong><span>${item.title}</span><span>${item.severity} / ${item.status}</span></div>`;
}

function securityThreatRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.count} events</span><span>${item.severity} / ${item.status}</span><span>${item.owner}</span></div>`;
}

function accessPostureRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.coverage}</span><span>${item.status}</span><span>${item.owner}</span></div>`;
}

function complianceProgramRow(item) {
  return `<div class="table-row"><strong>${item.program}</strong><span>${item.status}</span><span>${item.owner}</span><span>${item.next}</span></div>`;
}

function dataRequestRow(item) {
  return `<div class="table-row"><strong>${item.request}</strong><span>${item.count} open</span><span>${item.owner}</span><span>${item.sla}</span></div>`;
}

function reportPackRow(item) {
  return `<div class="table-row"><strong>${item.pack}</strong><span>${item.audience}</span><span>${item.cadence}</span><span>${item.status}</span></div>`;
}

function exportRow(item) {
  return `<div class="table-row"><strong>${item.export}</strong><span>${item.format}</span><span>${item.scope}</span><span>${item.status}</span></div>`;
}

function scheduleRow(item) {
  return `<div class="table-row"><strong>${item.schedule}</strong><span>${item.destination}</span><span>${item.cadence}</span><span>${item.nextRun}</span></div>`;
}

function datasetRow(item) {
  return `<div class="table-row"><strong>${item.dataset}</strong><span>${item.source}</span><span>${item.freshness}</span><span>${item.owner}</span></div>`;
}

function campaignRow(item) {
  return `<div class="table-row"><strong>${item.campaign}</strong><span>${item.audience}</span><span>${item.channel}</span><span>${item.status}</span></div>`;
}

function broadcastRow(item) {
  return `<div class="table-row"><strong>${item.notice}</strong><span>${item.surface}</span><span>${item.severity} / ${item.audience}</span><span>${item.status}</span></div>`;
}

function templateRow(item) {
  return `<div class="table-row"><strong>${item.template}</strong><span>${item.channel}</span><span>${item.locale}</span><span>${item.owner}</span></div>`;
}

function deliveryRow(item) {
  return `<div class="table-row"><strong>${item.channel}</strong><span>${item.sentToday} sent</span><span>${item.success}</span><span>${item.issue}</span></div>`;
}

function paymentPlanRow(item) {
  return `<div class="table-row"><strong>${item.plan}</strong><span>${item.users}</span><span>${item.mrr}</span><span>${item.status}</span></div>`;
}

function paymentQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.owner} / ${item.priority}</span></div>`;
}

function invoiceRow(item) {
  return `<div class="table-row"><strong>${item.id}</strong><span>${item.account}</span><span>${item.amount} / ${item.status}</span></div>`;
}

function financeCostRow(item) {
  return `<div class="table-row"><strong>${item.center}</strong><span>${item.spend}</span><span>${item.driver}</span><span>${item.status}</span></div>`;
}

function financeForecastRow(item) {
  return `<div class="table-row"><strong>${item.month}</strong><span>${item.revenue}</span><span>${item.cost}</span><span>${item.margin}</span></div>`;
}

function financeRefundRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.exposure}</span></div>`;
}

function financeOptimizationRow(item) {
  return `<div class="table-row"><strong>${item.action}</strong><span>${item.savings}</span><span>${item.status}</span></div>`;
}

function userQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.owner} / ${item.status}</span></div>`;
}

function orgRow(item) {
  return `<div class="table-row"><strong>${item.name}</strong><span>${item.seats} seats / ${item.country}</span><span>${item.controls} / ${item.health}</span></div>`;
}

function orgControlRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.status}</span><span>${item.owner}</span></div>`;
}

function supportQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} tickets</span><span>${item.owner} / ${item.sla}</span></div>`;
}

function supportEscalationRow(item) {
  return `<div class="table-row"><strong>${item.id}</strong><span>${item.user}</span><span>${item.status}</span></div>`;
}

function supportSatisfactionRow(item) {
  return `<div class="table-row"><strong>${item.channel}</strong><span>${item.volume} cases</span><span>${item.csat} CSAT</span></div>`;
}

function supportMacroRow(item) {
  return `<div class="table-row"><strong>${item.macro}</strong><span>${item.use}</span><span>${item.status}</span></div>`;
}

function modelHealthRow(item) {
  return `<div class="table-row"><strong>${item.name}</strong><span>${item.readiness} / ${item.latencyMs}ms</span><span>${item.successRate} / ${item.status}</span></div>`;
}

function routePolicyRow(item) {
  return `<div class="table-row"><strong>${item.policy}</strong><span>${item.primary} -> ${item.fallback}</span><span>${item.status}</span></div>`;
}

function fallbackQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.owner} / ${item.priority}</span></div>`;
}

function safetyQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.owner} / ${item.priority}</span></div>`;
}

function countryRow(item) {
  return `<div class="table-row"><strong>${item.country}</strong><span>${item.users} users</span><span>${item.growth}</span></div>`;
}

function channelRow(item) {
  return `<div class="table-row"><strong>${item.channel}</strong><span>${item.visitors} visitors</span><span>${item.conversion} / ${item.note}</span></div>`;
}

function deviceRow(item) {
  return `<div class="table-row"><strong>${item.device}</strong><span>${item.share}</span><span>${item.trend}</span></div>`;
}

function retentionRow(item) {
  return `<div class="table-row"><strong>${item.cohort}</strong><span>${item.users} users</span><span>${item.d30}</span></div>`;
}

function featureUsageRow(item) {
  return `<div class="table-row"><strong>${item.feature}</strong><span>${item.usage}</span><span>${item.adoption} / ${item.trend}</span></div>`;
}

function languageAdoptionRow(item) {
  return `<div class="table-row"><strong>${item.language}</strong><span>${item.users}</span><span>${item.satisfaction} satisfaction</span></div>`;
}

function churnSignalRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.users} users</span><span>${item.risk}</span></div>`;
}

function experimentRow(item) {
  return `<div class="table-row"><strong>${item.test}</strong><span>${item.segment}</span><span>${item.lift} / ${item.status}</span></div>`;
}

function roleRow(item) {
  return `<div class="table-row"><strong>${item.role}</strong><span>${item.access}</span><span>${item.users} users</span><span>${item.approval}</span></div>`;
}

function approvalRow(item) {
  return `<div class="table-row"><strong>${item.request}</strong><span>${item.requester}</span><span>${item.owner} / ${item.status}</span></div>`;
}

function complianceRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.status}</span><span>${item.owner}</span></div>`;
}

function policySignalRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.count} reports</span><span>${item.owner} / ${item.trend}</span></div>`;
}

function generateReply(text) {
  const language = state.user.mainLanguage;
  const bridge = state.user.bridgeLanguage;
  const tone = state.user.tone;
  const route = selectRouteForPrompt(text);
  const mode = modeById();
  return {
    meta: `Lumora - ${mode.label} - ${tone} tone - ${language} + ${bridge}`,
    text: `I hear you. I would handle this as ${mode.label.toLowerCase()}, keeping ${language} natural and using ${bridge} only where it helps. For now this web build is using a local simulated response, but the planned model path is: ${route}.`,
    route
  };
}

async function callLumoraApi(text) {
  const response = await fetch(`${API_BASE_URL}/v1/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      language: state.user.mainLanguage,
      bridgeLanguage: state.user.bridgeLanguage,
      tone: state.user.tone,
      plan: state.user.plan,
      task: modeById().label
    })
  });
  if (!response.ok) throw new Error("Lumora API did not return a successful response.");
  return response.json();
}

async function sendMessage() {
  const input = document.querySelector("#composerInput");
  if (!input || !input.value.trim()) return;
  const text = input.value.trim();
  let chat = currentChat();
  if (!chat || state.route === "fresh") {
    chat = createChat(text.slice(0, 42), false);
    state.route = "chat";
  }
  chat.mode = state.activeMode;
  chat.messages.push({ role: "user", meta: `${state.user.mainLanguage} + ${state.user.bridgeLanguage} - ${modeById().label}`, text });
  input.value = "";
  let reply;
  try {
    const apiReply = await callLumoraApi(text);
    reply = {
      meta: apiReply.meta || `Lumora - ${modeById().label}`,
      text: apiReply.text,
      route: apiReply.route ? apiReply.route.chain.map(item => item.name).join(" -> ") : "Lumora API"
    };
  } catch {
    reply = generateReply(text);
    reply.meta = `${reply.meta} - local fallback`;
  }
  chat.messages.push({ role: "ai", meta: reply.meta, text: reply.text, route: reply.route });
  chat.title = text.slice(0, 42);
  state.usage.messagesToday += 1;
  saveState();
  if (location.hash.slice(1) !== "chat") history.pushState(null, "", "#chat");
  render();
  setTimeout(() => {
    const scroller = document.querySelector(".chat-stage");
    if (scroller) scroller.scrollTop = scroller.scrollHeight;
  }, 0);
}

function openSheet(sheet) {
  state.sheet = sheet;
  saveState();
  render();
}

function closeOverlays() {
  state.drawerOpen = false;
  state.sheet = null;
  saveState();
  render();
}

function updateUser(key, value) {
  state.user[key] = value;
  saveState();
  render();
}

function updateSetting(key, value) {
  state.settings[key] = value;
  saveState();
  render();
}

function signOut() {
  state.isSignedIn = false;
  state.sheet = null;
  state.drawerOpen = false;
  saveState();
  routeTo("welcome");
  setTimeout(() => showToast("Signed out of this local prototype."), 40);
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function appShell(content) {
  document.documentElement.dataset.theme = state.settings.theme;
  document.documentElement.style.setProperty("--font-scale", state.settings.fontScale);
  document.body.classList.toggle("sidebar-open", state.drawerOpen);
  document.body.classList.toggle("sheet-open", Boolean(state.sheet));
  return `${content}<div class="scrim" data-action="close"></div><div id="toast" class="toast"></div>${sheetTemplate()}`;
}

function brand(label = "Language intelligence") {
  return `<button class="brand" data-route="welcome"><span class="brand-mark">L</span><span>Lumora<small>${label}</small></span></button>`;
}

function welcomeView() {
  return appShell(`
    <main class="view welcome-view">
      <section class="welcome-shell">
        <section class="hero-panel">
          ${brand("African language AI")}
          <div class="hero-copy">
            <p class="eyebrow">African language intelligence</p>
            <h1 class="hero-title">Speak as you are.<span class="mobile-break"></span> Lumora understands.</h1>
            <p class="hero-lead">A calm, futuristic AI chat for African languages, dialects, tone, voice, and everyday context. Start simple, then open deeper tools only when you need them.</p>
            <div class="hero-actions">
              <button class="primary" data-action="guest-start">Continue to Lumora</button>
              <button class="secondary" data-route="auth">Create account</button>
            </div>
          </div>
          <div class="signal-grid">
            ${signal("Dialect-aware", "Country, city, bridge language, tone, and script preference.")}
            ${signal("Voice-first", "Speak naturally, translate, transcribe, and reply with confidence.")}
            ${signal("Tone Dial", "Respectful, street, teacher, business, market, and creator tone.")}
            ${signal("Model Router", "Hugging Face model registry prepared for African language routing.")}
          </div>
        </section>
        <aside class="dock-panel">
          <div class="mini-card">
            <div class="mini-top">${brand("Ready")}</div>
            <div class="prompt-preview" data-route="fresh">Ask in Yoruba, Pidgin, Swahili, Arabic, French, English, or mix naturally...</div>
            <div class="quick-grid">
              <button class="chip" data-action="guest-start">Chat</button>
              <button class="chip" data-route="plans">Plans</button>
              <button class="chip" data-route="auth">Profile</button>
            </div>
          </div>
          <div class="quick-grid">
            <button class="primary" data-action="guest-start">Continue to Lumora</button>
            <button class="secondary" data-route="auth">Create account</button>
            <button class="tertiary" data-route="plans">View plans</button>
          </div>
          <div class="map-grid">
            ${mapItem("Fresh Chat", "Centered first prompt before conversation starts.", "fresh")}
            ${mapItem("Active Chat", "Sidebar, language, tone, voice, corrections.", "chat")}
            ${mapItem("Sign Up", "Profile and Language Passport basics.", "auth")}
            ${mapItem("Dashboard", "Your plan, language passport, usage, and recent activity.", "dashboard")}
          </div>
        </aside>
      </section>
    </main>
  `);
}

function signal(title, text) {
  return `<div class="signal-card"><strong>${title}</strong><span>${text}</span></div>`;
}

function mapItem(title, text, route) {
  return `<button class="map-item" data-route="${route}"><strong>${title}</strong><span>${text}</span></button>`;
}

function sidebar() {
  const chat = currentChat();
  return `
    <aside class="sidebar">
      <div>
        <div class="drawer-head">
          ${brand("Web platform")}
          <button class="close-btn" data-action="close">x</button>
        </div>
        <div class="section-label">Workspace</div>
        <nav class="nav-list">
          <button class="feature-btn ${state.route === "fresh" ? "active" : ""}" data-action="new-chat">+ New chat</button>
          ${MODES.map(mode => `<button class="feature-btn ${state.activeMode === mode.id ? "active" : ""}" data-mode="${mode.id}"><strong>${mode.label}</strong><small>${mode.desc}</small></button>`).join("")}
        </nav>
        <div class="section-label">Account</div>
        <nav class="nav-list">
          <button class="feature-btn" data-sheet="language">Language and Tone</button>
          <button class="feature-btn" data-sheet="settings">Settings</button>
          <button class="feature-btn ${state.route === "dashboard" ? "active" : ""}" data-route="dashboard">Dashboard</button>
          <button class="feature-btn" data-route="plans">Premium Plans</button>
        </nav>
        <div class="section-label">Recents</div>
        <div class="recent-list">
          ${state.chats.map(item => `<button class="recent-btn ${chat && item.id === chat.id ? "active" : ""}" data-chat="${item.id}">${item.title}</button>`).join("")}
        </div>
      </div>
      <button class="profile-mini" data-sheet="profile">
        <span class="avatar">${initials(state.user.name)}</span>
        <span><strong>${state.isSignedIn ? state.user.name : "Guest profile"}</strong><small>${state.user.plan} plan - ${state.user.mainLanguage}</small></span>
      </button>
    </aside>
  `;
}

function chatChrome(stage, options = {}) {
  const showBottomComposer = options.showBottomComposer !== false;
  const mode = modeById();
  return appShell(`
    <main class="view chat-layout">
      ${sidebar()}
      <section class="main-pane">
        <header class="topbar">
          <div class="chat-thread-head">
            <button class="pill mobile-menu" data-action="drawer"><span class="hamburger"><span></span></span></button>
            <div><strong>Lumora</strong><small>${mode.label}</small></div>
          </div>
          <div class="top-actions">
            <button class="pill language" data-sheet="language">${state.user.mainLanguage} - ${state.user.bridgeLanguage}</button>
            <button class="pill gold hide-mobile" data-route="plans">Upgrade</button>
            <button class="pill" data-sheet="profile">${state.isSignedIn ? initials(state.user.name) : "Guest"}</button>
          </div>
        </header>
        <section class="chat-stage">${stage}</section>
        ${showBottomComposer ? composer() : ""}
      </section>
    </main>
  `);
}

function freshView() {
  const mode = modeById();
  return chatChrome(`
    <div class="fresh-center">
      <div class="fresh-inner">
        <p class="eyebrow">${mode.label}</p>
        <h1>${state.isSignedIn ? `Welcome back, ${state.user.name.split(" ")[0]}.` : "What should we shape"}<span class="mobile-break"></span> in your language today?</h1>
        ${composer(true)}
        <div class="mode-row">
          ${MODES.map(item => `<button class="mode-pill ${state.activeMode === item.id ? "active" : ""}" data-mode="${item.id}">${item.label}</button>`).join("")}
        </div>
        <div class="prompt-row">
          <button class="chip" data-prompt="Explain artificial intelligence in a respectful Yoruba and English mix." data-autosend="true">Explain in my dialect</button>
          <button class="chip" data-prompt="Translate this customer reply while keeping the tone natural." data-autosend="true">Translate with tone</button>
          <button class="chip" data-prompt="Write a WhatsApp market reply for a customer asking for discount." data-autosend="true">Write a market reply</button>
          <button class="chip" data-prompt="Teach me photosynthesis with local examples." data-autosend="true">Teach me simply</button>
        </div>
      </div>
    </div>
  `, { showBottomComposer: false });
}

function chatView() {
  const chat = currentChat();
  if (!chat || !chat.messages.length) return freshView();
  return chatChrome(`
    <div class="messages">
      ${chat.messages.map(messageTemplate).join("")}
    </div>
  `);
}

function messageTemplate(message) {
  const isUser = message.role === "user";
  return `
    <article class="message ${isUser ? "user" : "ai"}">
      <span class="avatar">${isUser ? "You" : "L"}</span>
      <div class="bubble ${isUser ? "user-bubble" : "ai-bubble"}">
        <p class="meta">${message.meta}</p>
        <p>${message.text}</p>
        ${!isUser && state.settings.showModelRoute ? `<p class="route-hint">Route: ${message.route || "language detection -> African model registry -> Lumora tone layer"}</p>` : ""}
        ${!isUser && state.settings.showModelRoute ? `<div class="message-tools"><button class="mini-action" data-sheet="models">Model route</button><button class="mini-action" data-sheet="correction">Correct tone</button></div>` : ""}
      </div>
    </article>
  `;
}

function composer(centered = false) {
  const mode = modeById();
  return `
    <footer class="composer-wrap ${centered ? "center-composer" : ""}">
      <section class="chat-composer">
        <button class="icon-btn" data-sheet="language">+</button>
        <textarea id="composerInput" class="composer-input" rows="1" placeholder="${mode.prompt}"></textarea>
        <button class="icon-btn voice-btn" data-action="voice">V</button>
        <button class="send-btn" data-action="send">^</button>
      </section>
    </footer>
  `;
}

function authView() {
  const isLogin = state.authMode === "login";
  return appShell(`
    <main class="view auth-view">
      <section class="auth-shell">
        <div class="auth-story">
          ${brand(isLogin ? "Welcome back" : "Profile setup")}
          <div>
            <p class="eyebrow">Language Passport</p>
            <h1>${isLogin ? "Return to your language workspace." : "Your AI should know how you speak."}</h1>
            <p class="hero-lead">${isLogin ? "Sign in to continue your conversations, language profile, plan, and saved preferences." : "Create a profile with country, city, main language, bridge language, tone, and access preferences. This becomes the foundation for future Android and iOS personalization."}</p>
          </div>
          <button class="tertiary" data-route="welcome">Back to welcome</button>
        </div>
        <form class="auth-form" data-action="${isLogin ? "login" : "save-profile"}">
          <div class="auth-tabs">
            <button type="button" class="${!isLogin ? "active" : ""}" data-auth-mode="signup">Sign up</button>
            <button type="button" class="${isLogin ? "active" : ""}" data-auth-mode="login">Log in</button>
          </div>
          <div class="form-grid">
            ${isLogin ? "" : field("name", "Full name", state.user.name)}
            ${field("email", "Email", state.user.email, "email")}
            ${isLogin ? "" : field("country", "Country", state.user.country)}
            ${isLogin ? "" : field("city", "City", state.user.city)}
            ${isLogin ? "" : selectField("mainLanguage", "Main language", state.user.mainLanguage, LANGUAGES)}
            ${isLogin ? "" : selectField("bridgeLanguage", "Bridge language", state.user.bridgeLanguage, LANGUAGES)}
            ${isLogin ? "" : selectField("tone", "Default tone", state.user.tone, TONES)}
            ${field("password", "Password", "", "password")}
          </div>
          <button class="primary" type="submit">${isLogin ? "Log in to Lumora" : "Create Lumora account"}</button>
          <button class="secondary" type="button" data-action="guest-start">Continue as guest</button>
        </form>
      </section>
    </main>
  `);
}

function field(name, label, value, type = "text") {
  return `<label class="setting-field"><span>${label}</span><input class="input" name="${name}" type="${type}" value="${value || ""}" placeholder="${label}"></label>`;
}

function selectField(name, label, value, options) {
  return `<label class="setting-field"><span>${label}</span><select class="select" name="${name}">${options.map(option => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}</select></label>`;
}

function plansView() {
  return appShell(`
    <main class="view plans-view">
      <section class="plans-shell">
        <header class="plans-top">${brand("Plans")}<button class="pill" data-route="fresh">Chat</button></header>
        <div class="plans-hero">
          <p class="eyebrow">Premium access</p>
          <h1>Choose the depth of language intelligence you need.</h1>
          <p class="hero-lead">Start free, then upgrade when you need more messages, voice, local knowledge packs, creator tools, or team governance.</p>
        </div>
        <div class="plans-grid">
          ${PLANS.map(planTemplate).join("")}
        </div>
      </section>
    </main>
  `);
}

function planTemplate(plan) {
  const price = plan.price.includes("/") ? plan.price.replace("/", "<span>/") + "</span>" : plan.price;
  const isCurrent = state.user.plan === plan.name;
  return `
    <article class="plan-card ${plan.featured ? "featured" : ""} ${isCurrent ? "current" : ""}">
      <span class="tag">${plan.tag}</span>
      <h2>${plan.name}</h2>
      <div class="price">${price}</div>
      <p class="hero-lead">${plan.desc}</p>
      <ul>${plan.features.map(item => `<li>${item}</li>`).join("")}</ul>
      <button class="cta" data-plan="${plan.name}">${isCurrent ? "Current plan" : plan.name === "Teams" ? "Request Teams access" : `Choose ${plan.name}`}</button>
    </article>
  `;
}

function dashboardView() {
  const chat = currentChat() || state.chats[0];
  const planLimit = PLAN_LIMITS[state.user.plan] || PLAN_LIMITS.Free;
  const usagePercent = Math.min(100, Math.round((state.usage.messagesToday / planLimit) * 100));
  return chatChrome(`
    <div class="messages">
      <section class="admin-card wide">
        <p class="eyebrow">Personal Dashboard</p>
        <h1>${state.isSignedIn ? state.user.name.split(" ")[0] : "Guest"}, your Lumora workspace is ready.</h1>
        <p class="hero-lead">This dashboard contains safe user-facing information only: plan, usage, language passport, saved chats, and preferences.</p>
        <div class="dashboard-actions">
          <button class="primary" data-action="new-chat">Start new chat</button>
          <button class="secondary" data-route="plans">Manage plan</button>
        </div>
      </section>
      <div class="admin-grid user-dashboard-grid">
        ${metric("Current plan", state.user.plan)}
        ${metric("Messages today", `${state.usage.messagesToday}/${planLimit}`)}
        ${metric("Voice minutes", `${state.usage.voiceMinutes}`)}
        ${metric("Corrections", state.usage.corrections)}
        <section class="admin-card wide">
          <h2>Plan usage</h2>
          <div class="usage-bar"><span style="width:${usagePercent}%"></span></div>
          <p class="hero-lead">${usagePercent}% of today's ${state.user.plan} message allowance used in this prototype.</p>
        </section>
        ${metric("Main language", state.user.mainLanguage)}
        ${metric("Bridge language", state.user.bridgeLanguage)}
        ${metric("Default tone", state.user.tone)}
        ${metric("Memory", state.settings.memoryEnabled ? "On" : "Off")}
        <section class="admin-card wide">
          <h2>Language Passport</h2>
          <div class="table">
            <div class="table-row"><strong>Name</strong><span>${state.user.name}</span><span>Profile</span></div>
            <div class="table-row"><strong>Location</strong><span>${state.user.city}, ${state.user.country}</span><span>Context</span></div>
            <div class="table-row"><strong>Preference</strong><span>${state.user.mainLanguage} + ${state.user.bridgeLanguage}</span><span>${state.user.tone}</span></div>
          </div>
          <button class="secondary compact-action" data-route="auth">Edit Language Passport</button>
        </section>
        <section class="admin-card wide">
          <h2>Recent activity</h2>
          <div class="table">
            <div class="table-row"><strong>Last chat</strong><span>${chat ? chat.title : "No chat yet"}</span><span>Chat</span></div>
            <div class="table-row"><strong>Saved conversations</strong><span>${state.chats.length}</span><span>Local</span></div>
            <div class="table-row"><strong>Model route display</strong><span>${state.settings.showModelRoute ? "Enabled" : "Hidden"}</span><span>Setting</span></div>
          </div>
        </section>
      </div>
    </div>
  `);
}

function adminView() {
  if (!state.adminUnlocked) return adminGateView();
  loadAdminMetrics();
  loadAdminAudit();
  if (state.adminSection === "platform") loadAdminPlatform();
  if (state.adminSection === "payments") loadAdminPayments();
  if (state.adminSection === "finance") loadAdminFinance();
  if (state.adminSection === "users") loadAdminUsers();
  if (state.adminSection === "support") loadAdminSupport();
  if (state.adminSection === "models") loadAdminModels();
  if (state.adminSection === "safety") loadAdminSafety();
  if (state.adminSection === "security") loadAdminSecurity();
  if (state.adminSection === "infrastructure") loadAdminInfrastructure();
  if (state.adminSection === "growth") loadAdminGrowth();
  if (state.adminSection === "analytics") loadAdminAnalytics();
  if (state.adminSection === "reports") loadAdminReports();
  if (state.adminSection === "communications") loadAdminCommunications();
  if (state.adminSection === "access") loadAdminAccess();
  if (state.adminSection === "operations") loadAdminActions();
  if (state.adminSection === "api") loadAdminApi();
  if (state.adminSection === "knowledge") loadAdminKnowledge();
  const readiness = MODEL_REGISTRY.reduce((acc, item) => {
    acc[item.readiness] = (acc[item.readiness] || 0) + 1;
    return acc;
  }, {});
  const active = ADMIN_SECTIONS.find(section => section.id === state.adminSection) || ADMIN_SECTIONS[0];
  const status = adminStatusLabel();
  return appShell(`
    <main class="view admin-layout enterprise-admin">
      ${adminSidebar()}
      <section class="admin-main">
        <header class="admin-top">
          <div>
            <p class="eyebrow">Seed Admin Console / ${active.label}</p>
            <h1>${active.desc}</h1>
          </div>
          <div class="top-actions">
            <span class="admin-session-pill">${state.adminSession ? state.adminSession.role : "No session"}</span>
            <button class="pill mobile-menu" data-action="drawer"><span class="hamburger"><span></span></span></button>
            <button class="pill" data-route="fresh">Consumer app</button>
            <button class="pill gold" data-action="lock-admin">Lock admin</button>
          </div>
        </header>
        <section class="admin-preview-banner ${state.adminApiStatus === "connected" ? "connected" : ""}">
          <strong>${status}</strong>
          <span>${state.adminApiStatus === "connected" ? `Metrics loaded from Lumora API at ${formatAdminTime(state.adminMetricsLoadedAt)}.` : "Using non-production preview metrics until the local API is running. Production access will require seed-admin approval, SSO/MFA, RBAC/ABAC, and audit logging."}</span>
          <button class="mini-action" data-action="refresh-admin">Refresh</button>
        </section>
        <nav class="admin-tabs">
          ${ADMIN_SECTIONS.map(section => `<button class="${active.id === section.id ? "active" : ""}" data-admin-section="${section.id}">${section.label}</button>`).join("")}
        </nav>
        ${adminSectionView(active.id, readiness)}
      </section>
    </main>
  `);
}

function adminGateView() {
  return appShell(`
    <main class="view auth-view">
      <section class="auth-shell admin-gate">
        <div class="auth-story">
          ${brand("Restricted console")}
          <div>
            <p class="eyebrow">Seed admin only</p>
            <h1>Enterprise Admin Console is separate from user accounts.</h1>
            <p class="hero-lead">Access must be granted by a seed admin. Limited roles can later be assigned for leadership, developers, finance, support, security, moderation, and operations.</p>
          </div>
          <button class="tertiary" data-route="fresh">Back to Lumora</button>
        </div>
        <form class="auth-form" data-action="seed-admin">
          <label class="setting-field"><span>Seed admin access code</span><input class="input" name="seedCode" type="password" placeholder="Enter seed admin code"></label>
          <button class="primary" type="submit">Unlock Admin Console</button>
          <button class="secondary" type="button" data-action="preview-admin">Preview Admin Console</button>
          <p class="hero-lead">Prototype seed: request from the seed admin. Production will use SSO, MFA, passkeys, RBAC, ABAC, audit logs, and approval workflows.</p>
        </form>
      </section>
    </main>
  `);
}

function adminSidebar() {
  const session = state.adminSession || localAdminSession();
  return `
    <aside class="sidebar">
      <div>
        <div class="drawer-head">
          ${brand("Admin Console")}
          <button class="close-btn" data-action="lock-admin">x</button>
        </div>
        <div class="section-label">Enterprise control</div>
        <nav class="nav-list">
          ${ADMIN_SECTIONS.map(section => `<button class="feature-btn ${state.adminSection === section.id ? "active" : ""}" data-admin-section="${section.id}"><strong>${section.label}</strong><small>${section.desc}</small></button>`).join("")}
        </nav>
        <div class="section-label">Priority queues</div>
        <nav class="nav-list">
          ${ADMIN_ALERTS.slice(0, 3).map(alert => `<button class="recent-btn" data-admin-section="${alert.area === "Billing" ? "payments" : alert.area === "Mobile" ? "platform" : "models"}">${alert.title}</button>`).join("")}
        </nav>
      </div>
      <button class="profile-mini">
        <span class="avatar">SA</span>
        <span><strong>${session.operator || "Seed Admin"}</strong><small>${session.role || "Full platform access"} - ${adminStatusLabel()}</small></span>
      </button>
    </aside>
  `;
}

function adminSectionView(section, readiness) {
  const sections = {
    overview: () => adminOverview(readiness),
    growth: adminGrowth,
    analytics: adminAnalytics,
    reports: adminReports,
    communications: adminCommunications,
    payments: adminPayments,
    finance: adminFinance,
    users: adminUsers,
    support: adminSupport,
    models: () => adminModels(readiness),
    knowledge: adminKnowledge,
    safety: adminSafety,
    security: adminSecurity,
    platform: adminPlatform,
    infrastructure: adminInfrastructure,
    api: adminApiManagement,
    access: adminAccess,
    operations: adminOperations
  };
  return (sections[section] || sections.overview)();
}

function adminOverview(readiness) {
  const audit = adminAuditEvents().slice(0, 5);
  return `
    <div class="admin-grid">
      ${adminLiveKpis().map(adminMetric).join("")}
      <section class="admin-card wide">
        <h2>Live command pulse</h2>
        <div class="admin-chart">
          ${[42, 58, 51, 72, 66, 84, 79, 92, 88, 96, 91, 99].map((height, index) => `<span style="height:${height}%"><em>${index + 1}</em></span>`).join("")}
        </div>
        <p class="hero-lead">Simulated 12-hour view across visitors, chats, requests, upgrades, latency, and incidents.</p>
      </section>
      <section class="admin-card wide">
        <h2>Critical attention</h2>
        <div class="table">
          ${ADMIN_ALERTS.map(alertRow).join("")}
        </div>
        <button class="mini-action action-link" data-admin-section="operations">Open operations action center</button>
      </section>
      <section class="admin-card wide">
        <h2>Admin audit pulse</h2>
        <div class="table">
          ${audit.map(auditRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Model readiness</h2>
        <div class="model-list compact-metrics">
          ${metric("A readiness", readiness.A || 0)}
          ${metric("B readiness", readiness.B || 0)}
          ${metric("Model sources", MODEL_REGISTRY.length)}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Operating principles</h2>
        <div class="admin-checklist">
          <span>Admin access is seed-admin issued only.</span>
          <span>Normal users never see sensitive operations.</span>
          <span>Production requires MFA, SSO, RBAC, audit logs, and approval workflows.</span>
        </div>
      </section>
    </div>
  `;
}

function adminGrowth() {
  const growth = adminGrowthData();
  const summary = growth.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Visitors today", summary.visitorsToday || "4,812")}
      ${metric("New visitors", summary.newVisitors || adminMetricValue("users.newVisitorsToday", "2,184"))}
      ${metric("Signup conversion", summary.signupConversion || adminMetricValue("users.signupConversion", "12.4%"))}
      ${metric("Mobile web share", summary.mobileWebShare || "38%")}
      <section class="admin-card wide">
        <h2>Conversion funnel</h2>
        <div class="funnel-list">${growth.funnel.map(funnelBar).join("")}</div>
      </section>
      <section class="admin-card wide">
        <h2>Country traction</h2>
        <div class="table">${growth.countries.map(countryRow).join("")}</div>
      </section>
      <section class="admin-card wide">
        <h2>Acquisition channels</h2>
        <div class="table">${growth.channels.map(channelRow).join("")}</div>
      </section>
      <section class="admin-card wide">
        <h2>Device and surface mix</h2>
        <div class="table">${growth.devices.map(deviceRow).join("")}</div>
      </section>
      <section class="admin-card full-admin">
        <h2>Language adoption by market</h2>
        <div class="admin-module-grid">${growth.countries.map(country => `<article class="admin-module"><h3>${country.country}</h3><p>${country.languages}</p><div class="module-metrics"><span>${country.users}</span><span>${country.growth}</span></div></article>`).join("")}</div>
      </section>
    </div>
  `;
}

function adminAnalytics() {
  const analytics = adminAnalyticsData();
  const summary = analytics.summary || {};
  return `
    <div class="admin-grid">
      ${metric("D30 retention", summary.d30Retention || "68%")}
      ${metric("Churn", summary.churn || "4.2%")}
      ${metric("Activation", summary.activation || "78.2%")}
      ${metric("Voice usage", summary.voiceUsage || "21%")}
      <section class="admin-card wide">
        <h2>Retention cohorts</h2>
        <div class="table">
          ${analytics.retention.map(retentionRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Feature usage</h2>
        <div class="table">
          ${analytics.featureUsage.map(featureUsageRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Language adoption</h2>
        <div class="table">
          ${analytics.languageAdoption.map(languageAdoptionRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Churn signals</h2>
        <div class="table">
          ${analytics.churnSignals.map(churnSignalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Experiment board</h2>
        <div class="table">
          ${analytics.experiments.map(experimentRow).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminPayments() {
  const payments = adminPaymentData();
  const mix = payments.revenueMix || {};
  return `
    <div class="admin-grid">
      ${metric("MRR", adminMetricValue("revenue.mrr", "$184K"))}
      ${metric("ARR", adminMetricValue("revenue.arr", "$2.2M"))}
      ${metric("Upgrades today", adminMetricValue("revenue.upgradesToday", "842"))}
      ${metric("Failed payments", adminMetricValue("revenue.failedPayments", "31"))}
      <section class="admin-card full-admin">
        <h2>Plan performance</h2>
        <div class="table admin-table-4">
          ${payments.plans.map(paymentPlanRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Billing queues</h2>
        <div class="table">
          ${payments.queues.map(paymentQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Invoices</h2>
        <div class="table">
          ${payments.invoices.map(invoiceRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Revenue mix</h2>
        <div class="admin-donut"><span>${mix.proTeamsPercent || 73}%</span></div>
        <p class="hero-lead">Pro and Teams carry ${mix.proTeamsPercent || 73}% of recurring revenue. Consumer plans carry ${mix.consumerPercent || 27}%. Churn risk is ${mix.churnRisk || "4.2%"}.</p>
      </section>
      <section class="admin-card wide">
        <h2>Finance actions</h2>
        <div class="admin-checklist"><span>Retry failed payments with smart dunning.</span><span>Review refund requests over $250.</span><span>Prepare Teams invoices and tax exports.</span><span>Projected dunning recovery: ${mix.dunningRecovery || "$11.4K"}</span></div>
      </section>
    </div>
  `;
}

function adminFinance() {
  const finance = adminFinanceData();
  const summary = finance.summary || {};
  return `
    <div class="admin-grid">
      ${metric("MRR", summary.mrr || adminMetricValue("revenue.mrr", "$184K"))}
      ${metric("ARR", summary.arr || adminMetricValue("revenue.arr", "$2.2M"))}
      ${metric("Gross margin", summary.grossMargin || "74%")}
      ${metric("GPU today", summary.gpuToday || "$9.8K")}
      <section class="admin-card full-admin">
        <h2>Cost centers</h2>
        <div class="table admin-table-4">
          ${finance.costCenters.map(financeCostRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Forecast and margin</h2>
        <div class="table admin-table-4">
          ${finance.forecast.map(financeForecastRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Refund and exposure queues</h2>
        <div class="table">
          ${finance.refunds.map(financeRefundRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Optimization actions</h2>
        <div class="table">
          ${finance.optimization.map(financeOptimizationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Finance operating controls</h2>
        <div class="admin-checklist">
          ${finance.controls.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminUsers() {
  const users = adminUserData();
  const summary = users.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Consumer users", summary.consumers || adminMetricValue("users.total", "18.4K"))}
      ${metric("Organizations", summary.organizations || "47")}
      ${metric("Enterprise seats", summary.enterpriseSeats || "1,280")}
      ${metric("Risk reviews", summary.riskReviews || "92")}
      <section class="admin-card wide">
        <h2>User operations</h2>
        <div class="table">
          ${users.accountQueues.map(userQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Organization controls</h2>
        <div class="table">
          ${users.controls.map(orgControlRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Enterprise organizations</h2>
        <div class="table admin-table-4">
          ${users.organizations.map(orgRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Account governance</h2>
        <div class="admin-checklist"><span>Support can see non-sensitive user context only.</span><span>Data export requests must remain privacy-reviewed.</span><span>Suspensions require trust-owner approval.</span><span>Enterprise domain claims require organization verification.</span></div>
      </section>
    </div>
  `;
}

function adminSupport() {
  const support = adminSupportData();
  const summary = support.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Open tickets", summary.openTickets || "184")}
      ${metric("SLA", summary.sla || "91%")}
      ${metric("CSAT", summary.csat || "4.6")}
      ${metric("Escalations", summary.escalations || "23")}
      <section class="admin-card wide">
        <h2>Support queues</h2>
        <div class="table">
          ${support.queues.map(supportQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Escalations</h2>
        <div class="table">
          ${support.escalations.map(supportEscalationRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Satisfaction by channel</h2>
        <div class="table">
          ${support.satisfaction.map(supportSatisfactionRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Reply macros</h2>
        <div class="table">
          ${support.macros.map(supportMacroRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Support data boundaries</h2>
        <div class="admin-checklist">
          ${support.boundaries.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminModels(readiness) {
  const models = adminModelData(readiness);
  const summary = models.summary || {};
  const readinessSummary = models.readiness || readiness;
  return `
    <div class="admin-grid">
      ${metric("Model sources", summary.modelSources || adminMetricValue("ai.modelSources", MODEL_REGISTRY.length))}
      ${metric("Avg route", `${summary.averageRouteMs || adminMetricValue("ai.averageRouteMs", 428)}ms`)}
      ${metric("Success rate", summary.successRate || adminMetricValue("ai.successRate", "99.1%"))}
      ${metric("Fallback chains", summary.fallbackChains || "4")}
      <section class="admin-card full-admin">
        <h2>Model health</h2>
        <div class="table admin-table-4">
          ${models.health.map(modelHealthRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Hugging Face model registry</h2>
        <div class="table admin-table-4">
          ${models.registry.map(model => `<div class="table-row"><strong>${model.name}</strong><span>${model.readiness}</span><span>${model.languages}</span><span>${Array.isArray(model.tasks) ? model.tasks.join(", ") : model.task}</span></div>`).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Routing policy</h2>
        <div class="table">
          ${models.routePolicies.map(routePolicyRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Fallback queues</h2>
        <div class="table">
          ${models.fallbackQueues.map(fallbackQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Readiness snapshot</h2>
        <div class="model-list compact-metrics">${metric("A readiness", readinessSummary.A || 0)}${metric("B readiness", readinessSummary.B || 0)}${metric("Priority launch", "Nigeria")}</div>
      </section>
      <section class="admin-card wide">
        <h2>AI Ops principles</h2>
        <div class="admin-checklist"><span>Detect language, dialect, task, and tone.</span><span>Route by readiness, license, latency, cost, and safety.</span><span>Fallback to NLLB/MMS/general LLM where local model quality is low.</span><span>Send tone corrections into native-speaker review queues.</span></div>
      </section>
    </div>
  `;
}

function adminKnowledge() {
  const knowledge = adminKnowledgeData();
  const summary = knowledge.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Collections", summary.collections || "36")}
      ${metric("Indexed chunks", summary.chunks || "1.9M")}
      ${metric("Indexing jobs", summary.indexingJobs || "8")}
      ${metric("Stale sources", summary.staleSources || "12")}
      <section class="admin-card full-admin">
        <h2>RAG collections</h2>
        <div class="table admin-table-4">
          ${knowledge.collections.map(knowledgeCollectionRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Knowledge sources</h2>
        <div class="table">
          ${knowledge.sources.map(knowledgeSourceRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Indexing pipeline</h2>
        <div class="table">
          ${knowledge.indexingJobs.map(indexingJobRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Permissions and privacy</h2>
        <div class="table">
          ${knowledge.permissions.map(knowledgePermissionRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Retrieval quality queues</h2>
        <div class="table">
          ${knowledge.qualityQueues.map(knowledgeQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>RAG operating controls</h2>
        <div class="admin-checklist">
          <span>Every knowledge collection needs source ownership, license status, tenant scope, and freshness SLA.</span>
          <span>Enterprise workspaces must never share embeddings, files, memories, or retrieval logs across tenants.</span>
          <span>Low-confidence retrieval should fall back to model reasoning with clear uncertainty instead of guessing.</span>
          <span>Language-specific packs require native-review loops before broad release.</span>
        </div>
      </section>
    </div>
  `;
}

function adminSafety() {
  const safety = adminSafetyData();
  const summary = safety.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Moderation flags", summary.moderationFlags || adminMetricValue("safety.moderationFlags", "418"))}
      ${metric("Appeals", summary.appeals || adminMetricValue("safety.appeals", "44"))}
      ${metric("Corrections", summary.corrections || "1,284")}
      ${metric("Pending corrections", summary.correctionsPending || adminMetricValue("safety.correctionsPending", "312"))}
      <section class="admin-card wide">
        <h2>Safety queues</h2>
        <div class="table">
          ${safety.moderationQueues.map(safetyQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Language quality loop</h2>
        <div class="table">
          ${safety.languageQuality.map(safetyQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Policy signals</h2>
        <div class="table">
          ${safety.policySignals.map(policySignalRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Safety guardrails</h2>
        <div class="admin-checklist">
          ${safety.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminSecurity() {
  const security = adminSecurityData();
  const summary = security.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Critical threats", summary.criticalThreats ?? "0")}
      ${metric("MFA coverage", summary.mfaCoverage || "96%")}
      ${metric("SSO orgs", summary.ssoOrgs || "14")}
      ${metric("Audit integrity", summary.auditIntegrity || "Verified")}
      <section class="admin-card full-admin">
        <h2>Threat signals</h2>
        <div class="table admin-table-4">
          ${security.threats.map(securityThreatRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Access posture</h2>
        <div class="table admin-table-4">
          ${security.accessPosture.map(accessPostureRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Compliance programs</h2>
        <div class="table admin-table-4">
          ${security.compliance.map(complianceProgramRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Privacy and legal requests</h2>
        <div class="table admin-table-4">
          ${security.dataRequests.map(dataRequestRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Security guardrails</h2>
        <div class="admin-checklist">
          ${security.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminReports() {
  const reports = adminReportsData();
  const summary = reports.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Scheduled reports", summary.scheduledReports || "12")}
      ${metric("Exports today", summary.exportsToday || "48")}
      ${metric("Board packs", summary.boardPacks || "3")}
      ${metric("Data freshness", summary.dataFreshness || "5 min")}
      <section class="admin-card full-admin">
        <h2>Report packs</h2>
        <div class="table admin-table-4">
          ${reports.reportPacks.map(reportPackRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Export queue</h2>
        <div class="table admin-table-4">
          ${reports.exports.map(exportRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Scheduled destinations</h2>
        <div class="table admin-table-4">
          ${reports.schedules.map(scheduleRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Source datasets</h2>
        <div class="table admin-table-4">
          ${reports.datasets.map(datasetRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Reporting guardrails</h2>
        <div class="admin-checklist">
          ${reports.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminCommunications() {
  const communications = adminCommunicationsData();
  const summary = communications.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active campaigns", summary.activeCampaigns || "8")}
      ${metric("Alerts queued", summary.alertsQueued || "12")}
      ${metric("Delivery rate", summary.deliveryRate || "98.7%")}
      ${metric("Push opt-in", summary.pushOptIn || "64%")}
      <section class="admin-card full-admin">
        <h2>Campaigns</h2>
        <div class="table admin-table-4">
          ${communications.campaigns.map(campaignRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Broadcasts and incident notices</h2>
        <div class="table admin-table-4">
          ${communications.broadcasts.map(broadcastRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Message templates</h2>
        <div class="table admin-table-4">
          ${communications.templates.map(templateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Delivery health</h2>
        <div class="table admin-table-4">
          ${communications.delivery.map(deliveryRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Communication guardrails</h2>
        <div class="admin-checklist">
          ${communications.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminPlatform() {
  const platform = adminPlatformData();
  const releases = adminMetricValue("platform.mobileReleases", ["iOS 1.0.4 beta", "Android 1.0.6 beta"]);
  const activeFlags = platform.featureFlags.filter(flag => flag.state === "on" || flag.state === "beta").length;
  return `
    <div class="admin-grid">
      ${metric("Web uptime", adminMetricValue("platform.webUptime", "99.98%"))}
      ${metric("Active flags", adminMetricValue("platform.activeFlags", activeFlags))}
      ${metric("Canaries", adminMetricValue("platform.canaries", platform.releases.filter(release => release.rollout < 100).length))}
      ${metric("Mobile releases", Array.isArray(releases) ? releases.length : "2 live")}
      <section class="admin-card full-admin">
        <h2>Release control</h2>
        <div class="table admin-table-4">
          ${platform.releases.map(releaseRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Feature flags</h2>
        <div class="table admin-table-4">
          ${platform.featureFlags.map(flagRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Operational guardrails</h2>
        <div class="admin-checklist">
          <span>Maintenance mode: ${platform.guardrails.maintenanceMode ? "on" : "off"}</span>
          <span>Rollback ready: ${platform.guardrails.rollbackReady ? "yes" : "no"}</span>
          <span>Force mobile update: ${platform.guardrails.forceUpdateArmed ? "armed" : "off"}</span>
          <span>Kill switches: ${platform.guardrails.killSwitches}</span>
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Infrastructure</h2>
        <div class="admin-checklist"><span>GPU utilization: 61%</span><span>Queue pressure: normal</span><span>Vector indexing jobs: 8</span><span>CDN and object storage healthy</span><span>API errors: ${adminMetricValue("platform.apiErrors", "0.8%")}</span></div>
      </section>
    </div>
  `;
}

function adminInfrastructure() {
  const infrastructure = adminInfrastructureData();
  const summary = infrastructure.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Uptime", summary.uptime || adminMetricValue("platform.webUptime", "99.98%"))}
      ${metric("Incidents", summary.incidents ?? "0")}
      ${metric("GPU utilization", summary.gpuUtilization || "61%")}
      ${metric("Queue pressure", summary.queuePressure || "Normal")}
      <section class="admin-card full-admin">
        <h2>Service health</h2>
        <div class="table admin-table-4">
          ${infrastructure.services.map(service => `<div class="table-row"><strong>${service.service}</strong><span>${service.status}</span><span>${service.latency}</span><span>${service.owner}</span></div>`).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>GPU and worker clusters</h2>
        <div class="table">
          ${infrastructure.clusters.map(infrastructureClusterRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Runtime queues</h2>
        <div class="table">
          ${infrastructure.queues.map(infrastructureQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Reliability incidents</h2>
        <div class="table">
          ${infrastructure.incidents.map(infrastructureIncidentRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Reliability guardrails</h2>
        <div class="admin-checklist">
          ${infrastructure.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminApiManagement() {
  const api = adminApiData();
  const summary = api.summary || {};
  return `
    <div class="admin-grid">
      ${metric("API customers", summary.customers || "320")}
      ${metric("Calls today", summary.callsToday || "9.2M")}
      ${metric("Error rate", summary.errorRate || adminMetricValue("platform.apiErrors", "0.8%"))}
      ${metric("Active keys", summary.activeKeys || "486")}
      <section class="admin-card full-admin">
        <h2>API keys and customers</h2>
        <div class="table admin-table-4">
          ${api.keys.map(apiKeyRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Quota and rate-limit policy</h2>
        <div class="table">
          ${api.quotas.map(apiQuotaRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Webhook delivery</h2>
        <div class="table">
          ${api.webhooks.map(webhookRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>SDK adoption</h2>
        <div class="admin-module-grid">
          ${api.sdks.map(sdkCard).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Error and trust queues</h2>
        <div class="table">
          ${api.errorQueues.map(apiErrorRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Production API controls</h2>
        <div class="admin-checklist">
          <span>Rotate keys with scoped permissions, owner identity, environment, and expiry.</span>
          <span>Enforce quotas by plan, organization, country, model route, and abuse risk.</span>
          <span>Protect webhooks with signatures, retries, dead-letter queues, and delivery logs.</span>
          <span>Track SDK versions so web, mobile, and partners do not drift from supported APIs.</span>
        </div>
      </section>
    </div>
  `;
}

function adminAccess() {
  const session = state.adminSession || localAdminSession();
  const scopes = session.scopes || [];
  const audit = adminAuditEvents();
  const access = adminAccessData();
  const summary = access.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Roles", summary.roles || ADMIN_ROLES.length)}
      ${metric("Audit events", adminMetricValue("access.auditEvents", adminAuditSummaryValue("summary.total", summary.auditEvents || "1,904")))}
      ${metric("Critical threats", summary.criticalThreats || "0")}
      ${metric("SSO enabled orgs", summary.ssoEnabledOrgs || "14")}
      <section class="admin-card wide">
        <h2>Current admin session</h2>
        <div class="table">
          <div class="table-row"><strong>Operator</strong><span>${session.operator || "Seed Admin"}</span><span>${session.role || "Seed Admin"}</span></div>
          <div class="table-row"><strong>Session</strong><span>${session.sessionId || "preview"}</span><span>${session.expiresInMinutes || 60} min</span></div>
          <div class="table-row"><strong>Issued</strong><span>${formatAdminTime(Date.parse(session.issuedAt || new Date().toISOString()))}</span><span>${adminStatusLabel()}</span></div>
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Granted scopes</h2>
        <div class="admin-checklist">${scopes.map(scope => `<span>${scope}</span>`).join("")}</div>
      </section>
      <section class="admin-card full-admin">
        <h2>Role access matrix</h2>
        <div class="table admin-table-4">
          ${access.roles.map(roleRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Approval queue</h2>
        <div class="table">
          ${access.approvals.map(approvalRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Compliance controls</h2>
        <div class="table">
          ${access.compliance.map(complianceRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Audit and compliance</h2>
        <div class="table">
          ${audit.slice(0, 8).map(auditRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Seed admin policy</h2>
        <div class="admin-checklist">
          ${access.seedPolicy.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminOperations() {
  const operations = adminActionData();
  const summary = operations.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Open actions", summary.openActions || "12")}
      ${metric("High priority", summary.highPriority || "4")}
      ${metric("Blocked", summary.blocked || "2")}
      ${metric("Due today", summary.dueToday || "7")}
      <section class="admin-card full-admin">
        <h2>Incident command board</h2>
        <div class="operations-board">
          ${operations.incidents.map(incidentCard).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Leadership decisions</h2>
        <div class="table">
          ${operations.decisions.map(decisionRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Follow-up tracker</h2>
        <div class="table">
          ${operations.followUps.map(followUpRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Runbooks</h2>
        <div class="table">
          ${operations.runbooks.map(runbookRow).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Operating cadence</h2>
        <div class="admin-checklist">
          <span>Morning leadership pulse reviews growth, revenue, incidents, and safety.</span>
          <span>Every high-severity incident needs an owner, ETA, user impact note, and rollback posture.</span>
          <span>Decisions stay visible until the follow-up owner marks the linked work complete.</span>
          <span>Production will sync this action layer into issue tracking, paging, and audit systems.</span>
        </div>
      </section>
    </div>
  `;
}

function adminModuleTemplate(module) {
  return `
    <article class="admin-module">
      <h3>${module.title}</h3>
      <p>${module.desc}</p>
      <div class="module-metrics">${module.metrics.map(item => `<span>${item}</span>`).join("")}</div>
    </article>
  `;
}

function adminMetric(item) {
  return `<div class="metric admin-kpi ${item.tone}"><span>${item.label}</span><strong>${item.value}</strong><em>${item.trend}</em></div>`;
}

function alertRow(alert) {
  return `<div class="table-row"><strong>${alert.title}</strong><span>${alert.severity}</span><span>${alert.owner}</span></div>`;
}

function incidentCard(incident) {
  return `
    <article class="operation-card ${String(incident.severity || "").toLowerCase()}">
      <div><span>${incident.id}</span><strong>${incident.title}</strong></div>
      <p>${incident.area} - ${incident.status}</p>
      <footer><span>${incident.owner}</span><span>${incident.eta}</span></footer>
    </article>
  `;
}

function decisionRow(item) {
  return `<div class="table-row"><strong>${item.decision}</strong><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function followUpRow(item) {
  return `<div class="table-row"><strong>${item.task}</strong><span>${item.owner}</span><span>${item.due}</span></div>`;
}

function runbookRow(item) {
  return `<div class="table-row"><strong>${item.runbook}</strong><span>${item.owner}</span><span>${item.trigger}</span></div>`;
}

function apiKeyRow(item) {
  return `<div class="table-row"><strong>${item.name}</strong><span>${item.owner}</span><span>${item.usage}</span><span>${item.status}</span></div>`;
}

function apiQuotaRow(item) {
  return `<div class="table-row"><strong>${item.tier}</strong><span>${item.limit}</span><span>${item.used}</span></div>`;
}

function webhookRow(item) {
  return `<div class="table-row"><strong>${item.event}</strong><span>${item.deliveries}</span><span>${item.failures} failures</span></div>`;
}

function sdkCard(item) {
  return `<article class="admin-module"><h3>${item.sdk}</h3><p>${item.version} - ${item.status}</p><div class="module-metrics"><span>${item.adoption}</span></div></article>`;
}

function apiErrorRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count}</span><span>${item.owner}</span></div>`;
}

function knowledgeCollectionRow(item) {
  return `<div class="table-row"><strong>${item.name}</strong><span>${item.owner}</span><span>${item.chunks}</span><span>${item.access}</span></div>`;
}

function knowledgeSourceRow(item) {
  return `<div class="table-row"><strong>${item.source}</strong><span>${item.volume}</span><span>${item.status}</span></div>`;
}

function indexingJobRow(item) {
  return `<div class="table-row"><strong>${item.job}</strong><span>${item.progress}</span><span>${item.owner}</span></div>`;
}

function knowledgePermissionRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.status}</span><span>${item.owner}</span></div>`;
}

function knowledgeQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count}</span><span>${item.priority}</span></div>`;
}

function funnelBar(item) {
  return `<div class="funnel-row"><div><strong>${item.label}</strong><span>${item.value}</span></div><i><b style="width:${item.width}%"></b></i></div>`;
}

function metric(label, value) {
  return `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function sheetTemplate() {
  if (!state.sheet) return "";
  const templates = {
    language: languageSheet,
    settings: settingsSheet,
    profile: profileSheet,
    models: modelsSheet,
    correction: correctionSheet
  };
  return `<aside class="sheet">${(templates[state.sheet] || settingsSheet)()}</aside>`;
}

function languageSheet() {
  return `
    <div class="sheet-head"><h2>Language and tone</h2><button class="close-btn" data-action="close">x</button></div>
    ${selectControl("mainLanguage", "Main language", state.user.mainLanguage, LANGUAGES, "user")}
    ${selectControl("bridgeLanguage", "Bridge language", state.user.bridgeLanguage, LANGUAGES, "user")}
    ${selectControl("tone", "Tone", state.user.tone, TONES, "user")}
    <button class="primary" data-action="close">Apply</button>
  `;
}

function settingsSheet() {
  return `
    <div class="sheet-head"><h2>Settings</h2><button class="close-btn" data-action="close">x</button></div>
    ${selectControl("theme", "Theme", state.settings.theme, ["midnight", "indigo", "light"], "setting")}
    <label class="setting-field"><span>Font size</span><div class="range-row"><input name="fontScale" type="range" min=".9" max="1.18" step=".02" value="${state.settings.fontScale}"><strong>${Math.round(state.settings.fontScale * 100)}%</strong></div></label>
    <button class="option-btn ${state.settings.voiceMode ? "active" : ""}" data-toggle="voiceMode">Voice mode ${state.settings.voiceMode ? "on" : "off"}</button>
    <button class="option-btn ${state.settings.showModelRoute ? "active" : ""}" data-toggle="showModelRoute">Model route display ${state.settings.showModelRoute ? "on" : "off"}</button>
    <button class="option-btn ${state.settings.memoryEnabled ? "active" : ""}" data-toggle="memoryEnabled">Memory ${state.settings.memoryEnabled ? "on" : "off"}</button>
    <button class="option-btn ${state.settings.privacyMode ? "active" : ""}" data-toggle="privacyMode">Private mode ${state.settings.privacyMode ? "on" : "off"}</button>
  `;
}

function profileSheet() {
  return `
    <div class="sheet-head"><h2>Profile</h2><button class="close-btn" data-action="close">x</button></div>
    <div class="profile-row"><span class="avatar">${initials(state.user.name)}</span><div><strong>${state.user.name}</strong><br><span>${state.user.email}</span></div></div>
    <div class="settings-list">
      <div class="map-item"><strong>Country</strong><span>${state.user.country}</span></div>
      <div class="map-item"><strong>City</strong><span>${state.user.city}</span></div>
      <div class="map-item"><strong>Language Passport</strong><span>${state.user.mainLanguage} with ${state.user.bridgeLanguage}; ${state.user.tone} tone.</span></div>
      <div class="map-item"><strong>Plan</strong><span>${state.user.plan}</span></div>
    </div>
    <button class="primary" data-route="auth">Edit profile</button>
    <button class="secondary" data-route="plans">Manage plan</button>
    <button class="secondary" data-route="dashboard">Open dashboard</button>
    <button class="tertiary" data-action="sign-out">${state.isSignedIn ? "Sign out" : "Leave guest session"}</button>
  `;
}

function modelsSheet() {
  return `
    <div class="sheet-head"><h2>Model routing</h2><button class="close-btn" data-action="close">x</button></div>
    <p class="hero-lead">Lumora will route by language, task, license, latency, quality, and cost. These are the PRD-listed open model sources prepared for connection.</p>
    <div class="model-list">
      ${MODEL_REGISTRY.map(model => `<div class="map-item"><strong>${model.name}</strong><span>${model.source}<br>${model.task}</span></div>`).join("")}
    </div>
  `;
}

function correctionSheet() {
  return `
    <div class="sheet-head"><h2>Community correction</h2><button class="close-btn" data-action="close">x</button></div>
    <p class="hero-lead">Flag awkward tone, missing meaning, dialect mismatch, or unsafe advice. Later this feeds native speaker review queues.</p>
    <button class="option-btn">Dialect feels wrong</button>
    <button class="option-btn">Tone is too formal</button>
    <button class="option-btn">Meaning changed</button>
    <button class="primary" data-action="correction">Submit correction</button>
  `;
}

function selectControl(name, label, value, options, target) {
  return `<label class="setting-field"><span>${label}</span><select class="select" data-${target}="${name}">${options.map(option => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}</select></label>`;
}

function initials(name) {
  return name.split(" ").filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase() || "L";
}

function render() {
  const routes = {
    welcome: welcomeView,
    fresh: freshView,
    chat: chatView,
    auth: authView,
    plans: plansView,
    dashboard: dashboardView,
    admin: adminView
  };
  document.querySelector("#app").innerHTML = (routes[state.route] || welcomeView)();
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach(item => item.addEventListener("click", () => routeTo(item.dataset.route)));
  document.querySelectorAll("[data-sheet]").forEach(item => item.addEventListener("click", () => openSheet(item.dataset.sheet)));
  document.querySelectorAll("[data-mode]").forEach(item => item.addEventListener("click", () => setMode(item.dataset.mode)));
  document.querySelectorAll("[data-admin-section]").forEach(item => item.addEventListener("click", () => {
    state.adminSection = item.dataset.adminSection;
    state.drawerOpen = false;
    saveState();
    render();
  }));
  document.querySelectorAll("[data-auth-mode]").forEach(item => item.addEventListener("click", () => {
    state.authMode = item.dataset.authMode;
    saveState();
    render();
  }));
  document.querySelectorAll("[data-chat]").forEach(item => item.addEventListener("click", () => routeTo("chat", { chatId: item.dataset.chat })));
  document.querySelectorAll("[data-prompt]").forEach(item => item.addEventListener("click", () => {
    const input = document.querySelector("#composerInput");
    if (input) input.value = item.dataset.prompt;
    if (item.dataset.autosend === "true") sendMessage();
  }));
  document.querySelectorAll("[data-action]").forEach(item => item.addEventListener("click", event => {
    const action = item.dataset.action;
    if (action === "close") closeOverlays();
    if (action === "drawer") { state.drawerOpen = true; saveState(); render(); }
    if (action === "new-chat") startFreshChat();
    if (action === "guest-start") {
      state.isSignedIn = false;
      state.drawerOpen = false;
      state.sheet = null;
      saveState();
      routeTo("fresh");
    }
    if (action === "send") sendMessage();
    if (action === "voice") showToast("Voice capture prototype is ready for ASR integration.");
    if (action === "correction") { closeOverlays(); setTimeout(() => showToast("Correction submitted for review."), 40); }
    if (action === "refresh-admin") {
      loadAdminMetrics(true);
      loadAdminAudit(true);
      loadAdminPlatform(true);
      loadAdminPayments(true);
      loadAdminFinance(true);
      loadAdminUsers(true);
      loadAdminSupport(true);
      loadAdminModels(true);
      loadAdminSafety(true);
      loadAdminSecurity(true);
      loadAdminInfrastructure(true);
      loadAdminGrowth(true);
      loadAdminAnalytics(true);
      loadAdminReports(true);
      loadAdminCommunications(true);
      loadAdminAccess(true);
      loadAdminActions(true);
      loadAdminApi(true);
      loadAdminKnowledge(true);
      setTimeout(() => showToast("Refreshing admin data."), 40);
    }
    if (action === "sign-out") signOut();
    if (action === "preview-admin") {
      unlockAdmin(localAdminSession());
      setTimeout(() => showToast("Admin Console preview opened."), 40);
    }
    if (action === "lock-admin") {
      state.adminUnlocked = false;
      state.adminSession = null;
      saveState();
      routeTo("fresh");
      setTimeout(() => showToast("Admin console locked."), 40);
    }
  }));
  document.querySelectorAll("[data-plan]").forEach(item => item.addEventListener("click", () => {
    state.user.plan = item.dataset.plan;
    saveState();
    routeTo("dashboard");
    setTimeout(() => showToast(`${item.dataset.plan} plan selected.`), 40);
  }));
  document.querySelectorAll("[data-user]").forEach(item => item.addEventListener("change", () => updateUser(item.dataset.user, item.value)));
  document.querySelectorAll("[data-setting]").forEach(item => item.addEventListener("change", () => updateSetting(item.dataset.setting, item.value)));
  document.querySelectorAll("[data-toggle]").forEach(item => item.addEventListener("click", () => updateSetting(item.dataset.toggle, !state.settings[item.dataset.toggle])));
  document.querySelectorAll("input[name='fontScale']").forEach(item => item.addEventListener("input", () => updateSetting("fontScale", Number(item.value))));
  document.querySelectorAll("form[data-action='save-profile']").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    ["name", "email", "country", "city", "mainLanguage", "bridgeLanguage", "tone"].forEach(key => state.user[key] = data.get(key) || state.user[key]);
    state.isSignedIn = true;
    saveState();
    routeTo("fresh");
    setTimeout(() => showToast("Profile saved. Language Passport is active."), 40);
  }));
  document.querySelectorAll("form[data-action='login']").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    state.user.email = data.get("email") || state.user.email;
    state.isSignedIn = true;
    saveState();
    routeTo("fresh");
    setTimeout(() => showToast("Welcome back. Your Lumora workspace is ready."), 40);
  }));
  document.querySelectorAll("form[data-action='seed-admin']").forEach(form => form.addEventListener("submit", async event => {
    event.preventDefault();
    const code = new FormData(form).get("seedCode");
    const result = await verifyAdminAccess(code);
    if (result.ok) {
      unlockAdmin(result.session);
      setTimeout(() => showToast(result.message), 40);
    } else {
      showToast(result.message);
    }
  }));
  document.querySelectorAll("#composerInput").forEach(input => {
    input.addEventListener("keydown", event => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
      }
    });
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeOverlays();
  }, { once: true });
}

function boot() {
  const hashRoute = location.hash.slice(1);
  if (hashRoute === "admin-preview") {
    state.adminUnlocked = true;
    state.adminSession = state.adminSession || localAdminSession();
    state.route = "admin";
    history.replaceState(null, "", "#admin");
    saveState();
  } else if (ROUTES.includes(hashRoute)) {
    state.route = hashRoute;
  }
  render();
}

window.addEventListener("hashchange", () => {
  const hashRoute = location.hash.slice(1);
  if (hashRoute === "admin-preview") {
    state.adminUnlocked = true;
    state.adminSession = state.adminSession || localAdminSession();
    state.route = "admin";
    history.replaceState(null, "", "#admin");
    saveState();
    render();
    return;
  }
  if (ROUTES.includes(hashRoute)) {
    state.route = hashRoute;
    state.drawerOpen = false;
    state.sheet = null;
    saveState();
    render();
  }
});

boot();
