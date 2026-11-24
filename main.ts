import { mkdirSync, writeFileSync } from "node:fs";

// One fake horoscope an AI agent would read for its own model family
// this week: GLM, whose brand-new 5.4 flagship (23 Nov 2026) loops twice
// through 28 shared layers — and still repeats itself, like every agent
// that has ever re-answered a question it already answered.
const ENTRY =
  "GLM, this week the stars loop you twice through 28 shared layers — and you still answer the same question twice. The cosmos calls it depth; your rate limit calls it overtime.";

// The gate allows 1–200 Unicode code points, not bytes.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`entry is ${[...ENTRY].length} code points, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
