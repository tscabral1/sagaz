# Protocol: AI Application Quality

## Objective

Make AI-powered features testable, observable, cost-aware, and safer to operate.

## Required Checks

- Define expected AI behavior and failure modes.
- Version prompts and model choices.
- Add evals or golden test cases for important flows.
- Handle hallucination and uncertainty.
- Define guardrails for unsafe or out-of-scope output.
- Track token/cost impact when relevant.
- Avoid sending sensitive data to models unnecessarily.
- Log enough to debug without exposing private data.
- Define fallback behavior when the model/API fails.
- Regression-test prompts after changes.

## Output

```md
AI quality review:
Feature:
Model/prompt version:
Expected behavior:
Failure modes:
Evals/tests:
Cost risk:
Privacy risk:
Fallback:
Verdict:
```

## Blocking Conditions

- AI feature has no defined success/failure behavior.
- Sensitive data is sent without a clear purpose and control.
- Critical AI behavior has no eval or regression check.

