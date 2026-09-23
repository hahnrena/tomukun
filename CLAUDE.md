# Tomukun — Website Revamp

## Project summary
Rebuild the website for **Tomukun**, a Korean restaurant group in Ann Arbor, MI, operating two adjacent concepts on E. Liberty St:

- **Tomukun Korean BBQ** — tabletop-grill Korean BBQ, opened 2014
- **Tomukun Noodle Bar** — ramen / noodle comfort food, opened 2010 (the original location)

Current site: http://tomukun.com/ (dated, needs a full visual and structural overhaul).

Design direction: **model the new site on https://www.mujoatl.com/** — specifically the way Mujō (a one-Michelin-star Atlanta sushi restaurant) splits its identity into two dining experiences, "Sushi Bar" and "Koshitsu Counter," each with its own dedicated section/page but unified under one brand shell. Tomukun should do the same with "Korean BBQ" and "Noodle Bar."

> Note: mujoatl.com is a heavily art-directed, low-text, image-first Squarespace-style site (minimal copy, full-bleed photography, elegant serif type, dark/moody palette, generous whitespace, subtle scroll animation). Treat it as a **tone and structure reference**, not a template to literally clone — Tomukun is a casual/contemporary Korean spot, not fine dining, so the copy should be warmer and more approachable while keeping the same "two distinct experiences, one brand" architecture and the sense of restraint/polish.

---

## Reference sites
- **Mujō (structure/design inspiration):** https://www.mujoatl.com/
- **Current Tomukun site (content source, being replaced):** http://tomukun.com/

---

## Site architecture

Mirror Mujō's pattern: a brand landing page that introduces the two concepts, then a dedicated page (or clearly demarcated section) per concept.

1. **Home / Landing**
   - Full-bleed hero (rotating or single image) establishing the Tomukun brand
   - Short brand statement (who Tom Yon is, the family/Korean-American story, Ann Arbor roots — see Content below)
   - Two large, visually distinct entry points/tiles: **"Korean BBQ"** and **"Noodle Bar"** — styled like Mujō's split between Sushi Bar / Koshitsu Counter (large image + concept name + one-line description + "Explore" / "View Menu" link)
   - Footer with both locations' address, hours, phone, social links

2. **Korean BBQ page**
   - Hero image (tabletop grilling)
   - Concept description: tabletop BBQ, choose-your-own marinated meats (bulgogi, galbi, spicy pork), banchan, rice bowls, soups/stews, Dolsot Bibimbop, Asian draft beer & cocktails
   - Menu section (see Menu content below) or link to menu
   - Hours, happy hour callout (Mon–Thu 2–5pm, 20% off alcohol)
   - "Order Now" button (non-functional placeholder — see Constraints)
   - "Reserve a Table" button (can also be non-functional placeholder unless told otherwise)
   - Address/map embed: 505 E. Liberty St, Ann Arbor, MI 48104

3. **Noodle Bar page**
   - Hero image (ramen bowl / noodle dish)
   - Concept description: comfort noodle food rooted in Tom Yon's Korean-American upbringing — ramen, jajangmyun, quick/casual, some vegetarian options
   - Menu section or link to menu
   - Hours
   - "Order Now" button (non-functional placeholder)
   - Address (same block, adjacent storefront on E. Liberty St)

4. **About page**
   - Story of founder Tom Yon (Korean-American, Michigan State grad, opened Noodle Bar in 2010, expanded to Korean BBQ next door in 2014)
   - Brand philosophy: modern, minimalistic, contemporary take on Korean comfort food and BBQ

5. **Contact / Location**
   - Map, address, phone, parking note (street parking / no dedicated lot — verify), contact form (non-functional or mailto link — confirm with user)

6. **Shared nav/footer** across all pages: logo, "Korean BBQ" / "Noodle Bar" links, About, Contact, hours, social icons, "Order Now" (non-functional)

---

## Content reference (pulled from public sources — verify/replace with client-provided copy where possible)

**Location:** 505 E. Liberty St, Ann Arbor, MI 48104 (cross street: Liberty & Division) — Korean BBQ and Noodle Bar are adjacent storefronts at/near this address.

**Korean BBQ**
- Tabletop grills; guests grill their own marinated meats (bulgogi, galbi, spicy pork) with server assistance
- Banchan (Korean side dishes) including kimchi, fishcakes
- Rice bowls, soups, stews; Dolsot Bibimbop (sizzling stone bowl) is a signature dish
- Asian draft beer, cocktails, full bar; corkage fee available
- Happy Hour: Mon–Thu, 2:00–5:00 PM, 20% off alcohol
- Vibe: modern, dark wood, casual/contemporary — described by founder as "a lot more casual, a lot more minimalistic" than traditional Korean BBQ

**Noodle Bar**
- Founded 2010 by Tom Yon as Ann Arbor's take on the LA/NYC noodle-bar concept
- Comfort food inspired by his parents' home cooking as a second-generation Korean American
- Menu highlights: ramen, jajangmyun (noodles in sweet black bean sauce with pork), curry dishes; items marked vegetarian-adaptable
- Stark, contemporary interior feel

**Brand/founder story**
- Owner: Tom Yon, Michigan State University grad (economics), opened Noodle Bar in 2010, expanded with Korean BBQ next door in 2014 after a neighboring space became available
- Personal connection to Korean BBQ from family tradition growing up

*(All of the above is drawn from press/review sources and third-party listings, not the client directly — confirm final copy, current hours, current menu items/prices, and photography with the client before publishing.)*

---

## Design system (derived from Mujō reference + Tomukun's existing casual-modern identity)

- **Layout:** full-bleed hero imagery, generous whitespace, large clean typography, minimal chrome — same restrained, editorial feel as Mujō, dialed toward "modern Korean casual" rather than "fine dining"
- **Typography:** a refined serif or high-contrast display face for headings/logo lockup, clean sans-serif for body copy
- **Color palette:** dark, moody base (charcoal/black) with warm accent tones evoking grill char and banchan — confirm exact palette with client or derive from existing Tomukun branding/photography
- **Imagery:** large, high-quality food and interior photography; each concept (BBQ vs. Noodle Bar) should have a visually distinct hero treatment so the split reads instantly, same way Mujō visually separates Sushi Bar vs. Koshitsu Counter
- **Motion:** subtle scroll-triggered fades/reveals, no heavy gimmicks
- **Responsive:** mobile-first; the two-concept split on the homepage should stack cleanly on small screens

---

## Tech stack
- **Framework:** React + Next.js
- **Styling:** styled-components
- **State management:** Redux
- **Backend/API:** Express (for any server-side needs — e.g. reservation integration, contact form handling, future ordering API)
- **Package manager:** npm
- **Hosting target:** not required for this phase
- **CMS for menu/hours updates:** TBD — flag as open question below if not using a CMS, content can live in local JSON/data files for now
- **Reservation integration:** required (see Constraints — this is a real, functional integration, unlike "Order Now"). OpenTable is currently used per third-party listings; confirm with client whether to embed OpenTable's widget/booking flow or another provider before building.

---

## Hours (confirmed by client — same for both concepts unless told otherwise)

| Day | Hours |
|---|---|
| Monday | 11:30 AM – 9:30 PM |
| Tuesday | 11:30 AM – 9:30 PM |
| Wednesday | 11:30 AM – 9:30 PM |
| Thursday | 11:30 AM – 9:30 PM |
| Friday | 11:30 AM – 9:30 PM |
| Saturday | 11:30 AM – 9:30 PM |
| Sunday | 11:30 AM – 9:30 PM |

Open daily, 11:30 AM–9:30 PM. Use this in place of any hours pulled from third-party listings elsewhere in this doc (e.g. earlier OpenTable-sourced hours should be treated as superseded). Happy Hour (Mon–Thu, 2–5 PM, 20% off alcohol) is still unconfirmed by the client and should stay flagged until verified.

## Placeholders (client will supply real assets later)

Menus, photography, and brand assets are **not yet available**. Build the site fully with placeholders so the client can drop in real content without refactoring. Everything below should be structured, swappable, and clearly marked.

### Menu content
- Store menu data in `/data/menus/korean-bbq.json` and `/data/menus/noodle-bar.json` (local JSON for now — swap for a CMS later if requested).
- Use a stable schema so real data drops in cleanly:
  ```json
  {
    "concept": "Korean BBQ",
    "sections": [
      {
        "name": "PLACEHOLDER — Section Name",
        "items": [
          { "name": "PLACEHOLDER — Item Name", "description": "PLACEHOLDER — description", "price": null }
        ]
      }
    ]
  }
  ```
- Fill with clearly-labeled dummy entries (prefix every string with `PLACEHOLDER —`) so nothing fake reads as real. Leave `price` as `null` rather than inventing numbers.
- The third-party-sourced dishes listed in Content reference (bulgogi, galbi, jajangmyun, Dolsot Bibimbop, etc.) can be used as *illustrative* placeholder item names, but must stay marked as unverified and must not carry prices.
- Menu components should render gracefully from an empty or partial JSON file (no crashes, no empty layout holes).

### Photography / imagery
- Put all image placeholders in `/public/images/` with descriptive, final-intent filenames so swapping is a straight file replacement:
  - `hero-home.jpg`, `hero-korean-bbq.jpg`, `hero-noodle-bar.jpg`
  - `bbq-grill-01.jpg`, `bbq-interior-01.jpg`, `noodle-ramen-01.jpg`, `noodle-interior-01.jpg`
  - `about-founder.jpg`, `og-image.jpg`
- Use neutral solid-color or gray placeholder images at the correct aspect ratios (don't pull stock photos of other restaurants, and don't use photos scraped from mujoatl.com or any third party).
- Wrap images in a single `<Image>` wrapper component using `next/image` with a `placeholder="blur"` or skeleton fallback, so real photos inherit sizing/loading behavior automatically.
- Keep a `/public/images/README.md` listing each required image, its purpose, and recommended dimensions/aspect ratio for the client.

### Brand assets (logo, color, type)
- Logo: `/public/brand/logo.svg`, `logo-mark.svg`, `favicon.ico` — use a simple text-based "TOMUKUN" wordmark placeholder until real files arrive.
- Define **all** colors and fonts as tokens in a single styled-components theme file (`/styles/theme.js`) — no hardcoded hex values or font names anywhere in components. Mark the current values as provisional:
  ```js
  // PLACEHOLDER palette — replace with client brand colors
  export const theme = {
    colors: { background: '#111111', surface: '#1b1b1b', text: '#f5f2ec', accent: '#c1440e', muted: '#8a8378' },
    fonts: { display: "'PLACEHOLDER Serif', Georgia, serif", body: "'PLACEHOLDER Sans', system-ui, sans-serif" }
  };
  ```
- Load fonts via `next/font` from a single config file so swapping typefaces is a one-line change.

### General placeholder rules
- Every placeholder gets a `{/* TODO: replace with client-provided … */}` or `// TODO:` comment at the point of use.
- Keep a running `PLACEHOLDERS.md` at the repo root listing every placeholder asset/content file and what the client needs to supply for each.

---

## Constraints
- **"Order Now" buttons must be present but non-functional** for now — style them as real CTAs (correct placement, hover states, etc.) but they should not link out, submit, or trigger any action yet. Use `href="#"` / disabled state / placeholder handler and leave a `// TODO: wire up online ordering` comment in code.
- **Reservation integration must be functional** — unlike "Order Now," the "Reserve a Table" flow should be built out for real (embedded booking widget or a working booking form/API via the Express backend). Confirm provider (OpenTable vs. other) before implementation — see open questions.
- Do not fabricate current menu items or prices as final/authoritative — the menu content above is from third-party sources (reviews, OpenTable listings) and should be flagged for client confirmation, not treated as ground truth. Hours are now confirmed (see table above).
- Keep Korean BBQ and Noodle Bar visually distinct but clearly part of one shared Tomukun brand (per the Mujō two-experience model).

---

## Open questions for the user
1. Which reservation provider should "Reserve a Table" use — OpenTable (currently in use per third-party listings), a different provider, or a custom booking flow built on the Express backend?
2. Is Happy Hour (Mon–Thu, 2–5 PM, 20% off alcohol) still accurate, and does it apply to both concepts or just Korean BBQ?
3. Do you want a CMS for menu updates eventually, or is the local JSON approach fine long-term?
4. Any copy you already have for an "About" / founder story section, or should we draft one from the story above?

*(Menus, photography, and brand assets are intentionally stubbed out — see Placeholders above. Drop them in whenever you're ready.)*