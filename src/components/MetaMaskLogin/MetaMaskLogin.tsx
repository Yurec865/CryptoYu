import React, { useState } from 'react';
import { useWallet } from '../../services/web3Service';
import './MetaMaskLogin.css';

export const MetaMaskLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { connectWallet, disconnectWallet, account, isConnected } = useWallet();

  const handleConnect = async () => {
    setIsLoading(true);
    await connectWallet();
    setIsLoading(false);
  };

  const handleDisconnect = async () => {
    setIsLoading(true);
    await disconnectWallet();
    setIsLoading(false);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="metamask-login">
      {!isConnected ? (
        <button 
          className="connect-button" 
          onClick={handleConnect}
          disabled={isLoading}
        >
          {isLoading ? 'Connecting...' : 'Connect with MetaMask'}
        </button>
      ) : (
        <div className="wallet-info">
          <div className="wallet-address">
            <img 
              src={`https://robohash.org/${account}`} 
              alt="Wallet Avatar" 
              className="wallet-avatar"
            />
            <span>{formatAddress(account!)}</span>
          </div>
          <button 
            className="disconnect-button" 
            onClick={handleDisconnect}
            disabled={isLoading}
          >
            {isLoading ? 'Disconnecting...' : 'Disconnect'}
          </button>
        </div>
      )}
    </div>
  );
}; 