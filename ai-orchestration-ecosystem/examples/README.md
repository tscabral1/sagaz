# Examples

## Purpose

Provide reusable, low-token examples for common Sagaz projects. Examples are not templates to copy blindly. They show the expected flow, artifacts, handoffs, and verification depth.

## Example Categories

- complete marketing website
- SaaS web app
- admin dashboard
- mobile app
- bugfix to release
- safe refactor
- production deploy
- GitHub release

## Example Structure

Each example should include:

- user prompt
- selected workflow
- required squads
- first questions, if any
- stack recommendation summary
- handoff sequence
- expected artifacts
- verification plan
- GitHub actions to suggest
- deployment path
- final handoff shape

## Minimal Web App Example

```md
User prompt:
Sagaz: create a premium appointment scheduling SaaS for small clinics.

Workflow:
workflows/greenfield-web-app.md

Squads:
Product Factory -> Design Studio -> Production Critical -> GitHub Ops

Stack recommendation:
Next.js on Vercel, TypeScript, Supabase, Playwright, GitHub Actions.

Reason:
Fast delivery, clear deployment path, managed auth/database, strong web ecosystem, good future maintainability.

Required handoffs:
Intake -> stack -> spec -> design -> architecture -> implementation -> QA -> production readiness -> GitHub/deploy.
```

## Mobile App Example

```md
User prompt:
Sagaz: create an Android/iOS habit tracker with premium UX and store-ready release planning.

Workflow:
workflows/mobile-app-production.md

Likely stack:
Expo, React Native, TypeScript, SQLite or Supabase depending on sync needs, EAS for builds.

Required evidence:
Device-size review, offline behavior decision, accessibility checks, app icon/splash plan, release checklist.
```
