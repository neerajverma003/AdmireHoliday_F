// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const DomesticPackage = ({ title = "Explore Domestic Destinations", subtitle = "Discover amazing budget packages across India" }) => {
//   const [destinations, setDestinations] = useState([]);
//   const [destinationsLoading, setDestinationsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const fetchDestinations = async () => {
//     setDestinationsLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/v1/destination/home/get");
//       const data = await res.json();
//       if (data?.data && Array.isArray(data.data)) {
//         const domestic = data.data.filter((dest) => dest.domestic_or_international === "Domestic");
//         setDestinations(domestic);
//       } else {
//         setError("Invalid API response");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Failed to fetch destinations");
//     } finally {
//       setDestinationsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDestinations();
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     hover: {
//       scale: 1.05,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   const handleExploreMore = () => {
//     navigate("/domestic");
//   };

//   return (
//     <section className="relative py-20 bg-gradient-to-b from-white to-yellow-50 mt-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#261F43] mb-2">
//             {title}
//           </h1>
//           <p className="text-lg text-red-600 max-w-2xl mx-auto">
//             {subtitle}
//           </p>
//         </motion.div>

//         {error && <div className="text-center text-red-500 py-4">{error}</div>}

//         {destinationsLoading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {[...Array(6)].map((_, index) => (
//               <div
//                 key={index}
//                 className="h-80 bg-gray-200 rounded-lg animate-pulse"
//               ></div>
//             ))}
//           </div>
//         ) : destinations.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-600">No destinations available at the moment.</p>
//           </div>
//         ) : (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           >
//             {destinations.map((destination) => {
//               // For safety, convert or fallback:
//               const images = Array.isArray(destination.title_image)
//                 ? destination.title_image
//                 : []; 
//               // or use show_image, or destination.images if your backend returns differently

//               return (
//                 <motion.div
//                   key={destination._id}
//                   variants={itemVariants}
//                   whileHover="hover"
//                   className="group relative"
//                 >
//                   <Link
//                     to={`/destinations/${destination.destination_name.toLowerCase()}`}
//                     className="block h-full"
//                     aria-label={`Explore ${destination.destination_name}`}
//                   >
//                     <div className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col">
//                       <div className="relative h-64 overflow-hidden">
//                         {images.length > 0 ? (
//                           images.map((imgUrl, idx) => (
//                             <motion.img
//                               key={idx}
//                               alt={destination.destination_name + ` img ${idx}`}
//                               src={imgUrl}
//                               className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000"
//                               style={{
//                                 // you could fade in/out images or stack them
//                                 opacity: idx === 0 ? 1 : 0,
//                               }}
//                               loading="lazy"
//                               initial={{ opacity: 0.8 }}
//                               whileHover={{ opacity: 1, scale: 1.05 }}
//                               transition={{ duration: 0.5 }}
//                             />
//                           ))
//                         ) : (
//                           <div className="w-full h-full bg-gray-300 flex items-center justify-center">
//                             <span>No Image</span>
//                           </div>
//                         )}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-end p-4 transition-all duration-300 group-hover:from-black/70 group-hover:to-black/40">
//                           <div>
//                             <h3 className="text-white text-xl font-bold tracking-wide mb-1">
//                               {destination.destination_name}
//                             </h3>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="p-4 text-center mt-auto">
//                         <button className="px-4 py-2 bg-[#E69233] hover:bg-[#d5822b] text-white font-medium rounded-full transition-all duration-300 text-sm">
//                           View Packages
//                         </button>
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         )}

//         {destinations.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-center mt-12"
//           >
//             <button
//               onClick={handleExploreMore}
//               className="px-8 py-3 bg-[#E69233] hover:bg-[#d5822b] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E69233] focus:ring-opacity-50"
//             >
//               Explore All Destinations
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default DomesticPackage;





// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const DomesticPackage = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch("http://localhost:5000/api/v1/destination/home/get");
//         const data = await res.json();

//         if (data?.data) {
//           const domestic = data.data.filter(
//             (d) => d.domestic_or_international === "Domestic"
//           );
//           setDestinations(domestic);
//         }
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDestinations();
//   }, []);

//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
//   };

//   // ========================================
//   // STAIRCASE PATTERN CONFIGURATION (3 COLUMNS, 2 ROWS)
//   // ========================================
//   // Adjust these values to change the staircase effect
//   const getCardStyle = (index) => {
//     const col = index % 3; // Which column (0, 1, 2) in each row
//     const row = Math.floor(index / 3); // Which row (0 = first row, 1 = second row, etc.)
    
//     // FIRST ROW (cards 0, 1, 2) - Ascending pattern
//     if (row === 0) {
//       if (col === 0) {
//         return "mt-0"; // 1st card - no offset (EDIT HERE for row 1, card 1)
//       } else if (col === 1) {
//         return "mt-6"; // 2nd card - medium offset (EDIT HERE for row 1, card 2)
//       } else {
//         return "mt-12"; // 3rd card - highest offset (EDIT HERE for row 1, card 3)
//       }
//     }
//     // SECOND ROW (cards 3, 4, 5) - Descending pattern
//     else if (row === 1) {
//       if (col === 0) {
//         return "-mt-[60px]"; // 4th card - highest offset (EDIT HERE for row 2, card 1)
//       } else if (col === 1) {
//         return "-mt-[30px]"; // 5th card - medium offset (EDIT HERE for row 2, card 2)
//       } else {
//         return "-mt-[20px]"; // 6th card - no offset (EDIT HERE for row 2, card 3)
//       }
//     }
//     // THIRD ROW AND BEYOND - Repeat first row pattern
//     else {
//       if (col === 0) {
//         return "mt-0"; // Ascending pattern
//       } else if (col === 1) {
//         return "mt-6";
//       } else {
//         return "mt-12";
//       }
//     }
//   };

//   // ========================================
//   // CARD HEIGHT CONFIGURATION (3 COLUMNS, 2 ROWS)
//   // ========================================
//   // Adjust these values to change card heights
//   const getCardHeight = (index) => {
//     const col = index % 3;
//     const row = Math.floor(index / 3);
    
//     // FIRST ROW (cards 0, 1, 2)
//     if (row === 0) {
//       if (col === 0) {
//         return "h-72"; // 1st card - 288px (EDIT HERE for row 1, card 1)
//       } else if (col === 1) {
//         return "h-82"; // 2nd card - 256px (EDIT HERE for row 1, card 2)
//       } else {
//         return "h-80"; // 3rd card - 320px (EDIT HERE for row 1, card 3)
//       }
//     }
//     // SECOND ROW (cards 3, 4, 5)
//     else if (row === 1) {
//       if (col === 0) {
//         return "h-80"; // 4th card - 320px (EDIT HERE for row 2, card 1)
//       } else if (col === 1) {
//         return "h-64"; // 5th card - 256px (EDIT HERE for row 2, card 2)
//       } else {
//         return "h-72"; // 6th card - 288px (EDIT HERE for row 2, card 3)
//       }
//     }
//     // THIRD ROW AND BEYOND - Repeat first row pattern
//     else {
//       if (col === 0) {
//         return "h-72";
//       } else if (col === 1) {
//         return "h-64";
//       } else {
//         return "h-80";
//       }
//     }
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       {/* Title Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mb-16"
//       >
//         <p className="text-orange-500 font-semibold text-sm tracking-wider uppercase mb-2">
//           Domestic Destination
//         </p>
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//           Explore the India; Domestic Hotspots
//         </h2>
//       </motion.div>

//       {/* Loading State */}
//       {loading && (
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, i) => (
//             <div 
//               key={i} 
//               className={`bg-gray-200 rounded-3xl animate-pulse ${getCardHeight(i)} ${getCardStyle(i)}`}
//             ></div>
//           ))}
//         </div>
//       )}

//       {/* MAIN GRID WITH STAIRCASE EFFECT */}
//       {/* 
//         EDIT GRID SPACING:
//         - gap-x-6 = horizontal gap between cards (24px)
//         - rowGap: '15px' = vertical gap between rows (15px)
//         - lg:grid-cols-3 = 3 columns per row on large screens
//         - This creates: Row 1 (3 cards) → Row 2 (3 cards) → Row 3 (3 cards) etc.
//       */}
//       {!loading && destinations.length > 0 && (
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6"
//           style={{ rowGap: '8px' }} // EDIT HERE: Change '8px' to adjust vertical spacing between rows
//         >
//           {destinations.map((item, index) => {
//             const imgArr = Array.isArray(item.title_image) ? item.title_image : [];
//             const imgURL =
//               imgArr[0] ||
//               "https://via.placeholder.com/600x400?text=No+Image";

//             return (
//               <motion.div
//                 key={item._id}
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                 className={`relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl cursor-pointer group
//                   ${getCardHeight(index)} ${getCardStyle(index)}
//                 `}
//               >
//                 <a
//                   href={`/destinations/${item.destination_name.toLowerCase()}`}
//                   className="block w-full h-full"
//                 >
//                   {/* IMAGE with overlay gradient */}
//                   {/* EDIT IMAGE STYLES: Change rounded-3xl for corner radius */}
//                   <div className="relative w-full h-full overflow-hidden">
//                     <motion.img
//                       src={imgURL}
//                       alt={item.destination_name}
//                       className="w-full h-full object-cover"
//                       whileHover={{ scale: 1.1 }} // EDIT HERE: Change scale value for hover zoom
//                       transition={{ duration: 0.6 }} // EDIT HERE: Change duration for animation speed
//                     />
                    
//                     {/* Gradient overlay - EDIT HERE to change overlay darkness */}
//                     {/* from-black/60 = 60% opacity, adjust as needed */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
//                   </div>

//                   {/* TITLE - Bottom Center */}
//                   {/* EDIT LABEL STYLES: Change bottom-6 for position, text-lg for font size */}
//                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-auto">
//                     <motion.span 
//                       className="inline-block bg-white/20 backdrop-blur-md text-white text-lg font-bold px-6 py-2 rounded-full border border-white/30 shadow-xl"
//                       whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
//                     >
//                       {item.destination_name}
//                     </motion.span>
//                   </div>
//                 </a>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       )}

//       {/* Explore All Button */}
//       {!loading && destinations.length > 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => window.location.href = "/domestic"}
//             className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
//           >
//             Explore All Destinations
//           </motion.button>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default DomesticPackage;









import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DomesticPackage = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/v1/destination/home/get");
        const data = await res.json();

        if (data?.data) {
          const domestic = data.data.filter(
            (d) => d.domestic_or_international === "Domestic"
          );
          setDestinations(domestic);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  // ============================
  //  STAIRCASE MARGIN POSITIONS
  // ============================
  const getCardStyle = (index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);

    // FIRST ROW (0,1,2)
    if (row === 0) {
      if (col === 0) return "mt-0";
      if (col === 1) return "mt-[60px]";
      return "mt-[115px]";
    }

    // SECOND ROW (3,4,5)
    if (row === 1) {
      if (col === 0) return "-mt-[65px]";
      if (col === 1) return "-mt-3";
      return "mt-10";
    }

    // REPEAT PATTERN FOR MORE ROWS
    if (col === 0) return "mt-0";
    if (col === 1) return "mt-6";
    return "mt-12";
  };

  // ============================
  //  ALL CARDS SAME HEIGHT
  // ============================
  const getCardHeight = () => "h-[350px]"; // CHANGE HEIGHT ANYTIME

  const handleCardClick = (destinationId) => {
    navigate(`/destination-itineraries/${destinationId}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-center text-xl md:text-2xl font-extrabold text-orange-500">
          Domestic Destination
        </p>
        
      </motion.div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="max-w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`bg-gray-200 rounded-3xl animate-pulse ${getCardHeight()} ${getCardStyle(i)}`}
            ></div>
          ))}
        </div>
      )}

      {/* MAIN GRID */}
      {!loading && destinations.length > 0 && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6"
          style={{ rowGap: "8px" }}
        >
          {destinations.map((item, index) => {
            const imgArr = Array.isArray(item.title_image) ? item.title_image : [];
            const imgURL =
              imgArr[0] || "https://via.placeholder.com/600x400?text=No+Image";

            return (
              <motion.div
                key={item._id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl cursor-pointer group 
                  ${getCardHeight()} ${getCardStyle(index)}
                `}
                onClick={() => handleCardClick(item._id)}
              >
                {/* IMAGE */}
                <div className="relative w-full h-full overflow-hidden">
                  <motion.img
                    src={imgURL}
                    alt={item.destination_name}
                    className="w-full h-full object-orignal"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* TITLE */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <motion.span
                    className="inline-block bg-white/20 backdrop-blur-md text-white text-lg font-bold px-6 py-2 rounded-full border border-white/30 shadow-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.destination_name}
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* BUTTON */}
      {!loading && destinations.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/domestic")}
            className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Explore All Destinations
          </motion.button>
        </motion.div>
      )}
    </section>
  );
};

export default DomesticPackage;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const DomesticPackage = () => {
//   const navigate = useNavigate();
//   const [destinations, setDestinations] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(
//           "http://localhost:5000/api/v1/destination/home/get"
//         );
//         const data = await res.json();

//         if (data?.data) {
//           const domestic = data.data.filter(
//             (d) => d.domestic_or_international === "Domestic"
//           );
//           setDestinations(domestic);
//         }
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDestinations();
//   }, []);

//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7 },
//     },
//   };

//   /* ============================
//      RESPONSIVE STAIRCASE LOGIC
//   ============================ */
//   const getCardStyle = (index) => {
//     const col = index % 3;
//     const row = Math.floor(index / 3);

//     return `
//       mt-0
//       sm:${col === 1 ? "mt-6" : col === 2 ? "mt-12" : "mt-0"}
//       lg:${
//         row === 0
//           ? col === 0
//             ? "mt-0"
//             : col === 1
//             ? "mt-[60px]"
//             : "mt-[115px]"
//           : row === 1
//           ? col === 0
//             ? "-mt-[65px]"
//             : col === 1
//             ? "-mt-3"
//             : "mt-10"
//           : col === 1
//           ? "mt-6"
//           : col === 2
//           ? "mt-12"
//           : "mt-0"
//       }
//     `;
//   };

//   /* ============================
//      RESPONSIVE HEIGHT
//   ============================ */
//   const getCardHeight = () =>
//     "h-[260px] sm:h-[300px] lg:h-[350px]";

//   const handleCardClick = (id) => {
//     navigate(`/destination-itineraries/${id}`);
//   };

//   return (
//     <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-gray-50">
//       {/* TITLE */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mb-12 sm:mb-16 px-4"
//       >
//         <p className="text-center text-xl md:text-2xl font-extrabold text-orange-500">
//           Domestic Destination
//         </p>
        
//       </motion.div>

//       {/* LOADING */}
//       {loading && (
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, i) => (
//             <div
//               key={i}
//               className={`bg-gray-200 rounded-3xl animate-pulse ${getCardHeight()}`}
//             />
//           ))}
//         </div>
//       )}

//       {/* GRID */}
//       {!loading && destinations.length > 0 && (
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {destinations.map((item, index) => {
//             const imgArr = Array.isArray(item.title_image)
//               ? item.title_image
//               : [];
//             const imgURL =
//               imgArr[0] ||
//               "https://via.placeholder.com/600x400?text=No+Image";

//             return (
//               <motion.div
//                 key={item._id}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ type: "spring", stiffness: 200, damping: 18 }}
//                 className={`
//                   relative rounded-3xl overflow-hidden bg-white shadow-lg 
//                   hover:shadow-2xl cursor-pointer group 
//                   ${getCardHeight()} ${getCardStyle(index)}
//                 `}
//                 onClick={() => handleCardClick(item._id)}
//               >
//                 {/* IMAGE */}
//                 <div className="absolute inset-0">
//                   <motion.img
//                     src={imgURL}
//                     alt={item.destination_name}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.6 }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
//                 </div>

//                 {/* TITLE */}
//                 <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
//                   <span className="inline-block bg-white/20 backdrop-blur-md text-white text-base sm:text-lg font-bold px-5 py-2 rounded-full border border-white/30 shadow-xl">
//                     {item.destination_name}
//                   </span>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       )}

//       {/* BUTTON */}
//       {!loading && destinations.length > 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mt-14"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => navigate("/domestic")}
//             className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition"
//           >
//             Explore All Destinations
//           </motion.button>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default DomesticPackage;
