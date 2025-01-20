import React, { useState } from 'react';

const StarkNetBasics2 = () => {
  const [activeSection, setActiveSection] = useState(null);

  const mainSection = {
    title: "What is StarkNet",
    content: "Starknet is a permissionless layer-2 scaling solution for Ethereum. It allows developers to create scalable and secure decentralized applications (dApps) while benefiting from Ethereum's security. Starknet bundles multiple transactions together off-chain and then submits a single, compressed proof back to the Ethereum mainnet, reducing gas costs and improving transaction speed.",
    subsections: [
      {
        title: "STARK Technology?",
        content: "StarkNet uses STARK (Scalable Transparent ARgument of Knowledge) proofs to validate transactions. These cryptographic proofs allow for secure and efficient verification of computations without revealing the underlying data."
      },
      {
        title: "zk-STARKs VS zk-SNARKs",
        content: "StarkNet uses STARK (Scalable Transparent ARgument of Knowledge) proofs to validate transactions. These cryptographic proofs allow for secure and efficient verification of computations without revealing the underlying data."
      },
      {
        title: "ZK-Rollups",
        content: "StarkNet implements Zero-Knowledge Rollups, where multiple transactions are 'rolled up' into a single proof. This proof is then submitted to Ethereum, significantly reducing the data that needs to be stored on the main chain."
      }
    ]
  };

  const buttonSections = [
    {
      title: "Smart Contracts in Cairo",
      content: "Cairo is the native programming language of StarkNet. It's designed specifically for writing provable programs and StarkNet smart contracts. Cairo combines the flexibility of Python's syntax with the safety and efficiency needed for blockchain applications."
    },
    {
      title: "Account Abstraction",
      content: "StarkNet implements native account abstraction, meaning all accounts are smart contracts. This provides enhanced security features and flexibility in transaction validation, allowing for innovative account management solutions."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-spacecadet">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-spacecadet/85 via-[#21253A]/80 to-spacecadet/75" />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-dun rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="w-full p-8 mb-8">
          <h1 className="text-6xl font-bold text-center font-morgath text-flame">StarkNet Basics</h1>
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto p-4 space-y-16">
          {/* Main Section with Subsections */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border-2 border-dun/20">
            <h2 className="text-4xl font-bold mb-6 font-morgath text-flame">{mainSection.title}</h2>
            <p className="text-xl leading-relaxed font-montserrat text-dun">
              {mainSection.content}
            </p>
            
            {/* Subsections */}
            <div className="space-y-8 mt-12">
              {mainSection.subsections.map((subsection, index) => (
                <div key={index} className="border-l-4 border-flame pl-6 transform hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-4 font-morgath text-flame">{subsection.title}</h3>
                  <p className="text-lg font-montserrat text-dun">{subsection.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Button Navigation Section */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border-2 border-dun/20">
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {buttonSections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`group p-4 text-xl font-bold rounded-xl font-morgath transform hover:scale-[1.02] transition-all duration-300
                    ${activeSection === index
                      ? 'bg-gradient-to-r from-flame to-flame/80 text-dun'
                      : 'bg-white/5 border-2 border-dun/20 text-dun hover:border-flame/50'
                    }`}
                >
                  <span className="min-w-[200px] inline-block">{section.title}</span>
                </button>
              ))}
            </div>

            {/* Button Content Display */}
            {activeSection !== null && (
              <div className="mt-8 transform hover:scale-[1.02] transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-6 font-morgath text-flame">
                  {buttonSections[activeSection].title}
                </h2>
                <p className="text-xl leading-relaxed font-montserrat text-dun">
                  {buttonSections[activeSection].content}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default StarkNetBasics2;
