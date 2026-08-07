import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const jobs = [
    { role: "Flutter Mobile Developer", company: "Wisemonie", desc: "Built and shipped fintech app to Play Store. Implemented AI features, push notifications, offline storage, and secure local storage with certificate pinning." },
    { role: "Flutter Mobile Developer", company: "Superstore Apps", desc: "Built core screens, Riverpod state management, and the complete 'More Tab' including profile, wallet, BNPL, messaging, and order tracking across Driver and Main apps." },
    { role: "React Native Mobile Dev (Intern)", company: "Hustle Balms Studios", desc: "Architected auth system and built social media news feed in an Agile team." },
    { role: "Flutter Mobile Dev Intern", company: "HNG", desc: "Developed 3 production-ready apps: Portfolio, Tech Quiz, and Smart Utility App." }
  ];

  const education = [
    { deg: "Bachelor of Arts, History", org: "University of Ibadan", year: "2026" },
    { deg: "Mobile App Dev Intern Certificate", org: "HNG", year: "2026" },
    { deg: "Flutter App Development", org: "Udemy", year: "2025" },
    { deg: "AI Fundamentals", org: "BAFAI Institute", year: "2025" }
  ];

  return (
    <section id="experience" className="mb-32 pt-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
          Work & Education <GraduationCap className="text-primary" />
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">
          An overview of my professional experience and academic journey, showcasing the skills and knowledge I've gained along the way.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-center relative">
        {/* Center Line for desktop (hidden on mobile for stacked layout) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2"></div>

        {/* Work Experience Column */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-8 flex items-center gap-2 text-primary border-b border-gray-800 pb-2">
            <Briefcase size={20} /> Experience
          </h3>
          <div className="space-y-10 relative">
            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-3 top-2 bottom-0 w-px bg-gray-800"></div>

            {jobs.map((job, i) => (
              <div key={i} className="relative pl-10 md:pl-0 md:pr-10 md:text-right group">
                <div className="absolute left-0 md:left-auto md:-right-2 top-1.5 w-6 h-6 rounded-full bg-surface border-4 border-background flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:timeline-dot transition-all"></div>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{job.role}</h4>
                <p className="text-sm font-semibold text-gray-300 mb-2">{job.company}</p>
                <p className="text-sm text-gray-500 leading-relaxed bg-surface/50 p-4 rounded-lg md:inline-block w-full">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="flex-1 mt-12 md:mt-0">
          <h3 className="text-xl font-semibold mb-8 flex items-center gap-2 text-purple-400 border-b border-gray-800 pb-2 md:justify-start">
            <GraduationCap size={20} /> Education & Certs
          </h3>
          <div className="space-y-10 relative">
            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-3 top-2 bottom-0 w-px bg-gray-800"></div>
            
            {education.map((edu, i) => (
              <div key={i} className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface border-4 border-background flex items-center justify-center z-10 md:-left-[28px]">
                  <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:shadow-[0_0_10px_#a855f7] transition-all"></div>
                </div>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-2 border border-primary/20">
                  {edu.year}
                </div>
                <h4 className="text-lg font-bold text-white">{edu.deg}</h4>
                <p className="text-sm text-gray-400">{edu.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
