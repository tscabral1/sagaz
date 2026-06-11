# Protocol: Github Operations

## Objective

Define how Sagaz should handle Github Operations while keeping the process clear, low-token, safe, and verifiable.

## Required Practice

- Start from the user goal and current project state.
- Load only relevant context.
- Separate facts, assumptions, inferences, risks, and decisions.
- Apply `protocols/permission-contract.md` before commit, push, tag, pull request, issue, release, or any remote repository action.
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
```
## Blocking Conditions

- The primary flow fails.
- A relevant build, check, or test fails without explanation.
- Secrets or sensitive data would be exposed.
- A high risk is not accepted by the user.
- Verification evidence is missing for the risk level.

