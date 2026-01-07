
import React, { useEffect, useRef, useState } from 'react';

const Pricing: React.FC = () => {
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-jet dark:text-white text-center mb-16 reveal-item ${isRevealed ? 'revealed' : ''}`}>Simple Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {/* Starter Card */}
          <div 
            className={`flex-1 bg-white dark:bg-jet rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg transition-all flex flex-col reveal-item ${isRevealed ? 'revealed' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-bold text-jet dark:text-white mb-2">Starter Package</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Perfect for small businesses starting out.</p>
            <div className="text-4xl font-bold mb-8 dark:text-white">$999<span className="text-lg text-gray-400 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['Social Media Management', 'Basic Content Creation', 'Monthly Reporting'].map(feature => (
                <li key={feature} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium">
                  <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={scrollToContact}
              className="block w-full py-3.5 rounded-lg border-2 border-jet dark:border-white text-jet dark:text-white font-bold hover:bg-jet hover:text-white dark:hover:bg-white dark:hover:text-jet transition-colors outline-none" 
            >
              Get Started
            </button>
          </div>

          {/* Custom Card */}
          <div 
            className={`flex-1 bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-accent shadow-xl relative overflow-hidden flex flex-col transform md:-translate-y-4 reveal-item ${isRevealed ? 'revealed' : ''}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="absolute top-0 right-0 bg-accent text-jet text-xs font-black px-4 py-1.5 rounded-bl-lg">POPULAR</div>
            <h3 className="text-2xl font-bold text-jet dark:text-white mb-2">Custom Package</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Tailored for scaling brands & enterprises.</p>
            <div className="text-4xl font-bold mb-8 tracking-tight dark:text-white">Custom</div>
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                'Full-Service Digital Strategy', 
                'E-commerce & Web Development', 
                'Dedicated Account Manager', 
                'Advanced Analytics & SEO'
              ].map(feature => (
                <li key={feature} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-200 font-bold">
                  <span className="material-symbols-outlined text-accent text-lg filled-icon">star</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={scrollToContact}
              className="block w-full py-4 rounded-lg bg-primary text-white font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20 outline-none" 
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;