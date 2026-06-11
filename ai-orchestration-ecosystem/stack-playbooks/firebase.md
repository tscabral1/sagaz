# Stack Playbook: Firebase

## Purpose

Operate Firebase-backed apps using Hosting, Authentication, Firestore, Storage, Functions, or related Firebase services.

## Use When

- The chosen preset is `stack-presets/firebase.md`.
- The project needs managed backend services, realtime data, auth, hosting, or serverless functions.

## Setup

1. Inspect Firebase config and project aliases.
2. Confirm whether the Firebase CLI is installed and authenticated.
3. Identify security rules, indexes, functions, hosting targets, and env vars.
4. Apply `protocols/permission-contract.md` before login, project creation, deploys, or rules changes.

Common commands:

```bash
npm install
npm run build
firebase emulators:start
firebase deploy --only hosting
```

Use deploy commands only after approval.

## Verification

- Build succeeds.
- Emulator smoke test when functions, Firestore, or auth are used.
- Firestore and Storage rules review.
- Index and migration review.
- Auth provider configuration review.
- Functions logs and error handling review.
- Hosting preview or channel deploy when available.

## Deployment

1. Confirm Firebase project and alias.
2. Confirm rules and indexes.
3. Deploy preview channel when possible.
4. Smoke test preview.
5. Ask approval before production deploy.
6. Monitor Firebase logs after release.

## Handoff

```md
Stack playbook: firebase
Current phase:
Commands run:
Firebase project:
Rules status:
Preview/deploy status:
Risks:
Permission needed:
```

