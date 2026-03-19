import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
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

  const certifications = [
    {
      title: "Oracle AI Foundation Associate",
      issuer: "Oracle",
      date: "2024",
      badge: "AI/ML"
    },
    {
      title: "UI/UX Design",
      issuer: "CipherSchool",
      date: "2023",
      badge: "Design"
    },
    {
      title: "Generative AI",
      issuer: "Udemy",
      date: "2023",
      badge: "AI"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      badge: "Frontend"
    }
  ];

  return (
    <section id="certifications" className="py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#52525b] uppercase mb-4">Credentials</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-gradient">Validation</span>.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col items-start group"
            >
              <div className="mb-6 text-[#a1a1aa] group-hover:text-white transition-colors duration-500">
                <FaCertificate size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                {cert.title}
              </h4>
              <p className="text-[#71717a] text-xs font-medium mb-8 uppercase tracking-widest">{cert.issuer}</p>
              <div className="flex w-full justify-between items-center pt-6 border-t border-white/5 mt-auto">
                <span className="text-[10px] font-bold text-[#52525b] uppercase tracking-widest">{cert.date}</span>
                <span className="text-[10px] font-bold text-[#a1a1aa] border border-white/5 px-3 py-1 rounded-full uppercase tracking-widest">{cert.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
