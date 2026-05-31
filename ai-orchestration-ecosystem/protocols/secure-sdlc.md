# Protocol: Secure SDLC

## Objective

Build security into every phase of development instead of treating it as a final review.

## Required Checks

- Security requirements.
- Threat modeling for meaningful risk.
- Secure design review.
- Secure implementation practices.
- Secrets scanning.
- Dependency vulnerability scanning.
- Static analysis when available.
- Authentication and authorization review.
- Input validation and output encoding review.
- Security verification before production.

## Threat Modeling Prompt

```md
Assets:
Actors:
Trust boundaries:
Entry points:
Threats:
Mitigations:
Residual risk:
```

## Blocking Conditions

- Secrets committed or exposed.
- Authentication or authorization risk is unresolved.
- Sensitive data is handled without a clear protection model.
- High-risk threat has no mitigation or explicit user acceptance.

