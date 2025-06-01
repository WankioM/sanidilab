import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { Industry, IndustryData } from './UseCases';

interface UseCasesHeroProps {
  selectedIndustry: Industry;
  onIndustryChange: (industry: Industry) => void;
  industries: IndustryData[];
}

const UseCasesHero: React.FC<UseCasesHeroProps> = ({
  selectedIndustry,
  onIndustryChange,
  industries
}) => {
  const selectedIndustryData = industries.find(ind => ind.id === selectedIndustry);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-500 mb-6">
            Web3 Solutions for Real Business Problems
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
            See how enterprises across Africa are using Sanidi to transform their operations
          </p>
          <p className="text-lg text-orange-400 mb-12">
            Ona jinsi makampuni ya Afrika yanavyotumia Sanidi kubadilisha shughuli zao
          </p>

          {/* Industry Selector */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-200 mb-6">Choose Your Industry:</h3>
            
            {/* Mobile Dropdown */}
            <div className="md:hidden mb-6">
              <div className="relative">
                <select
                  value={selectedIndustry}
                  onChange={(e) => onIndustryChange(e.target.value as Industry)}
                  className="w-full bg-gray-800 border border-gray-600 text-gray-100 px-4 py-3 rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-orange-500"
                >
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name}
                    </option>
                  ))}
                </select>
                <HiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex justify-center">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => onIndustryChange(industry.id)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      selectedIndustry === industry.id
                        ? `bg-gradient-to-r ${industry.color} text-white transform scale-105 shadow-lg`
                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-xl">{industry.icon}</span>
                    <div className="text-left">
                      <div className="text-sm font-medium">{industry.name}</div>
                      <div className="text-xs opacity-80">{industry.nameSwahili}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Industry Highlight */}
        {selectedIndustryData && (
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-r ${selectedIndustryData.color} bg-opacity-10 rounded-2xl p-8 border border-opacity-30`}>
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedIndustryData.color} text-white`}>
                    {selectedIndustryData.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-100">{selectedIndustryData.name}</h2>
                    <p className="text-orange-400">{selectedIndustryData.nameSwahili}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedIndustryData.useCases.map((useCase, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-100 mb-2">{useCase.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{useCase.description}</p>
                      <div className="space-y-1">
                        {useCase.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-400 text-xs">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Solutions
            </button>
            <button className="bg-transparent border-2 border-gray-600 text-gray-100 font-semibold px-8 py-4 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
              See Live Demo
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
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
    </section>
  );
};

export default UseCasesHero;