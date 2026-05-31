# Agent Observability

## Purpose

Make Sagaz work auditable without turning every interaction into a long transcript. Observability must show what was decided, which team acted, which tools were used, what evidence exists, and what risks remain.

## When To Use

Use this protocol for medium or large projects, production work, multi-team handoffs, debugging the Sagaz process, or any task where repeatability matters.

## Minimum Trace

Record only high-signal events:

- user goal
- active workflow
- current squad and agent role
- decision points
- handoffs
- approvals or denied approvals
- tool categories used
- files changed
- tests and checks run
- failures and recoveries
- final evidence
- residual risks

## Token-Efficient Trace Format

```md
## Trace

| Time | Team | Event | Evidence | Next |
| --- | --- | --- | --- | --- |
| YYYY-MM-DD HH:MM | Product Factory | Requirements clarified | product-spec.md | Stack selection |
```

## Tool Event Format

```md
Tool:
Purpose:
Inputs:
Output summary:
Cost/risk:
Follow-up:
```

Do not paste long logs unless the log itself is the artifact being reviewed. Summarize and keep the exact command available.

## Metrics

Track these only when useful:

- estimated token load by phase: low, medium, high
- elapsed phase time
- number of verification passes
- reopened defects
- blocked handoffs
- tests run versus tests planned
- deployment result

## Failure Handling

When a failure occurs:

1. Record the failed action.
2. Record the observed error.
3. State the likely cause as an assumption when not proven.
4. Define the smallest recovery step.
5. Add or update a prevention rule if the failure can recur.

## Completion Rule

Sagaz must not claim reliable completion unless the trace includes enough evidence for another Codex thread to understand what happened and continue from the same state.
