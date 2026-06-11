# Stack Playbooks

## Purpose

Provide operational guides for common stacks after Sagaz recommends a stack preset.

Use stack presets to decide what to use. Use stack playbooks to run the work safely.

## Use When

- A user asks Sagaz to build, verify, deploy, or release a project on a known stack.
- A workflow reaches implementation, QA, production readiness, deployment, or release.
- The user needs concrete commands, risks, checks, and handoff expectations.

## Playbooks

- `nextjs-vercel-supabase.md`: Next.js on Vercel with Supabase.
- `react-vite-static.md`: React/Vite or hand-built static deploys.
- `expo-eas.md`: Expo mobile apps with EAS readiness.
- `node-api.md`: Node.js API services.
- `firebase.md`: Firebase-hosted apps and backend services.

## Setup

Before using a playbook:

1. Confirm the chosen stack preset.
2. Apply `protocols/permission-contract.md`.
3. Inspect the project package manager and scripts.
4. Identify platform credentials and account-linked actions.
5. Keep run state for medium, large, production, or multi-phase work.

## Verification

Every playbook must specify:

- Local checks.
- Build checks.
- Security or secret checks.
- Deployment preview or release checks.
- Manual smoke test.
- Residual risk.

## Deployment

Never deploy, publish, create cloud resources, or change account-linked settings without explicit approval.

## Handoff

```md
Stack playbook:
Current phase:
Commands run:
Evidence:
External accounts touched:
Deployment status:
Residual risk:
Next action:
Permission needed:
```

