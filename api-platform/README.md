# Lumora API Platform

Dependency-light Node API scaffold for Lumora.

This is the first backend foundation for connecting the Web Platform, Enterprise Admin Dashboard, and Mobile Apps to a shared API layer.

## Current Scope

- `GET /health`
- `GET /v1/models`
- `GET /v1/plans`
- `POST /v1/route`
- `POST /v1/chat`
- `POST /v1/admin/access/verify`
- `GET /v1/admin/metrics`
- `GET /v1/admin/audit`
- `GET /v1/admin/platform`
- `GET /v1/admin/infrastructure`
- `GET /v1/admin/payments`
- `GET /v1/admin/finance`
- `GET /v1/admin/users`
- `GET /v1/admin/customer-success`
- `GET /v1/admin/sales`
- `GET /v1/admin/models`
- `GET /v1/admin/evaluations`
- `GET /v1/admin/languages`
- `GET /v1/admin/data-governance`
- `GET /v1/admin/safety`
- `GET /v1/admin/security`
- `GET /v1/admin/growth`
- `GET /v1/admin/analytics`
- `GET /v1/admin/experiments`
- `GET /v1/admin/reports`
- `GET /v1/admin/compliance-evidence`
- `GET /v1/admin/trust-center`
- `GET /v1/admin/board-governance`
- `GET /v1/admin/investor-relations`
- `GET /v1/admin/procurement-revenue`
- `GET /v1/admin/strategic-partnerships`
- `GET /v1/admin/launch-readiness`
- `GET /v1/admin/executive-okrs`
- `GET /v1/admin/operating-rhythm`
- `GET /v1/admin/risk`
- `GET /v1/admin/legal`
- `GET /v1/admin/people`
- `GET /v1/admin/vendors`
- `GET /v1/admin/regional-launch`
- `GET /v1/admin/qa`
- `GET /v1/admin/roadmap`
- `GET /v1/admin/community`
- `GET /v1/admin/communications`
- `GET /v1/admin/access`
- `GET /v1/admin/actions`
- `GET /v1/admin/api`
- `GET /v1/admin/integrations`
- `GET /v1/admin/knowledge`
- `GET /v1/admin/support`

The model layer is currently simulation mode. The routing response explains which Hugging Face model source should be used, then falls back through a general generation layer and the Lumora tone layer.

## Run

```powershell
cd api-platform
npm run check
npm run smoke
npm run start
```

The API listens on `http://localhost:8787` by default.

`npm run smoke` validates the public chat/model routing path and the prototype admin payload contracts used by the Enterprise Admin Console.

## Connected Clients

- Web Platform: `web-platform/index.html`
- Mobile App: `mobile-app/App.js`

Both clients currently expect `http://localhost:8787` as the local API base URL. They call `POST /v1/chat` for replies and fall back to local simulation if the API is unavailable.

The Enterprise Admin Console calls `GET /v1/admin/metrics` with `X-Seed-Admin-Code` to populate leadership, growth, payments, AI Ops, safety, and platform preview metrics.

It also calls `POST /v1/admin/access/verify` to exchange the prototype seed-admin code for a temporary admin session, scopes, and audit records, `GET /v1/admin/audit` for the current audit feed, `GET /v1/admin/platform` for release and feature-flag controls, `GET /v1/admin/infrastructure` for service health, queues, GPU clusters, uptime, and reliability guardrails, `GET /v1/admin/payments` for billing operations, `GET /v1/admin/finance` for margin, model/cloud cost, forecasts, refunds, and optimization, `GET /v1/admin/users` for user/org operations, `GET /v1/admin/customer-success` for enterprise account health, onboarding, renewals, expansion, and success playbooks, `GET /v1/admin/sales` for enterprise pipeline, demos, procurement, partners, and revenue motions, `GET /v1/admin/models` for AI Ops, `GET /v1/admin/evaluations` for model eval suites, benchmark runs, regressions, human samples, and release gates, `GET /v1/admin/languages` for country coverage, dialect readiness, reviewer queues, and language benchmarks, `GET /v1/admin/data-governance` for retention, consent, data residency, deletion/export workflows, and PII handling, `GET /v1/admin/safety` for moderation and language quality, `GET /v1/admin/security` for threat signals, MFA/SSO posture, audit integrity, data requests, and compliance readiness, `GET /v1/admin/growth` for visitor intelligence, `GET /v1/admin/analytics` for retention, churn, feature usage, language adoption, and experiments, `GET /v1/admin/experiments` for A/B tests, feature flags, guarded rollouts, kill switches, and product decisions, `GET /v1/admin/reports` for leadership packs, scheduled exports, report destinations, source datasets, and evidence guardrails, `GET /v1/admin/compliance-evidence` for control evidence, audit readiness, evidence freshness, attestations, compliance gaps, and safe evidence guardrails, `GET /v1/admin/trust-center` for customer-safe assurances, security reviews, certification posture, subprocessor visibility, and public-status guardrails, `GET /v1/admin/board-governance` for board packets, strategic decisions, investor metrics, executive escalations, and governance guardrails, `GET /v1/admin/investor-relations` for investor updates, fundraising pipeline, data-room readiness, diligence requests, and disclosure guardrails, `GET /v1/admin/procurement-revenue` for enterprise procurement cycles, revenue blockers, purchase orders, renewal paperwork, and close guardrails, `GET /v1/admin/strategic-partnerships` for strategic partners, channel pipeline, partner integrations, ecosystem risks, and partnership guardrails, `GET /v1/admin/launch-readiness` for launch checklists, go/no-go gates, cross-functional readiness, post-launch monitors, and launch guardrails, `GET /v1/admin/executive-okrs` for executive objectives, key results, blockers, operating cadence, and OKR guardrails, `GET /v1/admin/operating-rhythm` for leadership rituals, decision logs, action ownership, follow-up health, and operating guardrails, `GET /v1/admin/risk` for the enterprise risk register, mitigations, board review items, heatmap, and governance guardrails, `GET /v1/admin/legal` for contracts, DPAs, policy updates, legal requests, and approval guardrails, `GET /v1/admin/people` for staffing, hiring, reviewer capacity, on-call, enablement, and workforce guardrails, `GET /v1/admin/vendors` for vendor inventory, renewals, due diligence, spend variance, and third-party risk, `GET /v1/admin/regional-launch` for country launch readiness, localization, payment coverage, local partners, and market guardrails, `GET /v1/admin/qa` for regression suites, device coverage, release blockers, accessibility checks, and QA guardrails, `GET /v1/admin/roadmap` for initiatives, release candidates, dependencies, customer requests, and product guardrails, `GET /v1/admin/community` for contributors, corrections, ambassadors, events, ecosystem programs, and trust guardrails, `GET /v1/admin/communications` for broadcasts, campaigns, templates, incident notices, and delivery health, `GET /v1/admin/access` for RBAC/compliance posture, `GET /v1/admin/actions` for leadership operations, incidents, decisions, follow-ups, and runbooks, `GET /v1/admin/api` for API keys, quotas, SDKs, webhooks, and integration health, `GET /v1/admin/integrations` for connected services, partners, webhooks, secrets, and vendor health, `GET /v1/admin/knowledge` for RAG collections, sources, indexing, permissions, and retrieval quality, and `GET /v1/admin/support` for tickets, escalations, SLA, CSAT, macros, and safe support boundaries.

## Example Requests

Route a task:

```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:8787/v1/route -ContentType "application/json" -Body '{"text":"Translate this customer reply","language":"Yoruba","plan":"Pro"}'
```

Chat simulation:

```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:8787/v1/chat -ContentType "application/json" -Body '{"text":"Explain AI to my cousin","language":"Yoruba","bridgeLanguage":"English","tone":"Teacher","plan":"Free"}'
```

Admin metrics require seed-admin access:

```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:8787/v1/admin/access/verify -ContentType "application/json" -Body '{"code":"LUMORA-SEED-2026","operator":"Seed Admin"}'
```

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/metrics -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Admin audit feed:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/audit -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Platform controls:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/platform -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Infrastructure and reliability:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/infrastructure -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Payment operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/payments -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Finance and cost operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/finance -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

User and organization operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/users -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Customer success operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/customer-success -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Sales pipeline operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/sales -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

AI model operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/models -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Model evaluation lab:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/evaluations -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Language intelligence:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/languages -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Data governance and privacy ops:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/data-governance -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Safety and language quality operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/safety -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Security and compliance operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/security -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Growth and visitor intelligence:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/growth -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Analytics and retention:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/analytics -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Experimentation and feature flags:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/experiments -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Reporting and exports:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/reports -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Compliance evidence operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/compliance-evidence -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Trust Center operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/trust-center -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Board governance operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/board-governance -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Investor relations operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/investor-relations -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Procurement revenue operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/procurement-revenue -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Strategic partnership operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/strategic-partnerships -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Launch readiness operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/launch-readiness -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Executive OKR operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/executive-okrs -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Operating rhythm operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/operating-rhythm -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Enterprise risk register:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/risk -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Legal and policy operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/legal -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

People and workforce operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/people -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Vendor and procurement operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/vendors -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Regional launch operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/regional-launch -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

QA and test operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/qa -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Product roadmap operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/roadmap -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Community and ecosystem operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/community -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Communications center:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/communications -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Access, RBAC, and compliance:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/access -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Operations action center:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/actions -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

API management:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/api -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Integrations and partner operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/integrations -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Knowledge and RAG operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/knowledge -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Support center:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/support -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

## Hugging Face Integration Path

Production should replace simulated replies with a `ModelRouter` service that:

- Detects language, dialect, task, tone, plan, safety context, and latency requirements.
- Routes to Hugging Face Inference Endpoints or self-hosted models.
- Applies fallback chains for low-confidence or unsupported language pairs.
- Logs routing metadata for admin observability.
- Applies Lumora tone, dialect, and safety policies after model output.

Expected environment variables:

- `PORT`
- `HF_TOKEN`
- `LUMORA_SEED_ADMIN_CODE`
- `LUMORA_MODEL_MODE`

Do not ship the prototype seed code in production.
