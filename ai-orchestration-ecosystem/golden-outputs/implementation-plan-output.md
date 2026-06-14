# Golden Output: Implementation Plan

## Purpose

Show a reference implementation plan before code changes.

## Use When

- Engineering needs a safe plan.
- User has not yet approved edits.
- Scope, files, tests, and risks need to be explicit.

## Input Prompt

```text
Sagaz: convert this handoff into an implementation plan. Do not change files until you propose the plan and ask for approval.
```

## Expected Response

```md
Selected squad: Product Factory
Primary agent: Implementation Engineer

Project inspection needed:
- package/runtime files
- TypeScript config and strict-mode status when relevant
- existing components
- routing or feature modules
- test scripts
- relevant styles or design system

Implementation plan:
1. Confirm existing patterns.
2. Identify smallest set of files.
3. Implement core behavior.
4. Add or update focused tests.
5. Run verification.
6. Prepare handoff with risks.

Likely files:
- To be confirmed after inspection.

Test plan:
- Discover existing lint, format, typecheck, and build commands.
- Run lint after generated code changes when available.
- Run focused unit/component tests if available.
- Run build or lint when relevant.
- Manually verify user-facing flow if UI changes.

Risks:
- Existing architecture may require a smaller plan.
- Missing tests may require manual verification.

Permission needed:
- Approve file edits before implementation.
```

## Quality Criteria

- It inspects before deciding exact files.
- It keeps scope focused.
- It includes tests and manual verification.
- It includes lint discovery for generated code.
- It asks for permission before edits.
- It identifies risks.

## Bad Output Signals

- Starts coding without approval.
- Names files without inspecting.
- Expands into unrelated refactor.
- Omits tests.
- Claims done before verification.

## Verification

The user should understand exactly what approval will allow Sagaz to do.
