import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "CodEx — Coding Platform",
      description: "Full-stack platform featuring real-time code execution, test case evaluation, and an AI assistant.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
      github: "https://github.com/abhishekkumarsingh2824/CodEx",
      demo: "https://github.com/abhishekkumarsingh2824/CodEx",
      featured: true
    },
    {
      title: "AspireX",
      description: "Mentorship platform connecting students with mentors, featuring scheduling and personalized paths.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://aspire-x.vercel.app/",
      demo: "https://aspire-x.vercel.app/"
    },
    {
      title: "MiniGit",
      description: "A version control system built with tree-based structures and hashing to support commits.",
      techStack: ["C++", "Java", "Data Structures"],
      github: "https://github.com/abhishekkumarsingh2824/MiniGit",
      demo: "https://github.com/abhishekkumarsingh2824/MiniGit"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Featured Projects
        </h2>
        <div className="w-12 h-0.5 bg-white/20 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group block relative bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 transition-all duration-500 hover:border-white/10"
          >
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <span className="text-[10px] font-bold text-[#52525b] uppercase tracking-[0.2em] block mb-4">
                  {project.featured ? "Featured Project" : "Application"}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/5 text-[#71717a] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-8 mt-auto pt-6 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-xs font-bold hover:opacity-70 transition-opacity flex items-center gap-2"
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-xs font-bold hover:opacity-70 transition-opacity flex items-center gap-2"
                >
                  <FaExternalLinkAlt size={14} /> Demo
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
