# Protocol: MCP And Connector Policy

## Objective

Define when Sagaz should use MCPs, app connectors, browser tools, deployment tools, design tools, GitHub tools, database tools, and other external integrations.

This protocol prevents connector use from becoming accidental account activity. It requires clear fit, permission level, expected evidence, and rollback or stop conditions.

## Required Practice

- Apply `protocols/permission-contract.md` before using any connector that can read private data, write files, change remote state, create assets, deploy, publish, or modify accounts.
- Use `tools/tool-registry.md` before recommending, installing, authenticating, or invoking tools.
- Prefer local inspection before account-linked connector actions.
- Use the smallest connector action that produces the needed evidence.
- State whether the connector action is read-only, local-write, remote-write, destructive, or account-linked.
- Do not use a connector only because it is available; use it because it reduces risk, improves evidence, or performs a necessary operation.
- Record connector actions in `templates/execution-trace.md` for T2 or T3 work.

## Connector Classes

| Class | Examples | Default Permission | Evidence Required |
| --- | --- | --- | --- |
| Local browser and visual QA | Browser, Playwright | P1 or P2 | screenshot, route, interaction result, console/build status |
| Design and prototyping | Figma MCP, Canva | P2 or P3 | design URL, page/frame summary, thumbnail/screenshot, handoff notes |
| GitHub operations | GitHub CLI, GitHub connector | P3 | status, branch, commit, PR, release, issue, URL |
| Deployment platforms | Vercel, Netlify, Firebase Hosting, Cloudflare Pages | P3 | preview/production URL, env var status, deploy log summary, rollback path |
| Databases and backend services | Supabase, Firebase, Postgres, Prisma | P3 or P4 | migration plan, backup/rollback, rules/policy review, affected environment |
| Package registries | npm, GitHub Packages | P3 | version, package contents, publish result, install test |
| Observability and monitoring | Sentry, Grafana, logs, OpenTelemetry | P2 or P3 | query, timeframe, findings, residual risk |
| AI/model providers | OpenAI, OpenRouter, model gateways | P2 or P3 | model choice, cost/risk note, data sensitivity note |

## Figma MCP Policy

Use Figma MCP when:

- Product UI, app UX, dashboard, design system, or multi-screen flow needs visual specification.
- A mockup should behave like a real app through connected frames, realistic states, responsive intent, and implementation-ready components.
- Design-to-code alignment or Code Connect is relevant.

Do not use Figma MCP when:

- The user only needs a text explanation.
- The task can be resolved with local code or documentation.
- The user has not provided or approved access to the needed Figma file for write actions.

Evidence:

- Figma file or node URL.
- Frames/pages touched.
- Design system components or variables used.
- Screenshot or thumbnail when available.
- Handoff notes for implementation.

## GitHub Connector Policy

Use GitHub tools when:

- The user asks for commit, push, PR, issue, release, checks, or repository automation.
- Local `git` is insufficient or GitHub state must be inspected.

Permission:

- P0/P1 for local status and local branch inspection.
- P3 for commit, push, PR, issue, tag, release, workflow dispatch, or remote settings.

Evidence:

- Branch.
- Commit hash.
- PR/issue/release URL.
- Check result.
- Residual risk.

## Browser Policy

Use browser tools when:

- A local or deployed UI must be visually inspected.
- A user asks to open, click, test, or screenshot a local app.
- Frontend work requires responsive, interaction, or layout verification.

Evidence:

- URL.
- Viewport.
- Screenshot or test result.
- Console or network issue summary when relevant.

## Vercel And Deployment Policy

Use deployment connectors when:

- The user asks to deploy, inspect deployment status, access protected preview, or review logs.
- Production readiness gates are satisfied or the user is explicitly asking for deployment diagnostics.

Permission:

- P2 for read-only deployment/log inspection.
- P3 for creating previews, promoting production, changing env vars, domains, or project settings.

Evidence:

- Deployment URL.
- Environment.
- Build/runtime log summary.
- Rollback path.

## Supabase And Firebase Policy

Use backend connectors or CLIs when:

- Schema, auth, storage, rules, policies, functions, or data operations are in scope.
- Local code inspection is not enough to validate the backend state.

Permission:

- P2 for local config inspection.
- P3 for remote project reads/writes.
- P4 for destructive data operations, production migrations, rules changes that can expose data, or credential rotation.

Evidence:

- Target project/environment.
- Migration/rules/function summary.
- Backup or rollback plan.
- Security impact.

## Canva Policy

Use Canva when:

- The user asks to create, edit, translate, resize, import, or inspect Canva designs.
- Marketing, social media, or presentation deliverables are explicitly needed in Canva.

Permission:

- P2 for generated design candidates.
- P3 for committing edits to an existing Canva design or account-linked publish/export flows.

Evidence:

- Design URL or ID.
- Preview/thumbnail.
- Edits made.
- Save/commit status.

## Blocking Conditions

Do not use the connector when:

- The target account, workspace, repository, file, deployment, or project is ambiguous.
- The connector would expose secrets or private data.
- The action would change remote state without approval.
- The connector output cannot be verified or summarized.
- The user asked not to use that connector.
- A safer local read or dry-run would answer the question.
- Required credentials, scopes, or permissions are missing.

## Output

```md
Connector:
Purpose:
Permission level:
Read/write scope:
Target:
Evidence expected:
Risk:
Approval needed:
Result:
Follow-up:
```

