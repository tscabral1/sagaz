# Protocol: Design Quality

## Objective

Define how Sagaz should handle Design Quality while keeping the process clear, low-token, safe, and verifiable.

## Required Practice

- Start from the user goal and current project state.
- Load only relevant context.
- Separate facts, assumptions, inferences, risks, and decisions.
- Ask permission before meaningful state changes.
- Record evidence and residual risk.

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

