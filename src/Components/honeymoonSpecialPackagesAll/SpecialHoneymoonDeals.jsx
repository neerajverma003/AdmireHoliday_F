import React, { useState } from 'react';
import { Heart, MapPin, Plane, Globe, Star, Calendar } from 'lucide-react';
 
function SpecialHoneymoonDeals() {
  const [activeTab, setActiveTab] = useState(null);
 
  const honeymoondomesticPackages = [
  {
    id: 1,
    title: "Kashmir Paradise",
    location: "Srinagar, Gulmarg, Pahalgam",
    duration: "6 Days / 5 Nights",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
    rating: 4.8,
    reviews: 124,
    features: ["Houseboat Stay", "Shikara Ride", "Gondola Ride", "All Meals", "Private Transport"]
  },
  {
    id: 2,
    title: "Goa Beach Romance",
    location: "North & South Goa",
    duration: "5 Days / 4 Nights",
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
    rating: 4.6,
    reviews: 89,
    features: ["Beach Resort", "Candlelight Dinner", "Water Sports", "Sunset Cruise", "Airport Transfer"]
  },
  {
    id: 3,
    title: "Rajasthan Royal",
    location: "Udaipur, Jaipur, Jodhpur",
    duration: "7 Days / 6 Nights",
    image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg",
    rating: 4.9,
    reviews: 156,
    features: ["Palace Hotels", "Cultural Shows", "Camel Safari", "Heritage Tours", "Royal Dining"]
  },
  {
    id: 4,
    title: "Kerala Backwaters",
    location: "Munnar, Alleppey, Cochin",
    duration: "6 Days / 5 Nights",
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg",
    rating: 4.7,
    reviews: 98,
    features: ["Houseboat Stay", "Tea Plantation", "Ayurvedic Spa", "Backwater Cruise", "Hill Station"]
  },
  {
    id: 5,
    title: "Ooty & Coonoor Delight",
    location: "Ooty, Coonoor",
    duration: "5 Days / 4 Nights",
    image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
    rating: 4.5,
    reviews: 77,
    features: ["Hill Resort", "Botanical Gardens", "Toy Train", "Tea Museum", "Romantic Walks"]
  },
  {
    id: 6,
    title: "Andaman Escape",
    location: "Port Blair, Havelock Island",
    duration: "6 Days / 5 Nights",
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    rating: 4.6,
    reviews: 102,
    features: ["Beachside Resort", "Scuba Diving", "Cellular Jail Visit", "Private Cab", "Island Hopping"]
  }
];
 
  const honeymooninternationalPackages = [
  {
    id: 1,
    title: "Maldives Paradise",
    location: "Male, Maldives",
    duration: "5 Days / 4 Nights",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    rating: 4.9,
    reviews: 234,
    features: ["Overwater Villa", "Private Beach", "Spa Treatments", "Water Sports", "All Inclusive"]
  },
  {
    id: 2,
    title: "Paris Romance",
    location: "Paris, France",
    duration: "6 Days / 5 Nights",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    rating: 4.8,
    reviews: 187,
    features: ["Luxury Hotel", "Eiffel Tower Dinner", "Seine River Cruise", "City Tours", "Museum Passes"]
  },
  {
    id: 3,
    title: "Bali Bliss",
    location: "Ubud, Seminyak, Bali",
    duration: "7 Days / 6 Nights",
    image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg",
    rating: 4.7,
    reviews: 145,
    features: ["Beach Villa", "Couple Spa", "Temple Tours", "Rice Terrace", "Sunset Dinner"]
  },
  {
    id: 4,
    title: "Switzerland Alps",
    location: "Zurich, Interlaken, Lucerne",
    duration: "8 Days / 7 Nights",
    image: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg",
    rating: 4.9,
    reviews: 167,
    features: ["Mountain Resort", "Train Journeys", "Cable Car Rides", "Lake Cruises", "Alpine Dining"]
  },
  {
    id: 5,
    title: "Santorini Escape",
    location: "Santorini, Greece",
    duration: "6 Days / 5 Nights",
    image: "https://images.pexels.com/photos/163864/santorini-oia-greece-houses-163864.jpeg",
    rating: 4.8,
    reviews: 132,
    features: ["Cliffside Suites", "Sunset Views", "Wine Tasting", "Volcano Cruise", "Infinity Pools"]
  },
  {
    id: 6,
    title: "Tokyo & Kyoto Romance",
    location: "Tokyo, Kyoto, Japan",
    duration: "7 Days / 6 Nights",
    image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
    rating: 4.7,
    reviews: 119,
    features: ["Ryokan Stay", "Cherry Blossom Viewing", "Private Tea Ceremony", "Shrine Visits", "Bullet Train Ride"]
  }
];
 
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-primaryHeading/5 via-white to-primaryHeading/10">
      {/* Header */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-pink-400 mr-3" />
              <h3 className="text-4xl md:text-4xl font-bold text-gray-900">
                Honeymoon
                <span className="text-pink-400 block md:inline md:ml-4">Special Packages</span>
              </h3>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose your perfect romantic getaway from our carefully curated packages
            </p>
          </div>
 
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
            <button
              onClick={() => setActiveTab(activeTab === 'domestic' ? null : 'domestic')}
              className={`group relative px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                activeTab === 'domestic'
                  ? 'bg-gradient-to-r from-primaryHeading to-primaryHeading text-white'
                  : 'bg-white text-gray-900 hover:bg-primaryHeading/10 border-2 border-primaryHeading/30'
              }`}
            >
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 mr-2" />
                <span>Domestic Packages</span>
              </div>
              {activeTab === 'domestic' && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primaryHeading rotate-45"></div>
              )}
            </button>
 
            <button
              onClick={() => setActiveTab(activeTab === 'international' ? null : 'international')}
              className={`group relative px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                activeTab === 'international'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                  : 'bg-white text-gray-900 hover:bg-blue-50 border-2 border-blue-200'
              }`}
            >
              <div className="flex items-center justify-center">
                <Globe className="h-6 w-6 mr-2" />
                <span>International Packages</span>
              </div>
              {activeTab === 'international' && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rotate-45"></div>
              )}
            </button>
          </div>
        </div>
      </section>
 
      {/* Package Cards */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'domestic' && (
            <PackageSection
              title="Domestic Honeymoon Packages"
              description="Explore the romantic beauty of India with our specially curated domestic packages"
              packages={honeymoondomesticPackages}
              color="primary"
            />
          )}
          {activeTab === 'international' && (
            <PackageSection
              title="International Honeymoon Packages"
              description="Discover exotic destinations around the world with our luxury international packages"
              packages={honeymooninternationalPackages}
              color="blue"
            />
          )}
          {!activeTab && (
            <div className="text-center py-20">
              <Plane className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-600 mb-4">Select a Package Type</h3>
              <p className="text-gray-500 text-lg">
                Choose between domestic or international packages to explore our romantic honeymoon destinations
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
 
function PackageSection({ title, description, packages, color }) {
  const colorMap = {
    primary: {
      text: 'text-primaryHeading',
      dot: 'bg-primaryHeading',
      gradient: 'from-primaryHeading to-blue-400',
      hover: 'hover:from-primaryHeading/90 hover:to-blue-500',
    },
    blue: {
      text: 'text-blue-600',
      dot: 'bg-blue-500',
      gradient: 'from-blue-500 to-indigo-500',
      hover: 'hover:from-blue-600 hover:to-indigo-600',
    },
  };
 
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
 
      <div className="flex flex-wrap gap-8 justify-center">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 w-[350px] h-[400px] flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-[45%] overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                <h3 className="text-lg font-bold mb-1">{pkg.title}</h3>
                <p className="text-sm">{pkg.location}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center z-30">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="text-sm font-semibold">{pkg.rating}</span>
                <span className="text-xs text-gray-600 ml-1">({pkg.reviews})</span>
              </div>
            </div>
 
            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between flex-1 overflow-hidden">
              <div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>
                <div className="space-y-2 mb-4">
                  {pkg.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 ${colorMap[color].dot} rounded-full mr-3`}></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className={`w-full bg-red-600 text-white py-2 px-4 rounded-xl font-semibold ${colorMap[color].hover} transform hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default SpecialHoneymoonDeals;