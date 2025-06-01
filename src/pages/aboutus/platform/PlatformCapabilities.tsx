import React, { useState } from 'react';
import { 
  HiCode, 
  HiCog, 
  HiGlobe, 
  HiChevronLeft, 
  HiChevronRight,
  HiPlay,
  HiEye
} from 'react-icons/hi';

// Import the capability components
import VisualContractBuilder from './VisualContractBuilder';
import EnterpriseIntegration from './EnterpriseIntegration';
import MultiLanguageInterface from './MultiLanguageInterface';

interface Capability {
  id: string;
  title: string;
  titleSwahili: string;
  description: string;
  descriptionSwahili: string;
  icon: React.ReactNode;
  color: string;
  component: React.ComponentType;
  features: string[];
}

const PlatformCapabilities: React.FC = () => {
  const [activeCapability, setActiveCapability] = useState<number>(0);
  const [isFullDemo, setIsFullDemo] = useState<boolean>(false);

  const capabilities: Capability[] = [
    {
      id: 'visual-builder',
      title: 'Visual Smart Contract Builder',
      titleSwahili: 'Mjenzi wa Mikataba Mjanja kwa Muonekano',
      description: 'Create smart contracts with drag-and-drop interface - no coding required',
      descriptionSwahili: 'Tengeneza mikataba mjanja kwa kuvuta na kuweka - hakuna mahitaji ya kuandika kodi',
      icon: <HiCode className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-600',
      component: VisualContractBuilder,
      features: [
        'Drag-and-drop interface',
        'Pre-built templates',
        'Real-time code preview',
        'One-click deployment'
      ]
    },
    {
      id: 'enterprise-integration',
      title: 'Enterprise Integration Layer',
      titleSwahili: 'Tabaka la Muunganisho wa Biashara',
      description: 'Seamlessly connect your existing CRM, ERP, and payment systems',
      descriptionSwahili: 'Unganisha mifumo yako ya sasa ya CRM, ERP, na malipo bila matatizo',
      icon: <HiCog className="w-8 h-8" />,
      color: 'from-green-500 to-blue-600',
      component: EnterpriseIntegration,
      features: [
        'Zero downtime deployment',
        'Real-time data sync',
        'API-first architecture',
        'Enterprise security'
      ]
    },
    {
      id: 'multi-language',
      title: 'Multi-Language Interface',
      titleSwahili: 'Kiolesura cha Lugha Nyingi',
      description: 'Native support for English, Swahili with cultural adaptations',
      descriptionSwahili: 'Msaada wa asili wa Kiingereza, Kiswahili na mabadiliko ya kitamaduni',
      icon: <HiGlobe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      component: MultiLanguageInterface,
      features: [
        'Real-time translation',
        'Cultural adaptations',
        'Local currency support',
        'Time zone awareness'
      ]
    }
  ];

  const currentCapability = capabilities[activeCapability];
  const CurrentComponent = currentCapability.component;

  const nextCapability = () => {
    setActiveCapability((prev) => (prev + 1) % capabilities.length);
  };

  const prevCapability = () => {
    setActiveCapability((prev) => (prev - 1 + capabilities.length) % capabilities.length);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {!isFullDemo ? (
        /* Overview Mode */
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-6">
                Platform Capabilities
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Uwezo wa Jukwaa
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Experience Sanidi's powerful features through interactive demonstrations
              </p>
            </div>

            {/* Capability Selector */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-gray-800 rounded-2xl p-2">
                {capabilities.map((capability, index) => (
                  <button
                    key={capability.id}
                    onClick={() => setActiveCapability(index)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      activeCapability === index
                        ? 'bg-orange-500 text-white transform scale-105'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                    }`}
                  >
                    {capability.icon}
                    <span className="hidden md:block">{capability.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Demo Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Demo Preview */}
              <div className="lg:col-span-2">
                <div className="bg-gray-800 rounded-2xl p-8 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentCapability.color} opacity-5`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${currentCapability.color} text-white`}>
                          {currentCapability.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-100">
                            {currentCapability.title}
                          </h2>
                          <p className="text-orange-400">
                            {currentCapability.titleSwahili}
                          </p>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setIsFullDemo(true)}
                        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        <HiPlay className="w-5 h-5" />
                        Full Demo
                      </button>
                    </div>

                    <p className="text-gray-300 text-lg mb-8">
                      {currentCapability.description}
                    </p>

                    {/* Mini Demo Content */}
                    <div className="bg-gray-700 rounded-xl p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-100 mb-4">Interactive Preview</h3>
                      
                      {/* Simplified demo based on capability */}
                      {currentCapability.id === 'visual-builder' && (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="bg-blue-500 p-3 rounded-lg text-white text-sm">
                              Transfer Function
                            </div>
                            <div className="bg-green-500 p-3 rounded-lg text-white text-sm">
                              Mint Tokens
                            </div>
                            <div className="bg-purple-500 p-3 rounded-lg text-white text-sm">
                              Only Owner
                            </div>
                          </div>
                          <div className="bg-gray-600 rounded-lg p-4 border-2 border-dashed border-gray-500 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">Drop blocks here</span>
                          </div>
                        </div>
                      )}

                      {currentCapability.id === 'enterprise-integration' && (
                        <div className="flex items-center justify-between">
                          <div className="bg-blue-500 p-3 rounded-lg text-white text-sm">CRM</div>
                          <div className="flex-1 mx-4 border-t-2 border-orange-500 relative">
                            <div className="w-3 h-3 bg-orange-500 rounded-full absolute -top-1.5 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
                          </div>
                          <div className="bg-orange-500 p-3 rounded-lg text-white text-sm">Sanidi</div>
                          <div className="flex-1 mx-4 border-t-2 border-purple-500 relative">
                            <div className="w-3 h-3 bg-purple-500 rounded-full absolute -top-1.5 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
                          </div>
                          <div className="bg-purple-500 p-3 rounded-lg text-white text-sm">Blockchain</div>
                        </div>
                      )}

                      {currentCapability.id === 'multi-language' && (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-blue-500/20 border border-blue-500 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-300 mb-2">English</h4>
                            <p className="text-blue-200 text-sm">Total Revenue: $125,000</p>
                          </div>
                          <div className="bg-green-500/20 border border-green-500 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-300 mb-2">Kiswahili</h4>
                            <p className="text-green-200 text-sm">Mapato Jumla: KES 16,250,000</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between">
                      <button
                        onClick={prevCapability}
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                      >
                        <HiChevronLeft className="w-5 h-5" />
                        Previous
                      </button>
                      <span className="text-gray-500 text-sm">
                        {activeCapability + 1} of {capabilities.length}
                      </span>
                      <button
                        onClick={nextCapability}
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                      >
                        Next
                        <HiChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {currentCapability.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* All Capabilities Overview */}
                <div className="bg-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">All Capabilities</h3>
                  <div className="space-y-3">
                    {capabilities.map((capability, index) => (
                      <button
                        key={capability.id}
                        onClick={() => setActiveCapability(index)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                          activeCapability === index
                            ? 'bg-orange-500/20 border border-orange-500'
                            : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${activeCapability === index ? 'bg-orange-500' : 'bg-gray-600'} text-white`}>
                            {capability.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-100 text-sm">
                              {capability.title}
                            </h4>
                            <p className="text-gray-400 text-xs">
                              {capability.titleSwahili}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-8 border border-orange-500/30">
                <h3 className="text-3xl font-bold text-orange-500 mb-4">
                  Ready to Experience Sanidi?
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  Start your 6-week Web3 transformation journey today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setIsFullDemo(true)}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <HiEye className="w-5 h-5" />
                    Explore Full Demos
                  </button>
                  <button className="bg-transparent border-2 border-gray-600 text-gray-100 font-semibold px-8 py-4 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Full Demo Mode */
        <div className="min-h-screen">
          <div className="sticky top-0 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 p-4 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsFullDemo(false)}
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <HiChevronLeft className="w-5 h-5" />
                  Back to Overview
                </button>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${currentCapability.color} text-white`}>
                    {currentCapability.icon}
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-100">{currentCapability.title}</h2>
                    <p className="text-orange-400 text-sm">{currentCapability.titleSwahili}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {capabilities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCapability(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeCapability === index ? 'bg-orange-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <CurrentComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformCapabilities;