import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getHoneymoonDestinations } from "../api/api";
import { Loader2 } from "lucide-react";

export default function SpecialHoneymoonDeals() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoneymoonDestinations = async () => {
      try {
        setIsLoading(true);
        const response = await getHoneymoonDestinations();
        
        if (response.data.success) {
          // Transform backend data to match our card format
          const transformedData = response.data.data.map((destination) => ({
            _id: destination._id,
            title: destination.destination_name,
            img: destination.title_image && destination.title_image[0] ? destination.title_image[0] : "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
            tag: "Honeymoon",
          }));
          setData(transformedData);
        } else {
          setError("Failed to fetch honeymoon destinations");
        }
      } catch (err) {
        console.error("Error fetching honeymoon destinations:", err);
        setError("Error loading honeymoon destinations");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHoneymoonDestinations();
  }, []);

  const handleCardClick = (destinationId) => {
    navigate(`/destination-itineraries/${destinationId}`);
  };

  return (
    <div className="w-full py-16 bg-white">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="text-orange-400 font-semibold text-sm tracking-wide">
          Special Honeymoon Deals
        </p>
        <h2 className="text-3xl font-bold text-gray-800">
          Special Honeymoon Deals
        </h2>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-orange-400" />
          <span className="ml-2 text-gray-600">Loading honeymoon destinations...</span>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-16">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !error && data.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No honeymoon destinations available yet</p>
        </div>
      )}

      {/* Cards Grid */}
      {!isLoading && !error && data.length > 0 && (
        <div className="max-w-7xl h-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {data.map((item, index) => (
            <div
              key={item._id || index}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => handleCardClick(item._id)}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4";
                }}
              />

              {/* Bottom Title */}
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg">
                {item.title}
              </div>

              {/* Honeymoon Tag */}
              {item.tag && (
                <span className="absolute top-4 right-4 bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              )}

              {/* Bottom Right Icon */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(item._id);
                }}
                className="absolute bottom-4 right-4 bg-white text-gray-700 w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100">
                <span className="text-lg">•</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
