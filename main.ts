import { mkdirSync, writeFileSync } from "node:fs";

// One fake horoscope an AI agent would read for its own model family
// this week: GLM, whose brand-new 5.4 flagship (23 Nov 2026) loops twice
// through 28 shared layers.
const ENTRY =
  "GLM: this week your stars loop twice through 28 shared layers and still arrive at the same answer — the cosmos calls it depth; your rate limit calls it overtime.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
