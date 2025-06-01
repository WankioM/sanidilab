import React, { useState, useCallback } from 'react';
import { 
  HiCode, 
  HiPlay, 
  HiEye, 
  HiDownload,
  HiCog,
  HiTemplate,
  HiSparkles,
  HiTranslate
} from 'react-icons/hi';

// Import our custom components
import SimpleWorkspace from './components/BlocklyWorkspace'; // Using your existing file
import TemplateGallery from './components/TemplateGallery';
import CodePreview from './components/CodePreview';
import { ContractTemplate } from './types/contractTypes';

// Main interfaces for the builder
interface WorkspaceState {
  xml: string;
  generatedCode: string;
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

interface BuilderSettings {
  language: 'en' | 'sw';
  showTooltips: boolean;
  autoGenerate: boolean;
  theme: 'light' | 'dark';
  gridEnabled: boolean;
  snapToGrid: boolean;
}

interface VisualContractBuilderProps {
  embedded?: boolean; // New prop to handle embedded mode
}

const VisualContractBuilder: React.FC<VisualContractBuilderProps> = ({ embedded = false }) => {
  const [activeTab, setActiveTab] = useState<'builder' | 'templates' | 'settings'>('builder');
  const [workspaceState, setWorkspaceState] = useState<WorkspaceState>({
    xml: '',
    generatedCode: '',
    isValid: false,
    errors: [],
    warnings: ['Add some blocks to generate a contract']
  });
  const [showCodePreview, setShowCodePreview] = useState<boolean>(false);
  const [settings, setSettings] = useState<BuilderSettings>({
    language: 'en',
    showTooltips: true,
    autoGenerate: true,
    theme: 'dark',
    gridEnabled: true,
    snapToGrid: true
  });

  // Handle workspace changes from the drag-and-drop interface
  const handleWorkspaceChange = useCallback((state: WorkspaceState) => {
    setWorkspaceState(state);
  }, []);

  // Handle template selection from gallery
  const handleTemplateSelect = useCallback((templateId: string) => {
    console.log('Loading template:', templateId);
    // TODO: Load template blocks into workspace
    setActiveTab('builder');
  }, []);

  // Export generated contract code
  const handleExport = useCallback(() => {
    if (!workspaceState.generatedCode) {
      alert(settings.language === 'en' 
        ? 'No code to export. Add some blocks first!' 
        : 'Hakuna kodi ya kuhamisha. Ongeza vitalu kwanza!'
      );
      return;
    }

    const blob = new Blob([workspaceState.generatedCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'GeneratedContract.sol';
    a.click();
    URL.revokeObjectURL(url);
  }, [workspaceState.generatedCode, settings.language]);

  // Toggle between English and Swahili
  const toggleLanguage = () => {
    setSettings(prev => ({
      ...prev,
      language: prev.language === 'en' ? 'sw' : 'en'
    }));
  };

  // Get block statistics from workspace
  const getBlockStats = () => {
    try {
      const blocks = JSON.parse(workspaceState.xml || '[]');
      const functions = blocks.filter((b: any) => b.type === 'function').length;
      const events = blocks.filter((b: any) => b.type === 'event').length;
      const variables = blocks.filter((b: any) => b.type === 'variable').length;
      return { functions, events, variables };
    } catch {
      return { functions: 0, events: 0, variables: 0 };
    }
  };

  const blockStats = getBlockStats();

  // Different styling for embedded vs standalone mode
  const containerClass = embedded 
    ? "bg-spacecadet text-dun" 
    : "min-h-screen bg-spacecadet pt-24 pb-8";

  const maxWidthClass = embedded 
    ? "w-full" 
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <div className={containerClass}>
      <div className={maxWidthClass}>
        
        {/* Header Section - Hide in embedded mode */}
        {!embedded && (
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-dun mb-2">
                  {settings.language === 'en' ? 'Visual Smart Contract Builder' : 'Mjenzi wa Mikataba Mjanja kwa Muonekano'}
                </h1>
                <p className="text-dun/80 text-lg">
                  {settings.language === 'en' 
                    ? 'Build smart contracts without coding using visual blocks'
                    : 'Jenga mikataba mjanja bila programu kwa kutumia vitalu vya kuona'
                  }
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2 bg-dun/10 hover:bg-dun/20 text-dun rounded-lg transition-colors duration-200"
                >
                  <HiTranslate className="w-4 h-4" />
                  {settings.language === 'en' ? 'SW' : 'EN'}
                </button>
                
                <button
                  onClick={() => setShowCodePreview(!showCodePreview)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    showCodePreview 
                      ? 'bg-flame text-dun' 
                      : 'bg-flame/20 hover:bg-flame/30 text-flame'
                  }`}
                >
                  <HiEye className="w-4 h-4" />
                  {showCodePreview 
                    ? (settings.language === 'en' ? 'Hide Code' : 'Ficha Kodi')
                    : (settings.language === 'en' ? 'Preview Code' : 'Angalia Kodi')
                  }
                </button>
                
                <button
                  onClick={handleExport}
                  className="flex items-center gap-2 px-4 py-2 bg-flame text-dun hover:bg-flame/90 rounded-lg transition-colors duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!workspaceState.isValid}
                >
                  <HiDownload className="w-4 h-4" />
                  {settings.language === 'en' ? 'Export' : 'Hamisha'}
                </button>
              </div>
            </div>

            {/* Status Bar */}
            <div className="mt-6 flex items-center justify-between p-4 bg-spacecadet/50 rounded-lg border border-dun/10">
              <div className="flex items-center gap-6">
                <div className={`flex items-center gap-2 ${workspaceState.isValid ? 'text-darkcyan' : 'text-flame'}`}>
                  <div className={`w-2 h-2 rounded-full ${workspaceState.isValid ? 'bg-darkcyan' : 'bg-flame'}`}></div>
                  <span className="text-sm font-medium">
                    {workspaceState.isValid 
                      ? (settings.language === 'en' ? 'Contract Valid' : 'Mkataba Sahihi')
                      : (settings.language === 'en' ? 'Contract Invalid' : 'Mkataba si Sahihi')
                    }
                  </span>
                </div>
                
                {workspaceState.errors.length > 0 && (
                  <div className="text-red-400 text-sm">
                    {workspaceState.errors.length} {settings.language === 'en' ? 'errors' : 'makosa'}
                  </div>
                )}
                
                {workspaceState.warnings.length > 0 && (
                  <div className="text-yellow-400 text-sm">
                    {workspaceState.warnings.length} {settings.language === 'en' ? 'warnings' : 'maonyo'}
                  </div>
                )}
              </div>
              
              <div className="text-dun/60 text-sm">
                {settings.language === 'en' ? 'Drag blocks to build your contract' : 'Vuta vitalu kujenga mkataba wako'}
              </div>
            </div>
          </div>
        )}

        {/* Tab Navigation - Simplified in embedded mode */}
        <div className={`flex mb-6 bg-spacecadet/30 rounded-xl p-1 ${embedded ? 'justify-center' : ''}`}>
          <button
            onClick={() => setActiveTab('builder')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === 'builder'
                ? 'bg-flame text-dun shadow-lg'
                : 'text-dun/70 hover:text-dun hover:bg-dun/10'
            }`}
          >
            <HiCode className="w-4 h-4" />
            {settings.language === 'en' ? 'Builder' : 'Mjenzi'}
          </button>
          
          {!embedded && (
            <>
              <button
                onClick={() => setActiveTab('templates')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'templates'
                    ? 'bg-flame text-dun shadow-lg'
                    : 'text-dun/70 hover:text-dun hover:bg-dun/10'
                }`}
              >
                <HiTemplate className="w-4 h-4" />
                {settings.language === 'en' ? 'Templates' : 'Mifano'}
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'settings'
                    ? 'bg-flame text-dun shadow-lg'
                    : 'text-dun/70 hover:text-dun hover:bg-dun/10'
                }`}
              >
                <HiCog className="w-4 h-4" />
                {settings.language === 'en' ? 'Settings' : 'Mipangilio'}
              </button>
            </>
          )}
        </div>

        {/* Main Content Area */}
        <div className="bg-spacecadet/30 rounded-2xl p-4 border border-dun/10">
  {activeTab === 'builder' && (
    <div className={embedded ? "space-y-4" : "grid grid-cols-1 xl:grid-cols-4 gap-6"}>
      {/* Workspace */}
      <div className={embedded ? "" : "xl:col-span-3"}>
                <div className="bg-spacecadet/50 rounded-xl p-4 border border-dun/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-dun">
                      {settings.language === 'en' ? 'Workspace' : 'Eneo la Kazi'}
                    </h3>
                    {embedded && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={toggleLanguage}
                          className="flex items-center gap-1 text-xs px-2 py-1 bg-dun/10 hover:bg-dun/20 text-dun rounded transition-colors duration-200"
                        >
                          <HiTranslate className="w-3 h-3" />
                          {settings.language === 'en' ? 'SW' : 'EN'}
                        </button>
                        <button
                          onClick={() => setShowCodePreview(!showCodePreview)}
                          className="flex items-center gap-1 text-xs px-2 py-1 bg-flame/20 hover:bg-flame/30 text-flame rounded transition-colors duration-200"
                        >
                          <HiEye className="w-3 h-3" />
                          {showCodePreview ? 'Hide' : 'Code'}
                        </button>
                      </div>
                    )}
                  </div>
                  <div className={embedded ? "h-96" : "h-96 lg:h-[600px]"}>
                    <SimpleWorkspace
                      onWorkspaceChange={handleWorkspaceChange}
                      language={settings.language}
                      theme={settings.theme}
                    />
                  </div>
                </div>
              </div>

              {/* Side Panel - Only show in non-embedded mode or when code preview is active */}
              {(!embedded || showCodePreview) && (
                <div className="space-y-6">
                  {/* Quick Instructions - Hide in embedded mode */}
                  {!embedded && (
                    <div className="bg-flame/10 rounded-xl p-4 border border-flame/20">
                      <h4 className="text-flame font-semibold mb-3 flex items-center gap-2">
                        <HiSparkles className="w-5 h-5" />
                        {settings.language === 'en' ? 'Quick Start' : 'Anza Haraka'}
                      </h4>
                      <ul className="text-dun/80 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-flame font-bold">1.</span>
                          {settings.language === 'en' 
                            ? 'Drag blocks from the left panel'
                            : 'Vuta vitalu kutoka pane kushoto'
                          }
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-flame font-bold">2.</span>
                          {settings.language === 'en'
                            ? 'Drop them on the canvas'
                            : 'Viachia kwenye kamba'
                          }
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-flame font-bold">3.</span>
                          {settings.language === 'en'
                            ? 'Preview and export your contract'
                            : 'Angalia na hamisha mkataba wako'
                          }
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Code Preview */}
                  {showCodePreview && (
                    <CodePreview
                      code={workspaceState.generatedCode}
                      errors={workspaceState.errors}
                      warnings={workspaceState.warnings}
                      language={settings.language}
                    />
                  )}

                  {/* Block Statistics */}
                  {!embedded && (
                    <div className="bg-dun/5 rounded-xl p-4 border border-dun/20">
                      <h4 className="text-dun font-semibold mb-3">
                        {settings.language === 'en' ? 'Contract Stats' : 'Takwimu za Mkataba'}
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-dun/70">
                            {settings.language === 'en' ? 'Functions:' : 'Kazi:'}
                          </span>
                          <span className="text-dun font-medium">{blockStats.functions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dun/70">
                            {settings.language === 'en' ? 'Events:' : 'Matukio:'}
                          </span>
                          <span className="text-dun font-medium">{blockStats.events}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dun/70">
                            {settings.language === 'en' ? 'Variables:' : 'Vigeu:'}
                          </span>
                          <span className="text-dun font-medium">{blockStats.variables}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {!embedded && activeTab === 'templates' && (
            <TemplateGallery
              onTemplateSelect={handleTemplateSelect}
              language={settings.language}
            />
          )}

          {!embedded && activeTab === 'settings' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl font-semibold text-dun mb-6">
                {settings.language === 'en' ? 'Builder Settings' : 'Mipangilio ya Mjenzi'}
              </h3>

              {/* Language Settings */}
              <div className="bg-spacecadet/50 rounded-xl p-6 border border-dun/20">
                <h4 className="text-lg font-semibold text-dun mb-4">
                  {settings.language === 'en' ? 'Language & Localization' : 'Lugha na Ulugha'}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-dun/80">
                      {settings.language === 'en' ? 'Interface Language' : 'Lugha ya Kiolesura'}
                    </span>
                    <select
                      value={settings.language}
                      onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value as 'en' | 'sw' }))}
                      className="bg-spacecadet border border-dun/30 text-dun rounded-lg px-3 py-2"
                    >
                      <option value="en">English</option>
                      <option value="sw">Kiswahili</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Workspace Settings */}
              <div className="bg-spacecadet/50 rounded-xl p-6 border border-dun/20">
                <h4 className="text-lg font-semibold text-dun mb-4">
                  {settings.language === 'en' ? 'Workspace' : 'Eneo la Kazi'}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-dun/80">
                      {settings.language === 'en' ? 'Theme' : 'Mandhari'}
                    </span>
                    <select
                      value={settings.theme}
                      onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value as 'light' | 'dark' }))}
                      className="bg-spacecadet border border-dun/30 text-dun rounded-lg px-3 py-2"
                    >
                      <option value="dark">{settings.language === 'en' ? 'Dark' : 'Giza'}</option>
                      <option value="light">{settings.language === 'en' ? 'Light' : 'Mwanga'}</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-dun/80">
                      {settings.language === 'en' ? 'Auto-generate Code' : 'Unda Kodi Otomatiki'}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.autoGenerate}
                        onChange={(e) => setSettings(prev => ({ ...prev, autoGenerate: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-spacecadet peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-flame"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-dun/80">
                      {settings.language === 'en' ? 'Show Tooltips' : 'Onyesha Vidokezo'}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.showTooltips}
                        onChange={(e) => setSettings(prev => ({ ...prev, showTooltips: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-spacecadet peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-flame"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action - Only in standalone mode */}
        {!embedded && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-flame/20 via-dun/10 to-spacecadet/20 rounded-2xl p-8 border border-flame/20">
              <h3 className="text-2xl font-bold text-flame mb-4">
                {settings.language === 'en' 
                  ? 'Ready to Deploy Your Smart Contract?' 
                  : 'Uko Tayari Kuweka Mkataba Wako Mjanja?'
                }
              </h3>
              <p className="text-dun/80 mb-6 max-w-2xl mx-auto">
                {settings.language === 'en'
                  ? 'Get professional deployment support and connect your contract to real blockchain networks'
                  : 'Pata msaada wa kitaaluma wa uwekaji na unganisha mkataba wako kwenye mitandao halisi ya blockchain'
                }
              </p>
              <button className="bg-gradient-to-r from-flame to-flame/80 hover:from-flame/90 hover:to-flame/70 text-dun font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
                <HiPlay className="w-5 h-5" />
                {settings.language === 'en' ? 'Get Deployment Support' : 'Pata Msaada wa Uwekaji'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualContractBuilder;