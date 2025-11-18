import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { getHeroSection } from "../../api/api.js";


const DomesticHero = () => {
  const navigate = useNavigate();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  // const [videoUrl, setVideoUrl] = useState();
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(true);

  const response = async () => {
    try {
      console.log("fetching home video at domestic page");
      const getdata = await fetch("http://localhost:5000/admin/hero/video"); // Await the fetch
      const res = await getdata.json(); // Then parse JSON
      setVideo(res);
      console.log(res);
      // console.log(res.data[5].video_url[0])
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    console.log("useEffect triggered"); 
    response();
  }, [])
  //  useEffect(() => {
  //   const fetchVideo = async () => {
  //     try {
  //       setLoading(true);


  //       console.log(data);

  //       setVideoUrl(data?.heroSectionData?.video_url);
  //     } catch (error) {
  //       console.error("Error loading video:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchVideo();
  // }, []);

  const handleClick = () => {
    navigate("/explorenow"); // Make sure this route exists
  };
  if (video)
    return (
      <div className="w-full">
        {/* VIDEO HERO SECTION START */}
        <div className="relative w-full h-screen min-h-[500px] overflow-hidden bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Video Background */}
            {/* <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-20"></div>
            <video
              muted
              playsInline
              autoPlay
              loop
              preload="auto"
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-10"
            >
              {videoUrl && <source src={videoUrl} type="video/mp4" />}
              Your browser does not support the video tag.
            </video>
          </div> */}
            {video?.data
              ?.filter((item) => item.title === "Domestic")
              .map((domesticItem) =>
                domesticItem.video_url
                  .filter((videoObj) => videoObj.visibility === "Public")
                  .map((publicVideo) => (
                    <div
                      key={publicVideo._id}
                      className="absolute top-0 left-0 w-full h-full z-10"
                    >
                      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-20"></div>
                      <video
                        muted
                        playsInline
                        autoPlay
                        loop
                        preload="auto"
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-10"
                      >
                        <source src={publicVideo.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))
              )}

            {/* Hero Content */}
            <div className="relative z-30 text-center text-white max-w-4xl px-5">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
                  Your Amazing Destination
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow-md leading-relaxed">
                  Discover breathtaking places and create unforgettable memories
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                  <button
                    className="px-8 py-3 text-base font-semibold rounded-md bg-blue-600 text-white min-w-[140px] hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300 "
                    onClick={handleClick}
                  >
                    Explore Now
                  </button>
                  <button className="px-8 py-3 text-base font-semibold rounded-md bg-transparent text-white border-2 border-white min-w-[140px] hover:bg-white hover:text-gray-800 hover:-translate-y-0.5 transition-all duration-300">
                    Learn More
                  </button>
                </div>
                {/* Plan Journey Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mt-4">
                  <button
                    onClick={() => setShowEnquiryForm(true)}
                    className="px-8 py-3 text-base font-semibold rounded-md bg-transparent text-white border-2 border-red-500 min-w-[140px] hover:bg-red-600 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Plan Your Journey
                  </button>
                </div>
              </div>
            </div>

            {/* Enquiry Form Modal */}
            {showEnquiryForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl p-6 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
                  <button
                    onClick={() => setShowEnquiryForm(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    &times;
                  </button>
                  <EnquiryForm onClose={() => setShowEnquiryForm(false)} />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* VIDEO HERO SECTION END */}
      </div>
    );
};

export default DomesticHero;
