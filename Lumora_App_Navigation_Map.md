# Lumora App Navigation Map

Version: 0.1  
Date: 2026-08-06  
Purpose: Map the concept prototype into future Android and iOS app navigation.

## 1. Mobile App Principle

Lumora should be designed mobile-first because Android and iOS will be primary platforms. The web concepts should translate into native screens without redesigning the product.

Mobile app rules:

- Welcome appears only for first launch, logged-out users, or onboarding reset.
- Fresh Chat is the primary home after onboarding.
- Active Chat is the core product surface.
- Advanced features use sheets, drawers, and tabs.
- Consumer users may access a safe personal Dashboard for plan, usage, language passport, and activity.
- Enterprise Admin Console is not part of the consumer app profile and is available only to seed-admin-approved roles.

## 2. Prototype Screen Map

| Web concept file | Future app screen | Mobile app route | Purpose |
|---|---|---|---|
| `Lumora_Welcome_Concept.html` | Welcome / First Launch | `Welcome` | Introduce Lumora and route users into chat, account creation, or plans |
| `Lumora_Fresh_Chat_Concept.html` | Fresh Chat Home | `ChatHome` | Centered composer before first message |
| `Lumora_Clean_Chat_Concept.html` | Active Chat | `ChatThread` | Conversation, composer, language, voice, correction, sidebar |
| `Lumora_Auth_Concept.html` | Auth / Language Passport Setup | `Auth` and `LanguageSetup` | Sign up, log in, profile basics, country, city, language |
| `Lumora_Plans_Concept.html` | Plans | `Plans` | Free, Plus, Pro, Teams |
| `web-platform/index.html#dashboard` | Personal Dashboard | `Dashboard` | Safe user-facing plan, usage, language passport, and activity overview |
| `Lumora_Admin_Dashboard_Concept.html` / `web-platform/index.html#admin` | Enterprise Admin Console | `AdminConsole` | Seed-admin-gated operations console for leadership and dev teams |

## 3. Recommended Native Navigation

### Root Stack

- `Welcome`
- `Auth`
- `MainTabs`
- `Plans`
- `Dashboard`
- `AdminStack` only when a seed-admin-approved role exists

### Main Tabs

- `Chat`
- `History`
- `Voice`
- `Tools`
- `Profile`

### Chat Stack

- `ChatHome`
- `ChatThread`
- `LanguageSheet`
- `ToneDialSheet`
- `CorrectionSheet`
- `VoiceListeningSheet`
- `SettingsSheet`

### Profile Stack

- `Profile`
- `LanguagePassport`
- `MemorySettings`
- `PrivacySettings`
- `ThemeSettings`
- `FontSizeSettings`
- `PlanStatus`

### Tools Stack

- `Translate`
- `MarketMode`
- `ClassroomMode`
- `CreatorStudio`
- `LocalKnowledgePacks`
- `CommunityCorrections`

### Admin Stack

- `AdminAccessGate`
- `AdminConsole`
- `ExecutiveDashboard`
- `Users`
- `Visitors`
- `Payments`
- `PlansAndBilling`
- `Organizations`
- `LanguageQuality`
- `ModelRouting`
- `ModelRegistry`
- `CorrectionsQueue`
- `SubscriptionsAndRevenue`
- `MobileAppOps`
- `WebAppOps`
- `SecurityCompliance`
- `AuditLogs`
- `Infrastructure`
- `CountryReadiness`
- `Safety`

## 4. First Launch Flow

1. Open Lumora.
2. Show Welcome.
3. User chooses:
   - Continue to chat.
   - Create account.
   - View plans.
4. If user continues as guest:
   - Open Fresh Chat.
   - Ask first question.
   - Move to Active Chat.
5. If user creates account:
   - Open Auth.
   - Capture Language Passport basics.
   - Open Fresh Chat.
6. If user selects paid plan:
   - Open Plans.
   - Choose Plus or Pro.
   - Open Auth or payment flow.

## 5. Logged-In Flow

1. Open Lumora.
2. Skip Welcome.
3. Open Fresh Chat or last Active Chat.
4. Profile controls remain accessible from Settings.
5. Language Passport and Tone Dial remain accessible from language control.

## 6. Android And iOS Product Notes

### Android

- Prioritize low-end device performance.
- Keep animations lightweight.
- Support compact screen widths.
- Make voice input prominent.
- Plan for offline saved chats later.

### iOS

- Use bottom sheets for language, settings, corrections, and voice.
- Respect safe areas.
- Keep text scale compatible with accessibility settings.
- Use subtle haptics for send, voice start, and correction submit.

### Shared Native Behavior

- Use dark Neon Baobab as default theme.
- Use neon gold only for primary actions.
- Use cyan for language and voice signals.
- Use sheets for advanced controls.
- Use tabs for repeated high-level navigation.
- Use stack navigation for detail screens.

## 7. Prototype Links

Current clickable prototype:

- Welcome -> Fresh Chat.
- Welcome -> Auth.
- Welcome -> Plans.
- Welcome -> Active Chat.
- Welcome -> Admin.
- Fresh Chat -> Active Chat.
- Active Chat -> Fresh Chat, Plans, Admin, Language Sheet, Settings Sheet, Correction Sheet, Voice State.
- Plans -> Fresh Chat, Auth, Admin.
- Auth -> Fresh Chat.
- Admin -> Active Chat and Plans.

## 8. Next Mobile Design Tasks

1. Create a native-style bottom navigation concept.
2. Create Android and iOS onboarding states.
3. Create native Language Passport setup flow.
4. Create voice listening and playback states.
5. Create chat history and search screens.
6. Create profile and settings screens as native mobile views.
7. Create admin mobile role-gated view for operators.

## 9. Mobile App Build Status

Initial Expo / React Native implementation added in `mobile-app`.

Implemented:

- Welcome / first launch.
- Login and sign-up with Language Passport fields.
- Fresh centered chat home.
- Active chat thread with local simulated Lumora replies.
- Language and tone controls.
- Tools surface for Chat, Translate, Voice Circle, Market Mode, Classroom, and Creator Studio.
- Plans for Free, Plus, Pro, and Teams.
- Safe personal Dashboard.
- Profile and settings.
- Bottom navigation for mobile-first usage.

Pending:

- Native microphone capture, ASR, TTS, and playback.
- Persistent auth and secure storage.
- Backend model router API connection.
- Real payment integration.
- Native app icon and splash assets.
- Role-gated mobile admin/operator app, if leadership later approves mobile admin access.
