import React from "react";
import { motion } from "framer-motion";
import ContactBannerImg from "../assets/ContactBanner.png";   // ✅ Correct import

const ContactBanner = () => {
  return (
    <div className="relative w-full h-[320px] md:h-[380px] lg:h-[400px]mb-10 md:mb-16 ">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ContactBannerImg})`,   // ✅ Correct usage
        }}
      ></div>  

      

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-2xl md:text-4xl font-semibold mb-3"
        >
          Join Us on the Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-200 max-w-2xl text-sm md:text-base mb-5"
        >
          Discover India’s most romantic honeymoon destinations, where every
          moment becomes a cherished memory.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium shadow-lg"
        >
          Book Your Trip
        </motion.button>

      </div>
    </div>
  );
};

export default ContactBanner;











