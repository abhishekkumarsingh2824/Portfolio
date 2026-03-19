import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaTrophy, FaServer } from 'react-icons/fa';

const EngineeringMindset = () => {
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

  const metrics = [
    {
      icon: <FaTrophy size={18} />,
      value: "400+",
      label: "DSA Problems Solved",
      desc: "A relentless focus on optimization and logic ensures that my solutions operate seamlessly at load."
    },
    {
      icon: <FaServer size={18} />,
      value: "Systems",
      label: "Architecture & Scaling",
      desc: "Expertise in distributed systems, caching bottlenecks, and database optimization."
    },
    {
      icon: <FaTerminal size={18} />,
      value: "Full Stack",
      label: "End-to-End Ownership",
      desc: "Bridging the gap between UI perfection and backend resilience."
    }
  ];

  return (
    <section id="mindset" className="py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#52525b] uppercase mb-4">Core Philosophy</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 tracking-tight">
            The Engineering <span className="text-gradient">Mindset</span>.
          </h3>
          <p className="text-[#a1a1aa] text-lg leading-relaxed max-w-3xl">
            Great products are built on solid foundational logic. I don't just stitch frameworks together; I engineer robust infrastructures prioritizing <span className="text-white font-medium">performance</span>, <span className="text-white font-medium">scalability</span>, and <span className="text-white font-medium">maintainability</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center text-white mb-6">
                {metric.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">{metric.value}</div>
              <h4 className="text-[10px] font-bold text-[#52525b] uppercase tracking-[0.2em] mb-4">{metric.label}</h4>
              <p className="text-[#71717a] text-sm leading-relaxed">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EngineeringMindset;
