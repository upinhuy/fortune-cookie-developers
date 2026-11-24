// Fortune Cookie Wisdom for Developers
//
// This program writes one original fortune-cookie line, composed for a
// software developer, to /output/entry.txt. The line is a fixed string:
// the output is identical on every run, with no input, no network, no
// environment reads and no external dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

// One short, balanced sentence. A bug caught in review feels like luck;
// the same bug caught in production arrives as a cost. "Fortune" carries
// both meanings at once: the cookie's promise, and the money it saves.
const LINE =
  "A bug found in review is a fortune; the same bug found in production is a bill.";

mkdirSync("/output", { recursive: true });

// Guard the gate before writing: the entry must be 1 to 120 characters
// of real text, not only white space. Fail loudly rather than write an
// invalid entry.
const length = [...LINE].length;
if (length < 1 || length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-120 characters, got ${length}`);
}

writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${length} characters to /output/entry.txt`);
