# Execution Trace

## Objective

## Trace Metadata

```yaml
trace_id:
workflow_id:
workflow_name:
trace_level: T0 | T1 | T2 | T3
status: active | blocked | completed | aborted
started_at:
updated_at:
current_squad:
current_task:
current_permission_level:
```

## Event Ledger

| Time | Type | Squad | Action | Evidence | Next |
| --- | --- | --- | --- | --- | --- |
| YYYY-MM-DD HH:MM | intake |  |  |  |  |

Allowed event types:

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

## Files Read

| File | Purpose | Result |
| --- | --- | --- |

## Files Changed

| File | Change | Reason | Risk |
| --- | --- | --- | --- |

## Commands Run

| Command | Permission Level | Purpose | Result | Evidence |
| --- | --- | --- | --- | --- |

## Decisions

| Decision | Reason | Alternatives | Risk |
| --- | --- | --- | --- |

## Permissions

| Action | Permission Level | Requested | Approved | Evidence |
| --- | --- | --- | --- | --- |

## Failures And Recoveries

| Failed Action | Error | Likely Cause | Recovery | Prevention | Residual Risk |
| --- | --- | --- | --- | --- | --- |

## Verification Evidence

| Check | Result | Evidence | Follow-up |
| --- | --- | --- | --- |

## Handoffs

| From Squad | To Squad | Completed Work | Evidence | Risks | Permission |
| --- | --- | --- | --- | --- | --- |

## Residual Risks

## Resume Instructions

- next recommended action:
- required files to reload:
- checks to run before continuing:
- permission needed:

