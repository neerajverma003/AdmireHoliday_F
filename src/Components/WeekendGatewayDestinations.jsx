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
              transition: { staggerChildren: 0.3 },
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
              transition={{ type: "spring", stiffness: 80 }}
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
