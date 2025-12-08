import React, { useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface SmoothImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  style?: React.CSSProperties;
}

export const SmoothImage: React.FC<SmoothImageProps> = ({ src, alt, className = "", style, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onLoad={() => setIsLoaded(true)}
      className={className}
      style={style}
      {...(props as any)}
    />
  );
};
