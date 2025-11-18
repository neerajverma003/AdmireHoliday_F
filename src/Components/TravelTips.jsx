import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, MapPin, Shield, Heart, Plane, Backpack, Calendar } from 'lucide-react';

const travelTips = [
  {
    id: 'pack-smart',
    title: 'Pack Smart',
    description: 'Avoid overpacking by bringing only the essentials for a comfortable trip. Focus on versatile items to maximize space and reduce stress.',
    icon: <Backpack className="w-8 h-8" />,
    videoPlaceholder: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'plan-ahead',
    title: 'Plan Ahead',
    description: 'Do some research on your destination and make any necessary reservations ahead of time. Planning helps avoid last-minute hassles.',
    icon: <Calendar className="w-8 h-8" />,
    videoPlaceholder: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 'stay-safe',
    title: 'Stay Safe',
    description: 'Be mindful of safety guidelines, especially when traveling to unfamiliar places. Always know the emergency numbers of your destination.',
    icon: <Shield className="w-8 h-8" />,
    videoPlaceholder: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'travel-insurance',
    title: 'Travel Insurance',
    description: 'Secure travel insurance to cover unexpected issues that may arise during your trip, such as cancellations or medical emergencies.',
    icon: <Shield className="w-8 h-8" />,
    videoPlaceholder: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'stay-healthy',
    title: 'Stay Healthy',
    description: 'Always pack a first aid kit, stay hydrated, and follow proper health precautions. It\'s important to stay in top condition while traveling.',
    icon: <Heart className="w-8 h-8" />,
    videoPlaceholder: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'pack-light',
    title: 'Pack Light',
    description: 'Keep your luggage light and easy to manage by packing only what you need. Less is more, and a lighter bag means more freedom.',
    icon: <Plane className="w-8 h-8" />,
    videoPlaceholder: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-orange-500 to-orange-600'
  }
];

const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

const TravelTipCard = ({ tip, index }) => {
  const cardRef = useRef(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.1 });
  const isReverse = index % 2 === 1;

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-32 group transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="w-full lg:w-1/2 relative">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br opacity-20 z-10" style={{ background: `linear-gradient(135deg, ${tip.color.replace('from-', '').replace('to-', ', ')})` }}></div>
          <img
            src={tip.videoPlaceholder}
            alt={tip.title}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20"></div>
          <div className={`absolute top-6 left-6 p-4 rounded-2xl bg-gradient-to-r ${tip.color} text-white shadow-lg z-30`}>
            {tip.icon}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-600 leading-tight">
            {tip.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-500 rounded-full"></div>
          <p className="text-xl text-gray-700 leading-relaxed">
            {tip.description}
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <div className={`p-3 rounded-full bg-gradient-to-r ${tip.color} text-white`}>
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-lg font-semibold text-gray-800">Essential Travel Tip</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingElement = ({ children, delay }) => {
  return (
    <div 
      className="absolute animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      {children}
    </div>
  );
};

function TravelTips() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const isHeroVisible = useIntersectionObserver(heroRef, { threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-white overflow-x-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement delay={0}>
            <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-rose-500 rounded-full opacity-20 top-20 left-20"></div>
          </FloatingElement>
          <FloatingElement delay={1}>
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 top-40 right-32"></div>
          </FloatingElement>
          <FloatingElement delay={2}>
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 bottom-32 left-40"></div>
          </FloatingElement>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
          <div 
            className={`transition-all duration-1000 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-600 drop-shadow-2xl mb-8 leading-tight">
              Ready to Be Guided to Your Next Adventure?
            </h1>
            <p className="text-xl md:text-2xl text-red-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover breathtaking locations and plan your next great journey with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group px-8 py-4 border-2 border-red-500 text-red-500 font-semibold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-red-500" />
        </div>
      </div>

      {/* Travel Tips Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
            Essential Travel Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master these fundamentals to transform your travel experience from good to extraordinary.
          </p>
        </div>

        <div className="space-y-20">
          {travelTips.map((tip, index) => (
            <TravelTipCard key={tip.id} tip={tip} index={index} />
          ))}
        </div>
      </div>

    
    </div>
  );
}

export default TravelTips;