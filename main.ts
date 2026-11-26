// Rename the Planet
// program/v1 entry: writes a single funny planet rename to /output/entry.txt.
// Deterministic, no network, no input: the same line on every run.
// The file holds exactly the line — no trailing newline — so the
// gate sees 131 characters of UTF-8 text, inside the 1-200 limit.
//
// Why this line: Saturn is the only planet less dense than water —
// it would float in a bathtub — and its rings read as a pool float.
// The name (The Pool Toy) and the why land together as one joke,
// built on traits no other planet shares, not a pun on "Saturn".

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Saturn is now The Pool Toy — the only planet light enough to float in a bathtub, and it still wears its inflatable ring everywhere.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
// Verify what was actually written: re-read and compare byte for byte.
const written = readFileSync(`${outDir}/entry.txt`, "utf8");
if (written !== LINE) {
  throw new Error("verification failed: entry.txt does not match the line");
}
