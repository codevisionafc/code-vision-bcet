import React from 'react';
import { motion } from 'framer-motion';

const AnimatedShapes = () => {
  const shapes = [
    {
      path: "M10 10L90 10L50 90Z",
      className: "text-purple-500/10",
      size: 100,
    },
    {
      path: "M10 50A40 40 0 1 1 90 50A40 40 0 1 1 10 50",
      className: "text-blue-500/10",
      size: 100,
    },
    {
      path: "M10 10H90V90H10Z",
      className: "text-pink-500/10",
      size: 80,
    },
  ];

  return (
    <div className="absolute inset-0">
      {shapes.map((shape, index) => (
        [...Array(3)].map((_, i) => {
          const randomX = Math.random() * window.innerWidth;
          const randomY = Math.random() * window.innerHeight;
          
          return (
            <motion.div
              key={`${index}-${i}`}
              className="absolute"
              style={{
                width: shape.size,
                height: shape.size,
              }}
              initial={{
                x: randomX,
                y: randomY,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                x: [randomX, randomX + 100, randomX],
                y: [randomY, randomY - 100, randomY],
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                className={shape.className}
              >
                <path d={shape.path} fill="currentColor" />
              </svg>
            </motion.div>
          );
        }))
      )}
    </div>
  );
};

export default AnimatedShapes;