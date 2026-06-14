# Stack Preset: Node API

## Best For

Backend APIs, integrations, webhooks, automation services, and full-stack apps needing a dedicated server.

## Default Stack

- Node.js
- TypeScript with `strict: true` for new projects
- Fastify or Express based on project needs
- Zod or similar runtime validation
- Postgres or managed database
- Jest/Vitest plus integration tests

## Strengths

- Mature ecosystem.
- Good fit for integrations and APIs.
- Easy to deploy widely.

## Tradeoffs

- Requires explicit architecture for auth, validation, errors, logging, rate limits, and deployment.

## Use When

- The product needs a dedicated backend API, webhook handler, integration service, or automation service.
- Request validation, authentication, logging, and deployment controls must be explicit.
- The frontend and backend need clear API contracts.

## Required Sagaz Checks

- API contract
- validation
- authentication and authorization
- logging and observability
- rate limiting
- integration tests
- typecheck and lint
- deployment and rollback
