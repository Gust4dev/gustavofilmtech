import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for premium feel
      className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const TextReveal: React.FC<{ children: ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + 0.3, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
