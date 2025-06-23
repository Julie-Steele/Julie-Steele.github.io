const express = require('express');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

let functions;
try {
  functions = require('firebase-functions');
} catch (_) {
  functions = null;
}

const OPENAI_API_KEY =
  process.env.OPENAI_API_KEY ||
  (functions && functions.config().openai && functions.config().openai.key);

const app = express();
app.use(express.json());

// Limit each IP to 5 requests per hour to control API costs
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5
});
app.use('/design', limiter);

app.post('/design', async (req, res) => {
  const experience = req.body.experience;
  if (!experience) {
    return res.status(400).json({ error: 'Experience is required' });
  }
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful designer that outputs CSS for the website.' },
          { role: 'user', content: `Create CSS to style the webpage in a ${experience} theme.` }
        ]
      })
    });

    const data = await response.json();
    if (!data.choices || !data.choices.length) {
      return res.status(500).json({ error: 'No design received' });
    }
    res.json({ css: data.choices[0].message.content });
  } catch (err) {
    console.error('Design generation failed:', err);
    res.status(500).json({ error: 'Design generation failed' });
  }
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
