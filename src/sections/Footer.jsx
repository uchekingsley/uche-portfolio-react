import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-surface/30 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold italic tracking-tighter text-gray-300">
          Ubaka<span className="text-primary">.</span>Uche
        </div>
        
        <div className="text-center md:text-left text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved. Designed with React & Tailwind CSS.
        </div>

        <div className="flex gap-4">
          <a 
            href="https://github.com/uchekingsley" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors border border-gray-800"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/uche-ubaka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-colors border border-gray-800"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
