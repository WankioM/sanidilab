import React, { useState, useCallback, useMemo } from 'react';
import { HiSparkles, HiSearch, HiX, HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { ContractBlock, blockCategories } from './BlockDefinitions';

interface BlockPaletteProps {
  language: 'en' | 'sw';
  theme: 'light' | 'dark';
  onBlockDragStart: (block: ContractBlock) => void;
  droppedBlocksCount: number;
  onRegenerateCode: () => void;
  isGenerating: boolean;
  showSearch?: boolean;
  showStats?: boolean;
}

export const BlockPalette: React.FC<BlockPaletteProps> = ({
  language,
  theme,
  onBlockDragStart,
  droppedBlocksCount,
  onRegenerateCode,
  isGenerating,
  showSearch = true,
  showStats = true
}) => {
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  // Toggle category collapse/expand
  const toggleCategory = useCallback((categoryId: string) => {
    setCollapsedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  }, []);

  // Filter blocks based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return blockCategories;
    }

    const query = searchQuery.toLowerCase();
    return blockCategories.map(category => ({
      ...category,
      blocks: category.blocks.filter(block => 
        block.title.toLowerCase().includes(query) ||
        block.titleSwahili.toLowerCase().includes(query) ||
        block.description.toLowerCase().includes(query) ||
        block.descriptionSwahili.toLowerCase().includes(query) ||
        block.type.toLowerCase().includes(query) ||
        (block.parameters && block.parameters.some(param => 
          param.toLowerCase().includes(query)
        ))
      )
    })).filter(category => category.blocks.length > 0);
  }, [searchQuery]);

  // Get block statistics
  const blockStats = useMemo(() => {
    const totalBlocks = blockCategories.reduce((sum, cat) => sum + cat.blocks.length, 0);
    const functionBlocks = blockCategories.reduce((sum, cat) => 
      sum + cat.blocks.filter(b => b.type === 'function').length, 0);
    const modifierBlocks = blockCategories.reduce((sum, cat) => 
      sum + cat.blocks.filter(b => b.type === 'modifier').length, 0);
    const eventBlocks = blockCategories.reduce((sum, cat) => 
      sum + cat.blocks.filter(b => b.type === 'event').length, 0);
    const variableBlocks = blockCategories.reduce((sum, cat) => 
      sum + cat.blocks.filter(b => b.type === 'variable').length, 0);

    return {
      total: totalBlocks,
      functions: functionBlocks,
      modifiers: modifierBlocks,
      events: eventBlocks,
      variables: variableBlocks
    };
  }, []);

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Expand all categories
  const expandAll = () => {
    setCollapsedCategories(new Set());
  };

  // Collapse all categories
  const collapseAll = () => {
    setCollapsedCategories(new Set(blockCategories.map(cat => cat.id)));
  };

  return (
    <div className="lg:col-span-1 flex flex-col h-full max-h-[calc(100vh-100px)]">
      {/* Header Section */}
      <div className="sticky top-0 bg-spacecadet/95 backdrop-blur-sm z-20 pb-4 space-y-4">
        {/* Title and Actions */}
        <div className="flex items-center justify-between py-2">
          <h3 className="text-lg font-semibold text-dun">
            {language === 'en' ? 'Contract Blocks' : 'Vitalu vya Mkataba'}
          </h3>
          
          {/* Regenerate Button */}
          {droppedBlocksCount > 0 && (
            <button
              onClick={onRegenerateCode}
              disabled={isGenerating}
              className="flex items-center gap-1 text-xs px-2 py-1 bg-flame/20 hover:bg-flame/30 text-flame rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title={language === 'en' ? 'Regenerate code' : 'Tengeneza kodi upya'}
            >
              <HiSparkles className="w-3 h-3" />
              {isGenerating 
                ? (language === 'en' ? 'Generating...' : 'Inatengeneza...')
                : (language === 'en' ? 'Regenerate' : 'Tengeneza Upya')
              }
            </button>
          )}
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="relative">
            <div className="relative">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-dun/50" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search blocks...' : 'Tafuta vitalu...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-spacecadet/50 border border-dun/20 rounded-lg text-dun placeholder-dun/50 focus:outline-none focus:border-flame/50 focus:ring-1 focus:ring-flame/50 transition-colors text-sm"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-dun/50 hover:text-dun transition-colors"
                >
                  <HiX className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {/* Search Results Count */}
            {searchQuery && (
              <div className="mt-2 text-xs text-dun/60">
                {filteredCategories.reduce((sum, cat) => sum + cat.blocks.length, 0)} {language === 'en' ? 'blocks found' : 'vitalu vimepatikana'}
              </div>
            )}
          </div>
        )}

        {/* Category Controls */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="text-xs px-2 py-1 text-dun/60 hover:text-dun transition-colors"
            >
              {language === 'en' ? 'Expand All' : 'Panua Yote'}
            </button>
            <span className="text-dun/30">|</span>
            <button
              onClick={collapseAll}
              className="text-xs px-2 py-1 text-dun/60 hover:text-dun transition-colors"
            >
              {language === 'en' ? 'Collapse All' : 'Kunja Yote'}
            </button>
          </div>
          
          {/* Block Stats */}
          {showStats && (
            <div className="text-xs text-dun/60">
              {blockStats.total} {language === 'en' ? 'total' : 'jumla'}
            </div>
          )}
        </div>
      </div>

      {/* Scrollable Categories */}
      {/* Scrollable Categories */}
<div className="flex-1 overflow-y-auto overflow-x-hidden pr-1 space-y-2 scrollbar-thin scrollbar-thumb-dun/20 scrollbar-track-transparent hover:scrollbar-thumb-dun/40" style={{ maxHeight: 'calc(100vh - 300px)' }}>
        {filteredCategories.length === 0 ? (
          // No Results State
          <div className="text-center py-8 text-dun/60">
            <HiSearch className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">
              {language === 'en' ? 'No blocks found' : 'Hakuna vitalu vimepatikana'}
            </p>
            <p className="text-xs mt-1">
              {language === 'en' ? 'Try a different search term' : 'Jaribu neno lingine la utafutaji'}
            </p>
          </div>
        ) : (
          // Categories List
          filteredCategories.map((category) => (
            <div key={category.id} className="border border-dun/10 rounded-lg overflow-hidden bg-spacecadet/30">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-3 py-2.5 hover:bg-spacecadet/50 transition-colors flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  {/* Category Icon */}
                  <div className={`${category.color} group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  
                  {/* Category Info */}
                  <div>
                    <span className="font-medium text-sm text-dun">
                      {language === 'en' ? category.name : category.nameSwahili}
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-dun/60">
                        {category.blocks.length} {language === 'en' ? 'blocks' : 'vitalu'}
                      </span>
                      {/* Category type indicator */}
                      <div className="flex gap-1">
                        {category.blocks.some(b => b.type === 'function') && (
                          <div className="w-1.5 h-1.5 bg-darkcyan rounded-full" title="Functions" />
                        )}
                        {category.blocks.some(b => b.type === 'modifier') && (
                          <div className="w-1.5 h-1.5 bg-flame rounded-full" title="Modifiers" />
                        )}
                        {category.blocks.some(b => b.type === 'event') && (
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" title="Events" />
                        )}
                        {category.blocks.some(b => b.type === 'variable') && (
                          <div className="w-1.5 h-1.5 bg-dun rounded-full" title="Variables" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Collapse/Expand Icon */}
                <div className={`transition-transform duration-200 ${
                  collapsedCategories.has(category.id) ? '' : 'rotate-90'
                }`}>
                  {collapsedCategories.has(category.id) ? (
                    <HiChevronRight className="w-4 h-4 text-dun/60" />
                  ) : (
                    <HiChevronDown className="w-4 h-4 text-dun/60" />
                  )}
                </div>
              </button>

              {/* Category Blocks */}
              {!collapsedCategories.has(category.id) && (
                <div className="p-2 space-y-1.5 bg-spacecadet/20">
                  {category.blocks.map((block) => (
                    <div
                      key={block.id}
                      draggable
                      onDragStart={() => onBlockDragStart(block)}
                      onMouseEnter={() => setHoveredBlock(block.id)}
                      onMouseLeave={() => setHoveredBlock(null)}
                      className={`${block.color} p-2.5 rounded-md cursor-grab hover:scale-[1.02] active:scale-95 transition-all duration-150 active:cursor-grabbing text-white shadow-sm group relative ${
                        hoveredBlock === block.id ? 'ring-2 ring-white/30' : ''
                      }`}
                      title={language === 'en' ? block.description : block.descriptionSwahili}
                    >
                      {/* Block Header */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          {block.icon}
                          <span className="font-medium text-xs">
                            {language === 'en' ? block.title : block.titleSwahili}
                          </span>
                        </div>
                        
                        {/* Block Type Badge */}
                        <div className={`text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 ${
                          block.type === 'function' ? 'text-blue-200' :
                          block.type === 'modifier' ? 'text-red-200' :
                          block.type === 'event' ? 'text-yellow-200' :
                          block.type === 'variable' ? 'text-green-200' :
                          'text-purple-200'
                        }`}>
                          {block.type.charAt(0).toUpperCase()}
                        </div>
                      </div>
                      
                      {/* Parameters Preview */}
                      {block.parameters && block.parameters.length > 0 && (
                        <div className="mt-1.5 opacity-75">
                          <p className="text-white/80 text-[10px] leading-tight">
                            {block.parameters.slice(0, 2).join(', ')}
                            {block.parameters.length > 2 && '...'}
                          </p>
                        </div>
                      )}
                      
                      {/* Hover Tooltip */}
                      <div className={`absolute left-full ml-2 top-0 z-30 bg-gray-900 text-white text-xs rounded px-3 py-2 shadow-lg border border-gray-700 max-w-64 ${
                        hoveredBlock === block.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                      } transition-all duration-200 pointer-events-none`}>
                        {/* Description */}
                        <div className="font-medium mb-1">
                          {language === 'en' ? block.title : block.titleSwahili}
                        </div>
                        <div className="text-gray-300 mb-2">
                          {language === 'en' ? block.description : block.descriptionSwahili}
                        </div>
                        
                        {/* Parameters */}
                        {block.parameters && block.parameters.length > 0 && (
                          <div className="border-t border-gray-700 pt-2">
                            <div className="text-gray-400 text-[10px] mb-1">
                              {language === 'en' ? 'Parameters:' : 'Vigezo:'}
                            </div>
                            <div className="space-y-0.5">
                              {block.parameters.map((param, index) => (
                                <div key={index} className="text-gray-300 text-[10px] font-mono">
                                  {param}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Type Info */}
                        <div className="border-t border-gray-700 pt-2 mt-2">
                          <span className="text-gray-400 text-[10px]">
                            {language === 'en' ? 'Type:' : 'Aina:'} 
                          </span>
                          <span className="text-gray-300 text-[10px] ml-1 capitalize">
                            {block.type}
                          </span>
                        </div>
                      </div>

                      {/* Drag Handle Indicator */}
                      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-40 transition-opacity">
                        <div className="grid grid-cols-2 gap-0.5">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Footer Stats (if enabled) */}
      {showStats && (
        <div className="sticky bottom-0 mt-4 pt-3 border-t border-dun/10 bg-spacecadet/95 backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-spacecadet/50 rounded p-2">
              <div className="text-dun/60">{language === 'en' ? 'Available' : 'Zinazopatikana'}</div>
              <div className="text-dun font-medium">{blockStats.total} {language === 'en' ? 'blocks' : 'vitalu'}</div>
            </div>
            <div className="bg-spacecadet/50 rounded p-2">
              <div className="text-dun/60">{language === 'en' ? 'In Canvas' : 'Kwenye Canvas'}</div>
              <div className="text-flame font-medium">{droppedBlocksCount} {language === 'en' ? 'blocks' : 'vitalu'}</div>
            </div>
          </div>
          
          {/* Type Breakdown */}
          <div className="mt-2 flex justify-between text-[10px] text-dun/60">
            <span>F:{blockStats.functions}</span>
            <span>M:{blockStats.modifiers}</span>
            <span>E:{blockStats.events}</span>
            <span>V:{blockStats.variables}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockPalette;