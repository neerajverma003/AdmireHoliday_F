import React from 'react';
import { Compass } from 'lucide-react';

const HeroSection = () => (
  <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24">
    <div className="absolute inset-0 bg-black opacity-20"></div>
    <div className="relative max-w-6xl mx-auto px-6 text-center">
      <div className="flex items-center justify-center mb-6">
        <Compass className="w-12 h-12 mr-3 text-amber-300" />
        <h1 className="text-5xl font-bold tracking-tight">Admire Holidays</h1>
      </div>
      <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
        Creating unforgettable journeys and authentic travel experiences since our inception. 
            Your trusted partner in discovering the world's most beautiful destinations.
      </p>
    </div>
  </div>
);

export default HeroSection;

