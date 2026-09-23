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

// Noodle Bar Menu — same MenuPager treatment as the Korean BBQ Drinks Menu,
// one image per page with prev/next controls and a link to the full PDF.
export const noodleBarMenuImages = [
  { src: '/images/menu/NoodleMenuPage1.png', alt: 'Tomukun Noodle Bar menu, page 1: appetizers, ramen, pho, rice dishes, donburi, cold noodles, add-ons' },
  { src: '/images/menu/NoodleMenuPage2.png', alt: 'Tomukun Noodle Bar menu, page 2: udon, stir fry, beverages, beer, soju, wine, sake' },
  { src: '/images/menu/NoodleMenuPage3.png', alt: 'Tomukun Noodle Bar menu, page 3: weekday lunch specials and kids menu' },
];
