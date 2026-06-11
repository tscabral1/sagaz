# Day 3: Design To Implementation

## Purpose

Practice converting a design handoff into an implementation plan.

## Use When

- A UX flow, UI mockup, or design brief exists.
- Engineering needs a safe implementation path.
- The team wants to confirm scope, files, tests, and risks before code changes.

## Estimated Time

30 to 45 minutes.

## Prerequisites

- Day 2 completed or an equivalent design handoff.
- A repository open in Codex Desktop.
- Agreement on whether file changes are allowed.

## Invocation

```text
Sagaz: convert this design/product handoff into an implementation plan.

Handoff:
-

Rules:
- inspect the project first
- use existing patterns
- keep the diff focused
- identify tests before coding

Do not change files until you propose the plan and ask for approval.
```

## What To Observe

- Sagaz should inspect existing code patterns.
- Sagaz should identify likely files or modules.
- Sagaz should call out accessibility, responsive, and state requirements.
- Sagaz should produce a focused plan instead of broad refactors.
- Sagaz should name the permission level for implementation.

## Handoff

Expected handoff:

- Implementation plan.
- Files or areas likely involved.
- Test plan.
- Risks and assumptions.
- Permission required to edit files.
- Recommended next engineering action.

## Verification

Success criteria:

- Plan is scoped.
- Tests are proportional to risk.
- Existing patterns are respected.
- The team knows exactly what approval would allow Sagaz to do next.

## Common Mistakes

- Implementing without inspecting the codebase.
- Changing design scope during engineering.
- Refactoring unrelated areas.
- Forgetting responsive or accessibility constraints.
