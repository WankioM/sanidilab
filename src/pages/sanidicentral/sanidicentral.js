import React, { useState } from 'react';
import { HiMicrophone, HiNewspaper, HiSparkles } from 'react-icons/hi';
import CtrlAltDelight from './CtrlAltDelight';
import MediumArticles from './mediumarticles';
import SanidiSpace from './sanidispace';

const SanidiCentral = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { 
      id: 'podcast',
      icon: HiMicrophone,
      label: 'Ctrl Alt + Delight',
      labelSw: 'Ctrl Alt + Delight',
      component: CtrlAltDelight
    },
    { 
      id: 'articles',
      icon: HiNewspaper,
      label: 'Articles',
      labelSw: 'Makala',
      component: MediumArticles
    },
    { 
      id: 'community',
      icon: HiSparkles,
      label: 'Sanidi Space',
      labelSw: 'Nafasi ya Sanidi',
      component: SanidiSpace
    }
  ];

  const handleDotClick = (index) => {
    setActiveSection(index);
  };

  const CurrentComponent = sections[activeSection].component;

  return (
    <div className="min-h-[92vh] bg-spacecadet pt-20 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-dun rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-flame rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-dun mb-4">
            Sanidi Central
          </h1>
          <p className="text-xl text-flame/90 font-montserrat">
            Kituo cha Sanidi
          </p>
        </div>

        {/* Interactive Navigation Dots */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="relative flex items-center justify-center gap-32 py-8">
            {/* Progress Line */}
            <div className="absolute h-0.5 bg-dun/20 w-full max-w-xl"></div>
            
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => handleDotClick(index)}
                className="relative group pt-2 pb-16"
              >
                {/* Dot */}
                <div 
                  className={`w-8 h-8 rounded-full transition-all duration-300 relative z-10
                    ${index === activeSection 
                      ? 'bg-flame scale-125' 
                      : 'bg-dun/20 hover:bg-dun/40'}`}
                >
                  <section.icon 
                    className={`w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      ${index === activeSection ? 'text-dun' : 'text-dun/60'}`}
                  />
                </div>

                {/* Labels */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap space-y-2">
                  <p className={`text-base font-montserrat transition-all duration-300
                    ${index === activeSection ? 'text-dun' : 'text-dun/60'}`}
                  >
                    {section.label}
                  </p>
                  <p className={`text-base font-montserrat transition-all duration-300
                    ${index === activeSection ? 'text-flame/90' : 'text-flame/50'}`}
                  >
                    {section.labelSw}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section with Transition */}
        <div className="transition-all duration-500 transform">
          <CurrentComponent />
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SanidiCentral;