// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import EnquiryForm from "../../forms/PlanMyTripForm.jsx";
// import { getHeroSection } from "../../api/api.js";



// const Hero = () => {
//   const navigate = useNavigate();
//   const [showEnquiryForm, setShowEnquiryForm] = useState(false);
//   const [videoUrl, setVideoUrl] = useState();
//   const [loading, setLoading] = useState(true);
//   const [video , setVideo] = useState("");
  
//  const response = async () => {
//   try {
//     // console.log("fetching home video");
//     const getdata = await fetch("http://localhost:5000/admin/hero/video"); // Await the fetch
//     const res = await getdata.json(); // Then parse JSON
//     setVideo(res);
//     // console.log(res);
//     // console.log(res.data[5].video_url[0])
//   } catch (error) {
//     console.log(error);
//   }
// };


// useEffect(() => {
//   response();
// }, [])

//   // useEffect(() => {
//   //   const response = async () => {
//   //     try {
//   //       console.log("Fetching home video...");
//   //       const res = await fetch("http://localhost:5000/admin/hero/video");

//   //       if (!res.ok) {
//   //         const errorText = await res.text();
//   //         throw new Error(`HTTP ${res.status} - ${errorText}`);
//   //       }

//   //       const data = await res.json();
//   //       console.log("Video data:", data);
//   //       setVideo(data);

//   //     } catch (err) {
//   //       console.error("Error fetching video:", err.message);
//   //     }
//   //   };

//   //   response();
//   // }, []);




//   const handlelearnmore = () => {
//     navigate('/learnmore');
//   }
  



// //   const handleClick = () => {
// //     navigate("/explorenow"); // Make sure this route exists
// //   };
// if(video)
//   return (
//     <div className="w-full">
//       {/* VIDEO HERO SECTION START */}
//       <div className="relative w-full h-screen md:h-[90vh] min-h-[520px] overflow-hidden bg-black">
//         <div className="relative w-full h-full flex items-center justify-center">
//           {/* Video Background */}
//    {/* <div className="absolute top-50 left-0 w-full h-full z-20 bg-white">
//   <video
//     src={`http://localhost:5000/${video.data[5].video_url[1].url}`}
//     type="video/mp4"
//     // muted
//     autoPlay
//     loop
//     // playsInline
//     // preload="auto"
//     className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-10"
//   >


//     Your browser does not support the video tag.
//   </video>
// </div> */}


// {video?.data
//   ?.filter((item) => item.title === "Home")
//   .map((homeItem) =>
//     homeItem.video_url
//       .filter((videoObj) => videoObj.visibility === "Public")
//       .map((publicVideo) => (
//         <div
//           key={publicVideo._id}
//           className="absolute top-50 left-0 w-full h-full z-20 bg-white"
//         >
//           <video
//             src={publicVideo.url} // no localhost prefix needed for full URL
//             autoPlay
//             loop
//             muted
//             className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-10"
//           >
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       ))
//   )}



//           {/* Hero Content */}
//           <div className="relative z-30 text-center text-white max-w-5xl px-6">
//             <div className="animate-fade-in-up space-y-6">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg leading-tight">
//                 Discover Your Next Adventure With Admire Holidays
//               </h1>
//               <p className="text-lg md:text-xl opacity-90 drop-shadow-md leading-relaxed">
//                 Discover breathtaking places and create unforgettable memories
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
//                 <button
//                   className="px-8 py-3 text-base font-semibold rounded-md bg-blue-600 text-white min-w-[160px] hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
//                   // onClick={handleClick}
//                 >
//                   Explore Now
//                 </button>
//                 <button className="px-8 py-3 text-base font-semibold rounded-md bg-white text-gray-800 border-2 border-white min-w-[160px] hover:-translate-y-0.5 transition-all duration-300" onClick={handlelearnmore}>
//                   Learn More
//                 </button>
//               </div>
//               {/* Plan Journey Button */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
//                 <button
//                   onClick={() => setShowEnquiryForm(true)}
//                   className="px-8 py-3 text-base font-semibold rounded-md bg-red-600 text-white border-2 border-red-500 min-w-[140px] hover:bg-red-800 hover:border-white hover:text-white hover:-translate-y-0.5 transition-all duration-300"
//                 >
//                   Plan Your Journey
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Enquiry Form Modal */}
//           {showEnquiryForm && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//               <div className="bg-white rounded-xl p-6 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
//                 <button
//                   onClick={() => setShowEnquiryForm(false)}
//                   className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
//                 >
//                   &times;
//                 </button>
//                 <EnquiryForm onClose={() => setShowEnquiryForm(false)} />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       {/* VIDEO HERO SECTION END */}
//     </div>
//   );
// };

// export default Hero;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import EnquiryForm from "../../forms/PlanMyTripForm.jsx";

// const Hero = () => {
//   const navigate = useNavigate();
//   const [showEnquiryForm, setShowEnquiryForm] = useState(false);
//   const [videoUrl, setVideoUrl] = useState("");
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch Home Video
//   const fetchHeroVideo = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/admin/hero/video");
//       const data = await res.json();

//       // ✅ Find HOME → Public Video
//       const homeItem = data?.data?.find(
//         (item) => item.title === "Home"
//       );

//       const publicVideo = homeItem?.video_url?.find(
//         (vid) => vid.visibility === "Public"
//       );

//       if (publicVideo?.url) {
//         setVideoUrl(publicVideo.url);
//       }
//     } catch (err) {
//       console.error("Hero video error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchHeroVideo();
//   }, []);

//   if (loading) return null;

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* ✅ VIDEO BACKGROUND */}
//       {videoUrl && (
//         <video
//           src={videoUrl}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       )}

//       {/* ✅ DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/60 z-10" />

//       {/* ✅ CONTENT */}
//       <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
//         <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-5xl leading-tight">
//           Discover Your Next Adventure With <br />
//           <span className="text-blue-400">Admire Holidays</span>
//         </h1>

//         <p className="mt-4 text-lg text-gray-200 max-w-3xl">
//           Premium Domestic & International Tour Packages for the Modern Explorer
//         </p>

//         {/* ✅ SEARCH BAR
//         <div className="mt-8 bg-white rounded-xl shadow-lg p-4 flex flex-wrap gap-3 w-full max-w-4xl">
//           <input
//             type="text"
//             placeholder="Destination"
//             className="flex-1 border rounded-lg px-4 py-2 outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Budget Package"
//             className="flex-1 border rounded-lg px-4 py-2 outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Duration"
//             className="flex-1 border rounded-lg px-4 py-2 outline-none"
//           />
//           <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold">
//             Search
//           </button>
//         </div> */}
                 
//         {/* ✅ CTA BUTTON */}
//         <button
//           onClick={() => setShowEnquiryForm(true)}
//           className="mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold"
//         >
//           Plan Your Journey
//         </button>
//       </div>

//       {/* ✅ DESTINATION CARDS */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-full px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {[
//             { title: "Dubai", img: "/images/dubai.jpg" },
//             { title: "Jaipur", img: "/images/jaipur.jpg" },
//             { title: "Bali", img: "/images/bali.jpg" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl overflow-hidden shadow-lg"
//             >
//               <img
//                 src={item.img}  
//                 alt={item.title}
//                 className="h-44 w-full object-cover"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="font-semibold">{item.title}</h3>
//                 <button className="mt-2 text-sm bg-orange-500 text-white px-4 py-1 rounded">
//                   Explore Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ ENQUIRY MODAL */}
//       {showEnquiryForm && (
//         <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
//           <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
//             <button
//               className="absolute top-3 right-4 text-xl"
//               onClick={() => setShowEnquiryForm(false)}
//             >
//               ✕
//             </button>
//             <EnquiryForm />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryForm from "../../forms/PlanMyTripForm.jsx";

const Hero = () => {
  const navigate = useNavigate();

  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ SEARCH STATES
  const [showSearch, setShowSearch] = useState(false);
  const [productType, setProductType] = useState("Tour");
  const [tripDuration, setTripDuration] = useState("3 to 5 days");
  const [includeFlight, setIncludeFlight] = useState(true);

  // ✅ Fetch Home Video
  const fetchHeroVideo = async () => {
    try {
      const res = await fetch("http://localhost:5000/admin/hero/video");
      const data = await res.json();

      const homeItem = data?.data?.find(
        (item) => item.title === "Home"
      );

      const publicVideo = homeItem?.video_url?.find(
        (vid) => vid.visibility === "Public"
      );

      if (publicVideo?.url) {
        setVideoUrl(publicVideo.url);
      }
    } catch (err) {
      console.error("Hero video error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroVideo();
  }, []);

  if (loading) return null;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ✅ VIDEO BACKGROUND */}
      {videoUrl && (
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* ✅ DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* ✅ CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-5xl leading-tight">
          Discover Your Next Adventure With <br />
          <span className="text-blue-400">Admire Holidays</span>
        </h1>

        <p className="mt-4 text-lg text-gray-200 max-w-3xl">
          Premium Domestic & International Tour Packages for the Modern Explorer
        </p>

        {/* ✅ ANIMATED SEARCH BAR */}
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

        {/* ✅ CTA BUTTON */}
        <button
          onClick={() => setShowEnquiryForm(true)}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold"
        >
          Plan Your Journey
        </button>
      </div>

      {/* ✅ DESTINATION CARDS */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-full px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Dubai", img: "/images/dubai.jpg" },
            { title: "Jaipur", img: "/images/jaipur.jpg" },
            { title: "Bali", img: "/images/bali.jpg" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold">{item.title}</h3>
                <button className="mt-2 text-sm bg-orange-500 text-white px-4 py-1 rounded">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* ✅ SEARCH POPUP WITH PROFESSIONAL ANIMATION */}
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
              {/* Search Input */}
              <div className="p-4 border-b">
                <input
                  autoFocus
                  placeholder="Search for Destinations"
                  className="w-full border rounded-full px-5 py-3 outline-none"
                />
              </div>

              <div className="p-6 space-y-6">
                {/* Product Type */}
                <div>
                  <h4 className="font-semibold mb-3">Product Type</h4>
                  <div className="flex gap-3">
                    {["Tour", "Activity"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setProductType(type)}
                        className={`px-6 py-2 rounded-full border transition ${
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

                {/* Trip Duration */}
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
                        className={`px-4 py-2 rounded-full border text-sm transition ${
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

                {/* Price Range */}
                <div>
                  <h4 className="font-semibold mb-3">Price Range</h4>
                  <div className="flex gap-4">
                    <input
                      value="INR 0"
                      readOnly
                      className="w-1/2 border rounded-lg px-3 py-2"
                    />
                    <input
                      value="INR 500000"
                      readOnly
                      className="w-1/2 border rounded-lg px-3 py-2"
                    />
                  </div>
                </div>

                {/* Flights */}
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeFlight}
                    onChange={() =>
                      setIncludeFlight(!includeFlight)
                    }
                    className="w-5 h-5 accent-orange-500"
                  />
                  I want flights to be included
                </label>
              </div>

              {/* Footer */}
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

      {/* ✅ ENQUIRY MODAL */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              className="absolute top-3 right-4 text-xl"
              onClick={() => setShowEnquiryForm(false)}
            >
              ✕
            </button>
            <EnquiryForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
