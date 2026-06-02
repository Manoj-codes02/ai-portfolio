import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BootSequence from './components/BootSequence';

import AIJourney from './components/AIJourney';
import AIAssistant from './components/AIAssistant';
import ResearchLab from './components/ResearchLab';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-ai-bg text-ai-text selection:bg-ai-accent/30 selection:text-white transition-colors duration-300">
        <ParticleBackground />
        {booting ? (
          <BootSequence onComplete={() => setBooting(false)} />
        ) : (
          <>
            <Navigation />
            <main>
              <Hero />
              <About />
              <Skills />
              <AIJourney />
              <Projects />
              <ResearchLab />
              <Contact />
            </main>
            <Footer />
            <AIAssistant />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;