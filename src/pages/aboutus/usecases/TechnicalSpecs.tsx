import React, { useState } from 'react';
import { 
  HiCube, 
  HiCode, 
  HiShieldCheck, 
  HiDatabase,
  HiGlobe,
  HiCog,
  HiLightningBolt,
  HiDeviceMobile,
  HiClipboardCheck,
  HiCurrencyDollar,
  HiUsers,
  HiRefresh
} from 'react-icons/hi';
import { UseCase } from './UseCases';

interface TechnicalSpecsProps {
  selectedUseCase: UseCase;
  onUseCaseChange: (useCase: UseCase) => void;
}

const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({
  selectedUseCase,
  onUseCaseChange
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'integration' | 'security'>('architecture');

  const useCaseSpecs = {
    'supply-chain': {
      name: 'Supply Chain',
      nameSwahili: 'Mlolongo wa Ugavi',
      architecture: {
        components: [
          { name: 'QR Code Integration', description: 'Mobile scanning for instant verification', icon: <HiDeviceMobile className="w-5 h-5" /> },
          { name: 'IoT Connectivity', description: 'Temperature, location, and condition sensors', icon: <HiGlobe className="w-5 h-5" /> },
          { name: 'Multi-Party Access', description: 'Suppliers, manufacturers, distributors, retailers', icon: <HiUsers className="w-5 h-5" /> },
          { name: 'Audit Trails', description: 'Complete transaction history', icon: <HiClipboardCheck className="w-5 h-5" /> }
        ],
        blockchain: ['Ethereum', 'Polygon', 'Arbitrum'],
        dataFlow: 'IoT sensors → QR verification → Smart contracts → Real-time dashboards'
      },
      integration: {
        apis: ['REST API', 'GraphQL', 'Webhooks'],
        protocols: ['HTTPS/TLS', 'MQTT for IoT', 'WebSocket'],
        formats: ['JSON', 'XML', 'EDI'],
        standards: ['GS1', 'ISO 27001', 'FDA 21 CFR Part 11']
      },
      security: {
        encryption: 'AES-256',
        authentication: 'Multi-factor (2FA/3FA)',
        compliance: ['GDPR', 'SOC 2', 'ISO 27001'],
        auditing: 'Immutable blockchain logs'
      }
    },
    'loyalty': {
      name: 'Customer Loyalty',
      nameSwahili: 'Uongozi wa Wateja',
      architecture: {
        components: [
          { name: 'Token Standards', description: 'ERC-20 compatible loyalty tokens', icon: <HiCube className="w-5 h-5" /> },
          { name: 'Exchange Mechanisms', description: 'Automated token swapping', icon: <HiRefresh className="w-5 h-5" /> },
          { name: 'Partner APIs', description: 'Easy integration for new brands', icon: <HiCode className="w-5 h-5" /> },
          { name: 'Mobile Wallets', description: 'iOS and Android support', icon: <HiDeviceMobile className="w-5 h-5" /> }
        ],
        blockchain: ['Ethereum', 'Polygon', 'BSC'],
        dataFlow: 'Customer actions → Point calculation → Token minting → Cross-brand redemption'
      },
      integration: {
        apis: ['REST API', 'GraphQL', 'SDK'],
        protocols: ['OAuth 2.0', 'JWT', 'Push notifications'],
        formats: ['JSON', 'Mobile deep links'],
        standards: ['ERC-20', 'EIP-712', 'BIP-39']
      },
      security: {
        encryption: 'End-to-end encryption',
        authentication: 'Biometric + PIN',
        compliance: ['PCI DSS', 'GDPR', 'CCPA'],
        auditing: 'Real-time fraud detection'
      }
    },
    'payments': {
      name: 'Cross-Border Payments',
      nameSwahili: 'Malipo ya Kimataifa',
      architecture: {
        components: [
          { name: 'Stablecoin Support', description: 'USDC, USDT, DAI integration', icon: <HiCurrencyDollar className="w-5 h-5" /> },
          { name: 'Fiat On-Ramps', description: 'Local currency conversion', icon: <HiGlobe className="w-5 h-5" /> },
          { name: 'Compliance Tools', description: 'AML/KYC automation', icon: <HiClipboardCheck className="w-5 h-5" /> },
          { name: 'Multi-Signature', description: 'Enhanced security for large transfers', icon: <HiShieldCheck className="w-5 h-5" /> }
        ],
        blockchain: ['Ethereum', 'Stellar', 'Polygon'],
        dataFlow: 'Fiat input → Stablecoin conversion → Cross-border transfer → Local fiat output'
      },
      integration: {
        apis: ['Payment APIs', 'Banking APIs', 'FX APIs'],
        protocols: ['ISO 20022', 'SWIFT MT', 'FIX Protocol'],
        formats: ['JSON', 'XML', 'CSV'],
        standards: ['PCI DSS', 'ISO 27001', 'Basel III']
      },
      security: {
        encryption: 'Hardware Security Modules',
        authentication: 'Multi-party computation',
        compliance: ['AML', 'KYC', 'FATF guidelines'],
        auditing: 'Real-time compliance monitoring'
      }
    },
    'tokenization': {
      name: 'Asset Tokenization',
      nameSwahili: 'Uongezaji wa Tokeni za Mali',
      architecture: {
        components: [
          { name: 'Legal Framework', description: 'Compliant token structures', icon: <HiClipboardCheck className="w-5 h-5" /> },
          { name: 'Fractional Trading', description: 'Support for small investments', icon: <HiCurrencyDollar className="w-5 h-5" /> },
          { name: 'Custody Solutions', description: 'Secure asset management', icon: <HiShieldCheck className="w-5 h-5" /> },
          { name: 'Secondary Markets', description: 'Built-in trading capabilities', icon: <HiGlobe className="w-5 h-5" /> }
        ],
        blockchain: ['Ethereum', 'Polygon', 'Avalanche'],
        dataFlow: 'Asset valuation → Legal structuring → Token creation → Market listing → Trading'
      },
      integration: {
        apis: ['Asset APIs', 'Trading APIs', 'Custody APIs'],
        protocols: ['FIX', 'REST', 'WebSocket'],
        formats: ['JSON', 'FpML', 'FIXML'],
        standards: ['ERC-1400', 'ERC-1404', 'Securities regulations']
      },
      security: {
        encryption: 'Multi-layer encryption',
        authentication: 'Institutional-grade MFA',
        compliance: ['SEC regulations', 'MiFID II', 'Local securities law'],
        auditing: 'Comprehensive audit trails'
      }
    }
  };

  const activeSpec = useCaseSpecs[selectedUseCase];

  const useCaseButtons = [
    { id: 'supply-chain', label: 'Supply Chain', icon: <HiCube className="w-4 h-4" /> },
    { id: 'loyalty', label: 'Loyalty', icon: <HiUsers className="w-4 h-4" /> },
    { id: 'payments', label: 'Payments', icon: <HiCurrencyDollar className="w-4 h-4" /> },
    { id: 'tokenization', label: 'Tokenization', icon: <HiDatabase className="w-4 h-4" /> }
  ];

  const tabButtons = [
    { id: 'architecture', label: 'Architecture', icon: <HiCog className="w-4 h-4" /> },
    { id: 'integration', label: 'Integration', icon: <HiCode className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <HiShieldCheck className="w-4 h-4" /> }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Deep dive into the technical implementation per use case
          </p>
          <p className="text-orange-400">
            Kujifunza kwa kina kuhusu utekelezaji wa kiufundi kwa kila matumizi
          </p>
        </div>

        {/* Use Case Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-2xl p-2">
            {useCaseButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => onUseCaseChange(button.id as UseCase)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedUseCase === button.id
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {button.icon}
                <span>{button.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Technical Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 rounded-xl p-1">
            {tabButtons.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">
              {activeSpec.name} - {tabButtons.find(t => t.id === activeTab)?.label}
            </h3>
            <p className="text-orange-400">{activeSpec.nameSwahili}</p>
          </div>

          {/* Tab Content */}
          {activeTab === 'architecture' && (
            <div className="space-y-8">
              {/* Components */}
              <div className="bg-gray-800 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-100 mb-6">System Components</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeSpec.architecture.components.map((component, index) => (
                    <div key={index} className="bg-gray-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-orange-500">{component.icon}</div>
                        <h5 className="font-semibold text-gray-100">{component.name}</h5>
                      </div>
                      <p className="text-gray-300 text-sm">{component.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blockchain Support */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-xl p-8">
                  <h4 className="text-xl font-semibold text-gray-100 mb-6">Supported Blockchains</h4>
                  <div className="space-y-3">
                    {activeSpec.architecture.blockchain.map((chain, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                        <HiCube className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-200">{chain}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-8">
                  <h4 className="text-xl font-semibold text-gray-100 mb-6">Data Flow</h4>
                  <div className="bg-gray-700/50 rounded-lg p-6">
                    <p className="text-gray-300 leading-relaxed">{activeSpec.architecture.dataFlow}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'integration' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-100 mb-6">APIs & Protocols</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-200 mb-2">APIs:</h5>
                    <div className="flex flex-wrap gap-2">
                      {activeSpec.integration.apis.map((api, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                          {api}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-200 mb-2">Protocols:</h5>
                    <div className="flex flex-wrap gap-2">
                      {activeSpec.integration.protocols.map((protocol, index) => (
                        <span key={index} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                          {protocol}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-100 mb-6">Data Formats & Standards</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-200 mb-2">Formats:</h5>
                    <div className="flex flex-wrap gap-2">
                      {activeSpec.integration.formats.map((format, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-200 mb-2">Standards:</h5>
                    <div className="flex flex-wrap gap-2">
                      {activeSpec.integration.standards.map((standard, index) => (
                        <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                          {standard}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-100 mb-6">Security Features</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
                    <HiShieldCheck className="w-6 h-6 text-green-400" />
                    <div>
                      <h5 className="font-semibold text-gray-200">Encryption</h5>
                      <p className="text-gray-400 text-sm">{activeSpec.security.encryption}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
                    <HiLightningBolt className="w-6 h-6 text-blue-400" />
                    <div>
                      <h5 className="font-semibold text-gray-200">Authentication</h5>
                      <p className="text-gray-400 text-sm">{activeSpec.security.authentication}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
                    <HiClipboardCheck className="w-6 h-6 text-purple-400" />
                    <div>
                      <h5 className="font-semibold text-gray-200">Auditing</h5>
                      <p className="text-gray-400 text-sm">{activeSpec.security.auditing}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-100 mb-6">Compliance Standards</h4>
                <div className="space-y-3">
                  {activeSpec.security.compliance.map((compliance, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                      <HiShieldCheck className="w-5 h-5 text-green-400" />
                      <span className="text-gray-200">{compliance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Technical Documentation CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">
              Need More Technical Details?
            </h3>
            <p className="text-gray-300 mb-8">
              Access our comprehensive technical documentation and API references
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Full Documentation
              </button>
              <button className="bg-transparent border-2 border-gray-600 text-gray-100 font-semibold px-8 py-3 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
                Download API Reference
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;