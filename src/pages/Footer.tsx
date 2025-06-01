import React, { useState, useEffect } from 'react';
import { FaTwitter, FaGlobe, FaEnvelope, FaArrowUp } from 'react-icons/fa';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  hoverColor: string;
  label: string;
}

interface SocialCategory {
  category: string;
  links: SocialLink[];
}

const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const [isHoveringProverb, setIsHoveringProverb] = useState<boolean>(false);

  useEffect(() => {
    const checkScrollTop = (): void => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleProverbHover = (isHovering: boolean): void => {
    setIsHoveringProverb(isHovering);
  };

  const socialLinks: SocialCategory[] = [
    {
      category: 'Organization',
      links: [
        {
          name: 'Daobitat',
          icon: <FaTwitter className="w-5 h-5" />,
          url: 'https://x.com/daobitat',
          hoverColor: 'hover:text-blue-400',
          label: '@daobitat'
        },
        {
          name: 'Website',
          icon: <FaGlobe className="w-5 h-5" />,
          url: 'https://www.daobitat.xyz/',
          hoverColor: 'hover:text-green-400',
          label: 'daobitat.xyz'
        },
        {
          name: 'Email',
          icon: <FaEnvelope className="w-5 h-5" />,
          url: 'mailto:contact-daobitat@gmail.com',
          hoverColor: 'hover:text-yellow-400',
          label: 'contact-daobitat@gmail'
        }
      ]
    },
    {
      category: 'Builders',
      links: [
        {
          name: 'Tracy Wankio',
          icon: <FaTwitter className="w-5 h-5" />,
          url: 'https://twitter.com/TWankio',
          hoverColor: 'hover:text-blue-400',
          label: '@TWankio'
        },
        {
          name: 'Njeri Wangumo',
          icon: <FaTwitter className="w-5 h-5" />,
          url: 'https://twitter.com/njeriwangumo',
          hoverColor: 'hover:text-blue-400',
          label: '@njeriwangumo'
        }
      ]
    }
  ];

  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="relative bg-spacecadet/95 text-dun py-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proverb Section */}
          <div className="relative group">
            <div 
              className="transform transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => handleProverbHover(true)}
              onMouseLeave={() => handleProverbHover(false)}
            >
              <h3 className="text-flame font-semibold mb-2">Swahili Proverb</h3>
              <p className="text-dun/90 italic mb-1">
                Maji huenda kwa mto, na wanadamu huenda kwa wenzao
              </p>
              <p 
                className={`text-dun/70 text-sm transition-opacity duration-300 ${
                  isHoveringProverb ? 'opacity-100' : 'opacity-0'
                }`}
              >
                (Water flows to the river, and humans go to their fellow humans)
              </p>
            </div>
          </div>

          {/* Builders Section */}
          <div>
            <h3 className="text-flame font-semibold mb-4">Built with ❤️ by</h3>
            <div className="space-y-2">
              <p className="text-dun/90">Njeri Wangumo</p>
              <p className="text-dun/90">Tracy Wankio</p>
            </div>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-flame font-semibold mb-4">Connect with Us</h3>
            <div className="space-y-6">
              {socialLinks.map((category, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-dun/80 text-sm font-medium">{category.category}</h4>
                  <div className="space-y-2">
                    {category.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center space-x-2 ${link.hoverColor} transition-all duration-300`}
                        aria-label={link.name}
                      >
                        <span className="transform transition-transform duration-300 group-hover:scale-110">
                          {link.icon}
                        </span>
                        <span className="text-sm text-dun/70 group-hover:text-dun/90">
                          {link.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="mt-8 pt-8 border-t border-dun/10 text-center">
          <p className="text-dun/60 text-sm">
            © {currentYear} Daobitat. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={`fixed bottom-8 right-8 bg-flame text-dun p-3 rounded-full shadow-lg 
                   transform transition-transform duration-300 hover:scale-110 z-50
                   ${showScroll ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        type="button"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-flame rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-dun rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      </div>

      <style>{`
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
      `}</style>
    </footer>
  );
};

export default Footer;