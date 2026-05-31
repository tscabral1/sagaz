# Sagaz

Sagaz is a local AI orchestration ecosystem for Codex. It turns a product request into a structured delivery process with specialized AI teams, explicit handoffs, detailed specifications, implementation, testing, high-standard UX/UI, guided GitHub operations, CI/CD readiness, and production-quality gates.

It is inspired by ideas from AIOX, CrewAI, AutoGen, LangChain, and enterprise governance platforms, but it is designed for one practical goal: make Codex easy to use for serious web and mobile software projects while keeping token usage low and technical quality high.

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
- `templates/`: reusable artifacts for specs, QA, handoffs, run state, and releases.
- `engineering/`: deep software engineering standards.
- `governance/`: security, quality, versioning, and ecosystem maintenance.

## Included Workflows

- `greenfield-web-app`: create a website or web app from scratch.
- `web-production-release`: prepare a web app for production.
- `mobile-app-production`: create or prepare an Android/iOS app.
- `brownfield-refactor-safe`: refactor an existing project safely.
- `bugfix-to-release`: fix a bug through verification and release.

## Installation In Codex

### 1. Clone Or Download The Repository

```powershell
git clone https://github.com/tscabral1/sagaz.git
```

Or download the ZIP from GitHub.

### 2. Copy The Skill Into Codex

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

### 3. Keep The Ecosystem Available

Keep `ai-orchestration-ecosystem/` accessible in the Codex workspace or in a known local folder.

### 4. Open A New Codex Thread

After copying the skill, open a new Codex thread so Codex can discover the updated skill.

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

## Who It Is For

Sagaz is for users who want to build serious software with Codex without needing to personally manage every detail of engineering, design, GitHub, deployment, and production operations.

## Status

Sagaz is an evolving local orchestration ecosystem. The source of truth is the Markdown in this repository.
