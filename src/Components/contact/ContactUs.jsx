// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Swal from 'sweetalert2';
// import { submitContactForm } from '../../api/api';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { firstName, lastName, email, phone, subject, message } = formData;

//     // Validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const nameRegex = /^[A-Za-z\s]{2,}$/;
//     const phoneRegex = /^[0-9]{10}$/;

//     if (!firstName || !phone || !email) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Required Fields Missing',
//         text: 'Please fill First Name, Phone Number, and Email.'
//       });
//       return;
//     }

//     if (!nameRegex.test(firstName)) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid First Name',
//         text: 'First name must contain only letters (min 2 characters).'
//       });
//       return;
//     }

//     if (lastName && !nameRegex.test(lastName)) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid Last Name',
//         text: 'Last name must contain only letters (min 2 characters).'
//       });
//       return;
//     }

//     if (!emailRegex.test(email)) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid Email',
//         text: 'Please enter a valid email address.'
//       });
//       return;
//     }

//     if (!phoneRegex.test(phone)) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid Phone Number',
//         text: 'Phone number must be 10 digits.'
//       });
//       return;
//     }

//     // Submit to backend
//     try {
//       await submitContactForm({
//         name: `${firstName} ${lastName}`.trim(),
//         email,
//         phone,
//         subject,
//         message
//       });

//       Swal.fire({
//         icon: 'success',
//         title: 'Message Sent!',
//         text: 'Thank you for reaching out to us.',
//         showConfirmButton: false,
//         timer: 2000
//       });

//       setFormData({
//         firstName: '',
//         lastName: '',
//         phone: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('Error submitting contact form:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Submission Failed',
//         text: error.response?.data?.message || 'Please try again later.'
//       });
//     }
//   };

//   const contactItems = [
//     {
//       icon: (
//         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
//           <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path>
//           <circle cx="256" cy="192" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
//         </svg>
//       ),
//       title: "Address",
//       content: "34, Sewak Park (1st floor), Dwarka More Metro, Near Metro Pillar No-772, New Delhi - 110059"
//     },
//     {
//       icon: (
//         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
//           <path d="M20 15.45c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1 11.36 11.36 0 01-.57-3.57c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"></path>
//         </svg>
//       ),
//       title: "Phone",
//       content: "1800-121-4252"
//     },
//     {
//       icon: (
//         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
//           <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"></path>
//         </svg>
//       ),
//       title: "Email",
//       content: "info@admireholidays.com"
//     },
//     {
//       icon: (
//         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
//           <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
//         </svg>
//       ),
//       title: "Working Hours",
//       content: "Mon - Sat: 10 AM - 6 PM\nSunday: Closed"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   const inputClass = "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all";

//   return (
//     <div className="bg-gray-50 py-8 px-4">
//       <motion.section
//         className="max-w-7xl mx-auto"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <motion.div variants={itemVariants} className="text-center mb-10">
//           <motion.h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-2" whileHover={{ scale: 1.02 }}>
//             Contact Us
//           </motion.h1>
//           <p className="text-gray-600 max-w-2xl mx-auto text-sm">
//             We are here to help. Reach out to us for any inquiries, assistance, or collaboration.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Contact Details */}
//           <div className="space-y-4">
//             {contactItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-start gap-3 bg-white shadow-md p-4 rounded-xl hover:shadow-lg transition-shadow duration-300"
//                 variants={itemVariants}
//                 whileHover={{ y: -3 }}
//               >
//                 <div className="text-red-500 mt-1">{item.icon}</div>
//                 <div>
//                   <strong>{item.title}:</strong>
//                   <p className="whitespace-pre-line text-sm">{item.content}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Contact Form */}
//           <motion.form
//             className="bg-white shadow-md rounded-xl p-5 space-y-4"
//             variants={itemVariants}
//             onSubmit={handleSubmit}
//           >
//             <h2 className="text-xl font-semibold">Leave a Message</h2>

//             <div className="flex flex-col md:flex-row gap-3">
//               <input
//                 placeholder="First Name*"
//                 className={inputClass}
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//               <input
//                 placeholder="Last Name"
//                 className={inputClass}
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="flex flex-col md:flex-row gap-3">
//               <input
//                 placeholder="Phone Number*"
//                 className={inputClass}
//                 type="number"
//                 name="phone"
//                 maxLength="15"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//               <input
//                 placeholder="Email Address*"
//                 className={inputClass}
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <input
//               placeholder="Subject (optional)"
//               className={inputClass}
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message (optional)"
//               rows="4"
//               className={inputClass}
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>

//             <motion.button
//               type="submit"
//               className="w-full py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-md transition-all duration-300"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Submit
//             </motion.button>
//           </motion.form>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default ContactUs;

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Swal from 'sweetalert2';
// import { submitContactForm } from '../../api/api';

// const ContactUs = () => {
//   // Contact form state
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const { firstName, lastName, email, phone, subject, message } = formData;

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const nameRegex = /^[A-Za-z\s]{2,}$/;
//     const phoneRegex = /^[0-9]{10}$/;

//     if (!firstName || !phone || !email) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Required Fields Missing',
//         text: 'Please fill First Name, Phone Number, and Email.'
//       });
//       return;
//     }

//     if (!nameRegex.test(firstName)) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid First Name',
//         text: 'First name must contain only letters (min 2 characters).'
//       });
//       return;
//     }

//     if (lastName && !nameRegex.test(lastName)) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid Last Name',
//         text: 'Last name must contain only letters (min 2 characters).'
//       });
//       return;
//     }

//     if (!emailRegex.test(email)) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid Email',
//         text: 'Please enter a valid email address.'
//       });
//       return;
//     }

//     if (!phoneRegex.test(phone)) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid Phone Number',
//         text: 'Phone number must be 10 digits.'
//       });
//       return;
//     }

//     // Submit to backend
//     try {
//       await submitContactForm({
//         name: `${firstName} ${lastName}`.trim(),
//         email,
//         phone,
//         subject,
//         message
//       });

//       Swal.fire({
//         icon: 'success',
//         title: 'Message Sent!',
//         text: 'Thank you for reaching out to us.',
//         showConfirmButton: false,
//         timer: 2000
//       });

//       setFormData({
//         firstName: '',
//         lastName: '',
//         phone: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('Error submitting contact form:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Submission Failed',
//         text: error.response?.data?.message || 'Please try again later.'
//       });
//     }
//   };

//   // Contact info items
//   const contactItems = [
//     {
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
//           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
//           <circle cx="12" cy="9" r="2.5" fill="white" />
//         </svg>
//       ),
//       title: 'Address',
//       content:
//         '34, Sewak Park (1st floor), Dwarka More Metro, Near Metro Pillar No-772, New Delhi - 110059'
//     },
//     {
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
//           <path d="M6.62 10.79a15.091 15.091 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.57.57c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1-9.39 0-17 7.61-17 17 0 .55.45 1 1 1h3.5c.55 0 1-.45 1-1a11.36 11.36 0 00-.57-3.57 1 1 0 01.21-1.11l2.2-2.2z" />
//         </svg>
//       ),
//       title: 'Phone',
//       content: '1800-121-4252'
//     },
//     {
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
//           <path d="M4 4h16v12H5.17L4 17.17V4zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" />
//         </svg>
//       ),
//       title: 'Email',
//       content: 'info@admireholidays.com'
//     },
//     {
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
//           <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 17h-2v-6h2zm0-8h-2V7h2z" />
//         </svg>
//       ),
//       title: 'Working Hours',
//       content: 'Mon - Sat: 10 AM - 6 PM\nSunday: Closed'
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   const inputClass =
//     'w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all';

//   return (
//     <div className="bg-gray-50 py-8 px-4">
//       <motion.section
//         className="max-w-7xl mx-auto"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <motion.div variants={itemVariants} className="text-center mb-10">
//           <motion.h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-2" whileHover={{ scale: 1.02 }}>
//             Contact Us
//           </motion.h1>
//           <p className="text-gray-600 max-w-2xl mx-auto text-sm">
//             We are here to help. Reach out to us for any inquiries, assistance, or collaboration.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Contact Details */}
//           <div className="space-y-4">
//             {contactItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-start gap-3 bg-white shadow-md p-4 rounded-xl hover:shadow-lg transition-shadow duration-300"
//                 variants={itemVariants}
//                 whileHover={{ y: -3 }}
//               >
//                 <div className="text-red-500 mt-1">{item.icon}</div>
//                 <div>
//                   <strong>{item.title}:</strong>
//                   <p className="whitespace-pre-line text-sm">{item.content}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Contact Form */}
//           <motion.form
//             className="bg-white shadow-md rounded-xl p-5 space-y-4"
//             variants={itemVariants}
//             onSubmit={handleSubmit}
//           >
//             <h2 className="text-xl font-semibold">Leave a Message</h2>

//             <div className="flex flex-col md:flex-row gap-3">
//               <input
//                 placeholder="First Name*"
//                 className={inputClass}
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 required
//                 onChange={handleChange}
//               />
//               <input
//                 placeholder="Last Name"
//                 className={inputClass}
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="flex flex-col md:flex-row gap-3">
//               <input
//                 placeholder="Phone Number*"
//                 className={inputClass}
//                 type="number"
//                 name="phone"
//                 required
//                 maxLength="15"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//               <input
//                 placeholder="Email Address*"
//                 className={inputClass}
//                 type="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <input
//               placeholder="Subject (optional)"
//               className={inputClass}
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message (optional)"
//               rows="4"
//               className={inputClass}
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>

//             <motion.button
//               type="submit"
//               className="w-full py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-md transition-all duration-300"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Submit
//             </motion.button>
//           </motion.form>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default ContactUs;

import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { submitContactForm } from "../../api/api";
import travelenquiry from '../../assets/travelenquiry.png';

const TravelEnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travellers: "",
    departure: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName || !formData.email || !formData.phone) {
      Swal.fire(
        "Missing Fields",
        "Full Name, Email & Phone are required.",
        "error"
      );
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      Swal.fire(
        "Invalid Email",
        "Please enter a valid email address.",
        "error"
      );
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      Swal.fire("Invalid Phone", "Phone number must be 10 digits.", "error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await submitContactForm({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: `Travel enquiry for ${formData.destination}`,
        message: `
Destination: ${formData.destination}
Travel Date: ${formData.travelDate}
Travellers: ${formData.travellers}
Departure: ${formData.departure}
Budget: ${formData.budget}
Message: ${formData.message}
      `,
      });

      Swal.fire("Success!", "Your enquiry has been submitted!", "success");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        destination: "",
        travelDate: "",
        travellers: "",
        departure: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      Swal.fire(
        "Submission Failed",
        error.response?.data?.message || "Please try again later.",
        "error"
      );
    }
  };

  const inputClass =
    "w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-orange-500 outline-none";

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full bg-gray-100 py-10 flex justify-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-6xl w-full bg-[#e4c399] rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* LEFT FORM SIDE */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Travel Enquiry Form
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Share your details and get the best travel package instantly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                name="destination"
                placeholder="Destination"
                value={formData.destination}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                name="travelDate"
                // type="date"
                placeholder="Travel Date"
                value={formData.travelDate}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                maxLength="10"
                onChange={handleChange}
                className={inputClass}
              />

              <input
                name="travellers"
                placeholder="No. of Travellers"
                value={formData.travellers}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="departure"
                placeholder="Departure"
                value={formData.departure}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                name="budget"
                placeholder="Budget Range"
                value={formData.budget}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message / Requirements"
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} h-20`}
            />

            <button
              type="submit"
              className="w-40 mx-auto block py-2 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition"
            >
              Submit Enquiry
            </button>
          </form>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center"
        >
          <img
            src={travelenquiry}
            alt="travel"
            className="w-full max-w-sm md:max-w-md drop-shadow-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TravelEnquiryForm;
