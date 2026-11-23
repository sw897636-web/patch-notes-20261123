// Real-Life Patch Notes: The Comedy Changelog — make.fun bounty entry.
// Writes one one-line patch note for a bug in real life / human biology to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, stdlib only, no network, deterministic across runs.
// The entry is exactly one line of 107 characters, written with no trailing
// newline, so every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "v6.0.3: fixed a bug where a 15-second song looped in your head for 6 hours with no way to kill the process.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
