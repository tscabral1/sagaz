# Implementation Prompts

## Purpose

Provide prompts for engineering implementation, refactors, and bug fixes.

## Use When

- Adding a feature.
- Fixing a bug.
- Refactoring code.
- Implementing from a product or design handoff.

## Prompt: Feature Implementation

```text
Sagaz: implement this feature using the existing project patterns.

Feature:
-

Acceptance criteria:
-

Constraints:
- keep the diff focused
- avoid unrelated refactors
- run proportional tests

Inspect the project first, propose the plan, then proceed if the request already clearly authorizes implementation.
```

## Prompt: Bug Fix

```text
Sagaz: diagnose and fix this bug.

Bug:
-

Expected behavior:
-

Observed behavior:
-

Find the likely root cause, make the smallest safe fix, run focused tests, and prepare a handoff with residual risk.
```

## Prompt: Safe Refactor

```text
Sagaz: refactor this area safely.

Target:
-

Rules:
- preserve behavior
- keep public contracts stable
- add or run tests proportional to risk
- document rollback or recovery notes

Do not broaden scope without asking.
```

## Verification

A good implementation response should include files inspected, files changed, commands run, tests, behavior checked, and residual risk.
