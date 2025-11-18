import React, { useState, useRef } from 'react';
import { Star } from 'lucide-react';
import Swal from 'sweetalert2';
 
const ratingLabels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
const ratingEmojis = ['😞', '😐', '🙂', '😃', '🤩'];
 
const Review = () => {
  const [formData, setFormData] = useState({
    destination: '',
    rating: 0,
    message: '',
    images: [],
  });
 
  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleRatingClick = (ratingValue) => {
    setFormData((prev) => ({ ...prev, rating: ratingValue }));
  };
 
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length + formData.images.length > 10) {
    //   alert('You can upload a maximum of 10 images.');
    Swal.fire({
        icon: 'warning',
        title: 'Upload Limit Reached',
        text: 'You can upload a maximum of 10 images.',
        confirmButtonColor: '#0D9488'
    });
      return;
    }
 
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
 
    fileInputRef.current.value = '';
  };
 
  const handleImageRemove = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, images: updatedImages }));
  };
 
  const validateForm = () => {
    const newErrors = {};
    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination is required.';
    }
    if (formData.rating === 0) {
      newErrors.rating = 'Please provide a rating.';
    }
   
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
 
    console.log('Submitted review:', formData);
 
    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Your review has been submitted successfully.',
      confirmButtonColor: '#0D9488',
      timer: 3000,
      showConfirmButton: false,
    });
 
    setFormData({
      destination: '',
      rating: 0,
      message: '',
      images: [],
    });
    setHoverRating(0);
    setErrors({});
    fileInputRef.current.value = '';
  };
 
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-[#0D9488] text-center">
        Leave a Review for Admire Holiday
      </h2>
 
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Destination */}
        <div>
          <label className="block font-medium text-blue-800">Destination *</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full border border-blue-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#0D9488]"
            placeholder="e.g. Bali, Ladakh, Paris"
          />
          {errors.destination && (
            <p className="text-red-600 text-sm">{errors.destination}</p>
          )}
        </div>
 
        {/* Rating */}
        <div>
          <label className="block font-medium mb-1 text-blue-800">Rating *</label>
          <div className="flex justify-between items-center space-x-2 relative group">
            {[1, 2, 3, 4, 5].map((star, i) => (
              <div className="flex flex-col items-center" key={i}>
                <div className="relative group">
                  {hoverRating === star && (
                    <span className="absolute -top-8 text-xl animate-bounce">
                      {ratingEmojis[star - 1]}
                    </span>
                  )}
                  {/* <Star
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`h-6 w-6 cursor-pointer transition-colors duration-200 ${
                      (hoverRating || formData.rating) >= star
                        ? 'bg-yellow-400'
                        : 'text-pink-300'
                    }`}
                  /> */}
                  <Star
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    stroke="currentColor"
                    fill={(hoverRating || formData.rating) >= star ? 'currentColor' : 'none'}
                    className={`h-6 w-6 cursor-pointer transition-colors duration-200 ${
                        (hoverRating || formData.rating) >= star
                        ? 'text-yellow-400'
                        : 'text-pink-300'
                    }`}
                    />
                </div>
                <p className="text-xs text-blue-600 mt-1">
                  {ratingLabels[star - 1]}
                </p>
              </div>
            ))}
          </div>
          {errors.rating && (
            <p className="text-red-600 text-sm mt-1">{errors.rating}</p>
          )}
        </div>
 
        {/* Review Message */}
        <div>
          <label className="block font-medium text-blue-600">Your Review</label>
          <textarea
            name="message"
            className="w-full border border-blue-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#0D9488]"
            placeholder="Share your experience..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-600 text-sm">{errors.message}</p>
          )}
        </div>
 
        {/* Image Upload */}
        <div>
          <label className="block font-medium text-blue-600">Upload Images (max 10)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
            className="mt-1 text-green-800 font-semibold"
          />
          {formData.images.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                {formData.images.length} image(s) selected
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {formData.images.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`preview-${index}`}
                      className="w-20 h-20 object-cover border rounded"
                    />
                    <button
                      type="button"
                      className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1"
                      onClick={() => handleImageRemove(index)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
 
        {/* Submit */}
        <button
          type="submit"
          className="text-white bg-blue-700 px-6 py-3 rounded-md hover:bg-blue-800 transition-all duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};
 
export default Review;