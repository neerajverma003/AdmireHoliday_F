import React from "react";

const CompanyStory = () => {
  return (
    <section className="py-10 bg-white px-4">
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-extrabold"
          style={{ color: "#2C8780" }}
        >
          About Admire Holidays
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed text-left sm:text-center">
          At{" "}
          <span className="font-semibold text-yellow-500">Admire Holidays</span>, we believe travel is more than visiting places — it's about creating stories that stay with you forever. Founded with passion and expertise, we specialize in curating authentic and memorable travel experiences that connect you deeply with each destination’s culture, nature, and people. From tranquil beaches and vibrant cities to thrilling adventures, we tailor every journey to your unique dreams and desires, ensuring your travels leave lasting impressions.
        </p>

        {/* Quote block */}
        <blockquote className="border-l-4 border-yellow-400 pl-4 text-left text-gray-600 italic text-base">
          “Travel broadens the mind and enriches the soul — let Admire Holidays be your guide to the world.”
        </blockquote>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 pt-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-500 uppercase tracking-wide text-sm">
              Happy Travelers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">50+</div>
            <div className="text-gray-500 uppercase tracking-wide text-sm">
              Destinations
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">5+</div>
            <div className="text-gray-500 uppercase tracking-wide text-sm">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
