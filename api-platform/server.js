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

const supportOperations = {
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

const financeOperations = {
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

const analyticsOperations = {
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

const infrastructureOperations = {
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

const securityOperations = {
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

const reportingOperations = {
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

const communicationsOperations = {
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

const languageOperations = {
  summary: { trackedLanguages: 54, priorityMarkets: 12, dialectQueues: 128, reviewerBacklog: 312, averageConfidence: "91%" },
  coverage: [
    { language: "Yoruba", countries: "Nigeria, diaspora", readiness: "A", confidence: "94%", owner: "Language QA" },
    { language: "Swahili", countries: "Kenya, Tanzania, Uganda", readiness: "A", confidence: "92%", owner: "Language QA" },
    { language: "Hausa", countries: "Nigeria, Niger, Ghana", readiness: "B", confidence: "90%", owner: "Native reviewers" },
    { language: "Zulu/Xhosa", countries: "South Africa", readiness: "B", confidence: "88%", owner: "Language QA" },
    { language: "Amharic/Oromo", countries: "Ethiopia", readiness: "B", confidence: "84%", owner: "Regional reviewers" }
  ],
  dialectQueues: [
    { queue: "Low-confidence dialects", count: 128, language: "Mixed", owner: "Language Quality", priority: "High" },
    { queue: "Meaning changed reports", count: 41, language: "Yoruba/Swahili", owner: "Reviewers", priority: "Today" },
    { queue: "Tone mismatch reports", count: 284, language: "Pidgin/Hausa", owner: "Community Ops", priority: "Medium" },
    { queue: "Unsupported pairs", count: 24, language: "African pairs", owner: "Model Ops", priority: "High" }
  ],
  reviewers: [
    { region: "West Africa", reviewers: 42, languages: "Yoruba, Hausa, Igbo, Pidgin, Twi", backlog: 186 },
    { region: "East Africa", reviewers: 28, languages: "Swahili, Amharic, Oromo, Somali", backlog: 91 },
    { region: "Southern Africa", reviewers: 19, languages: "Zulu, Xhosa, Shona, Sesotho", backlog: 72 },
    { region: "Central/North Africa", reviewers: 16, languages: "Lingala, Arabic, French bridge", backlog: 58 }
  ],
  benchmarks: [
    { benchmark: "Translation meaning preservation", score: "92%", gap: "Idioms", owner: "AI QA" },
    { benchmark: "Tone and cultural style", score: "89%", gap: "Youth/street tone", owner: "Language QA" },
    { benchmark: "Speech recognition", score: "84%", gap: "Noisy mobile audio", owner: "Voice Ops" },
    { benchmark: "Code-switching", score: "87%", gap: "Pidgin/English mixes", owner: "Model Ops" }
  ],
  guardrails: [
    "Every priority language needs native reviewer ownership before public confidence claims.",
    "Dialect fixes must preserve meaning, tone, safety context, and user-selected bridge language.",
    "Low-confidence outputs should admit uncertainty and offer alternatives instead of guessing.",
    "Country expansion requires readiness, reviewer coverage, safety policy, and model route validation."
  ]
};

const dataGovernanceOperations = {
  summary: { retentionPolicies: 9, consentCoverage: "88%", residencyRegions: 4, deletionRequests: 4, piiFindings: 29 },
  retention: [
    { policy: "Conversation history", scope: "User opt-in", duration: "Until deleted", owner: "Privacy", status: "Active" },
    { policy: "Admin audit logs", scope: "Admin actions", duration: "7 years", owner: "Security", status: "Immutable" },
    { policy: "Model routing logs", scope: "Metadata only", duration: "180 days", owner: "AI Ops", status: "Review" },
    { policy: "Support case context", scope: "Non-sensitive summary", duration: "2 years", owner: "Support", status: "Active" }
  ],
  consent: [
    { control: "Memory opt-in", coverage: "88%", surface: "Web/Mobile", owner: "Privacy" },
    { control: "Voice retention consent", coverage: "64%", surface: "Mobile", owner: "Voice Ops" },
    { control: "Marketing consent", coverage: "71%", surface: "Email/In-app", owner: "Growth" },
    { control: "Reviewer data access", coverage: "Scoped", surface: "Admin", owner: "Language QA" }
  ],
  residency: [
    { region: "West Africa", data: "Profiles, chats, telemetry", status: "Policy draft", owner: "Platform" },
    { region: "EU", data: "Fallback processing", status: "DPA reviewed", owner: "Legal" },
    { region: "US", data: "Vendor integrations", status: "Restricted", owner: "Security" },
    { region: "Enterprise tenant", data: "Workspace knowledge", status: "Tenant scoped", owner: "Enterprise" }
  ],
  requests: [
    { request: "Data export", count: 9, sla: "7 days", owner: "Privacy", status: "Pending review" },
    { request: "Deletion request", count: 4, sla: "30 days", owner: "Privacy", status: "Queued" },
    { request: "Consent withdrawal", count: 11, sla: "Immediate", owner: "Privacy", status: "Automated" },
    { request: "Legal hold", count: 2, sla: "Active", owner: "Legal", status: "Restricted" }
  ],
  guardrails: [
    "Data export, deletion, and legal hold actions require privacy-reviewed workflow state.",
    "Memory, voice, and reviewer access must honor user consent, country rules, and tenant boundaries.",
    "Model training or evaluation datasets must remove PII and track source license, reviewer, and retention.",
    "Consumer dashboards can show personal privacy status but never expose admin data governance controls."
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

function adminSupportOperations() {
  return supportOperations;
}

function adminFinanceOperations() {
  return financeOperations;
}

function adminAnalyticsOperations() {
  return analyticsOperations;
}

function adminInfrastructureOperations() {
  return infrastructureOperations;
}

function adminSecurityOperations() {
  return securityOperations;
}

function adminReportingOperations() {
  return reportingOperations;
}

function adminCommunicationsOperations() {
  return communicationsOperations;
}

function adminLanguageOperations() {
  return languageOperations;
}

function adminDataGovernanceOperations() {
  return dataGovernanceOperations;
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
      "knowledge:operate",
      "support:review",
      "finance:read",
      "analytics:read",
      "infrastructure:operate",
      "security:operate",
      "reporting:export",
      "communications:send",
      "language:review",
      "data:govern"
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

    if (request.method === "GET" && url.pathname === "/v1/admin/support") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("support_center_viewed", "Support", "Info", "Support");
      return sendJson(response, 200, adminSupportOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/finance") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("finance_cost_center_viewed", "Finance", "Info", "Finance");
      return sendJson(response, 200, adminFinanceOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/analytics") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("analytics_center_viewed", "Analytics", "Info", "Leadership");
      return sendJson(response, 200, adminAnalyticsOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/infrastructure") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("infrastructure_reliability_viewed", "Infrastructure", "Info", "Developer");
      return sendJson(response, 200, adminInfrastructureOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/security") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("security_compliance_viewed", "Security", "Info", "Security");
      return sendJson(response, 200, adminSecurityOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/reports") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("reporting_exports_viewed", "Reporting", "Info", "Leadership");
      return sendJson(response, 200, adminReportingOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/communications") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("communications_center_viewed", "Communications", "Info", "Operations");
      return sendJson(response, 200, adminCommunicationsOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/languages") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("language_intelligence_viewed", "Languages", "Info", "Language QA");
      return sendJson(response, 200, adminLanguageOperations());
    }

    if (request.method === "GET" && url.pathname === "/v1/admin/data-governance") {
      if (request.headers["x-seed-admin-code"] !== SEED_ADMIN_CODE) {
        return sendJson(response, 403, { error: "Seed admin access required" });
      }
      recordAdminEvent("data_governance_viewed", "Data Governance", "Info", "Privacy");
      return sendJson(response, 200, adminDataGovernanceOperations());
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

module.exports = { createServer, detectTask, routeModel, simulateReply, adminMetrics, adminAccessSession, adminAuditTrail, adminPlatformControls, adminPaymentOperations, adminUserOperations, adminModelOperations, adminSafetyOperations, adminGrowthOperations, adminAccessOperations, adminActionOperations, adminApiOperations, adminKnowledgeOperations, adminSupportOperations, adminFinanceOperations, adminAnalyticsOperations, adminInfrastructureOperations, adminSecurityOperations, adminReportingOperations, adminCommunicationsOperations, adminLanguageOperations, adminDataGovernanceOperations, plans };
