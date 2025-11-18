import React from 'react';
 
const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Who We Are</h1>
        <p className="mt-4 text-lg text-gray-600">Redefining the Way You Experience the World</p>
      </div>
 
      {/* Company Introduction */}
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          At Admire Holidays, we believe that travel is more than just visiting new places—it's about creating lasting memories, connecting with cultures, and discovering yourself along the way.
        </p>
        <p>
          Our expert team handles the details so you can focus on the experience. Whether you're planning a romantic escape, a family adventure, or a group tour,
          we tailor every journey to match your style, interests, and pace. With us, your trip is more than a vacation—it's a story worth telling.
        </p>
      </div>
 
      {/* Core Values */}
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                🌍 What We Stand For
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none text-gray-700">
                <li className="p-4 bg-gray-50 rounded shadow-sm border-l-4 border-blue-500">
                <strong>People-First Planning:</strong> Your journey begins with listening. We prioritize your needs, preferences, and pace in every itinerary.
                </li>
                <li className="p-4 bg-gray-50 rounded shadow-sm border-l-4 border-green-500">
                <strong>Trust Through Transparency:</strong> No fine print, no surprises—just clear communication and honest recommendations.
                </li>
                <li className="p-4 bg-gray-50 rounded shadow-sm border-l-4 border-yellow-500">
                <strong>Travel with Purpose:</strong> We support ethical travel choices that give back to local communities and respect the environment.
                </li>
                <li className="p-4 bg-gray-50 rounded shadow-sm border-l-4 border-purple-500">
                <strong>Passion Meets Expertise:</strong> Our team is made up of real travelers who turn their love of exploration into unforgettable journeys for you.
                </li>
            </ul>
        </div>
 
      {/* Differentiator */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          💡 What Makes Us Different?
        </h2>
        <p className="text-gray-700 text-lg">
         Unlike generic travel platforms, Admire Holidays delivers a <strong>deeply personalized travel experience</strong>. Every itinerary is thoughtfully designed with your preferences in mind—offering expert advice, round-the-clock support, and flexible options. We’re not just booking trips; we’re crafting meaningful journeys that reflect who you are and what you love.
        </p>
      </div>
    </section>
  );
};
 
export default WhoWeAre;