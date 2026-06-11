# Example: Web SaaS On Vercel

## User Prompt

```text
Sagaz: create a premium appointment scheduling SaaS for small clinics.

Requirements:
- user login
- calendar
- admin dashboard
- payments later
- premium responsive design
- production-ready deployment on Vercel
```

## Selected Workflow

`workflows/greenfield-web-app.md`

## Required Squads

- `squads/research-to-spec.md`
- `squads/product-factory.md`
- `squads/design-studio.md`
- `squads/production-critical.md`
- `squads/github-ops.md`

## First Actions

1. Confirm target users, appointment model, clinic roles, calendar rules, and payment timing.
2. Create or update run state from `templates/run-state.md`.
3. Use `tasks/intake-brief.md`.
4. Use `tasks/product-requirements.md`.
5. Use `tasks/stack-recommendation.md`.
6. Ask permission before moving from planning into implementation.

## Stack Recommendation

Default recommendation:

- Next.js.
- TypeScript.
- Vercel.
- Supabase for auth, database, and storage.
- shadcn/ui when the project uses React and wants a polished, composable UI baseline.
- Playwright for end-to-end checks.
- GitHub Actions for package and deployment checks.

Decision points:

- Use Stripe only when payments are in scope.
- Use a dedicated calendar integration only when external calendar sync is required.
- Use PostgreSQL migrations and RLS review before production.

## Handoff Sequence

| Phase | From | To | Evidence |
| --- | --- | --- | --- |
| Intake | research-to-spec | product-factory | user roles, constraints, success criteria |
| Requirements | product-factory | design-studio | product spec, core flows, acceptance criteria |
| Design | design-studio | production-critical | design system, responsive views, accessibility expectations |
| Build | production-critical | production-critical | implementation plan, tests, env vars |
| Release | production-critical | github-ops | QA report, production checklist, residual risks |

## Expected Artifacts

- `templates/product-spec.md`.
- `templates/stack-recommendation.md`.
- `templates/design-system-spec.md`.
- `templates/implementation-plan.md`.
- `templates/qa-report.md`.
- `templates/future-change-guide.md`.
- `templates/final-handoff.md`.

## Verification Plan

- Install/build check.
- Unit or integration tests for scheduling logic.
- Playwright smoke flow for signup, booking, admin review.
- Accessibility pass on core views.
- Responsive visual QA on mobile and desktop.
- Security review for auth, roles, RLS, env vars, and secrets.
- Production readiness check before Vercel release.

## GitHub Actions To Suggest

- Commit after implementation evidence exists.
- Push after local checks pass.
- Pull request if collaborating.
- Release notes only after production readiness is complete.

## Deployment Path

1. Prepare Vercel project.
2. Configure env vars.
3. Configure Supabase project and migrations.
4. Deploy preview.
5. Run smoke tests against preview.
6. Promote to production after approval.

## Final Handoff Shape

```md
Current team:
What was completed:
Evidence/artifacts:
Checks run:
Deployment status:
Risks or pending items:
Next recommended action:
Permission needed:
```

