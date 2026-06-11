# Handoff Examples

## Purpose

Provide short examples of good Sagaz handoffs between product, design, engineering, QA, and release work.

## Use When

- A team member is learning what a Sagaz handoff should contain.
- A project needs consistent phase transitions.
- A reviewer wants to compare a handoff against the expected shape.

## Invocation

Ask Sagaz to produce a handoff for the next role:

```text
Sagaz: prepare a handoff from the current role to the next role. Include context, evidence, risks, assumptions, and permission needed before the next step.
```

## Handoff

Use the examples below as calibration. A handoff should be short enough to scan and complete enough that the next role can continue without reconstructing the whole thread.

## Product To Design

```md
Handoff: Product to Design
Goal: Create scheduling flow for small service businesses.
Users: Owner, staff member, customer.
Scope: Booking, reschedule, cancellation, admin calendar.
Non-goals: Payments in this release.
Acceptance criteria:
- Customer can book an available time.
- Owner can see bookings by day.
- Staff conflicts are prevented.
Risks:
- Calendar timezone behavior needs engineering review.
Next squad: Design Studio
Permission needed: approve UX exploration.
```

## Design To Engineering

```md
Handoff: Design to Engineering
Screens covered: calendar, booking form, confirmation, empty state, error state.
Components: date picker, time slot list, booking summary, status banner.
Responsive notes: mobile single-column, desktop split calendar/detail view.
Accessibility: keyboard focus states and form labels required.
Assets: Figma link or local design references.
Next squad: Product Factory or Implementation Engineer
Permission needed: approve implementation.
```

## Engineering To QA

```md
Handoff: Engineering to QA
Files changed:
- src/features/scheduling/*
- src/components/calendar/*
Commands run:
- npm test
- npm run build
Behavior verified:
- booking creation
- unavailable slot prevention
Residual risk:
- timezone edge cases need manual QA.
Next squad: QA Verifier
Permission needed: approve broader regression pass.
```

## QA To Release

```md
Handoff: QA to Release
Verification:
- unit tests passed
- build passed
- manual booking flow passed on desktop and mobile viewport
Release blockers: none
Risks accepted:
- timezone behavior limited to configured business timezone.
Rollback:
- revert release commit
- redeploy previous known-good build
Next squad: GitHub Ops
Permission needed: approve commit, tag, release, deploy, or publish.
```

## Release To Maintenance

```md
Handoff: Release to Maintenance
Released version: vX.Y.Z
Published artifacts:
- GitHub release
- deployment URL
- package version, when applicable
Monitoring:
- check runtime logs
- check user-reported booking failures
Follow-up:
- add timezone regression test
- review operational memory preference for release cadence
Next squad: Maintenance Ops
Permission needed: approve follow-up issue creation.
```

## Verification

A good handoff is complete when another role can continue without rereading the whole thread.
