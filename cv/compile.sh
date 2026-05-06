#!/usr/bin/env bash
# Compile cv_en.tex and cv_zh.tex into cv_en.pdf and cv_zh.pdf via XeLaTeX.
# Then optionally copy them into ../assets/pdf/ so the website can link them.

set -euo pipefail
cd "$(dirname "$0")"

if ! command -v xelatex >/dev/null 2>&1; then
  echo "✗ xelatex not found. Install TeX Live (https://tug.org/texlive/)."
  exit 1
fi

for src in cv_en.tex cv_zh.tex; do
  echo "▶ Compiling $src ..."
  xelatex -interaction=nonstopmode -halt-on-error "$src" >/dev/null
  xelatex -interaction=nonstopmode -halt-on-error "$src" >/dev/null   # 2nd pass for cross-refs
done

# Tidy up build artefacts
rm -f *.aux *.log *.out *.toc *.fls *.fdb_latexmk *.synctex.gz

echo "✓ Built cv_en.pdf and cv_zh.pdf"

# Optional: publish to the website's assets/pdf/ folder
if [[ "${1:-}" == "--publish" ]]; then
  mkdir -p ../assets/pdf
  cp cv_en.pdf ../assets/pdf/cv.pdf
  cp cv_zh.pdf ../assets/pdf/cv_zh.pdf
  echo "✓ Published to ../assets/pdf/cv.pdf and ../assets/pdf/cv_zh.pdf"
fi
