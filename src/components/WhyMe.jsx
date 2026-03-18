import React from 'react';
import { motion } from 'framer-motion';

const WhyMe = () => {
  return (
    <section id="whyme" className="py-24 relative z-10 overflow-hidden bg-[#0d1017]">
      
      {/* Absolute design aesthetic */}
      <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Partner With Me?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-10 rounded-3xl bg-gradient-to-b from-[#161b22] to-[#0d1117] border border-gray-800 shadow-xl group"
          >
            <div className="text-3xl mb-6 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all">⚡</div>
            <h3 className="text-xl font-bold text-white mb-4">Fast Learner</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I absorb technical documentation and emerging paradigms at an exceptional rate. If an architecture requires a new language or framework tomorrow, I&apos;ll be committing production code by the afternoon.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.1 }}
            className="p-10 rounded-3xl bg-gradient-to-b from-[#161b22] to-[#0d1117] border border-gray-800 shadow-xl group"
          >
            <div className="text-3xl mb-6 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all">🧩</div>
            <h3 className="text-xl font-bold text-white mb-4">System Thinking</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I don&apos;t just fix isolated bugs; I analyze the cascading impact on the broader system. I architect applications mapping from client inputs all the way to database shards.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl bg-gradient-to-b from-[#161b22] to-[#0d1117] border border-gray-800 shadow-xl group"
          >
            <div className="text-3xl mb-6 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all">🚀</div>
            <h3 className="text-xl font-bold text-white mb-4">End-to-End Delivery</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I take extreme ownership from the initial Jira ticket to the final CI/CD pipeline deployment. I ship consistently without requiring heavy oversight or micro-management.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyMe;
