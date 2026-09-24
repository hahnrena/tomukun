
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || 'management@tomukun.com';

// Address only. Use onboarding@resend.dev until your domain is verified.
const FROM_ADDRESS =
  process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, source } = req.body || {};

  // --- Configuration check ---
  if (!process.env.RESEND_API_KEY) {
    console.error(
      '[contact] RESEND_API_KEY is not set — email not sent.'
    );

    return res.status(500).json({
      error: 'Contact form is not configured yet.',
    });
  }

  // --- Validation ---

  if (
    typeof name !== 'string' ||
    !name.trim() ||
    name.length > 100
  ) {
    return res.status(400).json({ error: 'Invalid name' });
  }

  const emailRegex = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>]+$/;

  if (
    typeof email !== 'string' ||
    email.length > 254 ||
    !emailRegex.test(email)
  ) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (
    typeof message !== 'string' ||
    !message.trim() ||
    message.length > 5000
  ) {
    return res.status(400).json({ error: 'Invalid message' });
  }

  // --- Sanitize values used in email headers ---

  const safeName = name
    .replace(/[<>"\r\n]/g, '')
    .trim();

  if (!safeName) {
    return res.status(400).json({ error: 'Invalid name' });
  }

  const safeSource =
    typeof source === 'string'
      ? source
          .replace(/[<>"\r\n]/g, '')
          .trim()
          .slice(0, 50)
      : '';

  // --- Subject ---

  const subject = safeSource
    ? `${safeSource} inquiry from ${safeName} via tomukun.com`
    : `Inquiry from ${safeName} via tomukun.com`;

  // --- Send ---

  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: TO_EMAIL,
    replyTo: email,
    subject,
    text: `From: ${safeName} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error('[contact] failed to send email:', error);

    return res.status(500).json({
      error: 'Failed to send message.',
    });
  }

  return res.status(201).json({ ok: true });
}

