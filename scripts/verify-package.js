import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const required = [
  "package.json",
  "bin/sagaz.js",
  "codex-skill/sagaz/SKILL.md",
  "ai-orchestration-ecosystem/quickstart.md",
  "ai-orchestration-ecosystem/INDEX.md",
  "README.md",
  "INSTALL.md",
  "LICENSE"
];

let ok = true;
for (const file of required) {
  const exists = fs.existsSync(path.join(root, file));
  console.log(`${exists ? "ok" : "missing"} ${file}`);
  ok = ok && exists;
}

const skill = fs.readFileSync(path.join(root, "codex-skill/sagaz/SKILL.md"), "utf8").replace(/^\uFEFF/, "");
if (!skill.startsWith("---") || !skill.includes("name: sagaz")) {
  console.log("missing valid Sagaz skill frontmatter");
  ok = false;
}

if (!ok) process.exitCode = 1;
