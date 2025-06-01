import React, { useState } from 'react';
import { HiCode, HiClipboard, HiOutlineExclamationCircle, HiInformationCircle } from 'react-icons/hi';

interface CodePreviewProps {
  code: string;
  errors: string[];
  warnings: string[];
  language: 'en' | 'sw';
}

const CodePreview: React.FC<CodePreviewProps> = ({ code, errors, warnings, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="bg-spacecadet/50 rounded-xl border border-dun/20 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-dun/20">
        <div className="flex items-center gap-2">
          <HiCode className="w-5 h-5 text-flame" />
          <h4 className="font-semibold text-dun">
            {language === 'en' ? 'Generated Smart Contract' : 'Mkataba Mjanja Uliotengenezwa'}
          </h4>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-2 bg-dun/10 hover:bg-dun/20 text-dun rounded-lg transition-colors duration-200 text-sm"
        >
          <HiClipboard className="w-4 h-4" />
          {copied 
            ? (language === 'en' ? 'Copied!' : 'Imenakiliwa!')
            : (language === 'en' ? 'Copy' : 'Nakili')
          }
        </button>
      </div>

      {/* Errors and Warnings */}
      {(errors.length > 0 || warnings.length > 0) && (
        <div className="p-4 border-b border-dun/20 space-y-2">
          {errors.map((error, index) => (
            <div key={`error-${index}`} className="flex items-start gap-2 text-red-400 text-sm">
              <HiOutlineExclamationCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          ))}
          
          {warnings.map((warning, index) => (
            <div key={`warning-${index}`} className="flex items-start gap-2 text-yellow-400 text-sm">
              <HiInformationCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{warning}</span>
            </div>
          ))}
        </div>
      )}

      {/* Code Display */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm bg-spacecadet/80 max-h-96 overflow-y-auto">
          <code className="text-darkcyan font-mono leading-relaxed whitespace-pre">
            {code || (language === 'en' 
              ? '// No code generated yet. Add some blocks to get started!' 
              : '// Hakuna kodi iliyotengenezwa bado. Ongeza vitalu kuanza!'
            )}
          </code>
        </pre>
        
        {/* Line numbers */}
        <div className="absolute left-0 top-0 p-4 pointer-events-none">
          <div className="text-dun/30 text-sm font-mono leading-relaxed">
            {code.split('\n').map((_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with code stats */}
      <div className="p-4 bg-spacecadet/30 border-t border-dun/20">
        <div className="flex items-center justify-between text-sm text-dun/60">
          <span>
            {language === 'en' ? 'Solidity v0.8.0+' : 'Solidity v0.8.0+'}
          </span>
          <span>
            {code.split('\n').length} {language === 'en' ? 'lines' : 'mistari'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CodePreview;