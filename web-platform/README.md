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
- Sidebar navigation
- Profile and Language Passport
- Login/sign-up profile capture
- Language and tone controls
- Theme and font-size settings
- Premium plans
- Personal user dashboard
- Seed-admin-gated enterprise Admin Console
- Hugging Face model registry prototype
- Local simulated model routing
- LocalStorage persistence

## Admin Separation

The consumer app should never expose sensitive admin operations in the normal user profile or sidebar.

- Users see `Dashboard` for safe plan, language passport, and activity information.
- Enterprise operators use `admin.html` or `#admin-preview` for prototype previewing.
- Production-style access is still represented at `#admin`, which opens a seed-admin access gate when not already unlocked.
- Prototype seed code: `LUMORA-SEED-2026`.
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
