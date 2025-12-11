import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Star } from 'lucide-react';

const IMAGES = [
  '/images/academy.jpeg',
  '/images/academy1.jpeg',
  '/images/academy2.jpeg',
  '/images/academy3.jpeg',
  '/images/academy4.jpeg',
];

export const Slide9a_Students: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);

    // Carousel Timer (2 seconds)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % IMAGES.length);
        }, 3500); // 3.5s (2s wait + 1.5s transition feel) - adjusted for "suave e lenta"
        return () => clearInterval(timer);
    }, []);

    return (
        <SlideWrapper className="bg-white overflow-hidden">
            {/* Background Effects (Green Glows - "Brilhos") */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                 {/* Top Right Green Glow */}
                <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[120px]" />
                {/* Bottom Left Green Glow */}
                <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px]" />
                 {/* Center Gold/Amber subtle hint */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-200/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10">
                
                {/* Left Side: Text Content */}
                <div className="w-full md:w-1/3 flex flex-col justify-center space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                         <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full mb-4 shadow-sm">
                            <Users className="w-4 h-4 text-emerald-600" />
                            <span className="text-emerald-800 font-bold uppercase tracking-widest text-[10px]">
                                Comunidade
                            </span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-none tracking-tight">
                            Quem faz a <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
                                Máquina Girar.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-gray-500 text-sm md:text-base leading-relaxed"
                    >
                        Não construímos apenas uma marca. Construímos um movimento.
                        <br/>Pessoas reais que transformaram seus negócios através da nossa metodologia.
                    </motion.p>
                    
                    {/* The "1200 Alunos" Badge */}
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex items-center gap-4 mt-4"
                    >
                         <div className="relative">
                            <div className="absolute inset-0 bg-amber-400 blur-xl opacity-20 rounded-full" />
                            <div className="relative bg-white border border-amber-100 shadow-xl rounded-2xl p-4 flex items-center gap-5">
                                <div className="bg-amber-50 p-3 rounded-xl border border-amber-100 text-amber-600">
                                    <Star className="w-8 h-8 fill-amber-500 text-amber-500" />
                                </div>
                                <div>
                                    <span className="block text-4xl font-black text-gray-900 leading-none">
                                        +1.200
                                    </span>
                                    <span className="text-xs font-bold text-amber-600/80 uppercase tracking-widest">
                                        Alunos Formados
                                    </span>
                                </div>
                            </div>
                         </div>
                    </motion.div>
                </div>

                {/* Right Side: The Carousel */}
                <div className="w-full md:w-3/5 h-[50vh] md:h-[70vh] relative min-h-[400px]">
                    {/* Frame/Container */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100"
                    >
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={currentImage}
                                src={IMAGES[currentImage]}
                                alt="Student Success"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ 
                                    duration: 2, // "Suave e lenta"
                                    ease: "easeInOut" 
                                }}
                            />
                        </AnimatePresence>
                        
                        {/* Overlay Gradient at bottom for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent opacity-60" />

                        {/* Optional Tag on Image */}
                        <div className="absolute top-6 left-6 flex gap-2">
                             <div className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                FilmTech Academy
                             </div>
                        </div>

                    </motion.div>
                    
                    {/* Decorative Elements around image */}
                    <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-emerald-100 rounded-3xl" />
                    <div className="absolute -z-20 -top-6 -left-6 w-full h-full border-2 border-gray-50 rounded-3xl" />
                </div>

            </div>
        </SlideWrapper>
    );
};
