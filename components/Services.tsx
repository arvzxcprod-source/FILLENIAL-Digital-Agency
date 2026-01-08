
import React, { useEffect, useRef, useState } from 'react';

const SERVICES = [
  {
    icon: 'admin_panel_settings',
    title: 'Administrative',
    desc: 'Data entry, calendar management, and executive assistance to keep you organized.',
  },
  {
    icon: 'share',
    title: 'Social Media',
    desc: 'Content creation, community management, and paid ad strategies.',
  },
  {
    icon: 'support_agent',
    title: 'Customer Support',
    desc: '24/7 chat support, email handling, and customer satisfaction tracking.',
  },
  {
    icon: 'shopping_bag',
    title: 'E-Commerce',
    desc: 'Product listing, inventory management, and store optimization.',
  },
  {
    icon: 'stars',
    title: 'Specialized',
    desc: 'SEO, copywriting, graphic design, and video editing services.',
  },
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

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
    <section ref={sectionRef} className="py-24 bg-white transition-colors duration-300" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal-item ${isRevealed ? 'revealed' : ''}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-primary/5 text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-jet mb-4 uppercase tracking-tighter">Core Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">Comprehensive solutions designed to scale your business from every angle.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICES.map((s, idx) => (
            <div 
              key={s.title} 
              className={`group p-8 rounded-3xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden reveal-item ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
            >
              {/* Dynamic Top Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></div>
              
              {/* Enhanced Icon Stage */}
              <div className="mb-8 relative h-20 w-20 flex items-center justify-center">
                {/* Background Shape */}
                <div className="absolute inset-0 bg-primary/5 rounded-2xl transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-125 group-hover:rotate-12"></div>
                
                {/* Pulse Ripple Effect */}
                <div className="absolute inset-0 bg-accent/20 rounded-full scale-0 group-hover:animate-[ping_1.5s_ease-out_infinite] opacity-0 group-hover:opacity-40"></div>
                
                {/* The Icon */}
                <span className={`material-symbols-outlined text-accent text-5xl transition-all duration-700 block relative z-10 
                  group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-3 group-hover:[font-variation-settings:'FILL'_1]
                  ${idx % 2 === 0 ? 'group-hover:rotate-6' : 'group-hover:-rotate-6'}
                `}
                style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                  {s.icon}
                </span>
              </div>

              <h3 className="text-xl font-black mb-4 text-jet uppercase tracking-tight transition-colors duration-300 group-hover:text-primary">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium transition-colors duration-300 group-hover:text-gray-700">
                {s.desc}
              </p>

              {/* Interactive Corner Badge */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gray-50 rounded-full group-hover:bg-accent/10 group-hover:scale-150 transition-all duration-700 ease-out"></div>
              
              {/* Subtle Progress Indicator */}
              <div className="mt-8 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <div className="w-8 h-1 bg-primary rounded-full"></div>
                <div className="w-1.5 h-1 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
