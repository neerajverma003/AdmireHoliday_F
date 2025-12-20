// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getItenaryOFDomesticInternationalPages } from "../api/api";
// import NavBar from "../Components/NavBar";
// import Footer from "../Components/Footer";
// import {
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaRupeeSign,
//   FaStar,
//   FaHotel,
//   FaUtensils,
//   FaBus,
//   FaHiking,
//   FaPhone
// } from "react-icons/fa";

// const ItineraryDetails = () => {
//   const { id } = useParams();
//   const [itinerary, setItinerary] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState("overview");
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   useEffect(() => {
//     const fetchItinerary = async () => {
//       try {
//         // Fetch single itinerary by ID from backend
//         const response = await getItenaryOFDomesticInternationalPages(id);
//         console.log("Fetched Itinerary:", response);
        
//         if (!response?.data?.data) {
//           throw new Error("Invalid API response structure");
//         }

//         setItinerary(response.data.data);
//       } catch (err) {
//         console.error("Error fetching itinerary:", err);
//         setError(err.message || "Failed to load itinerary");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchItinerary();
//     }
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-lg font-medium text-gray-600">Loading itinerary...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-500">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <NavBar />
//       <div className="bg-gray-50">
//         <section className="pt-28 pb-12">
//           <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
//             {/* Breadcrumb */}
//             <div className="mb-6 text-sm">
//               <Link to="/" className="text-[#E69233] hover:underline">
//                 Home
//               </Link>{" "}
//               &gt;
//               <Link
//                 to={`/destinations/${itinerary.selected_destination?.destination_name.toLowerCase().replace(/\s+/g, '-')}`}
//                 className="text-[#E69233] hover:underline"
//               >
//                 {" "}
//                 {itinerary.selected_destination?.destination_name}
//               </Link>{" "}
//               &gt;
//               <span className="text-gray-600"> {itinerary.title}</span>
//             </div>

//             {/* Package Header */}
//             <div className="mb-8">
//               <h1 className="text-[#261F43] text-4xl font-bold mb-2">
//                 {itinerary.title}
//               </h1>
//               <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
//                 <div className="flex items-center">
//                   <FaMapMarkerAlt className="text-[#E69233] mr-2" />
//                   <span>{itinerary.selected_destination?.destination_name}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaCalendarAlt className="text-[#E69233] mr-2" />
//                   <span>{itinerary.duration}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaRupeeSign className="text-[#E69233] mr-2" />
//                   <span className="font-bold">
//                     {typeof itinerary.pricing === 'object' && itinerary.pricing?.standard_price
//                       ? `₹${itinerary.pricing.standard_price}`
//                       : itinerary.pricing || 'On Request'}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="text-yellow-400" />
//                 ))}
//                 <span className="ml-2 text-gray-600">(24 reviews)</span>
//               </div>
//             </div>

//             {/* Image Gallery */}
//             <div className="mb-12 relative">
//               <div className="container mx-auto">
//                 {/* Main Featured Image */}
//                 <div className="relative h-96 rounded-xl overflow-hidden">
//                   <span className="block overflow-hidden w-full h-full absolute inset-0">
//                     {itinerary.destination_images && itinerary.destination_images.length > 0 && (
//                       <img
//                         src={itinerary.destination_images[activeImageIndex]}
//                         alt={itinerary.title}
//                         className="w-full h-full object-cover transition-all duration-300"
//                         style={{
//                           position: "absolute",
//                           inset: 0,
//                           boxSizing: "border-box",
//                           padding: 0,
//                           border: "none",
//                           margin: "auto",
//                           display: "block",
//                           width: 0,
//                           height: 0,
//                           minWidth: "100%",
//                           maxWidth: "100%",
//                           minHeight: "100%",
//                           maxHeight: "100%",
//                           objectFit: "cover",
//                         }}
//                       />
//                     )}
//                   </span>
//                 </div>

//                 {/* Category Images */}
//                 <div className="flex flex-wrap justify-center gap-4 mt-6">
//                   {itinerary.destination_images?.slice(0, 4).map((img, index) => (
//                     <div
//                       key={index}
//                       className={`relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer transition-all ${
//                         activeImageIndex === index
//                           ? "ring-4 ring-[#E69233]"
//                           : ""
//                       }`}
//                       onClick={() => setActiveImageIndex(index)}
//                     >
//                       <span className="block overflow-hidden w-full h-full absolute inset-0">
//                         <img
//                           src={img}
//                           alt={`${itinerary.title} ${index + 1}`}
//                           className="w-full h-full object-cover"
//                           style={{
//                             position: "absolute",
//                             inset: 0,
//                             boxSizing: "border-box",
//                             padding: 0,
//                             border: "none",
//                             margin: "auto",
//                             display: "block",
//                             width: 0,
//                             height: 0,
//                             minWidth: "100%",
//                             maxWidth: "100%",
//                             minHeight: "100%",
//                             maxHeight: "100%",
//                             objectFit: "cover",
//                           }}
//                         />
//                       </span>
//                       {index === 3 && itinerary.destination_images.length > 4 && (
//                         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-xs">
//                           <svg
//                             width="16"
//                             height="16"
//                             viewBox="0 0 16 16"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="mb-1"
//                           >
//                             <g clipPath="url(#clip0_420_1971)">
//                               <path
//                                 d="M1.33203 8C1.33203 4.85734 1.33203 3.286 2.30803 2.30934C3.28536 1.33334 4.85603 1.33334 7.9987 1.33334C11.1414 1.33334 12.7127 1.33334 13.6887 2.30934C14.6654 3.28667 14.6654 4.85734 14.6654 8C14.6654 11.1427 14.6654 12.714 13.6887 13.69C12.7134 14.6667 11.1414 14.6667 7.9987 14.6667C4.85603 14.6667 3.2847 14.6667 2.30803 13.69C1.33203 12.7147 1.33203 11.1427 1.33203 8Z"
//                                 stroke="currentColor"
//                               ></path>
//                               <path
//                                 d="M10.6654 6.66667C11.4017 6.66667 11.9987 6.06972 11.9987 5.33334C11.9987 4.59696 11.4017 4 10.6654 4C9.92898 4 9.33203 4.59696 9.33203 5.33334C9.33203 6.06972 9.92898 6.66667 10.6654 6.66667Z"
//                                 stroke="currentColor"
//                               ></path>
//                               <path
//                                 d="M1.33203 8.33334L2.50003 7.31134C2.79279 7.05538 3.17186 6.92023 3.56051 6.93322C3.94916 6.94622 4.31836 7.1064 4.59336 7.38134L7.45336 10.2413C7.6753 10.4632 7.9684 10.5997 8.28106 10.6268C8.59373 10.6539 8.90592 10.5698 9.1627 10.3893L9.36203 10.2493C9.73243 9.98919 10.1801 9.86238 10.6319 9.88963C11.0837 9.91687 11.5129 10.0966 11.8494 10.3993L13.9987 12.3333"
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                               ></path>
//                             </g>
//                             <defs>
//                               <clipPath id="clip0_420_1971">
//                                 <rect
//                                   width="16"
//                                   height="16"
//                                   fill="white"
//                                 ></rect>
//                               </clipPath>
//                             </defs>
//                           </svg>
//                           <span>View All Images</span>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Package Details */}
//             <div className="flex flex-col lg:flex-row gap-8">
//               {/* Main Content */}
//               <div className="lg:w-2/3">
//                 {/* Tabs */}
//                 <div className="border-b border-gray-200 mb-6">
//                   <nav className="flex space-x-8">
//                     <button
//                       onClick={() => setActiveTab("overview")}
//                       className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                         activeTab === "overview"
//                           ? "border-[#E69233] text-[#E69233]"
//                           : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                       }`}
//                     >
//                       Overview
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("itinerary")}
//                       className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                         activeTab === "itinerary"
//                           ? "border-[#E69233] text-[#E69233]"
//                           : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                       }`}
//                     >
//                       Itinerary
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("inclusions")}
//                       className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                         activeTab === "inclusions"
//                           ? "border-[#E69233] text-[#E69233]"
//                           : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                       }`}
//                     >
//                       Inclusions/Exclusions
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("terms")}
//                       className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                         activeTab === "terms"
//                           ? "border-[#E69233] text-[#E69233]"
//                           : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                       }`}
//                     >
//                       Terms
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("paymentModes")}
//                       className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                         activeTab === "paymentModes"
//                           ? "border-[#E69233] text-[#E69233]"
//                           : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                       }`}
//                     >
//                       Payment modes
//                     </button>
//                   </nav>
//                 </div>

//                 {/* Tab Content */}
//                 <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
//                   {activeTab === "overview" && (
//                     <>
//                       <h2 className="text-2xl font-bold mb-4 text-[#261F43]">
//                         Package Overview
//                       </h2>
//                       <p className="text-gray-600 mb-6">
//                         {itinerary.description || "Explore this amazing destination with our carefully crafted itinerary."}
//                       </p>

//                       {itinerary.itinerary_theme?.length > 0 && (
//                         <>
//                           <h3 className="text-xl font-semibold mb-3 text-[#E69233]">
//                             Themes
//                           </h3>
//                           <div className="flex flex-wrap gap-3 mb-6">
//                             {itinerary.itinerary_theme.map((theme, index) => (
//                               <span
//                                 key={index}
//                                 className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
//                               >
//                                 {theme}
//                               </span>
//                             ))}
//                           </div>
//                         </>
//                       )}

//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//                         <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
//                           <FaHotel className="text-3xl text-[#E69233] mb-2" />
//                           <span className="font-medium">Accommodation</span>
//                         </div>
//                         <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
//                           <FaUtensils className="text-3xl text-[#E69233] mb-2" />
//                           <span className="font-medium">Meals</span>
//                         </div>
//                         <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
//                           <FaBus className="text-3xl text-[#E69233] mb-2" />
//                           <span className="font-medium">Transport</span>
//                         </div>
//                         <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
//                           <FaHiking className="text-3xl text-[#E69233] mb-2" />
//                           <span className="font-medium">Activities</span>
//                         </div>
//                       </div>
//                     </>
//                   )}

//                   {activeTab === "itinerary" && itinerary.days_information && (
//                     <>
//                       <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
//                         Detailed Itinerary
//                       </h2>
//                       <div className="space-y-6">
//                         {itinerary.days_information.map((day, index) => (
//                           <div
//                             key={index}
//                             className="border-l-4 border-[#E69233] pl-6 py-2"
//                           >
//                             <div className="flex items-center mb-2">
//                               <div className="bg-[#E69233] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
//                                 {day.day}
//                               </div>
//                               <h3 className="text-lg font-semibold">
//                                 {day.locationName}
//                               </h3>
//                             </div>
//                             <p className="text-gray-600 pl-12">
//                               {day.locationDetail}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     </>
//                   )}

//                   {activeTab === "inclusions" && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                       <div>
//                         <h3 className="text-xl font-semibold mb-4 text-[#E69233]">
//                           Inclusions
//                         </h3>
//                         <ul className="space-y-2">
//                           {(Array.isArray(itinerary.inclusion) ? itinerary.inclusion : typeof itinerary.inclusion === 'string' ? itinerary.inclusion.split('\n').filter(i => i.trim()) : [])?.map((item, i) => (
//                             <li key={i} className="flex items-start">
//                               <span className="text-[#E69233] mr-2">✓</span>
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold mb-4 text-[#E69233]">
//                           Exclusions
//                         </h3>
//                         <ul className="space-y-2">
//                           {(Array.isArray(itinerary.exclusion) ? itinerary.exclusion : typeof itinerary.exclusion === 'string' ? itinerary.exclusion.split('\n').filter(i => i.trim()) : [])?.map((item, i) => (
//                             <li key={i} className="flex items-start">
//                               <span className="text-red-500 mr-2">✗</span>
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {activeTab === "terms" && itinerary.terms_and_conditions && (
//                     <>
//                       <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
//                         Terms & Conditions
//                       </h2>
//                       <div className="text-gray-600 whitespace-pre-line">
//                         {itinerary.terms_and_conditions}
//                       </div>
//                     </>
//                   )}

//                   {activeTab === "paymentModes" && itinerary.payment_mode && (
//                     <>
//                       <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
//                         Accepted Payment Modes
//                       </h2>
//                       <div className="text-gray-600 whitespace-pre-line">
//                         {itinerary.payment_mode}
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* Reviews Section */}
//                 <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
//                   <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
//                     Customer Reviews
//                   </h2>
//                   <div className="space-y-6">
//                     <div className="border-b pb-6">
//                       <div className="flex items-center mb-2">
//                         {[...Array(5)].map((_, i) => (
//                           <FaStar key={i} className="text-yellow-400" />
//                         ))}
//                         <span className="ml-2 font-medium">
//                           Amazing Experience!
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-2">
//                         "This tour exceeded all our expectations. The hotels
//                         were excellent and the itinerary was perfectly planned."
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         - Rajesh Kumar, March 2023
//                       </p>
//                     </div>
//                     <div className="border-b pb-6">
//                       <div className="flex items-center mb-2">
//                         {[...Array(4)].map((_, i) => (
//                           <FaStar key={i} className="text-yellow-400" />
//                         ))}
//                         <FaStar className="text-gray-300" />
//                         <span className="ml-2 font-medium">Great Value</span>
//                       </div>
//                       <p className="text-gray-600 mb-2">
//                         "For the price we paid, this was an excellent package.
//                         The guide was knowledgeable and the transportation was
//                         comfortable."
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         - Priya Sharma, January 2023
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Sidebar */}
//               <div className="lg:w-1/3">
//                 <div className="bg-white rounded-xl shadow-md p-6 sticky top-28">
//                   <h3 className="text-xl font-bold mb-4 text-[#261F43]">
//                     Book This Package
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Price per person</span>
//                       <span className="font-bold">
//                         {typeof itinerary.pricing === 'object' && itinerary.pricing?.standard_price
//                           ? `₹${itinerary.pricing.standard_price}`
//                           : itinerary.pricing || 'On Request'}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Duration</span>
//                       <span>{itinerary.duration}</span>
//                     </div>
//                     <div className="pt-4 border-t">
//                       <div className="flex justify-between font-bold text-lg">
//                         <span>Total</span>
//                         <span>
//                           {typeof itinerary.pricing === 'object' && itinerary.pricing?.standard_price
//                             ? `₹${itinerary.pricing.standard_price}`
//                             : itinerary.pricing || 'On Request'}
//                         </span>
//                       </div>
//                     </div>
//                     <button className="w-full mt-4 px-6 py-3 bg-[#E69233] text-white font-semibold rounded-lg hover:bg-[#d5822b] transition flex items-center justify-center">
//                       <FaPhone className="mr-2" /> Book Now
//                     </button>
//                     <button className="w-full mt-2 px-6 py-3 bg-white text-[#E69233] font-semibold rounded-lg border border-[#E69233] hover:bg-gray-50 transition flex items-center justify-center">
//                       Get a free consultancy
//                     </button>
//                   </div>

//                   <div className="mt-8">
//                     <h4 className="font-semibold mb-3">Need help booking?</h4>
//                     <p className="text-gray-600 mb-4">
//                       Call our customer services team on the number below to
//                       speak to one of our advisors who will help you with all of
//                       your holiday needs.
//                     </p>
//                     <div className="flex items-center text-[#E69233] font-medium">
//                       <FaPhone className="mr-2" /> 1800-121-4252
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ItineraryDetails;





import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar,
  FaCheck,
  FaTimes,
  FaPhone,
} from "react-icons/fa";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { getItenaryOFDomesticInternationalPages, submitConsultationLead } from "../api/api";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ItineraryDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const [tab, setTab] = useState("itinerary");
  const [showConsult, setShowConsult] = useState(false);
  const [consult, setConsult] = useState({ name: "", phone: "", email: "", state: "", city: "" });
  const [consultSuccess, setConsultSuccess] = useState("");

  // Helper to reliably format pricing coming either as an object or primitive
  const formatPrice = (pricing) => {
    if (pricing === null || pricing === undefined || pricing === "") return "On Request";
    if (typeof pricing === "object") {
      const v = pricing.standard_price ?? pricing.price ?? pricing.amount ?? null;
      return v === null || v === undefined || v === "" ? "On Request" : `₹${v}`;
    }
    // if it's a number-like string or number, show currency
    if (typeof pricing === "number" || (typeof pricing === "string" && /^\d+(?:\.\d+)?$/.test(pricing))) {
      return `₹${pricing}`;
    }
    return pricing || "On Request";
  };

  const handleConsultSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!consult.name || !consult.phone || !consult.email) {
      setConsultSuccess("Please fill name, phone and email");
      return;
    }

    try {
      // Send consultation request to backend
      const response = await submitConsultationLead({
        ...consult,
        itineraryId: data?._id,
        itineraryTitle: data?.title
      });
      
      if (response.data.success) {
        setConsultSuccess("Thank you! Our team will contact you soon.");
        setConsult({ name: "", phone: "", email: "", state: "", city: "" });
        // auto-close after 2s
        setTimeout(() => {
          setShowConsult(false);
          setConsultSuccess("");
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting consultation:", error);
      setConsultSuccess("Failed to submit request. Please try again.");
      setTimeout(() => {
        setConsultSuccess("");
      }, 3000);
    }
  };

  useEffect(() => {
    getItenaryOFDomesticInternationalPages(id).then((res) => {
      setData(res?.data?.data);
    });
  }, [id]);

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center text-lg font-medium">
        Loading...
      </div>
    );
  }

  return (
    <>
      <NavBar />

      <div className="bg-[#F6F7F9] pt-28">
        <div className="max-w-[1320px] mx-auto px-4">

          {/* ===== BREADCRUMB ===== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm text-gray-500 mb-3"
          >
            <Link to="/" className="text-[#E69233]">Home</Link>
            {" > "}
            <span>{data.selected_destination?.destination_name}</span>
          </motion.div>

          {/* ===== TITLE ===== */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-[#261F43]"
          >
            {data.title}
          </motion.h1>

          {/* ===== META ===== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-6 mt-4 text-gray-600 text-sm"
          >
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#E69233]" />
              {data.selected_destination?.destination_name}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#E69233]" />
              {data.duration}
            </span>
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              <span className="ml-1">(342 Reviews)</span>
            </span>
          </motion.div>

          {/* ===== IMAGE GALLERY ===== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-6 bg-white rounded-2xl p-4"
          >
            <div className="rounded-xl overflow-hidden h-[260px] sm:h-[420px]">
              <motion.img
                key={activeImg}
                src={data.destination_images?.[activeImg]}
                className="w-full h-full object-cover"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
              />
            </div>

            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
              {data.destination_images?.slice(0, 5).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImg(i)}
                  className={`w-24 h-16 sm:w-28 sm:h-20 rounded-lg cursor-pointer object-cover border-2 transition ${
                    activeImg === i
                      ? "border-[#E69233]"
                      : "border-transparent"
                  }`}
                  alt=""
                />
              ))}
            </div>
          </motion.div>

          {/* ===== TABS ===== */}
          <div className="mt-10 border-b flex gap-8 text-sm font-medium overflow-x-auto">
            {["overview", "itinerary", "terms", "payment"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 capitalize whitespace-nowrap transition ${
                  tab === t
                    ? "border-b-2 border-[#E69233] text-[#E69233]"
                    : "text-gray-500"
                }`}
              >
                {t === "terms" ? "Terms & Condition" : t}
              </button>
            ))}
          </div>

          {/* ===== CONTENT GRID ===== */}
          <div className="grid lg:grid-cols-3 gap-8 mt-8 pb-16">

            {/* ===== LEFT ===== */}
            <div className="lg:col-span-2">

              {/* ===== OVERVIEW ===== */}
              {tab === "overview" && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {/* Description */}
                  <div className="bg-white p-6 rounded-xl text-gray-600 leading-relaxed">
                    <h3 className="text-lg font-semibold text-[#261F43] mb-3">Package Description</h3>
                    {data.description}
                  </div>

                  {/* Package Details */}
                  {data.destination_detail && (
                    <div className="bg-white p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-[#261F43] mb-3">Package Details</h3>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {data.destination_detail}
                      </p>
                    </div>
                  )}

                  {/* Themes */}
                  {data.itinerary_theme && data.itinerary_theme.length > 0 && (
                    <div className="bg-white p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-[#261F43] mb-3">Themes</h3>
                      <div className="flex flex-wrap gap-3">
                        {data.itinerary_theme.map((theme, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* ===== ITINERARY (NO DROPDOWN) ===== */}
              {tab === "itinerary" && (
                <div className="space-y-6">
                  {data.days_information?.map((day, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      whileHover={{
                        y: -8,
                        boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
                      }}
                      className="bg-white rounded-2xl p-6 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row gap-6">

                        {/* DAY BADGE */}
                        <div className="flex md:flex-col items-center gap-3">
                          <span className="bg-[#E69233] text-white text-xs px-4 py-1 rounded-full animate-pulse">
                            DAY {day.day}
                          </span>
                          <div className="hidden md:block w-[2px] bg-[#E69233] flex-1 mt-2" />
                        </div>

                        {/* CONTENT */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-[#261F43] mb-2">
                            {day.locationName}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 md:line-clamp-none">
                            {day.locationDetail}
                          </p>
                        </div>

                        {/* IMAGE */}
                        <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden group">
                          <motion.img
                            src={day.image || data.destination_images?.[0]}
                            alt=""
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.12 }}
                            transition={{ duration: 0.4 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* ===== INCLUSION / EXCLUSION ===== */}
              {(tab === "overview" || tab === "itinerary") && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 gap-6 mt-10 bg -[#ECFAED]"
                >
                  <InfoBox
                    title="Inclusions"
                    list={data.inclusion}
                    icon={<FaCheck />}
                    bg="bg-green-50"
                    color="text-green-600"
                  />
                  <InfoBox
                    title="Exclusions"
                    list={data.exclusion}
                    icon={<FaTimes />}
                    bg="bg-[#EDF1F5]"
                    color="text-gray-700"
                  />
                </motion.div>
              )}

              {/* ===== TERMS & CONDITIONS ===== */}
              {tab === "terms" && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="bg-white p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-[#261F43] mb-4">Terms & Conditions</h3>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {data.terms_and_conditions || "No terms and conditions available"}
                  </div>
                </motion.div>
              )}

              {/* ===== PAYMENT MODE ===== */}
              {tab === "payment" && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="bg-white p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-[#261F43] mb-4">Payment Mode</h3>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {data.payment_mode || "No payment information available"}
                  </div>
                </motion.div>
              )}
            </div>

            {/* ===== RIGHT SIDEBAR ===== */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="sticky top-28 h-fit"
            >
              <div className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-lg mb-4">
                  Book This Trip
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Price per person</span>
                    <strong>{formatPrice(data.pricing)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span>{data.duration}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(data.pricing)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowConsult(true)}
                  className="w-full bg-[#E69233] text-white py-3 rounded-md mt-4 hover:opacity-90 transition"
                >
                  Book Now
                </button>

                <button
                  onClick={() => setShowConsult(true)}
                  className="w-full border border-[#E69233] text-[#E69233] py-3 rounded-md mt-2 hover:bg-[#E69233] hover:text-white transition"
                >
                  Get Free Consultation
                </button>

                <div className="mt-6 text-sm text-gray-600">
                  <p className="font-medium">Need Help?</p>
                  <p className="flex items-center gap-2 text-[#E69233] font-semibold mt-1">
                    <FaPhone /> 1800-121-4252
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <Footer />
      {/* Consultation Modal */}
      {showConsult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowConsult(false)} />
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            className="relative z-10 w-full max-w-lg bg-white bg-gray rounded-xl p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">Get Free Consultation</h3>
                <p className="text-sm text-gray-500 mt-1">Our travel expert will call you back.</p>
              </div>
              <button onClick={() => setShowConsult(false)} className="text-gray-400 hover:text-gray-600 ml-4">✕</button>
            </div>

            <div className="mt-4">
              {consultSuccess ? (
                <div className="rounded-md bg-green-50 border border-green-100 p-3 text-green-700 text-sm">{consultSuccess}</div>
              ) : (
                <form onSubmit={handleConsultSubmit} className="mt-3 grid grid-cols-1 gap-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <input
                      value={consult.name}
                      onChange={(e) => setConsult((p) => ({ ...p, name: e.target.value }))}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E69233]"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <input
                      value={consult.phone}
                      onChange={(e) => setConsult((p) => ({ ...p, phone: e.target.value }))}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E69233]"
                      placeholder="Mobile number"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={consult.email}
                      onChange={(e) => setConsult((p) => ({ ...p, email: e.target.value }))}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E69233]"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700">State</label>
                      <input
                        value={consult.state}
                        onChange={(e) => setConsult((p) => ({ ...p, state: e.target.value }))}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E69233]"
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">City</label>
                      <input
                        value={consult.city}
                        onChange={(e) => setConsult((p) => ({ ...p, city: e.target.value }))}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E69233]"
                        placeholder="City"
                      />
                    </div>
                  </div>

                  {consultSuccess && <p className="text-sm text-green-600">{consultSuccess}</p>}

                  <div className="flex justify-end gap-3 mt-2">
                    <button type="button" onClick={() => setShowConsult(false)} className="px-4 py-2 rounded-md border text-sm">Cancel</button>
                    <button type="submit" className="px-4 py-2 rounded-md bg-[#E69233] text-white text-sm">Submit</button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

/* ===== INFO BOX ===== */
const InfoBox = ({ title, list, icon, bg, color }) => (
  <div className={`${bg} p-6 rounded-xl`}>
    <h4 className="font-semibold mb-3">{title}</h4>
    <ul className="space-y-2 text-sm">
      {(Array.isArray(list) ? list : list?.split("\n"))?.map((i, idx) => (
        <li key={idx} className="flex gap-2">
          <span className={color}>{icon}</span>
          {i}
        </li>
      ))}
    </ul>
  </div>
);

export default ItineraryDetails;