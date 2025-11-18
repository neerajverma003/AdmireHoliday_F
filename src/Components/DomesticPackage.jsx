import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DomesticPackage = () => {
  const [destinations, setDestinations] = useState([]);
  const [destinationsLoading, setDestinationsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchDestinations = async () => {
    setDestinationsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/destination/home/get");
      const data = await res.json();
      if (data?.data && Array.isArray(data.data)) {
        const domestic = data.data.filter((dest) => dest.domestic_or_international === "Domestic");
        setDestinations(domestic);
      } else {
        setError("Invalid API response");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch destinations");
    } finally {
      setDestinationsLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleExploreMore = () => {
    navigate("/domestic");
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-yellow-50 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#261F43] mb-2">
            Explore Domestic Destinations
          </h1>
          <p className="text-lg text-red-600 max-w-2xl mx-auto">
            Discover amazing budget packages across India
          </p>
        </motion.div>

        {error && <div className="text-center text-red-500 py-4">{error}</div>}

        {destinationsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-80 bg-gray-200 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        ) : destinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No destinations available at the moment.</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {destinations.map((destination) => {
              // For safety, convert or fallback:
              const images = Array.isArray(destination.title_image)
                ? destination.title_image
                : []; 
              // or use show_image, or destination.images if your backend returns differently

              return (
                <motion.div
                  key={destination._id}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  <Link
                    to={`/destinations/${destination.destination_name.toLowerCase()}`}
                    className="block h-full"
                    aria-label={`Explore ${destination.destination_name}`}
                  >
                    <div className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col">
                      <div className="relative h-64 overflow-hidden">
                        {images.length > 0 ? (
                          images.map((imgUrl, idx) => (
                            <motion.img
                              key={idx}
                              alt={destination.destination_name + ` img ${idx}`}
                              src={imgUrl}
                              className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000"
                              style={{
                                // you could fade in/out images or stack them
                                opacity: idx === 0 ? 1 : 0,
                              }}
                              loading="lazy"
                              initial={{ opacity: 0.8 }}
                              whileHover={{ opacity: 1, scale: 1.05 }}
                              transition={{ duration: 0.5 }}
                            />
                          ))
                        ) : (
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                            <span>No Image</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-end p-4 transition-all duration-300 group-hover:from-black/70 group-hover:to-black/40">
                          <div>
                            <h3 className="text-white text-xl font-bold tracking-wide mb-1">
                              {destination.destination_name}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 text-center mt-auto">
                        <button className="px-4 py-2 bg-[#E69233] hover:bg-[#d5822b] text-white font-medium rounded-full transition-all duration-300 text-sm">
                          View Packages
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {destinations.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={handleExploreMore}
              className="px-8 py-3 bg-[#E69233] hover:bg-[#d5822b] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E69233] focus:ring-opacity-50"
            >
              Explore All Destinations
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DomesticPackage;
