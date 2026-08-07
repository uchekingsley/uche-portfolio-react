import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Database, GitMerge, Waves } from 'lucide-react';

const Skills = () => {
  const skills = [
    { 
      name: "Dart", 
      svg: <img src="https://www.svgrepo.com/show/353631/dart.svg" alt="Dart" className="w-6 h-6" /> 
    },
    { 
      name: "Flutter", 
      svg: <img src="https://www.svgrepo.com/show/373604/flutter.svg" alt="Flutter" className="w-6 h-6" /> 
    },
    { 
      name: "React Native", 
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    { 
      name: "TypeScript", 
      svg: (
        <svg viewBox="0 0 128 128" className="w-6 h-6">
          <path fill="#007acc" d="M12.5 12.5h103v103h-103z"/>
          <path fill="#fff" d="M71.7 89.2c-2.4 1.8-6.1 3.5-11 3.5-9.3 0-15.7-6.2-15.7-16.1s6.9-16.6 16.7-16.6c4.6 0 8.3 1.3 10.4 3l-3.3 5.4c-2-1.4-4.8-2.5-7.6-2.5-5.9 0-9.6 3.9-9.6 9.8 0 5.4 3.3 9.7 9 9.7 3.3 0 5.8-1.2 7.7-2.6l3.4 6.4zm10.7-32.3h22.4V63H95.7v30h-7V63H75.5v-6.1h6.9z"/>
        </svg>
      )
    },
    { 
      name: "JavaScript", 
      svg: (
        <svg viewBox="0 0 128 128" className="w-6 h-6">
          <path fill="#f7df1e" d="M12.5 12.5h103v103h-103z"/>
          <path fill="#000" d="M96.7 93.9c-3.1 3.2-8.5 6-15.1 6-10.4 0-17.1-5.7-19.6-13.8l7.6-3.8c1.6 5.3 5.9 9.9 12 9.9 6.2 0 9.8-3.4 9.8-7.9 0-10.1-17.3-8.1-17.3-21 0-7.3 5.7-13.1 14.8-13.1 6.5 0 10.9 2.5 13.9 6.3l-6.4 4.8c-2.3-2.9-5.4-4.5-8-4.5-3.8 0-6.1 2.4-6.1 5.3 0 8.3 17.3 7 17.3 20.9 0 7-4.6 12.8-12.9 12.8v-1.9zm-38.3 4h-8.8v-46h8.8v34.4c0 4.1 2 5.5 5 5.5s4.9-1.4 4.9-5.5v-4.9l7.7 2.1v2.8c0 9.6-5.8 13.6-12.6 13.6-7.1 0-13-4.1-13-13.6v-2.8l8-2.1v4.9z"/>
        </svg>
      )
    },
    { 
      name: "Firebase", 
      svg: (
        <svg viewBox="0 0 128 128" className="w-6 h-6">
          <path fill="#ffc107" d="M64.6 102.7l-42-42L12 96.6c-1.3 2.6.2 5.7 3.2 6.1l49.4 8z"/>
          <path fill="#ffa000" d="M22.6 60.7l13.4-38.4c.9-2.5 4.5-2.5 5.4 0l8.7 25 14.5-28.7c1-2 4.1-1.7 4.7.4L87 79 64.6 102.7z"/>
          <path fill="#ffca28" d="M12 96.6L41.3 47.3 87 79l26.9 26.6c1.8 1.8 1.2 5-1.2 6.1L64.6 128z"/>
        </svg>
      )
    },
    { 
      name: "Supabase", 
      svg: <img src="https://www.svgrepo.com/show/354413/supabase.svg" alt="Supabase" className="w-6 h-6" /> 
    },
    { 
      name: "Git", 
      svg: (
        <svg viewBox="0 0 128 128" className="w-6 h-6">
          <path fill="#f1502f" d="M59.9 5L5 59.9c-2.7 2.7-2.7 7.2 0 9.9l48.4 48.4c2.7 2.7 7.2 2.7 9.9 0l54.9-54.9c2.7-2.7 2.7-7.2 0-9.9L69.8 5c-2.7-2.7-7.2-2.7-9.9 0z"/>
          <path fill="#fff" d="M56.8 28.5c-4.2 0-7.7 3.4-7.7 7.7 0 3.3 2.1 6.1 5 7.1v17.4c-2.9 1-5 3.9-5 7.1 0 4.2 3.4 7.7 7.7 7.7s7.7-3.4 7.7-7.7c0-2.6-1.3-4.9-3.3-6.2V49l14 14c-1 1.7-1.4 3.7-1.1 5.9.6 3.6 3.7 6.3 7.3 6.7 4.6.4 8.5-3.3 8.5-7.8 0-3.6-2.5-6.7-6.1-7.6-1.7-.4-3.5-.1-4.9.7l-13.8-13.8v-1.1c1.8-1.4 3-3.6 3-6 0-4.2-3.4-7.7-7.7-7.7h-3.6zm0 4.4c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3-3.3-1.5-3.3-3.3 1.5-3.3 3.3-3.3zm20 30.7c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6c-1.9 0-3.5-1.5-3.6-3.4-.1-2.1 1.6-3.8 3.6-3.8zm-20 7.7c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3-3.3-1.5-3.3-3.3 1.5-3.3 3.3-3.3z"/>
        </svg>
      )
    },
    { 
      name: "Clean Architecture", 
      svg: <Layers size={24} className="text-primary" /> 
    },
    { 
      name: "Android Studio", 
      svg: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/330px-Android_Studio_icon_%282023%29.svg.png" alt="Android Studio" className="w-6 h-6 object-contain" /> 
    },
    { 
      name: "Android Development", 
      svg: (
        <svg viewBox="0 0 128 128" className="w-6 h-6">
          <path fill="#3DDC84" d="M37.3 43.1L28.2 27.5c-1-1.7-.3-3.9 1.4-4.8 1.7-1 3.9-.3 4.8 1.4l9.3 16C52.7 36 62.9 33.7 74 33.7c11.1 0 21.3 2.3 30.3 6.4l9.3-16c1-1.7 3.1-2.3 4.8-1.4 1.7 1 2.3 3.1 1.4 4.8L110.7 43.1c16.3 12 26.8 30.5 28.5 51.5H8.7C10.4 73.6 21 55.1 37.3 43.1zM43.7 75c3.2 0 5.7-2.6 5.7-5.7 0-3.2-2.6-5.7-5.7-5.7-3.2 0-5.7 2.6-5.7 5.7 0 3.2 2.6 5.7 5.7 5.7zm60.6 0c3.2 0 5.7-2.6 5.7-5.7 0-3.2-2.6-5.7-5.7-5.7-3.2 0-5.7 2.6-5.7 5.7 0 3.2 2.6 5.7 5.7 5.7z"/>
        </svg>
      )
    },
    { 
      name: "Gemini AI", 
      svg: <Sparkles size={24} className="text-blue-400" /> 
    },
    { 
      name: "Riverpod", 
      svg: <Waves size={24} className="text-blue-500" /> 
    },
    { 
      name: "Zustand", 
      svg: <Waves size={24} className="text-yellow-500" /> 
    },
    { 
      name: "SQLite", 
      svg: <Database size={24} className="text-blue-300" /> 
    },
    { 
      name: "CI/CD", 
      svg: <GitMerge size={24} className="text-orange-500" /> 
    }
  ];

  return (
    <section className="mb-32 overflow-hidden relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl font-bold">What I Use to Build Stuff 🛠️</h2>
      </motion.div>
      
      {/* Marquee Wrapper */}
      <div className="w-full relative flex overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Repeat skills twice for seamless loop */}
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex-none mx-4 bg-surface border border-gray-800 px-6 py-3 rounded-full flex items-center gap-3 hover:border-gray-600 transition-colors cursor-default">
              <div className="flex items-center justify-center w-6 h-6">
                {skill.svg}
              </div>
              <span className="text-gray-300 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
