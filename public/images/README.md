# Image placeholders — replace before launch

Files marked "real photo" below have already been swapped in. The rest are still
solid-color placeholders generated for layout purposes only — swap each one for
real photography at the same filename and aspect ratio, no component code needs
to change.

The homepage hero shows `hero-home.jpg` at rest; hovering (or keyboard-focusing)
a concept button crossfades to that concept's hero photo full-page instead. See
`components/SplitHero.js`.

| File | Purpose | Recommended dimensions | Aspect ratio |
|---|---|---|---|
| `hero-home.jpg` | **Real photo.** Homepage default background (before hover) | 1920×1080 (or larger) | 16:9 |
| `hero-korean-bbq.jpg` | **Real photo.** Korean BBQ page hero + homepage hover background | 1920×1080 (or larger) | 16:9 |
| `hero-noodle-bar.jpg` | **Real photo.** Noodle Bar page hero + homepage hover background | 1920×1080 (or larger) | 16:9 |
| `bbq-grill-01.jpg` | Korean BBQ supporting image (tabletop grilling) | 1600×1067 | 3:2 |
| `bbq-interior-01.jpg` | Korean BBQ supporting image (dining room) | 1600×1067 | 3:2 |
| `noodle-ramen-01.jpg` | Noodle Bar supporting image (ramen bowl) | 1600×1067 | 3:2 |
| `noodle-interior-01.jpg` | Noodle Bar supporting image (dining room) | 1600×1067 | 3:2 |
| `about-founder.jpg` | About page portrait of Tom Yon | 1200×1500 | 4:5 |
| `og-image.jpg` | **Real.** Social share preview (Open Graph) — `tomukun-logo.svg` wordmark centered on a dark background | 1200×630 | 1.91:1 |

## Menu images

`/public/images/menu/` holds real, client-supplied photography — all treated as
confirmed content, not placeholders (no `PLACEHOLDER —` labeling needed).

**Korean BBQ** uses a structured, text-based menu (`data/menus/korean-bbq.json`,
rendered by `components/MenuSection.js`) laid out as a 3-per-row grid of item
cards (matching tomukunbbq.framer.website/menu), each with its own blank image
slot — intentionally left empty for manual placement per the client's request.

To add a photo for an item: put the file in this folder and set `"image"` on
that item in `data/menus/korean-bbq.json` to its path (e.g.
`/images/menu/korean-bbq-shortribs.jpg`) — no component changes needed.

`korean-bbq-menu-appetizers.jpg`, `-combos.jpg`, `-meats.jpg`, `-hotpot.jpg`,
`-rice-bowls.jpg`, `-soups.jpg`, `-noodles.jpg`, `-entrees.jpg`, and the
remaining unrenamed `DSC*.jpg` / `_DSC*.jpg` files in this folder are all from
the same photo shoot — currently unused by the page (the per-section header
photo layout they were matched to was replaced by the per-item grid above) but
available as a pool to pull individual item photos from.

**Noodle Bar** instead displays scanned/photographed menu pages directly
(`data/menus/images.js`, rendered by `components/MenuImages.js`):

| File | Purpose | Recommended dimensions |
|---|---|---|
| `noodle-bar-menu-1.jpg`, `-2.jpg`, ... | Noodle Bar menu, one file per page/photo, in order | Portrait, ~2000px on the long edge, legible at full width |

After adding Noodle Bar files here, list them in `data/menus/images.js` (path +
short alt text) so they render — the component already handles any number of
images gracefully.

Notes for whoever supplies final photography:
- Hero images should work with a dark gradient overlay for legible white text — avoid busy top/bottom edges.
- Keep Korean BBQ and Noodle Bar photography visually distinct (different color temperature/mood is fine) so the two concepts read apart at a glance.
- JPEG or WebP, optimized for web (aim under ~400KB per hero image).
