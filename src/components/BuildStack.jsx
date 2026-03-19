import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';

const BuildStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const blocks = [
    { title: "React", icon: <FaReact />, text: "Building components with declarative excellence." },
    { title: "Node.js", icon: <FaNodeJs />, text: "Powering concurrent, non-blocking backend logic." },
    { title: "Architecture", icon: <SiMongodb />, text: "Scaling data layers for high-throughput apps." }
  ];

  return (
    <section id="stack" className="py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#52525b] uppercase mb-4">Arsenal</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Built for <span className="text-gradient">Impact</span>.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="text-3xl text-white mb-6 group-hover:text-blue-400 transition-colors duration-500">{block.icon}</div>
              <h4 className="text-white font-bold mb-4 tracking-tight">{block.title}</h4>
              <p className="text-[#a1a1aa] leading-relaxed text-sm">{block.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="p-12 rounded-3xl bg-[#0a0a0a] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-12"
        >
          <span className="text-[10px] font-bold text-[#52525b] uppercase tracking-[0.2em]">Secondary Arsenal</span>
          <div className="flex flex-wrap gap-12 items-center justify-center">
            <div className="flex items-center gap-3 text-[#a1a1aa] hover:text-white transition-all duration-300">
              <SiTypescript size={18}/> 
              <span className="font-semibold text-xs tracking-tight uppercase tracking-wider">TypeScript</span>
            </div>
            <div className="flex items-center gap-3 text-[#a1a1aa] hover:text-white transition-all duration-300">
              <SiTailwindcss size={18}/> 
              <span className="font-semibold text-xs tracking-tight uppercase tracking-wider">Tailwind</span>
            </div>
            <div className="flex items-center gap-3 text-[#a1a1aa]">
              <span className="font-semibold text-xs tracking-tight uppercase tracking-wider">Docker & REST APIs</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BuildStack;
