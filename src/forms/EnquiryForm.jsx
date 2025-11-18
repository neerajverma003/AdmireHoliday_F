import React, { useState, useEffect, useRef } from "react";
import { submitJourneyEnquiry } from "../api/api.js";
import axios from "axios";
import Swal from "sweetalert2";

const TravelEnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(true);
    }, 10000);

    
    if (modalRef.current) {
      modalRef.current.querySelector("input").focus();
    }

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user starts typing
    if (submitError) setSubmitError(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!/^[0-9]{10}$/.test(formData.phone))
      return "Please enter a valid 10-digit phone number";
    return null;
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: "Enquiry Submitted!",
      text: `We'll contact you soon about your trip to ${formData.destination || "your dream destination"}.`,
      icon: "success",
      confirmButtonColor: "#f59e0b",
      confirmButtonText: "Great!",
      timer: 3000,
      timerProgressBar: true,
    }).then(() => {
      closeModal();
    });
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      title: "Submission Failed",
      text: message,
      icon: "error",
      confirmButtonColor: "#f59e0b",
      confirmButtonText: "Try Again",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setSubmitError(validationError);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const data = await submitJourneyEnquiry(formData);
      console.log(data);

      setSubmitSuccess(true);
      showSuccessAlert();
    } catch (error) {
      console.error("Error submitting enquiry:", error);

      let errorMessage = "An unexpected error occurred. Please try again.";
      
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.request) {
        errorMessage = "Network error. Please check your connection and try again.";
      }

      setSubmitError(errorMessage);
      showErrorAlert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
      if (onClose) onClose();
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 mt-14"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={modalRef}
        className={`relative w-full max-w-lg bg-white rounded-xl shadow-xl transition-all duration-300 ${
          isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl transition-colors duration-200"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-amber-700">
            Plan Your Journey
          </h2>
          <p className="text-sm text-center mb-6 text-gray-600">
            Get in touch with us to explore the best travel experiences!
          </p>

          {submitError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {submitError}
            </div>
          )}

          {submitSuccess ? (
            <div className="text-center py-8">
              <svg
                className="w-16 h-16 text-green-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Thank you for your enquiry!
              </h3>
              <p className="text-gray-600">
                We'll contact you soon about your trip to{" "}
                {formData.destination || "your dream destination"}.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              noValidate
            >
              <div>
                <input
                  placeholder="Your Name*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                />
              </div>
              <div>
                <input
                  placeholder="Your Email*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                />
              </div>
              <div>
                <input
                  placeholder="Phone Number*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-required="true"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us your dream destination..."
                  rows="4"
                  name="destination"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  value={formData.destination}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg py-3 font-semibold hover:from-amber-700 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelEnquiryForm;