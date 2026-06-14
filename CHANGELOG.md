# Changelog

## [0.4.1] - 2026-06-14

### Release Type

Patch

### Added

- Generated code linting protocol requiring Sagaz to discover and run existing lint, format, typecheck, and static-analysis commands when code is generated or changed.
- Stack selection policy for TypeScript strict mode and Supabase planning.
- Evaluation scenario for generated code linting.

### Changed

- Stack presets and Next.js/Vercel/Supabase playbook now require explicit TypeScript strict and Supabase decisions when relevant.
- Implementation and QA tasks now require generated-code linting evidence.
- Prompt and golden output references now include TypeScript strict and Supabase checks.
- Package verification now validates generated-code linting and stack-selection contracts.

### Fixed

- Closed the gap where linting was only mentioned as a possible QA activity instead of a formal generated-code gate.
- Closed the gap where Supabase existed as a preset but TypeScript strict and Supabase planning were not enforced by stack-selection validation.

### Removed

- None.

### Security

- Supabase recommendations now require RLS, migrations, backup/restore, env var planning, and permission before resource changes.
- Lint/tooling changes require explicit approval before installing tools or changing configs.

### Compatibility

- Windows: supported through Codex Desktop.
- macOS: supported through Codex Desktop.
- Node.js: package baseline remains `>=22.14`; Node.js 24 is preferred for new installs and CI.
- Codex Desktop: Sagaz remains a Codex Desktop orchestration skill, not a standalone terminal agent runtime.

### Migration Notes

- Existing users should run `npx sagaz-ai@0.4.1 sync` or `npx sagaz-ai sync` after publication.
- Open a new Codex Desktop thread after syncing so the updated skill can be discovered.

### Verification

- npm test: passed locally on Windows.
- npm run doctor: passed locally on Windows with `Synchronized with source: yes`.
- npm pack --dry-run: passed locally on Windows after allowing npm cache access outside the sandbox.
- Windows: prepared from a Windows Codex Desktop workspace.
- macOS: package checks remain covered by GitHub Actions.
- Codex Desktop: skill sync remains required after install or upgrade.

### Release Evidence

- Commit: pending.
- Tag: pending.
- GitHub release: pending.
- npm package: pending.

## [0.4.0] - 2026-06-11

### Release Type

Minor

### Added

- Team onboarding guides for product/PM, design, engineering, QA/release, and handoff calibration.
- Prompt matrix with copy-ready Sagaz prompts for project start, design/Figma, implementation, QA/release, and operational memory.
- Guided training track for first project audit, product-to-design, design-to-implementation, QA/release, and operational memory practice.
- Golden outputs showing reference-quality Sagaz responses for audits, handoffs, implementation planning, QA/release, and memory proposals.
- Golden output evaluation file that turns reference outputs into scored evaluation scenarios.

### Changed

- `manifest.json`, `INDEX.md`, README files, and package verification now register onboarding, prompts, training, golden outputs, and golden output evaluations.
- Evaluation suite now includes `EVAL-GOLDEN-OUTPUTS`.
- `npm test` now validates the new documentation groups and golden output evaluation structure.

### Fixed

- Closed the adoption gap between documentation and practical team usage by adding role-specific and scenario-specific operating material.

### Removed

- None.

### Security

- New onboarding, prompt, training, and golden output materials reinforce approval gates before file writes, dependency installs, GitHub operations, deployments, package publishing, external connector use, and memory writes.

### Compatibility

- Windows: supported through Codex Desktop.
- macOS: supported through Codex Desktop.
- Node.js: package baseline remains `>=22.14`; Node.js 24 is preferred for new installs and CI.
- Codex Desktop: Sagaz remains a Codex Desktop orchestration skill, not a standalone terminal agent runtime.

### Migration Notes

- Existing users should run `npx sagaz-ai@0.4.0 sync` or `npx sagaz-ai sync` after the package is published to npm.
- Open a new Codex Desktop thread after syncing so the updated skill can be discovered.

### Verification

- npm test: passed locally on Windows.
- npm run doctor: passed locally on Windows with `Synchronized with source: yes`.
- npm pack --dry-run: passed locally on Windows after allowing npm cache access outside the sandbox.
- Windows: prepared from a Windows Codex Desktop workspace.
- macOS: package checks remain covered by GitHub Actions.
- Codex Desktop: skill sync remains required after install or upgrade.

### Release Evidence

- Commit: pending.
- Tag: pending.
- GitHub release: pending.
- npm package: not published in this GitHub-only release step.

## [0.3.2] - 2026-06-11

### Release Type

Patch

### Added

- Operational memory protocol for recurring project and team preferences across Sagaz runs.
- Operational memory template for `.sagaz/operational-memory.md` style project memory.
- Package validation for operational memory sections, safety terms, permission references, and template structure.

### Changed

- README, ecosystem README, INDEX, and manifest now expose operational memory as an official Sagaz capability.

### Fixed

- Replaced the previous generic memory protocol with a concrete approval-based operational memory contract.

### Removed

- None.

### Security

- Operational memory explicitly forbids secrets, credentials, session data, production data, and sensitive personal data.
- Durable project or team memory requires explicit user approval.

### Compatibility

- Windows: supported through Codex Desktop.
- macOS: supported through Codex Desktop.
- Node.js: package baseline remains `>=22.14`; Node.js 24 is preferred for new installs and CI.
- Codex Desktop: Sagaz remains a Codex Desktop orchestration skill, not a standalone terminal agent runtime.

### Migration Notes

- Existing users should run `npx sagaz-ai@0.3.2 sync` or `npx sagaz-ai sync` to refresh the installed Codex Desktop skill.
- Open a new Codex Desktop thread after syncing so the updated skill can be discovered.

### Verification

- npm test: passed locally on Windows.
- npm run doctor: passed locally on Windows with `Synchronized with source: yes`.
- npm pack --dry-run: passed locally on Windows after allowing npm cache access outside the sandbox.
- Windows: prepared from a Windows Codex Desktop workspace.
- macOS: package checks remain covered by GitHub Actions.
- Codex Desktop: skill sync remains required after install or upgrade.

### Release Evidence

- Commit: pending.
- Tag: pending.
- GitHub release: pending.
- npm package: pending.

## [0.3.1] - 2026-06-11

### Release Type

Patch

### Added

- Sagaz adoption guide for first use in another project, team onboarding, invocation prompts, cross-platform notes, permission model, and evidence expectations.

### Changed

- README, ecosystem README, INDEX, manifest, and package verifier now register the adoption guide as an official ecosystem document.

### Fixed

- None.

### Removed

- None.

### Security

- No security changes.

### Compatibility

- Windows: supported through Codex Desktop.
- macOS: supported through Codex Desktop.
- Node.js: package baseline remains `>=22.14`; Node.js 24 is preferred for new installs and CI.
- Codex Desktop: Sagaz remains a Codex Desktop orchestration skill, not a standalone terminal agent runtime.

### Migration Notes

- Existing users should run `npx sagaz-ai@0.3.1 sync` or `npx sagaz-ai sync` to refresh the installed Codex Desktop skill.
- Open a new Codex Desktop thread after syncing so the updated skill can be discovered.

### Verification

- npm test: passed locally on Windows.
- npm run doctor: passed locally on Windows with `Synchronized with source: yes`.
- npm pack --dry-run: passed locally on Windows after allowing npm cache access outside the sandbox.
- Windows: prepared from a Windows Codex Desktop workspace.
- macOS: package checks remain covered by GitHub Actions.
- Codex Desktop: skill sync remains required after install or upgrade.

### Release Evidence

- Commit: pending.
- Tag: pending.
- GitHub release: pending.
- npm package: pending.

## [0.3.0] - 2026-06-11

### Release Type

Minor

### Added

- Operations runbook for daily starts, project starts, resumes, handoffs, verification, releases, GitHub operations, and stop conditions.
- Complete examples library covering web SaaS on Vercel, mobile habit tracking, production bugfix releases, and brownfield refactors.
- Capabilities matrix comparing Sagaz with common orchestration systems and identifying what Sagaz now covers or intentionally defers.
- Formal permission contract with approval levels for local edits, installs, network access, GitHub operations, releases, secrets, and destructive actions.
- Stack playbooks for Next.js/Vercel/Supabase, React/Vite/static hosting, Expo/EAS, Node APIs, and Firebase.
- Execution trace template and stronger observability contract for commands, decisions, failures, handoffs, and release evidence.
- MCP connector policy for Figma, GitHub, browser automation, deployment providers, databases, Canva, npm registries, observability, and AI providers.

### Changed

- `npm test` now validates stack playbooks, permission policy, execution trace requirements, observability rules, and MCP connector policy coverage.
- README, INDEX, manifest, tool registry, run-state template, and Sagaz skill instructions now expose the new governance and connector contracts.
- Release governance now requires stronger evidence around permissions, connector usage, workflow traceability, and stack-specific verification.

### Fixed

- Filled remaining non-CLI governance gaps identified after the 0.2.0 release.
- Reduced ambiguity around cross-platform execution on Windows and macOS inside Codex Desktop.

### Removed

- None.

### Security

- Added explicit permission levels for secrets, destructive actions, external publishing, GitHub operations, package registries, and MCP connectors.

### Compatibility

- Windows: supported through Codex Desktop and locally verified on Windows.
- macOS: supported through Codex Desktop and covered by GitHub Actions package checks.
- Node.js: package baseline remains `>=22.14`; Node.js 24 is preferred for new installs and CI.
- Codex Desktop: Sagaz remains a Codex Desktop orchestration skill, not a standalone terminal agent runtime.

### Migration Notes

- Existing users should run `npx sagaz-ai@0.3.0 sync` or `npx sagaz-ai sync` to refresh the installed Codex Desktop skill.
- Open a new Codex Desktop thread after syncing so the updated skill can be discovered.

### Verification

- npm test: passed locally on Windows.
- npm run doctor: passed locally on Windows with `Synchronized with source: yes`.
- npm pack --dry-run: passed locally on Windows after allowing npm cache access outside the sandbox.
- Windows: prepared and verified from a Windows Codex Desktop workspace.
- macOS: package checks remain covered by GitHub Actions.
- Codex Desktop: skill sync remains required after install or upgrade.

### Release Evidence

- Commit: pending.
- Tag: pending.
- GitHub release: pending.
- npm package: pending.

## [0.2.0] - 2026-06-08

### Release Type

Minor

### Added

- Formal workflow contracts and handoff validation across Sagaz workflows.
- Stronger durable workflow state contract and run-state template.
- Task-first contracts for reusable Sagaz task definitions.
- Internal ecosystem manifest and dependency graph validation.
- Component governance protocol for creating, updating, renaming, deprecating, and removing ecosystem components.
- Stronger Sagaz evaluation suite with scenario IDs, required evidence, scoring, and release gates.
- Release/versioning gate for version bumps, tags, GitHub releases, and npm publishes.
- GitHub Actions enforcement across Linux, Windows, and macOS package checks.
- Formal changelog and release notes templates.
- Installed skill synchronization protocol and `npx sagaz-ai sync` command.

### Changed

- `npm test` now validates workflow contracts, task contracts, manifest coverage, dependency graph integrity, release gates, GitHub Actions enforcement, evaluation coverage, and release artifact templates.
- `npx sagaz-ai doctor` now checks whether the installed Codex Desktop skill is synchronized with the source skill.
- README and install documentation now include system requirements, Node.js guidance, platform notes, and skill sync instructions.
- Package release policy now requires manifest validation, dependency graph validation, evaluation evidence, changelog or release notes, and installed skill sync evidence.

### Fixed

- Corrected malformed Markdown code fences in several protocol files.
- Added missing references so critical protocols remain reachable from the dependency graph.

### Removed

- None.

### Security

- Release and GitHub operations now require clearer approval gates before publishing, tagging, pushing, or releasing.

### Compatibility

- Windows: supported through Codex Desktop and validated by GitHub Actions on `windows-latest`.
- macOS: supported through Codex Desktop and validated by GitHub Actions on `macos-latest`.
- Node.js: package baseline remains `>=22.14`; GitHub Actions use Node.js 24.
- Codex Desktop: Sagaz remains a Codex Desktop skill, not a standalone terminal agent runtime.

### Migration Notes

- Existing users should run `npx sagaz-ai sync` or `npx sagaz-ai install --force` to refresh the installed Codex Desktop skill.
- Open a new Codex Desktop thread after syncing so the updated skill can be discovered.

### Verification

- npm test: passed locally on Windows.
- npm run doctor: passed locally on Windows with `Synchronized with source: yes`.
- npm pack --dry-run: passed locally on Windows after allowing npm cache access outside the sandbox.
- Evaluation scenarios: covered by the strengthened `evals/sagaz-evaluation-suite.md` contract.

### Release Evidence

- Commit: pending.
- Tag: pending.
- GitHub release: pending.
- npm package: pending.
