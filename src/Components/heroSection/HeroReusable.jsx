import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
const HeroReusable = ({ videoUrl, title }) => {
  // console.log("Video URL:", videoUrl);
const [video , setVideo] = useState("");
  const response = async () => {
      try {
        console.log("fetching home video at domestic page");
        const getdata = await fetch("http://localhost:5000/admin/hero/video"); // Await the fetch
        const res = await getdata.json(); // Then parse JSON
        setVideo(res);
        console.log(res);
        console.log(video.data[3].video_url[1])
        // console.log(res.data[5].video_url[0])
      } catch (error) {
        console.log(error);
      }
    };
  
  
    useEffect(() => {
      console.log("useEffect triggered");
      response();
    }, [])
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
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
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          Discover Domestic Destinations
        </h1>
      </div>
    </section>
  );
};

HeroReusable.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HeroReusable;
