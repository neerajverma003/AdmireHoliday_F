// import EnquiryForm from "../forms/EnquiryForm";
// import React, { useState, useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// // import { getHeroSection } from "../api/api";

// const AboutDetails = () => {
//   const [showEnquiryForm, setShowEnquiryForm] = useState(false);

//   const navigate = useNavigate();

//   const [videoUrl, setVideoUrl] = useState();
//   const [loading, setLoading] = useState(true);
//   console.log("video url-->", videoUrl);


//       useEffect(() => {
//         const fetchVideo = async () => {
//           try {
//             const response = await fetch("http://localhost:5000/admin/hero/video");
//             const res = await response.json();
    
//             // Filter only the "Blog" video
//             const blogVideo = res.data.find(item => item.title === "Blog");
//             const url = blogVideo?.video_url?.[0]?.url;
    
//             setVideoUrl(url);
//             console.log("Blog video URL:", url);
//           } catch (error) {
//             console.error("Error loading video:", error);
//           } finally {
//             setLoading(false);
//           }
//         };
    
//         fetchVideo();
//       }, []);



//   return (
//     <div className="relative">
//       {/* Hero Video Section */}
//       <div className="relative w-full h-screen max-h-[80vh] overflow-hidden">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           {/* <source src="src/assets/videos/Hero-About.mp4" type="video/mp4" /> */}
//           {videoUrl && <source src={videoUrl} type="video/mp4" />}
//           Your browser does not support the video tag.
//         </video>

//         {/* Video overlay with text */}
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//           <div className="text-center px-4">
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//               Discover the World with Admire Holidays
//             </h1>
//             <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
//               Crafting unforgettable journeys for over a decade
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-28 text-gray-800">
//         {/* Introduction Section */}
//         <div className="text-center space-y-4">
//           <h1 className="text-5xl font-bold text-teal-700">
//             Welcome to Admire Holidays!
//           </h1>
//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             Admire Holidays is more than just a tour and travel company; we are
//             your gateway to unforgettable experiences and remarkable journeys.
//             With a legacy spanning over 10 years, we have established ourselves
//             as a trusted name in the travel and tourism industry, committed to
//             delivering excellence at every step of your journey.
//           </p>
//         </div>

//         {/* About Us Section with Video */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <video
//             src="https://images.pexels.com/photos/540977/pexels-photo-540977.jpeg"
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-auto rounded-xl shadow-lg"
//           />
//           <div className="space-y-4">
//             <div className="space-y-4">
//               <h2 className="text-4xl font-bold text-teal-700">About Us</h2>
//               <p className="max-w-3xl mx-auto text-lg text-gray-600">
//                 With a legacy spanning over 10 years, Admire Holidays has become
//                 a trusted name in travel and tourism, committed to delivering
//                 excellence at every step.
//               </p>
//             </div>
//             <h3 className="text-3xl font-semibold text-teal-700">Our Story</h3>
//             <p className="text-lg text-gray-700">
//               Our journey began with a simple yet profound mission: to help
//               people explore the beauty of our world. Over the years, we have
//               honed our expertise and expanded our services to cater to the
//               diverse needs of travelers from all walks of life. Whether you
//               seek adventure in the mountains, tranquility by the beach, or
//               cultural immersion in vibrant cities, Admire Holidays is here to
//               make your travel dreams a reality.
//             </p>
//           </div>
//         </div>

//         {/* What Sets Us Apart Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-4">
//             <h3 className="text-3xl font-semibold text-teal-700">
//               What Sets Us Apart
//             </h3>
//             <p className="text-lg text-gray-700">
//               At Admire Holidays, we believe that travel is not just about
//               reaching a destination; it's about the journey itself. That's why
//               we go above and beyond to ensure that every aspect of your travel
//               experience is seamless and unforgettable. From meticulously
//               planned itineraries to personalized recommendations, our team of
//               experienced professionals is dedicated to providing you with
//               unparalleled service and support every step of the way.
//             </p>
//           </div>
//           <img
//             alt="Difference"
//             loading="lazy"
//             className="rounded-xl shadow-lg w-full h-auto"
//             src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww"
//           />
//         </div>

//         {/* Our Values Section */}
//         <div className="text-center space-y-4">
//           <h3 className="text-3xl font-semibold text-teal-700">Our Values</h3>
//           <p className="max-w-3xl mx-auto text-lg text-gray-700">
//             Integrity, transparency, and customer satisfaction are at the heart
//             of everything we do. We pride ourselves on our commitment to ethical
//             business practices and our unwavering dedication to exceeding our
//             clients' expectations. Your trust is our most valuable asset, and we
//             strive to earn it through our actions, integrity, and dedication to
//             delivering exceptional travel experiences.
//           </p>
//         </div>

//         {/* Why Choose Us Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-4">
//             <h3 className="text-3xl font-semibold text-teal-700">
//               Why Choose Admire Holidays
//             </h3>
//             <ul className="space-y-2 text-lg text-gray-700 list-disc list-inside">
//               <li>
//                 <strong>Experience:</strong> With over 10 years of experience in
//                 the industry, we have the knowledge and expertise to create
//                 unforgettable travel experiences tailored to your unique
//                 preferences and interests.
//               </li>
//               <li>
//                 <strong>Personalized Service:</strong> We understand that no two
//                 travelers are alike, which is why we take the time to understand
//                 your needs and preferences to curate bespoke travel experiences
//                 that exceed your expectations.
//               </li>
//               <li>
//                 <strong>Transparency:</strong> We believe in transparency and
//                 honesty in all our dealings. From pricing and itinerary details
//                 to terms and conditions, you can trust us to provide clear and
//                 upfront information every step of the way.
//               </li>
//               <li>
//                 <strong>24/7 Support:</strong> Your safety and comfort are our
//                 top priorities. That's why our dedicated support team is
//                 available around the clock to assist you with any queries or
//                 concerns you may have before, during, or after your trip.
//               </li>
//             </ul>
//           </div>
//           <img
//             alt="Why Choose Us"
//             loading="lazy"
//             className="rounded-xl shadow-lg w-full h-auto"
//             src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
//           />
//         </div>

//         {/* CTA Section */}
//         <div className="bg-teal-700 text-white rounded-3xl p-12 text-center shadow-2xl">
//           <h2 className="text-4xl font-bold mb-4">Join Us on the Journey</h2>
//           <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
//             Whether you are embarking on a solo adventure, planning a romantic
//             getaway, or organizing a group tour with friends and family, Admire
//             Holidays is here to make your travel dreams come true. Join us on
//             the journey of a lifetime and let us help you explore the wonders of
//             our world, one unforgettable experience at a time.
//           </p>
//           <button
//             onClick={() => setShowEnquiryForm(true)}
//             className="bg-amber-400 text-teal-900 font-semibold px-8 py-3 rounded-full hover:bg-amber-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
//           >
//             Book Your Trip
//           </button>
//         </div>
//       </section>

//       {/* Enquiry Form Modal */}
//       {showEnquiryForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl p-6 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
//             <button
//               onClick={() => setShowEnquiryForm(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//             <EnquiryForm onClose={() => setShowEnquiryForm(false)} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AboutDetails;



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
            className="absolute inset-0 w-full h-full object-cover"
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

      {/* ================= OUR JOURNEY (EXACT IMAGE MATCH) ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Our Journey"
              className="w-[420px] h-[560px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-orange-500 font-semibold uppercase text-sm tracking-wider">
              Over Journey
            </span>

            <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-tight mt-3">
              From humble beginnings to thousands of happy travelers.
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
              <JourneyStat text="Founded in 2015" />
              <JourneyStat text="1000+ Happy Travelers" />
              <JourneyStat text="50+ Destination" />
              <JourneyStat text="10+ Years Experience" />
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

/* ================= JOURNEY STAT PILL ================= */
const JourneyStat = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3 border border-orange-400 rounded-full px-6 py-3 bg-white"
    >
      <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </motion.div>
  );
};

export default AboutDetails;
