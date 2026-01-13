from pathlib import Path
import json

def test_compile_min():
    import yaml
    from compiler.normalize import normalize_input
    from compiler.validate import validate_minimum_input
    from compiler.compile import compile_site

    schema = json.loads(Path("compiler/schema/output_v3_2.schema.json").read_text(encoding="utf-8"))
    doc = yaml.safe_load(Path("docs/examples/sarnosites_v0.yaml").read_text(encoding="utf-8"))
    doc = normalize_input(doc)
    validate_minimum_input(doc)

    out_dir = Path("dist/test_sarnosites")
    compile_site(doc, out_dir, schema)

    assert (out_dir / "site_output.json").exists()
    assert (out_dir / "routes.json").exists()
    assert (out_dir / "pages" / "home.html").exists()
