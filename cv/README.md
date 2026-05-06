# CV — Bo Zhang (张博)

A bilingual academic CV in LaTeX, styled to match the personal-site web design philosophy: text-driven, single-accent (deep navy), Charter-and-Helvetica-Neue typography for English / Songti-and-PingFang for Chinese, no icons or color blocks.

Single source of truth, two compiled PDFs.

## Files

| File | Purpose |
|---|---|
| `bo-cv.sty` | Shared style package — fonts, colors, and `\cvheader` / `\cventry` / `\cvpub` / `\cvrow` macros |
| `cv_en.tex` | English version |
| `cv_zh.tex` | Chinese version (中文简历) |
| `compile.sh` | Convenience build script |

## Compile

Requires **XeLaTeX** (TeX Live 2023+ or MacTeX) and these fonts (built-in on macOS):

| Role | English | Chinese |
|---|---|---|
| Body serif | Charter | Songti SC |
| Headers / sans | Helvetica Neue | PingFang SC |

```bash
cd cv/
./compile.sh                # produces cv_en.pdf and cv_zh.pdf
./compile.sh --publish      # ALSO copies to ../assets/pdf/cv.pdf and cv_zh.pdf
```

Or manually:

```bash
xelatex cv_en.tex && xelatex cv_en.tex
xelatex cv_zh.tex && xelatex cv_zh.tex
```

The second pass is for any cross-references; safe to skip if you don't use `\ref`.

## Linking from the website

Once compiled, expose the PDF in the navbar by editing `_data/socials.yml`:

```yaml
cv_pdf: /assets/pdf/cv.pdf
```

(That line is currently commented out because no PDF existed yet — uncomment it after the first `./compile.sh --publish`.)

For the Chinese version, link it from the about page or add a custom social entry in `socials.yml`:

```yaml
custom_social:
  logo: /assets/img/cv-cn-icon.svg
  title: CV (中文)
  url: /assets/pdf/cv_zh.pdf
```

## Editing

Most edits go in the `.tex` files. Keep `bo-cv.sty` for style changes.

The macro vocabulary is intentionally small:

| Macro | Used for |
|---|---|
| `\cvheader{Name}{Subname}{Role}{Contact}` | Top of page |
| `\cventry{Title}{Subtitle}{Right column}{Body or empty}` | Education / projects entries |
| `\cvpub{Title}{Authors}{Venue}{Links}` | Publications (mark current author with `\textbf{...}`) |
| `\cvrow{Label}{Content}` | Skills / languages / awards items |
| `\cvsep` | The grey `|` separator used in lists and venue lines |
| `\section{...}` | Auto-styled with the navy bold header + thin grey rule |

## Design notes

- **Body serif: Charter** — Knuth's choice for *Concrete Mathematics*. Restrained, academic, and not Times-the-default. Built into macOS.
- **Section headers: Helvetica Neue bold + thin grey rule below.** Title Case, not ALL CAPS — a softer hierarchy than Awesome-CV's signature look.
- **One accent color: deep navy (`#1f3a5f`).** Same hue used in the personal-site nav and the AICosmos cover. Hyperlinks, name, and section rules pick it up; nothing else competes.
- **No icons in the contact line — text labels separated by `|`.** Deliberate; lets the page read like prose, not a dashboard.
- **A4 paper, 0.85"–0.95" margins, 11pt body, 1.05 leading.** Generous whitespace, comfortable for long publication lists.

## Why not Awesome-CV / moderncv directly?

- **Awesome-CV** has a recognizable visual signature (centred big bold name, FontAwesome icon line, ALL-CAPS section bars). Anyone who has read CS CVs spots it immediately. Fine in a vacuum, but wrong if you've designed a personal site to *avoid* template-look. We borrow Awesome-CV's macro architecture (separate `.cls` from content), not its visuals.
- **moderncv** is older and the typography looks dated; it also doesn't make CJK setup ergonomic.
- This style stays closer to a hand-set academic CV (think Knuth, Tufte) — quiet, content-first.

## Excluding from the Jekyll build

`cv/` is added to `_config.yml`'s `exclude:` list so the `.tex` source files are not copied into the published site. Only the compiled PDFs (under `assets/pdf/`) are public.
