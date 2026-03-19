import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-7xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <a href="#home" className="group flex items-center gap-3">
             <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500">
               <img src={logo} alt="Logo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
             </div>
             <span className="text-white text-[11px] font-bold uppercase tracking-widest hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">Abhishek</span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-[#a1a1aa] hover:text-white transition-all duration-300 text-[11px] font-bold uppercase tracking-[0.2em]"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
           <a 
            href="/resume.pdf" 
            download="Abhishek_Singh_Resume.pdf"
            className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/10 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#a1a1aa] hover:text-white transition-colors">
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-[-1] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-white tracking-tight hover:text-[#71717a] transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              download="Abhishek_Singh_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-bold border border-white/20 px-10 py-3 rounded-full mt-6"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
