# Example: Brownfield Refactor

## User Prompt

```text
Sagaz: refactor this existing project safely without changing behavior.

Goal:
Make the billing module easier to maintain before adding new plan types.
```

## Selected Workflow

`workflows/brownfield-refactor-safe.md`

## Required Squads

- `squads/code-audit.md`
- `squads/refactor-lab.md`
- `squads/production-critical.md`
- `squads/github-ops.md`

## First Actions

1. Inspect git status.
2. Identify the current behavior and files involved.
3. Establish baseline tests or manual checks.
4. Define invariants that must not change.
5. Create or update run state.
6. Ask permission before editing code.

## Stack Recommendation

Use the existing project stack. Prefer local patterns and existing helpers over new abstractions.

## Handoff Sequence

| Phase | From | To | Evidence |
| --- | --- | --- | --- |
| Baseline | code-audit | refactor-lab | behavior map, tests, invariants |
| Refactor plan | refactor-lab | production-critical | scoped plan, rollback path |
| Implementation | production-critical | production-critical | small commits or small logical steps |
| Verification | production-critical | github-ops | before/after checks, residual risk |

## Expected Artifacts

- `templates/refactor-safety-contract.md`.
- `templates/future-change-guide.md`.
- Baseline behavior notes.
- Changed file summary.
- `templates/qa-report.md`.
- Final handoff.

## Verification Plan

- Run existing tests before changes.
- Add characterization tests if risk is high and coverage is weak.
- Refactor in small steps.
- Run tests after each meaningful step.
- Compare user-facing behavior before and after.
- Avoid unrelated formatting or churn.

## GitHub Actions To Suggest

- Commit after tests pass.
- Use PR review when refactor touches shared behavior.
- Mention that behavior should remain unchanged in PR or release notes.

## Release Path

1. Confirm baseline.
2. Refactor safely.
3. Verify no behavior change.
4. Prepare future-change guide.
5. Ask approval for GitHub operations.

## Final Handoff Shape

```md
Current team:
Refactor scope:
Behavior preserved:
Evidence/artifacts:
Checks run:
Files changed:
Residual risk:
Next recommended action:
Permission needed:
```

