import React from 'react';
import { motion } from 'framer-motion';

// Simplified LoadingSlide with Fade In
// Adds a gentle opacity transition to avoid the "flashbang" effect when the white screen appears.

export const LoadingSlide: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 w-full h-full bg-white z-50" 
    />
  );
};
