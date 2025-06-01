import React, { useState, useEffect } from 'react';
import {
  HiGlobe,
  HiTranslate,
  HiSpeakerphone,
  HiCurrencyDollar,
  HiChartBar,
  HiUsers,
  HiCog,
  HiCheck,
  HiArrowRight,
  HiSwitchHorizontal
} from 'react-icons/hi';

type Language = 'en' | 'sw';

interface Translation {
  en: string;
  sw: string;
}

interface DashboardSection {
  id: string;
  title: Translation;
  icon: React.ReactNode;
  value: string;
  description: Translation;
  color: string;
}

interface CulturalExample {
  id: string;
  category: Translation;
  example: Translation;
  adaptation: Translation;
  icon: React.ReactNode;
}

interface NavigationItem {
  id: string;
  label: Translation;
  icon: React.ReactNode;
}

const MultiLanguageInterface: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [selectedCultural, setSelectedCultural] = useState<string>('');

  const dashboardSections: DashboardSection[] = [
    {
      id: 'revenue',
      title: { en: 'Total Revenue', sw: 'Mapato Jumla' },
      icon: <HiCurrencyDollar className="w-8 h-8" />,
      value: 'KES 2,450,000',
      description: { en: 'Monthly performance', sw: 'Utendaji wa mwezi' },
      color: 'bg-green-500'
    },
    {
      id: 'customers',
      title: { en: 'Active Customers', sw: 'Wateja Wanaotumia' },
      icon: <HiUsers className="w-8 h-8" />,
      value: '12,847',
      description: { en: 'Loyalty program members', sw: 'Wanachama wa mpango wa uongozi' },
      color: 'bg-blue-500'
    },
    {
      id: 'transactions',
      title: { en: 'Smart Transactions', sw: 'Miamala ya Mjanja' },
      icon: <HiChartBar className="w-8 h-8" />,
      value: '8,923',
      description: { en: 'Blockchain verified', sw: 'Imethibitishwa na blockchain' },
      color: 'bg-purple-500'
    },
    {
      id: 'efficiency',
      title: { en: 'Process Efficiency', sw: 'Ufanisi wa Mchakato' },
      icon: <HiCog className="w-8 h-8" />,
      value: '94.2%',
      description: { en: 'Automated workflows', sw: 'Mifumo ya otomatiki' },
      color: 'bg-orange-500'
    }
  ];

  const navigationItems: NavigationItem[] = [
    {
      id: 'dashboard',
      label: { en: 'Dashboard', sw: 'Dashibodi' },
      icon: <HiChartBar className="w-5 h-5" />
    },
    {
      id: 'customers',
      label: { en: 'Customers', sw: 'Wateja' },
      icon: <HiUsers className="w-5 h-5" />
    },
    {
      id: 'contracts',
      label: { en: 'Smart Contracts', sw: 'Mikataba Mjanja' },
      icon: <HiCog className="w-5 h-5" />
    },
    {
      id: 'analytics',
      label: { en: 'Analytics', sw: 'Uchanganuzi' },
      icon: <HiChartBar className="w-5 h-5" />
    },
    {
      id: 'settings',
      label: { en: 'Settings', sw: 'Mipangilio' },
      icon: <HiCog className="w-5 h-5" />
    }
  ];

  const culturalExamples: CulturalExample[] = [
    {
      id: 'payment-terms',
      category: { en: 'Payment Terms', sw: 'Masharti ya Malipo' },
      example: { en: 'Net 30 days', sw: 'Siku 30 kamili' },
      adaptation: { 
        en: 'Adapted to local business cycles and harvest seasons', 
        sw: 'Imebadilishwa kulingana na mizunguko ya biashara za ndani na misimu ya mavuno' 
      },
      icon: <HiCurrencyDollar className="w-6 h-6" />
    },
    {
      id: 'communication',
      category: { en: 'Communication Style', sw: 'Mtindo wa Mawasiliano' },
      example: { en: 'Direct notifications', sw: 'Arifa za moja kwa moja' },
      adaptation: { 
        en: 'Respectful and community-focused messaging', 
        sw: 'Ujumbe wa heshima na unaolenga jamii' 
      },
      icon: <HiSpeakerphone className="w-6 h-6" />
    },
    {
      id: 'currency',
      category: { en: 'Currency Display', sw: 'Onyesho la Sarafu' },
      example: { en: 'USD $1,000.00', sw: 'KES 129,000.00' },
      adaptation: { 
        en: 'Local currency with familiar formatting', 
        sw: 'Sarafu ya ndani na mpangilio unaojulikana' 
      },
      icon: <HiCurrencyDollar className="w-6 h-6" />
    },
    {
      id: 'time-format',
      category: { en: 'Time & Dates', sw: 'Wakati na Tarehe' },
      example: { en: '2:30 PM', sw: 'Saa 8:30 mchana' },
      adaptation: { 
        en: 'Swahili time system (6-hour offset)', 
        sw: 'Mfumo wa saa za Kiswahili (mabadiliko ya saa 6)' 
      },
      icon: <HiGlobe className="w-6 h-6" />
    }
  ];

  const handleLanguageSwitch = async () => {
    setIsTransitioning(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setCurrentLanguage(prev => prev === 'en' ? 'sw' : 'en');
    setIsTransitioning(false);
  };

  const getText = (translation: Translation): string => {
    return translation[currentLanguage];
  };

  useEffect(() => {
    // Auto-select first cultural example
    if (culturalExamples.length > 0) {
      setSelectedCultural(culturalExamples[0].id);
    }
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Multi-Language Interface</h2>
        <p className="text-gray-300 mb-2">
          {currentLanguage === 'en' ? 'Kiolesura cha Lugha Nyingi' : 'Multi-Language Interface'}
        </p>
        <p className="text-gray-400">
          {getText({ 
            en: 'Experience Web3 in your preferred language with cultural adaptations',
            sw: 'Furahia Web3 katika lugha unayopendelea na mabadiliko ya kitamaduni'
          })}
        </p>
      </div>

      {/* Language Switcher Demo */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">
          {getText({ en: 'Language Switcher Demo', sw: 'Onyesho la Kubadilisha Lugha' })}
        </h3>
        
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-100">
              {getText({ en: 'Current Language', sw: 'Lugha ya Sasa' })}
            </h4>
            <button
              onClick={handleLanguageSwitch}
              disabled={isTransitioning}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isTransitioning 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-orange-500 hover:bg-orange-600'
              } text-white`}
            >
              {isTransitioning ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>{getText({ en: 'Switching...', sw: 'Inabadilisha...' })}</span>
                </>
              ) : (
                <>
                  <HiSwitchHorizontal className="w-5 h-5" />
                  <span>
                    {currentLanguage === 'en' ? 'Switch to Swahili' : 'Badili kwa Kiingereza'}
                  </span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
              <HiGlobe className="w-8 h-8 text-blue-400" />
              <div>
                <h5 className="font-semibold text-blue-300">English</h5>
                <p className="text-blue-200 text-sm">Global business language</p>
              </div>
              {currentLanguage === 'en' && <HiCheck className="w-6 h-6 text-green-400" />}
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
              <HiTranslate className="w-8 h-8 text-green-400" />
              <div>
                <h5 className="font-semibold text-green-300">Kiswahili</h5>
                <p className="text-green-200 text-sm">Lugha ya biashara ya Afrika Mashariki</p>
              </div>
              {currentLanguage === 'sw' && <HiCheck className="w-6 h-6 text-green-400" />}
            </div>
          </div>
        </div>
      </div>

      {/* Localized Dashboard Preview */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">
          {getText({ en: 'Localized Dashboard Preview', sw: 'Muhtasari wa Dashibodi ya Ndani' })}
        </h3>
        
        <div className="bg-gray-800 rounded-xl p-6">
          {/* Mock Navigation */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
            <h4 className="text-xl font-bold text-orange-500">
              {getText({ en: 'Sanidi Dashboard', sw: 'Dashibodi ya Sanidi' })}
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">
                {getText({ en: 'Welcome, John', sw: 'Karibu, John' })}
              </span>
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-wrap gap-2 mb-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                {item.icon}
                <span className="text-sm">{getText(item.label)}</span>
              </button>
            ))}
          </div>

          {/* Dashboard Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardSections.map((section) => (
              <div key={section.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${section.color} p-2 rounded-lg text-white`}>
                    {section.icon}
                  </div>
                  <h5 className="font-semibold text-gray-100 text-sm">
                    {getText(section.title)}
                  </h5>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-white">{section.value}</span>
                </div>
                <p className="text-gray-400 text-xs">
                  {getText(section.description)}
                </p>
              </div>
            ))}
          </div>

          {/* Sample Content */}
          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <h5 className="font-semibold text-gray-100 mb-2">
              {getText({ en: 'Recent Activity', sw: 'Shughuli za Hivi Karibuni' })}
            </h5>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">
                  {getText({ en: 'Customer loyalty tokens distributed', sw: 'Tokeni za uongozi wa wateja zimegawishwa' })}
                </span>
                <span className="text-orange-400">247</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">
                  {getText({ en: 'Smart contracts executed', sw: 'Mikataba mjanja imetekelezwa' })}
                </span>
                <span className="text-green-400">56</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">
                  {getText({ en: 'Payment automations triggered', sw: 'Malipo ya otomatiki yameamilishwa' })}
                </span>
                <span className="text-blue-400">23</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Adaptation Examples */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">
          {getText({ en: 'Cultural Adaptation Examples', sw: 'Mifano ya Mabadiliko ya Kitamaduni' })}
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cultural Categories */}
          <div className="space-y-4">
            {culturalExamples.map((example) => (
              <div
                key={example.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedCultural === example.id
                    ? 'bg-orange-500/20 border-2 border-orange-500'
                    : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setSelectedCultural(example.id)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-orange-500">{example.icon}</div>
                  <h4 className="font-semibold text-gray-100">
                    {getText(example.category)}
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  {getText(example.example)}
                </p>
              </div>
            ))}
          </div>

          {/* Adaptation Details */}
          <div className="bg-gray-800 rounded-lg p-6">
            {selectedCultural ? (
              <div>
                {(() => {
                  const example = culturalExamples.find(e => e.id === selectedCultural);
                  if (!example) return null;
                  
                  return (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-orange-500 text-2xl">{example.icon}</div>
                        <h4 className="text-xl font-semibold text-gray-100">
                          {getText(example.category)}
                        </h4>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-200 mb-2">
                          {getText({ en: 'Example Implementation:', sw: 'Mfano wa Utekelezaji:' })}
                        </h5>
                        <div className="bg-gray-700 p-3 rounded-lg">
                          <code className="text-green-400">{getText(example.example)}</code>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-200 mb-2">
                          {getText({ en: 'Cultural Adaptation:', sw: 'Mabadiliko ya Kitamaduni:' })}
                        </h5>
                        <p className="text-gray-300 leading-relaxed">
                          {getText(example.adaptation)}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">
                  {getText({ en: 'Select an adaptation example to view details', sw: 'Chagua mfano wa mabadiliko ili kuona maelezo' })}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Language Support CTA */}
      <div className="bg-gradient-to-r from-orange-500/20 to-green-500/20 rounded-xl p-8 border border-orange-500/30">
        <h3 className="text-2xl font-bold text-orange-500 mb-6 text-center">
          {getText({ en: 'More Languages Coming Soon', sw: 'Lugha Zaidi Zinakuja Hivi Karibuni' })}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <HiGlobe className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-100 mb-2">
              {getText({ en: 'Amharic Support', sw: 'Msaada wa Kiamhari' })}
            </h4>
            <p className="text-gray-400 text-sm">
              {getText({ en: 'Coming Q3 2025', sw: 'Inakuja Robo ya 3, 2025' })}
            </p>
          </div>
          <div className="text-center">
            <HiTranslate className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-100 mb-2">
              {getText({ en: 'Oromo Integration', sw: 'Muunganisho wa Kioromo' })}
            </h4>
            <p className="text-gray-400 text-sm">
              {getText({ en: 'Coming Q4 2025', sw: 'Inakuja Robo ya 4, 2025' })}
            </p>
          </div>
          <div className="text-center">
            <HiSpeakerphone className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-100 mb-2">
              {getText({ en: 'Voice Interface', sw: 'Kiolesura cha Sauti' })}
            </h4>
            <p className="text-gray-400 text-sm">
              {getText({ en: 'Beta Testing', sw: 'Majaribio ya Beta' })}
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
            <HiArrowRight className="w-5 h-5" />
            <span>
              {getText({ 
                en: 'Request Your Language', 
                sw: 'Omba Lugha Yako' 
              })}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiLanguageInterface;