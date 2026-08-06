# Lumora Product Experience Map

Version: 0.1  
Date: 2026-05-04

Related execution plan: `Lumora_Master_Execution_Plan.md`
Related app navigation map: `Lumora_App_Navigation_Map.md`
Related component inventory: `Lumora_Component_Inventory.md`
Related QA checklist: `Lumora_UI_QA_Checklist.md`

## Product Standard

Lumora must feel like a premium AI product first, and an African-language product in its intelligence, motion, tone, and cultural behavior. The UI should be simple on the surface, powerful underneath, and visually memorable without becoming decorative.

Design ambition:

- **Simple like ChatGPT/Claude**
- **Luminous like a future African intelligence network**
- **Personal like a language companion**
- **Operationally serious like a platform**

Updated interaction direction:

- Desktop should use a familiar AI-app shell: left sidebar, calm central workspace, top model/language controls, and bottom composer.
- Mobile should reduce aggressively: no visible sidebar, compact top bar, readable bubbles, and a composer with the send button at the far edge.
- Fresh chat should center the composer like ChatGPT/Gemini/Claude.
- Active chat should move the composer to the bottom and preserve conversation focus.
- Lumora should not copy other products visually; it should learn their clarity and then express its own identity through language, voice, tone, and Neon Baobab details.

## Core Screens

### Welcome

File: `Lumora_Welcome_Concept.html`

Purpose:

- First-launch and logged-out entry screen.
- Introduces Lumora as a mobile-first African language AI.
- Routes users into Fresh Chat, Auth, Plans, Active Chat, and the safe personal Dashboard.
- Does not expose the enterprise Admin Console to normal users.

Must feel:

- Elegant.
- Calm.
- Premium.
- Clear enough for a first-time mobile user.

### Fresh Chat

File: `Lumora_Fresh_Chat_Concept.html`

Purpose:

- Empty state before a conversation starts.
- Composer sits in the center of the screen.
- Suggested prompts are lightweight and optional.

Must feel:

- Calm, inviting, premium.
- No clutter.
- Clear first action.

### Active Chat

File: `Lumora_Clean_Chat_Concept.html`

Purpose:

- Standard AI chat experience.
- Hidden sidebar for features.
- Language chip for language/tone selection.
- Three-dot menu for profile, settings, plans, memory, theme, font size, and future tools.

Must feel:

- Focused.
- Elegant.
- Fast.
- Not like a dashboard.

### Auth

File: `Lumora_Auth_Concept.html`

Purpose:

- Sign up and login.
- Capture profile basics: name, email, country, city, primary language, bridge language, password.

Must feel:

- Trustworthy.
- Beautiful.
- Premium enough for a serious AI product.

### Plans

File: `Lumora_Plans_Concept.html`

Purpose:

- Free, Plus, Pro, and Teams.
- Communicate value around voice, language memory, creator tools, market/classroom features, and admin support.

Must feel:

- Clear.
- Aspirational.
- Not aggressive.

### Admin Observatory

File: `Lumora_Admin_Dashboard_Concept.html`

Purpose:

- Give seed-admin-approved operators a full enterprise view of the platform.
- Track web/mobile visitors, new visitors, users, languages, model routing, safety, subscriptions, payments, upgrades, corrections, language quality, infrastructure, support, launch readiness, and content packs.
- Govern sensitive operations through RBAC/ABAC roles, MFA/SSO, audit logs, and limited module access.

Must feel:

- Serious.
- Beautiful.
- Information-dense but not busy.

## Feature Architecture

Visible by default:

- Chat
- Composer
- Voice input
- Language chip
- Profile/menu access

Hidden until needed:

- Sidebar feature navigation
- Language Passport
- Tone Dial
- Translate
- Voice Circle
- Market Mode
- Classroom Mode
- Creator Studio
- Community Corrections
- Local Knowledge Packs
- Profile
- Settings
- Font size
- Theme
- Memory
- Plans

Admin-only:

- Executive platform health
- Visitor and conversion analytics
- User analytics
- Organization management
- Language quality
- Model routing
- Hugging Face model registry
- Safety and policy
- Subscriptions, payments, upgrades, invoices, and revenue
- Web and mobile app operations
- API management
- Support operations
- Security, compliance, audit logs, and RBAC
- Infrastructure and AI cost management
- Native-speaker review queues
- Country launch readiness
- Correction workflows
- Content pack governance

## Perfected Product Flow

1. On first launch or logged-out entry, user sees Welcome.
2. User can continue to Fresh Chat, create an account, or view Plans.
3. Returning users land on Fresh Chat or last Active Chat.
4. User can ask immediately, sign in, or open the sidebar.
3. Before the first message, the composer stays centered.
4. After the first message, the interface transitions into Active Chat with the composer at the bottom.
5. Language selection opens a focused sheet for language, dialect, bridge language, and tone.
6. Profile/settings opens account details, plan, memory, theme, font size, privacy, and advanced tools.
7. Sidebar gives access to workflows without crowding the chat.
8. Plans and auth are separate, centered surfaces.
9. Personal Dashboard contains safe user-facing information only.
10. Enterprise Admin Console is a separate seed-admin-gated operational product area.

## Build Readiness Checklist

- The app shell has desktop, tablet, and mobile states.
- Every major feature has a clear home: chat, sidebar, language sheet, settings sheet, dashboard, plans, auth, or admin console.
- Mobile has no feature dead ends.
- Fresh chat and active chat have different composer positions.
- Neon gold is only used for primary actions.
- Cyan/violet accents do not become heavy button colors.
- Profile captures enough information to create a first Language Passport.
- Personal Dashboard has no sensitive admin data.
- Admin Console has a clear path for tracking visitors, web/mobile performance, language quality, model routing, corrections, payments, security, and subscriptions.

## Visual Direction Refinement

Keep:

- Neon Baobab identity.
- Dark premium base.
- Cyan/violet intelligence glow.
- Neon gold for primary actions.

Reduce:

- Loud green.
- Lemon-heavy button treatment.
- Large mobile bubbles.
- Big fixed composer.
- Heavy background washes.

Improve:

- More precise spacing.
- Stronger visual hierarchy.
- Cleaner mobile chat rhythm.
- Beautiful hidden surfaces.
- More intentional profile/settings/plans flows.
- A consistent premium app shell across chat, fresh chat, plans, auth, and admin.
- Neon-gold only for decisive actions such as send, upgrade, and create account.
