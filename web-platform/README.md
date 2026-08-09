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
- Enterprise Admin Dashboard sections: Command, Growth, Analytics, Experiments, Reports, Risk, Legal, Communications, People, Vendors, Regional, QA, Roadmap, Community, Payments, Finance, Users and Orgs, Success, Sales, Support, AI Ops, Evals, Languages, Data Gov, Knowledge, Safety, Security, Platform, Infrastructure, API, Integrations, Access, Operations
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

The Admin Console calls `http://localhost:8787/v1/admin/access/verify` to validate the prototype seed-admin code, then calls `http://localhost:8787/v1/admin/metrics`, `http://localhost:8787/v1/admin/audit`, `http://localhost:8787/v1/admin/platform`, `http://localhost:8787/v1/admin/infrastructure`, `http://localhost:8787/v1/admin/payments`, `http://localhost:8787/v1/admin/finance`, `http://localhost:8787/v1/admin/users`, `http://localhost:8787/v1/admin/customer-success`, `http://localhost:8787/v1/admin/sales`, `http://localhost:8787/v1/admin/models`, `http://localhost:8787/v1/admin/evaluations`, `http://localhost:8787/v1/admin/languages`, `http://localhost:8787/v1/admin/data-governance`, `http://localhost:8787/v1/admin/safety`, `http://localhost:8787/v1/admin/security`, `http://localhost:8787/v1/admin/growth`, `http://localhost:8787/v1/admin/analytics`, `http://localhost:8787/v1/admin/experiments`, `http://localhost:8787/v1/admin/reports`, `http://localhost:8787/v1/admin/compliance-evidence`, `http://localhost:8787/v1/admin/trust-center`, `http://localhost:8787/v1/admin/risk`, `http://localhost:8787/v1/admin/legal`, `http://localhost:8787/v1/admin/people`, `http://localhost:8787/v1/admin/vendors`, `http://localhost:8787/v1/admin/regional-launch`, `http://localhost:8787/v1/admin/qa`, `http://localhost:8787/v1/admin/roadmap`, `http://localhost:8787/v1/admin/community`, `http://localhost:8787/v1/admin/communications`, `http://localhost:8787/v1/admin/access`, `http://localhost:8787/v1/admin/actions`, `http://localhost:8787/v1/admin/api`, `http://localhost:8787/v1/admin/integrations`, `http://localhost:8787/v1/admin/knowledge`, and `http://localhost:8787/v1/admin/support` with the prototype seed-admin header. When the API is offline, it stays usable with preview metrics and labels the dashboard as `Preview fallback`.

## Admin Separation

The consumer app should never expose sensitive admin operations in the normal user profile or sidebar.

- Users see `Dashboard` for safe plan, language passport, and activity information.
- Enterprise operators use `admin.html` or `#admin-preview` for prototype previewing.
- The Admin Console is separated into leadership/dev operating areas: executive command, visitor growth, analytics/retention, experimentation/feature flags, reporting/exports, compliance evidence, Trust Center ops, enterprise risk, legal/policy, communications, people/workforce ops, vendor/procurement ops, regional launch ops, QA/test ops, product roadmap, community/ecosystem ops, payments, finance/cost operations, user/org management, customer success, enterprise sales, support operations, model operations, model evaluation, language intelligence, data governance/privacy ops, knowledge/RAG operations, safety, security/compliance, platform operations, infrastructure/reliability, API management, integrations/partner ops, access/compliance, and operations action tracking.
- Production-style access is still represented at `#admin`, which opens a seed-admin access gate when not already unlocked.
- Prototype seed code: `LUMORA-SEED-2026`.
- Connected prototype metrics require the local API to be running.
- Connected prototype admin unlocks issue a temporary session, scopes, and audit records from the local API.
- The Admin Console shows audit pulse/activity in Overview and Access.
- The Platform section shows release control, feature flags, and rollout guardrails.
- The Infrastructure section shows service health, runtime queues, GPU clusters, incidents, uptime, and reliability guardrails.
- The Payments section shows plan performance, billing queues, invoices, revenue mix, and finance actions.
- The Finance section shows cost centers, forecasts, margins, refund exposure, cloud/model spend, and optimization actions.
- The Users and Orgs section shows account queues, enterprise organizations, SSO/SCIM readiness, and governance actions.
- The Success section shows enterprise account health, onboarding milestones, renewals, expansion opportunities, success playbooks, and customer-facing commitment guardrails.
- The Sales section shows enterprise pipeline, demo calendar, procurement blockers, partner-led opportunities, and revenue guardrails.
- The Support section shows support queues, escalations, SLA, CSAT, reply macros, and safe support data boundaries.
- The AI Ops section shows model health, Hugging Face registry, route policies, fallback queues, and readiness snapshots.
- The Evals section shows model eval suites, benchmark runs, regressions, human review samples, release gates, and evaluation guardrails.
- The Languages section shows country coverage, dialect readiness, reviewer queues, language benchmarks, and expansion guardrails.
- The Data Gov section shows retention policies, consent and memory controls, data residency, privacy requests, PII handling, and tenant boundaries.
- The Knowledge section shows RAG collections, sources, indexing jobs, permissions, freshness, and retrieval quality queues.
- The Safety section shows moderation queues, appeals, language quality loops, policy signals, and guardrails.
- The Security section shows threat signals, MFA/SSO posture, device trust, audit integrity, data requests, compliance readiness, and privacy guardrails.
- The Growth section shows visitor intelligence, conversion funnel, markets, acquisition channels, and device mix.
- The Analytics section shows retention, activation, churn, feature usage, language adoption, and experiment performance.
- The Experiments section shows A/B tests, feature flags, guarded rollouts, kill switches, product decisions, and rollout guardrails.
- The Reports section shows leadership packs, scheduled exports, report destinations, source datasets, and restricted evidence guardrails.
- The Evidence section shows control evidence, audit readiness, evidence freshness, compliance gaps, attestations, and safe evidence guardrails.
- The Trust section shows customer-safe assurances, security reviews, certification posture, subprocessor visibility, and public-status guardrails.
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
