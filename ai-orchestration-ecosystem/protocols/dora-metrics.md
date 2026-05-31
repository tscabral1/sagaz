# Protocol: DORA Metrics

## Objective

Track software delivery performance without turning metrics into vanity numbers.

## Metrics

- Lead time for changes: time from committed code to production deployment.
- Deployment frequency: how often the project successfully deploys.
- Change failure rate: percentage of deployments requiring immediate remediation.
- Failed deployment recovery time: how long it takes to recover from failed deployments.
- Rework rate: how often deployments require follow-up correction work.

## When To Use

Use when a project has CI/CD, production deployments, releases, or repeated maintenance cycles.

## Required Practice

- Recommend DORA tracking when the project reaches production or repeated release cycles.
- Explain metrics in plain language.
- Avoid optimizing for speed without stability.
- Use metrics to identify bottlenecks, not to punish work.

## Output

```md
Delivery metrics recommendation:
Why now:
Metrics to track:
How to collect:
Risk if skipped:
Permission required:
```

