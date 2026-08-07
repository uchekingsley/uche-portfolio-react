import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

// Custom Hook for Typing Effect
const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, delay = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const type = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return text;
};

const Hero = () => {
  const roles = ["Mobile App Engineer", "Flutter Developer", "React Native Developer"];
  const animatedRole = useTypewriter(roles);

  return (
    <section id="about" className="flex flex-col items-center justify-center text-center mt-8 mb-32 pt-20 relative z-10">
      <h2 className="text-lg md:text-xl text-gray-400 mb-4 flex items-center gap-2">
        Hey <span className="text-2xl animate-bounce">👋</span> I'm
      </h2>
      <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
        UBAKA UCHE <span className="text-gray-400">KINGSLEY</span>
      </h1>
      
      <p className="text-xl md:text-2xl font-medium mt-2 mb-6 h-8 flex items-center justify-center">
        A passionate <span className="gradient-text ml-2 font-bold blinking-cursor">{animatedRole}</span>
      </p>

      <p className="max-w-2xl text-gray-400 leading-relaxed text-sm md:text-base mb-8">
        Flutter mobile developer with 2+ years of experience building and shipping cross-platform applications. 
        Specialized in strong UI/UX detail, pixel-accurate implementation, and secure mobile development practices.
      </p>

      <button className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primaryHover transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(232,62,140,0.4)]">
        Resume <Download size={18} />
      </button>
    </section>
  );
};

export default Hero;
