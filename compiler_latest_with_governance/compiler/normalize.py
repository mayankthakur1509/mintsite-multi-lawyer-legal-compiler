import re
from typing import Dict, Any

def slugify(value: str) -> str:
    value = (value or "").strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = re.sub(r"-{2,}", "-", value).strip("-")
    return value or "page"

def normalize_input(doc: Dict[str, Any]) -> Dict[str, Any]:
    doc = dict(doc or {})
    doc.setdefault("schema_version", "3.2")

    site = dict(doc.get("site") or {})
    if not site.get("id"):
        raise ValueError("Missing required: site.id")
    if not site.get("domain"):
        raise ValueError("Missing required: site.domain")
    site.setdefault("theme", "creator")
    site.setdefault("brand", site["id"])
    doc["site"] = site

    hero = dict(doc.get("hero") or {})
    hero.setdefault("headline", "")
    hero.setdefault("subhead", "")
    doc["hero"] = hero

    doc["features"] = list(doc.get("features") or [])
    doc["pillars"] = list(doc.get("pillars") or [])
    doc["pages"] = list(doc.get("pages") or [])
    doc["offers"] = dict(doc.get("offers") or {})

    for p in doc["pages"]:
        p.setdefault("id", slugify(p.get("title", "page")))
        p.setdefault("slug", f"/{p['id']}")
        p.setdefault("title", p["id"].replace("-", " ").title())
        p.setdefault("sections", [])
    return doc
