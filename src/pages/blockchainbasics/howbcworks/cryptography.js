import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight, HiHome } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Cryptography = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSwahili, setIsSwahili] = useState(false);

  const content = {
    1: {
      en: {
        title: "Hashing in Blockchain",
        description: "Hashing converts data into a fixed-length string of characters. In blockchain, each block's hash is based on its contents and the previous block's hash, creating an unbreakable chain.",
        visual: (
          <div className="space-y-4">
            <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1 p-4 bg-flame/10 rounded-lg">
                  <p className="text-dun text-sm">Block Data:</p>
                  <p className="text-flame font-mono">Transaction #1234</p>
                </div>
                <div className="text-2xl">→</div>
                <div className="flex-1 p-4 bg-flame/10 rounded-lg">
                  <p className="text-dun text-sm">Hash:</p>
                  <p className="text-flame font-mono text-sm">8d969eef6ecad3c29a3a629280e686cf</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      sw: {
        title: "Hashing katika Blockchain",
        description: "Hashing hubadilisha data kuwa mkururo wa herufi wa urefu maalum. Katika blockchain, hash ya kila block inategemea yaliyomo ndani yake na hash ya block iliyopita, kuunda mnyororo usioweza kuvunjwa.",
        visual: null
      }
    },
    2: {
      en: {
        title: "Digital Signatures",
        description: "Digital signatures prove ownership and validate transactions. When you send crypto, you sign the transaction with your private key, and anyone can verify it with your public key.",
        visual: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
              <h3 className="text-flame font-bold mb-4 text-center">Sign with Private Key</h3>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-flame/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔑</span>
                </div>
                <div className="text-2xl">→</div>
                <div className="w-12 h-12 bg-flame/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
              <h3 className="text-flame font-bold mb-4 text-center">Verify with Public Key</h3>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-flame/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔓</span>
                </div>
                <div className="text-2xl">→</div>
                <div className="w-12 h-12 bg-flame/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
              </div>
            </div>
          </div>
        )
      },
      sw: {
        title: "Saini za Dijitali",
        description: "Saini za dijitali zinathibitisha umiliki na kuthibitisha miamala. Unapotuma crypto, unasaini muamala kwa ufunguo wako wa kibinafsi, na mtu yeyote anaweza kuithibitisha kwa ufunguo wako wa umma.",
        visual: null
      }
    },
    3: {
      en: {
        title: "Public-Private Key Pairs",
        description: "Your public key is like your email address - share it to receive crypto. Your private key is like your password - keep it secret and use it to send crypto. Never share your private key!",
        visual: (
          <div className="p-6 bg-spacecadet rounded-xl border-2 border-flame/20">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-flame flex items-center justify-center">
                  <span className="text-4xl">🔓</span>
                </div>
                <h3 className="text-flame font-bold">Public Key</h3>
                <p className="text-dun text-sm mt-2">Share freely</p>
                <p className="text-flame/60 font-mono text-xs mt-2">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-4xl">🔐</span>
                </div>
                <h3 className="text-flame font-bold">Private Key</h3>
                <p className="text-dun text-sm mt-2">Keep secret!</p>
                <p className="text-flame/60 font-mono text-xs mt-2">******************************</p>
              </div>
            </div>
          </div>
        )
      },
      sw: {
        title: "Vifungo vya Ufunguo wa Umma-Binafsi",
        description: "Ufunguo wako wa umma ni kama anwani yako ya barua pepe - shiriki kupokea crypto. Ufunguo wako wa kibinafsi ni kama nywila yako - iweke siri na uitumie kutuma crypto. Kamwe usishiriki ufunguo wako wa kibinafsi!",
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
            onClick={() => step === 3 ? navigate('/blockchain-basics/basics-quiz') : setStep(Math.min(3, step + 1))}
           
            className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-flame text-spacecadet
                     transition-all duration-300 font-montserrat`}
          >
            {isSwahili ? 'Inayofuata' : 'Next'}
            <HiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cryptography;