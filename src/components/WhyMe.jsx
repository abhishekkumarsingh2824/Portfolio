import React from 'react';
import { motion } from 'framer-motion';

const WhyMe = () => {
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

  const cards = [
    { emoji: "⚡", title: "Performance First", desc: "Optimized for speed and fluid interactions." },
    { emoji: "🎯", title: "Precision Design", desc: "Pixel-perfect interfaces with a focus on details." },
    { emoji: "🏗️", title: "Scalable Code", desc: "Clean, maintainable, and production-ready architecture." }
  ];

  return (
    <section id="why-me" className="py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#52525b] uppercase mb-4">Philosophy</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Why <span className="text-gradient">Work</span> with me.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">{card.emoji}</div>
              <h4 className="text-white font-bold mb-4 text-xl tracking-tight">{card.title}</h4>
              <p className="text-[#a1a1aa] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyMe;
