import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Make sure to replace these with your actual EmailJS credentials
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    setTimeout(() => {
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(''), 5000);
    }, 1500); // Simulated delay for demo
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl -z-10 pointer-events-none transform -translate-y-1/2"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Get In Touch
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
            <p className="text-gray-400 leading-relaxed">
              Have a project in mind or just want to say hi? I'm currently open to new opportunities 
              and collaborations. Feel free to reach out via the form or my personal email!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#11161d] border border-gray-800 flex items-center justify-center text-blue-400">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium tracking-wide">EMAIL</p>
                <a href="mailto:abhishek10988266@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                  abhishek10988266@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#11161d] border border-gray-800 flex items-center justify-center text-green-400">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium tracking-wide">LOCATION</p>
                <p className="text-white">India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form ref={form} onSubmit={sendEmail} className="bg-[#11161d] border border-gray-800 p-8 rounded-3xl shadow-xl flex flex-col gap-6 relative">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Your Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
              <textarea 
                name="message" 
                required 
                rows="5"
                className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25 mt-2"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center font-medium mt-2 animate-pulse">
                Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
