import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Code2, ServerCog, Zap, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    { title: "Cross-Platform App Dev", icon: Smartphone, desc: "Building natively compiled applications for mobile from a single codebase using Flutter and React Native." },
    { title: "Secure Architecture", icon: ShieldCheck, desc: "Implementing Clean Architecture, secure local storage, OAuth 2.0, certificate pinning, and state management." },
    { title: "UI/UX Engineering", icon: Code2, desc: "Translating pixel-perfect Figma designs into responsive layouts with complex animations and micro-interactions." },
    { title: "API Integration", icon: ServerCog, desc: "Seamlessly connecting mobile applications to complex RESTful APIs, handling WebSockets, and managing offline-first data synchronization." },
    { title: "Performance Optimization", icon: Zap, desc: "Profiling and refactoring apps to ensure 60fps rendering, low memory footprint, and fast startup times across all devices." }
  ];

  return (
    <section id="services" className="mb-32 pt-20 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 mb-4">
          What I Do <Settings className="text-primary animate-[spin_4s_linear_infinite]" />
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Here are the core engineering services I provide. I focus on building robust, scalable, and visually stunning mobile applications.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, i) => {
          const IconComponent = service.icon;
          return (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-surface/50 border border-gray-800 p-8 rounded-2xl hover:border-primary/50 transition-colors group text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <IconComponent size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
