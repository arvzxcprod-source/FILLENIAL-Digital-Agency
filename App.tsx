
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`relative overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-jet' : 'bg-white'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Tools />
        <Experience />
        <Pricing />
        <Team />
      </main>
      <Contact />
      <AIChat />
    </div>
  );
};

export default App;
