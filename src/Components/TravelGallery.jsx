import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Grid } from "lucide-react";

const TravelGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllPopup, setShowAllPopup] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [imageIndexes, setImageIndexes] = useState([]);

  // ✅ Fetch images from your API
  const response = async () => {
    try {
      const result = await fetch("http://localhost:5000/image");
      const res = await result.json();

      // Flatten all `image` arrays from backend data
      const allImages = res.flatMap((item) =>
        item.image.map((url) => ({ url }))
      );

      setImages(allImages);
      // console.log("✅ Flattened Images:", allImages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    response();
  }, []);

  // ✅ Auto-change images in the grid
  useEffect(() => {
    if (images.length > 0) {
      setImageIndexes(
        Array.from({ length: Math.min(8, images.length) }, () =>
          Math.floor(Math.random() * images.length)
        )
      );

      const interval = setInterval(() => {
        setImageIndexes((prevIndexes) =>
          prevIndexes.map((index) => (index + 1) % images.length)
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images]);

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => setSelectedImage(null);
  const closeAllPopup = () => setShowAllPopup(false);

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % images.length
        : (currentImageIndex - 1 + images.length) % images.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (showAllPopup) closeAllPopup();
        else if (selectedImage) closeImageModal();
      }
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    if (selectedImage || showAllPopup) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, currentImageIndex, showAllPopup]);

  if (images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading images...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Trusted Partner
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            in travel and tour experiences
          </p>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primaryHeading mb-4">
            Discover Unforgettable Moments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have created countless memories for our travelers. Explore the
            beautiful destinations and experiences that await you.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {imageIndexes.map((imgIndex, cardIndex) => (
            <div
              key={cardIndex}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openImageModal(images[imgIndex], imgIndex)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images[imgIndex]?.url}
                  alt="travel"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAllPopup(true)}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              <Grid className="w-5 h-5 mr-2" />
              See All Images
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <button
            onClick={closeImageModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={() => navigateImage("next")}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={selectedImage.url}
              alt="selected"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Show All Popup */}
      {showAllPopup && (
        <div
          onClick={closeAllPopup}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] flex items-start justify-center p-6 overflow-auto"
          style={{ paddingTop: "5rem" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl w-full bg-white rounded-3xl shadow-xl p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <button
              onClick={closeAllPopup}
              className="fixed top-6 right-6 text-gray-600 hover:text-gray-900 rounded-full p-2 bg-gray-200"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={closeAllPopup}
              className="fixed top-6 left-6 flex items-center space-x-2 text-gray-600 hover:text-gray-900 p-2"
            >
              <ChevronLeft className="w-6 h-6" />
              <span className="font-semibold">Back</span>
            </button>

            {images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openImageModal(image, index)}
              >
                <img
                  src={image.url}
                  alt="gallery"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelGallery;
