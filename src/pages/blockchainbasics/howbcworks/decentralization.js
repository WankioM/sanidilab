import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight, HiHome } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Decentralization = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSwahili, setIsSwahili] = useState(false);

  const content = {
    1: {
      en: {
        title: "Centralized vs Decentralized",
        description: "Traditional systems rely on central authorities like banks or governments. Decentralized systems distribute control across many participants, eliminating single points of failure.",
        visual: (
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
              <h3 className="text-flame font-bold mb-4 text-center">Centralized</h3>
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-flame flex items-center justify-center">
                  <span className="text-4xl">🏦</span>
                </div>
                <div className="flex justify-center gap-8 mt-8">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full bg-flame/20 flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-y-1/2 inset-x-0 -z-10">
                  <div className="h-0.5 bg-flame/30"></div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
              <h3 className="text-flame font-bold mb-4 text-center">Decentralized</h3>
              <div className="grid grid-cols-3 gap-4">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full bg-flame/20 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      },
      sw: {
        title: "Mfumo wa Kati vs Usambazaji",
        description: "Mifumo ya jadi inategemea mamlaka kuu kama benki au serikali. Mifumo iliyosambazwa inagawa udhibiti kwa washiriki wengi, kuondoa hatari ya kushindwa kwa sehemu moja.",
        visual: null
      }
    },
    2: {
      en: {
        title: "Security Through Decentralization",
        description: "No single point can be attacked or compromised. To affect the network, an attacker would need to control most nodes simultaneously - an nearly impossible task.",
        visual: (
          <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
            <div className="grid grid-cols-4 gap-4">
              {Array(12).fill(0).map((_, i) => (
                <div key={i} className="relative">
                  <div className={`w-16 h-16 rounded-full ${i < 9 ? 'bg-flame/20' : 'bg-red-500/20'} 
                                flex items-center justify-center`}>
                    <span className="text-2xl">{i < 9 ? '🔒' : '❌'}</span>
                  </div>
                  {i < 9 && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-flame 
                                  flex items-center justify-center text-xs text-spacecadet">
                      ✓
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-dun text-center mt-4">75% of nodes must verify transactions</p>
          </div>
        )
      },
      sw: {
        title: "Usalama Kupitia Usambazaji",
        description: "Hakuna sehemu moja inayoweza kushambuliwa au kuathiriwa. Ili kuathiri mtandao, mshambuliaji angehichunga nodi nyingi kwa wakati mmoja - kazi ambayo haiwezekani.",
        visual: null
      }
    },
    3: {
      en: {
        title: "Trustless Operation",
        description: "Users don't need to trust each other or a central authority. The system's rules and mathematics ensure honest operation, verified by all participants.",
        visual: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Transparent Rules", icon: "📜" },
              { title: "Cryptographic Proof", icon: "🔐" },
              { title: "Consensus Verification", icon: "✅" }
            ].map((feature) => (
              <div key={feature.title} className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-flame font-bold">{feature.title}</h3>
              </div>
            ))}
          </div>
        )
      },
      sw: {
        title: "Utendaji Bila Kuamini",
        description: "Watumiaji hawahitaji kuaminiana au kuamini mamlaka kuu. Sheria na hesabu za mfumo zinahakikisha utendaji wa haki, ukithibitishwa na washiriki wote.",
        visual: null
      }
    }
  };

  const currentContent = content[step][isSwahili ? 'sw' : 'en'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-spacecadet to-spacecadet/90 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-12">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-montserrat text-dun">{currentContent.title}</h1>
            <button 
              onClick={() => setIsSwahili(!isSwahili)}
              className="px-4 py-2 rounded-lg bg-flame/20 text-flame hover:bg-flame hover:text-spacecadet transition-all duration-300"
            >
              {isSwahili ? 'English' : 'Kiswahili'}
            </button>
          </div>
          
          <p className="text-lg text-dun/90 font-montserrat leading-relaxed">
            {currentContent.description}
          </p>

          <div className="py-8">
            {!isSwahili && currentContent.visual}
          </div>
        </div>
        
        <div className="mt-16 flex justify-between items-center">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl 
                     ${step === 1 ? 'bg-flame/20 text-flame/50' : 'bg-flame text-spacecadet'}
                     transition-all duration-300 font-montserrat`}
          >
            <HiArrowLeft className="w-5 h-5" />
            {isSwahili ? 'Iliyotangulia' : 'Previous'}
          </button>

          <button
            onClick={() => navigate('/blockchain-basics')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-flame/20 text-flame
                     hover:bg-flame hover:text-spacecadet transition-all duration-300 font-montserrat"
          >
            <HiHome className="w-5 h-5" />
            {isSwahili ? 'Msingi wa Blockchain' : 'Blockchain Basics'}
          </button>

          <button
              onClick={() => step === 3 ? navigate('/blockchain-basics/cryptography') : setStep(Math.min(3, step + 1))}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-flame text-spacecadet transition-all duration-300 font-montserrat"
            >
              {isSwahili ? 'Inayofuata' : 'Next'}
              <HiArrowRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Decentralization;