import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';

const BuildStack = () => {
  return (
    <section id="stack" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="mb-16 md:mb-24 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-800/80"></div>
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase text-center">Tech Stack Context</h2>
          <div className="flex-1 h-px bg-gray-800/80"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* React Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative bg-[#0a0d14] rounded-3xl p-8 border border-gray-800 overflow-hidden flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-[#161b22] to-black border border-gray-700 rounded-2xl flex items-center justify-center text-blue-400 text-3xl mb-8 group-hover:scale-110 transition-transform">
                <SiReact />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">React</h3>
              <p className="text-gray-400 font-medium">for Scalable UIs</p>
            </div>
            <p className="text-sm text-gray-500 mt-6 leading-relaxed">
              Crafting modular, deeply interactive interfaces with rigorous state management and seamless Framer Motion integrations.
            </p>
          </motion.div>

          {/* Node Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.1 }}
            className="group relative bg-[#0a0d14] rounded-3xl p-8 border border-gray-800 overflow-hidden flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl -z-10 group-hover:bg-green-500/20 transition-colors duration-500"></div>
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-[#161b22] to-black border border-gray-700 rounded-2xl flex items-center justify-center text-green-500 text-3xl mb-8 group-hover:scale-110 transition-transform">
                <SiNodedotjs />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Node.js</h3>
              <p className="text-gray-400 font-medium">for Backend Systems</p>
            </div>
            <p className="text-sm text-gray-500 mt-6 leading-relaxed">
              Architecting secure, highly-concurrent API layers and WebSockets tailored for 0-latency enterprise requirements.
            </p>
          </motion.div>

          {/* Mongo Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.2 }}
            className="group relative bg-[#0a0d14] rounded-3xl p-8 border border-gray-800 overflow-hidden flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-[#161b22] to-black border border-gray-700 rounded-2xl flex items-center justify-center text-emerald-500 text-3xl mb-8 group-hover:scale-110 transition-transform">
                <SiMongodb />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">MongoDB</h3>
              <p className="text-gray-400 font-medium">for Data Modeling</p>
            </div>
            <p className="text-sm text-gray-500 mt-6 leading-relaxed">
              Designing flexible, index-optimized Document schemas capable of evolving dynamically alongside fast-paced SaaS products.
            </p>
          </motion.div>

          {/* Additional secondary block spanning across bottom */}
          <motion.div className="md:col-span-3 mt-4 pt-10 border-t border-gray-800/60 flex flex-wrap justify-between items-center gap-6">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Secondary Arsenal</span>
            <div className="flex gap-6 items-center">
               <div className="flex items-center gap-2 text-gray-400 hover:text-blue-400"><SiTypescript size={20}/> <span className="font-medium text-sm">TypeScript</span></div>
               <div className="flex items-center gap-2 text-gray-400 hover:text-teal-400"><SiTailwindcss size={20}/> <span className="font-medium text-sm">Tailwind</span></div>
               <div className="flex items-center gap-2 text-gray-400"><span className="font-medium text-sm">Docker & REST APIs</span></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BuildStack;
