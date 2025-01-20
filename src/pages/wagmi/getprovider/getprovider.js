import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GetProvider = () => {
  const navigate = useNavigate();
  const [showSwahili, setShowSwahili] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState('');
  const [customProvider, setCustomProvider] = useState('');
  const [showDetailed, setShowDetailed] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [codeProgress, setCodeProgress] = useState('');

  const providers = [
    { value: 'public', label: 'Public Provider' },
    { value: 'alchemy', label: 'Alchemy' },
    { value: 'infura', label: 'Infura' },
    { value: 'quicknode', label: 'QuickNode' },
    { value: 'moralis', label: 'Moralis' },
    { value: 'ankr', label: 'Ankr' },
    { value: 'other', label: 'Other' }
  ];

  const explanations = {
    short: {
      en: "A provider is like a bridge that helps your app talk to the Ethereum network. It lets your app send transactions or get information from the blockchain. Without a provider, your app can't communicate with the blockchain.",
      sw: "Mtoaji ni kama daraja linalosaidia programu yako kuzungumza na mtandao wa Ethereum. Inaruhusu programu yako kutuma miamala au kupata taarifa kutoka kwa blockchain. Bila mtoaji, programu yako haiwezi kuwasiliana na blockchain."
    },
    detailed: {
      en: "In the world of Ethereum, your app needs to be able to send transactions and interact with the blockchain, which holds all the data and smart contracts. A provider is the tool that connects your app to the Ethereum network, like a phone line connecting you to someone far away. It helps your app send messages to the blockchain and get responses, such as checking an account balance, making a transaction, or interacting with a smart contract. There are different providers, such as public providers (free, but may be slow) and premium services like Alchemy or Infura (faster and with more features but usually come at a cost).",
      sw: "Katika ulimwengu wa Ethereum, programu yako inahitaji uwezo wa kutuma miamala na kuingiliana na blockchain, ambayo ina data zote na mikataba ya smart. Mtoaji ni kifaa kinachounganisha programu yako na mtandao wa Ethereum, kama vile simu inayounganisha wewe na mtu aliye mbali. Inasaidia programu yako kutuma ujumbe kwa blockchain na kupata majibu, kama vile kuangalia salio la akaunti, kufanya muamala, au kuingiliana na mkataba wa smart. Kuna mtoaji mbalimbali, kama vile mtoa huduma wa umma (bila malipo, lakini unaweza kuwa polepole) na huduma za kulipia kama Alchemy au Infura (zile haraka na zenye vipengele zaidi lakini mara nyingi hutoza ada)."
    }
  };

  // Load saved progress on component mount
  useEffect(() => {
    const savedProvider = localStorage.getItem('wagmiProvider');
    const savedCode = localStorage.getItem('wagmiCodeProgress');
    if (savedProvider) {
      const { provider } = JSON.parse(savedProvider);
      setSelectedProvider(provider);
    }
    if (savedCode) {
      setCodeProgress(savedCode);
    }
  }, []);

  const getProviderImport = (provider) => {
    switch (provider) {
      case 'alchemy':
        return "import { alchemyProvider } from 'wagmi/providers/alchemy'";
      case 'public':
        return "import { publicProvider } from 'wagmi/providers/public'";
      case 'quicknode':
      case 'moralis':
      case 'infura':
        return "import { infuraProvider } from 'wagmi/providers/public'";
      case 'ankr':
        return "import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'";
      case 'other':
        return `import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'`;
      default:
        return '';
    }
  };

  const getGeneratedCode = () => {
    if (!selectedProvider) return '';
    
    return `import { WagmiConfig, configureChains, createClient } from 'wagmi';
${getProviderImport(selectedProvider)};`;
  };

  const saveProgress = () => {
    const providerInfo = {
      provider: selectedProvider === 'other' ? customProvider : selectedProvider,
      timestamp: new Date().toISOString()
    };
    const generatedCode = getGeneratedCode();
    
    localStorage.setItem('wagmiProvider', JSON.stringify(providerInfo));
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
    if (selectedProvider) {
      saveProgress();
      navigate('/builder/chainconfig');
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] mt-20 bg-gradient-to-b from-spacecadet to-spacecadet/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          {/* Title */}
          <h1 className="text-2xl font-bold text-dun mb-4">
            {showSwahili ? "Chagua Mtoaji" : "Choose a Provider"}
          </h1>

          {/* Short Explanation */}
          <p className="text-dun/80 mb-6">
            {explanations.short[showSwahili ? 'sw' : 'en']}
          </p>

          {/* Expandable Detailed Explanation */}
          <div className="mb-8">
            <button
              onClick={() => setShowDetailed(!showDetailed)}
              className="text-flame hover:text-flame/80 transition-colors mb-2"
            >
              {showDetailed 
                ? (showSwahili ? "Ficha Maelezo Zaidi" : "Hide Detailed Explanation")
                : (showSwahili ? "Soma Maelezo Zaidi" : "Read Detailed Explanation")}
            </button>
            {showDetailed && (
              <div className="p-4 bg-white/5 rounded-lg text-dun/70 mt-2">
                {explanations.detailed[showSwahili ? 'sw' : 'en']}
              </div>
            )}
          </div>

          {/* Provider Selection */}
          <div className="space-y-4">
            <select
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              className="w-full bg-white/5 border-2 border-dun/20 rounded-lg px-4 py-2 text-dun 
                       focus:outline-none focus:border-flame/50 transition-colors"
            >
              <option value="">
                {showSwahili ? "Chagua mtoaji wako" : "Select your provider"}
              </option>
              {providers.map(provider => (
                <option key={provider.value} value={provider.value}>
                  {provider.label}
                </option>
              ))}
            </select>

            {/* Custom Provider Input */}
            {selectedProvider === 'other' && (
              <input
                type="text"
                placeholder={showSwahili ? "Andika jina la mtoaji" : "Enter provider name"}
                value={customProvider}
                onChange={(e) => setCustomProvider(e.target.value)}
                className="w-full bg-white/5 border-2 border-dun/20 rounded-lg px-4 py-2 text-dun 
                         placeholder:text-dun/50 focus:outline-none focus:border-flame/50 transition-colors"
              />
            )}

            {/* API Key Reminder */}
            {selectedProvider && selectedProvider !== 'public' && (
              <div className="flex items-start space-x-2 p-4 bg-flame/10 rounded-lg">
                <div className="w-5 h-5 text-flame mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M12 8h.01M11 12h1v4h1" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-sm text-dun/80">
                  {showSwahili
                    ? "Utahitaji ufunguo wa API kutoka kwa mtoaji wako. Unaweza kuuchukua na kuutumia baadaye."
                    : "You'll need an API key from your provider. You can get it and use it later."}
                </p>
              </div>
            )}

            {/* Show Code Progress */}
            {selectedProvider && (
              <div className="mt-6">
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="text-flame hover:text-flame/80 transition-colors"
                >
                  {showSwahili ? "Onyesha Msimbo" : "Show Code Progress"}
                </button>
                {showCode && (
                  <div className="mt-2 relative">
                    <pre className="bg-white/5 p-4 rounded-lg text-dun overflow-x-auto">
                      <code>{codeProgress || getGeneratedCode()}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(codeProgress || getGeneratedCode())}
                      className="absolute top-2 right-2 px-3 py-1 bg-flame/20 hover:bg-flame/30 
                               text-flame rounded-md text-sm transition-colors"
                    >
                      {showSwahili ? "Nakili" : "Copy"}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Continue Button */}
            <div className="flex justify-end mt-8">
              <button
                onClick={handleContinue}
                disabled={!selectedProvider}
                className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300
                  ${selectedProvider 
                    ? 'bg-flame text-dun hover:bg-flame/90 cursor-pointer'
                    : 'bg-dun/10 text-dun/40 cursor-not-allowed'}`}
              >
                {showSwahili ? "Endelea" : "Continue"} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetProvider;