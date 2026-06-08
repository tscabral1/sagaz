# Run State

## Objective

## Workflow State

```yaml
workflow_id:
workflow_name:
status: not_started | active | blocked | completed | aborted
mode: solo | squad | factory | audit | refactor
current_phase:
current_squad:
current_task:
started_at:
updated_at:
last_checkpoint:
```

## Phase Ledger

| Phase | Squad | Resource | Status | Evidence | Handoff |
| --- | --- | --- | --- | --- | --- |
| 1 |  |  | pending |  |  |

Allowed phase statuses:

- pending
- in_progress
- completed
- skipped
- blocked

## Current Context

- active workflow:
- active phase:
- active squad:
- active task:
- relevant files:
- current branch:
- latest commit:
- environment:

## Completed Phases

## Skipped Phases

For each skipped phase, record:

- phase:
- reason:
- risk:
- user approval:

## Handoffs

For each handoff, record:

- from squad:
- to squad:
- completed work:
- evidence:
- risks:
- next action:
- permission:

## Blockers

For each blocker, record:

- phase:
- blocker:
- impact:
- required decision or external change:
- recovery plan:

## Resume Instructions

- next recommended action:
- required files to reload:
- checks to run before continuing:
- permission needed:

## Context

## Inputs

## Decisions

## Outputs

## Evidence

## Risks

## Next Step

## User Permission

