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
- Enterprise Admin Dashboard sections: Command, Growth, Payments, Users and Orgs, AI Ops, Knowledge, Safety, Platform, API, Access, Operations
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

The Admin Console calls `http://localhost:8787/v1/admin/access/verify` to validate the prototype seed-admin code, then calls `http://localhost:8787/v1/admin/metrics`, `http://localhost:8787/v1/admin/audit`, `http://localhost:8787/v1/admin/platform`, `http://localhost:8787/v1/admin/payments`, `http://localhost:8787/v1/admin/users`, `http://localhost:8787/v1/admin/models`, `http://localhost:8787/v1/admin/safety`, `http://localhost:8787/v1/admin/growth`, `http://localhost:8787/v1/admin/access`, `http://localhost:8787/v1/admin/actions`, `http://localhost:8787/v1/admin/api`, and `http://localhost:8787/v1/admin/knowledge` with the prototype seed-admin header. When the API is offline, it stays usable with preview metrics and labels the dashboard as `Preview fallback`.

## Admin Separation

The consumer app should never expose sensitive admin operations in the normal user profile or sidebar.

- Users see `Dashboard` for safe plan, language passport, and activity information.
- Enterprise operators use `admin.html` or `#admin-preview` for prototype previewing.
- The Admin Console is separated into leadership/dev operating areas: executive command, visitor growth, payments, user/org management, model operations, knowledge/RAG operations, safety, platform operations, API management, access/compliance, and operations action tracking.
- Production-style access is still represented at `#admin`, which opens a seed-admin access gate when not already unlocked.
- Prototype seed code: `LUMORA-SEED-2026`.
- Connected prototype metrics require the local API to be running.
- Connected prototype admin unlocks issue a temporary session, scopes, and audit records from the local API.
- The Admin Console shows audit pulse/activity in Overview and Access.
- The Platform section shows release control, feature flags, and rollout guardrails.
- The Payments section shows plan performance, billing queues, invoices, revenue mix, and finance actions.
- The Users and Orgs section shows account queues, enterprise organizations, SSO/SCIM readiness, and governance actions.
- The AI Ops section shows model health, Hugging Face registry, route policies, fallback queues, and readiness snapshots.
- The Knowledge section shows RAG collections, sources, indexing jobs, permissions, freshness, and retrieval quality queues.
- The Safety section shows moderation queues, appeals, language quality loops, policy signals, and guardrails.
- The Growth section shows visitor intelligence, conversion funnel, markets, acquisition channels, and device mix.
- The API section shows API keys, customers, quotas, webhook delivery, SDK adoption, error queues, and production API controls.
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
