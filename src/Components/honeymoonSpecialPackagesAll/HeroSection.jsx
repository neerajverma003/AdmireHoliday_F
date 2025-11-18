import React, { useEffect, useState } from 'react';
 
function HeroSection() {
  const images = [
    'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg',
    'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    'https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg',
    'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
  ];
 
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000); // Change every 5 seconds
 
    return () => clearInterval(interval);
  }, []);
 
  return (
    <header
      className="relative py-24 px-6 flex flex-col items-center justify-center text-center text-white transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-1000 ease-in-out"></div>
 
      {/* Content */}
      <div className="relative max-w-4xl z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Your Dream Honeymoon Awaits
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto">
          Crafted with love, for couples ready to create unforgettable memories together.
        </p>
      </div>
    </header>
  );
}
 
export default HeroSection;