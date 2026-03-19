import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaChartLine } from 'react-icons/fa';

const Achievements = () => {
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

  const achievements = [
    {
      icon: <FaCode size={20} />,
      title: "400+ DSA Problems Solved",
      platform: "LeetCode",
      desc: "Consistently sharpening problem-solving skills through algorithmic thinking and daily challenges."
    },
    {
      icon: <FaTrophy size={20} />,
      title: "Competitive Programming",
      platform: "Global Contests",
      desc: "Active participant in coding contests, building logic for optimal and high-performance execution."
    },
    {
      icon: <FaChartLine size={20} />,
      title: "System Architecture",
      platform: "Scale Projects",
      desc: "Designing robust infrastructures prioritizing scalability, performance, and maintainability."
    }
  ];

  return (
    <section id="achievements" className="py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#52525b] uppercase mb-4">Milestones</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Key <span className="text-gradient">Achievements</span>.
          </h3>
        </motion.div>

        <div className="max-w-4xl flex flex-col gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="group flex flex-col md:flex-row items-start gap-8 p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div className="p-4 rounded-2xl bg-white/5 text-[#a1a1aa] group-hover:bg-white group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-bold text-[#52525b] uppercase tracking-[0.2em]">{item.platform}</span>
                </div>
                <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
