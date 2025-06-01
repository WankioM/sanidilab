import React from 'react';
import { 
  HiCheckCircle, 
  HiArrowRight,
  HiShieldCheck,
  HiGlobe,
  HiClipboardList,
  HiCurrencyDollar,
  HiBeaker,
  HiIdentification
} from 'react-icons/hi';
import { Industry, IndustryData } from './UseCases';

interface IndustrySpecificProps {
  industries: IndustryData[];
  selectedIndustry: Industry;
  onIndustryChange: (industry: Industry) => void;
}

const IndustrySpecific: React.FC<IndustrySpecificProps> = ({
  industries,
  selectedIndustry,
  onIndustryChange
}) => {
  // Extended industry data with specific solutions
  const industrySpecificSolutions = {
    manufacturing: {
      solutions: [
        {
          title: 'Parts Authentication',
          description: 'Verify genuine components with blockchain certificates',
          icon: <HiShieldCheck className="w-6 h-6" />,
          benefits: ['Eliminate counterfeits', 'Protect brand reputation', 'Ensure quality standards'],
          implementation: 'QR codes on parts link to immutable certificates'
        },
        {
          title: 'Quality Tracking',
          description: 'Immutable records of testing and certifications',
          icon: <HiClipboardList className="w-6 h-6" />,
          benefits: ['Ensure compliance', 'Track defects', 'Improve processes'],
          implementation: 'Automated quality data recording at each stage'
        },
        {
          title: 'Supplier Payments',
          description: 'Automatic payments on delivery milestones',
          icon: <HiCurrencyDollar className="w-6 h-6" />,
          benefits: ['Faster settlements', 'Reduced disputes', 'Improved cash flow'],
          implementation: 'Smart contracts trigger payments on delivery confirmation'
        }
      ]
    },
    agriculture: {
      solutions: [
        {
          title: 'Crop Provenance',
          description: 'Track from seed to supermarket shelf',
          icon: <HiGlobe className="w-6 h-6" />,
          benefits: ['Premium pricing', 'Consumer trust', 'Export compliance'],
          implementation: 'Farm-to-fork traceability with IoT sensors'
        },
        {
          title: 'Fair Trade Verification',
          description: 'Transparent farmer payment records',
          icon: <HiCurrencyDollar className="w-6 h-6" />,
          benefits: ['Fair compensation', 'Ethical sourcing', 'Brand differentiation'],
          implementation: 'Immutable payment records and farmer verification'
        },
        {
          title: 'Export Documentation',
          description: 'Automated compliance for international sales',
          icon: <HiClipboardList className="w-6 h-6" />,
          benefits: ['Faster customs', 'Reduced paperwork', 'Lower costs'],
          implementation: 'Digital certificates accepted by customs authorities'
        }
      ]
    },
    healthcare: {
      solutions: [
        {
          title: 'Drug Authentication',
          description: 'Combat counterfeit medications',
          icon: <HiShieldCheck className="w-6 h-6" />,
          benefits: ['Patient safety', 'Brand protection', 'Regulatory compliance'],
          implementation: 'Tamper-proof packaging with blockchain verification'
        },
        {
          title: 'Patient Records',
          description: 'Secure, portable medical history',
          icon: <HiIdentification className="w-6 h-6" />,
          benefits: ['Better care continuity', 'Patient privacy', 'Emergency access'],
          implementation: 'Encrypted records with patient-controlled access'
        },
        {
          title: 'Insurance Claims',
          description: 'Automated processing and payments',
          icon: <HiCurrencyDollar className="w-6 h-6" />,
          benefits: ['Faster claims', 'Reduced fraud', 'Lower admin costs'],
          implementation: 'Smart contracts automate claim verification and payment'
        }
      ]
    },
    government: {
      solutions: [
        {
          title: 'Identity Verification',
          description: 'Tamper-proof digital IDs',
          icon: <HiIdentification className="w-6 h-6" />,
          benefits: ['Reduce fraud', 'Enable digital services', 'Improve security'],
          implementation: 'Blockchain-based national ID system'
        },
        {
          title: 'Public Procurement',
          description: 'Transparent bidding and contracting',
          icon: <HiClipboardList className="w-6 h-6" />,
          benefits: ['Reduce corruption', 'Fair competition', 'Public trust'],
          implementation: 'Immutable bid records and automated contract execution'
        },
        {
          title: 'Land Registry',
          description: 'Immutable property ownership records',
          icon: <HiGlobe className="w-6 h-6" />,
          benefits: ['Prevent disputes', 'Enable loans', 'Secure ownership'],
          implementation: 'Blockchain-based land titles with GPS coordinates'
        }
      ]
    }
  };

  const currentIndustry = industries.find(ind => ind.id === selectedIndustry);
  const currentSolutions = industrySpecificSolutions[selectedIndustry as keyof typeof industrySpecificSolutions];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Tailored Web3 implementations for your sector
          </p>
          <p className="text-orange-400">
            Mifumo ya Web3 iliyoundwa kwa sekta yako
          </p>
        </div>

        {/* Industry Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => onIndustryChange(industry.id)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                selectedIndustry === industry.id
                  ? `bg-gradient-to-br ${industry.color} text-white transform scale-105 shadow-lg`
                  : 'bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'
              }`}
            >
              <div className="text-3xl mb-3">{industry.icon}</div>
              <h3 className="font-semibold text-sm">{industry.name}</h3>
              <p className="text-xs opacity-80 mt-1">{industry.nameSwahili}</p>
            </button>
          ))}
        </div>

        {/* Selected Industry Content */}
        {currentIndustry && currentSolutions && (
          <div>
            {/* Industry Header */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center gap-4 bg-gradient-to-r ${currentIndustry.color} text-white px-8 py-4 rounded-2xl`}>
                <div className="text-2xl">{currentIndustry.icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{currentIndustry.name}</h3>
                  <p className="text-sm opacity-90">{currentIndustry.nameSwahili}</p>
                </div>
              </div>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {currentSolutions.solutions.map((solution, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${currentIndustry.color} text-white`}>
                      {solution.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-100">{solution.title}</h4>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-200 mb-3">Key Benefits:</h5>
                    <div className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-200 mb-2 text-sm">Implementation:</h5>
                    <p className="text-gray-400 text-sm">{solution.implementation}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Industry Statistics */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-gray-100 mb-6 text-center">
                Industry Impact Metrics
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                  <div className="text-gray-400 text-sm">Fraud Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
                  <div className="text-gray-400 text-sm">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5x</div>
                  <div className="text-gray-400 text-sm">Faster Processes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
              </div>
            </div>

            {/* Industry CTA */}
            <div className="mt-12 text-center">
              <div className={`bg-gradient-to-r ${currentIndustry.color} bg-opacity-10 rounded-2xl p-8 border border-opacity-30`}>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  Ready to Transform Your {currentIndustry.name}?
                </h3>
                <p className="text-gray-300 mb-8">
                  Join leading companies already using Sanidi to revolutionize their operations
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                    <span>Get Industry Demo</span>
                    <HiArrowRight className="w-5 h-5" />
                  </button>
                  <button className="bg-transparent border-2 border-gray-600 text-gray-100 font-semibold px-8 py-4 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
                    Download Industry Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustrySpecific;