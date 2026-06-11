# Capabilities Matrix

## Purpose

Clarify what Sagaz does, what it does not try to do, and how it compares with external orchestration systems and agent frameworks.

Use this matrix when deciding whether Sagaz needs a new capability, whether a project should use Sagaz alone, or whether Sagaz should coordinate with another framework.

## Scope

Sagaz is a Codex Desktop operating system for software delivery. It is not a standalone agent runtime, model gateway, hosted automation platform, or Python/TypeScript agent SDK.

External systems in this matrix are grouped by practical role:

- Agent frameworks: CrewAI, AutoGen, LangChain, LangGraph.
- Enterprise orchestration platforms: AIOX, Synkra, and similar systems when the user provides internal context.
- Adjacent infrastructure: MCP servers, GitHub, Vercel, Figma, Canva, Supabase, Firebase, and observability tools.

## Source Notes

- CrewAI publicly positions itself around collaborative AI agents, crews, flows, guardrails, memory, knowledge, observability, deployment, triggers, and enterprise controls.
- AutoGen publicly positions itself as a framework for building AI agents and applications, including conversational single and multi-agent applications, event-driven multi-agent systems, extensions, MCP support, Docker code execution, distributed runtimes, and Studio.
- LangChain publicly positions its platform around agent engineering, LangSmith observability/evaluation/prompt engineering/deployment, and LangGraph for low-level orchestration, memory, and human-in-the-loop support.
- AIOX, Synkra, and similar systems should be compared from user-provided documentation or internal knowledge. Do not claim exact feature parity without a source.

## High-Level Positioning

| Capability Area | Sagaz | CrewAI | AutoGen | LangChain/LangGraph | AIOX/Synkra-Like Systems |
| --- | --- | --- | --- | --- | --- |
| Primary role | Codex Desktop delivery operating system | Agent/crew automation framework and platform | Multi-agent application framework | Agent engineering platform and graph runtime | Enterprise orchestration layer |
| Runtime | Codex Desktop plus local Markdown rules | Python/package/platform runtime | Python/.NET ecosystem and Studio | Python/TypeScript plus hosted LangSmith/LangGraph options | Usually hosted, server, or enterprise runtime |
| Best use | Software projects with planning, design, build, QA, GitHub, release | Building autonomous agents, crews, flows, automations | Building programmable multi-agent apps and experiments | Building agentic apps, graph workflows, observability, evaluation | Broad enterprise coordination, policy, governance, routing |
| Requires coding framework | No, uses Codex and repo files | Yes for framework use | Yes for framework use | Yes for framework use | Usually yes or platform configuration |
| Standalone agent runtime | No | Yes | Yes | Yes | Usually yes |
| Codex Desktop integration | Native goal | Not primary | Not primary | Not primary | Not primary unless integrated |

## Detailed Capability Matrix

| Capability | Sagaz Status | Notes |
| --- | --- | --- |
| Named squads and agents | Strong | Markdown-defined squads and roles guide Codex behavior. |
| Formal workflows | Strong | Workflow contracts, phases, gates, and handoffs are validated. |
| Formal task contracts | Strong | Tasks define inputs, outputs, evidence, verification, and stop conditions. |
| Durable run state | Strong | Markdown run state supports resume, skipped phases, blockers, and handoffs. |
| Human approval gates | Strong | Built into handoffs, GitHub operations, release gates, and dangerous actions. |
| GitHub release operations | Strong | Guided commit, push, tag, release, and npm flow with explicit permission. |
| Package/release governance | Strong | Release/versioning gate, changelog, release notes, Actions, and npm packaging. |
| Installed skill synchronization | Strong | `sync`, `doctor`, and protocol prevent installed skill drift. |
| Design quality governance | Strong | UX/UI, Figma MCP guidance, responsive/accessibility/visual QA rules. |
| Stack advisory | Strong | Stack presets and recommendation criteria guide web/mobile/backend choices. |
| Evaluation suite | Medium-strong | Scenario contracts exist; automated agent-behavior execution is not yet implemented. |
| Observability | Medium | Agent observability exists as a protocol; stronger structured traces remain future work. |
| Tool and MCP policy | Medium | Tool registry exists; connector-specific policy remains future work. |
| Multi-agent runtime execution | Limited | Sagaz does not spawn independent runtime agents; Codex executes under Sagaz rules. |
| Distributed workers | Not a goal | Use AutoGen, LangGraph, CrewAI, or another runtime if needed. |
| Model routing engine | Protocol-level only | Sagaz can guide model selection but does not provide live routing infrastructure. |
| Hosted dashboard | Not a goal | Sagaz is local Markdown plus Codex Desktop. |
| Visual workflow builder | Not a goal | Use external platforms if visual orchestration is required. |
| Autonomous background jobs | Not a goal | Sagaz works in active Codex sessions unless paired with external automation. |
| Enterprise RBAC | Not a goal | Use GitHub/org/platform controls or external enterprise orchestration. |
| Provider gateway | Not a goal | Use LangSmith gateway, provider SDKs, or enterprise infra if needed. |
| Vector/RAG runtime | Not a goal | Sagaz can recommend RAG architecture but does not host it. |

## Sagaz vs CrewAI

Use Sagaz when the goal is to guide Codex Desktop through software delivery with specs, implementation, QA, handoffs, GitHub, and release evidence.

Use CrewAI when the goal is to build autonomous agent crews and flows as an application/runtime outside Codex Desktop.

Complementary pattern:

- Sagaz plans the product, architecture, tests, release, and governance.
- CrewAI implements runtime automations when the product itself needs agent crews.

Sagaz should not claim CrewAI-style runtime parity. CrewAI has a runtime and platform orientation; Sagaz has a Codex Desktop operating-system orientation.

## Sagaz vs AutoGen

Use Sagaz when the goal is delivery orchestration for a repository.

Use AutoGen when the goal is to program multi-agent applications, conversational agents, distributed runtimes, MCP-backed agents, Docker code execution, or Studio-based agent prototyping.

Complementary pattern:

- Sagaz specifies and validates the software project.
- AutoGen becomes an implementation dependency if the product needs programmable multi-agent behavior.

Sagaz should not claim AutoGen-style distributed or event-driven agent runtime parity.

## Sagaz vs LangChain And LangGraph

Use Sagaz when the goal is to coordinate Codex work across planning, build, verification, and release.

Use LangChain or LangGraph when the product needs an agentic application framework, graph-based execution, memory, human-in-the-loop runtime flows, tracing, evaluation, deployment, or LangSmith operations.

Complementary pattern:

- Sagaz decides whether an app needs LangChain/LangGraph.
- LangChain/LangGraph implement runtime application behavior.
- LangSmith can provide production tracing/evaluation that Sagaz records as release evidence.

Sagaz should not claim LangGraph-style graph runtime or LangSmith-style hosted observability parity.

## Sagaz vs AIOX, Synkra, And Similar Systems

Use this comparison only when the user provides reliable details about those systems.

Typical external orchestration platforms may include:

- Runtime execution.
- Agent registries.
- Model routing.
- Dashboards.
- Enterprise permissions.
- Background jobs.
- Cross-framework orchestration.
- Monitoring.
- Hosted workflow state.

Sagaz currently covers the delivery governance side strongly but does not aim to replace hosted enterprise orchestration runtimes.

Sagaz can become more similar in selected areas by adding:

- Stronger execution observability.
- Connector/MCP policy.
- Permission contracts.
- Stack playbooks.
- More complete examples.
- Optional external automation hooks.

## Decision Guide

| Need | Recommended Path |
| --- | --- |
| Build a web/mobile product in Codex Desktop | Sagaz |
| Refactor or fix a codebase safely in Codex Desktop | Sagaz |
| Add governance, gates, release discipline, handoffs | Sagaz |
| Build runtime multi-agent app behavior | CrewAI, AutoGen, LangGraph, or similar |
| Build graph-based long-running agent workflows | LangGraph |
| Build conversational multi-agent applications | AutoGen |
| Build crew/flow business automations | CrewAI |
| Need hosted tracing/evaluation/deployment for agents | LangSmith/LangGraph Platform or similar |
| Need enterprise RBAC, dashboards, background jobs | External orchestration platform |
| Need Figma app-like mockups and design handoff | Sagaz plus Figma MCP |

## Gaps To Consider

Sagaz does not need a standalone CLI runtime if it remains Codex Desktop-focused.

The next useful additions are:

- Permission contract.
- Stack playbooks.
- Stronger execution observability.
- MCP and connector policy.

## Output

```md
Capability question:
Sagaz fit:
External system fit:
Recommended path:
Reason:
Missing capability:
Next action:
Permission needed:
```

