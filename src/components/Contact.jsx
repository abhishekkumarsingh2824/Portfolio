import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

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

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(form.current);
    const data = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        const errorData = await response.json();
        console.error('Server error:', errorData.error);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Connection error (is the server running?):', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-24">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#52525b] uppercase mb-4">Connection</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Get in <span className="text-gradient">Touch</span>.
          </h3>
        </motion.div>

        <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-12 space-y-12 mb-12"
          >
            <div>
              <p className="text-[#a1a1aa] text-lg leading-relaxed max-w-2xl">
                I'm currently specialized in building <span className="text-white font-medium">high-performance web systems</span>. Open to new opportunities and technical collaborations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-[#a1a1aa] group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-[#52525b] font-bold tracking-widest uppercase mb-1">Email</p>
                  <a href="mailto:abhishek10988266@gmail.com" className="text-white font-medium hover:opacity-70 transition-opacity">
                    abhishek10988266@gmail.com
                  </a>
                </div>
              </div>
              <div className="group flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-[#a1a1aa] group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-[#52525b] font-bold tracking-widest uppercase mb-1">Based In</p>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="lg:col-span-12"
          >
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-[#52525b] uppercase tracking-widest ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-[#3f3f46]"
                  placeholder="Name"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-[#52525b] uppercase tracking-widest ml-1">Your Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-[#3f3f46]"
                  placeholder="Email"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <label className="text-[10px] font-bold text-[#52525b] uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows="6"
                  className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-[#3f3f46] resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <div className="md:col-span-2 mt-4 flex items-center gap-8">
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-[#f4f4f5] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <span className="text-white text-xs font-bold uppercase tracking-widest animate-pulse">
                    Sent Successfully.
                  </span>
                )}
                {status === 'error' && (
                  <span className="text-red-500 text-xs font-bold uppercase tracking-widest animate-pulse">
                    Error! Please try again.
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
