# Lumora Design System

Version: 0.1  
Date: 2026-04-29  
Design direction: **Afro-Futurist Signal / Neon Baobab**

Related build inventory: `Lumora_Component_Inventory.md`

## 1. Creative Thesis

Lumora should feel like a future African intelligence layer: luminous, precise, multilingual, warm, and culturally alive without leaning on obvious stereotypes.

The interface should feel dark-first, premium, and kinetic. African culture appears through rhythm, geometry, motion, tone, language behavior, and social warmth, not through flags, safari references, or generic decorative motifs.

## 2. Visual Personality

Lumora is:

- **Luminous:** neon language signals, glowing AI states, light as intelligence.
- **Grounded:** dark surfaces, mineral warmth, readable typography, practical layouts.
- **Rhythmic:** repeating geometry, conversational pulses, voice wave motion.
- **Pan-African:** not tied to one country, ethnic group, language, or symbol.
- **Human:** respectful tone controls, dialect confidence, community correction, voice-first flows.
- **Futuristic:** glass depth, signal trails, high-contrast accents, cinematic darkness.

Lumora is not:

- Traditional yellow UI.
- Tourism-inspired African branding.
- Flag collage.
- Generic chatbot clone.
- A flat black dashboard with neon scattered everywhere.

## 3. Color System

### Core Palette

| Token | Hex | Role |
|---|---:|---|
| Deep Space | `#07070D` | App background, hero surfaces |
| Carbon Black | `#111118` | Panels, cards, elevated surfaces |
| Midnight Indigo | `#17113D` | Depth fields, active sidebars, atmospheric gradients |
| Solar Neon | `#F8FF3D` | Primary AI signal, selected states, brand spark |
| Electric Cyan | `#00F5D4` | Voice, language detection, live activity |
| Violet Pulse | `#8B5CF6` | Intelligence layer, model routing, premium gradients |
| Magma Coral | `#FF4D6D` | Alerts, correction prompts, expressive highlights |
| Palm Signal | `#21E06B` | Success, verified confidence, positive completion |
| Copper Glow | `#C46A2B` | Warmth, cultural materiality, secondary accents |
| Soft Cloud | `#F5F2EA` | Primary text on dark, light mode base |

### Functional Tokens

| Token | Value |
|---|---:|
| Background Primary | `#07070D` |
| Background Secondary | `#0D0D16` |
| Surface Primary | `#111118` |
| Surface Elevated | `#181824` |
| Surface Glass | `rgba(255,255,255,0.07)` |
| Border Soft | `rgba(245,242,234,0.10)` |
| Border Active | `rgba(0,245,212,0.45)` |
| Text Primary | `#F5F2EA` |
| Text Secondary | `rgba(245,242,234,0.68)` |
| Text Muted | `rgba(245,242,234,0.44)` |
| Focus Ring | `#F8FF3D` |

### Gradient Language

- **Signal Gradient:** `linear-gradient(135deg, #F8FF3D, #00F5D4 45%, #8B5CF6)`
- **Voice Gradient:** `linear-gradient(135deg, #00F5D4, #21E06B)`
- **Insight Gradient:** `linear-gradient(135deg, #8B5CF6, #FF4D6D)`
- **Warmth Gradient:** `linear-gradient(135deg, #C46A2B, #FF4D6D)`
- **Depth Gradient:** `radial-gradient(circle at top left, rgba(139,92,246,0.30), transparent 36%), radial-gradient(circle at bottom right, rgba(0,245,212,0.18), transparent 32%), #07070D`

## 4. Typography

Recommended type direction:

- **Primary UI font:** Inter, Satoshi, Geist, or Manrope.
- **Display font:** Space Grotesk, Sora, or Clash Grotesk.
- **Fallback stack:** `Inter, Satoshi, Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Type principles:

- Use crisp, modern typography with generous line height.
- Avoid decorative fonts for African identity.
- Let culture come through language and rhythm, not hard-to-read lettering.
- Use short, confident labels.

Scale:

| Use | Size | Weight |
|---|---:|---:|
| Product mark | 24-32px | 700 |
| Page title | 28-40px | 700 |
| Panel title | 15-18px | 650 |
| Body | 14-16px | 400-500 |
| Meta | 12-13px | 500 |
| Button | 13-15px | 650 |

## 5. Layout System

The first Lumora experience should be a focused chat workspace, not a landing page.

Desktop layout:

- Left rail: country, language, dialect, recent chats.
- Main canvas: conversation, tone dial, input, voice controls.
- Right panel: language confidence, model route, source/mode details, correction tools.

Mobile layout:

- Main chat first.
- Language and model panels become bottom sheets.
- Tone dial becomes a horizontal segmented control.
- Voice button remains always reachable.

Spacing:

- Base unit: 4px.
- Common spacing: 8, 12, 16, 20, 24, 32.
- Panels: 16-24px internal padding.
- Chat bubbles: 14-18px vertical rhythm.

Radius:

- App shell: 0.
- Panels: 16px.
- Buttons: 999px only for pill controls and chips.
- Cards: 8px or 12px.
- Chat bubbles: 18px, with asymmetric corners for human warmth.

## 6. Component Direction

### Perfected App Composition

Lumora's interface should be organized by progressive disclosure:

- **Main chat:** only conversation, composer, language access, profile/settings, and sidebar access.
- **Sidebar:** navigation, recent chats, and major workflows.
- **Language sheet:** Language Passport, dialect, bridge language, and Tone Dial.
- **Profile/settings sheet:** account, plan, theme, font size, memory, privacy, and advanced tools.
- **Plans:** separated from chat so upgrading does not interrupt normal conversation.
- **Admin:** separated from consumer chat so operational complexity never leaks into the user experience.

The product should feel minimalist at rest and powerful when opened.

### Responsive Standard

Desktop:

- Sidebar is visible.
- Chat column is centered.
- Composer sits bottom-centered.
- Settings and language sheets open from top controls.

Tablet:

- Sidebar becomes a drawer.
- Chat remains centered with moderate bubble sizes.
- Sheets retain readable max-widths.

Mobile:

- Sidebar is hidden behind the hamburger.
- Language control becomes compact.
- Profile/settings remains accessible.
- Chat bubbles shrink and simplify.
- Composer keeps send pinned to the right edge.
- Fresh chat composer is centered before conversation starts.

Primary actions use neon gold. Cyan and violet are intelligence accents. Green is reserved for success or verified confidence.

### App Shell

- Dark immersive background.
- Subtle luminous pattern field.
- Panels should feel layered, not heavy.
- Avoid nested card-heavy UI.

### Chat Bubble

User:

- Carbon surface with soft border.
- Small language/dialect chip.
- Optional transcript indicator for voice.

Lumora:

- Slight indigo/cyan glow.
- Response metadata hidden by default but available.
- Tone chip visible when relevant.

### Tone Dial

Controls response personality:

- Clear
- Respectful
- Street
- Business
- Teacher
- Storyteller
- Creator

Design:

- Segmented control with neon active indicator.
- Uses text labels first because tone must be immediately understandable.

### Language Passport

User profile object containing:

- Country
- Primary language
- Dialect/region
- Bridge language
- Script preference
- Formality preference
- Voice preference

Design:

- Compact identity chip.
- Expandable into full setup.
- Show confidence and allow correction.

### Voice Control

Voice is a first-class input, not an add-on.

States:

- Idle
- Listening
- Detecting language
- Transcribing
- Responding
- Playing answer

Design:

- Circular glowing control.
- Cyan/green waveform.
- Language confidence shown nearby.

### Model Route Panel

Shows:

- Detected language
- Dialect hint
- Task type
- Model route
- Confidence
- Correction option

Default:

- Collapsed summary.

Expanded:

- Transparent enough for trust, simple enough for everyday users.

## 7. Motion Principles

Motion should feel like language becoming visible.

Use:

- Pulse rings for listening.
- Soft signal trails for AI generation.
- Waveform shimmer for voice.
- Geometric wipes for language switching.
- Micro-glows on selected tone/language.

Avoid:

- Slow ornamental animation.
- Excessive bouncing.
- Constant background movement.
- Motion that harms readability.

## 8. Accessibility

- Maintain high contrast in dark mode.
- Do not rely on color alone for status.
- All tone and language controls need text labels.
- Use visible focus states.
- Voice actions must have text alternatives.
- Keep response text highly readable.
- Provide reduced-motion mode.

## 9. First UI Concept

The first concept should be named:

**Lumora Clean Chat**

Reference file: `Lumora_Clean_Chat_Concept.html`

Supporting concept files:

- Product experience map: `Lumora_Product_Experience_Map.md`
- Fresh centered chat state: `Lumora_Fresh_Chat_Concept.html`
- Login/sign-up: `Lumora_Auth_Concept.html`
- Premium plans: `Lumora_Plans_Concept.html`
- Admin dashboard: `Lumora_Admin_Dashboard_Concept.html`

Core screen:

- A familiar, modern AI chat window.
- Minimal top bar with Lumora identity and lightweight language/tone settings.
- Centered conversation with generous whitespace and readable chat bubbles.
- Futuristic voice-first composer fixed near the bottom.
- Language, dialect, tone, and model intelligence should be available through subtle chips, menus, bottom sheets, or contextual controls, not permanent side panels.
- Prompt suggestions can appear only in a new empty chat state; once a conversation begins, the interface should focus on the chat itself.
- The left sidebar should exist, but stay hidden by default. Clicking the Lumora brand/mark opens it; clicking outside or pressing Escape closes it.
- Language selection should live behind the language chip in the top bar and become a bottom sheet on mobile.

Primary user promise:

"Chat naturally. Lumora understands the language, the dialect, and the tone."

### Current Feature Map

Visible by default:

- AI Chat
- Voice input
- Language chip
- Tone chip
- Detected language/tone metadata

Hidden in the left sidebar:

- Recent chats
- Translate
- Voice Circle
- Language Passport
- Tone Dial
- Market Mode
- Classroom Mode
- Creator Studio
- Community Corrections
- Local Knowledge Packs

Hidden in language/tone settings:

- Country/language/dialect choice
- Bridge language
- Script preference
- Tone selection
- Model confidence and routing visibility later

Hidden in the top-right menu:

- Profile
- Font size controls
- Theme controls
- Memory
- Offline saved chats
- WhatsApp export
- Agent tools

Future features to add:

- Persistent memory by language and tone
- Offline saved chats
- WhatsApp export
- Shared conversation links
- Organization/team spaces
- Agent tools for local services
- Verified expert knowledge packs
- Contributor/reviewer dashboard for dialect quality

## 10. Design Tokens For Implementation

```css
:root {
  --deep-space: #07070d;
  --carbon-black: #111118;
  --midnight-indigo: #17113d;
  --solar-neon: #f8ff3d;
  --electric-cyan: #00f5d4;
  --violet-pulse: #8b5cf6;
  --magma-coral: #ff4d6d;
  --palm-signal: #21e06b;
  --copper-glow: #c46a2b;
  --soft-cloud: #f5f2ea;

  --bg-primary: #07070d;
  --bg-secondary: #0d0d16;
  --surface-primary: #111118;
  --surface-elevated: #181824;
  --surface-glass: rgba(255, 255, 255, 0.07);
  --border-soft: rgba(245, 242, 234, 0.10);
  --border-active: rgba(0, 245, 212, 0.45);
  --text-primary: #f5f2ea;
  --text-secondary: rgba(245, 242, 234, 0.68);
  --text-muted: rgba(245, 242, 234, 0.44);
  --focus-ring: #f8ff3d;
}
```

## 11. First Visual Review Notes

Reviewed against desktop and mobile screenshots on 2026-05-04.

Keep:

- Dark-first Neon Baobab direction.
- Neon yellow as selected state, not as the overall background.
- Cyan/green voice and confidence states.
- Glassy dark surfaces with subtle indigo/cyan/coral atmosphere.
- Familiar AI chat structure inspired by ChatGPT, Claude, Gemini, and Codex.

Refined:

- Removed the busy three-panel workspace from the first concept.
- Simplified the UI into a clean centered chat experience.
- Moved language, dialect, tone, and intelligence controls into subtle chips and future contextual menus.
- Kept the composer large and voice-friendly.
- Preserved the futuristic Neon Baobab identity through color, glow, depth, and motion-ready surfaces.
- Removed the large welcome/prompt-card layer from the active conversation state so the screen behaves like a standard AI chat product.
- Added a hidden left sidebar for features, opened from the Lumora brand/mark.
- Split the language selector from the three-dot menu. The language chip now opens language and tone only; the three-dot menu opens profile, settings, theme, font size, and future features.
- Reduced the visual weight of the mobile chat and composer.
- Replaced loud green/lemon button styling with calmer cyan/violet actions and solar only as a small brand accent.
- Simplified the background into a darker, cleaner mesh instead of a heavy color wash.
- Added neon-gold as the primary action direction for send/upgrade/account actions.
- Added separate concept pages for fresh chat, auth, plans, and admin dashboard.
- Reframed admin as an Admin Observatory with language quality, trust health, model routing, safety, corrections, launch readiness, and revenue visibility.

Next refinements:

- Replace placeholder button symbols with proper icons in the production app.
- Create a chat settings menu for language, dialect, tone, and model visibility.
- Create a bottom sheet for language/tone controls on mobile.
- Decide whether prompt suggestions should show only on empty chat or remain above early conversations.
- Test real African-language text lengths because some dialect/language labels will be longer than the current examples.
- Create light mode later, but keep dark mode as the primary brand expression.
