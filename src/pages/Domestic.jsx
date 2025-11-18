// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import NavBar from "../Components/NavBar";
// import Footer from "../Components/Footer";
// import DestinationGrid from "../Components/destinations/DestinationGrid";
// import HeroReusable from "../Components/heroSection/HeroReusable";
// import TravelGallery from "../Components/TravelGallery";
// // import {  getDomesticAndInternationalPage } from "../api/api";
// // getHeroSection
// const Domestic = () => {
//   const [videoUrl, setVideoUrl] = useState(null);
//   const [destinations, setDestinations] = useState([]);
//   const [heroLoading, setHeroLoading] = useState(true);
//   const [destinationsLoading, setDestinationsLoading] = useState(true);
//   const [error, setError] = useState(null);
// const [video , setVideo] = useState("");
//   // hero video
//   // useEffect(() => {
//   //   const fetchVideo = async () => {
//   //     try {
//   //       const { data } = await getHeroSection("domestic");
//   //       setVideoUrl(data?.publicUrl[0]);
//   //     } catch (error) {
//   //       console.error("Error loading video:", error);
//   //       setError("Failed to load hero video");
//   //       setVideoUrl(null);
//   //     } finally {
//   //       setHeroLoading(false);
//   //     }
//   //   };
//   //   fetchVideo();
//   // }, []);

// const response = async () => {
//     try {
//       console.log("fetching home video at domestic page");
//       const getdata = await fetch("http://localhost:5000/admin/hero/video"); // Await the fetch
//       const res = await getdata.json(); // Then parse JSON
//       setVideo(res);
//       console.log(res);
//       console.log(video.data[3].video_url[1])
//       // console.log(res.data[5].video_url[0])
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   useEffect(() => {
//     console.log("useEffect triggered");
//     response();
//   }, [])

//   // fetch domestic destinations
//   useEffect(() => {
//     const fetchDomesticDestinations = async () => {
//       try {
//         setDestinationsLoading(true);
//         const response = await getDomesticAndInternationalPage('domestic');
//         console.log(response);
        
  
//         // Validate response structure
//         if (!response.data?.success || !Array.isArray(response.data.data)) {
//           throw new Error('Invalid API response structure');
//         }
  
//         // Transform API data
//         const formattedDestinations = response.data.data
//           .filter(dest => dest.domestic_or_international === "Domestic") // Only domestic
//           .map(dest => ({
//             id: dest._id,
//             slug: dest.destination_name.toLowerCase().replace(/\s+/g, '-'),
//             name: dest.destination_name,
//             description: "Explore this beautiful destination",
//             images: Array.isArray(dest.title_image) && dest.title_image.length > 0 
//               ? dest.title_image 
//               : ['default-image-url.jpg'] // Fallback image
//           }));
  
//         setDestinations(formattedDestinations);
//         setError(null);
//       } catch (error) {
//         console.error('Error fetching destinations:', error);
//         setError(error.message);
//         setDestinations([]);
//       } finally {
//         setDestinationsLoading(false);
//       }
//     };
  
//     fetchDomesticDestinations();
//   }, []);
// if(video)
//   return (
//     <div>
//       <NavBar />
//       <HeroReusable
//         // videoUrl={video.data[3].video_url[1]}
//         type="video/mp4"
//         title="Discover Domestic Destinations"
//         loading={heroLoading}
//       />

//       <div className="py-12 bg-gray-50">
//         {error ? (
//           <div className="text-center text-red-500">{error}</div>
//         ) : (
//           <DestinationGrid
//             destinations={destinations}
//             title="Popular Domestic Destinations"
//             type="domestic"
//             loading={destinationsLoading}
//           />
//         )}
//       </div>

//       <TravelGallery />
//       <Footer />
//     </div>
//   );
// };

// export default Domestic;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import DestinationGrid from "../Components/destinations/DestinationGrid";
import HeroReusable from "../Components/heroSection/HeroReusable";
import TravelGallery from "../Components/TravelGallery";
import {  getDomesticAndInternationalPage } from "../api/api";
// getHeroSection
const Domestic = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [heroLoading, setHeroLoading] = useState(true);
  const [destinationsLoading, setDestinationsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [video, setVideo] = useState("");
  // hero video
  // useEffect(() => {
  //   const fetchVideo = async () => {
  //     try {
  //       const { data } = await getHeroSection("domestic");
  //       setVideoUrl(data?.publicUrl[0]);
  //     } catch (error) {
  //       console.error("Error loading video:", error);
  //       setError("Failed to load hero video");
  //       setVideoUrl(null);
  //     } finally {
  //       setHeroLoading(false);
  //     }
  //   };
  //   fetchVideo();
  // }, []);

  const response = async () => {
    try {
      console.log("fetching home video at domestic page");
      const getdata = await fetch("http://localhost:5000/admin/hero/video"); // Await the fetch
      const res = await getdata.json(); // Then parse JSON
      setVideo(res);
      console.log(res);
      console.log(video.data[3].video_url[1]);
      // console.log(res.data[5].video_url[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered");
    response();
  }, []);

  // fetch domestic destinations
  useEffect(() => {
    const fetchDomesticDestinations = async () => {
      try {
        setDestinationsLoading(true);
        const response = await getDomesticAndInternationalPage("domestic");
        console.log(`domesticAndInternationalPage response ${response}`);

        // Validate response structure
        if (!response.data?.success || !Array.isArray(response.data.data)) {
          throw new Error("Invalid API response structure");
          console.log("no response");
        }

        // Transform API data
        const formattedDestinations = response.data.data
          .filter((dest) => dest.domestic_or_international === "Domestic") // Only domestic
          .map((dest) => ({
            id: dest._id,
            slug: dest.destination_name.toLowerCase().replace(/\s+/g, "-"),
            name: dest.destination_name,
            description: "Explore this beautiful destination",
            images:
              Array.isArray(dest.title_image) && dest.title_image.length > 0
                ? dest.title_image
                : ["default-image-url.jpg"], // Fallback image
          }));
          console.log('Domestic Data page',formattedDestinations)
        setDestinations(formattedDestinations);
        setError(null);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setError(error.message);
        setDestinations([]);
      } finally {
        setDestinationsLoading(false);
      }
    };

    fetchDomesticDestinations();
  }, []);
  if (video)
    return (
      <div>
        <NavBar />
        <HeroReusable
          // videoUrl={video.data[3].video_url[1]}
          type="video/mp4"
          title="Discover Domestic Destinations"
          loading={heroLoading}
        />

        <div className="py-12 bg-gray-50">
          {error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <DestinationGrid
              destinations={destinations}
              title="Popular Domestic Destinations"
              type="domestic"
              loading={destinationsLoading}
            />
          )}
        </div>

        <TravelGallery />
        <Footer />
      </div>
    );
};

export default Domestic;