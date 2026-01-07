
import React, { useEffect, useRef, useState } from 'react';

const WhyUs: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const points = [
    "Highly Skilled Team",
    "Data-Driven Strategies",
    "Affordable Solutions",
    "Fast Turnaround",
    "Client-Focused Approach"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="why-us" className="py-24 bg-jet text-white relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4a4a4a 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`md:w-1/2 reveal-item ${isRevealed ? 'revealed' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Partner With Us?</h2>
            <p className="text-gray-400 text-lg mb-8">We don't just execute tasks; we strategize for your long-term domination in the market.</p>
            <button 
              onClick={scrollToContact}
              className="text-accent font-bold text-lg hover:underline flex items-center gap-2 outline-none group"
            >
              Let's talk growth 
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-4">
              {points.map((point, idx) => (
                <div 
                  key={point} 
                  className={`flex items-center gap-4 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all reveal-item ${isRevealed ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                >
                  <span className="material-symbols-outlined text-accent filled-icon">verified</span>
                  <span className="font-bold text-lg">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;