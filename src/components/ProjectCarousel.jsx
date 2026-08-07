import React, { useState, useEffect } from 'react';
import { Smartphone, Sparkles } from 'lucide-react';

const ProjectCarousel = ({ images, title, autoPlay = false, fillSpace = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  const isPlaceholder = (src) => {
    return typeof src === 'string' && (src.includes('placehold.co') || src.includes('placeholder'));
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-t-2xl group cursor-pointer bg-[#0a0b10] border-b border-gray-800/50">
      {/* Subtle grid background overlay (only when not filled) */}
      {!fillSpace && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>
      )}
      
      {/* Images Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full z-10 relative"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`min-w-full h-full flex items-center justify-center relative ${
              fillSpace ? 'p-0' : 'p-4'
            }`}
          >
            {isPlaceholder(src) ? (
              // Premium styled placeholder mockup
              <div className="w-40 h-full max-h-56 bg-surface border border-gray-800 rounded-2xl p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                <div className="flex justify-between items-center text-gray-500">
                  <Smartphone size={16} />
                  <Sparkles size={12} className="text-primary/40" />
                </div>
                <div className="flex flex-col gap-2 my-auto text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                    <Smartphone size={18} />
                  </div>
                  <p className="text-xs font-bold text-gray-300 tracking-tight">{title}</p>
                  <p className="text-[10px] text-gray-600">Interface Mockup</p>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-primary/40"></div>
                </div>
              </div>
            ) : (
              // Real mockup image
              <img 
                src={src} 
                alt={`${title} screenshot ${index + 1}`} 
                className={`transition-transform duration-500 ${
                  fillSpace 
                    ? 'w-full h-full object-contain group-hover:scale-105' 
                    : 'w-auto h-full max-h-56 object-contain rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:scale-105'
                }`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-3.5' : 'bg-gray-700 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
