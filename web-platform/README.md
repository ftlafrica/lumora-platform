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
- Enterprise Admin Dashboard sections: Command, Growth, Payments, Users and Orgs, AI Ops, Safety, Platform, Access
- Hugging Face model registry prototype
- Local simulated model routing
- LocalStorage persistence

## Consumer Web Flow

1. `#welcome` introduces Lumora and routes users to guest mode, signup, plans, or the app map.
2. `#auth` supports sign up, login, Language Passport fields, and guest continuation.
3. `#fresh` gives a centered first prompt before a conversation starts.
4. Prompt chips or the send button create a new chat thread and route to `#chat`.
5. The sidebar exposes Lumora modes and recent conversations without cluttering the chat surface.
6. `#plans` updates the user's selected plan and returns them to `#dashboard`.
7. `#dashboard` shows safe user-facing information only.

## Admin Separation

The consumer app should never expose sensitive admin operations in the normal user profile or sidebar.

- Users see `Dashboard` for safe plan, language passport, and activity information.
- Enterprise operators use `admin.html` or `#admin-preview` for prototype previewing.
- The Admin Console is separated into leadership/dev operating areas: executive command, visitor growth, payments, user/org management, model operations, safety, platform operations, and access/compliance.
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
