import React, { useState } from 'react';
import { useWallet } from '../../services/web3Service';
import './MetaMaskLogin.css';

export const MetaMaskLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { connectWallet, isConnected } = useWallet();

  const handleConnect = async () => {
    setIsLoading(true);
    await connectWallet();
    setIsLoading(false);
  };

  return (
    <div className="metamask-login">
      {!isConnected && (
        <button 
          className="connect-button" 
          onClick={handleConnect}
          disabled={isLoading}
        >
          {isLoading ? 'Connecting...' : 'Connect with MetaMask'}
        </button>
      )}
    </div>
  );
}; 