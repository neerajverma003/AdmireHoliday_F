import React, { useState, useEffect } from 'react';

const BannerCarousel = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const banners = [
    "src/assets/banner/Banner1.png",
    "/banner/banner4.png",
    "/banner/banner5.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToPrevBanner = () => {
    setCurrentBannerIndex((prev) => 
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  const goToNextBanner = () => {
    setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="mt-24">
      <div className="w-full max-w-7xl h-[311px] mx-auto overflow-hidden relative rounded-lg">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentBannerIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition"
          aria-label="Previous banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition"
          aria-label="Next banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBannerIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentBannerIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;