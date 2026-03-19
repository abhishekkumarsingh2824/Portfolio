import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJs, FaGithub, FaGitAlt, FaJava, FaPython, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiFramer, SiCplusplus, SiJavascript, SiPhp, SiMysql
} from 'react-icons/si';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
        ease: [0.22, 1, 0.36, 1], // Apple-style easing
      },
    },
  };

  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "SQL", icon: <SiMysql /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "JavaScript", icon: <FaJs /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Postman", icon: <SiPostman /> }
      ]
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#52525b] uppercase mb-4">Competencies</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Tooling & <span className="text-gradient">Versatility</span>.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {categories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="space-y-10">
              <h4 className="text-white font-bold text-xl tracking-tight border-b border-white/5 pb-4">{category.title}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.02)" }}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 transition-all duration-300 group/item"
                  >
                    <div className="text-2xl text-[#a1a1aa] mb-3">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#52525b] group-hover/item:text-[#a1a1aa] font-bold transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
