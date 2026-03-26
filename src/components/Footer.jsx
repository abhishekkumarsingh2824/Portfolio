import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl">
        <div className="text-[#52525b] text-[10px] font-bold tracking-[0.2em] uppercase">
          &copy; {currentYear} Abhishek Singh. Built with precision.
        </div>
        
        <div className="flex gap-8">
          <a href="https://github.com/abhishekkumarsingh2824" target="_blank" rel="noreferrer" className="text-[#52525b] hover:text-white transition-all duration-300 transform hover:scale-110" title="GitHub">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/abhishekkumarsingh28" target="_blank" rel="noreferrer" className="text-[#52525b] hover:text-white transition-all duration-300 transform hover:scale-110" title="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href="https://leetcode.com/u/abhishek10988/" target="_blank" rel="noreferrer" className="text-[#52525b] hover:text-white transition-all duration-300 transform hover:scale-110" title="LeetCode">
            <SiLeetcode size={18} />
          </a>
          <a href="mailto:abhishek10988266@gmail.com" className="text-[#52525b] hover:text-white transition-all duration-300 transform hover:scale-110" title="Email">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
