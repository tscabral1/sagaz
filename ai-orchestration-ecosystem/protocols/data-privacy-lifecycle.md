# Protocol: Data Privacy Lifecycle

## Objective

Handle data responsibly from collection through storage, use, logging, retention, deletion, backup, and restore.

## Required Checks

- Identify personal, sensitive, financial, health, or regulated data.
- Minimize collected data.
- Define retention and deletion expectations.
- Avoid sensitive data in logs.
- Encrypt secrets and sensitive data where appropriate.
- Define backup and restore expectations.
- Protect exports and generated files.
- Review analytics and third-party data sharing.
- Document user consent or legal basis when applicable.

## Output

```md
Data/privacy review:
Data collected:
Purpose:
Storage:
Retention:
Deletion:
Logging risk:
Third parties:
Residual risk:
```

## Blocking Conditions

- Sensitive data is collected without purpose.
- PII appears in logs or public files.
- Destructive data change has no backup or mitigation.

