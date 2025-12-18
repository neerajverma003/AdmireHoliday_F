import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaSun,
  FaMoon,
  FaHotel,
} from "react-icons/fa";
import { Loader2, ArrowLeft } from "lucide-react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const DestinationItineraries = () => {
  const { destinationId } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);
  const [itineraries, setItineraries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDestinationAndItineraries();
  }, [destinationId]);

  const fetchDestinationAndItineraries = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `http://localhost:5000/api/v1/destination/itineraries/${destinationId}`
      );
      if (!response.ok) throw new Error("Failed to fetch itineraries");

      const data = await response.json();

      if (data.success && data.data) {
        setItineraries(data.data);
        if (data.data.length > 0 && data.data[0].selected_destination) {
          setDestination(data.data[0].selected_destination);
        }
      } else {
        setError(data.message || "No itineraries found for this destination");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load itineraries. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectItinerary = (itinerary) => {
    navigate(`/itineraries/${itinerary._id}`);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 mb-6 hover:opacity-80 transition"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {destination?.destination_name || "Destination"} Itineraries
            </h1>
            <p className="text-lg opacity-90">
              Explore curated travel packages for this destination
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Loading */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 animate-spin text-orange-500 mb-4" />
              <p className="text-gray-600 text-lg">Loading itineraries...</p>
            </div>
          )}

          {/* Error */}
          {error && !isLoading && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
              <p className="text-red-600 text-lg mb-4">{error}</p>
              <button
                onClick={() => navigate("/")}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Go to Home
              </button>
            </div>
          )}

          {/* Cards Grid */}
          {!isLoading && !error && itineraries.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {itineraries.map((pkg) => (
                <div
                  key={pkg._id}
                  className="w-full flex flex-col bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition p-4 cursor-pointer"
                  onClick={() => handleSelectItinerary(pkg)}
                >
                  {/* Image */}
                  <div className="rounded-xl overflow-hidden h-56 w-full shadow-sm">
                    <img
                      src={pkg.image?.[0] || "/images/default-package.jpg"}
                      alt={pkg.title}
                      className="w-full h-full object-cover rounded-xl transition duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-center text-lg font-semibold text-gray-900">
                    {pkg.title || "Untitled"}
                  </h3>

                  {/* Price */}
                  {pkg.price && (
                    <p className="text-center mt-1 text-gray-700 text-sm flex justify-center items-center gap-1">
                      <span>₹</span>
                      {pkg.price}
                      <span className="text-orange-400 font-semibold ml-1">
                        {pkg.discount || "10% off"}
                      </span>
                    </p>
                  )}

                  {/* Icons */}
                  <div className="flex justify-center gap-4 mt-2 text-gray-500 text-sm font-semibold">
                    <span className="flex items-center gap-1">
                      <FaSun className="text-orange-400" />
                      {pkg.no_of_days || 0} Days
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMoon className="text-indigo-400" />
                      {pkg.no_of_night || 0} Nights
                    </span>
                    <span className="flex items-center gap-1">
                      <FaHotel />
                      Hotel
                    </span>
                  </div>

                  {/* Button */}
                  <div className="text-center mt-4">
                    <button className="bg-orange-400 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-500 transition shadow-md hover:shadow-lg">
                      View Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty */}
          {!isLoading && !error && itineraries.length === 0 && (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-gray-600 text-lg mb-4">
                No itineraries available for this destination
              </p>
              <button
                onClick={() => navigate("/")}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Explore Other Destinations
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DestinationItineraries;
