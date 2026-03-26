#!/bin/bash
# Auto-format code before committing

echo "Running formatters..."
uv run black . --line-length=100
uv run isort . --profile=black --line-length=100
uv run ruff check . --fix --line-length=100
uv run ruff format . --line-length=100

echo "✅ Formatting complete. Ready to commit."
