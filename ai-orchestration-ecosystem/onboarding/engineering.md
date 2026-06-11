# Engineering Onboarding

## Purpose

Help engineers and tech leads use Sagaz for architecture, stack selection, implementation, refactors, tests, and safe delivery.

## Use When

- Inspecting an existing codebase.
- Planning implementation.
- Choosing or confirming a stack.
- Refactoring safely.
- Adding tests or production readiness.
- Preparing commits, pull requests, or releases.

## Invocation

Start by asking Sagaz to inspect before changing files.

```text
Sagaz: inspect this project as the engineering team.

Goal:
- 

Constraints:
- use existing patterns where reasonable
- preserve current behavior
- run proportional tests

Do not change files until you propose a plan and ask for approval.
```

## Required Inputs

- Goal or bug description.
- Current constraints.
- Risk tolerance.
- Existing stack expectations.
- Test command or deployment target, if known.
- Files or areas likely involved, if known.

## Expected Output

- Project structure summary.
- Stack and pattern observations.
- Implementation plan.
- Risk assessment.
- Test plan.
- Permission level for the next step.

## Handoff

Engineering handoff should include:

- Files inspected.
- Files changed.
- Commands run.
- Tests and results.
- Behavior preserved.
- Residual risk.
- Recommended next verification or release step.

## Good Prompts

```text
Sagaz: implement this feature using existing project patterns and explain the tests you will run first.
```

```text
Sagaz: refactor this module safely. Preserve behavior, add focused tests if needed, and keep the diff small.
```

```text
Sagaz: diagnose this bug, identify root cause, make the smallest safe fix, and prepare release notes.
```

## Common Mistakes

- Skipping repository inspection.
- Installing dependencies without approval.
- Refactoring unrelated files.
- Treating build success as complete verification.
- Forgetting rollback or deployment notes.

## Verification

Before declaring engineering done, confirm:

- The implementation matches existing patterns.
- Tests are proportional to risk.
- Build or lint ran when relevant.
- User-facing behavior was checked.
- Residual risk is documented.
