import React from 'react';
import { useNavigate } from 'react-router-dom';

const StarkNetWallet = () => {
  const navigate = useNavigate();

  const wallets = [
    {
      name: 'Argent',
      icon: '💎',
      downloadUrl: 'https://www.argent.xyz/argent-x/',
      description: 'Popular StarkNet wallet with intuitive interface',
      features: ['FaceID/TouchID Support', 'Bundle Transactions', 'Social Recovery']
    },
    {
      name: 'Braavos',
      icon: '🛡️',
      downloadUrl: 'https://braavos.app/',
      description: 'Secure and customizable StarkNet wallet',
      features: ['Biometric Authentication', 'Transaction Batching', 'Advanced Security']
    }
  ];

  const handleNext = () => {
    navigate('/starknet/connectwallet/walletcomparison');
  };

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-spacecadet flex flex-col">
      {/* Fixed Header - just for spacing */}
      <div className="h-[8vh]" />

      {/* Main content */}
      <div className="flex-1 relative overflow-y-auto">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-spacecadet/85 via-[#21253A]/80 to-spacecadet/75" />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-morgath text-flame mb-6">
                Your Wallet Just Got Smarter! 🚀
              </h1>
              <p className="text-xl font-montserrat text-dun mb-8">
                Ditch seed phrases and manual approvals. On Starknet, every wallet is a{' '}
                <span className="text-flame font-semibold">smart wallet</span>, letting you sign with{' '}
                <span className="text-flame font-semibold">FaceID or TouchID</span> and bundle actions into a single transaction.
              </p>
            </div>

            {/* Wallets Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {wallets.map((wallet) => (
                <div 
                  key={wallet.name}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-dun/20
                           transform hover:scale-102 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{wallet.icon}</span>
                      <h2 className="text-2xl font-morgath text-flame">{wallet.name}</h2>
                    </div>
                    <button
                      onClick={() => handleDownload(wallet.downloadUrl)}
                      className="bg-flame/20 hover:bg-flame/30 text-flame font-morgath px-6 py-2 rounded-lg
                               flex items-center gap-2 transition-all duration-300"
                    >
                      <span>Download</span>
                      <span>⬇️</span>
                    </button>
                  </div>
                  <p className="text-dun font-montserrat mb-4">{wallet.description}</p>
                  <ul className="space-y-2">
                    {wallet.features.map((feature, index) => (
                      <li key={index} className="text-dun font-montserrat flex items-center gap-2">
                        <span className="text-flame">✦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mb-8">
              <p className="text-xl font-montserrat text-dun">
                Before we get building, let's first have our wallets ready.
              </p>
            </div>

            {/* Next Button */}
            <div className="flex justify-center mb-16">
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-flame to-flame/80 text-dun font-morgath text-xl px-12 py-4 
                         rounded-xl hover:from-flame/90 hover:to-flame/70 transform hover:scale-102
                         transition-all duration-300 ease-in-out"
              >
                Compare Wallets ➡️
              </button>
            </div>

            {/* Setup Section */}
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border-2 border-dun/20">
              <h2 className="text-2xl font-morgath text-flame mb-4">
                Ready to Start Your Journey? 🚀
              </h2>
              <p className="text-lg font-montserrat text-dun mb-6">
                Now let's build the future with Starknet
              </p>
              <button
                onClick={() => {/* Add your wallet setup handler here */}}
                className="bg-gradient-to-r from-dun to-dun/80 text-spacecadet font-morgath text-xl px-12 py-4 
                         rounded-xl hover:from-dun/90 hover:to-dun/70 transform hover:scale-102
                         transition-all duration-300 ease-in-out flex items-center justify-center gap-2 mx-auto"
              >
                <span>Wallet Setup</span>
                <span className="text-2xl">⚡</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[blob_7s_infinite]" />
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-dun rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[blob_7s_infinite_2s]" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[blob_7s_infinite_4s]" />
      </div>
    </div>
  );
};

export default StarkNetWallet;