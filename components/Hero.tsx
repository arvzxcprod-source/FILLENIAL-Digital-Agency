
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-screen flex items-center bg-white dark:bg-jet overflow-hidden pt-20 transition-colors duration-300">
      {/* Dynamic Background Architecture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[150px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className={`lg:col-span-7 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-jet text-white dark:bg-white dark:text-jet font-black text-[10px] uppercase tracking-[0.4em] mb-8 shadow-2xl">
              <span className="material-symbols-outlined text-xs filled-icon text-primary animate-pulse">analytics</span>
              Digital Command Center
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-jet dark:text-white tracking-tighter mb-8 leading-[0.85] uppercase">
              ATTENTION <br />
              <span className="text-primary italic">IS THE</span> <br />
              <span className="relative">
                CURRENCY
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium max-w-xl mb-12 leading-tight">
              We don't just post content. We engineer market domination through data-driven creativity and high-conversion strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative inline-flex items-center justify-center bg-primary text-white text-sm font-black px-12 py-6 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_25px_50px_-12px_rgba(214,0,0,0.5)] uppercase tracking-widest overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Launch Growth Session
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-2">bolt</span>
                </span>
                <div className="absolute inset-0 bg-jet scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center justify-center bg-transparent border-2 border-gray-100 dark:border-white/10 text-jet dark:text-white text-sm font-black px-10 py-6 rounded-2xl transition-all hover:bg-gray-50 dark:hover:bg-white/5 uppercase tracking-widest"
              >
                View Services
              </button>
            </div>
          </div>

          {/* Logo Showcase (Using logo.png) */}
          <div className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative w-full max-w-lg">
              
              {/* Background Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/20 rounded-full blur-[80px] opacity-30"></div>

              {/* The "Brand Canvas" - Optimized for Horizontal Logo */}
              <div className="relative bg-white dark:bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-gray-100 dark:border-gray-200 group flex items-center justify-center min-h-[180px]">
                <img 
                  src="logo.png" 
                  alt="FILLENIAL Digital Marketing Services logo" 
                  className="site-logo relative z-10"
                  draggable="false"
                />
                
                {/* Decorative Accents */}
                <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                <div className="absolute bottom-6 left-6 opacity-5">
                  <span className="material-symbols-outlined text-4xl">grid_view</span>
                </div>
              </div>

              {/* Floating Status Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 bg-white dark:bg-gray-900 px-4 py-2 rounded-xl shadow-xl border border-gray-100 dark:border-white/5 flex items-center gap-3 z-20">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-jet dark:text-white whitespace-nowrap">Agency Strategy Live</span>
              </div>

              {/* Verification Badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-jet text-white px-6 py-4 rounded-2xl shadow-2xl border-4 border-white dark:border-jet transform rotate-2 hover:rotate-0 transition-all duration-500 z-20 flex items-center gap-4">
                <div className="flex flex-col text-left">
                  <span className="text-[8px] font-black text-primary uppercase tracking-[0.3em] mb-1">Account Status</span>
                  <span className="text-[11px] font-black uppercase tracking-tight">Growth Verified</span>
                </div>
                <div className="p-2 rounded-lg bg-primary/20">
                  <span className="material-symbols-outlined text-primary text-xl filled-icon">verified_user</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Hero;
