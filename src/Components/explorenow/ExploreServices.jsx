import React, { useState } from 'react';
import { Plane, MapPin, Heart, Users, Compass, Star, Globe, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PlanMyTripForm from '../../forms/PlanMyTripForm';
 
const ExploreServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showPlanTripForm, setShowPlanTripForm] = useState(false);
  const navigate = useNavigate();
 
  const services = [
    {
      icon: <Plane className="w-8 h-8 text-white" />,
      title: 'International Tours',
      bg: '#2C8780',
      textColor: 'text-primaryHeading',
      desc: 'Explore breathtaking destinations across the globe with our expertly curated international tour packages.',
      features: ['Europe Tours', 'Asia Adventures', 'American Journeys'],
      emoji: '🌍',
      popular: true,
      path:'/international'
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: 'Domestic Packages',
      bg: '#2C8780',
      textColor: 'text-primaryHeading',
      desc: 'Discover the incredible beauty of India with our comprehensive domestic holiday packages.',
      features: ['Kerala Backwaters', 'Rajasthan Heritage', 'Himalayan Treks'],
      emoji: '🏔️',
      popular: false,
      path:'/domestic',
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Honeymoon Specials',
      bg: '#2C8780',
      textColor: 'text-primaryHeading',
      desc: 'Create unforgettable romantic memories together with our specially designed honeymoon packages.',
      features: ['Romantic Dinners', 'Couple Spa', 'Private Transfers'],
      emoji: '💕',
      popular: true,
      path:'/honeymoon-special-package'
    },
    // {
    //   icon: <Users className="w-8 h-8 text-white" />,
    //   title: 'Group Tours',
    //   bg: '#2C8780',
    //   textColor: 'text-primaryHeading',
    //   desc: 'Join like-minded travelers and make new friends with our exciting group tour packages.',
    //   features: ['Family Groups', 'Corporate Tours', 'Student Trips'],
    //   emoji: '👨‍👩‍👧‍👦',
    //   popular: false
    // },
    // {
    //   icon: <Compass className="w-8 h-8 text-white" />,
    //   title: 'Adventure Tours',
    //   bg: '#2C8780',
    //   textColor: 'text-primaryHeading',
    //   desc: 'Experience thrilling adventures and outdoor activities with our action-packed tour packages.',
    //   features: ['Trekking Expeditions', 'River Rafting', 'Paragliding'],
    //   emoji: '🏕️',
    //   popular: false
    // },
    // {
    //   icon: <Globe className="w-8 h-8 text-white" />,
    //   title: 'Beach Holidays',
    //   bg: '#2C8780',
    //   textColor: 'text-primaryHeading',
    //   desc: 'Relax and unwind at the world\'s most beautiful beaches with our tropical getaway packages.',
    //   features: ['Maldives Resorts', 'Bali Escapes', 'Thailand Islands'],
    //   emoji: '🏖️',
    //   popular: false
    // }
  ];
 
  const handleGetQuoteClick = () => {
    navigate('/contact');
  };
 
  return (
    <section className="py-20 bg-[#F0F9FF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center justify-center p-3 bg-[#2C8780] rounded-full mb-6 shadow-lg"
          >
            <Compass className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#2C8780' }}>
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to craft the perfect journey — from logistics to once-in-a-lifetime adventures.
          </p>
        </div>
 
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
 
           
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -10 }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-[#BE3132] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  <Star className="h-3 w-3 inline mr-1" />
                  Popular
                </div>
              )}
 
              <div className="text-5xl mb-4 text-center">
                {service.emoji}
              </div>
 
              <div
                className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl"
                style={{ backgroundColor: service.bg }}
              >
                {service.icon}
              </div>
 
              <h3 className={`text-2xl font-bold mb-4 ${service.textColor}`}>
                {service.title}
              </h3>
 
              <p className="text-gray-600 mb-6">{service.desc}</p>
 
              <ul className="space-y-2 mb-6">
                {service.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-center">
                    <span
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: service.bg }}
                    ></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
              onClick={() => service.path && navigate(service.path)}
              
                className="w-full py-3 px-4 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#DC2626' }}
              >
                Explore Now
              </button>
            </motion.div>
          ))}
        </div>
 
        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center bg-[#0D9488] rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="text-6xl mb-6">✈️</div>
            <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[#A7F3D0]">
              Let our travel experts create the perfect itinerary for your dream vacation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowPlanTripForm(true)}  // Open modal on click
                className="px-6 py-3 bg-white text-[#0D9488] rounded-full font-semibold hover:bg-[#A7F3D0] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Plan My Trip
              </button>              
            </div>
          </div>
        </motion.div>
      </div>
 
      {/* Popup Form Modal */}
      {showPlanTripForm && <PlanMyTripForm onClose={() => setShowPlanTripForm(false)} />}
    </section>
  );
};
 
export default ExploreServices;