# Sagaz Adoption Guide

Use this guide when starting Sagaz in another project or onboarding a team to Sagaz inside Codex Desktop.

## Purpose

This guide gives a practical first-use path for teams that want Sagaz to orchestrate product, design, implementation, verification, GitHub operations, and release readiness in an existing or new project.

It assumes Sagaz is already installed with `npx sagaz-ai install` or `npx sagaz-ai sync`.

## Requirements

- Codex Desktop on Windows or macOS.
- Node.js `22.14+`; Node.js 24 LTS is preferred.
- npm available in the terminal.
- Git installed when the project is version controlled.
- GitHub CLI (`gh`) when Sagaz should create branches, pull requests, issues, releases, or inspect checks.
- Project-specific tools already installed or approved for installation, such as `pnpm`, `yarn`, `bun`, Expo/EAS, Android Studio, Xcode, Supabase CLI, Firebase CLI, Vercel CLI, or test browsers.

Before starting a real project, run:

```bash
npx sagaz-ai doctor
```

If the installed skill is out of sync, run:

```bash
npx sagaz-ai sync
```

Then open a new Codex Desktop thread so the refreshed skill is discovered.

## First Use In Another Project

1. Open the target project folder in Codex Desktop.
2. Start a new thread after installing or syncing Sagaz.
3. Invoke Sagaz with a direct goal and any known constraints.
4. Let Sagaz inspect the project before making changes.
5. Approve each major handoff, external operation, dependency install, GitHub operation, deployment, package publish, or destructive action.
6. Keep the final handoff and run-state artifacts inside the project when the work is meaningful or long-lived.

## Invocation Pattern

Use `Sagaz:` at the beginning of the message.

For a new product:

```text
Sagaz: create a production-ready web SaaS for appointment scheduling.

Requirements:
- user login
- calendar scheduling
- admin dashboard
- premium but practical UI
- deployment on Vercel
- GitHub release flow
```

For an existing project:

```text
Sagaz: inspect this project and prepare a safe implementation plan before changing code.

Goal:
- add subscription billing
- preserve the current UX
- use the existing stack when reasonable
- include tests and deployment notes
```

For a bug:

```text
Sagaz: diagnose and fix the production checkout failure.

Rules:
- identify likely root cause first
- make the smallest safe fix
- run focused tests
- prepare a release handoff
```

For design work with Figma MCP:

```text
Sagaz: coordinate the design team using Figma MCP to create app-like mockups that can be inspected as real application flows.

Include:
- target users
- main screens
- component states
- interaction notes
- visual QA checklist
```

## Recommended First Response From Sagaz

Sagaz should respond with:

- The selected workflow.
- The selected squad or agents.
- The assumptions it is making.
- The files, commands, or connectors it needs to inspect.
- The permission level required for the next step.
- The expected first handoff artifact.

Sagaz should avoid starting large implementation work before it understands the project structure, stack, risks, and definition of done.

## Team Operating Model

Use this rhythm for team adoption:

1. Product confirms objective, users, constraints, and definition of done.
2. Technology confirms stack, architecture, dependencies, and operating costs.
3. Design confirms UX, UI system, accessibility, responsiveness, and visual QA expectations.
4. Engineering implements in small verifiable steps.
5. QA verifies behavior, regressions, accessibility, build, and deployment readiness.
6. GitHub Ops prepares commit, branch, pull request, checks, release notes, tag, and release when approved.
7. The final handoff records evidence, residual risk, rollback plan, and next recommended work.

## Cross-Platform Notes

Sagaz should treat Windows and macOS as first-class Codex Desktop environments.

- Prefer commands that work in the user's current shell.
- Use PowerShell syntax on Windows and POSIX shell syntax on macOS.
- Record when a command or dependency is platform-specific.
- Verify path examples before presenting them.
- Do not assume Linux-only tooling unless the project or CI requires it.

## Permission Model

Sagaz follows `protocols/permission-contract.md`.

Low-risk inspection can usually proceed directly. These actions require explicit approval:

- Installing dependencies.
- Writing or deleting files when implementation has not been clearly authorized.
- Running commands that access networked registries or external services.
- Creating, pushing, tagging, or releasing in GitHub.
- Deploying to hosting providers.
- Publishing packages.
- Handling secrets, credentials, production data, billing, or destructive operations.

## Evidence To Keep

For serious work, Sagaz should maintain or produce:

- `templates/run-state.md`
- `templates/execution-trace.md`
- `templates/implementation-plan.md`
- `templates/qa-report.md`
- `templates/final-handoff.md`
- `templates/future-change-guide.md`
- `templates/release-notes.md` when release work is involved.

## Good First Team Exercise

Use a low-risk existing repository and ask:

```text
Sagaz: audit this project and tell me what workflow, stack playbook, risks, tests, and next implementation step you recommend. Do not change files yet.
```

This verifies that the team understands Sagaz handoffs, permission gates, stack reasoning, and evidence before using it on production work.

## Success Criteria

Sagaz adoption is working when:

- The team can invoke Sagaz consistently in new and existing projects.
- Sagaz chooses workflows and stack playbooks without bloating context.
- The team sees clear permission prompts before risky actions.
- Handoffs explain what changed, what was verified, and what remains risky.
- GitHub, design, deployment, and package operations happen only after approval.
- Windows and macOS users can follow the same operating model with platform-appropriate commands.
