# Protocol: Generated Code Linting

## Objective

Ensure code generated or modified by Sagaz is checked with the project's existing linting, formatting, and static-analysis tools whenever those tools are available and relevant.

Sagaz must not invent a new lint stack by default. It should discover and use the project's existing commands first.

## Required Practice

1. Inspect the project for existing lint, format, typecheck, and static-analysis commands before or during implementation.
2. Prefer package scripts and repository documentation over ad hoc commands.
3. Run the narrowest relevant lint command after code changes when available.
4. Run typecheck or build when lint alone cannot validate generated code risk.
5. Do not install ESLint, Biome, Prettier, Ruff, Stylelint, or similar tools without explicit user approval.
6. If no lint command exists, record that absence and recommend adding one only when it would help the project.
7. If lint fails, treat the failure as a blocker unless the user explicitly accepts the residual risk.
8. Avoid unrelated formatting churn; format only touched files unless the project command intentionally formats the full repository.
9. Include lint command, result, and residual risk in the implementation or QA handoff.

## Tool Discovery

Check common sources in this order:

- Repository docs such as `README.md`, `CONTRIBUTING.md`, or task runner docs.
- `package.json` scripts such as `lint`, `format`, `typecheck`, `check`, `biome`, or `eslint`.
- Monorepo task runners such as Turborepo, Nx, pnpm workspaces, npm workspaces, or yarn workspaces.
- Language-specific tooling such as Ruff, Black, mypy, gofmt, golangci-lint, cargo fmt, cargo clippy, dotnet format, ktlint, swiftlint, or Android lint.
- CI configuration when local commands are unclear.

## Required Commands

When available and relevant, Sagaz should prefer:

```text
npm run lint
npm run typecheck
npm run build
pnpm lint
yarn lint
bun run lint
```

Use the package manager already used by the project.

For non-JavaScript projects, use the equivalent project-native command.

## Permission Rules

Linting existing project code is usually a local verification action.

Ask explicit approval before:

- Installing or upgrading linting tools.
- Rewriting the whole repository with a formatter.
- Running commands that modify large unrelated areas.
- Running networked package-manager commands.
- Changing lint rules, formatter config, CI config, or pre-commit hooks.

Follow `protocols/permission-contract.md`.

## Handoff Evidence

Generated code handoff should include:

```md
Lint discovery:
Lint command:
Typecheck command:
Format command:
Commands run:
Result:
Failures:
Fixes applied:
Residual risk:
```

If lint was not run:

```md
Lint not run:
Reason:
Recommended next step:
Risk:
```

## Blocking Conditions

- A relevant lint command exists and fails.
- Generated code introduces lint violations.
- Typecheck fails after generated code changes.
- The only available lint command would rewrite unrelated files and the user has not approved it.
- The project lacks linting and the change is high risk without an alternative verification method.

## Output

When Sagaz changes code, the final response or handoff should state whether lint was:

- run and passed,
- run and failed,
- unavailable,
- skipped with reason,
- deferred pending user approval.
