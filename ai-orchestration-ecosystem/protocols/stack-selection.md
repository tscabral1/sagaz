# Protocol: Stack Selection

## Objective

Define how Sagaz selects and explains a project stack, including when to recommend TypeScript strict mode and Supabase.

Sagaz should prefer boring, maintainable, production-friendly choices that fit the user's goal, existing repository, team skill, cost, deployment target, and future-change needs.

## Required Practice

1. Start from the user goal, project maturity, current repository state, and definition of done.
2. Reuse the existing stack when it is healthy and fits the goal.
3. Compare meaningful alternatives when the stack is not already fixed.
4. Explain tradeoffs by cost, speed, maintainability, scale, deployment, security, and future changes.
5. Recommend TypeScript strict mode for TypeScript-based new projects unless there is a clear migration or legacy constraint.
6. Consider Supabase when the app needs relational data, managed auth, storage, realtime, or fast backend setup.
7. Record assumptions, risks, and permission boundaries before installing dependencies or provisioning external services.
8. Reference relevant stack presets and playbooks.
9. Include verification commands and release implications in the recommendation.

## TypeScript Strict Policy

For new TypeScript projects, Sagaz should default to:

- `typescript`
- `strict: true`
- `noImplicitAny: true` through strict mode
- typecheck script such as `npm run typecheck` when supported by the stack
- linting via the project's selected lint tool

For existing TypeScript projects:

- Inspect `tsconfig.json` before recommending changes.
- Preserve existing constraints unless the user approves a migration.
- If `strict` is disabled, recommend a staged strict migration when risk is meaningful.
- Do not flip strict mode on a large existing codebase without a migration plan and user approval.

If TypeScript is not appropriate, explain why and name the verification alternative.

## Supabase Policy

Consider Supabase when the project needs:

- relational data with managed Postgres,
- authentication,
- row-level security,
- user-uploaded files,
- realtime features,
- generated types from database schema,
- fast full-stack delivery without operating database infrastructure directly.

Do not recommend Supabase automatically when:

- the app is static and has no backend data,
- the user already has a committed backend platform,
- compliance or data residency constraints are unresolved,
- the project needs a database architecture Supabase does not fit,
- vendor coupling is unacceptable.

When recommending Supabase, Sagaz must include:

- data model strategy,
- RLS policy plan,
- migration plan,
- backup and restore plan,
- environment variable plan,
- local or preview environment strategy,
- permission needed before creating or changing Supabase resources.

Use `stack-presets/supabase.md`, `stack-playbooks/nextjs-vercel-supabase.md`, and `protocols/mcp-connector-policy.md` when relevant.

## Recommendation Format

```md
Recommended stack:
Why this fits:
Alternatives considered:
TypeScript strict decision:
Supabase decision:
Deployment target:
Cost and operational impact:
Security and data impact:
Verification commands:
Migration or setup steps:
Permission required:
Residual risk:
```

## Blocking Conditions

- The project already has a stack and Sagaz has not inspected it.
- The recommendation changes database, auth, hosting, or language without user approval.
- TypeScript strict migration would cause broad breakage and no migration plan exists.
- Supabase would introduce unresolved compliance, data residency, backup, RLS, or vendor-coupling risk.
- Required secrets or external account access would be needed without approval.
- Verification evidence is missing for the risk level.

## Output

Sagaz stack recommendations should be concise, but must explicitly state:

- whether TypeScript strict is recommended, already enabled, deferred, or not applicable,
- whether Supabase is recommended, deferred, rejected, or already present,
- what must be verified before implementation begins.
