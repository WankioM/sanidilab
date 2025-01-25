import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight, HiHome } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const ConsensusExplainer = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSwahili, setIsSwahili] = useState(false);

  const consensusMechanisms = {
    1: {
      en: {
        title: "Proof of Work (PoW)",
        description: "Miners compete to solve complex mathematical puzzles. The first to solve it gets to add the next block and receive rewards. This process requires significant computational power and energy.",
        visual: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-flame/20 rounded w-3/4"></div>
                <div className="h-4 bg-flame/20 rounded w-1/2"></div>
                <div className="h-4 bg-flame/30 rounded w-1/4"></div>
              </div>
            </div>
            <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20 flex items-center justify-center">
              <div className="text-4xl">⛏️</div>
            </div>
          </div>
        )
      },
      sw: {
        title: "Uthibitisho wa Kazi (PoW)",
        description: "Wachimbaji hushindana kutatua mafumbo magumu ya hisabati. Wa kwanza kutatua anaruhusiwa kuongeza block inayofuata na kupokea zawadi. Mchakato huu unahitaji nguvu kubwa ya kompyuta na nishati.",
        visual: null
      }
    },
    2: {
      en: {
        title: "Proof of Stake (PoS)",
        description: "Validators are chosen based on how many tokens they stake. More stake means higher chance of being selected to validate the next block. This is more energy-efficient than PoW.",
        visual: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[40, 60].map((stake) => (
              <div key={stake} className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
                <div className="mb-4 text-dun">Validator Stake</div>
                <div className="w-full bg-spacecadet/50 rounded-full h-4">
                  <div 
                    className="bg-flame rounded-full h-4 transition-all duration-500"
                    style={{ width: `${stake}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-flame">{stake}% chance</div>
              </div>
            ))}
          </div>
        )
      },
      sw: {
        title: "Uthibitisho wa Dhamana (PoS)",
        description: "Wathibitishaji huchaguliwa kulingana na idadi ya tokeni wanazoweka. Dhamana kubwa zaidi inamaanisha nafasi kubwa ya kuchaguliwa kuthibitisha block inayofuata. Hii inatumia nishati kidogo kuliko PoW.",
        visual: null
      }
    },
    3: {
      en: {
        title: "Delegated Proof of Stake (DPoS)",
        description: "Token holders vote for a limited number of validator nodes. These elected validators take turns producing blocks. This provides faster transactions while maintaining decentralization.",
        visual: (
          <div className="relative p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
            <div className="flex justify-center items-center">
              <div className="w-24 h-24 rounded-full bg-flame/20 flex items-center justify-center text-4xl mb-4">
                👥
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[1, 2, 3].map((validator) => (
                <div key={validator} className="p-4 bg-spacecadet/50 rounded-lg border border-flame/20 text-center">
                  <div className="text-sm text-dun">Validator {validator}</div>
                  <div className="text-xs text-flame/80 mt-1">Elected</div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      sw: {
        title: "Uthibitisho wa Dhamana Iliyokabidhiwa (DPoS)",
        description: "Wamiliki wa tokeni hupiga kura kwa idadi ndogo ya nodi za uthibitishaji. Wathibitishaji waliochaguliwa huchukua zamu kuzalisha blocks. Hii hutoa miamala ya haraka wakati wa kudumisha usambazaji.",
        visual: null
      }
    },
    4: {
      en: {
        title: "Proof of Authority (PoA)",
        description: "A set of pre-approved validators are responsible for validating transactions and creating new blocks. This is typically used in private blockchains where participants are known and trusted.",
        visual: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🔑</div>
                <div className="text-sm text-dun">Authorized</div>
              </div>
            </div>
            <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20 flex items-center justify-center opacity-50">
              <div className="text-center">
                <div className="text-4xl mb-2">🚫</div>
                <div className="text-sm text-dun">Unauthorized</div>
              </div>
            </div>
            <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20 flex items-center justify-center opacity-50">
              <div className="text-center">
                <div className="text-4xl mb-2">🚫</div>
                <div className="text-sm text-dun">Unauthorized</div>
              </div>
            </div>
          </div>
        )
      },
      sw: {
        title: "Uthibitisho wa Mamlaka (PoA)",
        description: "Seti ya wathibitishaji walioidhinishwa awali wana jukumu la kuthibitisha miamala na kuunda blocks mpya. Hii hutumika katika blockchain za kibinafsi ambapo washiriki wanajulikana na kuaminika.",
        visual: null
      }
    }
  };

  const currentContent = consensusMechanisms[step][isSwahili ? 'sw' : 'en'];

  const handleNext = () => {
    if (step === 4) {
      navigate('/blockchain-basics/consensus-quiz');
    } else {
      setStep(Math.min(4, step + 1));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-spacecadet to-spacecadet/90 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-morgath text-dun">
            {isSwahili ? 'Mifumo ya Makubaliano' : 'Consensus Mechanisms'}
          </h1>
          <button 
            onClick={() => setIsSwahili(!isSwahili)}
            className="px-4 py-2 rounded-lg bg-flame/20 text-flame hover:bg-flame hover:text-spacecadet transition-all duration-300"
          >
            {isSwahili ? 'English' : 'Kiswahili'}
          </button>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-montserrat text-flame">{currentContent.title}</h2>
          <p className="text-lg text-dun/90 font-montserrat leading-relaxed">
            {currentContent.description}
          </p>
          {!isSwahili && currentContent.visual}
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
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-flame text-spacecadet
                     transition-all duration-300 font-montserrat"
          >
            {isSwahili ? 'Inayofuata' : 'Next'}
            <HiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsensusExplainer;