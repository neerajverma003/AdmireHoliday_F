import React, { useEffect, useState } from "react";
import { Star, X } from "lucide-react";

const CustomerTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/v1/text-testimonials");
        const data = await res.json();

        // Filter only verified testimonials (toShow === true)
        const filtered = data.data
          .filter((t) => t.toShow === true)
          .slice(0, 3);

        setTestimonials(filtered);
      } catch (e) {
        console.log("Fetch error", e);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-center text-xl md:text-2xl font-extrabold text-orange-500 mt-1">
          Customers Testimonials
        </p>
        {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
          What Our Adventurers Say
        </h2> */}
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Top row */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.profileImage || "https://via.placeholder.com/56"}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {item.location || "Unknown"}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < item.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Review text */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {item.message?.slice(0, 220)}...
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={() => setSelectedTestimonial(item)}
                className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-xs font-medium transition-all shadow-sm"
              >
                View Message
              </button>
              <button className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-xs font-medium transition-all shadow-sm">
                {item.destination || "View Package"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full message */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={selectedTestimonial.profileImage || "https://via.placeholder.com/56"}
                  alt={selectedTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    {selectedTestimonial.name}
                  </h3>
                  <p className="text-blue-100 text-sm">
                    {selectedTestimonial.location || "Unknown"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="hover:bg-white/20 p-2 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < selectedTestimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-3 text-gray-600 font-medium">
                  {selectedTestimonial.rating}/5
                </span>
              </div>

              {/* Destination & Date */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Destination:</strong> {selectedTestimonial.destination || "Not specified"}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Travel Date:</strong> {new Date(selectedTestimonial.travelDate).toLocaleDateString() || "Not specified"}
                </p>
              </div>

              {/* Full Message */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Full Review</h4>
                <p className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
                  {selectedTestimonial.message}
                </p>
              </div>

              {/* Trip Images if available */}
              {selectedTestimonial.trip_image && selectedTestimonial.trip_image.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Trip Photos</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedTestimonial.trip_image.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Trip photo ${idx + 1}`}
                        className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="flex gap-3 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomerTestimonials;
