import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import WhyMe from './components/WhyMe';
import Skills from './components/Skills';
import BuildStack from './components/BuildStack';
import EngineeringMindset from './components/EngineeringMindset';
import Projects from './components/Projects';
import FeaturedProject from './components/FeaturedProject';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white min-h-screen relative selection:bg-blue-500/30 selection:text-white">
      {/* Global Premium Effects */}
      <div className="premium-glow" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.015),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.01),transparent_50%)] pointer-events-none" />
      
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 pt-20 space-y-24 md:space-y-40 relative z-10">
        <Hero />
        <About />
        <WhyMe />
        <Skills />
        <BuildStack />
        <EngineeringMindset />
        <Projects />
        <FeaturedProject />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
