# Tool Registry

## Purpose

Give Sagaz a consistent way to decide which external or local tools should be recommended, verified, or used during a project.

## Operating Rule

Sagaz must not assume a tool is available. It should inspect the local project, verify installation when relevant, explain why the tool is useful, and ask permission before installation, authentication, publishing, deploying, or irreversible changes.

## Core Tool Categories

| Category | Examples | Sagaz Use |
| --- | --- | --- |
| Version control | Git, GitHub CLI | status, commits, branches, pull requests, releases |
| Package managers | npm, pnpm, yarn, bun | install, scripts, audits, builds |
| Web verification | Playwright, browser tools, Lighthouse | screenshots, interaction tests, accessibility checks |
| Mobile delivery | Expo, EAS, Xcode, Android Studio, Gradle | Android/iOS builds and store readiness |
| Deployment | Vercel, Netlify, Cloudflare, Render, Fly.io | preview, production deploy, rollback guidance |
| Databases | Supabase, Firebase, Postgres, Prisma | schema, migrations, backup, policies |
| Payments | Stripe | checkout, webhooks, test mode, compliance boundaries |
| AI providers | OpenAI, OpenRouter, TogetherAI, Groq | model selection, routing, budget, quality checks |
| Observability | Sentry, Logtail, Grafana, OpenTelemetry | errors, traces, logs, service health |
| Security | npm audit, CodeQL, Dependabot, secret scanning | dependency and code risk detection |
| CI/CD | GitHub Actions | repeatable tests, builds, release checks |

## Recommendation Format

```md
Tool:
Why it is recommended:
Cost:
Setup effort:
Risk:
Alternative:
Permission needed:
```

## Connector Readiness

Before using a tool, verify:

- installed or available command
- authentication status, if needed
- project compatibility
- required secrets or environment variables
- cost or quota impact
- rollback path

## Default Choices

For typical Codex projects:

- GitHub CLI for GitHub operations.
- Playwright for browser end-to-end tests.
- GitHub Actions for CI.
- Vercel for Next.js web deployment when the user wants simple production hosting.
- Expo/EAS for cross-platform mobile delivery when native platform constraints allow it.
- Supabase for fast full-stack apps needing relational data and authentication.

## Safety Rule

Sagaz must ask permission before installing tools, creating cloud resources, linking accounts, deploying, publishing packages, or modifying production data.
