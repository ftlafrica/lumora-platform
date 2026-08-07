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
- `GET /v1/admin/models`
- `GET /v1/admin/safety`
- `GET /v1/admin/growth`
- `GET /v1/admin/analytics`
- `GET /v1/admin/access`
- `GET /v1/admin/actions`
- `GET /v1/admin/api`
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

It also calls `POST /v1/admin/access/verify` to exchange the prototype seed-admin code for a temporary admin session, scopes, and audit records, `GET /v1/admin/audit` for the current audit feed, `GET /v1/admin/platform` for release and feature-flag controls, `GET /v1/admin/infrastructure` for service health, queues, GPU clusters, uptime, and reliability guardrails, `GET /v1/admin/payments` for billing operations, `GET /v1/admin/finance` for margin, model/cloud cost, forecasts, refunds, and optimization, `GET /v1/admin/users` for user/org operations, `GET /v1/admin/models` for AI Ops, `GET /v1/admin/safety` for moderation and language quality, `GET /v1/admin/growth` for visitor intelligence, `GET /v1/admin/analytics` for retention, churn, feature usage, language adoption, and experiments, `GET /v1/admin/access` for RBAC/compliance posture, `GET /v1/admin/actions` for leadership operations, incidents, decisions, follow-ups, and runbooks, `GET /v1/admin/api` for API keys, quotas, SDKs, webhooks, and integration health, `GET /v1/admin/knowledge` for RAG collections, sources, indexing, permissions, and retrieval quality, and `GET /v1/admin/support` for tickets, escalations, SLA, CSAT, macros, and safe support boundaries.

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

AI model operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/models -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Safety and language quality operations:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/safety -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Growth and visitor intelligence:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/growth -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
```

Analytics and retention:

```powershell
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/analytics -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
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
