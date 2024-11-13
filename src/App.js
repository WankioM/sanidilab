import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Hero from './pages/landingpage/hero';
import Header from './pages/header';
import AboutUs from './pages/aboutus/aboutus';
import Intro from './pages/steps/intro/intro';
import JoinUs from './pages/joinus/joinus';

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
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;