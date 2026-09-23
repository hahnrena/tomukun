// Shared brand/location data used across pages, nav, and footer.
// TODO: replace placeholder phone/email/social values with client-provided details.
export const siteInfo = {
  brandName: 'Tomukun',
  address: {
    line1: '505 E. Liberty St',
    line2: 'Ann Arbor, MI 48104',
    crossStreet: 'Liberty & Division',
    mapQuery: '505 E. Liberty St, Ann Arbor, MI 48104',
  },
  email: 'info@tomukun.com',
  hours: [
    { day: 'Monday', time: '11:30 AM – 9:30 PM' },
    { day: 'Tuesday', time: '11:30 AM – 9:30 PM' },
    { day: 'Wednesday', time: '11:30 AM – 9:30 PM' },
    { day: 'Thursday', time: '11:30 AM – 9:30 PM' },
    { day: 'Friday', time: '11:30 AM – 9:30 PM' },
    { day: 'Saturday', time: '11:30 AM – 9:30 PM' },
    { day: 'Sunday', time: '11:30 AM – 9:30 PM' },
  ],
  // Confirmed applying to Korean BBQ only — see CLAUDE.md open questions.
  happyHour: {
    concept: 'Korean BBQ',
    days: 'Mon–Thu',
    time: '2:00–5:00 PM',
    detail: '20% off alcohol',
    // TODO: verify this promo is still active with the client before publishing.
    verified: false,
  },
  social: {
    instagram: 'https://www.instagram.com/tomukuna2/?hl=en',
  },
  // TODO: confirm parking details with client (street parking / no dedicated lot per CLAUDE.md)
  parkingNote: 'PLACEHOLDER — street parking nearby; no dedicated lot (unconfirmed, verify with client).',
};

export const concepts = {
  koreanBbq: {
    slug: 'korean-bbq',
    name: 'Korean BBQ',
    tagline: 'Tabletop grilling, done casual.',
    description:
      "Grill your own marinated meats tableside — bulgogi, galbi, spicy pork — alongside banchan, rice bowls, and stews. Modern, dark-wood dining with a full bar and an easy, unfussy take on Korean BBQ.",
    href: '/korean-bbq',
    orderUrl: 'https://toast.app/r/tomukunbbq/order',
    phone: '(734) 369-2602',
    facebook: 'https://www.facebook.com/tomukunkoreanbbq/',
    openTableUrl: 'https://www.opentable.com/r/tomukun-korean-barbeque-ann-arbor',
    drinksMenuUrl: '/menus/korean-bbq-drinks-menu.pdf',
    lunchMenuUrl: '/menus/korean-bbq-lunch-menu.pdf',
  },
  noodleBar: {
    slug: 'noodle-bar',
    name: 'Noodle Bar',
    tagline: 'Comfort noodles, Ann Arbor’s original.',
    description:
      'Ramen and noodle comfort food rooted in founder Tom Yon’s Korean-American upbringing. Quick, casual, and where the Tomukun story started in 2010.',
    href: '/noodle-bar',
    orderUrl: 'https://order.toasttab.com/online/tomukunnoodlebar',
    phone: '(734) 995-8668',
    facebook: 'https://www.facebook.com/p/Tomukun-Noodle-Bar-100063564281436/',
  },
};

export default siteInfo;
