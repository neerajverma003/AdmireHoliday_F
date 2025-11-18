import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaPhone, FaEnvelope, FaWifi, FaSwimmingPool, FaParking, FaUtensils, FaSpa, FaMountain, FaUmbrellaBeach, FaSnowflake, FaTree, FaCity, FaConciergeBell, FaDumbbell, FaTv, FaCoffee, FaCocktail, FaHotTub, FaChild } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { GiGolfFlag, GiTennisCourt, GiWaterBottle } from 'react-icons/gi';
import { MdOutlineRoomService, MdLocalLaundryService, MdAcUnit, MdBeachAccess, MdFamilyRestroom } from 'react-icons/md';

const ResortDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resort, setResort] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  // Enhanced mock data with more details and photos
  const mockResorts = [
    {
      id: 1,
      name: "Grand Tekkady Resort & Spa",
      image: "https://admiredashboard.theholistay.in/resort_images/1745321532_68077e3c35d02OoezCjuR.jpg",
      discount: "5%",
      buttonColor: "rgb(230, 146, 51)",
      description: "Nestled in the heart of the Periyar Wildlife Sanctuary, Grand Tekkady offers a luxurious escape into nature. Our eco-friendly resort combines modern comforts with traditional Kerala architecture. Each villa is designed to provide privacy while offering breathtaking views of the surrounding forests and mountains. Enjoy our Ayurvedic spa treatments, guided nature walks, and authentic Kerala cuisine prepared by our expert chefs.",
      location: "Tekkady, Kerala, India",
      amenities: [
        { name: "Swimming Pool", icon: <FaSwimmingPool /> },
        { name: "Ayurvedic Spa", icon: <FaSpa /> },
        { name: "Free WiFi", icon: <FaWifi /> },
        { name: "Parking", icon: <FaParking /> },
        { name: "Restaurant", icon: <FaUtensils /> },
        { name: "24/7 Room Service", icon: <MdOutlineRoomService /> },
        { name: "Laundry Service", icon: <MdLocalLaundryService /> },
        { name: "AC Rooms", icon: <MdAcUnit /> },
        { name: "Mountain View", icon: <FaMountain /> },
        { name: "Concierge", icon: <FaConciergeBell /> },
        { name: "Fitness Center", icon: <FaDumbbell /> },
        { name: "TV", icon: <FaTv /> },
        { name: "Tea/Coffee Maker", icon: <FaCoffee /> },
        { name: "Bar", icon: <FaCocktail /> },
        { name: "Hot Tub", icon: <FaHotTub /> },
        { name: "Kids Play Area", icon: <FaChild /> }
      ],
      price: "₹On request",
      rating: 4.8,
      reviews: 128,
      roomTypes: [
        {
          name: "Deluxe Room",
          description: "Spacious room with king bed, forest view, and modern amenities",
          price: "₹On request",
          capacity: "2 Adults",
          size: "350 sq ft",
          features: ["Air Conditioning", "Free WiFi", "Minibar", "Safe Deposit Box"]
        },
        {
          name: "Premium Suite",
          description: "Luxurious suite with separate living area and private balcony",
          price: "₹On request",
          capacity: "2 Adults + 1 Child",
          size: "550 sq ft",
          features: ["Air Conditioning", "Free WiFi", "Minibar", "Safe Deposit Box", "Bathtub"]
        },
        {
          name: "Family Villa",
          description: "Two-bedroom villa with private garden and pool access",
          price: "₹On request",
          capacity: "4 Adults",
          size: "900 sq ft",
          features: ["Air Conditioning", "Free WiFi", "Kitchenette", "Private Garden", "Living Area"]
        }
      ],
      policies: [
        "Check-in: 2:00 PM | Check-out: 11:00 AM",
        "Cancellation policy: Free cancellation up to 7 days before arrival",
        "Children under 12 stay free when using existing bedding",
        "Pets not allowed",
        "Credit cards accepted"
      ],
      contact: {
        phone: "+91 9876543210",
        email: "reservations@grandtekkady.com",
        address: "Periyar Wildlife Sanctuary Road, Tekkady, Kerala 685536"
      },
      gallery: [
        "https://admiredashboard.theholistay.in/resort_images/1745321532_68077e3c35d02OoezCjuR.jpg",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1582719471386-bfc04c897abd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      nearbyAttractions: [
        { name: "Periyar Wildlife Sanctuary", distance: "0.5 km" },
        { name: "Periyar Lake", distance: "1.2 km" },
        { name: "Kadathanadan Kalari Centre", distance: "3 km" },
        { name: "Mullaperiyar Dam", distance: "15 km" },
        { name: "Chellarkovil Viewpoint", distance: "25 km" }
      ]
    },
    {
      id: 2,
      name: "Taj Palace Heritage Resort",
      image: "https://admiredashboard.theholistay.in/resort_images/1745321495_68077e177c6baMmbuz1mp.webp",
      discount: "5%",
      buttonColor: "rgb(230, 146, 51)",
      description: "Experience royal treatment at Taj Palace, where heritage meets modern luxury. Our palace-turned-resort offers meticulously restored rooms that preserve their original grandeur while providing contemporary comforts. Enjoy our award-winning restaurants, expansive gardens, and personalized butler service that makes every guest feel like royalty.",
      location: "New Delhi, India",
      amenities: [
        { name: "Swimming Pool", icon: <FaSwimmingPool /> },
        { name: "24/7 Room Service", icon: <MdOutlineRoomService /> },
        { name: "Fitness Center", icon: <FaDumbbell /> },
        { name: "Business Center", icon: <FaConciergeBell /> },
        { name: "Concierge", icon: <FaConciergeBell /> },
        { name: "Spa", icon: <FaSpa /> },
        { name: "Free WiFi", icon: <FaWifi /> },
        { name: "Parking", icon: <FaParking /> },
        { name: "Restaurant", icon: <FaUtensils /> },
        { name: "Bar", icon: <FaCocktail /> },
        { name: "Laundry Service", icon: <MdLocalLaundryService /> },
        { name: "AC Rooms", icon: <MdAcUnit /> },
        { name: "TV", icon: <FaTv /> },
        { name: "Tea/Coffee Maker", icon: <FaCoffee /> },
        { name: "Butler Service", icon: <FaConciergeBell /> },
        { name: "Valet Parking", icon: <FaParking /> }
      ],
      price: "₹12,000 per night",
      rating: 4.9,
      reviews: 245,
      roomTypes: [
        {
          name: "Heritage Room",
          description: "Elegant room with period furniture and modern amenities",
          price: "₹On request",
          capacity: "2 Adults",
          size: "400 sq ft",
          features: ["Air Conditioning", "Free WiFi", "Minibar", "Safe Deposit Box"]
        },
        {
          name: "Royal Suite",
          description: "Spacious suite with separate living area and palace views",
          price: "₹On request",
          capacity: "2 Adults + 1 Child",
          size: "650 sq ft",
          features: ["Air Conditioning", "Free WiFi", "Minibar", "Safe Deposit Box", "Butler Service"]
        },
        {
          name: "Grand Presidential Suite",
          description: "Luxurious suite with antique furnishings and private terrace",
          price: "₹On request",
          capacity: "2 Adults",
          size: "1200 sq ft",
          features: ["Air Conditioning", "Free WiFi", "Kitchenette", "Private Terrace", "Living Area", "Dining Area"]
        }
      ],
      policies: [
        "Check-in: 3:00 PM | Check-out: 12:00 PM",
        "Cancellation policy: Free cancellation up to 14 days before arrival",
        "Children under 10 stay free when using existing bedding",
        "Pets not allowed",
        "All major credit cards accepted"
      ],
      contact: {
        phone: "+91 1123456789",
        email: "reservations@tajpalace.com",
        address: "Sardar Patel Marg, Diplomatic Enclave, New Delhi 110021"
      },
      gallery: [
        "https://admiredashboard.theholistay.in/resort_images/1745321495_68077e177c6baMmbuz1mp.webp",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1582719471386-bfc04c897abd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      nearbyAttractions: [
        { name: "India Gate", distance: "3 km" },
        { name: "Rashtrapati Bhavan", distance: "2 km" },
        { name: "Lotus Temple", distance: "8 km" },
        { name: "Qutub Minar", distance: "12 km" },
        { name: "Connaught Place", distance: "5 km" }
      ]
    },
    // Additional resorts would follow the same enhanced structure
  ];

  useEffect(() => {
    const fetchResortDetails = () => {
      try {
        setTimeout(() => {
          const foundResort = mockResorts.find(r => r.id === parseInt(id));
          if (foundResort) {
            setResort(foundResort);
          } else {
            setError("Resort not found");
          }
          setLoading(false);
        }, 800);
      } catch (err) {
        setError("Failed to fetch resort details");
        setLoading(false);
      }
    };

    fetchResortDetails();
  }, [id]);

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  const handleBookNow = () => {
    alert(`Booking confirmed at ${resort.name} from ${checkInDate} to ${checkOutDate} for ${guests} guests and ${rooms} room(s)`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500 mb-4"></div>
          <p className="text-gray-600">Loading resort details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-md w-full" role="alert">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <strong className="font-bold">Error! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 flex items-center"
        >
          <IoIosArrowBack className="mr-2" />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{resort.name}</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg inline-flex items-center transition duration-300"
          >
            <IoIosArrowBack className="mr-2" />
            Back to Resorts
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="px-4 sm:px-0 mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src={resort.gallery[activeImage]} 
              alt={resort.name}
              className="w-full h-64 md:h-96 object-cover transition-opacity duration-500"
            />
            
            {/* Image selector dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {resort.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-3 h-3 rounded-full ${activeImage === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Discount badge */}
            {resort.discount && (
              <div className="absolute top-4 right-4 bg-green-600 text-white font-bold py-1 px-3 rounded-lg shadow-md">
                {resort.discount} OFF
              </div>
            )}
          </div>
          
          {/* Thumbnail gallery */}
          <div className="mt-4 grid grid-cols-4 md:grid-cols-6 gap-2">
            {resort.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`rounded-lg overflow-hidden border-2 ${activeImage === index ? 'border-orange-500' : 'border-transparent'}`}
              >
                <img 
                  src={image} 
                  alt={`${resort.name} thumbnail ${index + 1}`}
                  className="w-full h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Resort Info Section */}
        <div className="px-4 sm:px-0 mb-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-xl">
            {/* Header with rating */}
            <div className="px-6 py-5 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Resort Overview</h2>
                <div className="flex items-center mt-1">
                  <div className="flex mr-2">
                    {renderRatingStars(resort.rating)}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {resort.rating} ({resort.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="text-2xl font-bold text-gray-900">{resort.price}</span>
                <span className="text-sm text-gray-500 ml-1">+ taxes</span>
              </div>
            </div>
            
            {/* Description and Highlights */}
            <div className="px-6 py-5">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Description */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{resort.description}</p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2">Resort Highlights</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Free cancellation available</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Best price guarantee</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">24/7 customer support</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Instant confirmation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Location Map (placeholder) */}
                <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Interactive Map of {resort.location}</span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600 text-sm mb-3">{resort.contact.address}</p>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition">
                      View on map & directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Amenities */}
            <div className="px-6 py-5 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {resort.amenities.slice(0, showAllAmenities ? resort.amenities.length : 8).map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-blue-600 mr-2">{amenity.icon}</span>
                    <span className="text-gray-700 text-sm">{amenity.name}</span>
                  </div>
                ))}
              </div>
              {resort.amenities.length > 8 && (
                <button 
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition"
                >
                  {showAllAmenities ? 'Show less' : `Show all ${resort.amenities.length} amenities`}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Room Types */}
        <div className="px-4 sm:px-0 mb-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-xl">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Room Types</h2>
              <p className="text-gray-600 text-sm mt-1">Choose the perfect accommodation for your stay</p>
            </div>
            
            <div className="divide-y divide-gray-200">
              {resort.roomTypes.map((room, index) => (
                <div key={index} className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Room image */}
                    <div className="lg:col-span-1">
                      <div className="rounded-lg overflow-hidden h-48 bg-gray-100">
                        <img 
                          src={resort.gallery[index % resort.gallery.length]} 
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Room details */}
                    <div className="lg:col-span-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{room.name}</h3>
                          <p className="text-gray-600 text-sm mt-1">{room.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">{room.price}</p>
                          <p className="text-gray-500 text-sm">per night</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Room Size</p>
                          <p className="text-gray-700">{room.size}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Capacity</p>
                          <p className="text-gray-700">{room.capacity}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Room Features</h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {room.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <svg className="w-3 h-3 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <button 
                          className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition duration-300"
                          onClick={() => {
                            setActiveImage(0);
                            document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="px-4 sm:px-0 mb-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-xl">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Photo Gallery</h2>
              <p className="text-gray-600 text-sm mt-1">Explore our resort through these beautiful images</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {resort.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden group cursor-pointer">
                    <img 
                      src={image} 
                      alt={`${resort.name} ${index + 1}`}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        {resort.nearbyAttractions && resort.nearbyAttractions.length > 0 && (
          <div className="px-4 sm:px-0 mb-12">
            <div className="bg-white shadow overflow-hidden sm:rounded-xl">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Nearby Attractions</h2>
                <p className="text-gray-600 text-sm mt-1">Explore these popular places near our resort</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resort.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-gray-100 rounded-lg p-3 mr-4">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{attraction.name}</h3>
                        <p className="text-gray-500 text-sm mt-1">{attraction.distance} from resort</p>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition">
                          More details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Policies */}
        <div className="px-4 sm:px-0 mb-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-xl">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Policies</h2>
              <p className="text-gray-600 text-sm mt-1">Important information about your stay</p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3">
                {resort.policies.map((policy, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{policy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div id="booking-section" className="px-4 sm:px-0 mb-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-xl">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Book Your Stay</h2>
              <p className="text-gray-600 text-sm mt-1">Fill in your details to reserve your perfect getaway</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Booking Form */}
                <div>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          id="check-in"
                          value={checkInDate}
                          onChange={(e) => setCheckInDate(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">
                          Check-out Date
                        </label>
                        <input
                          type="date"
                          id="check-out"
                          value={checkOutDate}
                          onChange={(e) => setCheckOutDate(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min={checkInDate || new Date().toISOString().split('T')[0]}
                          disabled={!checkInDate}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                          Guests
                        </label>
                        <select
                          id="guests"
                          value={guests}
                          onChange={(e) => setGuests(parseInt(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          {[1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="rooms" className="block text-sm font-medium text-gray-700 mb-1">
                          Rooms
                        </label>
                        <select
                          id="rooms"
                          value={rooms}
                          onChange={(e) => setRooms(parseInt(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          {[1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'room' : 'rooms'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="special-requests" className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="special-requests"
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Any special requirements or preferences?"
                      />
                    </div>
                  </form>
                </div>
                
                {/* Booking Summary */}
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Selected Room</span>
                        <span className="font-medium text-gray-900">Deluxe Room</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium text-gray-900">
  {checkInDate && checkOutDate 
    ? `${Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24))} nights`
    : 'Select dates'}
</span>

                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Guests</span>
                        <span className="font-medium text-gray-900">{guests} {guests === 1 ? 'guest' : 'guests'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rooms</span>
                        <span className="font-medium text-gray-900">{rooms} {rooms === 1 ? 'room' : 'rooms'}</span>
                      </div>
                      
                      <div className="border-t border-gray-200 my-4"></div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Room Price</span>
                        <span className="font-medium text-gray-900">₹8,500 x {checkInDate && checkOutDate ? 
                          Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)) : 1} nights</span>
                      </div>
                      
                      {resort.discount && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount ({resort.discount})</span>
                          <span>- ₹{8500 * (parseInt(resort.discount) / 100)}</span>
                        </div>
                      )}
                      
                      <div className="border-t border-gray-200 my-4"></div>
                      
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-gray-900">Total</span>
                        <span className="text-lg font-bold text-gray-900">
  ₹{checkInDate && checkOutDate ? (() => {
      const nights = Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));
      const pricePerNight = 8500;
      const fullPrice = pricePerNight * nights * rooms;
      const discount = parseInt(resort.discount) || 0;
      const discountedPrice = fullPrice - (fullPrice * discount / 100);
      return discountedPrice;
    })() : 8500 * rooms}
</span>

                      </div>
                      
                      <div className="pt-4">
                        <button 
                          onClick={handleBookNow}
                          disabled={!checkInDate || !checkOutDate}
                          className={`w-full py-3 px-4 rounded-lg font-medium text-white transition duration-300 ${(!checkInDate || !checkOutDate) ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'}`}
                        >
                          Confirm Booking
                        </button>
                      </div>
                      
                      <p className="text-xs text-gray-500 mt-3">
                        By completing this booking, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="px-4 sm:px-0 mb-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-xl">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
              <p className="text-gray-600 text-sm mt-1">Get in touch with us for any inquiries</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">{resort.contact.phone}</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition">
                      Call Now
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">{resort.contact.email}</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition">
                      Send Email
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">{resort.contact.address}</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About {resort.name}</h3>
              <p className="text-gray-300 text-sm">{resort.description.substring(0, 150)}...</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Rooms</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Amenities</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Gallery</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {resort.contact.address}
                </li>
                <li className="flex items-center">
                  <FaPhone className="w-4 h-4 mr-2" />
                  {resort.contact.phone}
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="w-4 h-4 mr-2" />
                  {resort.contact.email}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for special offers and updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800 text-sm"
                />
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r-lg text-sm transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} {resort.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResortDetails;