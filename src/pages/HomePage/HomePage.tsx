import React, { useEffect, useState } from 'react';
import { cryptoService, type CryptoData } from '../../services/cryptoService';
import { AIChat } from '../../components/AIChat/AIChat';
import './HomePage.css';

export const HomePage = () => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await cryptoService.getTopCryptos();
        setCryptos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch cryptocurrency data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="home-page">
      <h1>Top Cryptocurrencies</h1>
      <div className="crypto-list">
        {cryptos.map((crypto) => (
          <div key={crypto.id} className="crypto-card">
            <h2>{crypto.name} ({crypto.symbol})</h2>
            <p className="price">${crypto.price.toLocaleString()}</p>
            <p className={`change ${crypto.percent_change_24h >= 0 ? 'positive' : 'negative'}`}>
              {crypto.percent_change_24h >= 0 ? '↑' : '↓'} {Math.abs(crypto.percent_change_24h).toFixed(2)}%
            </p>
            <div className="crypto-details">
              <p>Market Cap: ${(crypto.market_cap / 1e9).toFixed(2)}B</p>
              <p>Volume (24h): ${(crypto.volume_24h / 1e9).toFixed(2)}B</p>
            </div>
          </div>
        ))}
      </div>
      <AIChat />
    </div>
  );
}; 