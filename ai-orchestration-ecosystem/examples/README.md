# Examples

## Purpose

Provide reusable, low-token examples for common Sagaz projects.

Examples are not templates to copy blindly. They show the expected prompt shape, workflow, squads, artifacts, handoffs, verification depth, GitHub actions, deployment path, and final delivery evidence.

## Complete Examples

- `web-saas-vercel.md`: appointment scheduling SaaS using a web production path.
- `mobile-habit-tracker.md`: Android/iOS habit tracker with mobile release planning.
- `bugfix-production-release.md`: production bugfix through verification and GitHub release.
- `brownfield-refactor.md`: safe refactor of an existing project without behavior changes.

## Example Structure

Each complete example includes:

- User prompt.
- Selected workflow.
- Required squads.
- First actions.
- Stack recommendation.
- Handoff sequence.
- Expected artifacts.
- Verification plan.
- GitHub actions to suggest.
- Deployment or release path.
- Final handoff shape.

## How To Use

1. Pick the example closest to the user's request.
2. Load only that example and the named workflow/task/protocol files needed for the current phase.
3. Adapt constraints to the actual project.
4. Keep run state for medium, large, production, mobile, or multi-phase work.
5. Ask permission before moving across major phases or doing remote actions.

## Selection Map

| User Request | Example | Workflow |
| --- | --- | --- |
| New SaaS, dashboard, or premium web app | `web-saas-vercel.md` | `workflows/greenfield-web-app.md` |
| Android/iOS app | `mobile-habit-tracker.md` | `workflows/mobile-app-production.md` |
| Production bug | `bugfix-production-release.md` | `workflows/bugfix-to-release.md` |
| Safe refactor | `brownfield-refactor.md` | `workflows/brownfield-refactor-safe.md` |

