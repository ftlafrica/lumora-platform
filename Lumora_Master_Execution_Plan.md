# Lumora Master Execution Plan

Version: 0.2  
Date: 2026-07-26  
Status: Product and interface refinement plan

Related files:

- `African_AI_Chat_Platform_PRD.md`
- `web-platform/index.html`
- `Lumora_Design_System.md`
- `Lumora_Product_Experience_Map.md`
- `Lumora_App_Navigation_Map.md`
- `Lumora_Component_Inventory.md`
- `Lumora_UI_QA_Checklist.md`

## 1. North Star

Lumora should become the most natural AI chat platform for African languages, dialects, tone, and everyday context.

The first working web implementation lives in `web-platform/index.html`. The original HTML concept files remain visual references, while the `web-platform` folder is the active product build surface.

The product should feel familiar enough that users instantly understand how to chat, but distinct enough that it does not feel like a copy of ChatGPT, Gemini, or Claude. Lumora wins by combining a calm premium AI interface with African language intelligence, voice-first workflows, dialect memory, community correction, and local usefulness.

## 2. Product Pillars

### Language Intelligence

Lumora must understand language the way people actually use it:

- Code-switching across local languages and bridge languages.
- Dialect and country context.
- Tone, respect level, slang, proverb use, and formality.
- User correction loops that improve language quality over time.

### Simple Surface, Deep Power

The main screen must remain a clean AI chat. Advanced features live inside drawers, sheets, menus, profile settings, and mode selectors.

Visible by default:

- Chat thread.
- Composer.
- Send.
- Voice.
- Language selector.
- Sidebar/menu access.
- Profile/settings access.

Hidden until needed:

- Tone Dial.
- Language Passport.
- Translate.
- Voice Circle.
- Market Mode.
- Classroom Mode.
- Creator Studio.
- Local Knowledge Packs.
- Memory.
- Theme and font controls.
- Community corrections.

### Voice-First Africa

Voice should not feel like an add-on. It should support:

- Speak to ask.
- Language detection from speech.
- Transcription.
- Translation.
- Read-aloud responses.
- Voice notes for users who prefer speaking to typing.

### Trust and Governance

Lumora should be honest when confidence is low.

Trust behavior:

- Show detected language and tone.
- Let users correct language, dialect, or tone.
- Explain when a response is translated or generated directly.
- Route medical, legal, civic, and financial topics carefully.
- Keep user profile and voice data consent clear.

## 3. Screen System

### Fresh Chat

File: `Lumora_Fresh_Chat_Concept.html`

Purpose:

- First screen after opening the app or starting a new chat.
- Composer is centered before the conversation starts.
- Suggested prompts are compact and optional.

Success criteria:

- Feels calm and premium.
- No dashboard clutter.
- Works beautifully on mobile.
- Send button stays inside the composer.

### Welcome

File: `Lumora_Welcome_Concept.html`

Purpose:

- First launch and logged-out entry point.
- Introduce Lumora without becoming a marketing landing page.
- Route users to Fresh Chat, Auth, Plans, Active Chat, and Admin.
- Establish the mobile-first identity for Android and iOS.

Success criteria:

- Feels elegant and premium on phone first.
- Makes the product purpose clear within seconds.
- Provides a clear path to continue, create account, or view plans.
- Includes a compact prototype map without making the screen busy.

### Active Chat

File: `Lumora_Clean_Chat_Concept.html`

Purpose:

- Main AI chat workspace.
- Desktop includes a visible sidebar.
- Tablet and mobile use a slide-over sidebar.
- Language and profile/settings remain accessible.

Success criteria:

- Chat remains the hero.
- Sidebar features are available but not noisy.
- Mobile bubbles and composer are compact.
- Neon gold is reserved for decisive actions.

### Auth

File: `Lumora_Auth_Concept.html`

Purpose:

- Sign up and login.
- Capture the first Language Passport profile.

Required profile fields:

- Full name.
- Email.
- Country.
- City.
- Primary language.
- Bridge language.
- Password.

Future fields:

- Dialect or region.
- Voice preference.
- Formality preference.
- Community contribution consent.

### Plans

File: `Lumora_Plans_Concept.html`

Purpose:

- Explain Free, Plus, Pro, and Teams.
- Make upgrades feel valuable, not forced.

Plan logic:

- Free: basic chat and limited language selection.
- Plus: more messages, memory, tone dial, export.
- Pro: creator tools, advanced voice, market/classroom workflows.
- Teams: admin analytics, shared workspace, API, priority language support.

### Admin Observatory

File: `Lumora_Admin_Dashboard_Concept.html`

Purpose:

- Give seed-approved leadership, developer, finance, support, moderation, security, and operations roles a serious view of platform health.
- Track web and mobile visitors, new visitors, user growth, language quality, model routing, safety, subscriptions, payments, upgrades, corrections, infrastructure, support, and country launch readiness.
- Keep sensitive admin operations outside the consumer profile and sidebar.
- Give normal users a personal `Dashboard`, not an `Admin Dashboard`.

Admin modules:

- Executive dashboard and platform health.
- Visitors, new visitors, conversion, device usage, and web/mobile/API split.
- User and organization management.
- Payments, upgrades, subscriptions, invoices, refunds, taxes, and plan management.
- AI model registry, Hugging Face source tracking, model health, routing, fallback, A/B testing, and latency.
- Language quality, community corrections, native-speaker queues, and country readiness.
- Knowledge bases, RAG indexes, embeddings, and local knowledge packs.
- Prompt, tone, persona, and system prompt management.
- Chat operations, moderation, AI safety, and support queues.
- API keys, quotas, webhooks, logs, errors, and SDK usage.
- Mobile app management for iOS and Android releases, crash reports, push notifications, forced updates, and beta groups.
- Web app deployments, feature flags, CDN, domains, maintenance mode, and rollouts.
- Finance, GPU/cloud/model cost, MRR/ARR, churn, forecasts, and optimization.
- Security, compliance, audit logs, RBAC/ABAC, SSO, MFA, data residency, GDPR, SOC 2, and legal requests.
- Infrastructure, queues, databases, vector DB, object storage, CDN, GPU clusters, and incident monitoring.

## 4. Feature Architecture

### MVP Features

- Account creation.
- Guest chat.
- Fresh chat and active chat.
- Country, city, language, and bridge language profile.
- Text chat.
- Language selector.
- Tone selector.
- Voice input prototype.
- Translation mode.
- Conversation history.
- Basic plans page.
- Basic personal dashboard.
- Seed-admin-gated admin console foundation.

### V1 Features

- Real speech-to-text.
- Text-to-speech for priority languages.
- Language confidence display.
- Dialect correction.
- Community corrections.
- WhatsApp export.
- Market Mode.
- Classroom Mode.
- Creator Studio.
- Memory controls.
- Theme and font-size controls.
- Admin language quality queues.

### V2 Features

- Proprietary fine-tuned African assistant layer.
- Verified language packs.
- Organization workspaces.
- Developer API.
- Local service agents.
- Offline-friendly saved chats.
- Contributor reputation.
- Country-specific launch editions.

## 5. Design Rules

### Visual Identity

Use Neon Baobab:

- Deep black workspace.
- Soft indigo depth.
- Cyan for language and intelligence signals.
- Violet for reasoning and premium layers.
- Neon gold for primary actions.
- Coral only for warnings or correction prompts.
- Green only for success or verified confidence.

### Layout Rules

Desktop:

- Sidebar visible.
- Main chat centered.
- Composer bottom-centered.
- Top controls right-aligned.

Tablet:

- Sidebar collapses.
- Chat remains centered.
- Top controls stay compact.

Mobile:

- Top bar compact.
- Sidebar opens as a drawer.
- Messages become smaller.
- Composer stays compact.
- Voice and extra tools hide when space is tight.
- Fresh chat composer stays centered before the first message.

### Interaction Rules

- The first screen is never a marketing page.
- Advanced features should feel discoverable, not exposed all at once.
- Settings, profile, plans, memory, and theme live in the profile/settings menu.
- Language and tone live in the language sheet.
- Sidebar is for navigation and workflows.

## 6. AI Architecture Plan

Lumora should use a model router instead of a single-model dependency.

Routing steps:

1. Detect language, script, country, dialect hints, and tone.
2. Classify the task.
3. Select the best model or model chain.
4. Generate or translate the response.
5. Apply tone and cultural style.
6. Run safety checks.
7. Show confidence and allow correction when needed.

Capability layers:

- General reasoning model.
- African language understanding models.
- Translation models.
- Speech-to-text models.
- Text-to-speech models.
- Safety classifiers.
- Evaluation models.
- Human review workflows.

## 7. Data And Model Governance

Every model or dataset must pass:

- License review.
- Commercial-use review.
- Language coverage review.
- Quality benchmark.
- Native-speaker evaluation.
- Bias and safety review.
- Latency and cost test.

Country readiness should be tracked through:

- Languages.
- Dialects.
- Scripts.
- Model support.
- Speech support.
- Translation support.
- Reviewer availability.
- Safety notes.
- Launch confidence score.

## 8. Build Sequence

### Phase 1: Concept Perfection

- Refine chat, fresh chat, auth, plans, and admin concepts.
- Lock the design system.
- Define the exact MVP scope.
- Create clickable prototype flows.

### Phase 2: App Foundation

- Build real frontend app shell.
- Add routing between screens.
- Add auth UI states.
- Add reusable components.
- Add responsive layout system.
- Add theme and font settings.

### Phase 3: Chat Prototype

- Add chat state.
- Add message rendering.
- Add language/tone settings.
- Add profile state.
- Add local conversation history.
- Add mock model routing metadata.

### Phase 4: AI Integration

- Connect primary chat model.
- Add language detection.
- Add translation route.
- Add voice input.
- Add confidence and correction loop.
- Add safety response layer.

### Phase 5: Admin And Operations

- Build admin analytics.
- Add language quality dashboard.
- Add model routing dashboard.
- Add correction review queues.
- Add subscription tracking.
- Add country readiness tracking.

### Phase 6: Pilot Launch

- Pilot with native speakers.
- Measure naturalness.
- Measure correction rate.
- Measure voice quality.
- Improve priority language packs.
- Launch first country cluster.

## 9. Immediate Next Design Tasks

1. Create a connected clickable prototype between Fresh Chat, Active Chat, Auth, Plans, and Admin.
2. Add a full settings sheet with theme, font size, memory, plan, privacy, and profile controls.
3. Expand the language sheet into Language Passport and Tone Dial.
4. Add a correction flow for bad language or dialect output.
5. Add a voice listening state.
6. Refine Admin Observatory responsiveness.
7. Convert HTML concepts into a real app structure when the visual direction is approved.

## 10. MVP Build Backlog

### Foundation

- App routes: `/`, `/chat`, `/auth`, `/plans`, `/admin`.
- Shared layout primitives: app shell, sidebar, topbar, composer, sheets, buttons, segmented controls, cards.
- Responsive breakpoints: mobile, tablet, desktop, wide desktop.
- Theme tokens: Neon Baobab dark theme first, light mode later.
- Font-size preferences: compact, comfort, large.

### User And Profile

- Guest session.
- Sign up.
- Login.
- Profile page or sheet.
- Language Passport setup.
- Country, city, primary language, dialect, bridge language, tone, and script preference.
- Memory consent.
- Voice consent.

### Chat

- Fresh chat state.
- Active chat state.
- Message list.
- Composer with send.
- Voice button state.
- Language selector sheet.
- Tone Dial.
- Conversation history.
- Suggested prompts.
- Empty, loading, streaming, error, and retry states.

### Language Intelligence

- Language detection placeholder.
- Dialect hint placeholder.
- Confidence display.
- Correction button.
- Translation mode.
- Tone rewrite mode.
- Model route metadata.
- Feedback collection.

### Plans And Monetization

- Free, Plus, Pro, Teams.
- Upgrade CTA.
- Plan comparison.
- Usage status.
- Billing placeholder.
- Admin subscription overview.

### Admin

- Admin dashboard overview.
- User growth.
- Language usage.
- Model routing.
- Safety events.
- Corrections queue.
- Country readiness.
- Revenue and subscriptions.
- Content pack status.

## 11. Core Data Objects

### User

- `id`
- `fullName`
- `email`
- `country`
- `city`
- `createdAt`
- `plan`
- `role`

### Language Passport

- `userId`
- `country`
- `city`
- `primaryLanguage`
- `dialect`
- `bridgeLanguage`
- `scriptPreference`
- `tonePreference`
- `formalityPreference`
- `voicePreference`
- `memoryEnabled`

### Conversation

- `id`
- `userId`
- `title`
- `languageContext`
- `toneContext`
- `createdAt`
- `updatedAt`

### Message

- `id`
- `conversationId`
- `sender`
- `content`
- `detectedLanguage`
- `detectedDialect`
- `tone`
- `modelRoute`
- `confidence`
- `createdAt`

### Correction

- `id`
- `messageId`
- `userId`
- `issueType`
- `originalText`
- `suggestedText`
- `language`
- `dialect`
- `status`
- `reviewerId`

### Model Registry Entry

- `id`
- `provider`
- `modelName`
- `capability`
- `languages`
- `license`
- `commercialStatus`
- `latencyScore`
- `qualityScore`
- `costScore`
- `routingPriority`

### Country Readiness

- `country`
- `languages`
- `dialects`
- `modelCoverage`
- `speechCoverage`
- `reviewerCoverage`
- `safetyNotes`
- `launchStatus`
- `readinessScore`

## 12. Product Routes And Ownership

| Route | Screen | Owner | Purpose |
|---|---|---|---|
| `/` | Welcome | Consumer product | First launch, onboarding, and logged-out entry |
| `/chat` | Fresh Chat | Consumer product | Start a new conversation quickly |
| `/chat/:id` | Active Chat | Consumer product | Continue conversation |
| `/auth` | Login / Sign up | Growth and identity | Create account and Language Passport |
| `/plans` | Premium Plans | Monetization | Explain Free, Plus, Pro, Teams |
| `/settings` | Profile/settings sheet or page | Consumer product | Manage profile, memory, theme, font, privacy |
| `/admin` | Admin Observatory | Operations | Track platform, language, safety, revenue |

## 13. Acceptance Criteria

### Fresh Chat

- Composer is centered before chat starts.
- Suggested prompts wrap cleanly on mobile.
- No section looks like a marketing landing page.
- Primary send action is neon gold.

### Welcome

- Mobile-first composition is polished.
- Primary CTA opens Fresh Chat.
- Secondary CTA opens Auth.
- Plans path is visible.
- Prototype map exposes the full product without crowding the screen.

### Active Chat

- Desktop shows sidebar.
- Mobile hides sidebar behind hamburger.
- Language and settings remain accessible.
- Composer stays bottom-aligned after chat starts.
- Messages do not overflow horizontally.
- Advanced features are not visible until opened.

### Auth

- Desktop layout is centered and not stretched.
- Mobile layout stacks cleanly.
- Required profile fields are visible.
- Sign up and login states are clear.

### Plans

- Desktop plans sit in a centered max-width grid.
- Tablet uses two columns.
- Mobile uses one column.
- Free, Plus, Pro, and Teams are present.
- Upgrade actions use neon gold.

### Enterprise Admin Console

- Admin Console is visually and structurally separate from consumer chat.
- Admin Console is seed-admin-gated.
- Key operational metrics are visible above the fold.
- Language quality and correction queues are present.
- Visitors, payments, upgrades, web/mobile health, revenue, and country readiness are represented.
- Normal users see a safe personal Dashboard instead of an Admin Dashboard.

## 14. Launch Decision Gates

### Design Gate

Pass when:

- Mobile and desktop screenshots are approved.
- `Lumora_UI_QA_Checklist.md` passes for core screens.
- Design system tokens are stable.
- Fresh chat, active chat, auth, plans, personal dashboard, and admin console share one visual language while preserving access boundaries.

### MVP Scope Gate

Pass when:

- MVP features are locked.
- V1 and V2 features are deferred clearly.
- No core feature lacks a home in the UI.

### AI Readiness Gate

Pass when:

- Primary model route is selected.
- First language detection method is selected.
- Translation fallback is selected.
- Safety handling is defined for sensitive topics.

### Language Quality Gate

Pass when:

- Priority language list is approved.
- Native-speaker review workflow is defined.
- Correction taxonomy is defined.
- Evaluation samples exist for first launch languages.

### Pilot Gate

Pass when:

- Test users are recruited by language cluster.
- Feedback form is ready.
- Naturalness, trust, correction, and voice metrics are tracked.

## 15. First Launch Cluster

Recommended first cluster:

1. Nigeria: Yoruba, Hausa, Igbo, Nigerian Pidgin, English.
2. Kenya and Tanzania: Swahili, Sheng, English.
3. Ghana: Twi/Akan, Ewe, English.
4. South Africa: Zulu, Xhosa, Afrikaans, English.
5. Ethiopia: Amharic, Oromo, Tigrinya, English.

Why this cluster:

- Strong population reach.
- Stronger open language-resource starting point.
- High code-switching need.
- Good testing opportunity.
- Clear business, education, creator, and voice use cases.

## 16. Immediate Next Implementation Sprint

Sprint goal:

Turn the current HTML concepts into a more connected prototype before building the real app.

Tasks:

1. Add navigation links between Fresh Chat, Active Chat, Auth, Plans, and personal Dashboard. **Completed in web platform.**
2. Add interactive opening states for language sheet, settings sheet, and sidebar. **Completed in Active Chat.**
3. Add a mock correction flow from an AI message. **Completed in Active Chat.**
4. Add voice listening visual state. **Completed in Active Chat.**
5. Add settings interactions for font size and theme. **Completed in Active Chat.**
6. Add a profile details view from the settings sheet. **Partially completed in Active Chat settings sheet.**
7. Refine seed-admin-gated Admin Console responsiveness. **Started in web platform.**
8. Create a component inventory for the eventual frontend build.

## 17. Clickable Prototype Flow

Current prototype paths:

- Welcome opens Fresh Chat, Auth, Plans, Active Chat, and personal Dashboard.
- Fresh Chat send button opens Active Chat.
- Fresh Chat prompt chips open Active Chat.
- Active Chat New Chat opens Fresh Chat.
- Active Chat Upgrade opens Plans.
- Active Chat opens personal Dashboard, not Admin Console.
- Admin Console opens only through seed-admin-gated access.
- Active Chat Language opens Language Passport and Tone Dial.
- Active Chat Menu opens Profile, Settings, Personalization, Plans, Privacy, and feature links.
- Active Chat Correct Tone opens a mock Community Correction sheet.
- Active Chat Voice opens a temporary listening state.
- Plans Free opens Fresh Chat.
- Plans Plus and Pro open Auth.
- Plans Teams requests Teams access or sales follow-up.
- Auth account creation opens Fresh Chat.

Prototype purpose:

- Confirm that every major feature has a clear home.
- Confirm that the app feels simple until a user asks for depth.
- Confirm that mobile users can reach language, settings, voice, and sidebar features.
- Prepare the structure for a real frontend routing system.

## 18. Definition Of Outstanding

Lumora is outstanding when:

- A new user understands it instantly.
- An African user feels their language and tone are respected.
- The UI feels calm, futuristic, and premium.
- Mobile feels as intentional as desktop.
- Advanced features are powerful but hidden elegantly.
- The app can grow from prototype to serious AI platform without redesigning the core experience.
