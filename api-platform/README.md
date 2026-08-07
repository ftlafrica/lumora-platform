# Lumora API Platform

Dependency-light Node API scaffold for Lumora.

This is the first backend foundation for connecting the Web Platform, Enterprise Admin Dashboard, and Mobile Apps to a shared API layer.

## Current Scope

- `GET /health`
- `GET /v1/models`
- `GET /v1/plans`
- `POST /v1/route`
- `POST /v1/chat`
- `GET /v1/admin/metrics`

The model layer is currently simulation mode. The routing response explains which Hugging Face model source should be used, then falls back through a general generation layer and the Lumora tone layer.

## Run

```powershell
cd api-platform
npm run check
npm run smoke
npm run start
```

The API listens on `http://localhost:8787` by default.

## Connected Clients

- Web Platform: `web-platform/index.html`
- Mobile App: `mobile-app/App.js`

Both clients currently expect `http://localhost:8787` as the local API base URL. They call `POST /v1/chat` for replies and fall back to local simulation if the API is unavailable.

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
Invoke-RestMethod -Uri http://localhost:8787/v1/admin/metrics -Headers @{"X-Seed-Admin-Code"="LUMORA-SEED-2026"}
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
