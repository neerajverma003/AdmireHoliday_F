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

    // Card width (340) + gap (24) = 364px
    const cardWidth = 364;
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

    const cardWidth = 364;
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
      className="w-[340px] mx-3 flex-shrink-0"
    >
      <Link
        className="w-full block h-full group"
        to={`resort-detail/${resort._id}`}
      >
        <div className="flex flex-col rounded-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100">
          {/* Discount Badge - Egg oval shaped badge at top-left corner covering the corner */}
          <div className="absolute -top-3 -left-3 bg-white text-black px-10 py-4 z-10 shadow-[0_3px_15px_rgba(0,0,0,0.2)] transform -rotate-[18deg]" style={{ backgroundColor: "rgba(255, 255, 255, 0.45)", borderRadius: '1% 55% 52% 48% / 58% 50% 50% 42%' }}>
            <div className="text-gray-700 text-[11px] font-medium leading-none tracking-wide text-left">Discount</div>
            <div className="text-black text-[18px] font-bold leading-none mt-2 text-left">
              {resort.discount}% <span className="text-[13px] font-semibold">Off</span>
            </div>
          </div>

          {/* Image Container - Large image taking up majority of card */}
          <div className="h-[240px] w-full relative overflow-hidden rounded-t-[28px]">
            <img
              alt={resort.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={resort.images && resort.images[0]}
            />
          </div>

          {/* Content - Centered text and button with white background */}
          <div className="px-5 py-4 pb-5 flex flex-col items-center text-center bg-white">
            <h2 className="text-[19px] font-bold text-gray-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors duration-300">
              {resort.title}
            </h2>

            {/* Button - Orange gradient with rounded corners */}
            <button className="w-full py-3 px-5 text-white font-semibold text-[14px] rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] bg-gradient-to-r from-[#F59E42] to-[#F5A952] shadow-md">
              View Package
            </button>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <section className="mx-auto max-w-[1340px] mt-36 mb-36 px-4">
      <div className="text-center mb-14">
        <h2 className="text-[42px] font-bold text-gray-900 leading-tight">
          Explore Our Resorts
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

            <div className="relative flex-1 overflow-hidden py-4">
              
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