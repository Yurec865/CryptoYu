import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { MetaMaskLogin } from './components/MetaMaskLogin/MetaMaskLogin';
import { ProfileDropdown } from './components/ProfileDropdown/ProfileDropdown';
import './App.css';
import { useWeb3React } from '@web3-react/core';

function getLibrary(provider: ethers.providers.ExternalProvider | ethers.providers.JsonRpcFetchFunc) {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { account } = useWeb3React();
  if (!account) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

const AppContent = () => {
  const { account } = useWeb3React();

  return (
    <div className="App">
      <MetaMaskLogin />
      {account && <ProfileDropdown />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <AppContent />
      </Router>
    </Web3ReactProvider>
  );
}

export default App;