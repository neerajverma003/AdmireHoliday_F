

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaSuitcase,
} from "react-icons/fa";
import EnquiryForm from "../forms/EnquiryForm";

const AboutDetails = () => {
  const [heroVideo, setHeroVideo] = useState("");
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  /* ================= HERO VIDEO API ================= */
  useEffect(() => {
    const fetchHeroVideo = async () => {
      try {
        const res = await fetch("http://localhost:5000/admin/hero/video");
        const data = await res.json();

        const aboutVideo = data?.data?.find(
          (item) => item.title === "About"
        );

        setHeroVideo(aboutVideo?.video_url?.[0]?.url || "");
      } catch (error) {
        console.error("Hero video error:", error);
      }
    };

    fetchHeroVideo();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[85vh] w-full">
        {heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="About Hero"
            className="absolute inset-0 w-full h-full object-small"
          />
        )}

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About Admire Holidays
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Premium Domestic & International Tour Packages for the Modern Explorer 
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setShowEnquiryForm(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Start Your Journey
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= OUR JOURNEY ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE (VERTICAL / PORTRAIT) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Our Journey "
              className="
                w-[590px]
                h-[360px]
                object-cover
                rounded-xl
                shadow-md
              "
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-orange-500 font-semibold uppercase text-sm tracking-wider">
              Over Journey
            </span>

            <h2 className="text-[30px] md:text-[34px] font-bold text-gray-900 leading-snug mt-3">
              From humble beginnings to thousands of happy travelers  .
            </h2>

            <p className="text-gray-600 text-[15px] leading-relaxed mt-5">
              At TripHoneyMoon, our journey began with a simple yet profound
              desire: to transform the way couples and adventurers experience
              the world. Founded by a team of passionate travel enthusiasts, we
              recognized the need for personalized, seamless, and truly
              memorable travel experiences. Our mission is to curate journeys
              that resonate with your unique desires, ensuring every moment is
              filled with wonder and joy.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              <JourneyStat icon={<FaCalendarAlt />} text="Founded in 2015" />
              <JourneyStat icon={<FaUsers />} text="1000+ Happy Travelers" />
              <JourneyStat icon={<FaMapMarkerAlt />} text="50+ Destinations" />
              <JourneyStat icon={<FaSuitcase />} text="10+ Years Experience" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-orange-500 py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore the World?
          </h2>
          <p className="text-white/90 mb-6">
            Let Admire Holidays plan your next unforgettable journey.
          </p>
          <button
            onClick={() => setShowEnquiryForm(true)}
            className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Book Now
          </button>
        </motion.div>
      </section>

      {/* ================= ENQUIRY MODAL ================= */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowEnquiryForm(false)}
              className="absolute top-3 right-3 text-2xl text-gray-500"
            >
              &times;
            </button>
            <EnquiryForm onClose={() => setShowEnquiryForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

/* ================= JOURNEY STAT ================= */
const JourneyStat = ({ icon, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="
        flex items-center gap-3
        border border-orange-400
        rounded-full
        px-6 py-3
        bg-white
      "
    >
      <span className="text-orange-500 text-sm">{icon}</span>
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </motion.div>
  );
};

export default AboutDetails;
