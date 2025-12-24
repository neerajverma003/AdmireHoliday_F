import React from "react";
import { motion } from "framer-motion";

const destinations = {
  featured: {
    title: "Thailand Tour (1310130) · Parl, Sales Thailand",
    price: "36,999",
    offer: "15% off",
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
  },
  cards: [
    {
      title: "Vietnam Tour (1310130) · Parl, Sales Vietnam",
      price: "19,999",
      offer: "10% off",
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      title: "Bali Tour (1310130) · Parl, Sales Bali",
      price: "22,999",
      offer: "10% off",
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "Europe Grand Tour (1310130) · Parl, Sales Bali",
      price: "36,999",
      offer: "10% off",
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
  ],
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const PopularInternationalDestinations = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-orange-500 font-extrabold mb-10 text-xl md:text-2xl"
      >
        Popular International Destinations
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* ===== FEATURED CARD ===== */}
        <motion.div
          variants={cardAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
        >
          <div className="relative h-[260px] md:h-[320px]">
            <img
              src={destinations.featured.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
              {destinations.featured.badge}
            </span>
          </div>

          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2">
              {destinations.featured.title}
            </h3>
            <p className="text-sm text-gray-600">
              ₹{destinations.featured.price}{" "}
              <span className="text-orange-500">
                ({destinations.featured.offer})
              </span>
            </p>
          </div>
        </motion.div>

        {/* ===== SMALL CARDS GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.cards.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-sm mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  ₹{item.price}{" "}
                  <span className="text-orange-500">
                    ({item.offer})
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

export default PopularInternationalDestinations;
