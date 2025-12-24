// // import React, { useState, useEffect } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, EffectFade } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/effect-fade";
// // import { Link } from 'react-router-dom';
// // // import { getTrendingDestinations } from '../api/api.js';

// // const TrendingDestinations = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [destinations, setDestinations] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [getdata , setGetdata] = useState("");

// //   const response = async () => {
// //     try {
// //       const result =await fetch("http://localhost:5000/api/v1/destination/home/get");
// //       const data = await result.json();
// //       setDestinations(data);
// //       console.log(data);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   }
// //   useEffect(()=>{
// //     response()
// //   },[])

// //   if (loading) {
// //     return (
// //       <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
// //         <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-16">
// //           Trending Destinations
// //         </h2>
// //         <div className="flex justify-center gap-6 max-w-7xl mx-auto">
// //           {[...Array(4)].map((_, i) => (
// //             <div key={i} className="w-72 h-96 bg-gray-200 rounded-xl animate-pulse"></div>
// //           ))}
// //         </div>
// //       </section>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
// //         <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
// //           Trending Destinations
// //         </h2>
// //         {/* <p className="text-red-500 mb-16">{error}</p> */}
// //       </section>
// //     );
// //   }
// // if(getdata)
// //   if (destinations.length === 0) {
// //     return (
// //       <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
// //         <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
// //           Trending Destinations
// //         </h2>
// //         <p className="text-gray-600 mb-16">No destinations available at the moment</p>
// //       </section>
// //     );
// //   }

// //   return (
// //     <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
// //       <h2
// //         className={`text-4xl md:text-5xl font-extrabold text-red-600 mb-16 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
// //           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
// //         }`}
// //         style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
// //       >
// //         Trending Destinations
// //       </h2>

// //       <div className="flex justify-center gap-6 max-w-7xl mx-auto mb-8 flex-wrap">
// //         {destinations.slice(0, 4).map((destination, index) => (
// //           <DestinationCard
// //             key={destination.id}
// //             destination={destination}
// //             isVisible={isVisible}
// //             index={index}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // const DestinationCard = ({ destination, isVisible, index }) => {
// //   return (
// //     <div
// //       className={`w-72 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white hover:-translate-y-2 hover:shadow-xl ${
// //         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// //       }`}
// //       style={{ transitionDelay: `${index * 100}ms` }}
// //     >
// //       <Link to={`/destinations/${destination.slug}`} className="no-underline text-inherit">
// //         <div className="h-80 relative overflow-hidden">
// //           <Swiper
// //             modules={[Autoplay, EffectFade]}
// //             autoplay={{
// //               delay: 3000,
// //               disableOnInteraction: false,
// //             }}
// //             effect="fade"
// //             speed={1000}
// //             loop={true}
// //             className="w-full h-full"
// //           >
// //             {destination.images.map((image, imgIndex) => (
// //               <SwiperSlide key={imgIndex}>
// //                 <img
// //                   src={image}
// //                   alt={destination.name}
// //                   className="w-full h-full object-cover transition-transform duration-800 ease-in-out hover:scale-105"
// //                 />
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>

// //           <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-left text-white transition-all duration-300 ease-in-out group-hover:-translate-y-2">
// //             {/* <h3 className="m-0 text-xl md:text-2xl font-bold mb-2">{getdata.data.destination_name
// // }</h3> */}
// //             <p className="m-0 text-sm md:text-base opacity-90">{destination.description}</p>
// //           </div>
// //         </div>

// //         <div className="p-4 text-left bg-white">
// //           <div className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-200">
// //             {destination.name}
// //           </div>
// //         </div>
// //       </Link>
// //     </div>
// //   );
// // };

// // export default TrendingDestinations;

// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import { Link } from "react-router-dom";

// const TrendingDestinations = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [visibleDestinations, setVisibleDestinations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // ✅ Fetch data
//   const fetchDestinations = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/v1/destination/home/get");
//       const data = await res.json();

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

//   // ✅ Randomize 4 destinations
//   const getRandomFour = (arr) => {
//     const shuffled = [...arr].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, 4);
//   };

//   // ✅ Fetch once on mount
//   useEffect(() => {
//     fetchDestinations();
//   }, []);

//   // ✅ Update visible cards every 15 seconds
//   useEffect(() => {
//     if (destinations.length > 0) {
//       setVisibleDestinations(getRandomFour(destinations));
//       const interval = setInterval(() => {
//         setVisibleDestinations(getRandomFour(destinations));
//       }, 15000);
//       return () => clearInterval(interval);
//     }
//   }, [destinations]);

//   if (loading) {
//     return (
//       <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-16">
//           Trending Destinations
//         </h2>
//         <div className="flex justify-center gap-6 max-w-7xl mx-auto">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="w-72 h-96 bg-gray-200 rounded-xl animate-pulse"></div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
//           Trending Destinations
//         </h2>
//         <p className="text-red-500">{error}</p>
//       </section>
//     );
//   }

//   if (visibleDestinations.length === 0) {
//     return (
//       <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
//           Trending Destination1
//         </h2>
//         <p className="text-gray-600 mb-16">No destinations available at the moment</p>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-16">
//         Trending Destinations
//       </h2>

//       <div className="flex justify-center gap-6 max-w-7xl mx-auto mb-8 flex-wrap">
//         {visibleDestinations.map((destination, index) => (
//           <DestinationCard key={destination._id || index} destination={destination} />
//         ))}
//       </div>
//     </section>
//   );
// };

// // ✅ Card component (same UI)
// const DestinationCard = ({ destination }) => {
//   const images = destination?.title_image?.length
//     ? destination.title_image
//     : destination?.show_image || [];

//   return (
//     <div className="w-72 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white hover:-translate-y-2 hover:shadow-xl">
//       <Link to={`/destinations/${destination._id}`} className="no-underline text-inherit">
//         <div className="h-80 relative overflow-hidden">
//           <Swiper
//             modules={[Autoplay, EffectFade]}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             effect="fade"
//             speed={1000}
//             loop={true}
//             className="w-full h-full"
//           >
//             {images.length > 0 ? (
//               images.map((image, imgIndex) => (
//                 <SwiperSlide key={imgIndex}>
//                   <img
//                     src={image}
//                     alt={destination.destination_name || "Destination"}
//                     className="w-full h-full object-cover transition-transform duration-800 ease-in-out hover:scale-105"
//                   />
//                 </SwiperSlide>
//               ))
//             ) : (
//               <SwiperSlide>
//                 <img
//                   src="https://via.placeholder.com/400x500?text=No+Image"
//                   alt="No Image"
//                   className="w-full h-full object-cover"
//                 />
//               </SwiperSlide>
//             )}
//           </Swiper>

//           <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-left text-white">
//             <p className="m-0 text-sm md:text-base opacity-90">
//               {destination.terms_and_conditions || ""}
//             </p>
//           </div>
//         </div>

//         <div className="p-4 text-left bg-white">
//           <div className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-200">
//             {destination.destination_name || "Untitled Destination"}
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default TrendingDestinations;

// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import { Link } from "react-router-dom";

// const TrendingDestinations = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [visibleDestinations, setVisibleDestinations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // ✅ Fetch data
//   const fetchDestinations = async () => {
//     try {
//       const res = await fetch(
//         "http://localhost:5000/api/v1/destination/home/get"
//       );
//       const data = await res.json();

//       if (Array.isArray(data?.data)) {
//         setDestinations(data.data);
//       } else {
//         throw new Error("Invalid API response format");
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setError("Failed to fetch destinations");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Shuffle and get 4 random destinations
//   const getRandomFour = (arr) => {
//     return [...arr].sort(() => 0.5 - Math.random()).slice(0, 4);
//   };

//   // ⏱ Fetch on mount
//   useEffect(() => {
//     fetchDestinations();
//   }, []);

//   // 🔁 Rotate visible cards every 15 seconds
//   useEffect(() => {
//     if (destinations.length > 0) {
//       setVisibleDestinations(getRandomFour(destinations));
//       const interval = setInterval(() => {
//         setVisibleDestinations(getRandomFour(destinations));
//       }, 15000);
//       return () => clearInterval(interval);
//     }
//   }, [destinations]);

//   // 🧾 Loading state
//   if (loading) {
//     return (
//       <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-16">
//           Trending Destinations
//         </h2>
//         <div className="flex justify-center gap-6 max-w-7xl mx-auto flex-wrap">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className="w-72 h-96 bg-gray-200 rounded-xl animate-pulse"
//             ></div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   // ❌ Error state
//   if (error) {
//     return (
//       <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
//           Trending Destinations
//         </h2>
//         <p className="text-red-500">{error}</p>
//       </section>
//     );
//   }

//   // 📭 No data
//   if (visibleDestinations.length === 0) {
//     return (
//       <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
//           Trending Destinations
//         </h2>
//         <p className="text-gray-600 mb-16">
//           No destinations available at the moment.
//         </p>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-16">
//         Trending Destinations
//       </h2>

//       <div className="flex justify-center gap-6 max-w-7xl mx-auto flex-wrap">
//         {visibleDestinations.map((destination) => (
//           <DestinationCard key={destination._id} destination={destination} />
//         ))}
//       </div>
//     </section>
//   );
// };

// // ✅ Card Component
// const DestinationCard = ({ destination }) => {
//   const images =
//     Array.isArray(destination?.title_image) && destination.title_image.length
//       ? destination.title_image
//       : Array.isArray(destination?.show_image)
//       ? destination.show_image
//       : [];

//   const shouldLoop = images.length > 1;

//   const handleCardClick = () => {
//     // Navigate to destination itineraries page using destination ID
//     window.location.href = `/destination-itineraries/${destination._id}`;
//   };

//   return (
//     <div 
//       className="w-72 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white hover:-translate-y-2 hover:shadow-xl"
//       onClick={handleCardClick}
//     >
//       <div className="h-80 relative overflow-hidden">
//         <Swiper
//           modules={[Autoplay, EffectFade]}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           effect="fade"
//           speed={1000}
//           loop={shouldLoop}
//           className="w-full h-full"
//         >
//           {images.length > 0 ? (
//             images.map((imgUrl, idx) => (
//               <SwiperSlide key={idx}>
//                 <img
//                   src={imgUrl}
//                   alt={`Image ${idx + 1} of ${
//                     destination.destination_name || "Destination"
//                   }`}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                   loading="lazy"
//                 />
//               </SwiperSlide>
//             ))
//           ) : (
//             <SwiperSlide>
//               <img
//                 src="https://placehold.co/400x500?text=No+Image"
//                 alt="No image available"
//                 className="w-full h-full object-cover"
//               />
//             </SwiperSlide>
//           )}
//         </Swiper>

//         {destination?.terms_and_conditions && (
//           <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-left text-white">
//             <p className="m-0 text-sm md:text-base opacity-90">
//               {destination.terms_and_conditions}
//             </p>
//           </div>
//         )}
//       </div>

//       <div className="p-4 text-left bg-white">
//         <h3 className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-200">
//           {destination.destination_name || "Untitled Destination"}
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default TrendingDestinations;
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";

// const TrendingDestinations = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [visibleDestinations, setVisibleDestinations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   /* ================= FETCH DATA ================= */
//   const fetchDestinations = async () => {
//     try {
//       const res = await fetch(
//         "http://localhost:5000/api/v1/destination/home/get"
//       );
//       const data = await res.json();

//       if (Array.isArray(data?.data)) {
//         setDestinations(data.data);
//       } else {
//         throw new Error("Invalid API response format");
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setError("Failed to fetch destinations");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= RANDOM 4 ================= */
//   const getRandomFour = (arr) =>
//     [...arr].sort(() => 0.5 - Math.random()).slice(0, 4);

//   useEffect(() => {
//     fetchDestinations();
//   }, []);

//   /* ================= ROTATE ================= */
//   useEffect(() => {
//     if (destinations.length > 0) {
//       setVisibleDestinations(getRandomFour(destinations));
//       const interval = setInterval(() => {
//         setVisibleDestinations(getRandomFour(destinations));
//       }, 15000);
//       return () => clearInterval(interval);
//     }
//   }, [destinations]);

//   /* ================= LOADING ================= */
//   if (loading) {
//     return (
//       <section className="py-14 md:py-20 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-red-600 mb-12">
//           Trending Destinations
//         </h2>

//         <div className="flex justify-center gap-6 max-w-7xl mx-auto flex-wrap">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className="w-[260px] sm:w-72 h-[360px] bg-gray-200 rounded-xl animate-pulse"
//             />
//           ))}
//         </div>
//       </section>
//     );
//   }

//   /* ================= ERROR ================= */
//   if (error) {
//     return (
//       <section className="py-14 md:py-20 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-red-600 mb-4">
//           Trending Destinations
//         </h2>
//         <p className="text-red-500">{error}</p>
//       </section>
//     );
//   }

//   /* ================= EMPTY ================= */
//   if (visibleDestinations.length === 0) {
//     return (
//       <section className="py-14 md:py-20 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-red-600 mb-4">
//           Trending Destinations
//         </h2>
//         <p className="text-gray-600 mb-12">
//           No destinations available at the moment.
//         </p>
//       </section>
//     );
//   }

//   return (
//     <section className="py-14 md:py-20 px-4 text-center bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
//       <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-red-600 mb-12 md:mb-16">
//         Trending Destinations
//       </h2>

//       <div className="flex justify-center gap-6 max-w-7xl mx-auto flex-wrap">
//         {visibleDestinations.map((destination) => (
//           <DestinationCard
//             key={destination._id}
//             destination={destination}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// /* ================= CARD ================= */
// const DestinationCard = ({ destination }) => {
//   const images =
//     Array.isArray(destination?.title_image) &&
//     destination.title_image.length
//       ? destination.title_image
//       : Array.isArray(destination?.show_image)
//       ? destination.show_image
//       : [];

//   const shouldLoop = images.length > 1;

//   const handleCardClick = () => {
//     window.location.href = `/destination-itineraries/${destination._id}`;
//   };

//   return (
//     <div
//       onClick={handleCardClick}
//       className="
//         w-[260px] sm:w-72
//         rounded-xl overflow-hidden
//         shadow-lg bg-white
//         cursor-pointer
//         transition-all duration-700
//         ease-[cubic-bezier(0.16,1,0.3,1)]
//         hover:-translate-y-2 hover:shadow-xl
//       "
//     >
//       {/* IMAGE SLIDER */}
//       <div className="h-[300px] sm:h-[320px] md:h-[360px] relative overflow-hidden">
//         <Swiper
//           modules={[Autoplay, EffectFade]}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           effect="fade"
//           speed={1000}
//           loop={shouldLoop}
//           className="w-full h-full"
//         >
//           {images.length > 0 ? (
//             images.map((imgUrl, idx) => (
//               <SwiperSlide key={idx}>
//                 <img
//                   src={imgUrl}
//                   alt={`Image ${idx + 1} of ${
//                     destination.destination_name || "Destination"
//                   }`}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                   loading="lazy"
//                 />
//               </SwiperSlide>
//             ))
//           ) : (
//             <SwiperSlide>
//               <img
//                 src="https://placehold.co/400x500?text=No+Image"
//                 alt="No image available"
//                 className="w-full h-full object-cover"
//               />
//             </SwiperSlide>
//           )}
//         </Swiper>

//         {/* OVERLAY TEXT */}
//         {destination?.terms_and_conditions && (
//           <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 to-transparent text-left text-white">
//             <p className="text-xs sm:text-sm md:text-base opacity-90">
//               {destination.terms_and_conditions}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* TITLE */}
//       <div className="p-4 text-left">
//         <h3 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-200">
//           {destination.destination_name || "Untitled Destination"}
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default TrendingDestinations;
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";

// const TrendingDestinations = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [visibleDestinations, setVisibleDestinations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   /* ================= FETCH DATA ================= */
//   const fetchDestinations = async () => {
//     try {
//       const res = await fetch(
//         "http://localhost:5000/api/v1/destination/home/get"
//       );
//       const data = await res.json();

//       if (Array.isArray(data?.data)) {
//         setDestinations(data.data);
//       } else {
//         throw new Error("Invalid API response format");
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setError("Failed to fetch destinations");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= RANDOM 4 ================= */
//   const getRandomFour = (arr) =>
//     [...arr].sort(() => 0.5 - Math.random()).slice(0, 4);

//   useEffect(() => {
//     fetchDestinations();
//   }, []);

//   /* ================= ROTATE ================= */
//   useEffect(() => {
//     if (destinations.length > 0) {
//       setVisibleDestinations(getRandomFour(destinations));
//       const interval = setInterval(() => {
//         setVisibleDestinations(getRandomFour(destinations));
//       }, 15000);
//       return () => clearInterval(interval);
//     }
//   }, [destinations]);

//   /* ================= LOADING ================= */
//   if (loading) {
//     return (
//       <section className="py-12 sm:py-14 md:py-20 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-red-600 mb-10 md:mb-12">
//           Trending Destinations
//         </h2>

//         <div className="flex justify-center gap-6 max-w-7xl mx-auto flex-wrap">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className="w-[260px] sm:w-72 h-[320px] sm:h-[360px] bg-gray-200 rounded-xl animate-pulse"
//             />
//           ))}
//         </div>
//       </section>
//     );
//   }

//   /* ================= ERROR ================= */
//   if (error) {
//     return (
//       <section className="py-12 sm:py-14 md:py-20 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-red-600 mb-4">
//           Trending Destinations
//         </h2>
//         <p className="text-red-500">{error}</p>
//       </section>
//     );
//   }

//   /* ================= EMPTY ================= */
//   if (visibleDestinations.length === 0) {
//     return (
//       <section className="py-12 sm:py-14 md:py-20 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-red-600 mb-4">
//           Trending Destinations
//         </h2>
//         <p className="text-gray-600 mb-10">
//           No destinations available at the moment.
//         </p>
//       </section>
//     );
//   }

//   return (
//     <section className="py-12 sm:py-14 md:py-20 px-4 text-center bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
//       <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-red-600 mb-10 md:mb-16">
//         Trending Destinations
//       </h2>

//       <div className="flex justify-center gap-6 max-w-7xl mx-auto flex-wrap">
//         {visibleDestinations.map((destination) => (
//           <DestinationCard
//             key={destination._id}
//             destination={destination}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// /* ================= CARD ================= */
// const DestinationCard = ({ destination }) => {
//   const images =
//     Array.isArray(destination?.title_image) &&
//     destination.title_image.length
//       ? destination.title_image
//       : Array.isArray(destination?.show_image)
//       ? destination.show_image
//       : [];

//   const shouldLoop = images.length > 1;

//   const handleCardClick = () => {
//     window.location.href = `/destination-itineraries/${destination._id}`;
//   };

//   return (
//     <div
//       onClick={handleCardClick}
//       className="
//         w-[260px] sm:w-72
//         rounded-xl overflow-hidden
//         shadow-lg bg-white
//         cursor-pointer
//         transition-all duration-700
//         ease-[cubic-bezier(0.16,1,0.3,1)]
//         hover:-translate-y-2 hover:shadow-xl
//       "
//     >
//       {/* IMAGE SLIDER */}
//       <div className="h-[280px] sm:h-[320px] md:h-[360px] relative overflow-hidden">
//         <Swiper
//           modules={[Autoplay, EffectFade]}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           effect="fade"
//           speed={1000}
//           loop={shouldLoop}
//           className="w-full h-full"
//         >
//           {images.length > 0 ? (
//             images.map((imgUrl, idx) => (
//               <SwiperSlide key={idx}>
//                 <img
//                   src={imgUrl}
//                   alt={`Image ${idx + 1} of ${
//                     destination.destination_name || "Destination"
//                   }`}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                   loading="lazy"
//                 />
//               </SwiperSlide>
//             ))
//           ) : (
//             <SwiperSlide>
//               <img
//                 src="https://placehold.co/400x500?text=No+Image"
//                 alt="No image available"
//                 className="w-full h-full object-cover"
//               />
//             </SwiperSlide>
//           )}
//         </Swiper>

//         {/* OVERLAY TEXT */}
//         {destination?.terms_and_conditions && (
//           <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 to-transparent text-left text-white">
//             <p className="text-xs sm:text-sm md:text-base opacity-90">
//               {destination.terms_and_conditions}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* TITLE */}
//       <div className="p-4 text-left">
//         <h3 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-200">
//           {destination.destination_name || "Untitled Destination"}
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default TrendingDestinations;


import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const TrendingDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [visibleDestinations, setVisibleDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ================= FETCH DATA ================= */
  const fetchDestinations = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/v1/destination/home/get"
      );
      const data = await res.json();

      if (Array.isArray(data?.data)) {
        setDestinations(data.data);
      } else {
        throw new Error("Invalid API response format");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch destinations");
    } finally {
      setLoading(false);
    }
  };

  /* ================= RANDOM 4 ================= */
  const getRandomFour = (arr) =>
    [...arr].sort(() => 0.5 - Math.random()).slice(0, 4);

  useEffect(() => {
    fetchDestinations();
  }, []);

  /* ================= ROTATE ================= */
  useEffect(() => {
    if (destinations.length > 0) {
      setVisibleDestinations(getRandomFour(destinations));
      const interval = setInterval(() => {
        setVisibleDestinations(getRandomFour(destinations));
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [destinations]);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-extrabold text-orange-500 mb-10">
          Trending Destinations
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-[260px] h-[360px] bg-gray-200 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </section>
    );
  }

  /* ================= ERROR ================= */
  if (error) {
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-extrabold text-orange-500 mb-4">
          Trending Destinations
        </h2>
        <p className="text-orange-500">{error}</p>
      </section>
    );
  }

  /* ================= EMPTY ================= */
  if (visibleDestinations.length === 0) {
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-extrabold text-orange-500 mb-4">
          Trending Destinations
        </h2>
        <p className="text-gray-600">
          No destinations available at the moment.
        </p>
      </section>
    ); 
  }

  return (
    <section className="py-16 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-center text-xl md:text-2xl font-extrabold text-orange-500 mb-10 md:mb-16">
        Trending Destinations
      </h2>

      <div className="flex justify-center gap-6 max-w-7xl mx-auto flex-wrap">
        {visibleDestinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          />
        ))}
      </div>
    </section>
  );
};

/* ================= CARD ================= */
const DestinationCard = ({ destination }) => {
  const images =
    Array.isArray(destination?.title_image) &&
    destination.title_image.length
      ? destination.title_image
      : Array.isArray(destination?.show_image)
      ? destination.show_image
      : [];

  const shouldLoop = images.length > 1;

  const handleCardClick = () => {
    console.log("Card clicked:", destination._id);
    window.location.href = `/destination-itineraries/${destination._id}`;
  };

  const handleViewPackage = (e) => {
    e.stopPropagation(); // ✅ VERY IMPORTANT
    console.log("View Package clicked:", destination._id);
    window.location.href = `/destination-itineraries/${destination._id}`;
  };

  return (
    <div
      onClick={handleCardClick}
      className="
        w-[260px] sm:w-72
        rounded-xl overflow-hidden
        shadow-lg bg-white
        cursor-pointer
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-xl
      "
    >
      {/* IMAGE SLIDER */}
      <div className="h-[280px] sm:h-[320px] md:h-[360px] relative overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          speed={1000}
          loop={shouldLoop}
          className="w-full h-full"
        >
          {images.length > 0 ? (
            images.map((imgUrl, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={imgUrl}
                  alt={`Image ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <img
                src="https://placehold.co/400x500?text=No+Image"
                alt="No image"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          )}
        </Swiper>

        {/* OVERLAY */}
        {destination?.terms_and_conditions && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-left text-white">
            <p className="text-xs sm:text-sm">
              {destination.terms_and_conditions}
            </p>
          </div>
        )}
      </div>

      {/* TITLE + BUTTON */}
      <div className="p-4 text-left">
        <h3 className="text-base text-center sm:text-lg font-semibold text-gray-800 mb-3">
          {destination.destination_name || "Untitled Destination"}
        </h3>
  

        {/* ✅ VIEW PACKAGE BUTTON */}
        <button
          onClick={handleViewPackage}
          className="w-full bg-orange-500 text-white text-sm font-semibold py-2 rounded-md transition"
        >
          View Package
        </button>
       
      </div>
    </div>
  );
};

export default TrendingDestinations;
