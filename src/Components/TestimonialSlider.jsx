// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Star, MapPin, Calendar, X, Upload } from 'lucide-react';

// const TestimonialSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [newTestimonial, setNewTestimonial] = useState({
//     name: '',
//     location: '',
//     rating: 5,
//     destination: '',
//     date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
//     comment: '',
//     avatar: '',
//     tripImage: ''
//   });
//   const [previewImage, setPreviewImage] = useState(null);
//   const [previewAvatar, setPreviewAvatar] = useState(null);
//   const fileInputRef = useRef(null);
//   const avatarInputRef = useRef(null);
//   const sliderRef = useRef(null);

//   const [testimonials, setTestimonials] = useState([
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       location: "New York, USA",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b25482b6?w=150&h=150&fit=crop&crop=face",
//       rating: 5,
//       destination: "Bali, Indonesia",
//       date: "March 2024",
//       comment: "This was absolutely the trip of a lifetime! The accommodations were luxurious, the local guides were incredibly knowledgeable, and every detail was perfectly planned. The rice terraces at sunrise were breathtaking, and the cultural experiences were authentic and memorable.",
//       tripImage: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       location: "Toronto, Canada",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//       rating: 5,
//       destination: "Santorini, Greece",
//       date: "June 2024",
//       comment: "From the moment we landed to our departure, everything was seamless. The sunset views from our villa were incredible, and the local food tours introduced us to flavors we'll never forget. The travel team went above and beyond to make our honeymoon perfect.",
//       tripImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop"
//     },
//     {
//       id: 3,
//       name: "Emma Rodriguez",
//       location: "Madrid, Spain",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
//       rating: 5,
//       destination: "Kyoto, Japan",
//       date: "April 2024",
//       comment: "The cherry blossom season in Kyoto was magical, and this travel company made it even more special. The traditional ryokan stay, the private tea ceremony, and the guided temple visits created memories that will last forever. Exceptional service throughout!",
//       tripImage: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=300&fit=crop"
//     },
//     {
//       id: 4,
//       name: "David Thompson",
//       location: "London, UK",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//       rating: 5,
//       destination: "Patagonia, Chile",
//       date: "February 2024",
//       comment: "An adventure of a lifetime! The hiking trails were spectacular, and having expert guides made all the difference. The photography opportunities were endless, and the small group size made it feel personalized. Highly recommend for nature lovers!",
//       tripImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
//     },
//     {
//       id: 5,
//       name: "Lisa Wang",
//       location: "Sydney, Australia",
//       avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
//       rating: 5,
//       destination: "Morocco",
//       date: "January 2024",
//       comment: "The markets of Marrakech, the Sahara desert experience, and the coastal beauty of Essaouira - this trip had everything! The cultural immersion was incredible, and our guide's stories brought every location to life. Absolutely unforgettable!",
//       tripImage: "https://images.unsplash.com/photo-1489749798305-4fea3ae436d3?w=400&h=300&fit=crop"
//     }
//   ]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, currentSlide, testimonials.length]);

//   const renderStars = (rating, interactive = false, onRatingChange = null) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <button
//         key={i}
//         type={interactive ? "button" : "div"}
//         onClick={interactive ? () => onRatingChange(i + 1) : null}
//         className={interactive ? "focus:outline-none" : ""}
//       >
//         <Star
//           className={`w-6 h-6 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} ${interactive ? 'hover:scale-110 transition-transform' : ''}`}
//         />
//       </button>
//     ));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewTestimonial(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleImageUpload = (e, type) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       if (type === 'tripImage') {
//         setPreviewImage(reader.result);
//         setNewTestimonial(prev => ({
//           ...prev,
//           tripImage: reader.result
//         }));
//       } else {
//         setPreviewAvatar(reader.result);
//         setNewTestimonial(prev => ({
//           ...prev,
//           avatar: reader.result
//         }));
//       }
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newId = Math.max(...testimonials.map(t => t.id)) + 1;
//     const submittedTestimonial = {
//       ...newTestimonial,
//       id: newId,
//       date: newTestimonial.date || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
//     };
    
//     setTestimonials([...testimonials, submittedTestimonial]);
//     setNewTestimonial({
//       name: '',
//       location: '',
//       rating: 5,
//       destination: '',
//       date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
//       comment: '',
//       avatar: '',
//       tripImage: ''
//     });
//     setPreviewImage(null);
//     setPreviewAvatar(null);
//     setShowForm(false);
//     setCurrentSlide(testimonials.length); // Show the newly added testimonial
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Discover the experiences that make our journeys unforgettable through the words of our adventurous travelers
//         </p>
//         <button
//           onClick={() => setShowForm(true)}
//           className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
//         >
//           Share Your Experience
//         </button>
//       </div>

//       {/* Testimonial Submission Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center p-6 border-b">
//               <h3 className="text-2xl font-bold text-gray-800">Share Your Travel Experience</h3>
//               <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
            
//             <form onSubmit={handleSubmit} className="p-6 space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={newTestimonial.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Your Location</label>
//                   <input
//                     type="text"
//                     name="location"
//                     value={newTestimonial.location}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Your Rating</label>
//                 <div className="flex items-center gap-1">
//                   {renderStars(newTestimonial.rating, true, (rating) => 
//                     setNewTestimonial(prev => ({ ...prev, rating }))
//                   )}
//                   <span className="ml-2 text-sm text-gray-600">{newTestimonial.rating}/5</span>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
//                   <input
//                     type="text"
//                     name="destination"
//                     value={newTestimonial.destination}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
//                   <input
//                     type="text"
//                     name="date"
//                     value={newTestimonial.date}
//                     onChange={handleInputChange}
//                     placeholder="Month Year"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Your Experience</label>
//                 <textarea
//                   name="comment"
//                   value={newTestimonial.comment}
//                   onChange={handleInputChange}
//                   required
//                   rows={4}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Tell us about your trip..."
//                 />
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Your Photo</label>
//                   <div className="flex items-center gap-4">
//                     {previewAvatar ? (
//                       <div className="relative">
//                         <img src={previewAvatar} alt="Preview" className="w-16 h-16 rounded-full object-cover" />
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setPreviewAvatar(null);
//                             setNewTestimonial(prev => ({ ...prev, avatar: '' }));
//                           }}
//                           className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
//                         >
//                           <X className="w-3 h-3" />
//                         </button>
//                       </div>
//                     ) : (
//                       <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
//                         <Upload className="w-5 h-5 text-gray-400" />
//                       </div>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => avatarInputRef.current.click()}
//                       className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
//                     >
//                       Upload Photo
//                     </button>
//                     <input
//                       type="file"
//                       ref={avatarInputRef}
//                       onChange={(e) => handleImageUpload(e, 'avatar')}
//                       accept="image/*"
//                       className="hidden"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Trip Photo</label>
//                   <div className="flex items-center gap-4">
//                     {previewImage ? (
//                       <div className="relative">
//                         <img src={previewImage} alt="Preview" className="w-24 h-16 rounded-lg object-cover" />
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setPreviewImage(null);
//                             setNewTestimonial(prev => ({ ...prev, tripImage: '' }));
//                           }}
//                           className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
//                         >
//                           <X className="w-3 h-3" />
//                         </button>
//                       </div>
//                     ) : (
//                       <div className="w-24 h-16 rounded-lg bg-gray-200 flex items-center justify-center">
//                         <Upload className="w-5 h-5 text-gray-400" />
//                       </div>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => fileInputRef.current.click()}
//                       className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
//                     >
//                       Upload Photo
//                     </button>
//                     <input
//                       type="file"
//                       ref={fileInputRef}
//                       onChange={(e) => handleImageUpload(e, 'tripImage')}
//                       accept="image/*"
//                       className="hidden"
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               <div className="flex justify-end gap-4 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Submit Review
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div 
//         className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
//         ref={sliderRef}
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         {testimonials.length > 0 ? (
//           <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
//             {/* Image Section */}
//             <div className="relative overflow-hidden">
//               <img
//                 src={testimonials[currentSlide].tripImage || "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"}
//                 alt={testimonials[currentSlide].destination}
//                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//               <div className="absolute bottom-4 left-4 text-white">
//                 <div className="flex items-center gap-2 mb-2">
//                   <MapPin className="w-4 h-4" />
//                   <span className="text-sm font-medium">{testimonials[currentSlide].destination}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Calendar className="w-4 h-4" />
//                   <span className="text-sm">{testimonials[currentSlide].date}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Content Section */}
//             <div className="p-8 md:p-12 flex flex-col justify-center">
//               <div className="flex items-center gap-4 mb-6">
//                 <img
//                   src={testimonials[currentSlide].avatar || "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face"}
//                   alt={testimonials[currentSlide].name}
//                   className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {testimonials[currentSlide].name}
//                   </h3>
//                   <p className="text-gray-600 text-sm flex items-center gap-1">
//                     <MapPin className="w-3 h-3" />
//                     {testimonials[currentSlide].location}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-1 mb-6">
//                 {renderStars(testimonials[currentSlide].rating)}
//                 <span className="ml-2 text-sm text-gray-600">
//                   {testimonials[currentSlide].rating}/5
//                 </span>
//               </div>

//               <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
//                 "{testimonials[currentSlide].comment}"
//               </blockquote>

//               {/* Navigation Dots */}
//               <div className="flex justify-center gap-2 mb-6">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentSlide
//                         ? 'bg-blue-500 w-8'
//                         : 'bg-gray-300 hover:bg-gray-400'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="min-h-[500px] flex items-center justify-center text-gray-500">
//             <p>No testimonials yet. Be the first to share your experience!</p>
//           </div>
//         )}

//         {/* Navigation Arrows */}
//         {testimonials.length > 1 && (
//           <>
//             <button
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group"
//             >
//               <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
//             </button>

//             <button
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group"
//             >
//               <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
//             </button>
//           </>
//         )}
//       </div>

//       {/* Progress Bar */}
//       {testimonials.length > 0 && (
//         <div className="w-full bg-gray-200 rounded-full h-1.5 mt-6">
//           <div 
//             className="bg-blue-500 h-1.5 rounded-full transition-all duration-1000 ease-linear"
//             style={{ 
//               width: isAutoPlaying ? `${((currentSlide + 1) / testimonials.length) * 100}%` : `${((currentSlide + 1) / testimonials.length) * 100}%`,
//               transition: isAutoPlaying ? 'width 3s linear' : 'width 0.3s ease'
//             }}
//           />
//         </div>
//       )}

//       {/* Additional Stats */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//   {/* Travelers Count */}
//   <div className="text-center p-6 bg-white rounded-xl shadow-lg">
//     <div className="text-3xl font-bold text-blue-600 mb-2">{testimonials.length}+</div>
//     <div className="text-gray-600">Happy Travelers</div>
//   </div>

//   {/* Average Rating */}
//   <div className="text-center p-6 bg-white rounded-xl shadow-lg">
//     <div className="text-3xl font-bold text-blue-600 mb-2">
//       {(
//         testimonials.length > 0
//           ? testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length
//           : 0
//       ).toFixed(1)}/5
//     </div>
//     <div className="text-gray-600">Average Rating</div>
//   </div>

//   {/* Destinations */}
//   <div className="text-center p-6 bg-white rounded-xl shadow-lg">
//     <div className="text-3xl font-bold text-blue-600 mb-2">
//       {new Set(testimonials.map(t => t.destination)).size}+
//     </div>
//     <div className="text-gray-600">Destinations</div>
//   </div>
// </div>

//     </div>
//   );
// };

// export default TestimonialSlider;
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
        <p className="text-orange-500 font-semibold text-sm">
          Customers Testimonials
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
          What Our Adventurers Say
        </h2>
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
