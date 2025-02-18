import React from 'react';
import { motion } from 'framer-motion';

const ParticleField = () => {
  const particles = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, index) => {
        const size = Math.random() * 4 + 2;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleField;
