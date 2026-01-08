
import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
  { 
    num: 1, 
    title: 'Discovery', 
    sub: 'CONSULTATION & AUDIT', 
    icon: 'search_insights',
    desc: 'Deep dive into your current metrics and market position to identify untapped growth opportunities.'
  },
  { 
    num: 2, 
    title: 'Strategy', 
    sub: 'PLANNING & TACTICS', 
    icon: 'tactic',
    desc: 'Engineering a custom blueprint designed to dominate your niche and maximize ROI.'
  },
  { 
    num: 3, 
    title: 'Creative', 
    sub: 'CONTENT DEVELOPMENT', 
    icon: 'auto_awesome',
    desc: 'Crafting thumb-stopping assets that resonate with Millennial and Gen Z demographics.'
  },
  { 
    num: 4, 
    title: 'Execute', 
    sub: 'IMPLEMENTATION', 
    icon: 'rocket_launch',
    desc: 'Deploying campaigns with precision across optimized channels for maximum impact.'
  },
  { 
    num: 5, 
    title: 'Optimize', 
    sub: 'MONITORING & TWEAKS', 
    icon: 'query_stats',
    desc: 'Real-time data analysis to pivot and polish performance for peak algorithmic efficiency.'
  },
  { 
    num: 6, 
    title: 'Growth', 
    sub: 'REPORTING & SCALING', 
    icon: 'trending_up',
    desc: 'Aggressive scaling of winning formulas to secure long-term market leadership.'
  },
];

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsRevealed(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white transition-colors duration-300 relative overflow-visible" id="process">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-24 reveal-item ${isRevealed ? 'revealed' : ''}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-4">
            Our Method
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-jet tracking-tighter uppercase leading-none">
            Roadmap to <span className="text-primary italic">Success</span>
          </h2>
        </div>
        
        <div className="relative">
          {/* Main Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[110px] left-0 w-full h-[2px] bg-gray-100 z-0">
            <div 
              className={`h-full bg-gradient-to-r from-accent via-primary to-accent transition-all duration-[2000ms] ease-out origin-left ${isRevealed ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {STEPS.map((step, idx) => (
              <div 
                key={step.num} 
                className={`flex flex-col items-center reveal-item ${isRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${100 + (idx * 150)}ms` }}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Number Bubble - Floating Above Card */}
                <div className="relative mb-6 z-20">
                  <div className={`w-14 h-14 rounded-full bg-accent text-jet font-black flex items-center justify-center text-xl shadow-[0_10px_20px_-5px_rgba(242,201,0,0.5)] border-4 border-white transition-all duration-500 transform ${activeStep === idx ? 'scale-125 -translate-y-2' : ''}`}>
                    {step.num}
                  </div>
                  {/* Visual Connector Pulse */}
                  {activeStep === idx && (
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                  )}
                </div>

                {/* The Interactive Card */}
                <div className={`w-full bg-white p-6 rounded-2xl border transition-all duration-500 flex flex-col items-center text-center h-full min-h-[250px] cursor-default ${
                  activeStep === idx 
                    ? 'border-primary shadow-2xl shadow-primary/10 -translate-y-4' 
                    : 'border-gray-100 shadow-sm'
                }`}>
                  <div className={`p-4 rounded-xl mb-6 transition-all duration-500 ${
                    activeStep === idx ? 'bg-primary text-white scale-110 rotate-6 shadow-xl shadow-primary/20' : 'bg-gray-50 text-gray-400'
                  }`}>
                    <span className={`material-symbols-outlined text-3xl block transition-transform duration-500 ${
                      activeStep === idx ? 'animate-bounce' : ''
                    }`}>
                      {step.icon}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-black text-jet uppercase tracking-tight mb-2 transition-colors duration-300">
                    {step.title}
                  </h4>
                  
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.15em] mb-4">
                    {step.sub}
                  </p>

                  <div className={`relative px-2 transition-all duration-500 ${activeStep === idx ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-1'}`}>
                    {/* Highlight Background Effect */}
                    <div className={`absolute inset-0 bg-accent/10 -z-10 rounded-md transition-all duration-500 origin-left ${
                      activeStep === idx ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                    
                    <p className="text-[11px] leading-relaxed text-gray-600 font-medium">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Progress Line Segment (Mobile) */}
                  {idx < STEPS.length - 1 && (
                    <div className={`lg:hidden mt-8 w-[1px] h-12 transition-all duration-500 ${
                      activeStep === idx ? 'bg-primary h-16' : 'bg-gradient-to-b from-accent to-transparent'
                    }`}></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Footer for the Process */}
        <div className={`mt-24 bg-jet p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 reveal-item ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '1200ms' }}>
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
              Ready for the <span className="text-primary italic">Fast Lane?</span>
            </h3>
            <p className="text-gray-400 font-medium">
              We've refined this roadmap through hundreds of iterations. Now, we're ready to deploy it for your brand.
            </p>
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-red-500/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Initiate Discovery
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">bolt</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
