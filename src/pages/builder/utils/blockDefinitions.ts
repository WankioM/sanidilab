import * as Blockly from 'blockly';
import { ContractBlock } from '../types/contractTypes';

// Brand color mapping
export const BLOCK_COLORS = {
  function: '#EC5022',    // flame - primary functions
  event: '#E2D2B8',       // dun - events and notifications  
  modifier: '#21253A',    // spacecadet - access control
  variable: '#4B8F8C',    // darkcyan - state variables
  constructor: '#606D5D',  // ebony - initialization
  import: '#43340F',      // drabbrown - imports and setup
  math: '#EC5022',        // flame variant for math operations
  logic: '#21253A',       // spacecadet variant for logic
  token: '#E2D2B8',       // dun variant for token operations
};

// Define our contract blocks with proper typing and Swahili support
export const CONTRACT_BLOCKS: ContractBlock[] = [
  {
    id: 'transfer_function',
    type: 'function',
    category: 'token',
    title: 'Transfer Tokens',
    titleSwahili: 'Hamisha Tokeni',
    description: 'Transfer tokens from one account to another',
    descriptionSwahili: 'Hamisha tokeni kutoka akaunti moja hadi nyingine',
    color: BLOCK_COLORS.function,
    visibility: 'public',
    mutability: 'nonpayable',
    parameters: [
      {
        name: 'to',
        type: 'address',
        required: true,
        description: 'Recipient address',
        descriptionSwahili: 'Anwani ya mpokeaji'
      },
      {
        name: 'amount',
        type: 'uint256',
        required: true,
        description: 'Amount to transfer',
        descriptionSwahili: 'Kiasi cha kuhamisha'
      }
    ],
    returnType: 'bool'
  },
  {
    id: 'mint_function',
    type: 'function',
    category: 'token',
    title: 'Mint Tokens',
    titleSwahili: 'Tengeneza Tokeni',
    description: 'Create new tokens and assign to address',
    descriptionSwahili: 'Unda tokeni mpya na uwape anwani',
    color: BLOCK_COLORS.function,
    visibility: 'public',
    mutability: 'nonpayable',
    parameters: [
      {
        name: 'to',
        type: 'address',
        required: true,
        description: 'Address to mint tokens to',
        descriptionSwahili: 'Anwani ya kupatia tokeni'
      },
      {
        name: 'amount',
        type: 'uint256',
        required: true,
        description: 'Amount of tokens to mint',
        descriptionSwahili: 'Idadi ya tokeni za kutengeneza'
      }
    ]
  },
  {
    id: 'only_owner_modifier',
    type: 'modifier',
    category: 'access',
    title: 'Only Owner',
    titleSwahili: 'Mmiliki Pekee',
    description: 'Restrict function access to contract owner only',
    descriptionSwahili: 'Zuia ufikiaji wa kazi kwa mmiliki wa mkataba pekee',
    color: BLOCK_COLORS.modifier,
    parameters: []
  },
  {
    id: 'transfer_event',
    type: 'event',
    category: 'token',
    title: 'Transfer Event',
    titleSwahili: 'Tukio la Uhamisho',
    description: 'Emit when tokens are transferred',
    descriptionSwahili: 'Toa ishara tokeni zinapohamishwa',
    color: BLOCK_COLORS.event,
    parameters: [
      {
        name: 'from',
        type: 'address',
        required: true,
        description: 'Sender address',
        descriptionSwahili: 'Anwani ya mtumaji'
      },
      {
        name: 'to',
        type: 'address',
        required: true,
        description: 'Recipient address',
        descriptionSwahili: 'Anwani ya mpokeaji'
      },
      {
        name: 'value',
        type: 'uint256',
        required: true,
        description: 'Amount transferred',
        descriptionSwahili: 'Kiasi kilichohamishwa'
      }
    ]
  },
  {
    id: 'total_supply_variable',
    type: 'variable',
    category: 'token',
    title: 'Total Supply',
    titleSwahili: 'Jumla ya Ugavi',
    description: 'Track total number of tokens in circulation',
    descriptionSwahili: 'Fuatilia jumla ya tokeni kwenye mzunguko',
    color: BLOCK_COLORS.variable,
    visibility: 'public',
    parameters: []
  },
  {
    id: 'balance_mapping',
    type: 'variable',
    category: 'token',
    title: 'Balance Mapping',
    titleSwahili: 'Ramani ya Mizani',
    description: 'Map addresses to their token balances',
    descriptionSwahili: 'Oanisha anwani na mizani yao ya tokeni',
    color: BLOCK_COLORS.variable,
    visibility: 'public',
    parameters: []
  },
  {
    id: 'constructor_block',
    type: 'constructor',
    category: 'basic',
    title: 'Constructor',
    titleSwahili: 'Mjenzi',
    description: 'Initialize contract when deployed',
    descriptionSwahili: 'Anzisha mkataba unapowekwa',
    color: BLOCK_COLORS.constructor,
    parameters: [
      {
        name: 'initialSupply',
        type: 'uint256',
        required: false,
        description: 'Initial token supply',
        descriptionSwahili: 'Ugavi wa awali wa tokeni'
      }
    ]
  }
];

// Blockly block definitions for each contract block type
export const defineBlocklyBlocks = () => {
  // Define Transfer Function Block
  Blockly.Blocks['transfer_function'] = {
    init: function() {
      this.appendValueInput('to')
          .setCheck('address')
          .appendField('Transfer to');
      this.appendValueInput('amount')
          .setCheck('uint256')
          .appendField('amount');
      this.setInputsInline(true);
      this.setOutput(true, 'bool');
      this.setColour(BLOCK_COLORS.function);
      this.setTooltip('Transfer tokens from sender to recipient');
      this.setHelpUrl('');
    }
  };

  // Define Mint Function Block
  Blockly.Blocks['mint_function'] = {
    init: function() {
      this.appendValueInput('to')
          .setCheck('address')
          .appendField('Mint to');
      this.appendValueInput('amount')
          .setCheck('uint256')
          .appendField('amount');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(BLOCK_COLORS.function);
      this.setTooltip('Create new tokens and assign to address');
      this.setHelpUrl('');
    }
  };

  // Define Only Owner Modifier Block
  Blockly.Blocks['only_owner_modifier'] = {
    init: function() {
      this.appendDummyInput()
          .appendField('Only Owner');
      this.setInputsInline(true);
      this.setOutput(true, 'modifier');
      this.setColour(BLOCK_COLORS.modifier);
      this.setTooltip('Restrict access to contract owner only');
      this.setHelpUrl('');
    }
  };

  // Define Transfer Event Block
  Blockly.Blocks['transfer_event'] = {
    init: function() {
      this.appendValueInput('from')
          .setCheck('address')
          .appendField('Transfer Event from');
      this.appendValueInput('to')
          .setCheck('address')
          .appendField('to');
      this.appendValueInput('value')
          .setCheck('uint256')
          .appendField('value');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(BLOCK_COLORS.event);
      this.setTooltip('Emit transfer event');
      this.setHelpUrl('');
    }
  };

  // Define Variable Blocks
  Blockly.Blocks['total_supply_variable'] = {
    init: function() {
      this.appendDummyInput()
          .appendField('Total Supply (uint256)');
      this.setOutput(true, 'uint256');
      this.setColour(BLOCK_COLORS.variable);
      this.setTooltip('Total number of tokens');
      this.setHelpUrl('');
    }
  };

  // Define Address Input Block
  Blockly.Blocks['address_input'] = {
    init: function() {
      this.appendDummyInput()
          .appendField('Address')
          .appendField(new Blockly.FieldTextInput('0x...'), 'ADDRESS');
      this.setOutput(true, 'address');
      this.setColour('#606D5D');
      this.setTooltip('Ethereum address input');
      this.setHelpUrl('');
    }
  };

  // Define Number Input Block
  Blockly.Blocks['uint256_input'] = {
    init: function() {
      this.appendDummyInput()
          .appendField('Number')
          .appendField(new Blockly.FieldNumber(0, 0), 'VALUE');
      this.setOutput(true, 'uint256');
      this.setColour('#606D5D');
      this.setTooltip('Unsigned integer (256-bit)');
      this.setHelpUrl('');
    }
  };
};