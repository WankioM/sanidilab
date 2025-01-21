import React from 'react';
import { marked } from 'marked';

const ChainExplanation = ({ showSwahili }) => {
  const explanations = {
    sections: [
      {
        title: showSwahili ? "Minyororo ya Blockchain" : "Blockchain Chains",
        icon: "⛓️",
        content: [
          {
            en: "A blockchain chain is a network that processes and records transactions. Popular chains include Ethereum, Polygon, and Binance Smart Chain.",
            sw: "Mnyororo wa blockchain ni mtandao unaochakata na kurekodi miamala. Minyororo maarufu ni pamoja na Ethereum, Polygon, na Binance Smart Chain."
          },
          {
            en: "Each chain has its own rules, participants, and native tokens.",
            sw: "Kila mnyororo una sheria zake, washiriki, na tokeni zake."
          }
        ]
      },
      {
        title: showSwahili ? "Aina za Mitandao" : "Network Types",
        icon: "🌐",
        content: [
          {
            en: "Mainnet is the live network where real transactions occur using actual assets and cryptocurrency.",
            sw: "Mainnet ni mtandao hai ambapo miamala halisi hutokea kwa kutumia mali na sarafu halisi."
          },
          {
            en: "Testnet is a testing environment for developers to experiment without using real assets.",
            sw: "Testnet ni mazingira ya majaribio kwa wasanidi programu kujaribu bila kutumia mali halisi."
          }
        ]
      },
      {
        title: showSwahili ? "Kuchagua Mnyororo Sahihi" : "Choosing the Right Chain",
        icon: "🎯",
        content: [
          {
            en: "Consider factors like transaction costs, speed, security, and community support.",
            sw: "Zingatia mambo kama gharama za miamala, kasi, usalama, na msaada wa jamii."
          },
          {
            en: "Some chains are optimized for specific use cases like DeFi, gaming, or NFTs.",
            sw: "Baadhi ya minyororo imeboreshwa kwa matumizi maalum kama DeFi, michezo, au NFT."
          }
        ]
      }
    ],
    learnMore: {
      title: showSwahili ? "Jifunze Zaidi" : "Learn More",
      icon: "📚",
      links: [
        {
          text: showSwahili ? "Soma mwongozo wetu wa kina" : "Read our comprehensive guide",
          url: "https://medium.com/@tracywankio29/choosing-the-right-blockchain-a-guide-to-making-the-best-choice-for-your-project-939d35cf3cc0"
        }
      ]
    }
  };

  return (
    <div className="space-y-8 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-dun/10">
      {/* Main Sections */}
      {explanations.sections.map((section, index) => (
        <div key={index} className="space-y-4">
          {/* Section Header */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{section.icon}</span>
            <h3 className="text-xl font-semibold text-dun">
              {section.title}
            </h3>
          </div>

          {/* Section Content */}
          <ul className="space-y-3 ml-12">
            {section.content.map((item, i) => (
              <li key={i} className="text-dun/80 flex items-start">
                <span className="inline-block w-2 h-2 bg-flame/60 rounded-full mt-2 mr-3"></span>
                {item[showSwahili ? 'sw' : 'en']}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Learn More Section */}
      <div className="mt-6 bg-flame/5 p-4 rounded-lg border border-flame/20">
        <div className="flex items-center space-x-2 text-flame mb-2">
          <span className="text-xl">{explanations.learnMore.icon}</span>
          <span className="font-semibold">{explanations.learnMore.title}</span>
        </div>
        <ul className="ml-8">
          {explanations.learnMore.links.map((link, i) => (
            <li key={i} className="text-dun/70">
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-flame hover:text-flame/80 transition-colors"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChainExplanation;