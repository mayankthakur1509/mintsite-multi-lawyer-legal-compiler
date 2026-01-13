import json
from pathlib import Path
from typing import Dict, Any

from .layouts.authority_dea_v1 import render_page
from .validate import validate_output_schema

def build_routes(pages):
    return [{"id": p["id"], "slug": p["slug"], "title": p["title"], "file": f"pages/{p['id']}.html"} for p in pages]

def compile_site(doc: Dict[str, Any], output_dir: Path, output_schema: Dict[str, Any]) -> Dict[str, Any]:
    site = doc.get("site") or {}
    pages = doc.get("pages") or []

    output_dir.mkdir(parents=True, exist_ok=True)
    pages_dir = output_dir / "pages"
    pages_dir.mkdir(parents=True, exist_ok=True)

    for p in pages:
        (pages_dir / f"{p['id']}.html").write_text(render_page(site, doc, p), encoding="utf-8")

    routes = build_routes(pages)
    (output_dir / "routes.json").write_text(json.dumps(routes, indent=2), encoding="utf-8")

    output = {
        "schema_version": str(doc.get("schema_version", "3.2")),
        "site": {"id": site.get("id"), "domain": site.get("domain"), "theme": site.get("theme", "")},
        "layout": "authority_dea_v1",
        "content": {
            "hero": doc.get("hero") or {},
            "features": doc.get("features") or [],
            "pillars": doc.get("pillars") or [],
            "offers": doc.get("offers") or {},
            "pages": pages,
        },
        "routes": routes,
    }

    validate_output_schema(output, output_schema)
    (output_dir / "site_output.json").write_text(json.dumps(output, indent=2), encoding="utf-8")
    return output
