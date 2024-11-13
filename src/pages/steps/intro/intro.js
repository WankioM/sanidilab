// src/pages/intro/intro.js
import React, { useState } from 'react';
import { BiBook, BiDownload, BiCode } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import { translations } from './translations';
import AboutWeb3 from './AboutWeb3';
import InstallWagmi from './InstallWagmi';
import InstallTypeScript from './InstallTypeScript';

const ActionButton = ({ icon: Icon, step, completed, onClick, translations, isActive }) => {
  const [showSwahili, setShowSwahili] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setShowSwahili(true)}
      onMouseLeave={() => setShowSwahili(false)}
      className={`w-full group relative flex items-center justify-between p-6 
                hover:bg-dun/5 rounded-xl shadow-sm border-2 transition-all duration-300
                ${isActive ? 'border-flame bg-flame/5' : 'border-dun/10 bg-white/5'}`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-2 rounded-lg ${isActive ? 'bg-flame/20' : 'bg-flame/10'}`}>
          <Icon className={`w-6 h-6 ${isActive ? 'text-flame' : 'text-flame/80'}`} />
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold text-dun flex items-center gap-2">
            <span className={showSwahili ? 'opacity-40' : 'opacity-100'}>
              {translations.title.en}
            </span>
            <span className={`${showSwahili ? 'opacity-100' : 'opacity-40'} text-flame`}>
              {translations.title.sw}
            </span>
          </h3>
          <p className="text-sm text-dun/70 flex items-center gap-2">
            <span className={showSwahili ? 'opacity-40' : 'opacity-100'}>
              {translations.description.en}
            </span>
            <span className={`${showSwahili ? 'opacity-100' : 'opacity-40'} text-flame/70`}>
              {translations.description.sw}
            </span>
          </p>
        </div>
      </div>
      {completed && (
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
};

const Intro = () => {
  const { userName } = useUser();
  const navigate = useNavigate();
  const [completed, setCompleted] = useState({
    about: false,
    install: false,
    typescript: false
  });
  const [showSwahili, setShowSwahili] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const totalSteps = 3;
  const completedSteps = Object.values(completed).filter(Boolean).length;
  const progress = (completedSteps / totalSteps) * 100;

  const toggleStep = (step) => {
    setActiveSection(activeSection === step ? null : step);
    setCompleted(prev => ({
      ...prev,
      [step]: !prev[step]
    }));
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutWeb3 isOpen={true} onClose={() => setActiveSection(null)} />;
      case 'install':
        return <InstallWagmi isOpen={true} onClose={() => setActiveSection(null)} />;
      case 'typescript':
        return <InstallTypeScript isOpen={true} onClose={() => setActiveSection(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] mt-20 bg-gradient-to-b from-spacecadet to-spacecadet/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Language Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowSwahili(!showSwahili)}
              className="text-sm font-medium text-dun hover:text-flame transition-colors"
            >
              {showSwahili ? "Switch to English" : "Badili lugha"}
            </button>
          </div>

          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-montserrat font-bold mb-6 text-dun">
            Well hello there {userName}! Hujambo!
          </h1>
          <div className="text-lg text-dun/80 mb-12 font-montserrat">
            {showSwahili ? translations.subtitle.sw : translations.subtitle.en}
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-dun/80">
                {showSwahili ? translations.progress.sw : translations.progress.en}
              </span>
              <span className="text-sm font-medium text-dun/80">
                {completedSteps} {showSwahili ? translations.of.sw : translations.of.en} {totalSteps} {showSwahili ? translations.completed.sw : translations.completed.en}
              </span>
            </div>
            <div className="h-2 bg-dun/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-flame transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <ActionButton
              icon={BiBook}
              step="about"
              completed={completed.about}
              onClick={() => toggleStep('about')}
              translations={translations.steps.about}
              isActive={activeSection === 'about'}
            />
            {activeSection === 'about' && renderActiveSection()}
            
            <ActionButton
              icon={BiDownload}
              step="install"
              completed={completed.install}
              onClick={() => toggleStep('install')}
              translations={translations.steps.install}
              isActive={activeSection === 'install'}
            />
            {activeSection === 'install' && renderActiveSection()}
            
            <ActionButton
              icon={BiCode}
              step="typescript"
              completed={completed.typescript}
              onClick={() => toggleStep('typescript')}
              translations={translations.steps.typescript}
              isActive={activeSection === 'typescript'}
            />
            {activeSection === 'typescript' && renderActiveSection()}
          </div>

          {/* Continue Button */}
          <div className="flex justify-end mt-12">
            <button 
              onClick={() => completedSteps === totalSteps && navigate('/builder/provider')}
              className={`
                px-8 py-4 rounded-xl font-montserrat font-bold text-lg 
                transition-all duration-300 shadow-lg
                ${completedSteps === totalSteps 
                  ? 'bg-flame text-dun hover:bg-flame/90 cursor-pointer'
                  : 'bg-dun/10 text-dun/40 cursor-not-allowed'
                }
              `}
            >
              {showSwahili ? translations.continue.sw : translations.continue.en} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;