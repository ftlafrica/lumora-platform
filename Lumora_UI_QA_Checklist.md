# Lumora UI QA Checklist

Version: 0.1  
Date: 2026-07-26

## 1. Viewports To Test

Required:

- 390px mobile.
- 430px large mobile.
- 768px tablet.
- 1024px small laptop.
- 1440px desktop.
- 1920px wide desktop.

## 2. Global Checks

- No horizontal overflow.
- No clipped text.
- No overlapping controls.
- No buttons squeezed into unreadable shapes.
- No feature dead ends on mobile.
- Neon gold is only used for primary actions.
- Cyan and violet remain accents, not heavy CTA colors.
- Green is only used for success or verified confidence.
- All text remains readable against dark surfaces.

## 2.1 Clickable Prototype Checks

- Welcome opens Fresh Chat.
- Welcome opens Auth.
- Welcome opens Plans.
- Welcome can open Active Chat and Admin through the prototype map.
- Fresh Chat send opens Active Chat.
- Fresh Chat chips open Active Chat.
- Active Chat New Chat opens Fresh Chat.
- Active Chat Upgrade opens Plans.
- Active Chat Admin Observatory opens Admin.
- Active Chat language chip opens Language Passport and Tone Dial.
- Active Chat menu opens Profile and Settings.
- Correct Tone opens the correction sheet.
- Voice opens a listening state.
- Plans CTAs route to the expected prototype pages.
- Auth account creation returns to Fresh Chat.

## 3. Fresh Chat

- Composer is centered before chat starts.
- Headline scales down on mobile.
- Suggested prompts wrap cleanly.
- Send button stays inside composer.
- Voice control hides or compresses gracefully on small screens.
- Page does not feel like a marketing landing page.

## 3.1 Welcome

- Mobile-first layout is polished at 390px and 430px.
- Primary CTA is visible and uses neon gold.
- Secondary account CTA is clear.
- Plans link is visible.
- Prototype map links to the major screens.
- Text and action buttons do not overflow.
- Welcome feels like an app entry screen, not a generic marketing page.

## 4. Active Chat

- Desktop sidebar is visible.
- Tablet and mobile sidebar opens as drawer.
- Drawer closes on scrim click.
- Drawer closes with Escape.
- Language selector remains accessible.
- Profile/settings remains accessible.
- Composer stays bottom-aligned.
- Send button is pinned to the composer edge.
- Message bubbles are compact on mobile.
- Long messages wrap naturally.
- Conversation does not feel like a dashboard.

## 5. Language Sheet

- Shows Language Passport summary.
- Shows country, city, primary language, and bridge language.
- Shows language options.
- Shows Tone Dial.
- Sheet is readable on mobile.
- Sheet does not overflow off-screen.

## 6. Profile And Settings

- Shows user name and email.
- Shows country and city.
- Shows plan.
- Shows languages and dialect context.
- Font size control is visible.
- Theme control is visible.
- Memory control is visible.
- Privacy access is visible.
- Plans access is visible.
- Community correction access is visible.

## 7. Auth

- Desktop auth card is centered.
- Mobile auth stacks cleanly.
- Required profile fields are present.
- Sign up and login modes are clear.
- Inputs are comfortable to tap on mobile.
- CTA uses neon gold.

## 8. Plans

- Desktop plans are centered in a max-width layout.
- Tablet plans use two columns.
- Mobile plans stack one column.
- Free, Plus, Pro, and Teams are present.
- CTA buttons are clear and consistent.
- Pro can be visually emphasized without overpowering the page.

## 9. Admin Observatory

- Admin feels separate from consumer chat.
- Metrics are visible above the fold.
- Language quality is represented.
- Model routing is represented.
- Safety is represented.
- Subscriptions and revenue are represented.
- Country readiness is represented.
- Dense information remains scannable.

## 10. Product Quality Questions

Before approval, ask:

- Does this feel like a premium AI app first?
- Does it feel distinct from ChatGPT, Gemini, and Claude without becoming busy?
- Would an African user understand where to set their language and tone?
- Would a mobile user feel the app was designed for them, not squeezed down from desktop?
- Are advanced features hidden elegantly but still easy to find?
- Does the UI avoid stereotypes while still feeling culturally alive?
