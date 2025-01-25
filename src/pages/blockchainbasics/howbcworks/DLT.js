import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight, HiHome } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const DLT = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSwahili, setIsSwahili] = useState(false);
  
  const content = {
    1: {
      en: {
        title: "What is Blockchain?",
        description: "Blockchain is a shared digital ledger that records transactions across a network of computers. Unlike traditional systems where a central authority maintains records, blockchain distributes identical copies of the ledger to all participants.",
        visualization: (
          <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
            <div className="flex justify-center items-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-flame/20 flex items-center justify-center">
                  <span className="text-2xl text-flame font-bold">N</span>
                </div>
                <p className="text-dun">Network Node</p>
              </div>
              <div className="text-6xl text-flame">→</div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-flame flex items-center justify-center">
                  <span className="text-2xl text-spacecadet">📒</span>
                </div>
                <p className="text-dun">Shared Ledger</p>
              </div>
            </div>
          </div>
        )
      },
      sw: {
        title: "Blockchain ni Nini?",
        description: "Blockchain ni kitabu cha dijitali kinachoshirikiwa ambacho kinarekodi miamala katika mtandao wa kompyuta. Tofauti na mifumo ya kawaida ambapo mamlaka kuu hutunza rekodi, blockchain hugawa nakala sawa za leja kwa washiriki wote.",
        visualization: (
          <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
            <div className="flex justify-center items-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-flame/20 flex items-center justify-center">
                  <span className="text-2xl text-flame font-bold">N</span>
                </div>
                <p className="text-dun">Nodi ya Mtandao</p>
              </div>
              <div className="text-6xl text-flame">→</div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-flame flex items-center justify-center">
                  <span className="text-2xl text-spacecadet">📒</span>
                </div>
                <p className="text-dun">Leja Inayoshirikiwa</p>
              </div>
            </div>
          </div>
        )
      }
    },
    2: {
      en: {
        title: "How Does It Work?",
        description: "Transactions are grouped into blocks. Each block contains a unique code (hash) that links it to the previous block, forming a chain. This chain cannot be altered without changing all subsequent blocks, making it tamper-proof.",
        visualization: (
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              {[1, 2, 3].map((block) => (
                <div key={block} className="w-full md:w-48 p-4 bg-spacecadet rounded-xl border-2 border-flame/20">
                  <div className="text-xs text-flame/80">Previous Hash</div>
                  <div className="text-dun/60 text-xs truncate">0x8f4a...</div>
                  <div className="my-2 text-flame font-bold">Block {block}</div>
                  <div className="text-xs text-flame/80">Transactions</div>
                  <div className="text-dun/60 text-xs">Data</div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      sw: {
        title: "Inafanyaje Kazi?",
        description: "Miamala huwekwa katika vikundi vya blocks. Kila block ina msimbo wa kipekee (hash) unaoiunganisha na block iliyotangulia, na kuunda mnyororo. Mnyororo huu hauwezi kubadilishwa bila kubadilisha blocks zote zinazofuata, na kufanya iwezekane kuhifadhi data bila kuharibiwa.",
        visualization: null
      }
    },
    3: {
      en: {
        title: "Why Is It Important?",
        description: "Blockchain ensures transparency and trust without need for intermediaries. Once recorded, data cannot be altered, creating an immutable history. This makes it perfect for financial transactions, supply chain tracking, and more.",
        visualization: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Transparent", icon: "👁️" },
              { title: "Immutable", icon: "🔒" },
              { title: "Decentralized", icon: "🌐" }
            ].map((feature) => (
              <div key={feature.title} className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-flame font-bold mb-2">{feature.title}</h3>
              </div>
            ))}
          </div>
        )
      },
      sw: {
        title: "Kwa Nini ni Muhimu?",
        description: "Blockchain inahakikisha uwazi na imani bila kuhitaji watu wa kati. Data ikishaandikwa haiwezi kubadilishwa, na kuunda historia isiyoweza kubadilishwa. Hii inaifanya iwe bora kwa miamala ya kifedha, ufuatiliaji wa ugavi, na zaidi.",
        visualization: null
      }
    }
  };

  const currentContent = content[step][isSwahili ? 'sw' : 'en'];

  const handleNext = () => {
    if (step === 3) {
      navigate('/blockchain-basics/consensus');
    } else {
      setStep(prev => Math.min(3, prev + 1));
    }
  };

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
            {currentContent.visualization}
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

export default DLT;