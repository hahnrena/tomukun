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
