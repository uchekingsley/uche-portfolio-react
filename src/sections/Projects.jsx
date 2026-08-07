import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCarousel from '../components/ProjectCarousel';

// Import local images directly for reliable routing in Vite
import wisemonie1 from '../assets/images/wisemonie1.png';
import wisemonie2 from '../assets/images/wisemonie2.png';
import wisemonie3 from '../assets/images/wisemonie3.png';

import frontletHomescreen from '../assets/images/frontlet_homescreen.png';
import frontletLibrary from '../assets/images/frontlet_library.png';
import superstoreMain from '../assets/images/superstore_main.png';
import superstoreDriver from '../assets/images/superstore_driver.png';

const Projects = () => {
  const projectsList = [
    {
      title: "Wisemonie Fintech App",
      desc: "Production fintech application published on the Play Store. Features AI-powered tools, secure local storage, offline data handling, push notifications, and analytics.",
      tags: ['Flutter', 'Dart', 'Security', 'Firebase'],
      images: [wisemonie1, wisemonie2, wisemonie3],
      autoPlay: true,
      fillSpace: true,
      gradient: "from-blue-900/50 to-purple-900/50",
      buttonText: "Play Store",
      buttonIcon: ExternalLink,
      link: "https://play.google.com" // You can update this to the real Play Store link
    },
    {
      title: "Frontlet Ops",
      isDev: true,
      desc: "Multi-purpose church operations app utilizing AI and offline-first data storage. Includes web scraping, grading tools, OAuth 2.0 authentication, and a store module.",
      tags: ['Flutter', 'OAuth 2.0', 'Offline-First', 'AI'],
      images: [frontletHomescreen, frontletLibrary],
      autoPlay: true,
      fillSpace: true,
      gradient: "from-pink-900/50 to-orange-900/50",
      buttonText: "GitHub",
      buttonIcon: Github,
      link: "https://github.com/uchekingsley"
    },
    {
      title: "Superstore Main App",
      desc: "Modern e-commerce & delivery app offering users a seamless shopping experience from product discovery and cart management to real-time order tracking and secure digital receipt generation.",
      tags: ['Flutter', 'Riverpod', 'E-Commerce', 'Order Tracking'],
      images: [superstoreMain],
      autoPlay: false,
      fillSpace: true,
      gradient: "from-green-900/50 to-teal-900/50",
      buttonText: "GitHub",
      buttonIcon: Github,
      link: "https://github.com/uchekingsley/Superstore-main"
    },
    {
      title: "Superstore Driver",
      desc: "Cross-platform app for delivery partners to manage operations, track daily earnings, navigate active orders, and handle secure financial payouts in real-time.",
      tags: ['Flutter', 'Riverpod', 'Maps API', 'Real-time'],
      images: [superstoreDriver],
      autoPlay: false,
      fillSpace: true,
      gradient: "from-yellow-900/50 to-red-900/50",
      buttonText: "GitHub",
      buttonIcon: Github,
      link: "https://github.com/uchekingsley/Superstore-main"
    }
  ];

  return (
    <section id="projects" className="mb-32 pt-20 overflow-hidden relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 mb-4">
          Where Code Meets Creativity 🎨 💻
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A selection of production-ready apps and personal projects showcasing my technical capability and design focus.
        </p>
      </div>

      {/* Framer Motion Staggered Grid */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projectsList.map((project, i) => {
          const ButtonIcon = project.buttonIcon;
          return (
            <motion.div 
              key={i}
              // Slide in from left/right on entry, lift and glow on hover
              variants={{
                hidden: { opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 30 },
                show: { 
                  opacity: 1, 
                  x: 0, 
                  y: 0, 
                  transition: { type: "spring", stiffness: 60, damping: 15 } 
                }
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.015,
                borderColor: "rgba(232, 62, 140, 0.4)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(232, 62, 140, 0.15)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-surface rounded-2xl overflow-hidden border border-gray-800 transition-all group flex flex-col"
            >
              <div className="h-72 md:h-80 relative overflow-hidden">
                <ProjectCarousel 
                  title={project.title} 
                  autoPlay={project.autoPlay}
                  images={project.images} 
                  fillSpace={project.fillSpace}
                />
              </div>
              <div className="p-8 flex-1 flex flex-col z-10 bg-surface">
                <h3 className="text-2xl font-bold mb-2">
                  {project.title}
                  {project.isDev && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded ml-2 align-middle">In Dev</span>
                  )}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-gray-800 text-gray-300 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 border border-gray-700 py-2 rounded-lg hover:bg-gray-800 hover:border-primary/50 transition-colors text-sm font-semibold text-white text-center"
                  >
                    {project.buttonText} <ButtonIcon size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
