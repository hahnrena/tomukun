// PLACEHOLDER palette & type — replace with client brand colors/fonts once supplied.
// TODO: replace with client-provided brand colors, fonts, and spacing scale.
export const theme = {
  colors: {
    background: '#111111',
    surface: '#1b1b1b',
    surfaceAlt: '#232120',
    text: '#f5f2ec',
    textMuted: '#c9c3b8',
    muted: '#8a8378',
    accent: '#c1440e',
    accentMuted: '#8f3410',
    border: 'rgba(245, 242, 236, 0.12)',
    overlay: 'rgba(10, 9, 8, 0.55)',
  },
  fonts: {
    // PLACEHOLDER Serif -> swap for client display face (e.g. a licensed serif/display font)
    display: "'PLACEHOLDER Serif', Georgia, 'Times New Roman', serif",
    // PLACEHOLDER Sans -> swap for client body face
    body: "'PLACEHOLDER Sans', system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1200px',
  },
  maxWidth: '1440px',
};

export default theme;
