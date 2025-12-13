import React from "react";
import { motion } from "framer-motion";

const MissionVisionSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-28 bg-white">

      {/* ================= OUR MISSION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="text-orange-500 font-semibold uppercase text-sm tracking-wider">
            Our Mission
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-4">
            Deliver hassle-free, personalized travel experiences.
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            At TripToHoneymoon, our journey began with a simple yet profound
            desire: to transform the way couples and adventurers experience the
            world. Founded by a team of passionate travel enthusiasts, we
            recognized the need for personalized, seamless, and truly memorable
            travel experiences. Our mission is to curate journeys that resonate
            with your unique desires, ensuring every moment is filled with
            wonder and joy.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Mission"
            className="rounded-2xl shadow-lg w-[460px] h-[320px] object-cover"
          />
        </motion.div>
      </div>

      {/* ================= OUR VISION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Vision"
            className="rounded-2xl shadow-lg w-[460px] h-[320px] object-cover"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="text-orange-500 font-semibold uppercase text-sm tracking-wider">
            Our Vision
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-4">
            To inspire journeys that create lifelong memories.
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            At TripToHoneymoon, our journey began with a simple yet profound
            desire: to transform the way couples and adventurers experience the
            world. Founded by a team of passionate travel enthusiasts, we
            recognized the need for personalized, seamless, and truly memorable
            travel experiences. Our mission is to curate journeys that resonate
            with your unique desires, ensuring every moment is filled with
            wonder and joy.
          </p>
        </motion.div>
      </div>

      {/* ================= CORE VALUES ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        <ValueCard
          title="Quality"
          text="At TripToHoneymoon, our journey began with a simple yet profound desire to transform the way couples and adventurers experience."
        />

        <ValueCard
          title="Transparency"
          text="At TripToHoneymoon, our journey began with a simple yet profound desire to transform the way couples and adventurers experience."
        />

        <ValueCard
          title="Responsible Travel"
          text="At TripToHoneymoon, our journey began with a simple yet profound desire to transform the way couples and adventurers experience."
        />
      </div>
    </section>
  );
};



/* ================= VALUE CARD ================= */
const ValueCard = ({ title, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex gap-4"
    >
      <span className="w-8 h-8 rounded-full border border-orange-400 flex items-center justify-center text-orange-500 text-sm font-bold">
        ✓
      </span>

      <div>                           
        <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
};

export default MissionVisionSection;
