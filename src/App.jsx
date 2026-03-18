import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden bg-[#0d1117] text-[#c9d1d9]">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent -z-10 blur-3xl pointer-events-none" />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 md:px-8 max-w-7xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
