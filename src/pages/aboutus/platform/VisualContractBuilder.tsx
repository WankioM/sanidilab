import React, { useState, useCallback } from 'react';
import { 
  HiCode, 
  HiPlay, 
  HiEye, 
  HiDownload,
  HiPlus,
  HiCube,
  HiLightningBolt,
  HiShieldCheck,
  HiCurrencyDollar
} from 'react-icons/hi';

interface ContractBlock {
  id: string;
  type: 'function' | 'event' | 'modifier' | 'variable';
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  parameters?: string[];
}

interface DroppedBlock extends ContractBlock {
  x: number;
  y: number;
}

interface Template {
  id: string;
  name: string;
  nameSwahili: string;
  description: string;
  icon: React.ReactNode;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  useCase: string;
  estimatedTime: string;
}

const VisualContractBuilder: React.FC = () => {
  const [draggedBlock, setDraggedBlock] = useState<ContractBlock | null>(null);
  const [droppedBlocks, setDroppedBlocks] = useState<DroppedBlock[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'builder' | 'templates'>('builder');

  const contractBlocks: ContractBlock[] = [
    {
      id: 'transfer',
      type: 'function',
      title: 'Transfer',
      description: 'Transfer tokens between accounts',
      icon: <HiCurrencyDollar className="w-5 h-5" />,
      color: 'bg-green-500',
      parameters: ['address to', 'uint256 amount']
    },
    {
      id: 'mint',
      type: 'function',
      title: 'Mint',
      description: 'Create new tokens',
      icon: <HiPlus className="w-5 h-5" />,
      color: 'bg-blue-500',
      parameters: ['address to', 'uint256 amount']
    },
    {
      id: 'onlyOwner',
      type: 'modifier',
      title: 'Only Owner',
      description: 'Restrict access to contract owner',
      icon: <HiShieldCheck className="w-5 h-5" />,
      color: 'bg-red-500'
    },
    {
      id: 'transferEvent',
      type: 'event',
      title: 'Transfer Event',
      description: 'Emit when tokens are transferred',
      icon: <HiLightningBolt className="w-5 h-5" />,
      color: 'bg-yellow-500',
      parameters: ['address from', 'address to', 'uint256 value']
    },
    {
      id: 'totalSupply',
      type: 'variable',
      title: 'Total Supply',
      description: 'Track total token supply',
      icon: <HiCube className="w-5 h-5" />,
      color: 'bg-purple-500'
    }
  ];

  const templates: Template[] = [
    {
      id: 'loyalty',
      name: 'Customer Loyalty Token',
      nameSwahili: 'Tokeni ya Uongozi wa Wateja',
      description: 'Reward system for customer engagement',
      icon: <HiCurrencyDollar className="w-8 h-8" />,
      complexity: 'Beginner',
      useCase: 'Retail & E-commerce',
      estimatedTime: '15 minutes'
    },
    {
      id: 'supply',
      name: 'Supply Chain Tracker',
      nameSwahili: 'Mfuatiliaji wa Mlolongo wa Ugavi',
      description: 'Track products from origin to consumer',
      icon: <HiCube className="w-8 h-8" />,
      complexity: 'Intermediate',
      useCase: 'Manufacturing & Logistics',
      estimatedTime: '30 minutes'
    },
    {
      id: 'payment',
      name: 'Automated Payment System',
      nameSwahili: 'Mfumo wa Malipo ya Otomatiki',
      description: 'Smart contract for automated settlements',
      icon: <HiLightningBolt className="w-8 h-8" />,
      complexity: 'Advanced',
      useCase: 'Financial Services',
      estimatedTime: '45 minutes'
    }
  ];

  const handleDragStart = useCallback((block: ContractBlock) => {
    setDraggedBlock(block);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (draggedBlock) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newBlock: DroppedBlock = {
        ...draggedBlock,
        x,
        y
      };
      
      setDroppedBlocks(prev => [...prev, newBlock]);
      setDraggedBlock(null);
    }
  }, [draggedBlock]);

  const generateContractCode = (): string => {
    return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GeneratedContract {
    ${droppedBlocks.filter(b => b.type === 'variable').map(b => 
      `uint256 public ${b.id};`
    ).join('\n    ')}
    
    ${droppedBlocks.filter(b => b.type === 'event').map(b => 
      `event ${b.title}(${b.parameters?.join(', ') || ''});`
    ).join('\n    ')}
    
    ${droppedBlocks.filter(b => b.type === 'modifier').map(b => 
      `modifier ${b.id}() {
        // ${b.description}
        _;
    }`
    ).join('\n    ')}
    
    ${droppedBlocks.filter(b => b.type === 'function').map(b => 
      `function ${b.id}(${b.parameters?.join(', ') || ''}) public {
        // ${b.description}
    }`
    ).join('\n    ')}
}`;
  };

  return (
    <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Visual Smart Contract Builder</h2>
        <p className="text-gray-300 mb-2">Mjenzi wa Mikataba Mjanja kwa Muonekano</p>
        <p className="text-gray-400">Drag and drop to build smart contracts without coding</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex mb-8">
        <button
          onClick={() => setActiveTab('builder')}
          className={`px-6 py-3 rounded-t-lg font-semibold transition-colors ${
            activeTab === 'builder'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Builder
        </button>
        <button
          onClick={() => setActiveTab('templates')}
          className={`px-6 py-3 rounded-t-lg font-semibold transition-colors ${
            activeTab === 'templates'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Templates
        </button>
      </div>

      {activeTab === 'builder' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Block Palette */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Contract Blocks</h3>
            {contractBlocks.map((block) => (
              <div
                key={block.id}
                draggable
                onDragStart={() => handleDragStart(block)}
                className={`${block.color} p-4 rounded-lg cursor-grab hover:scale-105 transition-transform duration-200 active:cursor-grabbing`}
              >
                <div className="flex items-center gap-3 mb-2">
                  {block.icon}
                  <span className="font-semibold text-white">{block.title}</span>
                </div>
                <p className="text-white/80 text-sm">{block.description}</p>
                {block.parameters && (
                  <div className="mt-2">
                    <p className="text-white/60 text-xs">Parameters:</p>
                    <p className="text-white/70 text-xs">{block.parameters.join(', ')}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Canvas */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-200">Contract Canvas</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <HiEye className="w-4 h-4" />
                  {showPreview ? 'Hide' : 'Preview'} Code
                </button>
                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors">
                  <HiDownload className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="relative bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-8 min-h-96 overflow-hidden"
            >
              {droppedBlocks.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500 text-lg">Drop contract blocks here to start building</p>
                </div>
              ) : (
                droppedBlocks.map((block, index) => (
                  <div
                    key={`${block.id}-${index}`}
                    className={`absolute ${block.color} p-3 rounded-lg shadow-lg`}
                    style={{ left: block.x - 50, top: block.y - 25 }}
                  >
                    <div className="flex items-center gap-2">
                      {block.icon}
                      <span className="text-white font-medium text-sm">{block.title}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Code Preview */}
            {showPreview && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-3">Generated Smart Contract</h4>
                <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                  <code className="text-green-400">{generateContractCode()}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Template Gallery */
        <div>
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">Template Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className={`bg-gray-800 rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${
                  selectedTemplate === template.id
                    ? 'border-orange-500 bg-orange-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-orange-500">{template.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-100">{template.name}</h4>
                    <p className="text-orange-400 text-sm">{template.nameSwahili}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{template.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Complexity:</span>
                    <span className={`text-sm font-medium ${
                      template.complexity === 'Beginner' ? 'text-green-400' :
                      template.complexity === 'Intermediate' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {template.complexity}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Use Case:</span>
                    <span className="text-gray-300 text-sm">{template.useCase}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Est. Time:</span>
                    <span className="text-gray-300 text-sm">{template.estimatedTime}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors">
                  Use Template
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Try It Yourself CTA */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl p-8 border border-orange-500/30">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Build Your Smart Contract?</h3>
          <p className="text-gray-300 mb-6">
            Join thousands of businesses already using Sanidi's visual builder
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
            <HiPlay className="w-5 h-5" />
            Try It Yourself - Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisualContractBuilder;