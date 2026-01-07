
import React, { useEffect, useRef, useState } from 'react';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsRevealed(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { val: '50+', label: 'Successful Campaigns' },
    { val: '10+', label: 'Industries Mastered' },
    { val: '200%', label: 'Avg. Engagement Uplift' },
    { val: '24/7', label: 'Support Availability' },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-24 bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`reveal-item ${isRevealed ? 'revealed' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Proven Experience.<br />Real Results.</h2>
            <p className="text-gray-400 text-lg mb-10">We don't rely on guesswork. Our team brings years of hands-on experience across multiple verticals to ensure your brand thrives.</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((s, idx) => (
                <div 
                  key={s.label} 
                  className="border-l-4 border-accent pl-5 transition-all duration-700"
                  style={{ transitionDelay: `${400 + (idx * 100)}ms`, opacity: isRevealed ? 1 : 0, transform: isRevealed ? 'translateX(0)' : 'translateX(-20px)' }}
                >
                  <h3 className="text-4xl font-bold text-white mb-1">{s.val}</h3>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`aspect-[4/3] rounded-3xl bg-gray-800 bg-cover bg-center overflow-hidden relative shadow-2xl group reveal-item ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '300ms' }}>
            <img 
              src="https://picsum.photos/seed/fillenial-team/1200/800" 
              alt="Strategic Team" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
