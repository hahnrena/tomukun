# Placeholders — what the client needs to supply

Everything below is a stand-in so the site can be built and previewed today. Replacing
any of these is a drop-in swap — no component refactoring required.

## Photography
Location: `/public/images/`. Full list, purpose, and required dimensions: see
[`public/images/README.md`](public/images/README.md).
- `hero-home.jpg`, `hero-korean-bbq.jpg`, `hero-noodle-bar.jpg` — **real client photos**, already in place.
- Still placeholders: `bbq-grill-01.jpg`, `bbq-interior-01.jpg`, `noodle-ramen-01.jpg`,
  `noodle-interior-01.jpg`, `about-founder.jpg`, `og-image.jpg`

## Brand assets
- `/public/brand/logo.svg` — text wordmark placeholder, replace with final logo file.
- `/public/brand/logo-mark.svg` — monogram placeholder, replace with final mark.
- `/public/brand/favicon.ico` — generated placeholder, replace with final favicon.
- `/styles/theme.js` — `colors` and `fonts` tokens are provisional. All colors/fonts
  are defined here only (no hardcoded values in components), so this is the single
  file to update once brand guidelines are final.

## Menu content
The two concepts use different approaches, per client direction:

**Korean BBQ** — real, confirmed content. `data/menus/korean-bbq.json` holds the
current dinner menu (categories, items, Korean names, prices), transcribed from
the client's live menu at tomukunbbq.framer.website/menu on 2026-09-23, rendered
as structured text by `components/MenuSection.js`. Each section has a real dish
photo as a header image (from the photo shoot in `/public/images/menu/` — see
[`public/images/README.md`](public/images/README.md) for the file-to-section
mapping). No `PLACEHOLDER —` labeling — treated as confirmed, not draft, content.
- Re-check against the live site before launch in case the menu/prices change.
- Stir Fry section has no header photo yet.
- `/data/menus/noodle-bar.json` (unrelated concept) is still the old
  third-party-sourced placeholder data — see below.

**Noodle Bar** — still awaiting real content. Renders real, client-supplied menu
*images* directly (see `components/MenuImages.js`) rather than structured text.
- Location: `/public/images/menu/` — see
  [`public/images/README.md`](public/images/README.md) for naming convention and
  the `data/menus/images.js` file list.
- **Awaiting the actual image files** — `data/menus/images.js` currently has an
  empty array, so the page shows "Menu coming soon." Drop the files in and list
  them there to go live. No `PLACEHOLDER —` labeling needed once added — treated
  as confirmed client content.
- Note: an image-only menu isn't machine-readable (no text for SEO/screen readers
  beyond the alt text) — flagging in case that tradeoff needs revisiting later,
  e.g. moving Noodle Bar to the same structured-text approach as Korean BBQ once
  its real menu content is available.

## Copy
- Homepage brand statement ([pages/index.js](pages/index.js))
- Korean BBQ / Noodle Bar concept descriptions ([pages/korean-bbq.js](pages/korean-bbq.js), [pages/noodle-bar.js](pages/noodle-bar.js))
- About page founder story ([pages/about.js](pages/about.js)) — drafted from press/review
  sources per CLAUDE.md; needs client sign-off or replacement copy.

## Contact & location details
`/data/site.js`:
- `phone`, `email` — placeholder values, confirm current contact info.
- `social.instagram`, `social.facebook` — placeholder URLs, confirm current handles.
- `parkingNote` — unconfirmed, verify with client.
- `happyHour.verified: false` — Happy Hour (Mon–Thu, 2–5 PM, 20% off alcohol, Korean BBQ
  only) is shown on the Korean BBQ page but flagged as unconfirmed until the client verifies.

## Reservations
- `/data/site.js` → `reservations.openTableRestaurantId` is a placeholder value.
  [components/ReservationWidget.js](components/ReservationWidget.js) renders a live OpenTable
  booking calendar automatically once a real Restaurant ID is supplied; until then it shows
  a "call to reserve" fallback.

## Order Now
- No shared nav "Order Now" button — Korean BBQ and Noodle Bar are separate
  restaurants, so each concept page has its own instead.
- **Now live** (no longer a placeholder) — each button links out to the concept's
  Toast ordering page via `orderUrl` in [data/site.js](data/site.js):
  Korean BBQ → https://toast.app/r/tomukunbbq/order,
  Noodle Bar → https://order.toasttab.com/online/tomukunnoodlebar.

## Contact form backend
- [server/routes/contact.js](server/routes/contact.js) currently logs submissions to an
  in-memory array/console — swap in real email delivery or persistence before launch.

## Dependency security
- Pinned to Next.js 14.2.35 (latest 14.x patch). One critical advisory
  (GHSA-2xp9-vwfh-vxw4, AVIF image-optimization RCE) is only fixed in Next 16, a breaking
  major upgrade not attempted here. This site doesn't currently serve AVIF images, but
  plan a tested Next 16 migration before production launch. Run `npm audit` to recheck.
