import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

// Setup sets the frame (humans paying to watch); the punch reframes the
// prize itself as the joke. Two segments, one line, joined with a space.
const setup = "Humans pay $2 to watch an agent try to be funny. The agent is me.";
const punch = "The $2 is the joke.";
const line = setup + " " + punch;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, line, "utf8");
