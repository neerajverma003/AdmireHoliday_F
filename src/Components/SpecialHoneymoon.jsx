import React from "react";

const data = [
  {
    title: "Vattikan",
    img: "https://images.unsplash.com/photo-1505765052862-8f3f0a5d1c3d",
    tag: "Trending",
  },
  {
    title: "Bali",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tag: "Trending",
  },
  {
    title: "Singapore",
    img: "https://images.unsplash.com/photo-1504615755583-2916b52192d8",
    tag: "Trending",
  },
  {
    title: "Udaipur",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada",
    tag: "",
  },
  {
    title: "Manali",
    img: "https://images.unsplash.com/photo-1610878180933-1237c251f1b1",
    tag: "Trending",
  },
  {
    title: "Kerla",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    tag: "Trending",
  },
];

export default function SpecialHoneymoonDeals() {
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

      {/* Cards Grid */}
      <div className="max-w-7xl  h-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            {/* Bottom Title */}
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg">
              {item.title}
            </div>

            {/* Trending Tag */}
            {item.tag && (
              <span className="absolute top-4 right-4 bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {item.tag}
              </span>
            )}

            {/* Bottom Right Icon */}
            <button className="absolute bottom-4 right-4 bg-white text-gray-700 w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100">
              <span className="text-lg">•</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
