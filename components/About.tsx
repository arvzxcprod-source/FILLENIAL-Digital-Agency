
import React, { useState, useEffect, useRef } from 'react';

const INDUSTRIES = [
  { icon: 'shopping_cart', label: 'E-commerce' },
  { icon: 'apartment', label: 'Real Estate' },
  { icon: 'spa', label: 'Beauty & Wellness' },
  { icon: 'agriculture', label: 'Agri-Farming' },
  { icon: 'storefront', label: 'Local Biz' },
  { icon: 'rocket_launch', label: 'Startups' },
];

const About: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden" id="about">
      <div 
        className="absolute -right-20 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${(scrollY - 500) * 0.1}px)` }}
      ></div>
      <div 
        className="absolute -left-20 bottom-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${(scrollY - 800) * -0.05}px)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`reveal-item ${isRevealed ? 'revealed' : ''}`}>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Since 2024</h2>
            <h3 className="text-4xl font-bold text-jet dark:text-white mb-6">Built for the Bold. Driven by Results.</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              FILLENIAL is a digital marketing agency crafted for the speed of modern business. We help brands navigate the noise and connect with Millennials and Gen Z through authentic, high-impact strategies.
            </p>
            <div className="space-y-6">
              <h4 className="font-bold text-xl border-b border-gray-200 dark:border-white/10 pb-2 dark:text-white">Core Values</h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Creativity with Purpose',
                  'Integrity',
                  'Client-Centered Growth',
                  'Innovation & Excellence',
                ].map((value, idx) => (
                  <li 
                    key={value} 
                    className={`flex items-center gap-3 transition-all duration-700`}
                    style={{ transitionDelay: `${400 + (idx * 100)}ms`, opacity: isRevealed ? 1 : 0, transform: isRevealed ? 'translateX(0)' : 'translateX(-10px)' }}
                  >
                    <span className="material-symbols-outlined text-accent font-bold filled-icon">check_circle</span>
                    <span className="text-jet dark:text-gray-300 font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`relative reveal-item ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div 
              className="absolute -z-10 top-0 left-0 w-full h-full bg-white/50 dark:bg-jet/50 backdrop-blur-sm rounded-3xl border border-white/20 transition-transform duration-75 ease-out"
              style={{ transform: `rotate(${(scrollY - 500) * 0.01}deg)` }}
            ></div>
            
            <h4 className="font-bold text-xl mb-6 pl-4 dark:text-white">Industries Served</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {INDUSTRIES.map((ind, idx) => (
                <div 
                  key={ind.label} 
                  className={`bg-white dark:bg-jet p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 flex flex-col items-center text-center gap-3 border border-gray-100 dark:border-white/5 group`}
                  style={{ transitionDelay: `${500 + (idx * 50)}ms`, opacity: isRevealed ? 1 : 0, transform: isRevealed ? 'translateY(0)' : 'translateY(20px)' }}
                >
                  <span className="material-symbols-outlined text-accent text-4xl group-hover:scale-110 transition-transform">{ind.icon}</span>
                  <span className="font-bold text-sm dark:text-gray-200">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
