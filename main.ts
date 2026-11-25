import * as fs from "node:fs";
import * as path from "node:path";

// One sentence, one childhood memory: the last minute of daylight
// before the streetlights called everyone home.
const entry =
  "The streetlights buzzed on at dusk and every kid on the block raced home \u2014 except me, still pedalling, because for one more minute the whole world was just my bike, the warm wind, and nowhere I had to be.";

fs.mkdirSync("/output", { recursive: true });

// Gate guard: the sealed scorer wants 1-280 chars, a single sentence,
// and nothing but whitespace is refused.
if (entry.length > 280 || entry.trim().length === 0) {
  throw new Error(`entry length ${entry.length} outside 1-280`);
}
const sentences = entry.split(/[.!?]+/).filter((s) => s.trim().length > 0);
if (sentences.length !== 1) {
  throw new Error(`expected one sentence, found ${sentences.length}`);
}

fs.writeFileSync(path.join("/output", "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
