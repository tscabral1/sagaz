# Future Change Guide

## Project Identity

Project:
Current version:
Last updated:
Maintainer:

## Product Intent

Primary user outcomes:
Non-negotiable product rules:
Known tradeoffs:

## Architecture Overview

Runtime:
Framework:
Deployment target:
Main modules:
Data flow:
State ownership:
Integration boundaries:

## Route And Navigation Map

Public routes:
Authenticated routes:
Admin/internal routes:
Mobile navigation, if relevant:
Deep links, if relevant:

## Data Model And Contracts

Entities:
Database tables/collections:
API contracts:
Validation rules:
Backward-compatibility requirements:
Migration rules:

## Design System

Typography:
Spacing:
Colors:
Radii:
Shadows:
Icons:
Grid/layout:
Breakpoints:
Motion:
Component rules:

## UX Rules

Primary flows:
Empty states:
Loading states:
Error states:
Destructive actions:
Forms:
Search/filter/sort:
Mobile behavior:
Accessibility requirements:

## Component Ownership

| Component | Purpose | Reuse rules | Do not change without |
| --- | --- | --- | --- |

## Invariants

| Invariant | Why it matters | Verification |
| --- | --- | --- |

## Testing And Regression Checklist

Unit tests:
Integration tests:
End-to-end tests:
Accessibility checks:
Visual QA:
Performance checks:
Security checks:
Manual smoke tests:

## Safe Refactor Procedure

1. Read this guide and current run state.
2. Identify behavior contracts.
3. Define affected files and tests.
4. Make one scoped change.
5. Run verification.
6. Update this guide if structure, behavior, design, or risk changed.

## Safe Feature Addition Procedure

1. Explain how the feature fits existing product and design rules.
2. Reuse established components and patterns.
3. Update specs, tests, and documentation before final delivery.
4. Verify existing flows still work.
5. Record new invariants and risks.

## Deployment And Operations

Environment variables:
Secrets:
Build command:
Deploy command:
Rollback:
Monitoring:
Known operational risks:

## Future Work

Known limitations:
Recommended improvements:
Deferred decisions:
Risks to revisit:
