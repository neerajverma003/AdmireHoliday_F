import React, { useState } from 'react';
import { User, Phone, Mail } from 'lucide-react';
import Swal from 'sweetalert2';
import {subscribeForm} from '../api/api.js'

const SubscribeUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (phone) => {
    // Enhanced phone validation that accepts international formats
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Thank you for subscribing!',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'rounded-2xl',
        confirmButton: 'rounded-full px-6 py-2'
      }
    });
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      title: 'Validation Error',
      text: message,
      icon: 'error',
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'rounded-2xl',
        confirmButton: 'rounded-full px-6 py-2'
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let isValid = true;
    const newErrors = { ...errors };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (e.g., +1234567890)';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      setIsSubmitting(false);
      showErrorAlert('Please fix the errors in the form');
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would call your API here
      // const response = await axios.post('/api/subscribe', formData);
      const response =await subscribeForm(formData)
      console.log(response);
      
      showSuccessAlert();
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      showErrorAlert('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);



    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-16 sm:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          alt="Newsletter Background"
          fetchPriority="high"
          decoding="async"
          className="opacity-80 object-cover object-center w-full h-full"
          src="src/assets/images/subscribe-back-image.jpg"
          style={{ color: 'transparent' }}
        />
      </div>

      {/* Form Container */}
      <div className="z-10 w-full max-w-lg sm:max-w-3xl bg-white/30 backdrop-blur-xl p-6 sm:p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          Stay in the Loop
        </h2>
        <p className="text-center text-gray-700 mb-8 px-2 sm:px-0">
          Subscribe to receive updates, offers, and more!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Name Field */}
          <div>
            <div className={`flex items-center border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-full px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-400`}>
              <User className="text-gray-400 mr-3" size={24} />
              <input
                required
                placeholder="Your Name"
                className="w-full outline-none bg-transparent text-gray-700 text-sm sm:text-base"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1 ml-4">{errors.name}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <div className={`flex items-center border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-full px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-400`}>
              <Phone className="text-gray-400 mr-3" size={24} />
              <input
                required
                placeholder="Phone Number (e.g., +1234567890)"
                className="w-full outline-none bg-transparent text-gray-700 text-sm sm:text-base"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1 ml-4">{errors.phone}</p>}
          </div>

          {/* Email Field */}
          <div>
            <div className={`flex items-center border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-full px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-400`}>
              <Mail className="text-gray-400 mr-3" size={24} />
              <input
                required
                placeholder="Email Address"
                className="w-full outline-none bg-transparent text-gray-700 text-sm sm:text-base"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1 ml-4">{errors.email}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-full text-white font-semibold text-lg transition duration-300 shadow-md ${isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-yellow-500 hover:bg-red-600'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeUs;

// import React, { useState } from "react";
// import { User, Phone, Mail } from "lucide-react";
// import Swal from "sweetalert2";
// import axios from "axios";

// const subscribeForm = async (formData) => {
//   const response = await axios.post(
//     "http://localhost:5000/api/v1/subscribe",
//     formData
//   );
//   return response.data;
// };

// const SubscribeUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     phone: "",
//     email: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validatePhone = (phone) => {
//     // Enhanced phone validation that accepts international formats
//     const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,}$/;
//     return phoneRegex.test(phone);
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const showSuccessAlert = () => {
//     Swal.fire({
//       title: "Success!",
//       text: "Thank you for subscribing!",
//       icon: "success",
//       confirmButtonColor: "#3085d6",
//       confirmButtonText: "OK",
//       customClass: {
//         popup: "rounded-2xl",
//         confirmButton: "rounded-full px-6 py-2",
//       },
//     });
//   };

//   const showErrorAlert = (message) => {
//     Swal.fire({
//       title: "Validation Error",
//       text: message,
//       icon: "error",
//       confirmButtonColor: "#d33",
//       confirmButtonText: "OK",
//       customClass: {
//         popup: "rounded-2xl",
//         confirmButton: "rounded-full px-6 py-2",
//       },
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     let isValid = true;
//     const newErrors = {};

//     // 🧾 Name Validation
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       isValid = false;
//     }

//     // 📞 Phone Validation
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//       isValid = false;
//     } else if (!validatePhone(formData.phone)) {
//       newErrors.phone = "Please enter a valid phone number (e.g., +1234567890)";
//       isValid = false;
//     }

//     // 📧 Email Validation
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//       isValid = false;
//     }

//     setErrors(newErrors);

//     // ❌ Stop submission if validation fails
//     if (!isValid) {
//       setIsSubmitting(false);
//       showErrorAlert("Please fix the errors in the form");
//       return;
//     }

//     try {
//       // 🚀 Real API Call
//       const response = await subscribeForm(formData);
//       console.log("Subscribe API Response:", response);

//       if (response?.success) {
//         showSuccessAlert(response?.msg || "Successfully Subscribed!");
//         setFormData({ name: "", phone: "", email: "" });
//       } else {
//         showErrorAlert(
//           response?.msg || "Subscription failed. Please try again."
//         );
//       }
//     } catch (error) {
//       console.error("❌ Subscription Error:", error);
//       showErrorAlert("Failed to submit form. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-16 sm:py-20">
//       {/* Background Image */}
//       <div className="absolute inset-0 -z-10">
//         <img
//           alt="Newsletter Background"
//           // fetchPriority="high"
//           loading="lazy"
//           decoding="async"
//           className="opacity-80 object-cover object-center w-full h-full"
//           src="src/assets/images/subscribe-back-image.jpg"
//           style={{ color: "transparent" }}
//         />
//       </div>

//       {/* Form Container */}
//       <div className="z-10 w-full max-w-lg sm:max-w-3xl bg-white/30 backdrop-blur-xl p-6 sm:p-10 rounded-2xl shadow-2xl">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
//           Stay in the Loop
//         </h2>
//         <p className="text-center text-gray-700 mb-8 px-2 sm:px-0">
//           Subscribe to receive updates, offers, and more!
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
//           {/* Name Field */}
//           <div>
//             <div
//               className={`flex items-center border ${
//                 errors.name ? "border-red-500" : "border-gray-300"
//               } rounded-full px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-400`}
//             >
//               <User className="text-gray-400 mr-3" size={24} />
//               <input
//                 required
//                 placeholder="Your Name"
//                 className="w-full outline-none bg-transparent text-gray-700 text-sm sm:text-base"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//               />
//             </div>
//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1 ml-4">{errors.name}</p>
//             )}
//           </div>

//           {/* Phone Field */}
//           <div>
//             <div
//               className={`flex items-center border ${
//                 errors.phone ? "border-red-500" : "border-gray-300"
//               } rounded-full px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-400`}
//             >
//               <Phone className="text-gray-400 mr-3" size={24} />
//               <input
//                 required
//                 placeholder="Phone Number (e.g., +1234567890)"
//                 className="w-full outline-none bg-transparent text-gray-700 text-sm sm:text-base"
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//               />
//             </div>
//             {errors.phone && (
//               <p className="text-red-500 text-sm mt-1 ml-4">{errors.phone}</p>
//             )}
//           </div>

//           {/* Email Field */}
//           <div>
//             <div
//               className={`flex items-center border ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               } rounded-full px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-400`}
//             >
//               <Mail className="text-gray-400 mr-3" size={24} />
//               <input
//                 required
//                 placeholder="Email Address"
//                 className="w-full outline-none bg-transparent text-gray-700 text-sm sm:text-base"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//               />
//             </div>
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1 ml-4">{errors.email}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className={`w-full py-3 rounded-full text-white font-semibold text-lg transition duration-300 shadow-md ${
//               isSubmitting
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-yellow-500 hover:bg-red-600"
//             }`}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? (
//               <span className="flex items-center justify-center">
//                 <svg
//                   className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Processing...
//               </span>
//             ) : (
//               "Subscribe"
//             )}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default SubscribeUs;

// import React, { useState } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   Calendar,
//   MapPin,
//   Users,
//   IndianRupee,
//   MessageSquare,
// } from "lucide-react";

// const TravelEnquiryForm = () => {
//   const [form, setForm] = useState({
//     fullname: "",
//     destination: "",
//     email: "",
//     travelDate: "",
//     phone: "",
//     travellers: "",
//     budget: "",
//     message: "",
//     checked: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({ ...form, [name]: type === "checkbox" ? checked : value });
//   };

//   return (
//     <section className="w-full py-12 px-4 bg-[#f2f2f2] flex justify-center">
//       <div className="w-full max-w-7xl bg-white rounded-3xl p-10 shadow-sm flex flex-col lg:flex-row gap-10">

//         {/* LEFT SIDE FORM */}
//         <div className="w-full lg:w-2/3">

//           {/* Heading */}
//           <h2 className="text-3xl sm:text-4xl font-bold text-[#d47f1f]">
//             Travel Enquiry Form
//           </h2>
//           <p className="text-gray-700 text-lg mt-2">
//             Share Your details and get the best travel Package Instantly.
//           </p>

//           {/* FORM GRID */}
//           <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

//             {/* Input Box Component */}
//             {[
//               { icon: <User size={18} />, name: "fullname", placeholder: "Full Name" },
//               { icon: <MapPin size={18} />, name: "destination", placeholder: "Destination" },
//               { icon: <Mail size={18} />, name: "email", placeholder: "Email Address" },
//               { icon: <Calendar size={18} />, name: "travelDate", placeholder: "Travel Date",  },
//               { icon: <Phone size={18} />, name: "phone", placeholder: "Phone Number" },
//               { icon: <Users size={18} />, name: "travellers", placeholder: "Number Of Travelers", type: "number" },
//               { icon: <MapPin size={18} />, name: "destination2", placeholder: "Destination" },
//               { icon: <IndianRupee size={18} />, name: "budget", placeholder: "Budget Range" },
//             ].map((field, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#f8f8f8] rounded-xl h-14 flex items-center px-4 shadow-sm border border-gray-200"
//               >
//                 <span className="text-gray-500 mr-3">{field.icon}</span>
//                 <input
//                   type={field.type || "text"}
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={form[field.name]}
//                   onChange={handleChange}
//                   className="w-full bg-transparent outline-none text-gray-700"
//                 />
//               </div>
//             ))}

//             {/* Message Box */}
//             <div className="bg-[#f8f8f8] rounded-xl h-28 flex items-start px-4 py-3 shadow-sm border border-gray-200 md:col-span-2">
//               <MessageSquare size={18} className="text-gray-500 mr-3 mt-1" />
//               <textarea
//                 name="message"
//                 placeholder="Message / Requirements"
//                 value={form.message}
//                 onChange={handleChange}
//                 className="w-full bg-transparent outline-none text-gray-700 resize-none"
//               ></textarea>
//             </div>
//           </form>

//           {/* Checkbox */}
//           <div className="flex items-center mt-4 gap-2 md:col-span-2">
//             <input
//               type="checkbox"
//               name="checked"
//               checked={form.checked}
//               onChange={handleChange}
//               className="w-4 h-4 accent-orange-500 cursor-pointer"
//             />
//             <p className="text-xs text-gray-600">
//               Handpicked destinations with <span className="text-orange-500 font-semibold">best prices</span> and unforgettable experiences
//             </p>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6">
//             <button className="bg-[#e49123] hover:bg-[#cf7e1a] text-white w-60 py-3 rounded-full text-lg font-semibold shadow-md block mx-auto md:mx-0">
//               Submit Enquiry
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE IMAGE */}
//         <div className="w-full lg:w-1/3 flex justify-center items-center">
//           <img
//             src="https://i.ibb.co/jhfGNjN/Travel-Form-Image.png"
//             alt="Travel Enquiry"
//             className="w-full rounded-2xl object-cover shadow-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TravelEnquiryForm;
