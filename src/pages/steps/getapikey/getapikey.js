import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import APIKeyExplanation from './apiexplanation';
import Encourage from './encourage';

const GetApiKey = () => {
  const navigate = useNavigate();
  const [showSwahili, setShowSwahili] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [codeProgress, setCodeProgress] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [provider, setProvider] = useState('');
  const [selectedChains, setSelectedChains] = useState([]);
  const [isKeyConfirmed, setIsKeyConfirmed] = useState(false);

  useEffect(() => {
    // Load saved progress
    const savedProvider = localStorage.getItem('wagmiProvider');
    const savedChains = localStorage.getItem('wagmiChains');
    const savedCode = localStorage.getItem('wagmiCodeProgress');

    if (savedProvider) {
      const { provider } = JSON.parse(savedProvider);
      setProvider(provider);
    }
    if (savedChains) {
      const { chains } = JSON.parse(savedChains);
      setSelectedChains(chains);
    }
    if (savedCode) {
      setCodeProgress(savedCode);
    }
  }, []);

  const getConfigCode = () => {
    const previousCode = localStorage.getItem('wagmiCodeProgress') || '';
    let configCode = '';
    const chainsArray = `[${selectedChains.join(', ')}]`;

    switch(provider) {
      case 'public':
        configCode = `const { chains, publicClient } = configureChains(${chainsArray}, [publicProvider()]);`;
        break;
      case 'alchemy':
        configCode = `const { chains, publicClient } = configureChains(${chainsArray}, [
  alchemyProvider({ apiKey: process.env.REACT_APP_PROVIDER_API_KEY }), // Use the API key from .env
]);`;
        break;
      case 'infura':
        configCode = `const { chains, publicClient } = configureChains(${chainsArray}, [
  infuraProvider({ apiKey: process.env.REACT_APP_PROVIDER_API_KEY }), // Use the API key from .env
]);`;
        break;
      default:
        configCode = `const { chains, publicClient } = configureChains(${chainsArray}, [
  jsonRpcProvider({
    rpc: (chain) => ({
      http: \`https://\${chain.id}.example.com/\${process.env.REACT_APP_PROVIDER_API_KEY}\`,
    }),
  }),
]);`;
    }

    return `${previousCode}\n\n${configCode}`;
  };

  const handleConfirmKey = () => {
    setIsKeyConfirmed(true);
    const updatedCode = getConfigCode();
    setCodeProgress(updatedCode);
    localStorage.setItem('wagmiCodeProgress', updatedCode);
    setShowCode(true); // Automatically show the code when confirmed
  };

  const saveProgress = () => {
    const generatedCode = getConfigCode();
    localStorage.setItem('wagmiCodeProgress', generatedCode);
    setCodeProgress(generatedCode);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const handleContinue = () => {
    saveProgress();
    navigate('/builder/configureClient');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] mt-20 bg-gradient-to-b from-spacecadet to-spacecadet/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Encourage />
        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
        
          <button
            onClick={() => setShowSwahili(!showSwahili)}
            className="text-sm font-medium text-dun hover:text-flame transition-colors"
          >
            {showSwahili ? "Switch to English" : "Badili lugha"}
          </button>
        </div>

        {/* Quick Compose Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => navigate('/builder/quickcompose')}
            className="px-6 py-2 bg-flame text-dun rounded-lg hover:bg-flame/90 transition-all"
          >
            {showSwahili ? "Tunga Haraka" : "Quick Compose"}
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white/5 backdrop-blur-sm border-2 border-dun/20 rounded-xl p-6 md:p-8">
          <h1 className="text-2xl font-bold text-dun mb-6">
            {showSwahili ? "Funguo za API" : "API Keys"}
          </h1>

          {/* Explanation Toggle */}
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="text-flame hover:text-flame/80 transition-colors mb-4"
          >
            {showExplanation 
              ? (showSwahili ? "Ficha Maelezo" : "Hide Explanation")
              : (showSwahili ? "Soma Maelezo" : "Read Explanation")}
          </button>

          {showExplanation && <APIKeyExplanation showSwahili={showSwahili} />}

          {/* API Key Confirmation Button */}
          <div className="mt-6">
            <button
              onClick={handleConfirmKey}
              className={`px-6 py-2 rounded-lg transition-all ${
                isKeyConfirmed 
                  ? 'bg-green-600 text-dun hover:bg-green-700'
                  : 'bg-flame text-dun hover:bg-flame/90'
              }`}
            >
              {isKeyConfirmed
                ? (showSwahili ? "Funguo Imethibitishwa" : "API Key Confirmed")
                : (showSwahili ? "Thibitisha Funguo ya API" : "Confirm API key has been saved on .env")}
            </button>
          </div>

          {/* Show Code Progress */}
          <div className="mt-6">
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-flame hover:text-flame/80 transition-colors"
            >
              {showSwahili ? "Onyesha Msimbo" : "Show Code Progress"}
            </button>
            {showCode && (
              <div className="mt-2 relative">
                <pre className="bg-white/5 p-4 rounded-lg text-dun overflow-x-auto whitespace-pre-wrap">
                  <code>{codeProgress || getConfigCode()}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(codeProgress || getConfigCode())}
                  className="absolute top-2 right-2 px-3 py-1 bg-flame/20 hover:bg-flame/30 
                           text-flame rounded-md text-sm transition-colors"
                >
                  {showSwahili ? "Nakili" : "Copy"}
                </button>
              </div>
            )}
          </div>

          {/* Continue Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={handleContinue}
              className="px-8 py-3 rounded-xl font-bold text-lg bg-flame text-dun hover:bg-flame/90 transition-all"
            >
              {showSwahili ? "Endelea" : "Continue"} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApiKey;