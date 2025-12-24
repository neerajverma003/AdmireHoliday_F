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
          const transformedData = response.data.data.map((destination) => ({
            _id: destination._id,
            title: destination.destination_name,
            img:
              destination.title_image?.[0] ||
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
            tag: "Honeymoon",
          }));
          setData(transformedData);
        } else {
          setError("Failed to fetch honeymoon destinations");
        }
      } catch (err) {
        setError("Error loading honeymoon destinations");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHoneymoonDestinations();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/destination-itineraries/${id}`);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <p className="text-center text-xl md:text-2xl font-extrabold text-orange-500 mb-10 md:mb-1">
          Special Honeymoon Deals
        </p>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-orange-400" />
          <span className="ml-2 text-gray-600 text-sm sm:text-base">
            Loading honeymoon destinations...
          </span>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-20">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {/* Empty */}
      {!isLoading && !error && data.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">
            No honeymoon destinations available yet
          </p>
        </div>
      )}

      {/* Cards */}
      {!isLoading && !error && data.length > 0 && (
        <div className="
          max-w-7xl mx-auto px-4
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        ">
          {data.map((item) => (
            <div
              key={item._id}
              onClick={() => handleCardClick(item._id)}
              className="
                group relative cursor-pointer overflow-hidden
                rounded-2xl bg-white shadow-md
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
                active:scale-[0.98]
              "
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full object-cover
                    h-56 sm:h-60 md:h-64
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4")
                  }
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Title */}
              <div className="
                absolute bottom-4 left-4 right-4
                text-white font-semibold
                text-base sm:text-lg
                leading-tight
              ">
                {item.title}
              </div>

              {/* Tag */}
              {item.tag && (
                <span className="
                  absolute top-4 right-4
                  bg-orange-400 text-white
                  text-xs font-semibold
                  px-3 py-1 rounded-full
                ">
                  {item.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
