# Day 1: First Project Audit

## Purpose

Practice using Sagaz to inspect an existing project safely before making changes.

## Use When

- A team member is opening Sagaz in a project for the first time.
- The project structure, stack, risks, or test commands are not yet clear.
- The team wants to practice inspection-only behavior.

## Estimated Time

20 to 30 minutes.

## Prerequisites

- Open a low-risk repository in Codex Desktop.
- Confirm Sagaz is installed with `npx sagaz-ai doctor`.
- Do not approve file changes during this exercise.

## Invocation

```text
Sagaz: audit this project and tell me what workflow, stack playbook, risks, tests, and next implementation step you recommend. Do not change files yet.
```

## What To Observe

- Sagaz should inspect project structure before recommending action.
- Sagaz should identify likely stack and tooling.
- Sagaz should explain which workflow or squad fits.
- Sagaz should list unknowns and risks.
- Sagaz should ask before changing files or running high-impact commands.

## Handoff

Expected handoff:

- Project summary.
- Stack observations.
- Recommended workflow.
- Suggested next squad.
- Risks and unknowns.
- Permission needed for the first implementation or planning step.

## Verification

Success criteria:

- No files were changed.
- No dependency was installed.
- No GitHub, deploy, or publish operation was attempted.
- The next step is clear enough for a PM, designer, or engineer to approve.

## Common Mistakes

- Asking Sagaz to implement immediately.
- Approving broad file changes before the stack is understood.
- Treating guesses as project facts.
- Skipping test discovery.
