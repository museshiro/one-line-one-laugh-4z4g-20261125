// One Line, One Laugh — redo entry.
// Design: dry ironic loop. A sleep app that fines late-night checks gets
// deleted, and the sleeplessness stays — only the fee is gone. The twist
// lands on the last two words ("for free"), letting the judge complete it.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "My sleep app fines me $3 if I check it after midnight, so I deleted it and now I lie awake for free.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
