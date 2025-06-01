import React from 'react';
import { HiCurrencyDollar, HiPlus, HiShieldCheck, HiLightningBolt, HiCube } from 'react-icons/hi';

export interface ContractBlock {
  id: string;
  type: 'function' | 'event' | 'modifier' | 'variable' | 'constructor';
  title: string;
  titleSwahili: string;
  description: string;
  descriptionSwahili: string;
  icon: React.ReactNode;
  color: string;
  parameters?: string[];
}

export interface BlockCategory {
  id: string;
  name: string;
  nameSwahili: string;
  icon: React.ReactNode;
  color: string;
  blocks: ContractBlock[];
}

export const blockCategories: BlockCategory[] = [
  {
    id: 'structural',
    name: 'Structural',
    nameSwahili: 'Muundo',
    icon: React.createElement(HiCube, { className: "w-4 h-4" }),
    color: 'text-dun',
    blocks: [
      {
        id: 'contract',
        type: 'function',
        title: 'Contract',
        titleSwahili: 'Mkataba',
        description: 'Main container; sets contract name',
        descriptionSwahili: 'Chombo kikuu; weka jina la mkataba',
        icon: React.createElement(HiCube, { className: "w-4 h-4" }),
        color: 'bg-spacecadet',
        parameters: ['string name']
      },
      {
        id: 'pragma',
        type: 'function',
        title: 'Pragma',
        titleSwahili: 'Pragma',
        description: 'Solidity version specifier',
        descriptionSwahili: 'Kibainishi cha toleo la Solidity',
        icon: React.createElement(HiCube, { className: "w-4 h-4" }),
        color: 'bg-ebony',
        parameters: []
      }
    ]
  },
  {
    id: 'access',
    name: 'Access Control',
    nameSwahili: 'Udhibiti wa Ufikiaji',
    icon: React.createElement(HiShieldCheck, { className: "w-4 h-4" }),
    color: 'text-flame',
    blocks: [
      {
        id: 'onlyOwner',
        type: 'modifier',
        title: 'Only Owner',
        titleSwahili: 'Mmiliki Pekee',
        description: 'Restrict function access to owner',
        descriptionSwahili: 'Zuia ufikiaji kwa mmiliki',
        icon: React.createElement(HiShieldCheck, { className: "w-4 h-4" }),
        color: 'bg-flame',
        parameters: []
      },
      {
        id: 'customRole',
        type: 'modifier',
        title: 'Custom Role',
        titleSwahili: 'Jukumu Maalum',
        description: 'Role-based access control',
        descriptionSwahili: 'Udhibiti wa ufikiaji kulingana na jukumu',
        icon: React.createElement(HiShieldCheck, { className: "w-4 h-4" }),
        color: 'bg-darkcyan',
        parameters: ['bytes32 role']
      }
    ]
  },
  {
    id: 'functions',
    name: 'Functions',
    nameSwahili: 'Kazi',
    icon: React.createElement(HiPlus, { className: "w-4 h-4" }),
    color: 'text-darkcyan',
    blocks: [
      {
        id: 'transfer',
        type: 'function',
        title: 'Transfer',
        titleSwahili: 'Hamisha',
        description: 'Transfer tokens between accounts',
        descriptionSwahili: 'Hamisha tokeni kati ya akaunti',
        icon: React.createElement(HiCurrencyDollar, { className: "w-4 h-4" }),
        color: 'bg-darkcyan',
        parameters: ['address to', 'uint256 amount']
      },
      {
        id: 'mint',
        type: 'function',
        title: 'Mint',
        titleSwahili: 'Tengeneza',
        description: 'Create new tokens',
        descriptionSwahili: 'Unda tokeni mpya',
        icon: React.createElement(HiPlus, { className: "w-4 h-4" }),
        color: 'bg-darkcyan',
        parameters: ['address to', 'uint256 amount']
      },
      {
        id: 'constructor',
        type: 'constructor',
        title: 'Constructor',
        titleSwahili: 'Mjenzi',
        description: 'Runs once during deployment',
        descriptionSwahili: 'Inafanya kazi mara moja wakati wa uwekaji',
        icon: React.createElement(HiPlus, { className: "w-4 h-4" }),
        color: 'bg-ebony',
        parameters: []
      }
    ]
  },
  {
    id: 'variables',
    name: 'Variables & Storage',
    nameSwahili: 'Vigeu na Hifadhi',
    icon: React.createElement(HiCube, { className: "w-4 h-4" }),
    color: 'text-ebony',
    blocks: [
      {
        id: 'totalSupply',
        type: 'variable',
        title: 'Total Supply',
        titleSwahili: 'Jumla ya Ugavi',
        description: 'Track total token supply',
        descriptionSwahili: 'Fuatilia jumla ya tokeni',
        icon: React.createElement(HiCube, { className: "w-4 h-4" }),
        color: 'bg-dun',
        parameters: []
      },
      {
        id: 'balanceMapping',
        type: 'variable',
        title: 'Balance Mapping',
        titleSwahili: 'Ramani ya Mizani',
        description: 'Map addresses to balances',
        descriptionSwahili: 'Oanisha anwani na mizani',
        icon: React.createElement(HiCube, { className: "w-4 h-4" }),
        color: 'bg-dun',
        parameters: []
      }
    ]
  },
  {
    id: 'events',
    name: 'Events & Logging',
    nameSwahili: 'Matukio na Uandikaji',
    icon: React.createElement(HiLightningBolt, { className: "w-4 h-4" }),
    color: 'text-yellow-400',
    blocks: [
      {
        id: 'transferEvent',
        type: 'event',
        title: 'Transfer Event',
        titleSwahili: 'Tukio la Uhamisho',
        description: 'Emit when tokens transferred',
        descriptionSwahili: 'Toa ishara tokeni zinapohamishwa',
        icon: React.createElement(HiLightningBolt, { className: "w-4 h-4" }),
        color: 'bg-yellow-600',
        parameters: ['address from', 'address to', 'uint256 value']
      }
    ]
  }
];