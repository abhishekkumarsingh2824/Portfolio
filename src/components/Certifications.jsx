import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle AI Foundation Associate",
      issuer: "Oracle",
      date: "Recent",
      badge: "AI/ML"
    },
    {
      title: "UI/UX Design",
      issuer: "CipherSchool",
      date: "Completed",
      badge: "Design"
    },
    {
      title: "Generative AI",
      issuer: "Udemy",
      date: "Completed",
      badge: "AI"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Completed",
      badge: "Frontend"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Certifications
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#11161d] border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:bg-[#151c24] transition-all group flex flex-col items-center shadow-lg"
          >
            <div className="mb-4 text-blue-400 group-hover:-translate-y-2 transition-transform duration-300">
              <FaCertificate size={40} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 flex-grow">{cert.issuer}</p>
            <div className="flex w-full justify-between items-center pt-4 border-t border-gray-800 text-xs">
              <span className="text-gray-500">{cert.date}</span>
              <span className="bg-blue-900/40 text-blue-400 px-2 py-1 rounded-md">{cert.badge}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
