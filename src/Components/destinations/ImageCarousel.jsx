import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ 
  images, 
  alt, 
  autoPlayInterval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400">No Image</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group/carousel">
      {/* Main Image */}
      <img 
        src={images[currentIndex]} 
        alt={`${alt} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
        loading="lazy"
      />
      
      {/* Navigation Arrows - Only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}
      
      {/* Pagination Dots - Only show if multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => goToSlide(index, e)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;