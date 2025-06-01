// Contract Builder Types
export interface ContractTemplate {
    id: string;
    name: string;
    nameSwahili: string;
    description: string;
    descriptionSwahili: string;
    icon: React.ReactNode;
    complexity: 'Beginner' | 'Intermediate' | 'Advanced';
    complexitySwahili: 'Mwanzo' | 'Kati' | 'Juu';
    useCase: string;
    useCaseSwahili: string;
    estimatedTime: string;
    category: 'token' | 'nft' | 'defi' | 'governance' | 'supply-chain' | 'payment';
    blocks: string[]; // Array of block IDs that make up this template
  }
  
  export interface BlockParameter {
    name: string;
    type: 'address' | 'uint256' | 'string' | 'bool' | 'bytes';
    required: boolean;
    defaultValue?: string;
    description: string;
    descriptionSwahili: string;
  }
  
  export interface ContractBlock {
    id: string;
    type: 'function' | 'event' | 'modifier' | 'variable' | 'constructor' | 'import';
    category: 'basic' | 'advanced' | 'token' | 'access' | 'math' | 'logic';
    title: string;
    titleSwahili: string;
    description: string;
    descriptionSwahili: string;
    color: string; // Use our brand colors
    parameters: BlockParameter[];
    returnType?: string;
    visibility?: 'public' | 'private' | 'internal' | 'external';
    mutability?: 'pure' | 'view' | 'payable' | 'nonpayable';
  }
  
  export interface WorkspaceState {
    xml: string; // Blockly workspace XML
    generatedCode: string;
    isValid: boolean;
    errors: string[];
    warnings: string[];
  }
  
  export interface BuilderSettings {
    language: 'en' | 'sw';
    showTooltips: boolean;
    autoGenerate: boolean;
    theme: 'light' | 'dark';
    gridEnabled: boolean;
    snapToGrid: boolean;
  }
  
  export interface ExportOptions {
    format: 'solidity' | 'truffle' | 'hardhat' | 'foundry';
    includeTests: boolean;
    includeComments: boolean;
    optimize: boolean;
    license: string;
  }