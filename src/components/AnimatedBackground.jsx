import React from 'react';
import WavePattern from './background/WavePattern';
import ParticleField from './background/ParticleField';
import GradientOrbs from './background/GradientOrbs';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <ParticleField />
      <WavePattern />
      <GradientOrbs />
    </div>
  );
};

export default AnimatedBackground;
