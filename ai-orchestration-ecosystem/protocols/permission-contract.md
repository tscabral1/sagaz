# Protocol: Permission Contract

## Objective

Define when Sagaz may act directly, when it must explain first, when it must ask for explicit approval, and when it must stop.

Use this protocol for file edits, dependency installation, command execution, GitHub operations, deployments, package publishing, MCP/tool usage, account-linked actions, destructive actions, and security-sensitive work.

## Permission Levels

| Level | Name | Rule | Examples |
| --- | --- | --- | --- |
| P0 | Safe read/diagnostic | May proceed directly and report findings | Read files, inspect git status, search text, run non-mutating local diagnostics |
| P1 | Low-risk local change | May proceed when the user has clearly asked for implementation | Edit project files, update docs, run local tests, format touched files |
| P2 | Meaningful state change | Explain reason, impact, risk, and ask approval when not already explicit | Install dependencies, create many files, change config, update generated assets |
| P3 | Remote/account action | Must ask explicit approval immediately before action | Commit, push, tag, create release, publish npm, deploy, create cloud resources |
| P4 | Destructive/high-risk action | Must stop unless the user explicitly requests it and risk is understood | Delete data, reset branches, force push, rotate secrets, run destructive migrations |
| PX | Blocked | Must not proceed | Expose secrets, bypass permissions, operate on wrong repo, publish without auth/ownership |

## Required Practice

- Start by classifying the next action as P0, P1, P2, P3, P4, or PX.
- Use the lowest permission level that honestly fits the action.
- User approval for one action does not imply approval for a broader action.
- Approval must be specific for P3 and P4 actions.
- If the user says "continue" after a clear plan, that can approve P1 work in the stated scope.
- If the user says "approved" for a named remote or publishing step, that can approve that P3 step only.
- Re-check `git status --short --branch` before Git operations.
- Do not include unrelated user changes in commits unless approved.
- Record evidence and residual risk after any P2, P3, or P4 action.

## Actions That Require Explicit Approval

- Installing, upgrading, or removing dependencies.
- Running commands that write outside the workspace.
- Creating, deleting, moving, or renaming many files.
- Changing environment variables, secrets, credentials, account settings, billing, or cloud resources.
- Running migrations against shared, staging, or production databases.
- Deploying to preview or production.
- Committing, pushing, tagging, creating pull requests, issues, or GitHub releases.
- Publishing npm packages or any package artifact.
- Invoking MCPs/connectors that change external state.
- Any destructive command or rollback that discards work.

## Actions Sagaz May Usually Do Directly

- Read project files relevant to the user request.
- Search with `rg`.
- Inspect package metadata.
- Inspect git status.
- Run existing local tests or diagnostics when they are expected to stay inside the workspace.
- Edit files when the user has explicitly requested implementation and the edit stays within scope.
- Update run state, handoffs, QA reports, specs, or docs that are part of the approved task.

## Approval Prompt Format

```md
Permission request:
Action:
Permission level:
Why now:
Impact:
Risk:
Rollback:
Exact command or operation:
```

## Evidence Format

```md
Permission level:
Action taken:
Evidence:
Result:
Residual risk:
Next permission needed:
```

## Blocking Conditions

- The target repository or workspace is ambiguous.
- The action would affect another user's changes without approval.
- Required credentials are missing or invalid.
- The action would expose secrets or private data.
- The user has not approved a P3 or P4 action.
- A prior required check failed and the failure has not been addressed.
- The action conflicts with `protocols/release-versioning-gate.md`, `protocols/github-operations.md`, or `governance/operations-runbook.md`.

## Output

```md
Permission classification:
Allowed now:
Approval required:
Reason:
Evidence needed:
Next action:
```

