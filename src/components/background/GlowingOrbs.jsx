import React from 'react';
import { motion } from 'framer-motion';

const GlowingOrbs = () => {
  const orbs = [
    { color: 'rgba(139, 92, 246, 0.15)', size: 400 },  // Purple
    { color: 'rgba(79, 70, 229, 0.15)', size: 350 },   // Indigo
    { color: 'rgba(99, 102, 241, 0.15)', size: 300 },  // Blue
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default GlowingOrbs;