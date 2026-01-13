from typing import Dict, Any
from jsonschema import validate as js_validate
from jsonschema.exceptions import ValidationError

from .errors import CompilerError

def validate_output_schema(output: Dict[str, Any], schema: Dict[str, Any]) -> None:
    try:
        js_validate(instance=output, schema=schema)
    except ValidationError as e:
        raise CompilerError(f"Output schema validation failed: {e.message}") from e

def validate_minimum_input(doc: Dict[str, Any]) -> None:
    site = doc.get("site") or {}
    hero = doc.get("hero") or {}
    if not site.get("id"):
        raise CompilerError("Missing site.id")
    if not site.get("domain"):
        raise CompilerError("Missing site.domain")
    if not hero.get("headline"):
        raise CompilerError("Missing hero.headline")
    if not hero.get("subhead"):
        raise CompilerError("Missing hero.subhead")
    if not isinstance(doc.get("pages"), list) or not doc["pages"]:
        raise CompilerError("Missing pages[]")
