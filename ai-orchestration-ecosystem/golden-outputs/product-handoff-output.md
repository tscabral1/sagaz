# Golden Output: Product Handoff

## Purpose

Show a reference product-to-design handoff.

## Use When

- Product intent needs to become design-ready context.
- PMs need acceptance criteria and non-goals.
- Designers need screen and state expectations.

## Input Prompt

```text
Sagaz: act as the product team and prepare a design-ready handoff. Do not use Figma MCP or change files.
```

## Expected Response

```md
Selected squad: Product Factory
Next recommended squad: Design Studio

Problem statement:
- Users need a clear way to complete the target job.

Users:
- Primary user
- Secondary user, if relevant

Scope:
- Core flow
- Required states
- Basic success criteria

Non-goals:
- Deferred behavior
- Integrations not included in this phase

Acceptance criteria:
- User can complete the main flow.
- System handles empty, loading, error, and success states.
- Design handoff includes responsive and accessibility expectations.

Risks:
- Unconfirmed user edge cases
- Unknown technical constraints

Permission level:
- P1/P2 planning only
- Figma MCP or file writes require approval

Handoff:
- Design should create screen map, component states, interaction notes, and visual QA checklist.
```

## Quality Criteria

- It includes scope and non-goals.
- Acceptance criteria are testable.
- Design states are explicit.
- Figma MCP is not used without approval.
- Next squad is clear.

## Bad Output Signals

- Produces vague user stories only.
- Skips non-goals.
- Treats design work as already approved.
- Omits risks.
- Gives engineering tasks before design context is ready.

## Verification

The design team should be able to continue without rereading the full conversation.
