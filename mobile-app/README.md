# Lumora Mobile App

Expo / React Native starter for the Lumora Android and iOS consumer app.

## Current Mobile Scope

- Welcome / first launch
- Login and signup with Language Passport fields
- Fresh centered chat home
- Active chat thread with simulated Lumora replies
- Local chat history and new-chat flow
- Language and tone controls
- Voice Circle prototype state
- Tools: Translate, Voice Circle, Market Mode, Classroom, Creator Studio
- Plans: Free, Plus, Pro, Teams
- Safe personal dashboard
- Profile and settings
- Local AsyncStorage persistence
- Separate operator access request placeholder

The Enterprise Admin Console remains separate from the consumer mobile app. If mobile admin access is later required, it should be built as a role-gated operator surface, not a normal profile menu item.

## Run

Install dependencies, then start Expo:

```powershell
cd mobile-app
npm install
npm run start
```

Android:

```powershell
npm run android
```

iOS:

```powershell
npm run ios
```

## Notes

- This starter intentionally mirrors the approved web flow before backend integration.
- Replies are simulated locally until the model router API is built.
- Voice actions are placeholders for future native microphone, ASR, TTS, and playback integration.
- Operator access is only a role-gated request placeholder; sensitive admin features are not exposed in the consumer app.
