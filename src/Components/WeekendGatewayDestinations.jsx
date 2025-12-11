// import React, { useState, useEffect, useRef } from "react";
// import { FaClock, FaRupeeSign, FaCaretLeft, FaCaretRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import gsap from "gsap";

// const CLONE_COUNT = 3; // Number of times to clone the cards for seamless loop

// const WeekendGatewayDestinations = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
//   const isManualScrolling = useRef(false);

//   const fetchDestinations = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/getpackage");
//       const data = await res.json();

//       if (Array.isArray(data)) {
//         const filtered = data.filter(
//           (dest) =>
//             Array.isArray(dest.classification) &&
//             dest.classification.length === 1 &&
//             dest.classification[0] === "weekend"
//         );
//         // console.log("Weekend Gateway",filtered)
//         const mapped = filtered.map((destination) => ({
//           id: destination._id,
//           name: destination.title || "Untitled",
//           slug: destination.title?.toLowerCase().replace(/\s+/g, "-") || "",
//           duration: destination.duration || "N/A",
//           price:
//             typeof destination.pricing === "object" &&
//             destination.pricing.standard_price
//               ? destination.pricing.standard_price
//               : "On Request",
//           location:
//             destination.days_information?.[0]?.locationDetail || "Unknown",
//           image:
//             destination.destination_thumbnails?.[0] ||
//             destination.destination_images?.[0] ||
//             "/images/default.jpg",
//         }));

//         setDestinations(mapped.slice(0, 6)); // Show first 6 for loop
//       } else {
//         console.error("Invalid API response");
//       }
//     } catch (err) {
//       console.error("Failed to fetch weekend destinations", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDestinations();
//   }, []);

//   // Auto-scroll animation setup
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container || destinations.length === 0) return;

//     // Kill any existing animation
//     if (animationRef.current) {
//       animationRef.current.kill();
//     }

//     // Card width (280) + gap (16) = 296px
//     const cardWidth = 296;
//     const totalCards = destinations.length;
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
//   }, [destinations]);

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
//     const totalCards = destinations.length;
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

//   const renderCard = (destination, index) => (
//     <div
//       key={`${destination.id}-${index}`}
//       className="w-[280px] mx-2 bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
//     >
//       <Link to={`/itineraries/${destination.id}`} className="no-underline text-inherit block">
//         <div className="h-48 md:h-52 overflow-hidden relative group">
//           <div
//             className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//             style={{ backgroundImage: `url(${destination.image})` }}
//           ></div>
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
//             <FaClock className="mr-1" />
//             {destination.duration}
//           </div>
//         </div>
//         <div className="p-4 md:p-5">
//           <h4 className="text-base md:text-lg font-semibold mb-2 text-gray-800 truncate">
//             {destination.name}
//           </h4>
//           <p className="text-sm md:text-base text-red-400 mb-2 flex items-center font-semibold">
//             <FaRupeeSign className="mr-1" />
//             {destination.price}
//           </p>
//           <p className="text-xs md:text-sm text-gray-600 mb-4 truncate">
//             {destination.location}
//           </p>
//           <div className="text-center">
//             <button className="bg-red-400 text-white border-none px-4 py-2 md:px-5 md:py-2 rounded-full cursor-pointer transition-all duration-300 font-medium text-sm hover:bg-red-500 hover:shadow-lg transform hover:-translate-y-0.5">
//               Know More
//             </button>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );

//   return (
//     <div className="bg-gray-50 font-['Poppins'] py-[60px] md:py-[60px] relative">
//       <div className="max-w-6xl mx-auto px-4 relative">
//         <div className="text-center mb-10">
//           <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative inline-block">
//             Weekend Gateway Destinations
//             <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-400 to-red-300 rounded"></span>
//           </h3>
//         </div>

//         {loading ? (
//           <div className="text-center py-10">
//             <p className="text-gray-500 text-lg font-medium">Loading...</p>
//           </div>
//         ) : destinations.length === 0 ? (
//           <div className="text-center py-10">
//             <p className="text-gray-500 text-lg font-medium">
//               No weekend destinations found.
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
//                     destinations.map((destination, cardIndex) => 
//                       renderCard(destination, `${cloneIndex}-${cardIndex}`)
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

// export default WeekendGatewayDestinations; 


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

const WeekendGatewayDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDestinations = async () => {
    setLoading(true);
    try {
      const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${baseUrl}/getpackage/`);
      const data = await res.json();

      if (Array.isArray(data)) {
        const filtered = data.filter((dest) => {
          if (!dest) return false;
          const cls = dest.classification;
          if (Array.isArray(cls)) {
            return cls.some((c) => String(c).toLowerCase().includes("weekend"));
          }
          if (typeof cls === "string") {
            return cls.toLowerCase().includes("weekend");
          }
          return false;
        });

        // Map API → UI format
        const mapped = filtered.map((destination) => ({
          id: destination._id,
          name: destination.title || "Untitled",
          price: destination.pricing?.standard_price || "On Request",
          discount: destination.pricing?.discount_percentage
            ? `${destination.pricing.discount_percentage}% off`
            : "10% off",
          image:
            destination.destination_thumbnails?.[0] ||
            destination.destination_images?.[0] ||
            "/images/default.jpg",
        }));

        setDestinations(mapped.slice(0, 4)); // ✔ show ONLY 4 like image
      }
    } catch (error) {
      console.error("Weekend API error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <section className="py-16 bg-white font-['Poppins']">
      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-orange-400 font-semibold text-sm">
          Weekend Getaway Destination
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Handpicked partners for your perfect weekend escape
        </h2>
      </div>

      {/* Loader */}
      {loading && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg font-medium">Loading...</p>
        </div>
      )}

      {/* FINAL CARD GRID */}
      {!loading && destinations.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="max-w-7xl mx-auto px-6 
                     grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
                     gap-8"
        >
          {destinations.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white border border-gray-200 rounded-2xl 
                         shadow-md hover:shadow-xl transition-all p-4"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden h-56 w-full shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl 
                             transition duration-500 hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-center text-lg font-semibold text-gray-900">
                {item.name}
              </h3>

              {/* Price */}
              <p className="text-center mt-1 text-gray-700 text-sm flex justify-center items-center gap-1">
                <FaRupeeSign /> {item.price}
                <span className="text-orange-400 font-semibold ml-1">
                  ({item.discount})
                </span>
              </p>

              {/* Button */}
              <div className="text-center mt-4">
                <Link
                  to={`/itineraries/${item.id}`}
                  className="bg-orange-400 text-white px-5 py-2 rounded-full 
                             text-sm font-medium 
                             hover:bg-orange-500 transition shadow-md 
                             hover:shadow-lg"
                >
                  View Package
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default WeekendGatewayDestinations;
