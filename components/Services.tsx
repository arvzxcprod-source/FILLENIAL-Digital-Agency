
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
    <section ref={sectionRef} className="py-24 bg-white dark:bg-jet transition-colors duration-300" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal-item ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="text-4xl font-bold text-jet dark:text-white mb-4 uppercase tracking-tighter">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">Comprehensive solutions designed to scale your business from every angle.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICES.map((s, idx) => (
            <div 
              key={s.title} 
              className={`group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 dark:hover:border-accent transition-all duration-500 relative overflow-hidden reveal-item ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              {/* Animated Icon Container */}
              <div className="mb-6 relative h-16 w-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <span className={`material-symbols-outlined text-accent text-5xl transition-all duration-500 block relative z-10 
                  group-hover:scale-125 group-hover:-translate-y-2 group-hover:[font-variation-settings:'FILL'_1]
                  ${idx % 2 === 0 ? 'group-hover:rotate-12' : 'group-hover:-rotate-12'}
                `}>
                  {s.icon}
                </span>
              </div>

              <h3 className="text-xl font-black mb-3 dark:text-white uppercase tracking-tight transition-colors group-hover:text-primary">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                {s.desc}
              </p>

              {/* Subtle accent dot */}
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-gray-200 dark:bg-white/10 rounded-full group-hover:bg-accent group-hover:scale-[3] transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
