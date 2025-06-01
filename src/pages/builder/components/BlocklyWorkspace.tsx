import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as Blockly from 'blockly';
import { WorkspaceState } from '../types/contractTypes';
import AICodeGenerator, { BlockData } from '../utils/codeGenerator';
import { ContractBlock, blockCategories } from './BlockDefinitions';
import BlockPalette from './BlockPallette';
import CanvasArea, { DroppedBlock } from './CanvasArea';

interface SimpleWorkspaceProps {
  onWorkspaceChange: (state: WorkspaceState) => void;
  language: 'en' | 'sw';
  theme: 'light' | 'dark';
  embedded?: boolean;
  showAdvancedFeatures?: boolean;
}

// Define Blockly blocks for smart contracts
const BLOCKLY_DEFINITIONS = [
  {
    type: 'contract_main',
    message0: 'Contract %1',
    args0: [
      { type: 'field_input', name: 'NAME', text: 'MyContract' }
    ],
    message1: '%1',
    args1: [
      { type: 'input_statement', name: 'BODY' }
    ],
    colour: '#21253A',
    tooltip: 'Main contract definition',
    helpUrl: ''
  },
  {
    type: 'function_transfer',
    message0: 'Transfer %1 tokens to %2',
    args0: [
      { type: 'input_value', name: 'AMOUNT', check: 'Number' },
      { type: 'input_value', name: 'TO', check: 'String' }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: '#4B8F8C',
    tooltip: 'Transfer tokens between accounts',
    helpUrl: ''
  },
  {
    type: 'function_mint',
    message0: 'Mint %1 tokens to %2',
    args0: [
      { type: 'input_value', name: 'AMOUNT', check: 'Number' },
      { type: 'input_value', name: 'TO', check: 'String' }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: '#4B8F8C',
    tooltip: 'Create new tokens',
    helpUrl: ''
  },
  {
    type: 'modifier_only_owner',
    message0: 'Only Owner',
    output: 'Boolean',
    colour: '#EC5022',
    tooltip: 'Restrict function access to contract owner',
    helpUrl: ''
  },
  {
    type: 'event_transfer',
    message0: 'Transfer Event from %1 to %2 value %3',
    args0: [
      { type: 'input_value', name: 'FROM', check: 'String' },
      { type: 'input_value', name: 'TO', check: 'String' },
      { type: 'input_value', name: 'VALUE', check: 'Number' }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: '#E2D2B8',
    tooltip: 'Emit transfer event',
    helpUrl: ''
  },
  {
    type: 'variable_total_supply',
    message0: 'Total Supply',
    output: 'Number',
    colour: '#606D5D',
    tooltip: 'Total token supply variable',
    helpUrl: ''
  },
  {
    type: 'variable_balance_mapping',
    message0: 'Balance of %1',
    args0: [
      { type: 'input_value', name: 'ADDRESS', check: 'String' }
    ],
    output: 'Number',
    colour: '#606D5D',
    tooltip: 'Address to balance mapping',
    helpUrl: ''
  },
  {
    type: 'input_address',
    message0: 'Address %1',
    args0: [
      { type: 'field_input', name: 'ADDRESS', text: '0x...' }
    ],
    output: 'String',
    colour: '#606D5D',
    tooltip: 'Ethereum address input',
    helpUrl: ''
  },
  {
    type: 'input_number',
    message0: 'Number %1',
    args0: [
      { type: 'field_number', name: 'VALUE', value: 0, min: 0 }
    ],
    output: 'Number',
    colour: '#606D5D',
    tooltip: 'Numeric value input',
    helpUrl: ''
  }
];

// Toolbox configuration for Blockly
const TOOLBOX = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Contract Structure',
      colour: '#21253A',
      contents: [
        { kind: 'block', type: 'contract_main' }
      ]
    },
    {
      kind: 'category',
      name: 'Functions',
      colour: '#4B8F8C',
      contents: [
        { kind: 'block', type: 'function_transfer' },
        { kind: 'block', type: 'function_mint' }
      ]
    },
    {
      kind: 'category',
      name: 'Access Control',
      colour: '#EC5022',
      contents: [
        { kind: 'block', type: 'modifier_only_owner' }
      ]
    },
    {
      kind: 'category',
      name: 'Events',
      colour: '#E2D2B8',
      contents: [
        { kind: 'block', type: 'event_transfer' }
      ]
    },
    {
      kind: 'category',
      name: 'Variables',
      colour: '#606D5D',
      contents: [
        { kind: 'block', type: 'variable_total_supply' },
        { kind: 'block', type: 'variable_balance_mapping' }
      ]
    },
    {
      kind: 'category',
      name: 'Inputs',
      colour: '#606D5D',
      contents: [
        { kind: 'block', type: 'input_address' },
        { kind: 'block', type: 'input_number' }
      ]
    }
  ]
};

// Blockly code generators for Solidity
// Custom Solidity code generator
const generateSolidityFromBlocks = (workspace: Blockly.WorkspaceSvg): string => {
    const blocks = workspace.getAllBlocks();
    let contractCode = '';
    let contractName = 'MyContract';
    let functions = '';
    let events = '';
    let variables = '';
    
    // Find contract main block first
    const contractBlock = blocks.find(block => block.type === 'contract_main');
    if (contractBlock) {
      const nameField = contractBlock.getField('NAME');
      if (nameField) {
        contractName = nameField.getValue() || 'MyContract';
      }
    }
    
    // Process all blocks
    blocks.forEach(block => {
      switch (block.type) {
        case 'function_transfer':
          functions += `    function transfer(address to, uint256 amount) public {\n        // Transfer logic here\n        // Implementation needed\n    }\n\n`;
          break;
          
        case 'function_mint':
          functions += `    function mint(address to, uint256 amount) public {\n        // Mint logic here\n        // Implementation needed\n    }\n\n`;
          break;
          
        case 'event_transfer':
          events += `    event Transfer(address indexed from, address indexed to, uint256 value);\n\n`;
          break;
          
        case 'variable_total_supply':
          variables += `    uint256 public totalSupply;\n\n`;
          break;
          
        case 'variable_balance_mapping':
          variables += `    mapping(address => uint256) public balanceOf;\n\n`;
          break;
      }
    });
    
    // Build complete contract
    contractCode = `// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.0;
  
  contract ${contractName} {
  ${variables}${events}${functions}}`;
    
    return contractCode;
  };

const SimpleWorkspace: React.FC<SimpleWorkspaceProps> = ({
    onWorkspaceChange,
    language,
    theme,
    embedded = false,
    showAdvancedFeatures = true
  }) => {
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [aiGenerator] = useState(() => new AICodeGenerator('local'));
  
  // Blockly workspace refs
  const blocklyDivRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);

  // Grid snapping configuration
  const GRID_SIZE = 20;
  const snapToGrid = (value: number) => Math.round(value / GRID_SIZE) * GRID_SIZE;

  // State management
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());

 // Generate Solidity code from Blockly workspace
 const generateCodeFromBlockly = useCallback(async () => {
    if (!workspaceRef.current) return;
  
    setIsGenerating(true);
    
    try {
      // Generate code directly from Blockly workspace
      const generatedCode = generateSolidityFromBlocks(workspaceRef.current);
      
      // Get XML representation of workspace
      const xmlDom = Blockly.Xml.workspaceToDom(workspaceRef.current);
      const xmlText = new XMLSerializer().serializeToString(xmlDom);
      
      // Check if we have any blocks
      const blocks = workspaceRef.current.getAllBlocks();
      const hasBlocks = blocks.length > 0;
      
      const state: WorkspaceState = {
        xml: xmlText,
        generatedCode: generatedCode,
        isValid: hasBlocks && generatedCode.includes('contract'),
        errors: hasBlocks ? [] : [language === 'en' ? 'Add some blocks to generate code' : 'Ongeza vitalu ili kutengeneza kodi'],
        warnings: hasBlocks ? [] : [language === 'en' ? 'Drag blocks from the left panel' : 'Vuta vitalu kutoka panel kushoto']
      };
      
      onWorkspaceChange(state);
    } catch (error) {
      console.error('Code generation failed:', error);
      const state: WorkspaceState = {
        xml: '<xml></xml>',
        generatedCode: '',
        isValid: false,
        errors: [`Code generation failed: ${error}`],
        warnings: []
      };
      onWorkspaceChange(state);
    } finally {
      setIsGenerating(false);
    }
  }, [language, onWorkspaceChange]);
// Initialize Blockly workspace
useEffect(() => {
    if (blocklyDivRef.current && !workspaceRef.current) {
      try {
        // Define custom blocks
        Blockly.defineBlocksWithJsonArray(BLOCKLY_DEFINITIONS);

        
        // Create Blockly workspace
        const workspace = Blockly.inject(blocklyDivRef.current, {
          toolbox: TOOLBOX,
          collapse: true,
          comments: true,
          disable: true,
          maxBlocks: Infinity,
          trashcan: true,
          horizontalLayout: false,
          toolboxPosition: 'start',
          css: true,
          media: 'https://unpkg.com/blockly/media/',
          rtl: language === 'sw',
          scrollbars: true,
          sounds: true,
          oneBasedIndex: true,
          grid: {
            spacing: GRID_SIZE,
            length: 3,
            colour: theme === 'dark' ? '#444' : '#ccc',
            snap: true
          },
          zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
          },
          theme: theme === 'dark' ? 'dark' : 'classic'
        });
  
        workspaceRef.current = workspace;
  
        // Add change listener for real-time code generation
        const handleBlocklyChange = (event: any) => {
          if (event.type === Blockly.Events.BLOCK_MOVE || 
              event.type === Blockly.Events.BLOCK_CREATE || 
              event.type === Blockly.Events.BLOCK_DELETE ||
              event.type === Blockly.Events.BLOCK_CHANGE) {
            generateCodeFromBlockly();
          }
        };
  
        workspace.addChangeListener(handleBlocklyChange);
  
        // Cleanup function
        return () => {
          if (workspace) {
            workspace.removeChangeListener(handleBlocklyChange);
            workspace.dispose();
          }
        };
      } catch (error) {
        console.error('Failed to initialize Blockly:', error);
      }
    }
}, [theme, language, generateCodeFromBlockly]);



  // Helper functions for Blockly integration
  const mapBlocklyTypeToContractType = (blockType: string): 'function' | 'event' | 'modifier' | 'variable' | 'constructor' => {
    if (blockType?.includes('function')) return 'function';
    if (blockType?.includes('event')) return 'event';
    if (blockType?.includes('modifier')) return 'modifier';
    if (blockType?.includes('variable') || blockType?.includes('supply') || blockType?.includes('balance')) return 'variable';
    if (blockType?.includes('contract')) return 'constructor';
    return 'function';
  };

  const getBlockTitle = (blockType: string, lang: 'en' | 'sw'): string => {
    const titles: Record<string, { en: string, sw: string }> = {
      'function_transfer': { en: 'Transfer', sw: 'Hamisha' },
      'function_mint': { en: 'Mint', sw: 'Tengeneza' },
      'modifier_only_owner': { en: 'Only Owner', sw: 'Mmiliki Pekee' },
      'event_transfer': { en: 'Transfer Event', sw: 'Tukio la Uhamisho' },
      'variable_total_supply': { en: 'Total Supply', sw: 'Jumla ya Ugavi' },
      'variable_balance_mapping': { en: 'Balance Mapping', sw: 'Ramani ya Mizani' },
      'contract_main': { en: 'Contract', sw: 'Mkataba' }
    };
    
    return titles[blockType]?.[lang] || blockType;
  };

  const getBlockDescription = (blockType: string, lang: 'en' | 'sw'): string => {
    const descriptions: Record<string, { en: string, sw: string }> = {
      'function_transfer': { en: 'Transfer tokens between accounts', sw: 'Hamisha tokeni kati ya akaunti' },
      'function_mint': { en: 'Create new tokens', sw: 'Unda tokeni mpya' },
      'modifier_only_owner': { en: 'Restrict access to owner', sw: 'Zuia ufikiaji kwa mmiliki' },
      'event_transfer': { en: 'Emit when tokens transferred', sw: 'Toa ishara tokeni zinapohamishwa' },
      'variable_total_supply': { en: 'Track total token supply', sw: 'Fuatilia jumla ya tokeni' },
      'variable_balance_mapping': { en: 'Map addresses to balances', sw: 'Oanisha anwani na mizani' },
      'contract_main': { en: 'Main contract definition', sw: 'Ufafanuzi mkuu wa mkataba' }
    };
    
    return descriptions[blockType]?.[lang] || blockType;
  };

  const extractBlockParameters = (block: any): string[] => {
    const params: string[] = [];
    
    // Extract parameters based on block type
    if (block.type === 'function_transfer' || block.type === 'function_mint') {
      params.push('address to', 'uint256 amount');
    } else if (block.type === 'event_transfer') {
      params.push('address from', 'address to', 'uint256 value');
    } else if (block.type === 'contract_main') {
      const nameField = block.getField('NAME');
      if (nameField) {
        params.push(`name: ${nameField.getValue()}`);
      }
    }
    
    return params;
  };

 
  const regenerateCode = useCallback(async () => {
    if (workspaceRef.current) {
      await generateCodeFromBlockly();
    }
  }, [generateCodeFromBlockly]);

  // Export workspace as XML
  const exportWorkspace = useCallback(() => {
    if (workspaceRef.current) {
      const xmlDom = Blockly.Xml.workspaceToDom(workspaceRef.current);
      const xmlText = new XMLSerializer().serializeToString(xmlDom);
      
      const blob = new Blob([xmlText], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'contract-workspace.xml';
      a.click();
      URL.revokeObjectURL(url);
    }
  }, []);

  // Import workspace from XML
  const importWorkspace = useCallback((xmlText: string) => {
    if (workspaceRef.current) {
      try {
        const parser = new DOMParser();
        const xmlDom = parser.parseFromString(xmlText, 'application/xml');
        Blockly.Xml.domToWorkspace(xmlDom.documentElement, workspaceRef.current);
        generateCodeFromBlockly();
      } catch (error) {
        console.error('Failed to import workspace:', error);
      }
    }
  }, [generateCodeFromBlockly]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
      {/* Block Palette */}
      <BlockPalette
        language={language}
        theme={theme}
        onBlockDragStart={() => {}} // Empty function since we're using Blockly native
        droppedBlocksCount={0} // Will get from Blockly workspace
        onRegenerateCode={regenerateCode}
        isGenerating={isGenerating}
        showSearch={showAdvancedFeatures}
        showStats={showAdvancedFeatures}
      />
  
      {/* Main Content Area */}
      <div className="lg:col-span-3 space-y-6">
        {/* Blockly Workspace */}
        <div className="bg-spacecadet/50 rounded-xl border border-dun/20">
          <div className="p-4 border-b border-dun/20">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-dun">
                {language === 'en' ? 'Visual Programming' : 'Programu ya Kuona'}
              </h3>
              <div className="flex items-center gap-2">
                {showAdvancedFeatures && (
                  <>
                    <button
                      onClick={exportWorkspace}
                      className="text-xs px-3 py-1 bg-dun/10 hover:bg-dun/20 text-dun rounded transition-colors"
                    >
                      {language === 'en' ? 'Export' : 'Hamisha'}
                    </button>
                    <label className="text-xs px-3 py-1 bg-dun/10 hover:bg-dun/20 text-dun rounded transition-colors cursor-pointer">
                      {language === 'en' ? 'Import' : 'Leta'}
                      <input
                        type="file"
                        accept=".xml"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              const xmlText = event.target?.result as string;
                              importWorkspace(xmlText);
                            };
                            reader.readAsText(file);
                          }
                        }}
                      />
                    </label>
                  </>
                )}
                {isGenerating && (
                  <div className="flex items-center gap-2 text-flame text-sm">
                    <div className="animate-spin w-4 h-4 border-2 border-flame/30 border-t-flame rounded-full"></div>
                    {language === 'en' ? 'Generating...' : 'Inatengeneza...'}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Blockly Container */}
          <div 
            ref={blocklyDivRef}
            className="w-full bg-white"
            style={{ height: embedded ? '400px' : '500px' }}
          />
        </div>
      </div>
    </div>
  );
      {/* Block Palette */}
      return (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
    {/* Block Palette */}
    <BlockPalette
      language={language}
      theme={theme}
      onBlockDragStart={() => {}} // Empty function since we're using Blockly native
      droppedBlocksCount={0} // Will get from Blockly workspace
      onRegenerateCode={regenerateCode}
      isGenerating={isGenerating}
      showSearch={showAdvancedFeatures}
      showStats={showAdvancedFeatures}
    />

      {/* Main Content Area */}
<div className="lg:col-span-3 space-y-6">
  {/* Blockly Workspace */}
  <div className="bg-spacecadet/50 rounded-xl border border-dun/20">
    <div className="p-4 border-b border-dun/20">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-dun">
          {language === 'en' ? 'Visual Programming' : 'Programu ya Kuona'}
        </h3>
              <div className="flex items-center gap-2">
                {showAdvancedFeatures && (
                  <>
                    <button
                      onClick={exportWorkspace}
                      className="text-xs px-3 py-1 bg-dun/10 hover:bg-dun/20 text-dun rounded transition-colors"
                    >
                      {language === 'en' ? 'Export' : 'Hamisha'}
                    </button>
                    <label className="text-xs px-3 py-1 bg-dun/10 hover:bg-dun/20 text-dun rounded transition-colors cursor-pointer">
                      {language === 'en' ? 'Import' : 'Leta'}
                      <input
                        type="file"
                        accept=".xml"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              const xmlText = event.target?.result as string;
                              importWorkspace(xmlText);
                            };
                            reader.readAsText(file);
                          }
                        }}
                      />
                    </label>
                  </>
                )}
                {isGenerating && (
                  <div className="flex items-center gap-2 text-flame text-sm">
                    <div className="animate-spin w-4 h-4 border-2 border-flame/30 border-t-flame rounded-full"></div>
                    {language === 'en' ? 'Generating...' : 'Inatengeneza...'}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Blockly Container */}
          <div 
            ref={blocklyDivRef}
            className="w-full bg-white"
            style={{ height: embedded ? '400px' : '500px' }}
          />
        </div>

    
      </div>
    </div>
  );
};

export default SimpleWorkspace;