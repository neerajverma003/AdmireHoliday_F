// import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { FaClock, FaRupeeSign, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
// import gsap from 'gsap';

// const CLONE_COUNT = 3; // Number of times to clone the cards for seamless loop

// const WeekendTrendingPackages = ({ title, description, customClass = '' }) => {
//   const [data, setData] = useState([]);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
//   const isManualScrolling = useRef(false);

//   // Fetch data from API
//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/getpackage");
//         const responseData = await res.json();

//         // Filter only on classification includes 'weekend'
//      const filteredPackages = (responseData || []).filter(pkg => {
//   return (
//     Array.isArray(pkg.classification) &&
//     pkg.classification.includes('weekend') &&
//     pkg.classification.includes('Trending')
//   );
// });


//         // console.log("Filtered Weekend Trending Weekend Packages:", filteredPackages);

//         const transformed = filteredPackages.map(pkg => ({
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

//   // Auto-scroll animation setup
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container || data.length === 0) return;

//     // Kill any existing animation
//     if (animationRef.current) {
//       animationRef.current.kill();
//     }

//     // Card width (280) + gap (16) = 296px
//     const cardWidth = 296;
//     const totalCards = data.length;
//     const oneSetWidth = cardWidth * totalCards;

//     // Start from negative position to allow seamless wrapping
//     gsap.set(container, { x: -oneSetWidth });

//     // Create the infinite scroll animation (left to right)
//     const animation = gsap.to(container, {
//       x: 0,
//       duration: 20,
//       ease: "none",
//       repeat: -1,
//       modifiers: {
//         x: gsap.utils.unitize((x) => {
//           const xVal = parseFloat(x);
//           // Wrap seamlessly
//           return ((xVal % oneSetWidth) + oneSetWidth) % oneSetWidth - oneSetWidth;
//         })
//       }
//     });

//     animationRef.current = animation;

//     return () => {
//       if (animationRef.current) {
//         animationRef.current.kill();
//       }
//     };
//   }, [data]);

//   // Manual scroll handler
//   const handleManualScroll = (direction) => {
//     const container = containerRef.current;
//     if (!container || isManualScrolling.current) return;

//     isManualScrolling.current = true;

//     // Pause the auto animation
//     if (animationRef.current) {
//       animationRef.current.pause();
//     }

//     const cardWidth = 296;
//     const totalCards = data.length;
//     const oneSetWidth = cardWidth * totalCards;

//     // Get current x position
//     let currentX = parseFloat(gsap.getProperty(container, "x")) || 0;
    
//     // Calculate new position
//     // direction 1 = left button (show previous cards - move container right, increase x)
//     // direction -1 = right button (show next cards - move container left, decrease x)
//     let newX = currentX + (direction * cardWidth);

//     // Apply wrapping to ensure seamless infinite scroll
//     // Keep x values in range: -oneSetWidth to 0
//     if (newX > 0) {
//       newX = newX - oneSetWidth;
//     } else if (newX < -oneSetWidth) {
//       newX = newX + oneSetWidth;
//     }

//     // Animate to new position
//     gsap.to(container, {
//       x: newX,
//       duration: 0.5,
//       ease: "power2.out",
//       onComplete: () => {
//         isManualScrolling.current = false;
        
//         // Resume auto animation after 3 seconds
//         setTimeout(() => {
//           if (animationRef.current && !isManualScrolling.current) {
//             animationRef.current.play();
//           }
//         }, 3000);
//       }
//     });
//   };

//   const renderPackageCard = (pkg, index) => (
//     <div
//       key={`${pkg.id}-${index}`}
//       className="w-[280px] mx-2 bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
//     >
//       <Link to={pkg.link || '#'} className="no-underline text-inherit block">
//         <div className="h-48 md:h-52 overflow-hidden relative group">
//           <div
//             className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//             style={{ backgroundImage: `url(${pkg.image})` }}
//           ></div>
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
//             <FaClock className="mr-1" />
//             {pkg.duration}
//           </div>
//         </div>
//         <div className="p-4 md:p-5">``
//           <h4 className="text-base md:text-lg font-semibold mb-2 text-gray-800 truncate">
//             {pkg.title}
//           </h4>
//           <p className="text-sm md:text-base text-red-400 mb-2 flex items-center font-semibold">
//             <FaRupeeSign className="mr-1" />
//             {pkg.price}
//           </p>
//           <p className="text-xs md:text-sm text-gray-600 mb-4 truncate">
//             {pkg.location}
//           </p>
//           <div className="text-center">
//             <button className="bg-red-400 text-white border-none px-4 py-2 md:px-5 md:py-2 rounded-full cursor-pointer transition-all duration-300 font-medium text-sm hover:bg-red-500 hover:shadow-lg transform hover:-translate-y-0.5">
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
//             <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
//               {description}
//             </p>
//           )}
//         </div>

//         {data.length === 0 ? (
//           <div className="text-center py-10">
//             <p className="text-gray-500 text-lg font-medium">
//               No data available right now.
//             </p>
//           </div>
//         ) : (
//           <div className="relative">
//             <div className="relative flex items-center justify-center">
//               {/* Left Navigation Button - Show previous cards */}
//               <button
//                 onClick={() => handleManualScroll(1)}
//                 className="bg-red-400 text-white rounded-full p-3 hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-20 flex-shrink-0 mr-4"
//                 aria-label="Scroll Left"
//               >
//                 <FaCaretLeft className="text-2xl" />
//               </button>

//               <div className="relative flex-1 overflow-hidden">
//                 <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
//                 <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                
//                 <div
//                   ref={containerRef}
//                   className="flex gap-4"
//                   style={{ willChange: "transform" }}
//                 >
//                   {Array.from({ length: CLONE_COUNT }).map((_, cloneIndex) =>
//                     data.map((pkg, cardIndex) => 
//                       renderPackageCard(pkg, `${cloneIndex}-${cardIndex}`)
//                     )
//                   )}
//                 </div>
//               </div>

//               {/* Right Navigation Button - Show next cards */}
//               <button
//                 onClick={() => handleManualScroll(-1)}
//                 className="bg-red-400 text-white rounded-full p-3 hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-20 flex-shrink-0 ml-4"
//                 aria-label="Scroll Right"
//               >
//                 <FaCaretRight className="text-2xl" />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// WeekendTrendingPackages.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   customClass: PropTypes.string,
// };

// export default WeekendTrendingPackages;



import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaClock, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import gsap from "gsap";

const CLONE_COUNT = 5;

const WeekendTrendingPackages = ({ title, description, customClass = "" }) => {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const isManualScrolling = useRef(false);

  /* ================= FETCH API ================= */
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch("http://localhost:5000/getpackage");
        const json = await res.json();

        const filtered = (json || []).filter(
          (pkg) =>
            Array.isArray(pkg.classification) &&
            pkg.classification.includes("weekend") &&
            pkg.classification.includes("Trending")
        );

        const formatted = filtered.slice(0, 4).map((pkg) => ({
          id: pkg._id,
          title: pkg.title || "Weekend Getaway",
          price:
            typeof pkg.pricing === "object" && pkg.pricing.standard_price
              ? pkg.pricing.standard_price
              : "On Request",
          duration: pkg.duration || "2D / 1N",
          location:
            pkg.days_information?.[0]?.locationDetail || "Popular Destination",
          image:
            pkg.destination_thumbnails?.[0] ||
            "/images/default-package.jpg",
          link: `/itineraries/${pkg._id}`,
          rating: 4.5,
        }));

        setData(formatted);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPackages();
  }, []);

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    if (!containerRef.current || data.length === 0) return;

    animationRef.current?.kill();

    const cardWidth = 280;
    const totalWidth = cardWidth * data.length;

    gsap.set(containerRef.current, { x: -totalWidth });

    animationRef.current = gsap.to(containerRef.current, {
      x: 0,
      duration: 6,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const val = parseFloat(x);
          return ((val % totalWidth) + totalWidth) % totalWidth - totalWidth;
        }),
      },
    });

    return () => animationRef.current?.kill();
  }, [data]);

  /* ================= MANUAL SCROLL ================= */
  const handleScroll = (dir) => {
    if (isManualScrolling.current) return;

    isManualScrolling.current = true;
    animationRef.current?.pause();

    const cardWidth = 280;
    const totalWidth = cardWidth * data.length;
    const currentX = gsap.getProperty(containerRef.current, "x");
    let newX = currentX + dir * cardWidth;

    if (newX > 0) newX -= totalWidth;
    if (newX < -totalWidth) newX += totalWidth;

    gsap.to(containerRef.current, {
      x: newX,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        isManualScrolling.current = false;
        setTimeout(() => animationRef.current?.play(), 2500);
      },
    });
  };

  /* ================= CARD ================= */
  const Card = (pkg, key) => (
    <div
      key={key}
      className="w-[260px] flex-shrink-0 mx-3 bg-white rounded-2xl border border-orange-300 shadow-sm hover:shadow-lg transition"
    >
      <Link to={pkg.link} className="block p-4">
        {/* Image */}
        <div className="rounded-xl overflow-hidden mb-4">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-[230px] object-cover"
          />
        </div>

        {/* Title + Price */}
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-sm font-extrabold text-gray-800 leading-tight">
            {pkg.title}
          </h4>
          <p className="text-sm font-extrabold text-gray-800">
            ₹{pkg.price}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs font-semibold text-gray-600 leading-relaxed mb-4">
          {pkg.location}
        </p>

        {/* Icons */}
        <div className="flex justify-between text-[11px] font-bold text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <FaClock className="text-orange-400" /> {pkg.duration}
          </span>
          <span>⭐ {pkg.rating}</span>
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-6 py-2 rounded-md transition">
            View Package
          </button>
        </div>
      </Link>
    </div>
  );

  return (
    <section className={`bg-white py-16 ${customClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-bold mb-2">
            {title}
          </p>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
            {description}
          </h2>
        </div>

        {/* Slider */}
        <div className="flex items-center">
          <button
            onClick={() => handleScroll(1)}
            className="text-orange-500 text-3xl px-2"
          >
            <FaCaretLeft />
          </button>

          <div className="flex-1 overflow-hidden">
            <div ref={containerRef} className="flex">
              {Array.from({ length: CLONE_COUNT }).map((_, i) =>
                data.map((pkg, j) => Card(pkg, `${i}-${j}`))
              )}
            </div>
          </div>

          <button
            onClick={() => handleScroll(-1)}
            className="text-orange-500 text-3xl px-2"
          >
            <FaCaretRight />
          </button>
        </div>
      </div>
    </section>
  );
};

WeekendTrendingPackages.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default WeekendTrendingPackages;
