#!/usr/bin/env bash
set -e

SITE="$1"

if [ -z "$SITE" ]; then
  echo "Usage: bash scripts/compile_one.sh <site>"
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

python -m compiler_latest_with_governance.compiler.main \
  "$ROOT_DIR/yaml/sites/$SITE.yaml" \
  "$ROOT_DIR/dist/$SITE/site"
