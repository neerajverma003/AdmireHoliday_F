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


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactHero = () => {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/hero/video"); // your API
        const res = await response.json();

        // Filter only the "Contact" video
        const contactVideo = res.data.find(item => item.title === "Contact");
        const url = contactVideo?.video_url?.[0]?.url;

        setVideoUrl(url);
        console.log("Contact video URL:", url);
      } catch (error) {
        console.error("Error loading video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
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
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          Welcome to Our Blog World
        </h1>
      </div>
    </section>
  );
};

export default ContactHero;