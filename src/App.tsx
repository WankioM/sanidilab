import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

// Existing Components
import Hero from './pages/landingpage/hero';
import Header from './pages/Header';
import AboutUs from './pages/aboutus/aboutus';
import JoinUs from './pages/joinus/joinus';
import Footer from './pages/Footer';
import LearningTracks from './pages/menu/learningtracks';
import SanidiCentral from './pages/sanidicentral/sanidicentral';

// New Platform & Business Components
import PlatformOverview from './pages/aboutus/platform/PlatformOverview';
import PlatformCapabilities from './pages/aboutus/platform/PlatformCapabilities';
import TechnicalSpecifications from './pages/aboutus/platform/TechnicalSpecifications';
import VisualContractBuilder from './pages/aboutus/platform/VisualContractBuilder';
import EnterpriseIntegration from './pages/aboutus/platform/EnterpriseIntegration';
import MultiLanguageInterface from './pages/aboutus/platform/MultiLanguageInterface';

// Implementation & Pricing
import ImplementationSupport from './pages/aboutus/implementation/ImplementationSupport';
import PricingCalculator from './pages/aboutus/pricing/PricingCalculator';

// Use Cases Components
import { 
  UseCases,
  ImplementationShowcase,
  CustomerMetrics,
  TechnicalSpecs,
  GettingStarted
} from './pages/aboutus/usecases';

// Import existing route configurations
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
            {/* ===== EXISTING CORE ROUTES ===== */}
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/joinus" element={<JoinUs isOpen={true} onClose={() => {}} />} />
            <Route path="/menu/learningtracks" element={<LearningTracks />} />
            <Route path="/sanidi-central" element={<SanidiCentral />} />

            {/* ===== NEW BUSINESS/ENTERPRISE ROUTES ===== */}
            
            {/* Platform Routes */}
            <Route path="/platform" element={<PlatformOverview />} />
            <Route path="/platform/overview" element={<PlatformOverview />} />
            <Route path="/platform/capabilities" element={<PlatformCapabilities />} />
            <Route path="/platform/technical-specs" element={<TechnicalSpecifications />} />
            <Route path="/platform/visual-builder" element={<VisualContractBuilder />} />
            <Route path="/platform/enterprise-integration" element={<EnterpriseIntegration />} />
            <Route path="/platform/multi-language" element={<MultiLanguageInterface />} />
            
            {/* Use Cases Routes */}
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/use-cases/implementation" element={<ImplementationShowcase />} />
            <Route path="/use-cases/metrics" element={<CustomerMetrics useCases={[]} />} />
            <Route path="/use-cases/technical" element={<TechnicalSpecs selectedUseCase="supply-chain" onUseCaseChange={() => {}} />} />
            <Route path="/use-cases/getting-started" element={<GettingStarted />} />
            
            {/* Implementation & Pricing Routes */}
            <Route path="/implementation" element={<ImplementationSupport />} />
            <Route path="/implementation/support" element={<ImplementationSupport />} />
            <Route path="/pricing" element={<PricingCalculator />} />
            <Route path="/pricing/calculator" element={<PricingCalculator />} />

            {/* ===== EXISTING FEATURE-SPECIFIC ROUTES ===== */}
            {starknetRoutes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {blockchainBasicsRoutes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {builderRoutes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}

            {/* ===== CATCH-ALL ROUTE ===== */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-orange-500 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-300 mb-6">The page you're looking for doesn't exist.</p>
                  <a 
                    href="/" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;