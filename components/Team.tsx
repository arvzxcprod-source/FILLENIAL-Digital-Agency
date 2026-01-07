
import React, { useEffect, useRef, useState } from 'react';

const Team: React.FC = () => {
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

  const roles = [
    { label: 'Digital Strategists', color: 'bg-red-50 dark:bg-red-900/20 text-primary' },
    { label: 'Graphic Designers', color: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-500' },
    { label: 'Social Media Managers', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' },
    { label: 'Support Specialists', color: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' },
    { label: 'E-com Experts', color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400' },
    { label: 'Virtual Assistants', color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400' },
  ];

  return (
    <section ref={sectionRef} id="team" className="py-20 bg-white dark:bg-jet transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className={`text-3xl font-bold text-jet dark:text-white mb-3 tracking-tight reveal-item ${isRevealed ? 'revealed' : ''}`}>
          Creative minds. Strategic thinkers. Growth partners.
        </h2>
        <p className={`text-gray-500 dark:text-gray-400 mb-10 text-lg reveal-item ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
          Our team is a collective of experts dedicated to your brand.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {roles.map((role, idx) => (
            <span 
              key={role.label} 
              className={`px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm border border-black/5 dark:border-white/5 transition-all ${role.color} reveal-item ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${200 + (idx * 50)}ms` }}
            >
              {role.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;