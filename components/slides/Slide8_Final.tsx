import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';

export const Slide8_Final: React.FC = () => {
  return (
    <SlideWrapper className="bg-black text-white">
      <div className="w-full h-full flex flex-col items-center justify-center">
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
        >
             {/* Logo Container */}
             <div className="relative mb-8">
                {/* Optional Glow */}
                <div className="absolute inset-0 bg-brand-red/20 blur-[100px] rounded-full" />
                
                {/* Standard Logo Image */}
                <img 
                    src="/images/logoF.png" 
                    alt="FilmTech Logo" 
                    className="h-32 md:h-48 object-contain relative z-10"
                />
             </div>

             <h2 className="text-3xl md:text-5xl font-display font-bold tracking-widest uppercase text-center">
                 <span className="text-brand-red">F</span>ilmTech
             </h2>
        </motion.div>

      </div>
    </SlideWrapper>
  );
};
