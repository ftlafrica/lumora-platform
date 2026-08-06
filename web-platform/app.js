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

const DEFAULT_STATE = {
  route: "welcome",
  activeChatId: "demo",
  drawerOpen: false,
  sheet: null,
  adminUnlocked: false,
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
    showModelRoute: true
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
    chats: saved.chats && saved.chats.length ? saved.chats : base.chats
  };
}

function saveState() {
  localStorage.setItem("lumora-web-state", JSON.stringify(state));
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
  return state.chats.find(chat => chat.id === state.activeChatId) || state.chats[0];
}

function createChat() {
  const id = `chat-${Date.now()}`;
  state.chats.unshift({ id, title: "New conversation", messages: [] });
  state.activeChatId = id;
  routeTo("chat", { chatId: id });
}

function selectRouteForPrompt(text) {
  const lower = text.toLowerCase();
  if (lower.includes("translate")) return "AfriNLLB -> NLLB fallback -> Tone Dial";
  if (lower.includes("voice") || lower.includes("speak")) return "MMS -> Simba-H eval -> Lumora tone layer";
  if (lower.includes("market") || lower.includes("customer")) return "AfroXLMR-Social -> General LLM -> Market Mode";
  return "InkubaLM/AfroXLMR -> General LLM -> Lumora tone layer";
}

function generateReply(text) {
  const language = state.user.mainLanguage;
  const bridge = state.user.bridgeLanguage;
  const tone = state.user.tone;
  const route = selectRouteForPrompt(text);
  return {
    meta: `Lumora - ${tone} tone - ${language} + ${bridge}`,
    text: `I hear you. I would answer this in a ${tone.toLowerCase()} way, keeping ${language} feeling natural and using ${bridge} only where it helps. For now this web build is using a local simulated response, but the planned route is: ${route}.`,
    route
  };
}

function sendMessage() {
  const input = document.querySelector("#composerInput");
  if (!input || !input.value.trim()) return;
  const text = input.value.trim();
  let chat = currentChat();
  if (!chat) {
    createChat();
    chat = currentChat();
  }
  chat.messages.push({ role: "user", meta: `${state.user.mainLanguage} + ${state.user.bridgeLanguage}`, text });
  const reply = generateReply(text);
  chat.messages.push({ role: "ai", meta: reply.meta, text: reply.text, route: reply.route });
  chat.title = text.slice(0, 42);
  input.value = "";
  saveState();
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
              <button class="primary" data-route="fresh">Continue to Lumora</button>
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
              <button class="chip" data-route="fresh">Chat</button>
              <button class="chip" data-route="plans">Plans</button>
              <button class="chip" data-route="auth">Profile</button>
            </div>
          </div>
          <div class="quick-grid">
            <button class="primary" data-route="fresh">Continue to Lumora</button>
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
          <button class="feature-btn ${state.route === "fresh" ? "active" : ""}" data-route="fresh">+ New chat</button>
          <button class="feature-btn ${state.route === "chat" ? "active" : ""}" data-route="chat">AI Chat</button>
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
        <span><strong>${state.user.name}</strong><small>${state.user.plan} plan</small></span>
      </button>
    </aside>
  `;
}

function chatChrome(stage, options = {}) {
  const showBottomComposer = options.showBottomComposer !== false;
  return appShell(`
    <main class="view chat-layout">
      ${sidebar()}
      <section class="main-pane">
        <header class="topbar">
          <div class="chat-thread-head">
            <button class="pill mobile-menu" data-action="drawer"><span class="hamburger"><span></span></span></button>
            <div><strong>Lumora</strong><small>Neon Baobab</small></div>
          </div>
          <div class="top-actions">
            <button class="pill language" data-sheet="language">${state.user.mainLanguage} - ${state.user.bridgeLanguage}</button>
            <button class="pill gold hide-mobile" data-route="plans">Upgrade</button>
            <button class="pill" data-sheet="profile">Profile</button>
          </div>
        </header>
        <section class="chat-stage">${stage}</section>
        ${showBottomComposer ? composer() : ""}
      </section>
    </main>
  `);
}

function freshView() {
  return chatChrome(`
    <div class="fresh-center">
      <div class="fresh-inner">
        <p class="eyebrow">Lumora Chat</p>
        <h1>What should we shape<span class="mobile-break"></span> in your language today?</h1>
        ${composer(true)}
        <div class="prompt-row">
          <button class="chip" data-prompt="Explain artificial intelligence in a respectful Yoruba and English mix.">Explain in my dialect</button>
          <button class="chip" data-prompt="Translate this customer reply while keeping the tone natural.">Translate with tone</button>
          <button class="chip" data-prompt="Write a WhatsApp market reply for a customer asking for discount.">Write a market reply</button>
          <button class="chip" data-prompt="Teach me photosynthesis with local examples.">Teach me simply</button>
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
        ${!isUser && state.settings.showModelRoute ? `<div class="message-tools"><button class="mini-action" data-sheet="models">Model route</button><button class="mini-action" data-sheet="correction">Correct tone</button></div>` : ""}
      </div>
    </article>
  `;
}

function composer(centered = false) {
  return `
    <footer class="composer-wrap ${centered ? "center-composer" : ""}">
      <section class="chat-composer">
        <button class="icon-btn" data-sheet="language">+</button>
        <textarea id="composerInput" class="composer-input" rows="1" placeholder="Ask in any African language, or mix naturally..."></textarea>
        <button class="icon-btn voice-btn" data-action="voice">V</button>
        <button class="send-btn" data-action="send">^</button>
      </section>
    </footer>
  `;
}

function authView() {
  return appShell(`
    <main class="view auth-view">
      <section class="auth-shell">
        <div class="auth-story">
          ${brand("Profile setup")}
          <div>
            <p class="eyebrow">Language Passport</p>
            <h1>Your AI should know how you speak.</h1>
            <p class="hero-lead">Create a profile with country, city, main language, bridge language, tone, and access preferences. This becomes the foundation for future Android and iOS personalization.</p>
          </div>
          <button class="tertiary" data-route="welcome">Back to welcome</button>
        </div>
        <form class="auth-form" data-action="save-profile">
          <div class="form-grid">
            ${field("name", "Full name", state.user.name)}
            ${field("email", "Email", state.user.email, "email")}
            ${field("country", "Country", state.user.country)}
            ${field("city", "City", state.user.city)}
            ${selectField("mainLanguage", "Main language", state.user.mainLanguage, LANGUAGES)}
            ${selectField("bridgeLanguage", "Bridge language", state.user.bridgeLanguage, LANGUAGES)}
            ${selectField("tone", "Default tone", state.user.tone, TONES)}
            ${field("password", "Password", "", "password")}
          </div>
          <button class="primary" type="submit">Create Lumora account</button>
          <button class="secondary" type="button" data-route="fresh">Continue as guest</button>
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
  return `
    <article class="plan-card ${plan.featured ? "featured" : ""}">
      <span class="tag">${plan.tag}</span>
      <h2>${plan.name}</h2>
      <div class="price">${price}</div>
      <p class="hero-lead">${plan.desc}</p>
      <ul>${plan.features.map(item => `<li>${item}</li>`).join("")}</ul>
      <button class="cta" data-plan="${plan.name}">${plan.name === "Teams" ? "Request Teams access" : `Choose ${plan.name}`}</button>
    </article>
  `;
}

function dashboardView() {
  const chat = currentChat();
  return chatChrome(`
    <div class="messages">
      <section class="admin-card wide">
        <p class="eyebrow">Personal Dashboard</p>
        <h1>Your Lumora activity and language profile.</h1>
        <p class="hero-lead">This dashboard contains safe user-facing information only. Enterprise operations, payments, visitors, security, infrastructure, and model controls live in the separate seed-admin console.</p>
      </section>
      <div class="admin-grid user-dashboard-grid">
        ${metric("Current plan", state.user.plan)}
        ${metric("Main language", state.user.mainLanguage)}
        ${metric("Bridge language", state.user.bridgeLanguage)}
        ${metric("Default tone", state.user.tone)}
        <section class="admin-card wide">
          <h2>Language Passport</h2>
          <div class="table">
            <div class="table-row"><strong>Name</strong><span>${state.user.name}</span><span>Profile</span></div>
            <div class="table-row"><strong>Location</strong><span>${state.user.city}, ${state.user.country}</span><span>Context</span></div>
            <div class="table-row"><strong>Preference</strong><span>${state.user.mainLanguage} + ${state.user.bridgeLanguage}</span><span>${state.user.tone}</span></div>
          </div>
        </section>
        <section class="admin-card wide">
          <h2>Recent activity</h2>
          <div class="table">
            <div class="table-row"><strong>Last chat</strong><span>${chat ? chat.title : "No chat yet"}</span><span>Chat</span></div>
            <div class="table-row"><strong>Saved conversations</strong><span>${state.chats.length}</span><span>Local</span></div>
            <div class="table-row"><strong>Model route display</strong><span>${state.settings.showModelRoute ? "Enabled" : "Hidden"}</span><span>Setting</span></div>
          </div>
        </section>
        <section class="admin-card wide restricted-card">
          <h2>Restricted admin access</h2>
          <p class="hero-lead">Leadership, dev, finance, support, security, moderation, and operations roles use a separate seed-admin-gated console.</p>
          <button class="secondary" data-route="admin">Open Admin Access Gate</button>
        </section>
      </div>
    </div>
  `);
}

function adminView() {
  if (!state.adminUnlocked) return adminGateView();
  const readiness = MODEL_REGISTRY.reduce((acc, item) => {
    acc[item.readiness] = (acc[item.readiness] || 0) + 1;
    return acc;
  }, {});
  return appShell(`
    <main class="view admin-layout enterprise-admin">
      ${adminSidebar()}
      <section class="admin-main">
        <header class="admin-top">
          <div>
            <p class="eyebrow">Seed Admin Console</p>
            <h1>Enterprise operations across web, mobile, models, payments, safety, and infrastructure.</h1>
          </div>
          <div class="top-actions">
            <button class="pill" data-route="fresh">Consumer app</button>
            <button class="pill gold" data-action="lock-admin">Lock admin</button>
          </div>
        </header>
        <section class="admin-preview-banner">
          <strong>Preview mode</strong>
          <span>This is a non-production console preview with simulated metrics. Production access will require seed-admin approval, SSO/MFA, RBAC/ABAC, and audit logging.</span>
        </section>
        <div class="admin-grid">
          ${metric("Total users", "18,420")}
          ${metric("New visitors", "2,184")}
          ${metric("Revenue today", "$12,840")}
          ${metric("AI requests today", "1.28M")}
          ${metric("Web vs mobile", "62% / 38%")}
          ${metric("Payment upgrades", "842")}
          ${metric("Avg response", "428ms")}
          ${metric("Platform health", "99.98%")}
          <section class="admin-card wide">
            <h2>Hugging Face model registry</h2>
            <div class="table">
              ${MODEL_REGISTRY.slice(0, 7).map(model => `<div class="table-row"><strong>${model.name}</strong><span>${model.readiness}</span><span>${model.type}</span></div>`).join("")}
            </div>
          </section>
          <section class="admin-card wide">
            <h2>Readiness snapshot</h2>
            <div class="model-list">
              <div class="metric"><span>A readiness</span><strong>${readiness.A || 0}</strong></div>
              <div class="metric"><span>B readiness</span><strong>${readiness.B || 0}</strong></div>
              <div class="metric"><span>Priority launch</span><strong>Nigeria</strong></div>
            </div>
          </section>
          <section class="admin-card full-admin">
            <h2>Enterprise modules</h2>
            <div class="admin-module-grid">
              ${ADMIN_MODULES.map(adminModuleTemplate).join("")}
            </div>
          </section>
        </div>
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
  return `
    <aside class="sidebar">
      <div>
        <div class="drawer-head">
          ${brand("Admin Console")}
          <button class="close-btn" data-action="lock-admin">x</button>
        </div>
        <div class="section-label">Enterprise control</div>
        <nav class="nav-list">
          ${ADMIN_MODULES.slice(0, 12).map(module => `<button class="feature-btn">${module.title}</button>`).join("")}
        </nav>
      </div>
      <button class="profile-mini">
        <span class="avatar">SA</span>
        <span><strong>Seed Admin</strong><small>Full platform access</small></span>
      </button>
    </aside>
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
  document.querySelectorAll("[data-chat]").forEach(item => item.addEventListener("click", () => routeTo("chat", { chatId: item.dataset.chat })));
  document.querySelectorAll("[data-prompt]").forEach(item => item.addEventListener("click", () => {
    const input = document.querySelector("#composerInput");
    if (input) input.value = item.dataset.prompt;
  }));
  document.querySelectorAll("[data-action]").forEach(item => item.addEventListener("click", event => {
    const action = item.dataset.action;
    if (action === "close") closeOverlays();
    if (action === "drawer") { state.drawerOpen = true; saveState(); render(); }
    if (action === "send") sendMessage();
    if (action === "voice") showToast("Voice capture prototype is ready for ASR integration.");
    if (action === "correction") { closeOverlays(); setTimeout(() => showToast("Correction submitted for review."), 40); }
    if (action === "preview-admin") {
      state.adminUnlocked = true;
      saveState();
      routeTo("admin");
      setTimeout(() => showToast("Admin Console preview opened."), 40);
    }
    if (action === "lock-admin") {
      state.adminUnlocked = false;
      saveState();
      routeTo("fresh");
      setTimeout(() => showToast("Admin console locked."), 40);
    }
  }));
  document.querySelectorAll("[data-plan]").forEach(item => item.addEventListener("click", () => {
    state.user.plan = item.dataset.plan;
    saveState();
    showToast(`${item.dataset.plan} plan selected.`);
    render();
  }));
  document.querySelectorAll("[data-user]").forEach(item => item.addEventListener("change", () => updateUser(item.dataset.user, item.value)));
  document.querySelectorAll("[data-setting]").forEach(item => item.addEventListener("change", () => updateSetting(item.dataset.setting, item.value)));
  document.querySelectorAll("[data-toggle]").forEach(item => item.addEventListener("click", () => updateSetting(item.dataset.toggle, !state.settings[item.dataset.toggle])));
  document.querySelectorAll("input[name='fontScale']").forEach(item => item.addEventListener("input", () => updateSetting("fontScale", Number(item.value))));
  document.querySelectorAll("form[data-action='save-profile']").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    ["name", "email", "country", "city", "mainLanguage", "bridgeLanguage", "tone"].forEach(key => state.user[key] = data.get(key) || state.user[key]);
    saveState();
    routeTo("fresh");
    setTimeout(() => showToast("Profile saved. Language Passport is active."), 40);
  }));
  document.querySelectorAll("form[data-action='seed-admin']").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const code = new FormData(form).get("seedCode");
    if (code === SEED_ADMIN_CODE) {
      state.adminUnlocked = true;
      saveState();
      routeTo("admin");
      setTimeout(() => showToast("Seed admin access granted."), 40);
    } else {
      showToast("Seed admin code was not accepted.");
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
  if (ROUTES.includes(hashRoute)) {
    state.route = hashRoute;
    state.drawerOpen = false;
    state.sheet = null;
    saveState();
    render();
  }
});

boot();
