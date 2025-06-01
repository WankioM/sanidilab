import React, { useState, useEffect } from 'react';
import {
  HiDatabase,
  HiGlobe,
  HiLightningBolt,
  HiShieldCheck,
  HiRefresh,
  HiCheckCircle,
  HiClock,
  HiArrowRight,
  HiCog,
  HiCode
} from 'react-icons/hi';

interface SystemNode {
  id: string;
  name: string;
  type: 'crm' | 'erp' | 'payment' | 'blockchain' | 'api';
  status: 'connected' | 'syncing' | 'offline';
  icon: React.ReactNode;
  color: string;
  x: number;
  y: number;
}

interface DataFlow {
  id: string;
  from: string;
  to: string;
  type: 'realtime' | 'batch' | 'event';
  status: 'active' | 'idle';
  data: string;
  count: number;
}

interface APIExample {
  id: string;
  title: string;
  titleSwahili: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  description: string;
  request?: object;
  response?: object;
}

const EnterpriseIntegration: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState<string>('');
  const [selectedAPI, setSelectedAPI] = useState<string>('');
  const [flowAnimations, setFlowAnimations] = useState<Record<string, boolean>>({});

  const systemNodes: SystemNode[] = [
    {
      id: 'crm',
      name: 'Salesforce CRM',
      type: 'crm',
      status: 'connected',
      icon: <HiDatabase className="w-6 h-6" />,
      color: 'bg-blue-500',
      x: 10,
      y: 20
    },
    {
      id: 'erp',
      name: 'SAP ERP',
      type: 'erp',
      status: 'connected',
      icon: <HiCog className="w-6 h-6" />,
      color: 'bg-green-500',
      x: 10,
      y: 60
    },
    {
      id: 'payment',
      name: 'Payment Gateway',
      type: 'payment',
      status: 'syncing',
      icon: <HiLightningBolt className="w-6 h-6" />,
      color: 'bg-yellow-500',
      x: 50,
      y: 40
    },
    {
      id: 'sanidi',
      name: 'Sanidi Platform',
      type: 'api',
      status: 'connected',
      icon: <HiShieldCheck className="w-6 h-6" />,
      color: 'bg-orange-500',
      x: 50,
      y: 40
    },
    {
      id: 'blockchain',
      name: 'Ethereum Network',
      type: 'blockchain',
      status: 'connected',
      icon: <HiGlobe className="w-6 h-6" />,
      color: 'bg-purple-500',
      x: 90,
      y: 40
    }
  ];

  const dataFlows: DataFlow[] = [
    {
      id: 'crm-sanidi',
      from: 'crm',
      to: 'sanidi',
      type: 'realtime',
      status: 'active',
      data: 'Customer Data',
      count: 1247
    },
    {
      id: 'erp-sanidi',
      from: 'erp',
      to: 'sanidi',
      type: 'batch',
      status: 'active',
      data: 'Inventory Updates',
      count: 892
    },
    {
      id: 'sanidi-blockchain',
      from: 'sanidi',
      to: 'blockchain',
      type: 'event',
      status: 'active',
      data: 'Smart Contract Calls',
      count: 423
    },
    {
      id: 'payment-sanidi',
      from: 'payment',
      to: 'sanidi',
      type: 'realtime',
      status: 'active',
      data: 'Transaction Events',
      count: 156
    }
  ];

  const apiExamples: APIExample[] = [
    {
      id: 'create-token',
      title: 'Create Loyalty Token',
      titleSwahili: 'Tengeneza Tokeni ya Uongozi',
      method: 'POST',
      endpoint: '/api/v1/tokens/create',
      description: 'Create a new customer loyalty token',
      request: {
        customerId: '12345',
        points: 100,
        transactionId: 'tx_abc123'
      },
      response: {
        success: true,
        tokenId: 'token_xyz789',
        blockchainTx: '0x1234...abcd'
      }
    },
    {
      id: 'track-shipment',
      title: 'Track Shipment',
      titleSwahili: 'Fuatilia Usafirishaji',
      method: 'GET',
      endpoint: '/api/v1/supply-chain/track/{shipmentId}',
      description: 'Get real-time shipment tracking data',
      response: {
        shipmentId: 'ship_001',
        status: 'in_transit',
        location: { lat: -1.2921, lng: 36.8219 },
        estimatedDelivery: '2024-06-15T10:00:00Z'
      }
    },
    {
      id: 'process-payment',
      title: 'Process Smart Payment',
      titleSwahili: 'Chakata Malipo ya Mjanja',
      method: 'POST',
      endpoint: '/api/v1/payments/smart-contract',
      description: 'Execute automated payment through smart contract',
      request: {
        amount: '1000.00',
        currency: 'KES',
        contractAddress: '0x742d35Cc6634C0532925a3b8D404fddF6645f98',
        conditions: ['delivery_confirmed', 'quality_approved']
      }
    }
  ];

  // Animate data flows
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowAnimations(prev => {
        const newAnimations: Record<string, boolean> = {};
        dataFlows.forEach(flow => {
          newAnimations[flow.id] = Math.random() > 0.3; // 70% chance to animate
        });
        return newAnimations;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: SystemNode['status']): string => {
    switch (status) {
      case 'connected': return 'text-green-400';
      case 'syncing': return 'text-yellow-400';
      case 'offline': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: SystemNode['status']): React.ReactNode => {
    switch (status) {
      case 'connected': return <HiCheckCircle className="w-4 h-4" />;
      case 'syncing': return <HiRefresh className="w-4 h-4 animate-spin" />;
      case 'offline': return <HiClock className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Enterprise Integration Layer</h2>
        <p className="text-gray-300 mb-2">Tabaka la Muunganisho wa Biashara</p>
        <p className="text-gray-400">Seamlessly connect your existing systems with Web3 capabilities</p>
      </div>

      {/* System Architecture Diagram */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">System Architecture</h3>
        <div className="bg-gray-800 rounded-xl p-8 relative overflow-hidden" style={{ height: '400px' }}>
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* System Nodes */}
          {systemNodes.map((node) => (
            <div
              key={node.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${node.color} rounded-xl p-4 shadow-lg border border-white/20`}
              style={{ 
                left: `${node.x}%`, 
                top: `${node.y}%`,
                minWidth: '120px'
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-white">{node.icon}</div>
                <span className="text-white font-semibold text-sm">{node.name}</span>
              </div>
              <div className={`flex items-center gap-1 ${getStatusColor(node.status)}`}>
                {getStatusIcon(node.status)}
                <span className="text-xs capitalize">{node.status}</span>
              </div>
            </div>
          ))}

          {/* Data Flow Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {dataFlows.map((flow) => {
              const fromNode = systemNodes.find(n => n.id === flow.from);
              const toNode = systemNodes.find(n => n.id === flow.to);
              if (!fromNode || !toNode) return null;

              const fromX = (fromNode.x / 100) * 100;
              const fromY = (fromNode.y / 100) * 100;
              const toX = (toNode.x / 100) * 100;
              const toY = (toNode.y / 100) * 100;

              return (
                <g key={flow.id}>
                  <line
                    x1={`${fromX}%`}
                    y1={`${fromY}%`}
                    x2={`${toX}%`}
                    y2={`${toY}%`}
                    stroke={flowAnimations[flow.id] ? '#f97316' : '#4b5563'}
                    strokeWidth="3"
                    strokeDasharray={flow.type === 'realtime' ? '0' : '5,5'}
                    className="transition-colors duration-500"
                  />
                  {flowAnimations[flow.id] && (
                    <circle r="4" fill="#f97316" className="animate-pulse">
                      <animateMotion dur="2s" repeatCount="1">
                        <path d={`M${fromX},${fromY} L${toX},${toY}`} />
                      </animateMotion>
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Data Flow Legend */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {dataFlows.map((flow) => (
            <div key={flow.id} className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${flow.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                <span className="font-semibold text-sm">{flow.data}</span>
              </div>
              <div className="text-gray-400 text-xs mb-1">
                {systemNodes.find(n => n.id === flow.from)?.name} → {systemNodes.find(n => n.id === flow.to)?.name}
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 capitalize">{flow.type}</span>
                <span className="text-orange-400 font-semibold">{flow.count.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API Connection Examples */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">API Connection Examples</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* API List */}
          <div className="space-y-4">
            {apiExamples.map((api) => (
              <div
                key={api.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedAPI === api.id
                    ? 'bg-orange-500/20 border-2 border-orange-500'
                    : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setSelectedAPI(api.id)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    api.method === 'GET' ? 'bg-blue-500' :
                    api.method === 'POST' ? 'bg-green-500' :
                    api.method === 'PUT' ? 'bg-yellow-500' : 'bg-red-500'
                  } text-white`}>
                    {api.method}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-100">{api.title}</h4>
                    <p className="text-orange-400 text-sm">{api.titleSwahili}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-2">{api.description}</p>
                <code className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
                  {api.endpoint}
                </code>
              </div>
            ))}
          </div>

          {/* API Details */}
          <div className="bg-gray-800 rounded-lg p-6">
            {selectedAPI ? (
              <div>
                {(() => {
                  const api = apiExamples.find(a => a.id === selectedAPI);
                  if (!api) return null;
                  
                  return (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded font-semibold text-sm ${
                          api.method === 'GET' ? 'bg-blue-500' :
                          api.method === 'POST' ? 'bg-green-500' :
                          api.method === 'PUT' ? 'bg-yellow-500' : 'bg-red-500'
                        } text-white`}>
                          {api.method}
                        </span>
                        <h4 className="text-lg font-semibold text-gray-100">{api.title}</h4>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-300 mb-2">{api.description}</p>
                        <code className="block bg-gray-700 p-3 rounded text-sm text-green-400">
                          {api.method} {api.endpoint}
                        </code>
                      </div>

                      {api.request && (
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-200 mb-2">Request Body:</h5>
                          <pre className="bg-gray-700 p-3 rounded text-sm overflow-x-auto">
                            <code className="text-blue-400">
                              {JSON.stringify(api.request, null, 2)}
                            </code>
                          </pre>
                        </div>
                      )}

                      {api.response && (
                        <div>
                          <h5 className="font-semibold text-gray-200 mb-2">Response:</h5>
                          <pre className="bg-gray-700 p-3 rounded text-sm overflow-x-auto">
                            <code className="text-green-400">
                              {JSON.stringify(api.response, null, 2)}
                            </code>
                          </pre>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Select an API example to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Real-time Data Visualization */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">Real-time Data Flow</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <HiDatabase className="w-8 h-8 text-blue-500" />
              <div>
                <h4 className="font-semibold text-gray-100">Data Ingestion</h4>
                <p className="text-gray-400 text-sm">Ulaji wa Data</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">CRM Records</span>
                <span className="text-blue-400 font-semibold">1,247/min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">ERP Updates</span>
                <span className="text-green-400 font-semibold">892/min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Payment Events</span>
                <span className="text-yellow-400 font-semibold">156/min</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <HiCog className="w-8 h-8 text-orange-500" />
              <div>
                <h4 className="font-semibold text-gray-100">Processing</h4>
                <p className="text-gray-400 text-sm">Uchakataji</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Smart Contracts</span>
                <span className="text-orange-400 font-semibold">423 calls</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Data Validation</span>
                <span className="text-green-400 font-semibold">99.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Avg. Latency</span>
                <span className="text-blue-400 font-semibold">45ms</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <HiGlobe className="w-8 h-8 text-purple-500" />
              <div>
                <h4 className="font-semibold text-gray-100">Blockchain Output</h4>
                <p className="text-gray-400 text-sm">Matokeo ya Blockchain</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Transactions</span>
                <span className="text-purple-400 font-semibold">289 tx/hr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Gas Optimized</span>
                <span className="text-green-400 font-semibold">67%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Success Rate</span>
                <span className="text-green-400 font-semibold">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Benefits */}
      <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl p-8 border border-orange-500/30">
        <h3 className="text-2xl font-bold text-orange-500 mb-6 text-center">Integration Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <HiLightningBolt className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-100 mb-2">Zero Downtime</h4>
            <p className="text-gray-400 text-sm">Hakuna Kuzimwa</p>
          </div>
          <div className="text-center">
            <HiShieldCheck className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-100 mb-2">Enterprise Security</h4>
            <p className="text-gray-400 text-sm">Usalama wa Biashara</p>
          </div>
          <div className="text-center">
            <HiRefresh className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-100 mb-2">Real-time Sync</h4>
            <p className="text-gray-400 text-sm">Usawazisho wa Wakati Halisi</p>
          </div>
          <div className="text-center">
            <HiCode className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-100 mb-2">API-First Design</h4>
            <p className="text-gray-400 text-sm">Muundo wa API-Kwanza</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
            <HiArrowRight className="w-5 h-5" />
            Explore Integration Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseIntegration;