// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { use } from 'react';
// // import { getHomeDomesticInternational,  } from "../api/api";

// const InternationalPackage = () => {
//   const [destination , setDestination] = useState("");
//   const [destinations, setDestinations] = useState([]);
//   const [destinationsLoading, setDestinationsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Helper function to validate image URLs
//   const isValidUrl = (url) => {
//     try {
//       new URL(url);
//       return true;
//     } catch {
//       return false;
//     }
//   };

//   const fetchDestinations = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/v1/destination/home/get");
//       const data = await res.json();
//       console.log(data);
//       console.log(data.data[1].show_image[0])
//       if (data?.data && Array.isArray(data.data)) {
//         setDestinations(data.data);

//         setLoading(false);
//       } else {
//         setError("Invalid API response");
//         setLoading(false);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Failed to fetch destinations");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {fetchDestinations();}, []);
// // get international

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     },
//     hover: {
//       scale: 1.05,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const handleClick = () => {
//     navigate("/international");
//   };

//   return (
//     <section className="relative py-20 bg-gradient-to-b from-white to-red-600 mt-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#261F43] mb-2">
//             Explore International Destinations
//           </h1>
//           <p className="text-lg text-red-600 max-w-2xl mx-auto">
//             Affordable international tours
//           </p>
//         </motion.div>

//         {error && (
//           <div className="text-center text-yellow-300 py-4">
//             {error}
//           </div>
//         )}

//         {destinationsLoading ? (
//           <div className="text-center py-12">
//             <p className="text-white">Loading destinations...</p>
//           </div>
//         ) : destinations.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-white">No destinations available at the moment.</p>
//           </div>
//         ) : (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           >
//             {destinations.map((destination) => (
//               <motion.div
//                 key={destination.id}
//                 variants={itemVariants}
//                 whileHover="hover"
//                 className="group relative"
//               >
//                 <Link
//                   to={`/destinations/${destination.slug}`}
//                   className="block h-full"
//                 >
//                   <div className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col cursor-pointer">
//                     <div className="relative h-64 overflow-hidden">
//                       {destination.image ? (
//                         <motion.img
//                           alt={destination.name}
//                           src={`${destination.show_image[0]}`}
//                           className="w-full h-full object-cover"
//                           loading="lazy"
//                           initial={{ opacity: 0.8 }}
//                           whileHover={{ opacity: 1, scale: 1.1 }}
//                           transition={{ duration: 0.5 }}
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                           <span>Image not available</span>
//                         </div>
//                       )}
//                       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-50">
//                         <h3 className="text-white text-xl font-bold tracking-wide transition-transform duration-300 group-hover:scale-110">
//                           {destination.name}
//                         </h3>
//                       </div>
//                     </div>
//                     <div className="p-4 text-center mt-auto">
//                       <p className="text-gray-600">
//                         Click to explore {destination.name}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-12"
//         >
//           <button
//             onClick={handleClick}
//             className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-red-700 font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
//           >
//             Explore More
//           </button>
//         </motion.div>
//       </div>

//       {/* Decorative animated elements */}
//       <motion.div
//         className="absolute top-20 left-10 w-8 h-8 rounded-full bg-white opacity-30"
//         animate={{
//           y: [0, 20, 0],
//           x: [0, 10, 0]
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-yellow-300 opacity-20"
//         animate={{
//           y: [0, -20, 0],
//           x: [0, -10, 0]
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1
//         }}
//       />
//     </section>
//   );
// };

// export default InternationalPackage;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const InternationalPackage = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [destinationsLoading, setDestinationsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const fetchDestinations = async () => {
//     setDestinationsLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/v1/destination/home/get");
//       const data = await res.json();
//       console.log(data)
//       if (data?.data && Array.isArray(data.data)) {
//         setDestinations(data.data);
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
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     },
//     hover: {
//       scale: 1.05,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const handleClick = () => {
//     navigate("/international");
//   };

//   return (
//     <section className="relative py-20 bg-gradient-to-b from-white to-red-600 mt-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#261F43] mb-2">
//             Explore International Destinations
//           </h1>
//           <p className="text-lg text-red-600 max-w-2xl mx-auto">
//             Affordable international tours
//           </p>
//         </motion.div>

//         {error && (
//           <div className="text-center text-yellow-300 py-4">
//             {error}
//           </div>
//         )}

//         {destinationsLoading ? (
//           <div className="text-center py-12">
//             <p className="text-white">Loading destinations...</p>
//           </div>
//         ) : destinations.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-white">No destinations available at the moment.</p>
//           </div>
//         ) : (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           >
//             {destinations.map((destination) => (
//               <motion.div
//                 key={destination._id}
//                 variants={itemVariants}
//                 whileHover="hover"
//                 className="group relative"
//               >
//                 <Link
//                   to={`/destinations/${destination.slug}`}
//                   className="block h-full"
//                 >
//                   <div className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col cursor-pointer">
//                     <div className="relative h-64 overflow-hidden">
//                       {destination.show_image && destination.show_image.length > 0 ? (
//                         <motion.img
//                           alt={destination.destination_name}
//                           src={destination.show_image[0]}
//                           className="w-full h-full object-fill"
//                           loading="lazy"
//                           initial={{ opacity: 0.8 }}
//                           whileHover={{ opacity: 1, scale: 1.1 }}
//                           transition={{ duration: 0.5 }}
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                           <span>Image not available</span>
//                         </div>
//                       )}
//                       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-50">
//                         <h3 className="text-white text-xl font-bold tracking-wide transition-transform duration-300 group-hover:scale-110">
//                           {destination.destination_name}
//                         </h3>
//                       </div>
//                     </div>
//                     <div className="p-4 text-center mt-auto">
//                       <p className="text-gray-600">
//                         Click to explore {destination.destination_name}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-12"
//         >
//           <button
//             onClick={handleClick}
//             className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-red-700 font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
//           >
//             Explore More
//           </button>
//         </motion.div>
//       </div>

//       {/* Decorative animated elements */}
//       <motion.div
//         className="absolute top-20 left-10 w-8 h-8 rounded-full bg-white opacity-30"
//         animate={{
//           y: [0, 20, 0],
//           x: [0, 10, 0]
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-yellow-300 opacity-20"
//         animate={{
//           y: [0, -20, 0],
//           x: [0, -10, 0]
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1
//         }}
//       />
//     </section>
//   );
// };

// export default InternationalPackage;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";

// const InternationalPackage = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [destinationsLoading, setDestinationsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const fetchDestinations = async () => {
//     setDestinationsLoading(true);
//     try {
//       const res = await fetch(
//         "http://localhost:5000/api/v1/destination/home/get"
//       );
//       const json = await res.json();
//       console.log("API response:", json);
//       if (json?.data && Array.isArray(json.data)) {
//         const internationalDestinations = json.data.filter((dest) => {
//           const val = dest.domestic_or_international;
//           return (
//             typeof val === "string" &&
//             val.toLowerCase() === "international"
//           );
//         });
//         console.log("Filtered international:", internationalDestinations);
//         setDestinations(internationalDestinations);
//       } else {
//         setError("Invalid API response");
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
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

//   const handleClick = () => {
//     navigate("/international");
//   };

//   return (
//     <section className="relative py-20 bg-gradient-to-b from-white to-red-600 mt-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#261F43] mb-2">
//             Explore International Destinations
//           </h1>
//           <p className="text-lg text-red-600 max-w-2xl mx-auto">
//             Affordable international tours
//           </p>
//         </motion.div>

//         {error && (
//           <div className="text-center text-yellow-300 py-4">{error}</div>
//         )}

//         {destinationsLoading ? (
//           <div className="text-center py-12">
//             <p className="text-white">Loading destinations...</p>
//           </div>
//         ) : destinations.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-white">
//               No destinations available at the moment.
//             </p>
//           </div>
//         ) : (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           >
//             {destinations.map((destination) => {
//               const imageUrl =
//                 (destination.show_image &&
//                   destination.show_image.length > 0 &&
//                   destination.show_image[0]) ||
//                 (destination.title_image &&
//                   destination.title_image.length > 0 &&
//                   destination.title_image[0]) ||
//                 null;

//               return (
//                 <motion.div
//                   key={destination._id}
//                   variants={itemVariants}
//                   whileHover="hover"
//                   className="group relative"
//                 >
//                   {destination.slug ? (
//                     <Link
//                       to={`/destinations/${destination.slug}`}
//                       className="block h-full"
//                     >
//                       <div className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col cursor-pointer">
//                         <div className="relative h-64 overflow-hidden">
//                           {imageUrl ? (
//                             <motion.img
//                               alt={destination.destination_name}
//                               src={imageUrl}
//                               className="w-full h-full object-fill"
//                               loading="lazy"
//                               initial={{ opacity: 0.8 }}
//                               whileHover={{ opacity: 1, scale: 1.1 }}
//                               transition={{ duration: 0.5 }}
//                             />
//                           ) : (
//                             <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                               <span>Image not available</span>
//                             </div>
//                           )}
//                           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-50">
//                             <h3 className="text-white text-xl font-bold tracking-wide transition-transform duration-300 group-hover:scale-110">
//                               {destination.destination_name}
//                             </h3>
//                           </div>
//                         </div>
//                         <div className="p-4 text-center mt-auto">
//                           <p className="text-gray-600">
//                             Click to explore {destination.destination_name}
//                           </p>
//                         </div>
//                       </div>
//                     </Link>
//                   ) : (
//                     <div className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col cursor-default">
//                       <div className="relative h-64 overflow-hidden">
//                         {imageUrl ? (
//                           <motion.img
//                             alt={destination.destination_name}
//                             src={imageUrl}
//                             className="w-full h-full object-fill"
//                             loading="lazy"
//                             initial={{ opacity: 0.8 }}
//                             whileHover={{ opacity: 1, scale: 1.1 }}
//                             transition={{ duration: 0.5 }}
//                           />
//                         ) : (
//                           <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                             <span>Image not available</span>
//                           </div>
//                         )}
//                         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-50">
//                           <h3 className="text-white text-xl font-bold tracking-wide transition-transform duration-300 group-hover:scale-110">
//                             {destination.destination_name}
//                           </h3>
//                         </div>
//                       </div>
//                       <div className="p-4 text-center mt-auto">
//                         <p className="text-gray-600">
//                           {destination.destination_name}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         )}

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-12"
//         >
//           <button
//             onClick={handleClick}
//             className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-red-700 font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
//           >
//             Explore More
//           </button>
//         </motion.div>
//       </div>

//       {/* Decorative animated elements */}
//       <motion.div
//         className="absolute top-20 left-10 w-8 h-8 rounded-full bg-white opacity-30"
//         animate={{
//           y: [0, 20, 0],
//           x: [0, 10, 0],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-yellow-300 opacity-20"
//         animate={{
//           y: [0, -20, 0],
//           x: [0, -10, 0],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1,
//         }}
//       />
//     </section>
//   );
// };

// export default InternationalPackage;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const InternationalPackage = () => {
  const [destinations, setDestinations] = useState([]);
  const [destinationsLoading, setDestinationsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchDestinations = async () => {
    setDestinationsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/destination/home/get");
      const json = await res.json();
      if (json?.data && Array.isArray(json.data)) {
        const internationalDestinations = json.data.filter((dest) => {
          const val = dest.domestic_or_international;
          return typeof val === "string" && val.toLowerCase() === "international";
        });
        setDestinations(internationalDestinations.slice(0, 6)); // show only first 6
      } else {
        setError("Invalid API response");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch destinations");
    } finally {
      setDestinationsLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const handleClick = () => {
    navigate("/international");
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-red-600 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#261F43] mb-2">
            Explore International Destinations
          </h1>
          <p className="text-lg text-red-600 max-w-2xl mx-auto">
            Affordable international tours
          </p>
        </div>

        {/* Error or Loading */}
        {error && <div className="text-center text-yellow-300 py-4">{error}</div>}

        {destinationsLoading ? (
          <div className="text-center py-12">
            <p className="text-white">Loading destinations...</p>
          </div>
        ) : destinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white">No destinations available at the moment.</p>
          </div>
        ) : (
          // Grid container: 3 columns, centered
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto">
            {destinations.map((destination) => {
              const imageUrl =
                destination.show_image?.[0] ||
                destination.title_image?.[0] ||
                null;

              return (
                <div
                  key={destination._id}
                  className="rounded-lg shadow-lg bg-white cursor-pointer flex flex-col h-full"
                >
                  <div className="group relative h-full">
                    {destination.slug ? (
                      <Link to={`/destinations/${destination.slug}`} className="block h-full">
                        <div className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col cursor-pointer">
                          <div className="relative h-64 overflow-hidden">
                            {imageUrl ? (
                              <img
                                src={imageUrl}
                                alt={destination.destination_name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <span>Image not available</span>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
                              <h3 className="text-white text-xl font-bold tracking-wide">
                                {destination.destination_name}
                              </h3>
                            </div>
                          </div>
                          <div className="p-4 text-center mt-auto">
                            <p className="text-gray-600">
                              Click to explore {destination.destination_name}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col cursor-default">
                        <div className="relative h-64 overflow-hidden">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={destination.destination_name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <span>Image not available</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h3 className="text-white text-xl font-bold tracking-wide">
                              {destination.destination_name}
                            </h3>
                          </div>
                        </div>
                        <div className="p-4 text-center mt-auto">
                          <p className="text-gray-600">{destination.destination_name}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleClick}
            className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-red-700 font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternationalPackage;



