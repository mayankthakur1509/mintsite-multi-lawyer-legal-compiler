# compiler_latest_with_governance (PR #2)

A **minimum viable, governed compiler** that turns a Value Map + DEA site spec (YAML) into:
- HTML pages (Home / Diagnose / Educate / Act: Workshop / Act: VFLP)
- A versioned JSON output artifact
- A deterministic routes manifest

It includes:
- Schema hash gate in CI (governance)
- Smoke test (`bash smoke/smoke.sh`)
- Minimal tests (`pytest`)

## Quick start (local)

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt -r requirements-dev.txt

bash smoke/smoke.sh
```

## Compile a site

```bash
python -m compiler.main docs/examples/sarnosites_v0.yaml dist/sarnosites
```

Outputs:
- `dist/<site_id>/pages/*.html`
- `dist/<site_id>/site_output.json`
- `dist/<site_id>/routes.json`

## Governance
- The output schema is locked by SHA256:
  - `compiler/schema/output_v3_2.schema.sha256`
- CI fails if the schema changes without updating the lock file.
