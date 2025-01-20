import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Hero from './pages/landingpage/hero';
import Header from './pages/header';
import AboutUs from './pages/aboutus/aboutus';
import Intro from './pages/steps/intro/intro';
import JoinUs from './pages/joinus/joinus';
import GetProvider from './pages/steps/getprovider/getprovider';
import ChainConfig from './pages/steps/chainconfig/chainconfig';
import APIKeyExplanation from './pages/steps/getapikey/apiexplanation';
import GetApiKey from './pages/steps/getapikey/getapikey';
import Footer from './pages/footer';
import StarkNetHome from './pages/starknet/StarkNetHome';
import StarkNetWallet from './pages/starknet/connectwallet/connectwallet';
import StarkNetBasics from './pages/starknet/basics/basics';
import WhatIsStark from './pages/starknet/basics/whatisstark';
import StarksSnarks from './pages/starknet/basics/starkssnarks';
import WalletComparison from './pages/starknet/connectwallet/walletcomparison';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/joinus" element={<JoinUs />} />
            <Route path="/builder/provider" element={<GetProvider />} />
            <Route path="/builder/chainconfig" element={<ChainConfig />} />
            <Route path="/builder/getapikey" element={<GetApiKey />} />
            <Route path="/starknet" element={<StarkNetHome />} />
            <Route path="/starknet/basics" element={<StarkNetBasics/>} />
            <Route path="/starknet/connectwallet" element={<StarkNetWallet />} />
            <Route path="/starknet/basics/whatisstark" element={<WhatIsStark />} />
            <Route path="/starknet/basics/starkssnarks" element={<StarksSnarks />} />
            <Route path="/starknet/connectwallet/walletcomparison" element={<WalletComparison />} />

            
                      </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;