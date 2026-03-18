import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 font-medium text-sm mb-2"
          >
            MERN Stack Developer
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Abhishek Singh
            </span>
          </h1>

          <div className="h-16 md:h-12 text-xl md:text-2xl font-light text-gray-400 max-w-2xl">
            <Typewriter
              words={[
                'I build scalable web applications.',
                'I create high-performance systems.',
                'I craft modern, interactive UIs.',
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <p className="text-gray-400 max-w-lg mt-2 text-base md:text-lg">
            "I build scalable, high-performance web applications with real-time capabilities and intelligent features."
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
            >
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-8 py-3.5 rounded-full bg-[#161b22] border border-gray-700 text-white font-medium hover:bg-gray-800 transition-all hover:-translate-y-1"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-800/60 w-full justify-center md:justify-start">
            <span className="text-gray-500 font-medium">Connect on:</span>
            <a href="https://github.com/AbhishekSingh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/AbhishekSingh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Optional Graphic / Abstract Shape */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 hidden lg:flex justify-center relative"
        >
          <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-64 h-64 rounded-full border border-gray-700/50 backdrop-blur-sm bg-gray-900/40 shadow-2xl flex items-center justify-center animate-[spin_20s_linear_infinite]">
                <div className="w-48 h-48 rounded-full border border-blue-500/30 rotate-45"></div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
