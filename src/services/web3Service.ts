import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Ethereum networks
});

export const useWallet = () => {
  const { activate, deactivate, account, active, library } = useWeb3React();

  const connectWallet = async () => {
    try {
      await activate(injected);
      return true;
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      return false;
    }
  };

  const disconnectWallet = async () => {
    try {
      await deactivate();
      return true;
    } catch (error) {
      console.error('Error disconnecting from MetaMask:', error);
      return false;
    }
  };

  const getProvider = () => {
    if (library) {
      return library;
    }
    return null;
  };

  return {
    connectWallet,
    disconnectWallet,
    account,
    isConnected: active,
    provider: getProvider()
  };
};

export const getWalletAddress = async () => {
  try {
    const provider = await injected.getProvider();
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    return accounts[0];
  } catch (error) {
    console.error('Error getting wallet address:', error);
    return null;
  }
}; 