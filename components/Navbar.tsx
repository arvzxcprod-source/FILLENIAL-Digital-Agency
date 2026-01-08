
import React, { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Experience', id: 'experience' },
    { label: 'Pricing', id: 'pricing' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section linking to Home */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer transition-transform hover:scale-[1.02] active:scale-95 group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            aria-label="Go to home"
          >
            {/* Logo used in Navbar - restricted height to fit nicely */}
            <Logo className="h-12 md:h-14 lg:h-16" />
            <div className="w-1 h-1 rounded-full bg-primary ml-3 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className="text-jet hover:text-primary font-bold text-[10px] uppercase tracking-[0.2em] transition-colors outline-none relative group" 
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
              </button>
            ))}
            
            <div className="h-6 w-px bg-gray-100 mx-2"></div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-jet hover:bg-primary text-white px-7 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-black/5 hover:shadow-red-500/10" 
            >
              Get Started
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-jet p-2 outline-none"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-4xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 transform origin-top ${
          isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-8 py-12 space-y-8 bg-white border-t border-gray-50">
          {navLinks.map((link) => (
            <button 
              key={link.label}
              className="block w-full text-left text-3xl font-black text-jet hover:text-primary uppercase tracking-tighter" 
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4">
            <button 
              className="block w-full bg-primary text-white text-center py-6 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-red-500/20" 
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
