
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Hero() {
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
    <header className="relative min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-primary/5 rounded-full blur-[160px] opacity-40 animate-glow-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-[50%] h-[50%] bg-accent/10 rounded-full blur-[140px] opacity-30 animate-glow-slow [animation-delay:3s]"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-200/50 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-gray-100 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Messaging Side */}
          <div className={`lg:col-span-6 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative inline-block mb-10">
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-border-pulse -m-1"></div>
              <div className="relative flex items-center gap-3 px-6 py-2 rounded-full bg-jet text-white font-black text-[10px] uppercase tracking-[0.4em] shadow-xl">
                <span className="material-symbols-outlined text-xs text-primary animate-pulse filled-icon">trending_up</span>
                Next-Gen Growth Engine
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black text-jet tracking-tighter mb-8 leading-[0.85] uppercase">
              RECODE <br />
              <span className="text-primary italic">YOUR</span> <br />
              <span className="relative inline-block">
                REVENUE
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-accent/30 -z-10 rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-lg mb-12 leading-tight">
              We engineer high-velocity digital dominance for brands that refuse to settle for "good enough."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative inline-flex items-center justify-center bg-primary text-white text-sm font-black px-12 py-6 rounded-2xl uppercase tracking-widest transition-all hover:bg-red-700 hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
              >
                Start The Audit
                <span className="material-symbols-outlined ml-2 text-lg group-hover:animate-pulse">bolt</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center justify-center bg-white border-2 border-gray-100 text-jet text-sm font-black px-10 py-6 rounded-2xl transition-all hover:bg-gray-50 hover:border-gray-200 uppercase tracking-widest shadow-sm"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* High-Impact Logo Showcase Side */}
          <div className={`lg:col-span-6 relative transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[120px] animate-pulse"></div>

              <div className="relative z-10 w-full max-w-2xl bg-white/40 backdrop-blur-xl rounded-[4rem] p-4 md:p-8 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.12)] border border-white group">
                {/* Floating Brand Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-2xl animate-float z-20 border-4 border-white">
                  <span className="material-symbols-outlined text-jet text-3xl filled-icon">monetization_on</span>
                </div>
                
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-jet text-white px-10 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-30 border-2 border-white/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-50 animate-ping"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">Growth Engine Active</span>
                </div>

                {/* The Brand Stage - Background optimized for the logo image */}
                <div className="relative overflow-hidden rounded-[3.5rem] p-8 md:p-12 bg-white transition-all duration-700 group-hover:shadow-2xl flex items-center justify-center min-h-[350px] border border-gray-100 shadow-inner">
                   <div className="w-full max-w-[500px] transform transition-all duration-700 group-hover:scale-105">
                    {/* Hero uses a larger version of the Logo component */}
                    <Logo className="h-auto w-full drop-shadow-2xl" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
