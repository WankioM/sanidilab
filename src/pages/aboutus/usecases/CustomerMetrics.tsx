import React from 'react';
import { 
  HiTrendingUp, 
  HiClock, 
  HiShieldCheck,
  HiStar,
  HiCurrencyDollar,
  HiGlobe,
  HiUsers,
  HiChartBar
} from 'react-icons/hi';
import { UseCaseData } from './UseCases';

interface CustomerMetricsProps {
  useCases: UseCaseData[];
}

const CustomerMetrics: React.FC<CustomerMetricsProps> = ({ useCases }) => {
  // Mock metrics data - replace with real data when available
  const overallMetrics = [
    {
      metric: 'Enterprise Clients',
      value: '150+',
      growth: '+45% this quarter',
      icon: <HiUsers className="w-8 h-8" />,
      color: 'text-blue-400'
    },
    {
      metric: 'Average ROI',
      value: '340%',
      growth: 'Within 6 months',
      icon: <HiTrendingUp className="w-8 h-8" />,
      color: 'text-green-400'
    },
    {
      metric: 'Implementation Success',
      value: '98.5%',
      growth: 'On-time delivery',
      icon: <HiShieldCheck className="w-8 h-8" />,
      color: 'text-purple-400'
    },
    {
      metric: 'Customer Satisfaction',
      value: '4.8/5',
      growth: 'Based on 127 reviews',
      icon: <HiStar className="w-8 h-8" />,
      color: 'text-orange-400'
    }
  ];

  const useCaseMetrics = {
    'supply-chain': [
      { metric: 'Fraud Reduction', value: '95%', description: 'Counterfeit products eliminated' },
      { metric: 'Delivery Speed', value: '30%', description: 'Faster delivery times' },
      { metric: 'Cost Savings', value: '$2M', description: 'Annual operational savings' },
      { metric: 'Transparency', value: '100%', description: 'End-to-end visibility' }
    ],
    'loyalty': [
      { metric: 'Engagement Increase', value: '400%', description: 'Customer interaction boost' },
      { metric: 'Operational Cost Reduction', value: '60%', description: 'Program management savings' },
      { metric: 'Partner Network Growth', value: '150%', description: 'Cross-brand partnerships' },
      { metric: 'Customer Satisfaction', value: '90%', description: 'Positive feedback scores' }
    ],
    'payments': [
      { metric: 'Fee Savings', value: '$180K', description: 'Annual transfer cost reduction' },
      { metric: 'Settlement Speed', value: '5 days', description: 'Cash flow improvement' },
      { metric: 'System Uptime', value: '99.9%', description: 'Reliable payment processing' },
      { metric: 'Global Availability', value: '24/7', description: 'Cross-timezone operations' }
    ],
    'tokenization': [
      { metric: 'Funding Speed', value: '48 hours', description: 'Vs 6 months traditional' },
      { metric: 'Investor Pool', value: '10x', description: 'Larger access to capital' },
      { metric: 'Liquidity Improvement', value: '85%', description: 'Asset trading flexibility' },
      { metric: 'Cost Reduction', value: '70%', description: 'Lower transaction fees' }
    ]
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
            Customer Success Metrics
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Real results from enterprises using Sanidi
          </p>
          <p className="text-orange-400">
            Matokeo halisi kutoka makampuni yanayotumia Sanidi
          </p>
        </div>

        {/* Overall Platform Metrics */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-200 mb-8 text-center">
            Platform Performance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overallMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className={`${metric.color} mb-4 flex justify-center`}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-100 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-200 mb-2">{metric.metric}</div>
                <div className="text-gray-400 text-sm">{metric.growth}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Case Specific Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-200 mb-12 text-center">
            Results by Use Case
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(useCaseMetrics).map(([useCaseId, metrics], index) => {
              const useCase = useCases.find(uc => uc.id === useCaseId);
              if (!useCase) return null;

              return (
                <div key={index} className="bg-gray-800 rounded-xl p-8">
                  <h4 className="text-xl font-semibold text-gray-100 mb-6">{useCase.title}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-gray-700/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400 mb-1">{metric.value}</div>
                        <div className="text-sm font-semibold text-gray-200 mb-1">{metric.metric}</div>
                        <div className="text-xs text-gray-400">{metric.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-12 border border-orange-500/30 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500/20 rounded-full p-6">
              <HiChartBar className="w-12 h-12 text-orange-500" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            Detailed Customer Case Studies Coming Soon
          </h3>
          <p className="text-xl text-gray-300 mb-4">
            In-depth analysis and video testimonials from our enterprise clients
          </p>
          <p className="text-orange-400 mb-8">
            Uchunguzi wa kina na ushuhuda wa video kutoka kwa wateja wetu wa biashara
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <HiGlobe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-100 mb-2">Interactive Case Studies</h4>
              <p className="text-gray-400 text-sm">Explore real implementations with interactive demos</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6">
              <HiUsers className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-100 mb-2">Customer Testimonials</h4>
              <p className="text-gray-400 text-sm">Video interviews with C-level executives</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6">
              <HiCurrencyDollar className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-100 mb-2">ROI Breakdowns</h4>
              <p className="text-gray-400 text-sm">Detailed financial impact analysis</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Request Early Access
            </button>
            <button className="bg-transparent border-2 border-gray-600 text-gray-100 font-semibold px-8 py-3 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
              Subscribe for Updates
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-200 mb-8 text-center">
            Trusted by Leading Organizations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {/* Mock company logos - replace with actual logos */}
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-gray-400">Kenya Coffee Co.</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-gray-400">Lagos Bank</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-gray-400">SA Manufacturing</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-gray-400">East Africa Trade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerMetrics;