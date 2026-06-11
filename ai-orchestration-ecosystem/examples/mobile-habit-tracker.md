# Example: Mobile Habit Tracker

## User Prompt

```text
Sagaz: create an Android/iOS habit tracker with premium UX and store-ready release planning.

Requirements:
- daily habits
- streaks
- reminders
- offline support
- clean design
- future account sync
```

## Selected Workflow

`workflows/mobile-app-production.md`

## Required Squads

- `squads/mobile-app-studio.md`
- `squads/design-studio.md`
- `squads/production-critical.md`
- `squads/github-ops.md`

## First Actions

1. Clarify offline-first expectations, reminder behavior, sync timing, and target stores.
2. Create or update run state from `templates/run-state.md`.
3. Use `tasks/intake-brief.md`.
4. Use `tasks/product-requirements.md`.
5. Use `tasks/stack-recommendation.md`.
6. Ask before installing mobile dependencies or configuring account-linked services.

## Stack Recommendation

Default recommendation:

- Expo.
- React Native.
- TypeScript.
- Local SQLite or AsyncStorage for offline habits.
- Supabase later if account sync becomes required.
- EAS Build when store distribution is needed.

Decision points:

- Use local-first storage for simple private habits.
- Use Supabase when cross-device sync or user accounts become required.
- Use native modules only when Expo support is not enough.

## Handoff Sequence

| Phase | From | To | Evidence |
| --- | --- | --- | --- |
| Intake | mobile-app-studio | design-studio | platform targets, offline rules, notification rules |
| UX | design-studio | mobile-app-studio | screen map, states, design system, accessibility notes |
| Build | mobile-app-studio | production-critical | implementation evidence, device checks |
| Release | production-critical | github-ops | store checklist, QA report, release notes |

## Expected Artifacts

- `templates/product-spec.md`.
- `templates/stack-recommendation.md`.
- `templates/design-system-spec.md`.
- `templates/mobile-release-checklist.md`.
- `templates/qa-report.md`.
- `templates/future-change-guide.md`.
- `templates/final-handoff.md`.

## Verification Plan

- Typecheck and lint.
- Unit tests for habit streak logic.
- Manual simulator checks on small and large screens.
- Offline behavior check.
- Notification permission and fallback check.
- Accessibility checks for tap targets, contrast, labels, and dynamic text.
- EAS readiness review before store release.

## GitHub Actions To Suggest

- Commit once local checks pass.
- Push after mobile release checklist is current.
- Use GitHub release only when the build is ready for testers or stores.

## Release Path

1. Confirm bundle identifiers and app metadata.
2. Prepare icon and splash assets.
3. Configure EAS.
4. Produce internal build.
5. Run smoke tests.
6. Prepare store checklist.
7. Ask approval before external submission.

## Final Handoff Shape

```md
Current team:
What was completed:
Evidence/artifacts:
Device checks:
Release readiness:
Risks or pending items:
Next recommended action:
Permission needed:
```

