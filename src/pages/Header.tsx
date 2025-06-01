import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  label: string;
  href: string;
  description: string;
}

interface NavigationItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems: NavigationItem[] = [
    {
      label: 'Learn',
      href: '/sanidi-central',
      dropdown: [
        { label: 'Sanidi Central', href: '/sanidi-central', description: 'Learning hub' },
        { label: 'Learning Tracks', href: '/menu/learningtracks', description: 'Structured courses' },
        { label: 'Blockchain Basics', href: '/blockchain-basics', description: 'Fundamentals' },
        { label: 'StarkNet', href: '/starknet', description: 'Advanced blockchain' },
        { label: 'Builder Tools', href: '/builder', description: 'Development tools' }
      ]
    },
    {
      label: 'Platform',
      href: '/platform',
      dropdown: [
        { label: 'Overview', href: '/platform', description: '6-week transformation' },
        { label: 'Capabilities', href: '/platform/capabilities', description: 'Interactive demos' },
        { label: 'Technical Specs', href: '/platform/technical-specs', description: 'Technical details' },
        { label: 'Visual Builder', href: '/platform/visual-builder', description: 'Smart contract builder' },
        { label: 'Enterprise Integration', href: '/platform/enterprise-integration', description: 'System integration' },
        { label: 'Multi-Language', href: '/platform/multi-language', description: 'Localization features' }
      ]
    },
    {
      label: 'Use Cases',
      href: '/use-cases',
      dropdown: [
        { label: 'All Use Cases', href: '/use-cases', description: 'Complete overview' },
        { label: 'Supply Chain', href: '/use-cases?focus=supply-chain', description: 'Track & verify products' },
        { label: 'Loyalty Programs', href: '/use-cases?focus=loyalty', description: 'Customer engagement' },
        { label: 'Cross-Border Payments', href: '/use-cases?focus=payments', description: 'International transfers' },
        { label: 'Asset Tokenization', href: '/use-cases?focus=tokenization', description: 'Digital asset management' },
        { label: 'Implementation', href: '/use-cases/implementation', description: 'How we deploy' },
        { label: 'Getting Started', href: '/use-cases/getting-started', description: 'Assessment tool' }
      ]
    },
    {
      label: 'Solutions',
      href: '#',
      dropdown: [
        { label: 'Implementation Support', href: '/implementation', description: '24/7 expert support' },
        { label: 'Pricing Calculator', href: '/pricing', description: 'Get custom quote' },
        { label: 'Technical Documentation', href: '/platform/technical-specs', description: 'Developer resources' }
      ]
    }
  ];

  const handleDropdownEnter = (label: string): void => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = (): void => {
    setActiveDropdown(null);
  };

  const handleMobileMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileLinkClick = (): void => {
    setIsMenuOpen(false);
  };

  const handleDropdownItemClick = (): void => {
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-spacecadet/95 backdrop-blur-sm z-50 border-b border-flame/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="font-morgath text-2xl text-dun hover:text-flame transition-colors duration-300"
            >
              Sanidi
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-montserrat text-dun hover:text-flame transition-colors duration-300"
            >
              Home
            </Link>
            
            {navigationItems.map((item) => (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link 
                  to={item.href}
                  className="font-montserrat text-dun hover:text-flame transition-colors duration-300 flex items-center gap-1"
                >
                  {item.label}
                  {item.dropdown && (
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-80 bg-spacecadet/98 backdrop-blur-md border border-flame/30 rounded-xl shadow-2xl mt-2 z-[9999] max-h-[60vh] overflow-y-auto animate-fadeInDown">
                    <div className="absolute inset-0 bg-gradient-to-br from-flame/8 to-transparent pointer-events-none rounded-xl"></div>
                    <div className="relative z-10 py-2">
                      {item.dropdown.map((dropdownItem, index) => (
                        <Link
                          key={`${dropdownItem.href}-${index}`}
                          to={dropdownItem.href}
                          className="relative block px-5 py-3 text-sm text-dun hover:text-flame hover:bg-flame/15 transition-all duration-200 group mx-2 my-1 rounded-lg"
                          onClick={handleDropdownItemClick}
                        >
                          <div className="font-semibold group-hover:text-flame transition-colors duration-200">
                            {dropdownItem.label}
                          </div>
                          <div className="text-xs text-dun/70 group-hover:text-flame/90 transition-colors duration-200 mt-1">
                            {dropdownItem.description}
                          </div>
                          <div className="absolute left-0 top-0 w-1 h-full bg-flame scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top rounded-r"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link 
              to="/about" 
              className="font-montserrat text-dun hover:text-flame transition-colors duration-300"
            >
              About
            </Link>
            
            <Link 
              to="/joinus" 
              className="font-montserrat px-6 py-3 bg-flame text-dun rounded-lg hover:bg-flame/90 hover:text-spacecadet transition-all duration-300 font-semibold hover:shadow-lg"
            >
              Join Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-dun hover:text-flame transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-flame/20 animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-montserrat text-dun hover:text-flame hover:bg-flame/10 transition-all duration-300" 
                onClick={handleMobileLinkClick}
              >
                Home
              </Link>
              
              {/* Learning Section */}
              <div className="px-3 py-2">
                <div className="text-xs font-semibold text-flame/80 uppercase tracking-wider mb-2">Learning</div>
                <Link 
                  to="/sanidi-central" 
                  className="block px-3 py-1 text-sm text-dun hover:text-flame hover:bg-flame/5 rounded transition-all duration-300" 
                  onClick={handleMobileLinkClick}
                >
                  Sanidi Central
                </Link>
                <Link 
                  to="/menu/learningtracks" 
                  className="block px-3 py-1 text-sm text-dun hover:text-flame hover:bg-flame/5 rounded transition-all duration-300" 
                  onClick={handleMobileLinkClick}
                >
                  Learning Tracks
                </Link>
              </div>
              
              {/* Business Section */}
              <div className="px-3 py-2">
                <div className="text-xs font-semibold text-flame/80 uppercase tracking-wider mb-2">Business</div>
                <Link 
                  to="/platform" 
                  className="block px-3 py-1 text-sm text-dun hover:text-flame hover:bg-flame/5 rounded transition-all duration-300" 
                  onClick={handleMobileLinkClick}
                >
                  Platform
                </Link>
                <Link 
                  to="/use-cases" 
                  className="block px-3 py-1 text-sm text-dun hover:text-flame hover:bg-flame/5 rounded transition-all duration-300" 
                  onClick={handleMobileLinkClick}
                >
                  Use Cases
                </Link>
                <Link 
                  to="/implementation" 
                  className="block px-3 py-1 text-sm text-dun hover:text-flame hover:bg-flame/5 rounded transition-all duration-300" 
                  onClick={handleMobileLinkClick}
                >
                  Implementation
                </Link>
                <Link 
                  to="/pricing" 
                  className="block px-3 py-1 text-sm text-dun hover:text-flame hover:bg-flame/5 rounded transition-all duration-300" 
                  onClick={handleMobileLinkClick}
                >
                  Pricing
                </Link>
              </div>
              
              <Link 
                to="/about" 
                className="block px-3 py-2 rounded-md text-base font-montserrat text-dun hover:text-flame hover:bg-flame/10 transition-all duration-300" 
                onClick={handleMobileLinkClick}
              >
                About
              </Link>
              <Link 
                to="/joinus" 
                className="block px-3 py-2 rounded-md text-base font-montserrat bg-flame text-dun hover:bg-flame/90 hover:text-spacecadet transition-all duration-300 font-semibold" 
                onClick={handleMobileLinkClick}
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style >{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.2s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;