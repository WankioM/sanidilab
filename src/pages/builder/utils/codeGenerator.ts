// AI-Powered Code Generator for Smart Contracts
export interface BlockData {
    id: string;
    type: 'function' | 'event' | 'modifier' | 'variable' | 'constructor';
    title: string;
    description: string;
    parameters?: string[];
    x: number;
    y: number;
    uniqueId: string;
  }
  
  export interface GeneratedContract {
    code: string;
    errors: string[];
    warnings: string[];
    suggestions: string[];
  }
  
  // OpenAI/Claude API integration for intelligent code generation
  export class AICodeGenerator {
    private apiKey: string | null = null;
    private provider: 'openai' | 'claude' | 'local' = 'local';
  
    constructor(provider: 'openai' | 'claude' | 'local' = 'local', apiKey?: string) {
      this.provider = provider;
      this.apiKey = apiKey || null;
    }
  
    /**
     * Generate Solidity code from visual blocks using AI
     */
    async generateFromBlocks(blocks: BlockData[], language: 'en' | 'sw' = 'en'): Promise<GeneratedContract> {
      try {
        if (this.provider === 'local') {
          return this.generateLocalCode(blocks, language);
        } else {
          return await this.generateAICode(blocks, language);
        }
      } catch (error) {
        return {
          code: this.generateFallbackCode(blocks),
          errors: [`Code generation failed: ${error}`],
          warnings: [],
          suggestions: ['Try using local generation mode']
        };
      }
    }
  
    /**
     * Generate code using AI (OpenAI or Claude)
     */
    private async generateAICode(blocks: BlockData[], language: 'en' | 'sw'): Promise<GeneratedContract> {
      const prompt = this.createAIPrompt(blocks, language);
  
      if (this.provider === 'openai') {
        return await this.callOpenAI(prompt);
      } else {
        return await this.callClaude(prompt);
      }
    }
  
    /**
     * Create AI prompt describing the blocks
     */
    private createAIPrompt(blocks: BlockData[], language: 'en' | 'sw'): string {
      const blockDescriptions = blocks.map(block => 
        `- ${block.type.toUpperCase()}: ${block.title} (${block.description})`
      ).join('\n');
  
      const languageInstruction = language === 'sw' 
        ? 'Add comments in Swahili (Kiswahili)' 
        : 'Add comments in English';
  
      return `Generate a complete, production-ready Solidity smart contract based on these visual blocks:
  
  ${blockDescriptions}
  
  Requirements:
  1. Use Solidity version ^0.8.0
  2. Include proper SPDX license identifier
  3. Add comprehensive error handling with require statements
  4. Include relevant events for all state changes
  5. Follow best practices for gas optimization
  6. ${languageInstruction}
  7. Make the contract secure and follow OpenZeppelin standards where applicable
  
  Generate ONLY the Solidity code, no explanations.`;
    }
  
    /**
     * Call OpenAI API
     */
    private async callOpenAI(prompt: string): Promise<GeneratedContract> {
      if (!this.apiKey) {
        throw new Error('OpenAI API key not provided');
      }
  
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are an expert Solidity developer who generates secure, well-documented smart contracts.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 2000,
          temperature: 0.1
        })
      });
  
      const data = await response.json();
      const generatedCode = data.choices[0]?.message?.content || '';
  
      return {
        code: generatedCode,
        errors: [],
        warnings: [],
        suggestions: ['AI-generated code should be reviewed by a security expert before deployment']
      };
    }
  
    /**
     * Call Claude API (Anthropic)
     */
    private async callClaude(prompt: string): Promise<GeneratedContract> {
      if (!this.apiKey) {
        throw new Error('Claude API key not provided');
      }
  
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-sonnet-20240229',
          max_tokens: 2000,
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ]
        })
      });
  
      const data = await response.json();
      const generatedCode = data.content[0]?.text || '';
  
      return {
        code: generatedCode,
        errors: [],
        warnings: [],
        suggestions: ['AI-generated code should be reviewed by a security expert before deployment']
      };
    }
  
    /**
     * Local code generation (fallback/development mode)
     */
    private generateLocalCode(blocks: BlockData[], language: 'en' | 'sw'): GeneratedContract {
      if (blocks.length === 0) {
        return {
          code: '',
          errors: [],
          warnings: [language === 'en' ? 'No blocks to generate code from' : 'Hakuna vitalu vya kutengeneza kodi'],
          suggestions: []
        };
      }
  
      const commentLang = language === 'sw' ? 'sw' : 'en';
      let code = this.generateContractHeader(commentLang);
      
      // Process blocks by type in logical order
      const variables = blocks.filter(b => b.type === 'variable');
      const events = blocks.filter(b => b.type === 'event');
      const modifiers = blocks.filter(b => b.type === 'modifier');
      const constructors = blocks.filter(b => b.type === 'constructor');
      const functions = blocks.filter(b => b.type === 'function');
  
      // Add state variables
      if (variables.length > 0) {
        code += this.generateStateVariables(variables, commentLang);
      }
  
      // Add events
      if (events.length > 0) {
        code += this.generateEvents(events, commentLang);
      }
  
      // Add modifiers
      if (modifiers.length > 0) {
        code += this.generateModifiers(modifiers, commentLang);
      }
  
      // Add constructor
      if (constructors.length > 0) {
        code += this.generateConstructor(constructors[0], commentLang);
      }
  
      // Add functions
      if (functions.length > 0) {
        code += this.generateFunctions(functions, commentLang);
      }
  
      code += '\n}';
  
      return {
        code,
        errors: [],
        warnings: this.generateWarnings(blocks, language),
        suggestions: this.generateSuggestions(blocks, language)
      };
    }
  
    private generateContractHeader(language: 'en' | 'sw'): string {
      const comment = language === 'sw' 
        ? '// Mkataba uliotengenezwa na Sanidi Visual Builder'
        : '// Contract generated by Sanidi Visual Builder';
      
      return `// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.0;
  
  ${comment}
  contract GeneratedContract {
      address public owner;
      
      ${language === 'sw' ? '// Tukio la kubadilisha mmiliki' : '// Event for ownership transfer'}
      event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
      
      ${language === 'sw' ? '// Mjenzi' : '// Constructor'}
      constructor() {
          owner = msg.sender;
          emit OwnershipTransferred(address(0), msg.sender);
      }
  `;
    }
  
    private generateStateVariables(variables: BlockData[], language: 'en' | 'sw'): string {
      const comment = language === 'sw' ? '    // Vigeu vya Hali' : '    // State Variables';
      let code = `\n${comment}\n`;
      
      variables.forEach(variable => {
        switch (variable.id) {
          case 'totalSupply':
            code += '    uint256 public totalSupply;\n';
            break;
          case 'balanceMapping':
            code += '    mapping(address => uint256) public balanceOf;\n';
            break;
          default:
            code += `    // TODO: Implement ${variable.title}\n`;
        }
      });
      
      return code;
    }
  
    private generateEvents(events: BlockData[], language: 'en' | 'sw'): string {
      const comment = language === 'sw' ? '    // Matukio' : '    // Events';
      let code = `\n${comment}\n`;
      
      events.forEach(event => {
        switch (event.id) {
          case 'transferEvent':
            code += '    event Transfer(address indexed from, address indexed to, uint256 value);\n';
            break;
          default:
            code += `    event ${event.title}(/* TODO: Add parameters */);\n`;
        }
      });
      
      return code;
    }
  
    private generateModifiers(modifiers: BlockData[], language: 'en' | 'sw'): string {
      const comment = language === 'sw' ? '    // Marekebisho' : '    // Modifiers';
      let code = `\n${comment}\n`;
      
      modifiers.forEach(modifier => {
        switch (modifier.id) {
          case 'onlyOwner':
            const errorMsg = language === 'sw' ? 'Mmiliki pekee anaweza kuita hii' : 'Only owner can call this';
            code += `    modifier onlyOwner() {
          require(msg.sender == owner, "${errorMsg}");
          _;
      }
  `;
            break;
          default:
            code += `    modifier ${modifier.title.toLowerCase().replace(/\s+/g, '')}() {
          // TODO: Implement ${modifier.title}
          _;
      }
  `;
        }
      });
      
      return code;
    }
  
    private generateConstructor(constructor: BlockData, language: 'en' | 'sw'): string {
      return ''; // Already included in header
    }
  
    private generateFunctions(functions: BlockData[], language: 'en' | 'sw'): string {
      const comment = language === 'sw' ? '    // Kazi' : '    // Functions';
      let code = `\n${comment}\n`;
      
      functions.forEach(func => {
        switch (func.id) {
          case 'transfer':
            const transferComment = language === 'sw' ? '// Hamisha tokeni' : '// Transfer tokens';
            code += `    ${transferComment}
      function transfer(address to, uint256 amount) public returns (bool) {
          require(to != address(0), "Invalid address");
          require(balanceOf[msg.sender] >= amount, "Insufficient balance");
          
          balanceOf[msg.sender] -= amount;
          balanceOf[to] += amount;
          
          emit Transfer(msg.sender, to, amount);
          return true;
      }
  `;
            break;
          case 'mint':
            const mintComment = language === 'sw' ? '// Tengeneza tokeni' : '// Mint tokens';
            code += `    ${mintComment}
      function mint(address to, uint256 amount) public onlyOwner {
          require(to != address(0), "Invalid address");
          
          totalSupply += amount;
          balanceOf[to] += amount;
          
          emit Transfer(address(0), to, amount);
      }
  `;
            break;
          default:
            code += `    function ${func.title.toLowerCase().replace(/\s+/g, '')}() public {
          // TODO: Implement ${func.title}
      }
  `;
        }
      });
      
      return code;
    }
  
    private generateWarnings(blocks: BlockData[], language: 'en' | 'sw'): string[] {
      const warnings: string[] = [];
      
      if (blocks.length === 0) {
        warnings.push(language === 'en' ? 'No blocks added' : 'Hakuna vitalu vilivyoongezwa');
      }
      
      const hasTransfer = blocks.some(b => b.id === 'transfer');
      const hasBalanceMapping = blocks.some(b => b.id === 'balanceMapping');
      
      if (hasTransfer && !hasBalanceMapping) {
        warnings.push(language === 'en' 
          ? 'Transfer function needs balance mapping' 
          : 'Kazi ya uhamisho inahitaji ramani ya mizani'
        );
      }
      
      return warnings;
    }
  
    private generateSuggestions(blocks: BlockData[], language: 'en' | 'sw'): string[] {
      const suggestions: string[] = [];
      
      if (blocks.length > 0) {
        suggestions.push(language === 'en' 
          ? 'Consider adding access control modifiers'
          : 'Fikiria kuongeza marekebisho ya udhibiti wa ufikiaji'
        );
        
        suggestions.push(language === 'en'
          ? 'Test your contract thoroughly before deployment'
          : 'Jaribu mkataba wako vizuri kabla ya uwekaji'
        );
      }
      
      return suggestions;
    }
  
    private generateFallbackCode(blocks: BlockData[]): string {
      return `// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.0;
  
  // Fallback contract - please check your connection
  contract FallbackContract {
      // Basic contract structure
      address public owner;
      
      constructor() {
          owner = msg.sender;
      }
      
      // TODO: Add your contract logic here
  }`;
    }
  }
  
  // Default export for easy importing
  export default AICodeGenerator;