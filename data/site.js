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
  // PLACEHOLDER — confirm current phone number with client
  phone: 'PLACEHOLDER — (734) 000-0000',
  // PLACEHOLDER — confirm current contact email with client
  email: 'PLACEHOLDER — info@tomukun.com',
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
    // PLACEHOLDER — confirm current handles with client
    instagram: 'PLACEHOLDER — https://instagram.com/tomukun',
    facebook: 'PLACEHOLDER — https://facebook.com/tomukun',
  },
  // TODO: confirm parking details with client (street parking / no dedicated lot per CLAUDE.md)
  parkingNote: 'PLACEHOLDER — street parking nearby; no dedicated lot (unconfirmed, verify with client).',
  reservations: {
    provider: 'opentable',
    // PLACEHOLDER — this is not a real OpenTable Restaurant ID. Replace with the
    // client's actual OpenTable rid (from their OpenTable for Restaurants account)
    // before launch, or the widget will fail to load a bookable calendar.
    // TODO: confirm OpenTable account / Restaurant ID with client.
    openTableRestaurantId: 'PLACEHOLDER-RID',
  },
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
  },
  noodleBar: {
    slug: 'noodle-bar',
    name: 'Noodle Bar',
    tagline: 'Comfort noodles, Ann Arbor’s original.',
    description:
      'Ramen and noodle comfort food rooted in founder Tom Yon’s Korean-American upbringing. Quick, casual, and where the Tomukun story started in 2010.',
    href: '/noodle-bar',
    orderUrl: 'https://order.toasttab.com/online/tomukunnoodlebar',
  },
};

export default siteInfo;
