import React, { useState } from "react";

const InstallWagmi = ({ isOpen, onClose }) => {
  const [copiedCommand, setCopiedCommand] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(""), 2000);
  };

  const installCommands = [
    {
      manager: "pnpm",
      command: "pnpm add wagmi viem@2.x @tanstack/react-query"
    },
    {
      manager: "npm",
      command: "npm install wagmi viem@2.x @tanstack/react-query"
    },
    {
      manager: "yarn",
      command: "yarn add wagmi viem@2.x @tanstack/react-query"
    },
    {
      manager: "bun",
      command: "bun add wagmi viem@2.x @tanstack/react-query"
    }
  ];

  return (
    <div className="mt-4 p-6 bg-white rounded-xl border-2 border-dun/10">
      <h3 className="text-xl font-montserrat font-semibold text-spacecadet mb-4">
        <span className="mr-2">Install wagmi</span>
        <span className="text-flame">Weka wagmi</span>
      </h3>
      
      <div className="space-y-4">
        {installCommands.map(({ manager, command }) => (
          <div key={manager} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <span>Using {manager}</span>
              <span className="text-flame/70">Kutumia {manager}</span>
            </h4>
            <div className="relative">
              <div 
                className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => copyToClipboard(command)}
              >
                <code>{command}</code>
              </div>
              {copiedCommand === command && (
                <span className="absolute right-2 top-2 text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                  Copied! / Imenakiliwa!
                </span>
              )}
            </div>
          </div>
        ))}

        <div className="mt-6 text-sm">
          <p className="flex items-center gap-2 mb-2">
            <span>For more information:</span>
            <span className="text-flame/70">Kwa maelezo zaidi:</span>
          </p>
          <a 
            href="https://wagmi.sh/react/installation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-flame hover:text-flame/80 underline"
          >
            https://wagmi.sh/react/installation
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstallWagmi;