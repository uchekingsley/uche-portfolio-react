import React from 'react';
import BubbleCanvas from './components/BubbleCanvas';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-primary selection:text-white pb-20 bg-transparent text-white font-sans overflow-x-hidden">
      {/* Background Container */}
      <div id="interactive-bg" className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-br from-[#0d0e14] to-[#0a0a0f]">
        <div className="ambient-shape shape-1"></div>
        <div className="ambient-shape shape-2"></div>
        <div className="grid-overlay"></div>
        <BubbleCanvas />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6">
          <Hero />
          <Projects />
          <Experience />
          <Services />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
