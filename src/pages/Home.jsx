// import React, { useState, useEffect } from "react";
// import NavBar from "../Components/NavBar";
// import Hero from "../Components/heroSection/Hero";
// import TrendingDestinations from "../Components/TrendingDestinations";
// import PackageSlider from "../Components/PackageSlider";
// import InternationalDestinations from "../Components/InternationalDestinations";
// import DomesticPackage from "../Components/DomesticPackage";
// import Footer from "../Components/Footer";
// import {
//   recommendedPackages,
//   weekendPackages as defaultWeekendPackages,
//   internationalPackages,
//   domesticPackages,
// } from "../data/packages";
// import WeekendGatewayDestinations from "../Components/WeekendGatewayDestinations";
// import ResortsSlider from "../Components/ResortSlider";
// import TravelTips from "../Components/TravelTips";
// import WhyBookAdmireHolidays from "../Components/WhyBookAdmireHolidays";
// import TravelGallery from "../Components/TravelGallery";
// import VideoTestimonials from "../Components/VideoTestimonials";
// import SubscribeUs from "../forms/SubscribeUs";
// import StatsAndPartners from "../Components/StatsAndPartners";
// import { Link } from "react-router-dom";
// import EnquiryForm from "../forms/EnquiryForm";
// import TestimonialSlider from "../Components/TestimonialSlider";
// import ChatWidget from "../Components/ChatBot/ChatWidget";
// import { use } from "react";
// // import { getExclusivePackages, getInternationalPackages } from "../api/api.js";

// const Home = () => {
//   const [exclusivePackages, setExclusivePackages] = useState([]);
//   const [weekendPackages, setWeekendPackages] = useState([]);
//   const [loading, setLoading] = useState({
//     packages: true,
//     content: false
//   });
//   const [error, setError] = useState(null);
//   // const [data,setData] = useState([])
//   // useEffect(() => {
//   //   const fetchPackages = async () => {
//   //     try {
//   //       const response = await getExclusivePackages();
//   //       console.log("API response:", response);

//   //       if (!response?.data?.data) {
//   //         throw new Error("Invalid API response structure");
//   //       }

//   //       const apiData = response.data.data;

//   //       // Transform exclusive packages
//   //       const transformedExclusive = (apiData.exclusiveItineraryData || []).map(pkg => ({
//   //         id: pkg._id,
//   //         title: pkg.title,
//   //         slug: pkg.title?.toLowerCase().replace(/\s+/g, "-"),
//   //         duration: pkg.duration || "Custom Duration",
//   //         price: pkg.pricing || "On Request",
//   //         location: pkg.selected_destination?.destination_name || "Multiple Locations",
//   //         image: pkg.destination_thumbnails?.[0] || "/images/default-package.jpg",
//   //         link: `/itineraries/${pkg._id}`,
//   //         rating: 4.5
//   //       }));

//   //       // Transform weekend packages
//   //       const transformedWeekend = (apiData.weekendItineraryDetails || []).map(pkg => ({
//   //         id: pkg._id,
//   //         title: pkg.title,
//   //         slug: pkg.title?.toLowerCase().replace(/\s+/g, "-"),
//   //         duration: pkg.duration || "2-3 Days",
//   //         price: pkg.pricing || "On Request",
//   //         location: pkg.selected_destination?.destination_name || "Weekend Destination",
//   //         image: pkg.destination_thumbnails?.[0] || "/images/default-weekend.jpg",
//   //         link: `/itineraries/${pkg._id}`,
//   //         rating: 4.5,
//   //         isWeekend: true
//   //       }));

//   //       setExclusivePackages(transformedExclusive.length > 0 ? transformedExclusive : recommendedPackages.flat());
//   //       setWeekendPackages(transformedWeekend.length > 0 ? transformedWeekend : defaultWeekendPackages.flat());
        
//   //     } catch (err) {
//   //       console.error("Error fetching packages:", err);
//   //       setError({
//   //         message: "Couldn't load latest packages. Showing recommended options instead.",
//   //         details: err.message
//   //       });
//   //       setExclusivePackages(recommendedPackages.flat());
//   //       setWeekendPackages(defaultWeekendPackages.flat());
//   //     } finally {
//   //       setLoading(prev => ({ ...prev, packages: false }));
//   //     }
//   //   };

//   //   // Add a minimum loading time for better UX
//   //   const minLoadingTime = Promise.all([
//   //     fetchPackages(),
//   //     new Promise(resolve => setTimeout(resolve, 800))
//   //   ]);

//   //   minLoadingTime.catch(err => {
//   //     console.error("Loading error:", err);
//   //   });
//   // }, []);


//   // useEffect(() => {
//   //   const fetchPackages = async () => {
//   //     try {
//   //       const response = await getInternationalPackages();
//   //       console.log("API response:", response);
        
//   //     } catch (error) {
        
//   //     }
      
//   //   };

//   //   // Add a minimum loading time for better UX
//   //   const minLoadingTime = Promise.all([
//   //     fetchPackages(),
//   //     new Promise(resolve => setTimeout(resolve, 800))
//   //   ]);

//   //   minLoadingTime.catch(err => {
//   //     console.error("Loading error:", err);
//   //   });
//   // }, []);

//   // if (loading.packages) {
//   //   return (
//   //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//   //       <div className="text-center">
//   //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
//   //         <p className="mt-4 text-lg font-medium text-gray-700">
//   //           Loading amazing travel experiences...
//   //         </p>
//   //       </div>
//   //     </div>
//   //   );
//   // }
//   // const response = async()=>{
//   //   try {
//   //     const res = await fetch("http://localhost:5000/getpackage")
//   //     const data = await res.json()
//   //     console.log(data)
//   //     setData(data)
//   //   }
//   //     catch (error) {
//   //       console.log(error)
//   //     }
//   //   }
//   //   useEffect(()=>{
//   //     response()
//   //   },[])
//   return (
//     <div className="home-page">
//       <EnquiryForm />
//       <NavBar />
//       <Hero
//         videoSrc="src/assets/videos/Hero-video.mp4"
//         title="Discover Domestic Destinations"
//       />

//       {error && (
//         <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mx-4 my-2 rounded-md shadow-sm">
//           <p className="font-medium">{error.message}</p>
//           {process.env.NODE_ENV === 'development' && (
//             <p className="text-sm mt-1">{error.details}</p>
//           )}
//         </div>
//       )}

//       <PackageSlider
//         title="Exclusive Tour Packages"
//         description="Curated packages designed to suit every traveler's needs"
//         packages={exclusivePackages}
//       />
      
//       <TrendingDestinations />
//       <PackageSlider
//         title="Weekend Trending Packages"
//         description="Perfect quick escapes for your busy schedule"
//         packages={weekendPackages}
//         customClass="bg-blue-50"
//       />
//       <InternationalDestinations />
//       <PackageSlider
//         title="International Holiday Packages"
//         description="Explore the world with our exclusive deals"
//         packages={internationalPackages}
//       />

//       <StatsAndPartners />
//       <DomesticPackage />
//       <WeekendGatewayDestinations />
//       <ResortsSlider />
//       <TravelTips />
//       <WhyBookAdmireHolidays />
//       <TravelGallery />
//       <VideoTestimonials />
//       <TestimonialSlider/>
      
//       <SubscribeUs />
//       <Footer />

//       <Link
//         to="/HomeStickyFormPage"
//         className="fixed right-0 top-1/2 -translate-y-1/2 bg-red-500 text-white px-1.5 py-2.5 rounded-tl-md rounded-bl-md font-semibold cursor-pointer z-[1000] no-underline shadow-md text-[14px] w-10 text-center [writing-mode:vertical-lr] [text-orientation:mixed] hover:bg-red-600 transition-colors duration-200"
//         aria-label="Submit suggestions or complaints"
//       >
//         Suggestions/Complaints
//       </Link>

      
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import NavBar from "../Components/NavBar";
// import Hero from "../Components/heroSection/Hero";
// import TrendingDestinations from "../Components/TrendingDestinations";
// import ExclusivePackages from "../Components/ExclusivePackages";
// import WeekendTrendingPackages from "../Components/WeekendTrendingPackages";
// import InternationalDestinations from "../Components/InternationalDestinations";
// import DomesticPackage from "../Components/DomesticPackage";
// import Footer from "../Components/Footer";
// import WeekendGatewayDestinations from "../Components/WeekendGatewayDestinations";
// import ResortsSlider from "../Components/ResortSlider";
// import TravelTips from "../Components/TravelTips";
// import WhyBookAdmireHolidays from "../Components/WhyBookAdmireHolidays";
// import TravelGallery from "../Components/TravelGallery";
// import VideoTestimonials from "../Components/VideoTestimonials";
// import SubscribeUs from "../forms/SubscribeUs";
// import StatsAndPartners from "../Components/StatsAndPartners";
// import { Link } from "react-router-dom";
// import EnquiryForm from "../forms/EnquiryForm";
// import TestimonialSlider from "../Components/TestimonialSlider";
// import ChatWidget from "../Components/ChatBot/ChatWidget";
// import WhyChoose from "../Components/WhyChoose"
// import TopSelling from "../Components/TopSelling";
// import SpecialHoneymoon from "../Components/SpecialHoneymoon"; 

// const Home = () => {
//   return (
//     <div className="home-page">
//       <EnquiryForm />
//       <NavBar />
//       <Hero
//         videoSrc="src/assets/videos/Hero-video.mp4"
//         title="Discover Domestic Destinations"
//       />

//       <ExclusivePackages
//         title="Exclusive Tour Packages"
//         description="Curated packages designed to suit every traveler's needs"
//       />  
//       <WhyChoose/>
//       <TopSelling/>


//       <TrendingDestinations />

//       <WeekendTrendingPackages
//         title="Weekend Trending Packages"
//         description="Perfect quick escapes for your busy schedule"
//         customClass="bg-blue-50"
//         />

//       <InternationalDestinations />
//       <SpecialHoneymoon/>
// {/* 
//       <ExclusivePackages
//         title="International Holiday Packages"
//         description="Explore the world with our exclusive deals"
//       /> */}

//       <StatsAndPartners />
     
//       <DomesticPackage />
//       <WeekendGatewayDestinations />
//       <ResortsSlider />
//       <TravelTips />
//       <WhyBookAdmireHolidays />
//       <TravelGallery />
//       <VideoTestimonials />
//       <TestimonialSlider />
//       <SubscribeUs />
//       <Footer />

//       <Link
//         to="/HomeStickyFormPage"
//         className="fixed right-0 top-1/2 -translate-y-1/2 bg-red-500 text-white px-1.5 py-2.5 rounded-tl-md rounded-bl-md font-semibold cursor-pointer z-[1000] no-underline shadow-md text-[14px] w-10 text-center [writing-mode:vertical-lr] [text-orientation:mixed] hover:bg-red-600 transition-colors duration-200"
//         aria-label="Submit suggestions or complaints"
//       >
//         Suggestions/Complaints
//       </Link>
//     </div>
//   );
// };

// export default Home;


// import React from "react";
// import NavBar from "../Components/NavBar";
// import Hero from "../Components/heroSection/Hero";
// import TrendingDestinations from "../Components/TrendingDestinations";
// import ExclusivePackages from "../Components/ExclusivePackages";
// import WeekendTrendingPackages from "../Components/WeekendTrendingPackages";
// import InternationalDestinations from "../Components/InternationalDestinations";
// import DomesticPackage from "../Components/DomesticPackage";
// import Footer from "../Components/Footer";
// import WeekendGatewayDestinations from "../Components/WeekendGatewayDestinations";
// import ResortsSlider from "../Components/ResortSlider";
// import TravelTips from "../Components/TravelTips";
// import WhyBookAdmireHolidays from "../Components/WhyBookAdmireHolidays";
// import TravelGallery from "../Components/TravelGallery";
// import VideoTestimonials from "../Components/VideoTestimonials";
// import SubscribeUs from "../forms/SubscribeUs";
// import StatsAndPartners from "../Components/StatsAndPartners";
// import { Link } from "react-router-dom";
// import EnquiryForm from "../forms/EnquiryForm";
// import TestimonialSlider from "../Components/TestimonialSlider";
// import ChatWidget from "../Components/ChatBot/ChatWidget";
// import WhyChoose from "../Components/WhyChoose"
// import TopSelling from "../Components/TopSelling";
// import SpecialHoneymoon from "../Components/SpecialHoneymoon"; 

// const Home = () => {
//   return (
//     <div className="home-page bg-[#f6f6f6] min-h-screen">

//       <EnquiryForm />
//       <NavBar />
//       <Hero
//         videoSrc="src/assets/videos/Hero-video.mp4"
//         title="Discover Domestic Destinations"
//       />

//       <ExclusivePackages
//         title="Exclusive Tour Packages"
//         description="Curated packages designed to suit every traveler's needs"
//       />  
//       <WhyChoose/>
//       <TopSelling/>


//       <TrendingDestinations />

//       <WeekendTrendingPackages
//         title="Weekend Trending Packages"
//         description="Perfect quick escapes for your busy schedule"
//         customClass="bg-blue-50"
//         />

//       <InternationalDestinations />
//       <SpecialHoneymoon/>
// {/* 
//       <ExclusivePackages
//         title="International Holiday Packages"
//         description="Explore the world with our exclusive deals"
//       /> */}

//       <StatsAndPartners />
     
//       <DomesticPackage />
//       <WeekendGatewayDestinations />
//       <ResortsSlider />
//       <TravelTips />
//       <WhyBookAdmireHolidays />
//       <TravelGallery />
//       <VideoTestimonials />
//       <TestimonialSlider />
//       <SubscribeUs />
//       <Footer />

//       <Link
//         to="/HomeStickyFormPage"
//         className="fixed right-0 top-1/2 -translate-y-1/2 bg-red-500 text-white px-1.5 py-2.5 rounded-tl-md rounded-bl-md font-semibold cursor-pointer z-[1000] no-underline shadow-md text-[14px] w-10 text-center [writing-mode:vertical-lr] [text-orientation:mixed] hover:bg-red-600 transition-colors duration-200"
//         aria-label="Submit suggestions or complaints"
//       >
//         Suggestions/Complaints
//       </Link>
//     </div>
//   );
// };

// export default Home;import React from "react";
import { Link } from "react-router-dom";

/* ===== Layout Components ===== */
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

/* ===== Page Sections ===== */
import Hero from "../Components/heroSection/Hero";
import ExclusivePackages from "../Components/ExclusivePackages";
import TrendingDestinations from "../Components/TrendingDestinations";
import WeekendTrendingPackages from "../Components/WeekendTrendingPackages";
import InternationalDestinations from "../Components/InternationalDestinations";
import DomesticPackage from "../Components/DomesticPackage";
import WeekendGatewayDestinations from "../Components/WeekendGatewayDestinations";
import ResortsSlider from "../Components/ResortSlider";
import TravelTips from "../Components/TravelTips";
import WhyBookAdmireHolidays from "../Components/WhyBookAdmireHolidays";
import TravelGallery from "../Components/TravelGallery";
import VideoTestimonials from "../Components/VideoTestimonials";
import TestimonialSlider from "../Components/TestimonialSlider";
import StatsAndPartners from "../Components/StatsAndPartners";
import WhyChoose from "../Components/WhyChoose";
import TopSelling from "../Components/TopSelling";
import SpecialHoneymoon from "../Components/SpecialHoneymoon";

/* ===== Forms & Widgets ===== */
import EnquiryForm from "../forms/EnquiryForm";
import SubscribeUs from "../forms/SubscribeUs";
import ChatWidget from "../Components/ChatBot/ChatWidget";

/* ===== Reusable Section Wrapper ===== */
const Section = ({ children, className = "" }) => (
  <section
    className={`px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16 ${className}`}
  >
    {children}
  </section>
);

const Home = () => {
  const isDesktop =
    typeof window !== "undefined" && window.innerWidth >= 1024;

  return (
    <div className="home-page bg-[#f6f6f6] min-h-screen overflow-x-hidden">
      {/* ===== Enquiry Floating Form ===== */}
      <EnquiryForm />

      {/* ===== Navbar ===== */}
      <NavBar />

      {/* ===== Hero Section ===== */}
      <Hero
        videoSrc="src/assets/videos/Hero-video.mp4"
        title="Discover Domestic Destinations"
        className="h-[60vh] md:h-[85vh]"
      />
  <Section>
        <ExclusivePackages
          title="Exclusive Tour Packages"
          description="Curated packages designed to suit every traveler's needs"
        /> 
       </Section>
      {/* ===== Top Selling (High Priority) ===== */}
      <Section>
        <TopSelling />
      </Section>
      {/* ===== Why Choose (Desktop First) ===== */}
      <Section className="hidden md:block">
        <WhyChoose />
      </Section>

      {/* ===== Trending Destinations ===== */}
      <Section>
        <TrendingDestinations />
      </Section>

      {/* ===== Weekend Packages ===== */}
      <Section className="bg-blue-50">
        <WeekendTrendingPackages
          title="Weekend Trending Packages"
          description="Perfect quick escapes for your busy schedule"
        />
      </Section>

      {/* ===== International Destinations ===== */}
      <Section>
        <InternationalDestinations />
      </Section>

      {/* ===== Honeymoon Special ===== */}
      <Section>
        <SpecialHoneymoon />
      </Section>

      {/* ===== Stats & Partners ===== */}
      <Section>
        <StatsAndPartners />
      </Section>

      {/* ===== Domestic Packages ===== */}
      <Section>
        <DomesticPackage />
      </Section>

      {/* ===== Weekend Gateways ===== */}
      <Section>
        <WeekendGatewayDestinations />
      </Section>

      {/* ===== Resorts Slider (Desktop Only for Performance) ===== */}
      {isDesktop && (
        <Section>
          <ResortsSlider />
        </Section>
      )}

      {/* ===== Travel Tips ===== */}
      <Section>
        <TravelTips />
      </Section>

      {/* ===== Why Book Admire ===== */}
      <Section>
        <WhyBookAdmireHolidays />
      </Section>

      {/* ===== Travel Gallery ===== */}
      <Section>
        <TravelGallery />
      </Section>

      {/* ===== Video Testimonials ===== */}
      <Section>
        <VideoTestimonials />
      </Section>

      {/* ===== Testimonial Slider ===== */}
      <Section>
        <TestimonialSlider />
      </Section>

      {/* ===== Subscribe Section ===== */}
      <Section>
        <SubscribeUs />
      </Section>

      {/* ===== Footer ===== */}
      <Footer />

      {/* ===== Chat Widget ===== */}
      <ChatWidget />

      {/* ===== Sticky Suggestions Button (Desktop Only) ===== */}
      <Link
        to="/HomeStickyFormPage"
        className="
          fixed right-0 top-1/2 -translate-y-1/2
          hidden md:block
          bg-red-500 hover:bg-red-600
          text-white
          px-1.5 py-2.5
          rounded-tl-md rounded-bl-md
          font-semibold
          z-[1000]
          shadow-md
          text-[14px]
          w-10 text-center
          [writing-mode:vertical-lr]
          [text-orientation:mixed]
          transition-colors duration-200
        "
        aria-label="Submit suggestions or complaints"
      >
        Suggestions / Complaints
      </Link>
    </div>
  );
};

export default Home;
