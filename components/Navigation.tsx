import React from 'react';
import { NavigationProps } from '../types';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Navigation: React.FC<NavigationProps> = ({ totalSlides, currentSlide, onNavigate }) => {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  const formatNumber = (num: number) => (num + 1).toString().padStart(2, '0');

  return (
    <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-8 bg-black/5 backdrop-blur-md px-6 py-3 rounded-full border border-black/10 shadow-lg group hover:bg-black/10 transition-all duration-300">
      <button
        onClick={() => !isFirst && onNavigate(currentSlide - 1)}
        className={`p-2 rounded-full transition-all duration-300 ${isFirst ? 'opacity-20 cursor-not-allowed' : 'hover:bg-brand-red hover:text-white text-gray-800'}`}
        disabled={isFirst}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="flex items-center gap-3 font-display font-bold text-gray-900 tracking-tighter" style={{ fontSize: '18px' }}>
        <motion.span 
          key={currentSlide}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-red"
        >
          {formatNumber(currentSlide)}
        </motion.span>
        <span className="opacity-30 text-black">/</span>
        <span className="opacity-50">{formatNumber(totalSlides - 1)}</span>
      </div>

      <button
        onClick={() => !isLast && onNavigate(currentSlide + 1)}
        className={`p-2 rounded-full transition-all duration-300 ${isLast ? 'opacity-20 cursor-not-allowed' : 'hover:bg-brand-red hover:text-white text-gray-800'}`}
        disabled={isLast}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
