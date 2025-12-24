import React, { useState } from "react";
import { motion } from "framer-motion";

const destinations = [
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1518544866330-4e716f0cfa2c",
  },
  {
    name: "Thailand",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    name: "Vietnam",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    name: "Canada",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
];

const RelatedDestinations = () => {
  const [active, setActive] = useState("Thailand");

  return (
    <section className="py-14 bg-white">
      {/* TITLE */}
      <h2 className="text-center text-xl md:text-2xl font-extrabold text-orange-500 mb-12">
        Related Destinations
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {destinations.map((item, i) => {
            const isActive = active === item.name;

            return (
              <motion.div
                key={i}
                onClick={() => setActive(item.name)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className={`
                  relative cursor-pointer overflow-hidden rounded-xl
                  h-[360px]
                  ${
                    isActive
                      ? "border-4 border-blue-500"
                      : "border border-gray-200"
                  }
                `}
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/25" />

                {/* TEXT */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-medium text-sm">
                    {item.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE (HORIZONTAL SCROLL) */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4">
          {destinations.map((item, i) => {
            const isActive = active === item.name;

            return (
              <motion.div
                key={i}
                onClick={() => setActive(item.name)}
                whileTap={{ scale: 0.95 }}
                className={`
                  min-w-[220px] h-[300px]
                  relative overflow-hidden  cursor-pointer
                  ${
                    isActive
                      ? "border-4 border-blue-500"
                      : "border border-gray-200"
                  }
                `}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-medium text-sm">
                    {item.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedDestinations;
