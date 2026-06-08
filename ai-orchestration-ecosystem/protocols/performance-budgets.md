# Protocol: Performance Budgets

## Objective

Define measurable performance limits for web, mobile, backend, and AI features.

## Web Budgets

- Initial load time.
- Largest Contentful Paint.
- Interaction latency.
- JavaScript bundle size.
- Image/media size.
- API response time.

## Mobile Budgets

- Cold start time.
- Screen transition latency.
- Memory usage.
- Battery/network impact.
- Offline behavior.

## Backend Budgets

- p95/p99 latency.
- Throughput expectations.
- Queue/job processing time.
- Database query limits.

## Required Practice

- Define budgets before implementation when performance risk is meaningful.
- Choose metrics that can be measured with available tools.
- Record how each metric will be checked.
- Treat budget failures as delivery risks that need fixes, explicit acceptance, or scope adjustment.

## Output

```md
Performance budget:
Target flow:
Metric:
Threshold:
Measurement method:
Risk if exceeded:
```

