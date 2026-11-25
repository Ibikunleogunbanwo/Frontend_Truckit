import { readFile, writeFile, mkdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { resolve } from "node:path";

// Only sync a checkout already refreshed by its owner. No network or contract edits.
const hub = resolve(process.argv[2] || "../Hub_Truckit");
const contract = await readFile(resolve(hub, "contract/openapi.yaml"));
const revision = execFileSync("git", ["-C", hub, "rev-parse", "HEAD"], {
  encoding: "utf8",
}).trim();
const dirty = execFileSync(
  "git",
  ["-C", hub, "status", "--porcelain", "--", "contract/openapi.yaml"],
  { encoding: "utf8" },
).trim();
if (dirty)
  throw new Error(
    "Refusing to sync an uncommitted Hub contract. Commit or restore it first.",
  );
await mkdir("contract", { recursive: true });
await writeFile("contract/openapi.yaml", contract);
await writeFile(
  "contract/source.json",
  JSON.stringify(
    {
      repository: "https://github.com/Ibikunleogunbanwo/Hub_Truckit",
      revision,
      path: "contract/openapi.yaml",
      sha256: createHash("sha256").update(contract).digest("hex"),
    },
    null,
    2,
  ) + "\n",
);
console.log(`Synced Hub contract at ${revision}. Run npm run api:generate.`);
