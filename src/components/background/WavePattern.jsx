import React from 'react';
import { motion } from 'framer-motion';

const WavePattern = () => {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 0.1 }} />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 800Q480 700 960 800T1920 800V1080H0V800Z"
            fill="url(#gradient1)"
            initial={{ d: "M0 800Q480 700 960 800T1920 800V1080H0V800Z" }}
            animate={{
              d: [
                "M0 800Q480 700 960 800T1920 800V1080H0V800Z",
                "M0 850Q480 750 960 850T1920 850V1080H0V850Z",
                "M0 800Q480 700 960 800T1920 800V1080H0V800Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M0 900Q480 800 960 900T1920 900V1080H0V900Z"
            fill="url(#gradient2)"
            initial={{ d: "M0 900Q480 800 960 900T1920 900V1080H0V900Z" }}
            animate={{
              d: [
                "M0 900Q480 800 960 900T1920 900V1080H0V900Z",
                "M0 950Q480 850 960 950T1920 950V1080H0V950Z",
                "M0 900Q480 800 960 900T1920 900V1080H0V900Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default WavePattern;