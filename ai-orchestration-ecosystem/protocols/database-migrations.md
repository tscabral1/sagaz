# Protocol: Database Migrations

## Objective

Change data structures safely without data loss or unplanned downtime.

## Required Checks

- Identify destructive operations.
- Back up production data before risky changes.
- Prefer additive migrations before destructive ones.
- Define rollback or forward-fix strategy.
- Test migrations on representative data when possible.
- Consider concurrency and long-running locks.
- Validate data integrity after migration.
- Document seed/test data expectations.

## Output

```md
Migration plan:
Change type:
Data at risk:
Backup:
Rollback/forward fix:
Validation:
Downtime risk:
Permission required:
```

## Blocking Conditions

- Destructive production migration without backup or explicit approval.
- Migration cannot be validated.
- Rollback or mitigation is undefined for high-risk data changes.

