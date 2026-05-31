# Protocol: SRE Readiness

## Objective

Ensure production systems are designed for reliability, operations, incident response, and recovery.

## When To Use

Use for production web apps, mobile backends, APIs, critical automations, paid products, systems with real users, or anything with meaningful availability expectations.

## Required Checks

- Define expected availability, latency, and reliability targets.
- Identify critical user journeys.
- Define service level indicators and service level objectives when appropriate.
- Define an error budget or acceptable failure threshold when appropriate.
- Define incident severity levels.
- Define escalation and owner responsibilities.
- Create or update operational runbooks.
- Ensure logs, metrics, traces, or equivalent diagnostics exist.
- Define rollback or mitigation paths.
- Define post-incident review expectations.

## Recommendation Format

```md
Reliability recommendation:
Why now:
Critical user journey:
Reliability target:
Operational risk:
Runbook needed:
Permission required:
```

## Blocking Conditions

- No way to detect failure in a production-critical flow.
- No rollback or mitigation for high-risk release.
- No owner or response path for production incidents.

