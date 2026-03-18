import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBolt, FaRobot, FaLayerGroup } from 'react-icons/fa';

const FeaturedProject = () => {
  return (
    <section id="featured" className="py-24 relative z-10">
      
      {/* Background structural glow */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] -z-10 pointer-events-none transform -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex items-center gap-4">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">Featured Case Study</h2>
          <div className="flex-1 h-px bg-gray-800/80"></div>
        </div>

        {/* Complete Product Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#0d1017] border border-gray-800 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/5 group"
        >
          {/* subtle interior glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
            
            {/* Visual Side (Left) */}
            <div className="relative h-[400px] lg:h-auto bg-[#141923] overflow-hidden flex items-center justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-800 lg:min-h-[600px]">
              
              {/* Product Representation */}
              <div className="w-full h-full relative rounded-2xl border border-gray-700 bg-[#0a0d14] shadow-2xl flex flex-col overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                {/* Simulated IDE / Platform Header */}
                <div className="h-10 bg-[#161b22] border-b border-gray-800 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="mx-auto text-xs text-gray-500 font-mono">CodEx Execution Engine</div>
                </div>
                {/* Content Area showing real-time impact */}
                <div className="flex-1 p-6 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/40 via-[#0a0d14] to-[#0a0d14]">
                  <h3 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 opacity-20 transform -rotate-12 select-none group-hover:opacity-40 transition-opacity duration-700">CodEx</h3>
                </div>
                
                {/* Floating Impact Cards */}
                <div className="absolute bottom-6 right-6 bg-blue-500/10 border border-blue-500/20 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-3 animate-[y-bounce_3s_ease-in-out_infinite]">
                  <span className="flex h-2.5 w-2.5 relative">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  <span className="text-xs font-mono text-blue-300">Latency: 12ms</span>
                </div>
              </div>
            </div>

            {/* Narrative Side (Right) */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"><FaBolt size={10} /> REAL-TIME</span>
                <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full"><FaRobot size={10} /> AI HINTS</span>
                <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider px-3 py-1 bg-gray-800 text-gray-300 border border-gray-700 rounded-full"><FaLayerGroup size={10} /> FULL STACK</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">CodEx Platform</h3>
              
              <div className="space-y-6 text-gray-400 text-base md:text-lg font-light leading-relaxed">
                <div>
                  <strong className="text-gray-200 font-semibold block mb-1">The Problem:</strong>
                  Traditional coding platforms suffer from static execution environments and lack personalized intervention for stuck developers.
                </div>
                <div>
                  <strong className="text-gray-200 font-semibold block mb-1">The Solution:</strong>
                  Engineered a production-level WebSockets-based infrastructure allowing millisecond-latency code compilation, perfectly paired with a context-aware LLM for on-demand hints.
                </div>
                <div>
                  <strong className="text-gray-200 font-semibold block mb-1">The Impact:</strong>
                  Handled concurrent live contest users effortlessly while maintaining absolute JWT-enforced security boundaries and clean scalable microservices.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex items-center gap-4">
                <a href="#" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                  Live Product <FaExternalLinkAlt size={14} />
                </a>
                <a href="https://github.com/AbhishekSingh" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#161b22] border border-gray-700 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  GitHub <FaGithub size={16} />
                </a>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProject;
