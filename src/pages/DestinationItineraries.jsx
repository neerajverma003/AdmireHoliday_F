// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   FaSun,
//   FaMoon,
//   FaHotel,
// } from "react-icons/fa";
// import { Loader2, ArrowLeft } from "lucide-react";
// import NavBar from "../Components/NavBar";
// import Footer from "../Components/Footer";

// const DestinationItineraries = () => {
//   const { destinationId } = useParams();
//   const navigate = useNavigate();

//   const [destination, setDestination] = useState(null);
//   const [itineraries, setItineraries] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchDestinationAndItineraries();
//   }, [destinationId]);

//   const fetchDestinationAndItineraries = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);

//       const response = await fetch(
//         `http://localhost:5000/api/v1/destination/itineraries/${destinationId}`
//       );
//       if (!response.ok) throw new Error("Failed to fetch itineraries");

//       const data = await response.json();

//       if (data.success && data.data) {
//         setItineraries(data.data);
//         if (data.data.length > 0 && data.data[0].selected_destination) {
//           setDestination(data.data[0].selected_destination);
//         }
//       } else {
//         setError(data.message || "No itineraries found for this destination");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load itineraries. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSelectItinerary = (itinerary) => {
//     navigate(`/itineraries/${itinerary._id}`);
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="min-h-screen bg-gray-50">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12 px-4">
//           <div className="max-w-7xl mx-auto">
//             <button
//               onClick={() => navigate(-1)}
//               className="flex items-center gap-2 mb-6 hover:opacity-80 transition"
//             >
//               <ArrowLeft size={20} />
//               <span>Back</span>
//             </button>

//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               {destination?.destination_name || "Destination"} Itineraries
//             </h1>
//             <p className="text-lg opacity-90">
//               Explore curated travel packages for this destination
//             </p>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 py-12">
//           {/* Loading */}
//           {isLoading && (
//             <div className="flex flex-col items-center justify-center py-20">
//               <Loader2 className="w-12 h-12 animate-spin text-orange-500 mb-4" />
//               <p className="text-gray-600 text-lg">Loading itineraries...</p>
//             </div>
//           )}

//           {/* Error */}
//           {error && !isLoading && (
//             <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
//               <p className="text-red-600 text-lg mb-4">{error}</p>
//               <button
//                 onClick={() => navigate("/")}
//                 className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
//               >
//                 Go to Home
//               </button>
//             </div>
//           )}

//           {/* Cards Grid */}
//           {!isLoading && !error && itineraries.length > 0 && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {itineraries.map((pkg) => (
//                 <div
//                   key={pkg._id}
//                   className="w-full flex flex-col bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition p-4 cursor-pointer"
//                   onClick={() => handleSelectItinerary(pkg)}
//                 >
//                   {/* Image */}
//                   <div className="rounded-xl overflow-hidden h-56 w-full shadow-sm">
//                     <img
//                       src={pkg.image?.[0] || "/images/default-package.jpg"}
//                       alt={pkg.title}
//                       className="w-full h-full object-cover rounded-xl transition duration-500 hover:scale-110"
//                     />
//                   </div>

//                   {/* Title */}
//                   <h3 className="mt-4 text-center text-lg font-semibold text-gray-900">
//                     {pkg.title || "Untitled"}
//                   </h3>

//                   {/* Price */}
//                   {pkg.price && (
//                     <p className="text-center mt-1 text-gray-700 text-sm flex justify-center items-center gap-1">
//                       <span>₹</span>
//                       {pkg.price}
//                       <span className="text-orange-400 font-semibold ml-1">
//                         {pkg.discount || "10% off"}
//                       </span>
//                     </p>
//                   )}

//                   {/* Icons */}
//                   <div className="flex justify-center gap-4 mt-2 text-gray-500 text-sm font-semibold">
//                     <span className="flex items-center gap-1">
//                       <FaSun className="text-orange-400" />
//                       {pkg.no_of_days || 0} Days
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <FaMoon className="text-indigo-400" />
//                       {pkg.no_of_night || 0} Nights
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <FaHotel />
//                       Hotel
//                     </span>
//                   </div>

//                   {/* Button */}
//                   <div className="text-center mt-4">
//                     <button className="bg-orange-400 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-500 transition shadow-md hover:shadow-lg">
//                       View Package
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Empty */}
//           {!isLoading && !error && itineraries.length === 0 && (
//             <div className="bg-white rounded-lg shadow p-12 text-center">
//               <p className="text-gray-600 text-lg mb-4">
//                 No itineraries available for this destination
//               </p>
//               <button
//                 onClick={() => navigate("/")}
//                 className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
//               >
//                 Explore Other Destinations
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default DestinationItineraries;








import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSun, FaMoon, FaHotel } from "react-icons/fa";
import { Loader2, ArrowLeft } from "lucide-react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const DestinationItineraries = () => {
  const { destinationId } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItineraries();
  }, [destinationId]);

  const fetchItineraries = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/api/v1/destination/itineraries/${destinationId}`
      );
      const json = await res.json();

      if (json.success) {
        setItineraries(json.data || []);
        if (json.data?.[0]?.selected_destination) {
          setDestination(json.data[0].selected_destination);
        }
      } else {
        setError("No itineraries found");
      }
    } catch (err) {
      setError("Failed to load itineraries");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-5 opacity-90 hover:opacity-100"
          >
            <ArrowLeft size={18} /> Back
          </button>

          <h1 className="text-4xl font-bold">
            {destination?.destination_name || "Destination"}
          </h1>
          <p className="mt-2 text-white/90">
            Curated travel packages just for you
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center py-24">
            <Loader2 className="animate-spin text-orange-500 w-10 h-10 mb-4" />
            <p className="text-gray-600">Loading packages...</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="text-center bg-red-50 p-10 rounded-xl">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => navigate("/")}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg"
            >
              Go Home
            </button>
          </div>
        )}

        {/* Cards */}
        {!loading && !error && itineraries.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {itineraries.map((pkg) => (
              <div
                key={pkg._id}
                onClick={() => navigate(`/itineraries/${pkg._id}`)}
                className="
                  bg-white border border-orange-300 rounded-2xl
                  p-4 cursor-pointer
                  transition-all duration-300
                  hover:shadow-2xl hover:-translate-y-2
                "
              >
                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-4">
                  <img
                    src={pkg.destination_images?.[0] || pkg.image?.[0] || pkg.images?.[0] || pkg.title_image?.[0] || pkg.show_image?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
                    alt={pkg.title}
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                    }}
                  />
                </div>

                {/* Title & Price */}
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900 text-base leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="font-bold text-gray-900 text-sm">
                    ₹{pkg.price || 21999}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {pkg.overview ||
                    "The Andaman & Nicobar Islands are a breathtaking archipelago located in the Bay of Bengal."}
                </p>

                {/* Icons */}
                <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
                  <span className="flex items-center gap-1">
                    <FaSun className="text-orange-400" />
                    {pkg.no_of_days || 7} Days
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMoon className="text-indigo-400" />
                    {pkg.no_of_night || 6} Nights
                  </span>
                  <span className="flex items-center gap-1">
                    <FaHotel />
                    Hotel
                  </span>
                </div>

                {/* Button */}
                <button
                  className="
                    w-full mt-5 py-2 rounded-lg
                    bg-orange-500 text-white font-medium
                    hover:bg-orange-600 transition
                  "
                >
                  View Package
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default DestinationItineraries;