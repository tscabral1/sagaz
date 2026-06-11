# Stack Playbook: Next.js, Vercel, Supabase

## Purpose

Operate a Next.js application deployed on Vercel with Supabase for auth, database, storage, or realtime features.

## Use When

- The chosen preset is `stack-presets/nextjs-vercel.md`.
- The app needs managed deployment, auth, database, or dashboard workflows.
- The project is a SaaS, marketing app, admin surface, or production web app.

## Setup

1. Inspect `package.json` scripts and package manager.
2. Confirm Node.js version and lockfile.
3. Confirm whether Supabase is already configured.
4. Identify required env vars for local, preview, and production.
5. Apply `protocols/permission-contract.md` before touching Vercel or Supabase accounts.

Common commands:

```bash
npm install
npm run dev
npm run build
npm test
```

Use the project's actual package manager if it is not npm.

## Verification

- Typecheck or build.
- Lint if configured.
- Unit/integration tests for business logic.
- Playwright smoke test for critical flows.
- Accessibility and responsive checks for core pages.
- Supabase RLS review when user data exists.
- Env var audit for secrets and public variables.

## Deployment

1. Ask approval before creating or changing Vercel/Supabase resources.
2. Configure env vars in Vercel.
3. Apply Supabase migrations with an approved process.
4. Deploy preview.
5. Smoke test preview.
6. Promote to production only after approval.

## Handoff

```md
Stack playbook: nextjs-vercel-supabase
Current phase:
Commands run:
Build result:
Supabase status:
Vercel status:
Preview URL:
Risks:
Permission needed:
```

