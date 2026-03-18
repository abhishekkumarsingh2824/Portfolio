import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaTrophy, FaServer } from 'react-icons/fa';

const EngineeringMindset = () => {
  return (
    <section id="mindset" className="py-24 relative z-10 border-y border-gray-800/80 bg-[#07090d]">
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Strategic Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">Core Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
              The Engineering <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Mindset.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Great products are built on solid foundational logic. I don&apos;t just stitch frameworks together; I engineer robust infrastructures prioritizing <strong className="text-white font-medium">performance</strong>, <strong className="text-white font-medium">scalability</strong>, and <strong className="text-white font-medium">maintainability</strong>.
            </p>
            <div className="h-px bg-gradient-to-r from-gray-800 to-transparent w-full"></div>
          </div>

          {/* Core Metrics Right Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
             {/* Background glow for data focus */}
             <div className="absolute inset-0 bg-blue-600/5 blur-[100px] -z-10 rounded-full"></div>

             {/* Metric 1 */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="bg-[#0b0e14] border border-gray-800 p-8 rounded-3xl hover:border-gray-600 transition-colors shadow-2xl group"
             >
               <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 mb-6 group-hover:scale-110 group-hover:bg-blue-900/40 group-hover:text-blue-400 transition-all">
                 <FaTrophy size={20} />
               </div>
               <div className="text-4xl font-black text-white mb-2 tracking-tighter group-hover:text-blue-400 transition-colors">400+</div>
               <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">DSA Problems Solved</h4>
               <p className="text-gray-500 text-sm leading-relaxed">
                 A relentless focus on optimization, time complexity, and competitive coding logic ensures that my backend solutions operate seamlessly at load.
               </p>
             </motion.div>

             {/* Metric 2 */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="bg-[#0b0e14] border border-gray-800 p-8 rounded-3xl hover:border-gray-600 transition-colors shadow-2xl group sm:translate-y-8"
             >
               <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 mb-6 group-hover:scale-110 group-hover:bg-purple-900/40 group-hover:text-purple-400 transition-all">
                 <FaServer size={20} />
               </div>
               <div className="text-4xl font-black text-white mb-2 tracking-tighter group-hover:text-purple-400 transition-colors">Systems</div>
               <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Microservices & Scaling</h4>
               <p className="text-gray-500 text-sm leading-relaxed">
                 Capable of shifting from monolithic to distributed systems. Expertise in Docker, caching bottlenecks, and database optimization.
               </p>
             </motion.div>

             {/* Metric 3 */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="bg-[#0b0e14] border border-gray-800 p-8 rounded-3xl hover:border-gray-600 transition-colors shadow-2xl group sm:col-span-2 mt-0 sm:mt-8"
             >
               <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 mb-6 group-hover:scale-110 group-hover:bg-green-900/40 group-hover:text-green-400 transition-all">
                 <FaTerminal size={20} />
               </div>
               <div className="text-4xl font-black text-white mb-2 tracking-tighter group-hover:text-green-400 transition-colors">Full Stack</div>
               <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">End-to-End Ownership</h4>
               <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                 Bridging the gap between UI perfection and backend resilience. Delivering full production life-cycles without relying on isolated silos.
               </p>
             </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringMindset;
