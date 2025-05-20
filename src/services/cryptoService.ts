import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

interface CryptoResponse {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      percent_change_24h: number;
      market_cap: number;
      volume_24h: number;
    }
  }
}

export interface CryptoData {
  id: number;
  name: string;
  symbol: string;
  price: number;
  percent_change_24h: number;
  market_cap: number;
  volume_24h: number;
}

export const cryptoService = {
  async getTopCryptos(limit: number = 10): Promise<CryptoData[]> {
    try {
      const response = await axios.get(`${API_URL}/cryptocurrencies`, {
        params: { limit }
      });

      if (!response.data || !response.data.data) {
        throw new Error('Invalid response format from API');
      }

      return response.data.data.map((crypto: CryptoResponse) => ({
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol,
        price: crypto.quote.USD.price,
        percent_change_24h: crypto.quote.USD.percent_change_24h,
        market_cap: crypto.quote.USD.market_cap,
        volume_24h: crypto.quote.USD.volume_24h,
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('API Error:', error.response?.data || error.message);
        throw new Error(`API Error: ${error.response?.data?.error || error.message}`);
      }
      console.error('Error fetching crypto data:', error);
      throw error;
    }
  },
}; 