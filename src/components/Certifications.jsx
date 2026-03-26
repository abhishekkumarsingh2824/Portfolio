import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

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
      badge: "AI/ML",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=02260C5B981FBDEB46797D21733B6E73ABB96C2E5C547B0F27A3F1530805268F"
    },
    {
      title: "UI/UX Design",
      issuer: "CipherSchool",
      date: "2023",
      badge: "Design",
      link: "https://www.cipherschools.com/certificate/preview?id=688db447cec61f8eee565d64"
    },
    {
      title: "Generative AI",
      issuer: "Udemy",
      date: "2023",
      badge: "AI",
      link: "https://drive.google.com/file/d/1mmOVSugl49gsYQ8StwbH5F086QEgO1dN/view?usp=drive_link"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      badge: "Frontend",
      link: "https://drive.google.com/file/d/1gMyCM29bInZ4RfqKz1yW8RJzWCvCM5hD/view?usp=sharing"
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
              className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col items-start group relative"
            >
              <div className="w-full flex justify-between items-start mb-6">
                <div className="text-[#a1a1aa] group-hover:text-white transition-colors duration-500">
                  <FaCertificate size={24} />
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#52525b] hover:text-white transition-colors duration-300"
                    title="View Certificate"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
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
