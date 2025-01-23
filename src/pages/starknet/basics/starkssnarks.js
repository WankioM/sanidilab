import React, { useState } from 'react';
import { translations } from './starkssnarkstranslation'; // Import the translations

const StarksSnarks = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sw' : 'en');
  };

  const toggleCard = (id) => {
    setFlippedCards(prev => {
      const newFlipped = new Set(prev);
      if (newFlipped.has(id)) {
        newFlipped.delete(id);
      } else {
        newFlipped.add(id);
      }
      return newFlipped;
    });
  };

  const currentTranslations = translations[language];

  return (
    <div className="min-h-[90vh] bg-spacecadet flex flex-col pt-20">
      {/* Header with Language Toggle Button */}
      <div className="h-[8vh] bg-spacecadet/90 border-b border-dun/20 flex items-center justify-between px-4">
        <h1 className="text-2xl font-morgath text-flame">
          {currentTranslations.header.title}
        </h1>
        <button 
          onClick={toggleLanguage} 
          className="h-[16vh]px-4 py-2 bg-flame text-white rounded-md hover:bg-flame/80 transition-colors"
        >
          {currentTranslations.header.languageButton}
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 relative overflow-y-auto">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-spacecadet/85 via-[#21253A]/80 to-spacecadet/75" />

        {/* Cards Container */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTranslations.cards.map(card => (
              <div 
                key={card.frontTitle} 
                className="perspective-1000 cursor-pointer h-[400px]"
                onClick={() => toggleCard(card.frontTitle)}
              >
                <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d
                  ${flippedCards.has(card.frontTitle) ? 'rotate-y-180' : ''}`}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden">
                    <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-dun/20">
                      <div className="text-center mb-6">
                        <span className="text-4xl mb-2">{card.frontEmoji}</span>
                        <h2 className="text-2xl font-morgath text-flame">{card.frontTitle}</h2>
                      </div>
                      <h3 className="text-lg font-montserrat text-dun mb-4">{card.frontContent.title}</h3>
                      <ul className="space-y-2">
                        {card.frontContent.points.map((point, index) => (
                          <li key={index} className="text-dun font-montserrat flex items-center">
                            <span className="mr-2">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-dun/20">
                      <h2 className="text-2xl font-morgath text-flame mb-6">{card.backTitle}</h2>
                      <div className="space-y-4">
                        {card.backContent.sections.map((section, index) => (
                          <div key={index}>
                            <h3 className="text-lg font-montserrat text-flame mb-2">{section.title}</h3>
                            <p className="text-dun font-montserrat text-sm">{section.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for 3D transforms */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default StarksSnarks;