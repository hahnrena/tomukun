// Real, client-confirmed menu images (not placeholders).

// Korean BBQ Drinks Menu — paged through via components/MenuPager.js on the
// "Drinks Menu" tab (components/MenuTabs.js), one image per page, with
// prev/next controls instead of an embedded PDF.
export const koreanBbqDrinksMenuImages = [
  { src: '/images/menu/DrinksMenuPage1.png', alt: 'Tomukun Korean BBQ drinks menu, page 1' },
  { src: '/images/menu/DrinksMenuPage2.png', alt: 'Tomukun Korean BBQ drinks menu, page 2' },
  { src: '/images/menu/DrinksMenuPage3.png', alt: 'Tomukun Korean BBQ drinks menu, page 3' },
];

// Korean BBQ Lunch Menu — same MenuPager treatment as Drinks, just a single
// page so no prev/next arrows render (MenuPager hides them when there's only
// one image).
export const koreanBbqLunchMenuImages = [
  { src: '/images/menu/LunchMenuPage.png', alt: 'Tomukun Korean BBQ lunch menu' },
];

// Noodle Bar menu, rendered directly on the page via components/MenuImages.js.
// (Korean BBQ's dinner menu instead uses the structured JSON in
// data/menus/korean-bbq.json + components/MenuSection.js — see PLACEHOLDERS.md.)
//
// To add the actual Noodle Bar menu photos:
//   1. Drop the image files into /public/images/menu/, named:
//        noodle-bar-menu-1.jpg, noodle-bar-menu-2.jpg, ... (one per page/photo)
//   2. List them below in display order, with a short descriptive alt for
//      accessibility (e.g. "Tomukun Noodle Bar menu, page 1 of 2 — mains").
//
// See public/images/README.md for recommended dimensions.

export const noodleBarMenuImages = [
  // { src: '/images/menu/noodle-bar-menu-1.jpg', alt: 'Tomukun Noodle Bar menu, page 1' },
];
