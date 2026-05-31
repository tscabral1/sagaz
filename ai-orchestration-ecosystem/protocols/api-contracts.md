# Protocol: API Contracts

## Objective

Keep APIs reliable, documented, compatible, and testable.

## Required Checks

- Define request and response schemas.
- Validate external input.
- Use consistent error models.
- Document pagination, filtering, sorting, and rate limits when relevant.
- Define idempotency for critical write operations.
- Preserve backward compatibility unless a breaking change is explicit.
- Version APIs when needed.
- Add contract tests for important integrations.
- Document deprecation paths.

## Output

```md
API contract:
Endpoint/event/interface:
Inputs:
Outputs:
Errors:
Compatibility:
Tests:
Deprecation notes:
```

## Blocking Conditions

- Public API changes without compatibility review.
- Unvalidated external payloads.
- Ambiguous or inconsistent error behavior.

