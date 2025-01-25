import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Hero from './pages/landingpage/hero';
import Header from './pages/header';
import AboutUs from './pages/aboutus/aboutus';
import JoinUs from './pages/joinus/joinus';
import Footer from './pages/footer';
import LearningTracks from './pages/menu/learningtracks';
import SanidiCentral from './pages/sanidicentral/sanidicentral';

// Import route configurations
import starknetRoutes from './routes/starknetRoutes';
import blockchainBasicsRoutes from './routes/blockchainBasicsRoutes';
import builderRoutes from './routes/builderRoutes';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            {/* Core routes */}
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/joinus" element={<JoinUs />} />
            <Route path="/menu/learningtracks" element={<LearningTracks />} />
            <Route path="/sanidi-central" element={<SanidiCentral />} />

            {/* Feature-specific routes */}
            {starknetRoutes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {blockchainBasicsRoutes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {builderRoutes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;