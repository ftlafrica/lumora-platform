# Lumora Web Platform

This folder is the first working web implementation of Lumora.

It is currently a dependency-free single-page app so the product can be opened, tested, and refined immediately before choosing the final production stack.

## Open Locally

Open `index.html` in a browser.

Admin preview entry: open `admin.html` or `index.html#admin-preview`.

## Current Working Scope

- Welcome screen
- Fresh centered chat
- Active chat thread
- Responsive sidebar navigation with mobile drawer
- Consumer modes: AI Chat, Translate, Voice Circle, Market Mode, Classroom, Creator Studio
- Profile and Language Passport
- Login/sign-up flow with guest start
- Language and tone controls
- Theme, font-size, memory, privacy, voice, and model-route settings
- Premium plan selection with Free, Plus, Pro, and Teams
- Personal user dashboard with plan usage, language passport, activity, and preferences
- Seed-admin-gated enterprise Admin Console
- Enterprise Admin Dashboard sections: Command, Growth, Analytics, Experiments, Reports, Risk, Legal, Communications, People, Vendors, Regional, QA, Roadmap, Community, Payments, Entitlements, Revenue Ops, Subscriptions, Finance, Users and Orgs, Success, Sales, Support, AI Ops, Evals, Languages, Data Gov, Residency, DPIA, Knowledge, Safety, Security, Platform, Infrastructure, API, Integrations, Access, Operations
- Admin metrics connection to the local API with preview fallback
- Hugging Face model registry prototype
- API-first chat calls with local simulated fallback
- LocalStorage persistence

## Consumer Web Flow

1. `#welcome` introduces Lumora and routes users to guest mode, signup, plans, or the app map.
2. `#auth` supports sign up, login, Language Passport fields, and guest continuation.
3. `#fresh` gives a centered first prompt before a conversation starts.
4. Prompt chips or the send button create a new chat thread and route to `#chat`.
5. The sidebar exposes Lumora modes and recent conversations without cluttering the chat surface.
6. `#plans` updates the user's selected plan and returns them to `#dashboard`.
7. `#dashboard` shows safe user-facing information only.

## API Integration

For the connected prototype, start the API in a second terminal:

```powershell
cd api-platform
npm run start
```

The web app posts chat prompts to `http://localhost:8787/v1/chat`. If the API is not running, the interface still works using the local Lumora simulation so design and product review can continue.

The Admin Console calls `http://localhost:8787/v1/admin/access/verify` to validate the prototype seed-admin code, then calls `http://localhost:8787/v1/admin/metrics`, `http://localhost:8787/v1/admin/audit`, `http://localhost:8787/v1/admin/platform`, `http://localhost:8787/v1/admin/devex-cicd`, `http://localhost:8787/v1/admin/infrastructure`, `http://localhost:8787/v1/admin/business-continuity`, `http://localhost:8787/v1/admin/reliability-slos`, `http://localhost:8787/v1/admin/observability-logs`, `http://localhost:8787/v1/admin/capacity-planning`, `http://localhost:8787/v1/admin/payments`, `http://localhost:8787/v1/admin/entitlements`, `http://localhost:8787/v1/admin/revenue-assurance`, `http://localhost:8787/v1/admin/subscriptions`, `http://localhost:8787/v1/admin/finance`, `http://localhost:8787/v1/admin/unit-economics`, `http://localhost:8787/v1/admin/users`, `http://localhost:8787/v1/admin/customer-success`, `http://localhost:8787/v1/admin/sales`, `http://localhost:8787/v1/admin/models`, `http://localhost:8787/v1/admin/model-licensing`, `http://localhost:8787/v1/admin/evaluations`, `http://localhost:8787/v1/admin/languages`, `http://localhost:8787/v1/admin/localization-content`, `http://localhost:8787/v1/admin/data-governance`, `http://localhost:8787/v1/admin/residency-sovereignty`, `http://localhost:8787/v1/admin/privacy-requests`, `http://localhost:8787/v1/admin/dpia`, `http://localhost:8787/v1/admin/safety`, `http://localhost:8787/v1/admin/fraud-abuse`, `http://localhost:8787/v1/admin/security`, `http://localhost:8787/v1/admin/growth`, `http://localhost:8787/v1/admin/analytics`, `http://localhost:8787/v1/admin/lifecycle-retention`, `http://localhost:8787/v1/admin/experiments`, `http://localhost:8787/v1/admin/reports`, `http://localhost:8787/v1/admin/warehouse-bi`, `http://localhost:8787/v1/admin/compliance-evidence`, `http://localhost:8787/v1/admin/trust-center`, `http://localhost:8787/v1/admin/board-governance`, `http://localhost:8787/v1/admin/investor-relations`, `http://localhost:8787/v1/admin/procurement-revenue`, `http://localhost:8787/v1/admin/strategic-partnerships`, `http://localhost:8787/v1/admin/launch-readiness`, `http://localhost:8787/v1/admin/executive-okrs`, `http://localhost:8787/v1/admin/operating-rhythm`, `http://localhost:8787/v1/admin/data-room`, `http://localhost:8787/v1/admin/ai-governance`, `http://localhost:8787/v1/admin/mobile-ops`, `http://localhost:8787/v1/admin/risk`, `http://localhost:8787/v1/admin/legal`, `http://localhost:8787/v1/admin/people`, `http://localhost:8787/v1/admin/vendors`, `http://localhost:8787/v1/admin/regional-launch`, `http://localhost:8787/v1/admin/qa`, `http://localhost:8787/v1/admin/roadmap`, `http://localhost:8787/v1/admin/community`, `http://localhost:8787/v1/admin/communications`, `http://localhost:8787/v1/admin/notification-delivery`, `http://localhost:8787/v1/admin/access`, `http://localhost:8787/v1/admin/investigations`, `http://localhost:8787/v1/admin/identity-auth`, `http://localhost:8787/v1/admin/actions`, `http://localhost:8787/v1/admin/api`, `http://localhost:8787/v1/admin/integrations`, `http://localhost:8787/v1/admin/knowledge`, `http://localhost:8787/v1/admin/support`, and `http://localhost:8787/v1/admin/customer-experience` with the prototype seed-admin header. When the API is offline, it stays usable with preview metrics and labels the dashboard as `Preview fallback`.

## Admin Separation

The consumer app should never expose sensitive admin operations in the normal user profile or sidebar.

- Users see `Dashboard` for safe plan, language passport, and activity information.
- Enterprise operators use `admin.html` or `#admin-preview` for prototype previewing.
- The Admin Console is separated into leadership/dev operating areas: executive command, visitor growth, analytics/retention, lifecycle/retention ops, experimentation/feature flags, reporting/exports, warehouse/BI ops, compliance evidence, Trust Center ops, board governance, investor relations, procurement revenue, strategic partnerships, launch readiness, executive OKRs, operating rhythm, data room, AI governance, mobile ops, enterprise risk, legal/policy, communications, notification delivery ops, people/workforce ops, vendor/procurement ops, regional launch ops, QA/test ops, product roadmap, community/ecosystem ops, payments, entitlements/quota operations, revenue assurance/tax operations, subscription lifecycle operations, finance/cost operations, unit economics, user/org management, customer success, enterprise sales, support operations, customer experience intelligence, model operations, model licensing/dataset rights, model evaluation, language intelligence, localization/content ops, data governance/privacy ops, residency/sovereignty ops, privacy request ops, DPIA/privacy impact ops, knowledge/RAG operations, safety, fraud/abuse ops, security/compliance, platform operations, DevEx/CI-CD ops, infrastructure/reliability, business continuity/DR, SLO/reliability ops, observability/log ops, capacity planning, API management, integrations/partner ops, access/compliance, audit investigations/forensics, identity/auth ops, and operations action tracking.
- Production-style access is still represented at `#admin`, which opens a seed-admin access gate when not already unlocked.
- Prototype seed code: `LUMORA-SEED-2026`.
- Connected prototype metrics require the local API to be running.
- Connected prototype admin unlocks issue a temporary session, scopes, and audit records from the local API.
- The Admin Console shows audit pulse/activity in Overview and Access.
- The Investigate section shows case reviews, evidence custody, incident timelines, legal holds, cross-team handoffs, and forensic guardrails.
- The Platform section shows release control, feature flags, and rollout guardrails.
- The DevEx section shows build pipelines, environments, quality gates, deploy automation, developer tooling, and delivery guardrails.
- The Infrastructure section shows service health, runtime queues, GPU clusters, incidents, uptime, and reliability guardrails.
- The Continuity section shows disaster recovery objectives, backups, restore evidence, continuity risks, incident command, regional fallback, and continuity guardrails.
- The SLOs section shows customer-facing uptime, error budgets, regional reliability, status-page readiness, and SLA guardrails.
- The Capacity section shows demand forecasts, compute headroom, storage growth, scaling plans, and capacity guardrails.
- The Payments section shows plan performance, billing queues, invoices, revenue mix, and finance actions.
- The Entitlements section shows plan limits, usage meters, breach queues, upgrade gates, manual exceptions, and quota guardrails.
- The Revenue Ops section shows revenue leakage, VAT/GST coverage, payout reconciliation, revenue recognition, invoice exceptions, and audit guardrails.
- The Subscriptions section shows trials, renewals, cancellations, downgrades, grace periods, plan migrations, winback offers, and lifecycle guardrails.
- The Finance section shows cost centers, forecasts, margins, refund exposure, cloud/model spend, and optimization actions.
- The Unit Econ section shows cost per message, plan margins, route economics, margin leaks, and pricing actions.
- The Lifecycle section shows onboarding journeys, activation nudges, churn risk, winback campaigns, expansion signals, and retention guardrails.
- The Notify Ops section shows push/email/SMS/in-app channel health, consent-safe segments, quiet-hour blocks, provider failover, delivery incidents, and notification guardrails.
- The Residency section shows country residency, storage regions, cross-border transfers, encryption/key custody, retention controls, and sovereignty guardrails.
- The Privacy Ops section shows DSAR request intake, export packages, deletion workflows, legal holds, residency reviews, SLA risk, and safe privacy handling guardrails.
- The DPIA section shows high-risk processing, impact assessments, mitigation plans, launch approvals, residual risks, and privacy-impact guardrails.
- The Identity section shows signup/login health, auth funnel conversion, MFA/passkey rollout, SSO/SCIM posture, account recovery, session risk, and auth guardrails.
- The Warehouse section shows data pipeline health, warehouse freshness, certified datasets, metric definitions, lineage, BI access reviews, and data quality guardrails.
- The Localize section shows locale readiness, UI copy queues, glossary and termbase controls, reviewer workflow, release checks, and localization guardrails.
- The Observe section shows log streams, trace coverage, alert routes, debugging incidents, observability dashboards, redaction coverage, and safe debugging guardrails.
- The Users and Orgs section shows account queues, enterprise organizations, SSO/SCIM readiness, and governance actions.
- The Success section shows enterprise account health, onboarding milestones, renewals, expansion opportunities, success playbooks, and customer-facing commitment guardrails.
- The Sales section shows enterprise pipeline, demo calendar, procurement blockers, partner-led opportunities, and revenue guardrails.
- The Support section shows support queues, escalations, SLA, CSAT, reply macros, and safe support data boundaries.
- The CX section shows NPS, CSAT, sentiment themes, feedback channels, product insights, app-store signals, escalation reasons, and customer experience guardrails.
- The AI Ops section shows model health, Hugging Face registry, route policies, fallback queues, and readiness snapshots.
- The Licensing section shows model licenses, dataset provenance, usage restrictions, attribution tasks, rights risks, and consent guardrails.
- The Evals section shows model eval suites, benchmark runs, regressions, human review samples, release gates, and evaluation guardrails.
- The Languages section shows country coverage, dialect readiness, reviewer queues, language benchmarks, and expansion guardrails.
- The Data Gov section shows retention policies, consent and memory controls, data residency, privacy requests, PII handling, and tenant boundaries.
- The Knowledge section shows RAG collections, sources, indexing jobs, permissions, freshness, and retrieval quality queues.
- The Safety section shows moderation queues, appeals, language quality loops, policy signals, and guardrails.
- The Fraud section shows bot defense, account abuse, payment risk, API misuse, enforcement actions, and appeal guardrails.
- The Security section shows threat signals, MFA/SSO posture, device trust, audit integrity, data requests, compliance readiness, and privacy guardrails.
- The Growth section shows visitor intelligence, conversion funnel, markets, acquisition channels, and device mix.
- The Analytics section shows retention, activation, churn, feature usage, language adoption, and experiment performance.
- The Experiments section shows A/B tests, feature flags, guarded rollouts, kill switches, product decisions, and rollout guardrails.
- The Reports section shows leadership packs, scheduled exports, report destinations, source datasets, and restricted evidence guardrails.
- The Evidence section shows control evidence, audit readiness, evidence freshness, compliance gaps, attestations, and safe evidence guardrails.
- The Trust section shows customer-safe assurances, security reviews, certification posture, subprocessor visibility, and public-status guardrails.
- The Board section shows board packets, strategic decisions, investor metrics, executive escalations, and governance guardrails.
- The Investors section shows investor updates, fundraising pipeline, data room readiness, diligence requests, and disclosure guardrails.
- The Procurement section shows enterprise procurement cycles, revenue blockers, purchase orders, renewal paperwork, and close guardrails.
- The Partners section shows strategic partners, channel pipeline, partner integrations, ecosystem risks, and partnership guardrails.
- The Launch section shows launch checklists, go/no-go gates, cross-functional readiness, post-launch monitors, and launch guardrails.
- The OKRs section shows executive objectives, key results, blockers, operating cadence, and OKR guardrails.
- The Rhythm section shows leadership rituals, decision logs, action ownership, follow-up health, and operating guardrails.
- The Data Room section shows controlled rooms, evidence packs, access requests, scheduled exports, and audit-safe sharing guardrails.
- The AI Gov section shows model approvals, deployment gates, policy exceptions, required reviews, and AI governance guardrails.
- The Mobile Ops section shows Android/iOS releases, crash health, store readiness, device lab coverage, and rollout guardrails.
- The Risk section shows the enterprise risk register, mitigation plans, board review items, risk heatmap, owners, and governance guardrails.
- The Legal section shows contracts, DPAs, policy work, legal requests, approval queues, and counsel-boundary guardrails.
- The Communications section shows campaigns, broadcasts, incident notices, templates, delivery health, and communication guardrails.
- The People section shows staffing coverage, hiring pipeline, reviewer capacity, on-call rotations, enablement readiness, and workforce guardrails.
- The Vendors section shows vendor inventory, renewals, procurement diligence, spend variance, third-party risk, and approval guardrails.
- The Regional section shows country launch readiness, localization, blockers, local partner motions, payment coverage, and market guardrails.
- The QA section shows regression suites, device coverage, release blockers, accessibility checks, and release quality guardrails.
- The Roadmap section shows initiatives, release candidates, dependencies, customer requests, and product decision guardrails.
- The Community section shows contributors, contribution queues, ambassadors, events, ecosystem programs, and community trust guardrails.
- The API section shows API keys, customers, quotas, webhook delivery, SDK adoption, error queues, and production API controls.
- The Integrations section shows connected services, partner accounts, webhook delivery, secret rotation, and vendor health guardrails.
- The Access section shows RBAC roles, approval queues, compliance controls, scopes, audit, and seed-admin policy.
- The Operations section shows incident command, leadership decisions, follow-ups, runbooks, owners, ETAs, and operating cadence.
- Production must replace this with SSO/MFA, RBAC/ABAC, audit logs, and seed-admin-issued access.

## Future Production Stack

Recommended web stack:

- Next.js or React Router app
- TypeScript
- Tailwind or CSS variables from Lumora design system
- Supabase or Neon Postgres for auth/data
- Hugging Face Inference Endpoints or self-hosted model services
- Model router API layer
- Stripe for plans

Recommended mobile path:

- React Native / Expo after web UX stabilizes
- Shared route map from `Lumora_App_Navigation_Map.md`
- Native voice capture and playback
- Offline/lightweight language utilities later
