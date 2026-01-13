import json
import sys
from pathlib import Path

from .errors import CompilerError
from .normalize import normalize_input
from .validate import validate_minimum_input
from .compile import compile_site

try:
    import yaml  # pyyaml
except ImportError:
    yaml = None

def die(msg: str, code: int = 2):
    print(f"ERROR: {msg}", file=sys.stderr)
    raise SystemExit(code)

def load_yaml(path: Path) -> dict:
    if yaml is None:
        die("Missing dependency: pyyaml. Install with: pip install -r requirements.txt")
    return yaml.safe_load(path.read_text(encoding="utf-8")) or {}

def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))

def main():
    if len(sys.argv) != 3:
        die("Usage: python -m compiler.main <input.yaml> <output_dir>")

    in_path = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])

    if not in_path.exists():
        die(f"Input not found: {in_path}")

    doc = normalize_input(load_yaml(in_path))

    try:
        validate_minimum_input(doc)
        schema_path = Path(__file__).parent / "schema" / "output_v3_2.schema.json"
        schema = load_json(schema_path)
        compile_site(doc, out_dir, schema)
    except CompilerError as e:
        die(str(e))
    except Exception as e:
        die(str(e))

    print("OK")

if __name__ == "__main__":
    main()
