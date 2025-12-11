import React, { useEffect, useState, useRef } from "react";

const InternationalPackage = () => {
  const [destinations, setDestinations] = useState([]);
  const animationFrameRef = useRef(null);
  const animationOffsetRef = useRef(0);
  const [cards, setCards] = useState([]);

  const cardSpacing = 300; // Further reduced spacing for 5 cards

  // ✅ Fetch API
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/v1/destination/home/get"
        );
        const json = await res.json();

        const international = json?.data?.filter(
          (d) =>
            typeof d.domestic_or_international === "string" &&
            d.domestic_or_international.toLowerCase() === "international"
        );

        if (international?.length) {
          setDestinations(international);
          // Initialize cards with offsets
          setCards(
            international.map((dest, i) => ({
              ...dest,
              offset: i * cardSpacing,
              id: dest._id || i
            }))
          );
        }
      } catch (err) {
        console.error("Destination fetch error:", err);
      }
    };

    fetchDestinations();
  }, []);

  // ✅ Continuous slider animation
  useEffect(() => {
    if (cards.length === 0) return;

    const totalCards = cards.length;

    const updateCards = () => {
      animationOffsetRef.current += 2;
      
      setCards(prevCards => 
        prevCards.map(card => {
          const position = card.offset - animationOffsetRef.current;
          
          let newOffset = card.offset;
          if (position < -(cardSpacing * 2)) {
            newOffset = card.offset + cardSpacing * totalCards;
          }
          
          const currentPosition = newOffset - animationOffsetRef.current;
          const distanceFromCenter = Math.abs(currentPosition);
          const maxVisibleDistance = cardSpacing * 3; // Increased more for 5 cards
          const normalizedDistance = Math.min(distanceFromCenter / maxVisibleDistance, 1);
          
          const scale = 1.3 - (normalizedDistance * 0.7);
          const heightScale = 1 + (1 - normalizedDistance) * 0.15;
          
          let opacity;
          // Extended range to show 5 cards: 2 left + center + 2 right
          if (currentPosition < -cardSpacing * 2 || currentPosition > cardSpacing * 3) {
            opacity = 0;
          } else {
            opacity = 1 - (normalizedDistance * 0.3);
          }
          
          const zIndex = Math.floor(scale * 100);

          return {
            ...card,
            offset: newOffset,
            currentPosition,
            scale,
            heightScale,
            opacity,
            zIndex
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(updateCards);
    };

    updateCards();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [cards.length]);

  if (!destinations.length) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* ✅ HEADER */}
      <div className="text-center mb-20">
        <p className="text-orange-500 font-semibold mb-2">
          International Destination
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore the World International Hotspots
        </h2>
      </div>

      {/* ✅ CAROUSEL CONTAINER */}
      <div className="relative flex justify-center items-center overflow-hidden w-full h-[700px]">
        <div className="absolute inset-0" style={{ clipPath: 'inset(0)' }}>
          {cards.map((card) => {
            const image = card.show_image?.[0] || card.title_image?.[0];
            
            return (
              <div
                key={card.id}
                className="absolute rounded-3xl overflow-hidden shadow-2xl transition-all duration-100 left-1/2"
                style={{
                  width: '280px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  transform: `translateX(${card.currentPosition - 140}px) translateY(-50%) scale(${card.scale}) scaleY(${card.heightScale})`,
                  top: '50%',
                  opacity: card.opacity,
                  zIndex: card.zIndex,
                  visibility: card.opacity > 0 ? 'visible' : 'hidden',
                  pointerEvents: card.opacity > 0 ? 'auto' : 'none',
                  clipPath: card.currentPosition < -cardSpacing ? 'inset(0 100% 0 0)' : 'none'
                }}
              >
                <div className="relative">
                  <a href={card.slug ? `/destinations/${card.slug}` : "#"}>
                    <img
                      src={image}
                      alt={card.destination_name}
                      className="w-full h-[450px] object-cover"
                    />

                    {/* ✅ OVERLAY */}
                    <div className="absolute inset-0 bg-black/35 flex flex-col justify-end p-5">
                      <h3 className="self-center text-white text-lg font-semibold mb-3">
                        {card.destination_name}
                      </h3>
                      <button className="self-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-1.5 text-sm rounded-full transition">
                        Package Now
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternationalPackage;
 


// ===============================================================================================



// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const VISIBLE_CARDS = 5;

// const InternationalPackage = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [offset, setOffset] = useState(0);

//   // ✅ Fetch API
//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const res = await fetch(
//           "http://localhost:5000/api/v1/destination/home/get"
//         );
//         const json = await res.json();

//         const international = json?.data?.filter(
//           (d) =>
//             typeof d.domestic_or_international === "string" &&
//             d.domestic_or_international.toLowerCase() === "international"
//         );

//         if (international?.length) {
//           setDestinations(international);
//         }
//       } catch (err) {
//         console.error("Destination fetch error:", err);
//       }
//     };

//     fetchDestinations();
//   }, []);

//   // ✅ Continuous animation
//   useEffect(() => {
//     if (destinations.length < 2) return;

//     const timer = setInterval(() => {
//       setOffset((prev) => prev - 1);
//     }, 1800);

//     return () => clearInterval(timer);
//   }, [destinations.length]);

//   if (!destinations.length) return null;

//   const total = destinations.length;

//   // ✅ Create infinite loop by duplicating cards
//   const extendedCards = [
//     ...destinations,
//     ...destinations,
//     ...destinations,
//   ];

//   const cardWidth = 297; // width + gap
//   const centerOffset = Math.floor(VISIBLE_CARDS / 2);

//   // ✅ Reset position seamlessly when needed
//   const normalizedOffset = offset % total;
//   const translateX = normalizedOffset * cardWidth;

//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       {/* ✅ HEADER */}
//       <div className="text-center mb-20">
//         <p className="text-orange-500 font-semibold mb-2">
//           International Destination
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Explore the World International Hotspots
//         </h2>
//       </div>

//       {/* ✅ CAROUSEL CONTAINER */}
//       <div className="relative flex justify-center items-center overflow-hidden  w-[1600px] h-[700px]">
//         <motion.div
//           className="flex gap-8"
//           animate={{
//             x: translateX,
//           }}
//           transition={{
//             duration: 2.5,
//             ease: [0.25, 0.1, 0.25, 1.2],
//           }}
//           style={{
//             width: `${extendedCards.length * cardWidth}px`,
//           }}
//         >
//           {extendedCards.map((item, index) => {
//             // Calculate distance from center
//             const currentPosition = index + normalizedOffset;
//             const distanceFromCenter = Math.abs(
//               currentPosition % total - centerOffset
//             );

//             return (
//               <CarouselCard
//                 key={`${item._id}-${index}`}
//                 item={item}
//                 distanceFromCenter={distanceFromCenter}
//               />
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default InternationalPackage;

// /* ================================================= */
// /* ✅ INDIVIDUAL CARD */
// /* ================================================= */

// const CarouselCard = ({ item, distanceFromCenter }) => {
//   const image = item.show_image?.[0] || item.title_image?.[0];

//   // ✅ Calculate scale and opacity based on distance from center
//   const getScale = (distance) => {
//     if (distance === 0) return 1.12;
//     if (distance === 1) return 0.88;
//     return 0.74;
//   };

//   const getOpacity = (distance) => {
//     if (distance === 0) return 1.08;
//     if (distance === 1) return 0.90;
//     return 0.8;
//   };

//   const getTranslateY = (distance) => {
//     if (distance === 0) return 0;
//     if (distance === 1) return 14;
//     return 26;
//   };

//   return (
//     <motion.div
//       animate={{
//         scale: getScale(distanceFromCenter),
//         opacity: getOpacity(distanceFromCenter),
//         y: getTranslateY(distanceFromCenter),
//       }}
//       transition={{
//         duration: 0.8,
//         ease: [0.25, 0.1, 0.25, 1],
//       }}
//       className="w-[240px] sm:w-[260px] lg:w-[280px] flex-shrink-0"
//     >
//       <div className="relative rounded-3xl overflow-hidden shadow-3xl">
//         <a href={item.slug ? `/destinations/${item.slug}` : "#"}>
//           <img
//             src={image}
//             alt={item.destination_name}
//             className="w-full h-[380px] sm:h-[550px] object-cover"
//           />

//           {/* ✅ OVERLAY */}
//           <div className="absolute inset-0 bg-black/35 flex flex-col justify-end p-5">
//             <h3 className="self-center text-white text-lg font-semibold mb-3 ">
//               {item.destination_name}
//             </h3>
//             <button className="self-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-1.5 text-sm rounded-full transition">
//               Package Now
//             </button>
//           </div>
//         </a>
//       </div>
//     </motion.div>
//   );
// }






// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const VISIBLE_CARDS = 5;

// const InternationalPackage = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [offset, setOffset] = useState(0);
//   const [isResetting, setIsResetting] = useState(false);

//   // ✅ FETCH API
//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const res = await fetch(
//           "http://localhost:5000/api/v1/destination/home/get"
//         );
//         const json = await res.json();

//         const international = json?.data?.filter(
//           (d) =>
//             typeof d.domestic_or_international === "string" &&
//             d.domestic_or_international.toLowerCase() === "international"
//         );

//         if (international?.length) {
//           setDestinations(international);
//           setOffset(international.length); // ✅ start in middle
//         }
//       } catch (err) {
//         console.error("Destination fetch error:", err);
//       }
//     };

//     fetchDestinations();
//   }, []);

//   const total = destinations.length;

//   // ✅ AUTOPLAY (WHEEL LOGIC)
//   useEffect(() => {
//     if (total < 2) return;

//     const timer = setInterval(() => {
//       setOffset((prev) => {
//         // ✅ reset BEFORE white space
//         if (prev >= total * 2 - 5) {
//           setIsResetting(true);
//           return total;
//         }
//         setIsResetting(false);
//         return prev + 1;
//       });
//     }, 1800);

//     return () => clearInterval(timer);
//   }, [total]);

//   // ✅ AFTER HOOKS
//   if (!total) return null;

//   const extendedCards = [
//     ...destinations,
//     ...destinations,
//     ...destinations,
//   ];

//   const cardWidth = 297;
//   const centerOffset = Math.floor(VISIBLE_CARDS / 2);

//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       {/* HEADER */}
//       <div className="text-center mb-20">
//         <p className="text-orange-500 font-semibold mb-2">
//           International Destination
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Explore the World International Hotspots
//         </h2>
//       </div>

//       {/* CAROUSEL */}
//       <div className="relative flex justify-center items-center overflow-hidden w-[1600px] h-[700px]">
//         <motion.div
//           className="flex gap-8"
//           animate={{ x: -offset * cardWidth }}
//           transition={
//             isResetting
//               ? { duration: 0 } // ✅ invisible jump
//               : { duration: 2.5, ease: [0.25, 0.1, 0.25, 1.2] }
//           }
//           style={{
//             width: `${extendedCards.length * cardWidth}px`,
//           }}
//         >
//           {extendedCards.map((item, index) => {
//             const wrappedIndex =
//               ((index - offset) % total + total) % total;

//             const distanceFromCenter = Math.abs(
//               wrappedIndex - centerOffset
//             );

//             return (
//               <CarouselCard
//                 key={`${index}`}
//                 item={item}
//                 distanceFromCenter={distanceFromCenter}
//               />
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default InternationalPackage;

// /* ================================================= */
// /* CARD */
// /* ================================================= */

// const CarouselCard = ({ item, distanceFromCenter }) => {
//   const image = item.show_image?.[0] || item.title_image?.[0];
//   if (!image) return null;

//   const getScale = (d) => {
//     if (d === 0) return 1.12;
//     if (d === 1) return 0.88;
//     return 0.74;
//   };

//   const getOpacity = (d) => {
//     if (d === 0) return 1.08;
//     if (d === 1) return 0.9;
//     return 0.8;
//   };

//   const getTranslateY = (d) => {
//     if (d === 0) return 0;
//     if (d === 1) return 14;
//     return 26;
//   };

//   return (
//     <motion.div
//       animate={{
//         scale: getScale(distanceFromCenter),
//         opacity: getOpacity(distanceFromCenter),
//         y: getTranslateY(distanceFromCenter),
//       }}
//       transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
//       className="w-[240px] sm:w-[260px] lg:w-[280px] flex-shrink-0"
//     >
//       <div className="relative rounded-3xl overflow-hidden shadow-xl">
//         <img
//           src={image}
//           alt={item.destination_name}
//           className="w-full h-[380px] sm:h-[550px] object-cover"
//         />
//         <div className="absolute inset-0 bg-black/35 flex flex-col justify-end p-5">
//           <h3 className="self-center text-white text-lg font-semibold mb-3">
//             {item.destination_name}
//           </h3>
//           <button className="self-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-1.5 text-sm rounded-full transition">
//             Package Now
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

