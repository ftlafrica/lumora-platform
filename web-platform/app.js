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
  { id: "payments", label: "Payments", desc: "Plans, upgrades, invoices, failed payments, refunds, taxes, and MRR." },
  { id: "users", label: "Users and Orgs", desc: "Consumer accounts, enterprise workspaces, risk, support, and seats." },
  { id: "models", label: "AI Ops", desc: "Hugging Face sources, routing, latency, fallbacks, quality, and costs." },
  { id: "safety", label: "Safety", desc: "Moderation, corrections, privacy, red-team findings, appeals, and policy." },
  { id: "platform", label: "Platform", desc: "Web, mobile, API, infrastructure, incidents, releases, and feature flags." },
  { id: "access", label: "Access", desc: "Seed-admin grants, RBAC, audit logs, compliance, data residency, and SSO." }
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

function localAdminSession() {
  const issuedAt = new Date().toISOString();
  return {
    sessionId: `preview-admin-${Date.now()}`,
    operator: "Seed Admin",
    role: "Seed Admin",
    issuedAt,
    expiresInMinutes: 60,
    scopes: ["executive:read", "growth:read", "payments:read", "users:read", "models:operate", "safety:review", "platform:operate", "access:grant"],
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
    payments: adminPayments,
    users: adminUsers,
    models: () => adminModels(readiness),
    safety: adminSafety,
    platform: adminPlatform,
    access: adminAccess
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
  return `
    <div class="admin-grid">
      ${metric("Visitors today", "4,812")}
      ${metric("New visitors", adminMetricValue("users.newVisitorsToday", "2,184"))}
      ${metric("Signup conversion", adminMetricValue("users.signupConversion", "12.4%"))}
      ${metric("Mobile web share", "38%")}
      <section class="admin-card wide">
        <h2>Conversion funnel</h2>
        <div class="funnel-list">${ADMIN_FUNNELS.map(funnelBar).join("")}</div>
      </section>
      <section class="admin-card wide">
        <h2>Country traction</h2>
        <div class="table">${ADMIN_COUNTRIES.map(country => `<div class="table-row"><strong>${country.country}</strong><span>${country.users} users</span><span>${country.growth}</span></div>`).join("")}</div>
      </section>
      <section class="admin-card full-admin">
        <h2>Language adoption by market</h2>
        <div class="admin-module-grid">${ADMIN_COUNTRIES.map(country => `<article class="admin-module"><h3>${country.country}</h3><p>${country.languages}</p><div class="module-metrics"><span>${country.users}</span><span>${country.growth}</span></div></article>`).join("")}</div>
      </section>
    </div>
  `;
}

function adminPayments() {
  return `
    <div class="admin-grid">
      ${metric("MRR", adminMetricValue("revenue.mrr", "$184K"))}
      ${metric("ARR", adminMetricValue("revenue.arr", "$2.2M"))}
      ${metric("Upgrades today", adminMetricValue("revenue.upgradesToday", "842"))}
      ${metric("Failed payments", adminMetricValue("revenue.failedPayments", "31"))}
      <section class="admin-card full-admin">
        <h2>Plan performance</h2>
        <div class="table admin-table-4">
          ${ADMIN_PAYMENTS.map(item => `<div class="table-row"><strong>${item.plan}</strong><span>${item.users}</span><span>${item.mrr}</span><span>${item.status}</span></div>`).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Billing queues</h2>
        <div class="admin-checklist"><span>Retry failed payments with smart dunning.</span><span>Review refund requests over $250.</span><span>Prepare Teams invoices and tax exports.</span></div>
      </section>
      <section class="admin-card wide">
        <h2>Revenue mix</h2>
        <div class="admin-donut"><span>73%</span></div>
        <p class="hero-lead">Pro and Teams currently carry most simulated recurring revenue.</p>
      </section>
    </div>
  `;
}

function adminUsers() {
  return `
    <div class="admin-grid">
      ${metric("Consumer users", adminMetricValue("users.total", "18.4K"))}
      ${metric("Organizations", "47")}
      ${metric("Enterprise seats", "1,280")}
      ${metric("Risk reviews", "92")}
      <section class="admin-card wide">
        <h2>User operations</h2>
        <div class="table">
          <div class="table-row"><strong>Account support</strong><span>214 linked users</span><span>Support</span></div>
          <div class="table-row"><strong>Suspensions</strong><span>17 active</span><span>Trust</span></div>
          <div class="table-row"><strong>Data export requests</strong><span>9 pending</span><span>Privacy</span></div>
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Organization controls</h2>
        <div class="admin-checklist"><span>SSO and SCIM readiness</span><span>Domain claim approval queue</span><span>Workspace policy templates</span></div>
      </section>
    </div>
  `;
}

function adminModels(readiness) {
  return `
    <div class="admin-grid">
      ${metric("Model sources", adminMetricValue("ai.modelSources", MODEL_REGISTRY.length))}
      ${metric("Avg route", `${adminMetricValue("ai.averageRouteMs", 428)}ms`)}
      ${metric("Success rate", adminMetricValue("ai.successRate", "99.1%"))}
      ${metric("Fallback chains", "3")}
      <section class="admin-card full-admin">
        <h2>Hugging Face model registry</h2>
        <div class="table admin-table-4">
          ${MODEL_REGISTRY.map(model => `<div class="table-row"><strong>${model.name}</strong><span>${model.readiness}</span><span>${model.languages}</span><span>${model.task}</span></div>`).join("")}
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Routing policy</h2>
        <div class="admin-checklist"><span>Detect language, dialect, task, and tone.</span><span>Route by readiness, license, latency, cost, and safety.</span><span>Fallback to NLLB/MMS/general LLM where local model quality is low.</span></div>
      </section>
      <section class="admin-card wide">
        <h2>Readiness snapshot</h2>
        <div class="model-list compact-metrics">${metric("A readiness", readiness.A || 0)}${metric("B readiness", readiness.B || 0)}${metric("Priority launch", "Nigeria")}</div>
      </section>
    </div>
  `;
}

function adminSafety() {
  return `
    <div class="admin-grid">
      ${metric("Moderation flags", adminMetricValue("safety.moderationFlags", "418"))}
      ${metric("Appeals", adminMetricValue("safety.appeals", "44"))}
      ${metric("Corrections", "1,284")}
      ${metric("Pending corrections", adminMetricValue("safety.correctionsPending", "312"))}
      <section class="admin-card wide">
        <h2>Safety queues</h2>
        <div class="table">${ADMIN_ALERTS.filter(alert => alert.area !== "Billing").map(alertRow).join("")}</div>
      </section>
      <section class="admin-card wide">
        <h2>Language quality loop</h2>
        <div class="admin-checklist"><span>Native-speaker review queue</span><span>Dialect confidence scoring</span><span>Bias and hallucination report triage</span><span>Community correction feedback loop</span></div>
      </section>
    </div>
  `;
}

function adminPlatform() {
  const releases = adminMetricValue("platform.mobileReleases", ["iOS 1.0.4 beta", "Android 1.0.6 beta"]);
  return `
    <div class="admin-grid">
      ${metric("Web uptime", adminMetricValue("platform.webUptime", "99.98%"))}
      ${metric("API calls", "9.2M")}
      ${metric("Mobile releases", Array.isArray(releases) ? releases.length : "2 live")}
      ${metric("Open incidents", "0")}
      <section class="admin-card wide">
        <h2>Release control</h2>
        <div class="table">
          <div class="table-row"><strong>Web</strong><span>3 feature flags</span><span>Stable</span></div>
          <div class="table-row"><strong>iOS</strong><span>${Array.isArray(releases) ? releases[0] : "1.0.4 beta"}</span><span>Crash review</span></div>
          <div class="table-row"><strong>Android</strong><span>${Array.isArray(releases) ? releases[1] : "1.0.6 beta"}</span><span>Healthy</span></div>
          <div class="table-row"><strong>API</strong><span>${adminMetricValue("platform.apiErrors", "0.8%")} errors</span><span>Watch</span></div>
        </div>
      </section>
      <section class="admin-card wide">
        <h2>Infrastructure</h2>
        <div class="admin-checklist"><span>GPU utilization: 61%</span><span>Queue pressure: normal</span><span>Vector indexing jobs: 8</span><span>CDN and object storage healthy</span></div>
      </section>
    </div>
  `;
}

function adminAccess() {
  const session = state.adminSession || localAdminSession();
  const scopes = session.scopes || [];
  const audit = adminAuditEvents();
  return `
    <div class="admin-grid">
      ${metric("Roles", ADMIN_ROLES.length)}
      ${metric("Audit events", adminMetricValue("access.auditEvents", adminAuditSummaryValue("summary.total", "1,904")))}
      ${metric("Critical threats", "0")}
      ${metric("SSO enabled orgs", "14")}
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
          ${ADMIN_ROLES.map(role => `<div class="table-row"><strong>${role.role}</strong><span>${role.access}</span><span>${role.users} users</span><span>${role.approval}</span></div>`).join("")}
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
        <p class="hero-lead">Only seed admins can grant admin access. Limited areas should be assigned by role, country, product surface, and approval workflow.</p>
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
