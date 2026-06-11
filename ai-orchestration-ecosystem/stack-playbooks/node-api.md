# Stack Playbook: Node API

## Purpose

Operate Node.js API services, including REST, RPC, background jobs, or backend-for-frontend services.

## Use When

- The chosen preset is `stack-presets/node-api.md`.
- The project has server-side routes, auth, database access, queues, integrations, or webhooks.

## Setup

1. Inspect runtime, scripts, framework, and package manager.
2. Identify env vars, secrets, database, queues, and external integrations.
3. Identify local dev server and health check route.
4. Apply `protocols/permission-contract.md` before changing secrets, migrations, or deployed services.

Common commands:

```bash
npm install
npm run dev
npm test
npm run build
```

## Verification

- Unit tests for services and utilities.
- Integration tests for API routes.
- Contract checks for public endpoints.
- Auth and authorization checks.
- Input validation and error response checks.
- Secrets/env var audit.
- Database migration review.
- Load or performance check when traffic risk is meaningful.

## Deployment

1. Confirm hosting target.
2. Confirm env vars and secrets.
3. Run migrations safely.
4. Deploy preview/staging.
5. Smoke test health and critical endpoints.
6. Promote after approval.

## Handoff

```md
Stack playbook: node-api
Current phase:
Commands run:
API checks:
Security checks:
Deployment status:
Rollback:
Risks:
Permission needed:
```

