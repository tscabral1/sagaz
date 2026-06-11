# Sagaz Operations Runbook

## Purpose

Provide the day-to-day operating procedure for using Sagaz inside Codex Desktop.

Use this runbook when starting work, resuming work, approving handoffs, verifying delivery, syncing the installed skill, preparing releases, publishing packages, or recovering from common errors.

Apply `protocols/permission-contract.md` before actions that change local state, remote state, accounts, deployments, packages, credentials, or GitHub history.

Apply `protocols/mcp-connector-policy.md` before using MCPs or external connectors such as Figma, GitHub, Canva, Browser, Vercel, Supabase, Firebase, npm, or observability tools.

## Daily Start

1. Confirm the workspace is the intended project or the Sagaz repository.
2. If using Sagaz itself, read `ai-orchestration-ecosystem/quickstart.md`.
3. If navigation is needed, read `ai-orchestration-ecosystem/INDEX.md`.
4. Choose the smallest sufficient workflow, squad, task, or protocol.
5. For medium or large work, create or update `templates/run-state.md`.
6. For multi-phase, production, release, deployment, package, or high-risk work, create or update `templates/execution-trace.md`.
7. State the current objective, current squad, next action, and permission needed.

## Start A New Project

Use this sequence:

1. Intake: clarify goal, platform, audience, constraints, budget, timeline, and risk.
2. Workflow selection: choose the named workflow that matches the project.
3. Task selection: map the first phase to a formal task.
4. Stack recommendation: use stack presets only as starting points.
5. Planning: produce product, technical, design, testing, and release expectations.
6. Handoff: ask permission before moving into implementation.

Standard start prompt:

```text
Sagaz: use the appropriate workflow for this project. Maintain run state, handoffs, and verification evidence.
```

## Resume Work

When resuming after a pause, context compaction, or a new Codex Desktop thread:

1. Read the newest user request.
2. Read `templates/run-state.md` if it exists.
3. Check `git status --short --branch`.
4. Identify the current workflow, phase, squad, task, blockers, and next action.
5. Continue from the newest approved point instead of restarting the whole run.
6. Update run state if the work is medium, large, production, or multi-phase.

Resume output:

```md
Current workflow:
Current phase:
Current squad:
Current task:
Completed:
Evidence:
Blockers:
Next action:
Permission needed:
```

## Handoff Procedure

Use handoffs whenever work moves between squads or phases.

Required handoff:

```md
Current team:
What was completed:
Evidence/artifacts:
Risks or pending items:
Next team:
What it will do:
Why now:
May I perform the handoff?
```

Do not proceed to a new phase when the handoff requires user approval and approval has not been given.

## Verification Procedure

Verification must match risk.

Minimum Sagaz repository checks:

```powershell
npm test
npm run doctor
npm pack --dry-run
```

For product work, choose checks from the active project:

- Build.
- Lint.
- Unit tests.
- Integration tests.
- End-to-end tests.
- Accessibility checks.
- Visual QA.
- Security checks.
- Deployment preview.
- Manual smoke test.

Never declare done without saying which checks were run and what risk remains.

## Sync Installed Skill

When Sagaz rules, activation, release behavior, or `codex-skill/sagaz/SKILL.md` change, sync the installed Codex Desktop skill.

Windows PowerShell and macOS Terminal:

```bash
npx sagaz-ai sync
npx sagaz-ai doctor
```

Then open a new Codex Desktop thread so the updated skill can be discovered.

If `doctor` reports a stale installed skill, run:

```bash
npx sagaz-ai install --force
```

## Release Procedure

Before version bumps, tags, GitHub releases, or npm publishes:

1. Apply `protocols/release-versioning-gate.md`.
2. Decide patch, minor, or major.
3. Update `CHANGELOG.md` and `RELEASE_NOTES.md`.
4. Run `npm test`.
5. Run `npm run doctor`.
6. Run `npm pack --dry-run`.
7. Confirm `git status --short --branch`.
8. Ask for approval before commit, tag, push, GitHub release, or npm publish.

Release output:

```md
Version:
Release type:
Checks:
Git status:
Tag:
GitHub release:
npm publish:
Residual risk:
```

## GitHub Procedure

Before GitHub operations:

1. Inspect `git status --short --branch`.
2. Avoid including unrelated user changes.
3. Run required checks.
4. Apply `protocols/permission-contract.md`.
5. Ask approval before commit, push, tag, release, issue, or pull request.
6. Report commit hash, branch, push status, and release URL when created.

## Common Errors

### npm E401 Unauthorized

Meaning: npm is not authenticated or the token is invalid.

Action:

```powershell
npm logout
npm login
npm whoami
```

### npm ENOENT package.json

Meaning: the command was run outside the package folder.

Action:

```powershell
cd C:\Users\tscab\Documents\Projects\Sagaz
dir package.json
```

### npm Cannot Publish Over Previous Version

Meaning: that version is already published.

Action:

```powershell
npm view sagaz-ai version
```

If the published version is correct, stop. If another release is needed, bump the version first.

### Stale Installed Skill

Meaning: the installed Codex Desktop skill differs from the repository skill.

Action:

```bash
npx sagaz-ai sync
npx sagaz-ai doctor
```

## Stop Conditions

Stop and ask the user when:

- A destructive action is needed.
- Remote publication is needed.
- Credentials or account permissions are missing.
- Git status contains unrelated changes.
- Required checks fail.
- The next action changes cost, account state, deployment, package publication, or release state.

## Output

```md
Runbook step:
Current state:
Action taken:
Evidence:
Risk:
Next action:
Permission needed:
```
