// TODO: set NEXT_PUBLIC_API_URL for production once the Express API is deployed.
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001';

export async function submitContactForm(payload) {
  const res = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || 'Failed to submit contact form.');
  }

  return res.json();
}
