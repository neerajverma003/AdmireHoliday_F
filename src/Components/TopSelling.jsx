// import React from "react";
// import { motion } from "framer-motion";
// import Selling1 from "../assets/selling1.png";
// import Selling2 from "../assets/Selling2.png";
// import Selling3 from  "../assets/Selling3.png";
// import Selling4 from "../assets/selling4.png";


// const packages = [
//   {
//     id: 1,
//     title: "Europes Grand Tour (13D/10N) · Paris, Sales Vietnam",
//     price: "36,999",
//     discount: "15% off",
//     image: Selling1,
//     tag: "Popular",
//     big: true,
//   },
//   {
//     id: 2,
//     title: "Manali Tour (13D/10N) · Paris, Sales Manali",
//     price: "19,999",
//     discount: "10% off",
//     image: Selling2,
//     tag: "Popular",
//   },
//   {
//     id: 3,
//     title: "Udaipur Tour (13D/10N) · Paris, Sales Udaipur",
//     price: "22,999",
//     discount: "10% off",
//     image: Selling3,
//     tag: "Popular",
//   },
//   {
//     id: 4,
//     title: "Europes Grand Tour (13D/10N) · Paris, Sales Bali",
//     price: "36,999",
//     discount: "10% off",
//     image: Selling4,
//     tag: "Popular",
//   },
// ];

// const TopSellingPackages = () => {
//   return (
//     <section className="w-full py-20 bg-gray-50">
//       {/* ✅ HEADING */}
//       <div className="text-center mb-12">
//         <p className="text-orange-500 font-semibold text-sm mb-2">
//           Premium Holidays
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Top Selling Packages
//         </h2>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 space-y-10">
//         {/* ✅ BIG CARD */}
//         {packages
//           .filter((p) => p.big)
//           .map((pkg) => (
//             <motion.div
//               key={pkg.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden"
//             >
//               <div className="relative">
//                 <img
//                   src={pkg.image}
//                   alt={pkg.title}
//                   className="w-full h-[280px] object-cover"
//                 />
//                 <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
//                   {pkg.tag}
//                 </span>
//               </div>

//               <div className="p-6">
//                 <h3 className="font-semibold text-gray-900 mb-2">
//                   {pkg.title}
//                 </h3>
//                 <p className="text-sm text-gray-700">
//                   ₹{pkg.price}{" "}
//                   <span className="text-orange-500">({pkg.discount})</span>
//                 </p>
//               </div>
//             </motion.div>
//           ))}

//         {/* ✅ SMALL CARDS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {packages
//             .filter((p) => !p.big)
//             .map((pkg, index) => (
//               <motion.div
//                 key={pkg.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
//               >
//                 <div className="relative">
//                   <img
//                     src={pkg.image}
//                     alt={pkg.title}
//                     className="w-full h-44 object-cover"
//                   />
//                   <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
//                     {pkg.tag}
//                   </span>
//                 </div>

//                 <div className="p-5">
//                   <h4 className="font-semibold text-gray-900 mb-1">
//                     {pkg.title}
//                   </h4>
//                   <p className="text-sm text-gray-700">
//                     ₹{pkg.price}{" "}
//                     <span className="text-orange-500">({pkg.discount})</span>
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopSellingPackages;





import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TopSellingPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPackages = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/destination/home/get");
      const data = await res.json();

      if (data?.data) {
        // MAP API → UI format
        const mapped = data.data.map((item, index) => ({
          id: item._id,
          title: item.destination_name || "Unknown Package",
          price: item.price || "On Request",
          discount: item.discount || "10% off",
          image: Array.isArray(item.title_image) ? item.title_image[0] : "",
          tag: item.tag || "Popular",
          big: index === 0, // FIRST CARD = BIG CARD
        }));

        setPackages(mapped);
      }
    } catch (err) {
      console.log("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <section className="w-full py-20 bg-gray-50">
      {/* HEADING */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-semibold text-sm mb-2">
          Premium Holidays
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Top Selling Packages
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-10">

        {/* BIG CARD (first card only) */}
        {loading ? (
          <div className="h-[280px] bg-gray-300 rounded-2xl animate-pulse"></div>
        ) : (
          packages
            .filter((p) => p.big)
            .map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-[280px] object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                    {pkg.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    ₹{pkg.price}{" "}
                    <span className="text-orange-500">
                      ({pkg.discount})
                    </span>
                  </p>
                </div>
              </motion.div>
            ))
        )}

        {/* SMALL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? [...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-56 bg-gray-300 rounded-2xl animate-pulse"
                ></div>
              ))
            : packages
                .filter((p) => !p.big)
                .slice(0, 3)
                .map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                  >
                    <div className="relative">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-44 object-cover"
                      />
                      <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                        {pkg.tag}
                      </span>
                    </div>

                    <div className="p-5">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {pkg.title}
                      </h4>
                      <p className="text-sm text-gray-700">
                        ₹{pkg.price}{" "}
                        <span className="text-orange-500">
                          ({pkg.discount})
                        </span>
                      </p>
                    </div>
                  </motion.div>
                ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingPackages;
