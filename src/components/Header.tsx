import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-lg shadow-black/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Mejor alineado y más cerca del texto */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center group transition-all duration-300 hover:scale-105"
          >
            <div className="relative flex-shrink-0 flex items-center">
              <img 
                src="/Gemini_Generated_Image_sewpz2sewpz2sewp-removebg-preview__1_-removebg-preview.png" 
                alt="Nudoo Logo" 
                className="h-20 w-auto object-contain transition-all duration-300 group-hover:scale-110"
                style={{ 
                  filter: `drop-shadow(0 6px 16px rgba(59, 130, 246, 0.4)) ${!isScrolled ? 'drop-shadow(0 4px 12px rgba(255, 255, 255, 0.3))' : ''}`,
                  transform: 'scale(1.6)'
                }}
              />
              {/* Efecto de brillo sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full"></div>
            </div>
            <span
            translate="no"
             className={`ml-3 text-4xl font-bold transition-all duration-300 leading-none ${
              isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            } group-hover:scale-105`}>
              NUDOO
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`relative transition-all duration-300 hover:scale-105 font-medium ${
                isScrolled ? 'text-gray-600 hover:text-[#3b82f6]' : 'text-white/90 hover:text-white'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#60a5fa] after:to-[#3b82f6] after:transition-all after:duration-300 hover:after:w-full`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className={`relative transition-all duration-300 hover:scale-105 font-medium ${
                isScrolled ? 'text-gray-600 hover:text-[#3b82f6]' : 'text-white/90 hover:text-white'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#60a5fa] after:to-[#3b82f6] after:transition-all after:duration-300 hover:after:w-full`}
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className={`relative transition-all duration-300 hover:scale-105 font-medium ${
                isScrolled ? 'text-gray-600 hover:text-[#3b82f6]' : 'text-white/90 hover:text-white'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#60a5fa] after:to-[#3b82f6] after:transition-all after:duration-300 hover:after:w-full`}
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`relative transition-all duration-300 hover:scale-105 font-medium ${
                isScrolled ? 'text-gray-600 hover:text-[#3b82f6]' : 'text-white/90 hover:text-white'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#60a5fa] after:to-[#3b82f6] after:transition-all after:duration-300 hover:after:w-full`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('about-us')}
              className={`relative transition-all duration-300 hover:scale-105 font-medium ${
                isScrolled ? 'text-gray-600 hover:text-[#3b82f6]' : 'text-white/90 hover:text-white'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#60a5fa] after:to-[#3b82f6] after:transition-all after:duration-300 hover:after:w-full`}
            >
              About Us
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/34655217549"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#1e3a8a] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#60a5fa] before:via-[#3b82f6] before:to-[#1e3a8a] before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:-z-10 before:blur-xl"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-black/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={28} className={`transition-all duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu size={28} className={`transition-all duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-6 border-t transition-all duration-300 ${
            isScrolled ? 'border-gray-200/50' : 'border-white/20'
          }`}>
            <nav className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-left font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-[#3b82f6]' : 'text-white/90 hover:text-white'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className={`text-left font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-[#3b82f6]' : 'text-white/90 hover:text-white'
                }`}
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('industries')}
                className={`text-left font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-[#3b82f6]' : 'text-white/90 hover:text-white'
                }`}
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={`text-left font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-[#3b82f6]' : 'text-white/90 hover:text-white'
                }`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('about-us')}
                className={`text-left font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-[#3b82f6]' : 'text-white/90 hover:text-white'
                }`}
              >
                About Us
              </button>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/34655217549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#1e3a8a] text-white px-8 py-3 rounded-full text-center font-semibold shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;