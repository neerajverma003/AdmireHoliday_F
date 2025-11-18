import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import gsap from 'gsap';

const CLONE_COUNT = 3; // Number of times to clone the cards for seamless loop

const ResortsSlider = () => {
  const [resorts, setResorts] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const isManualScrolling = useRef(false);

  const getResort = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/resort/all');
      const res = await response.json();
      // console.log(res);
      setResorts(res);
    } catch (error) {
      console.error("Failed to fetch resorts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResort();
  }, []);

  // Auto-scroll animation setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container || resorts.length === 0) return;

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Card width (428) + gap (24) = 452px
    const cardWidth = 452;
    const totalCards = resorts.length;
    const oneSetWidth = cardWidth * totalCards;

    // Start from negative position to allow seamless wrapping
    gsap.set(container, { x: -oneSetWidth });

    // Create the infinite scroll animation (left to right)
    const animation = gsap.to(container, {
      x: 0,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const xVal = parseFloat(x);
          // Wrap seamlessly
          return ((xVal % oneSetWidth) + oneSetWidth) % oneSetWidth - oneSetWidth;
        })
      }
    });

    animationRef.current = animation;

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [resorts]);

  // Manual scroll handler
  const handleManualScroll = (direction) => {
    const container = containerRef.current;
    if (!container || isManualScrolling.current) return;

    isManualScrolling.current = true;

    // Pause the auto animation
    if (animationRef.current) {
      animationRef.current.pause();
    }

    const cardWidth = 452;
    const totalCards = resorts.length;
    const oneSetWidth = cardWidth * totalCards;

    // Get current x position
    let currentX = parseFloat(gsap.getProperty(container, "x")) || 0;
    
    // Calculate new position
    let newX = currentX + (direction * cardWidth);

    // Apply wrapping to ensure seamless infinite scroll
    if (newX > 0) {
      newX = newX - oneSetWidth;
    } else if (newX < -oneSetWidth) {
      newX = newX + oneSetWidth;
    }

    // Animate to new position
    gsap.to(container, {
      x: newX,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        isManualScrolling.current = false;
        
        // Resume auto animation after 3 seconds
        setTimeout(() => {
          if (animationRef.current && !isManualScrolling.current) {
            animationRef.current.play();
          }
        }, 3000);
      }
    });
  };

  const renderResortCard = (resort, index) => (
    <div
      key={`${resort._id}-${index}`}
      className="w-[428px] mx-3 flex-shrink-0"
    >
      <Link
        className="w-full block h-full group"
        to={`resort-detail/${resort._id}`}
      >
        <div className="h-[420px] flex flex-col justify-between rounded-lg shadow-lg p-2 relative bg-white transition-all duration-300 hover:scale-[1.02] group-hover:shadow-xl">
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-md text-sm z-10 animate-bounce">
            Discount: {resort.discount}
          </div>

          {/* Image */}
          <div className="h-[200px] w-full relative rounded-lg overflow-hidden">
            <img
              alt={resort.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={resort.images && resort.images[0]}
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                {resort.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Discount: {resort.discount}
              </p>
            </div>

            {/* Button */}
            <button
              className="w-full py-2 text-white rounded-lg mt-auto transition-all duration-300 hover:opacity-90 transform group-hover:-translate-y-1"
              style={{ backgroundColor: resort.buttonColor || '#ef4444' }}
            >
              <span className="flex items-center justify-center">
                Know More
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <section className="mx-auto max-w-[1340px] mt-36 mb-36 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block">
          Explore Our Resorts
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-400 to-red-300 rounded"></span>
        </h2>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg font-medium">Loading resorts...</p>
        </div>
      ) : resorts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg font-medium">No resorts available.</p>
        </div>
      ) : (
        <div className="relative">
          <div className="relative flex items-center justify-center">
            {/* Left Navigation Button */}
            <button
              onClick={() => handleManualScroll(1)}
              className="bg-red-400 text-white rounded-full p-3 hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-20 flex-shrink-0 mr-4"
              aria-label="Scroll Left"
            >
              <FaCaretLeft className="text-2xl" />
            </button>

            <div className="relative flex-1 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              <div
                ref={containerRef}
                className="flex gap-6"
                style={{ willChange: "transform" }}
              >
                {Array.from({ length: CLONE_COUNT }).map((_, cloneIndex) =>
                  resorts.map((resort, cardIndex) => 
                    renderResortCard(resort, `${cloneIndex}-${cardIndex}`)
                  )
                )}
              </div>
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={() => handleManualScroll(-1)}
              className="bg-red-400 text-white rounded-full p-3 hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-20 flex-shrink-0 ml-4"
              aria-label="Scroll Right"
            >
              <FaCaretRight className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResortsSlider;