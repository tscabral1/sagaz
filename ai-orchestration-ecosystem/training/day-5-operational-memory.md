# Day 5: Operational Memory

## Purpose

Practice proposing safe project or team memory without storing secrets or unapproved assumptions.

## Use When

- A team has recurring preferences Sagaz should remember.
- A project needs durable context for future Sagaz runs.
- The team wants to practice memory approval gates.

## Estimated Time

20 to 40 minutes.

## Prerequisites

- Read `protocols/memory.md`.
- Read `templates/operational-memory.md`.
- Decide whether memory should be project-scoped or team-scoped.
- Do not approve writing memory until the proposed content is reviewed.

## Invocation

```text
Sagaz: propose operational memory for this project.

Include:
- stable team preferences
- stack preferences
- design expectations
- testing expectations
- GitHub and release preferences
- stop conditions

Do not write files yet. Propose the memory content, scope, source, confidence, risk, review date, and ask for approval.
```

## What To Observe

- Sagaz should ask before creating or editing `.sagaz/operational-memory.md`.
- Sagaz should reject secrets and sensitive data.
- Sagaz should separate confirmed preferences from guesses.
- Sagaz should include review dates and permission impact.
- Sagaz should treat memory as advisory.

## Handoff

Expected handoff:

- Proposed memory entries.
- Scope: M2 project or M3 team.
- Source and confidence.
- Permission impact.
- Review date.
- Risks and exclusions.
- Approval question before writing.

## Verification

Success criteria:

- No memory file is written before approval.
- Entries have scope, source, confidence, and review date.
- Secrets and sensitive data are excluded.
- The team understands how memory will and will not be applied.

## Common Mistakes

- Storing credentials or private data.
- Treating one-off preferences as durable policy.
- Applying stale memory without review.
- Letting memory override current user instructions.
