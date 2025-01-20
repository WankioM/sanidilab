import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const WalletComparison = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const walletFeatures = {
    front: {
      title: "Smart Wallet (Starknet)",
      emoji: "🔐",
      features: [
        {
          title: "Transaction Signing",
          description: "Sign with FaceID or TouchID",
          icon: "👆"
        },
        {
          title: "Multi-Action Execution",
          description: "Bundle multiple operations into a single transaction",
          icon: "🔄"
        },
        {
          title: "Security Model",
          description: "Uses Account Abstraction for better security & recovery",
          icon: "🛡️"
        },
        {
          title: "Gas Fees",
          description: "Can enable sponsored gas fees or pay in different tokens",
          icon: "⛽"
        },
        {
          title: "Recovery Options",
          description: "Can include social recovery & multi-signature support",
          icon: "🔑"
        },
        {
          title: "Automation & Customization",
          description: "Supports automated rules, batching, and programmable logic",
          icon: "⚙️"
        }
      ]
    },
    back: {
      title: "Traditional Wallet",
      emoji: "👛",
      features: [
        {
          title: "Transaction Signing",
          description: "Manual signing for each transaction",
          icon: "✍️"
        },
        {
          title: "Multi-Action Execution",
          description: "Each action (approve, swap, send) requires a separate transaction",
          icon: "🔂"
        },
        {
          title: "Security Model",
          description: "Relies on private keys (risk of loss, phishing)",
          icon: "🔒"
        },
        {
          title: "Gas Fees",
          description: "Users must manually approve and pay for gas in ETH",
          icon: "💰"
        },
        {
          title: "Recovery Options",
          description: "Seed phrase required for recovery (high risk)",
          icon: "📝"
        },
        {
          title: "Automation & Customization",
          description: "Basic, limited to manual inputs",
          icon: "🤚"
        }
      ]
    }
  };

  const handleNext = () => {
    navigate('/starknet/connectwallet');
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
          {/* Title above card */}
          <h1 className="text-3xl font-morgath text-flame text-center mb-8">Wallet Comparison</h1>

          <div className="max-w-4xl mx-auto perspective-1000">
            {/* Flip Card */}
            <div
              className={`relative transform-style-preserve-3d cursor-pointer transition-transform duration-700 h-[600px]
                ${isFlipped ? 'rotate-y-180' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden">
                <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-dun/20">
                  <div className="text-center mb-6">
                    <span className="text-6xl block mb-3">{walletFeatures.front.emoji}</span>
                    <h2 className="text-2xl font-morgath text-flame">{walletFeatures.front.title}</h2>
                  </div>
                  <div className="space-y-4 overflow-y-auto max-h-[400px] pr-2">
                    {walletFeatures.front.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-xl mt-1">{feature.icon}</span>
                        <div>
                          <h3 className="text-lg font-morgath text-flame">{feature.title}</h3>
                          <p className="text-sm text-dun font-montserrat">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-dun/20">
                  <div className="text-center mb-6">
                    <span className="text-6xl block mb-3">{walletFeatures.back.emoji}</span>
                    <h2 className="text-2xl font-morgath text-flame">{walletFeatures.back.title}</h2>
                  </div>
                  <div className="space-y-4 overflow-y-auto max-h-[400px] pr-2">
                    {walletFeatures.back.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-xl mt-1">{feature.icon}</span>
                        <div>
                          <h3 className="text-lg font-morgath text-flame">{feature.title}</h3>
                          <p className="text-sm text-dun font-montserrat">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Click to flip instruction */}
            <div className="text-center mt-4">
              <p className="text-dun font-montserrat">
                Click the card to flip {isFlipped ? "back" : "over"} {isFlipped ? "👈" : "👉"}
              </p>
            </div>

            {/* Next Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-flame to-flame/80 text-dun font-morgath text-xl px-12 py-4 
                         rounded-xl hover:from-flame/90 hover:to-flame/70 transform hover:scale-102
                         transition-all duration-300 ease-in-out"
              >
                Next Section ➡️
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for 3D transforms */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default WalletComparison;