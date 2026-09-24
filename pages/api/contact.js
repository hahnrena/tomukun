import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'management@tomukun.com';
// TODO: once a sending domain is verified in Resend (e.g. mail.tomukun.com),
// switch this to an address on that domain instead of the shared test sender.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Tomukun Website <onboarding@resend.dev>';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, source } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required.' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY is not set — email not sent.');
    return res.status(500).json({ error: 'Contact form is not configured yet.' });
  }

  if (typeof name !== 'string' || !name.trim() || name.length > 100) {
  return Response.json({ error: 'Invalid name' }, { status: 400 });
}

const emailRegex = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;
if (typeof email !== 'string' || email.length > 254 || !emailRegex.test(email)) {
  return Response.json({ error: 'Invalid email' }, { status: 400 });
}

if (typeof message !== 'string' || !message.trim() || message.length > 5000) {
  return Response.json({ error: 'Invalid message' }, { status: 400 });
}

// --- Sanitize anything that goes into a header ---
const safeName = name.replace(/[<>"\r\n]/g, '').trim();

if (!safeName) {
  return Response.json({ error: 'Invalid name' }, { status: 400 });
}

  const subject = source
    ? `${source} inquiry from ${safeName} via tomukun.com`
    : `Inquiry from ${safeName} via tomukun.com`;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error('[contact] failed to send email:', error);
    return res.status(500).json({ error: 'Failed to send message.' });
  }

  return res.status(201).json({ ok: true });
}
