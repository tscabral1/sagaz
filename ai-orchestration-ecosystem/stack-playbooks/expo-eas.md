# Stack Playbook: Expo And EAS

## Purpose

Operate Expo mobile apps and prepare Android/iOS builds with EAS.

## Use When

- The chosen preset is `stack-presets/expo-mobile.md` or `stack-presets/react-native.md`.
- The project targets Android, iOS, or both.
- The user needs internal builds, store readiness, or mobile QA.

## Setup

1. Confirm target platforms.
2. Inspect Expo SDK, package manager, and app config.
3. Confirm whether EAS is configured.
4. Confirm app identifiers, icons, splash assets, permissions, and notification needs.
5. Apply `protocols/permission-contract.md` before account-linked EAS, Apple, or Google Play actions.

Common commands:

```bash
npm install
npx expo start
npx expo-doctor
npx eas build --profile preview
```

Use EAS commands only after approval when account-linked.

## Verification

- Typecheck or build script.
- Expo doctor.
- Simulator or device smoke test.
- Small and large screen review.
- Offline behavior check when relevant.
- Notification permission check when relevant.
- Accessibility review for labels, contrast, tap targets, and text scaling.

## Deployment

1. Prepare app metadata.
2. Configure EAS profiles.
3. Create internal build.
4. Test on device.
5. Prepare store checklist.
6. Ask approval before TestFlight, Play internal testing, or store submission.

## Handoff

```md
Stack playbook: expo-eas
Current phase:
Commands run:
Device checks:
EAS status:
Store readiness:
Risks:
Permission needed:
```

