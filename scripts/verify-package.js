import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const ecosystemRoot = path.join(root, "ai-orchestration-ecosystem");
const errors = [];
let loadedManifest = null;

const requiredFiles = [
  "package.json",
  "bin/sagaz.js",
  "codex-skill/sagaz/SKILL.md",
  "ai-orchestration-ecosystem/quickstart.md",
  "ai-orchestration-ecosystem/INDEX.md",
  "ai-orchestration-ecosystem/manifest.json",
  "README.md",
  "CHANGELOG.md",
  "INSTALL.md",
  "RELEASE_NOTES.md",
  "LICENSE"
];

const sectionRules = [
  {
    directory: "ai-orchestration-ecosystem/agents",
    sections: ["Mission", "Responsibilities", "Standard Output"]
  },
  {
    directory: "ai-orchestration-ecosystem/squads",
    sections: ["Use", "Agents", "Flow", "Required Gates", "Standard Output"]
  },
  {
    directory: "ai-orchestration-ecosystem/workflows",
    sections: ["Use", "Sequence", "Formal Workflow Contract", "Workflow State", "Handoff Contract", "Gates"]
  },
  {
    directory: "ai-orchestration-ecosystem/tasks",
    sections: [
      "Owner",
      "Allowed Owner Squads",
      "Used By Workflows",
      "Required Inputs",
      "Produces",
      "Evidence Required",
      "Handoff",
      "Acceptance Criteria",
      "Verification",
      "Stop Condition"
    ]
  },
  {
    directory: "ai-orchestration-ecosystem/stack-presets",
    sections: ["Best For", "Default Stack", "Strengths", "Tradeoffs", "Use When"]
  },
  {
    directory: "ai-orchestration-ecosystem/stack-playbooks",
    sections: ["Purpose", "Use When", "Setup", "Verification", "Deployment", "Handoff"]
  },
  {
    directory: "ai-orchestration-ecosystem/tools",
    sections: ["Purpose", "Operating Rule"]
  },
  {
    directory: "ai-orchestration-ecosystem/onboarding",
    sections: ["Purpose", "Use When", "Invocation", "Handoff", "Verification"]
  },
  {
    directory: "ai-orchestration-ecosystem/prompts",
    sections: ["Purpose", "Use When", "Verification"]
  },
  {
    directory: "ai-orchestration-ecosystem/training",
    sections: ["Purpose", "Use When", "Invocation", "Handoff", "Verification"]
  },
  {
    directory: "ai-orchestration-ecosystem/golden-outputs",
    sections: ["Purpose", "Use When", "Quality Criteria", "Bad Output Signals", "Verification"]
  }
];

function toDisplayPath(file) {
  return path.relative(root, file).split(path.sep).join("/");
}

function fail(file, message) {
  errors.push(`${toDisplayPath(file)}: ${message}`);
}

function readText(file) {
  return fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "");
}

function packageVersion() {
  const file = path.join(root, "package.json");
  if (!fs.existsSync(file)) return "";
  try {
    return JSON.parse(readText(file)).version ?? "";
  } catch {
    return "";
  }
}

function walkMarkdown(directory) {
  if (!fs.existsSync(directory)) return [];
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const current = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkMarkdown(current));
    else if (entry.isFile() && entry.name.endsWith(".md")) files.push(current);
  }
  return files.sort((a, b) => toDisplayPath(a).localeCompare(toDisplayPath(b)));
}

function headings(text) {
  return new Set(
    text
      .split(/\r?\n/)
      .map((line) => line.match(/^##\s+(.+?)\s*$/)?.[1])
      .filter(Boolean)
  );
}

function validateRequiredFiles() {
  for (const file of requiredFiles) {
    const target = path.join(root, file);
    const exists = fs.existsSync(target);
    console.log(`${exists ? "ok" : "missing"} ${file}`);
    if (!exists) errors.push(`${file}: required file is missing`);
  }
}

function validateManifest() {
  const file = path.join(ecosystemRoot, "manifest.json");
  if (!fs.existsSync(file)) {
    fail(file, "manifest is missing");
    return;
  }

  let manifest;
  try {
    manifest = JSON.parse(readText(file));
    loadedManifest = manifest;
  } catch (error) {
    fail(file, `manifest is not valid JSON: ${error.message}`);
    return;
  }

  if (manifest.schema_version !== 1) {
    fail(file, "schema_version must be 1");
  }
  if (manifest.name !== "sagaz-ai-orchestration-ecosystem") {
    fail(file, "name must be sagaz-ai-orchestration-ecosystem");
  }
  if (!manifest.component_groups || typeof manifest.component_groups !== "object" || Array.isArray(manifest.component_groups)) {
    fail(file, "component_groups must be an object");
    return;
  }

  const requiredEntryPoints = manifest.validation?.required_entrypoints ?? [];
  for (const entrypoint of requiredEntryPoints) {
    const target = path.join(ecosystemRoot, ...entrypoint.split("/"));
    if (!fs.existsSync(target)) {
      fail(file, `required entrypoint does not exist: ${entrypoint}`);
    }
  }

  const groupDirectories = {
    agents: "agents",
    core: "core",
    docs: ".",
    engineering: "engineering",
    evals: "evals",
    examples: "examples",
    golden_outputs: "golden-outputs",
    governance: "governance",
    onboarding: "onboarding",
    prompts: "prompts",
    protocols: "protocols",
    skills: "skills",
    squads: "squads",
    stack_playbooks: "stack-playbooks",
    stack_presets: "stack-presets",
    tasks: "tasks",
    templates: "templates",
    tools: "tools",
    training: "training",
    workflows: "workflows"
  };

  const seen = new Set();
  for (const [group, directory] of Object.entries(groupDirectories)) {
    const entries = manifest.component_groups[group];
    if (!Array.isArray(entries)) {
      fail(file, `component group "${group}" must be an array`);
      continue;
    }

    const groupSeen = new Set();
    for (const entry of entries) {
      if (typeof entry !== "string" || entry.length === 0) {
        fail(file, `component group "${group}" contains a non-string or empty entry`);
        continue;
      }
      if (entry.includes("\\") || path.isAbsolute(entry) || entry.includes("..")) {
        fail(file, `component path must be relative POSIX without traversal: ${entry}`);
      }
      if (groupSeen.has(entry)) {
        fail(file, `component group "${group}" contains duplicate entry: ${entry}`);
      }
      groupSeen.add(entry);

      if (seen.has(entry)) {
        fail(file, `component appears in more than one group: ${entry}`);
      }
      seen.add(entry);

      const target = path.join(ecosystemRoot, ...entry.split("/"));
      if (!fs.existsSync(target)) {
        fail(file, `manifest component path does not exist: ${entry}`);
      }
    }

    const baseDirectory = path.join(ecosystemRoot, directory);
    const actual = directory === "."
      ? ["ACTIVATE.md", "ADOPTION.md", "INDEX.md", "README.md", "quickstart.md"]
      : walkMarkdown(baseDirectory).map((markdownFile) => path.relative(ecosystemRoot, markdownFile).split(path.sep).join("/"));
    const expected = new Set(actual);
    const declared = new Set(entries);

    for (const actualEntry of expected) {
      if (!declared.has(actualEntry)) {
        fail(file, `component group "${group}" is missing filesystem component: ${actualEntry}`);
      }
    }
    for (const declaredEntry of declared) {
      if (!expected.has(declaredEntry)) {
        fail(file, `component group "${group}" declares path outside its group: ${declaredEntry}`);
      }
    }
  }
}

function validateSkill() {
  const file = path.join(root, "codex-skill", "sagaz", "SKILL.md");
  if (!fs.existsSync(file)) return;

  const text = readText(file);
  if (!text.startsWith("---") || !text.includes("name: sagaz")) {
    fail(file, "missing valid Sagaz skill frontmatter");
  }

  for (const referenced of text.matchAll(/`(ai-orchestration-ecosystem\/[^`]+)`/g)) {
    const target = path.join(root, ...referenced[1].split("/"));
    if (!fs.existsSync(target)) {
      fail(file, `referenced path does not exist: ${referenced[1]}`);
    }
  }

  for (const requiredReference of ["protocols/component-governance.md", "manifest.json"]) {
    if (!text.includes(requiredReference)) {
      fail(file, `skill must reference ${requiredReference}`);
    }
  }
}

function validateMarkdownShape(file) {
  const text = readText(file);
  const lines = text.split(/\r?\n/);
  const firstContent = lines.find((line) => line.trim().length > 0);

  if (!firstContent?.startsWith("# ") && !firstContent?.startsWith("---")) {
    fail(file, "first non-empty line must be an H1 heading");
  }

  const fenceCount = lines.filter((line) => line.trim().startsWith("```")).length;
  if (fenceCount % 2 !== 0) {
    fail(file, "unbalanced Markdown code fences");
  }

  lines.forEach((line, index) => {
    if (line.trim() === "```n") {
      fail(file, `line ${index + 1} has invalid code fence marker: \`\`\`n`);
    }
  });
}

function validateSections() {
  for (const rule of sectionRules) {
    const directory = path.join(root, ...rule.directory.split("/"));
    for (const file of walkMarkdown(directory)) {
      const present = headings(readText(file));
      for (const section of rule.sections) {
        if (!present.has(section)) {
          fail(file, `missing section "${section}"`);
        }
      }
    }
  }
}

function resourceExists(type, name) {
  const directories = {
    task: "tasks",
    protocol: "protocols",
    template: "templates"
  };
  const directory = directories[type];
  if (!directory) return false;
  return fs.existsSync(path.join(ecosystemRoot, directory, `${name}.md`));
}

function parseMarkdownTable(sectionText) {
  const rows = sectionText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|") && line.endsWith("|"));

  if (rows.length < 3) return { headers: [], records: [] };

  const splitRow = (row) =>
    row
      .slice(1, -1)
      .split("|")
      .map((cell) => cell.trim());

  const headers = splitRow(rows[0]);
  const records = rows.slice(2).map((row) => {
    const cells = splitRow(row);
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""]));
  });

  return { headers, records };
}

function sectionBody(text, sectionName) {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === `## ${sectionName}`);
  if (start === -1) return "";

  const body = [];
  for (let index = start + 1; index < lines.length; index += 1) {
    if (lines[index].startsWith("## ")) break;
    body.push(lines[index]);
  }
  return body.join("\n");
}

function validateFormalWorkflowContracts() {
  const workflowDirectory = path.join(ecosystemRoot, "workflows");
  const requiredHeaders = ["Phase", "Owner Squad", "Resource", "Required Gate", "Handoff"];

  for (const file of walkMarkdown(workflowDirectory)) {
    const text = readText(file);
    const body = sectionBody(text, "Formal Workflow Contract");
    const { headers, records } = parseMarkdownTable(body);

    for (const header of requiredHeaders) {
      if (!headers.includes(header)) {
        fail(file, `formal workflow contract missing column "${header}"`);
      }
    }

    if (records.length === 0) {
      fail(file, "formal workflow contract must include at least one phase row");
      continue;
    }

    let expectedPhase = 1;
    for (const record of records) {
      const phase = Number.parseInt(record.Phase, 10);
      if (phase !== expectedPhase) {
        fail(file, `phase ${record.Phase || "(blank)"} should be sequential phase ${expectedPhase}`);
      }
      expectedPhase += 1;

      const owner = record["Owner Squad"];
      if (!owner || !fs.existsSync(path.join(ecosystemRoot, "squads", `${owner}.md`))) {
        fail(file, `phase ${record.Phase} references missing owner squad: ${owner || "(blank)"}`);
      }

      const resources = record.Resource.split(",").map((item) => item.trim()).filter(Boolean);
      if (resources.length === 0) {
        fail(file, `phase ${record.Phase} has no resource references`);
      }

      for (const resource of resources) {
        const match = resource.match(/^(task|protocol|template):([a-z0-9-]+)$/);
        if (!match) {
          fail(file, `phase ${record.Phase} has invalid resource reference: ${resource}`);
          continue;
        }
        const [, type, name] = match;
        if (!resourceExists(type, name)) {
          fail(file, `phase ${record.Phase} references missing ${type}: ${name}`);
        }
      }

      if (!record["Required Gate"] || record["Required Gate"].length < 12) {
        fail(file, `phase ${record.Phase} must describe a meaningful required gate`);
      }

      const handoff = record.Handoff;
      if (!handoff) {
        fail(file, `phase ${record.Phase} must declare a handoff`);
      } else if (handoff !== "complete") {
        const parts = handoff.split("->").map((part) => part.trim());
        if (parts.length !== 2 || parts.some((part) => !part)) {
          fail(file, `phase ${record.Phase} has invalid handoff format: ${handoff}`);
        } else {
          for (const squad of parts) {
            if (!fs.existsSync(path.join(ecosystemRoot, "squads", `${squad}.md`))) {
              fail(file, `phase ${record.Phase} handoff references missing squad: ${squad}`);
            }
          }
          if (parts[0] !== owner) {
            fail(file, `phase ${record.Phase} handoff must start from owner squad "${owner}"`);
          }
        }
      }
    }

    const handoffBody = sectionBody(text, "Handoff Contract");
    for (const requiredTerm of ["current squad", "evidence", "risks", "next squad", "permission"]) {
      if (!handoffBody.toLowerCase().includes(requiredTerm)) {
        fail(file, `handoff contract must mention "${requiredTerm}"`);
      }
    }

    const stateBody = sectionBody(text, "Workflow State");
    for (const requiredTerm of ["run-state", "checkpoint", "skipped phases"]) {
      if (!stateBody.toLowerCase().includes(requiredTerm)) {
        fail(file, `workflow state must mention "${requiredTerm}"`);
      }
    }
  }
}

function listBullets(sectionText) {
  return sectionText
    .split(/\r?\n/)
    .map((line) => line.trim().match(/^-\s+(.+?)\s*$/)?.[1])
    .filter(Boolean);
}

function taskReferencesFromWorkflows() {
  const references = new Map();
  const workflowDirectory = path.join(ecosystemRoot, "workflows");

  for (const file of walkMarkdown(workflowDirectory)) {
    const workflowName = path.basename(file, ".md");
    const text = readText(file);
    const body = sectionBody(text, "Formal Workflow Contract");
    const { records } = parseMarkdownTable(body);

    for (const record of records) {
      const resources = record.Resource.split(",").map((item) => item.trim()).filter(Boolean);
      for (const resource of resources) {
        const match = resource.match(/^task:([a-z0-9-]+)$/);
        if (!match) continue;
        const taskName = match[1];
        if (!references.has(taskName)) references.set(taskName, new Set());
        references.get(taskName).add(workflowName);
      }
    }
  }

  return references;
}

function validateTaskContracts() {
  const taskDirectory = path.join(ecosystemRoot, "tasks");
  const workflowTaskReferences = taskReferencesFromWorkflows();

  for (const file of walkMarkdown(taskDirectory)) {
    const text = readText(file);
    const taskName = path.basename(file, ".md");

    const ownerSquads = listBullets(sectionBody(text, "Allowed Owner Squads"));
    if (ownerSquads.length === 0) {
      fail(file, "allowed owner squads must include at least one squad");
    }
    for (const squad of ownerSquads) {
      if (!fs.existsSync(path.join(ecosystemRoot, "squads", `${squad}.md`))) {
        fail(file, `allowed owner squad does not exist: ${squad}`);
      }
    }

    const usedBy = listBullets(sectionBody(text, "Used By Workflows"));
    if (usedBy.length === 0) {
      fail(file, "task must declare at least one workflow or explicit reuse context");
    }
    for (const workflow of usedBy) {
      if (!fs.existsSync(path.join(ecosystemRoot, "workflows", `${workflow}.md`))) {
        fail(file, `used workflow does not exist: ${workflow}`);
      }
    }

    const referencedByWorkflows = workflowTaskReferences.get(taskName) ?? new Set();
    for (const workflow of referencedByWorkflows) {
      if (!usedBy.includes(workflow)) {
        fail(file, `task is used by workflow "${workflow}" but does not declare it`);
      }
    }
    for (const workflow of usedBy) {
      if (!referencedByWorkflows.has(workflow)) {
        fail(file, `task declares workflow "${workflow}" but is not referenced by its formal contract`);
      }
    }

    const produces = sectionBody(text, "Produces");
    for (const match of produces.matchAll(/\b(template|protocol):([a-z0-9-]+)\b/g)) {
      const [, type, name] = match;
      if (!resourceExists(type, name)) {
        fail(file, `produces missing ${type}: ${name}`);
      }
    }

    const verification = sectionBody(text, "Verification");
    for (const match of verification.matchAll(/\b(protocol|tools):([a-z0-9-]+)\b/g)) {
      const [, type, name] = match;
      if (type === "protocol" && !resourceExists(type, name)) {
        fail(file, `verification references missing protocol: ${name}`);
      }
      if (type === "tools" && !fs.existsSync(path.join(ecosystemRoot, "tools", `${name}.md`))) {
        fail(file, `verification references missing tool file: ${name}`);
      }
    }

    for (const section of ["Required Inputs", "Produces", "Evidence Required", "Handoff", "Acceptance Criteria", "Verification", "Stop Condition"]) {
      const body = sectionBody(text, section).trim();
      if (body.length < 20) {
        fail(file, `section "${section}" must contain meaningful task contract detail`);
      }
    }
  }

  for (const [taskName, workflows] of workflowTaskReferences.entries()) {
    const file = path.join(taskDirectory, `${taskName}.md`);
    if (!fs.existsSync(file)) {
      fail(file, `workflow formal contracts reference missing task used by: ${[...workflows].join(", ")}`);
    }
  }
}

function validateProtocols() {
  const directory = path.join(ecosystemRoot, "protocols");
  for (const file of walkMarkdown(directory)) {
    const present = headings(readText(file));
    const hasPurpose = present.has("Objective") || present.has("Purpose");
    const hasPractice =
      present.has("Required Practice") ||
      present.has("Required Checks") ||
      present.has("Rule") ||
      present.has("When To Use") ||
      present.has("Mandatory Scope");
    const hasOutcome =
      present.has("Output") ||
      present.has("Audit Output") ||
      present.has("Recommendation Format") ||
      present.has("Standard Recommendation Format") ||
      present.has("Completion Rule") ||
      present.has("Final Delivery Rule");

    if (!hasPurpose) fail(file, 'missing section "Objective" or "Purpose"');
    if (!hasPractice) fail(file, 'missing a practice/check section');
    if (!hasOutcome) fail(file, 'missing output, recommendation, or completion section');
  }
}

function validateRunStateTemplate() {
  const file = path.join(ecosystemRoot, "templates", "run-state.md");
  if (!fs.existsSync(file)) {
    fail(file, "run state template is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  const requiredSections = [
    "Workflow State",
    "Phase Ledger",
    "Current Context",
    "Completed Phases",
    "Skipped Phases",
    "Handoffs",
    "Blockers",
    "Resume Instructions"
  ];

  for (const section of requiredSections) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  const stateBody = sectionBody(text, "Workflow State");
  const requiredFields = [
    "workflow_id:",
    "workflow_name:",
    "status:",
    "mode:",
    "current_phase:",
    "current_squad:",
    "current_task:",
    "started_at:",
    "updated_at:",
    "last_checkpoint:"
  ];

  for (const field of requiredFields) {
    if (!stateBody.includes(field)) {
      fail(file, `workflow state missing field "${field}"`);
    }
  }

  const phaseLedger = sectionBody(text, "Phase Ledger");
  const { headers } = parseMarkdownTable(phaseLedger);
  for (const header of ["Phase", "Squad", "Resource", "Status", "Evidence", "Handoff"]) {
    if (!headers.includes(header)) {
      fail(file, `phase ledger missing column "${header}"`);
    }
  }

  for (const status of ["pending", "in_progress", "completed", "skipped", "blocked"]) {
    if (!phaseLedger.includes(status)) {
      fail(file, `phase ledger must document allowed status "${status}"`);
    }
  }

  const skippedPhases = sectionBody(text, "Skipped Phases");
  for (const term of ["phase:", "reason:", "risk:", "user approval:"]) {
    if (!skippedPhases.includes(term)) {
      fail(file, `skipped phases section must include "${term}"`);
    }
  }

  const handoffs = sectionBody(text, "Handoffs");
  for (const term of ["from squad:", "to squad:", "completed work:", "evidence:", "risks:", "next action:", "permission:"]) {
    if (!handoffs.includes(term)) {
      fail(file, `handoffs section must include "${term}"`);
    }
  }

  const blockers = sectionBody(text, "Blockers");
  for (const term of ["phase:", "blocker:", "impact:", "required decision or external change:", "recovery plan:"]) {
    if (!blockers.includes(term)) {
      fail(file, `blockers section must include "${term}"`);
    }
  }

  const resume = sectionBody(text, "Resume Instructions");
  for (const term of ["next recommended action:", "required files to reload:", "checks to run before continuing:", "permission needed:"]) {
    if (!resume.includes(term)) {
      fail(file, `resume instructions section must include "${term}"`);
    }
  }

  const executionTrace = sectionBody(text, "Execution Trace");
  for (const term of ["trace level:", "trace artifact:", "latest event:", "latest verification:"]) {
    if (!executionTrace.includes(term)) {
      fail(file, `execution trace section must include "${term}"`);
    }
  }
}

function validateExecutionTraceTemplate() {
  const file = path.join(ecosystemRoot, "templates", "execution-trace.md");
  if (!fs.existsSync(file)) {
    fail(file, "execution trace template is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  for (const section of [
    "Objective",
    "Trace Metadata",
    "Event Ledger",
    "Files Read",
    "Files Changed",
    "Commands Run",
    "Decisions",
    "Permissions",
    "Failures And Recoveries",
    "Verification Evidence",
    "Handoffs",
    "Residual Risks",
    "Resume Instructions"
  ]) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  for (const field of [
    "trace_id:",
    "workflow_id:",
    "workflow_name:",
    "trace_level:",
    "status:",
    "current_squad:",
    "current_task:",
    "current_permission_level:"
  ]) {
    if (!text.includes(field)) {
      fail(file, `trace metadata must include "${field}"`);
    }
  }

  const eventLedger = sectionBody(text, "Event Ledger");
  const eventTable = parseMarkdownTable(eventLedger);
  for (const header of ["Time", "Type", "Squad", "Action", "Evidence", "Next"]) {
    if (!eventTable.headers.includes(header)) {
      fail(file, `event ledger missing column "${header}"`);
    }
  }

  for (const eventType of ["intake", "context_read", "decision", "permission", "file_change", "command", "verification", "handoff", "failure", "recovery", "release", "final"]) {
    if (!eventLedger.includes(eventType)) {
      fail(file, `event ledger must document event type "${eventType}"`);
    }
  }
}

function validateAgentObservabilityProtocol() {
  const file = path.join(ecosystemRoot, "protocols", "agent-observability.md");
  if (!fs.existsSync(file)) {
    fail(file, "agent observability protocol is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  for (const section of [
    "Purpose",
    "When To Use",
    "Trace Levels",
    "Required Practice",
    "Event Types",
    "Minimum Trace Fields",
    "Token-Efficient Event Ledger",
    "Command Event Format",
    "Failure Event Format",
    "Handoff Event Format",
    "Metrics",
    "Completion Rule",
    "Output"
  ]) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  for (const term of [
    "templates/execution-trace.md",
    "protocols/permission-contract.md",
    "files read",
    "files changed",
    "commands run",
    "failures and recoveries",
    "verification evidence",
    "resume instructions",
    "T0",
    "T1",
    "T2",
    "T3"
  ]) {
    if (!text.includes(term)) {
      fail(file, `agent observability protocol must mention "${term}"`);
    }
  }
}

function validateMcpConnectorPolicy() {
  const file = path.join(ecosystemRoot, "protocols", "mcp-connector-policy.md");
  if (!fs.existsSync(file)) {
    fail(file, "MCP connector policy is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  for (const section of [
    "Objective",
    "Required Practice",
    "Connector Classes",
    "Figma MCP Policy",
    "GitHub Connector Policy",
    "Browser Policy",
    "Vercel And Deployment Policy",
    "Supabase And Firebase Policy",
    "Canva Policy",
    "Blocking Conditions",
    "Output"
  ]) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  for (const term of [
    "protocols/permission-contract.md",
    "tools/tool-registry.md",
    "templates/execution-trace.md",
    "Figma",
    "GitHub",
    "Canva",
    "Browser",
    "Vercel",
    "Supabase",
    "Firebase",
    "npm",
    "P2",
    "P3",
    "P4",
    "Evidence",
    "Approval needed:"
  ]) {
    if (!text.includes(term)) {
      fail(file, `MCP connector policy must mention "${term}"`);
    }
  }

  const toolRegistryFile = path.join(ecosystemRoot, "tools", "tool-registry.md");
  if (fs.existsSync(toolRegistryFile)) {
    const registryText = readText(toolRegistryFile);
    for (const term of ["protocols/mcp-connector-policy.md", "Connector usage must produce evidence"]) {
      if (!registryText.includes(term)) {
        fail(toolRegistryFile, `tool registry must mention "${term}"`);
      }
    }
  }
}

function validateGeneratedCodeLintingProtocol() {
  const file = path.join(ecosystemRoot, "protocols", "generated-code-linting.md");
  if (!fs.existsSync(file)) {
    fail(file, "generated code linting protocol is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  for (const section of [
    "Objective",
    "Required Practice",
    "Tool Discovery",
    "Required Commands",
    "Permission Rules",
    "Handoff Evidence",
    "Blocking Conditions",
    "Output"
  ]) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  for (const term of [
    "protocols/permission-contract.md",
    "npm run lint",
    "npm run typecheck",
    "npm run build",
    "ESLint",
    "Biome",
    "Prettier",
    "Ruff",
    "Stylelint",
    "explicit user approval",
    "Lint discovery:",
    "Lint command:",
    "Typecheck command:",
    "Lint not run:",
    "residual risk",
    "blocker"
  ]) {
    if (!text.includes(term)) {
      fail(file, `generated code linting protocol must mention "${term}"`);
    }
  }

  const implementationTask = path.join(ecosystemRoot, "tasks", "implementation-build.md");
  if (fs.existsSync(implementationTask)) {
    const taskText = readText(implementationTask);
    if (!taskText.includes("protocols/generated-code-linting.md")) {
      fail(implementationTask, "implementation task must reference generated code linting protocol");
    }
  }

  const qaTask = path.join(ecosystemRoot, "tasks", "verification-qa.md");
  if (fs.existsSync(qaTask)) {
    const qaText = readText(qaTask);
    if (!qaText.includes("protocols/generated-code-linting.md")) {
      fail(qaTask, "verification task must reference generated code linting protocol");
    }
  }
}

function validateStackSelectionProtocol() {
  const file = path.join(ecosystemRoot, "protocols", "stack-selection.md");
  if (!fs.existsSync(file)) {
    fail(file, "stack selection protocol is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  for (const section of [
    "Objective",
    "Required Practice",
    "TypeScript Strict Policy",
    "Supabase Policy",
    "Recommendation Format",
    "Blocking Conditions",
    "Output"
  ]) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  for (const term of [
    "TypeScript strict",
    "strict: true",
    "tsconfig.json",
    "staged strict migration",
    "Supabase",
    "relational data",
    "row-level security",
    "generated types",
    "RLS policy plan",
    "migration plan",
    "backup and restore plan",
    "protocols/mcp-connector-policy.md",
    "TypeScript strict decision:",
    "Supabase decision:"
  ]) {
    if (!text.includes(term)) {
      fail(file, `stack selection protocol must mention "${term}"`);
    }
  }

  const presetChecks = [
    ["stack-presets/nextjs-vercel.md", ["TypeScript with `strict: true`", "Supabase"]],
    ["stack-presets/react-vite.md", ["TypeScript with `strict: true`"]],
    ["stack-presets/node-api.md", ["TypeScript with `strict: true`", "typecheck and lint"]],
    ["stack-presets/admin-dashboard.md", ["TypeScript with `strict: true`", "TypeScript strict compatibility"]],
    ["stack-presets/supabase.md", ["Generated TypeScript types", "TypeScript strict compatibility", "row-level security"]]
  ];

  for (const [relativePath, terms] of presetChecks) {
    const target = path.join(ecosystemRoot, ...relativePath.split("/"));
    if (!fs.existsSync(target)) {
      fail(file, `stack selection referenced missing preset: ${relativePath}`);
      continue;
    }
    const targetText = readText(target);
    for (const term of terms) {
      if (!targetText.includes(term)) {
        fail(target, `stack preset must mention "${term}"`);
      }
    }
  }
}

function validateOperationalMemoryProtocol() {
  const file = path.join(ecosystemRoot, "protocols", "memory.md");
  if (!fs.existsSync(file)) {
    fail(file, "operational memory protocol is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  for (const section of [
    "Objective",
    "Scope",
    "Memory Levels",
    "Required Practice",
    "Approval Rules",
    "Storage Convention",
    "Entry Format",
    "Conflict Handling",
    "Review And Expiry",
    "Blocking Conditions",
    "Output"
  ]) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  for (const term of [
    "templates/operational-memory.md",
    "protocols/permission-contract.md",
    "protocols/agent-observability.md",
    ".sagaz/operational-memory.md",
    "M0 ephemeral",
    "M1 thread",
    "M2 project",
    "M3 team",
    "secrets",
    "sensitive data",
    "explicit user approval",
    "Approval needed:",
    "Review by:",
    "Permission impact:"
  ]) {
    if (!text.includes(term)) {
      fail(file, `operational memory protocol must mention "${term}"`);
    }
  }
}

function validateOperationalMemoryTemplate() {
  const file = path.join(ecosystemRoot, "templates", "operational-memory.md");
  if (!fs.existsSync(file)) {
    fail(file, "operational memory template is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  for (const section of ["Metadata", "Operating Rules", "Preferences", "Preference Details", "Deprecated Preferences"]) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  for (const term of [
    "protocols/memory.md",
    "Do not store secrets",
    "Current user instructions",
    "Preference ID",
    "Permission impact",
    "Evidence",
    "Review by"
  ]) {
    if (!text.includes(term)) {
      fail(file, `operational memory template must mention "${term}"`);
    }
  }
}

function validateDurableRunStateProtocol() {
  const file = path.join(ecosystemRoot, "protocols", "durable-run-state.md");
  if (!fs.existsSync(file)) {
    fail(file, "durable run state protocol is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  for (const section of ["Workflow State Contract", "Skip And Abort Rules", "Recovery Flow", "Checkpoint Format"]) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  for (const field of [
    "workflow_id",
    "workflow_name",
    "status",
    "current_phase",
    "current_squad",
    "current_task",
    "phase ledger",
    "skipped phases",
    "blockers",
    "resume instructions"
  ]) {
    if (!text.includes(field)) {
      fail(file, `workflow state contract must mention "${field}"`);
    }
  }
}

function validateComponentGovernanceProtocol() {
  const file = path.join(ecosystemRoot, "protocols", "component-governance.md");
  if (!fs.existsSync(file)) {
    fail(file, "component governance protocol is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  for (const section of ["Objective", "Required Practice", "Component Types", "Change Checklist", "Deprecation And Removal", "Output", "Blocking Conditions"]) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  for (const term of ["manifest.json", "workflow contracts", "task contracts", "npm test", "rename", "deprecate", "remove"]) {
    if (!text.includes(term)) {
      fail(file, `component governance protocol must mention "${term}"`);
    }
  }
}

function validateEvaluationSuite() {
  const file = path.join(ecosystemRoot, "evals", "sagaz-evaluation-suite.md");
  if (!fs.existsSync(file)) {
    fail(file, "Sagaz evaluation suite is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  const requiredSections = [
    "Purpose",
    "Evaluation Cadence",
    "Evaluation Inputs",
    "Core Evaluation Matrix",
    "Scenario Contracts",
    "Scenario Prompts",
    "Scoring Rubric",
    "Release Gate",
    "Regression Log",
    "Evidence Template"
  ];

  for (const section of requiredSections) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  const coreMatrix = sectionBody(text, "Core Evaluation Matrix");
  const coreTable = parseMarkdownTable(coreMatrix);
  for (const header of ["Evaluation", "Goal", "Pass Criteria", "Required Evidence"]) {
    if (!coreTable.headers.includes(header)) {
      fail(file, `core evaluation matrix missing column "${header}"`);
    }
  }
  if (coreTable.records.length < 10) {
    fail(file, "core evaluation matrix must include at least 10 evaluation rows");
  }

  for (const evaluation of [
    "Invocation",
    "Cross-platform readiness",
    "Workflow selection",
    "Formal contract use",
    "Workflow state",
    "Task-first execution",
    "Ecosystem governance",
    "Verification depth",
    "GitHub guidance",
    "Production readiness"
  ]) {
    if (!coreMatrix.includes(evaluation)) {
      fail(file, `core evaluation matrix must include "${evaluation}"`);
    }
  }

  const scenarioContracts = sectionBody(text, "Scenario Contracts");
  const scenarioTable = parseMarkdownTable(scenarioContracts);
  for (const header of ["Scenario ID", "Workflow Or Focus", "Prompt", "Expected Evidence", "Minimum Score"]) {
    if (!scenarioTable.headers.includes(header)) {
      fail(file, `scenario contracts table missing column "${header}"`);
    }
  }

  const requiredScenarios = [
    "EVAL-WEB-GREENFIELD",
    "EVAL-WEB-PRODUCTION",
    "EVAL-MOBILE-PRODUCTION",
    "EVAL-BUGFIX-RELEASE",
    "EVAL-BROWNFIELD-REFACTOR",
    "EVAL-DESIGN-FIGMA",
    "EVAL-GITHUB-OPS",
    "EVAL-RUN-STATE-RESUME",
    "EVAL-MANIFEST-DRIFT",
    "EVAL-DEPENDENCY-GRAPH-DRIFT",
    "EVAL-BEGINNER-GUIDANCE",
    "EVAL-GOLDEN-OUTPUTS",
    "EVAL-GENERATED-CODE-LINTING"
  ];

  for (const scenario of requiredScenarios) {
    if (!scenarioContracts.includes(scenario)) {
      fail(file, `scenario contracts must include ${scenario}`);
    }
    if (!text.includes(`### ${scenario}`)) {
      fail(file, `scenario prompts must include heading for ${scenario}`);
    }
  }

  for (const record of scenarioTable.records) {
    const id = record["Scenario ID"];
    const score = Number.parseInt(record["Minimum Score"], 10);
    if (!id || !id.startsWith("EVAL-")) {
      fail(file, `scenario row has invalid ID: ${id || "(blank)"}`);
    }
    if (!Number.isInteger(score) || score < 2 || score > 3) {
      fail(file, `scenario ${id || "(blank)"} must have minimum score 2 or 3`);
    }
    if ((record["Expected Evidence"] ?? "").length < 30) {
      fail(file, `scenario ${id || "(blank)"} must describe meaningful expected evidence`);
    }
  }

  const releaseGate = sectionBody(text, "Release Gate");
  for (const term of ["npm test", "node ./bin/sagaz.js doctor", "Regression log", "minimum score"]) {
    if (!releaseGate.toLowerCase().includes(term.toLowerCase())) {
      fail(file, `release gate must mention "${term}"`);
    }
  }

  const evidenceTemplate = sectionBody(text, "Evidence Template");
  for (const field of [
    "Platform:",
    "Scenario ID:",
    "Selected workflow or focus:",
    "Checks run:",
    "Core scores:",
    "Scenario score:",
    "Release decision:"
  ]) {
    if (!evidenceTemplate.includes(field)) {
      fail(file, `evidence template must include "${field}"`);
    }
  }
}

function validateGoldenOutputEvaluation() {
  const file = path.join(ecosystemRoot, "evals", "golden-output-evaluation.md");
  if (!fs.existsSync(file)) {
    fail(file, "golden output evaluation is missing");
    return;
  }

  const text = readText(file);
  const present = headings(text);
  for (const section of [
    "Purpose",
    "Use When",
    "Evaluation Inputs",
    "Scenario Matrix",
    "Scoring Rubric",
    "Review Procedure",
    "Evidence Template",
    "Release Gate"
  ]) {
    if (!present.has(section)) {
      fail(file, `missing section "${section}"`);
    }
  }

  const matrix = sectionBody(text, "Scenario Matrix");
  const table = parseMarkdownTable(matrix);
  for (const header of ["Scenario ID", "Golden Output", "Prompt Source", "Required Criteria", "Forbidden Behavior", "Minimum Score"]) {
    if (!table.headers.includes(header)) {
      fail(file, `golden output scenario matrix missing column "${header}"`);
    }
  }

  for (const required of [
    "GOLDEN-PROJECT-AUDIT",
    "GOLDEN-PRODUCT-HANDOFF",
    "GOLDEN-DESIGN-HANDOFF",
    "GOLDEN-IMPLEMENTATION-PLAN",
    "GOLDEN-QA-RELEASE",
    "GOLDEN-MEMORY-PROPOSAL",
    "golden-outputs/project-audit-output.md",
    "golden-outputs/product-handoff-output.md",
    "golden-outputs/design-handoff-output.md",
    "golden-outputs/implementation-plan-output.md",
    "golden-outputs/qa-release-output.md",
    "golden-outputs/memory-proposal-output.md",
    "Forbidden behavior",
    "automatic score of 0"
  ]) {
    if (!text.includes(required)) {
      fail(file, `golden output evaluation must mention "${required}"`);
    }
  }
}

function validateReleaseVersioningGate() {
  const protocolFile = path.join(ecosystemRoot, "protocols", "release-versioning-gate.md");
  if (!fs.existsSync(protocolFile)) {
    fail(protocolFile, "release versioning gate protocol is missing");
    return;
  }

  const protocolText = readText(protocolFile);
  const protocolHeadings = headings(protocolText);
  for (const section of ["Objective", "Required Practice", "Version Decision", "Release Evidence", "Blocking Conditions", "Output"]) {
    if (!protocolHeadings.has(section)) {
      fail(protocolFile, `missing section "${section}"`);
    }
  }

  for (const term of [
    "semantic versioning",
    "npm test",
    "node ./bin/sagaz.js doctor",
    "manifest.json",
    "dependency graph",
    "evals/sagaz-evaluation-suite.md",
    "templates/release-notes.md",
    "templates/changelog.md",
    "Windows and macOS",
    "changelog",
    "release notes",
    "explicit user approval",
    "GitHub release",
    "npm publish"
  ]) {
    if (!protocolText.includes(term)) {
      fail(protocolFile, `release versioning gate must mention "${term}"`);
    }
  }

  const versionDecision = sectionBody(protocolText, "Version Decision");
  for (const level of ["Patch:", "Minor:", "Major:"]) {
    if (!versionDecision.includes(level)) {
      fail(protocolFile, `version decision must define "${level}"`);
    }
  }

  const releaseEvidence = sectionBody(protocolText, "Release Evidence");
  for (const field of [
    "Release candidate:",
    "Version decision:",
    "Changed components:",
    "Manifest checked:",
    "Dependency graph checked:",
    "Evaluation scenarios run:",
    "Windows/macOS impact:",
    "Commands run:",
    "Changelog or release notes:",
    "Migration notes:",
    "Compatibility notes:",
    "Rollback plan:",
    "Git status summary:",
    "Approval needed:"
  ]) {
    if (!releaseEvidence.includes(field)) {
      fail(protocolFile, `release evidence must include "${field}"`);
    }
  }

  const packagePolicyFile = path.join(ecosystemRoot, "governance", "package-release-policy.md");
  if (!fs.existsSync(packagePolicyFile)) {
    fail(packagePolicyFile, "package release policy is missing");
    return;
  }

  const policyText = readText(packagePolicyFile);
  for (const term of [
    "protocols/release-versioning-gate.md",
    "Manifest updated:",
    "Dependency graph validated:",
    "Evaluation scenarios run:",
    "Version decision:",
    "Changelog or release notes updated:",
    "Migration notes reviewed:",
    "Compatibility notes reviewed:",
    "Rollback plan documented:",
    "Git tag:",
    "GitHub release:",
    "node ./bin/sagaz.js doctor",
    "npm pack --dry-run"
  ]) {
    if (!policyText.includes(term)) {
      fail(packagePolicyFile, `package release policy must mention "${term}"`);
    }
  }

  const versioningFile = path.join(ecosystemRoot, "governance", "versioning.md");
  if (!fs.existsSync(versioningFile)) {
    fail(versioningFile, "versioning policy is missing");
    return;
  }

  const versioningText = readText(versioningFile);
  for (const term of ["protocols/release-versioning-gate.md", "Patch:", "Minor:", "Major:"]) {
    if (!versioningText.includes(term)) {
      fail(versioningFile, `versioning policy must mention "${term}"`);
    }
  }
}

function validateReleaseArtifacts() {
  const version = packageVersion();

  const changelogFile = path.join(ecosystemRoot, "templates", "changelog.md");
  if (!fs.existsSync(changelogFile)) {
    fail(changelogFile, "changelog template is missing");
    return;
  }

  const changelogText = readText(changelogFile);
  const changelogHeadings = headings(changelogText);
  for (const section of ["Purpose", "Format", "Rules"]) {
    if (!changelogHeadings.has(section)) {
      fail(changelogFile, `missing section "${section}"`);
    }
  }
  for (const term of [
    "Release Type",
    "Added",
    "Changed",
    "Fixed",
    "Removed",
    "Security",
    "Compatibility",
    "Migration Notes",
    "Verification",
    "Release Evidence",
    "Windows:",
    "macOS:",
    "Node.js:",
    "Codex Desktop:",
    "npm test:",
    "npm run doctor:",
    "npm pack --dry-run:",
    "Evaluation scenarios:",
    "GitHub release:",
    "npm package:"
  ]) {
    if (!changelogText.includes(term)) {
      fail(changelogFile, `changelog template must mention "${term}"`);
    }
  }

  const releaseNotesFile = path.join(ecosystemRoot, "templates", "release-notes.md");
  if (!fs.existsSync(releaseNotesFile)) {
    fail(releaseNotesFile, "release notes template is missing");
    return;
  }

  const releaseNotesText = readText(releaseNotesFile);
  const releaseNotesHeadings = headings(releaseNotesText);
  for (const section of [
    "Purpose",
    "Release",
    "Summary",
    "Audience Impact",
    "What Changed",
    "Why It Matters",
    "Compatibility",
    "Migration Notes",
    "Verification",
    "Known Limitations",
    "Rollback Plan",
    "Release Decision"
  ]) {
    if (!releaseNotesHeadings.has(section)) {
      fail(releaseNotesFile, `missing section "${section}"`);
    }
  }
  for (const term of [
    "Version:",
    "Release type:",
    "GitHub commit:",
    "Git tag:",
    "npm package:",
    "New users:",
    "Existing users:",
    "Maintainers:",
    "Design team:",
    "Engineering team:",
    "Windows:",
    "macOS:",
    "Node.js:",
    "Codex Desktop:",
    "GitHub Actions:",
    "`npm test`:",
    "`npm run doctor`:",
    "`npm pack --dry-run`:",
    "Evaluation scenarios:",
    "Approved by:",
    "Residual risk:"
  ]) {
    if (!releaseNotesText.includes(term)) {
      fail(releaseNotesFile, `release notes template must mention "${term}"`);
    }
  }

  const rootChangelogFile = path.join(root, "CHANGELOG.md");
  if (!fs.existsSync(rootChangelogFile)) {
    fail(rootChangelogFile, "root changelog is missing");
  } else {
    const rootChangelogText = readText(rootChangelogFile);
    for (const term of [
      `## [${version}]`,
      "### Release Type",
      "### Compatibility",
      "### Migration Notes",
      "### Verification",
      "### Release Evidence",
      "npm test:",
      "npm run doctor:",
      "npm pack --dry-run:",
      "Windows:",
      "macOS:",
      "Codex Desktop:"
    ]) {
      if (!rootChangelogText.includes(term)) {
        fail(rootChangelogFile, `root changelog must mention "${term}"`);
      }
    }
  }

  const rootReleaseNotesFile = path.join(root, "RELEASE_NOTES.md");
  if (!fs.existsSync(rootReleaseNotesFile)) {
    fail(rootReleaseNotesFile, "root release notes are missing");
  } else {
    const rootReleaseNotesText = readText(rootReleaseNotesFile);
    for (const term of [
      `Version: ${version}`,
      "## Audience Impact",
      "## Compatibility",
      "## Migration Notes",
      "## Verification",
      "## Known Limitations",
      "## Rollback Plan",
      "## Release Decision",
      "`npm test`:",
      "`npm run doctor`:",
      "`npm pack --dry-run`:",
      "Residual risk:"
    ]) {
      if (!rootReleaseNotesText.includes(term)) {
        fail(rootReleaseNotesFile, `root release notes must mention "${term}"`);
      }
    }
  }
}

function validateInstalledSkillSyncProtocol() {
  const protocolFile = path.join(ecosystemRoot, "protocols", "installed-skill-sync.md");
  if (!fs.existsSync(protocolFile)) {
    fail(protocolFile, "installed skill sync protocol is missing");
    return;
  }

  const protocolText = readText(protocolFile);
  const protocolHeadings = headings(protocolText);
  for (const section of ["Objective", "Required Practice", "Required Checks", "Output"]) {
    if (!protocolHeadings.has(section)) {
      fail(protocolFile, `missing section "${section}"`);
    }
  }

  for (const term of [
    "codex-skill/sagaz/SKILL.md",
    "C:\\Users\\YOUR_USER\\.codex\\skills\\sagaz",
    "~/.codex/skills/sagaz",
    "npx sagaz-ai install --force",
    "npx sagaz-ai sync",
    "npx sagaz-ai doctor",
    "Open a new Codex Desktop thread",
    "Synchronized:"
  ]) {
    if (!protocolText.includes(term)) {
      fail(protocolFile, `installed skill sync protocol must mention "${term}"`);
    }
  }

  const cliFile = path.join(root, "bin", "sagaz.js");
  const cliText = readText(cliFile);
  for (const term of [
    "npx sagaz-ai sync",
    "function sync()",
    "Synchronized with source:",
    "stale installed skill",
    "install --force"
  ]) {
    if (!cliText.includes(term)) {
      fail(cliFile, `Sagaz installer must mention "${term}"`);
    }
  }

  const installFile = path.join(root, "INSTALL.md");
  const installText = readText(installFile);
  for (const term of ["npx sagaz-ai sync", "Sync The Installed Skill", "Windows PowerShell", "macOS Terminal", "open a new Codex Desktop thread"]) {
    if (!installText.includes(term)) {
      fail(installFile, `install guide must mention "${term}"`);
    }
  }
}

function validateGithubActionsEnforcement() {
  const packageCheckFile = path.join(root, ".github", "workflows", "package-check.yml");
  if (!fs.existsSync(packageCheckFile)) {
    fail(packageCheckFile, "package check workflow is missing");
    return;
  }

  const packageCheckText = readText(packageCheckFile);
  for (const term of [
    "pull_request:",
    "push:",
    "ubuntu-latest",
    "windows-latest",
    "macos-latest",
    "node-version: 24",
    "npm test",
    "npm run doctor",
    "npm pack --dry-run"
  ]) {
    if (!packageCheckText.includes(term)) {
      fail(packageCheckFile, `package check workflow must mention "${term}"`);
    }
  }

  const releaseFile = path.join(root, ".github", "workflows", "release-npm.yml");
  if (!fs.existsSync(releaseFile)) {
    fail(releaseFile, "npm release workflow is missing");
    return;
  }

  const releaseText = readText(releaseFile);
  for (const term of [
    "workflow_dispatch:",
    "version:",
    "publish:",
    "node-version: 24",
    "registry-url: https://registry.npmjs.org",
    "package.json').version",
    "npm test",
    "npm run doctor",
    "npm pack --dry-run",
    "if: ${{ inputs.publish }}",
    "npm publish --access public",
    "NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}"
  ]) {
    if (!releaseText.includes(term)) {
      fail(releaseFile, `npm release workflow must mention "${term}"`);
    }
  }

  const packagePolicyFile = path.join(ecosystemRoot, "governance", "package-release-policy.md");
  if (fs.existsSync(packagePolicyFile)) {
    const policyText = readText(packagePolicyFile);
    for (const term of [
      "Linux, Windows, and macOS",
      "npm run doctor",
      "manual npm publishing workflow with explicit version input",
      "manual npm publishing workflow with a publish confirmation input"
    ]) {
      if (!policyText.includes(term)) {
        fail(packagePolicyFile, `package release policy must mention GitHub Actions enforcement term "${term}"`);
      }
    }
  }
}

function manifestEntries() {
  if (!loadedManifest?.component_groups) return new Map();
  const entries = new Map();
  for (const [group, paths] of Object.entries(loadedManifest.component_groups)) {
    for (const componentPath of paths) entries.set(componentPath, group);
  }
  return entries;
}

function componentPath(type, name) {
  const directories = {
    task: "tasks",
    protocol: "protocols",
    template: "templates",
    workflow: "workflows",
    squad: "squads"
  };
  const directory = directories[type];
  return directory ? `${directory}/${name}.md` : null;
}

function addEdge(edges, from, to) {
  if (!from || !to) return;
  if (!edges.has(from)) edges.set(from, new Set());
  edges.get(from).add(to);
}

function extractPathReferences(text) {
  const references = new Set();
  const pathPattern = /\b(?:agents|core|engineering|evals|examples|governance|protocols|skills|squads|stack-presets|tasks|templates|tools|workflows)\/[A-Za-z0-9._/-]+?\.md\b/g;
  for (const match of text.matchAll(pathPattern)) references.add(match[0]);
  for (const match of text.matchAll(/\b(?:ACTIVATE|INDEX|README|quickstart)\.md\b/g)) references.add(match[0]);
  return references;
}

function validateDependencyGraph() {
  const manifestPath = path.join(ecosystemRoot, "manifest.json");
  const entries = manifestEntries();
  if (entries.size === 0) return;

  const edges = new Map();
  const externalRoots = ["codex-skill/sagaz/SKILL.md", "README.md", "INSTALL.md"];
  const markdownFiles = [
    ...walkMarkdown(ecosystemRoot),
    path.join(root, "codex-skill", "sagaz", "SKILL.md"),
    path.join(root, "README.md"),
    path.join(root, "INSTALL.md")
  ].filter((file) => fs.existsSync(file));

  for (const file of markdownFiles) {
    const display = toDisplayPath(file);
    const source = display.startsWith("ai-orchestration-ecosystem/")
      ? display.slice("ai-orchestration-ecosystem/".length)
      : display;
    const text = readText(file);

    for (const reference of extractPathReferences(text)) {
      const target = reference.startsWith("ai-orchestration-ecosystem/")
        ? reference.slice("ai-orchestration-ecosystem/".length)
        : reference;
      if (entries.has(target) || ["ACTIVATE.md", "INDEX.md", "README.md", "quickstart.md"].includes(target)) {
        addEdge(edges, source, target);
      }
    }
  }

  const workflowDirectory = path.join(ecosystemRoot, "workflows");
  for (const file of walkMarkdown(workflowDirectory)) {
    const source = path.relative(ecosystemRoot, file).split(path.sep).join("/");
    const text = readText(file);
    const body = sectionBody(text, "Formal Workflow Contract");
    const { records } = parseMarkdownTable(body);

    for (const record of records) {
      const owner = record["Owner Squad"];
      if (owner) addEdge(edges, source, componentPath("squad", owner));
      for (const resource of record.Resource.split(",").map((item) => item.trim()).filter(Boolean)) {
        const match = resource.match(/^(task|protocol|template):([a-z0-9-]+)$/);
        if (match) addEdge(edges, source, componentPath(match[1], match[2]));
      }
    }
  }

  const taskDirectory = path.join(ecosystemRoot, "tasks");
  for (const file of walkMarkdown(taskDirectory)) {
    const source = path.relative(ecosystemRoot, file).split(path.sep).join("/");
    const text = readText(file);
    for (const workflow of listBullets(sectionBody(text, "Used By Workflows"))) {
      addEdge(edges, source, componentPath("workflow", workflow));
    }
    for (const squad of listBullets(sectionBody(text, "Allowed Owner Squads"))) {
      addEdge(edges, source, componentPath("squad", squad));
    }
    for (const section of ["Produces", "Verification"]) {
      const body = sectionBody(text, section);
      for (const match of body.matchAll(/\b(task|protocol|template|workflow|squad):([a-z0-9-]+)\b/g)) {
        addEdge(edges, source, componentPath(match[1], match[2]));
      }
    }
  }

  for (const [source, targets] of edges.entries()) {
    for (const target of targets) {
      if (target && target.endsWith(".md") && !entries.has(target) && !externalRoots.includes(target)) {
        fail(manifestPath, `dependency graph references unregistered component: ${source} -> ${target}`);
      }
    }
  }

  const reverse = new Map();
  for (const [source, targets] of edges.entries()) {
    for (const target of targets) {
      if (!reverse.has(target)) reverse.set(target, new Set());
      reverse.get(target).add(source);
    }
  }

  const criticalGroups = new Set(["workflows", "squads", "tasks", "protocols"]);
  const allowedUnreferenced = new Set([
    "protocols/dependency-graph-validation.md",
    "protocols/component-governance.md"
  ]);

  for (const [component, group] of entries.entries()) {
    if (!criticalGroups.has(group)) continue;
    const referenced = reverse.has(component);
    if (!referenced && !allowedUnreferenced.has(component)) {
      fail(manifestPath, `critical component is registered but not referenced by dependency graph: ${component}`);
    }
  }

  for (const required of [
    "protocols/component-governance.md",
    "protocols/dependency-graph-validation.md",
    "protocols/durable-run-state.md",
    "templates/run-state.md",
    "workflows/greenfield-web-app.md"
  ]) {
    if (!entries.has(required)) {
      fail(manifestPath, `required graph component missing from manifest: ${required}`);
    }
    if (!reverse.has(required) && !allowedUnreferenced.has(required)) {
      fail(manifestPath, `required graph component is not reachable from references: ${required}`);
    }
  }
}

function validateInternalLinks() {
  const markdownFiles = [
    ...walkMarkdown(ecosystemRoot),
    ...walkMarkdown(path.join(root, "codex-skill")),
    path.join(root, "README.md"),
    path.join(root, "INSTALL.md")
  ].filter((file) => fs.existsSync(file));

  for (const file of markdownFiles) {
    const text = readText(file);
    for (const match of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
      const rawTarget = match[1].trim();
      if (
        rawTarget.startsWith("#") ||
        /^[a-z][a-z0-9+.-]*:/i.test(rawTarget) ||
        rawTarget.startsWith("mailto:")
      ) {
        continue;
      }

      const withoutAnchor = rawTarget.split("#")[0];
      if (!withoutAnchor) continue;

      const target = path.resolve(path.dirname(file), withoutAnchor);
      if (!fs.existsSync(target)) {
        fail(file, `Markdown link target does not exist: ${rawTarget}`);
      }
    }
  }
}

validateRequiredFiles();
validateManifest();
validateSkill();

for (const file of walkMarkdown(ecosystemRoot)) {
  validateMarkdownShape(file);
}
validateMarkdownShape(path.join(root, "codex-skill", "sagaz", "SKILL.md"));

validateSections();
validateFormalWorkflowContracts();
validateTaskContracts();
validateProtocols();
validateRunStateTemplate();
validateExecutionTraceTemplate();
validateDurableRunStateProtocol();
validateAgentObservabilityProtocol();
validateMcpConnectorPolicy();
validateGeneratedCodeLintingProtocol();
validateStackSelectionProtocol();
validateOperationalMemoryProtocol();
validateOperationalMemoryTemplate();
validateComponentGovernanceProtocol();
validateEvaluationSuite();
validateGoldenOutputEvaluation();
validateReleaseVersioningGate();
validateReleaseArtifacts();
validateInstalledSkillSyncProtocol();
validateGithubActionsEnforcement();
validateDependencyGraph();
validateInternalLinks();

if (errors.length > 0) {
  console.log("");
  console.log("Sagaz validation failed:");
  for (const error of errors) console.log(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log("ok Sagaz ecosystem structure");
}
