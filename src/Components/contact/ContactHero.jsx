// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// // import { getHeroSection } from "../../api/api.js";

// const ContactHero = () => {
//   const navigate = useNavigate();
//   const [showEnquiryForm, setShowEnquiryForm] = useState(false);
//   const [videoUrl, setVideoUrl] = useState();
//   const [loading, setLoading] = useState(true);

//   console.log("video url-->", videoUrl);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         setLoading(true);

//         const { data } = await getHeroSection("contact");
//         console.log(data);

//         setVideoUrl(data?.publicUrl[0]);
//       } catch (error) {
//         console.error("Error loading video:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideo();
//   }, []);

//   return (
//     <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
//       <video
//         className="w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         {videoUrl && <source src={videoUrl} type="video/mp4" />}
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//         <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
//           Welcome to Our Blog World
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default ContactHero;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const ContactHero = () => {
//   const navigate = useNavigate();
//   const [videoUrl, setVideoUrl] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/admin/hero/video"); // your API
//         const res = await response.json();

//         // Filter only the "Contact" video
//         const contactVideo = res.data.find((item) => item.title === "Contact");
//         const url = contactVideo?.video_url?.[0]?.url;

//         setVideoUrl(url);
//         console.log("Contact video URL:", url);
//       } catch (error) {
//         console.error("Error loading video:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideo();
//   }, []);

//   return (
//     <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
//       {loading ? (
//         <div className="w-full h-full flex items-center justify-center bg-gray-200">
//           <p className="text-gray-700">Loading video...</p>
//         </div>
//       ) : (
//         <video
//           className="w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           {videoUrl && <source src={videoUrl} type="video/mp4" />}
//           Your browser does not support the video tag.
//         </video>
//       )}
//       <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//         <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
//           Welcome to Our Blog World
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default ContactHero;



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ContactHero = () => {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // =============================
  // FETCH VIDEO FROM BACKEND API
  // =============================
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/hero/video");
        const res = await response.json();

        const contactVideo = res.data.find(
          (item) => item.title.toLowerCase() === "contact"
        );

        const url = contactVideo?.video_url?.[0]?.url || "";
        setVideoUrl(url);
      } catch (error) {
        console.error("Video loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">

      {/* =============================
          BACKGROUND VIDEO
      ============================== */}
      {loading ? (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-700">Loading video...</p>
        </div>
      ) : (
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          {videoUrl && <source src={videoUrl} type="video/mp4" />}
        </video>
      )}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* =============================
          HERO CONTENT
      ============================== */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg"
        >
          Contact us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-200 text-sm md:text-lg max-w-2xl mt-3 mb-6"
        >
          We are here to help your plan unforgettable Journeys.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-4"
        >
          <button
            onClick={() => navigate("/plan-your-trip")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm md:text-base shadow-lg transition"
          >
            Start Your Journey
          </button>

          <button
            onClick={() => navigate("/about")}
            className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-2 rounded-full text-sm md:text-base shadow-md transition"
          >
            Learn more
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactHero;

