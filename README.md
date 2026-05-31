# Sagaz

Sagaz is a local AI orchestration ecosystem designed for Codex Desktop. It turns a product request into a structured delivery process with specialized AI teams, explicit handoffs, detailed specifications, implementation, testing, high-standard UX/UI, guided GitHub operations, CI/CD readiness, and production-quality gates.

It is inspired by ideas from AIOX, CrewAI, AutoGen, LangChain, and enterprise governance platforms, but it is designed for one practical goal: make Codex Desktop easy to use for serious web and mobile software projects while keeping token usage low and technical quality high.

## Designed For Codex Desktop

Sagaz is intended to be used inside Codex Desktop the way this repository was created: as a local Codex skill plus a Markdown orchestration ecosystem. The npm package only installs the skill and ecosystem files. It is not a standalone terminal agent runtime and it is not a replacement for Codex CLI.

## What Sagaz Does

Sagaz organizes work into focused teams:

- Product strategy and requirements.
- Stack recommendation.
- Software architecture.
- UX, UI, and design systems.
- Implementation.
- QA and testing.
- Security and production readiness.
- GitHub commits, pull requests, issues, releases, and checks.
- Android/iOS mobile delivery.
- CI/CD and post-delivery monitoring.

Sagaz also guides the user through the process. At the end of each phase, it explains what was completed, which team should work next, why the next step matters, and asks permission before moving forward.

## Why Use Sagaz

- **Simple invocation:** start with `Sagaz:` and describe the goal.
- **Low token usage:** load only the workflow, squad, task, or protocol needed for the current phase.
- **Guided process:** team handoffs require user approval.
- **Production quality:** gates for tests, security, builds, deployment, rollback, and residual risk.
- **Premium design:** UX/UI, design systems, responsiveness, accessibility, and visual QA.
- **Stack advisory:** technology choices explained by cost, speed, scale, maintainability, deployment, and future changes.
- **GitHub without guesswork:** Sagaz recommends commits, pushes, pull requests, issues, and releases at the right time.
- **Web and mobile:** workflows for browser apps, websites, dashboards, Android, and iOS.
- **Persistent state:** Markdown run state records decisions, approvals, handoffs, risks, and test evidence.
- **Agent observability:** compact traces record decisions, tools, evidence, failures, and recoveries.
- **Durable checkpoints:** long projects can resume across threads and refactors without losing context.
- **Tool registry:** Sagaz verifies and recommends tools such as GitHub CLI, Playwright, Vercel, Expo/EAS, Supabase, Firebase, Stripe, CI/CD, and observability services.
- **Stack presets:** common web, mobile, backend, database, and dashboard stacks are documented as starting points.
- **Sagaz evaluations:** scenario-based checks help prevent regressions in the orchestration system itself.

## How It Works

Sagaz uses Markdown files as the source of truth. The main structure is:

```text
ai-orchestration-ecosystem/
```

Key areas:

- `workflows/`: ready-made workflows for web, mobile, production, bug fixes, and refactoring.
- `squads/`: specialized teams.
- `agents/`: individual roles.
- `tasks/`: formal tasks with inputs, outputs, acceptance criteria, verification, and stop conditions.
- `protocols/`: rules for quality, handoffs, GitHub, production, design, CI/CD, and monitoring.
- `tools/`: tool and connector selection rules.
- `stack-presets/`: default stack recommendations and tradeoffs.
- `evals/`: checks for Sagaz's own reliability.
- `examples/`: reusable examples of common project flows.
- `templates/`: reusable artifacts for specs, QA, handoffs, run state, and releases.
- `engineering/`: deep software engineering standards.
- `governance/`: security, quality, versioning, and ecosystem maintenance.

## Included Workflows

- `greenfield-web-app`: create a website or web app from scratch.
- `web-production-release`: prepare a web app for production.
- `mobile-app-production`: create or prepare an Android/iOS app.
- `brownfield-refactor-safe`: refactor an existing project safely.
- `bugfix-to-release`: fix a bug through verification and release.

## Installation In Codex Desktop

### Recommended: Install With npx

```powershell
npx sagaz-ai install
```

Then open a new Codex Desktop thread and run:

```text
Sagaz: explain the available workflows.
```

Optional: also copy the ecosystem to a known local folder:

```powershell
npx sagaz-ai install --ecosystem C:\Users\YOUR_USER\Documents\Sagaz\ai-orchestration-ecosystem
```

Check installation:

```powershell
npx sagaz-ai status
npx sagaz-ai doctor
```

### Manual Installation

#### 1. Clone Or Download The Repository

```powershell
git clone https://github.com/tscabral1/sagaz.git
```

Or download the ZIP from GitHub.

#### 2. Copy The Skill Into Codex

On Windows, the local Codex skills folder is usually:

```text
C:\Users\YOUR_USER\.codex\skills
```

Copy this folder:

```text
codex-skill\sagaz
```

into:

```text
C:\Users\YOUR_USER\.codex\skills\sagaz
```

#### 3. Keep The Ecosystem Available

Keep `ai-orchestration-ecosystem/` accessible in the Codex workspace or in a known local folder.

#### 4. open a new Codex Desktop thread

After copying the skill, open a new Codex Desktop thread so Codex can discover the updated skill.

## How To Use

Use a simple prompt:

```text
Sagaz: create a complete website for my company, from planning to deployment.
```

Or:

```text
Sagaz: create an Android/iOS app for personal finance tracking, with premium design, tests, and production readiness.
```

Sagaz should choose the appropriate workflow, create or update persistent run state, recommend a stack, plan requirements, create UX/UI and a design system, implement, test, prepare production and CI/CD, suggest GitHub operations, and deliver a final handoff with evidence and risks.

For production-grade work, Sagaz can also apply SRE readiness, DORA metrics, secure SDLC, dependency governance, data privacy lifecycle, architecture fitness functions, API contracts, performance budgets, accessibility compliance, database migrations, release strategy, and AI application quality protocols.

For tool-heavy work, Sagaz uses a tool registry to verify local availability and recommend the right connector or platform before asking permission to install, authenticate, deploy, publish, or modify external resources.

For common project types, Sagaz can start from documented stack presets such as Next.js on Vercel, React with Vite, Expo mobile, React Native, Supabase, Firebase, Node APIs, static sites, and admin dashboards.

## Web Example

```text
Sagaz: I want to create a web SaaS for appointment scheduling.

Requirements:
- user login
- calendar
- admin dashboard
- premium design
- production-ready
- deployment on Vercel
```

## Mobile Example

```text
Sagaz: I want to create an Android/iOS app for daily habit tracking.

Recommend the stack, explain costs, create mobile UX, implement it, test it, and prepare the release checklist.
```

## Important Rules

Sagaz must ask permission before moving between major teams/phases, installing dependencies, creating or editing files when implementation has not been clearly authorized, deploying, creating a repository, committing, pushing, opening a PR, creating an issue/tag/release, accepting high risk, or running destructive actions.

Sagaz may directly run low-risk diagnostics such as reading files, inspecting structure, searching text, checking status, and proposing plans.

Sagaz should proactively suggest useful actions across the whole ecosystem, including tests, visual QA, accessibility checks, security checks, commits, releases, deployment previews, monitoring, and documentation updates.

## Who It Is For

Sagaz is for users who want to build serious software with Codex without needing to personally manage every detail of engineering, design, GitHub, deployment, and production operations.

## Status

Sagaz is an evolving local orchestration ecosystem. The source of truth is the Markdown in this repository.

