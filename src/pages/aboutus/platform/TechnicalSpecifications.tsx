import React, { useState, useEffect } from 'react';
import {
  HiShieldCheck,
  HiCube,
  HiCode,
  HiTrendingUp,
  HiGlobe,
  HiLightningBolt,
  HiDatabase,
  HiCog,
  HiCheckCircle,
  HiChartBar,
  HiServer,
  HiLockClosed,
  HiRefresh,
  HiArrowRight,
  HiUsers
} from 'react-icons/hi';

interface Blockchain {
  id: string;
  name: string;
  nameSwahili: string;
  logo: string;
  status: 'live' | 'beta' | 'coming-soon';
  features: string[];
  gasOptimization: string;
  avgCost: string;
  tps: string;
  icon: React.ReactNode;
  color: string;
}

interface Integration {
  id: string;
  type: 'REST API' | 'GraphQL' | 'Webhooks';
  description: string;
  descriptionSwahili: string;
  features: string[];
  exampleEndpoint?: string;
  responseTime: string;
  rateLimits: string;
  icon: React.ReactNode;
  color: string;
}

interface SecurityStandard {
  id: string;
  name: string;
  description: string;
  descriptionSwahili: string;
  certificationLevel: string;
  lastAudit: string;
  coverage: string[];
  icon: React.ReactNode;
  badgeColor: string;
}

interface ScalabilityMetric {
  id: string;
  metric: string;
  metricSwahili: string;
  value: string;
  description: string;
  trend: 'up' | 'stable' | 'down';
  icon: React.ReactNode;
}

const TechnicalSpecifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blockchains' | 'integration' | 'security' | 'scalability'>('blockchains');
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>('ethereum');
  const [liveMetrics, setLiveMetrics] = useState<Record<string, number>>({
    transactions: 8247,
    tps: 156,
    uptime: 99.97,
    gasOptimization: 67
  });

  const blockchains: Blockchain[] = [
    {
      id: 'ethereum',
      name: 'Ethereum',
      nameSwahili: 'Ethereum',
      logo: '⟠',
      status: 'live',
      features: ['Smart Contracts', 'ERC-20 Tokens', 'ERC-721 NFTs', 'Layer 2 Ready'],
      gasOptimization: '67% reduction',
      avgCost: '$2-15 per tx',
      tps: '15-45 TPS',
      icon: <HiCube className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'polygon',
      name: 'Polygon',
      nameSwahili: 'Polygon',
      logo: '⬢',
      status: 'live',
      features: ['Fast Transactions', 'Low Fees', 'Ethereum Compatible', 'PoS Consensus'],
      gasOptimization: '95% cost reduction',
      avgCost: '$0.01-0.10 per tx',
      tps: '7,000+ TPS',
      icon: <HiLightningBolt className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'arbitrum',
      name: 'Arbitrum One',
      nameSwahili: 'Arbitrum One',
      logo: '◉',
      status: 'live',
      features: ['Optimistic Rollups', 'Ethereum Security', 'DeFi Compatible', 'Low Latency'],
      gasOptimization: '90% cost reduction',
      avgCost: '$0.50-3.00 per tx',
      tps: '4,000+ TPS',
      icon: <HiTrendingUp className="w-6 h-6" />,
      color: 'from-green-500 to-blue-600'
    }
  ];

  const integrations: Integration[] = [
    {
      id: 'rest',
      type: 'REST API',
      description: 'Standard HTTP endpoints for seamless integration',
      descriptionSwahili: 'Viunga vya kawaida vya HTTP kwa muunganisho bila matatizo',
      features: ['JSON responses', 'Rate limiting', 'Authentication', 'Pagination'],
      exampleEndpoint: 'GET /api/v1/contracts/{id}',
      responseTime: '<100ms',
      rateLimits: '1000 req/min',
      icon: <HiCode className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'graphql',
      type: 'GraphQL',
      description: 'Flexible query language for efficient data fetching',
      descriptionSwahili: 'Lugha ya hoja inayobadilika kwa kuchukua data kwa ufanisi',
      features: ['Single endpoint', 'Type safety', 'Real-time subscriptions', 'Introspection'],
      exampleEndpoint: 'POST /graphql',
      responseTime: '<75ms',
      rateLimits: '2000 req/min',
      icon: <HiDatabase className="w-6 h-6" />,
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'webhooks',
      type: 'Webhooks',
      description: 'Real-time event notifications for instant updates',
      descriptionSwahili: 'Arifa za matukio ya wakati halisi kwa masasisho ya papo hapo',
      features: ['Event-driven', 'Retry logic', 'Signature verification', 'Custom filters'],
      responseTime: '<50ms',
      rateLimits: 'Unlimited',
      icon: <HiRefresh className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600'
    }
  ];

  const securityStandards: SecurityStandard[] = [
    {
      id: 'soc2',
      name: 'SOC 2 Type II',
      description: 'Rigorous security, availability, and confidentiality controls',
      descriptionSwahili: 'Udhibiti mkali wa usalama, upatikanaji, na usiri',
      certificationLevel: 'Type II Compliant',
      lastAudit: 'December 2024',
      coverage: ['Security', 'Availability', 'Processing Integrity', 'Confidentiality'],
      icon: <HiShieldCheck className="w-8 h-8" />,
      badgeColor: 'bg-green-500'
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      description: 'International standard for information security management',
      descriptionSwahili: 'Kiwango cha kimataifa cha usimamizi wa usalama wa habari',
      certificationLevel: 'Certified',
      lastAudit: 'October 2024',
      coverage: ['Risk Management', 'Asset Protection', 'Access Control', 'Incident Response'],
      icon: <HiLockClosed className="w-8 h-8" />,
      badgeColor: 'bg-blue-500'
    }
  ];

  const scalabilityMetrics: ScalabilityMetric[] = [
    {
      id: 'tps',
      metric: 'Transactions Per Second',
      metricSwahili: 'Miamala Kwa Sekunde',
      value: '10,000+',
      description: 'Peak transaction processing capacity',
      trend: 'up',
      icon: <HiLightningBolt className="w-6 h-6" />
    },
    {
      id: 'concurrent',
      metric: 'Concurrent Users',
      metricSwahili: 'Watumiaji wa Wakati Mmoja',
      value: '50,000+',
      description: 'Simultaneous active connections',
      trend: 'stable',
      icon: <HiUsers className="w-6 h-6" />
    },
    {
      id: 'uptime',
      metric: 'System Uptime',
      metricSwahili: 'Wakati wa Mfumo Ukiwa Hai',
      value: '99.97%',
      description: 'Guaranteed service availability',
      trend: 'stable',
      icon: <HiServer className="w-6 h-6" />
    },
    {
      id: 'latency',
      metric: 'Average Latency',
      metricSwahili: 'Ucheleweshaji wa Wastani',
      value: '<45ms',
      description: 'Response time across all endpoints',
      trend: 'up',
      icon: <HiChartBar className="w-6 h-6" />
    }
  ];

  // Live metrics simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        transactions: prev.transactions + Math.floor(Math.random() * 10) + 5,
        tps: Math.floor(Math.random() * 50) + 120,
        uptime: 99.97 + (Math.random() * 0.02),
        gasOptimization: Math.floor(Math.random() * 10) + 60
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'blockchains', label: 'Blockchains', labelSwahili: 'Blockchain', icon: <HiCube className="w-5 h-5" /> },
    { id: 'integration', label: 'Integration', labelSwahili: 'Muunganisho', icon: <HiCode className="w-5 h-5" /> },
    { id: 'security', label: 'Security', labelSwahili: 'Usalama', icon: <HiShieldCheck className="w-5 h-5" /> },
    { id: 'scalability', label: 'Scalability', labelSwahili: 'Ukuaji', icon: <HiTrendingUp className="w-5 h-5" /> }
  ];

  const getTrendIcon = (trend: 'up' | 'stable' | 'down') => {
    switch (trend) {
      case 'up': return <HiTrendingUp className="w-4 h-4 text-green-400" />;
      case 'stable': return <HiChartBar className="w-4 h-4 text-blue-400" />;
      case 'down': return <HiTrendingUp className="w-4 h-4 text-red-400 transform rotate-180" />;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Technical Specifications</h2>
        <p className="text-gray-300 mb-2">Maelezo ya Kiufundi</p>
        <p className="text-gray-400">Enterprise-grade infrastructure built for scale and security</p>
      </div>

      {/* Live Metrics Banner */}
      <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl p-6 mb-8 border border-orange-500/30">
        <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          Live System Metrics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{liveMetrics.transactions.toLocaleString()}</div>
            <div className="text-gray-400 text-sm">Transactions Today</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{liveMetrics.tps}</div>
            <div className="text-gray-400 text-sm">Current TPS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{liveMetrics.uptime.toFixed(2)}%</div>
            <div className="text-gray-400 text-sm">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">{liveMetrics.gasOptimization}%</div>
            <div className="text-gray-400 text-sm">Gas Savings</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-orange-500 text-white transform scale-105'
                : 'bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:block">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {activeTab === 'blockchains' && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">Supported Blockchains</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Blockchain List */}
              <div className="space-y-4">
                {blockchains.map((blockchain) => (
                  <div
                    key={blockchain.id}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedBlockchain === blockchain.id
                        ? 'bg-gradient-to-br from-orange-500/20 to-blue-500/20 border-2 border-orange-500'
                        : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => setSelectedBlockchain(blockchain.id)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-4xl`}>{blockchain.logo}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-100">{blockchain.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            blockchain.status === 'live' ? 'bg-green-500' :
                            blockchain.status === 'beta' ? 'bg-yellow-500' : 'bg-gray-500'
                          } text-white`}>
                            {blockchain.status.toUpperCase()}
                          </span>
                          <span className="text-orange-400 text-sm">{blockchain.nameSwahili}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-gray-400 text-sm">Gas Optimization:</span>
                        <div className="text-green-400 font-semibold">{blockchain.gasOptimization}</div>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Avg Cost:</span>
                        <div className="text-blue-400 font-semibold">{blockchain.avgCost}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {blockchain.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Blockchain Details */}
              <div className="bg-gray-800 rounded-xl p-6">
                {(() => {
                  const blockchain = blockchains.find(b => b.id === selectedBlockchain);
                  if (!blockchain) return null;

                  return (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${blockchain.color} text-white`}>
                          {blockchain.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-100">{blockchain.name}</h4>
                          <p className="text-gray-400">Network Performance</p>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                          <span className="text-gray-300">Throughput</span>
                          <span className="text-green-400 font-semibold">{blockchain.tps}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                          <span className="text-gray-300">Cost per Transaction</span>
                          <span className="text-blue-400 font-semibold">{blockchain.avgCost}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                          <span className="text-gray-300">Gas Optimization</span>
                          <span className="text-orange-400 font-semibold">{blockchain.gasOptimization}</span>
                        </div>
                      </div>

                      <div className="bg-gray-700 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-200 mb-3">Supported Features:</h5>
                        <div className="space-y-2">
                          {blockchain.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <HiCheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'integration' && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">Integration Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrations.map((integration) => (
                <div key={integration.id} className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${integration.color} text-white`}>
                      {integration.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-100">{integration.type}</h4>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{integration.description}</p>
                  <p className="text-orange-400 text-sm mb-4">{integration.descriptionSwahili}</p>

                  {integration.exampleEndpoint && (
                    <div className="mb-4">
                      <span className="text-gray-400 text-sm">Example:</span>
                      <code className="block bg-gray-700 p-2 rounded text-sm text-green-400 mt-1">
                        {integration.exampleEndpoint}
                      </code>
                    </div>
                  )}

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Response Time:</span>
                      <span className="text-green-400 font-semibold text-sm">{integration.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Rate Limits:</span>
                      <span className="text-blue-400 font-semibold text-sm">{integration.rateLimits}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-400 text-sm mb-2 block">Features:</span>
                    <div className="flex flex-wrap gap-1">
                      {integration.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">Security Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityStandards.map((standard) => (
                <div key={standard.id} className="bg-gray-800 rounded-xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${standard.badgeColor} p-4 rounded-xl text-white`}>
                      {standard.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-100">{standard.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${standard.badgeColor} text-white`}>
                        {standard.certificationLevel}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-3">{standard.description}</p>
                  <p className="text-orange-400 text-sm mb-6">{standard.descriptionSwahili}</p>

                  <div className="mb-6">
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-400">Last Audit:</span>
                      <span className="text-green-400 font-semibold">{standard.lastAudit}</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-200 mb-3">Coverage Areas:</h5>
                    <div className="space-y-2">
                      {standard.coverage.map((area, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <HiCheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Security Features */}
            <div className="mt-8 bg-gray-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-100 mb-4">Additional Security Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4">
                  <HiLockClosed className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-200">End-to-End Encryption</h5>
                  <p className="text-gray-400 text-sm">AES-256 encryption</p>
                </div>
                <div className="text-center p-4">
                  <HiShieldCheck className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-200">Multi-Factor Auth</h5>
                  <p className="text-gray-400 text-sm">2FA/3FA support</p>
                </div>
                <div className="text-center p-4">
                  <HiCog className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-200">Smart Contract Audits</h5>
                  <p className="text-gray-400 text-sm">Regular security reviews</p>
                </div>
                <div className="text-center p-4">
                  <HiDatabase className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-200">Data Privacy</h5>
                  <p className="text-gray-400 text-sm">GDPR compliant</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'scalability' && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">Scalability Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {scalabilityMetrics.map((metric) => (
                <div key={metric.id} className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-orange-500">{metric.icon}</div>
                    {getTrendIcon(metric.trend)}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-100 mb-2">{metric.value}</h4>
                  <h5 className="font-semibold text-gray-200 mb-1">{metric.metric}</h5>
                  <p className="text-orange-400 text-sm mb-3">{metric.metricSwahili}</p>
                  <p className="text-gray-400 text-sm">{metric.description}</p>
                </div>
              ))}
            </div>

            {/* Scalability Architecture */}
            <div className="bg-gray-800 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-gray-100 mb-6">Scalability Architecture</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-xl p-6 mb-4">
                    <HiServer className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <h5 className="font-semibold text-gray-100">Load Balancing</h5>
                    <p className="text-gray-400 text-sm">Auto-scaling infrastructure</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 rounded-xl p-6 mb-4">
                    <HiDatabase className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <h5 className="font-semibold text-gray-100">Database Sharding</h5>
                    <p className="text-gray-400 text-sm">Horizontal data distribution</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500/20 rounded-xl p-6 mb-4">
                    <HiGlobe className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                    <h5 className="font-semibold text-gray-100">CDN Distribution</h5>
                    <p className="text-gray-400 text-sm">Global content delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl p-8 border border-orange-500/30">
        <h3 className="text-2xl font-bold text-orange-500 mb-4 text-center">
          Ready for Enterprise-Grade Web3?
        </h3>
        <p className="text-gray-300 text-center mb-8">
          Experience the power of Sanidi's technical infrastructure
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
            <HiArrowRight className="w-5 h-5" />
            View Technical Documentation
          </button>
          <button className="bg-transparent border-2 border-gray-600 text-gray-100 font-semibold px-8 py-3 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
            Schedule Technical Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecifications;