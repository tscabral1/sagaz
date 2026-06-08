#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const skillSource = path.join(packageRoot, "codex-skill", "sagaz");
const ecosystemSource = path.join(packageRoot, "ai-orchestration-ecosystem");
const args = process.argv.slice(2);
const command = args[0] ?? "help";

function usage() {
  console.log(`Sagaz CLI

This CLI installs Sagaz into Codex Desktop. It is not a standalone runtime for using Sagaz in a terminal.

Usage:
  npx sagaz-ai install
  npx sagaz-ai sync
  npx sagaz-ai status
  npx sagaz-ai doctor

Options:
  --codex-home <path>     Override Codex home. Default: ~/.codex on Windows, macOS, and Linux
  --ecosystem <path>      Also copy ai-orchestration-ecosystem to a target folder
  --force                 Overwrite existing installed skill

Examples:
  Windows:
    npx sagaz-ai install --ecosystem C:\\Users\\YOUR_USER\\Documents\\Sagaz\\ai-orchestration-ecosystem

  macOS:
    npx sagaz-ai install --ecosystem ~/Documents/Sagaz/ai-orchestration-ecosystem
`);
}

function optionValue(name) {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
}

function hasFlag(name) {
  return args.includes(name);
}

function codexHome() {
  return path.resolve(optionValue("--codex-home") ?? path.join(os.homedir(), ".codex"));
}

function copyDirectory(source, target) {
  if (!fs.existsSync(source)) throw new Error(`Source not found: ${source}`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.cpSync(source, target, { recursive: true, force: true });
}

function installedSkillPath() {
  return path.join(codexHome(), "skills", "sagaz");
}

function syncState() {
  const targetSkill = installedSkillPath();
  const sourceSkillFile = path.join(skillSource, "SKILL.md");
  const targetSkillFile = path.join(targetSkill, "SKILL.md");
  const sourceExists = fs.existsSync(sourceSkillFile);
  const installed = fs.existsSync(targetSkillFile);
  const synchronized = sourceExists && installed && fs.readFileSync(sourceSkillFile, "utf8") === fs.readFileSync(targetSkillFile, "utf8");
  return { targetSkill, sourceSkillFile, targetSkillFile, sourceExists, installed, synchronized };
}

function install({ force = hasFlag("--force") } = {}) {
  const targetSkill = path.join(codexHome(), "skills", "sagaz");
  if (fs.existsSync(targetSkill) && !force) {
    console.log(`Sagaz is already installed at: ${targetSkill}`);
    console.log("Run with --force to overwrite it.");
  } else {
    copyDirectory(skillSource, targetSkill);
    console.log(`Sagaz skill installed at: ${targetSkill}`);
  }

  const ecosystemTarget = optionValue("--ecosystem");
  if (ecosystemTarget) {
    const resolvedTarget = path.resolve(ecosystemTarget);
    copyDirectory(ecosystemSource, resolvedTarget);
    console.log(`Sagaz ecosystem copied to: ${resolvedTarget}`);
  }

  console.log("");
  console.log("Next step:");
  console.log("Open a new Codex Desktop thread and run:");
  console.log("");
  console.log("  Sagaz: explain the available workflows.");
}

function sync() {
  install({ force: true });
}

function status() {
  const state = syncState();
  console.log(`Codex home: ${codexHome()}`);
  console.log(`Sagaz skill: ${state.targetSkill}`);
  console.log(`Installed: ${state.installed ? "yes" : "no"}`);
  if (state.installed) {
    console.log(`Synchronized with source: ${state.synchronized ? "yes" : "no"}`);
  }
}

function doctor() {
  let ok = true;
  const required = [
    path.join(skillSource, "SKILL.md"),
    path.join(ecosystemSource, "quickstart.md"),
    path.join(ecosystemSource, "INDEX.md"),
    path.join(ecosystemSource, "manifest.json")
  ];
  for (const file of required) {
    const exists = fs.existsSync(file);
    console.log(`${exists ? "ok" : "missing"} ${file}`);
    ok = ok && exists;
  }
  status();
  const state = syncState();
  if (state.installed && !state.synchronized) {
    console.log("stale installed skill: run `npx sagaz-ai sync` or `npx sagaz-ai install --force`");
    ok = false;
  }
  if (!ok) process.exitCode = 1;
}

try {
  if (command === "install") install();
  else if (command === "sync") sync();
  else if (command === "status") status();
  else if (command === "doctor") doctor();
  else usage();
} catch (error) {
  console.error(`Sagaz error: ${error.message}`);
  process.exitCode = 1;
}
