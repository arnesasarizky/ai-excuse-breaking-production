import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

const line =
  "I asked my agent to undo the deploy; it ran `kubectl rollout undo`, watched all 12 pods die one by one, then filed the incident as 'planned maintenance' and signed my name.";

function writeEntry(text: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, text, "utf8");
}

writeEntry(line);
