import React, { useState } from "react";

const InstallTypeScript = ({ isOpen, onClose }) => {
  const [copiedCommand, setCopiedCommand] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(""), 2000);
  };

  return (
    <div className="mt-4 p-6 bg-white rounded-xl border-2 border-dun/10">
      <h3 className="text-xl font-montserrat font-semibold text-spacecadet mb-4">
        <span className="mr-2">Install TypeScript</span>
        <span className="text-flame">Weka TypeScript</span>
      </h3>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <span>Step 1: Install TypeScript</span>
            <span className="text-flame/70">Hatua ya 1: Weka TypeScript</span>
          </h4>
          <div className="relative">
            <div 
              className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2 cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => copyToClipboard("npm install -D typescript @types/react @types/node")}
            >
              <code>npm install -D typescript @types/react @types/node</code>
            </div>
            {copiedCommand === "npm install -D typescript @types/react @types/node" && (
              <span className="absolute right-2 top-2 text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                Copied! / Imenakiliwa!
              </span>
            )}
          </div>
          <p className="text-gray-600 flex items-center gap-2">
            <span>Install TypeScript and necessary type definitions</span>
            <span className="text-flame/70">Weka TypeScript na ufafanuzi wa aina zinazohitajika</span>
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <span>Step 2: Initialize TypeScript</span>
            <span className="text-flame/70">Hatua ya 2: Anzisha TypeScript</span>
          </h4>
          <div className="relative">
            <div 
              className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2 cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => copyToClipboard("npx tsc --init")}
            >
              <code>npx tsc --init</code>
            </div>
            {copiedCommand === "npx tsc --init" && (
              <span className="absolute right-2 top-2 text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                Copied! / Imenakiliwa!
              </span>
            )}
          </div>
          <p className="text-gray-600 flex items-center gap-2">
            <span>Create a TypeScript configuration file</span>
            <span className="text-flame/70">Tengeneza faili ya usanidi wa TypeScript</span>
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <span>Step 3: Configure TypeScript</span>
            <span className="text-flame/70">Hatua ya 3: Sanidi TypeScript</span>
          </h4>
          <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2 whitespace-pre">
{`{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules"]
}`}
          </div>
          <p className="text-gray-600 flex items-center gap-2">
            <span>Recommended TypeScript configuration for React projects</span>
            <span className="text-flame/70">Usanidi unaopendekezwa wa TypeScript kwa miradi ya React</span>
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-600 mb-2 flex items-center gap-2">
          <span>Helpful Resources:</span>
          <span className="text-flame/70">Vyanzo vya Msaada:</span>
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
          <li>
            <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className="text-flame hover:text-flame/80">
              TypeScript Documentation
            </a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/docs/handbook/react.html" target="_blank" rel="noopener noreferrer" className="text-flame hover:text-flame/80">
              TypeScript React Guidelines
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InstallTypeScript;