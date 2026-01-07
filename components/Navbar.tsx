
import React, { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-jet/95 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
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
                className="text-jet dark:text-white hover:text-primary dark:hover:text-primary font-bold text-[11px] uppercase tracking-[0.2em] transition-colors outline-none" 
              >
                {link.label}
              </button>
            ))}
            
            <div className="h-6 w-px bg-gray-200 dark:bg-white/10 mx-2"></div>

            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-jet dark:text-white transition-all active:scale-90"
              aria-label="Toggle theme"
            >
              <span className="material-symbols-outlined leading-none">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-jet dark:hover:bg-white dark:hover:text-jet text-white px-7 py-3 rounded-lg font-black text-[11px] uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-red-500/20" 
            >
              Get Started
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-jet dark:text-white"
            >
              <span className="material-symbols-outlined">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-jet dark:text-white p-2 outline-none"
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
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-jet shadow-2xl transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-10 space-y-6">
          {navLinks.map((link) => (
            <button 
              key={link.label}
              className="block w-full text-left text-2xl font-black text-jet dark:text-white hover:text-primary uppercase tracking-tighter" 
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
