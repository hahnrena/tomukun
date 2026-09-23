const express = require('express');

const router = express.Router();

// In-memory store for now — TODO: replace with email delivery (e.g. SES/SendGrid)
// or persistence once the client confirms how they want to receive submissions.
const submissions = [];

router.post('/', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required.' });
  }

  const submission = {
    name,
    email,
    message,
    receivedAt: new Date().toISOString(),
  };

  submissions.push(submission);
  console.log('[contact] new submission:', submission);

  return res.status(201).json({ ok: true });
});

module.exports = router;
