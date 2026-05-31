# Durable Run State

## Purpose

Keep Sagaz coherent across long projects, new Codex threads, context compaction, refactors, and releases.

## Rule

For medium or large work, create or update a run state file based on `templates/run-state.md`. The run state is the compact memory of the project. It must be short enough to reload cheaply and specific enough to prevent rework.

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

## Checkpoint Format

```md
## Checkpoint: YYYY-MM-DD HH:MM

Phase:
Completed:
Evidence:
Decision:
Risks:
Next recommended action:
Needs user permission:
```

## Recovery Flow

When resuming:

1. Read the run state first.
2. Read only the files referenced by the current phase.
3. Verify the repository state before changing files.
4. State the current phase and next proposed action.
5. Ask permission only when the action is meaningful or state-changing.

## Token Discipline

Prefer links and short summaries over pasted content. Move large specs to templates or project files and keep the run state as an index plus decision ledger.
