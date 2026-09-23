# Placeholders — what the client needs to supply

Everything below is a stand-in so the site can be built and previewed today. Replacing
any of these is a drop-in swap — no component refactoring required.

## Photography
Location: `/public/images/`. Full list, purpose, and required dimensions: see
[`public/images/README.md`](public/images/README.md).
- `hero-home.jpg`, `hero-korean-bbq.jpg`, `hero-noodle-bar.jpg` — **real client photos**, already in place.
- `about-founder.jpg` — **temporary stand-in, not an actual photo of Tom Yon.**
  Client supplied a food/restaurant-scene image (split BBQ grilling + ramen
  bowl, landscape) for this slot despite it not matching "founder portrait"
  content or aspect ratio (slot expects 4:5 portrait of a person) — used as
  directed, but still flagged `PLACEHOLDER —` in the alt text
  ([pages/about.js](pages/about.js)) since it isn't the real thing. Replace
  with an actual portrait of Tom Yon when available.
- Still placeholders: `bbq-grill-01.jpg`, `bbq-interior-01.jpg`, `noodle-ramen-01.jpg`,
  `noodle-interior-01.jpg`, `og-image.jpg`

## Brand assets
- `/public/brand/logo.svg` — text wordmark placeholder, replace with final logo file.
- `/public/brand/logo-mark.svg` — monogram placeholder, replace with final mark.
- `/public/brand/favicon.ico` — generated placeholder, replace with final favicon.
- `/styles/theme.js` — `colors` and `fonts` tokens are provisional. All colors/fonts
  are defined here only (no hardcoded values in components), so this is the single
  file to update once brand guidelines are final.

## Menu content
The two concepts use different approaches, per client direction:

**Korean BBQ** — real, confirmed content, now split into three tabs via
`components/MenuTabs.js` (matching tomukunbbq.framer.website/menu):
- **Dinner Menu** tab — `data/menus/korean-bbq.json` (categories, items, Korean
  names, prices, and now real item photos for all but 2 items — see below),
  rendered by `components/MenuSection.js` as a 3-per-row grid. No
  `PLACEHOLDER —` labeling on the menu text — treated as confirmed content.
  Re-check against the live site before launch in case the menu/prices change.
- **Drinks Menu** tab — pages through real menu-page images one at a time via
  `components/MenuPager.js` (prev/next arrows + a "2 / 3" counter), listed in
  `data/menus/images.js` → `koreanBbqDrinksMenuImages` and stored at
  `public/images/menu/DrinksMenuPage1.png` (`-2`, `-3`). A "prefer the full
  document?" link below the pager still points to the original
  `public/menus/korean-bbq-drinks-menu.pdf` (copied from the client's
  `Final bbq bar.pdf`) as a fallback.
- **Lunch Menu** tab — still embeds `public/menus/korean-bbq-lunch-menu.pdf`
  (copied from `Tomukun K-BBQ Lunch Menu.pdf`) inline via an iframe, with an
  "open directly" fallback link for browsers that don't render PDFs in iframes.
- To add/reorder Drinks Menu pages: drop image files in
  `public/images/menu/` and update the array in `data/menus/images.js`. To
  swap either PDF: replace the file at the same path, or repoint
  `concepts.koreanBbq.drinksMenuUrl` / `lunchMenuUrl` in
  [data/site.js](data/site.js) to a new path.
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
- `email` — placeholder value, confirm current contact info. (`phone` and
  `social.facebook` are now real, per-concept values — see `concepts.koreanBbq`
  / `concepts.noodleBar`.)
- `social.instagram` — real, shared handle for both concepts.
- `parkingNote` — unconfirmed, verify with client.
- **Hours — now real, confirmed, and differ by concept**:
  `concepts.koreanBbq.hours` = "Open daily, 11:30 AM – 9:30 PM",
  `concepts.noodleBar.hours` = "Open daily, 11:30 AM – 10:00 PM". This
  supersedes the single shared "11:30 AM–9:30 PM for both" hours in CLAUDE.md.
- **Happy Hour removed from the Korean BBQ page for now**, per client request.
  The data (`siteInfo.happyHour`) is still in `data/site.js`, just unused —
  easy to re-add to `pages/korean-bbq.js` later if it comes back.

## Reservations
- **Now live** — [components/ReservationWidget.js](components/ReservationWidget.js) is a
  "Reserve on OpenTable" button linking to the real listing at
  `concepts.koreanBbq.openTableUrl` in [data/site.js](data/site.js)
  (https://www.opentable.com/r/tomukun-korean-barbeque-ann-arbor). Korean BBQ only —
  Noodle Bar has no reservation flow per CLAUDE.md.
- This links out to OpenTable rather than embedding their iframe widget, since the
  widget needs OpenTable's numeric Restaurant ID (`rid`), which isn't available from
  the public listing URL alone. If an embedded booking calendar is wanted instead,
  get the `rid` from the client's OpenTable for Restaurants account and swap
  `ReservationWidget.js` back to the loader-script approach.

## Order Now
- No shared nav "Order Now" button — Korean BBQ and Noodle Bar are separate
  restaurants, so each concept page has its own instead.
- **Now live** (no longer a placeholder) — each button links out to the concept's
  Toast ordering page via `orderUrl` in [data/site.js](data/site.js):
  Korean BBQ → https://toast.app/r/tomukunbbq/order,
  Noodle Bar → https://order.toasttab.com/online/tomukunnoodlebar.

## Contact form backend
- **Now live** — [pages/api/contact.js](pages/api/contact.js) is a Next.js API route
  (runs as a Vercel serverless function, no separate server to deploy) that emails
  submissions to `info@tomukun.com` via [Resend](https://resend.com).
- **Requires an env var to actually send mail**: set `RESEND_API_KEY` in Vercel
  project settings (Project → Settings → Environment Variables) and in a local
  `.env.local` for dev — get a key from your Resend dashboard. Without it, the
  form fails gracefully with an error message instead of silently doing nothing.
- Optional env vars: `CONTACT_TO_EMAIL` (defaults to `info@tomukun.com`),
  `CONTACT_FROM_EMAIL` (defaults to Resend's shared test sender
  `onboarding@resend.dev` — swap to an address on a verified domain, e.g.
  `contact@tomukun.com`, once you verify `tomukun.com` in Resend; until then
  Resend will only deliver to the email address on your Resend account, not
  to `info@tomukun.com`).
- `server/` (the old Express app) is no longer used by the contact form or
  anything else in the frontend — it's dead code at this point. Left in place
  in case you still want it for a future ordering API, but safe to delete if
  not; nothing currently imports `lib/api.js`'s old `API_BASE_URL` pattern.

## Dependency security
- Pinned to Next.js 14.2.35 (latest 14.x patch). One critical advisory
  (GHSA-2xp9-vwfh-vxw4, AVIF image-optimization RCE) is only fixed in Next 16, a breaking
  major upgrade not attempted here. This site doesn't currently serve AVIF images, but
  plan a tested Next 16 migration before production launch. Run `npm audit` to recheck.
