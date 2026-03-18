import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineBookOpen } from 'react-icons/hi';

const About = () => {
  const features = [
    {
      icon: <HiOutlineCode size={32} />,
      title: "MERN Stack Expert",
      desc: "Strong foundation in React, Node.js, Express, and MongoDB for full-stack apps."
    },
    {
      icon: <HiOutlineLightBulb size={32} />,
      title: "Problem Solver",
      desc: "Passionate about DSA, system design, and building scalable backend architectures."
    },
    {
      icon: <HiOutlineBookOpen size={32} />,
      title: "Continuous Learner",
      desc: "Constantly exploring new technologies, from Generative AI to modern UI/UX design."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Text Area */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 space-y-6 text-gray-400 leading-relaxed text-lg"
        >
          <p>
            Hello! I'm <strong className="text-white">Abhishek Singh</strong>, a passionate <strong className="text-blue-400">MERN Stack Developer</strong> dedicated to building high-performance, scalable, and secure web applications. 
          </p>
          <p>
            I have a strong foundation in Data Structures and Algorithms (DSA), System Design, and full-stack development. Over the years, I've cultivated a deep problem-solving mindset by tackling complex logical challenges, having solved over 400+ problems on LeetCode and actively participating in competitive programming contests.
          </p>
          <p>
            My goal is to craft digital products that offer not only intelligent backend architectures but also flawless, beautiful, and intuitive user experiences. When I'm not coding, I am learning about emerging technologies to stay ahead of the curve.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-[#11161d] border border-gray-800 hover:border-blue-500/50 hover:bg-gradient-to-br from-[#11161d] to-[#1a2333] transition-all hover:-translate-y-1 shadow-lg ${index === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
