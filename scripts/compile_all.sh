#!/usr/bin/env bash
set -e

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
YAML_DIR="$ROOT_DIR/yaml/sites"
DIST_DIR="$ROOT_DIR/dist"

echo "🚀 MintSite Compiler (all sites)"
echo "--------------------------------"

for yaml in "$YAML_DIR"/*.yaml; do
  site=$(basename "$yaml" .yaml)
  out="$DIST_DIR/$site/site"

  echo ""
  echo "🔨 Compiling $site"
  echo "   Source: $yaml"
  echo "   Output: $out"

  rm -rf "$out"
  mkdir -p "$out"

  python -m compiler_latest_with_governance.compiler.main "$yaml" "$out"
done

echo ""
echo "✅ All sites compiled successfully"
