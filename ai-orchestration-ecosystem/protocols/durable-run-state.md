# Durable Run State

## Purpose

Keep Sagaz coherent across long projects, new Codex threads, context compaction, refactors, and releases.

## Rule

For medium or large work, create or update a run state file based on `templates/run-state.md`. The run state is the compact memory of the project. It must be short enough to reload cheaply and specific enough to prevent rework.

## Workflow State Contract

Sagaz must treat run state as the workflow continuity record, similar to a workflow engine state file, while still keeping it human-readable Markdown.

The run state must track:

- `workflow_id`
- `workflow_name`
- `status`
- `mode`
- `current_phase`
- `current_squad`
- `current_task`
- `started_at`
- `updated_at`
- `last_checkpoint`
- phase ledger with each phase status
- completed phases
- skipped phases with reason, risk, and approval
- handoffs with evidence and permission status
- blockers with recovery plan
- resume instructions

Allowed workflow statuses:

- `not_started`
- `active`
- `blocked`
- `completed`
- `aborted`

Allowed phase statuses:

- `pending`
- `in_progress`
- `completed`
- `skipped`
- `blocked`

## Required Sections

- project goal
- user constraints
- active workflow
- current phase
- completed handoffs
- approved decisions
- denied or deferred suggestions
- stack decision
- design system status
- implementation status
- verification evidence
- GitHub status
- deployment status
- risks and open questions
- next recommended action

## Checkpoint Rules

Create a checkpoint after:

- intake completion
- stack selection
- product specification approval
- design system approval
- architecture approval
- implementation milestones
- failed verification
- successful verification
- commit or release
- deployment
- any skipped phase
- any blocker
- any user-approved handoff

## Checkpoint Format

```md
## Checkpoint: YYYY-MM-DD HH:MM

Workflow:
Status:
Phase:
Squad:
Task:
Completed:
Skipped:
Blocked:
Evidence:
Decision:
Risks:
Next recommended action:
Needs user permission:
```

## Recovery Flow

When resuming:

1. Read the run state first.
2. Identify `workflow_id`, `status`, `current_phase`, `current_squad`, and `current_task`.
3. Read only the files referenced by the current phase, current task, unresolved blockers, and resume instructions.
4. Verify the repository state before changing files.
5. State the current phase, last checkpoint, blockers, and next proposed action.
6. Ask permission only when the action is meaningful or state-changing.

## Skip And Abort Rules

- A skipped phase must record phase, reason, risk, and user approval.
- An aborted workflow must keep the state file and record why it stopped.
- A blocked workflow must record the exact blocker, impact, required decision or external change, and recovery plan.
- A completed workflow must include final evidence, residual risks, and final handoff.

## Token Discipline

Prefer links and short summaries over pasted content. Move large specs to templates or project files and keep the run state as an index plus decision ledger.

## Output

- Updated run state file or clear reason why no update was needed.
- Checkpoint summary with evidence, decision, risks, and next recommended action.
- Resume instructions that another Codex thread can follow without reloading unnecessary context.
