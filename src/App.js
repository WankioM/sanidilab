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
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;