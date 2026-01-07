
import React from 'react';
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
  // Application is now locked to light mode by removing theme state and effects.
  
  return (
    <div className="relative overflow-x-hidden bg-white transition-colors duration-300">
      <Navbar />
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
