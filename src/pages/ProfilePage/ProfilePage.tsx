import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Link } from 'react-router-dom';
import './ProfilePage.css';

export const ProfilePage: React.FC = () => {
  const { account } = useWeb3React();

  return (
    <div className="profile-page">
      <div className="profile-header">
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
        <h1>Profile</h1>
      </div>
      <div className="wallet-info">
        <h2>Wallet Information</h2>
        <p>Address: {account}</p>
      </div>
    </div>
  );
}; 