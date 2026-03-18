import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaGitAlt
} from 'react-icons/fa';
import { 
  SiCplusplus, SiJavascript, SiPhp, SiMysql, SiTailwindcss, SiExpress, SiMongodb, SiPostman
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
        { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ]
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      ]
    },
    {
      title: "Tools & Core CS",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "DSA", icon: <span className="text-2xl font-bold text-blue-400">{'{}'}</span> },
        { name: "OOP", icon: <span className="text-xl font-bold text-purple-400">()</span> },
        { name: "OS & DBMS", icon: <span className="text-lg font-bold text-teal-400">⚙</span> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl -z-10 pointer-events-none transform -translate-y-1/2"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Technical Skills
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="bg-[#11161d] rounded-2xl p-6 border border-gray-800 hover:border-blue-500/30 transition-colors shadow-lg relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-2xl rounded-bl-full transition-opacity opacity-0 group-hover:opacity-100"></div>
            
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 border-b border-gray-800 pb-3">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0d1117] border border-gray-800 hover:border-gray-600 hover:bg-gray-800/50 transition-all group/item"
                >
                  <div className="text-3xl mb-2 group-hover/item:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-xs text-center text-gray-400 font-medium group-hover/item:text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
