import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "CodEx — Coding Platform",
      description: "Full-stack LeetCode-style platform featuring real-time code execution, test case evaluation, live contest leaderboards, and an AI assistant for dynamic hints.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT", "AI APIs"],
      github: "https://github.com/abhishekkumarsingh2824/CodEx",
      demo: "#",
      featured: true
    },
    {
      title: "AspireX — Mentorship Platform",
      description: "A comprehensive platform connecting students with mentors, including a scheduling system, user management, and personalized learning paths.",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      github: "https://aspire-x.vercel.app/",
      demo: "https://aspire-x.vercel.app/"
    },
    {
      title: "MiniGit — Version Control System",
      description: "A Git-like version control system built with tree-based structures and hashing to support commits, branching, and repository history.",
      techStack: ["C++", "Java", "Data Structures"],
      github: "https://github.com/abhishekkumarsingh2824/MiniGit",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-[#11161d] rounded-2xl border ${project.featured ? 'border-blue-500/30' : 'border-gray-800'} overflow-hidden flex flex-col hover:border-blue-500 transition-all shadow-lg group`}
          >
            {/* Project Image Placeholder */}
            <div className="h-48 bg-[#0d1117] relative overflow-hidden flex items-center justify-center border-b border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] to-transparent z-10"></div>
              <span className="text-gray-600 font-mono text-xl group-hover:scale-110 transition-transform duration-500">{'{'} {project.title.split(' ')[0]} {'}'}</span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-900/20 text-blue-300 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors"
                >
                  <FaGithub size={18} /> Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-400 flex items-center gap-2 text-sm transition-colors"
                >
                  <FaExternalLinkAlt size={16} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
