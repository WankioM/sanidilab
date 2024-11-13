import React from 'react';
import { marked } from 'marked';

const APIKeyExplanation = ({ showSwahili }) => {
  const explanations = {
    en: {
      sections: [
        {
          title: "What is an API Key?",
          icon: "🔑",
          content: [
            "An API key is like a secret password that allows your application to securely connect to a blockchain provider's services.",
            "It helps track your usage and ensures only authorized applications can access the service."
          ]
        },
        {
          title: "Why use .env files?",
          icon: "📁",
          content: [
            "A .env file is used to store sensitive information like API keys",
            "It keeps your secrets safe by keeping them out of your code",
            "It's excluded from version control (git) by default",
            "It allows different keys for development and production"
          ]
        },
        {
          title: "How to use:",
          icon: "📝",
          steps: [
            { step: 1, text: "Create a file named `.env` in your project root" },
            { step: 2, text: "Add your API key: `REACT_APP_PROVIDER_API_KEY=your_api_key_here`" },
            { step: 3, text: "Make sure .env is listed in your .gitignore file" },
            { step: 4, text: "Access the key in your code using: `process.env.REACT_APP_PROVIDER_API_KEY`" }
          ]
        }
      ]
    },
    sw: {
      sections: [
        {
          title: "API Key ni nini?",
          icon: "🔑",
          content: [
            "API key ni kama nywila ya siri inayoruhusu programu yako kuunganisha kwa usalama na huduma za mtoa blockchain.",
            "Inasaidia kufuatilia matumizi yako na kuhakikisha programu zilizoidhinishwa tu zinaweza kufikia huduma."
          ]
        },
        {
          title: "Kwa nini kutumia faili za .env?",
          icon: "📁",
          content: [
            "Faili ya .env inatumika kuhifadhi taarifa nyeti kama vile funguo za API",
            "Inaweka siri zako salama kwa kuziweka nje ya msimbo wako",
            "Imetengwa na udhibiti wa toleo (git) kwa chaguo-msingi",
            "Inaruhusu funguo tofauti kwa maendeleo na uzalishaji"
          ]
        },
        {
          title: "Jinsi ya kutumia:",
          icon: "📝",
          steps: [
            { step: 1, text: "Unda faili inayoitwa `.env` katika mizizi ya mradi wako" },
            { step: 2, text: "Ongeza ufunguo wako wa API: `REACT_APP_PROVIDER_API_KEY=ufunguo_wako_wa_api_hapa`" },
            { step: 3, text: "Hakikisha .env imetajwa katika faili yako ya .gitignore" },
            { step: 4, text: "Pata ufunguo katika msimbo wako kwa kutumia: `process.env.REACT_APP_PROVIDER_API_KEY`" }
          ]
        }
      ]
    }
  };

  // Custom renderer for code blocks
  const renderCode = (text) => {
    const parts = text.split('`');
    return parts.map((part, index) => {
      if (index % 2 === 1) { // This is code
        return (
          <code key={index} className="bg-flame/10 text-flame px-2 py-1 rounded font-mono">
            {part}
          </code>
        );
      }
      return part;
    });
  };

  const content = explanations[showSwahili ? 'sw' : 'en'];

  return (
    <div className="space-y-8 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-dun/10">
      {content.sections.map((section, index) => (
        <div key={index} className="space-y-4">
          {/* Section Header */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{section.icon}</span>
            <h3 className="text-xl font-semibold text-dun">
              {section.title}
            </h3>
          </div>

          {/* Section Content */}
          {section.content && (
            <ul className="space-y-3 ml-12">
              {section.content.map((item, i) => (
                <li key={i} className="text-dun/80 flex items-start">
                  <span className="inline-block w-2 h-2 bg-flame/60 rounded-full mt-2 mr-3"></span>
                  {renderCode(item)}
                </li>
              ))}
            </ul>
          )}

          {/* Steps if present */}
          {section.steps && (
            <div className="ml-12 space-y-4">
              {section.steps.map((step, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-flame/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-flame font-semibold">{step.step}</span>
                  </div>
                  <div className="text-dun/80 pt-1">
                    {renderCode(step.text)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Tips Section */}
      <div className="mt-6 bg-flame/5 p-4 rounded-lg border border-flame/20">
        <div className="flex items-center space-x-2 text-flame mb-2">
          <span className="text-xl">💡</span>
          <span className="font-semibold">
            {showSwahili ? "Muhimu Kukumbuka" : "Important Tips"}
          </span>
        </div>
        <p className="text-dun/70 ml-8">
          {showSwahili 
            ? "Kamwe usishiriki ufunguo wako wa API au kuuweka kwenye udhibiti wa toleo. Daima tumia faili za .env kwa taarifa nyeti."
            : "Never share your API key or commit it to version control. Always use .env files for sensitive information."}
        </p>
      </div>
    </div>
  );
};

// Add custom styles for the markdown content
const styles = `
  .markdown-content code {
    background-color: rgba(236, 80, 34, 0.1);
    color: #EC5022;
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-family: monospace;
  }

  .markdown-content ul {
    margin-left: 1.5em;
  }

  .markdown-content li {
    margin-bottom: 0.5em;
  }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default APIKeyExplanation;