import React from 'react';
import { NavigationProps } from '../types';
import { motion } from 'framer-motion';

export const Navigation: React.FC<NavigationProps> = ({ totalSlides, currentSlide, onNavigate }) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className="group relative flex items-center justify-center w-4 h-4"
          aria-label={`Go to slide ${index + 1}`}
        >
          <motion.div
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-brand-red' : 'bg-white/30 group-hover:bg-white/70'
            }`}
            animate={{
              scale: currentSlide === index ? 1.5 : 1,
            }}
          />
          {/* Tooltip on hover could go here, but keeping it minimal */}
        </button>
      ))}
    </div>
  );
};
