import React, { useState } from 'react';
import { 
  HiTruck, 
  HiStar, 
  HiCurrencyDollar, 
  HiOfficeBuilding,
  HiCog,
  HiBeaker,
  HiShieldCheck,
  HiGlobe
} from 'react-icons/hi';

// Import sub-components
import UseCasesHero from './UseCasesHero';
import PrimaryUseCases from './PrimaryUseCases';
import IndustrySpecific from './IndustrySpecific';
import ImplementationShowcase from './ImplementationShowcase';
import CustomerMetrics from './CustomerMetrics';
import TechnicalSpecs from './TechnicalSpecs';
import GettingStarted from './GettingStarted';

export type Industry = 'logistics' | 'retail' | 'banking' | 'manufacturing' | 'agriculture' | 'healthcare' | 'government';
export type UseCase = 'supply-chain' | 'loyalty' | 'payments' | 'tokenization';

export interface UseCaseData {
  id: UseCase;
  title: string;
  titleSwahili: string;
  challenge: {
    headline: string;
    problems: string[];
    costImpact: string;
  };
  solution: {
    features: Array<{
      title: string;
      description: string;
      icon: React.ReactNode;
    }>;
  };
  customerExample: {
    company: string;
    result: string;
    metrics: string;
  };
  roi: {
    calculator: boolean;
    estimatedSavings: string;
  };
}

export interface IndustryData {
  id: Industry;
  name: string;
  nameSwahili: string;
  icon: React.ReactNode;
  color: string;
  useCases: Array<{
    title: string;
    description: string;
    benefits: string[];
  }>;
}

const UseCases: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('logistics');
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase>('supply-chain');

  const industries: IndustryData[] = [
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      nameSwahili: 'Usafirishaji na Mlolongo wa Ugavi',
      icon: <HiTruck className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      useCases: [
        {
          title: 'Parts Authentication',
          description: 'Verify genuine components with blockchain certificates',
          benefits: ['Eliminate counterfeits', 'Protect brand reputation', 'Ensure quality standards']
        },
        {
          title: 'Shipment Tracking',
          description: 'Real-time visibility from origin to destination',
          benefits: ['Reduce lost shipments', 'Improve customer service', 'Optimize routes']
        },
        {
          title: 'Automated Payments',
          description: 'Smart contracts trigger payments on delivery',
          benefits: ['Faster settlements', 'Reduced disputes', 'Improved cash flow']
        }
      ]
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      nameSwahili: 'Reja na Biashara za Mtandao',
      icon: <HiStar className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      useCases: [
        {
          title: 'Customer Loyalty',
          description: 'Universal tokens across partner brands',
          benefits: ['Increase engagement', 'Cross-brand redemption', 'Transparent value']
        },
        {
          title: 'Product Authentication',
          description: 'Combat counterfeit goods with QR verification',
          benefits: ['Protect customers', 'Build trust', 'Premium pricing']
        },
        {
          title: 'Inventory Management',
          description: 'Real-time stock tracking across locations',
          benefits: ['Prevent stockouts', 'Optimize inventory', 'Reduce waste']
        }
      ]
    },
    {
      id: 'banking',
      name: 'Banking & Financial Services',
      nameSwahili: 'Benki na Huduma za Kifedha',
      icon: <HiCurrencyDollar className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600',
      useCases: [
        {
          title: 'Cross-Border Payments',
          description: 'Instant, low-cost international transfers',
          benefits: ['Reduce fees by 80%', '24/7 processing', 'Faster settlements']
        },
        {
          title: 'Trade Finance',
          description: 'Automated letters of credit and guarantees',
          benefits: ['Faster approvals', 'Reduced paperwork', 'Lower costs']
        },
        {
          title: 'Digital Identity',
          description: 'Secure, portable customer verification',
          benefits: ['Improved KYC', 'Reduced fraud', 'Better UX']
        }
      ]
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      nameSwahili: 'Utengenezaji',
      icon: <HiCog className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      useCases: [
        {
          title: 'Quality Tracking',
          description: 'Immutable records of testing and certifications',
          benefits: ['Ensure compliance', 'Track defects', 'Improve processes']
        },
        {
          title: 'Supplier Management',
          description: 'Transparent supplier performance metrics',
          benefits: ['Better sourcing', 'Risk management', 'Cost optimization']
        },
        {
          title: 'Asset Tokenization',
          description: 'Convert equipment into tradeable digital assets',
          benefits: ['Improve liquidity', 'Enable sharing', 'Reduce costs']
        }
      ]
    }
  ];

  const primaryUseCases: UseCaseData[] = [
    {
      id: 'supply-chain',
      title: 'Supply Chain Transparency',
      titleSwahili: 'Uwazi wa Mlolongo wa Ugavi',
      challenge: {
        headline: 'Track 10,000+ products across 50+ suppliers with zero visibility',
        problems: [
          'Lost shipments costing $200K+ annually',
          'Counterfeit products damaging brand reputation',
          'Manual paperwork creating 2-week delays',
          'No real-time visibility for customers'
        ],
        costImpact: '$2M+ annual losses from inefficiencies'
      },
      solution: {
        features: [
          {
            title: 'Track Every Step',
            description: 'From raw materials to customer delivery',
            icon: <HiTruck className="w-5 h-5" />
          },
          {
            title: 'Verify Authenticity',
            description: 'QR codes linking to immutable blockchain records',
            icon: <HiShieldCheck className="w-5 h-5" />
          },
          {
            title: 'Automate Payments',
            description: 'Smart contracts trigger payments on delivery confirmation',
            icon: <HiCurrencyDollar className="w-5 h-5" />
          },
          {
            title: 'Real-Time Dashboards',
            description: 'Live visibility for all stakeholders',
            icon: <HiGlobe className="w-5 h-5" />
          }
        ]
      },
      customerExample: {
        company: 'Kenyan Coffee Cooperative',
        result: 'Now tracks 5,000 bags from farm to European buyers',
        metrics: 'Reduced fraud by 95%, increased farmer payments by 30%'
      },
      roi: {
        calculator: true,
        estimatedSavings: '$500K-2M annually'
      }
    },
    {
      id: 'loyalty',
      title: 'Customer Loyalty Programs',
      titleSwahili: 'Mipango ya Uongozi wa Wateja',
      challenge: {
        headline: 'Fragmented loyalty points worth $50M sitting unused across multiple brands',
        problems: [
          'Customers can\'t transfer points between partners',
          'Expired points create customer frustration',
          'No transparency in point valuations',
          'High operational costs for program management'
        ],
        costImpact: '$10M+ in unredeemed value lost annually'
      },
      solution: {
        features: [
          {
            title: 'Universal Tokens',
            description: 'Points work across partner brands',
            icon: <HiStar className="w-5 h-5" />
          },
          {
            title: 'Transparent Value',
            description: 'Real-time token pricing and exchange rates',
            icon: <HiCurrencyDollar className="w-5 h-5" />
          },
          {
            title: 'Instant Redemption',
            description: 'No waiting periods or complex processes',
            icon: <HiGlobe className="w-5 h-5" />
          },
          {
            title: 'Partner Network',
            description: 'Automatically expand program reach',
            icon: <HiShieldCheck className="w-5 h-5" />
          }
        ]
      },
      customerExample: {
        company: 'Nigerian Retail Chain',
        result: 'Tokenized loyalty points enabling cross-brand redemptions',
        metrics: 'Increased customer engagement 400%'
      },
      roi: {
        calculator: true,
        estimatedSavings: '60% reduction in operational costs'
      }
    },
    {
      id: 'payments',
      title: 'Cross-Border Payments',
      titleSwahili: 'Malipo ya Kimataifa',
      challenge: {
        headline: 'Sending $1M monthly to suppliers costs $45K in fees and takes 7 days',
        problems: [
          'Traditional banking fees eating 4-5% of transfer value',
          '5-7 day settlement times disrupting cash flow',
          'Currency volatility creating unexpected costs',
          'Complex compliance across multiple jurisdictions'
        ],
        costImpact: '$500K+ annual fees and opportunity costs'
      },
      solution: {
        features: [
          {
            title: 'Instant Settlement',
            description: '24/7 processing, settled in minutes',
            icon: <HiGlobe className="w-5 h-5" />
          },
          {
            title: 'Lower Fees',
            description: '0.5-1% vs 4-5% traditional banking',
            icon: <HiCurrencyDollar className="w-5 h-5" />
          },
          {
            title: 'Stable Currencies',
            description: 'USDC and other stablecoins reduce volatility',
            icon: <HiShieldCheck className="w-5 h-5" />
          },
          {
            title: 'Automated Compliance',
            description: 'Built-in regulatory reporting',
            icon: <HiBeaker className="w-5 h-5" />
          }
        ]
      },
      customerExample: {
        company: 'South African Manufacturer',
        result: 'Automated supplier payments with stablecoins',
        metrics: 'Saves $180K annually, improved cash flow by 5 days'
      },
      roi: {
        calculator: true,
        estimatedSavings: '80% reduction in transfer fees'
      }
    },
    {
      id: 'tokenization',
      title: 'Asset Tokenization',
      titleSwahili: 'Uongezaji wa Tokeni za Mali',
      challenge: {
        headline: 'Real estate worth $10M sits illiquid while needing working capital',
        problems: [
          'High-value assets can\'t be easily divided',
          'Limited investor pool for large purchases',
          'Expensive legal processes for ownership transfers',
          'Poor liquidity for emergency funding'
        ],
        costImpact: 'Millions in trapped capital'
      },
      solution: {
        features: [
          {
            title: 'Fractional Ownership',
            description: 'Divide assets into tradeable tokens',
            icon: <HiOfficeBuilding className="w-5 h-5" />
          },
          {
            title: 'Global Investor Access',
            description: 'Reach international buyers instantly',
            icon: <HiGlobe className="w-5 h-5" />
          },
          {
            title: 'Automated Compliance',
            description: 'Smart contracts handle legal requirements',
            icon: <HiShieldCheck className="w-5 h-5" />
          },
          {
            title: 'Instant Liquidity',
            description: 'Trade tokens 24/7 on secondary markets',
            icon: <HiCurrencyDollar className="w-5 h-5" />
          }
        ]
      },
      customerExample: {
        company: 'Kenyan Real Estate Developer',
        result: 'Tokenized office building for fractional investment',
        metrics: 'Raised $2M in 48 hours vs 6 months traditional'
      },
      roi: {
        calculator: true,
        estimatedSavings: 'Access to 10x larger investor pool'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <UseCasesHero 
        selectedIndustry={selectedIndustry}
        onIndustryChange={setSelectedIndustry}
        industries={industries}
      />

      {/* Primary Use Cases */}
      <PrimaryUseCases 
        useCases={primaryUseCases}
        selectedUseCase={selectedUseCase}
        onUseCaseChange={setSelectedUseCase}
      />

      {/* Industry-Specific Sections */}
      <IndustrySpecific 
        industries={industries}
        selectedIndustry={selectedIndustry}
        onIndustryChange={setSelectedIndustry}
      />

      {/* Implementation Showcase */}
      <ImplementationShowcase />

      {/* Customer Success Metrics */}
      <CustomerMetrics useCases={primaryUseCases} />

      {/* Technical Specifications */}
      <TechnicalSpecs 
        selectedUseCase={selectedUseCase}
        onUseCaseChange={setSelectedUseCase}
      />

      {/* Getting Started */}
      <GettingStarted />
    </div>
  );
};

export default UseCases;