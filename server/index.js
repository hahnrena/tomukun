const express = require('express');
const cors = require('cors');
const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRouter);

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Tomukun API server listening on http://localhost:${PORT}`);
});
