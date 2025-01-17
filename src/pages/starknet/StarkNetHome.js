import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const StarkNetHome = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: 'basics',
      titleEn: 'Understand StarkNet Basics',
      titleSw: 'Fahamu Misingi ya StarkNet',
      path: '/starknet/basics'
    },
    {
        id: 'wallet',
        titleEn: 'Connect to a Wallet',
        titleSw: 'Unganisha na Wallet',
        path: '/starknet/connectwallet'
    },
    {
      id: 'environment',
      titleEn: 'Set Up Your Development Environment',
      titleSw: 'Weka Mazingira ya Kutengeneza',
      path: '/starknet/setup'
    },
    {
      id: 'contract',
      titleEn: 'Write a StarkNet Contract',
      titleSw: 'Andika Mkataba wa StarkNet',
      path: '/starknet/write'
    },
    {
      id: 'compile',
      titleEn: 'Compile the Contract',
      titleSw: 'Kusanya Mkataba',
      path: '/starknet/compile'
    },
    {
      id: 'deploy',
      titleEn: 'Deploy to StarkNet',
      titleSw: 'Peleka kwenye StarkNet',
      path: '/starknet/deploy'
    },
    {
      id: 'interact',
      titleEn: 'Interact with the Contract',
      titleSw: 'Tumia Mkataba',
      path: '/starknet/interact'
    },
    {
      id: 'ecosystem',
      titleEn: 'Explore StarkNet Ecosystem',
      titleSw: 'Chunguza Ikolojia ya StarkNet',
      path: '/starknet/ecosystem'
    },
    {
      id: 'mainnet-final',
      titleEn: 'Deploy on Mainnet',
      titleSw: 'Peleka kwenye Mainnet',
      path: '/starknet/mainnet-deploy'
    }
  ];

  return (
    <div className="min-h-[90vh] bg-spacecadet pt-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-spacecadet/85 via-spacecadet/80 to-spacecadet/75" />

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-1/4 -right-4 w-72 h-72 bg-dun rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-dun mb-4">
              StarkNet Development
            </h1>
            <p className="text-xl text-flame/90 font-montserrat">
              Maendeleo ya StarkNet
            </p>
          </div>

          {/* Grid of Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => navigate(section.path)}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border-2 border-dun/20 
                         hover:border-flame/50 transform hover:scale-[1.02] transition-all duration-300
                         flex flex-col items-start space-y-4"
              >
                <div className="w-full">
                  <h3 className="text-xl font-montserrat text-dun mb-2">
                    {section.titleEn}
                  </h3>
                  <p className="text-flame/90 font-montserrat">
                    {section.titleSw}
                  </p>
                </div>
                <div className="flex items-center text-dun/60 group-hover:text-flame transition-colors">
                  <HiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
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

export default StarkNetHome;