import React from 'react';
import WavePattern from './background/WavePattern';
import ParticleField from './background/ParticleField';
import GlowingOrbs from './background/GlowingOrbs';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <GlowingOrbs />
      <ParticleField />
      <WavePattern />
    </div>
  );
};

export default AnimatedBackground;
