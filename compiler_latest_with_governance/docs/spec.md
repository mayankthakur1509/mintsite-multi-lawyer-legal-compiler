# Compiler v3.2 (Governed) — Spec (PR #2)

## Purpose
Compile a **DEA site spec** (Value Map + Pillars + Offers) into:
1) HTML pages for an Authority Funnel (Home, Diagnose, Educate, Workshop, VFLP)
2) A versioned JSON output artifact
3) A routes manifest

## Input
A single YAML file. See:
- `docs/examples/sarnosites_v0.yaml`
- `docs/examples/wiggmax_v0.yaml`

Required (minimum):
- `schema_version` (string, default "3.2")
- `site.id` (string)
- `site.domain` (string)
- `hero.headline` (string)
- `hero.subhead` (string)
- `pillars[]` (list of {id,title,bullets[]})
- `pages[]` (list of {id,slug,title,sections[]})

## Output
- `site_output.json` (validated against `compiler/schema/output_v3_2.schema.json`)
- `pages/*.html`
- `routes.json`

## CLI Contract
`python -m compiler.main <input.yaml> <output_dir>`

Exit codes:
- 0 = success
- 2 = validation / runtime error

## Governance (Schema Hash Gate)
Schema file MUST NOT change without updating:
- `compiler/schema/output_v3_2.schema.sha256`
