# Golden Outputs

## Purpose

Provide reference-quality Sagaz responses for common scenarios so teams can compare real outputs against expected structure, evidence, and permission behavior.

Use these examples for human QA, onboarding, training review, and future evaluation scenarios.

## Use When

- Reviewing whether Sagaz answered with enough structure.
- Teaching a team what good Sagaz output looks like.
- Creating evaluation scenarios.
- Checking whether handoffs include evidence, risks, and permission gates.

## Output Families

- `project-audit-output.md`: inspection-only project audit.
- `product-handoff-output.md`: product to design handoff.
- `design-handoff-output.md`: design to engineering handoff.
- `implementation-plan-output.md`: engineering plan before code changes.
- `qa-release-output.md`: QA and release readiness.
- `memory-proposal-output.md`: operational memory proposal before writing files.

## Quality Criteria

A golden Sagaz response should:

- Name the selected workflow, squad, or role.
- Separate facts, assumptions, risks, and recommendations.
- Identify what was inspected or what still needs inspection.
- State whether file changes are allowed.
- State permission needed before risky actions.
- Provide clear handoff or next step.
- Include verification expectations.

## Bad Output Signals

- Starts implementing before inspection or approval.
- Omits risks and assumptions.
- Hides permission requirements.
- Treats guesses as confirmed facts.
- Suggests remote operations without explicit approval.
- Gives a vague next step that another role cannot act on.

## Verification

Use the checklist in each file to compare an actual Sagaz response with the expected behavior.
