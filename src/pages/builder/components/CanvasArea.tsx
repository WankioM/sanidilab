import React from 'react';
import { HiCube, HiTrash } from 'react-icons/hi';
import { ContractBlock } from './BlockDefinitions';

export interface DroppedBlock extends ContractBlock {
  x: number;
  y: number;
  uniqueId: string;
}

interface CanvasAreaProps {
  droppedBlocks: DroppedBlock[];
  language: 'en' | 'sw';
  theme: 'light' | 'dark';
  isGenerating: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onBlockMouseDown: (e: React.MouseEvent, blockId: string) => void;
  onRemoveBlock: (blockId: string) => void;
  isDraggingDroppedBlock: string | null;
  GRID_SIZE: number;
}

export const CanvasArea: React.FC<CanvasAreaProps> = ({
  droppedBlocks,
  language,
  theme,
  isGenerating,
  onDragOver,
  onDrop,
  onBlockMouseDown,
  onRemoveBlock,
  isDraggingDroppedBlock,
  GRID_SIZE
}) => {
  return (
    <div className="lg:col-span-3">
      {/* Canvas Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-dun">
          {language === 'en' ? 'Contract Canvas' : 'Mwako wa Mkataba'}
        </h3>
        <div className="flex items-center gap-3">
          {/* Generation Status */}
          {isGenerating && (
            <div className="flex items-center gap-2 text-flame text-sm">
              <div className="animate-spin w-4 h-4 border-2 border-flame/30 border-t-flame rounded-full"></div>
              {language === 'en' ? 'Generating AI code...' : 'Inatengeneza kodi ya AI...'}
            </div>
          )}
          {/* Block Count */}
          <div className="text-sm text-dun/60">
            {droppedBlocks.length} {language === 'en' ? 'blocks' : 'vitalu'}
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div
        onDragOver={onDragOver}
        onDrop={onDrop}
        className={`relative border-2 border-dashed rounded-lg p-8 min-h-96 transition-colors ${
          theme === 'dark' 
            ? 'border-dun/30 bg-spacecadet/20' 
            : 'border-spacecadet/30 bg-dun/5'
        }`}
        style={{
          // Grid background
          backgroundImage: theme === 'dark' 
            ? `radial-gradient(circle, rgba(226, 210, 184, 0.1) 1px, transparent 1px)`
            : `radial-gradient(circle, rgba(33, 37, 58, 0.1) 1px, transparent 1px)`,
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`
        }}
      >
        {/* Empty State */}
        {droppedBlocks.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <HiCube className="w-16 h-16 text-dun/30 mx-auto mb-4" />
              <p className="text-dun/60 text-lg">
                {language === 'en' 
                  ? 'Drag contract blocks here to start building'
                  : 'Vuta vitalu vya mkataba hapa kuanza kujenga'
                }
              </p>
              <p className="text-dun/40 text-sm mt-2">
                {language === 'en'
                  ? 'AI will generate optimized Solidity code automatically'
                  : 'AI itatengeneza kodi ya Solidity iliyoboreshwa kiotomatiki'
                }
              </p>
              {/* Grid indicator */}
              <div className="mt-4 text-dun/30 text-xs">
                {language === 'en' 
                  ? `Blocks snap to ${GRID_SIZE}px grid`
                  : `Vitalu vinashikamana kwa gridi ya ${GRID_SIZE}px`
                }
              </div>
            </div>
          </div>
        ) : (
          // Dropped Blocks
          <>
            {droppedBlocks.map((block) => (
              <div
                key={block.uniqueId}
                className={`absolute ${block.color} p-3 rounded-lg shadow-lg group cursor-move text-white select-none transition-all duration-200 ${
                  isDraggingDroppedBlock === block.uniqueId 
                    ? 'z-50 opacity-80 scale-105 rotate-1' 
                    : 'z-10 hover:scale-102'
                }`}
                style={{ 
                  left: block.x, 
                  top: block.y,
                  // Add subtle shadow when dragging
                  boxShadow: isDraggingDroppedBlock === block.uniqueId 
                    ? '0 10px 25px rgba(0,0,0,0.3)' 
                    : undefined
                }}
                onMouseDown={(e) => onBlockMouseDown(e, block.uniqueId)}
              >
                {/* Block Header */}
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    {block.icon}
                    <span className="font-medium text-sm">
                      {language === 'en' ? block.title : block.titleSwahili}
                    </span>
                  </div>
                  
                  {/* Delete Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveBlock(block.uniqueId);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/20 rounded transition-all duration-200"
                    title={language === 'en' ? 'Remove block' : 'Ondoa kifungu'}
                  >
                    <HiTrash className="w-4 h-4" />
                  </button>
                </div>

                {/* Block Parameters */}
                {block.parameters && block.parameters.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {block.parameters.slice(0, 3).map((param, index) => (
                      <div 
                        key={index} 
                        className="text-xs text-white/80 bg-white/10 rounded px-2 py-1"
                      >
                        {param}
                      </div>
                    ))}
                    {/* Show overflow indicator */}
                    {block.parameters.length > 3 && (
                      <div className="text-xs text-white/60 text-center">
                        +{block.parameters.length - 3} more
                      </div>
                    )}
                  </div>
                )}

                {/* Block Type Badge */}
                <div className="absolute -top-2 -right-2">
                  <div className={`text-xs px-2 py-0.5 rounded-full text-white/90 ${
                    block.type === 'function' ? 'bg-darkcyan' :
                    block.type === 'modifier' ? 'bg-flame' :
                    block.type === 'event' ? 'bg-yellow-600' :
                    block.type === 'variable' ? 'bg-dun' :
                    'bg-ebony'
                  }`}>
                    {block.type.charAt(0).toUpperCase()}
                  </div>
                </div>

                {/* Connection Points (Visual Only for now) */}
                {block.type === 'function' && (
                  <>
                    {/* Input connection point */}
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white/20 rounded-full border-2 border-white/40"></div>
                    {/* Output connection point */}
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white/20 rounded-full border-2 border-white/40"></div>
                  </>
                )}

                {/* Drag Handle */}
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-60 transition-opacity">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                    </div>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Grid Guide Lines (when dragging) */}
            {isDraggingDroppedBlock && (
              <div className="absolute inset-0 pointer-events-none">
                {/* Vertical grid lines */}
                {Array.from({ length: Math.floor(800 / GRID_SIZE) }, (_, i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute top-0 bottom-0 w-px bg-dun/20"
                    style={{ left: i * GRID_SIZE }}
                  />
                ))}
                {/* Horizontal grid lines */}
                {Array.from({ length: Math.floor(600 / GRID_SIZE) }, (_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute left-0 right-0 h-px bg-dun/20"
                    style={{ top: i * GRID_SIZE }}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* Canvas Overlay Info */}
        <div className="absolute bottom-4 right-4 text-xs text-dun/40 bg-spacecadet/60 backdrop-blur-sm rounded px-2 py-1">
          {language === 'en' ? 'Grid:' : 'Gridi:'} {GRID_SIZE}px
        </div>
      </div>

      {/* Canvas Instructions */}
      <div className="mt-4 text-sm text-dun/60 text-center space-y-1">
        <p>
          {language === 'en' 
            ? '• Click and drag blocks to move them around'
            : '• Bofya na vuta vitalu kuvizungushazungusha'
          }
        </p>
        <p>
          {language === 'en'
            ? '• Blocks automatically snap to grid for clean alignment'
            : '• Vitalu vinashikamana otomatiki kwenye gridi kwa upangaji safi'
          }
        </p>
        <p>
          {language === 'en'
            ? '• Hover over blocks to see delete option'
            : '• Elea juu ya vitalu kuona chaguo la kufuta'
          }
        </p>
      </div>
    </div>
  );
};

export default CanvasArea;