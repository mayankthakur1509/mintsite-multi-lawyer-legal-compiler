import fs from "node:fs";
import path from "node:path";

async function loadIngest() {
  const url = new URL("../roi-hub/ingest.ts", import.meta.url).href;
  const mod: any = await import(url);
  return mod.ingest ?? mod.default;
}

async function main() {
  const samplePath = path.resolve("docs/examples/event_sample.json");
  if (!fs.existsSync(samplePath)) throw new Error(`Missing: ${samplePath}`);

  const sample = JSON.parse(fs.readFileSync(samplePath, "utf8"));

  const ingest = await loadIngest();
  const out = ingest(sample);

  if (!out?.ok) throw new Error("ingest did not return ok:true");

  console.log("✓ SMOKE PASS - event ingested successfully");
  console.log("  contact_id:", sample.contact_id);
  console.log("  event_type:", sample.event_type);
  console.log("  trace_id:", sample.trace_id);
}

main().catch((e) => {
  console.error("✗ SMOKE FAIL:", e?.message || e);
  process.exit(1);
});
