import React, { useState } from 'react';
import { 
  HiArrowRight, 
  HiClock, 
  HiCurrencyDollar, 
  HiCog,
  HiGlobe,
  HiShieldCheck,
  HiTrendingUp,
  HiDatabase,
  HiLightningBolt,
  HiRefresh
} from 'react-icons/hi';

const ImplementationShowcase: React.FC = () => {
  const [comparisonSlider, setComparisonSlider] = useState<number>(50);
  const [selectedIntegration, setSelectedIntegration] = useState<string>('erp');

  const beforeAfterComparisons = [
    {
      metric: 'Time to Implement',
      before: '18 months',
      after: '6 weeks',
      improvement: '12x faster',
      icon: <HiClock className="w-6 h-6" />
    },
    {
      metric: 'Cost to Deploy',
      before: '$2.5M',
      after: '$250K',
      improvement: '90% savings',
      icon: <HiCurrencyDollar className="w-6 h-6" />
    },
    {
      metric: 'Technical Complexity',
      before: 'High - Requires blockchain experts',
      after: 'Simple - Drag & drop interface',
      improvement: 'No coding required',
      icon: <HiCog className="w-6 h-6" />
    },
    {
      metric: 'Language Support',
      before: 'English only',
      after: 'Multi-language (EN/SW)',
      improvement: 'Cultural adaptation',
      icon: <HiGlobe className="w-6 h-6" />
    }
  ];

  const integrationExamples = [
    {
      id: 'erp',
      name: 'ERP Integration',
      nameSwahili: 'Muunganisho wa ERP',
      description: 'Connect existing ERP systems with blockchain functionality',
      steps: [
        { step: 'API Discovery', description: 'Automatic detection of existing ERP endpoints' },
        { step: 'Data Mapping', description: 'Map ERP fields to blockchain smart contracts' },
        { step: 'Real-time Sync', description: 'Bidirectional data synchronization' },
        { step: 'Smart Triggers', description: 'Automated blockchain actions based on ERP events' }
      ],
      techStack: ['REST APIs', 'GraphQL', 'Webhooks', 'Smart Contracts'],
      supportedSystems: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Odoo', 'Custom ERPs']
    },
    {
      id: 'crm',
      name: 'CRM Integration',
      nameSwahili: 'Muunganisho wa CRM',
      description: 'Enhance customer relationship management with Web3 capabilities',
      steps: [
        { step: 'Customer Onboarding', description: 'Automatic Web3 wallet creation for customers' },
        { step: 'Loyalty Integration', description: 'Convert CRM points to blockchain tokens' },
        { step: 'Engagement Tracking', description: 'Transparent customer interaction history' },
        { step: 'Reward Automation', description: 'Smart contract-based reward distribution' }
      ],
      techStack: ['OAuth 2.0', 'JWT Tokens', 'ERC-20', 'Push Notifications'],
      supportedSystems: ['Salesforce', 'HubSpot', 'Zoho', 'Pipedrive', 'Custom CRMs']
    },
    {
      id: 'payment',
      name: 'Payment Gateway Integration',
      nameSwahili: 'Muunganisho wa Malango ya Malipo',
      description: 'Seamless integration with existing payment infrastructure',
      steps: [
        { step: 'Gateway Setup', description: 'Configure existing payment providers' },
        { step: 'Stablecoin Bridge', description: 'Convert fiat to cryptocurrency automatically' },
        { step: 'Multi-currency Support', description: 'Handle local and international currencies' },
        { step: 'Settlement Automation', description: 'Instant settlement via smart contracts' }
      ],
      techStack: ['Payment APIs', 'Stablecoins', 'Multi-sig Wallets', 'DeFi Protocols'],
      supportedSystems: ['M-Pesa', 'Flutterwave', 'Paystack', 'Stripe', 'PayPal']
    }
  ];

  const workflowSteps = [
    {
      title: 'Data Input',
      description: 'Information enters from existing systems',
      icon: <HiDatabase className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Smart Processing',
      description: 'Sanidi processes and validates data',
      icon: <HiCog className="w-8 h-8" />,
      color: 'bg-orange-500'
    },
    {
      title: 'Blockchain Action',
      description: 'Smart contracts execute automatically',
      icon: <HiShieldCheck className="w-8 h-8" />,
      color: 'bg-purple-500'
    },
    {
      title: 'Real-time Updates',
      description: 'All systems sync with new state',
      icon: <HiRefresh className="w-8 h-8" />,
      color: 'bg-green-500'
    }
  ];

  const activeIntegration = integrationExamples.find(int => int.id === selectedIntegration);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
            Implementation Showcase
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            See how Sanidi transforms your existing infrastructure
          </p>
          <p className="text-orange-400">
            Ona jinsi Sanidi inavyobadilisha miundombinu yako iliyopo
          </p>
        </div>

        {/* Before vs After Comparison */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-200 mb-8 text-center">
            Before Sanidi vs. After Sanidi
          </h3>
          
          {/* Interactive Slider */}
          <div className="mb-12">
            <div className="bg-gray-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before Section */}
                <div className={`transition-opacity duration-500 ${comparisonSlider > 50 ? 'opacity-50' : 'opacity-100'}`}>
                  <h4 className="text-xl font-semibold text-red-300 mb-6 text-center">Traditional Approach</h4>
                  <div className="space-y-4">
                    {beforeAfterComparisons.map((comparison, index) => (
                      <div key={index} className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-red-400">{comparison.icon}</div>
                          <span className="font-semibold text-gray-200">{comparison.metric}</span>
                        </div>
                        <p className="text-red-300 font-bold">{comparison.before}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After Section */}
                <div className={`transition-opacity duration-500 ${comparisonSlider < 50 ? 'opacity-50' : 'opacity-100'}`}>
                  <h4 className="text-xl font-semibold text-green-300 mb-6 text-center">Sanidi Approach</h4>
                  <div className="space-y-4">
                    {beforeAfterComparisons.map((comparison, index) => (
                      <div key={index} className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-green-400">{comparison.icon}</div>
                          <span className="font-semibold text-gray-200">{comparison.metric}</span>
                        </div>
                        <p className="text-green-300 font-bold">{comparison.after}</p>
                        <p className="text-green-200 text-sm">{comparison.improvement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider Control */}
              <div className="mt-8">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={comparisonSlider}
                  onChange={(e) => setComparisonSlider(Number(e.target.value))}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                  <span>Traditional</span>
                  <span>Sanidi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Examples */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-200 mb-8 text-center">
            Integration Examples
          </h3>
          
          {/* Integration Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 rounded-2xl p-2">
              {integrationExamples.map((integration) => (
                <button
                  key={integration.id}
                  onClick={() => setSelectedIntegration(integration.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedIntegration === integration.id
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <div className="text-sm">{integration.name}</div>
                  <div className="text-xs opacity-80">{integration.nameSwahili}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Integration Details */}
          {activeIntegration && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Integration Steps */}
              <div className="bg-gray-800 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-100 mb-6">{activeIntegration.name}</h4>
                <p className="text-gray-300 mb-6">{activeIntegration.description}</p>
                
                <div className="space-y-4">
                  {activeIntegration.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-100">{step.step}</h5>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Details */}
              <div className="bg-gray-800 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-100 mb-6">Technical Stack</h4>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-200 mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {activeIntegration.techStack.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-200 mb-3">Supported Systems:</h5>
                  <div className="space-y-2">
                    {activeIntegration.supportedSystems.map((system, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <HiShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{system}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Automation Workflow */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-200 mb-8 text-center">
            Smart Contract Automation Workflow
          </h3>
          
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`${step.color} rounded-xl p-6 mb-4 mx-auto w-fit`}>
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <h4 className="font-semibold text-gray-100 mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                  
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block">
                      <HiArrowRight className="w-6 h-6 text-orange-500 mx-auto mt-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Multi-language Dashboard Preview */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-100 mb-6 text-center">
            Multi-language Dashboard Interface
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
              <h4 className="font-semibold text-blue-300 mb-4">English Interface</h4>
              <div className="space-y-3">
                <div className="bg-gray-700 rounded p-3">
                  <div className="text-gray-200 font-semibold">Total Revenue: $125,000</div>
                  <div className="text-gray-400 text-sm">Monthly performance tracking</div>
                </div>
                <div className="bg-gray-700 rounded p-3">
                  <div className="text-gray-200 font-semibold">Active Contracts: 47</div>
                  <div className="text-gray-400 text-sm">Smart contracts deployed</div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
              <h4 className="font-semibold text-green-300 mb-4">Swahili Interface</h4>
              <div className="space-y-3">
                <div className="bg-gray-700 rounded p-3">
                  <div className="text-gray-200 font-semibold">Mapato Jumla: KES 16,250,000</div>
                  <div className="text-gray-400 text-sm">Ufuatiliaji wa utendaji wa mwezi</div>
                </div>
                <div className="bg-gray-700 rounded p-3">
                  <div className="text-gray-200 font-semibold">Mikataba Inayotumika: 47</div>
                  <div className="text-gray-400 text-sm">Mikataba mjanja iliyosambazwa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Styles */}
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
};

export default ImplementationShowcase;