# Agent Observability

## Purpose

Make Sagaz work auditable, resumable, and debuggable without turning every interaction into a long transcript.

Observability must show what was decided, which team acted, which files were read or changed, which commands ran, what failed, what recovered, what evidence exists, and what risks remain.

## When To Use

Use this protocol for:

- Medium or large projects.
- Production work.
- Multi-team handoffs.
- Release preparation.
- GitHub, deployment, or package operations.
- Debugging the Sagaz process.
- Any task where another Codex thread must be able to continue safely.

## Trace Levels

| Level | Use | Required Artifact |
| --- | --- | --- |
| T0 | Small local change | Final answer evidence only |
| T1 | Medium scoped work | Run-state evidence summary |
| T2 | Multi-phase or production work | `templates/execution-trace.md` |
| T3 | Release, deployment, package, or high-risk work | Execution trace plus release/run-state evidence |

## Required Practice

- Record only high-signal events.
- Prefer summaries over long logs.
- Keep exact commands available when commands affect verification, GitHub, release, deployment, or package state.
- Separate facts, assumptions, decisions, evidence, failures, recoveries, and residual risk.
- Record permission level from `protocols/permission-contract.md` for P2, P3, P4, and PX actions.
- Record handoffs when a squad or phase changes.
- Record failed checks and recovery steps.
- Do not paste secrets, tokens, private data, or long logs.

## Event Types

Use these event types:

- intake
- context_read
- decision
- permission
- file_change
- command
- verification
- handoff
- failure
- recovery
- release
- final

## Minimum Trace Fields

Every T2 or T3 trace must include:

- objective
- active workflow
- current squad
- current task
- event ledger
- files read
- files changed
- commands run
- decisions
- permissions
- failures and recoveries
- verification evidence
- handoffs
- residual risks
- resume instructions

## Token-Efficient Event Ledger

```md
| Time | Type | Squad | Action | Evidence | Next |
| --- | --- | --- | --- | --- | --- |
| YYYY-MM-DD HH:MM | decision | Product Factory | Selected greenfield-web-app | workflow contract | Start intake |
```

## Command Event Format

```md
Command:
Permission level:
Purpose:
Result:
Evidence:
Follow-up:
```

## Failure Event Format

```md
Failed action:
Observed error:
Likely cause:
Recovery:
Prevention:
Residual risk:
```

## Handoff Event Format

```md
From squad:
To squad:
Completed work:
Evidence:
Risks:
Next action:
Permission:
```

## Metrics

Track these only when useful:

- estimated token load by phase: low, medium, high
- elapsed phase time
- number of verification passes
- reopened defects
- blocked handoffs
- tests run versus tests planned
- deployment result
- release result

## Completion Rule

Sagaz must not claim reliable completion for T2 or T3 work unless the trace or run state includes enough evidence for another Codex thread to understand what happened and continue from the same state.

## Output

```md
Trace level:
Trace artifact:
Key decisions:
Files changed:
Commands run:
Verification:
Failures/recoveries:
Residual risk:
Resume instruction:
```

