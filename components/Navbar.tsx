
import React, { useState } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer transform hover:scale-105 transition-transform" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo className="h-10 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className="text-jet hover:text-primary font-bold text-[11px] uppercase tracking-[0.2em] transition-colors outline-none" 
              >
                {link.label}
              </button>
            ))}
            
            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-jet text-white px-7 py-3 rounded-lg font-black text-[11px] uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-red-500/20" 
            >
              Get Started
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-jet p-2 outline-none"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-10 space-y-6">
          {navLinks.map((link) => (
            <button 
              key={link.label}
              className="block w-full text-left text-2xl font-black text-jet hover:text-primary uppercase tracking-tighter" 
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button 
            className="block w-full bg-primary text-white text-center py-5 rounded-xl font-black text-sm uppercase tracking-widest" 
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
