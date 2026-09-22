/**
 * Print verses from the bundled World English Bible.
 *
 * An authoring aid. Chapter panels quote and paraphrase the text constantly, and the
 * bundled WEB is the translation that is guaranteed to be on screen for every reader, so
 * this is how to check what a passage actually says before writing a sentence about it
 * without opening a browser or spending an ESV request.
 *
 *   node scripts/show-verses.mjs joshua-6@1-5 joshua-24@15
 *
 * Arguments are `<file>@<verse>` or `<file>@<from>-<to>`, where `<file>` is the basename
 * of a file in `public/scripture/web`. Paths are relative to the repository root, so run
 * it from there.
 */

import fs from "node:fs";
import path from "node:path";

const DIR = "public/scripture/web";

if (process.argv.length < 3) {
  const available = fs.existsSync(DIR)
    ? fs
        .readdirSync(DIR)
        .filter((f) => f.endsWith(".json"))
        .map((f) => path.basename(f, ".json"))
    : [];
  console.error("usage: node scripts/show-verses.mjs <file>@<verse|from-to> ...");
  console.error(`run from the repository root; ${available.length} chapters bundled`);
  process.exit(1);
}

for (const arg of process.argv.slice(2)) {
  const [file, range] = arg.split("@");
  if (!file || !range) {
    console.error(`skipping "${arg}": expected <file>@<verse|from-to>`);
    continue;
  }

  const source = path.join(DIR, `${file}.json`);
  if (!fs.existsSync(source)) {
    console.error(`skipping "${arg}": no ${source}`);
    continue;
  }

  const data = JSON.parse(fs.readFileSync(source, "utf8"));
  const [from, to] = range.includes("-")
    ? range.split("-").map(Number)
    : [Number(range), Number(range)];

  console.log(`--- ${data.book} ${data.chapter}:${range}`);
  const shown = data.verses.filter((v) => v.v >= from && v.v <= to);
  if (!shown.length) console.log(`(no verses in range; chapter has ${data.verses.length})`);
  for (const v of shown) console.log(v.v, v.t);
}
