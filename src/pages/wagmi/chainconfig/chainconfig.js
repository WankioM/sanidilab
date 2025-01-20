import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChainExplanation from './chainexplanation';


const ChainConfig = () => {
  const navigate = useNavigate();
  const [showSwahili, setShowSwahili] = useState(false);
  const [selectedChains, setSelectedChains] = useState([]);
  const [customChain, setCustomChain] = useState('');
  const [networkType, setNetworkType] = useState('mainnet');
  const [showCode, setShowCode] = useState(false);
  const [codeProgress, setCodeProgress] = useState('');
  const [showDetailed, setShowDetailed] = useState(false);
  const [selectedNetworks, setSelectedNetworks] = useState(['mainnet']); // Default to mainnet

  

  const chainOptions = {
    ethereum: {
      label: 'Ethereum',
      mainnet: 'mainnet',
      testnet: ['sepolia']
    },
    polygon: {
      label: 'Polygon',
      mainnet: 'polygon',
      testnet: ['cardano', 'amoy']
    },
    bsc: {
      label: 'Binance Smart Chain',
      mainnet: 'bsc',
      testnet: ['bscTestnet']
    },
    avalanche: {
      label: 'Avalanche',
      mainnet: 'avalanche',
      testnet: ['fuji']
    },
    fantom: {
      label: 'Fantom',
      mainnet: 'fantom',
      testnet: ['fantomTestnet']
    },
    arbitrum: {
      label: 'Arbitrum',
      mainnet: 'arbitrumOne',
      testnet: ['arbitrumGoerli']
    },
    optimism: {
      label: 'Optimism',
      mainnet: 'optimism',
      testnet: ['optimismGoerli']
    },
    gnosis: {
      label: 'Gnosis Chain',
      mainnet: 'gnosis',
      testnet: []
    },
    harmony: {
      label: 'Harmony',
      mainnet: 'harmonyOne',
      testnet: ['harmonyTestnet']
    },
    celo: {
      label: 'Celo',
      mainnet: 'celo',
      testnet: ['alfajores']
    },
    moonbeam: {
      label: 'Moonbeam',
      mainnet: 'moonbeam',
      testnet: ['moonbaseAlpha']
    },
    cronos: {
      label: 'Cronos',
      mainnet: 'cronos',
      testnet: ['cronosTestnet']
    },
    base: {
      label: 'Base',
      mainnet: 'base',
      testnet: ['baseGoerli']
    }
  };

  // Load saved progress on mount
  useEffect(() => {
    const savedChains = localStorage.getItem('wagmiChains');
    const savedCode = localStorage.getItem('wagmiCodeProgress');
    if (savedChains) {
      const { chains, network } = JSON.parse(savedChains);
      setSelectedChains(chains);
      setNetworkType(network);
    }
    if (savedCode) {
      setCodeProgress(savedCode);
    }
  }, []);

  const handleNetworkTypeChange = (type) => {
    setSelectedNetworks(prev => {
      if (prev.includes(type)) {
        return prev.filter(t => t !== type);
      }
      return [...prev, type];
    });
  };

  const handleChainSelection = (chainKey) => {
    setSelectedChains(prev => {
      const newSelection = prev.includes(chainKey)
        ? prev.filter(chain => chain !== chainKey)
        : [...prev, chainKey];
      return newSelection;
    });
  };

  const getChainImports = () => {
    if (!selectedChains.length) return '';
  
    const imports = new Set();
    selectedChains.forEach(chainKey => {
      if (chainKey === 'other') {
        if (customChain) {
          imports.add(customChain.toLowerCase());
        }
        return;
      }
      
      const chain = chainOptions[chainKey];
      if (selectedNetworks.includes('mainnet')) {
        imports.add(chain.mainnet);
      }
      if (selectedNetworks.includes('testnet')) {
        chain.testnet.forEach(net => imports.add(net.toLowerCase())); // Ensure lowercase
      }
    });
  
    if (imports.size > 0) {
      return `import { ${Array.from(imports).join(', ')} } from 'wagmi/chains';`;
    }
    return '';
  }

  const getGeneratedCode = () => {
    const previousCode = localStorage.getItem('wagmiCodeProgress') || '';
    const chainImports = getChainImports();
    
    // Split previous code into lines and keep only non-empty lines
    const previousLines = previousCode.split('\n')
      .filter(line => line.trim())
      .filter(line => !line.includes('wagmi/chains')); // Remove any existing chain imports
    
    // Add new chain imports if we have them
    if (chainImports) {
      return [...previousLines, chainImports].join('\n');
    }
    
    return previousLines.join('\n');
  };
  
  // Add this useEffect to update code when selections change
  useEffect(() => {
    if (selectedChains.length > 0) {
      const generatedCode = getGeneratedCode();
      setCodeProgress(generatedCode);
    }
  }, [selectedChains, networkType, customChain]);


  const saveProgress = () => {
    const chainInfo = {
      chains: selectedChains,
      network: networkType,
      timestamp: new Date().toISOString()
    };
    const generatedCode = getGeneratedCode();
    
    localStorage.setItem('wagmiChains', JSON.stringify(chainInfo));
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
    if (selectedChains.length > 0) {
      saveProgress();
      navigate('/builder/getapikey');
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
          <h1 className="text-2xl font-bold text-dun mb-6">
            {showSwahili ? "Chagua Minyororo" : "Choose Chains"}
          </h1>


          {/* Expandable Explanation */}
        {/* Expandable Explanation */}
        <div className="mb-8">
          <button
            onClick={() => setShowDetailed(!showDetailed)}
            className="text-flame hover:text-flame/80 transition-colors mb-2"
          >
            {showDetailed 
              ? (showSwahili ? "Ficha Maelezo" : "Hide Explanation")
              : (showSwahili ? "Soma Maelezo" : "Read Explanation")}
          </button>
          {showDetailed && <ChainExplanation showSwahili={showSwahili} />}
        </div>

          {/* Network Type Selection */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-dun mb-4">
              {showSwahili ? "Aina ya Mtandao" : "Network Type"}
            </h2>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2">
              <input
                    type="checkbox"
                    checked={selectedNetworks.includes('mainnet')}
                    onChange={() => handleNetworkTypeChange('mainnet')}
                    className="text-flame focus:ring-flame"
                />
                <span className="text-dun">Mainnet</span>
              </label>
              <label className="flex items-center space-x-2">
              <input
                    type="checkbox"
                    checked={selectedNetworks.includes('testnet')}
                    onChange={() => handleNetworkTypeChange('testnet')}
                    className="text-flame focus:ring-flame"
                />
                <span className="text-dun">Testnet</span>
              </label>
            </div>
          </div>

          {/* Chain Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {Object.entries(chainOptions).map(([key, chain]) => (
              <label key={key} className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg">
                <input
                  type="checkbox"
                  checked={selectedChains.includes(key)}
                  onChange={() => handleChainSelection(key)}
                  className="text-flame focus:ring-flame"
                />
                <span className="text-dun">{chain.label}</span>
              </label>
            ))}
            <label className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg">
              <input
                type="checkbox"
                checked={selectedChains.includes('other')}
                onChange={() => handleChainSelection('other')}
                className="text-flame focus:ring-flame"
              />
              <span className="text-dun">Other</span>
            </label>
          </div>

          {/* Custom Chain Input */}
          {selectedChains.includes('other') && (
            <input
              type="text"
              value={customChain}
              onChange={(e) => setCustomChain(e.target.value)}
              placeholder={showSwahili ? "Andika jina la mnyororo" : "Enter chain name"}
              className="w-full bg-white/5 border-2 border-dun/20 rounded-lg px-4 py-2 text-dun 
                       placeholder:text-dun/50 focus:outline-none focus:border-flame/50 mb-8"
            />
          )}

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

          {/* Continue Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={handleContinue}
              disabled={!selectedChains.length}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300
                ${selectedChains.length 
                  ? 'bg-flame text-dun hover:bg-flame/90 cursor-pointer'
                  : 'bg-dun/10 text-dun/40 cursor-not-allowed'}`}
            >
              {showSwahili ? "Endelea" : "Continue"} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChainConfig;