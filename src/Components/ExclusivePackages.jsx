// import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { FaClock, FaRupeeSign } from 'react-icons/fa';
// import gsap from 'gsap';

// const ExclusivePackages = ({ title, description, customClass = '' }) => {
//   const [data, setData] = useState([]);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/getpackage");
//         const responseData = await res.json();

//         const exclusivePackages = (responseData || []).filter(
//           (pkg) =>
//             Array.isArray(pkg.classification) &&
//             pkg.classification.includes('Exclusive')
//         );

//         const transformed = exclusivePackages.map(pkg => ({
//           id: pkg._id,
//           title: pkg.title || 'Untitled Package',
//           slug: pkg.title?.toLowerCase().replace(/\s+/g, '-') || '',
//           duration: pkg.duration || 'Custom Duration',
//           price:
//             typeof pkg.pricing === 'object' && pkg.pricing.standard_price
//               ? pkg.pricing.standard_price
//               : 'On Request',
//           location: pkg.days_information?.[0]?.locationDetail || 'Unknown Location',
//           image:
//             pkg.destination_thumbnails?.[0] ||
//             pkg.destination_video ||
//             '/images/default-package.jpg',
//           link: `/itineraries/${pkg._id}`,
//           rating: 4.5
//         }));

//         setData(transformed.slice(0, 4)); // first 4 cards
//       } catch (error) {
//         console.error("Error fetching packages:", error);
//         setData([]);
//       }
//     };

//     fetchPackages();
//   }, []);

//   // GSAP infinite scroll animation
//   useEffect(() => {
//     const container = containerRef.current;
//     if (container && data.length > 0) {
//       // Kill previous animation if any
//       animationRef.current?.kill();

//       const totalScroll = container.scrollWidth / 2; // because we duplicate cards

//       animationRef.current = gsap.to(container, {
//         scrollLeft: totalScroll,
//         duration: 20,
//         ease: "linear",
//         repeat: -1,
//         onRepeat: () => {
//           container.scrollLeft = 0;
//         },
//       });
//     }

//     return () => {
//       animationRef.current?.kill();
//     };
//   }, [data]);

//   const renderPackageCard = (pkg) => (
//     <div
//       key={pkg.id}
//       className="w-[280px] mx-2 bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 flex-shrink-0"
//     >
//       <Link to={pkg.link || '#'} className="no-underline text-inherit">
//         <div className="h-48 md:h-52 overflow-hidden relative">
//           <div
//             className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
//             style={{ backgroundImage: `url(${pkg.image})` }}
//           ></div>
//           <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs flex items-center">
//             <FaClock className="mr-1" />
//             {pkg.duration}
//           </div>
//         </div>
//         <div className="p-4 md:p-5">
//           <h4 className="text-base md:text-lg font-semibold mb-2 text-gray-800 truncate">
//             {pkg.title}
//           </h4>
//           <p className="text-sm md:text-base text-red-400 mb-2 flex items-center">
//             <FaRupeeSign className="mr-1" />
//             {pkg.price}
//           </p>
//           <p className="text-xs md:text-sm text-gray-600 mb-4 truncate">
//             {pkg.location}
//           </p>
//           <div className="text-center">
//             <button className="bg-red-400 text-white border-none px-4 py-2 md:px-5 md:py-2 rounded-full cursor-pointer transition-all duration-300 font-medium text-sm">
//               Get Free Consultance
//             </button>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );

//   return (
//     <div className={`bg-gray-50 font-['Poppins'] py-[60px] md:py-[60px] relative ${customClass}`}>
//       <div className="max-w-6xl mx-auto px-4 relative">
//         <div className="text-center mb-10">
//           <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative inline-block">
//             {title}
//             <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-400 to-red-300 rounded"></span>
//           </h3>
//           {description && (
//             <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
//               {description}
//             </p>
//           )}
//         </div>

//         {data.length === 0 ? (
//           <div className="text-center py-10">
//             <p className="text-gray-500 text-lg font-medium">No data available right now.</p>
//           </div>
//         ) : (
//           <div
//             ref={containerRef}
//             className="flex justify-start flex-nowrap gap-4 overflow-x-hidden"
//           >
//             {/* Render cards twice for seamless infinite scroll */}
//             {data.map(renderPackageCard)}
//             {data.map(pkg => (
//               <React.Fragment key={`${pkg.id}-clone`}>
//                 {renderPackageCard(pkg)}
//               </React.Fragment>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// ExclusivePackages.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   customClass: PropTypes.string,
// };

// export default ExclusivePackages;


import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaClock, FaRupeeSign, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import gsap from "gsap";

const CLONE_COUNT = 3; // Number of times to clone the cards for seamless loop

const ExclusivePackages = ({ title, description, customClass = "" }) => {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const isManualScrolling = useRef(false);

  // Fetch data from API
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch("http://localhost:5000/getpackage");
        const responseData = await res.json();
        // console.log(responseData);
        
        const exclusivePackages = (responseData || []).filter(
          (pkg) =>
            Array.isArray(pkg.classification) &&
            pkg.classification.includes("Exclusive")
        );
        
        console.log("Filtered Exclusive Package", exclusivePackages);
        
        const transformed = exclusivePackages.map((pkg) => ({
          id: pkg._id,
          title: pkg.title || "Untitled Package",
          slug: pkg.title?.toLowerCase().replace(/\s+/g, "-") || "",
          duration: pkg.duration || "Custom Duration",
          price:
            typeof pkg.pricing === "object" && pkg.pricing.standard_price
              ? pkg.pricing.standard_price
              : "On Request",
          location: pkg.days_information?.[0]?.locationDetail || "Unknown Location",
          image:
            (Array.isArray(pkg.destination_thumbnails) && pkg.destination_thumbnails.length > 0 && pkg.destination_thumbnails[0]) ||
            (Array.isArray(pkg.destination_images) && pkg.destination_images.length > 0 && pkg.destination_images[0]) ||
            pkg.destination_video ||
            "/images/default-package.jpg",
          link: `/itineraries/${pkg._id}`,
          rating: 4.5,
        }));

        setData(transformed.slice(0, 4)); // first 4 packages only
      } catch (error) {
        console.error("Error fetching packages:", error);
        setData([]);
      }
    };

    fetchPackages();
  }, []);

  // Auto-scroll animation setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container || data.length === 0) return;

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Card width (280) + gap (16) = 296px
    const cardWidth = 296;
    const totalCards = data.length;
    const oneSetWidth = cardWidth * totalCards;

    // Start from negative position to allow seamless wrapping
    gsap.set(container, { x: -oneSetWidth });

    // Create the infinite scroll animation (left to right)
    const animation = gsap.to(container, {
      x: 0,
      duration: 20,
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
  }, [data]);

  // Manual scroll handler
  const handleManualScroll = (direction) => {
    const container = containerRef.current;
    if (!container || isManualScrolling.current) return;

    isManualScrolling.current = true;

    // Pause the auto animation
    if (animationRef.current) {
      animationRef.current.pause();
    }

    const cardWidth = 296;
    const totalCards = data.length;
    const oneSetWidth = cardWidth * totalCards;

    // Get current x position
    let currentX = parseFloat(gsap.getProperty(container, "x")) || 0;
    
    // Calculate new position
    // direction 1 = left button (show previous cards - move container right, increase x)
    // direction -1 = right button (show next cards - move container left, decrease x)
    let newX = currentX + (direction * cardWidth);

    // Apply wrapping to ensure seamless infinite scroll
    // Keep x values in range: -oneSetWidth to 0
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

  const renderPackageCard = (pkg, index) => (
    <div
      key={`${pkg.id}-${index}`}
      className="w-[280px] mx-2 bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={pkg.link || "#"} className="no-underline text-inherit block">
        <div className="h-48 md:h-52 overflow-hidden relative group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${pkg.image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
            <FaClock className="mr-1" />
            {pkg.duration}
          </div>
        </div>
        <div className="p-4 md:p-5">
          <h4 className="text-base md:text-lg font-semibold mb-2 text-gray-800 truncate">
            {pkg.title}
          </h4>
          <p className="text-sm md:text-base text-red-400 mb-2 flex items-center font-semibold">
            <FaRupeeSign className="mr-1" />
            {pkg.price}
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-4 truncate">
            {pkg.location}
          </p>
          <div className="text-center">
            <button className="bg-red-400 text-white border-none px-4 py-2 md:px-5 md:py-2 rounded-full cursor-pointer transition-all duration-300 font-medium text-sm hover:bg-red-500 hover:shadow-lg transform hover:-translate-y-0.5">
              Get Free Consultance
            </button>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div className={`bg-gray-50 font-['Poppins'] py-[60px] md:py-[60px] relative ${customClass}`}>
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative inline-block">
            {title}
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-400 to-red-300 rounded"></span>
          </h3>
          {description && (
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
              {description}
            </p>
          )}
        </div>

        {data.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg font-medium">
              No data available right now.
            </p>
          </div>
        ) : (
          <div className="relative">
            <div className="relative flex items-center justify-center">
              {/* Left Navigation Button - Show previous cards */}
              <button
                onClick={() => handleManualScroll(1)}
                className="bg-red-400 text-white rounded-full p-3 hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-20 flex-shrink-0 mr-4"
                aria-label="Scroll Left"
              >
                <FaCaretLeft className="text-2xl" />
              </button>

              <div className="relative flex-1 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                
                <div
                  ref={containerRef}
                  className="flex gap-4"
                  style={{ willChange: "transform" }}
                >
                  {Array.from({ length: CLONE_COUNT }).map((_, cloneIndex) =>
                    data.map((pkg, cardIndex) => 
                      renderPackageCard(pkg, `${cloneIndex}-${cardIndex}`)
                    )
                  )}
                </div>
              </div>

              {/* Right Navigation Button - Show next cards */}
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
      </div>
    </div>
  );
};

ExclusivePackages.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  customClass: PropTypes.string,
};

export default ExclusivePackages;