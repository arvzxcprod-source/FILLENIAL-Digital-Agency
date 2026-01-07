
import React, { useEffect, useRef, useState } from 'react';

const TOOLS_DATA = [
  { name: "Meta Business Suite", desc: "Unified management for Facebook and Instagram marketing." },
  { name: "Google Workspace", desc: "Collaborative productivity tools for business operations." },
  { name: "Canva", desc: "Rapid graphic design for social and marketing assets." },
  { name: "ChatGPT & AI", desc: "Advanced content generation and workflow automation." },
  { name: "Shopify", desc: "Premium e-commerce platform for scaling brands." },
  { name: "WooCommerce", desc: "Open-source e-commerce customization for WordPress." },
  { name: "HubSpot", desc: "Full-stack CRM for marketing and customer service." },
  { name: "Asana", desc: "Modern project management for team efficiency." }
];

const Tools: React.FC = () => {
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

  return (
    <section ref={sectionRef} className="py-16 bg-white dark:bg-jet border-y border-gray-100 dark:border-white/5 transition-colors duration-300 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className={`text-center font-bold text-gray-400 uppercase tracking-widest mb-10 reveal-item ${isRevealed ? 'revealed' : ''}`}>
          Powering your success with top-tier tools
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {TOOLS_DATA.map((tool, idx) => (
            <div 
              key={tool.name} 
              className={`relative group reveal-item ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${100 + (idx * 50)}ms` }}
            >
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-jet dark:bg-gray-800 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 whitespace-nowrap border border-white/10">
                {tool.desc}
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-jet dark:border-t-gray-800"></div>
              </div>

              {/* Tool Chip */}
              <div className="px-6 py-3 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-600 dark:text-gray-400 font-bold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all cursor-help">
                {tool.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
