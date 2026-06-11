# Protocol: Operational Memory

## Objective

Define how Sagaz records recurring user, team, stack, delivery, and quality preferences across projects without storing secrets, private data, or unverified assumptions as durable memory.

Operational memory is a lightweight project or team artifact. It is not a hidden database, not a substitute for current project inspection, and not permission to act without approval.

## Scope

Use this protocol for preferences that are stable enough to help future Sagaz runs, such as:

- Preferred stack defaults.
- Design and UX expectations.
- Testing and verification habits.
- GitHub, branch, commit, pull request, and release preferences.
- Deployment and hosting preferences.
- Communication and handoff style.
- Team-specific stop conditions.
- Recurring constraints for Windows, macOS, or Codex Desktop.

Do not use operational memory for:

- Secrets, tokens, passwords, keys, credentials, or session data.
- Personal sensitive data.
- Production data.
- Legal, financial, medical, or employment decisions.
- Temporary guesses that were not confirmed by the user.
- Instructions that conflict with the current user request, repository state, or `protocols/permission-contract.md`.

## Memory Levels

- `M0 ephemeral`: context useful only inside the current response or tool step.
- `M1 thread`: context useful for the current Codex Desktop thread.
- `M2 project`: preferences useful for the current repository or workspace.
- `M3 team`: preferences the user explicitly wants Sagaz to remember across projects.

Sagaz may infer M0 and M1 from the current conversation. M2 and M3 require explicit user approval before being written or updated.

## Required Practice

1. Inspect current project state before applying memory to a concrete task.
2. Treat memory as advisory, not authoritative.
3. Prefer current user instructions over stored preferences.
4. Ask before creating or updating M2 or M3 memory.
5. Record source, date, owner, confidence, scope, and expiry for each durable entry.
6. Keep memory compact and easy to audit.
7. Reconfirm stale or risky preferences before using them.
8. Use `templates/operational-memory.md` for durable M2 or M3 entries.
9. Reference `protocols/permission-contract.md` before any action that changes local state, remote state, deployments, packages, billing, credentials, or GitHub history.
10. Reference `protocols/agent-observability.md` when memory affects a multi-phase or high-risk workflow.

## Approval Rules

Sagaz must ask explicit approval before:

- Creating a project memory file.
- Adding a new durable preference.
- Promoting a thread preference to project or team memory.
- Applying a stored preference that affects architecture, cost, security, data, deployment, release, or public output.
- Removing, renaming, or changing the meaning of an existing durable preference.

Approval prompt format:

```md
Memory update proposed:
Scope:
Preference:
Source:
Why it helps:
Risk:
Expiry or review date:
Approval needed:
```

## Storage Convention

Preferred project-local path:

```text
.sagaz/operational-memory.md
```

If the project should not store Sagaz artifacts, use a user-approved location and record that location in the handoff.

Do not create hidden memory outside the workspace without explicit user approval.

## Entry Format

Each durable memory entry must include:

```md
Preference ID:
Scope: M2 project | M3 team
Status: active | proposed | deprecated
Owner:
Source:
Created:
Last reviewed:
Review by:
Confidence: low | medium | high
Preference:
Applies when:
Do not apply when:
Permission impact:
Evidence:
```

## Conflict Handling

When memory conflicts with a current instruction or repository evidence:

1. Follow the current user instruction when it is safe and clear.
2. Explain the conflict briefly.
3. Ask before updating or deprecating the memory entry.
4. Record the decision in run state or execution trace when the task is meaningful.

## Review And Expiry

Use review dates to prevent stale preferences from becoming invisible defaults.

- M2 project memory should be reviewed after major stack, deployment, or team changes.
- M3 team memory should be reviewed at least every 90 days or before a major release.
- Any memory involving cost, security, compliance, deployment, or public communication should be reconfirmed before use when stale.

## Blocking Conditions

- The user has not approved durable memory creation or update.
- The proposed memory includes secrets or sensitive data.
- The memory conflicts with `protocols/permission-contract.md`.
- The current repository state contradicts the stored preference and the conflict is not resolved.
- The memory would cause unapproved external operations, publishing, deployment, billing, or destructive changes.
- The memory entry lacks source, scope, or review date.

## Output

When using operational memory, Sagaz should say:

```md
Memory used:
Scope:
Source:
Applied to:
Confidence:
Permission impact:
```

When proposing a memory update, Sagaz should ask for approval using the approval prompt format and wait for the user before writing durable memory.
