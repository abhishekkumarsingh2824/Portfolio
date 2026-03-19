import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineBookOpen } from 'react-icons/hi';

const About = () => {
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

  const points = [
    { title: "Frontend", desc: "Crafting fluid, responsive interfaces with React and Framer Motion." },
    { title: "Backend", desc: "Building robust, scalable architectures using Node.js and MongoDB." },
    { title: "Systems", desc: "Optimizing for performance and solving complex algorithmic challenges." },
    { title: "Design", desc: "Creating minimalist, user-centric experiences with a focus on details." }
  ];

  return (
    <section id="about" className="py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#52525b] uppercase mb-4">Background</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Engineering with <span className="text-gradient">Intent</span>.
          </h3>
          <p className="text-[#a1a1aa] text-lg leading-relaxed max-w-3xl">
            I am a Full Stack Developer dedicated to building high-performance web applications. My approach combines technical rigor with a minimalist aesthetic, ensuring every line of code serves a clear purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <h4 className="text-white font-bold mb-3 tracking-tight">{point.title}</h4>
              <p className="text-[#71717a] text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
