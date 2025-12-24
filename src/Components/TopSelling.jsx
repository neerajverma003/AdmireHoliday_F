
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const TopSellingPackages = () => {
//   const [packages, setPackages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchPackages = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/v1/destination/home/get");
//       const data = await res.json();

//       if (data?.data) {
//         // MAP API → UI format
//         const mapped = data.data.map((item, index) => ({
//           id: item._id,
//           title: item.destination_name || "Unknown Package",
//           price: item.price || "On Request",
//           discount: item.discount || "10% off",
//           image: Array.isArray(item.title_image) ? item.title_image[0] : "",
//           tag: item.tag || "Popular",
//           big: index === 0, // FIRST CARD = BIG CARD
//         }));

//         setPackages(mapped);
//       }
//     } catch (err) {
//       console.log("API Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   return (
//     <section className="w-full py-20 bg-gray-50">
//       {/* HEADING */}
//       <div className="text-center mb-12">
//         <p className="text-orange-500 font-semibold text-sm mb-2">
//           Premium Holidays
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Top Selling Packages
//         </h2>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 space-y-10">

//         {/* BIG CARD (first card only) */}
//         {loading ? (
//           <div className="h-[280px] bg-gray-300 rounded-2xl animate-pulse"></div>
//         ) : (
//           packages
//             .filter((p) => p.big)
//             .map((pkg) => (
//               <motion.div
//                 key={pkg.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                     src={pkg.image}
//                     alt={pkg.title}
//                     className="w-full h-[280px] object-cover"
//                   />
//                   <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
//                     {pkg.tag}
//                   </span>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-semibold text-gray-900 mb-2">
//                     {pkg.title}
//                   </h3>
//                   <p className="text-sm text-gray-700">
//                     ₹{pkg.price}{" "}
//                     <span className="text-orange-500">
//                       ({pkg.discount})
//                     </span>
//                   </p>
//                 </div>
//               </motion.div>
//             ))
//         )}

//         {/* SMALL CARDS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {loading
//             ? [...Array(3)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-56 bg-gray-300 rounded-2xl animate-pulse"
//                 ></div>
//               ))
//             : packages
//                 .filter((p) => !p.big)
//                 .slice(0, 3)
//                 .map((pkg, index) => (
//                   <motion.div
//                     key={pkg.id}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     whileHover={{ y: -8 }}
//                     className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
//                   >
//                     <div className="relative">
//                       <img
//                         src={pkg.image}
//                         alt={pkg.title}
//                         className="w-full h-44 object-cover"
//                       />
//                       <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
//                         {pkg.tag}
//                       </span>
//                     </div>

//                     <div className="p-5">
//                       <h4 className="font-semibold text-gray-900 mb-1">
//                         {pkg.title}
//                       </h4>
//                       <p className="text-sm text-gray-700">
//                         ₹{pkg.price}{" "}
//                         <span className="text-orange-500">
//                           ({pkg.discount})
//                         </span>
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopSellingPackages;




// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { getTopSellingItineraries } from "../api/api";

// const TopSellingPackages = () => {
//   const [packages, setPackages] = useState([]);
//   const [visiblePackages, setVisiblePackages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // 🔹 FETCH TOP SELLING ITINERARIES FROM API
//   const fetchPackages = async () => {
//     setLoading(true);
//     try {
//       const res = await getTopSellingItineraries();
//       const data = res?.data;

//       if (data?.success && data?.data?.length > 0) {
//         // MAP ITINERARY DATA → UI FORMAT
//         const mapped = data.data.map((item) => ({
//           id: item._id,
//           title: item.title || "Unknown Package",
//           price: item.pricing || "On Request",
//           discount: "Top Selling",
//           image: item.destination_thumbnails?.[0] || item.media?.[0] || "",
//           tag: "Top Selling",
//           link: `/itineraries/${item._id}`,
//         }));

//         setPackages(mapped);
//       } else {
//         console.log("No top selling itineraries found");
//         setPackages([]);
//       }
//     } catch (err) {
//       console.log("API Error fetching top selling itineraries:", err);
//       setPackages([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   // 🔹 AUTO ROTATE (CIRCULAR)
//   useEffect(() => {
//     if (packages.length < 4) {
//       setVisiblePackages(packages);
//       return;
//     }

//     setVisiblePackages(packages.slice(0, 4));

//     const interval = setInterval(() => {
//       setVisiblePackages((prev) => {
//         const updated = [...prev];
//         const first = updated.shift();
//         updated.push(first);
//         return updated;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [packages]);

//   return (
//     <section className="w-full py-20 bg-gray-50">
//       {/* HEADING */}
//       <div className="text-center mb-12">
//         <p className="text-orange-500 font-semibold text-sm mb-2">
//           Premium Holidays
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Top Selling Packages
//         </h2>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 space-y-10">
//         {loading ? (
//           <div className="h-[280px] bg-gray-300 rounded-2xl animate-pulse" />
//         ) : (
//           <AnimatePresence mode="wait">
//             {visiblePackages.length > 0 && (
//               <Link to={visiblePackages[0].link} className="block">
//                 <motion.div
//                   key={visiblePackages[0].id}
//                   initial={{ opacity: 0, x: 60 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -60 }}
//                   transition={{ duration: 0.6 }}
//                   className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
//                 >
//                   <div className="relative">
//                     <img
//                       src={visiblePackages[0].image}
//                       alt=""
//                       className="w-full h-[280px] object-cover"
//                     />
//                     <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
//                       {visiblePackages[0].tag}
//                     </span>
//                   </div>

//                   <div className="p-6">
//                     <h3 className="font-semibold text-gray-900 mb-2">
//                       {visiblePackages[0].title}
//                     </h3>
//                     <p className="text-sm text-gray-700">
//                       ₹{visiblePackages[0].price}{" "}
//                       <span className="text-orange-500">
//                         ({visiblePackages[0].discount})
//                       </span>
//                     </p>
//                   </div>
//                 </motion.div>
//               </Link>
//             )}
//           </AnimatePresence>
//         )}

//         {/* SMALL CARDS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {loading
//             ? [...Array(3)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-56 bg-gray-300 rounded-2xl animate-pulse"
//                 />
//               ))
//             : visiblePackages.slice(1, 4).map((pkg, index) => (
//                 <Link key={pkg.id} to={pkg.link} className="block">
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     whileHover={{ y: -6 }}
//                     className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer h-full"
//                   >
//                     <div className="relative">
//                       <img
//                         src={pkg.image}
//                         alt=""
//                         className="w-full h-44 object-cover"
//                       />
//                       <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
//                         {pkg.tag}
//                       </span>
//                     </div>

//                     <div className="p-5">
//                       <h4 className="font-semibold text-gray-900 mb-1">
//                         {pkg.title}
//                       </h4>
//                       <p className="text-sm text-gray-700">
//                         ₹{pkg.price}{" "}
//                         <span className="text-orange-500">
//                           ({pkg.discount})
//                         </span>
//                       </p>
//                     </div>
//                   </motion.div>
//                 </Link>
//               ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopSellingPackages;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { getTopSellingItineraries } from "../api/api";

// const TopSellingPackages = () => {
//   const [packages, setPackages] = useState([]);
//   const [visiblePackages, setVisiblePackages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   /* ================= FETCH TOP SELLING ================= */
//   const fetchPackages = async () => {
//     setLoading(true);
//     try {
//       const res = await getTopSellingItineraries();
//       const data = res?.data;

//       if (data?.success && data?.data?.length > 0) {
//         const mapped = data.data.map((item) => ({
//           id: item._id,
//           title: item.title || "Unknown Package",
//           price: item.pricing || "On Request",
//           discount: "Top Selling",
//           image:
//             item.destination_thumbnails?.[0] ||
//             item.media?.[0] ||
//             "",
//           tag: "Top Selling",
//           link: `/itineraries/${item._id}`,
//         }));

//         setPackages(mapped);
//       } else {
//         setPackages([]);
//       }
//     } catch (err) {
//       console.log("API Error fetching top selling itineraries:", err);
//       setPackages([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   /* ================= AUTO ROTATE ================= */
//   useEffect(() => {
//     if (packages.length < 4) {
//       setVisiblePackages(packages);
//       return;
//     }

//     setVisiblePackages(packages.slice(0, 4));

//     const interval = setInterval(() => {
//       setVisiblePackages((prev) => {
//         const updated = [...prev];
//         const first = updated.shift();
//         updated.push(first);
//         return updated;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [packages]);

//   return (
//     <section className="w-full py-14 md:py-20 bg-gray-50 overflow-x-hidden">
//       {/* ===== HEADING ===== */}
//       <div className="text-center mb-10 md:mb-14 px-4">
//         <p className="text-orange-500 font-semibold text-sm mb-2">
//           Premium Holidays
//         </p>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
//           Top Selling Packages
//         </h2>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
//         {/* ===== MAIN CARD ===== */}
//         {loading ? (
//           <div className="h-[220px] sm:h-[280px] bg-gray-300 rounded-2xl animate-pulse" />
//         ) : (
//           <AnimatePresence mode="wait">
//             {visiblePackages.length > 0 && (  
//               <Link to={visiblePackages[0].link} className="block">
//                 <motion.div
//                   key={visiblePackages[0].id}
//                   initial={{ opacity: 0, x: 60 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -60 }}
//                   transition={{ duration: 0.6 }}
//                   className="
//                     bg-white rounded-2xl shadow-lg
//                     overflow-hidden
//                     hover:shadow-xl transition
//                     cursor-pointer
//                   "
//                 >
//                   <div className="relative">
//                     <img
//                       src={visiblePackages[0].image}
//                       alt={visiblePackages[0].title}
//                       className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
//                     />
//                     <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
//                       {visiblePackages[0].tag}
//                     </span>
//                   </div>

//                   <div className="p-5 sm:p-6">
//                     <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
//                       {visiblePackages[0].title}
//                     </h3>
//                     <p className="text-sm text-gray-700">
//                       ₹{visiblePackages[0].price}{" "}
//                       <span className="text-orange-500">
//                         ({visiblePackages[0].discount})
//                       </span>
//                     </p>
//                   </div>
//                 </motion.div>
//               </Link>
//             )}
//           </AnimatePresence>
//         )}

//         {/* ===== SMALL CARDS ===== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {loading
//             ? [...Array(3)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-52 bg-gray-300 rounded-2xl animate-pulse"
//                 />
//               ))
//             : visiblePackages.slice(1, 4).map((pkg, index) => (
//                 <Link key={pkg.id} to={pkg.link} className="block">
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 0.5,
//                       delay: index * 0.1,
//                     }}
//                     whileHover={{ y: -6 }}
//                     className="
//                       bg-white rounded-2xl shadow-md
//                       overflow-hidden
//                       hover:shadow-xl transition
//                       cursor-pointer
//                       h-full
//                     "
//                   >
//                     <div className="relative">
//                       <img
//                         src={pkg.image}
//                         alt={pkg.title}
//                         className="w-full h-40 sm:h-44 md:h-48 object-cover"
//                       />
//                       <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
//                         {pkg.tag}
//                       </span>
//                     </div>

//                     <div className="p-4 sm:p-5">
//                       <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base line-clamp-2">
//                         {pkg.title}
//                       </h4>
//                       <p className="text-sm text-gray-700">
//                         ₹{pkg.price}{" "}
//                         <span className="text-orange-500">
//                           ({pkg.discount})
//                         </span>
//                       </p>
//                     </div>
//                   </motion.div>
//                 </Link>
//               ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopSellingPackages;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTopSellingItineraries } from "../api/api";

const TopSellingPackages = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const res = await getTopSellingItineraries();
      const data = res?.data;

      if (data?.success && data?.data?.length) {
        setPackages(
          data.data.map((item) => ({
            id: item._id,
            title: item.title || "Package",
            image:
              item.destination_thumbnails?.[0] ||
              item.media?.[0] ||
              "",
            price: item.pricing || "On Request",
            link: `/itineraries/${item._id}`,
          }))
        );
      }
    } catch (err) {
      console.error("API ERROR:", err);
    }
  };

  const handlePointerDown = (id) => {
    console.log("👉 POINTER DOWN:", id);
  };

  const handlePointerUp = (link, id) => {
    console.log("✅ POINTER UP:", id, "→", link);

    // React Router
    navigate(link);

    // HARD fallback (mobile guarantee)
    setTimeout(() => {
      window.location.href = link;
    }, 50);
  };

  return (
    <section className="py-14 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 space-y-10">

        {/* MAIN CARD */}
        {packages[0] && (
          <div
            className="tap-card bg-white rounded-2xl shadow-lg overflow-hidden"
            onPointerDown={() => handlePointerDown(packages[0].id)}
            onPointerUp={() =>
              handlePointerUp(packages[0].link, packages[0].id)
            }
          >
            <img
              src={packages[0].image}
              alt={packages[0].title}
              className="w-full h-[260px] object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">
                {packages[0].title}
              </h3>
              <p className="text-sm text-gray-600">
                ₹{packages[0].price}
              </p>
            </div>
          </div>
        )}

        {/* SMALL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.slice(1, 4).map((pkg) => (
            <div
              key={pkg.id}
              className="tap-card bg-white rounded-2xl shadow-md overflow-hidden"
              onPointerDown={() => handlePointerDown(pkg.id)}
              onPointerUp={() => handlePointerUp(pkg.link, pkg.id)}
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-sm">
                  {pkg.title}
                </h4>
                <p className="text-sm text-gray-600">
                  ₹{pkg.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopSellingPackages;
