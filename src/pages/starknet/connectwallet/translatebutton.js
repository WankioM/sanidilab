import React, { useState } from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TranslateButton = ({ onLanguageChange, currentLanguage = 'en', className = '' }) => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'sw', name: 'Kiswahili' }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className={`hover:bg-slate-100 rounded-full ${className}`}
          aria-label="Select Language"
        >
          <Languages size={24} className="text-slate-600" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className={currentLanguage === lang.code ? "bg-slate-100" : ""}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TranslateButton;