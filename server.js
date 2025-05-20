import express from 'express';
import axios from 'axios';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

const COINMARKETCAP_API_KEY = process.env.VITE_COINMARKETCAP_API_KEY;
const OPENAI_API_KEY = process.env.VITE_OPENAI_API_KEY;

const BASE_URL = 'https://pro-api.coinmarketcap.com/v1';

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

app.use(cors());
app.use(express.json());

app.get('/api/cryptocurrencies', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/cryptocurrency/listings/latest`, {
      headers: {
        'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
        'Accept': 'application/json',
      },
      params: {
        limit: req.query.limit || 10,
        convert: 'USD',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching crypto data:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch cryptocurrency data' });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant specializing in cryptocurrency information. Provide clear, accurate, and concise answers about cryptocurrencies, blockchain technology, and related topics."
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error in chat:', error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 