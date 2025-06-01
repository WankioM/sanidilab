import React, { useState } from 'react';
import { 
  HiCurrencyDollar, 
  HiCube, 
  HiLightningBolt,
  HiShieldCheck,
  HiCollection,
  HiTruck,
  HiGlobe
} from 'react-icons/hi';
import { ContractTemplate } from '../types/contractTypes';

interface TemplateGalleryProps {
  onTemplateSelect: (templateId: string) => void;
  language: 'en' | 'sw';
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ onTemplateSelect, language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');

  const templates: ContractTemplate[] = [
    {
      id: 'loyalty_token',
      name: 'Customer Loyalty Token',
      nameSwahili: 'Tokeni ya Uongozi wa Wateja',
      description: 'Reward system for customer engagement and retention',
      descriptionSwahili: 'Mfumo wa zawadi kwa ushiriki na kuhifadhi wateja',
      icon: <HiCurrencyDollar className="w-8 h-8" />,
      complexity: 'Beginner',
      complexitySwahili: 'Mwanzo',
      useCase: 'Retail & E-commerce',
      useCaseSwahili: 'Reja na Biashara ya Kielektroniki',
      estimatedTime: '15 minutes',
      category: 'token',
      blocks: ['total_supply_variable', 'balance_mapping', 'transfer_function', 'mint_function', 'transfer_event']
    },
    {
      id: 'supply_chain_tracker',
      name: 'Supply Chain Tracker',
      nameSwahili: 'Mfuatiliaji wa Mlolongo wa Ugavi',
      description: 'Track products from origin to consumer with transparency',
      descriptionSwahili: 'Fuatilia bidhaa kutoka asili hadi mtumiaji kwa uwazi',
      icon: <HiTruck className="w-8 h-8" />,
      complexity: 'Intermediate',
      complexitySwahili: 'Kati',
      useCase: 'Manufacturing & Logistics',
      useCaseSwahili: 'Utengenezaji na Usafirishaji',
      estimatedTime: '30 minutes',
      category: 'supply-chain',
      blocks: ['constructor_block', 'only_owner_modifier', 'transfer_event']
    },
    {
      id: 'payment_splitter',
      name: 'Automated Payment Splitter',
      nameSwahili: 'Mgawanyi wa Malipo ya Otomatiki',
      description: 'Automatically split payments among multiple recipients',
      descriptionSwahili: 'Gawanya malipo kiotomatiki kati ya wapokeaji wengi',
      icon: <HiLightningBolt className="w-8 h-8" />,
      complexity: 'Advanced',
      complexitySwahili: 'Juu',
      useCase: 'Financial Services',
      useCaseSwahili: 'Huduma za Kifedha',
      estimatedTime: '45 minutes',
      category: 'payment',
      blocks: ['transfer_function', 'only_owner_modifier', 'transfer_event']
    },
    {
      id: 'nft_collection',
      name: 'NFT Collection',
      nameSwahili: 'Mkusanyiko wa NFT',
      description: 'Create and manage non-fungible token collections',
      descriptionSwahili: 'Unda na simamia makusanyo ya tokeni zisizoweza kubadilishwa',
      icon: <HiCollection className="w-8 h-8" />,
      complexity: 'Intermediate',
      complexitySwahili: 'Kati',
      useCase: 'Digital Art & Collectibles',
      useCaseSwahili: 'Sanaa ya Kidijitali na Vitu vya Kukusanya',
      estimatedTime: '25 minutes',
      category: 'nft',
      blocks: ['mint_function', 'transfer_function', 'only_owner_modifier']
    },
    {
      id: 'voting_system',
      name: 'Voting System',
      nameSwahili: 'Mfumo wa Uchaguzi',
      description: 'Transparent and secure voting mechanism',
      descriptionSwahili: 'Utaratibu wa uchaguzi wenye uwazi na usalama',
      icon: <HiShieldCheck className="w-8 h-8" />,
      complexity: 'Advanced',
      complexitySwahili: 'Juu',
      useCase: 'Governance & DAOs',
      useCaseSwahili: 'Utawala na DAOs',
      estimatedTime: '40 minutes',
      category: 'governance',
      blocks: ['only_owner_modifier', 'transfer_event', 'constructor_block']
    },
    {
      id: 'cross_border_payment',
      name: 'Cross-Border Payment',
      nameSwahili: 'Malipo ya Kimataifa',
      description: 'Facilitate international payments with reduced fees',
      descriptionSwahili: 'Wezesha malipo ya kimataifa kwa ada zilizopunguzwa',
      icon: <HiGlobe className="w-8 h-8" />,
      complexity: 'Advanced',
      complexitySwahili: 'Juu',
      useCase: 'International Finance',
      useCaseSwahili: 'Fedha za Kimataifa',
      estimatedTime: '50 minutes',
      category: 'payment',
      blocks: ['transfer_function', 'only_owner_modifier', 'transfer_event']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Templates', nameSwahili: 'Mifano Yote' },
    { id: 'token', name: 'Token Systems', nameSwahili: 'Mifumo ya Tokeni' },
    { id: 'nft', name: 'NFT Collections', nameSwahili: 'Makusanyo ya NFT' },
    { id: 'payment', name: 'Payment Systems', nameSwahili: 'Mifumo ya Malipo' },
    { id: 'supply-chain', name: 'Supply Chain', nameSwahili: 'Mlolongo wa Ugavi' },
    { id: 'governance', name: 'Governance', nameSwahili: 'Utawala' }
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner':
      case 'Mwanzo':
        return 'text-darkcyan';
      case 'Intermediate':
      case 'Kati':
        return 'text-flame';
      case 'Advanced':
      case 'Juu':
        return 'text-drabbrown';
      default:
        return 'text-dun';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <h3 className="text-2xl font-semibold text-dun">
          {language === 'en' ? 'Template Gallery' : 'Mkusanyo wa Mifano'}
        </h3>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-flame text-dun'
                  : 'bg-spacecadet/50 text-dun/70 hover:text-dun hover:bg-dun/10'
              }`}
            >
              {language === 'en' ? category.name : category.nameSwahili}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className={`bg-spacecadet/50 rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg ${
              selectedTemplate === template.id
                ? 'border-flame bg-flame/10 shadow-flame/20'
                : 'border-dun/20 hover:border-dun/40'
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-flame p-2 bg-flame/10 rounded-lg">
                {template.icon}
              </div>
              <div>
                <h4 className="font-semibold text-dun">
                  {language === 'en' ? template.name : template.nameSwahili}
                </h4>
                <p className="text-flame/80 text-sm">
                  {language === 'en' ? template.useCase : template.useCaseSwahili}
                </p>
              </div>
            </div>
            
            <p className="text-dun/80 mb-4 text-sm">
              {language === 'en' ? template.description : template.descriptionSwahili}
            </p>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-dun/60 text-sm">
                  {language === 'en' ? 'Complexity:' : 'Ugumu:'}
                </span>
                <span className={`text-sm font-medium ${getComplexityColor(template.complexity)}`}>
                  {language === 'en' ? template.complexity : template.complexitySwahili}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-dun/60 text-sm">
                  {language === 'en' ? 'Est. Time:' : 'Muda:'}
                </span>
                <span className="text-dun/80 text-sm">{template.estimatedTime}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-dun/60 text-sm">
                  {language === 'en' ? 'Blocks:' : 'Vitalu:'}
                </span>
                <span className="text-dun/80 text-sm">{template.blocks.length}</span>
              </div>
            </div>
            
            <button 
              className={`w-full mt-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedTemplate === template.id
                  ? 'bg-flame text-dun hover:bg-flame/90'
                  : 'bg-dun/10 text-dun hover:bg-dun/20'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onTemplateSelect(template.id);
              }}
            >
              {language === 'en' ? 'Use Template' : 'Tumia Mfano'}
            </button>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <div className="text-dun/40 mb-4">
            <HiCube className="w-16 h-16 mx-auto" />
          </div>
          <p className="text-dun/60">
            {language === 'en' 
              ? 'No templates found in this category' 
              : 'Hakuna mifano iliyopatikana katika jamii hii'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default TemplateGallery;