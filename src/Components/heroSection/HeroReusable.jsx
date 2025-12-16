// import React from 'react';
// import PropTypes from 'prop-types';
// import { useState, useEffect } from "react";
// const HeroReusable = ({ videoUrl, title }) => {
//   // console.log("Video URL:", videoUrl);
// const [video , setVideo] = useState("");
//   const response = async () => {
//       try {
//         console.log("fetching home video at domestic page");
//         const getdata = await fetch("http://localhost:5000/admin/hero/video"); // Await the fetch
//         const res = await getdata.json(); // Then parse JSON
//         setVideo(res);
//         console.log(res);
//         console.log(video.data[3].video_url[1])
//         // console.log(res.data[5].video_url[0])
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
  
//     useEffect(() => {
//       console.log("useEffect triggered");
//       response();
//     }, [])
//   return (
//     <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
//       {video?.data
//               ?.filter((item) => item.title === "Domestic")
//               .map((domesticItem) =>
//                 domesticItem.video_url
//                   .filter((videoObj) => videoObj.visibility === "Public")
//                   .map((publicVideo) => (
//                     <div
//                       key={publicVideo._id}
//                       className="absolute top-0 left-0 w-full h-full z-10"
//                     >
//                       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-20"></div>
//                       <video
//                         muted
//                         playsInline
//                         autoPlay
//                         loop
//                         preload="auto"
//                         className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-10"
//                       >
//                         <source src={publicVideo.url} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </div>
//                   ))
//               )}
//       <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//         <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
//           Discover Domestic Destinations
//         </h1>
//       </div>
//     </section>
//   );
// };

// HeroReusable.propTypes = {
//   source: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default HeroReusable;


// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// const HeroReusable = ({ pageTitle, heroTitle }) => {
//   const [videoUrl, setVideoUrl] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchHeroVideo = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/admin/hero/video");
//         const json = await res.json();

//         const pageItem = json?.data?.find(
//           (item) => item.title === pageTitle
//         );

//         const publicVideo = pageItem?.video_url?.find(
//           (v) => v.visibility === "Public"
//         );

//         if (publicVideo?.url) {
//           setVideoUrl(publicVideo.url);
//         }
//       } catch (err) {
//         console.error("Hero video error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHeroVideo();
//   }, [pageTitle]);

//   if (loading) {
//     return (
//       <div className="h-[70vh] bg-black flex items-center justify-center text-white">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-black">
//       {videoUrl && (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src={videoUrl} type="video/mp4" />
//         </video>
//       )}

//       <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
//         <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
//           {heroTitle}
//         </h1>
//       </div>
//     </section>
//   );
// };

// HeroReusable.propTypes = {
//   pageTitle: PropTypes.string.isRequired,
//   heroTitle: PropTypes.string.isRequired,
// };

// export default HeroReusable;


import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const HeroReusable = ({ pageTitle, heroTitle, heroSubtitle }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔍 SEARCH STATES (SAME AS HERO FILE)
  const [showSearch, setShowSearch] = useState(false);
  const [productType, setProductType] = useState("Tour");
  const [tripDuration, setTripDuration] = useState("3 to 5 days");
  const [includeFlight, setIncludeFlight] = useState(true);

  // 🎥 FETCH HERO VIDEO
  useEffect(() => {
    const fetchHeroVideo = async () => {
      try {
        const res = await fetch("http://localhost:5000/admin/hero/video");
        const data = await res.json();

        const pageItem = data?.data?.find(
          (item) => item.title === pageTitle
        );

        const publicVideo = pageItem?.video_url?.find(
          (v) => v.visibility === "Public"
        );

        if (publicVideo?.url) setVideoUrl(publicVideo.url);
      } catch (err) {
        console.error("Hero video error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroVideo();
  }, [pageTitle]);

  if (loading) return null;

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      {/* VIDEO */}
      {videoUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-5xl">
          {heroTitle}
        </h1>

        <p className="mt-4 text-gray-200 max-w-3xl text-sm md:text-lg">
          {heroSubtitle}
        </p>

        {/* 🔍 SEARCH INPUT (EXACT SAME AS HERO FILE) */}
        <motion.div
          layout
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => setShowSearch(true)}
          className="mt-8 w-full max-w-xl bg-white rounded-full shadow-xl px-6 py-4 flex items-center gap-3 cursor-pointer"
        >
          <span className="text-gray-400 text-lg">🔍</span>
          <span className="text-gray-400">
            Search for destinations...
          </span>
        </motion.div>
      </div>

      {/* 🔍 SEARCH POPUP (SAME AS HERO FILE) */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 80, scale: 0.94, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 80, scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* INPUT */}
              <div className="p-4 border-b">
                <input
                  autoFocus
                  placeholder="Search for Destinations"
                  className="w-full border rounded-full px-5 py-3 outline-none"
                />
              </div>

              <div className="p-6 space-y-6">
                {/* PRODUCT TYPE */}
                <div>
                  <h4 className="font-semibold mb-3">Product Type</h4>
                  <div className="flex gap-3">
                    {["Tour", "Activity"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setProductType(type)}
                        className={`px-6 py-2 rounded-full border ${
                          productType === type
                            ? "bg-orange-500 text-white border-orange-500"
                            : "text-gray-600"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* DURATION */}
                <div>
                  <h4 className="font-semibold mb-3">Trip Duration</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Upto 1 Day",
                      "2 to 3 days",
                      "3 to 5 days",
                      "5 to 7 days",
                      "7+ Days",
                    ].map((d) => (
                      <button
                        key={d}
                        onClick={() => setTripDuration(d)}
                        className={`px-4 py-2 rounded-full border text-sm ${
                          tripDuration === d
                            ? "bg-orange-500 text-white border-orange-500"
                            : "text-gray-600"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* FLIGHT */}
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeFlight}
                    onChange={() => setIncludeFlight(!includeFlight)}
                    className="w-5 h-5 accent-orange-500"
                  />
                  I want flights to be included
                </label>
              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-center p-4 border-t">
                <button
                  onClick={() => setShowSearch(false)}
                  className="text-gray-600 underline"
                >
                  Clear All
                </button>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
                  Search For Products
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

HeroReusable.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  heroTitle: PropTypes.string.isRequired,
  heroSubtitle: PropTypes.string,
};

export default HeroReusable;
