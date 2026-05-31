# Protocol: Dependency Governance

## Objective

Reduce risk from third-party packages, tools, libraries, and build scripts.

## Required Checks

- Justify every new dependency.
- Prefer mature, maintained packages.
- Review license compatibility when relevant.
- Check known vulnerabilities when tooling exists.
- Watch for abandoned packages.
- Avoid packages with suspicious install scripts.
- Preserve lockfiles.
- Avoid broad dependency upgrades mixed with feature work.
- Consider SBOM generation for production-critical systems.

## Recommendation Format

```md
Dependency recommendation:
Package/tool:
Why needed:
Alternatives:
Maintenance signal:
Security/licensing risk:
Permission required:
```

## Blocking Conditions

- Dependency introduces known critical vulnerability.
- License is incompatible with intended use.
- Package appears unmaintained or suspicious and has safer alternatives.

