import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      id="home" 
      className="flex flex-col items-center justify-center min-h-[90vh] text-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Subtle Heading Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8"
        >
          <span className="text-gradient">
            Hi, I'm Abhishek Singh
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-3xl text-[#a1a1aa] mb-6 font-medium tracking-tight"
        >
          Full Stack Developer
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="text-[#71717a] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I build scalable, high-performance web applications with a focus on precision and minimalist design.
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-[#f4f4f5] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Work
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-transparent border border-white/10 text-white px-12 py-4 rounded-full font-bold hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
