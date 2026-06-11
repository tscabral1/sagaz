# Team Onboarding

## Purpose

Help teams adopt Sagaz consistently across product, design, engineering, QA, and GitHub operations.

Use these guides when a team member needs to know how to invoke Sagaz, what information to provide, what evidence to expect, and when approval is required.

## Use When

- A team is adopting Sagaz for the first time.
- A new role needs a quick operating guide.
- Handoffs are inconsistent across product, design, engineering, QA, or release work.
- A project needs shared expectations before using Sagaz on production work.

## Roles

- Product and PMs: use `product-pm.md`.
- Designers and design leads: use `design.md`.
- Engineers and tech leads: use `engineering.md`.
- QA and release reviewers: use `qa-release.md`.

## Invocation

Use `Sagaz:` at the start of the message, then provide the goal, constraints, definition of done, and any known risks.

For first use in a project:

```text
Sagaz: audit this project and tell me what workflow, stack playbook, risks, tests, and next implementation step you recommend. Do not change files yet.
```

## Handoff

Every role should expect Sagaz to produce a clear handoff:

- What was requested.
- What was inspected.
- What changed, if anything.
- Evidence gathered.
- Risks and assumptions.
- Permission needed before the next step.
- Recommended next role or squad.

Use `handoff-examples.md` to calibrate the expected shape of those handoffs.

## Evidence

For meaningful work, ask Sagaz to maintain or produce:

- `templates/run-state.md`
- `templates/execution-trace.md`
- `templates/implementation-plan.md`
- `templates/qa-report.md`
- `templates/final-handoff.md`
- `templates/operational-memory.md` when recurring preferences should be retained.

## Permissions

Sagaz follows `protocols/permission-contract.md`.

Team members should expect explicit approval before:

- Installing dependencies.
- Writing meaningful implementation files when not already approved.
- Creating durable project or team memory.
- Creating branches, commits, pull requests, tags, or GitHub releases.
- Deploying, publishing packages, or changing external services.
- Handling secrets, billing, production data, or destructive operations.

## Success Criteria

Sagaz onboarding is working when:

- Each role can invoke Sagaz without needing a custom explanation every time.
- Handoffs are understandable to the next role.
- Designers, engineers, and PMs can use the same project context without losing decisions.
- Approval gates are visible before risky actions.
- Windows and macOS users can follow platform-appropriate commands.

## Verification

Before considering onboarding complete, confirm:

- Each role can find its guide.
- Each role has at least one usable prompt.
- Handoff expectations are clear.
- Permission gates are understood.
- Evidence artifacts are known.
