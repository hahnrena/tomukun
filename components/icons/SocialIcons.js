// Simple, generic glyphs for social links — original minimalist shapes, not
// traced from any platform's official trademarked logo artwork.

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.15" cy="6.85" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M13.6 20.6v-6.3h2.1l.3-2.5h-2.4V10.1c0-.72.2-1.22 1.24-1.22h1.33V6.65c-.23-.03-1.02-.1-1.94-.1-1.92 0-3.24 1.17-3.24 3.33v1.86H8.9v2.5h2.15v6.3" />
    </svg>
  );
}
