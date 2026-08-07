import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-900/40 bg-background/80 backdrop-blur-md">
        <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <div className="text-2xl font-bold italic tracking-tighter">
            Uche<span className="text-primary">.Dev</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</a>
            <a 
              href="#contact"
              className="px-4 py-2 bg-primary/20 text-primary font-semibold rounded-full border border-primary/30 hover:bg-primary hover:text-white transition-colors text-sm"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Menu (Rendered outside the header context to prevent mobile browser rendering issues) */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out flex flex-col items-center justify-center md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className={`flex flex-col items-center gap-8 transform transition-transform duration-500 delay-100 ${isMenuOpen ? 'translate-y-0' : 'translate-y-10'}`}>
          {['About', 'Experience', 'Services', 'Projects', 'Contact'].map((item, i) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={handleLinkClick}
              className="text-2xl font-semibold text-gray-300 hover:text-primary transition-colors tracking-wide"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={handleLinkClick}
            className="mt-4 px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primaryHover transition-colors w-48 text-center shadow-[0_0_20px_rgba(232,62,140,0.3)]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
