import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#090d13] border-t border-gray-800 py-8 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm">
          &copy; {currentYear} Abhishek Singh. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/AbhishekSingh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/AbhishekSingh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:abhishek10988266@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
