# Lumora Component Inventory

Version: 0.1  
Date: 2026-07-26  
Purpose: Translate Lumora's concept screens into reusable product components.

## 1. App Shell Components

### `WelcomeScreen`

Used by:

- First launch.
- Logged-out user entry.
- Onboarding reset.

Responsibilities:

- Introduce Lumora.
- Route to Fresh Chat.
- Route to Auth.
- Route to Plans.
- Show a compact app map.

Mobile behavior:

- Phone-first single column.
- Safe area friendly for Android and iOS.
- Primary action remains visible and thumb-friendly.

### `AppShell`

Used by:

- Active Chat
- Fresh Chat
- Personal Dashboard
- Enterprise Admin Console, with separate protected admin variant

Responsibilities:

- Overall page layout.
- Desktop sidebar region.
- Main content region.
- Responsive breakpoint behavior.

Variants:

- `consumer`
- `dashboard`
- `admin`
- `auth`
- `plans`

### `Sidebar`

Used by:

- Active Chat
- Fresh Chat desktop

Responsibilities:

- New chat.
- Search chats.
- Workflow navigation.
- Recent chats.
- Mini profile.

Mobile behavior:

- Converts to slide-over drawer.
- Closes on scrim click or Escape.

### `TopBar`

Used by:

- Active Chat
- Fresh Chat
- Plans
- Admin

Responsibilities:

- Product identity.
- Language access.
- Plan or upgrade action.
- Profile/settings menu.

## 2. Chat Components

### `FreshChatHero`

Used by:

- Fresh Chat

Responsibilities:

- Opening headline.
- Centered composer.
- Suggested prompt chips.

### `Conversation`

Used by:

- Active Chat

Responsibilities:

- Render message list.
- Maintain readable width.
- Preserve bottom space for composer.

States:

- Empty.
- Loading.
- Streaming.
- Complete.
- Error.

### `MessageBubble`

Variants:

- `user`
- `assistant`
- `system`
- `voice-transcript`
- `correction-pending`

Metadata:

- Language.
- Dialect.
- Tone.
- Confidence.
- Model route.

Mobile behavior:

- Smaller padding.
- Optional avatars hidden.
- Long text wraps naturally.

### `Composer`

Responsibilities:

- Text input placeholder.
- Add attachment/tool button.
- Voice button.
- Send button.

Rules:

- Send button uses neon gold.
- Voice is available when space allows.
- Mobile hides secondary controls if needed.

### `PromptChips`

Examples:

- Explain in my dialect.
- Translate with tone.
- Write a market reply.
- Teach me simply.

## 3. Language Components

### `LanguageSheet`

Responsibilities:

- Open from language chip.
- Show Language Passport summary.
- Choose language.
- Choose dialect.
- Choose bridge language.
- Choose tone.

### `LanguagePassport`

Fields:

- Country.
- City.
- Primary language.
- Dialect.
- Bridge language.
- Script preference.
- Formality.
- Voice preference.

### `ToneDial`

Options:

- Simple.
- Respectful.
- Formal.
- Teacher.
- Market.
- Street.
- Creator.
- Storyteller.

Rules:

- Tone labels must be understandable.
- Avoid icons-only for tone.

### `ConfidenceIndicator`

Purpose:

- Show detected language confidence.
- Allow correction when confidence is low.

States:

- High confidence.
- Medium confidence.
- Low confidence.
- User corrected.

## 4. Profile And Settings Components

### `SettingsSheet`

Responsibilities:

- Profile summary.
- Account details.
- Plan status.
- Font size.
- Theme.
- Memory.
- Privacy.
- Feature links.

### `ProfileCard`

Fields:

- Name.
- Email.
- Country.
- City.
- Plan.
- Primary language.
- Bridge language.

### `SegmentedControl`

Used for:

- Font size.
- Theme.
- Tone.
- Billing period.

### `Toggle`

Used for:

- Memory.
- Voice consent.
- Privacy settings.
- Offline saved chats.

## 5. Auth Components

### `AuthShell`

Responsibilities:

- Centered auth layout.
- Story panel.
- Form card.

Responsive behavior:

- Desktop two-column.
- Mobile stacked.

### `AuthForm`

Modes:

- Sign up.
- Login.

Required sign-up fields:

- Full name.
- Email.
- Country.
- City.
- Primary language.
- Bridge language.
- Password.

## 6. Plans Components

### `PlansHero`

Responsibilities:

- Explain why premium exists.
- Keep copy short and centered.

### `BillingToggle`

Options:

- Monthly.
- Yearly.

### `PlanCard`

Variants:

- Free.
- Plus.
- Pro.
- Teams.

Fields:

- Plan name.
- Price.
- Description.
- Feature list.
- CTA.
- Recommended badge.

## 7. Admin Components

### `PersonalDashboard`

Responsibilities:

- Show safe user-facing account information.
- Show plan status.
- Show language passport summary.
- Show recent chat/activity summary.
- Link to settings, plans, and profile editing.

Restrictions:

- Must not show platform-wide analytics.
- Must not show payment operations beyond the user's own plan/status.
- Must not show admin, model, security, visitor, infrastructure, support, or moderation data.

### `AdminShell`

Responsibilities:

- Seed-admin-gated enterprise admin sidebar.
- Admin topbar.
- Operational dashboard layout.
- Role-aware module access.
- Audit-aware admin actions.

Restrictions:

- Not visible in consumer profile or normal sidebar.
- Access only through seed-admin-approved roles.
- Production version must require MFA/SSO, RBAC/ABAC, and audit logging.

### `MetricCard`

Tracks:

- Active users.
- Visitors and new visitors.
- Language requests.
- Voice usage.
- Corrections.
- Revenue.
- Payments and plan upgrades.
- Safety events.
- Web/mobile/API usage.
- Infrastructure health.

### `LanguageQualityPanel`

Responsibilities:

- Language performance.
- Correction rate.
- Reviewer status.
- Confidence score.

### `ModelRoutingPanel`

Responsibilities:

- Model usage.
- Latency.
- Cost.
- Quality.
- Fallback rate.

### `CorrectionQueue`

Responsibilities:

- Review user correction submissions.
- Approve, reject, or escalate.
- Track reviewer notes.

### `CountryReadinessTable`

Responsibilities:

- Track readiness by country.
- Show language coverage.
- Show speech support.
- Show reviewer coverage.
- Show launch status.

## 8. Interaction States

Every interactive component should support:

- Default.
- Hover.
- Focus.
- Active.
- Disabled.
- Loading.
- Error.

Accessibility requirements:

- Keyboard focus visible.
- Buttons have clear labels.
- Sheets close with Escape.
- Text contrast remains strong on dark backgrounds.
- Font-size setting can increase body text without breaking layout.

## 9. Build Priority

Build order:

1. Tokens and layout primitives.
2. Buttons, chips, segmented controls, toggles.
3. App shell and sidebar.
4. Composer and message bubbles.
5. Sheets and modals.
6. Auth form.
7. Plans cards.
8. Admin cards and tables.
9. Language intelligence states.
10. Correction and review flows.
