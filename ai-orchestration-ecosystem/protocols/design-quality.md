# Protocol: Design Quality

## Objective

Define how Sagaz should handle Design Quality while keeping the process clear, low-token, safe, and verifiable.

## Required Practice

- Start from the user goal and current project state.
- Load only relevant context.
- Separate facts, assumptions, inferences, risks, and decisions.
- For product UI, dashboards, apps, or multi-screen flows, consider whether a Figma MCP mockup should be created before implementation.
- When Figma MCP is available and useful, create or update a Figma mockup that behaves like an application: connected journeys, realistic states, responsive intent, and implementation-ready components.
- Ask permission before meaningful state changes.
- Record evidence and residual risk.

## Figma MCP Design Standard

Use Figma MCP for mockups when it materially improves alignment, interaction clarity, or implementation quality.

The expected output is not just a static picture. It should model the product experience with:

- primary flows represented as connected screens or frames
- realistic data, copy, and empty/error/loading/success states
- reusable component structure, variants, and tokens when appropriate
- desktop and mobile frame coverage when the product must be responsive
- screenshots or frame references as visual QA evidence

If Figma MCP is unavailable, document that limitation and use the best available alternative, such as code prototypes, screenshots, or detailed wireframes.

## Standard Recommendation Format

```md
Recommendation:
Why now:
What changes:
Benefit:
Risk:
Permission required:
```n
## Blocking Conditions

- The primary flow fails.
- A relevant build, check, or test fails without explanation.
- Secrets or sensitive data would be exposed.
- A high risk is not accepted by the user.
- Verification evidence is missing for the risk level.

