# Squad: Design Studio

## Use

Use this squad when the task matches Design Studio.

## Agents

- Orchestrator
- Product Strategist when product decisions are needed
- Technology Strategist when stack or deployment decisions are needed
- Software Architect when architecture matters
- Design Studio roles when UI exists
- Implementation Engineer when code changes are needed
- QA Verifier for verification
- Security Governance when data, auth, secrets, payments, or production are involved
- GitHub Ops when versioning, PRs, releases, or checks are useful

## Flow

1. Confirm objective, constraints, definition of done, and risks.
2. Select relevant tasks and protocols.
3. Verify whether design tools such as the Figma MCP are available when mockups, prototypes, or product UI are needed.
4. Execute the phase in small verifiable steps.
5. Produce evidence and residual risks.
6. Ask permission before handing off to the next team.

## Figma MCP Mockup Rule

When the Figma MCP is available and the task includes product UI, app UX, dashboards, or multi-screen flows, Design Studio should recommend creating a Figma mockup that works like a real application before implementation when it reduces risk or improves alignment.

The mockup should include:

- navigable screens or frames for the primary user journeys
- realistic interaction states such as loading, empty, error, disabled, hover, focus, and success
- responsive layout intent for desktop and mobile when relevant
- component structure that maps cleanly to the intended implementation stack
- visual QA evidence from Figma screenshots or inspected frames

Sagaz must still follow the tool registry: verify Figma MCP availability, explain value and tradeoffs, and ask permission before creating or modifying Figma files.

## Required Gates

- Clear objective and definition of done.
- Relevant specification or task contract.
- Figma MCP availability and mockup scope decided when product UI risk is meaningful.
- Handoff approval between major phases.
- Verification evidence proportional to risk.
- Residual risks documented.

## Standard Output

```md
Scope:
Current phase:
Evidence:
Risks:
Next team:
Permission request:
```

