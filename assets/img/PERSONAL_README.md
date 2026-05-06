# Image assets — replace placeholders with real files

The SVG files in this folder are **build-safe placeholders** so the site renders out of the box. Swap them for real images at your convenience.

| Placeholder | Replace with | Used by |
|---|---|---|
| `prof_pic.svg` | `prof_pic.jpg` (square, ≥800×800) | `_pages/about.md` — front-matter `profile.image` |
| `aicosmos_cover.svg` | `aicosmos_cover.jpg` (16:10, ≥1200×750) | `_projects/1_aicosmos.md`, home featured-projects strip |
| `syll_cover.svg` | `syll_cover.jpg` — copy `syll/docs/0_1.jpeg` from the syll repo | `_projects/2_syll.md`, home featured-projects strip |
| `aei4u_cover.svg` | `aei4u_cover.jpg` — export slide 1 of `AEI4U/AEI4U海报.pptx` as PNG, then save as JPG | `_projects/3_aei4u.md`, home featured-projects strip |
| `wechat-qr.svg` | `wechat-qr.png` (240×240) | `_data/socials.yml` (uncomment `wechat_qr:`) |

## After swapping

1. Update the `image:` / `img:` front-matter field in the relevant page if you change the extension.
   - `_pages/about.md` → `image: prof_pic.jpg`
   - `_projects/*.md` → `img: assets/img/aicosmos_cover.jpg`, etc.
2. Delete the matching `*.svg` placeholder.
3. Re-run `docker compose up --build` to regenerate WebP variants.
