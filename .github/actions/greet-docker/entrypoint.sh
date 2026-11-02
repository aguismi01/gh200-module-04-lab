#!/bin/sh
set -eu

who="${1:-}"
if [ -z "$who" ]; then
  echo "::error::Input who is required"
  exit 1
fi

greeting="Hello, $who"
printf '%s\n' "$greeting"
printf 'greeting=%s\n' "$greeting" >> "$GITHUB_OUTPUT"