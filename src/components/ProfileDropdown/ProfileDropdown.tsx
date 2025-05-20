import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { useWallet } from '../../services/web3Service';
import './ProfileDropdown.css';

export const ProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { account } = useWeb3React();
  const { disconnectWallet } = useWallet();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    navigate('/profile');
    setIsOpen(false);
  };

  const handleDisconnect = async () => {
    await disconnectWallet();
    setIsOpen(false);
  };

  if (!account) {
    return null;
  }

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <div className="wallet-address auth-button-style" onClick={() => setIsOpen(!isOpen)}>
        <img 
          src={`https://robohash.org/${account}`} 
          alt="Wallet Avatar" 
          className="wallet-avatar"
        />
        <span>{account.slice(0, 6)}...{account.slice(-4)}</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="menu-item" onClick={handleProfileClick}>
            Profile
          </div>
          <div className="menu-item disconnect" onClick={handleDisconnect}>
            Disconnect
          </div>
        </div>
      )}
    </div>
  );
}; 