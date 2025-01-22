import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-spacecadet/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-morgath text-2xl text-dun">
              Sanidi
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-montserrat text-dun hover:text-flame transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-montserrat text-dun hover:text-flame transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/sanidi-central" 
              className="font-montserrat text-dun hover:text-flame transition-colors duration-200"
            >
              Sanidi Central
            </Link>
            <Link 
              to="/joinus" 
              className="font-montserrat px-4 py-2 bg-flame text-dun rounded-lg 
                        hover:bg-flame/90 transition-colors duration-200"
            >
              Join Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dun hover:text-flame"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } border-t border-dun/10`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-montserrat text-dun hover:text-flame"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-montserrat text-dun hover:text-flame"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/join"
              className="block px-3 py-2 rounded-md text-base font-montserrat bg-flame text-dun hover:bg-flame/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;