import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import { HomePage } from './pages/HomePage/HomePage';
import { MetaMaskLogin } from './components/MetaMaskLogin/MetaMaskLogin';
import './App.css';

function getLibrary(provider: ethers.providers.ExternalProvider | ethers.providers.JsonRpcFetchFunc) {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <MetaMaskLogin />
        <HomePage />
      </div>
    </Web3ReactProvider>
  );
}

export default App;