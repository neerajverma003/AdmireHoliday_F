// import React, { useState, useEffect } from "react";
// import NavBar from "../Components/NavBar";
// import Footer from "../Components/Footer";
// import DestinationGrid from "../Components/destinations/DestinationGrid";
// import HeroReusable from "../Components/heroSection/HeroReusable";
// import TravelGallery from "../Components/TravelGallery";
// import VideoTestimonials from "../Components/VideoTestimonials";
// import SubscribeUs from "../forms/SubscribeUs";
// import {  getDomesticAndInternationalPage } from "../api/api";
// // getHeroSection
// const International = () => {
//   const [videoUrl, setVideoUrl] = useState(null);
//   const [destinations, setDestinations] = useState([]);
//   const [heroLoading, setHeroLoading] = useState(true);
//   const [destinationsLoading, setDestinationsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch hero video
//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const { data } = await getHeroSection("international");
//         setVideoUrl(data?.publicUrl[0]);
//       } catch (error) {
//         console.error("Error loading video:", error);
//         setError("Failed to load hero video");
//         setVideoUrl(null);
//       } finally {
//         setHeroLoading(false);
//       }
//     };
//     fetchVideo();
//   }, []);

//   // Fetch international destinations
//   useEffect(() => {
//     const fetchInternationalDestinations = async () => {
//       try {
//         setDestinationsLoading(true);
//         const response = await getDomesticAndInternationalPage('international');
//         console.log(response);

//         // Validate response structure
//         if (!response.data?.success || !Array.isArray(response.data.data)) {
//           throw new Error('Invalid API response structure');
//         }

//         // Transform API data - filter for International this time
//         const formattedDestinations = response.data.data
//           .filter(dest => dest.domestic_or_international === "International")
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

//     fetchInternationalDestinations();
//   }, []);

//   return (
//     <div>
//       <NavBar />
//       <HeroReusable
//         videoUrl={videoUrl}
//         type="video/mp4"
//         title="Discover International Destinations"
//         loading={heroLoading}
//       />

//       <div className="py-12 bg-gray-50">
//         {error ? (
//           <div className="text-center text-red-500">{error}</div>
//         ) : (
//           <DestinationGrid
//             destinations={destinations}
//             title="Popular International Destinations"
//             type="international"
//             loading={destinationsLoading}
//           />
//         )}
//       </div>

//       <TravelGallery />
//       <VideoTestimonials />
//       <SubscribeUs />
//       <Footer />
//     </div>
//   );
// };

// export default International;

import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import DestinationGrid from "../Components/destinations/DestinationGrid";
import HeroReusable from "../Components/heroSection/HeroReusable";
import TravelGallery from "../Components/TravelGallery";
import VideoTestimonials from "../Components/VideoTestimonials";
import SubscribeUs from "../forms/SubscribeUs";
import { getDomesticAndInternationalPage } from "../api/api";
import WhyChoose from "../Components/WhyChoose";
import TesrmonialSlider from "../Components/TestimonialSlider";
import ExclusivePackages from "../Components/ExclusivePackages";
import PopularDestinations from "../Components/PopularDestination";
import CuratedExperience from "../Components/CuratedExperince";
import RelatedDestinations from "../Components/RelatedDestination";
import MeetTeam from "../Components/MeetTeam";
import StatsAndPartners from '../Components/StatsAndPartners'
const International = () => {
  const [destinations, setDestinations] = useState([]);
  const [destinationsLoading, setDestinationsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch international destinations
  useEffect(() => {
    const fetchInternationalDestinations = async () => {
      try {
        setDestinationsLoading(true);
        const response = await getDomesticAndInternationalPage("international");
        console.log(response);

        // Validate response structure
        if (!response.data?.success || !Array.isArray(response.data.data)) {
          throw new Error("Invalid API response structure");
        }

        // Transform API data - filter for International this time
        const formattedDestinations = response.data.data
          .filter((dest) => dest.domestic_or_international === "International")
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

    fetchInternationalDestinations();
  }, []);

  return (
    <div>
        <NavBar />
        <HeroReusable
        pageTitle="international"
        heroTitle="Discover International Destinations"
        heroSubtitle="Explore beautiful destinations around the world"
        />
        <ExclusivePackages
          title="Exclusive Tour Packages"
          description="Curated packages designed to suit every traveler's needs"
        />



        <PopularDestinations />
        <WhyChoose />
        <CuratedExperience/>
        <RelatedDestinations/>
        <TesrmonialSlider />




       
    
      
      
      <Footer />
    </div>
  );
};

export default International;
