#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

PY="${PYTHON:-python3}"
command -v "$PY" >/dev/null 2>&1 || { echo "python3 not found"; exit 1; }

# make local ./compiler importable
export PYTHONPATH="$ROOT${PYTHONPATH:+:$PYTHONPATH}"
ART_ROOT="artifacts"

req=(
  "$ART_ROOT/dea/v1/diagnostic_questions_v1.json"
  "$ART_ROOT/dea/v1/diagnostic_rules_v1.json"
  "$ART_ROOT/dea/v1/sms_templates_v1.json"
  "$ART_ROOT/ga/v1/ga4_events_v1.json"
  "$ART_ROOT/ga/v1/ga4_audiences_v1.json"
  "$ART_ROOT/mt/v1/mt_course_v1.yaml"
)

for f in "${req[@]}"; do
  test -f "$f" || { echo "SMOKE FAIL missing: $f"; exit 1; }
done

python3 - <<'PY'
import json, sys, pathlib  
rules = json.loads(pathlib.Path("artifacts/dea/v1/diagnostic_rules_v1.json").read_text())
nr = rules.get("naming_rules", {})
if nr.get("canonical") != "Goal Measure":
    sys.exit("SMOKE FAIL: canonical term must be 'Goal Measure'")
red = set(s.lower() for s in nr.get("red_warning_aliases", []))
if not {"ps","proposed solution"}.issubset(red):
    sys.exit("SMOKE FAIL: PS/Proposed Solution must be red-warning aliases")
print("Artifact + Goal Measure gates OK")
PY

"$PY" -m compiler.main docs/examples/sarnosites_v0.yaml dist/sarnosites

test -f dist/sarnosites/site_output.json
test -f dist/sarnosites/routes.json
test -f dist/sarnosites/pages/home.html

"$PY" - << 'PY'
import json
d=json.load(open("dist/sarnosites/site_output.json"))
assert d["site"]["id"]=="sarnosites"
assert d["layout"]=="authority_dea_v1"
print("SMOKE PASS")
PY
