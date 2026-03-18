import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaChartLine } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaCode size={24} className="text-blue-400" />,
      title: "400+ DSA Problems Solved",
      platform: "LeetCode",
      desc: "Consistently sharpening problem-solving skills through daily challenges and algorithmic thinking."
    },
    {
      icon: <FaTrophy size={24} className="text-yellow-400" />,
      title: "Competitive Programming",
      platform: "Various Platforms",
      desc: "Active participant in coding contests, building logic for optimal and fast execution."
    },
    {
      icon: <FaChartLine size={24} className="text-green-400" />,
      title: "Optimization & Architecture",
      platform: "Full-Stack Projects",
      desc: "Demonstrated strong analytical skills by designing scalable systems with high performance."
    }
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Achievements
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#11161d] border border-gray-800 p-6 rounded-2xl flex items-start gap-6 hover:border-blue-500/30 hover:bg-gradient-to-r from-[#11161d] to-[#161d27] transition-all shadow-md group"
          >
            <div className="p-4 rounded-full bg-[#0d1117] border border-gray-800 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-blue-500 font-medium mb-2">{item.platform}</p>
              <p className="text-gray-400 text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
