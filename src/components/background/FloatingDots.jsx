import React from 'react';
import { motion } from 'framer-motion';

const FloatingDots = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight - 100,
            ],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "mirror",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;