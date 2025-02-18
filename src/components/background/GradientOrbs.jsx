import React from 'react';
import { motion } from 'framer-motion';

const GradientOrbs = () => {
  const orbColors = [
    'rgba(147, 51, 234, 0.15)',  // purple
    'rgba(219, 39, 119, 0.15)',  // pink
    'rgba(59, 130, 246, 0.15)',  // blue
  ];

  return (
    <div className="absolute inset-0">
      {orbColors.map((color, i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          }}
          initial={{
            x: Math.random() * window.innerWidth - 200,
            y: Math.random() * window.innerHeight - 200,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth - 200,
              Math.random() * window.innerWidth - 200,
            ],
            y: [
              Math.random() * window.innerHeight - 200,
              Math.random() * window.innerHeight - 200,
            ],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default GradientOrbs;