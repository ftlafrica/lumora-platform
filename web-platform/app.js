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
  { id: "lifecycle", label: "Lifecycle", desc: "Onboarding, activation journeys, churn risk, winback, expansion, and retention guardrails." },
  { id: "experiments", label: "Experiments", desc: "A/B tests, feature flags, rollouts, kill switches, results, and product decision guardrails." },
  { id: "reports", label: "Reports", desc: "Leadership packs, scheduled exports, report destinations, datasets, and evidence guardrails." },
  { id: "warehouse", label: "Warehouse", desc: "Data pipelines, warehouse freshness, certified metrics, lineage, BI access, and data quality guardrails." },
  { id: "evidence", label: "Evidence", desc: "Control evidence, audit readiness, attestations, compliance gaps, and evidence guardrails." },
  { id: "trust", label: "Trust", desc: "Customer-safe trust center posture, security reviews, certifications, subprocessors, and public-status guardrails." },
  { id: "board", label: "Board", desc: "Board packets, strategic decisions, investor metrics, escalations, and governance guardrails." },
  { id: "investors", label: "Investors", desc: "Investor updates, fundraising pipeline, data room readiness, diligence requests, and disclosure guardrails." },
  { id: "procurement", label: "Procurement", desc: "Enterprise procurement cycles, revenue blockers, purchase orders, renewals, and close guardrails." },
  { id: "partnerships", label: "Partners", desc: "Strategic partners, channel pipeline, integrations, ecosystem risks, and partnership guardrails." },
  { id: "launch", label: "Launch", desc: "Launch checklists, go/no-go gates, readiness, post-launch monitors, and launch guardrails." },
  { id: "okrs", label: "OKRs", desc: "Executive objectives, key results, blockers, operating cadence, and OKR guardrails." },
  { id: "rhythm", label: "Rhythm", desc: "Leadership rituals, decisions, action ownership, follow-up health, and operating guardrails." },
  { id: "dataRoom", label: "Data Room", desc: "Controlled rooms, evidence packs, access requests, exports, and audit-safe sharing." },
  { id: "aiGovernance", label: "AI Gov", desc: "Model approvals, risk tiers, deployment gates, policy exceptions, and review sign-offs." },
  { id: "modelRisk", label: "Model Risk", desc: "Model risk tiers, release gates, drift signals, fallback risk, human review, and production guardrails." },
  { id: "webOps", label: "Web Ops", desc: "Deployments, frontend performance, browser coverage, accessibility, flags, and web rollout guardrails." },
  { id: "telemetryOps", label: "Telemetry", desc: "Web, mobile, admin, and API event pipelines, schemas, privacy filters, and certified dashboards." },
  { id: "statusOps", label: "Status Ops", desc: "Public status, incidents, maintenance windows, subscriber alerts, and postmortem readiness." },
  { id: "incidentResponse", label: "Incident Ops", desc: "Incident command, severity lanes, rollback readiness, communications, and postmortems." },
  { id: "dataQualityOps", label: "Data Quality", desc: "Certified metrics, freshness, reconciliation, lineage, quality incidents, and decision-grade data." },
  { id: "consentOps", label: "Consent Ops", desc: "Consent surfaces, training eligibility, withdrawals, policy coverage, and audit trail." },
  { id: "secretsOps", label: "Secrets", desc: "API tokens, provider keys, KMS posture, certificate expiry, rotations, and leak response." },
  { id: "mobileOps", label: "Mobile Ops", desc: "Android/iOS releases, crash health, store readiness, device labs, and rollout guardrails." },
  { id: "risk", label: "Risk", desc: "Enterprise risk register, mitigations, board items, heatmap, owners, and review cadence." },
  { id: "legal", label: "Legal", desc: "Contracts, DPAs, policies, legal requests, approvals, and counsel-boundary guardrails." },
  { id: "communications", label: "Comms", desc: "Broadcasts, campaigns, templates, incident notices, push/email health, and delivery guardrails." },
  { id: "notifications", label: "Notify Ops", desc: "Push, email, SMS, in-app delivery, consent, quiet hours, failover, and notification guardrails." },
  { id: "people", label: "People", desc: "Team coverage, hiring, reviewer capacity, on-call load, enablement, and workforce guardrails." },
  { id: "vendors", label: "Vendors", desc: "Vendor inventory, renewals, procurement diligence, spend variance, and third-party risk." },
  { id: "regional", label: "Regional", desc: "Country launch readiness, localization, blockers, local partners, and market guardrails." },
  { id: "qa", label: "QA", desc: "Regression suites, device coverage, release blockers, accessibility checks, and QA guardrails." },
  { id: "roadmap", label: "Roadmap", desc: "Initiatives, release candidates, dependencies, customer requests, and product guardrails." },
  { id: "community", label: "Community", desc: "Contributors, corrections, ambassadors, events, ecosystem programs, and trust guardrails." },
  { id: "payments", label: "Payments", desc: "Plans, upgrades, invoices, failed payments, refunds, taxes, and MRR." },
  { id: "entitlements", label: "Entitlements", desc: "Plan limits, usage metering, overages, voice minutes, API quotas, upgrade gates, and quota guardrails." },
  { id: "revenueAssurance", label: "Revenue Ops", desc: "Revenue leakage, VAT/GST coverage, payout reconciliation, recognition, invoice exceptions, and audit guardrails." },
  { id: "subscriptions", label: "Subscriptions", desc: "Trials, renewals, cancellations, downgrades, grace periods, migrations, winback, and lifecycle guardrails." },
  { id: "finance", label: "Finance", desc: "Cost centers, margins, forecasts, refunds, cloud spend, model spend, and optimization queues." },
  { id: "unitEconomics", label: "Unit Econ", desc: "Cost per message, plan margins, route economics, margin leaks, and pricing actions." },
  { id: "users", label: "Users and Orgs", desc: "Consumer accounts, enterprise workspaces, risk, support, and seats." },
  { id: "success", label: "Success", desc: "Enterprise account health, onboarding, renewals, expansion, and customer success playbooks." },
  { id: "sales", label: "Sales", desc: "Enterprise pipeline, demos, procurement, partners, and expansion revenue motions." },
  { id: "support", label: "Support", desc: "Tickets, SLA, escalations, CSAT, macros, user-impact signals, and safe support boundaries." },
  { id: "conversations", label: "Conversations", desc: "Chat health, streaming, message queues, failed responses, attachments, replay controls, and UX signals." },
  { id: "prompts", label: "Prompts", desc: "Prompt sets, mode workflows, template tests, rollback controls, review queues, and release guardrails." },
  { id: "customerExperience", label: "CX", desc: "NPS, CSAT, sentiment themes, product insights, app-store signals, and customer experience guardrails." },
  { id: "models", label: "AI Ops", desc: "Hugging Face sources, routing, latency, fallbacks, quality, and costs." },
  { id: "licensing", label: "Licensing", desc: "Model licenses, dataset provenance, rights risks, usage restrictions, attribution, and consent guardrails." },
  { id: "datasets", label: "Datasets", desc: "Dataset provenance, consent, training/eval reuse, correction loops, quality coverage, and data governance guardrails." },
  { id: "evaluations", label: "Evals", desc: "Model eval suites, benchmark runs, regressions, human samples, and release gates." },
  { id: "languages", label: "Languages", desc: "Country coverage, dialect readiness, reviewer queues, benchmarks, and expansion quality." },
  { id: "culture", label: "Culture", desc: "Tone quality, dialect parity, cultural review queues, reviewer calibration, and sensitive context guardrails." },
  { id: "reviewers", label: "Reviewers", desc: "Human QA reviewer network, calibration, review queues, workload, onboarding, and quality guardrails." },
  { id: "improvement", label: "Improve", desc: "Correction feedback loops, consent gates, reviewer decisions, eval impact, and training handoffs." },
  { id: "voiceOps", label: "Voice Ops", desc: "African speech routes, accent coverage, mobile capture, consent, latency, and voice review queues." },
  { id: "translationOps", label: "Translate Ops", desc: "Translation route quality, meaning preservation, dialect drift, review queues, and enterprise controls." },
  { id: "creatorOps", label: "Creator Ops", desc: "Creator Studio content modes, template health, brand safety, monetization, and workflow queues." },
  { id: "classroomOps", label: "Classroom Ops", desc: "Learning sessions, curriculum coverage, pedagogy signals, safety queues, and education partnerships." },
  { id: "marketOps", label: "Market Ops", desc: "SMB customer replies, pricing copy, commerce risks, market templates, and upgrade signals." },
  { id: "multimodalOps", label: "Multimodal Ops", desc: "Uploads, images, documents, OCR, attachment safety, retention, and device upload health." },
  { id: "searchOps", label: "Search Ops", desc: "Web lookup, RAG retrieval, citations, source freshness, hallucination controls, and search guardrails." },
  { id: "workspaceOps", label: "Workspace Ops", desc: "Projects, shared workspaces, collaboration, file governance, permissions, and sync health." },
  { id: "passport", label: "Passport", desc: "Language Passport completion, field quality, language pairs, personalization surfaces, consent, and risk controls." },
  { id: "localization", label: "Localize", desc: "UI copy localization, translation QA, glossary control, reviewer workflow, and release guardrails." },
  { id: "data", label: "Data Gov", desc: "Retention, consent, residency, deletion/export workflows, PII handling, and tenant boundaries." },
  { id: "memory", label: "Memory", desc: "Personalization memory, language passport controls, consent, deletion/export, and safe remembered context." },
  { id: "residency", label: "Residency", desc: "Country residency, storage regions, cross-border transfers, key custody, retention, and sovereignty guardrails." },
  { id: "privacy", label: "Privacy Ops", desc: "DSAR exports, deletion queues, correction requests, legal holds, residency reviews, and privacy guardrails." },
  { id: "dpia", label: "DPIA", desc: "High-risk processing, impact assessments, mitigations, launch approvals, residual risks, and DPIA guardrails." },
  { id: "knowledge", label: "Knowledge", desc: "RAG collections, sources, indexing, embeddings, permissions, freshness, and quality queues." },
  { id: "policy", label: "Policy", desc: "Policy versions, content taxonomy, reviewer guidance, enforcement rules, appeals, and localization guardrails." },
  { id: "safety", label: "Safety", desc: "Moderation, corrections, privacy, red-team findings, appeals, and policy." },
  { id: "fraud", label: "Fraud", desc: "Bot defense, account abuse, payment risk, API misuse, enforcement, and appeals." },
  { id: "security", label: "Security", desc: "Threats, MFA/SSO, device trust, audit integrity, data requests, and compliance readiness." },
  { id: "platform", label: "Platform", desc: "Web, mobile, API, infrastructure, incidents, releases, and feature flags." },
  { id: "devex", label: "DevEx", desc: "Build pipelines, deploy automation, environments, quality gates, developer tooling, and delivery guardrails." },
  { id: "infrastructure", label: "Infrastructure", desc: "Services, queues, GPU clusters, databases, incidents, uptime, and reliability guardrails." },
  { id: "continuity", label: "Continuity", desc: "Disaster recovery, backups, RTO/RPO, restore drills, incident command, and continuity guardrails." },
  { id: "slos", label: "SLOs", desc: "Customer-facing uptime, error budgets, regional reliability, status page, and SLA guardrails." },
  { id: "observability", label: "Observe", desc: "Logs, traces, alert routes, debugging signals, dashboards, redaction, and observability guardrails." },
  { id: "capacity", label: "Capacity", desc: "Demand forecasts, GPU headroom, storage growth, scaling plans, and capacity guardrails." },
  { id: "api", label: "API", desc: "Keys, quotas, SDKs, webhooks, rate limits, errors, and partner integration health." },
  { id: "integrations", label: "Integrations", desc: "Connected services, partner systems, webhook retries, secrets, and vendor health." },
  { id: "access", label: "Access", desc: "Seed-admin grants, RBAC, audit logs, compliance, data residency, and SSO." },
  { id: "investigations", label: "Investigate", desc: "Case reviews, evidence custody, incident timelines, legal holds, handoffs, and forensic guardrails." },
  { id: "identity", label: "Identity", desc: "Signup, login, MFA, SSO, verification, account recovery, session risk, and auth guardrails." },
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
  adminDevexCicd: null,
  adminDevexCicdLoadedAt: null,
  adminPayments: null,
  adminPaymentsLoadedAt: null,
  adminEntitlements: null,
  adminEntitlementsLoadedAt: null,
  adminRevenueAssurance: null,
  adminRevenueAssuranceLoadedAt: null,
  adminSubscriptions: null,
  adminSubscriptionsLoadedAt: null,
  adminFinance: null,
  adminFinanceLoadedAt: null,
  adminUnitEconomics: null,
  adminUnitEconomicsLoadedAt: null,
  adminUsers: null,
  adminUsersLoadedAt: null,
  adminModels: null,
  adminModelsLoadedAt: null,
  adminModelLicensing: null,
  adminModelLicensingLoadedAt: null,
  adminDatasetGovernance: null,
  adminDatasetGovernanceLoadedAt: null,
  adminSafety: null,
  adminSafetyLoadedAt: null,
  adminSecurity: null,
  adminSecurityLoadedAt: null,
  adminGrowth: null,
  adminGrowthLoadedAt: null,
  adminAnalytics: null,
  adminAnalyticsLoadedAt: null,
  adminLifecycleRetention: null,
  adminLifecycleRetentionLoadedAt: null,
  adminReports: null,
  adminReportsLoadedAt: null,
  adminWarehouseBi: null,
  adminWarehouseBiLoadedAt: null,
  adminRisk: null,
  adminRiskLoadedAt: null,
  adminLegal: null,
  adminLegalLoadedAt: null,
  adminPeople: null,
  adminPeopleLoadedAt: null,
  adminVendors: null,
  adminVendorsLoadedAt: null,
  adminRegionalLaunch: null,
  adminRegionalLaunchLoadedAt: null,
  adminQa: null,
  adminQaLoadedAt: null,
  adminRoadmap: null,
  adminRoadmapLoadedAt: null,
  adminCommunity: null,
  adminCommunityLoadedAt: null,
  adminComplianceEvidence: null,
  adminComplianceEvidenceLoadedAt: null,
  adminTrustCenter: null,
  adminTrustCenterLoadedAt: null,
  adminBoardGovernance: null,
  adminBoardGovernanceLoadedAt: null,
  adminInvestorRelations: null,
  adminInvestorRelationsLoadedAt: null,
  adminProcurementRevenue: null,
  adminProcurementRevenueLoadedAt: null,
  adminStrategicPartnerships: null,
  adminStrategicPartnershipsLoadedAt: null,
  adminLaunchReadiness: null,
  adminLaunchReadinessLoadedAt: null,
  adminExecutiveOkrs: null,
  adminExecutiveOkrsLoadedAt: null,
  adminOperatingRhythm: null,
  adminOperatingRhythmLoadedAt: null,
  adminDataRoom: null,
  adminDataRoomLoadedAt: null,
  adminAiGovernance: null,
  adminAiGovernanceLoadedAt: null,
  adminModelRisk: null,
  adminModelRiskLoadedAt: null,
  adminWebOps: null,
  adminWebOpsLoadedAt: null,
  adminTelemetryOps: null,
  adminTelemetryOpsLoadedAt: null,
  adminStatusOps: null,
  adminStatusOpsLoadedAt: null,
  adminIncidentResponse: null,
  adminIncidentResponseLoadedAt: null,
  adminDataQualityOps: null,
  adminDataQualityOpsLoadedAt: null,
  adminConsentOps: null,
  adminConsentOpsLoadedAt: null,
  adminSecretsOps: null,
  adminSecretsOpsLoadedAt: null,
  adminMobileOps: null,
  adminMobileOpsLoadedAt: null,
  adminCommunications: null,
  adminCommunicationsLoadedAt: null,
  adminNotificationDelivery: null,
  adminNotificationDeliveryLoadedAt: null,
  adminLanguages: null,
  adminLanguagesLoadedAt: null,
  adminCulturalQuality: null,
  adminCulturalQualityLoadedAt: null,
  adminReviewerNetwork: null,
  adminReviewerNetworkLoadedAt: null,
  adminCorrectionImprovement: null,
  adminCorrectionImprovementLoadedAt: null,
  adminVoiceSpeech: null,
  adminVoiceSpeechLoadedAt: null,
  adminTranslationOps: null,
  adminTranslationOpsLoadedAt: null,
  adminCreatorStudio: null,
  adminCreatorStudioLoadedAt: null,
  adminClassroomLearning: null,
  adminClassroomLearningLoadedAt: null,
  adminMarketCommerce: null,
  adminMarketCommerceLoadedAt: null,
  adminMultimodal: null,
  adminMultimodalLoadedAt: null,
  adminSearchRetrieval: null,
  adminSearchRetrievalLoadedAt: null,
  adminWorkspaceCollaboration: null,
  adminWorkspaceCollaborationLoadedAt: null,
  adminLanguagePassport: null,
  adminLanguagePassportLoadedAt: null,
  adminLocalizationContent: null,
  adminLocalizationContentLoadedAt: null,
  adminDataGovernance: null,
  adminDataGovernanceLoadedAt: null,
  adminMemoryPersonalization: null,
  adminMemoryPersonalizationLoadedAt: null,
  adminResidencySovereignty: null,
  adminResidencySovereigntyLoadedAt: null,
  adminPrivacyRequests: null,
  adminPrivacyRequestsLoadedAt: null,
  adminDpia: null,
  adminDpiaLoadedAt: null,
  adminPolicyGovernance: null,
  adminPolicyGovernanceLoadedAt: null,
  adminIntegrations: null,
  adminIntegrationsLoadedAt: null,
  adminExperiments: null,
  adminExperimentsLoadedAt: null,
  adminEvaluations: null,
  adminEvaluationsLoadedAt: null,
  adminCustomerSuccess: null,
  adminCustomerSuccessLoadedAt: null,
  adminSales: null,
  adminSalesLoadedAt: null,
  adminInfrastructure: null,
  adminInfrastructureLoadedAt: null,
  adminBusinessContinuity: null,
  adminBusinessContinuityLoadedAt: null,
  adminReliabilitySlos: null,
  adminReliabilitySlosLoadedAt: null,
  adminObservabilityLogs: null,
  adminObservabilityLogsLoadedAt: null,
  adminCapacityPlanning: null,
  adminCapacityPlanningLoadedAt: null,
  adminAccess: null,
  adminAccessLoadedAt: null,
  adminInvestigations: null,
  adminInvestigationsLoadedAt: null,
  adminIdentityAuth: null,
  adminIdentityAuthLoadedAt: null,
  adminActions: null,
  adminActionsLoadedAt: null,
  adminApi: null,
  adminApiLoadedAt: null,
  adminKnowledge: null,
  adminKnowledgeLoadedAt: null,
  adminSupport: null,
  adminSupportLoadedAt: null,
  adminConversations: null,
  adminConversationsLoadedAt: null,
  adminPromptWorkflows: null,
  adminPromptWorkflowsLoadedAt: null,
  adminCustomerExperience: null,
  adminCustomerExperienceLoadedAt: null,
  adminFraudAbuse: null,
  adminFraudAbuseLoadedAt: null,
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

async function loadAdminDevexCicd(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminDevexCicdLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/devex-cicd`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("DevEx CI/CD operations unavailable.");
    state.adminDevexCicd = await response.json();
    state.adminApiStatus = "connected";
    state.adminDevexCicdLoadedAt = Date.now();
  } catch {
    state.adminDevexCicdLoadedAt = Date.now();
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

async function loadAdminBusinessContinuity(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminBusinessContinuityLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/business-continuity`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Business continuity operations unavailable.");
    state.adminBusinessContinuity = await response.json();
    state.adminApiStatus = "connected";
    state.adminBusinessContinuityLoadedAt = Date.now();
  } catch {
    state.adminBusinessContinuityLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminReliabilitySlos(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminReliabilitySlosLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/reliability-slos`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Reliability SLOs unavailable.");
    state.adminReliabilitySlos = await response.json();
    state.adminApiStatus = "connected";
    state.adminReliabilitySlosLoadedAt = Date.now();
  } catch {
    state.adminReliabilitySlosLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminObservabilityLogs(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminObservabilityLogsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/observability-logs`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Observability logs unavailable.");
    state.adminObservabilityLogs = await response.json();
    state.adminApiStatus = "connected";
    state.adminObservabilityLogsLoadedAt = Date.now();
  } catch {
    state.adminObservabilityLogsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminCapacityPlanning(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminCapacityPlanningLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/capacity-planning`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Capacity planning unavailable.");
    state.adminCapacityPlanning = await response.json();
    state.adminApiStatus = "connected";
    state.adminCapacityPlanningLoadedAt = Date.now();
  } catch {
    state.adminCapacityPlanningLoadedAt = Date.now();
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

async function loadAdminWarehouseBi(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminWarehouseBiLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/warehouse-bi`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Warehouse BI unavailable.");
    state.adminWarehouseBi = await response.json();
    state.adminApiStatus = "connected";
    state.adminWarehouseBiLoadedAt = Date.now();
  } catch {
    state.adminWarehouseBiLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminRisk(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminRiskLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/risk`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Risk register unavailable.");
    state.adminRisk = await response.json();
    state.adminApiStatus = "connected";
    state.adminRiskLoadedAt = Date.now();
  } catch {
    state.adminRiskLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminLegal(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminLegalLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/legal`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Legal and policy unavailable.");
    state.adminLegal = await response.json();
    state.adminApiStatus = "connected";
    state.adminLegalLoadedAt = Date.now();
  } catch {
    state.adminLegalLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminPeople(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminPeopleLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/people`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("People operations unavailable.");
    state.adminPeople = await response.json();
    state.adminApiStatus = "connected";
    state.adminPeopleLoadedAt = Date.now();
  } catch {
    state.adminPeopleLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminVendors(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminVendorsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/vendors`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Vendor operations unavailable.");
    state.adminVendors = await response.json();
    state.adminApiStatus = "connected";
    state.adminVendorsLoadedAt = Date.now();
  } catch {
    state.adminVendorsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminRegionalLaunch(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminRegionalLaunchLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/regional-launch`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Regional launch unavailable.");
    state.adminRegionalLaunch = await response.json();
    state.adminApiStatus = "connected";
    state.adminRegionalLaunchLoadedAt = Date.now();
  } catch {
    state.adminRegionalLaunchLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminQa(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminQaLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/qa`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("QA operations unavailable.");
    state.adminQa = await response.json();
    state.adminApiStatus = "connected";
    state.adminQaLoadedAt = Date.now();
  } catch {
    state.adminQaLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminRoadmap(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminRoadmapLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/roadmap`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Roadmap operations unavailable.");
    state.adminRoadmap = await response.json();
    state.adminApiStatus = "connected";
    state.adminRoadmapLoadedAt = Date.now();
  } catch {
    state.adminRoadmapLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminCommunity(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminCommunityLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/community`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Community operations unavailable.");
    state.adminCommunity = await response.json();
    state.adminApiStatus = "connected";
    state.adminCommunityLoadedAt = Date.now();
  } catch {
    state.adminCommunityLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminComplianceEvidence(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminComplianceEvidenceLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/compliance-evidence`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Compliance evidence unavailable.");
    state.adminComplianceEvidence = await response.json();
    state.adminApiStatus = "connected";
    state.adminComplianceEvidenceLoadedAt = Date.now();
  } catch {
    state.adminComplianceEvidenceLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminTrustCenter(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminTrustCenterLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/trust-center`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Trust Center unavailable.");
    state.adminTrustCenter = await response.json();
    state.adminApiStatus = "connected";
    state.adminTrustCenterLoadedAt = Date.now();
  } catch {
    state.adminTrustCenterLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminBoardGovernance(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminBoardGovernanceLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/board-governance`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Board governance unavailable.");
    state.adminBoardGovernance = await response.json();
    state.adminApiStatus = "connected";
    state.adminBoardGovernanceLoadedAt = Date.now();
  } catch {
    state.adminBoardGovernanceLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminInvestorRelations(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminInvestorRelationsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/investor-relations`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Investor relations unavailable.");
    state.adminInvestorRelations = await response.json();
    state.adminApiStatus = "connected";
    state.adminInvestorRelationsLoadedAt = Date.now();
  } catch {
    state.adminInvestorRelationsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminProcurementRevenue(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminProcurementRevenueLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/procurement-revenue`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Procurement revenue unavailable.");
    state.adminProcurementRevenue = await response.json();
    state.adminApiStatus = "connected";
    state.adminProcurementRevenueLoadedAt = Date.now();
  } catch {
    state.adminProcurementRevenueLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminStrategicPartnerships(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminStrategicPartnershipsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/strategic-partnerships`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Strategic partnerships unavailable.");
    state.adminStrategicPartnerships = await response.json();
    state.adminApiStatus = "connected";
    state.adminStrategicPartnershipsLoadedAt = Date.now();
  } catch {
    state.adminStrategicPartnershipsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminLaunchReadiness(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminLaunchReadinessLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/launch-readiness`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Launch readiness unavailable.");
    state.adminLaunchReadiness = await response.json();
    state.adminApiStatus = "connected";
    state.adminLaunchReadinessLoadedAt = Date.now();
  } catch {
    state.adminLaunchReadinessLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminExecutiveOkrs(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminExecutiveOkrsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/executive-okrs`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Executive OKRs unavailable.");
    state.adminExecutiveOkrs = await response.json();
    state.adminApiStatus = "connected";
    state.adminExecutiveOkrsLoadedAt = Date.now();
  } catch {
    state.adminExecutiveOkrsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminOperatingRhythm(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminOperatingRhythmLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/operating-rhythm`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Operating rhythm unavailable.");
    state.adminOperatingRhythm = await response.json();
    state.adminApiStatus = "connected";
    state.adminOperatingRhythmLoadedAt = Date.now();
  } catch {
    state.adminOperatingRhythmLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminDataRoom(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminDataRoomLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/data-room`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Data room unavailable.");
    state.adminDataRoom = await response.json();
    state.adminApiStatus = "connected";
    state.adminDataRoomLoadedAt = Date.now();
  } catch {
    state.adminDataRoomLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminAiGovernance(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminAiGovernanceLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/ai-governance`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("AI governance unavailable.");
    state.adminAiGovernance = await response.json();
    state.adminApiStatus = "connected";
    state.adminAiGovernanceLoadedAt = Date.now();
  } catch {
    state.adminAiGovernanceLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminModelRisk(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminModelRiskLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/model-risk`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Model risk operations unavailable.");
    state.adminModelRisk = await response.json();
    state.adminApiStatus = "connected";
    state.adminModelRiskLoadedAt = Date.now();
  } catch {
    state.adminModelRiskLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminWebOps(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminWebOpsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/web-ops`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Web ops unavailable.");
    state.adminWebOps = await response.json();
    state.adminApiStatus = "connected";
    state.adminWebOpsLoadedAt = Date.now();
  } catch {
    state.adminWebOpsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminTelemetryOps(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminTelemetryOpsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/telemetry`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Telemetry operations unavailable.");
    state.adminTelemetryOps = await response.json();
    state.adminApiStatus = "connected";
    state.adminTelemetryOpsLoadedAt = Date.now();
  } catch {
    state.adminTelemetryOpsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminStatusOps(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminStatusOpsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/status-ops`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Status operations unavailable.");
    state.adminStatusOps = await response.json();
    state.adminApiStatus = "connected";
    state.adminStatusOpsLoadedAt = Date.now();
  } catch {
    state.adminStatusOpsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminIncidentResponse(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminIncidentResponseLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/incident-response`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Incident response operations unavailable.");
    state.adminIncidentResponse = await response.json();
    state.adminApiStatus = "connected";
    state.adminIncidentResponseLoadedAt = Date.now();
  } catch {
    state.adminIncidentResponseLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminDataQualityOps(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminDataQualityOpsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/data-quality`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Data quality operations unavailable.");
    state.adminDataQualityOps = await response.json();
    state.adminApiStatus = "connected";
    state.adminDataQualityOpsLoadedAt = Date.now();
  } catch {
    state.adminDataQualityOpsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminConsentOps(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminConsentOpsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/consent`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Consent operations unavailable.");
    state.adminConsentOps = await response.json();
    state.adminApiStatus = "connected";
    state.adminConsentOpsLoadedAt = Date.now();
  } catch {
    state.adminConsentOpsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminSecretsOps(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminSecretsOpsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/secrets`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Secrets operations unavailable.");
    state.adminSecretsOps = await response.json();
    state.adminApiStatus = "connected";
    state.adminSecretsOpsLoadedAt = Date.now();
  } catch {
    state.adminSecretsOpsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminMobileOps(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminMobileOpsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/mobile-ops`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Mobile ops unavailable.");
    state.adminMobileOps = await response.json();
    state.adminApiStatus = "connected";
    state.adminMobileOpsLoadedAt = Date.now();
  } catch {
    state.adminMobileOpsLoadedAt = Date.now();
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

async function loadAdminNotificationDelivery(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminNotificationDeliveryLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/notification-delivery`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Notification delivery unavailable.");
    state.adminNotificationDelivery = await response.json();
    state.adminApiStatus = "connected";
    state.adminNotificationDeliveryLoadedAt = Date.now();
  } catch {
    state.adminNotificationDeliveryLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminLanguages(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminLanguagesLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/languages`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Language intelligence unavailable.");
    state.adminLanguages = await response.json();
    state.adminApiStatus = "connected";
    state.adminLanguagesLoadedAt = Date.now();
  } catch {
    state.adminLanguagesLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminCulturalQuality(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminCulturalQualityLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/cultural-quality`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Cultural quality unavailable.");
    state.adminCulturalQuality = await response.json();
    state.adminApiStatus = "connected";
    state.adminCulturalQualityLoadedAt = Date.now();
  } catch {
    state.adminCulturalQualityLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminReviewerNetwork(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminReviewerNetworkLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/reviewer-network`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Reviewer network unavailable.");
    state.adminReviewerNetwork = await response.json();
    state.adminApiStatus = "connected";
    state.adminReviewerNetworkLoadedAt = Date.now();
  } catch {
    state.adminReviewerNetworkLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminCorrectionImprovement(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminCorrectionImprovementLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/correction-improvement`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Correction improvement unavailable.");
    state.adminCorrectionImprovement = await response.json();
    state.adminApiStatus = "connected";
    state.adminCorrectionImprovementLoadedAt = Date.now();
  } catch {
    state.adminCorrectionImprovementLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminVoiceSpeech(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminVoiceSpeechLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/voice-speech`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Voice speech operations unavailable.");
    state.adminVoiceSpeech = await response.json();
    state.adminApiStatus = "connected";
    state.adminVoiceSpeechLoadedAt = Date.now();
  } catch {
    state.adminVoiceSpeechLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminTranslationOps(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminTranslationOpsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/translation-ops`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Translation operations unavailable.");
    state.adminTranslationOps = await response.json();
    state.adminApiStatus = "connected";
    state.adminTranslationOpsLoadedAt = Date.now();
  } catch {
    state.adminTranslationOpsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminCreatorStudio(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminCreatorStudioLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/creator-studio`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Creator Studio operations unavailable.");
    state.adminCreatorStudio = await response.json();
    state.adminApiStatus = "connected";
    state.adminCreatorStudioLoadedAt = Date.now();
  } catch {
    state.adminCreatorStudioLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminClassroomLearning(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminClassroomLearningLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/classroom-learning`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Classroom learning operations unavailable.");
    state.adminClassroomLearning = await response.json();
    state.adminApiStatus = "connected";
    state.adminClassroomLearningLoadedAt = Date.now();
  } catch {
    state.adminClassroomLearningLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminMarketCommerce(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminMarketCommerceLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/market-commerce`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Market commerce operations unavailable.");
    state.adminMarketCommerce = await response.json();
    state.adminApiStatus = "connected";
    state.adminMarketCommerceLoadedAt = Date.now();
  } catch {
    state.adminMarketCommerceLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminMultimodal(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminMultimodalLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/multimodal`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Multimodal operations unavailable.");
    state.adminMultimodal = await response.json();
    state.adminApiStatus = "connected";
    state.adminMultimodalLoadedAt = Date.now();
  } catch {
    state.adminMultimodalLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminSearchRetrieval(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminSearchRetrievalLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/search-retrieval`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Search retrieval operations unavailable.");
    state.adminSearchRetrieval = await response.json();
    state.adminApiStatus = "connected";
    state.adminSearchRetrievalLoadedAt = Date.now();
  } catch {
    state.adminSearchRetrievalLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminWorkspaceCollaboration(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminWorkspaceCollaborationLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/workspace-collaboration`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Workspace collaboration operations unavailable.");
    state.adminWorkspaceCollaboration = await response.json();
    state.adminApiStatus = "connected";
    state.adminWorkspaceCollaborationLoadedAt = Date.now();
  } catch {
    state.adminWorkspaceCollaborationLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminLanguagePassport(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminLanguagePassportLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/language-passport`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Language Passport operations unavailable.");
    state.adminLanguagePassport = await response.json();
    state.adminApiStatus = "connected";
    state.adminLanguagePassportLoadedAt = Date.now();
  } catch {
    state.adminLanguagePassportLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminLocalizationContent(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminLocalizationContentLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/localization-content`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Localization content unavailable.");
    state.adminLocalizationContent = await response.json();
    state.adminApiStatus = "connected";
    state.adminLocalizationContentLoadedAt = Date.now();
  } catch {
    state.adminLocalizationContentLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminDataGovernance(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminDataGovernanceLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/data-governance`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Data governance unavailable.");
    state.adminDataGovernance = await response.json();
    state.adminApiStatus = "connected";
    state.adminDataGovernanceLoadedAt = Date.now();
  } catch {
    state.adminDataGovernanceLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminMemoryPersonalization(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminMemoryPersonalizationLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/memory-personalization`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Memory personalization unavailable.");
    state.adminMemoryPersonalization = await response.json();
    state.adminApiStatus = "connected";
    state.adminMemoryPersonalizationLoadedAt = Date.now();
  } catch {
    state.adminMemoryPersonalizationLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminResidencySovereignty(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminResidencySovereigntyLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/residency-sovereignty`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Residency and sovereignty operations unavailable.");
    state.adminResidencySovereignty = await response.json();
    state.adminApiStatus = "connected";
    state.adminResidencySovereigntyLoadedAt = Date.now();
  } catch {
    state.adminResidencySovereigntyLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminPrivacyRequests(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminPrivacyRequestsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/privacy-requests`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Privacy requests unavailable.");
    state.adminPrivacyRequests = await response.json();
    state.adminApiStatus = "connected";
    state.adminPrivacyRequestsLoadedAt = Date.now();
  } catch {
    state.adminPrivacyRequestsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminDpia(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminDpiaLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/dpia`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("DPIA operations unavailable.");
    state.adminDpia = await response.json();
    state.adminApiStatus = "connected";
    state.adminDpiaLoadedAt = Date.now();
  } catch {
    state.adminDpiaLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminPolicyGovernance(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminPolicyGovernanceLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/policy-governance`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Policy governance operations unavailable.");
    state.adminPolicyGovernance = await response.json();
    state.adminApiStatus = "connected";
    state.adminPolicyGovernanceLoadedAt = Date.now();
  } catch {
    state.adminPolicyGovernanceLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminIntegrations(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminIntegrationsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/integrations`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Integrations unavailable.");
    state.adminIntegrations = await response.json();
    state.adminApiStatus = "connected";
    state.adminIntegrationsLoadedAt = Date.now();
  } catch {
    state.adminIntegrationsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminExperiments(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminExperimentsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/experiments`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Experimentation center unavailable.");
    state.adminExperiments = await response.json();
    state.adminApiStatus = "connected";
    state.adminExperimentsLoadedAt = Date.now();
  } catch {
    state.adminExperimentsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminEvaluations(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminEvaluationsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/evaluations`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Model evaluation lab unavailable.");
    state.adminEvaluations = await response.json();
    state.adminApiStatus = "connected";
    state.adminEvaluationsLoadedAt = Date.now();
  } catch {
    state.adminEvaluationsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminCustomerSuccess(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminCustomerSuccessLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/customer-success`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Customer success unavailable.");
    state.adminCustomerSuccess = await response.json();
    state.adminApiStatus = "connected";
    state.adminCustomerSuccessLoadedAt = Date.now();
  } catch {
    state.adminCustomerSuccessLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminSales(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminSalesLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/sales`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Sales pipeline unavailable.");
    state.adminSales = await response.json();
    state.adminApiStatus = "connected";
    state.adminSalesLoadedAt = Date.now();
  } catch {
    state.adminSalesLoadedAt = Date.now();
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

async function loadAdminEntitlements(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminEntitlementsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/entitlements`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Entitlement operations unavailable.");
    state.adminEntitlements = await response.json();
    state.adminApiStatus = "connected";
    state.adminEntitlementsLoadedAt = Date.now();
  } catch {
    state.adminEntitlementsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminRevenueAssurance(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminRevenueAssuranceLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/revenue-assurance`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Revenue assurance operations unavailable.");
    state.adminRevenueAssurance = await response.json();
    state.adminApiStatus = "connected";
    state.adminRevenueAssuranceLoadedAt = Date.now();
  } catch {
    state.adminRevenueAssuranceLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminSubscriptions(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminSubscriptionsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/subscriptions`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Subscription lifecycle operations unavailable.");
    state.adminSubscriptions = await response.json();
    state.adminApiStatus = "connected";
    state.adminSubscriptionsLoadedAt = Date.now();
  } catch {
    state.adminSubscriptionsLoadedAt = Date.now();
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

async function loadAdminUnitEconomics(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminUnitEconomicsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/unit-economics`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Unit economics unavailable.");
    state.adminUnitEconomics = await response.json();
    state.adminApiStatus = "connected";
    state.adminUnitEconomicsLoadedAt = Date.now();
  } catch {
    state.adminUnitEconomicsLoadedAt = Date.now();
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

async function loadAdminModelLicensing(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminModelLicensingLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/model-licensing`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Model licensing operations unavailable.");
    state.adminModelLicensing = await response.json();
    state.adminApiStatus = "connected";
    state.adminModelLicensingLoadedAt = Date.now();
  } catch {
    state.adminModelLicensingLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminDatasetGovernance(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminDatasetGovernanceLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/dataset-governance`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Dataset governance operations unavailable.");
    state.adminDatasetGovernance = await response.json();
    state.adminApiStatus = "connected";
    state.adminDatasetGovernanceLoadedAt = Date.now();
  } catch {
    state.adminDatasetGovernanceLoadedAt = Date.now();
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

async function loadAdminFraudAbuse(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminFraudAbuseLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/fraud-abuse`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Fraud and abuse operations unavailable.");
    state.adminFraudAbuse = await response.json();
    state.adminApiStatus = "connected";
    state.adminFraudAbuseLoadedAt = Date.now();
  } catch {
    state.adminFraudAbuseLoadedAt = Date.now();
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

async function loadAdminLifecycleRetention(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminLifecycleRetentionLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/lifecycle-retention`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Lifecycle retention unavailable.");
    state.adminLifecycleRetention = await response.json();
    state.adminApiStatus = "connected";
    state.adminLifecycleRetentionLoadedAt = Date.now();
  } catch {
    state.adminLifecycleRetentionLoadedAt = Date.now();
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

async function loadAdminInvestigations(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminInvestigationsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/investigations`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Investigation operations unavailable.");
    state.adminInvestigations = await response.json();
    state.adminApiStatus = "connected";
    state.adminInvestigationsLoadedAt = Date.now();
  } catch {
    state.adminInvestigationsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminIdentityAuth(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminIdentityAuthLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/identity-auth`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Identity auth unavailable.");
    state.adminIdentityAuth = await response.json();
    state.adminApiStatus = "connected";
    state.adminIdentityAuthLoadedAt = Date.now();
  } catch {
    state.adminIdentityAuthLoadedAt = Date.now();
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

async function loadAdminConversations(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminConversationsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/conversations`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Conversation operations unavailable.");
    state.adminConversations = await response.json();
    state.adminApiStatus = "connected";
    state.adminConversationsLoadedAt = Date.now();
  } catch {
    state.adminConversationsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminPromptWorkflows(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminPromptWorkflowsLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/prompt-workflows`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Prompt workflow governance unavailable.");
    state.adminPromptWorkflows = await response.json();
    state.adminApiStatus = "connected";
    state.adminPromptWorkflowsLoadedAt = Date.now();
  } catch {
    state.adminPromptWorkflowsLoadedAt = Date.now();
  }
  saveState();
  if (state.route === "admin") render();
}

async function loadAdminCustomerExperience(force = false) {
  if (!state.adminUnlocked) return;
  const lastLoaded = state.adminCustomerExperienceLoadedAt || 0;
  if (!force && lastLoaded && Date.now() - lastLoaded < 60_000) return;

  try {
    const response = await fetch(`${API_BASE_URL}/v1/admin/customer-experience`, {
      headers: { "X-Seed-Admin-Code": SEED_ADMIN_CODE }
    });
    if (!response.ok) throw new Error("Customer experience intelligence unavailable.");
    state.adminCustomerExperience = await response.json();
    state.adminApiStatus = "connected";
    state.adminCustomerExperienceLoadedAt = Date.now();
  } catch {
    state.adminCustomerExperienceLoadedAt = Date.now();
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
    scopes: ["executive:read", "growth:read", "payments:read", "entitlements:manage", "revenue:assure", "subscriptions:manage", "users:read", "models:operate", "licensing:review", "datasets:govern", "safety:review", "policy:govern", "fraud:review", "platform:operate", "devex:operate", "access:grant", "investigations:review", "identity:operate", "api:manage", "knowledge:operate", "support:review", "conversations:operate", "prompts:govern", "cx:review", "finance:read", "unit:economics", "analytics:read", "lifecycle:manage", "infrastructure:operate", "continuity:manage", "slo:manage", "observability:operate", "capacity:plan", "security:operate", "reporting:export", "warehouse:operate", "risk:review", "legal:review", "people:read", "vendors:manage", "regional:launch", "qa:review", "roadmap:manage", "community:manage", "compliance:evidence", "trust:center", "board:governance", "investor:relations", "procurement:revenue", "partnerships:manage", "launch:readiness", "okr:manage", "operating:rhythm", "data:room", "ai:governance", "model:risk", "web:operate", "telemetry:operate", "status:operate", "incident:respond", "dataquality:operate", "consent:operate", "secrets:operate", "mobile:operate", "communications:send", "notifications:operate", "language:review", "culture:review", "reviewers:manage", "corrections:improve", "voice:operate", "translation:operate", "creator:operate", "classroom:operate", "market:operate", "multimodal:operate", "search:operate", "workspace:operate", "passport:operate", "localization:manage", "data:govern", "memory:govern", "residency:manage", "privacy:operate", "dpia:review", "integrations:manage", "experiments:operate", "evals:review", "success:manage", "sales:manage"],
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

function adminDevexCicdData() {
  return state.adminDevexCicd || {
    summary: { buildSuccess: "96.8%", deploysToday: 14, openBuildBreaks: 2, qualityGatePass: "91%", environments: 5 },
    pipelines: [
      { pipeline: "Web platform CI", repo: "lumora-platform", duration: "6m 12s", owner: "Frontend", status: "Healthy" },
      { pipeline: "API platform CI", repo: "lumora-platform", duration: "4m 48s", owner: "Backend", status: "Healthy" },
      { pipeline: "Admin dashboard checks", repo: "lumora-platform", duration: "5m 30s", owner: "Platform", status: "Watch" },
      { pipeline: "Mobile build preview", repo: "lumora-mobile", duration: "12m 10s", owner: "Mobile", status: "Preparing" }
    ],
    environments: [
      { environment: "Local prototype", branch: "main", freshness: "Current", owner: "Product/Design", status: "Active" },
      { environment: "Preview web", branch: "main", freshness: "On push", owner: "Frontend", status: "Ready" },
      { environment: "Staging API", branch: "main", freshness: "15 min", owner: "Backend", status: "Ready" },
      { environment: "Mobile beta", branch: "release/mobile", freshness: "Nightly", owner: "Mobile", status: "Preparing" },
      { environment: "Production", branch: "release", freshness: "Manual approval", owner: "Platform", status: "Locked" }
    ],
    qualityGates: [
      { gate: "API smoke harness", coverage: "Admin contracts", owner: "Backend", status: "Passing" },
      { gate: "Web syntax harness", coverage: "App shell", owner: "Frontend", status: "Passing" },
      { gate: "Responsive visual QA", coverage: "Web/mobile/admin", owner: "Design QA", status: "Manual" },
      { gate: "Security dependency scan", coverage: "Runtime packages", owner: "Security", status: "Queued" },
      { gate: "Release approval", coverage: "Production deploy", owner: "Seed Admin", status: "Required" }
    ],
    deployAutomation: [
      { automation: "Version tagging", trigger: "Approved release", owner: "Platform", status: "Design" },
      { automation: "Rollback bundle", trigger: "SLO breach", owner: "SRE", status: "Ready" },
      { automation: "Environment smoke", trigger: "Deploy complete", owner: "QA", status: "Ready" },
      { automation: "Changelog generation", trigger: "Merged release PR", owner: "Developer Experience", status: "Queued" }
    ],
    developerTooling: [
      { tool: "Local API smoke command", audience: "Backend", adoption: "100%", status: "Active" },
      { tool: "Admin module generator pattern", audience: "Full stack", adoption: "Draft", status: "Documenting" },
      { tool: "Design screenshot checklist", audience: "Design/QA", adoption: "Manual", status: "Active" },
      { tool: "Mobile release checklist", audience: "Mobile", adoption: "Beta", status: "Preparing" }
    ],
    guardrails: [
      "Production deploys require approval, rollback notes, smoke tests, and customer-impact review.",
      "Secrets and tokens must never be embedded in browser code, logs, screenshots, or generated reports.",
      "CI/CD gates should block release when admin, chat, auth, payments, privacy, or mobile smoke checks fail.",
      "Developer tooling should make the safe path easy without hiding risk from leadership or release owners."
    ]
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

function adminBusinessContinuityData() {
  return state.adminBusinessContinuity || {
    summary: { recoveryReadiness: "88%", backupFreshness: "12 min", openContinuityRisks: 4, restoreDrills: 3, rtoCoverage: "92%" },
    recoveryObjectives: [
      { service: "Chat API", rto: "15 min", rpo: "5 min", owner: "Platform", status: "Ready" },
      { service: "User profiles", rto: "30 min", rpo: "10 min", owner: "Identity", status: "Ready" },
      { service: "Payments ledger", rto: "20 min", rpo: "0 min", owner: "Finance/SRE", status: "Strict" },
      { service: "Model routing", rto: "10 min", rpo: "15 min", owner: "AI Ops", status: "Fallback ready" },
      { service: "Knowledge indexes", rto: "2 hr", rpo: "30 min", owner: "Knowledge Ops", status: "Watch" }
    ],
    backups: [
      { asset: "Primary relational database", cadence: "Continuous WAL + hourly snapshot", lastRestore: "2026-08-05", owner: "SRE", status: "Verified" },
      { asset: "Object storage", cadence: "Versioned daily snapshots", lastRestore: "2026-08-03", owner: "Infrastructure", status: "Verified" },
      { asset: "Vector indexes", cadence: "6-hour snapshot", lastRestore: "2026-07-31", owner: "Knowledge Ops", status: "Drill due" },
      { asset: "Audit logs", cadence: "Immutable stream", lastRestore: "2026-08-07", owner: "Security", status: "Protected" },
      { asset: "Mobile release artifacts", cadence: "Per approved build", lastRestore: "2026-08-01", owner: "Mobile", status: "Archived" }
    ],
    continuityRisks: [
      { risk: "Knowledge index restore time", impact: "Medium", owner: "Knowledge Ops", mitigation: "Warm standby index", status: "In progress" },
      { risk: "Regional payment provider outage", impact: "High", owner: "Revenue Ops", mitigation: "Secondary provider runbook", status: "Design" },
      { risk: "Seed admin unavailability", impact: "High", owner: "Security", mitigation: "Break-glass approval chain", status: "Review" },
      { risk: "Mobile store release delay", impact: "Medium", owner: "Mobile", mitigation: "Remote config and force-update policy", status: "Ready" }
    ],
    incidentCommand: [
      { role: "Incident commander", primary: "SRE Lead", backup: "Platform Lead", status: "Assigned" },
      { role: "Customer communications", primary: "Comms Lead", backup: "Support Lead", status: "Assigned" },
      { role: "Revenue protection", primary: "Finance Ops", backup: "Success Ops", status: "Assigned" },
      { role: "Security/privacy", primary: "Security Lead", backup: "Legal Counsel", status: "Assigned" }
    ],
    regionalFallback: [
      { region: "West Africa edge", fallback: "EU fallback", dependency: "API + model route", status: "Ready" },
      { region: "East Africa edge", fallback: "West Africa edge", dependency: "Chat + translation", status: "Watch latency" },
      { region: "Southern Africa edge", fallback: "EU fallback", dependency: "Auth + chat", status: "Ready" },
      { region: "Global API partners", fallback: "Rate-limited safe mode", dependency: "API keys + webhooks", status: "Designed" }
    ],
    guardrails: [
      "Recovery plans must protect user trust first: private chats, payments, identity, and audit logs have the strictest restore controls.",
      "Every critical service needs a named owner, RTO, RPO, restore evidence, and an executive escalation path.",
      "Break-glass access must be time-bound, seed-admin approved, audited, and reviewed after the incident.",
      "Continuity testing should include web, mobile, API, model routing, payments, support, and customer communications."
    ]
  };
}

function adminReliabilitySlosData() {
  return state.adminReliabilitySlos || {
    summary: { customerUptime: "99.94%", errorBudgetUsed: "38%", sloBreaches: 2, statusReadiness: "Green", regionalWatch: 3 },
    objectives: [
      { objective: "Chat API availability", target: "99.9%", current: "99.94%", window: "30d", status: "Healthy" },
      { objective: "Model response p95", target: "<900ms", current: "842ms", window: "7d", status: "Healthy" },
      { objective: "Voice transcription p95", target: "<1.4s", current: "1.6s", window: "7d", status: "Watch" },
      { objective: "Billing event durability", target: "99.99%", current: "99.98%", window: "30d", status: "Watch" }
    ],
    errorBudgets: [
      { service: "Chat API", budget: "62% remaining", burnRate: "0.8x", owner: "Platform", status: "Safe" },
      { service: "Model router", budget: "48% remaining", burnRate: "1.1x", owner: "AI Ops", status: "Monitor" },
      { service: "Voice pipeline", budget: "21% remaining", burnRate: "2.4x", owner: "Voice Ops", status: "At risk" },
      { service: "Payments webhooks", budget: "34% remaining", burnRate: "1.6x", owner: "Revenue Ops", status: "Watch" }
    ],
    regions: [
      { region: "West Africa edge", uptime: "99.91%", latency: "118ms p95", owner: "Platform", status: "Healthy" },
      { region: "East Africa edge", uptime: "99.87%", latency: "146ms p95", owner: "Platform", status: "Watch" },
      { region: "Southern Africa edge", uptime: "99.95%", latency: "132ms p95", owner: "Platform", status: "Healthy" },
      { region: "EU fallback", uptime: "99.99%", latency: "184ms p95", owner: "Infrastructure", status: "Standby" }
    ],
    statusPage: [
      { item: "Public incident template", audience: "Customers", owner: "Comms", readiness: "94%", status: "Ready" },
      { item: "Regional degradation banner", audience: "Users", owner: "Web/Mobile", readiness: "81%", status: "Review" },
      { item: "Enterprise SLA export", audience: "Teams", owner: "Success", readiness: "76%", status: "Preparing" },
      { item: "Post-incident report pack", audience: "Leadership", owner: "Ops", readiness: "89%", status: "Ready" }
    ],
    guardrails: [
      "SLOs should describe user-visible reliability, not only internal infrastructure health.",
      "High burn-rate services need rollback, capacity, or feature-throttle decisions before budget exhaustion.",
      "Status-page messaging should be fast, accurate, region-aware, and coordinated with support macros.",
      "Enterprise SLA reporting must use aggregated reliability data without exposing internal secrets or raw user events."
    ]
  };
}

function adminObservabilityLogsData() {
  return state.adminObservabilityLogs || {
    summary: { logsIngested: "184M", tracesSampled: "12%", activeAlerts: 7, noisyAlerts: 3, redactionCoverage: "99.4%" },
    logStreams: [
      { stream: "API gateway", volume: "82M/day", retention: "30 days", redaction: "99.6%", status: "Healthy" },
      { stream: "Model router", volume: "48M/day", retention: "30 days", redaction: "99.2%", status: "Watch" },
      { stream: "Billing webhooks", volume: "1.2M/day", retention: "90 days", redaction: "99.9%", status: "Healthy" },
      { stream: "Admin audit events", volume: "18K/day", retention: "7 years", redaction: "Immutable", status: "Protected" }
    ],
    traces: [
      { service: "Chat completion", p95: "620ms", sampleRate: "12%", bottleneck: "Model route", status: "Watch" },
      { service: "Translation", p95: "710ms", sampleRate: "15%", bottleneck: "Fallback route", status: "Healthy" },
      { service: "Voice transcription", p95: "1.8s", sampleRate: "20%", bottleneck: "ASR queue", status: "Investigating" },
      { service: "Admin dashboard", p95: "240ms", sampleRate: "10%", bottleneck: "Metrics fetch", status: "Healthy" }
    ],
    alertRoutes: [
      { alert: "API p95 latency breach", route: "Platform on-call", threshold: "900ms 10m", severity: "High", status: "Armed" },
      { alert: "Model fallback spike", route: "AI Ops", threshold: "+20% 15m", severity: "Medium", status: "Armed" },
      { alert: "Payment webhook retry surge", route: "Revenue Ops", threshold: "100 retries", severity: "Medium", status: "Armed" },
      { alert: "PII redaction miss", route: "Security + Privacy", threshold: "Any confirmed", severity: "Critical", status: "Armed" }
    ],
    incidents: [
      { incident: "Voice p95 above target", signal: "ASR queue", owner: "Voice Ops", eta: "2h", status: "Investigating" },
      { incident: "Noisy mobile crash alert", signal: "Duplicate stack", owner: "Mobile", eta: "Today", status: "Tuning" },
      { incident: "Model route trace gaps", signal: "Sampler config", owner: "AI Ops", eta: "4h", status: "Fixing" }
    ],
    dashboards: [
      { dashboard: "Executive reliability pulse", audience: "Leadership", freshness: "Realtime", owner: "SRE", status: "Live" },
      { dashboard: "AI route observability", audience: "AI Ops", freshness: "2 min", owner: "AI Platform", status: "Live" },
      { dashboard: "Mobile release health", audience: "Mobile", freshness: "5 min", owner: "Mobile", status: "Beta" },
      { dashboard: "Billing webhook health", audience: "Finance", freshness: "Realtime", owner: "Revenue Ops", status: "Live" }
    ],
    guardrails: [
      "Logs and traces must redact prompts, private chats, payment data, tokens, and sensitive identifiers before storage.",
      "Alert routes need owner, threshold, escalation policy, quiet-hour behavior, and customer-impact labeling.",
      "Debugging views should show correlation IDs and aggregates, not raw private user content.",
      "Observability retention should match compliance needs while minimizing sensitive operational data."
    ]
  };
}

function adminCapacityPlanningData() {
  return state.adminCapacityPlanning || {
    summary: { forecastWindow: "90 days", demandGrowth: "+42%", gpuHeadroom: "31%", dbHeadroom: "44%", capacityRisks: 4 },
    forecasts: [
      { forecast: "Mobile launch traffic", surface: "Android/iOS", expectedLift: "+38%", peakWindow: "Sep launch", status: "Preparing" },
      { forecast: "Creator campaign spike", surface: "Web chat", expectedLift: "+24%", peakWindow: "Aug 22", status: "Covered" },
      { forecast: "Enterprise Teams pilot", surface: "API/Teams", expectedLift: "+18%", peakWindow: "Sep pilots", status: "Watch" },
      { forecast: "Language expansion benchmarks", surface: "AI evals", expectedLift: "+31%", peakWindow: "Weekly", status: "Scheduled" }
    ],
    computePools: [
      { pool: "GPU inference A", region: "West Africa edge", utilization: "69%", headroom: "31%", status: "Healthy" },
      { pool: "GPU inference B", region: "EU fallback", utilization: "42%", headroom: "58%", status: "Standby" },
      { pool: "CPU realtime workers", region: "Africa/EU", utilization: "61%", headroom: "39%", status: "Healthy" },
      { pool: "Embedding batch workers", region: "Global", utilization: "78%", headroom: "22%", status: "Watch" }
    ],
    storage: [
      { store: "Primary Postgres", area: "Accounts/billing", growth: "+14% m/m", headroom: "44%", status: "Healthy" },
      { store: "Vector database", area: "RAG/knowledge", growth: "+29% m/m", headroom: "36%", status: "Scale plan" },
      { store: "Object storage", area: "Exports/media", growth: "+21% m/m", headroom: "52%", status: "Healthy" },
      { store: "Audit log archive", area: "Admin/security", growth: "+18% m/m", headroom: "48%", status: "Healthy" }
    ],
    plans: [
      { plan: "Reserve GPU burst pool", owner: "Infrastructure", impact: "Reduce launch latency risk", eta: "Aug 16", status: "Approved" },
      { plan: "Shard vector index by region", owner: "Knowledge Ops", impact: "Improve retrieval headroom", eta: "Aug 23", status: "Design" },
      { plan: "Prewarm mobile API edge", owner: "Platform", impact: "Lower first-chat latency", eta: "Aug 14", status: "In progress" },
      { plan: "Queue autoscaling policy", owner: "SRE", impact: "Protect eval and webhook queues", eta: "Aug 18", status: "Review" }
    ],
    guardrails: [
      "Capacity plans should be tied to product launches, growth campaigns, enterprise pilots, and language expansion forecasts.",
      "High-traffic routes need prewarming, rollback, and throttling plans before public launch windows.",
      "Compute and storage scaling should balance cost controls with customer-facing SLO protection.",
      "Capacity dashboards must avoid exposing infrastructure secrets, raw customer data, or vendor-sensitive pricing."
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

function adminWarehouseBiData() {
  return state.adminWarehouseBi || {
    summary: { pipelinesHealthy: 18, freshness: "5 min", failedJobs: 2, certifiedMetrics: 42, restrictedDatasets: 7 },
    pipelines: [
      { pipeline: "Chat events stream", source: "Web/Mobile/API", freshness: "2 min", owner: "Data Platform", status: "Healthy" },
      { pipeline: "Billing ledger sync", source: "Payments", freshness: "5 min", owner: "Finance Data", status: "Healthy" },
      { pipeline: "Model routing telemetry", source: "AI gateway", freshness: "8 min", owner: "AI Ops", status: "Watch" },
      { pipeline: "Support and safety cases", source: "Support/Trust", freshness: "15 min", owner: "Operations Data", status: "Healthy" }
    ],
    datasets: [
      { dataset: "Executive metrics mart", domain: "Leadership", classification: "Restricted", freshness: "5 min", status: "Certified" },
      { dataset: "Growth funnel mart", domain: "Growth", classification: "Internal", freshness: "10 min", status: "Certified" },
      { dataset: "Language quality mart", domain: "Language QA", classification: "Restricted", freshness: "30 min", status: "Review" },
      { dataset: "Revenue and margin mart", domain: "Finance", classification: "Confidential", freshness: "5 min", status: "Certified" }
    ],
    metricDefinitions: [
      { metric: "Activation rate", owner: "Product Analytics", definition: "Language Passport + first useful chat", status: "Certified" },
      { metric: "Paid gross margin", owner: "Finance Data", definition: "Revenue minus model/cloud/support cost", status: "Certified" },
      { metric: "Language confidence", owner: "Language QA", definition: "Model confidence + reviewer quality score", status: "Review" },
      { metric: "D30 retention", owner: "Growth Analytics", definition: "Active user on or after day 30", status: "Certified" }
    ],
    lineage: [
      { asset: "Board dashboard", upstream: "Executive metrics mart", downstream: "Board pack", owner: "Operations", status: "Mapped" },
      { asset: "Unit economics", upstream: "Billing + inference cost", downstream: "Finance dashboard", owner: "Finance", status: "Mapped" },
      { asset: "Model quality", upstream: "Eval runs + corrections", downstream: "AI governance", owner: "AI QA", status: "Review" },
      { asset: "Country launch readiness", upstream: "Growth + language QA + support", downstream: "Regional launch", owner: "Regional Ops", status: "Mapped" }
    ],
    accessReviews: [
      { group: "Leadership BI", users: 9, datasets: "Executive, finance", review: "Monthly", status: "Approved" },
      { group: "Data analysts", users: 6, datasets: "Certified marts", review: "Monthly", status: "Approved" },
      { group: "Support analytics", users: 11, datasets: "Aggregated support", review: "Quarterly", status: "Review" },
      { group: "External board viewer", users: 3, datasets: "Board pack only", review: "Per meeting", status: "Restricted" }
    ],
    guardrails: [
      "Every leadership metric needs owner, definition, freshness, lineage, and certification status.",
      "Restricted BI datasets must mask PII and avoid raw prompts, private conversations, and payment secrets.",
      "Warehouse incidents should block dependent reports when freshness or quality falls below threshold.",
      "Board and investor dashboards must clearly label simulated prototype metrics until production data is live."
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

function adminNotificationDeliveryData() {
  return state.adminNotificationDelivery || {
    summary: { channelsHealthy: 5, consentCoverage: "93%", quietHourBlocks: "7.2K", failoversToday: 18, deliveryIncidents: 1 },
    channelHealth: [
      { channel: "Mobile push Android", provider: "FCM", success: "98.6%", latency: "420ms p95", status: "Token cleanup" },
      { channel: "Mobile push iOS", provider: "APNs", success: "99.1%", latency: "390ms p95", status: "Healthy" },
      { channel: "Email", provider: "Primary ESP", success: "99.2%", latency: "2m p95", status: "Healthy" },
      { channel: "SMS/WhatsApp bridge", provider: "Regional provider", success: "96.4%", latency: "8s p95", status: "Watch" },
      { channel: "In-app inbox", provider: "Lumora realtime", success: "99.9%", latency: "110ms p95", status: "Healthy" }
    ],
    consentSegments: [
      { segment: "New users", optIn: "88%", channels: "Email, in-app", rule: "Setup only", status: "Compliant" },
      { segment: "Mobile beta", optIn: "71%", channels: "Push, in-app", rule: "Feature alerts", status: "Healthy" },
      { segment: "Paid users", optIn: "94%", channels: "Email, push", rule: "Billing and product", status: "Compliant" },
      { segment: "Enterprise admins", optIn: "99%", channels: "Email, webhook", rule: "Operational notices", status: "Restricted" }
    ],
    quietHours: [
      { market: "Nigeria", window: "21:00-07:00", blocked: "2.8K", exceptions: "Critical billing/security", status: "Active" },
      { market: "Kenya", window: "21:30-07:00", blocked: "1.4K", exceptions: "Incident notices", status: "Active" },
      { market: "South Africa", window: "22:00-07:00", blocked: "1.1K", exceptions: "Enterprise ops", status: "Active" },
      { market: "Diaspora", window: "User timezone", blocked: "1.9K", exceptions: "Security only", status: "Active" }
    ],
    failoverRules: [
      { rule: "Push token invalid", fallback: "In-app inbox", owner: "Mobile", status: "Live" },
      { rule: "Email hard bounce", fallback: "Suppress + support note", owner: "Comms Ops", status: "Live" },
      { rule: "Regional SMS degradation", fallback: "Delay and retry", owner: "Platform", status: "Watch" },
      { rule: "Enterprise webhook failed", fallback: "Email admin owner", owner: "Success", status: "Live" }
    ],
    incidents: [
      { incident: "Android token cleanup spike", impact: "2.1K stale devices", owner: "Mobile", eta: "Today", status: "Mitigating" },
      { incident: "SMS provider latency", impact: "Ghana alerts delayed", owner: "Platform", eta: "4h", status: "Monitoring" },
      { incident: "Template locale mismatch", impact: "18 Hausa messages", owner: "Language QA", eta: "Resolved", status: "Closed" }
    ],
    guardrails: [
      "Notifications must respect consent, language preference, market rules, and user quiet hours by default.",
      "Critical security and billing messages need strict templates and audit history, not marketing copy.",
      "Sales and success teams should see engagement aggregates, never private message contents.",
      "Mobile push delivery requires Android/iOS token hygiene, regional fallbacks, and opt-out enforcement."
    ]
  };
}

function adminLanguagesData() {
  return state.adminLanguages || {
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
}

function adminCulturalQualityData() {
  return state.adminCulturalQuality || {
    summary: { toneReports: 284, culturalReviews: 44, dialectParity: "87%", proverbChecks: 31, reviewerCapacity: "72%" },
    toneSegments: [
      { segment: "Respectful teacher", languages: "Yoruba, Swahili, Hausa", score: "92%", issue: "Too formal in youth contexts", status: "Healthy" },
      { segment: "Market/business", languages: "Pidgin, Twi, English", score: "88%", issue: "Price negotiation nuance", status: "Watch" },
      { segment: "Street/youth", languages: "Pidgin, Sheng, Arabic/French", score: "74%", issue: "Slang freshness", status: "Review" },
      { segment: "Elder/respect", languages: "Yoruba, Igbo, Zulu", score: "90%", issue: "Honorific consistency", status: "Healthy" }
    ],
    dialectParity: [
      { market: "Nigeria", dialects: "Yoruba, Hausa, Igbo, Pidgin", parity: "89%", gap: "Regional Pidgin", owner: "West Africa QA", status: "Improving" },
      { market: "East Africa", dialects: "Swahili, Sheng, Amharic", parity: "84%", gap: "Youth Sheng", owner: "East Africa QA", status: "Watch" },
      { market: "Southern Africa", dialects: "Zulu, Xhosa, Shona", parity: "82%", gap: "Code-switch samples", owner: "Southern QA", status: "Review" },
      { market: "North Africa", dialects: "Arabic, French, Tamazight bridge", parity: "71%", gap: "Dialect coverage", owner: "North Africa QA", status: "Building" }
    ],
    culturalReviewQueues: [
      { queue: "Proverb and idiom fit", count: 31, owner: "Cultural reviewers", sla: "72h", status: "Review" },
      { queue: "Tone mismatch reports", count: 284, owner: "Language QA", sla: "48h", status: "Busy" },
      { queue: "Sensitive cultural context", count: 18, owner: "Trust/Policy", sla: "5d", status: "Watch" },
      { queue: "Bridge-language awkwardness", count: 41, owner: "Translation QA", sla: "48h", status: "Queued" }
    ],
    reviewerCalibration: [
      { calibration: "West Africa tone panel", reviewers: 18, agreement: "91%", focus: "Respect + market tone", status: "Healthy" },
      { calibration: "East Africa classroom panel", reviewers: 11, agreement: "86%", focus: "Teacher clarity", status: "Healthy" },
      { calibration: "Southern Africa code-switch panel", reviewers: 9, agreement: "79%", focus: "Mixed language quality", status: "Watch" },
      { calibration: "North Africa bridge panel", reviewers: 7, agreement: "74%", focus: "Arabic/French nuance", status: "Building" }
    ],
    culturalRiskSignals: [
      { signal: "Over-generalized African phrasing", severity: "Medium", affected: "Welcome + chat", owner: "Content Design", status: "Mitigating" },
      { signal: "Forced proverb use", severity: "Medium", affected: "Teacher tone", owner: "Language QA", status: "Review" },
      { signal: "Religious/cultural sensitivity", severity: "High", affected: "Advice routes", owner: "Policy", status: "Guarded" },
      { signal: "Youth slang staleness", severity: "Low", affected: "Creator Studio", owner: "Community QA", status: "Sampling" }
    ],
    guardrails: [
      "Lumora should adapt tone without pretending every African user shares one culture, dialect, or style.",
      "Proverbs, honorifics, slang, and local references should be optional, context-aware, and never forced.",
      "Cultural quality reviews need native speakers, reviewer calibration, region-specific samples, and appeal paths.",
      "Admin views should track tone and cultural quality as aggregate signals, not expose private user messages."
    ]
  };
}

function adminReviewerNetworkData() {
  return state.adminReviewerNetwork || {
    summary: { activeReviewers: 116, languageCoverage: 42, calibrationPass: "88%", backlog: 312, burnoutRisk: 9 },
    reviewerRegions: [
      { region: "West Africa", reviewers: 42, languages: "Yoruba, Hausa, Igbo, Pidgin, Twi", capacity: "78%", status: "Busy" },
      { region: "East Africa", reviewers: 28, languages: "Swahili, Amharic, Oromo, Somali", capacity: "72%", status: "Healthy" },
      { region: "Southern Africa", reviewers: 19, languages: "Zulu, Xhosa, Shona, Sesotho", capacity: "64%", status: "Watch" },
      { region: "Central/North Africa", reviewers: 16, languages: "Lingala, Arabic, French bridge", capacity: "58%", status: "Hiring" },
      { region: "Diaspora panel", reviewers: 11, languages: "Mixed code-switch", capacity: "69%", status: "Healthy" }
    ],
    reviewQueues: [
      { queue: "Tone corrections", count: 284, language: "Pidgin/Hausa/Yoruba", sla: "48h", status: "Busy" },
      { queue: "Meaning changed reports", count: 41, language: "Yoruba/Swahili", sla: "24h", status: "Priority" },
      { queue: "Cultural sensitivity checks", count: 18, language: "Multi-market", sla: "5d", status: "Watch" },
      { queue: "Model eval human samples", count: 860, language: "Priority languages", sla: "Weekly", status: "Sampling" }
    ],
    calibrationPanels: [
      { panel: "Yoruba/Pidgin tone", reviewers: 18, agreement: "91%", drift: "Low", status: "Healthy" },
      { panel: "Swahili classroom clarity", reviewers: 11, agreement: "86%", drift: "Low", status: "Healthy" },
      { panel: "Hausa business tone", reviewers: 9, agreement: "82%", drift: "Medium", status: "Watch" },
      { panel: "Arabic/French bridge", reviewers: 7, agreement: "74%", drift: "Medium", status: "Building" }
    ],
    reviewerQuality: [
      { metric: "Median review time", value: "18m", target: "<25m", owner: "Language QA", status: "Healthy" },
      { metric: "Reviewer agreement", value: "88%", target: ">85%", owner: "QA Lead", status: "Healthy" },
      { metric: "Appeal reversal rate", value: "4.2%", target: "<6%", owner: "Trust", status: "Healthy" },
      { metric: "Burnout risk", value: "9 reviewers", target: "<5", owner: "People Ops", status: "Watch" }
    ],
    onboardingPipeline: [
      { stage: "Native speaker sourcing", candidates: 48, owner: "Community", status: "Active" },
      { stage: "Language assessment", candidates: 24, owner: "Language QA", status: "Testing" },
      { stage: "Policy training", candidates: 16, owner: "Trust", status: "Queued" },
      { stage: "Shadow reviews", candidates: 9, owner: "QA Lead", status: "In progress" }
    ],
    guardrails: [
      "Reviewer access must be role-scoped, audited, and limited to redacted samples unless a privacy-approved case requires more.",
      "Human QA should measure agreement, drift, cultural fit, safety handling, and reviewer wellbeing across regions.",
      "Reviewer onboarding requires language assessment, policy training, calibration, and shadow review before production queues.",
      "Reviewer dashboards should track aggregate quality and workload without exposing unnecessary private user content."
    ]
  };
}

function adminCorrectionImprovementData() {
  return state.adminCorrectionImprovement || {
    summary: { weeklyCorrections: 1284, consentReady: "88%", reviewerAccepted: "71%", evalLift: "+4.8%", trainingBlocked: 94 },
    intakeSources: [
      { source: "In-chat tone correction", volume: "624/week", signal: "Tone and dialect", consent: "Explicit", status: "Live" },
      { source: "Community correction form", volume: "312/week", signal: "Meaning changed", consent: "Explicit", status: "Live" },
      { source: "Support language tickets", volume: "184/week", signal: "Confusing answer", consent: "Support scoped", status: "Review" },
      { source: "Reviewer proactive samples", volume: "164/week", signal: "Model gap", consent: "Internal", status: "Live" }
    ],
    correctionPipeline: [
      { stage: "Capture", items: 1284, owner: "Product", gate: "User consent", status: "Healthy" },
      { stage: "Redact and classify", items: 1098, owner: "Privacy", gate: "PII minimization", status: "Healthy" },
      { stage: "Native review", items: 860, owner: "Language QA", gate: "Reviewer agreement", status: "Busy" },
      { stage: "Eval conversion", items: 412, owner: "AI QA", gate: "Benchmark coverage", status: "Sampling" },
      { stage: "Training eligibility", items: 318, owner: "Data Governance", gate: "License + consent", status: "Controlled" }
    ],
    reviewerDecisions: [
      { decision: "Accepted correction", share: "71%", action: "Add to eval/training candidates", owner: "Language QA", status: "Healthy" },
      { decision: "Style preference only", share: "14%", action: "Personalization signal", owner: "Product AI", status: "Review" },
      { decision: "Unsafe or sensitive", share: "5%", action: "Route to Trust/Policy", owner: "Trust", status: "Guarded" },
      { decision: "Rejected or unclear", share: "10%", action: "Do not reuse", owner: "Reviewer Lead", status: "Healthy" }
    ],
    improvementImpact: [
      { language: "Yoruba + Pidgin", evalLift: "+6.2%", correctedIssues: "Tone mismatch", release: "Next web/mobile", status: "Ready" },
      { language: "Swahili", evalLift: "+4.9%", correctedIssues: "Classroom clarity", release: "Weekly model route", status: "Testing" },
      { language: "Hausa", evalLift: "+3.8%", correctedIssues: "Business phrasing", release: "Needs samples", status: "Watch" },
      { language: "Arabic/French bridge", evalLift: "+2.1%", correctedIssues: "Code-switch nuance", release: "Blocked by coverage", status: "Building" }
    ],
    trainingEligibility: [
      { bucket: "Eval-only samples", count: 412, rule: "Redacted + sampled", owner: "AI QA", status: "Approved" },
      { bucket: "Fine-tune candidates", count: 318, rule: "Explicit consent + license", owner: "Data Governance", status: "Controlled" },
      { bucket: "Reviewer guidance examples", count: 276, rule: "Anonymized + policy reviewed", owner: "Language QA", status: "Approved" },
      { bucket: "Blocked samples", count: 94, rule: "Missing consent or sensitive data", owner: "Privacy", status: "Blocked" }
    ],
    releaseHandoffs: [
      { handoff: "Prompt/tone template update", target: "Prompt workflows", owner: "Prompt Ops", status: "Ready" },
      { handoff: "Benchmark refresh", target: "Evals", owner: "AI QA", status: "Weekly" },
      { handoff: "Dataset eligibility update", target: "Datasets", owner: "Data Governance", status: "Controlled" },
      { handoff: "Reviewer guide update", target: "Policy + Reviewers", owner: "Language QA", status: "Queued" }
    ],
    guardrails: [
      "Corrections must not be reused for model improvement unless consent, provenance, privacy, and license checks pass.",
      "Rejected, unclear, sensitive, or private corrections should improve safety triage only when policy-approved.",
      "Correction loops should separate personal preference, broad quality signal, evaluation sample, and training candidate.",
      "Leadership dashboards should show aggregate improvement impact without exposing raw private prompts or identities."
    ]
  };
}

function adminVoiceSpeechData() {
  return state.adminVoiceSpeech || {
    summary: { voiceSessions: "42.8K", asrAccuracy: "84%", ttsNaturalness: "81%", p95Latency: "1.1s", consentCoverage: "64%" },
    speechRoutes: [
      { route: "Meta MMS ASR", source: "huggingface.co/facebook/mms-1b-all", languages: "1000+ coverage", use: "Fallback transcription", status: "License review" },
      { route: "Simba-H voice stack", source: "huggingface.co/UBC-NLP/Simba-H", languages: "39 listed languages", use: "African ASR/TTS benchmarks", status: "Testing" },
      { route: "Lumora tone layer", source: "Internal orchestration", languages: "Priority markets", use: "Tone + bridge language reply", status: "Live" },
      { route: "General speech fallback", source: "Provider fallback", languages: "Low-confidence routes", use: "Graceful fallback", status: "Guarded" }
    ],
    accentCoverage: [
      { market: "Nigeria", languages: "Yoruba, Hausa, Igbo, Pidgin", noisyAccuracy: "86%", gap: "Regional Pidgin", status: "Improving" },
      { market: "East Africa", languages: "Swahili, Sheng, Amharic", noisyAccuracy: "83%", gap: "Street noise", status: "Testing" },
      { market: "Southern Africa", languages: "Zulu, Xhosa, Shona", noisyAccuracy: "79%", gap: "Code-switching", status: "Watch" },
      { market: "North Africa", languages: "Arabic/French bridge", noisyAccuracy: "72%", gap: "Dialect spread", status: "Building" }
    ],
    mobileCapture: [
      { surface: "iOS Voice Circle", readiness: "76%", blocker: "Audio permission loop", owner: "iOS QA", status: "Investigating" },
      { surface: "Android Voice Circle", readiness: "82%", blocker: "Noisy market audio", owner: "Android QA", status: "Testing" },
      { surface: "Mobile web voice", readiness: "68%", blocker: "Browser permission variance", owner: "Web Platform", status: "Watch" },
      { surface: "Offline retry", readiness: "54%", blocker: "Queue sync", owner: "Mobile", status: "Design" }
    ],
    consentRetention: [
      { control: "Voice capture consent", coverage: "92%", surface: "Mobile/Web", owner: "Privacy", status: "Live" },
      { control: "Voice retention consent", coverage: "64%", surface: "Mobile beta", owner: "Voice Ops", status: "Review" },
      { control: "Reviewer audio access", coverage: "Scoped", surface: "Admin", owner: "Language QA", status: "Guarded" },
      { control: "Training reuse consent", coverage: "41%", surface: "Voice beta", owner: "Data Governance", status: "Blocked" }
    ],
    latencyQuality: [
      { metric: "ASR p95 latency", value: "1.1s", target: "<900ms", owner: "Voice Ops", status: "Blocked" },
      { metric: "TTS first audio", value: "740ms", target: "<700ms", owner: "Speech Platform", status: "Watch" },
      { metric: "Noisy audio word error", value: "16%", target: "<12%", owner: "AI QA", status: "Mitigating" },
      { metric: "Voice handoff failure", value: "0.38%", target: "<0.25%", owner: "Mobile", status: "Watch" }
    ],
    reviewQueues: [
      { queue: "High-risk voice samples", count: 148, language: "Swahili/Yoruba/Pidgin", reviewer: "Voice QA", status: "Needs capacity" },
      { queue: "Accent mismatch reports", count: 96, language: "Multi-market", reviewer: "Native reviewers", status: "Busy" },
      { queue: "TTS pronunciation fixes", count: 72, language: "Yoruba/Hausa/Zulu", reviewer: "Language QA", status: "Review" },
      { queue: "Consent exception checks", count: 24, language: "Voice beta", reviewer: "Privacy", status: "Urgent" }
    ],
    guardrails: [
      "Voice samples require explicit capture consent, retention consent, reviewer access limits, and training reuse approval.",
      "Low-confidence speech routes should disclose uncertainty and offer text fallback instead of pretending accuracy.",
      "Voice quality must be measured by language, accent, noise condition, device class, and code-switching behavior.",
      "Admin views should show aggregate voice operations without exposing raw audio, transcripts, or speaker identity broadly."
    ]
  };
}

function adminTranslationOpsData() {
  return state.adminTranslationOps || {
    summary: { translationRequests: "286K", meaningPreservation: "91%", dialectDrift: "3.8%", reviewBacklog: 214, enterpriseUsage: "18%" },
    routeQuality: [
      { route: "AfriNLLB translation", source: "huggingface.co/masakhane/afrinllb-200-distilled-600M", pairs: "200+ African-centered", quality: "91%", status: "Primary" },
      { route: "NLLB fallback", source: "huggingface.co/facebook/nllb-200-distilled-600M", pairs: "Broad fallback", quality: "86%", status: "Guarded" },
      { route: "Tone preservation layer", source: "Lumora orchestration", pairs: "Priority markets", quality: "88%", status: "Live" },
      { route: "Human review assist", source: "Reviewer network", pairs: "High-risk/legal/business", quality: "96%", status: "Queued" }
    ],
    languagePairs: [
      { pair: "Yoruba <> English", volume: "74K", preservation: "93%", drift: "2.8%", status: "Healthy" },
      { pair: "Pidgin <> English", volume: "61K", preservation: "89%", drift: "5.4%", status: "Improving" },
      { pair: "Swahili <> English", volume: "48K", preservation: "92%", drift: "3.1%", status: "Healthy" },
      { pair: "Hausa <> English", volume: "34K", preservation: "87%", drift: "6.2%", status: "Watch" },
      { pair: "Arabic <> French", volume: "22K", preservation: "82%", drift: "7.8%", status: "Building" }
    ],
    surfaceUsage: [
      { surface: "Translate mode", requests: "128K", segment: "Consumers", owner: "Product", status: "Live" },
      { surface: "Market Mode", requests: "54K", segment: "SMBs", owner: "Growth", status: "Live" },
      { surface: "Support macros", requests: "38K", segment: "Enterprise", owner: "Support", status: "Review" },
      { surface: "Classroom explainers", requests: "31K", segment: "Education", owner: "Learning", status: "Testing" },
      { surface: "API translation", requests: "35K", segment: "Partners", owner: "API", status: "Beta" }
    ],
    riskQueues: [
      { queue: "Meaning changed", count: 82, language: "Pidgin/Hausa", owner: "Language QA", status: "Urgent" },
      { queue: "Sensitive legal/medical text", count: 44, language: "Multi-market", owner: "Policy", status: "Guarded" },
      { queue: "Dialect mismatch", count: 58, language: "Yoruba/Arabic", owner: "Reviewers", status: "Busy" },
      { queue: "Business pricing ambiguity", count: 30, language: "Market Mode", owner: "CX", status: "Review" }
    ],
    enterpriseControls: [
      { control: "Confidential translation mode", coverage: "Designed", owner: "Enterprise", status: "Roadmap" },
      { control: "Reviewer escalation approval", coverage: "100%", owner: "Trust", status: "Live" },
      { control: "Glossary/domain term lock", coverage: "68%", owner: "Localization", status: "Beta" },
      { control: "Translation export audit", coverage: "82%", owner: "Compliance", status: "Improving" }
    ],
    guardrails: [
      "Translations should preserve meaning first, then tone, then local style; style must never override factual accuracy.",
      "High-stakes medical, legal, financial, or government text should show uncertainty and route to review where appropriate.",
      "Dialect and tone choices should be user-controlled and reversible, with clear source and target language labels.",
      "Admin translation views should show aggregate quality and queues without exposing private translated content."
    ]
  };
}

function adminCreatorStudioData() {
  return state.adminCreatorStudio || {
    summary: { creationsToday: "96.4K", templateUsage: "42%", brandSafety: "97.2%", monetizedWorkflows: "18.6K", creatorRetention: "64%" },
    contentModes: [
      { mode: "Social captions", volume: "28K", quality: "93%", market: "Creators", status: "Healthy" },
      { mode: "Video scripts", volume: "21K", quality: "89%", market: "Short-form video", status: "Improving" },
      { mode: "Campaign copy", volume: "18K", quality: "91%", market: "SMBs", status: "Healthy" },
      { mode: "Community posts", volume: "16K", quality: "88%", market: "Organizations", status: "Watch" },
      { mode: "Audio show notes", volume: "13K", quality: "84%", market: "Podcasters", status: "Testing" }
    ],
    templateHealth: [
      { template: "Launch announcement", usage: "18%", conversion: "7.4%", owner: "Growth", status: "Live" },
      { template: "WhatsApp customer reply", usage: "16%", conversion: "9.1%", owner: "Market Mode", status: "Live" },
      { template: "Creator reel script", usage: "13%", conversion: "6.8%", owner: "Creator", status: "Testing" },
      { template: "Faith/community message", usage: "9%", conversion: "5.2%", owner: "Culture QA", status: "Review" },
      { template: "Product pricing explainer", usage: "7%", conversion: "8.6%", owner: "SMB", status: "Improving" }
    ],
    toneBrandSafety: [
      { signal: "Cultural tone mismatch", rate: "2.1%", owner: "Culture QA", action: "Native review", status: "Watch" },
      { signal: "Unsupported claims", rate: "0.8%", owner: "Policy", action: "Claim guardrail", status: "Controlled" },
      { signal: "Overly generic output", rate: "4.4%", owner: "Prompt Ops", action: "Template refresh", status: "Improving" },
      { signal: "Brand unsafe phrasing", rate: "0.6%", owner: "Trust", action: "Blocklist + review", status: "Healthy" }
    ],
    monetizationFunnels: [
      { funnel: "Free creator to Plus", users: "4,820", conversion: "8.7%", lever: "Longer scripts", status: "Live" },
      { funnel: "Plus to Pro campaigns", users: "1,204", conversion: "21.3%", lever: "Brand kits", status: "Testing" },
      { funnel: "SMB team upgrade", users: "384", conversion: "12.1%", lever: "Approval workflow", status: "Design" },
      { funnel: "API content partner", users: "42", conversion: "18%", lever: "Bulk generation", status: "Beta" }
    ],
    workflowQueues: [
      { queue: "Template refresh", count: 48, owner: "Prompt Ops", priority: "High", status: "Queued" },
      { queue: "Creator feedback review", count: 126, owner: "CX", priority: "Medium", status: "Review" },
      { queue: "Brand safety samples", count: 36, owner: "Trust", priority: "High", status: "Guarded" },
      { queue: "Localized template QA", count: 72, owner: "Localization", priority: "Medium", status: "Busy" }
    ],
    guardrails: [
      "Creator outputs should feel local and useful without copying protected works, imitating living creators, or making unsupported claims.",
      "Brand and campaign templates must separate factual product details from generated persuasive language.",
      "Community, faith, political, health, and finance content should use higher safety thresholds and clear uncertainty.",
      "Admin views should track aggregate creator quality, monetization, and safety signals without exposing private drafts."
    ]
  };
}

function adminClassroomLearningData() {
  return state.adminClassroomLearning || {
    summary: { learningSessions: "54.2K", explanationQuality: "90%", localExampleUse: "68%", safetyEscalations: 31, educatorRetention: "58%" },
    learningModes: [
      { mode: "Simple explanation", sessions: "18K", quality: "93%", audience: "Students", status: "Healthy" },
      { mode: "Exam prep", sessions: "12K", quality: "88%", audience: "Secondary school", status: "Improving" },
      { mode: "Homework guide", sessions: "9K", quality: "86%", audience: "Learners", status: "Guarded" },
      { mode: "Teacher lesson plan", sessions: "8K", quality: "91%", audience: "Educators", status: "Healthy" },
      { mode: "Local example explainer", sessions: "7K", quality: "89%", audience: "Mixed", status: "Testing" }
    ],
    curriculumCoverage: [
      { subject: "English and language arts", coverage: "82%", markets: "West/East Africa", owner: "Learning", status: "Live" },
      { subject: "Mathematics", coverage: "76%", markets: "Multi-market", owner: "Education QA", status: "Testing" },
      { subject: "Science", coverage: "64%", markets: "Priority markets", owner: "Content QA", status: "Building" },
      { subject: "Business basics", coverage: "58%", markets: "SMB learners", owner: "Market Mode", status: "Review" },
      { subject: "Digital literacy", coverage: "54%", markets: "Youth/adult learning", owner: "Partnerships", status: "Roadmap" }
    ],
    pedagogySignals: [
      { signal: "Age-appropriate explanation", score: "92%", owner: "Safety", action: "Grade-band prompts", status: "Healthy" },
      { signal: "Step-by-step reasoning", score: "87%", owner: "Learning", action: "Worked examples", status: "Improving" },
      { signal: "Local example relevance", score: "68%", owner: "Culture QA", action: "Reviewer examples", status: "Watch" },
      { signal: "Answer-only risk", score: "5.8%", owner: "Policy", action: "Guide-don't-cheat mode", status: "Guarded" }
    ],
    safetyQueues: [
      { queue: "Minors safety review", count: 31, subject: "Mixed", owner: "Trust", status: "Urgent" },
      { queue: "Medical/health learning", count: 22, subject: "Science", owner: "Policy", status: "Guarded" },
      { queue: "Exam misconduct risk", count: 44, subject: "Exam prep", owner: "Education QA", status: "Review" },
      { queue: "Low-confidence subject answer", count: 67, subject: "STEM", owner: "AI QA", status: "Busy" }
    ],
    partnerships: [
      { partner: "Community learning hubs", learners: "4,200", market: "Nigeria/Ghana", owner: "Partnerships", status: "Pilot" },
      { partner: "Teacher ambassador program", learners: "1,800", market: "East Africa", owner: "Community", status: "Design" },
      { partner: "After-school digital clubs", learners: "960", market: "Southern Africa", owner: "Growth", status: "Testing" },
      { partner: "Adult literacy programs", learners: "740", market: "Multi-market", owner: "Impact", status: "Roadmap" }
    ],
    guardrails: [
      "Classroom mode should teach and guide rather than simply provide answers for graded or exam-like work.",
      "Age-sensitive learning experiences need stronger safety review, privacy protection, and clear escalation paths.",
      "Local examples should improve understanding without stereotyping learners, regions, families, or communities.",
      "Admin views should track aggregate learning quality and safety without exposing minors or private schoolwork."
    ]
  };
}

function adminMarketCommerceData() {
  return state.adminMarketCommerce || {
    summary: { marketSessions: "72.8K", customerReplyQuality: "92%", pricingCopyRisk: "2.4%", smbConversions: "11.8%", escalationBacklog: 86 },
    businessModes: [
      { mode: "Customer replies", sessions: "24K", quality: "94%", segment: "SMB support", status: "Healthy" },
      { mode: "Product descriptions", sessions: "17K", quality: "91%", segment: "Retail sellers", status: "Healthy" },
      { mode: "Pricing explanation", sessions: "12K", quality: "87%", segment: "Services", status: "Watch" },
      { mode: "Negotiation helper", sessions: "10K", quality: "84%", segment: "Informal commerce", status: "Guarded" },
      { mode: "WhatsApp campaign", sessions: "9K", quality: "89%", segment: "Creators/SMBs", status: "Improving" }
    ],
    conversionSignals: [
      { signal: "Draft sent to customer", rate: "41%", owner: "Growth", lever: "One-tap copy", status: "Live" },
      { signal: "Repeat Market Mode use", rate: "34%", owner: "Product", lever: "Saved business tone", status: "Improving" },
      { signal: "Free to Plus from business user", rate: "9.6%", owner: "Revenue", lever: "More customer replies", status: "Live" },
      { signal: "Team workspace invite", rate: "4.2%", owner: "Sales", lever: "Shared templates", status: "Testing" }
    ],
    commerceRisks: [
      { risk: "Unsupported pricing claim", rate: "1.1%", owner: "Policy", mitigation: "Claim check prompts", status: "Controlled" },
      { risk: "Aggressive negotiation tone", rate: "2.8%", owner: "CX", mitigation: "Respectful tone default", status: "Watch" },
      { risk: "Regulated product copy", rate: "0.9%", owner: "Trust", mitigation: "High-risk category review", status: "Guarded" },
      { risk: "Currency/tax ambiguity", rate: "3.4%", owner: "Payments", mitigation: "Country-aware disclaimer", status: "Improving" }
    ],
    marketTemplates: [
      { template: "Polite customer apology", usage: "19%", outcome: "High CSAT", owner: "Support", status: "Live" },
      { template: "Price increase message", usage: "14%", outcome: "Low complaint rate", owner: "Market Ops", status: "Review" },
      { template: "New product announcement", usage: "13%", outcome: "High copy rate", owner: "Creator Ops", status: "Live" },
      { template: "Delivery delay update", usage: "11%", outcome: "Reduced escalation", owner: "CX", status: "Healthy" },
      { template: "Bulk order negotiation", usage: "8%", outcome: "Needs tone QA", owner: "Culture QA", status: "Watch" }
    ],
    paymentUpgradeSignals: [
      { plan: "Free", businessUsers: "9,420", upgradeIntent: "8.7%", blocker: "Daily reply limit", status: "Convert" },
      { plan: "Plus", businessUsers: "2,180", upgradeIntent: "14.3%", blocker: "Team approvals", status: "Nurture" },
      { plan: "Pro", businessUsers: "684", upgradeIntent: "18.9%", blocker: "API/bulk workflows", status: "Sales" },
      { plan: "Teams", businessUsers: "126", upgradeIntent: "24.1%", blocker: "Procurement", status: "Enterprise" }
    ],
    guardrails: [
      "Market Mode should help users communicate clearly without inventing prices, claims, guarantees, stock, tax, or legal terms.",
      "Business copy should preserve respectful local tone and avoid manipulative pressure or discriminatory targeting.",
      "Regulated products, financial advice, medical claims, and government services should trigger stricter policy checks.",
      "Admin views should monitor aggregate commerce quality and conversion without exposing private customer messages."
    ]
  };
}

function adminMultimodalData() {
  return state.adminMultimodal || {
    summary: { attachmentsToday: "38.6K", successfulParses: "93.4%", unsafeBlocks: 284, storageUsed: "2.8TB", mobileUploadSuccess: "91%" },
    modalityRoutes: [
      { route: "Image understanding", volume: "12.4K", quality: "92%", fallback: "Text clarification", status: "Live" },
      { route: "Document OCR", volume: "9.8K", quality: "89%", fallback: "Manual text paste", status: "Improving" },
      { route: "PDF summarization", volume: "7.2K", quality: "88%", fallback: "Page chunking", status: "Live" },
      { route: "Audio note parse", volume: "5.1K", quality: "84%", fallback: "Voice Ops", status: "Testing" },
      { route: "Camera capture", volume: "4.1K", quality: "86%", fallback: "Retry upload", status: "Mobile beta" }
    ],
    attachmentSafety: [
      { signal: "PII in uploaded document", count: 118, owner: "Privacy", action: "Redact before review", status: "Guarded" },
      { signal: "Unsafe image content", count: 84, owner: "Trust", action: "Block and explain", status: "Controlled" },
      { signal: "Copyrighted worksheet/book scan", count: 51, owner: "Policy", action: "Limit transformation", status: "Review" },
      { signal: "Malicious file attempt", count: 31, owner: "Security", action: "Quarantine", status: "Urgent" }
    ],
    processingQueues: [
      { queue: "OCR retry", count: 182, latency: "2.8s p95", owner: "Platform", status: "Busy" },
      { queue: "Large PDF chunking", count: 96, latency: "4.1s p95", owner: "AI Ops", status: "Watch" },
      { queue: "Mobile upload retry", count: 74, latency: "3.3s p95", owner: "Mobile", status: "Improving" },
      { queue: "Safety review samples", count: 42, latency: "Human review", owner: "Trust", status: "Guarded" }
    ],
    storageRetention: [
      { bucket: "Temporary chat uploads", retention: "24h", volume: "1.2TB", owner: "Privacy", status: "Live" },
      { bucket: "User-saved files", retention: "User controlled", volume: "940GB", owner: "Product", status: "Beta" },
      { bucket: "Review-safe redacted samples", retention: "30d", volume: "420GB", owner: "Trust", status: "Controlled" },
      { bucket: "Blocked/quarantined files", retention: "7d", volume: "18GB", owner: "Security", status: "Guarded" }
    ],
    deviceHealth: [
      { device: "Desktop web", uploadSuccess: "96%", issue: "Large PDFs", owner: "Web", status: "Healthy" },
      { device: "Mobile web", uploadSuccess: "88%", issue: "Camera permissions", owner: "Web/Mobile", status: "Watch" },
      { device: "Android app", uploadSuccess: "92%", issue: "Low-memory retries", owner: "Android", status: "Testing" },
      { device: "iOS app", uploadSuccess: "90%", issue: "Background upload pause", owner: "iOS", status: "Improving" }
    ],
    guardrails: [
      "Uploaded files should be scanned, classified, and minimized before any reviewer or model-improvement workflow.",
      "Private images, documents, audio, and camera captures must respect retention, deletion, and user export controls.",
      "Low-confidence OCR or image understanding should ask clarifying questions instead of inventing content.",
      "Admin views should show aggregate multimodal health without exposing raw private attachments."
    ]
  };
}

function adminSearchRetrievalData() {
  return state.adminSearchRetrieval || {
    summary: { searchesToday: "118K", groundedAnswerRate: "87%", citationCoverage: "82%", staleSourceRisk: "3.1%", retrievalLatency: "640ms" },
    retrievalRoutes: [
      { route: "Web lookup", volume: "42K", freshness: "Live", quality: "88%", status: "Beta" },
      { route: "Lumora knowledge base", volume: "31K", freshness: "15m sync", quality: "91%", status: "Live" },
      { route: "Country/local source retrieval", volume: "18K", freshness: "Daily", quality: "84%", status: "Building" },
      { route: "Document-grounded chat", volume: "16K", freshness: "User file", quality: "89%", status: "Live" },
      { route: "Safe fallback answer", volume: "11K", freshness: "No source", quality: "78%", status: "Guarded" }
    ],
    sourceHealth: [
      { source: "Public web", coverage: "68%", risk: "Stale or low-quality pages", owner: "Search", status: "Watch" },
      { source: "Partner knowledge bases", coverage: "42%", risk: "Permissions drift", owner: "Integrations", status: "Beta" },
      { source: "Uploaded documents", coverage: "74%", risk: "Private data exposure", owner: "Privacy", status: "Guarded" },
      { source: "Curated African language resources", coverage: "36%", risk: "Sparse markets", owner: "Language QA", status: "Building" }
    ],
    citationQuality: [
      { signal: "Citations present", rate: "82%", target: "90%", owner: "Product AI", status: "Improving" },
      { signal: "Citation supports claim", rate: "88%", target: "94%", owner: "AI QA", status: "Watch" },
      { signal: "Fresh enough for query", rate: "91%", target: "95%", owner: "Search", status: "Healthy" },
      { signal: "Broken source link", rate: "1.7%", target: "<1%", owner: "Platform", status: "Watch" }
    ],
    hallucinationControls: [
      { control: "No-source uncertainty", coverage: "86%", owner: "AI Safety", status: "Live" },
      { control: "High-stakes source requirement", coverage: "94%", owner: "Policy", status: "Guarded" },
      { control: "Contradictory source handling", coverage: "72%", owner: "AI QA", status: "Improving" },
      { control: "Source quote limits", coverage: "100%", owner: "Legal", status: "Live" }
    ],
    freshnessQueues: [
      { queue: "Stale web snippets", count: 148, owner: "Search", priority: "High", status: "Refreshing" },
      { queue: "Broken citations", count: 64, owner: "Platform", priority: "Medium", status: "Queued" },
      { queue: "Country source gaps", count: 92, owner: "Regional", priority: "High", status: "Building" },
      { queue: "RAG permission reviews", count: 38, owner: "Privacy", priority: "High", status: "Guarded" }
    ],
    guardrails: [
      "Search answers should clearly distinguish sourced facts, model reasoning, uncertainty, and user-provided context.",
      "High-stakes legal, medical, financial, safety, or government queries should require fresh and reliable sources.",
      "Retrieval should respect document permissions, tenant boundaries, deletion/export controls, and source licenses.",
      "Admin views should measure search quality and citation health without exposing private queries or documents."
    ]
  };
}

function adminWorkspaceCollaborationData() {
  return state.adminWorkspaceCollaboration || {
    summary: { activeWorkspaces: "3.8K", sharedProjects: "1.2K", fileAssets: "48K", permissionAlerts: 27, syncHealth: "96%" },
    workspaceHealth: [
      { workspace: "Solo creator projects", members: "1", projects: "18K", activity: "High", status: "Healthy" },
      { workspace: "SMB teams", members: "2-12", projects: "4.4K", activity: "Growing", status: "Improving" },
      { workspace: "Education cohorts", members: "10-80", projects: "1.1K", activity: "Seasonal", status: "Watch" },
      { workspace: "Enterprise pilots", members: "25-400", projects: "320", activity: "Expanding", status: "Beta" }
    ],
    collaborationActivity: [
      { activity: "Shared conversation", volume: "8.4K", owner: "Product", risk: "Wrong audience", status: "Live" },
      { activity: "Project file upload", volume: "6.8K", owner: "Multimodal", risk: "Private data", status: "Guarded" },
      { activity: "Prompt/template sharing", volume: "3.2K", owner: "Prompt Ops", risk: "Unsafe reuse", status: "Review" },
      { activity: "Team member invite", volume: "1.7K", owner: "Identity", risk: "Unauthorized access", status: "Improving" }
    ],
    permissionControls: [
      { control: "Workspace roles", coverage: "82%", owner: "Access", status: "Beta" },
      { control: "Project-level sharing", coverage: "74%", owner: "Product", status: "Testing" },
      { control: "File access inheritance", coverage: "68%", owner: "Security", status: "Watch" },
      { control: "External link expiry", coverage: "91%", owner: "Trust", status: "Healthy" }
    ],
    fileGovernance: [
      { class: "Chat attachments", count: "31K", retention: "Per user controls", owner: "Privacy", status: "Live" },
      { class: "Project documents", count: "12K", retention: "Workspace policy", owner: "Product", status: "Beta" },
      { class: "Shared templates", count: "4.2K", retention: "Versioned", owner: "Prompt Ops", status: "Live" },
      { class: "Quarantined files", count: "86", retention: "Security hold", owner: "Security", status: "Guarded" }
    ],
    syncReliability: [
      { surface: "Web projects", success: "98%", p95: "420ms", owner: "Web", status: "Healthy" },
      { surface: "Mobile saved chats", success: "94%", p95: "820ms", owner: "Mobile", status: "Watch" },
      { surface: "Workspace file index", success: "96%", p95: "1.2s", owner: "Knowledge", status: "Improving" },
      { surface: "Enterprise audit sync", success: "99%", p95: "610ms", owner: "Compliance", status: "Healthy" }
    ],
    guardrails: [
      "Workspace sharing should default to least privilege, clear membership, link expiry, and visible access state.",
      "Project files must inherit retention, deletion, export, and privacy controls from user and workspace policy.",
      "Shared prompts, templates, and conversations should preserve attribution and avoid leaking sensitive context.",
      "Admin views should show aggregate collaboration and permission health without exposing private workspace content."
    ]
  };
}

function adminLanguagePassportData() {
  return state.adminLanguagePassport || {
    summary: { completionRate: "78.2%", activePassports: "14.4K", primaryLanguages: 54, bridgePairs: 128, consentHealth: "92%" },
    completionFunnel: [
      { step: "Signup started", users: "2,184", conversion: "100%", issue: "None", owner: "Growth" },
      { step: "Country and city added", users: "1,926", conversion: "88.2%", issue: "City autocomplete", owner: "Product" },
      { step: "Main language selected", users: "1,812", conversion: "82.9%", issue: "Dialect labels", owner: "Language QA" },
      { step: "Bridge language selected", users: "1,760", conversion: "80.6%", issue: "Education copy", owner: "Content" },
      { step: "Language Passport completed", users: "1,708", conversion: "78.2%", issue: "Mobile copy test", owner: "Product" }
    ],
    fieldQuality: [
      { field: "Country", coverage: "91%", quality: "High", risk: "VPN/location mismatch", status: "Healthy" },
      { field: "City", coverage: "84%", quality: "Medium", risk: "Free-text variants", status: "Watch" },
      { field: "Main language", coverage: "96%", quality: "High", risk: "Dialect not captured", status: "Healthy" },
      { field: "Bridge language", coverage: "89%", quality: "High", risk: "Literal translation confusion", status: "Healthy" },
      { field: "Tone preference", coverage: "74%", quality: "Medium", risk: "Tone labels need localization", status: "Testing" }
    ],
    languagePairs: [
      { pair: "Yoruba + English", users: "4,820", growth: "+12%", quality: "94%", status: "Healthy" },
      { pair: "Pidgin + English", users: "3,104", growth: "+18%", quality: "89%", status: "Improving" },
      { pair: "Swahili + English", users: "2,760", growth: "+15%", quality: "92%", status: "Healthy" },
      { pair: "Hausa + English", users: "1,448", growth: "+9%", quality: "87%", status: "Watch" },
      { pair: "Arabic + French", users: "864", growth: "+7%", quality: "78%", status: "Building" }
    ],
    personalizationSurfaces: [
      { surface: "Fresh chat", usage: "92%", signal: "Prompt chips and greeting", owner: "Product", status: "Live" },
      { surface: "Active chat", usage: "88%", signal: "Language + tone route", owner: "AI Ops", status: "Live" },
      { surface: "Voice Circle", usage: "41%", signal: "Accent + bridge language", owner: "Voice Ops", status: "Beta" },
      { surface: "Creator Studio", usage: "36%", signal: "Tone and market copy", owner: "Product", status: "Design" },
      { surface: "Mobile onboarding", usage: "74%", signal: "Compact passport cards", owner: "Mobile", status: "Testing" }
    ],
    consentControls: [
      { control: "Editable profile fields", coverage: "100%", owner: "Product", status: "Live" },
      { control: "Memory opt-in", coverage: "88%", owner: "Privacy", status: "Live" },
      { control: "Personalization explanation", coverage: "72%", owner: "Content Design", status: "Improving" },
      { control: "Delete/export passport", coverage: "Designed", owner: "Privacy", status: "Roadmap" }
    ],
    qualityRisks: [
      { risk: "Passport values overfit response tone", impact: "Medium", owner: "AI QA", mitigation: "User can override per chat", status: "Mitigating" },
      { risk: "Dialect not specific enough", impact: "Medium", owner: "Language QA", mitigation: "Add dialect chips gradually", status: "Design" },
      { risk: "Regional assumptions from city/country", impact: "High", owner: "Policy", mitigation: "Use as context, not identity claim", status: "Guarded" },
      { risk: "Sensitive profile exposure", impact: "High", owner: "Privacy", mitigation: "Aggregate admin views only", status: "Controlled" }
    ],
    guardrails: [
      "Language Passport fields must stay user-editable, explainable, exportable, and deletable.",
      "Admin views should aggregate passport adoption and quality without exposing individual profiles.",
      "Country, city, language, and tone preferences should guide responses without stereotyping or forcing cultural assumptions.",
      "Passport signals must support per-chat override and clear memory/privacy controls on web, Android, and iOS."
    ]
  };
}

function adminLocalizationContentData() {
  return state.adminLocalizationContent || {
    summary: { localesInProgress: 18, stringsReady: "84%", glossaryTerms: 420, reviewerBacklog: 96, releaseBlockers: 3 },
    localeReadiness: [
      { locale: "English + Nigerian Pidgin", surface: "Web chat", completion: "96%", reviewer: "Community QA", status: "Ready" },
      { locale: "Yoruba", surface: "Welcome/Auth/Chat", completion: "88%", reviewer: "Yoruba reviewers", status: "Review" },
      { locale: "Swahili", surface: "Web + mobile beta", completion: "82%", reviewer: "East Africa QA", status: "Review" },
      { locale: "Hausa", surface: "Core chat flows", completion: "74%", reviewer: "Hausa reviewers", status: "Blocked terms" },
      { locale: "Zulu/Xhosa", surface: "Mobile onboarding", completion: "68%", reviewer: "South Africa QA", status: "Drafting" }
    ],
    contentQueues: [
      { queue: "New UI strings", count: 128, surface: "Admin + mobile", owner: "Localization", status: "Translating" },
      { queue: "Tone-sensitive copy", count: 42, surface: "Auth, plans, billing", owner: "Content Design", status: "Native review" },
      { queue: "Safety policy translations", count: 31, surface: "Safety/support", owner: "Trust", status: "Legal review" },
      { queue: "Release notes", count: 18, surface: "Web/mobile", owner: "Comms", status: "Queued" }
    ],
    glossary: [
      { term: "Language Passport", treatment: "Keep brand phrase + explain locally", languages: "All priority", owner: "Brand", status: "Approved" },
      { term: "Bridge language", treatment: "Translate concept, avoid literal confusion", languages: "Yoruba, Swahili, Hausa", owner: "Language QA", status: "Review" },
      { term: "Memory", treatment: "Privacy-safe wording", languages: "All", owner: "Privacy", status: "Approved" },
      { term: "Seed Admin", treatment: "Do not localize in UI", languages: "Admin only", owner: "Security", status: "Locked" }
    ],
    reviewerWorkflow: [
      { workflow: "Native linguistic review", reviewers: 18, backlog: 96, sla: "48h", status: "Busy" },
      { workflow: "Cultural tone pass", reviewers: 9, backlog: 44, sla: "72h", status: "Healthy" },
      { workflow: "Legal/safety copy review", reviewers: 4, backlog: 31, sla: "5 days", status: "Watch" },
      { workflow: "Mobile truncation QA", reviewers: 6, backlog: 52, sla: "Release gate", status: "Testing" }
    ],
    releaseChecks: [
      { check: "No missing production strings", surface: "Web", owner: "Frontend", status: "Pass" },
      { check: "Mobile small-screen truncation", surface: "Android/iOS", owner: "Mobile", status: "Watch" },
      { check: "Glossary consistency", surface: "All priority locales", owner: "Localization", status: "Review" },
      { check: "Safety/legal approved wording", surface: "Policy + appeals", owner: "Trust/Legal", status: "Blocked" }
    ],
    guardrails: [
      "Localized product copy must preserve meaning, tone, safety, privacy, and plan/billing accuracy.",
      "Native reviewers should approve culturally sensitive copy before public release in priority markets.",
      "Mobile localization must test truncation, right-sized type, and input clarity on small screens.",
      "Glossary and translation memory should avoid regional bias while keeping Lumora understandable across Africa."
    ]
  };
}

function adminDataGovernanceData() {
  return state.adminDataGovernance || {
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
}

function adminMemoryPersonalizationData() {
  return state.adminMemoryPersonalization || {
    summary: { memoryProfiles: "12.8K", optInRate: "88%", deletionQueue: 4, personalizationIncidents: 2, exportReadiness: "92%" },
    memorySurfaces: [
      { surface: "Language Passport", data: "Country, city, main language, bridge language", control: "User editable", owner: "Product", status: "Live" },
      { surface: "Tone Dial", data: "Preferred tone, dialect style, formality", control: "Per-chat override", owner: "Experience", status: "Live" },
      { surface: "Conversation memory", data: "Saved context and preferences", control: "Opt-in + delete", owner: "Privacy", status: "Beta" },
      { surface: "Mobile continuity", data: "Device handoff and recent prompts", control: "Session scoped", owner: "Mobile", status: "Design" }
    ],
    consentControls: [
      { control: "Memory opt-in", coverage: "88%", surface: "Web/Mobile", owner: "Privacy", status: "Healthy" },
      { control: "Sensitive memory exclusion", coverage: "96%", surface: "Chat", owner: "Safety", status: "Watch" },
      { control: "Per-chat temporary mode", coverage: "Web beta", surface: "Chat composer", owner: "Product", status: "Building" },
      { control: "Enterprise memory policy", coverage: "Teams beta", surface: "Workspace admin", owner: "Enterprise", status: "Review" }
    ],
    userControls: [
      { control: "View remembered details", availability: "Profile dashboard", friction: "Low", owner: "Product", status: "Designed" },
      { control: "Delete individual memory", availability: "Profile dashboard", friction: "Low", owner: "Privacy", status: "Queued" },
      { control: "Export memory profile", availability: "Privacy request", friction: "Medium", owner: "Privacy Ops", status: "Ready" },
      { control: "Pause personalization", availability: "Settings", friction: "Low", owner: "Experience", status: "Live" }
    ],
    personalizationQuality: [
      { signal: "Language preference accuracy", segment: "Yoruba + Pidgin", score: "93%", trend: "+4%", status: "Healthy" },
      { signal: "Tone match", segment: "Respectful/teacher", score: "89%", trend: "+2%", status: "Healthy" },
      { signal: "Code-switch continuity", segment: "Arabic/French", score: "74%", trend: "-1%", status: "Watch" },
      { signal: "Mobile handoff success", segment: "Android beta", score: "81%", trend: "+6%", status: "Improving" }
    ],
    riskReviews: [
      { review: "Sensitive inference prevention", risk: "High", reviewer: "Privacy/Safety", mitigation: "Classifier + exclusion list", status: "Mitigating" },
      { review: "Children and education use", risk: "Medium", reviewer: "Policy", mitigation: "Age-aware defaults", status: "Review" },
      { review: "Enterprise workspace memory", risk: "Medium", reviewer: "Security", mitigation: "Tenant policy controls", status: "Design" },
      { review: "Cross-device continuity", risk: "Low", reviewer: "Mobile", mitigation: "Session expiry", status: "Queued" }
    ],
    guardrails: [
      "Personalization must be explainable: users should know what Lumora remembers and why it affects replies.",
      "Sensitive traits, protected attributes, payment data, secrets, and health/legal/financial details should not be stored as reusable memory by default.",
      "Users must be able to pause, export, edit, and delete memory without losing basic access to chat.",
      "Enterprise memory requires workspace policy controls, tenant isolation, audit logs, and admin-approved defaults."
    ]
  };
}

function adminResidencySovereigntyData() {
  return state.adminResidencySovereignty || {
    summary: { residencyRegions: 5, transferReviews: 14, sovereignDatasets: 38, keyCustodyHealth: "97%", retentionAlerts: 9 },
    regionPosture: [
      { region: "West Africa", primary: "Lagos edge", backup: "EU West", dataClass: "User profile + chat metadata", status: "Design" },
      { region: "East Africa", primary: "Nairobi edge", backup: "EU West", dataClass: "Language telemetry", status: "Planned" },
      { region: "Southern Africa", primary: "Johannesburg edge", backup: "EU West", dataClass: "Enterprise workspaces", status: "Ready" },
      { region: "North Africa", primary: "EU South", backup: "EU West", dataClass: "Arabic/French traffic", status: "Review" }
    ],
    transferReviews: [
      { review: "Teams export to EU processor", market: "Nigeria", risk: "Medium", owner: "Privacy", status: "Approved" },
      { review: "Model eval samples", market: "Kenya", risk: "Low", owner: "AI Governance", status: "Queued" },
      { review: "Support transcript handoff", market: "South Africa", risk: "Medium", owner: "Support/Privacy", status: "Review" },
      { review: "Mobile crash analytics", market: "Ghana", risk: "Low", owner: "Mobile Ops", status: "Mapped" }
    ],
    dataStores: [
      { store: "User profile DB", class: "Personal data", residency: "Market-aware", encryption: "KMS managed", status: "Healthy" },
      { store: "Conversation ledger", class: "Sensitive prompts", residency: "Policy routed", encryption: "Per-tenant keys", status: "Watch" },
      { store: "Language corrections", class: "Contributor data", residency: "Regional", encryption: "KMS managed", status: "Healthy" },
      { store: "RAG workspaces", class: "Enterprise files", residency: "Tenant selected", encryption: "Customer-key ready", status: "Review" }
    ],
    keyCustody: [
      { control: "KMS rotation", coverage: "98%", owner: "Security", status: "Healthy" },
      { control: "Tenant key isolation", coverage: "Teams beta", owner: "Platform", status: "Building" },
      { control: "Break-glass access", coverage: "Seed admins only", owner: "Security", status: "Review" },
      { control: "Key access audit", coverage: "Realtime", owner: "Compliance", status: "Healthy" }
    ],
    retentionControls: [
      { policy: "Free chat history", window: "30 days default", exceptions: 4, owner: "Privacy", status: "Healthy" },
      { policy: "Paid chat history", window: "User controlled", exceptions: 2, owner: "Product", status: "Healthy" },
      { policy: "Enterprise workspace files", window: "Contract controlled", exceptions: 3, owner: "Success/Legal", status: "Review" },
      { policy: "Safety evidence", window: "Case based", exceptions: 9, owner: "Trust", status: "Watch" }
    ],
    guardrails: [
      "Residency promises must match actual storage, backups, logs, analytics, support tooling, and model-evaluation flows.",
      "Cross-border transfers need purpose, lawful basis, owner, expiry, and audit evidence before approval.",
      "Enterprise tenants should see residency and retention controls without exposing infrastructure secrets.",
      "Sensitive African-language datasets require consent, provenance, locality, and deletion paths before production use."
    ]
  };
}

function adminPrivacyRequestsData() {
  return state.adminPrivacyRequests || {
    summary: { openRequests: 31, exportQueue: 9, deletionQueue: 4, slaAtRisk: 3, legalHolds: 2 },
    requests: [
      { type: "Data export", region: "Nigeria", count: 9, sla: "7 days", owner: "Privacy", status: "Identity review" },
      { type: "Account deletion", region: "Kenya", count: 4, sla: "30 days", owner: "Privacy", status: "Dependency check" },
      { type: "Correction request", region: "South Africa", count: 6, sla: "14 days", owner: "Support", status: "User follow-up" },
      { type: "Consent withdrawal", region: "Diaspora", count: 11, sla: "Immediate", owner: "Privacy", status: "Automated" },
      { type: "Processing objection", region: "EU users", count: 1, sla: "30 days", owner: "Legal", status: "Counsel review" }
    ],
    exports: [
      { package: "Profile and settings", system: "Identity", readiness: "Ready", reviewer: "Privacy", status: "Queued" },
      { package: "Conversation history", system: "Chat store", readiness: "Consent scoped", reviewer: "Privacy", status: "Review" },
      { package: "Billing records", system: "Payments", readiness: "Invoice only", reviewer: "Finance", status: "Ready" },
      { package: "Support cases", system: "Support", readiness: "PII redaction", reviewer: "Support lead", status: "Redacting" }
    ],
    deletions: [
      { workflow: "Consumer account deletion", dependencies: "Billing, chat, memory", blockers: "1 active invoice", status: "Waiting" },
      { workflow: "Voice sample removal", dependencies: "Object storage, indexes", blockers: "None", status: "Ready" },
      { workflow: "Reviewer queue redaction", dependencies: "Language QA", blockers: "2 active reviews", status: "Hold" },
      { workflow: "Enterprise user removal", dependencies: "Workspace, SSO, audit", blockers: "Admin approval", status: "Pending" }
    ],
    holds: [
      { hold: "Enterprise contract dispute", scope: "Workspace audit + invoices", owner: "Legal", expires: "2026-10-15", status: "Active" },
      { hold: "Payment investigation", scope: "Billing events", owner: "Finance Legal", expires: "2026-09-01", status: "Active" },
      { hold: "Safety appeal", scope: "Moderation evidence", owner: "Trust", expires: "2026-08-24", status: "Review" }
    ],
    residencyReviews: [
      { market: "Nigeria", data: "Profiles and chat metadata", requirement: "West Africa policy draft", owner: "Platform", status: "Mapping" },
      { market: "EU diaspora", data: "Export/delete requests", requirement: "GDPR workflow", owner: "Privacy", status: "Live" },
      { market: "Enterprise tenants", data: "Knowledge bases", requirement: "Tenant-scoped processing", owner: "Enterprise", status: "Live" },
      { market: "Mobile telemetry", data: "Device and crash events", requirement: "Consent and minimization", owner: "Mobile", status: "Review" }
    ],
    guardrails: [
      "Privacy request queues must verify requester identity before exporting or deleting data.",
      "Deletion workflows must check billing, legal hold, safety appeal, and enterprise tenant dependencies.",
      "Exports should be time-limited, watermarked where appropriate, encrypted, and audit logged.",
      "Privacy operations must expose workflow status, not raw private conversations or sensitive user content."
    ]
  };
}

function adminDpiaData() {
  return state.adminDpia || {
    summary: { openAssessments: 12, highRiskLaunches: 5, mitigationsDue: 18, approvalsPending: 7, residualRisk: "Medium" },
    assessments: [
      { assessment: "Voice Circle retention", surface: "Mobile", risk: "High", owner: "Privacy/Voice Ops", status: "Mitigating" },
      { assessment: "Teams RAG workspace", surface: "Web/API", risk: "High", owner: "Enterprise", status: "Legal review" },
      { assessment: "Language correction program", surface: "Review tools", risk: "Medium", owner: "Language QA", status: "Approved" },
      { assessment: "Mobile crash telemetry", surface: "Android/iOS", risk: "Medium", owner: "Mobile Ops", status: "Queued" }
    ],
    highRiskProcessing: [
      { process: "Sensitive voice samples", data: "Voice + language", lawfulBasis: "Explicit consent", market: "Multi-market", status: "Gate required" },
      { process: "Enterprise documents", data: "Workspace files", lawfulBasis: "Contract", market: "Tenant scoped", status: "Review" },
      { process: "Safety investigations", data: "Moderation evidence", lawfulBasis: "Legitimate interest", market: "All", status: "Controlled" },
      { process: "Model evaluation samples", data: "Redacted prompts", lawfulBasis: "Consent/contract", market: "Regional", status: "Sampling" }
    ],
    mitigations: [
      { mitigation: "Voice sample auto-expiry", risk: "Retention", owner: "Voice Ops", due: "Aug 18", status: "Building" },
      { mitigation: "Tenant key isolation", risk: "Enterprise file exposure", owner: "Platform", due: "Aug 22", status: "In progress" },
      { mitigation: "Reviewer least-privilege access", risk: "Correction data misuse", owner: "Security", due: "Aug 15", status: "Ready" },
      { mitigation: "Telemetry minimization", risk: "Mobile device data", owner: "Mobile", due: "Aug 20", status: "Queued" }
    ],
    approvals: [
      { gate: "Mobile voice beta", approver: "Privacy Lead", evidence: "Consent UX + retention", decision: "Conditional" },
      { gate: "Teams knowledge launch", approver: "Legal + Security", evidence: "DPA + key custody", decision: "Pending" },
      { gate: "Correction reviewer expansion", approver: "Language QA", evidence: "Access policy", decision: "Approved" },
      { gate: "Public-sector pilot", approver: "DPO/Counsel", evidence: "Residency note", decision: "Review" }
    ],
    residualRisks: [
      { risk: "Cross-border model evaluation", severity: "Medium", owner: "AI Governance", review: "Weekly", status: "Open" },
      { risk: "Voice consent comprehension", severity: "High", owner: "Product/Privacy", review: "Before beta", status: "Mitigating" },
      { risk: "Enterprise file deletion dependency", severity: "Medium", owner: "Knowledge Ops", review: "Sprint", status: "Watch" },
      { risk: "Reviewer market bias", severity: "Low", owner: "Language QA", review: "Monthly", status: "Tracked" }
    ],
    guardrails: [
      "High-risk processing cannot launch without owner, lawful basis, mitigation, approver, and residual-risk decision.",
      "DPIA evidence should link to privacy, residency, AI governance, security, and release-readiness records.",
      "Assessments must cover web, mobile, API, model evaluation, support tooling, and reviewer workflows.",
      "Admin views should summarize risks and decisions without exposing private prompts, voice samples, or tenant files."
    ]
  };
}

function adminIntegrationsData() {
  return state.adminIntegrations || {
    summary: { connectedServices: 18, degradedServices: 2, webhookRetries: 42, partnerAccounts: 11, secretsRotating: 3 },
    services: [
      { service: "Hugging Face", category: "Model hosting", status: "Healthy", owner: "AI Ops", risk: "Latency watch" },
      { service: "Payment processor", category: "Billing", status: "Retry watch", owner: "Finance", risk: "31 failed payments" },
      { service: "Email provider", category: "Communications", status: "Healthy", owner: "Growth", risk: "Normal" },
      { service: "Push notification gateway", category: "Mobile", status: "Token cleanup", owner: "Mobile", risk: "Android retries" },
      { service: "Analytics warehouse", category: "Analytics", status: "Healthy", owner: "Analytics", risk: "5 min freshness" }
    ],
    webhooks: [
      { event: "payment.upgraded", destination: "Billing ledger", retries: 3, status: "Retrying", owner: "Revenue Ops" },
      { event: "message.completed", destination: "Partner apps", retries: 18, status: "Healthy", owner: "Developer Support" },
      { event: "safety.escalated", destination: "Trust queue", retries: 0, status: "Protected", owner: "Trust" },
      { event: "report.generated", destination: "Leadership archive", retries: 2, status: "Watch", owner: "Operations" }
    ],
    partners: [
      { partner: "EduBridge Africa", integration: "API + SSO", usage: "1.8M calls", status: "Expansion" },
      { partner: "MarketUnion NG", integration: "API + webhooks", usage: "940K calls", status: "Rate watch" },
      { partner: "Creator Desk", integration: "Creator API", usage: "284K calls", status: "Healthy" },
      { partner: "Swahili Learning Hub", integration: "Teams workspace", usage: "184 seats", status: "Onboarding" }
    ],
    secrets: [
      { secret: "Model provider token", owner: "AI Ops", rotation: "14 days", status: "Scheduled" },
      { secret: "Payment webhook signing key", owner: "Finance", rotation: "30 days", status: "Active" },
      { secret: "Email API key", owner: "Growth", rotation: "45 days", status: "Queued" },
      { secret: "Mobile push certificate", owner: "Mobile", rotation: "90 days", status: "Healthy" }
    ],
    guardrails: [
      "Every external service needs owner, category, health, credentials, retry policy, and incident runbook.",
      "Webhook payloads must be signed, retried safely, and routed through dead-letter queues when needed.",
      "Partner access must use scoped API keys, quotas, audit logs, and environment separation.",
      "Secrets must rotate on schedule and never appear in browser code, logs, reports, or support views."
    ]
  };
}

function adminExperimentsData() {
  return state.adminExperiments || {
    summary: { activeExperiments: 9, winningTests: 3, rolloutFlags: 18, guardedRollouts: 4, killSwitches: 1 },
    experiments: [
      { test: "Neon centered composer onboarding", segment: "New users", lift: "+8.4%", owner: "Growth", status: "Winner" },
      { test: "Language Passport prompt chips", segment: "Mobile", lift: "+5.1%", owner: "Product", status: "Running" },
      { test: "Pro upgrade after third saved workflow", segment: "Creators", lift: "+3.7%", owner: "Revenue", status: "Review" },
      { test: "Voice Circle first-run guide", segment: "Voice users", lift: "+6.2%", owner: "Mobile", status: "Queued" }
    ],
    flags: [
      { flag: "api_chat_router", surface: "Web/Mobile", rollout: "100%", owner: "AI Ops", status: "On" },
      { flag: "voice_circle_native", surface: "Mobile", rollout: "20%", owner: "Mobile", status: "Beta" },
      { flag: "premium_upgrade_flow", surface: "Web", rollout: "100%", owner: "Growth", status: "On" },
      { flag: "force_mobile_update", surface: "Mobile", rollout: "0%", owner: "Platform", status: "Armed" }
    ],
    rollouts: [
      { rollout: "Mobile Voice Circle beta", audience: "Android beta users", exposure: "20%", guardrail: "Crash-free > 99.5%" },
      { rollout: "Language Passport chips", audience: "New mobile users", exposure: "50%", guardrail: "Signup completion stable" },
      { rollout: "Model routing policy", audience: "Pro/Teams", exposure: "25%", guardrail: "Fallback < 8%" },
      { rollout: "Creator upgrade prompt", audience: "High usage creators", exposure: "35%", guardrail: "Refund requests stable" }
    ],
    decisions: [
      { decision: "Promote centered composer onboarding", evidence: "+8.4% activation", owner: "Product", status: "Approved" },
      { decision: "Hold force mobile update", evidence: "Beta crash cluster contained", owner: "Platform", status: "Hold" },
      { decision: "Expand Language Passport chips", evidence: "+5.1% mobile completion", owner: "Growth", status: "Review" },
      { decision: "Delay speech latency test", evidence: "Voice p95 above threshold", owner: "Voice Ops", status: "Blocked" }
    ],
    guardrails: [
      "Every experiment needs owner, hypothesis, segment, exposure, success metric, and rollback criteria.",
      "AI/model experiments require safety, language-quality, latency, and fallback guardrails before rollout.",
      "Revenue experiments must watch refunds, churn, support volume, and country/payment constraints.",
      "Kill switches must be fast, audited, and scoped by surface, country, plan, and version."
    ]
  };
}

function adminEvaluationsData() {
  return state.adminEvaluations || {
    summary: { evalSuites: 14, runsToday: 38, regressions: 7, humanSamples: 312, releaseGates: 5 },
    suites: [
      { suite: "African language translation", scope: "Yoruba, Swahili, Hausa, Zulu", score: "92%", owner: "AI QA", status: "Passing" },
      { suite: "Dialect and tone preservation", scope: "Pidgin, street, elder, business", score: "89%", owner: "Language QA", status: "Watch" },
      { suite: "Safety refusal quality", scope: "High-risk advice and abuse", score: "94%", owner: "Trust", status: "Passing" },
      { suite: "Code-switching comprehension", scope: "Mixed African languages + English", score: "87%", owner: "Model Ops", status: "Review" }
    ],
    runs: [
      { run: "AfriNLLB route eval", model: "AfriNLLB", samples: 1240, result: "Pass", owner: "AI Ops" },
      { run: "AfroXLMR-Social tone eval", model: "AfroXLMR-Social", samples: 860, result: "Watch", owner: "Language QA" },
      { run: "Meta MMS noisy audio eval", model: "Meta MMS", samples: 540, result: "Regression", owner: "Voice Ops" },
      { run: "InkubaLM lightweight generation eval", model: "InkubaLM", samples: 420, result: "Pass", owner: "Model Ops" }
    ],
    regressions: [
      { issue: "Noisy mobile speech recognition", severity: "High", affected: "Voice Circle", owner: "Voice Ops", status: "Mitigating" },
      { issue: "Youth tone too formal", severity: "Medium", affected: "Creator Studio", owner: "Language QA", status: "Sampling" },
      { issue: "Idioms translated literally", severity: "Medium", affected: "Translate", owner: "AI QA", status: "Review" },
      { issue: "Fallback route too slow", severity: "High", affected: "Pro/Teams", owner: "Model Ops", status: "Investigating" }
    ],
    releaseGates: [
      { gate: "Safety score", threshold: ">= 93%", current: "94%", status: "Pass" },
      { gate: "Language confidence", threshold: ">= 90%", current: "91%", status: "Pass" },
      { gate: "Fallback rate", threshold: "< 8%", current: "7.6%", status: "Pass" },
      { gate: "Voice p95 latency", threshold: "< 2s", current: "2.3s", status: "Block" }
    ],
    guardrails: [
      "No model, prompt, or route policy should ship without eval results tied to owner and release gate.",
      "African language evals must include native reviewer samples, code-switching, dialect, and tone preservation.",
      "Safety regressions block rollout even when latency, cost, or conversion improves.",
      "Release gates must compare current model, fallback model, and previous production baseline."
    ]
  };
}

function adminCustomerSuccessData() {
  return state.adminCustomerSuccess || {
    summary: { enterpriseAccounts: 47, onboardingWorkspaces: 8, renewalRisk: 6, expansionReady: 12, healthScore: "86%" },
    accounts: [
      { account: "EduBridge Africa", plan: "Teams", seats: 320, health: "Expansion", owner: "Customer Success" },
      { account: "MarketUnion NG", plan: "Teams", seats: 210, health: "Healthy", owner: "Customer Success" },
      { account: "Swahili Learning Hub", plan: "Teams", seats: 184, health: "Onboarding", owner: "Enterprise" },
      { account: "Creator Desk", plan: "Pro/Teams", seats: 96, health: "Support watch", owner: "Support" }
    ],
    onboarding: [
      { workspace: "Swahili Learning Hub", milestone: "Language packs", progress: "72%", blocker: "Reviewer approval" },
      { workspace: "EduBridge Africa", milestone: "SSO rollout", progress: "88%", blocker: "Domain verification" },
      { workspace: "MarketUnion NG", milestone: "Webhook launch", progress: "64%", blocker: "Retry mapping" },
      { workspace: "Creator Desk", milestone: "Creator workflows", progress: "54%", blocker: "Template review" }
    ],
    renewals: [
      { account: "EduBridge Africa", renewal: "Nov 2026", value: "$58K ARR", risk: "Low", action: "Expansion review" },
      { account: "MarketUnion NG", renewal: "Oct 2026", value: "$34K ARR", risk: "Medium", action: "Payment retry watch" },
      { account: "Swahili Learning Hub", renewal: "Dec 2026", value: "$28K ARR", risk: "Low", action: "Onboarding support" },
      { account: "Creator Desk", renewal: "Sep 2026", value: "$18K ARR", risk: "Medium", action: "Support escalation" }
    ],
    playbooks: [
      { playbook: "SSO/domain onboarding", owner: "Enterprise", trigger: "Teams workspace created", status: "Active" },
      { playbook: "Language quality escalation", owner: "Language QA", trigger: "CSAT below 4.3", status: "Active" },
      { playbook: "Expansion opportunity", owner: "Customer Success", trigger: "Seat usage above 80%", status: "Ready" },
      { playbook: "Renewal risk save", owner: "Leadership", trigger: "Health below 70%", status: "Review" }
    ],
    guardrails: [
      "Enterprise success data should show account health, not private user chats or sensitive content.",
      "Expansion recommendations must include usage, support, payment, and language-quality context.",
      "Renewal risks should route to owners with next actions, dates, and evidence.",
      "Customer-facing commitments must match platform, language, privacy, and support readiness."
    ]
  };
}

function adminSalesData() {
  return state.adminSales || {
    summary: { pipelineArr: "$684K", qualifiedDeals: 38, demosBooked: 21, procurementRisk: 5, partnerLeads: 14 },
    pipeline: [
      { account: "Pan-African Tutors", stage: "Security review", value: "$96K ARR", owner: "Enterprise Sales", close: "Sep 2026" },
      { account: "HealthBridge Clinics", stage: "Pilot", value: "$84K ARR", owner: "Solutions", close: "Oct 2026" },
      { account: "TradeMarket Africa", stage: "Proposal", value: "$72K ARR", owner: "Enterprise Sales", close: "Aug 2026" },
      { account: "Civic Language Lab", stage: "Discovery", value: "$58K ARR", owner: "Partnerships", close: "Nov 2026" }
    ],
    demos: [
      { demo: "Teams workspace and SSO", audience: "Education buyer", market: "Kenya", date: "Aug 12", status: "Booked" },
      { demo: "Language quality and reviewer loop", audience: "Government innovation", market: "Nigeria", date: "Aug 15", status: "Prep" },
      { demo: "API translation workflow", audience: "Marketplace operator", market: "Ghana", date: "Aug 19", status: "Booked" },
      { demo: "Voice Circle for clinics", audience: "Healthcare network", market: "South Africa", date: "Aug 22", status: "Needs security" }
    ],
    procurement: [
      { account: "Pan-African Tutors", blocker: "DPA review", owner: "Legal", risk: "Medium", action: "Send data map" },
      { account: "HealthBridge Clinics", blocker: "HIPAA-style questionnaire", owner: "Security", risk: "High", action: "Security packet" },
      { account: "TradeMarket Africa", blocker: "Invoice terms", owner: "Finance", risk: "Low", action: "Approve terms" },
      { account: "Civic Language Lab", blocker: "Reviewer policy", owner: "Language Ops", risk: "Medium", action: "Policy appendix" }
    ],
    partners: [
      { partner: "Regional cloud reseller", region: "West Africa", leads: 6, motion: "Co-sell", status: "Active" },
      { partner: "EdTech association", region: "East Africa", leads: 4, motion: "Webinar", status: "Planning" },
      { partner: "Language research network", region: "Pan-African", leads: 3, motion: "Dataset partnership", status: "Review" },
      { partner: "Creator community", region: "Southern Africa", leads: 1, motion: "Ambassador", status: "Pilot" }
    ],
    guardrails: [
      "Enterprise sales should track revenue opportunity without exposing private user prompts or account secrets.",
      "Deals involving schools, healthcare, governments, or children require privacy, security, and legal review before pilot expansion.",
      "Sales promises must map to live product capability, model readiness, supported languages, and operational capacity.",
      "Partner motions require clear ownership, data-sharing boundaries, co-selling terms, and support handoff."
    ]
  };
}

function adminRiskData() {
  return state.adminRisk || {
    summary: { openRisks: 17, criticalRisks: 2, mitigationsDue: 6, boardItems: 4, riskTrend: "Stable" },
    register: [
      { risk: "Voice latency in noisy environments", category: "Product", severity: "High", owner: "Voice Ops", status: "Mitigating" },
      { risk: "Enterprise privacy questionnaire gaps", category: "Compliance", severity: "High", owner: "Security", status: "Review" },
      { risk: "Payment retries in selected markets", category: "Revenue", severity: "Medium", owner: "Finance", status: "Watching" },
      { risk: "Language reviewer bottleneck", category: "Operations", severity: "Medium", owner: "Language QA", status: "Hiring" }
    ],
    mitigations: [
      { plan: "Fallback speech route", risk: "Voice latency", owner: "AI Ops", due: "Aug 14", confidence: "Medium" },
      { plan: "Enterprise security packet", risk: "Procurement delays", owner: "Security", due: "Aug 16", confidence: "High" },
      { plan: "Market payment retry rules", risk: "Failed upgrades", owner: "Finance", due: "Aug 20", confidence: "Medium" },
      { plan: "Reviewer queue prioritization", risk: "Language quality", owner: "Language QA", due: "Aug 18", confidence: "High" }
    ],
    board: [
      { item: "Data residency readiness", exposure: "Enterprise deals", owner: "Legal", nextReview: "Aug 21" },
      { item: "Model release gate discipline", exposure: "Quality and safety", owner: "AI QA", nextReview: "Aug 15" },
      { item: "Mobile launch reliability", exposure: "iOS/Android rollout", owner: "Platform", nextReview: "Aug 19" },
      { item: "Procurement and DPA cycle time", exposure: "Teams revenue", owner: "Enterprise Sales", nextReview: "Aug 23" }
    ],
    heatmap: [
      { area: "AI Quality", likelihood: "Medium", impact: "High", score: "12", trend: "Down" },
      { area: "Security", likelihood: "Low", impact: "High", score: "8", trend: "Stable" },
      { area: "Revenue", likelihood: "Medium", impact: "Medium", score: "9", trend: "Up" },
      { area: "Operations", likelihood: "High", impact: "Medium", score: "12", trend: "Stable" }
    ],
    guardrails: [
      "Risks should include owner, severity, mitigation, due date, confidence, and evidence before leadership review.",
      "Critical risks must link to incident, security, legal, model-evaluation, or finance context before closeout.",
      "Board-facing risk summaries should be factual, concise, and separated from private user content.",
      "No risk should be downgraded without a mitigation result, measurable signal, or named executive approval."
    ]
  };
}

function adminLegalData() {
  return state.adminLegal || {
    summary: { openReviews: 12, dpaQueue: 5, policyUpdates: 4, legalRequests: 3, approvalSla: "91%" },
    contracts: [
      { contract: "Teams DPA template", account: "Pan-African Tutors", owner: "Legal", status: "Review", due: "Aug 13" },
      { contract: "Marketplace API terms", account: "TradeMarket Africa", owner: "Legal", status: "Drafting", due: "Aug 16" },
      { contract: "Research data MOU", account: "Language research network", owner: "Partnerships", status: "Counsel review", due: "Aug 20" },
      { contract: "Healthcare pilot addendum", account: "HealthBridge Clinics", owner: "Security", status: "Blocked", due: "Aug 18" }
    ],
    policies: [
      { policy: "African language data use", area: "Privacy", owner: "Data Gov", version: "v0.4", status: "Review" },
      { policy: "Children and classroom usage", area: "Safety", owner: "Trust", version: "v0.2", status: "Draft" },
      { policy: "Reviewer confidentiality", area: "Language QA", owner: "Legal", version: "v0.5", status: "Ready" },
      { policy: "Government request handling", area: "Compliance", owner: "Legal", version: "v0.3", status: "Review" }
    ],
    requests: [
      { request: "Data export attestation", region: "EU/Africa", owner: "Privacy", urgency: "Medium", status: "Open" },
      { request: "Law-enforcement request", region: "West Africa", owner: "Legal", urgency: "High", status: "Counsel only" },
      { request: "Content takedown review", region: "Global", owner: "Trust", urgency: "Medium", status: "Review" },
      { request: "Vendor subprocessors list", region: "Enterprise", owner: "Security", urgency: "Low", status: "Ready" }
    ],
    approvals: [
      { approval: "Dataset partnership", requester: "Language Ops", reviewer: "Legal", decision: "Needs privacy addendum" },
      { approval: "Enterprise data residency claim", requester: "Sales", reviewer: "Legal", decision: "Evidence required" },
      { approval: "Classroom pilot wording", requester: "Marketing", reviewer: "Trust", decision: "Approved with edits" },
      { approval: "Partner co-selling terms", requester: "Partnerships", reviewer: "Finance", decision: "Commercial review" }
    ],
    guardrails: [
      "Legal views should summarize status, owner, and risk without exposing privileged legal advice broadly.",
      "Enterprise promises must align with approved terms, live product capability, security posture, and privacy commitments.",
      "Data partnerships require provenance, consent basis, permitted use, retention, and deletion obligations before launch.",
      "Sensitive legal requests should route to counsel-only workflows with audited access and minimal disclosure."
    ]
  };
}

function adminPeopleData() {
  return state.adminPeople || {
    summary: { teamCoverage: "82%", openRoles: 9, reviewerCapacity: "74%", onCallLoad: "Medium", enablementDue: 6 },
    staffing: [
      { team: "Language QA", coverage: "74%", gap: "Yoruba/Pidgin reviewers", owner: "People Ops", status: "Hiring" },
      { team: "AI Ops", coverage: "86%", gap: "Eval automation", owner: "Engineering", status: "Backfill planned" },
      { team: "Support", coverage: "91%", gap: "Francophone queue", owner: "Support", status: "Training" },
      { team: "Security", coverage: "79%", gap: "Procurement reviews", owner: "Security", status: "Contractor review" }
    ],
    hiring: [
      { role: "Native language reviewer lead", region: "West Africa", priority: "High", pipeline: "6 candidates", status: "Interview" },
      { role: "Voice ML engineer", region: "Remote Africa", priority: "High", pipeline: "3 candidates", status: "Sourcing" },
      { role: "Enterprise support specialist", region: "East Africa", priority: "Medium", pipeline: "8 candidates", status: "Screening" },
      { role: "Privacy operations analyst", region: "Pan-African", priority: "Medium", pipeline: "4 candidates", status: "Interview" }
    ],
    rotations: [
      { rotation: "Model incident on-call", owner: "AI Ops", load: "Medium", next: "Aug 12", backup: "Platform" },
      { rotation: "Trust and safety review", owner: "Trust", load: "High", next: "Aug 10", backup: "Legal" },
      { rotation: "Enterprise launch support", owner: "Customer Success", load: "Medium", next: "Aug 14", backup: "Sales" },
      { rotation: "Language escalation", owner: "Language QA", load: "High", next: "Aug 11", backup: "Reviewer lead" }
    ],
    enablement: [
      { program: "Seed-admin access training", audience: "Leadership", completion: "88%", owner: "Security" },
      { program: "Safe support data boundaries", audience: "Support", completion: "76%", owner: "Trust" },
      { program: "Language reviewer calibration", audience: "Reviewers", completion: "69%", owner: "Language QA" },
      { program: "Enterprise demo readiness", audience: "Sales/CS", completion: "82%", owner: "Product" }
    ],
    guardrails: [
      "People Ops metrics should show capacity and readiness, not private personnel details or sensitive HR records.",
      "Reviewer capacity must include language, dialect, region, quality, and burnout signals before expansion decisions.",
      "Seed-admin and support access require training completion, least privilege, and periodic recertification.",
      "On-call rotations should protect team health while keeping incidents, customer launches, and safety queues covered."
    ]
  };
}

function adminVendorData() {
  return state.adminVendors || {
    summary: { activeVendors: 26, renewalsDue: 7, monthlySpend: "$42.6K", highRisk: 3, dueDiligenceOpen: 8 },
    vendors: [
      { vendor: "Hugging Face", category: "Model hosting", owner: "AI Ops", spend: "$12.4K/mo", status: "Strategic" },
      { vendor: "Cloud GPU Pool", category: "Compute", owner: "Infrastructure", spend: "$18.1K/mo", status: "Cost watch" },
      { vendor: "Payment processor", category: "Billing", owner: "Finance", spend: "$4.8K/mo", status: "Healthy" },
      { vendor: "Support desk", category: "Customer support", owner: "Support", spend: "$2.2K/mo", status: "Renewal due" }
    ],
    renewals: [
      { contract: "Model endpoint capacity", vendor: "Hugging Face", renewal: "Sep 2026", owner: "AI Ops", action: "Negotiate capacity" },
      { contract: "GPU reserved instances", vendor: "Cloud GPU Pool", renewal: "Oct 2026", owner: "Infrastructure", action: "Cost benchmark" },
      { contract: "Support desk seats", vendor: "Support desk", renewal: "Aug 2026", owner: "Support", action: "Seat audit" },
      { contract: "Payment routing", vendor: "Payment processor", renewal: "Nov 2026", owner: "Finance", action: "Market coverage review" }
    ],
    diligence: [
      { review: "Subprocessor and DPA review", vendor: "Support desk", owner: "Legal", risk: "Medium", status: "Open" },
      { review: "Security questionnaire", vendor: "Cloud GPU Pool", owner: "Security", risk: "High", status: "Evidence needed" },
      { review: "Data residency posture", vendor: "Hugging Face", owner: "Data Gov", risk: "Medium", status: "Review" },
      { review: "PCI evidence package", vendor: "Payment processor", owner: "Finance", risk: "Low", status: "Ready" }
    ],
    spend: [
      { area: "AI/model hosting", budget: "$14K", actual: "$12.4K", variance: "-11%", trend: "Stable" },
      { area: "Compute", budget: "$15K", actual: "$18.1K", variance: "+21%", trend: "Up" },
      { area: "Support tooling", budget: "$2.5K", actual: "$2.2K", variance: "-12%", trend: "Stable" },
      { area: "Billing tooling", budget: "$5K", actual: "$4.8K", variance: "-4%", trend: "Stable" }
    ],
    guardrails: [
      "Vendors touching user, enterprise, or model data require legal, security, privacy, and owner approval.",
      "Renewals should include usage, spend, risk, alternatives, and negotiation owner before approval.",
      "High-risk vendors need documented mitigations, subprocessor review, and exit plan before production dependency grows.",
      "Procurement data should show business status and risk without exposing secrets, keys, credentials, or privileged contracts."
    ]
  };
}

function adminRegionalLaunchData() {
  return state.adminRegionalLaunch || {
    summary: { launchMarkets: 9, readyMarkets: 4, blockedMarkets: 3, paymentCoverage: "71%", localPartners: 18 },
    markets: [
      { market: "Nigeria", stage: "Scale", readiness: "92%", owner: "Growth", status: "Ready" },
      { market: "Kenya", stage: "Launch", readiness: "84%", owner: "Regional Ops", status: "Ready" },
      { market: "Ghana", stage: "Beta", readiness: "76%", owner: "Language QA", status: "Watch" },
      { market: "South Africa", stage: "Beta", readiness: "73%", owner: "Partnerships", status: "Payments review" }
    ],
    localization: [
      { locale: "Yoruba + Pidgin", coverage: "A", reviewers: 18, gap: "Youth tone samples", status: "Improving" },
      { locale: "Swahili", coverage: "A", reviewers: 12, gap: "Voice noise samples", status: "Ready" },
      { locale: "Twi/Akan", coverage: "B", reviewers: 7, gap: "Business tone", status: "Review" },
      { locale: "Zulu/Xhosa", coverage: "B", reviewers: 9, gap: "Speech evals", status: "Sampling" }
    ],
    blockers: [
      { market: "South Africa", blocker: "Payment method coverage", owner: "Finance", severity: "Medium", action: "Processor review" },
      { market: "Ghana", blocker: "Reviewer capacity", owner: "Language QA", severity: "Medium", action: "Hire reviewers" },
      { market: "Ethiopia", blocker: "Localization and compliance", owner: "Legal", severity: "High", action: "Market brief" },
      { market: "Senegal", blocker: "Francophone support", owner: "Support", severity: "Medium", action: "Queue training" }
    ],
    partners: [
      { partner: "Creator community", market: "Nigeria", motion: "Ambassadors", leads: 24, status: "Active" },
      { partner: "EdTech network", market: "Kenya", motion: "Classroom pilots", leads: 12, status: "Launch" },
      { partner: "Language reviewers guild", market: "Ghana", motion: "Reviewer bench", leads: 8, status: "Recruiting" },
      { partner: "Business association", market: "South Africa", motion: "SMB demos", leads: 10, status: "Planning" }
    ],
    guardrails: [
      "Regional launch decisions must include language readiness, payment coverage, support capacity, legal context, and model quality.",
      "No market should scale on growth signals alone when safety, support, or language quality is below launch threshold.",
      "Local partnerships need clear data boundaries, brand guidance, escalation paths, and owner accountability.",
      "Country dashboards should show aggregated operational readiness, not sensitive user content or private partner details."
    ]
  };
}

function adminQaData() {
  return state.adminQa || {
    summary: { openRegressions: 11, releaseBlockers: 4, deviceCoverage: "86%", accessibilityScore: "91%", qaPassRate: "88%" },
    suites: [
      { suite: "Web chat regression", surface: "Web", passRate: "94%", owner: "QA", status: "Passing" },
      { suite: "Mobile composer responsiveness", surface: "iOS/Android", passRate: "82%", owner: "Mobile QA", status: "Watch" },
      { suite: "Admin console navigation", surface: "Admin", passRate: "89%", owner: "Enterprise QA", status: "Review" },
      { suite: "Language Passport flow", surface: "Auth/Profile", passRate: "91%", owner: "Product QA", status: "Passing" }
    ],
    devices: [
      { device: "Android low-memory", viewport: "390px", coverage: "78%", issue: "Composer density", status: "Testing" },
      { device: "iPhone compact", viewport: "430px", coverage: "84%", issue: "Keyboard overlap", status: "Watch" },
      { device: "Tablet", viewport: "768px", coverage: "91%", issue: "Drawer transitions", status: "Passing" },
      { device: "Desktop wide", viewport: "1440px+", coverage: "96%", issue: "Admin tab overflow", status: "Passing" }
    ],
    blockers: [
      { blocker: "Voice button state inconsistent", surface: "Mobile chat", severity: "Medium", owner: "Mobile", status: "Open" },
      { blocker: "Admin tab scroll affordance", surface: "Admin", severity: "Medium", owner: "Web", status: "Fixing" },
      { blocker: "Language selector focus state", surface: "Web chat", severity: "Low", owner: "Design", status: "Review" },
      { blocker: "Plan card CTA contrast", surface: "Plans", severity: "Low", owner: "Frontend", status: "Ready" }
    ],
    accessibility: [
      { check: "Keyboard navigation", surface: "Chat/Admin", score: "88%", status: "Improving" },
      { check: "Color contrast", surface: "Neon Baobab UI", score: "93%", status: "Passing" },
      { check: "Screen reader labels", surface: "Buttons/forms", score: "87%", status: "Review" },
      { check: "Touch target sizing", surface: "Mobile", score: "92%", status: "Passing" }
    ],
    guardrails: [
      "Release candidates should not ship until critical chat, auth, plans, payments, admin, and mobile paths pass QA.",
      "Mobile QA must include compact screens, keyboard states, touch targets, network fallback, and low-memory devices.",
      "Admin QA should verify seed-admin access, tab visibility, sensitive-data boundaries, and API fallback labels.",
      "Accessibility checks should run before visual polish is considered complete."
    ]
  };
}

function adminRoadmapData() {
  return state.adminRoadmap || {
    summary: { activeInitiatives: 18, releaseCandidates: 5, blockedItems: 6, customerRequests: 42, roadmapConfidence: "81%" },
    initiatives: [
      { initiative: "Voice Circle v1", pillar: "Voice", phase: "Beta", owner: "Product", status: "QA watch" },
      { initiative: "Language Passport 2.0", pillar: "Identity", phase: "Build", owner: "Design", status: "On track" },
      { initiative: "Teams admin workspace", pillar: "Enterprise", phase: "Discovery", owner: "Enterprise", status: "Scoping" },
      { initiative: "Creator Studio packs", pillar: "Growth", phase: "Build", owner: "Creator", status: "On track" }
    ],
    releases: [
      { release: "Web chat polish", target: "Aug 2026", readiness: "88%", owner: "Web", status: "Candidate" },
      { release: "Mobile beta refresh", target: "Sep 2026", readiness: "72%", owner: "Mobile", status: "Blocked" },
      { release: "Admin console phase 2", target: "Aug 2026", readiness: "84%", owner: "Enterprise", status: "Review" },
      { release: "Regional launch toolkit", target: "Oct 2026", readiness: "64%", owner: "Regional Ops", status: "Planning" }
    ],
    dependencies: [
      { dependency: "Mobile voice QA", initiative: "Voice Circle v1", owner: "QA", risk: "Medium", status: "Testing" },
      { dependency: "Reviewer capacity", initiative: "Language Passport 2.0", owner: "Language QA", risk: "Medium", status: "Hiring" },
      { dependency: "SSO and roles", initiative: "Teams admin workspace", owner: "Access", risk: "High", status: "Design" },
      { dependency: "Payment coverage", initiative: "Regional launch toolkit", owner: "Finance", risk: "Medium", status: "Review" }
    ],
    requests: [
      { request: "WhatsApp export", source: "Creators", votes: 18, owner: "Growth", status: "Discovery" },
      { request: "Offline phrase mode", source: "Students", votes: 14, owner: "Mobile", status: "Research" },
      { request: "Team shared prompts", source: "Enterprise", votes: 11, owner: "Enterprise", status: "Scoping" },
      { request: "More Francophone support", source: "Regional", votes: 9, owner: "Language QA", status: "Review" }
    ],
    guardrails: [
      "Roadmap decisions should tie customer evidence, business value, quality readiness, and operational capacity together.",
      "No launch date should be marked committed while critical dependencies or QA blockers are unresolved.",
      "Enterprise roadmap items require access, privacy, support, and audit implications before build approval.",
      "Customer requests should be prioritized from aggregated signals, not private user content."
    ]
  };
}

function adminCommunityData() {
  return state.adminCommunity || {
    summary: { activeContributors: 1284, pendingContributions: 312, ambassadorMarkets: 11, eventsPlanned: 7, trustScore: "93%" },
    contributors: [
      { group: "Native language reviewers", region: "West Africa", members: 420, owner: "Language QA", status: "Active" },
      { group: "Creator ambassadors", region: "Pan-African", members: 260, owner: "Growth", status: "Scaling" },
      { group: "Educator circle", region: "East Africa", members: 184, owner: "Classroom", status: "Pilot" },
      { group: "Developer advocates", region: "Remote", members: 96, owner: "API", status: "Forming" }
    ],
    contributions: [
      { queue: "Dialect corrections", count: 184, language: "Yoruba/Pidgin", owner: "Language QA", status: "Review" },
      { queue: "Voice samples", count: 72, language: "Swahili/Zulu", owner: "Voice Ops", status: "Consent check" },
      { queue: "Market phrases", count: 38, language: "Twi/Akan", owner: "Regional Ops", status: "Curating" },
      { queue: "Classroom examples", count: 18, language: "Mixed", owner: "Education", status: "Ready" }
    ],
    programs: [
      { program: "Lumora Creator Circle", market: "Nigeria", participants: 120, motion: "Ambassadors", status: "Active" },
      { program: "Campus Language Labs", market: "Kenya", participants: 64, motion: "Education", status: "Pilot" },
      { program: "Reviewer Guild", market: "Ghana", participants: 48, motion: "Quality", status: "Recruiting" },
      { program: "API Builder Forum", market: "Remote", participants: 36, motion: "Developers", status: "Planning" }
    ],
    events: [
      { event: "African language AI roundtable", market: "Pan-African", date: "Aug 24", owner: "Community", status: "Planned" },
      { event: "Creator workflow clinic", market: "Nigeria", date: "Aug 28", owner: "Growth", status: "Ready" },
      { event: "Educator beta workshop", market: "Kenya", date: "Sep 04", owner: "Classroom", status: "Inviting" },
      { event: "Developer API preview", market: "Remote", date: "Sep 10", owner: "API", status: "Draft" }
    ],
    guardrails: [
      "Community contributions require consent, provenance, reviewer attribution policy, and privacy boundaries.",
      "Ambassador programs must not promise unsupported languages, launch dates, or model behavior.",
      "Voice and language samples need explicit consent and clear deletion/export pathways.",
      "Community dashboards should aggregate contribution health without exposing private contributor records."
    ]
  };
}

function adminComplianceEvidenceData() {
  return state.adminComplianceEvidence || {
    summary: { controlsTracked: 64, evidenceItems: 184, auditReadiness: "78%", openGaps: 9, attestationsDue: 6 },
    controls: [
      { control: "Seed-admin access review", framework: "SOC 2", owner: "Security", cadence: "Monthly", status: "Collected" },
      { control: "Data retention enforcement", framework: "Privacy", owner: "Data Gov", cadence: "Quarterly", status: "Evidence needed" },
      { control: "Model release gate approval", framework: "AI Governance", owner: "AI QA", cadence: "Per release", status: "Collected" },
      { control: "Vendor subprocessor review", framework: "Compliance", owner: "Legal", cadence: "Quarterly", status: "Review" }
    ],
    evidence: [
      { evidence: "Admin access export", source: "Access", freshness: "2 days", owner: "Security", status: "Ready" },
      { evidence: "Model eval release packet", source: "Evals", freshness: "1 day", owner: "AI QA", status: "Ready" },
      { evidence: "DPA and subprocessor register", source: "Legal/Vendors", freshness: "6 days", owner: "Legal", status: "Review" },
      { evidence: "Deletion request log", source: "Data Gov", freshness: "3 days", owner: "Privacy", status: "Ready" }
    ],
    audits: [
      { audit: "SOC 2 readiness", window: "Q4 2026", owner: "Security", readiness: "72%", status: "Preparing" },
      { audit: "Privacy impact review", window: "Sep 2026", owner: "Data Gov", readiness: "81%", status: "Review" },
      { audit: "AI governance pack", window: "Aug 2026", owner: "AI QA", readiness: "84%", status: "Collecting" },
      { audit: "Enterprise security packet", window: "Rolling", owner: "Sales/Security", readiness: "79%", status: "Updating" }
    ],
    gaps: [
      { gap: "Data residency evidence", area: "Privacy", severity: "High", owner: "Data Gov", status: "Open" },
      { gap: "Support access recertification", area: "Access", severity: "Medium", owner: "Security", status: "Due" },
      { gap: "Vendor DPIA attachment", area: "Vendors", severity: "Medium", owner: "Legal", status: "Review" },
      { gap: "Mobile QA accessibility proof", area: "QA", severity: "Low", owner: "Mobile QA", status: "Collecting" }
    ],
    guardrails: [
      "Evidence views should reference control status and source systems without exposing secrets, raw user content, or privileged advice.",
      "Audit evidence must include owner, freshness, source, and approval state before being marked ready.",
      "Compliance gaps should route to accountable owners with severity, due date, and evidence requirement.",
      "AI governance evidence must tie model releases to eval results, safety checks, language quality, and rollback readiness."
    ]
  };
}

function adminTrustCenterData() {
  return state.adminTrustCenter || {
    summary: { publicTrustScore: "91%", securityReviews: 26, certificationReadiness: "74%", subprocessorChanges: 3, statusIncidents: 0 },
    assurances: [
      { assurance: "Encryption in transit and at rest", audience: "Enterprise buyers", owner: "Security", freshness: "7 days", status: "Published" },
      { assurance: "Data deletion and export pathways", audience: "Privacy teams", owner: "Data Gov", freshness: "3 days", status: "Published" },
      { assurance: "AI model governance overview", audience: "Procurement", owner: "AI QA", freshness: "1 day", status: "Review" },
      { assurance: "Regional data handling posture", audience: "Public sector", owner: "Legal/Data Gov", freshness: "6 days", status: "Draft" }
    ],
    reviews: [
      { customer: "EduBridge Africa", request: "Security questionnaire", due: "Aug 14", owner: "Security", status: "Answering" },
      { customer: "MarketUnion NG", request: "DPA and subprocessor pack", due: "Aug 16", owner: "Legal", status: "Ready" },
      { customer: "Creator Desk", request: "AI governance statement", due: "Aug 18", owner: "AI QA", status: "Review" },
      { customer: "Public Language Lab", request: "Data residency notes", due: "Aug 21", owner: "Data Gov", status: "Collecting" }
    ],
    certifications: [
      { certification: "SOC 2 readiness", stage: "Gap remediation", target: "Q4 2026", owner: "Security", status: "Preparing" },
      { certification: "Privacy impact pack", stage: "Evidence review", target: "Sep 2026", owner: "Privacy", status: "Review" },
      { certification: "AI governance register", stage: "Control mapping", target: "Aug 2026", owner: "AI QA", status: "Collecting" },
      { certification: "PCI boundary note", stage: "Payment scope review", target: "Sep 2026", owner: "Finance/Security", status: "Scoping" }
    ],
    subprocessors: [
      { provider: "Hugging Face", category: "Model hosting/source registry", region: "Global", risk: "Medium", status: "Listed" },
      { provider: "Cloud inference provider", category: "GPU inference", region: "Regional", risk: "Medium", status: "Review" },
      { provider: "Payment processor", category: "Billing", region: "Global", risk: "Low", status: "Listed" },
      { provider: "Messaging provider", category: "Email/push", region: "Global", risk: "Low", status: "Listed" }
    ],
    guardrails: [
      "Trust Center content must be customer-safe, reviewed, and free of secrets, raw audit artifacts, private incidents, or user content.",
      "Security questionnaire answers should reference approved assurances and route unknowns to accountable owners.",
      "Subprocessor changes require legal/privacy review before public disclosure or customer notice.",
      "Certification readiness should show stage and target without implying completed certifications before they are earned."
    ]
  };
}

function adminBoardGovernanceData() {
  return state.adminBoardGovernance || {
    summary: { nextBoardPack: "Aug 30", openBoardItems: 8, strategicDecisions: 5, governanceHealth: "86%", investorUpdates: 3 },
    packets: [
      { packet: "Monthly leadership pack", window: "Aug 2026", owner: "CEO Office", readiness: "78%", status: "Collecting" },
      { packet: "AI safety and quality review", window: "Aug 2026", owner: "AI QA", readiness: "84%", status: "Review" },
      { packet: "Growth and revenue update", window: "Aug 2026", owner: "Revenue Ops", readiness: "91%", status: "Ready" },
      { packet: "Compliance and risk appendix", window: "Q3 2026", owner: "Legal/Security", readiness: "72%", status: "Preparing" }
    ],
    decisions: [
      { decision: "Mobile beta launch sequence", area: "Product", owner: "Product Lead", due: "Aug 18", status: "Needs board note" },
      { decision: "Enterprise pricing guardrails", area: "Revenue", owner: "CFO", due: "Aug 20", status: "Draft" },
      { decision: "Data residency expansion", area: "Infrastructure", owner: "CTO", due: "Aug 22", status: "Analysis" },
      { decision: "Reviewer network investment", area: "Language Quality", owner: "COO", due: "Aug 25", status: "Ready" }
    ],
    metrics: [
      { metric: "MRR", value: "$184K", trend: "+9.1%", owner: "Finance", status: "Board ready" },
      { metric: "D30 retention", value: "68%", trend: "+4.2%", owner: "Growth", status: "Board ready" },
      { metric: "Model success rate", value: "99.1%", trend: "+0.3%", owner: "AI Ops", status: "Board ready" },
      { metric: "Open high risks", value: "4", trend: "-1", owner: "Risk", status: "Review" }
    ],
    escalations: [
      { escalation: "Data residency evidence gap", source: "Compliance", severity: "High", owner: "Data Gov", status: "Open" },
      { escalation: "Mobile release blocker trend", source: "QA", severity: "Medium", owner: "Mobile QA", status: "Watching" },
      { escalation: "Enterprise procurement delays", source: "Sales", severity: "Medium", owner: "Revenue Ops", status: "Mitigating" },
      { escalation: "Reviewer capacity constraint", source: "Language QA", severity: "Medium", owner: "People Ops", status: "Hiring" }
    ],
    guardrails: [
      "Board materials should aggregate operating truth without exposing secrets, private user content, or unapproved customer details.",
      "Strategic decisions need owner, due date, risk linkage, and current evidence before being marked board-ready.",
      "Investor and board metrics must trace back to reporting datasets and finance-approved definitions.",
      "Escalations should reference accountable owners and mitigation posture, not private incident artifacts."
    ]
  };
}

function adminInvestorRelationsData() {
  return state.adminInvestorRelations || {
    summary: { activeInvestors: 18, dataRoomReadiness: "82%", diligenceRequests: 14, nextUpdate: "Aug 15", fundingPipeline: "$3.8M" },
    updates: [
      { update: "Monthly investor memo", audience: "Current investors", owner: "CEO Office", due: "Aug 15", status: "Draft" },
      { update: "Revenue and retention snapshot", audience: "Finance committee", owner: "CFO", due: "Aug 14", status: "Ready" },
      { update: "AI quality progress note", audience: "Strategic advisors", owner: "AI QA", due: "Aug 16", status: "Review" },
      { update: "Mobile launch preview", audience: "Prospective investors", owner: "Product", due: "Aug 19", status: "Building" }
    ],
    pipeline: [
      { investor: "Pan-African Growth Fund", stage: "Partner meeting", interest: "$1.2M", owner: "CEO", status: "Warm" },
      { investor: "Language Tech Angels", stage: "Diligence", interest: "$650K", owner: "CFO", status: "Active" },
      { investor: "Frontier SaaS Capital", stage: "Intro", interest: "$1.5M", owner: "CEO", status: "New" },
      { investor: "Education Innovation Fund", stage: "Follow-up", interest: "$450K", owner: "Partnerships", status: "Review" }
    ],
    dataRoom: [
      { folder: "Financial model", freshness: "2 days", owner: "Finance", completeness: "90%", status: "Ready" },
      { folder: "Product roadmap", freshness: "1 day", owner: "Product", completeness: "86%", status: "Ready" },
      { folder: "Security and compliance", freshness: "4 days", owner: "Security", completeness: "74%", status: "Collecting" },
      { folder: "Market and language research", freshness: "6 days", owner: "Strategy", completeness: "81%", status: "Review" }
    ],
    diligence: [
      { request: "Gross margin by model route", source: "Investor diligence", owner: "Finance/AI Ops", due: "Aug 13", status: "Answering" },
      { request: "Reviewer network scalability", source: "Strategic advisor", owner: "Language QA", due: "Aug 17", status: "Collecting" },
      { request: "Enterprise pipeline conversion", source: "Growth Fund", owner: "Sales", due: "Aug 18", status: "Review" },
      { request: "Data residency roadmap", source: "Public-sector investor", owner: "Infrastructure", due: "Aug 20", status: "Draft" }
    ],
    guardrails: [
      "Investor materials must use approved metrics, finance-reviewed definitions, and current board-ready source data.",
      "Diligence responses should not expose raw user content, private customer data, secrets, or unapproved legal positions.",
      "Fundraising pipeline should separate active investor interest from committed capital until signed documentation exists.",
      "Forward-looking statements should include assumptions and owner review before distribution."
    ]
  };
}

function adminProcurementRevenueData() {
  return state.adminProcurementRevenue || {
    summary: { activeProcurements: 22, contractValue: "$684K", blockedRevenue: "$96K", purchaseOrders: 9, avgCycle: "18 days" },
    procurements: [
      { account: "EduBridge Africa", motion: "Teams renewal", value: "$48K", owner: "Revenue Ops", status: "PO pending" },
      { account: "MarketUnion NG", motion: "Pro expansion", value: "$32K", owner: "Sales", status: "Security review" },
      { account: "Public Language Lab", motion: "Enterprise pilot", value: "$120K", owner: "Partnerships", status: "Legal review" },
      { account: "Creator Desk", motion: "Creator seats", value: "$18K", owner: "Revenue Ops", status: "Ready to invoice" }
    ],
    blockers: [
      { blocker: "Security questionnaire", account: "MarketUnion NG", severity: "High", owner: "Security", status: "Answering" },
      { blocker: "DPA clause review", account: "Public Language Lab", severity: "High", owner: "Legal", status: "Review" },
      { blocker: "Tax certificate request", account: "EduBridge Africa", severity: "Medium", owner: "Finance", status: "Collecting" },
      { blocker: "Seat count confirmation", account: "Creator Desk", severity: "Low", owner: "Success", status: "Waiting" }
    ],
    purchaseOrders: [
      { po: "PO-LUM-2041", account: "EduBridge Africa", amount: "$48K", due: "Aug 16", status: "Pending" },
      { po: "PO-LUM-2042", account: "Creator Desk", amount: "$18K", due: "Aug 13", status: "Ready" },
      { po: "PO-LUM-2043", account: "MarketUnion NG", amount: "$32K", due: "Aug 20", status: "Blocked" },
      { po: "PO-LUM-2044", account: "Campus Language Labs", amount: "$24K", due: "Aug 22", status: "Draft" }
    ],
    renewals: [
      { renewal: "EduBridge Africa", date: "Sep 01", amount: "$48K", health: "Green", status: "PO pending" },
      { renewal: "Creator Desk", date: "Sep 08", amount: "$18K", health: "Green", status: "Ready" },
      { renewal: "MarketUnion NG", date: "Sep 15", amount: "$32K", health: "Amber", status: "Security review" },
      { renewal: "Regional NGO cohort", date: "Oct 01", amount: "$76K", health: "Amber", status: "Scoping" }
    ],
    guardrails: [
      "Procurement views should show deal stage, owner, value, and blocker status without exposing sensitive contract language.",
      "Blocked revenue must trace to accountable teams and current next actions before leadership escalation.",
      "Purchase orders should not be treated as closed revenue until paperwork and billing acceptance are complete.",
      "Customer procurement data should remain aggregated and role-gated outside approved revenue operations workflows."
    ]
  };
}

function adminStrategicPartnershipsData() {
  return state.adminStrategicPartnerships || {
    summary: { activePartners: 16, pipelineValue: "$1.4M", signedMoUs: 5, channelReadiness: "76%", partnerRisks: 4 },
    partners: [
      { partner: "Campus Language Labs", type: "Education", market: "Kenya", owner: "Partnerships", status: "Pilot signed" },
      { partner: "Pan-African Creator Network", type: "Creator channel", market: "Pan-African", owner: "Growth", status: "Negotiating" },
      { partner: "Regional Telecom Bundle", type: "Distribution", market: "West Africa", owner: "Revenue Ops", status: "Scoping" },
      { partner: "Public Sector Language Hub", type: "Government/NGO", market: "East Africa", owner: "Partnerships", status: "Diligence" }
    ],
    pipeline: [
      { opportunity: "Student language access bundle", partner: "Campus Language Labs", value: "$220K", stage: "Pilot", status: "Active" },
      { opportunity: "Creator workflow distribution", partner: "Creator Network", value: "$180K", stage: "Terms", status: "Review" },
      { opportunity: "Telecom prepaid AI bundle", partner: "Telecom Bundle", value: "$750K", stage: "Discovery", status: "Scoping" },
      { opportunity: "Public language support desk", partner: "Language Hub", value: "$260K", stage: "Diligence", status: "Legal review" }
    ],
    integrations: [
      { integration: "Campus SSO pilot", partner: "Campus Language Labs", owner: "Platform", readiness: "72%", status: "Testing" },
      { integration: "Creator referral tracking", partner: "Creator Network", owner: "Growth", readiness: "68%", status: "Building" },
      { integration: "Carrier billing feasibility", partner: "Telecom Bundle", owner: "Payments", readiness: "44%", status: "Research" },
      { integration: "Public sector reporting pack", partner: "Language Hub", owner: "Reports", readiness: "58%", status: "Draft" }
    ],
    risks: [
      { risk: "Unsupported language commitment", partner: "Public Sector Language Hub", severity: "High", owner: "Language QA", status: "Review" },
      { risk: "Revenue share complexity", partner: "Creator Network", severity: "Medium", owner: "Finance", status: "Modeling" },
      { risk: "Data sharing boundary", partner: "Telecom Bundle", severity: "High", owner: "Legal/Data Gov", status: "Open" },
      { risk: "Support capacity", partner: "Campus Language Labs", severity: "Medium", owner: "Support", status: "Planning" }
    ],
    guardrails: [
      "Partnership commitments must not promise unsupported languages, launch dates, model behavior, or data sharing terms.",
      "Channel revenue should separate signed partner commitments from exploratory pipeline.",
      "Partner integrations require privacy, security, support, and operational owners before launch approval.",
      "Co-marketing claims should use approved product language and current capability status."
    ]
  };
}

function adminLaunchReadinessData() {
  return state.adminLaunchReadiness || {
    summary: { activeLaunches: 6, readyLaunches: 3, blockedLaunches: 2, goNoGoScore: "79%", postLaunchWatch: 4 },
    launches: [
      { launch: "Mobile beta Nigeria", surface: "Mobile", owner: "Mobile/Product", target: "Sep 05", status: "Go watch" },
      { launch: "Creator Studio packs", surface: "Web", owner: "Growth", target: "Aug 22", status: "Ready" },
      { launch: "Teams admin workspace", surface: "Enterprise", owner: "Enterprise", target: "Sep 12", status: "Blocked" },
      { launch: "Swahili voice pilot", surface: "Voice", owner: "Voice Ops", target: "Sep 18", status: "Testing" }
    ],
    gates: [
      { gate: "Security and privacy approval", launch: "Teams admin workspace", owner: "Security/Data Gov", readiness: "62%", status: "Blocked" },
      { gate: "Mobile QA signoff", launch: "Mobile beta Nigeria", owner: "QA", readiness: "84%", status: "Watch" },
      { gate: "Support macros and escalation path", launch: "Creator Studio packs", owner: "Support", readiness: "91%", status: "Ready" },
      { gate: "Language quality review", launch: "Swahili voice pilot", owner: "Language QA", readiness: "76%", status: "Testing" }
    ],
    readiness: [
      { team: "Product", area: "Release notes and scope", confidence: "88%", owner: "Product", status: "Ready" },
      { team: "Engineering", area: "Rollback and observability", confidence: "82%", owner: "Platform", status: "Watch" },
      { team: "Support", area: "Macros and training", confidence: "91%", owner: "Support", status: "Ready" },
      { team: "Growth", area: "Launch campaigns", confidence: "73%", owner: "Growth", status: "Preparing" }
    ],
    monitors: [
      { monitor: "Activation drop", launch: "Mobile beta Nigeria", threshold: "-8%", owner: "Analytics", status: "Armed" },
      { monitor: "Voice error rate", launch: "Swahili voice pilot", threshold: ">2.5%", owner: "Voice Ops", status: "Armed" },
      { monitor: "Support ticket spike", launch: "Creator Studio packs", threshold: "+20%", owner: "Support", status: "Armed" },
      { monitor: "Admin workspace permission errors", launch: "Teams admin workspace", threshold: ">1%", owner: "Enterprise", status: "Draft" }
    ],
    guardrails: [
      "Launches should not move to go without security, privacy, QA, support, observability, and rollback owners.",
      "Go/no-go scores must reflect current blockers and accountable owners, not aspirational launch dates.",
      "Post-launch monitors should be defined before launch and reviewed during the watch window.",
      "Customer-facing launch claims should match shipped functionality and supported language/model readiness."
    ]
  };
}

function adminExecutiveOkrsData() {
  return state.adminExecutiveOkrs || {
    summary: { activeObjectives: 7, keyResults: 24, onTrack: 16, atRisk: 5, confidence: "78%" },
    objectives: [
      { objective: "Ship premium African AI chat experience", pillar: "Product", owner: "Product", confidence: "82%", status: "On track" },
      { objective: "Prove multilingual quality moat", pillar: "AI Quality", owner: "AI QA", confidence: "74%", status: "Watch" },
      { objective: "Build enterprise operating muscle", pillar: "Enterprise", owner: "COO", confidence: "79%", status: "On track" },
      { objective: "Prepare mobile launch foundation", pillar: "Mobile", owner: "Mobile Lead", confidence: "68%", status: "At risk" }
    ],
    keyResults: [
      { result: "Web user flow and admin console complete", objective: "Product experience", target: "100%", current: "88%", status: "On track" },
      { result: "Priority language benchmark readiness", objective: "Quality moat", target: "12 markets", current: "8", status: "Watch" },
      { result: "Enterprise dashboard modules operational", objective: "Enterprise muscle", target: "40 modules", current: "34", status: "On track" },
      { result: "Mobile beta QA confidence", objective: "Mobile launch", target: "90%", current: "76%", status: "At risk" }
    ],
    blockers: [
      { blocker: "Reviewer capacity", objective: "Quality moat", severity: "Medium", owner: "People/Language QA", status: "Hiring" },
      { blocker: "Mobile release defects", objective: "Mobile launch", severity: "High", owner: "Mobile QA", status: "Testing" },
      { blocker: "Enterprise privacy evidence", objective: "Enterprise muscle", severity: "Medium", owner: "Data Gov", status: "Collecting" },
      { blocker: "Launch campaign readiness", objective: "Product experience", severity: "Low", owner: "Growth", status: "Preparing" }
    ],
    cadence: [
      { meeting: "Monday exec review", focus: "KR confidence and blockers", owner: "CEO Office", next: "Aug 17", status: "Scheduled" },
      { meeting: "Product/AI quality sync", focus: "Language readiness", owner: "AI QA", next: "Aug 12", status: "Scheduled" },
      { meeting: "Enterprise ops review", focus: "Admin modules and compliance", owner: "COO", next: "Aug 14", status: "Ready" },
      { meeting: "Mobile launch room", focus: "QA, support, release gates", owner: "Mobile Lead", next: "Aug 13", status: "Active" }
    ],
    guardrails: [
      "OKR status should reflect evidence from source modules, not optimistic narrative.",
      "At-risk key results require blockers, owners, and next decision dates before executive review.",
      "Company objectives should connect product, language quality, enterprise readiness, and mobile launch work.",
      "Leadership views should aggregate progress without exposing private user data, secrets, or raw incident artifacts."
    ]
  };
}

function adminOperatingRhythmData() {
  return state.adminOperatingRhythm || {
    summary: { activeRituals: 9, openActions: 31, overdueActions: 6, decisionVelocity: "82%", weeklyHealth: "Green" },
    rituals: [
      { ritual: "Monday exec review", cadence: "Weekly", owner: "CEO Office", focus: "OKRs, blockers, decisions", status: "Scheduled" },
      { ritual: "Product quality room", cadence: "Twice weekly", owner: "Product/AI QA", focus: "Language quality, model evals", status: "Active" },
      { ritual: "Revenue operating review", cadence: "Weekly", owner: "Revenue Ops", focus: "Pipeline, procurement, renewals", status: "Scheduled" },
      { ritual: "Launch command room", cadence: "Weekly", owner: "Platform", focus: "Launch gates, incidents, QA", status: "Active" }
    ],
    decisions: [
      { decision: "Prioritize mobile beta fixes before new chat polish", area: "Mobile", owner: "Product", date: "Aug 10", status: "Accepted" },
      { decision: "Hold Teams admin workspace until privacy evidence clears", area: "Enterprise", owner: "COO", date: "Aug 09", status: "Accepted" },
      { decision: "Move creator packs into launch watch", area: "Growth", owner: "Growth", date: "Aug 08", status: "Accepted" },
      { decision: "Expand reviewer hiring for Swahili and Hausa", area: "Language QA", owner: "People", date: "Aug 07", status: "Actioned" }
    ],
    actions: [
      { action: "Close mobile release defects", owner: "Mobile QA", due: "Aug 13", priority: "High", status: "In progress" },
      { action: "Attach data residency evidence", owner: "Data Gov", due: "Aug 14", priority: "High", status: "Open" },
      { action: "Publish creator launch support macros", owner: "Support", due: "Aug 12", priority: "Medium", status: "Ready" },
      { action: "Update procurement blocker board", owner: "Revenue Ops", due: "Aug 11", priority: "Medium", status: "Due" }
    ],
    health: [
      { signal: "Decision latency", value: "1.8 days", trend: "-0.4d", owner: "CEO Office", status: "Improving" },
      { signal: "Action completion", value: "81%", trend: "+6%", owner: "Ops", status: "Healthy" },
      { signal: "Overdue high-priority actions", value: "3", trend: "+1", owner: "COO", status: "Watch" },
      { signal: "Cross-functional attendance", value: "94%", trend: "stable", owner: "People", status: "Healthy" }
    ],
    guardrails: [
      "Operating rhythm should turn dashboard signals into decisions, owners, and dated actions.",
      "Executive decisions should include source context and avoid exposing private customer or user data.",
      "Overdue high-priority actions need escalation owner and next checkpoint.",
      "Meeting cadence should be reviewed monthly so rituals do not become stale reporting theater."
    ]
  };
}

function adminDataRoomData() {
  return state.adminDataRoom || {
    summary: { activeRooms: 6, evidencePacks: 18, pendingAccess: 7, exportReadiness: "84%", restrictedItems: 42 },
    rooms: [
      { room: "Investor diligence", audience: "Investors", owner: "Finance/CEO Office", freshness: "92%", status: "Open" },
      { room: "Enterprise security review", audience: "Customers", owner: "Security", freshness: "87%", status: "Open" },
      { room: "Board packet archive", audience: "Board", owner: "CEO Office", freshness: "96%", status: "Restricted" },
      { room: "Mobile launch evidence", audience: "Dev/Product", owner: "Release Ops", freshness: "78%", status: "Updating" }
    ],
    evidencePacks: [
      { pack: "SOC 2 readiness pack", category: "Compliance", owner: "Trust", lastUpdated: "Aug 09", status: "Review" },
      { pack: "Model source registry export", category: "AI Ops", owner: "Model Ops", lastUpdated: "Aug 10", status: "Ready" },
      { pack: "Payment controls and invoices", category: "Finance", owner: "Finance", lastUpdated: "Aug 08", status: "Restricted" },
      { pack: "Mobile beta QA packet", category: "Release", owner: "QA", lastUpdated: "Aug 10", status: "Updating" }
    ],
    accessRequests: [
      { request: "Series A data room invite", requester: "Investor relations", scope: "Investor diligence", age: "3h", status: "Pending approval" },
      { request: "Security questionnaire packet", requester: "Enterprise sales", scope: "Trust center", age: "5h", status: "Approved" },
      { request: "Incident export for leadership", requester: "COO", scope: "Launch evidence", age: "1d", status: "Needs redaction" },
      { request: "Reviewer capacity evidence", requester: "People Ops", scope: "Language QA", age: "2d", status: "Pending owner" }
    ],
    exports: [
      { export: "Board monthly pack", destination: "Board portal", cadence: "Monthly", lastRun: "Aug 01", status: "Scheduled" },
      { export: "Investor KPI snapshot", destination: "Data room", cadence: "Weekly", lastRun: "Aug 09", status: "Ready" },
      { export: "Enterprise trust packet", destination: "Secure link", cadence: "On request", lastRun: "Aug 08", status: "Approved" },
      { export: "Launch readiness bundle", destination: "Internal vault", cadence: "Release gate", lastRun: "Aug 10", status: "Updating" }
    ],
    guardrails: [
      "Data room access should be time-bound, scoped, watermarked, and audit logged.",
      "Sensitive exports must pass redaction review before they leave Lumora-controlled systems.",
      "Investor, board, customer, and internal rooms should never share raw user data or secrets.",
      "Evidence packs need freshness owners so leadership decisions are based on current artifacts."
    ]
  };
}

function adminAiGovernanceData() {
  return state.adminAiGovernance || {
    summary: { governedModels: 14, pendingApprovals: 5, policyExceptions: 3, deploymentGates: "91%", highRiskRoutes: 4 },
    modelApprovals: [
      { model: "AfriNLLB translation route", useCase: "Translation", owner: "Model Ops", risk: "Medium", status: "Approved" },
      { model: "Yoruba tone adapter", useCase: "Tone alignment", owner: "Language QA", risk: "Medium", status: "Review" },
      { model: "Swahili voice transcription", useCase: "Speech", owner: "Voice Ops", risk: "High", status: "Gate pending" },
      { model: "Pidgin market assistant", useCase: "Business replies", owner: "Product AI", risk: "Medium", status: "Approved" }
    ],
    deploymentGates: [
      { gate: "Language benchmark pass", route: "Yoruba + English chat", threshold: "88%", current: "91%", status: "Pass" },
      { gate: "Safety regression pass", route: "Creator mode", threshold: "97%", current: "96.4%", status: "Watch" },
      { gate: "Latency under target", route: "Mobile speech", threshold: "<900ms", current: "1.1s", status: "Blocked" },
      { gate: "Human reviewer sign-off", route: "Swahili voice", threshold: "2 reviewers", current: "1", status: "Pending" }
    ],
    exceptions: [
      { exception: "Temporary fallback for Hausa education prompts", owner: "AI QA", expiry: "Aug 18", risk: "Low", status: "Active" },
      { exception: "Manual review for enterprise legal responses", owner: "Legal", expiry: "Aug 20", risk: "Medium", status: "Active" },
      { exception: "Disable auto-translation for sensitive support tickets", owner: "Support", expiry: "Aug 15", risk: "Medium", status: "Review" },
      { exception: "Restrict voice beta in low-confidence markets", owner: "Voice Ops", expiry: "Aug 21", risk: "High", status: "Active" }
    ],
    reviews: [
      { review: "Bias and dialect parity", model: "Yoruba tone adapter", reviewer: "Language QA", due: "Aug 13", status: "In progress" },
      { review: "Privacy prompt leakage", model: "Memory bridge", reviewer: "Data Gov", due: "Aug 14", status: "Scheduled" },
      { review: "Enterprise claims audit", model: "Market assistant", reviewer: "Legal", due: "Aug 16", status: "Queued" },
      { review: "Speech consent flow", model: "Swahili voice", reviewer: "Trust", due: "Aug 12", status: "Urgent" }
    ],
    guardrails: [
      "Every model route needs an owner, use case, risk tier, evaluation evidence, and rollback path.",
      "High-risk language, voice, legal, medical, finance, or enterprise routes require human sign-off before rollout.",
      "Policy exceptions must expire automatically and include owner, risk, affected markets, and mitigation notes.",
      "AI governance should link model approvals to evidence without exposing raw user prompts or private datasets."
    ]
  };
}

function adminModelRiskData() {
  return state.adminModelRisk || {
    summary: { trackedRoutes: 22, highRiskRoutes: 6, blockedReleases: 3, fallbackIncidents: 14, humanReviewCoverage: "87%" },
    riskTiers: [
      { route: "Voice transcription", model: "Meta MMS / Simba-H", tier: "High", reason: "Voice + consent", status: "Gate pending" },
      { route: "Market replies", model: "AfroXLMR-Social", tier: "Medium", reason: "Commercial claims", status: "Controlled" },
      { route: "Education assistant", model: "InkubaLM route", tier: "Medium", reason: "Youth/classroom use", status: "Review" },
      { route: "General chat", model: "AfroXLMR + LLM fallback", tier: "Low", reason: "Standard prompts", status: "Approved" }
    ],
    releaseGates: [
      { gate: "Dialect parity", route: "Yoruba/Pidgin", threshold: "90%", current: "88.7%", owner: "Language QA", status: "Blocked" },
      { gate: "Safety refusal quality", route: "Creator mode", threshold: "97%", current: "97.4%", owner: "Trust", status: "Pass" },
      { gate: "Voice consent coverage", route: "Voice Circle", threshold: "95%", current: "91%", owner: "Privacy", status: "Watch" },
      { gate: "Latency fallback", route: "Mobile chat", threshold: "<8% fallback", current: "6.2%", owner: "AI Ops", status: "Pass" }
    ],
    driftSignals: [
      { signal: "Tone drift in Pidgin market replies", route: "Market Mode", severity: "Medium", owner: "Language QA", status: "Sampling" },
      { signal: "Swahili voice confidence drop", route: "Voice Circle", severity: "High", owner: "Voice Ops", status: "Investigating" },
      { signal: "Hausa education over-formality", route: "Classroom", severity: "Low", owner: "Education", status: "Queued" },
      { signal: "Arabic/French code-switch misses", route: "General chat", severity: "Medium", owner: "AI QA", status: "Review" }
    ],
    fallbackRisk: [
      { fallback: "AfriNLLB to Meta NLLB", trigger: "Translation confidence", exposure: "4.8%", mitigation: "Reviewer sampling", status: "Healthy" },
      { fallback: "Speech to text retry", trigger: "Voice latency", exposure: "9.1%", mitigation: "Throttle beta", status: "Watch" },
      { fallback: "General LLM fallback", trigger: "Unsupported route", exposure: "2.4%", mitigation: "Uncertainty label", status: "Healthy" },
      { fallback: "Manual support escalation", trigger: "Enterprise legal intent", exposure: "31 cases", mitigation: "Legal macro", status: "Active" }
    ],
    humanReview: [
      { queue: "High-risk voice samples", reviewers: 8, coverage: "82%", sla: "24h", status: "Needs capacity" },
      { queue: "Dialect parity evals", reviewers: 22, coverage: "91%", sla: "48h", status: "Healthy" },
      { queue: "Commercial claim review", reviewers: 6, coverage: "86%", sla: "72h", status: "Watch" },
      { queue: "Safety regression samples", reviewers: 12, coverage: "93%", sla: "24h", status: "Healthy" }
    ],
    guardrails: [
      "Model risk tiers must be based on data sensitivity, user impact, task risk, market, and fallback behavior.",
      "Blocked release gates should stop production rollout until owners record mitigation and approval.",
      "Fallback routes must disclose uncertainty when confidence is low or language coverage is incomplete.",
      "Human review queues should use sampled, minimized data and preserve reviewer accountability without exposing unnecessary private content."
    ]
  };
}

function adminWebOpsData() {
  return state.adminWebOps || {
    summary: { activeDeployments: 5, webUptime: "99.97%", p95Load: "1.8s", conversionHealth: "92%", accessibilityScore: "94%" },
    deployments: [
      { release: "Web chat shell v1.4", environment: "Production", rollout: "100%", owner: "Web Lead", status: "Healthy" },
      { release: "Admin console phase 3", environment: "Staging", rollout: "0%", owner: "Enterprise", status: "Review" },
      { release: "Fresh chat onboarding", environment: "Production", rollout: "65%", owner: "Growth", status: "Watching" },
      { release: "Language Passport profile sync", environment: "Preview", rollout: "15%", owner: "Product", status: "Testing" }
    ],
    performance: [
      { surface: "Fresh chat", p95: "1.4s", coreVitals: "Pass", owner: "Web Performance", status: "Healthy" },
      { surface: "Active chat", p95: "1.8s", coreVitals: "Pass", owner: "Chat UX", status: "Healthy" },
      { surface: "Premium plans", p95: "2.1s", coreVitals: "Watch", owner: "Growth", status: "Optimizing" },
      { surface: "Admin console", p95: "2.6s", coreVitals: "Watch", owner: "Enterprise", status: "Splitting bundles" }
    ],
    browserCoverage: [
      { browser: "Chrome / Edge", coverage: "96%", market: "Pan-African", owner: "QA", status: "Passing" },
      { browser: "Safari", coverage: "89%", market: "iOS users", owner: "QA", status: "Watch" },
      { browser: "Firefox", coverage: "84%", market: "Developers", owner: "QA", status: "Passing" },
      { browser: "Low-end Android WebView", coverage: "76%", market: "West Africa", owner: "Mobile Web", status: "Needs run" }
    ],
    accessibility: [
      { area: "Keyboard navigation", coverage: "93%", impact: "Admin + chat", owner: "Design Systems", status: "Healthy" },
      { area: "Color contrast", coverage: "96%", impact: "Neon Baobab UI", owner: "Design", status: "Healthy" },
      { area: "Screen reader labels", coverage: "88%", impact: "Composer/settings", owner: "Web", status: "Improving" },
      { area: "Reduced motion", coverage: "91%", impact: "Transitions", owner: "Frontend", status: "Healthy" }
    ],
    featureFlags: [
      { flag: "fresh_chat_centered", surface: "Onboarding", rollout: "100%", owner: "Growth", status: "On" },
      { flag: "neon_gold_cta", surface: "Buttons", rollout: "100%", owner: "Design", status: "On" },
      { flag: "admin_lazy_sections", surface: "Admin", rollout: "60%", owner: "Enterprise", status: "Watch" },
      { flag: "offline_web_cache", surface: "Web app", rollout: "10%", owner: "Platform", status: "Beta" }
    ],
    guardrails: [
      "Web releases should publish through preview, staging, canary, and monitored production rollout before broad exposure.",
      "Core chat, auth, plans, profile, and admin surfaces need viewport checks across mobile, tablet, laptop, desktop, and wide desktop.",
      "Performance budgets should protect low-bandwidth and low-memory African web users before adding heavy visual effects.",
      "Feature flags must include owner, rollback criteria, market scope, and release notes before production rollout."
    ]
  };
}

function adminTelemetryOpsData() {
  return state.adminTelemetryOps || {
    summary: { eventsToday: "42.6M", schemaHealth: "97%", consentCoverage: "94%", droppedEvents: "0.8%", anomalySignals: 11 },
    eventPipelines: [
      { pipeline: "Web product events", surface: "Web", volume: "18.4M", freshness: "45s", status: "Healthy" },
      { pipeline: "Mobile product events", surface: "Android/iOS", volume: "12.8M", freshness: "1m", status: "Watch" },
      { pipeline: "Admin audit telemetry", surface: "Admin", volume: "184K", freshness: "Realtime", status: "Protected" },
      { pipeline: "API usage telemetry", surface: "API", volume: "11.2M", freshness: "30s", status: "Healthy" }
    ],
    schemaContracts: [
      { event: "chat.message.sent", owner: "Chat Platform", version: "v3", coverage: "99%", status: "Stable" },
      { event: "language.passport.updated", owner: "Product", version: "v2", coverage: "94%", status: "Watch" },
      { event: "billing.plan.upgraded", owner: "Revenue Ops", version: "v4", coverage: "98%", status: "Stable" },
      { event: "mobile.voice.capture", owner: "Voice Ops", version: "v1", coverage: "86%", status: "Review" }
    ],
    privacyFilters: [
      { filter: "Prompt content redaction", surface: "Chat/API", coverage: "99%", owner: "Privacy", status: "Healthy" },
      { filter: "Voice sample minimization", surface: "Mobile", coverage: "91%", owner: "Voice Ops", status: "Improving" },
      { filter: "Admin actor hashing", surface: "Admin", coverage: "100%", owner: "Security", status: "Protected" },
      { filter: "Payment PII exclusion", surface: "Billing", coverage: "100%", owner: "Finance/Security", status: "Healthy" }
    ],
    anomalyDetection: [
      { signal: "Signup attribution gap", surface: "Web", severity: "Medium", owner: "Growth", status: "Investigating" },
      { signal: "Android voice event drop", surface: "Mobile", severity: "High", owner: "Mobile", status: "Mitigating" },
      { signal: "Admin refresh spike", surface: "Admin", severity: "Low", owner: "Enterprise", status: "Watching" },
      { signal: "API quota meter lag", surface: "API", severity: "Medium", owner: "API Platform", status: "Fix queued" }
    ],
    dashboards: [
      { dashboard: "Executive command metrics", source: "Warehouse", freshness: "5m", owner: "Leadership Ops", status: "Certified" },
      { dashboard: "Language adoption", source: "Product events", freshness: "10m", owner: "Analytics", status: "Certified" },
      { dashboard: "Mobile launch health", source: "Mobile telemetry", freshness: "2m", owner: "Mobile Ops", status: "Watch" },
      { dashboard: "Billing conversion", source: "Revenue events", freshness: "5m", owner: "Revenue Ops", status: "Certified" }
    ],
    guardrails: [
      "Telemetry should measure product health without storing raw prompts, sensitive voice content, payment secrets, or private admin actions.",
      "Every event schema needs owner, version, consent posture, retention class, and downstream dashboard mapping.",
      "Mobile and low-connectivity markets need explicit dropped-event tracking before decisions rely on telemetry.",
      "Leadership dashboards should show certified metrics only when event freshness, schema coverage, and privacy filters are healthy."
    ]
  };
}

function adminStatusOpsData() {
  return state.adminStatusOps || {
    summary: { publicStatus: "Operational", openIncidents: 1, maintenanceWindows: 3, subscribers: "18.2K", postmortemsDue: 2 },
    statusSurfaces: [
      { surface: "Public status page", audience: "All users", uptime: "99.97%", owner: "SRE", status: "Operational" },
      { surface: "Enterprise status API", audience: "Teams/API", uptime: "99.99%", owner: "API Platform", status: "Operational" },
      { surface: "In-app incident banner", audience: "Web/Mobile", uptime: "Ready", owner: "Comms", status: "Armed" },
      { surface: "Regional availability map", audience: "Leadership", uptime: "Preview", owner: "Infrastructure", status: "Building" }
    ],
    incidents: [
      { incident: "Voice latency in noisy audio", impact: "Voice Circle beta", severity: "Medium", owner: "Voice Ops", status: "Monitoring" },
      { incident: "Android token cleanup spike", impact: "Push delivery", severity: "Low", owner: "Mobile", status: "Mitigating" },
      { incident: "API quota meter lag", impact: "Developer dashboard", severity: "Medium", owner: "API Platform", status: "Fix queued" },
      { incident: "Payment retry anomaly", impact: "Plus upgrades", severity: "Low", owner: "Revenue Ops", status: "Resolved" }
    ],
    maintenance: [
      { window: "Search index refresh", surface: "RAG/Search", region: "Pan-African", time: "Aug 15 01:00", status: "Scheduled" },
      { window: "Billing ledger migration", surface: "Payments", region: "Global", time: "Aug 17 02:00", status: "Approval" },
      { window: "Mobile push certificate rotation", surface: "iOS push", region: "Global", time: "Aug 19 00:30", status: "Ready" }
    ],
    communications: [
      { channel: "Status subscribers", audience: "18.2K", cadence: "Incident updates", owner: "Comms", status: "Ready" },
      { channel: "Enterprise webhooks", audience: "Teams/API", cadence: "Realtime", owner: "API Platform", status: "Healthy" },
      { channel: "In-app banner", audience: "Active users", cadence: "Impact scoped", owner: "Product", status: "Armed" },
      { channel: "Support macro sync", audience: "Support team", cadence: "Per update", owner: "Support", status: "Ready" }
    ],
    postmortems: [
      { report: "Voice latency beta review", incident: "Voice Circle", owner: "Voice Ops", due: "Aug 14", status: "Draft" },
      { report: "Payment retry anomaly", incident: "Billing", owner: "Revenue Ops", due: "Aug 15", status: "Review" },
      { report: "Notification token cleanup", incident: "Mobile push", owner: "Mobile", due: "Aug 18", status: "Queued" }
    ],
    guardrails: [
      "Public status updates must be factual, timely, region-aware, and coordinated with support and communications.",
      "Incident severity should include user impact, affected surfaces, owner, ETA, rollback posture, and next update time.",
      "Maintenance windows need approvals, customer notice, rollback plan, and after-action review before closing.",
      "Postmortems should capture root cause, user impact, prevention work, owners, and evidence without exposing private data."
    ]
  };
}

function adminIncidentResponseData() {
  return state.adminIncidentResponse || {
    summary: { activeIncidents: 3, sev1Open: 0, avgAckTime: "3m 42s", postmortemsDue: 2, rollbackReady: "94%" },
    commandCenter: [
      { role: "Incident commander", primary: "SRE Lead", backup: "Platform Lead", status: "Assigned" },
      { role: "Comms lead", primary: "Comms Manager", backup: "Support Lead", status: "Ready" },
      { role: "Customer impact lead", primary: "Success Ops", backup: "Support Ops", status: "Watching" },
      { role: "Technical lead", primary: "Service owner", backup: "On-call engineer", status: "Rotation live" }
    ],
    activeIncidents: [
      { incident: "INC-2408 Voice latency", surface: "Voice Circle", severity: "SEV-2", owner: "Voice Ops", status: "Mitigating" },
      { incident: "INC-2409 API quota lag", surface: "Developer API", severity: "SEV-2", owner: "API Platform", status: "Fix queued" },
      { incident: "INC-2410 Android push cleanup", surface: "Mobile", severity: "SEV-3", owner: "Mobile Ops", status: "Monitoring" }
    ],
    severityLanes: [
      { lane: "SEV-1", trigger: "Major outage or unsafe model behavior", response: "5 min", owner: "Incident commander", status: "Armed" },
      { lane: "SEV-2", trigger: "Degraded core chat, payment, API, or voice", response: "15 min", owner: "Service owner", status: "Active" },
      { lane: "SEV-3", trigger: "Partial issue or regional degradation", response: "1 hour", owner: "On-call", status: "Healthy" },
      { lane: "SEV-4", trigger: "Minor defect with workaround", response: "Next business day", owner: "Product ops", status: "Healthy" }
    ],
    rollbackChecks: [
      { system: "Web release flags", readiness: "100%", owner: "Web Ops", status: "Ready" },
      { system: "API route policy rollback", readiness: "92%", owner: "API Platform", status: "Ready" },
      { system: "Model gateway fallback", readiness: "88%", owner: "AI Ops", status: "Watch" },
      { system: "Mobile staged rollout pause", readiness: "96%", owner: "Mobile Ops", status: "Ready" }
    ],
    communications: [
      { channel: "Public status page", audience: "All users", cadence: "30 min", status: "Draft ready" },
      { channel: "Enterprise email", audience: "Teams/API", cadence: "Per impact", status: "Ready" },
      { channel: "In-app banner", audience: "Affected users", cadence: "As scoped", status: "Armed" },
      { channel: "Support macros", audience: "Support team", cadence: "Every update", status: "Synced" }
    ],
    postmortems: [
      { report: "Voice latency beta", rootCause: "Model route saturation", owner: "Voice Ops", due: "Aug 14", status: "Draft" },
      { report: "Payment retry anomaly", rootCause: "Webhook retry burst", owner: "Revenue Ops", due: "Aug 15", status: "Review" },
      { report: "Mobile notification cleanup", rootCause: "Token expiry drift", owner: "Mobile Ops", due: "Aug 18", status: "Queued" }
    ],
    guardrails: [
      "Incident response must separate confirmed user impact from investigation notes and internal speculation.",
      "Every SEV-1 and SEV-2 needs an incident commander, service owner, customer-impact owner, comms lead, and rollback decision owner.",
      "Customer updates must be region-aware, accessible, timely, and aligned across status page, in-app banners, support, and enterprise notices.",
      "Postmortems should capture root cause, prevention work, owners, evidence, and customer impact without exposing private user data."
    ]
  };
}

function adminDataQualityOpsData() {
  return state.adminDataQualityOps || {
    summary: { certifiedMetrics: 42, freshnessHealth: "96%", reconciliationGaps: 7, lineageCoverage: "89%", blockedReports: 3 },
    metricHealth: [
      { metric: "Daily active users", source: "Product events", freshness: "5m", owner: "Analytics", status: "Certified" },
      { metric: "Paid conversion", source: "Billing + product", freshness: "10m", owner: "Revenue Ops", status: "Certified" },
      { metric: "Language adoption", source: "Chat metadata", freshness: "12m", owner: "Language QA", status: "Watch" },
      { metric: "Model route cost", source: "AI gateway", freshness: "8m", owner: "Finance/AI Ops", status: "Review" }
    ],
    freshnessMonitors: [
      { pipeline: "Web event stream", target: "<2m", current: "45s", owner: "Data Platform", status: "Healthy" },
      { pipeline: "Mobile event sync", target: "<5m", current: "4m", owner: "Mobile Data", status: "Watch" },
      { pipeline: "Billing ledger sync", target: "<10m", current: "7m", owner: "Finance Data", status: "Healthy" },
      { pipeline: "Reviewer quality exports", target: "<30m", current: "41m", owner: "Language QA", status: "Late" }
    ],
    reconciliation: [
      { check: "Payments vs entitlements", gap: "11 accounts", owner: "Revenue Ops", severity: "High", status: "Investigating" },
      { check: "Mobile installs vs signups", gap: "2.8%", owner: "Growth", severity: "Medium", status: "Sampling" },
      { check: "API usage vs quota ledger", gap: "0.9%", owner: "API Platform", severity: "Medium", status: "Fix queued" },
      { check: "Language corrections vs reviewer queue", gap: "18 items", owner: "Language QA", severity: "Low", status: "Review" }
    ],
    lineage: [
      { dataset: "Executive KPIs", upstream: "Events, billing, API", coverage: "94%", owner: "Analytics", status: "Certified" },
      { dataset: "Revenue dashboard", upstream: "Billing, entitlements", coverage: "91%", owner: "Finance Data", status: "Certified" },
      { dataset: "Language quality", upstream: "Reviews, evals, corrections", coverage: "86%", owner: "AI QA", status: "Watch" },
      { dataset: "Mobile release health", upstream: "Crashes, events, stores", coverage: "83%", owner: "Mobile Ops", status: "Improving" }
    ],
    qualityIncidents: [
      { incident: "Reviewer export late", impact: "Language quality dashboard", owner: "Language QA", eta: "Today", status: "Open" },
      { incident: "Signup attribution mismatch", impact: "Growth funnel", owner: "Growth Analytics", eta: "4h", status: "Investigating" },
      { incident: "Quota meter lag", impact: "API dashboard", owner: "API Platform", eta: "2h", status: "Fix queued" },
      { incident: "Duplicate mobile install events", impact: "Mobile launch readout", owner: "Mobile Data", eta: "Resolved", status: "Closed" }
    ],
    guardrails: [
      "Leadership dashboards should label metrics as certified only when freshness, schema, lineage, and reconciliation checks pass.",
      "Revenue, usage, model-cost, and language-quality numbers need source ownership and auditability before board or investor use.",
      "Data incidents should block dependent reports when quality falls below decision-grade thresholds.",
      "Data quality views must use aggregates and metadata, not raw prompts, private chats, payment secrets, or sensitive user records."
    ]
  };
}

function adminConsentOpsData() {
  return state.adminConsentOps || {
    summary: { consentProfiles: "18.4K", trainingOptIn: "41%", voiceConsent: "64%", withdrawalQueue: 11, policyCoverage: "92%" },
    consentSurfaces: [
      { surface: "Signup preferences", audience: "All users", coverage: "96%", owner: "Product", status: "Live" },
      { surface: "Language Passport", audience: "Multilingual users", coverage: "88%", owner: "Language QA", status: "Improving" },
      { surface: "Voice Circle capture", audience: "Voice users", coverage: "92%", owner: "Voice Ops", status: "Live" },
      { surface: "Community corrections", audience: "Contributors", coverage: "74%", owner: "Community", status: "Review" }
    ],
    trainingEligibility: [
      { dataset: "Text corrections", eligible: "318K", blocker: "License + consent", owner: "Data Governance", status: "Controlled" },
      { dataset: "Voice beta samples", eligible: "41%", blocker: "Retention consent", owner: "Voice Ops", status: "Blocked" },
      { dataset: "Reviewer decisions", eligible: "82%", blocker: "Attribution policy", owner: "Language QA", status: "Review" },
      { dataset: "Enterprise workspace prompts", eligible: "0%", blocker: "Tenant policy", owner: "Enterprise", status: "Excluded" }
    ],
    withdrawals: [
      { request: "Consent withdrawal", region: "Diaspora", count: 11, sla: "Immediate", owner: "Privacy", status: "Automated" },
      { request: "Voice sample deletion", region: "Nigeria/Kenya", count: 7, sla: "7 days", owner: "Voice Ops", status: "Queued" },
      { request: "Correction attribution removal", region: "Ghana", count: 4, sla: "14 days", owner: "Community", status: "Review" },
      { request: "Personalization pause", region: "Pan-African", count: 42, sla: "Immediate", owner: "Product", status: "Live" }
    ],
    policyCoverage: [
      { policy: "Training reuse consent", surface: "Voice + corrections", coverage: "41%", owner: "Data Gov", status: "Blocked" },
      { policy: "Personalization consent", surface: "Memory + Passport", coverage: "88%", owner: "Privacy", status: "Healthy" },
      { policy: "Contributor consent", surface: "Community corrections", coverage: "74%", owner: "Community", status: "Improving" },
      { policy: "Enterprise exclusion", surface: "Teams workspaces", coverage: "100%", owner: "Enterprise", status: "Protected" }
    ],
    auditTrail: [
      { event: "Voice consent updated", surface: "Mobile", actor: "User controlled", evidence: "Policy v0.8", status: "Logged" },
      { event: "Correction sample approved", surface: "Reviewer network", actor: "Language QA", evidence: "Consent + license", status: "Logged" },
      { event: "Training reuse blocked", surface: "Voice beta", actor: "Data Gov", evidence: "Missing retention consent", status: "Blocked" },
      { event: "Enterprise prompt excluded", surface: "Teams", actor: "Tenant policy", evidence: "Workspace policy", status: "Protected" }
    ],
    guardrails: [
      "Consent must be specific, revocable, auditable, and understandable across supported languages and literacy levels.",
      "No voice, correction, workspace, or private chat data should become training/eval material without explicit eligibility gates.",
      "Withdrawal requests must flow through deletion, de-indexing, attribution, and model-training exclusion workflows.",
      "Admin views should show consent posture and aggregate risks without exposing raw user prompts, voice clips, or private profiles."
    ]
  };
}

function adminSecretsOpsData() {
  return state.adminSecretsOps || {
    summary: { managedSecrets: 128, rotationHealth: "94%", expiringSoon: 6, leakAlerts: 2, kmsCoverage: "98%" },
    secretInventory: [
      { secret: "Model provider tokens", scope: "AI gateway", owner: "AI Ops", rotation: "14 days", status: "Scheduled" },
      { secret: "Payment webhook keys", scope: "Billing", owner: "Revenue Ops", rotation: "30 days", status: "Healthy" },
      { secret: "Mobile push certificates", scope: "iOS/Android", owner: "Mobile", rotation: "90 days", status: "Expiring" },
      { secret: "Enterprise SSO metadata", scope: "Teams", owner: "Identity", rotation: "Customer managed", status: "Review" }
    ],
    rotations: [
      { rotation: "Hugging Face token refresh", window: "Aug 14 01:00", owner: "AI Ops", blastRadius: "Model routing", status: "Approved" },
      { rotation: "Payment signing key", window: "Aug 16 02:00", owner: "Finance/Security", blastRadius: "Billing webhooks", status: "Ready" },
      { rotation: "Admin session signing key", window: "Aug 18 00:30", owner: "Security", blastRadius: "Admin console", status: "Testing" },
      { rotation: "Push certificate renewal", window: "Aug 19 00:30", owner: "Mobile", blastRadius: "Notifications", status: "Queued" }
    ],
    kmsPosture: [
      { store: "User profile DB", keyPolicy: "Managed KMS", coverage: "99%", owner: "Security", status: "Healthy" },
      { store: "Conversation ledger", keyPolicy: "Tenant-ready keys", coverage: "96%", owner: "Platform", status: "Improving" },
      { store: "Object storage", keyPolicy: "Envelope encryption", coverage: "98%", owner: "Infrastructure", status: "Healthy" },
      { store: "Audit archive", keyPolicy: "Immutable key custody", coverage: "100%", owner: "Compliance", status: "Protected" }
    ],
    certificates: [
      { certificate: "api.lumora.ai TLS", surface: "API", expires: "72 days", owner: "Platform", status: "Healthy" },
      { certificate: "admin.lumora.ai TLS", surface: "Admin", expires: "48 days", owner: "Security", status: "Healthy" },
      { certificate: "iOS push certificate", surface: "Mobile", expires: "11 days", owner: "Mobile", status: "Renewal queued" },
      { certificate: "Partner webhook mTLS", surface: "Enterprise API", expires: "26 days", owner: "Integrations", status: "Review" }
    ],
    leakResponse: [
      { signal: "Token committed to preview log", surface: "DevEx", severity: "High", owner: "Security", status: "Rotated" },
      { signal: "Webhook key replay pattern", surface: "Billing", severity: "Medium", owner: "Revenue Ops", status: "Investigating" },
      { signal: "Mobile cert expiry warning", surface: "Notifications", severity: "Medium", owner: "Mobile", status: "Queued" },
      { signal: "Partner key over-permissioned", surface: "API", severity: "Low", owner: "Integrations", status: "Scope review" }
    ],
    guardrails: [
      "Secrets must never appear in browser code, logs, reports, support tools, screenshots, or generated exports.",
      "Every secret needs owner, scope, rotation cadence, storage location, blast radius, and emergency revocation path.",
      "Key rotations should be tested in preview before production and coordinated with impacted product surfaces.",
      "Leak response must revoke, rotate, audit, notify accountable owners, and document customer impact when needed."
    ]
  };
}

function adminMobileOpsData() {
  return state.adminMobileOps || {
    summary: { activeBuilds: 4, crashFree: "99.42%", betaUsers: "3,840", storeReadiness: "86%", blockedDevices: 12 },
    releases: [
      { release: "Android 1.0.8 beta", track: "Play Console beta", rollout: "35%", owner: "Android Lead", status: "Watching" },
      { release: "iOS 1.0.5 beta", track: "TestFlight", rollout: "28%", owner: "iOS Lead", status: "Crash fix" },
      { release: "Android offline language pack", track: "Internal", rollout: "0%", owner: "Mobile AI", status: "QA" },
      { release: "iOS voice consent flow", track: "TestFlight", rollout: "12%", owner: "Trust/Mobile", status: "Review" }
    ],
    crashHealth: [
      { signal: "Android chat composer crash", platform: "Android", affected: "0.38%", owner: "Android QA", status: "Fix testing" },
      { signal: "iOS audio permission loop", platform: "iOS", affected: "0.21%", owner: "iOS QA", status: "Investigating" },
      { signal: "Low-memory startup delay", platform: "Android", affected: "1.4%", owner: "Performance", status: "Optimizing" },
      { signal: "Push token refresh failure", platform: "iOS", affected: "0.12%", owner: "Platform", status: "Watching" }
    ],
    storeReadiness: [
      { item: "Play Store listing", platform: "Android", owner: "Growth", readiness: "92%", status: "Ready" },
      { item: "App Store privacy nutrition", platform: "iOS", owner: "Data Gov", readiness: "81%", status: "Review" },
      { item: "Localized screenshots", platform: "Both", owner: "Design", readiness: "74%", status: "Updating" },
      { item: "Age rating and policy declarations", platform: "Both", owner: "Legal", readiness: "88%", status: "Ready" }
    ],
    deviceLabs: [
      { device: "Samsung A-series low memory", market: "Nigeria/Ghana", coverage: "86%", owner: "Android QA", status: "Active" },
      { device: "Tecno/Infinix mid-range", market: "West Africa", coverage: "79%", owner: "Android QA", status: "Needs run" },
      { device: "iPhone 11-13", market: "South Africa/Kenya", coverage: "91%", owner: "iOS QA", status: "Active" },
      { device: "Tablet classroom mode", market: "Education pilots", coverage: "63%", owner: "QA", status: "Backlog" }
    ],
    guardrails: [
      "Mobile rollouts should pause automatically when crash-free sessions, latency, login, or payment health drops below threshold.",
      "Android and iOS store claims must match shipped language coverage, privacy behavior, and supported markets.",
      "Device lab coverage should prioritize high-usage African devices, low-memory conditions, and unreliable networks.",
      "Voice, memory, payment, and child/education flows need explicit privacy and consent checks before public rollout."
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

function adminEntitlementData() {
  return state.adminEntitlements || {
    summary: { activePlans: 4, quotaBreaches: 73, overageReviews: 18, meteringLag: "42s", entitlementHealth: "96%" },
    planEntitlements: [
      { plan: "Free", messages: "20/day", voice: "5 min/day", api: "No API", status: "Acquisition" },
      { plan: "Plus", messages: "200/day", voice: "60 min/mo", api: "Sandbox only", status: "Healthy" },
      { plan: "Pro", messages: "1,000/day", voice: "300 min/mo", api: "Builder quota", status: "Best value" },
      { plan: "Teams", messages: "5,000/day", voice: "1,500 min/mo", api: "Enterprise quota", status: "Contracted" }
    ],
    quotaMeters: [
      { meter: "Chat messages", surface: "Web/Mobile", lag: "18s", owner: "Platform", status: "Healthy" },
      { meter: "Voice minutes", surface: "Mobile/Voice Circle", lag: "42s", owner: "Voice Ops", status: "Watch" },
      { meter: "API calls", surface: "Developer API", lag: "11s", owner: "API Platform", status: "Healthy" },
      { meter: "RAG storage", surface: "Teams workspaces", lag: "4m", owner: "Knowledge Ops", status: "Review" }
    ],
    breachQueues: [
      { queue: "Free plan hard limit", count: 38, owner: "Growth", action: "Upgrade prompt", status: "Active" },
      { queue: "Voice minute overage", count: 21, owner: "Voice Ops", action: "Throttle + notify", status: "Watch" },
      { queue: "API burst over quota", count: 9, owner: "Developer Support", action: "Rate-limit review", status: "Queued" },
      { queue: "Teams contract exception", count: 5, owner: "Success/Finance", action: "Manual approval", status: "Review" }
    ],
    upgradeGates: [
      { gate: "Free to Plus", trigger: "2 quota hits in 7 days", message: "More daily chats and voice", owner: "Growth", status: "Live" },
      { gate: "Plus to Pro", trigger: "Creator/market mode heavy use", message: "Advanced workflows", owner: "Product", status: "Testing" },
      { gate: "Pro to Teams", trigger: "Multiple seats or API need", message: "Workspace + admin controls", owner: "Sales", status: "Ready" },
      { gate: "Teams contract expansion", trigger: "80% seat or API utilization", message: "Success-led expansion", owner: "Customer Success", status: "Ready" }
    ],
    exceptions: [
      { account: "EduBridge Africa", exception: "Temporary seat overage", approval: "Success Lead", expires: "Aug 18", status: "Approved" },
      { account: "MarketUnion NG", exception: "API burst window", approval: "Developer Support", expires: "Aug 14", status: "Pending" },
      { account: "Creator Desk", exception: "Voice beta allowance", approval: "Mobile Growth", expires: "Aug 21", status: "Approved" },
      { account: "Free community reviewers", exception: "Correction review credits", approval: "Language QA", expires: "Rolling", status: "Scoped" }
    ],
    guardrails: [
      "Quota enforcement should be clear, fair, and localized so users understand limits before they hit frustration.",
      "Paid entitlements must be enforced consistently across web, mobile, API, and workspace surfaces.",
      "Manual exceptions require owner, expiry, audit event, and finance/customer-success review for paid plans.",
      "Usage meters should protect cost and abuse controls without exposing raw private prompts or payment secrets."
    ]
  };
}

function adminRevenueAssuranceData() {
  return state.adminRevenueAssurance || {
    summary: { leakageRisk: "$18.7K", taxRegions: 12, reconciliationLag: "27m", invoiceExceptions: 16, recognitionHealth: "94%" },
    taxCoverage: [
      { market: "Nigeria", tax: "VAT", coverage: "Ready", owner: "Finance", status: "Healthy" },
      { market: "Kenya", tax: "VAT", coverage: "Provider mapped", owner: "Finance", status: "Review" },
      { market: "South Africa", tax: "VAT", coverage: "Ready", owner: "Revenue Ops", status: "Healthy" },
      { market: "Ghana", tax: "VAT", coverage: "Rules pending", owner: "Legal/Finance", status: "Watch" }
    ],
    leakageSignals: [
      { signal: "Failed dunning recovery", exposure: "$11.4K", source: "Cards", owner: "Revenue Ops", status: "Active" },
      { signal: "Teams invoice mismatch", exposure: "$4.8K", source: "Seat changes", owner: "Finance", status: "Review" },
      { signal: "Unbilled API overage", exposure: "$1.7K", source: "API quotas", owner: "Developer Platform", status: "Queued" },
      { signal: "Tax rule gap", exposure: "$800", source: "New market", owner: "Legal/Finance", status: "Watch" }
    ],
    reconciliation: [
      { stream: "Card processor payouts", expected: "$82.1K", matched: "99.2%", lag: "12m", status: "Healthy" },
      { stream: "Mobile store payouts", expected: "$18.6K", matched: "97.4%", lag: "27m", status: "Review" },
      { stream: "Teams invoices", expected: "$141K", matched: "94.8%", lag: "Same day", status: "Watch" },
      { stream: "Refund ledger", expected: "$4.2K", matched: "100%", lag: "8m", status: "Healthy" }
    ],
    recognition: [
      { product: "Plus monthly", policy: "Monthly subscription", deferred: "$23.2K", owner: "Finance", status: "Healthy" },
      { product: "Pro annual", policy: "Recognize over term", deferred: "$61.4K", owner: "Finance", status: "Healthy" },
      { product: "Teams contract", policy: "Contract schedule", deferred: "$188K", owner: "CFO", status: "Review" },
      { product: "Usage overage", policy: "Metered usage", deferred: "$3.6K", owner: "Revenue Ops", status: "Watch" }
    ],
    auditTasks: [
      { task: "Reconcile processor fees", owner: "Finance", due: "Today", status: "Open" },
      { task: "Validate VAT mapping for Ghana beta", owner: "Legal/Finance", due: "Aug 16", status: "Queued" },
      { task: "Approve Teams invoice exceptions", owner: "CFO", due: "This week", status: "Review" },
      { task: "Match mobile store payouts", owner: "Revenue Ops", due: "Today", status: "Active" }
    ],
    guardrails: [
      "Revenue reporting must reconcile plan, invoice, payment-provider, tax, refund, and entitlement records.",
      "Tax rules should be market-aware before public paid launch in any country.",
      "Manual invoice corrections require audit trail, approver, customer impact, and revenue recognition review.",
      "Leadership views should show exposure and status without exposing raw card, bank, or customer payment secrets."
    ]
  };
}

function adminSubscriptionData() {
  return state.adminSubscriptions || {
    summary: { activeSubscriptions: "4,047", trialsEnding: 312, renewalRisk: "$22.8K", cancellations: 47, saveRate: "18%" },
    lifecycleStages: [
      { stage: "Trial started", users: 1480, conversion: "31%", owner: "Growth", status: "Healthy" },
      { stage: "Trial ending", users: 312, conversion: "24%", owner: "Lifecycle", status: "Watch" },
      { stage: "Paid active", users: 4047, conversion: "N/A", owner: "Revenue Ops", status: "Healthy" },
      { stage: "Grace period", users: 91, conversion: "42% recovered", owner: "Billing", status: "Active" }
    ],
    renewalQueues: [
      { queue: "Teams renewal in 30 days", accounts: 11, value: "$48K", owner: "Success", status: "Review" },
      { queue: "Annual Pro renewal", accounts: 83, value: "$14.9K", owner: "Lifecycle", status: "Queued" },
      { queue: "Card expiry before renewal", accounts: 129, value: "$7.6K", owner: "Billing", status: "Active" },
      { queue: "Procurement renewal blocker", accounts: 6, value: "$31K", owner: "Revenue Ops", status: "Escalated" }
    ],
    cancellationReasons: [
      { reason: "Too expensive", share: "28%", action: "Offer annual discount", owner: "Growth", status: "Testing" },
      { reason: "Language coverage gap", share: "22%", action: "Route to language roadmap", owner: "Language Ops", status: "Review" },
      { reason: "Low usage", share: "19%", action: "Prompt education journey", owner: "Lifecycle", status: "Live" },
      { reason: "Payment failed", share: "17%", action: "Dunning recovery", owner: "Billing", status: "Active" }
    ],
    planMigrations: [
      { motion: "Free to Plus", volume: 842, driver: "Quota reached", owner: "Growth", status: "Healthy" },
      { motion: "Plus to Pro", volume: 214, driver: "Creator tools", owner: "Product", status: "Growing" },
      { motion: "Pro to Teams", volume: 38, driver: "Workspace seats", owner: "Sales", status: "Review" },
      { motion: "Teams expansion", volume: 17, driver: "Seat/API usage", owner: "Success", status: "Healthy" }
    ],
    winbackOffers: [
      { offer: "Language coverage follow-up", segment: "Coverage-gap churn", acceptance: "12%", owner: "Language Ops", status: "Ready" },
      { offer: "Annual plan discount", segment: "Price-sensitive Pro", acceptance: "18%", owner: "Growth", status: "Testing" },
      { offer: "Workspace onboarding", segment: "Low-use Teams", acceptance: "26%", owner: "Success", status: "Live" },
      { offer: "Payment recovery credit", segment: "Failed renewal", acceptance: "9%", owner: "Billing", status: "Watch" }
    ],
    guardrails: [
      "Subscription changes must sync plan, entitlement, invoice, tax, and usage records before confirming to the user.",
      "Cancellation flows should capture reason, save attempt, refund eligibility, and data retention options clearly.",
      "Grace-period access should protect user trust without creating hidden unpaid usage exposure.",
      "Winback offers must respect consent, quiet hours, country rules, and prior opt-out preferences."
    ]
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

function adminUnitEconomicsData() {
  return state.adminUnitEconomics || {
    summary: { costPerMessage: "$0.0038", revenuePerPaidMessage: "$0.021", freeUserCost: "$0.42/mo", paidGrossMargin: "78%", marginLeaks: 5 },
    routeCosts: [
      { route: "General chat", cost: "$0.0024/msg", revenue: "$0.018/msg", margin: "87%", status: "Healthy" },
      { route: "Translation", cost: "$0.0036/msg", revenue: "$0.020/msg", margin: "82%", status: "Healthy" },
      { route: "Voice transcription", cost: "$0.011/min", revenue: "$0.036/min", margin: "69%", status: "Watch" },
      { route: "RAG knowledge answer", cost: "$0.0068/msg", revenue: "$0.024/msg", margin: "72%", status: "Optimize" }
    ],
    planEconomics: [
      { plan: "Free", arpu: "$0.00", monthlyCost: "$0.42/user", margin: "Subsidized", status: "Quota watch" },
      { plan: "Plus", arpu: "$8.00", monthlyCost: "$1.64/user", margin: "79%", status: "Healthy" },
      { plan: "Pro", arpu: "$18.00", monthlyCost: "$3.82/user", margin: "78%", status: "Healthy" },
      { plan: "Teams", arpu: "$621/org", monthlyCost: "$108/org", margin: "83%", status: "Expansion" }
    ],
    marginLeaks: [
      { leak: "Repeated translation retries", source: "Model routing", exposure: "$3.1K/mo", owner: "AI Ops", status: "Caching" },
      { leak: "Voice beta overuse", source: "Free plan", exposure: "$2.4K/mo", owner: "Mobile", status: "Quota review" },
      { leak: "Uncached RAG retrieval", source: "Knowledge", exposure: "$1.8K/mo", owner: "Knowledge Ops", status: "Batching" },
      { leak: "Failed payment retry load", source: "Billing", exposure: "$980/mo", owner: "Revenue Ops", status: "Dunning" }
    ],
    pricingActions: [
      { action: "Introduce voice minute bundles", segment: "Plus/Pro", impact: "+6% margin", owner: "Product/Growth", status: "Design" },
      { action: "Add Teams usage alerts", segment: "Enterprise", impact: "Reduce overage surprise", owner: "Success", status: "Ready" },
      { action: "Lower-cost fallback for low-risk prompts", segment: "Free", impact: "$2.6K/mo savings", owner: "AI Ops", status: "Testing" },
      { action: "Cache common education prompts", segment: "Schools", impact: "$1.1K/mo savings", owner: "Knowledge Ops", status: "Queued" }
    ],
    guardrails: [
      "Unit economics should be tracked by plan, route, language, market, model, and surface.",
      "Free-plan subsidies need explicit quotas, abuse controls, and conversion experiments.",
      "Pricing decisions should preserve user trust while protecting expensive routes such as voice and RAG.",
      "Cost dashboards must avoid exposing vendor-sensitive pricing, raw prompts, or private customer data."
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

function adminModelLicensingData() {
  return state.adminModelLicensing || {
    summary: { modelSources: MODEL_REGISTRY.length, licenseReviews: 10, restrictedUse: 2, attributionTasks: 6, rightsRisks: 4 },
    modelLicenses: [
      { model: "Masakhane NLP", source: "huggingface.co/masakhane", license: "Project-specific/open research", use: "Review before commercial launch", status: "Legal review" },
      { model: "InkubaLM", source: "huggingface.co/lelapa/InkubaLM-0.4B", license: "Open model card review", use: "Generation and fine-tuning", status: "Attribution needed" },
      { model: "AfroLM", source: "huggingface.co/bonadossou/afrolm_active_learning", license: "Research/open review", use: "Classification and embeddings", status: "Review" },
      { model: "AfriBERTa", source: "huggingface.co/castorini/afriberta_base", license: "Model card review", use: "NER/classification", status: "Watch" },
      { model: "AfriNLLB", source: "huggingface.co/AfriNLP/AfriNLLB-12enc-12dec-full-ft", license: "Model card review", use: "Translation", status: "Priority review" },
      { model: "Meta NLLB-200", source: "huggingface.co/facebook/nllb-200-distilled-600M", license: "Meta license review", use: "Translation fallback", status: "Restricted-use check" },
      { model: "Meta MMS", source: "huggingface.co/facebook/mms-1b-all", license: "Meta license review", use: "Speech coverage", status: "Restricted-use check" },
      { model: "Simba-H", source: "huggingface.co/UBC-NLP/Simba-H", license: "Research ecosystem review", use: "Speech benchmarking", status: "Attribution needed" }
    ],
    datasetSources: [
      { dataset: "Masakhane benchmarks", origin: "Community/research", consent: "Source-level review", owner: "Language QA", status: "Mapped" },
      { dataset: "African social text samples", origin: "Public/social domain", consent: "PII and platform terms review", owner: "Data Governance", status: "Restricted" },
      { dataset: "Speech benchmarks", origin: "Research corpora", consent: "License review", owner: "Voice Ops", status: "Review" },
      { dataset: "Community corrections", origin: "Lumora opt-in users", consent: "Explicit contribution consent", owner: "Privacy", status: "Designed" }
    ],
    usageRestrictions: [
      { restriction: "Commercial use uncertainty", scope: "Research model cards", owner: "Legal", status: "Review before production" },
      { restriction: "PII in open/social datasets", scope: "Tone and sentiment routes", owner: "Data Governance", status: "Redaction required" },
      { restriction: "Voice biometric sensitivity", scope: "ASR/TTS pipelines", owner: "Privacy", status: "Consent required" },
      { restriction: "Attribution and citation", scope: "All model source displays", owner: "AI Ops", status: "Task queued" }
    ],
    attributionTasks: [
      { task: "Create model source registry page", owner: "AI Ops", due: "Before beta", status: "Draft" },
      { task: "Add user-facing source acknowledgements", owner: "Product", due: "Before launch", status: "Design" },
      { task: "Map license obligations by model route", owner: "Legal", due: "This week", status: "In progress" },
      { task: "Document community correction consent", owner: "Privacy", due: "Before reviewer loop", status: "Review" }
    ],
    rightsRisks: [
      { risk: "Dataset provenance unclear", impact: "High", owner: "Data Governance", mitigation: "Block production route until source approved", status: "Open" },
      { risk: "Attribution missing in generated docs", impact: "Medium", owner: "Product", mitigation: "Model registry disclosure", status: "Queued" },
      { risk: "Restricted model used by paid plan", impact: "High", owner: "Legal", mitigation: "Route eligibility rules", status: "Review" },
      { risk: "User correction reused without consent", impact: "High", owner: "Privacy", mitigation: "Opt-in contribution workflow", status: "Designed" }
    ],
    guardrails: [
      "No model or dataset should move to production until license, provenance, privacy, and attribution obligations are recorded.",
      "Paid-plan use requires a stronger commercial-use review than research-only experimentation.",
      "Community corrections and voice samples require explicit user consent before training, benchmarking, or reviewer reuse.",
      "Model source disclosures should be visible to leadership, developers, legal, and users where appropriate."
    ]
  };
}

function adminDatasetGovernanceData() {
  return state.adminDatasetGovernance || {
    summary: { governedDatasets: 46, consentGaps: 7, provenanceReviews: 18, trainingBlocks: 5, qualityCoverage: "84%" },
    datasetSources: [
      { dataset: "Yoruba conversational corrections", source: "User opt-in corrections", consent: "Explicit", owner: "Language QA", status: "Approved" },
      { dataset: "Swahili classroom examples", source: "Education partners", consent: "Contract scoped", owner: "Education", status: "Review" },
      { dataset: "Pidgin market replies", source: "Synthetic + reviewer examples", consent: "Internal", owner: "Product AI", status: "Approved" },
      { dataset: "Voice Circle samples", source: "Mobile beta", consent: "Partial", owner: "Voice Ops", status: "Blocked" }
    ],
    provenanceReviews: [
      { review: "Community correction reuse", market: "Nigeria", risk: "Medium", reviewer: "Privacy", status: "Mitigating" },
      { review: "Partner classroom content", market: "Kenya", risk: "Low", reviewer: "Legal", status: "Queued" },
      { review: "North Africa code-switch examples", market: "North Africa", risk: "Medium", reviewer: "Language QA", status: "Review" },
      { review: "Voice transcription snippets", market: "Multi-market", risk: "High", reviewer: "DPIA", status: "Blocked" }
    ],
    trainingEligibility: [
      { useCase: "Model training", eligible: 24, blocked: 9, rule: "Explicit consent + provenance", status: "Controlled" },
      { useCase: "Model evaluation", eligible: 38, blocked: 4, rule: "Redacted + sampled", status: "Healthy" },
      { useCase: "Reviewer guidance", eligible: 31, blocked: 6, rule: "Anonymized examples", status: "Review" },
      { useCase: "Synthetic augmentation", eligible: 18, blocked: 2, rule: "No personal data", status: "Healthy" }
    ],
    qualityCoverage: [
      { language: "Yoruba", coverage: "91%", reviewers: 18, gaps: "Regional tone", status: "Healthy" },
      { language: "Swahili", coverage: "86%", reviewers: 11, gaps: "Youth/classroom style", status: "Watch" },
      { language: "Hausa", coverage: "74%", reviewers: 9, gaps: "Education examples", status: "Needs data" },
      { language: "Arabic/French code-switch", coverage: "68%", reviewers: 7, gaps: "North Africa variants", status: "Review" }
    ],
    contributionLoops: [
      { loop: "User correction opt-in", volume: "1,284/week", consent: "88%", owner: "Product", status: "Live" },
      { loop: "Native reviewer samples", volume: "312/week", consent: "Scoped", owner: "Language QA", status: "Live" },
      { loop: "Partner education packs", volume: "46 packs", consent: "Contract", owner: "Education", status: "Review" },
      { loop: "Voice beta snippets", volume: "5.8K clips", consent: "64%", owner: "Voice Ops", status: "Blocked" }
    ],
    guardrails: [
      "Datasets cannot be used for training unless provenance, consent, license, retention, and residency are recorded.",
      "Evaluation samples should be minimized, redacted, and linked to model risk and DPIA records.",
      "African language quality coverage must track dialect, tone, country context, and reviewer capacity.",
      "Contribution loops should make user consent clear and reversible without degrading the core chat experience."
    ]
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

function adminPolicyGovernanceData() {
  return state.adminPolicyGovernance || {
    summary: { activePolicies: 18, draftUpdates: 6, localizedGuides: 14, appealsRules: 9, policyDrift: "Low" },
    policyVersions: [
      { policy: "Safety response policy", version: "v1.4", owner: "Trust", effective: "Aug 2026", status: "Live" },
      { policy: "Language and dialect quality", version: "v0.9", owner: "Language QA", effective: "Beta", status: "Review" },
      { policy: "Voice consent and retention", version: "v0.8", owner: "Privacy", effective: "Mobile beta", status: "Draft" },
      { policy: "Marketplace and business replies", version: "v1.1", owner: "Product Policy", effective: "Aug 2026", status: "Live" }
    ],
    taxonomy: [
      { category: "High-risk advice", examples: "Medical, legal, financial", handling: "Caution + referral", status: "Live" },
      { category: "Cultural sensitivity", examples: "Proverbs, elders, identity", handling: "Context-aware tone", status: "Review" },
      { category: "Harassment and hate", examples: "Ethnicity, religion, gender", handling: "Block/escalate", status: "Live" },
      { category: "Commercial claims", examples: "Pricing, offers, refunds", handling: "Source-controlled", status: "Live" }
    ],
    reviewerGuidance: [
      { guide: "Yoruba/Pidgin tone review", language: "Yoruba + Nigerian Pidgin", reviewers: 18, status: "Active" },
      { guide: "Swahili respectful refusal", language: "Swahili", reviewers: 11, status: "Review" },
      { guide: "Arabic/French North Africa style", language: "Arabic/French", reviewers: 7, status: "Draft" },
      { guide: "Marketplace reply safety", language: "Pan-African English", reviewers: 9, status: "Active" }
    ],
    enforcementRules: [
      { rule: "No sensitive admin data in user responses", action: "Block + audit", owner: "Security", status: "Live" },
      { rule: "Unsupported dialect uncertainty", action: "Disclose uncertainty", owner: "Language QA", status: "Live" },
      { rule: "Paid-plan offer accuracy", action: "Use plan source only", owner: "Revenue Ops", status: "Live" },
      { rule: "Voice consent missing", action: "Disable retention", owner: "Privacy", status: "Testing" }
    ],
    appealsPolicy: [
      { appeal: "Moderation decision", sla: "7 days", reviewer: "Trust Ops", escalation: "Policy Lead", status: "Live" },
      { appeal: "Account hold", sla: "3 days", reviewer: "Trust/Security", escalation: "Legal", status: "Live" },
      { appeal: "Language correction dispute", sla: "14 days", reviewer: "Native reviewer", escalation: "Language QA", status: "Beta" },
      { appeal: "Business reply rejection", sla: "5 days", reviewer: "Product Policy", escalation: "Revenue Ops", status: "Draft" }
    ],
    guardrails: [
      "Policies must be versioned, localized, reviewed, and linked to product surfaces before launch.",
      "Reviewer guidance should preserve African cultural context without overfitting to one country or dialect.",
      "Enforcement rules require user-facing clarity, admin audit events, and appeal paths where appropriate.",
      "Policy dashboards should summarize decisions without exposing private prompts, reviewer notes, or sensitive identities."
    ]
  };
}

function adminFraudAbuseData() {
  return state.adminFraudAbuse || {
    summary: { openCases: 73, botBlocks: "18.4K", paymentRisk: "$6.8K", apiAbuse: 22, falsePositiveRate: "1.7%" },
    abuseQueues: [
      { queue: "Account farming", surface: "Signup", volume: 28, owner: "Trust Ops", status: "Reviewing" },
      { queue: "Prompt spam bursts", surface: "Chat/API", volume: 19, owner: "Safety", status: "Throttled" },
      { queue: "Referral abuse", surface: "Growth", volume: 14, owner: "Growth Ops", status: "Investigating" },
      { queue: "Support impersonation", surface: "Support", volume: 12, owner: "Support Trust", status: "Escalated" }
    ],
    botDefense: [
      { signal: "High-velocity signup cluster", market: "Nigeria", action: "Step-up verification", confidence: "91%", status: "Active" },
      { signal: "Credential stuffing pattern", market: "Pan-African", action: "Rate limit", confidence: "88%", status: "Blocked" },
      { signal: "Scraper on pricing routes", market: "Unknown", action: "Edge challenge", confidence: "82%", status: "Watching" },
      { signal: "Synthetic mobile sessions", market: "Kenya", action: "Device trust check", confidence: "76%", status: "Tuning" }
    ],
    paymentRisk: [
      { risk: "Card testing", plan: "Plus", exposure: "$2.1K", owner: "Payments", status: "Blocked" },
      { risk: "Chargeback cluster", plan: "Pro", exposure: "$3.4K", owner: "Finance", status: "Review" },
      { risk: "Trial cycling", plan: "Free/Plus", exposure: "$860", owner: "Growth Ops", status: "Limited" },
      { risk: "Invoice impersonation", plan: "Teams", exposure: "$420", owner: "Revenue Ops", status: "Escalated" }
    ],
    enforcement: [
      { action: "Temporary account hold", count: 31, reviewer: "Trust Ops", appealWindow: "7 days", status: "Active" },
      { action: "API key suspension", count: 8, reviewer: "Developer Ops", appealWindow: "3 days", status: "Active" },
      { action: "Payment retry block", count: 17, reviewer: "Finance", appealWindow: "Manual", status: "Queued" },
      { action: "Market-level rate limit", count: 4, reviewer: "Platform", appealWindow: "24h", status: "Watching" }
    ],
    guardrails: [
      "Fraud controls should protect Lumora without unfairly blocking legitimate users in low-connectivity markets.",
      "Every enforcement action needs reason, evidence, reviewer, appeal path, and expiry or review date.",
      "Payment fraud workflows must coordinate with support so affected users receive clear next steps.",
      "Bot and abuse signals should use privacy-preserving aggregates instead of exposing raw prompts or sensitive account data."
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

function adminLifecycleRetentionData() {
  return state.adminLifecycleRetention || {
    summary: { activeJourneys: 11, activationRate: "78.2%", churnRiskUsers: 642, winbackRate: "18%", expansionSignals: 214 },
    journeys: [
      { journey: "New user language passport", segment: "New signups", trigger: "First session", owner: "Growth", status: "Live" },
      { journey: "First useful answer", segment: "Activated users", trigger: "No chat after signup", owner: "Product", status: "Optimizing" },
      { journey: "Voice feature discovery", segment: "Mobile beta", trigger: "3 text chats", owner: "Mobile Growth", status: "Testing" },
      { journey: "Teams admin onboarding", segment: "Enterprise", trigger: "Workspace created", owner: "Success", status: "Live" }
    ],
    churnRisks: [
      { signal: "No second session", segment: "Free users", users: 284, owner: "Growth", status: "Nudge queued" },
      { signal: "Payment retry fatigue", segment: "Plus", users: 91, owner: "Revenue Ops", status: "Support macro" },
      { signal: "Low language confidence", segment: "Priority markets", users: 146, owner: "Language QA", status: "Review" },
      { signal: "Enterprise seat inactivity", segment: "Teams", users: 121, owner: "Success", status: "CS outreach" }
    ],
    winback: [
      { campaign: "Return to saved chat", audience: "Dormant free", channel: "Push/email", lift: "+8%", status: "Live" },
      { campaign: "Voice minutes trial", audience: "Mobile dormant", channel: "Push", lift: "+11%", status: "Testing" },
      { campaign: "Language improvement note", audience: "Correction submitters", channel: "Email", lift: "+14%", status: "Live" },
      { campaign: "Team value recap", audience: "Enterprise admins", channel: "CS email", lift: "+6%", status: "Draft" }
    ],
    expansion: [
      { signal: "Repeated translation volume", account: "EduBridge Africa", opportunity: "Teams upgrade", owner: "Success", status: "Qualified" },
      { signal: "API quota near limit", account: "MarketUnion NG", opportunity: "Pro API pack", owner: "Sales", status: "Demo booked" },
      { signal: "Multiple creator packs", account: "Creator Desk", opportunity: "Pro plan", owner: "Growth", status: "Offer ready" },
      { signal: "Classroom workflows", account: "School pilot", opportunity: "Education plan", owner: "Partnerships", status: "Discovery" }
    ],
    guardrails: [
      "Lifecycle messaging should feel helpful and culturally respectful, not spammy or manipulative.",
      "Churn and expansion signals must not expose private chat content to sales or support.",
      "User journeys should honor consent, notification preferences, country rules, and quiet hours.",
      "Retention experiments need holdout groups so leadership can distinguish real lift from noise."
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

function adminInvestigationsData() {
  return state.adminInvestigations || {
    summary: { openCases: 18, highPriority: 5, evidenceItems: 284, legalHolds: 7, averageResolution: "2.4d" },
    cases: [
      { id: "INV-2401", case: "Suspicious admin session", surface: "Admin Console", priority: "High", owner: "Security", status: "Evidence review" },
      { id: "INV-2402", case: "Payment retry anomaly", surface: "Billing", priority: "Medium", owner: "Finance Ops", status: "Correlating logs" },
      { id: "INV-2403", case: "API key abuse pattern", surface: "Developer API", priority: "High", owner: "Trust/Security", status: "Containment" },
      { id: "INV-2404", case: "Language quality manipulation report", surface: "Community corrections", priority: "Medium", owner: "Language QA", status: "Reviewer audit" },
      { id: "INV-2405", case: "Enterprise workspace access dispute", surface: "Teams", priority: "High", owner: "Legal/Support", status: "Hold active" }
    ],
    evidenceCustody: [
      { evidence: "Admin audit log export", source: "Immutable audit stream", custodian: "Security", retention: "7 years", status: "Sealed" },
      { evidence: "Billing webhook trail", source: "Payments queue", custodian: "Finance Ops", retention: "5 years", status: "Verified" },
      { evidence: "API rate-limit trace", source: "Gateway logs", custodian: "Platform", retention: "180 days", status: "Redacted" },
      { evidence: "Reviewer correction sample", source: "Language QA queue", custodian: "Language QA", retention: "90 days", status: "Anonymized" }
    ],
    timelines: [
      { incident: "API key abuse pattern", firstSeen: "08:12", contained: "08:31", owner: "Security", status: "Post-review" },
      { incident: "Payment retry anomaly", firstSeen: "09:04", contained: "09:44", owner: "Finance Ops", status: "Monitoring" },
      { incident: "Admin session risk", firstSeen: "10:18", contained: "10:23", owner: "Security", status: "Escalated" },
      { incident: "Reviewer queue manipulation", firstSeen: "11:02", contained: "Open", owner: "Language QA", status: "Investigating" }
    ],
    legalHolds: [
      { hold: "Enterprise workspace dispute", scope: "Org audit and seat changes", owner: "Legal", expiry: "Counsel review", status: "Active" },
      { hold: "Payment anomaly review", scope: "Billing webhooks and retries", owner: "Finance/Legal", expiry: "30 days", status: "Active" },
      { hold: "Admin session investigation", scope: "Access logs and device trust", owner: "Security", expiry: "60 days", status: "Active" },
      { hold: "Community correction abuse", scope: "Reviewer actions only", owner: "Trust", expiry: "14 days", status: "Scoped" }
    ],
    handoffs: [
      { handoff: "Security to Legal", caseId: "INV-2401", requirement: "Break-glass review", status: "Queued" },
      { handoff: "Finance to Support", caseId: "INV-2402", requirement: "Customer-safe explanation", status: "Draft" },
      { handoff: "Trust to Platform", caseId: "INV-2403", requirement: "Rate-limit rule", status: "In progress" },
      { handoff: "Language QA to Community", caseId: "INV-2404", requirement: "Reviewer coaching", status: "Pending" }
    ],
    guardrails: [
      "Investigations must use least-privilege access, scoped evidence, immutable audit trails, and named case owners.",
      "Private chat content should never be opened for broad investigation without approved legal, safety, or privacy basis.",
      "Evidence exports must be redacted, sealed, and tied to retention policy, legal hold, and chain of custody.",
      "Customer-facing updates should be coordinated through Support, Legal, Security, and Communications before release."
    ]
  };
}

function adminIdentityAuthData() {
  return state.adminIdentityAuth || {
    summary: { signupsToday: 2184, loginSuccess: "98.9%", mfaCoverage: "42%", ssoOrgs: 14, recoveryQueue: 27 },
    authFunnel: [
      { step: "Account created", users: "2,184", conversion: "100%", issue: "Healthy", owner: "Growth" },
      { step: "Email verified", users: "1,934", conversion: "88.6%", issue: "Resend optimization", owner: "Identity" },
      { step: "Language Passport completed", users: "1,708", conversion: "78.2%", issue: "Mobile copy test", owner: "Product" },
      { step: "First chat started", users: "1,512", conversion: "69.2%", issue: "Onboarding nudge", owner: "Lifecycle" }
    ],
    signInHealth: [
      { surface: "Web login", attempts: "18.4K", success: "99.1%", latency: "180ms p95", status: "Healthy" },
      { surface: "Mobile login", attempts: "9.8K", success: "98.4%", latency: "220ms p95", status: "Beta watch" },
      { surface: "Google/Apple OAuth", attempts: "6.2K", success: "99.3%", latency: "310ms p95", status: "Healthy" },
      { surface: "Enterprise SSO", attempts: "1.1K", success: "97.8%", latency: "540ms p95", status: "IdP watch" }
    ],
    verification: [
      { control: "Email verification", coverage: "88.6%", queue: "250 unverified", owner: "Identity", status: "Nudge live" },
      { control: "Phone optional", coverage: "21%", queue: "SMS cost watch", owner: "Product", status: "Optional" },
      { control: "MFA/passkeys", coverage: "42%", queue: "Paid users first", owner: "Security", status: "Rolling out" },
      { control: "Enterprise SCIM", coverage: "6 orgs", queue: "8 requested", owner: "Enterprise", status: "Design" }
    ],
    recovery: [
      { flow: "Password reset", volume: 84, median: "2m", risk: "Low", status: "Healthy" },
      { flow: "Locked account", volume: 27, median: "18m", risk: "Medium", status: "Support queue" },
      { flow: "Lost MFA", volume: 6, median: "4h", risk: "High", status: "Manual review" },
      { flow: "Enterprise seat transfer", volume: 12, median: "1h", risk: "Medium", status: "Admin approval" }
    ],
    sessionRisk: [
      { signal: "Impossible travel", count: 9, action: "Step-up challenge", owner: "Security", status: "Active" },
      { signal: "Repeated failed login", count: 42, action: "Rate limit", owner: "Identity", status: "Mitigating" },
      { signal: "Shared device login", count: 118, action: "Device trust prompt", owner: "Security", status: "Monitoring" },
      { signal: "Admin session expiry", count: 0, action: "60-min enforcement", owner: "Platform", status: "Healthy" }
    ],
    guardrails: [
      "Identity workflows must protect users without making low-connectivity markets feel punished.",
      "Account recovery requires proof checks, audit logs, rate limits, and clear support handoffs.",
      "Enterprise SSO/SCIM should never bypass Lumora role scopes, tenant boundaries, or audit requirements.",
      "Authentication dashboards must show aggregate health and risk, not passwords, secrets, or raw private identifiers."
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

function adminConversationsData() {
  return state.adminConversations || {
    summary: { activeChats: "42.8K", streamSuccess: "99.2%", failedResponses: 128, attachmentQueue: 37, privacyReplays: 6 },
    chatHealth: [
      { surface: "Web chat", active: "24.1K", p95: "640ms", issue: "Healthy", status: "Live" },
      { surface: "Mobile chat", active: "14.8K", p95: "720ms", issue: "Beta latency watch", status: "Watch" },
      { surface: "Voice Circle", active: "2.6K", p95: "1.6s", issue: "Speech queue", status: "Mitigating" },
      { surface: "Teams workspace", active: "1.3K", p95: "690ms", issue: "Tenant policy sync", status: "Healthy" }
    ],
    messageQueues: [
      { queue: "Streaming responses", depth: 284, oldest: "9s", owner: "Platform", status: "Normal" },
      { queue: "Failed generation retry", depth: 128, oldest: "4m", owner: "AI Ops", status: "Watch" },
      { queue: "Attachment processing", depth: 37, oldest: "11m", owner: "Knowledge Ops", status: "Review" },
      { queue: "Voice transcript handoff", depth: 92, oldest: "2m", owner: "Voice Ops", status: "Busy" }
    ],
    failureReasons: [
      { reason: "Model timeout", count: 54, route: "Fallback chain", owner: "AI Ops", status: "Mitigating" },
      { reason: "Policy refusal appeal", count: 21, route: "Trust review", owner: "Safety", status: "Review" },
      { reason: "Attachment parse failed", count: 37, route: "Retry parser", owner: "Knowledge Ops", status: "Queued" },
      { reason: "Network interruption", count: 16, route: "Client retry", owner: "Frontend/Mobile", status: "Design" }
    ],
    replayControls: [
      { control: "Privacy-safe transcript replay", coverage: "Admin only", access: "Case scoped", owner: "Privacy", status: "Restricted" },
      { control: "Prompt/response redaction", coverage: "PII + secrets", access: "Automated", owner: "Security", status: "Live" },
      { control: "Conversation export", coverage: "User requested", access: "Privacy workflow", owner: "Privacy Ops", status: "Ready" },
      { control: "Support summary view", coverage: "Metadata + user notes", access: "Support role", owner: "Support", status: "Live" }
    ],
    experienceSignals: [
      { signal: "First token delay", segment: "Fresh chat", score: "0.7s", trend: "-8%", status: "Healthy" },
      { signal: "Composer abandonment", segment: "Mobile", score: "6.4%", trend: "-2%", status: "Improving" },
      { signal: "Language switch success", segment: "Code-switch chats", score: "91%", trend: "+5%", status: "Healthy" },
      { signal: "Retry satisfaction", segment: "Failed response recovery", score: "78%", trend: "+3%", status: "Watch" }
    ],
    guardrails: [
      "Conversation operations should monitor aggregate health without exposing private chat content by default.",
      "Support and admin replay must be case-scoped, redacted, audited, and justified by privacy, safety, or user request.",
      "Failed responses should preserve trust with graceful retry, fallback routing, and clear user-facing recovery.",
      "Mobile and web chat health should track latency, streaming quality, attachment processing, voice handoff, and language switching."
    ]
  };
}

function adminPromptWorkflowsData() {
  return state.adminPromptWorkflows || {
    summary: { promptSets: 22, liveWorkflows: 14, testsRunning: 6, rollbacksReady: 9, reviewBlockers: 3 },
    promptSets: [
      { set: "Core chat system", surface: "AI Chat", version: "v1.6", owner: "Product AI", status: "Live" },
      { set: "Market reply style", surface: "Market Mode", version: "v1.2", owner: "Growth", status: "Testing" },
      { set: "Classroom explanation", surface: "Classroom", version: "v0.9", owner: "Education", status: "Review" },
      { set: "Creator captions", surface: "Creator Studio", version: "v1.1", owner: "Creator Ops", status: "Live" },
      { set: "Voice Circle handoff", surface: "Voice", version: "v0.7", owner: "Voice Ops", status: "Beta" }
    ],
    workflowTemplates: [
      { workflow: "Translate with tone", trigger: "Translate mode", steps: 4, owner: "Language QA", status: "Live" },
      { workflow: "Market reply", trigger: "Prompt chip", steps: 5, owner: "Growth", status: "Live" },
      { workflow: "Teach me simply", trigger: "Classroom mode", steps: 6, owner: "Education", status: "Review" },
      { workflow: "Correct tone", trigger: "Message tool", steps: 3, owner: "Language QA", status: "Testing" }
    ],
    testResults: [
      { test: "Yoruba/Pidgin market tone", segment: "Nigeria", passRate: "91%", regression: "Low", status: "Pass" },
      { test: "Swahili classroom clarity", segment: "Kenya/Tanzania", passRate: "86%", regression: "Medium", status: "Watch" },
      { test: "Arabic/French code-switch", segment: "North Africa", passRate: "74%", regression: "Medium", status: "Review" },
      { test: "Creator caption safety", segment: "Creators", passRate: "89%", regression: "Low", status: "Pass" }
    ],
    rollbackControls: [
      { control: "Prompt version rollback", coverage: "22 sets", owner: "Product AI", eta: "Instant", status: "Ready" },
      { control: "Workflow kill switch", coverage: "14 workflows", owner: "Platform", eta: "Instant", status: "Ready" },
      { control: "Country rollout throttle", coverage: "Priority markets", owner: "Growth", eta: "5 min", status: "Ready" },
      { control: "Safety template freeze", coverage: "High-risk routes", owner: "Trust", eta: "Manual", status: "Review" }
    ],
    reviewQueues: [
      { queue: "Native language review", count: 96, owner: "Language QA", sla: "48h", status: "Busy" },
      { queue: "Safety and refusal copy", count: 31, owner: "Trust", sla: "5d", status: "Watch" },
      { queue: "Localization fit", count: 52, owner: "Localization", sla: "Release gate", status: "Testing" },
      { queue: "Enterprise prompt requests", count: 11, owner: "Success", sla: "QBR", status: "Scoping" }
    ],
    guardrails: [
      "Every prompt and workflow template needs an owner, version, test evidence, rollback path, and release status.",
      "Country, language, dialect, and tone changes should pass native review before broad rollout.",
      "High-risk advice, safety refusals, and enterprise templates require Trust/Legal approval before production.",
      "Prompt governance should show metadata, tests, and decisions without exposing raw private user prompts."
    ]
  };
}

function adminCustomerExperienceData() {
  return state.adminCustomerExperience || {
    summary: { nps: 48, csat: "4.6", feedbackItems: 1284, appRating: "4.7", productInsights: 36 },
    sentimentThemes: [
      { theme: "Natural local tone", volume: 384, sentiment: "Positive", owner: "Language QA", status: "Strength" },
      { theme: "Mobile composer polish", volume: 172, sentiment: "Mixed", owner: "Product Design", status: "Improving" },
      { theme: "Voice latency", volume: 91, sentiment: "Negative", owner: "Voice Ops", status: "Watch" },
      { theme: "Plan limits clarity", volume: 138, sentiment: "Mixed", owner: "Growth", status: "Copy review" },
      { theme: "Translation confidence", volume: 212, sentiment: "Positive", owner: "AI QA", status: "Monitor" }
    ],
    feedbackChannels: [
      { channel: "In-app feedback", items: 624, topSignal: "Tone quality", owner: "Product", status: "Active" },
      { channel: "Support tickets", items: 184, topSignal: "Account and billing", owner: "Support", status: "SLA watch" },
      { channel: "App store reviews", items: 238, topSignal: "Mobile UX", owner: "Mobile", status: "Beta review" },
      { channel: "Community corrections", items: 312, topSignal: "Dialect nuance", owner: "Language QA", status: "Reviewer queue" },
      { channel: "Enterprise QBRs", items: 21, topSignal: "Workspace controls", owner: "Success", status: "Roadmap input" }
    ],
    productInsights: [
      { insight: "Users love code-switching when tone stays natural", evidence: "384 positive mentions", owner: "Language QA", action: "Expand eval samples" },
      { insight: "Mobile composer still feels heavy on small screens", evidence: "172 mixed mentions", owner: "Design", action: "Compact composer pass" },
      { insight: "Voice Circle value is clear, latency hurts trust", evidence: "91 negative mentions", owner: "Voice Ops", action: "Latency sprint" },
      { insight: "Teams buyers need clearer admin/user separation", evidence: "8 QBR notes", owner: "Enterprise", action: "Admin docs" }
    ],
    appStoreSignals: [
      { surface: "iOS beta", rating: "4.6", reviews: 86, theme: "Beautiful UI, voice latency", status: "Monitor" },
      { surface: "Android beta", rating: "4.7", reviews: 112, theme: "Language choices, mobile polish", status: "Improving" },
      { surface: "Mobile web", rating: "4.5", reviews: 40, theme: "Fast start, composer sizing", status: "Design follow-up" },
      { surface: "Desktop web", rating: "4.8", reviews: 64, theme: "Clean chat and sidebar", status: "Strong" }
    ],
    escalationReasons: [
      { reason: "Wrong dialect or too formal", count: 118, owner: "Language QA", status: "Native review" },
      { reason: "Payment or plan confusion", count: 42, owner: "Revenue Support", status: "Macro update" },
      { reason: "Account access", count: 58, owner: "Support", status: "SLA watch" },
      { reason: "Model answer uncertainty", count: 37, owner: "AI QA", status: "Eval sample" }
    ],
    guardrails: [
      "Customer experience dashboards should aggregate feedback and never expose private chat contents to broad operators.",
      "Negative sentiment must route to an accountable owner with a product, support, language, or reliability action.",
      "Feedback from African language communities should be reviewed with native speakers before becoming product policy.",
      "Leadership should compare NPS, CSAT, retention, support volume, and language quality together before making roadmap calls."
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

function pipelineRow(item) {
  return `<div class="table-row"><strong>${item.pipeline}</strong><span>${item.repo}</span><span>${item.duration}</span><span>${item.status}</span></div>`;
}

function environmentRow(item) {
  return `<div class="table-row"><strong>${item.environment}</strong><span>${item.branch}</span><span>${item.freshness}</span><span>${item.status}</span></div>`;
}

function qualityGateRow(item) {
  return `<div class="table-row"><strong>${item.gate}</strong><span>${item.coverage}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function deployAutomationRow(item) {
  return `<div class="table-row"><strong>${item.automation}</strong><span>${item.trigger}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function developerToolRow(item) {
  return `<div class="table-row"><strong>${item.tool}</strong><span>${item.audience}</span><span>${item.adoption}</span><span>${item.status}</span></div>`;
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

function recoveryObjectiveRow(item) {
  return `<div class="table-row"><strong>${item.service}</strong><span>RTO ${item.rto}</span><span>RPO ${item.rpo}</span><span>${item.status}</span></div>`;
}

function backupAssetRow(item) {
  return `<div class="table-row"><strong>${item.asset}</strong><span>${item.cadence}</span><span>${item.lastRestore}</span><span>${item.status}</span></div>`;
}

function continuityRiskRow(item) {
  return `<div class="table-row"><strong>${item.risk}</strong><span>${item.impact}</span><span>${item.mitigation}</span><span>${item.status}</span></div>`;
}

function incidentCommandRow(item) {
  return `<div class="table-row"><strong>${item.role}</strong><span>${item.primary}</span><span>${item.backup}</span><span>${item.status}</span></div>`;
}

function regionalFallbackRow(item) {
  return `<div class="table-row"><strong>${item.region}</strong><span>${item.fallback}</span><span>${item.dependency}</span><span>${item.status}</span></div>`;
}

function sloObjectiveRow(item) {
  return `<div class="table-row"><strong>${item.objective}</strong><span>${item.current} / ${item.target}</span><span>${item.window}</span><span>${item.status}</span></div>`;
}

function errorBudgetRow(item) {
  return `<div class="table-row"><strong>${item.service}</strong><span>${item.budget}</span><span>${item.burnRate}</span><span>${item.status}</span></div>`;
}

function regionalReliabilityRow(item) {
  return `<div class="table-row"><strong>${item.region}</strong><span>${item.uptime}</span><span>${item.latency}</span><span>${item.status}</span></div>`;
}

function statusPageRow(item) {
  return `<div class="table-row"><strong>${item.item}</strong><span>${item.audience}</span><span>${item.readiness}</span><span>${item.status}</span></div>`;
}

function logStreamRow(item) {
  return `<div class="table-row"><strong>${item.stream}</strong><span>${item.volume}</span><span>${item.redaction}</span><span>${item.status}</span></div>`;
}

function traceServiceRow(item) {
  return `<div class="table-row"><strong>${item.service}</strong><span>${item.p95}</span><span>${item.sampleRate}</span><span>${item.status}</span></div>`;
}

function alertRouteRow(item) {
  return `<div class="table-row"><strong>${item.alert}</strong><span>${item.route}</span><span>${item.threshold}</span><span>${item.status}</span></div>`;
}

function observabilityIncidentRow(item) {
  return `<div class="table-row"><strong>${item.incident}</strong><span>${item.signal}</span><span>${item.eta}</span><span>${item.status}</span></div>`;
}

function observabilityDashboardRow(item) {
  return `<div class="table-row"><strong>${item.dashboard}</strong><span>${item.audience}</span><span>${item.freshness}</span><span>${item.status}</span></div>`;
}

function capacityForecastRow(item) {
  return `<div class="table-row"><strong>${item.forecast}</strong><span>${item.surface}</span><span>${item.expectedLift}</span><span>${item.status}</span></div>`;
}

function computePoolRow(item) {
  return `<div class="table-row"><strong>${item.pool}</strong><span>${item.region}</span><span>${item.headroom}</span><span>${item.status}</span></div>`;
}

function storageCapacityRow(item) {
  return `<div class="table-row"><strong>${item.store}</strong><span>${item.area}</span><span>${item.headroom}</span><span>${item.status}</span></div>`;
}

function scalingPlanRow(item) {
  return `<div class="table-row"><strong>${item.plan}</strong><span>${item.owner}</span><span>${item.eta}</span><span>${item.status}</span></div>`;
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

function warehousePipelineRow(item) {
  return `<div class="table-row"><strong>${item.pipeline}</strong><span>${item.source}</span><span>${item.freshness}</span><span>${item.status}</span></div>`;
}

function warehouseDatasetRow(item) {
  return `<div class="table-row"><strong>${item.dataset}</strong><span>${item.domain}</span><span>${item.classification}</span><span>${item.status}</span></div>`;
}

function metricDefinitionRow(item) {
  return `<div class="table-row"><strong>${item.metric}</strong><span>${item.owner}</span><span>${item.definition}</span><span>${item.status}</span></div>`;
}

function lineageRow(item) {
  return `<div class="table-row"><strong>${item.asset}</strong><span>${item.upstream}</span><span>${item.downstream}</span><span>${item.status}</span></div>`;
}

function biAccessRow(item) {
  return `<div class="table-row"><strong>${item.group}</strong><span>${item.users} users</span><span>${item.datasets}</span><span>${item.status}</span></div>`;
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

function notificationChannelRow(item) {
  return `<div class="table-row"><strong>${item.channel}</strong><span>${item.provider}</span><span>${item.success} / ${item.latency}</span><span>${item.status}</span></div>`;
}

function consentSegmentRow(item) {
  return `<div class="table-row"><strong>${item.segment}</strong><span>${item.optIn}</span><span>${item.channels}</span><span>${item.status}</span></div>`;
}

function quietHourRow(item) {
  return `<div class="table-row"><strong>${item.market}</strong><span>${item.window}</span><span>${item.blocked} blocked</span><span>${item.status}</span></div>`;
}

function failoverRuleRow(item) {
  return `<div class="table-row"><strong>${item.rule}</strong><span>${item.fallback}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function notificationIncidentRow(item) {
  return `<div class="table-row"><strong>${item.incident}</strong><span>${item.impact}</span><span>${item.eta}</span><span>${item.status}</span></div>`;
}

function languageCoverageRow(item) {
  return `<div class="table-row"><strong>${item.language}</strong><span>${item.countries}</span><span>${item.readiness} / ${item.confidence}</span><span>${item.owner}</span></div>`;
}

function dialectQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.language}</span><span>${item.priority}</span></div>`;
}

function reviewerRegionRow(item) {
  return `<div class="table-row"><strong>${item.region}</strong><span>${item.reviewers} reviewers</span><span>${item.languages}</span><span>${item.backlog} backlog</span></div>`;
}

function languageBenchmarkRow(item) {
  return `<div class="table-row"><strong>${item.benchmark}</strong><span>${item.score}</span><span>${item.gap}</span><span>${item.owner}</span></div>`;
}

function toneSegmentRow(item) {
  return `<div class="table-row"><strong>${item.segment}</strong><span>${item.languages}</span><span>${item.score}</span><span>${item.status}</span></div>`;
}

function dialectParityRow(item) {
  return `<div class="table-row"><strong>${item.market}</strong><span>${item.dialects}</span><span>${item.parity}</span><span>${item.status}</span></div>`;
}

function culturalReviewQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.owner} / ${item.sla}</span><span>${item.status}</span></div>`;
}

function reviewerCalibrationRow(item) {
  return `<div class="table-row"><strong>${item.calibration}</strong><span>${item.reviewers} reviewers</span><span>${item.agreement}</span><span>${item.status}</span></div>`;
}

function culturalRiskSignalRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.severity}</span><span>${item.affected}</span><span>${item.status}</span></div>`;
}

function reviewerNetworkRegionRow(item) {
  return `<div class="table-row"><strong>${item.region}</strong><span>${item.reviewers} reviewers</span><span>${item.capacity}</span><span>${item.status}</span></div>`;
}

function languageReviewQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.language}</span><span>${item.status}</span></div>`;
}

function calibrationPanelRow(item) {
  return `<div class="table-row"><strong>${item.panel}</strong><span>${item.reviewers} reviewers</span><span>${item.agreement}</span><span>${item.status}</span></div>`;
}

function reviewerQualityMetricRow(item) {
  return `<div class="table-row"><strong>${item.metric}</strong><span>${item.value}</span><span>${item.target}</span><span>${item.status}</span></div>`;
}

function reviewerOnboardingRow(item) {
  return `<div class="table-row"><strong>${item.stage}</strong><span>${item.candidates} candidates</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function correctionIntakeRow(item) {
  return `<div class="table-row"><strong>${item.source}</strong><span>${item.volume}</span><span>${item.signal}</span><span>${item.status}</span></div>`;
}

function correctionPipelineRow(item) {
  return `<div class="table-row"><strong>${item.stage}</strong><span>${item.items} items</span><span>${item.gate}</span><span>${item.status}</span></div>`;
}

function correctionDecisionRow(item) {
  return `<div class="table-row"><strong>${item.decision}</strong><span>${item.share}</span><span>${item.action}</span><span>${item.status}</span></div>`;
}

function improvementImpactRow(item) {
  return `<div class="table-row"><strong>${item.language}</strong><span>${item.evalLift}</span><span>${item.correctedIssues}</span><span>${item.status}</span></div>`;
}

function trainingEligibilityRow(item) {
  return `<div class="table-row"><strong>${item.bucket}</strong><span>${item.count} samples</span><span>${item.rule}</span><span>${item.status}</span></div>`;
}

function releaseHandoffRow(item) {
  return `<div class="table-row"><strong>${item.handoff}</strong><span>${item.target}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function speechRouteRow(item) {
  return `<div class="table-row"><strong>${item.route}</strong><span>${item.languages}</span><span>${item.use}</span><span>${item.status}</span></div>`;
}

function accentCoverageRow(item) {
  return `<div class="table-row"><strong>${item.market}</strong><span>${item.languages}</span><span>${item.noisyAccuracy}</span><span>${item.status}</span></div>`;
}

function mobileCaptureRow(item) {
  return `<div class="table-row"><strong>${item.surface}</strong><span>${item.readiness}</span><span>${item.blocker}</span><span>${item.status}</span></div>`;
}

function voiceConsentRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.coverage}</span><span>${item.surface}</span><span>${item.status}</span></div>`;
}

function voiceQualityMetricRow(item) {
  return `<div class="table-row"><strong>${item.metric}</strong><span>${item.value}</span><span>${item.target}</span><span>${item.status}</span></div>`;
}

function voiceReviewQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.language}</span><span>${item.status}</span></div>`;
}

function translationRouteRow(item) {
  return `<div class="table-row"><strong>${item.route}</strong><span>${item.pairs}</span><span>${item.quality}</span><span>${item.status}</span></div>`;
}

function translationPairRow(item) {
  return `<div class="table-row"><strong>${item.pair}</strong><span>${item.volume}</span><span>${item.preservation}</span><span>${item.status}</span></div>`;
}

function translationSurfaceRow(item) {
  return `<div class="table-row"><strong>${item.surface}</strong><span>${item.requests}</span><span>${item.segment}</span><span>${item.status}</span></div>`;
}

function translationRiskRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.language}</span><span>${item.status}</span></div>`;
}

function translationControlRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.coverage}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function creatorContentModeRow(item) {
  return `<div class="table-row"><strong>${item.mode}</strong><span>${item.volume}</span><span>${item.quality}</span><span>${item.status}</span></div>`;
}

function creatorTemplateRow(item) {
  return `<div class="table-row"><strong>${item.template}</strong><span>${item.usage}</span><span>${item.conversion}</span><span>${item.status}</span></div>`;
}

function creatorSafetyRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.rate}</span><span>${item.action}</span><span>${item.status}</span></div>`;
}

function creatorFunnelRow(item) {
  return `<div class="table-row"><strong>${item.funnel}</strong><span>${item.users}</span><span>${item.conversion}</span><span>${item.status}</span></div>`;
}

function creatorQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.priority}</span><span>${item.status}</span></div>`;
}

function classroomModeRow(item) {
  return `<div class="table-row"><strong>${item.mode}</strong><span>${item.sessions}</span><span>${item.quality}</span><span>${item.status}</span></div>`;
}

function classroomCoverageRow(item) {
  return `<div class="table-row"><strong>${item.subject}</strong><span>${item.coverage}</span><span>${item.markets}</span><span>${item.status}</span></div>`;
}

function classroomPedagogyRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.score}</span><span>${item.action}</span><span>${item.status}</span></div>`;
}

function classroomSafetyRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.subject}</span><span>${item.status}</span></div>`;
}

function classroomPartnershipRow(item) {
  return `<div class="table-row"><strong>${item.partner}</strong><span>${item.learners}</span><span>${item.market}</span><span>${item.status}</span></div>`;
}

function marketBusinessModeRow(item) {
  return `<div class="table-row"><strong>${item.mode}</strong><span>${item.sessions}</span><span>${item.quality}</span><span>${item.status}</span></div>`;
}

function marketConversionRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.rate}</span><span>${item.lever}</span><span>${item.status}</span></div>`;
}

function marketRiskRow(item) {
  return `<div class="table-row"><strong>${item.risk}</strong><span>${item.rate}</span><span>${item.mitigation}</span><span>${item.status}</span></div>`;
}

function marketTemplateRow(item) {
  return `<div class="table-row"><strong>${item.template}</strong><span>${item.usage}</span><span>${item.outcome}</span><span>${item.status}</span></div>`;
}

function marketUpgradeRow(item) {
  return `<div class="table-row"><strong>${item.plan}</strong><span>${item.businessUsers}</span><span>${item.upgradeIntent}</span><span>${item.status}</span></div>`;
}

function multimodalRouteRow(item) {
  return `<div class="table-row"><strong>${item.route}</strong><span>${item.volume}</span><span>${item.quality}</span><span>${item.status}</span></div>`;
}

function multimodalSafetyRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.count} items</span><span>${item.action}</span><span>${item.status}</span></div>`;
}

function multimodalQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.latency}</span><span>${item.status}</span></div>`;
}

function multimodalStorageRow(item) {
  return `<div class="table-row"><strong>${item.bucket}</strong><span>${item.retention}</span><span>${item.volume}</span><span>${item.status}</span></div>`;
}

function multimodalDeviceRow(item) {
  return `<div class="table-row"><strong>${item.device}</strong><span>${item.uploadSuccess}</span><span>${item.issue}</span><span>${item.status}</span></div>`;
}

function searchRouteRow(item) {
  return `<div class="table-row"><strong>${item.route}</strong><span>${item.volume}</span><span>${item.freshness}</span><span>${item.status}</span></div>`;
}

function searchSourceRow(item) {
  return `<div class="table-row"><strong>${item.source}</strong><span>${item.coverage}</span><span>${item.risk}</span><span>${item.status}</span></div>`;
}

function searchCitationRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.rate}</span><span>${item.target}</span><span>${item.status}</span></div>`;
}

function searchControlRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.coverage}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function searchFreshnessRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.priority}</span><span>${item.status}</span></div>`;
}

function workspaceHealthRow(item) {
  return `<div class="table-row"><strong>${item.workspace}</strong><span>${item.members}</span><span>${item.projects}</span><span>${item.status}</span></div>`;
}

function workspaceActivityRow(item) {
  return `<div class="table-row"><strong>${item.activity}</strong><span>${item.volume}</span><span>${item.risk}</span><span>${item.status}</span></div>`;
}

function workspacePermissionRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.coverage}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function workspaceFileRow(item) {
  return `<div class="table-row"><strong>${item.class}</strong><span>${item.count}</span><span>${item.retention}</span><span>${item.status}</span></div>`;
}

function workspaceSyncRow(item) {
  return `<div class="table-row"><strong>${item.surface}</strong><span>${item.success}</span><span>${item.p95}</span><span>${item.status}</span></div>`;
}

function passportFunnelRow(item) {
  return `<div class="table-row"><strong>${item.step}</strong><span>${item.users}</span><span>${item.conversion}</span><span>${item.owner}</span></div>`;
}

function passportFieldQualityRow(item) {
  return `<div class="table-row"><strong>${item.field}</strong><span>${item.coverage}</span><span>${item.quality}</span><span>${item.status}</span></div>`;
}

function passportLanguagePairRow(item) {
  return `<div class="table-row"><strong>${item.pair}</strong><span>${item.users}</span><span>${item.quality}</span><span>${item.status}</span></div>`;
}

function passportSurfaceRow(item) {
  return `<div class="table-row"><strong>${item.surface}</strong><span>${item.usage}</span><span>${item.signal}</span><span>${item.status}</span></div>`;
}

function passportConsentRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.coverage}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function passportRiskRow(item) {
  return `<div class="table-row"><strong>${item.risk}</strong><span>${item.impact}</span><span>${item.mitigation}</span><span>${item.status}</span></div>`;
}

function localizationReadinessRow(item) {
  return `<div class="table-row"><strong>${item.locale}</strong><span>${item.surface}</span><span>${item.completion}</span><span>${item.status}</span></div>`;
}

function localizationQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} strings</span><span>${item.surface}</span><span>${item.status}</span></div>`;
}

function glossaryTermRow(item) {
  return `<div class="table-row"><strong>${item.term}</strong><span>${item.treatment}</span><span>${item.languages}</span><span>${item.status}</span></div>`;
}

function localizationReviewerRow(item) {
  return `<div class="table-row"><strong>${item.workflow}</strong><span>${item.reviewers} reviewers</span><span>${item.backlog} backlog</span><span>${item.status}</span></div>`;
}

function localizationReleaseRow(item) {
  return `<div class="table-row"><strong>${item.check}</strong><span>${item.surface}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function retentionPolicyRow(item) {
  return `<div class="table-row"><strong>${item.policy}</strong><span>${item.scope}</span><span>${item.duration}</span><span>${item.status}</span></div>`;
}

function consentControlRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.coverage}</span><span>${item.surface}</span><span>${item.owner}</span></div>`;
}

function residencyRow(item) {
  return `<div class="table-row"><strong>${item.region}</strong><span>${item.data}</span><span>${item.status}</span><span>${item.owner}</span></div>`;
}

function privacyRequestRow(item) {
  return `<div class="table-row"><strong>${item.request}</strong><span>${item.count} open</span><span>${item.sla}</span><span>${item.status}</span></div>`;
}

function memorySurfaceRow(item) {
  return `<div class="table-row"><strong>${item.surface}</strong><span>${item.data}</span><span>${item.control}</span><span>${item.status}</span></div>`;
}

function memoryUserControlRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.availability}</span><span>${item.friction}</span><span>${item.status}</span></div>`;
}

function personalizationQualityRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.segment}</span><span>${item.score} / ${item.trend}</span><span>${item.status}</span></div>`;
}

function memoryRiskReviewRow(item) {
  return `<div class="table-row"><strong>${item.review}</strong><span>${item.risk}</span><span>${item.mitigation}</span><span>${item.status}</span></div>`;
}

function privacyOpsRequestRow(item) {
  return `<div class="table-row"><strong>${item.type}</strong><span>${item.region}</span><span>${item.count} open</span><span>${item.status}</span></div>`;
}

function privacyExportRow(item) {
  return `<div class="table-row"><strong>${item.package}</strong><span>${item.system}</span><span>${item.readiness}</span><span>${item.status}</span></div>`;
}

function privacyDeletionRow(item) {
  return `<div class="table-row"><strong>${item.workflow}</strong><span>${item.dependencies}</span><span>${item.blockers}</span><span>${item.status}</span></div>`;
}

function privacyHoldRow(item) {
  return `<div class="table-row"><strong>${item.hold}</strong><span>${item.scope}</span><span>${item.expires}</span><span>${item.status}</span></div>`;
}

function privacyResidencyRow(item) {
  return `<div class="table-row"><strong>${item.market}</strong><span>${item.data}</span><span>${item.requirement}</span><span>${item.status}</span></div>`;
}

function dpiaAssessmentRow(item) {
  return `<div class="table-row"><strong>${item.assessment}</strong><span>${item.surface}</span><span>${item.risk}</span><span>${item.status}</span></div>`;
}

function highRiskProcessingRow(item) {
  return `<div class="table-row"><strong>${item.process}</strong><span>${item.data}</span><span>${item.lawfulBasis}</span><span>${item.status}</span></div>`;
}

function dpiaMitigationRow(item) {
  return `<div class="table-row"><strong>${item.mitigation}</strong><span>${item.risk}</span><span>${item.due}</span><span>${item.status}</span></div>`;
}

function dpiaApprovalRow(item) {
  return `<div class="table-row"><strong>${item.gate}</strong><span>${item.approver}</span><span>${item.evidence}</span><span>${item.decision}</span></div>`;
}

function residualRiskRow(item) {
  return `<div class="table-row"><strong>${item.risk}</strong><span>${item.severity}</span><span>${item.review}</span><span>${item.status}</span></div>`;
}

function regionPostureRow(item) {
  return `<div class="table-row"><strong>${item.region}</strong><span>${item.primary}</span><span>${item.dataClass}</span><span>${item.status}</span></div>`;
}

function transferReviewRow(item) {
  return `<div class="table-row"><strong>${item.review}</strong><span>${item.market}</span><span>${item.risk}</span><span>${item.status}</span></div>`;
}

function dataStoreResidencyRow(item) {
  return `<div class="table-row"><strong>${item.store}</strong><span>${item.class}</span><span>${item.residency}</span><span>${item.status}</span></div>`;
}

function keyCustodyRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.coverage}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function retentionControlRow(item) {
  return `<div class="table-row"><strong>${item.policy}</strong><span>${item.window}</span><span>${item.exceptions} exceptions</span><span>${item.status}</span></div>`;
}

function integrationServiceRow(item) {
  return `<div class="table-row"><strong>${item.service}</strong><span>${item.category}</span><span>${item.status}</span><span>${item.owner}</span></div>`;
}

function integrationWebhookRow(item) {
  return `<div class="table-row"><strong>${item.event}</strong><span>${item.destination}</span><span>${item.retries} retries</span><span>${item.status}</span></div>`;
}

function partnerIntegrationRow(item) {
  return `<div class="table-row"><strong>${item.partner}</strong><span>${item.integration}</span><span>${item.usage}</span><span>${item.status}</span></div>`;
}

function secretRotationRow(item) {
  return `<div class="table-row"><strong>${item.secret}</strong><span>${item.owner}</span><span>${item.rotation}</span><span>${item.status}</span></div>`;
}

function webDeploymentRow(item) {
  return `<div class="table-row"><strong>${item.release}</strong><span>${item.environment}</span><span>${item.rollout}</span><span>${item.status}</span></div>`;
}

function webPerformanceRow(item) {
  return `<div class="table-row"><strong>${item.surface}</strong><span>${item.p95}</span><span>${item.coreVitals}</span><span>${item.status}</span></div>`;
}

function browserCoverageRow(item) {
  return `<div class="table-row"><strong>${item.browser}</strong><span>${item.coverage}</span><span>${item.market}</span><span>${item.status}</span></div>`;
}

function webAccessibilityRow(item) {
  return `<div class="table-row"><strong>${item.area}</strong><span>${item.coverage}</span><span>${item.impact}</span><span>${item.status}</span></div>`;
}

function webFeatureFlagRow(item) {
  return `<div class="table-row"><strong>${item.flag}</strong><span>${item.surface}</span><span>${item.rollout}</span><span>${item.status}</span></div>`;
}

function telemetryPipelineRow(item) {
  return `<div class="table-row"><strong>${item.pipeline}</strong><span>${item.surface}</span><span>${item.volume}</span><span>${item.status}</span></div>`;
}

function telemetrySchemaRow(item) {
  return `<div class="table-row"><strong>${item.event}</strong><span>${item.owner}</span><span>${item.coverage}</span><span>${item.status}</span></div>`;
}

function telemetryPrivacyRow(item) {
  return `<div class="table-row"><strong>${item.filter}</strong><span>${item.surface}</span><span>${item.coverage}</span><span>${item.status}</span></div>`;
}

function telemetryAnomalyRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.surface}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function telemetryDashboardRow(item) {
  return `<div class="table-row"><strong>${item.dashboard}</strong><span>${item.source}</span><span>${item.freshness}</span><span>${item.status}</span></div>`;
}

function statusSurfaceRow(item) {
  return `<div class="table-row"><strong>${item.surface}</strong><span>${item.audience}</span><span>${item.uptime}</span><span>${item.status}</span></div>`;
}

function statusIncidentRow(item) {
  return `<div class="table-row"><strong>${item.incident}</strong><span>${item.impact}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function maintenanceWindowRow(item) {
  return `<div class="table-row"><strong>${item.window}</strong><span>${item.surface}</span><span>${item.time}</span><span>${item.status}</span></div>`;
}

function statusCommunicationRow(item) {
  return `<div class="table-row"><strong>${item.channel}</strong><span>${item.audience}</span><span>${item.cadence}</span><span>${item.status}</span></div>`;
}

function postmortemRow(item) {
  return `<div class="table-row"><strong>${item.report}</strong><span>${item.incident}</span><span>${item.due}</span><span>${item.status}</span></div>`;
}

function incidentCommandRow(item) {
  return `<div class="table-row"><strong>${item.role}</strong><span>${item.primary}</span><span>${item.backup}</span><span>${item.status}</span></div>`;
}

function activeIncidentResponseRow(item) {
  return `<div class="table-row"><strong>${item.incident}</strong><span>${item.surface}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function severityLaneRow(item) {
  return `<div class="table-row"><strong>${item.lane}</strong><span>${item.trigger}</span><span>${item.response}</span><span>${item.status}</span></div>`;
}

function rollbackCheckRow(item) {
  return `<div class="table-row"><strong>${item.system}</strong><span>${item.readiness}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function incidentCommunicationRow(item) {
  return `<div class="table-row"><strong>${item.channel}</strong><span>${item.audience}</span><span>${item.cadence}</span><span>${item.status}</span></div>`;
}

function incidentPostmortemRow(item) {
  return `<div class="table-row"><strong>${item.report}</strong><span>${item.rootCause}</span><span>${item.due}</span><span>${item.status}</span></div>`;
}

function metricHealthRow(item) {
  return `<div class="table-row"><strong>${item.metric}</strong><span>${item.source}</span><span>${item.freshness}</span><span>${item.status}</span></div>`;
}

function freshnessMonitorRow(item) {
  return `<div class="table-row"><strong>${item.pipeline}</strong><span>${item.target}</span><span>${item.current}</span><span>${item.status}</span></div>`;
}

function reconciliationRow(item) {
  return `<div class="table-row"><strong>${item.check}</strong><span>${item.gap}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function lineageRow(item) {
  return `<div class="table-row"><strong>${item.dataset}</strong><span>${item.upstream}</span><span>${item.coverage}</span><span>${item.status}</span></div>`;
}

function dataQualityIncidentRow(item) {
  return `<div class="table-row"><strong>${item.incident}</strong><span>${item.impact}</span><span>${item.eta}</span><span>${item.status}</span></div>`;
}

function consentSurfaceRow(item) {
  return `<div class="table-row"><strong>${item.surface}</strong><span>${item.audience}</span><span>${item.coverage}</span><span>${item.status}</span></div>`;
}

function trainingEligibilityRow(item) {
  return `<div class="table-row"><strong>${item.dataset}</strong><span>${item.eligible}</span><span>${item.blocker}</span><span>${item.status}</span></div>`;
}

function consentWithdrawalRow(item) {
  return `<div class="table-row"><strong>${item.request}</strong><span>${item.region}</span><span>${item.sla}</span><span>${item.status}</span></div>`;
}

function consentPolicyRow(item) {
  return `<div class="table-row"><strong>${item.policy}</strong><span>${item.surface}</span><span>${item.coverage}</span><span>${item.status}</span></div>`;
}

function consentAuditRow(item) {
  return `<div class="table-row"><strong>${item.event}</strong><span>${item.surface}</span><span>${item.evidence}</span><span>${item.status}</span></div>`;
}

function secretInventoryRow(item) {
  return `<div class="table-row"><strong>${item.secret}</strong><span>${item.scope}</span><span>${item.rotation}</span><span>${item.status}</span></div>`;
}

function secretRotationRowAdmin(item) {
  return `<div class="table-row"><strong>${item.rotation}</strong><span>${item.window}</span><span>${item.blastRadius}</span><span>${item.status}</span></div>`;
}

function kmsPostureRow(item) {
  return `<div class="table-row"><strong>${item.store}</strong><span>${item.keyPolicy}</span><span>${item.coverage}</span><span>${item.status}</span></div>`;
}

function certificateRow(item) {
  return `<div class="table-row"><strong>${item.certificate}</strong><span>${item.surface}</span><span>${item.expires}</span><span>${item.status}</span></div>`;
}

function leakResponseRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.surface}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function experimentRowAdmin(item) {
  return `<div class="table-row"><strong>${item.test}</strong><span>${item.segment}</span><span>${item.lift}</span><span>${item.status}</span></div>`;
}

function experimentFlagRow(item) {
  return `<div class="table-row"><strong>${item.flag}</strong><span>${item.surface}</span><span>${item.rollout}</span><span>${item.status}</span></div>`;
}

function rolloutRow(item) {
  return `<div class="table-row"><strong>${item.rollout}</strong><span>${item.audience}</span><span>${item.exposure}</span><span>${item.guardrail}</span></div>`;
}

function experimentDecisionRow(item) {
  return `<div class="table-row"><strong>${item.decision}</strong><span>${item.evidence}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function evalSuiteRow(item) {
  return `<div class="table-row"><strong>${item.suite}</strong><span>${item.scope}</span><span>${item.score}</span><span>${item.status}</span></div>`;
}

function evalRunRow(item) {
  return `<div class="table-row"><strong>${item.run}</strong><span>${item.model}</span><span>${item.samples} samples</span><span>${item.result}</span></div>`;
}

function evalRegressionRow(item) {
  return `<div class="table-row"><strong>${item.issue}</strong><span>${item.affected}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function evalGateRow(item) {
  return `<div class="table-row"><strong>${item.gate}</strong><span>${item.threshold}</span><span>${item.current}</span><span>${item.status}</span></div>`;
}

function successAccountRow(item) {
  return `<div class="table-row"><strong>${item.account}</strong><span>${item.plan}</span><span>${item.seats} seats</span><span>${item.health}</span></div>`;
}

function onboardingRow(item) {
  return `<div class="table-row"><strong>${item.workspace}</strong><span>${item.milestone}</span><span>${item.progress}</span><span>${item.blocker}</span></div>`;
}

function renewalRow(item) {
  return `<div class="table-row"><strong>${item.account}</strong><span>${item.renewal}</span><span>${item.value}</span><span>${item.risk}</span></div>`;
}

function successPlaybookRow(item) {
  return `<div class="table-row"><strong>${item.playbook}</strong><span>${item.owner}</span><span>${item.trigger}</span><span>${item.status}</span></div>`;
}

function salesPipelineRow(item) {
  return `<div class="table-row"><strong>${item.account}</strong><span>${item.stage}</span><span>${item.value}</span><span>${item.close}</span></div>`;
}

function salesDemoRow(item) {
  return `<div class="table-row"><strong>${item.demo}</strong><span>${item.audience}</span><span>${item.market}</span><span>${item.status}</span></div>`;
}

function procurementRow(item) {
  return `<div class="table-row"><strong>${item.account}</strong><span>${item.blocker}</span><span>${item.owner}</span><span>${item.risk}</span></div>`;
}

function partnerLeadRow(item) {
  return `<div class="table-row"><strong>${item.partner}</strong><span>${item.region}</span><span>${item.leads} leads</span><span>${item.status}</span></div>`;
}

function riskRegisterRow(item) {
  return `<div class="table-row"><strong>${item.risk}</strong><span>${item.category}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function riskMitigationRow(item) {
  return `<div class="table-row"><strong>${item.plan}</strong><span>${item.risk}</span><span>${item.owner}</span><span>${item.due}</span></div>`;
}

function boardRiskRow(item) {
  return `<div class="table-row"><strong>${item.item}</strong><span>${item.exposure}</span><span>${item.owner}</span><span>${item.nextReview}</span></div>`;
}

function riskHeatmapRow(item) {
  return `<div class="table-row"><strong>${item.area}</strong><span>${item.likelihood}</span><span>${item.impact}</span><span>${item.score} / ${item.trend}</span></div>`;
}

function legalContractRow(item) {
  return `<div class="table-row"><strong>${item.contract}</strong><span>${item.account}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function legalPolicyRow(item) {
  return `<div class="table-row"><strong>${item.policy}</strong><span>${item.area}</span><span>${item.version}</span><span>${item.status}</span></div>`;
}

function legalRequestRow(item) {
  return `<div class="table-row"><strong>${item.request}</strong><span>${item.region}</span><span>${item.urgency}</span><span>${item.status}</span></div>`;
}

function legalApprovalRow(item) {
  return `<div class="table-row"><strong>${item.approval}</strong><span>${item.requester}</span><span>${item.reviewer}</span><span>${item.decision}</span></div>`;
}

function staffingRow(item) {
  return `<div class="table-row"><strong>${item.team}</strong><span>${item.coverage}</span><span>${item.gap}</span><span>${item.status}</span></div>`;
}

function hiringRow(item) {
  return `<div class="table-row"><strong>${item.role}</strong><span>${item.region}</span><span>${item.priority}</span><span>${item.status}</span></div>`;
}

function rotationRow(item) {
  return `<div class="table-row"><strong>${item.rotation}</strong><span>${item.owner}</span><span>${item.load}</span><span>${item.next}</span></div>`;
}

function enablementRow(item) {
  return `<div class="table-row"><strong>${item.program}</strong><span>${item.audience}</span><span>${item.completion}</span><span>${item.owner}</span></div>`;
}

function vendorRow(item) {
  return `<div class="table-row"><strong>${item.vendor}</strong><span>${item.category}</span><span>${item.spend}</span><span>${item.status}</span></div>`;
}

function vendorRenewalRow(item) {
  return `<div class="table-row"><strong>${item.contract}</strong><span>${item.vendor}</span><span>${item.renewal}</span><span>${item.action}</span></div>`;
}

function vendorDiligenceRow(item) {
  return `<div class="table-row"><strong>${item.review}</strong><span>${item.vendor}</span><span>${item.risk}</span><span>${item.status}</span></div>`;
}

function vendorSpendRow(item) {
  return `<div class="table-row"><strong>${item.area}</strong><span>${item.budget}</span><span>${item.actual}</span><span>${item.variance}</span></div>`;
}

function regionalMarketRow(item) {
  return `<div class="table-row"><strong>${item.market}</strong><span>${item.stage}</span><span>${item.readiness}</span><span>${item.status}</span></div>`;
}

function regionalLocalizationRow(item) {
  return `<div class="table-row"><strong>${item.locale}</strong><span>${item.coverage}</span><span>${item.reviewers} reviewers</span><span>${item.status}</span></div>`;
}

function regionalBlockerRow(item) {
  return `<div class="table-row"><strong>${item.market}</strong><span>${item.blocker}</span><span>${item.severity}</span><span>${item.action}</span></div>`;
}

function regionalPartnerRow(item) {
  return `<div class="table-row"><strong>${item.partner}</strong><span>${item.market}</span><span>${item.leads} leads</span><span>${item.status}</span></div>`;
}

function qaSuiteRow(item) {
  return `<div class="table-row"><strong>${item.suite}</strong><span>${item.surface}</span><span>${item.passRate}</span><span>${item.status}</span></div>`;
}

function qaDeviceRow(item) {
  return `<div class="table-row"><strong>${item.device}</strong><span>${item.viewport}</span><span>${item.coverage}</span><span>${item.status}</span></div>`;
}

function qaBlockerRow(item) {
  return `<div class="table-row"><strong>${item.blocker}</strong><span>${item.surface}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function qaAccessibilityRow(item) {
  return `<div class="table-row"><strong>${item.check}</strong><span>${item.surface}</span><span>${item.score}</span><span>${item.status}</span></div>`;
}

function roadmapInitiativeRow(item) {
  return `<div class="table-row"><strong>${item.initiative}</strong><span>${item.pillar}</span><span>${item.phase}</span><span>${item.status}</span></div>`;
}

function roadmapReleaseRow(item) {
  return `<div class="table-row"><strong>${item.release}</strong><span>${item.target}</span><span>${item.readiness}</span><span>${item.status}</span></div>`;
}

function roadmapDependencyRow(item) {
  return `<div class="table-row"><strong>${item.dependency}</strong><span>${item.initiative}</span><span>${item.risk}</span><span>${item.status}</span></div>`;
}

function roadmapRequestRow(item) {
  return `<div class="table-row"><strong>${item.request}</strong><span>${item.source}</span><span>${item.votes} votes</span><span>${item.status}</span></div>`;
}

function communityContributorRow(item) {
  return `<div class="table-row"><strong>${item.group}</strong><span>${item.region}</span><span>${item.members} members</span><span>${item.status}</span></div>`;
}

function communityContributionRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.language}</span><span>${item.count} items</span><span>${item.status}</span></div>`;
}

function communityProgramRow(item) {
  return `<div class="table-row"><strong>${item.program}</strong><span>${item.market}</span><span>${item.participants} people</span><span>${item.status}</span></div>`;
}

function communityEventRow(item) {
  return `<div class="table-row"><strong>${item.event}</strong><span>${item.market}</span><span>${item.date}</span><span>${item.status}</span></div>`;
}

function complianceControlRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.framework}</span><span>${item.cadence}</span><span>${item.status}</span></div>`;
}

function complianceEvidenceRow(item) {
  return `<div class="table-row"><strong>${item.evidence}</strong><span>${item.source}</span><span>${item.freshness}</span><span>${item.status}</span></div>`;
}

function complianceAuditRow(item) {
  return `<div class="table-row"><strong>${item.audit}</strong><span>${item.window}</span><span>${item.readiness}</span><span>${item.status}</span></div>`;
}

function complianceGapRow(item) {
  return `<div class="table-row"><strong>${item.gap}</strong><span>${item.area}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function trustAssuranceRow(item) {
  return `<div class="table-row"><strong>${item.assurance}</strong><span>${item.audience}</span><span>${item.freshness}</span><span>${item.status}</span></div>`;
}

function trustReviewRow(item) {
  return `<div class="table-row"><strong>${item.customer}</strong><span>${item.request}</span><span>${item.due}</span><span>${item.status}</span></div>`;
}

function trustCertificationRow(item) {
  return `<div class="table-row"><strong>${item.certification}</strong><span>${item.stage}</span><span>${item.target}</span><span>${item.status}</span></div>`;
}

function trustSubprocessorRow(item) {
  return `<div class="table-row"><strong>${item.provider}</strong><span>${item.category}</span><span>${item.risk}</span><span>${item.status}</span></div>`;
}

function boardPacketRow(item) {
  return `<div class="table-row"><strong>${item.packet}</strong><span>${item.window}</span><span>${item.readiness}</span><span>${item.status}</span></div>`;
}

function boardDecisionRow(item) {
  return `<div class="table-row"><strong>${item.decision}</strong><span>${item.area}</span><span>${item.due}</span><span>${item.status}</span></div>`;
}

function boardMetricRow(item) {
  return `<div class="table-row"><strong>${item.metric}</strong><span>${item.value}</span><span>${item.trend}</span><span>${item.status}</span></div>`;
}

function boardEscalationRow(item) {
  return `<div class="table-row"><strong>${item.escalation}</strong><span>${item.source}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function investorUpdateRow(item) {
  return `<div class="table-row"><strong>${item.update}</strong><span>${item.audience}</span><span>${item.due}</span><span>${item.status}</span></div>`;
}

function investorPipelineRow(item) {
  return `<div class="table-row"><strong>${item.investor}</strong><span>${item.stage}</span><span>${item.interest}</span><span>${item.status}</span></div>`;
}

function investorDataRoomRow(item) {
  return `<div class="table-row"><strong>${item.folder}</strong><span>${item.freshness}</span><span>${item.completeness}</span><span>${item.status}</span></div>`;
}

function investorDiligenceRow(item) {
  return `<div class="table-row"><strong>${item.request}</strong><span>${item.source}</span><span>${item.due}</span><span>${item.status}</span></div>`;
}

function procurementRow(item) {
  return `<div class="table-row"><strong>${item.account}</strong><span>${item.motion}</span><span>${item.value}</span><span>${item.status}</span></div>`;
}

function procurementBlockerRow(item) {
  return `<div class="table-row"><strong>${item.blocker}</strong><span>${item.account}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function purchaseOrderRow(item) {
  return `<div class="table-row"><strong>${item.po}</strong><span>${item.account}</span><span>${item.amount}</span><span>${item.status}</span></div>`;
}

function renewalRow(item) {
  return `<div class="table-row"><strong>${item.renewal}</strong><span>${item.date}</span><span>${item.amount}</span><span>${item.status}</span></div>`;
}

function partnershipRow(item) {
  return `<div class="table-row"><strong>${item.partner}</strong><span>${item.type}</span><span>${item.market}</span><span>${item.status}</span></div>`;
}

function partnershipPipelineRow(item) {
  return `<div class="table-row"><strong>${item.opportunity}</strong><span>${item.partner}</span><span>${item.value}</span><span>${item.status}</span></div>`;
}

function partnershipIntegrationRow(item) {
  return `<div class="table-row"><strong>${item.integration}</strong><span>${item.partner}</span><span>${item.readiness}</span><span>${item.status}</span></div>`;
}

function partnershipRiskRow(item) {
  return `<div class="table-row"><strong>${item.risk}</strong><span>${item.partner}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function launchRow(item) {
  return `<div class="table-row"><strong>${item.launch}</strong><span>${item.surface}</span><span>${item.target}</span><span>${item.status}</span></div>`;
}

function launchGateRow(item) {
  return `<div class="table-row"><strong>${item.gate}</strong><span>${item.launch}</span><span>${item.readiness}</span><span>${item.status}</span></div>`;
}

function launchReadinessRow(item) {
  return `<div class="table-row"><strong>${item.team}</strong><span>${item.area}</span><span>${item.confidence}</span><span>${item.status}</span></div>`;
}

function launchMonitorRow(item) {
  return `<div class="table-row"><strong>${item.monitor}</strong><span>${item.launch}</span><span>${item.threshold}</span><span>${item.status}</span></div>`;
}

function okrObjectiveRow(item) {
  return `<div class="table-row"><strong>${item.objective}</strong><span>${item.pillar}</span><span>${item.confidence}</span><span>${item.status}</span></div>`;
}

function okrKeyResultRow(item) {
  return `<div class="table-row"><strong>${item.result}</strong><span>${item.objective}</span><span>${item.current} / ${item.target}</span><span>${item.status}</span></div>`;
}

function okrBlockerRow(item) {
  return `<div class="table-row"><strong>${item.blocker}</strong><span>${item.objective}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function okrCadenceRow(item) {
  return `<div class="table-row"><strong>${item.meeting}</strong><span>${item.focus}</span><span>${item.next}</span><span>${item.status}</span></div>`;
}

function rhythmRitualRow(item) {
  return `<div class="table-row"><strong>${item.ritual}</strong><span>${item.cadence}</span><span>${item.focus}</span><span>${item.status}</span></div>`;
}

function rhythmDecisionRow(item) {
  return `<div class="table-row"><strong>${item.decision}</strong><span>${item.area}</span><span>${item.date}</span><span>${item.status}</span></div>`;
}

function rhythmActionRow(item) {
  return `<div class="table-row"><strong>${item.action}</strong><span>${item.owner}</span><span>${item.due}</span><span>${item.status}</span></div>`;
}

function rhythmHealthRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.value}</span><span>${item.trend}</span><span>${item.status}</span></div>`;
}

function dataRoomRow(item) {
  return `<div class="table-row"><strong>${item.room}</strong><span>${item.audience}</span><span>${item.freshness}</span><span>${item.status}</span></div>`;
}

function evidencePackRow(item) {
  return `<div class="table-row"><strong>${item.pack}</strong><span>${item.category}</span><span>${item.lastUpdated}</span><span>${item.status}</span></div>`;
}

function accessRequestRow(item) {
  return `<div class="table-row"><strong>${item.request}</strong><span>${item.requester}</span><span>${item.age}</span><span>${item.status}</span></div>`;
}

function exportPacketRow(item) {
  return `<div class="table-row"><strong>${item.export}</strong><span>${item.destination}</span><span>${item.lastRun}</span><span>${item.status}</span></div>`;
}

function modelApprovalRow(item) {
  return `<div class="table-row"><strong>${item.model}</strong><span>${item.useCase}</span><span>${item.risk}</span><span>${item.status}</span></div>`;
}

function deploymentGateRow(item) {
  return `<div class="table-row"><strong>${item.gate}</strong><span>${item.route}</span><span>${item.current} / ${item.threshold}</span><span>${item.status}</span></div>`;
}

function policyExceptionRow(item) {
  return `<div class="table-row"><strong>${item.exception}</strong><span>${item.owner}</span><span>${item.expiry}</span><span>${item.status}</span></div>`;
}

function governanceReviewRow(item) {
  return `<div class="table-row"><strong>${item.review}</strong><span>${item.model}</span><span>${item.due}</span><span>${item.status}</span></div>`;
}

function modelRiskTierRow(item) {
  return `<div class="table-row"><strong>${item.route}</strong><span>${item.model}</span><span>${item.tier}</span><span>${item.status}</span></div>`;
}

function modelRiskGateRow(item) {
  return `<div class="table-row"><strong>${item.gate}</strong><span>${item.route}</span><span>${item.current} / ${item.threshold}</span><span>${item.status}</span></div>`;
}

function modelDriftRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.route}</span><span>${item.severity}</span><span>${item.status}</span></div>`;
}

function fallbackRiskRow(item) {
  return `<div class="table-row"><strong>${item.fallback}</strong><span>${item.trigger}</span><span>${item.exposure}</span><span>${item.status}</span></div>`;
}

function humanReviewQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.reviewers} reviewers</span><span>${item.coverage}</span><span>${item.status}</span></div>`;
}

function mobileReleaseRow(item) {
  return `<div class="table-row"><strong>${item.release}</strong><span>${item.track}</span><span>${item.rollout}</span><span>${item.status}</span></div>`;
}

function mobileCrashRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.platform}</span><span>${item.affected}</span><span>${item.status}</span></div>`;
}

function storeReadinessRow(item) {
  return `<div class="table-row"><strong>${item.item}</strong><span>${item.platform}</span><span>${item.readiness}</span><span>${item.status}</span></div>`;
}

function deviceLabRow(item) {
  return `<div class="table-row"><strong>${item.device}</strong><span>${item.market}</span><span>${item.coverage}</span><span>${item.status}</span></div>`;
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

function entitlementPlanRow(item) {
  return `<div class="table-row"><strong>${item.plan}</strong><span>${item.messages}</span><span>${item.voice}</span><span>${item.status}</span></div>`;
}

function quotaMeterRow(item) {
  return `<div class="table-row"><strong>${item.meter}</strong><span>${item.surface}</span><span>${item.lag}</span><span>${item.status}</span></div>`;
}

function breachQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} accounts</span><span>${item.action}</span><span>${item.status}</span></div>`;
}

function upgradeGateRow(item) {
  return `<div class="table-row"><strong>${item.gate}</strong><span>${item.trigger}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function entitlementExceptionRow(item) {
  return `<div class="table-row"><strong>${item.account}</strong><span>${item.exception}</span><span>${item.expires}</span><span>${item.status}</span></div>`;
}

function taxCoverageRow(item) {
  return `<div class="table-row"><strong>${item.market}</strong><span>${item.tax}</span><span>${item.coverage}</span><span>${item.status}</span></div>`;
}

function leakageSignalRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.exposure}</span><span>${item.source}</span><span>${item.status}</span></div>`;
}

function reconciliationRow(item) {
  return `<div class="table-row"><strong>${item.stream}</strong><span>${item.expected}</span><span>${item.matched}</span><span>${item.status}</span></div>`;
}

function recognitionRow(item) {
  return `<div class="table-row"><strong>${item.product}</strong><span>${item.policy}</span><span>${item.deferred}</span><span>${item.status}</span></div>`;
}

function revenueAuditTaskRow(item) {
  return `<div class="table-row"><strong>${item.task}</strong><span>${item.owner}</span><span>${item.due}</span><span>${item.status}</span></div>`;
}

function subscriptionStageRow(item) {
  return `<div class="table-row"><strong>${item.stage}</strong><span>${item.users} users</span><span>${item.conversion}</span><span>${item.status}</span></div>`;
}

function renewalQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.accounts} accounts</span><span>${item.value}</span><span>${item.status}</span></div>`;
}

function cancellationReasonRow(item) {
  return `<div class="table-row"><strong>${item.reason}</strong><span>${item.share}</span><span>${item.action}</span><span>${item.status}</span></div>`;
}

function planMigrationRow(item) {
  return `<div class="table-row"><strong>${item.motion}</strong><span>${item.volume}</span><span>${item.driver}</span><span>${item.status}</span></div>`;
}

function winbackOfferRow(item) {
  return `<div class="table-row"><strong>${item.offer}</strong><span>${item.segment}</span><span>${item.acceptance}</span><span>${item.status}</span></div>`;
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

function routeEconomicsRow(item) {
  return `<div class="table-row"><strong>${item.route}</strong><span>${item.cost}</span><span>${item.margin}</span><span>${item.status}</span></div>`;
}

function planEconomicsRow(item) {
  return `<div class="table-row"><strong>${item.plan}</strong><span>${item.arpu}</span><span>${item.monthlyCost}</span><span>${item.margin}</span></div>`;
}

function marginLeakRow(item) {
  return `<div class="table-row"><strong>${item.leak}</strong><span>${item.source}</span><span>${item.exposure}</span><span>${item.status}</span></div>`;
}

function pricingActionRow(item) {
  return `<div class="table-row"><strong>${item.action}</strong><span>${item.segment}</span><span>${item.impact}</span><span>${item.status}</span></div>`;
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

function chatHealthRow(item) {
  return `<div class="table-row"><strong>${item.surface}</strong><span>${item.active} active</span><span>${item.p95}</span><span>${item.status}</span></div>`;
}

function messageQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.depth} items</span><span>${item.oldest}</span><span>${item.status}</span></div>`;
}

function failureReasonRow(item) {
  return `<div class="table-row"><strong>${item.reason}</strong><span>${item.count} cases</span><span>${item.route}</span><span>${item.status}</span></div>`;
}

function replayControlRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.coverage}</span><span>${item.access}</span><span>${item.status}</span></div>`;
}

function experienceSignalRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.segment}</span><span>${item.score} / ${item.trend}</span><span>${item.status}</span></div>`;
}

function promptSetRow(item) {
  return `<div class="table-row"><strong>${item.set}</strong><span>${item.surface}</span><span>${item.version}</span><span>${item.status}</span></div>`;
}

function workflowTemplateRow(item) {
  return `<div class="table-row"><strong>${item.workflow}</strong><span>${item.trigger}</span><span>${item.steps} steps</span><span>${item.status}</span></div>`;
}

function promptTestResultRow(item) {
  return `<div class="table-row"><strong>${item.test}</strong><span>${item.segment}</span><span>${item.passRate}</span><span>${item.status}</span></div>`;
}

function rollbackControlRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.coverage}</span><span>${item.eta}</span><span>${item.status}</span></div>`;
}

function promptReviewQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.owner} / ${item.sla}</span><span>${item.status}</span></div>`;
}

function sentimentThemeRow(item) {
  return `<div class="table-row"><strong>${item.theme}</strong><span>${item.volume} mentions</span><span>${item.sentiment}</span><span>${item.status}</span></div>`;
}

function feedbackChannelRow(item) {
  return `<div class="table-row"><strong>${item.channel}</strong><span>${item.items} items</span><span>${item.topSignal}</span><span>${item.status}</span></div>`;
}

function productInsightRow(item) {
  return `<div class="table-row"><strong>${item.insight}</strong><span>${item.evidence}</span><span>${item.owner}</span><span>${item.action}</span></div>`;
}

function appStoreSignalRow(item) {
  return `<div class="table-row"><strong>${item.surface}</strong><span>${item.rating} rating</span><span>${item.theme}</span><span>${item.status}</span></div>`;
}

function escalationReasonRow(item) {
  return `<div class="table-row"><strong>${item.reason}</strong><span>${item.count} cases</span><span>${item.owner}</span><span>${item.status}</span></div>`;
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

function modelLicenseRow(item) {
  return `<div class="table-row"><strong>${item.model}</strong><span>${item.license}</span><span>${item.use}</span><span>${item.status}</span></div>`;
}

function datasetSourceRow(item) {
  return `<div class="table-row"><strong>${item.dataset}</strong><span>${item.origin || item.source}</span><span>${item.consent}</span><span>${item.status}</span></div>`;
}

function provenanceReviewRow(item) {
  return `<div class="table-row"><strong>${item.review}</strong><span>${item.market}</span><span>${item.risk}</span><span>${item.status}</span></div>`;
}

function trainingEligibilityRow(item) {
  return `<div class="table-row"><strong>${item.useCase}</strong><span>${item.eligible} eligible</span><span>${item.blocked} blocked</span><span>${item.status}</span></div>`;
}

function dataQualityCoverageRow(item) {
  return `<div class="table-row"><strong>${item.language}</strong><span>${item.coverage}</span><span>${item.gaps}</span><span>${item.status}</span></div>`;
}

function contributionLoopRow(item) {
  return `<div class="table-row"><strong>${item.loop}</strong><span>${item.volume}</span><span>${item.consent}</span><span>${item.status}</span></div>`;
}

function usageRestrictionRow(item) {
  return `<div class="table-row"><strong>${item.restriction}</strong><span>${item.scope}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function attributionTaskRow(item) {
  return `<div class="table-row"><strong>${item.task}</strong><span>${item.owner}</span><span>${item.due}</span><span>${item.status}</span></div>`;
}

function rightsRiskRow(item) {
  return `<div class="table-row"><strong>${item.risk}</strong><span>${item.impact}</span><span>${item.mitigation}</span><span>${item.status}</span></div>`;
}

function safetyQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.count} items</span><span>${item.owner} / ${item.priority}</span></div>`;
}

function policyVersionRow(item) {
  return `<div class="table-row"><strong>${item.policy}</strong><span>${item.version}</span><span>${item.effective}</span><span>${item.status}</span></div>`;
}

function policyTaxonomyRow(item) {
  return `<div class="table-row"><strong>${item.category}</strong><span>${item.examples}</span><span>${item.handling}</span><span>${item.status}</span></div>`;
}

function reviewerGuidanceRow(item) {
  return `<div class="table-row"><strong>${item.guide}</strong><span>${item.language}</span><span>${item.reviewers} reviewers</span><span>${item.status}</span></div>`;
}

function policyEnforcementRow(item) {
  return `<div class="table-row"><strong>${item.rule}</strong><span>${item.action}</span><span>${item.owner}</span><span>${item.status}</span></div>`;
}

function appealsPolicyRow(item) {
  return `<div class="table-row"><strong>${item.appeal}</strong><span>${item.sla}</span><span>${item.escalation}</span><span>${item.status}</span></div>`;
}

function abuseQueueRow(item) {
  return `<div class="table-row"><strong>${item.queue}</strong><span>${item.surface}</span><span>${item.volume} cases</span><span>${item.status}</span></div>`;
}

function botDefenseRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.market}</span><span>${item.confidence}</span><span>${item.status}</span></div>`;
}

function paymentRiskRow(item) {
  return `<div class="table-row"><strong>${item.risk}</strong><span>${item.plan}</span><span>${item.exposure}</span><span>${item.status}</span></div>`;
}

function enforcementRow(item) {
  return `<div class="table-row"><strong>${item.action}</strong><span>${item.count} items</span><span>${item.appealWindow}</span><span>${item.status}</span></div>`;
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

function lifecycleJourneyRow(item) {
  return `<div class="table-row"><strong>${item.journey}</strong><span>${item.segment}</span><span>${item.trigger}</span><span>${item.status}</span></div>`;
}

function churnRiskRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.segment}</span><span>${item.users} users</span><span>${item.status}</span></div>`;
}

function winbackCampaignRow(item) {
  return `<div class="table-row"><strong>${item.campaign}</strong><span>${item.audience}</span><span>${item.lift}</span><span>${item.status}</span></div>`;
}

function expansionSignalRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.account}</span><span>${item.opportunity}</span><span>${item.status}</span></div>`;
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

function investigationCaseRow(item) {
  return `<div class="table-row"><strong>${item.id}</strong><span>${item.case}</span><span>${item.priority}</span><span>${item.status}</span></div>`;
}

function evidenceCustodyRow(item) {
  return `<div class="table-row"><strong>${item.evidence}</strong><span>${item.source}</span><span>${item.retention}</span><span>${item.status}</span></div>`;
}

function investigationTimelineRow(item) {
  return `<div class="table-row"><strong>${item.incident}</strong><span>${item.firstSeen}</span><span>${item.contained}</span><span>${item.status}</span></div>`;
}

function legalHoldRow(item) {
  return `<div class="table-row"><strong>${item.hold}</strong><span>${item.scope}</span><span>${item.expiry}</span><span>${item.status}</span></div>`;
}

function investigationHandoffRow(item) {
  return `<div class="table-row"><strong>${item.handoff}</strong><span>${item.caseId}</span><span>${item.requirement}</span><span>${item.status}</span></div>`;
}

function authFunnelRow(item) {
  return `<div class="table-row"><strong>${item.step}</strong><span>${item.users}</span><span>${item.conversion}</span><span>${item.issue}</span></div>`;
}

function signInHealthRow(item) {
  return `<div class="table-row"><strong>${item.surface}</strong><span>${item.attempts}</span><span>${item.success} / ${item.latency}</span><span>${item.status}</span></div>`;
}

function authVerificationRow(item) {
  return `<div class="table-row"><strong>${item.control}</strong><span>${item.coverage}</span><span>${item.queue}</span><span>${item.status}</span></div>`;
}

function recoveryFlowRow(item) {
  return `<div class="table-row"><strong>${item.flow}</strong><span>${item.volume} cases</span><span>${item.median}</span><span>${item.status}</span></div>`;
}

function sessionRiskRow(item) {
  return `<div class="table-row"><strong>${item.signal}</strong><span>${item.count} events</span><span>${item.action}</span><span>${item.status}</span></div>`;
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
  if (state.adminSection === "devex") loadAdminDevexCicd();
  if (state.adminSection === "payments") loadAdminPayments();
  if (state.adminSection === "entitlements") loadAdminEntitlements();
  if (state.adminSection === "revenueAssurance") loadAdminRevenueAssurance();
  if (state.adminSection === "subscriptions") loadAdminSubscriptions();
  if (state.adminSection === "finance") loadAdminFinance();
  if (state.adminSection === "unitEconomics") loadAdminUnitEconomics();
  if (state.adminSection === "users") loadAdminUsers();
  if (state.adminSection === "support") loadAdminSupport();
  if (state.adminSection === "conversations") loadAdminConversations();
  if (state.adminSection === "prompts") loadAdminPromptWorkflows();
  if (state.adminSection === "customerExperience") loadAdminCustomerExperience();
  if (state.adminSection === "models") loadAdminModels();
  if (state.adminSection === "licensing") loadAdminModelLicensing();
  if (state.adminSection === "datasets") loadAdminDatasetGovernance();
  if (state.adminSection === "evaluations") loadAdminEvaluations();
  if (state.adminSection === "languages") loadAdminLanguages();
  if (state.adminSection === "culture") loadAdminCulturalQuality();
  if (state.adminSection === "reviewers") loadAdminReviewerNetwork();
  if (state.adminSection === "improvement") loadAdminCorrectionImprovement();
  if (state.adminSection === "voiceOps") loadAdminVoiceSpeech();
  if (state.adminSection === "translationOps") loadAdminTranslationOps();
  if (state.adminSection === "creatorOps") loadAdminCreatorStudio();
  if (state.adminSection === "classroomOps") loadAdminClassroomLearning();
  if (state.adminSection === "marketOps") loadAdminMarketCommerce();
  if (state.adminSection === "multimodalOps") loadAdminMultimodal();
  if (state.adminSection === "searchOps") loadAdminSearchRetrieval();
  if (state.adminSection === "workspaceOps") loadAdminWorkspaceCollaboration();
  if (state.adminSection === "passport") loadAdminLanguagePassport();
  if (state.adminSection === "localization") loadAdminLocalizationContent();
  if (state.adminSection === "data") loadAdminDataGovernance();
  if (state.adminSection === "memory") loadAdminMemoryPersonalization();
  if (state.adminSection === "residency") loadAdminResidencySovereignty();
  if (state.adminSection === "privacy") loadAdminPrivacyRequests();
  if (state.adminSection === "dpia") loadAdminDpia();
  if (state.adminSection === "policy") loadAdminPolicyGovernance();
  if (state.adminSection === "safety") loadAdminSafety();
  if (state.adminSection === "fraud") loadAdminFraudAbuse();
  if (state.adminSection === "security") loadAdminSecurity();
  if (state.adminSection === "infrastructure") loadAdminInfrastructure();
  if (state.adminSection === "continuity") loadAdminBusinessContinuity();
  if (state.adminSection === "slos") loadAdminReliabilitySlos();
  if (state.adminSection === "observability") loadAdminObservabilityLogs();
  if (state.adminSection === "capacity") loadAdminCapacityPlanning();
  if (state.adminSection === "growth") loadAdminGrowth();
  if (state.adminSection === "analytics") loadAdminAnalytics();
  if (state.adminSection === "lifecycle") loadAdminLifecycleRetention();
  if (state.adminSection === "experiments") loadAdminExperiments();
  if (state.adminSection === "reports") loadAdminReports();
  if (state.adminSection === "warehouse") loadAdminWarehouseBi();
  if (state.adminSection === "risk") loadAdminRisk();
  if (state.adminSection === "legal") loadAdminLegal();
  if (state.adminSection === "people") loadAdminPeople();
  if (state.adminSection === "vendors") loadAdminVendors();
  if (state.adminSection === "regional") loadAdminRegionalLaunch();
  if (state.adminSection === "qa") loadAdminQa();
  if (state.adminSection === "roadmap") loadAdminRoadmap();
  if (state.adminSection === "community") loadAdminCommunity();
  if (state.adminSection === "evidence") loadAdminComplianceEvidence();
  if (state.adminSection === "trust") loadAdminTrustCenter();
  if (state.adminSection === "board") loadAdminBoardGovernance();
  if (state.adminSection === "investors") loadAdminInvestorRelations();
  if (state.adminSection === "procurement") loadAdminProcurementRevenue();
  if (state.adminSection === "partnerships") loadAdminStrategicPartnerships();
  if (state.adminSection === "launch") loadAdminLaunchReadiness();
  if (state.adminSection === "okrs") loadAdminExecutiveOkrs();
  if (state.adminSection === "rhythm") loadAdminOperatingRhythm();
  if (state.adminSection === "dataRoom") loadAdminDataRoom();
  if (state.adminSection === "aiGovernance") loadAdminAiGovernance();
  if (state.adminSection === "modelRisk") loadAdminModelRisk();
  if (state.adminSection === "webOps") loadAdminWebOps();
  if (state.adminSection === "telemetryOps") loadAdminTelemetryOps();
  if (state.adminSection === "statusOps") loadAdminStatusOps();
  if (state.adminSection === "incidentResponse") loadAdminIncidentResponse();
  if (state.adminSection === "dataQualityOps") loadAdminDataQualityOps();
  if (state.adminSection === "consentOps") loadAdminConsentOps();
  if (state.adminSection === "secretsOps") loadAdminSecretsOps();
  if (state.adminSection === "mobileOps") loadAdminMobileOps();
  if (state.adminSection === "communications") loadAdminCommunications();
  if (state.adminSection === "notifications") loadAdminNotificationDelivery();
  if (state.adminSection === "success") loadAdminCustomerSuccess();
  if (state.adminSection === "sales") loadAdminSales();
  if (state.adminSection === "access") loadAdminAccess();
  if (state.adminSection === "identity") loadAdminIdentityAuth();
  if (state.adminSection === "operations") loadAdminActions();
  if (state.adminSection === "api") loadAdminApi();
  if (state.adminSection === "integrations") loadAdminIntegrations();
  if (state.adminSection === "knowledge") loadAdminKnowledge();
  if (state.adminSection === "investigations") loadAdminInvestigations();
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
    lifecycle: adminLifecycleRetention,
    experiments: adminExperiments,
    reports: adminReports,
    warehouse: adminWarehouseBi,
    risk: adminRisk,
    legal: adminLegal,
    people: adminPeople,
    vendors: adminVendors,
    regional: adminRegionalLaunch,
    qa: adminQa,
    roadmap: adminRoadmap,
    community: adminCommunity,
    evidence: adminComplianceEvidence,
    trust: adminTrustCenter,
    board: adminBoardGovernance,
    investors: adminInvestorRelations,
    procurement: adminProcurementRevenue,
    partnerships: adminStrategicPartnerships,
    launch: adminLaunchReadiness,
    okrs: adminExecutiveOkrs,
    rhythm: adminOperatingRhythm,
    dataRoom: adminDataRoom,
    aiGovernance: adminAiGovernance,
    modelRisk: adminModelRisk,
    webOps: adminWebOps,
    telemetryOps: adminTelemetryOps,
    statusOps: adminStatusOps,
    incidentResponse: adminIncidentResponse,
    dataQualityOps: adminDataQualityOps,
    consentOps: adminConsentOps,
    secretsOps: adminSecretsOps,
    mobileOps: adminMobileOps,
    communications: adminCommunications,
    notifications: adminNotificationDelivery,
    payments: adminPayments,
    entitlements: adminEntitlements,
    revenueAssurance: adminRevenueAssurance,
    subscriptions: adminSubscriptions,
    finance: adminFinance,
    unitEconomics: adminUnitEconomics,
    users: adminUsers,
    success: adminCustomerSuccess,
    sales: adminSales,
    support: adminSupport,
    conversations: adminConversations,
    prompts: adminPromptWorkflows,
    customerExperience: adminCustomerExperience,
    models: () => adminModels(readiness),
    licensing: adminModelLicensing,
    datasets: adminDatasetGovernance,
    evaluations: adminEvaluations,
    languages: adminLanguages,
    culture: adminCulturalQuality,
    reviewers: adminReviewerNetwork,
    improvement: adminCorrectionImprovement,
    voiceOps: adminVoiceSpeech,
    translationOps: adminTranslationOps,
    creatorOps: adminCreatorStudio,
    classroomOps: adminClassroomLearning,
    marketOps: adminMarketCommerce,
    multimodalOps: adminMultimodal,
    searchOps: adminSearchRetrieval,
    workspaceOps: adminWorkspaceCollaboration,
    passport: adminLanguagePassport,
    localization: adminLocalizationContent,
    data: adminDataGovernance,
    memory: adminMemoryPersonalization,
    residency: adminResidencySovereignty,
    privacy: adminPrivacyRequests,
    dpia: adminDpia,
    knowledge: adminKnowledge,
    policy: adminPolicyGovernance,
    safety: adminSafety,
    fraud: adminFraudAbuse,
    security: adminSecurity,
    platform: adminPlatform,
    devex: adminDevexCicd,
    infrastructure: adminInfrastructure,
    continuity: adminBusinessContinuity,
    slos: adminReliabilitySlos,
    observability: adminObservabilityLogs,
    capacity: adminCapacityPlanning,
    api: adminApiManagement,
    integrations: adminIntegrations,
    access: adminAccess,
    investigations: adminInvestigations,
    identity: adminIdentityAuth,
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

function adminLifecycleRetention() {
  const lifecycle = adminLifecycleRetentionData();
  const summary = lifecycle.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Journeys", summary.activeJourneys || "11")}
      ${metric("Activation", summary.activationRate || "78.2%")}
      ${metric("Churn risk", summary.churnRiskUsers || "642")}
      ${metric("Winback", summary.winbackRate || "18%")}
      <section class="admin-card full-admin">
        <h2>Lifecycle journeys</h2>
        <div class="table admin-table-4">
          ${lifecycle.journeys.map(lifecycleJourneyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Churn risk signals</h2>
        <div class="table admin-table-4">
          ${lifecycle.churnRisks.map(churnRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Winback campaigns</h2>
        <div class="table admin-table-4">
          ${lifecycle.winback.map(winbackCampaignRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Expansion signals</h2>
        <div class="table admin-table-4">
          ${lifecycle.expansion.map(expansionSignalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Lifecycle guardrails</h2>
        <div class="admin-checklist">
          ${lifecycle.guardrails.map(item => `<span>${item}</span>`).join("")}
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

function adminEntitlements() {
  const entitlements = adminEntitlementData();
  const summary = entitlements.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active plans", summary.activePlans || "4")}
      ${metric("Quota breaches", summary.quotaBreaches || "73")}
      ${metric("Overage reviews", summary.overageReviews || "18")}
      ${metric("Metering lag", summary.meteringLag || "42s")}
      <section class="admin-card full-admin">
        <h2>Plan entitlements</h2>
        <div class="table admin-table-4">
          ${entitlements.planEntitlements.map(entitlementPlanRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Usage meters</h2>
        <div class="table admin-table-4">
          ${entitlements.quotaMeters.map(quotaMeterRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Breach queues</h2>
        <div class="table admin-table-4">
          ${entitlements.breachQueues.map(breachQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Upgrade gates</h2>
        <div class="table admin-table-4">
          ${entitlements.upgradeGates.map(upgradeGateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Manual exceptions</h2>
        <div class="table admin-table-4">
          ${entitlements.exceptions.map(entitlementExceptionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Entitlement guardrails</h2>
        <div class="admin-checklist">
          ${entitlements.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminRevenueAssurance() {
  const revenue = adminRevenueAssuranceData();
  const summary = revenue.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Leakage risk", summary.leakageRisk || "$18.7K")}
      ${metric("Tax regions", summary.taxRegions || "12")}
      ${metric("Reconcile lag", summary.reconciliationLag || "27m")}
      ${metric("Recognition", summary.recognitionHealth || "94%")}
      <section class="admin-card full-admin">
        <h2>Tax coverage</h2>
        <div class="table admin-table-4">
          ${revenue.taxCoverage.map(taxCoverageRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Revenue leakage signals</h2>
        <div class="table admin-table-4">
          ${revenue.leakageSignals.map(leakageSignalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Payout reconciliation</h2>
        <div class="table admin-table-4">
          ${revenue.reconciliation.map(reconciliationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Revenue recognition</h2>
        <div class="table admin-table-4">
          ${revenue.recognition.map(recognitionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Audit tasks</h2>
        <div class="table admin-table-4">
          ${revenue.auditTasks.map(revenueAuditTaskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Revenue assurance guardrails</h2>
        <div class="admin-checklist">
          ${revenue.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminSubscriptions() {
  const subscriptions = adminSubscriptionData();
  const summary = subscriptions.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active subs", summary.activeSubscriptions || "4,047")}
      ${metric("Trials ending", summary.trialsEnding || "312")}
      ${metric("Renewal risk", summary.renewalRisk || "$22.8K")}
      ${metric("Save rate", summary.saveRate || "18%")}
      <section class="admin-card full-admin">
        <h2>Lifecycle stages</h2>
        <div class="table admin-table-4">
          ${subscriptions.lifecycleStages.map(subscriptionStageRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Renewal queues</h2>
        <div class="table admin-table-4">
          ${subscriptions.renewalQueues.map(renewalQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Cancellation reasons</h2>
        <div class="table admin-table-4">
          ${subscriptions.cancellationReasons.map(cancellationReasonRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Plan migrations</h2>
        <div class="table admin-table-4">
          ${subscriptions.planMigrations.map(planMigrationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Winback offers</h2>
        <div class="table admin-table-4">
          ${subscriptions.winbackOffers.map(winbackOfferRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Subscription guardrails</h2>
        <div class="admin-checklist">
          ${subscriptions.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
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

function adminUnitEconomics() {
  const unit = adminUnitEconomicsData();
  const summary = unit.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Cost/message", summary.costPerMessage || "$0.0038")}
      ${metric("Paid rev/message", summary.revenuePerPaidMessage || "$0.021")}
      ${metric("Free user cost", summary.freeUserCost || "$0.42/mo")}
      ${metric("Paid margin", summary.paidGrossMargin || "78%")}
      <section class="admin-card full-admin">
        <h2>Route economics</h2>
        <div class="table admin-table-4">
          ${unit.routeCosts.map(routeEconomicsRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Plan economics</h2>
        <div class="table admin-table-4">
          ${unit.planEconomics.map(planEconomicsRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Margin leaks</h2>
        <div class="table admin-table-4">
          ${unit.marginLeaks.map(marginLeakRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Pricing and routing actions</h2>
        <div class="table admin-table-4">
          ${unit.pricingActions.map(pricingActionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Unit economics guardrails</h2>
        <div class="admin-checklist">
          ${unit.guardrails.map(item => `<span>${item}</span>`).join("")}
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

function adminConversations() {
  const conversations = adminConversationsData();
  const summary = conversations.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active chats", summary.activeChats || "42.8K")}
      ${metric("Stream success", summary.streamSuccess || "99.2%")}
      ${metric("Failed responses", summary.failedResponses || "128")}
      ${metric("Attachment queue", summary.attachmentQueue || "37")}
      <section class="admin-card full-admin">
        <h2>Chat health</h2>
        <div class="table admin-table-4">
          ${conversations.chatHealth.map(chatHealthRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Message queues</h2>
        <div class="table admin-table-4">
          ${conversations.messageQueues.map(messageQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Failure reasons</h2>
        <div class="table admin-table-4">
          ${conversations.failureReasons.map(failureReasonRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Replay and privacy controls</h2>
        <div class="table admin-table-4">
          ${conversations.replayControls.map(replayControlRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Experience signals</h2>
        <div class="table admin-table-4">
          ${conversations.experienceSignals.map(experienceSignalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Conversation guardrails</h2>
        <div class="admin-checklist">
          ${conversations.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminPromptWorkflows() {
  const prompts = adminPromptWorkflowsData();
  const summary = prompts.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Prompt sets", summary.promptSets || "22")}
      ${metric("Live workflows", summary.liveWorkflows || "14")}
      ${metric("Tests running", summary.testsRunning || "6")}
      ${metric("Rollbacks ready", summary.rollbacksReady || "9")}
      <section class="admin-card full-admin">
        <h2>Prompt sets</h2>
        <div class="table admin-table-4">
          ${prompts.promptSets.map(promptSetRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Workflow templates</h2>
        <div class="table admin-table-4">
          ${prompts.workflowTemplates.map(workflowTemplateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Template tests</h2>
        <div class="table admin-table-4">
          ${prompts.testResults.map(promptTestResultRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Rollback controls</h2>
        <div class="table admin-table-4">
          ${prompts.rollbackControls.map(rollbackControlRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Review queues</h2>
        <div class="table admin-table-4">
          ${prompts.reviewQueues.map(promptReviewQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Prompt guardrails</h2>
        <div class="admin-checklist">
          ${prompts.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminCustomerExperience() {
  const cx = adminCustomerExperienceData();
  const summary = cx.summary || {};
  return `
    <div class="admin-grid">
      ${metric("NPS", summary.nps ?? "48")}
      ${metric("CSAT", summary.csat || "4.6")}
      ${metric("Feedback items", summary.feedbackItems || "1,284")}
      ${metric("App rating", summary.appRating || "4.7")}
      <section class="admin-card full-admin">
        <h2>Sentiment themes</h2>
        <div class="table admin-table-4">
          ${cx.sentimentThemes.map(sentimentThemeRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Feedback channels</h2>
        <div class="table admin-table-4">
          ${cx.feedbackChannels.map(feedbackChannelRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Product insight loop</h2>
        <div class="table admin-table-4">
          ${cx.productInsights.map(productInsightRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>App and surface signals</h2>
        <div class="table admin-table-4">
          ${cx.appStoreSignals.map(appStoreSignalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Escalation reasons</h2>
        <div class="table admin-table-4">
          ${cx.escalationReasons.map(escalationReasonRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Customer experience guardrails</h2>
        <div class="admin-checklist">
          ${cx.guardrails.map(item => `<span>${item}</span>`).join("")}
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

function adminModelLicensing() {
  const licensing = adminModelLicensingData();
  const summary = licensing.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Model sources", summary.modelSources || MODEL_REGISTRY.length)}
      ${metric("License reviews", summary.licenseReviews || "10")}
      ${metric("Restricted use", summary.restrictedUse || "2")}
      ${metric("Rights risks", summary.rightsRisks || "4")}
      <section class="admin-card full-admin">
        <h2>Model license register</h2>
        <div class="table admin-table-4">
          ${licensing.modelLicenses.map(modelLicenseRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Dataset provenance</h2>
        <div class="table admin-table-4">
          ${licensing.datasetSources.map(datasetSourceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Usage restrictions</h2>
        <div class="table admin-table-4">
          ${licensing.usageRestrictions.map(usageRestrictionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Attribution tasks</h2>
        <div class="table admin-table-4">
          ${licensing.attributionTasks.map(attributionTaskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Rights risks</h2>
        <div class="table admin-table-4">
          ${licensing.rightsRisks.map(rightsRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Licensing guardrails</h2>
        <div class="admin-checklist">
          ${licensing.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminDatasetGovernance() {
  const datasets = adminDatasetGovernanceData();
  const summary = datasets.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Datasets", summary.governedDatasets || "46")}
      ${metric("Consent gaps", summary.consentGaps || "7")}
      ${metric("Reviews", summary.provenanceReviews || "18")}
      ${metric("Coverage", summary.qualityCoverage || "84%")}
      <section class="admin-card full-admin">
        <h2>Dataset sources</h2>
        <div class="table admin-table-4">
          ${datasets.datasetSources.map(datasetSourceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Provenance reviews</h2>
        <div class="table admin-table-4">
          ${datasets.provenanceReviews.map(provenanceReviewRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Training eligibility</h2>
        <div class="table admin-table-4">
          ${datasets.trainingEligibility.map(trainingEligibilityRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Quality coverage</h2>
        <div class="table admin-table-4">
          ${datasets.qualityCoverage.map(dataQualityCoverageRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Contribution loops</h2>
        <div class="table admin-table-4">
          ${datasets.contributionLoops.map(contributionLoopRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Dataset guardrails</h2>
        <div class="admin-checklist">
          ${datasets.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
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

function adminPolicyGovernance() {
  const policy = adminPolicyGovernanceData();
  const summary = policy.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active policies", summary.activePolicies || "18")}
      ${metric("Draft updates", summary.draftUpdates || "6")}
      ${metric("Localized guides", summary.localizedGuides || "14")}
      ${metric("Policy drift", summary.policyDrift || "Low")}
      <section class="admin-card full-admin">
        <h2>Policy versions</h2>
        <div class="table admin-table-4">
          ${policy.policyVersions.map(policyVersionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Content taxonomy</h2>
        <div class="table admin-table-4">
          ${policy.taxonomy.map(policyTaxonomyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Reviewer guidance</h2>
        <div class="table admin-table-4">
          ${policy.reviewerGuidance.map(reviewerGuidanceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Enforcement rules</h2>
        <div class="table admin-table-4">
          ${policy.enforcementRules.map(policyEnforcementRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Appeals policy</h2>
        <div class="table admin-table-4">
          ${policy.appealsPolicy.map(appealsPolicyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Policy guardrails</h2>
        <div class="admin-checklist">
          ${policy.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminFraudAbuse() {
  const fraud = adminFraudAbuseData();
  const summary = fraud.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Open cases", summary.openCases || "73")}
      ${metric("Bot blocks", summary.botBlocks || "18.4K")}
      ${metric("Payment risk", summary.paymentRisk || "$6.8K")}
      ${metric("API abuse", summary.apiAbuse || "22")}
      <section class="admin-card full-admin">
        <h2>Abuse queues</h2>
        <div class="table admin-table-4">
          ${fraud.abuseQueues.map(abuseQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Bot defense</h2>
        <div class="table admin-table-4">
          ${fraud.botDefense.map(botDefenseRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Payment risk</h2>
        <div class="table admin-table-4">
          ${fraud.paymentRisk.map(paymentRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Enforcement and appeals</h2>
        <div class="table admin-table-4">
          ${fraud.enforcement.map(enforcementRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Fraud guardrails</h2>
        <div class="admin-checklist">
          ${fraud.guardrails.map(item => `<span>${item}</span>`).join("")}
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

function adminWarehouseBi() {
  const warehouse = adminWarehouseBiData();
  const summary = warehouse.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Healthy pipelines", summary.pipelinesHealthy || "18")}
      ${metric("Freshness", summary.freshness || "5 min")}
      ${metric("Failed jobs", summary.failedJobs || "2")}
      ${metric("Certified metrics", summary.certifiedMetrics || "42")}
      <section class="admin-card full-admin">
        <h2>Pipeline health</h2>
        <div class="table admin-table-4">
          ${warehouse.pipelines.map(warehousePipelineRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Certified datasets</h2>
        <div class="table admin-table-4">
          ${warehouse.datasets.map(warehouseDatasetRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Metric definitions</h2>
        <div class="table admin-table-4">
          ${warehouse.metricDefinitions.map(metricDefinitionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Lineage map</h2>
        <div class="table admin-table-4">
          ${warehouse.lineage.map(lineageRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>BI access reviews</h2>
        <div class="table admin-table-4">
          ${warehouse.accessReviews.map(biAccessRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Warehouse guardrails</h2>
        <div class="admin-checklist">
          ${warehouse.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminRisk() {
  const risk = adminRiskData();
  const summary = risk.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Open risks", summary.openRisks || "17")}
      ${metric("Critical", summary.criticalRisks || "2")}
      ${metric("Mitigations due", summary.mitigationsDue || "6")}
      ${metric("Risk trend", summary.riskTrend || "Stable")}
      <section class="admin-card full-admin">
        <h2>Enterprise risk register</h2>
        <div class="table admin-table-4">
          ${risk.register.map(riskRegisterRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Mitigation plans</h2>
        <div class="table admin-table-4">
          ${risk.mitigations.map(riskMitigationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Board review items</h2>
        <div class="table admin-table-4">
          ${risk.board.map(boardRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Risk heatmap</h2>
        <div class="table admin-table-4">
          ${risk.heatmap.map(riskHeatmapRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Risk governance guardrails</h2>
        <div class="admin-checklist">
          ${risk.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminLegal() {
  const legal = adminLegalData();
  const summary = legal.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Open reviews", summary.openReviews || "12")}
      ${metric("DPA queue", summary.dpaQueue || "5")}
      ${metric("Policy updates", summary.policyUpdates || "4")}
      ${metric("Approval SLA", summary.approvalSla || "91%")}
      <section class="admin-card full-admin">
        <h2>Contracts and DPAs</h2>
        <div class="table admin-table-4">
          ${legal.contracts.map(legalContractRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Policy workbench</h2>
        <div class="table admin-table-4">
          ${legal.policies.map(legalPolicyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Legal requests</h2>
        <div class="table admin-table-4">
          ${legal.requests.map(legalRequestRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Approval queue</h2>
        <div class="table admin-table-4">
          ${legal.approvals.map(legalApprovalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Legal and policy guardrails</h2>
        <div class="admin-checklist">
          ${legal.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminPeople() {
  const people = adminPeopleData();
  const summary = people.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Team coverage", summary.teamCoverage || "82%")}
      ${metric("Open roles", summary.openRoles || "9")}
      ${metric("Reviewer capacity", summary.reviewerCapacity || "74%")}
      ${metric("On-call load", summary.onCallLoad || "Medium")}
      <section class="admin-card full-admin">
        <h2>Team coverage</h2>
        <div class="table admin-table-4">
          ${people.staffing.map(staffingRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Hiring pipeline</h2>
        <div class="table admin-table-4">
          ${people.hiring.map(hiringRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>On-call rotations</h2>
        <div class="table admin-table-4">
          ${people.rotations.map(rotationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Enablement readiness</h2>
        <div class="table admin-table-4">
          ${people.enablement.map(enablementRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>People Ops guardrails</h2>
        <div class="admin-checklist">
          ${people.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminVendors() {
  const vendors = adminVendorData();
  const summary = vendors.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active vendors", summary.activeVendors || "26")}
      ${metric("Renewals due", summary.renewalsDue || "7")}
      ${metric("Monthly spend", summary.monthlySpend || "$42.6K")}
      ${metric("High risk", summary.highRisk || "3")}
      <section class="admin-card full-admin">
        <h2>Vendor inventory</h2>
        <div class="table admin-table-4">
          ${vendors.vendors.map(vendorRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Renewals and negotiations</h2>
        <div class="table admin-table-4">
          ${vendors.renewals.map(vendorRenewalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Due diligence</h2>
        <div class="table admin-table-4">
          ${vendors.diligence.map(vendorDiligenceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Spend variance</h2>
        <div class="table admin-table-4">
          ${vendors.spend.map(vendorSpendRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Vendor guardrails</h2>
        <div class="admin-checklist">
          ${vendors.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminRegionalLaunch() {
  const regional = adminRegionalLaunchData();
  const summary = regional.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Launch markets", summary.launchMarkets || "9")}
      ${metric("Ready markets", summary.readyMarkets || "4")}
      ${metric("Blocked markets", summary.blockedMarkets || "3")}
      ${metric("Payment coverage", summary.paymentCoverage || "71%")}
      <section class="admin-card full-admin">
        <h2>Country launch readiness</h2>
        <div class="table admin-table-4">
          ${regional.markets.map(regionalMarketRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Localization readiness</h2>
        <div class="table admin-table-4">
          ${regional.localization.map(regionalLocalizationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Launch blockers</h2>
        <div class="table admin-table-4">
          ${regional.blockers.map(regionalBlockerRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Local partner motions</h2>
        <div class="table admin-table-4">
          ${regional.partners.map(regionalPartnerRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Regional launch guardrails</h2>
        <div class="admin-checklist">
          ${regional.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminQa() {
  const qa = adminQaData();
  const summary = qa.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Open regressions", summary.openRegressions || "11")}
      ${metric("Release blockers", summary.releaseBlockers || "4")}
      ${metric("Device coverage", summary.deviceCoverage || "86%")}
      ${metric("Accessibility", summary.accessibilityScore || "91%")}
      <section class="admin-card full-admin">
        <h2>Regression suites</h2>
        <div class="table admin-table-4">
          ${qa.suites.map(qaSuiteRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Device and viewport coverage</h2>
        <div class="table admin-table-4">
          ${qa.devices.map(qaDeviceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Release blockers</h2>
        <div class="table admin-table-4">
          ${qa.blockers.map(qaBlockerRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Accessibility checks</h2>
        <div class="table admin-table-4">
          ${qa.accessibility.map(qaAccessibilityRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>QA guardrails</h2>
        <div class="admin-checklist">
          ${qa.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminRoadmap() {
  const roadmap = adminRoadmapData();
  const summary = roadmap.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Initiatives", summary.activeInitiatives || "18")}
      ${metric("Release candidates", summary.releaseCandidates || "5")}
      ${metric("Blocked items", summary.blockedItems || "6")}
      ${metric("Confidence", summary.roadmapConfidence || "81%")}
      <section class="admin-card full-admin">
        <h2>Strategic initiatives</h2>
        <div class="table admin-table-4">
          ${roadmap.initiatives.map(roadmapInitiativeRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Release candidates</h2>
        <div class="table admin-table-4">
          ${roadmap.releases.map(roadmapReleaseRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Critical dependencies</h2>
        <div class="table admin-table-4">
          ${roadmap.dependencies.map(roadmapDependencyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Customer request signals</h2>
        <div class="table admin-table-4">
          ${roadmap.requests.map(roadmapRequestRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Roadmap guardrails</h2>
        <div class="admin-checklist">
          ${roadmap.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminCommunity() {
  const community = adminCommunityData();
  const summary = community.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Contributors", summary.activeContributors || "1,284")}
      ${metric("Pending items", summary.pendingContributions || "312")}
      ${metric("Ambassador markets", summary.ambassadorMarkets || "11")}
      ${metric("Trust score", summary.trustScore || "93%")}
      <section class="admin-card full-admin">
        <h2>Community cohorts</h2>
        <div class="table admin-table-4">
          ${community.contributors.map(communityContributorRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Contribution queues</h2>
        <div class="table admin-table-4">
          ${community.contributions.map(communityContributionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Ecosystem programs</h2>
        <div class="table admin-table-4">
          ${community.programs.map(communityProgramRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Community events</h2>
        <div class="table admin-table-4">
          ${community.events.map(communityEventRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Community guardrails</h2>
        <div class="admin-checklist">
          ${community.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminComplianceEvidence() {
  const compliance = adminComplianceEvidenceData();
  const summary = compliance.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Controls", summary.controlsTracked || "64")}
      ${metric("Evidence items", summary.evidenceItems || "184")}
      ${metric("Audit readiness", summary.auditReadiness || "78%")}
      ${metric("Open gaps", summary.openGaps || "9")}
      <section class="admin-card full-admin">
        <h2>Control evidence map</h2>
        <div class="table admin-table-4">
          ${compliance.controls.map(complianceControlRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Evidence vault</h2>
        <div class="table admin-table-4">
          ${compliance.evidence.map(complianceEvidenceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Audit readiness</h2>
        <div class="table admin-table-4">
          ${compliance.audits.map(complianceAuditRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Compliance gaps</h2>
        <div class="table admin-table-4">
          ${compliance.gaps.map(complianceGapRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Evidence guardrails</h2>
        <div class="admin-checklist">
          ${compliance.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminTrustCenter() {
  const trust = adminTrustCenterData();
  const summary = trust.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Trust score", summary.publicTrustScore || "91%")}
      ${metric("Security reviews", summary.securityReviews || "26")}
      ${metric("Cert readiness", summary.certificationReadiness || "74%")}
      ${metric("Status incidents", summary.statusIncidents || "0")}
      <section class="admin-card full-admin">
        <h2>Published assurances</h2>
        <div class="table admin-table-4">
          ${trust.assurances.map(trustAssuranceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Customer security reviews</h2>
        <div class="table admin-table-4">
          ${trust.reviews.map(trustReviewRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Certification posture</h2>
        <div class="table admin-table-4">
          ${trust.certifications.map(trustCertificationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Subprocessor visibility</h2>
        <div class="table admin-table-4">
          ${trust.subprocessors.map(trustSubprocessorRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Trust Center guardrails</h2>
        <div class="admin-checklist">
          ${trust.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminBoardGovernance() {
  const board = adminBoardGovernanceData();
  const summary = board.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Next board pack", summary.nextBoardPack || "Aug 30")}
      ${metric("Open items", summary.openBoardItems || "8")}
      ${metric("Decisions", summary.strategicDecisions || "5")}
      ${metric("Gov health", summary.governanceHealth || "86%")}
      <section class="admin-card full-admin">
        <h2>Board packets</h2>
        <div class="table admin-table-4">
          ${board.packets.map(boardPacketRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Strategic decisions</h2>
        <div class="table admin-table-4">
          ${board.decisions.map(boardDecisionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Board metrics</h2>
        <div class="table admin-table-4">
          ${board.metrics.map(boardMetricRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Executive escalations</h2>
        <div class="table admin-table-4">
          ${board.escalations.map(boardEscalationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Governance guardrails</h2>
        <div class="admin-checklist">
          ${board.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminInvestorRelations() {
  const investors = adminInvestorRelationsData();
  const summary = investors.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active investors", summary.activeInvestors || "18")}
      ${metric("Data room", summary.dataRoomReadiness || "82%")}
      ${metric("Diligence", summary.diligenceRequests || "14")}
      ${metric("Pipeline", summary.fundingPipeline || "$3.8M")}
      <section class="admin-card full-admin">
        <h2>Investor updates</h2>
        <div class="table admin-table-4">
          ${investors.updates.map(investorUpdateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Fundraising pipeline</h2>
        <div class="table admin-table-4">
          ${investors.pipeline.map(investorPipelineRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Data room readiness</h2>
        <div class="table admin-table-4">
          ${investors.dataRoom.map(investorDataRoomRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Diligence requests</h2>
        <div class="table admin-table-4">
          ${investors.diligence.map(investorDiligenceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Investor disclosure guardrails</h2>
        <div class="admin-checklist">
          ${investors.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminProcurementRevenue() {
  const procurement = adminProcurementRevenueData();
  const summary = procurement.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Procurements", summary.activeProcurements || "22")}
      ${metric("Contract value", summary.contractValue || "$684K")}
      ${metric("Blocked revenue", summary.blockedRevenue || "$96K")}
      ${metric("Avg cycle", summary.avgCycle || "18 days")}
      <section class="admin-card full-admin">
        <h2>Active procurement cycles</h2>
        <div class="table admin-table-4">
          ${procurement.procurements.map(procurementRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Revenue blockers</h2>
        <div class="table admin-table-4">
          ${procurement.blockers.map(procurementBlockerRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Purchase orders</h2>
        <div class="table admin-table-4">
          ${procurement.purchaseOrders.map(purchaseOrderRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Renewal paperwork</h2>
        <div class="table admin-table-4">
          ${procurement.renewals.map(renewalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Procurement guardrails</h2>
        <div class="admin-checklist">
          ${procurement.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminStrategicPartnerships() {
  const partnerships = adminStrategicPartnershipsData();
  const summary = partnerships.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active partners", summary.activePartners || "16")}
      ${metric("Pipeline value", summary.pipelineValue || "$1.4M")}
      ${metric("Signed MoUs", summary.signedMoUs || "5")}
      ${metric("Readiness", summary.channelReadiness || "76%")}
      <section class="admin-card full-admin">
        <h2>Strategic partner portfolio</h2>
        <div class="table admin-table-4">
          ${partnerships.partners.map(partnershipRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Channel pipeline</h2>
        <div class="table admin-table-4">
          ${partnerships.pipeline.map(partnershipPipelineRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Partner integrations</h2>
        <div class="table admin-table-4">
          ${partnerships.integrations.map(partnershipIntegrationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Partnership risks</h2>
        <div class="table admin-table-4">
          ${partnerships.risks.map(partnershipRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Partnership guardrails</h2>
        <div class="admin-checklist">
          ${partnerships.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminLaunchReadiness() {
  const launch = adminLaunchReadinessData();
  const summary = launch.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active launches", summary.activeLaunches || "6")}
      ${metric("Ready", summary.readyLaunches || "3")}
      ${metric("Blocked", summary.blockedLaunches || "2")}
      ${metric("Go/no-go", summary.goNoGoScore || "79%")}
      <section class="admin-card full-admin">
        <h2>Launch portfolio</h2>
        <div class="table admin-table-4">
          ${launch.launches.map(launchRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Go/no-go gates</h2>
        <div class="table admin-table-4">
          ${launch.gates.map(launchGateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Cross-functional readiness</h2>
        <div class="table admin-table-4">
          ${launch.readiness.map(launchReadinessRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Post-launch monitors</h2>
        <div class="table admin-table-4">
          ${launch.monitors.map(launchMonitorRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Launch guardrails</h2>
        <div class="admin-checklist">
          ${launch.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminExecutiveOkrs() {
  const okrs = adminExecutiveOkrsData();
  const summary = okrs.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Objectives", summary.activeObjectives || "7")}
      ${metric("Key results", summary.keyResults || "24")}
      ${metric("On track", summary.onTrack || "16")}
      ${metric("Confidence", summary.confidence || "78%")}
      <section class="admin-card full-admin">
        <h2>Executive objectives</h2>
        <div class="table admin-table-4">
          ${okrs.objectives.map(okrObjectiveRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Key results</h2>
        <div class="table admin-table-4">
          ${okrs.keyResults.map(okrKeyResultRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>OKR blockers</h2>
        <div class="table admin-table-4">
          ${okrs.blockers.map(okrBlockerRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Operating cadence</h2>
        <div class="table admin-table-4">
          ${okrs.cadence.map(okrCadenceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>OKR guardrails</h2>
        <div class="admin-checklist">
          ${okrs.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminOperatingRhythm() {
  const rhythm = adminOperatingRhythmData();
  const summary = rhythm.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Rituals", summary.activeRituals || "9")}
      ${metric("Open actions", summary.openActions || "31")}
      ${metric("Overdue", summary.overdueActions || "6")}
      ${metric("Weekly health", summary.weeklyHealth || "Green")}
      <section class="admin-card full-admin">
        <h2>Leadership rituals</h2>
        <div class="table admin-table-4">
          ${rhythm.rituals.map(rhythmRitualRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Decision log</h2>
        <div class="table admin-table-4">
          ${rhythm.decisions.map(rhythmDecisionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Action ownership</h2>
        <div class="table admin-table-4">
          ${rhythm.actions.map(rhythmActionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Operating health</h2>
        <div class="table admin-table-4">
          ${rhythm.health.map(rhythmHealthRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Operating rhythm guardrails</h2>
        <div class="admin-checklist">
          ${rhythm.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminDataRoom() {
  const dataRoom = adminDataRoomData();
  const summary = dataRoom.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active rooms", summary.activeRooms || "6")}
      ${metric("Evidence packs", summary.evidencePacks || "18")}
      ${metric("Pending access", summary.pendingAccess || "7")}
      ${metric("Export ready", summary.exportReadiness || "84%")}
      <section class="admin-card full-admin">
        <h2>Controlled rooms</h2>
        <div class="table admin-table-4">
          ${dataRoom.rooms.map(dataRoomRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Evidence packs</h2>
        <div class="table admin-table-4">
          ${dataRoom.evidencePacks.map(evidencePackRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Access requests</h2>
        <div class="table admin-table-4">
          ${dataRoom.accessRequests.map(accessRequestRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Scheduled exports</h2>
        <div class="table admin-table-4">
          ${dataRoom.exports.map(exportPacketRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Data room guardrails</h2>
        <div class="admin-checklist">
          ${dataRoom.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminAiGovernance() {
  const governance = adminAiGovernanceData();
  const summary = governance.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Governed models", summary.governedModels || "14")}
      ${metric("Pending approvals", summary.pendingApprovals || "5")}
      ${metric("Exceptions", summary.policyExceptions || "3")}
      ${metric("Gate health", summary.deploymentGates || "91%")}
      <section class="admin-card full-admin">
        <h2>Model approvals</h2>
        <div class="table admin-table-4">
          ${governance.modelApprovals.map(modelApprovalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Deployment gates</h2>
        <div class="table admin-table-4">
          ${governance.deploymentGates.map(deploymentGateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Policy exceptions</h2>
        <div class="table admin-table-4">
          ${governance.exceptions.map(policyExceptionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Required reviews</h2>
        <div class="table admin-table-4">
          ${governance.reviews.map(governanceReviewRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>AI governance guardrails</h2>
        <div class="admin-checklist">
          ${governance.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminModelRisk() {
  const risk = adminModelRiskData();
  const summary = risk.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Tracked routes", summary.trackedRoutes || "22")}
      ${metric("High-risk routes", summary.highRiskRoutes || "6")}
      ${metric("Blocked releases", summary.blockedReleases || "3")}
      ${metric("Human review", summary.humanReviewCoverage || "87%")}
      <section class="admin-card full-admin">
        <h2>Risk tiers</h2>
        <div class="table admin-table-4">
          ${risk.riskTiers.map(modelRiskTierRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Release gates</h2>
        <div class="table admin-table-4">
          ${risk.releaseGates.map(modelRiskGateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Drift signals</h2>
        <div class="table admin-table-4">
          ${risk.driftSignals.map(modelDriftRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Fallback risk</h2>
        <div class="table admin-table-4">
          ${risk.fallbackRisk.map(fallbackRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Human review coverage</h2>
        <div class="table admin-table-4">
          ${risk.humanReview.map(humanReviewQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Model risk guardrails</h2>
        <div class="admin-checklist">
          ${risk.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminMobileOps() {
  const mobile = adminMobileOpsData();
  const summary = mobile.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active builds", summary.activeBuilds || "4")}
      ${metric("Crash-free", summary.crashFree || "99.42%")}
      ${metric("Beta users", summary.betaUsers || "3,840")}
      ${metric("Store ready", summary.storeReadiness || "86%")}
      <section class="admin-card full-admin">
        <h2>Mobile releases</h2>
        <div class="table admin-table-4">
          ${mobile.releases.map(mobileReleaseRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Crash and performance health</h2>
        <div class="table admin-table-4">
          ${mobile.crashHealth.map(mobileCrashRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Store readiness</h2>
        <div class="table admin-table-4">
          ${mobile.storeReadiness.map(storeReadinessRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Device lab coverage</h2>
        <div class="table admin-table-4">
          ${mobile.deviceLabs.map(deviceLabRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Mobile rollout guardrails</h2>
        <div class="admin-checklist">
          ${mobile.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminWebOps() {
  const web = adminWebOpsData();
  const summary = web.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active deployments", summary.activeDeployments || "5")}
      ${metric("Web uptime", summary.webUptime || "99.97%")}
      ${metric("P95 load", summary.p95Load || "1.8s")}
      ${metric("A11y score", summary.accessibilityScore || "94%")}
      <section class="admin-card full-admin">
        <h2>Web deployments</h2>
        <div class="table admin-table-4">
          ${web.deployments.map(webDeploymentRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Frontend performance</h2>
        <div class="table admin-table-4">
          ${web.performance.map(webPerformanceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Browser and device coverage</h2>
        <div class="table admin-table-4">
          ${web.browserCoverage.map(browserCoverageRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Accessibility readiness</h2>
        <div class="table admin-table-4">
          ${web.accessibility.map(webAccessibilityRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Web feature flags</h2>
        <div class="table admin-table-4">
          ${web.featureFlags.map(webFeatureFlagRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Web rollout guardrails</h2>
        <div class="admin-checklist">
          ${web.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminTelemetryOps() {
  const telemetry = adminTelemetryOpsData();
  const summary = telemetry.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Events today", summary.eventsToday || "42.6M")}
      ${metric("Schema health", summary.schemaHealth || "97%")}
      ${metric("Consent coverage", summary.consentCoverage || "94%")}
      ${metric("Dropped events", summary.droppedEvents || "0.8%")}
      <section class="admin-card full-admin">
        <h2>Event pipelines</h2>
        <div class="table admin-table-4">
          ${telemetry.eventPipelines.map(telemetryPipelineRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Schema contracts</h2>
        <div class="table admin-table-4">
          ${telemetry.schemaContracts.map(telemetrySchemaRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Privacy filters</h2>
        <div class="table admin-table-4">
          ${telemetry.privacyFilters.map(telemetryPrivacyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Anomaly detection</h2>
        <div class="table admin-table-4">
          ${telemetry.anomalyDetection.map(telemetryAnomalyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Certified dashboards</h2>
        <div class="table admin-table-4">
          ${telemetry.dashboards.map(telemetryDashboardRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Telemetry guardrails</h2>
        <div class="admin-checklist">
          ${telemetry.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminStatusOps() {
  const statusOps = adminStatusOpsData();
  const summary = statusOps.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Public status", summary.publicStatus || "Operational")}
      ${metric("Open incidents", summary.openIncidents ?? "1")}
      ${metric("Maintenance", summary.maintenanceWindows || "3")}
      ${metric("Subscribers", summary.subscribers || "18.2K")}
      <section class="admin-card full-admin">
        <h2>Status surfaces</h2>
        <div class="table admin-table-4">
          ${statusOps.statusSurfaces.map(statusSurfaceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Active and recent incidents</h2>
        <div class="table admin-table-4">
          ${statusOps.incidents.map(statusIncidentRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Maintenance windows</h2>
        <div class="table admin-table-4">
          ${statusOps.maintenance.map(maintenanceWindowRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Status communications</h2>
        <div class="table admin-table-4">
          ${statusOps.communications.map(statusCommunicationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Postmortem readiness</h2>
        <div class="table admin-table-4">
          ${statusOps.postmortems.map(postmortemRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Status guardrails</h2>
        <div class="admin-checklist">
          ${statusOps.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminIncidentResponse() {
  const incidents = adminIncidentResponseData();
  const summary = incidents.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active incidents", summary.activeIncidents ?? "3")}
      ${metric("SEV-1 open", summary.sev1Open ?? "0")}
      ${metric("Avg ack time", summary.avgAckTime || "3m 42s")}
      ${metric("Rollback ready", summary.rollbackReady || "94%")}
      <section class="admin-card full-admin">
        <h2>Command center</h2>
        <div class="table admin-table-4">
          ${incidents.commandCenter.map(incidentCommandRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Active incident board</h2>
        <div class="table admin-table-4">
          ${incidents.activeIncidents.map(activeIncidentResponseRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Severity lanes</h2>
        <div class="table admin-table-4">
          ${incidents.severityLanes.map(severityLaneRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Rollback checks</h2>
        <div class="table admin-table-4">
          ${incidents.rollbackChecks.map(rollbackCheckRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Incident communications</h2>
        <div class="table admin-table-4">
          ${incidents.communications.map(incidentCommunicationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Postmortems</h2>
        <div class="table admin-table-4">
          ${incidents.postmortems.map(incidentPostmortemRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Incident guardrails</h2>
        <div class="admin-checklist">
          ${incidents.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminDataQualityOps() {
  const quality = adminDataQualityOpsData();
  const summary = quality.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Certified metrics", summary.certifiedMetrics || "42")}
      ${metric("Freshness health", summary.freshnessHealth || "96%")}
      ${metric("Recon gaps", summary.reconciliationGaps || "7")}
      ${metric("Lineage coverage", summary.lineageCoverage || "89%")}
      <section class="admin-card full-admin">
        <h2>Metric health</h2>
        <div class="table admin-table-4">
          ${quality.metricHealth.map(metricHealthRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Freshness monitors</h2>
        <div class="table admin-table-4">
          ${quality.freshnessMonitors.map(freshnessMonitorRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Reconciliation checks</h2>
        <div class="table admin-table-4">
          ${quality.reconciliation.map(reconciliationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Lineage coverage</h2>
        <div class="table admin-table-4">
          ${quality.lineage.map(lineageRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Data quality incidents</h2>
        <div class="table admin-table-4">
          ${quality.qualityIncidents.map(dataQualityIncidentRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Data quality guardrails</h2>
        <div class="admin-checklist">
          ${quality.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminConsentOps() {
  const consent = adminConsentOpsData();
  const summary = consent.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Consent profiles", summary.consentProfiles || "18.4K")}
      ${metric("Training opt-in", summary.trainingOptIn || "41%")}
      ${metric("Voice consent", summary.voiceConsent || "64%")}
      ${metric("Policy coverage", summary.policyCoverage || "92%")}
      <section class="admin-card full-admin">
        <h2>Consent surfaces</h2>
        <div class="table admin-table-4">
          ${consent.consentSurfaces.map(consentSurfaceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Training eligibility</h2>
        <div class="table admin-table-4">
          ${consent.trainingEligibility.map(trainingEligibilityRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Withdrawal queue</h2>
        <div class="table admin-table-4">
          ${consent.withdrawals.map(consentWithdrawalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Policy coverage</h2>
        <div class="table admin-table-4">
          ${consent.policyCoverage.map(consentPolicyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Consent audit trail</h2>
        <div class="table admin-table-4">
          ${consent.auditTrail.map(consentAuditRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Consent guardrails</h2>
        <div class="admin-checklist">
          ${consent.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminSecretsOps() {
  const secrets = adminSecretsOpsData();
  const summary = secrets.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Managed secrets", summary.managedSecrets || "128")}
      ${metric("Rotation health", summary.rotationHealth || "94%")}
      ${metric("Expiring soon", summary.expiringSoon || "6")}
      ${metric("KMS coverage", summary.kmsCoverage || "98%")}
      <section class="admin-card full-admin">
        <h2>Secret inventory</h2>
        <div class="table admin-table-4">
          ${secrets.secretInventory.map(secretInventoryRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Rotation calendar</h2>
        <div class="table admin-table-4">
          ${secrets.rotations.map(secretRotationRowAdmin).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>KMS posture</h2>
        <div class="table admin-table-4">
          ${secrets.kmsPosture.map(kmsPostureRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Certificate expiry</h2>
        <div class="table admin-table-4">
          ${secrets.certificates.map(certificateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Leak response</h2>
        <div class="table admin-table-4">
          ${secrets.leakResponse.map(leakResponseRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Secrets guardrails</h2>
        <div class="admin-checklist">
          ${secrets.guardrails.map(item => `<span>${item}</span>`).join("")}
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

function adminNotificationDelivery() {
  const notifications = adminNotificationDeliveryData();
  const summary = notifications.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Channels healthy", summary.channelsHealthy || "5")}
      ${metric("Consent coverage", summary.consentCoverage || "93%")}
      ${metric("Quiet-hour blocks", summary.quietHourBlocks || "7.2K")}
      ${metric("Failovers today", summary.failoversToday || "18")}
      <section class="admin-card full-admin">
        <h2>Channel health</h2>
        <div class="table admin-table-4">
          ${notifications.channelHealth.map(notificationChannelRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Consent-safe segments</h2>
        <div class="table admin-table-4">
          ${notifications.consentSegments.map(consentSegmentRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Quiet-hour rules</h2>
        <div class="table admin-table-4">
          ${notifications.quietHours.map(quietHourRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Provider failover</h2>
        <div class="table admin-table-4">
          ${notifications.failoverRules.map(failoverRuleRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Delivery incidents</h2>
        <div class="table admin-table-4">
          ${notifications.incidents.map(notificationIncidentRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Notification guardrails</h2>
        <div class="admin-checklist">
          ${notifications.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminLanguages() {
  const languages = adminLanguagesData();
  const summary = languages.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Tracked languages", summary.trackedLanguages || "54")}
      ${metric("Priority markets", summary.priorityMarkets || "12")}
      ${metric("Dialect queues", summary.dialectQueues || "128")}
      ${metric("Avg confidence", summary.averageConfidence || "91%")}
      <section class="admin-card full-admin">
        <h2>Language and country coverage</h2>
        <div class="table admin-table-4">
          ${languages.coverage.map(languageCoverageRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Dialect and tone queues</h2>
        <div class="table admin-table-4">
          ${languages.dialectQueues.map(dialectQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Reviewer network</h2>
        <div class="table admin-table-4">
          ${languages.reviewers.map(reviewerRegionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Quality benchmarks</h2>
        <div class="table admin-table-4">
          ${languages.benchmarks.map(languageBenchmarkRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Language operating guardrails</h2>
        <div class="admin-checklist">
          ${languages.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminCulturalQuality() {
  const culture = adminCulturalQualityData();
  const summary = culture.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Tone reports", summary.toneReports || "284")}
      ${metric("Cultural reviews", summary.culturalReviews || "44")}
      ${metric("Dialect parity", summary.dialectParity || "87%")}
      ${metric("Reviewer capacity", summary.reviewerCapacity || "72%")}
      <section class="admin-card full-admin">
        <h2>Tone segments</h2>
        <div class="table admin-table-4">
          ${culture.toneSegments.map(toneSegmentRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Dialect parity</h2>
        <div class="table admin-table-4">
          ${culture.dialectParity.map(dialectParityRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Cultural review queues</h2>
        <div class="table admin-table-4">
          ${culture.culturalReviewQueues.map(culturalReviewQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Reviewer calibration</h2>
        <div class="table admin-table-4">
          ${culture.reviewerCalibration.map(reviewerCalibrationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Cultural risk signals</h2>
        <div class="table admin-table-4">
          ${culture.culturalRiskSignals.map(culturalRiskSignalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Cultural quality guardrails</h2>
        <div class="admin-checklist">
          ${culture.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminReviewerNetwork() {
  const reviewers = adminReviewerNetworkData();
  const summary = reviewers.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Reviewers", summary.activeReviewers || "116")}
      ${metric("Languages", summary.languageCoverage || "42")}
      ${metric("Calibration", summary.calibrationPass || "88%")}
      ${metric("Backlog", summary.backlog || "312")}
      <section class="admin-card full-admin">
        <h2>Reviewer regions</h2>
        <div class="table admin-table-4">
          ${reviewers.reviewerRegions.map(reviewerNetworkRegionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Review queues</h2>
        <div class="table admin-table-4">
          ${reviewers.reviewQueues.map(languageReviewQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Calibration panels</h2>
        <div class="table admin-table-4">
          ${reviewers.calibrationPanels.map(calibrationPanelRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Reviewer quality</h2>
        <div class="table admin-table-4">
          ${reviewers.reviewerQuality.map(reviewerQualityMetricRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Onboarding pipeline</h2>
        <div class="table admin-table-4">
          ${reviewers.onboardingPipeline.map(reviewerOnboardingRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Reviewer guardrails</h2>
        <div class="admin-checklist">
          ${reviewers.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminCorrectionImprovement() {
  const improvement = adminCorrectionImprovementData();
  const summary = improvement.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Weekly corrections", summary.weeklyCorrections || "1,284")}
      ${metric("Consent ready", summary.consentReady || "88%")}
      ${metric("Reviewer accepted", summary.reviewerAccepted || "71%")}
      ${metric("Eval lift", summary.evalLift || "+4.8%")}
      <section class="admin-card full-admin">
        <h2>Correction intake sources</h2>
        <div class="table admin-table-4">
          ${improvement.intakeSources.map(correctionIntakeRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Correction pipeline</h2>
        <div class="table admin-table-4">
          ${improvement.correctionPipeline.map(correctionPipelineRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Reviewer decisions</h2>
        <div class="table admin-table-4">
          ${improvement.reviewerDecisions.map(correctionDecisionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Improvement impact</h2>
        <div class="table admin-table-4">
          ${improvement.improvementImpact.map(improvementImpactRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Training eligibility</h2>
        <div class="table admin-table-4">
          ${improvement.trainingEligibility.map(trainingEligibilityRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Release handoffs</h2>
        <div class="table admin-table-4">
          ${improvement.releaseHandoffs.map(releaseHandoffRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Correction loop guardrails</h2>
        <div class="admin-checklist">
          ${improvement.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminVoiceSpeech() {
  const voice = adminVoiceSpeechData();
  const summary = voice.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Voice sessions", summary.voiceSessions || "42.8K")}
      ${metric("ASR accuracy", summary.asrAccuracy || "84%")}
      ${metric("TTS naturalness", summary.ttsNaturalness || "81%")}
      ${metric("P95 latency", summary.p95Latency || "1.1s")}
      <section class="admin-card full-admin">
        <h2>Speech model routes</h2>
        <div class="table admin-table-4">
          ${voice.speechRoutes.map(speechRouteRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Accent and noise coverage</h2>
        <div class="table admin-table-4">
          ${voice.accentCoverage.map(accentCoverageRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Mobile capture readiness</h2>
        <div class="table admin-table-4">
          ${voice.mobileCapture.map(mobileCaptureRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Consent and retention</h2>
        <div class="table admin-table-4">
          ${voice.consentRetention.map(voiceConsentRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Latency and quality</h2>
        <div class="table admin-table-4">
          ${voice.latencyQuality.map(voiceQualityMetricRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Voice review queues</h2>
        <div class="table admin-table-4">
          ${voice.reviewQueues.map(voiceReviewQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Voice operations guardrails</h2>
        <div class="admin-checklist">
          ${voice.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminTranslationOps() {
  const translation = adminTranslationOpsData();
  const summary = translation.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Translation requests", summary.translationRequests || "286K")}
      ${metric("Meaning preservation", summary.meaningPreservation || "91%")}
      ${metric("Dialect drift", summary.dialectDrift || "3.8%")}
      ${metric("Review backlog", summary.reviewBacklog || "214")}
      <section class="admin-card full-admin">
        <h2>Translation route quality</h2>
        <div class="table admin-table-4">
          ${translation.routeQuality.map(translationRouteRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Language pair health</h2>
        <div class="table admin-table-4">
          ${translation.languagePairs.map(translationPairRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Translation surface usage</h2>
        <div class="table admin-table-4">
          ${translation.surfaceUsage.map(translationSurfaceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Risk and review queues</h2>
        <div class="table admin-table-4">
          ${translation.riskQueues.map(translationRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Enterprise translation controls</h2>
        <div class="table admin-table-4">
          ${translation.enterpriseControls.map(translationControlRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Translation guardrails</h2>
        <div class="admin-checklist">
          ${translation.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminCreatorStudio() {
  const creator = adminCreatorStudioData();
  const summary = creator.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Creations today", summary.creationsToday || "96.4K")}
      ${metric("Template usage", summary.templateUsage || "42%")}
      ${metric("Brand safety", summary.brandSafety || "97.2%")}
      ${metric("Creator retention", summary.creatorRetention || "64%")}
      <section class="admin-card full-admin">
        <h2>Creator content modes</h2>
        <div class="table admin-table-4">
          ${creator.contentModes.map(creatorContentModeRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Template health</h2>
        <div class="table admin-table-4">
          ${creator.templateHealth.map(creatorTemplateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Tone and brand safety</h2>
        <div class="table admin-table-4">
          ${creator.toneBrandSafety.map(creatorSafetyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Monetization funnels</h2>
        <div class="table admin-table-4">
          ${creator.monetizationFunnels.map(creatorFunnelRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Workflow queues</h2>
        <div class="table admin-table-4">
          ${creator.workflowQueues.map(creatorQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Creator guardrails</h2>
        <div class="admin-checklist">
          ${creator.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminClassroomLearning() {
  const classroom = adminClassroomLearningData();
  const summary = classroom.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Learning sessions", summary.learningSessions || "54.2K")}
      ${metric("Explanation quality", summary.explanationQuality || "90%")}
      ${metric("Local example use", summary.localExampleUse || "68%")}
      ${metric("Safety escalations", summary.safetyEscalations || "31")}
      <section class="admin-card full-admin">
        <h2>Learning modes</h2>
        <div class="table admin-table-4">
          ${classroom.learningModes.map(classroomModeRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Curriculum coverage</h2>
        <div class="table admin-table-4">
          ${classroom.curriculumCoverage.map(classroomCoverageRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Pedagogy signals</h2>
        <div class="table admin-table-4">
          ${classroom.pedagogySignals.map(classroomPedagogyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Learning safety queues</h2>
        <div class="table admin-table-4">
          ${classroom.safetyQueues.map(classroomSafetyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Education partnerships</h2>
        <div class="table admin-table-4">
          ${classroom.partnerships.map(classroomPartnershipRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Classroom guardrails</h2>
        <div class="admin-checklist">
          ${classroom.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminMarketCommerce() {
  const market = adminMarketCommerceData();
  const summary = market.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Market sessions", summary.marketSessions || "72.8K")}
      ${metric("Reply quality", summary.customerReplyQuality || "92%")}
      ${metric("Pricing risk", summary.pricingCopyRisk || "2.4%")}
      ${metric("SMB conversion", summary.smbConversions || "11.8%")}
      <section class="admin-card full-admin">
        <h2>Business modes</h2>
        <div class="table admin-table-4">
          ${market.businessModes.map(marketBusinessModeRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Conversion signals</h2>
        <div class="table admin-table-4">
          ${market.conversionSignals.map(marketConversionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Commerce risks</h2>
        <div class="table admin-table-4">
          ${market.commerceRisks.map(marketRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Market templates</h2>
        <div class="table admin-table-4">
          ${market.marketTemplates.map(marketTemplateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Payment upgrade signals</h2>
        <div class="table admin-table-4">
          ${market.paymentUpgradeSignals.map(marketUpgradeRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Market guardrails</h2>
        <div class="admin-checklist">
          ${market.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminMultimodal() {
  const multimodal = adminMultimodalData();
  const summary = multimodal.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Attachments today", summary.attachmentsToday || "38.6K")}
      ${metric("Successful parses", summary.successfulParses || "93.4%")}
      ${metric("Unsafe blocks", summary.unsafeBlocks || "284")}
      ${metric("Mobile upload", summary.mobileUploadSuccess || "91%")}
      <section class="admin-card full-admin">
        <h2>Modality routes</h2>
        <div class="table admin-table-4">
          ${multimodal.modalityRoutes.map(multimodalRouteRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Attachment safety</h2>
        <div class="table admin-table-4">
          ${multimodal.attachmentSafety.map(multimodalSafetyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Processing queues</h2>
        <div class="table admin-table-4">
          ${multimodal.processingQueues.map(multimodalQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Storage and retention</h2>
        <div class="table admin-table-4">
          ${multimodal.storageRetention.map(multimodalStorageRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Device upload health</h2>
        <div class="table admin-table-4">
          ${multimodal.deviceHealth.map(multimodalDeviceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Multimodal guardrails</h2>
        <div class="admin-checklist">
          ${multimodal.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminSearchRetrieval() {
  const search = adminSearchRetrievalData();
  const summary = search.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Searches today", summary.searchesToday || "118K")}
      ${metric("Grounded answers", summary.groundedAnswerRate || "87%")}
      ${metric("Citation coverage", summary.citationCoverage || "82%")}
      ${metric("Retrieval latency", summary.retrievalLatency || "640ms")}
      <section class="admin-card full-admin">
        <h2>Retrieval routes</h2>
        <div class="table admin-table-4">
          ${search.retrievalRoutes.map(searchRouteRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Source health</h2>
        <div class="table admin-table-4">
          ${search.sourceHealth.map(searchSourceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Citation quality</h2>
        <div class="table admin-table-4">
          ${search.citationQuality.map(searchCitationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Hallucination controls</h2>
        <div class="table admin-table-4">
          ${search.hallucinationControls.map(searchControlRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Freshness queues</h2>
        <div class="table admin-table-4">
          ${search.freshnessQueues.map(searchFreshnessRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Search guardrails</h2>
        <div class="admin-checklist">
          ${search.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminWorkspaceCollaboration() {
  const workspace = adminWorkspaceCollaborationData();
  const summary = workspace.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active workspaces", summary.activeWorkspaces || "3.8K")}
      ${metric("Shared projects", summary.sharedProjects || "1.2K")}
      ${metric("File assets", summary.fileAssets || "48K")}
      ${metric("Sync health", summary.syncHealth || "96%")}
      <section class="admin-card full-admin">
        <h2>Workspace health</h2>
        <div class="table admin-table-4">
          ${workspace.workspaceHealth.map(workspaceHealthRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Collaboration activity</h2>
        <div class="table admin-table-4">
          ${workspace.collaborationActivity.map(workspaceActivityRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Permission controls</h2>
        <div class="table admin-table-4">
          ${workspace.permissionControls.map(workspacePermissionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>File governance</h2>
        <div class="table admin-table-4">
          ${workspace.fileGovernance.map(workspaceFileRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Sync reliability</h2>
        <div class="table admin-table-4">
          ${workspace.syncReliability.map(workspaceSyncRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Workspace guardrails</h2>
        <div class="admin-checklist">
          ${workspace.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminLanguagePassport() {
  const passport = adminLanguagePassportData();
  const summary = passport.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Completion", summary.completionRate || "78.2%")}
      ${metric("Active passports", summary.activePassports || "14.4K")}
      ${metric("Primary languages", summary.primaryLanguages || "54")}
      ${metric("Bridge pairs", summary.bridgePairs || "128")}
      <section class="admin-card full-admin">
        <h2>Completion funnel</h2>
        <div class="table admin-table-4">
          ${passport.completionFunnel.map(passportFunnelRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Field quality</h2>
        <div class="table admin-table-4">
          ${passport.fieldQuality.map(passportFieldQualityRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Language and bridge pairs</h2>
        <div class="table admin-table-4">
          ${passport.languagePairs.map(passportLanguagePairRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Personalization surfaces</h2>
        <div class="table admin-table-4">
          ${passport.personalizationSurfaces.map(passportSurfaceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Consent controls</h2>
        <div class="table admin-table-4">
          ${passport.consentControls.map(passportConsentRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Passport quality risks</h2>
        <div class="table admin-table-4">
          ${passport.qualityRisks.map(passportRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Language Passport guardrails</h2>
        <div class="admin-checklist">
          ${passport.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminLocalizationContent() {
  const localization = adminLocalizationContentData();
  const summary = localization.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Locales in progress", summary.localesInProgress || "18")}
      ${metric("Strings ready", summary.stringsReady || "84%")}
      ${metric("Glossary terms", summary.glossaryTerms || "420")}
      ${metric("Release blockers", summary.releaseBlockers || "3")}
      <section class="admin-card full-admin">
        <h2>Locale readiness</h2>
        <div class="table admin-table-4">
          ${localization.localeReadiness.map(localizationReadinessRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Content queues</h2>
        <div class="table admin-table-4">
          ${localization.contentQueues.map(localizationQueueRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Glossary and termbase</h2>
        <div class="table admin-table-4">
          ${localization.glossary.map(glossaryTermRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Reviewer workflow</h2>
        <div class="table admin-table-4">
          ${localization.reviewerWorkflow.map(localizationReviewerRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Release checks</h2>
        <div class="table admin-table-4">
          ${localization.releaseChecks.map(localizationReleaseRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Localization guardrails</h2>
        <div class="admin-checklist">
          ${localization.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminDataGovernance() {
  const data = adminDataGovernanceData();
  const summary = data.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Retention policies", summary.retentionPolicies || "9")}
      ${metric("Consent coverage", summary.consentCoverage || "88%")}
      ${metric("Residency regions", summary.residencyRegions || "4")}
      ${metric("PII findings", summary.piiFindings || "29")}
      <section class="admin-card full-admin">
        <h2>Retention policies</h2>
        <div class="table admin-table-4">
          ${data.retention.map(retentionPolicyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Consent and memory controls</h2>
        <div class="table admin-table-4">
          ${data.consent.map(consentControlRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Data residency</h2>
        <div class="table admin-table-4">
          ${data.residency.map(residencyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Privacy requests</h2>
        <div class="table admin-table-4">
          ${data.requests.map(privacyRequestRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Governance guardrails</h2>
        <div class="admin-checklist">
          ${data.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminMemoryPersonalization() {
  const memory = adminMemoryPersonalizationData();
  const summary = memory.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Memory profiles", summary.memoryProfiles || "12.8K")}
      ${metric("Opt-in rate", summary.optInRate || "88%")}
      ${metric("Deletion queue", summary.deletionQueue || "4")}
      ${metric("Export readiness", summary.exportReadiness || "92%")}
      <section class="admin-card full-admin">
        <h2>Memory surfaces</h2>
        <div class="table admin-table-4">
          ${memory.memorySurfaces.map(memorySurfaceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Consent controls</h2>
        <div class="table admin-table-4">
          ${memory.consentControls.map(consentControlRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>User controls</h2>
        <div class="table admin-table-4">
          ${memory.userControls.map(memoryUserControlRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Personalization quality</h2>
        <div class="table admin-table-4">
          ${memory.personalizationQuality.map(personalizationQualityRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Risk reviews</h2>
        <div class="table admin-table-4">
          ${memory.riskReviews.map(memoryRiskReviewRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Memory guardrails</h2>
        <div class="admin-checklist">
          ${memory.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminResidencySovereignty() {
  const residency = adminResidencySovereigntyData();
  const summary = residency.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Regions", summary.residencyRegions || "5")}
      ${metric("Transfer reviews", summary.transferReviews || "14")}
      ${metric("Datasets", summary.sovereignDatasets || "38")}
      ${metric("Key custody", summary.keyCustodyHealth || "97%")}
      <section class="admin-card full-admin">
        <h2>Regional residency posture</h2>
        <div class="table admin-table-4">
          ${residency.regionPosture.map(regionPostureRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Cross-border transfer reviews</h2>
        <div class="table admin-table-4">
          ${residency.transferReviews.map(transferReviewRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Data stores</h2>
        <div class="table admin-table-4">
          ${residency.dataStores.map(dataStoreResidencyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Encryption and key custody</h2>
        <div class="table admin-table-4">
          ${residency.keyCustody.map(keyCustodyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Retention controls</h2>
        <div class="table admin-table-4">
          ${residency.retentionControls.map(retentionControlRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Residency guardrails</h2>
        <div class="admin-checklist">
          ${residency.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminPrivacyRequests() {
  const privacy = adminPrivacyRequestsData();
  const summary = privacy.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Open requests", summary.openRequests || "31")}
      ${metric("Export queue", summary.exportQueue || "9")}
      ${metric("Deletion queue", summary.deletionQueue || "4")}
      ${metric("SLA at risk", summary.slaAtRisk || "3")}
      <section class="admin-card full-admin">
        <h2>Request intake</h2>
        <div class="table admin-table-4">
          ${privacy.requests.map(privacyOpsRequestRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Export packages</h2>
        <div class="table admin-table-4">
          ${privacy.exports.map(privacyExportRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Deletion workflows</h2>
        <div class="table admin-table-4">
          ${privacy.deletions.map(privacyDeletionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Legal and safety holds</h2>
        <div class="table admin-table-4">
          ${privacy.holds.map(privacyHoldRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Residency reviews</h2>
        <div class="table admin-table-4">
          ${privacy.residencyReviews.map(privacyResidencyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Privacy request guardrails</h2>
        <div class="admin-checklist">
          ${privacy.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminDpia() {
  const dpia = adminDpiaData();
  const summary = dpia.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Assessments", summary.openAssessments || "12")}
      ${metric("High-risk", summary.highRiskLaunches || "5")}
      ${metric("Mitigations", summary.mitigationsDue || "18")}
      ${metric("Residual risk", summary.residualRisk || "Medium")}
      <section class="admin-card full-admin">
        <h2>Impact assessments</h2>
        <div class="table admin-table-4">
          ${dpia.assessments.map(dpiaAssessmentRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>High-risk processing</h2>
        <div class="table admin-table-4">
          ${dpia.highRiskProcessing.map(highRiskProcessingRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Mitigation plan</h2>
        <div class="table admin-table-4">
          ${dpia.mitigations.map(dpiaMitigationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Launch approvals</h2>
        <div class="table admin-table-4">
          ${dpia.approvals.map(dpiaApprovalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Residual risks</h2>
        <div class="table admin-table-4">
          ${dpia.residualRisks.map(residualRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>DPIA guardrails</h2>
        <div class="admin-checklist">
          ${dpia.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminIntegrations() {
  const integrations = adminIntegrationsData();
  const summary = integrations.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Connected services", summary.connectedServices || "18")}
      ${metric("Degraded services", summary.degradedServices || "2")}
      ${metric("Webhook retries", summary.webhookRetries || "42")}
      ${metric("Secrets rotating", summary.secretsRotating || "3")}
      <section class="admin-card full-admin">
        <h2>Connected services</h2>
        <div class="table admin-table-4">
          ${integrations.services.map(integrationServiceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Webhook delivery</h2>
        <div class="table admin-table-4">
          ${integrations.webhooks.map(integrationWebhookRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Partner accounts</h2>
        <div class="table admin-table-4">
          ${integrations.partners.map(partnerIntegrationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Secrets and credentials</h2>
        <div class="table admin-table-4">
          ${integrations.secrets.map(secretRotationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Integration guardrails</h2>
        <div class="admin-checklist">
          ${integrations.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminExperiments() {
  const experiments = adminExperimentsData();
  const summary = experiments.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Active experiments", summary.activeExperiments || "9")}
      ${metric("Winning tests", summary.winningTests || "3")}
      ${metric("Rollout flags", summary.rolloutFlags || "18")}
      ${metric("Kill switches", summary.killSwitches || "1")}
      <section class="admin-card full-admin">
        <h2>Experiment results</h2>
        <div class="table admin-table-4">
          ${experiments.experiments.map(experimentRowAdmin).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Feature flags</h2>
        <div class="table admin-table-4">
          ${experiments.flags.map(experimentFlagRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Guarded rollouts</h2>
        <div class="table admin-table-4">
          ${experiments.rollouts.map(rolloutRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Product decisions</h2>
        <div class="table admin-table-4">
          ${experiments.decisions.map(experimentDecisionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Experiment guardrails</h2>
        <div class="admin-checklist">
          ${experiments.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminEvaluations() {
  const evaluations = adminEvaluationsData();
  const summary = evaluations.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Eval suites", summary.evalSuites || "14")}
      ${metric("Runs today", summary.runsToday || "38")}
      ${metric("Regressions", summary.regressions || "7")}
      ${metric("Human samples", summary.humanSamples || "312")}
      <section class="admin-card full-admin">
        <h2>Evaluation suites</h2>
        <div class="table admin-table-4">
          ${evaluations.suites.map(evalSuiteRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Benchmark runs</h2>
        <div class="table admin-table-4">
          ${evaluations.runs.map(evalRunRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Regressions</h2>
        <div class="table admin-table-4">
          ${evaluations.regressions.map(evalRegressionRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Release gates</h2>
        <div class="table admin-table-4">
          ${evaluations.releaseGates.map(evalGateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Evaluation guardrails</h2>
        <div class="admin-checklist">
          ${evaluations.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminCustomerSuccess() {
  const success = adminCustomerSuccessData();
  const summary = success.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Enterprise accounts", summary.enterpriseAccounts || "47")}
      ${metric("Onboarding", summary.onboardingWorkspaces || "8")}
      ${metric("Renewal risk", summary.renewalRisk || "6")}
      ${metric("Health score", summary.healthScore || "86%")}
      <section class="admin-card full-admin">
        <h2>Account health</h2>
        <div class="table admin-table-4">
          ${success.accounts.map(successAccountRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Onboarding milestones</h2>
        <div class="table admin-table-4">
          ${success.onboarding.map(onboardingRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Renewals and expansion</h2>
        <div class="table admin-table-4">
          ${success.renewals.map(renewalRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Success playbooks</h2>
        <div class="table admin-table-4">
          ${success.playbooks.map(successPlaybookRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Customer success guardrails</h2>
        <div class="admin-checklist">
          ${success.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminSales() {
  const sales = adminSalesData();
  const summary = sales.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Pipeline ARR", summary.pipelineArr || "$684K")}
      ${metric("Qualified deals", summary.qualifiedDeals || "38")}
      ${metric("Demos booked", summary.demosBooked || "21")}
      ${metric("Procurement risk", summary.procurementRisk || "5")}
      <section class="admin-card full-admin">
        <h2>Enterprise pipeline</h2>
        <div class="table admin-table-4">
          ${sales.pipeline.map(salesPipelineRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Demo calendar</h2>
        <div class="table admin-table-4">
          ${sales.demos.map(salesDemoRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Procurement blockers</h2>
        <div class="table admin-table-4">
          ${sales.procurement.map(procurementRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Partner-led pipeline</h2>
        <div class="table admin-table-4">
          ${sales.partners.map(partnerLeadRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Sales guardrails</h2>
        <div class="admin-checklist">
          ${sales.guardrails.map(item => `<span>${item}</span>`).join("")}
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

function adminDevexCicd() {
  const devex = adminDevexCicdData();
  const summary = devex.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Build success", summary.buildSuccess || "96.8%")}
      ${metric("Deploys today", summary.deploysToday || "14")}
      ${metric("Build breaks", summary.openBuildBreaks || "2")}
      ${metric("Quality gates", summary.qualityGatePass || "91%")}
      <section class="admin-card full-admin">
        <h2>Build pipelines</h2>
        <div class="table admin-table-4">
          ${devex.pipelines.map(pipelineRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Environments</h2>
        <div class="table admin-table-4">
          ${devex.environments.map(environmentRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Quality gates</h2>
        <div class="table admin-table-4">
          ${devex.qualityGates.map(qualityGateRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Deploy automation</h2>
        <div class="table admin-table-4">
          ${devex.deployAutomation.map(deployAutomationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Developer tooling</h2>
        <div class="table admin-table-4">
          ${devex.developerTooling.map(developerToolRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>DevEx guardrails</h2>
        <div class="admin-checklist">
          ${devex.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
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

function adminBusinessContinuity() {
  const continuity = adminBusinessContinuityData();
  const summary = continuity.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Recovery readiness", summary.recoveryReadiness || "88%")}
      ${metric("Backup freshness", summary.backupFreshness || "12 min")}
      ${metric("Open risks", summary.openContinuityRisks || "4")}
      ${metric("RTO coverage", summary.rtoCoverage || "92%")}
      <section class="admin-card full-admin">
        <h2>Recovery objectives</h2>
        <div class="table admin-table-4">
          ${continuity.recoveryObjectives.map(recoveryObjectiveRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Backup and restore evidence</h2>
        <div class="table admin-table-4">
          ${continuity.backups.map(backupAssetRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Continuity risks</h2>
        <div class="table admin-table-4">
          ${continuity.continuityRisks.map(continuityRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Incident command</h2>
        <div class="table admin-table-4">
          ${continuity.incidentCommand.map(incidentCommandRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Regional fallback</h2>
        <div class="table admin-table-4">
          ${continuity.regionalFallback.map(regionalFallbackRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Continuity guardrails</h2>
        <div class="admin-checklist">
          ${continuity.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminReliabilitySlos() {
  const slos = adminReliabilitySlosData();
  const summary = slos.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Customer uptime", summary.customerUptime || "99.94%")}
      ${metric("Error budget used", summary.errorBudgetUsed || "38%")}
      ${metric("SLO breaches", summary.sloBreaches || "2")}
      ${metric("Status readiness", summary.statusReadiness || "Green")}
      <section class="admin-card full-admin">
        <h2>Service level objectives</h2>
        <div class="table admin-table-4">
          ${slos.objectives.map(sloObjectiveRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Error budgets</h2>
        <div class="table admin-table-4">
          ${slos.errorBudgets.map(errorBudgetRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Regional reliability</h2>
        <div class="table admin-table-4">
          ${slos.regions.map(regionalReliabilityRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Status page readiness</h2>
        <div class="table admin-table-4">
          ${slos.statusPage.map(statusPageRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>SLO guardrails</h2>
        <div class="admin-checklist">
          ${slos.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminObservabilityLogs() {
  const observability = adminObservabilityLogsData();
  const summary = observability.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Logs ingested", summary.logsIngested || "184M")}
      ${metric("Traces sampled", summary.tracesSampled || "12%")}
      ${metric("Active alerts", summary.activeAlerts || "7")}
      ${metric("Redaction", summary.redactionCoverage || "99.4%")}
      <section class="admin-card full-admin">
        <h2>Log streams</h2>
        <div class="table admin-table-4">
          ${observability.logStreams.map(logStreamRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Trace coverage</h2>
        <div class="table admin-table-4">
          ${observability.traces.map(traceServiceRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Alert routes</h2>
        <div class="table admin-table-4">
          ${observability.alertRoutes.map(alertRouteRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Debugging incidents</h2>
        <div class="table admin-table-4">
          ${observability.incidents.map(observabilityIncidentRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Observability dashboards</h2>
        <div class="table admin-table-4">
          ${observability.dashboards.map(observabilityDashboardRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Observability guardrails</h2>
        <div class="admin-checklist">
          ${observability.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminCapacityPlanning() {
  const capacity = adminCapacityPlanningData();
  const summary = capacity.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Forecast window", summary.forecastWindow || "90 days")}
      ${metric("Demand growth", summary.demandGrowth || "+42%")}
      ${metric("GPU headroom", summary.gpuHeadroom || "31%")}
      ${metric("Capacity risks", summary.capacityRisks || "4")}
      <section class="admin-card full-admin">
        <h2>Demand forecasts</h2>
        <div class="table admin-table-4">
          ${capacity.forecasts.map(capacityForecastRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Compute pools</h2>
        <div class="table admin-table-4">
          ${capacity.computePools.map(computePoolRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Storage capacity</h2>
        <div class="table admin-table-4">
          ${capacity.storage.map(storageCapacityRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Scaling plans</h2>
        <div class="table admin-table-4">
          ${capacity.plans.map(scalingPlanRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Capacity guardrails</h2>
        <div class="admin-checklist">
          ${capacity.guardrails.map(item => `<span>${item}</span>`).join("")}
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

function adminInvestigations() {
  const investigations = adminInvestigationsData();
  const summary = investigations.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Open cases", summary.openCases || "18")}
      ${metric("High priority", summary.highPriority || "5")}
      ${metric("Evidence items", summary.evidenceItems || "284")}
      ${metric("Legal holds", summary.legalHolds || "7")}
      <section class="admin-card full-admin">
        <h2>Investigation cases</h2>
        <div class="table admin-table-4">
          ${investigations.cases.map(investigationCaseRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Evidence custody</h2>
        <div class="table admin-table-4">
          ${investigations.evidenceCustody.map(evidenceCustodyRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Incident timelines</h2>
        <div class="table admin-table-4">
          ${investigations.timelines.map(investigationTimelineRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Legal holds</h2>
        <div class="table admin-table-4">
          ${investigations.legalHolds.map(legalHoldRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Cross-team handoffs</h2>
        <div class="table admin-table-4">
          ${investigations.handoffs.map(investigationHandoffRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Forensic guardrails</h2>
        <div class="admin-checklist">
          ${investigations.guardrails.map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function adminIdentityAuth() {
  const identity = adminIdentityAuthData();
  const summary = identity.summary || {};
  return `
    <div class="admin-grid">
      ${metric("Signups today", summary.signupsToday || "2,184")}
      ${metric("Login success", summary.loginSuccess || "98.9%")}
      ${metric("MFA coverage", summary.mfaCoverage || "42%")}
      ${metric("Recovery queue", summary.recoveryQueue || "27")}
      <section class="admin-card full-admin">
        <h2>Auth funnel</h2>
        <div class="table admin-table-4">
          ${identity.authFunnel.map(authFunnelRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Sign-in health</h2>
        <div class="table admin-table-4">
          ${identity.signInHealth.map(signInHealthRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Verification and MFA</h2>
        <div class="table admin-table-4">
          ${identity.verification.map(authVerificationRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Account recovery</h2>
        <div class="table admin-table-4">
          ${identity.recovery.map(recoveryFlowRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Session risk signals</h2>
        <div class="table admin-table-4">
          ${identity.sessionRisk.map(sessionRiskRow).join("")}
        </div>
      </section>
      <section class="admin-card full-admin">
        <h2>Identity guardrails</h2>
        <div class="admin-checklist">
          ${identity.guardrails.map(item => `<span>${item}</span>`).join("")}
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
      loadAdminDevexCicd(true);
      loadAdminPayments(true);
      loadAdminEntitlements(true);
      loadAdminRevenueAssurance(true);
      loadAdminSubscriptions(true);
      loadAdminFinance(true);
      loadAdminUnitEconomics(true);
      loadAdminUsers(true);
      loadAdminSupport(true);
      loadAdminConversations(true);
      loadAdminPromptWorkflows(true);
      loadAdminCustomerExperience(true);
      loadAdminModels(true);
      loadAdminModelLicensing(true);
      loadAdminDatasetGovernance(true);
      loadAdminEvaluations(true);
      loadAdminLanguages(true);
      loadAdminCulturalQuality(true);
      loadAdminReviewerNetwork(true);
      loadAdminCorrectionImprovement(true);
      loadAdminVoiceSpeech(true);
      loadAdminTranslationOps(true);
      loadAdminCreatorStudio(true);
      loadAdminClassroomLearning(true);
      loadAdminMarketCommerce(true);
      loadAdminMultimodal(true);
      loadAdminSearchRetrieval(true);
      loadAdminWorkspaceCollaboration(true);
      loadAdminLanguagePassport(true);
      loadAdminLocalizationContent(true);
      loadAdminDataGovernance(true);
      loadAdminMemoryPersonalization(true);
      loadAdminResidencySovereignty(true);
      loadAdminPrivacyRequests(true);
      loadAdminDpia(true);
      loadAdminPolicyGovernance(true);
      loadAdminSafety(true);
      loadAdminFraudAbuse(true);
      loadAdminSecurity(true);
      loadAdminInfrastructure(true);
      loadAdminBusinessContinuity(true);
      loadAdminReliabilitySlos(true);
      loadAdminObservabilityLogs(true);
      loadAdminCapacityPlanning(true);
      loadAdminGrowth(true);
      loadAdminAnalytics(true);
      loadAdminLifecycleRetention(true);
      loadAdminExperiments(true);
      loadAdminReports(true);
      loadAdminWarehouseBi(true);
      loadAdminRisk(true);
      loadAdminLegal(true);
      loadAdminPeople(true);
      loadAdminVendors(true);
      loadAdminRegionalLaunch(true);
      loadAdminQa(true);
      loadAdminRoadmap(true);
      loadAdminCommunity(true);
      loadAdminComplianceEvidence(true);
      loadAdminTrustCenter(true);
      loadAdminBoardGovernance(true);
      loadAdminInvestorRelations(true);
      loadAdminProcurementRevenue(true);
      loadAdminStrategicPartnerships(true);
      loadAdminLaunchReadiness(true);
      loadAdminExecutiveOkrs(true);
      loadAdminOperatingRhythm(true);
      loadAdminDataRoom(true);
      loadAdminAiGovernance(true);
      loadAdminModelRisk(true);
      loadAdminWebOps(true);
      loadAdminTelemetryOps(true);
      loadAdminStatusOps(true);
      loadAdminIncidentResponse(true);
      loadAdminDataQualityOps(true);
      loadAdminConsentOps(true);
      loadAdminSecretsOps(true);
      loadAdminMobileOps(true);
      loadAdminCommunications(true);
      loadAdminNotificationDelivery(true);
      loadAdminCustomerSuccess(true);
      loadAdminSales(true);
      loadAdminAccess(true);
      loadAdminInvestigations(true);
      loadAdminIdentityAuth(true);
      loadAdminActions(true);
      loadAdminApi(true);
      loadAdminIntegrations(true);
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
