// import React, { useState, useEffect, useRef } from "react";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faChevronUp, faChevronDown, faSignInAlt, faUserPlus, faSuitcase } from '@fortawesome/free-solid-svg-icons';
// import { FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

// import SearchBar from './SearchBar';
// import logo from "../assets/images/admire-logo.webp";
// import PlanMyTripForm from "../forms/PlanMyTripForm";

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [animateUnderline, setAnimateUnderline] = useState(false);
//   const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
//   const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
//   const [showPlanTripForm, setShowPlanTripForm] = useState(false);

//   const mobileMenuRef = useRef(null);
//   const authDropdownRef = useRef(null);
//   const categoryDropdownRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth >= 768) {
//         setIsOpen(false);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     setAnimateUnderline(false);
//     const timeout = setTimeout(() => {
//       setAnimateUnderline(true);
//     }, 100);
//     return () => clearTimeout(timeout);
//   }, [location.pathname]);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//       if (authDropdownRef.current && !authDropdownRef.current.contains(event.target)) {
//         setAuthDropdownOpen(false);
//       }
//       if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
//         setCategoryDropdownOpen(false);
//       }
//     };

//     if (isOpen || authDropdownOpen || categoryDropdownOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//       return () => document.removeEventListener('mousedown', handleClickOutside);
//     }
//   }, [isOpen, authDropdownOpen, categoryDropdownOpen]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {

//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   const handleSearch = (query) => {
//     console.log("Searching for:", query);
//   };

//   const searchSuggestions = [
//     { id: 1, text: "Goa Beach Package", type: "destination", icon: "faMapMarkerAlt", path: "/destinations/goa" },
//     { id: 2, text: "Kashmir Honeymoon", type: "destination", icon: "faMapMarkerAlt", path: "/destinations/kashmir"  },
//     { id: 3, text: "Kerala Backwaters", type: "destination", icon: "faMapMarkerAlt", path: "/destinations/kerala"  },
//     { id: 4, text: "Rajasthan Tour", type: "destination", icon: "faMapMarkerAlt", path: "/destinations/rajasthan" },
//     { id: 5, text: "International Packages", type: "category", icon: "faGlobe", path: "/international"  },
//     { id: 6, text: "Domestic Tours", type: "category", icon: "faGlobe", path: "domestic"  },
//   ];

//   // Categories dropdown data
//   const categories = [
//     { name: "Wildlife", path: "/category/wildlife" },
//     { name: "Adventure", path: "/category/adventure" },
//     { name: "Honeymoon", path: "/category/honeymoon" },
//     { name: "Beach", path: "/category/beach" },
//     { name: "Pilgrimage", path: "/category/pilgrimage" },
//     { name: "Hill Station", path: "/category/hill-station" },
//     { name: "Heritage Tours", path: "/category/heritage-tours" },
//     { name: "Ayurveda Tours", path: "/category/ayurveda-tours" },
//     { name: "Cultural", path: "/category/cultural" },
//     { name: "Family", path: "/category/family" },
//     { name: "Bachelors", path: "/category/bachelors" },
//     { name: "Womens Group", path: "/category/womens-group" },
//     { name: "Special Interest", path: "/category/special-interest" },
//   ];

//   const links = [
//     { to: "/", label: "Home" },
//     { to: "/domestic", label: "Domestic" },
//     { to: "/international", label: "International" },
//     { to: "/about", label: "About" },
//     { to: "/blog", label: "Blog" },
//     { to: "/contact", label: "Contact" },
//   ];

//   return (
//     <>
//       {/* Top Bar with Search */}
//       <div className="bg-blue-800 text-white text-sm py-2">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center justify-between space-y-2 lg:space-y-0 py-1">
//             {/* Contact Info */}
//             <div className="flex flex-col sm:flex-row items-center gap-4">
//               <a href="tel:011-23261775" className="hover:text-orange-400 transition-colors">
//                 <i className="fas fa-phone-alt mr-1"></i> 1800-121-4252
//               </a>
//               <a href="mailto:info@admireholidays.com" className="hover:text-orange-400 transition-colors">
//                 <i className="fas fa-envelope mr-1"></i> info@admireholidays.com
//               </a>
//             </div>

//             {/* Search Bar Component - Hidden on mobile */}
//             <div className="hidden md:flex flex-1 max-w-md mx-4 order-last lg:order-none relative z-[60]">
//               <SearchBar
//                 placeholder="Search destinations, packages..."
//                 onSearch={handleSearch}
//                 className="w-full"
//                 size="default"
//                 showSuggestions={true}
//                 suggestions={searchSuggestions}
//               />
//             </div>

//             {/* Social Media Links */}
//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => {
//                   window.open('https://www.facebook.com/people/Admire-Holidays/100090809996697/?mibextid=ZbWKwL', '_blank');
//                   navigate('/social-click');
//                 }}
//                 className="text-gray-300 hover:text-amber-400 text-xl transition-colors"
//                 aria-label="Facebook"
//               >
//                 <FaFacebook />
//               </button>

//               <button
//                 onClick={() => {
//                   window.open('https://twitter.com/admireholidays', '_blank');
//                   navigate('/social-click');
//                 }}
//                 className="text-gray-300 hover:text-amber-400 text-xl transition-colors"
//                 aria-label="Twitter"
//               >
//                 <FaTwitter />
//               </button>

//               <button
//                 onClick={() => {
//                   window.open('https://www.instagram.com/admireholidays_official?igsh=MWVydXI0ejY5OW9hdQ%3D%3D', '_blank');
//                   navigate('/social-click');
//                 }}
//                 className="text-gray-300 hover:text-amber-400 text-xl transition-colors"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram />
//               </button>

//               <button
//                 onClick={() => {
//                   window.open('https://www.youtube.com/@AdmireHolidays_official', '_blank');
//                   navigate('/social-click');
//                 }}
//                 className="text-gray-300 hover:text-amber-400 text-xl transition-colors"
//                 aria-label="YouTube"
//               >
//                 <FaYoutube />
//               </button>

//               <button
//                 onClick={() => {
//                   window.open('https://www.linkedin.com/company/103593428/admin/dashboard/', '_blank');
//                   navigate('/social-click');
//                 }}
//                 className="text-gray-300 hover:text-amber-400 text-xl transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <FaLinkedin />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="bg-white shadow-md sticky top-0 z-50 py-2">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between">
//             <NavLink to="/" className="flex items-center z-50">
//               <img
//                 src={logo}
//                 alt="Admire Holidays Logo"
//                 className="h-10"
//               />
//             </NavLink>

//             {/* Mobile Search Bar - Only visible on mobile */}
//             {isMobile && (
//               <div className="md:hidden flex-1 mx-4 relative z-[45]">
//                 <SearchBar
//                   placeholder="Search..."
//                   onSearch={handleSearch}
//                   className="w-full"
//                   size="small"
//                   showSuggestions={false}
//                 />
//               </div>
//             )}

//             {/* Hamburger menu for mobile */}
//             <button
//               className="md:hidden focus:outline-none z-[60] relative p-2 rounded-md hover:bg-gray-100 transition-colors"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//               aria-expanded={isOpen}
//             >
//               <div className="relative w-6 h-6">
//                 <span className={`absolute left-0 top-1 w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//                 <span className={`absolute left-0 top-3 w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
//                 <span className={`absolute left-0 top-5 w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//               </div>
//             </button>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-6">
//               <ul className="flex items-center space-x-6">
//                 {links.map(({ to, label }) => {
//                   const isActive = location.pathname === to || (to === "/" && location.pathname === "/");
//                   return (
//                     <li key={to} className="relative">
//                       <NavLink
//                         to={to}
//                         className={({ isActive }) =>
//                           `relative px-3 py-2 font-medium text-gray-800 hover:text-blue-800 transition-colors ${
//                             isActive ? "text-blue-800" : ""
//                           }`
//                         }
//                         end={to === "/"}
//                       >
//                         {label}
//                         <span
//                           className={`absolute left-0 bottom-0 h-[2px] bg-[#da3939] origin-left transform transition-transform duration-[1000ms] ease-in-out`}
//                           style={{
//                             width: "100%",
//                             transformOrigin: "left",
//                             transform: isActive && animateUnderline ? "scaleX(1)" : "scaleX(0)",
//                           }}
//                         />
//                       </NavLink>
//                     </li>
//                   );
//                 })}

//                 {/* Category Dropdown */}
//                 <li
//                   className="relative"
//                   ref={categoryDropdownRef}
//                   onMouseEnter={() => !isMobile && setCategoryDropdownOpen(true)}
//                   onMouseLeave={() => !isMobile && setCategoryDropdownOpen(false)}
//                 >
//                   <button
//                     onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
//                     className={`relative px-3 py-2 font-medium text-gray-800 hover:text-blue-800 transition-colors flex items-center ${
//                       categoryDropdownOpen ? "text-blue-800" : ""
//                     }`}
//                   >
//                     Category
//                     <FontAwesomeIcon
//                       icon={categoryDropdownOpen ? faChevronUp : faChevronDown}
//                       className="ml-1 text-xs"
//                     />
//                   </button>

//                   {categoryDropdownOpen && (
//                     <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-[55]">
//                       <div className="px-4 py-2 bg-blue-800 text-white">
//                         <p className="text-sm font-medium">Holidays by Interest</p>
//                       </div>

//                       <div className="max-h-96 overflow-y-auto">
//                         {categories.map((category) => (
//                           <NavLink
//                             key={category.path}
//                             to={category.path}
//                             className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
//                             onClick={() => setCategoryDropdownOpen(false)}
//                           >
//                             {category.name}
//                           </NavLink>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               </ul>

//               {/* Enhanced Auth Dropdown */}
//               <div className="relative ml-4" ref={authDropdownRef}>
//                 <button
//                   onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
//                   className="flex items-center space-x-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-200 focus:outline-none border border-blue-100"
//                 >
//                   <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white">
//                     <FontAwesomeIcon icon={faUser} className="text-sm" />
//                   </div>
//                   <span className="font-medium text-gray-800">Account</span>
//                   <FontAwesomeIcon
//                     icon={authDropdownOpen ? faChevronUp : faChevronDown}
//                     className="text-gray-500 text-xs transition-transform"
//                   />
//                 </button>

//                 {authDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-[55]">
//                     <div className="px-4 py-3 border-b border-gray-100 bg-blue-50">
//                       <p className="text-sm font-medium text-gray-600">Welcome to Admire</p>
//                       <p className="text-xs text-gray-500">Sign in or create account</p>
//                     </div>

//                     <NavLink
//                       to="/signin"
//                       className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors"
//                       onClick={() => setAuthDropdownOpen(false)}
//                     >
//                       <FontAwesomeIcon icon={faSignInAlt} className="mr-3 text-blue-600 w-5 text-center" />
//                       <div>
//                         <p className="font-medium">Sign In</p>
//                         <p className="text-xs text-gray-500">Access your account</p>
//                       </div>
//                     </NavLink>

//                     <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
//                       <NavLink
//                         to="/my-profile"
//                         className="flex items-center text-sm text-gray-600 hover:text-blue-800"
//                         onClick={() => setAuthDropdownOpen(false)}
//                       >
//                         <FontAwesomeIcon icon={faSuitcase} className="mr-2" />
//                         My Bookings
//                       </NavLink>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <button
//                 onClick={() => setShowPlanTripForm(true)}
//                 className="ml-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition-colors"
//               >
//                 Get a Quote
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation Overlay */}
//           {isOpen && (
//             <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[55]" onClick={() => setIsOpen(false)} />
//           )}

//           {/* Mobile Navigation */}
//           <div
//             ref={mobileMenuRef}
//             className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out ${
//               isOpen ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           >
//             <div className="flex flex-col h-full">
//               {/* Mobile Menu Header */}
//               <div className="flex items-center justify-between p-4 border-b border-gray-200">
//                 <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="p-2 rounded-md hover:bg-gray-100 transition-colors"
//                   aria-label="Close menu"
//                 >
//                   <i className="fas fa-times text-gray-600 text-xl"></i>
//                 </button>
//               </div>

//               {/* Mobile Menu Content */}
//               <div className="flex-1 overflow-y-auto p-4">
//                 <ul className="space-y-2">
//                   {links.map(({ to, label }) => (
//                     <li key={to}>
//                       <NavLink
//                         to={to}
//                         className={({ isActive }) =>
//                           `flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors ${
//                             isActive
//                               ? "bg-blue-800 text-white"
//                               : "text-gray-700 hover:bg-blue-50 hover:text-blue-800"
//                           }`
//                         }
//                         onClick={() => setIsOpen(false)}
//                         end={to === "/"}
//                       >
//                         {label}
//                       </NavLink>
//                     </li>
//                   ))}

//                   {/* Mobile Category Dropdown */}
//                   <li>
//                     <button
//                       onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
//                       className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors ${
//                         categoryDropdownOpen
//                           ? "bg-blue-800 text-white"
//                           : "text-gray-700 hover:bg-blue-50 hover:text-blue-800"
//                       }`}
//                     >
//                       <span>Category</span>
//                       <FontAwesomeIcon
//                         icon={categoryDropdownOpen ? faChevronUp : faChevronDown}
//                         className="ml-1 text-xs"
//                       />
//                     </button>

//                     {categoryDropdownOpen && (
//                       <div className="mt-1 ml-4 bg-gray-50 rounded-lg overflow-hidden">
//                         <div className="px-3 py-2 bg-blue-800 text-white">
//                           <p className="text-sm font-medium">Holidays by Interest</p>
//                         </div>

//                         <ul className="max-h-60 overflow-y-auto">
//                           {categories.map((category) => (
//                             <li key={category.path}>
//                               <NavLink
//                                 to={category.path}
//                                 className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
//                                 onClick={() => {
//                                   setIsOpen(false);
//                                   setCategoryDropdownOpen(false);
//                                 }}
//                               >
//                                 {category.name}
//                               </NavLink>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </li>
//                 </ul>

//                 {/* Mobile Auth Section */}
//                 <div className="mt-6 pt-6 border-t border-gray-200">
//                   <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Account</h3>
//                   <div className="space-y-2">
//                     <NavLink
//                       to="/signin"
//                       className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors rounded-lg"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <FontAwesomeIcon icon={faSignInAlt} className="mr-3 text-blue-600 w-5" />
//                       <div>
//                         <p className="font-medium">Sign In</p>
//                         <p className="text-xs text-gray-500">Access your account</p>
//                       </div>
//                     </NavLink>

//                     <NavLink
//                       to="/my-profile"
//                       className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors rounded-lg"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <FontAwesomeIcon icon={faSuitcase} className="mr-3 text-gray-600 w-5" />
//                       My Bookings
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>

//               {/* Mobile Menu Footer */}
//               <div className="p-4 border-t border-gray-200">
//                 <NavLink
//                   to="/contact"
//                   className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-3 rounded-lg transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Get a Quote
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>
//         {showPlanTripForm && <PlanMyTripForm onClose={() => setShowPlanTripForm(false)} />}
//       </nav>
//     </>
//   );
// }

// export default NavBar;

// import React, { useState, useEffect } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import logo from "../assets/images/admire-logo.webp";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   // Scroll animation
//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "Domestic", path: "/domestic" },
//     { name: "International", path: "/international" },
//     { name: "Category", path: "/category" },
//     { name: "Blogs", path: "/blog" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact us", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav
//         style={{ fontFamily: "Arial, sans-serif" }}
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
//           scrolled
//             ? "backdrop-blur-md bg-black/30 shadow-lg"
//             : "bg-black/20"
//         }`}
//       >
//         <div className="max-w-[1400px] mx-auto px-6">
//           <div className="h-[70px] flex items-center relative">

//             {/* LOGO */}
//             <NavLink to="/" className="flex items-center">
//               <img src={logo} alt="logo" className="h-9" />
//             </NavLink>

//             {/* DESKTOP MENU */}
//             <ul className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
//               {links.map((item) => (
//                 <li key={item.path} className="relative group">
//                   <NavLink
//                     to={item.path}
//                     end={item.path === "/"}
//                     className={({ isActive }) =>
//                       `text-sm tracking-wide transition-all duration-300 ${
//                         isActive
//                           ? "text-white"
//                           : "text-gray-200 group-hover:text-white"
//                       }`
//                     }
//                   >
//                     {({ isActive }) => (
//                       <>
//                         <span className="inline-block transition-transform duration-300 group-hover:-translate-y-[2px]">
//                           {item.name}
//                         </span>

//                         {/* UNDERLINE */}
//                         <span
//                           className={`absolute left-0 -bottom-2 h-[2px] w-full bg-[#da3939] origin-left transition-transform duration-500 ${
//                             isActive
//                               ? "scale-x-100"
//                               : "scale-x-0 group-hover:scale-x-100"
//                           }`}
//                         />
//                       </>
//                     )}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             {/* LOGIN BUTTON */}
//             <div className="ml-auto hidden md:block">
//               <NavLink
//                 to="/signin"
//                 className="bg-orange-500/90 hover:bg-orange-500 text-white text-sm px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
//               >
//                 Login
//               </NavLink>
//             </div>

//             {/* MOBILE ICON */}
//             <button
//               className="md:hidden ml-auto text-white text-2xl"
//               onClick={() => setIsOpen(true)}
//             >
//               ☰
//             </button>

//           </div>
//         </div>
//       </nav>

//       {/* OVERLAY */}
//       <div
//         className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${
//           isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setIsOpen(false)}
//       />

//       {/* MOBILE MENU */}
//       <div
//         style={{ fontFamily: "Arial, sans-serif" }}
//         className={`fixed top-0 right-0 h-full w-[280px] bg-black/80 backdrop-blur-xl z-[70] transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="p-5 flex flex-col h-full">

//           <div className="flex items-center justify-between mb-6">
//             <img src={logo} alt="logo" className="h-8" />
//             <button
//               className="text-white text-2xl"
//               onClick={() => setIsOpen(false)}
//             >
//               ✕
//             </button>
//           </div>

//           <ul className="flex flex-col gap-4">
//             {links.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 end={item.path === "/"}
//                 className={({ isActive }) =>
//                   `text-sm py-2 border-b border-white/10 transition ${
//                     isActive ? "text-orange-400" : "text-white"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//           </ul>

//           <NavLink
//             to="/signin"
//             className="mt-auto bg-orange-500 text-center text-white py-3 rounded-full"
//           >
//             Login
//           </NavLink>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;

// import React, { useState, useEffect, useRef } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import logo from "../assets/images/admire-logo.webp";

// const NavBar = () => {
//   const [categoryOpen, setCategoryOpen] = useState(false);
//   const location = useLocation();
//   const categoryRef = useRef(null);

//   // Close dropdown on route change
//   useEffect(() => {
//     setCategoryOpen(false);
//   }, [location.pathname]);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handler = (e) => {
//       if (categoryRef.current && !categoryRef.current.contains(e.target)) {
//         setCategoryOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const categories = [
//     "Wildlife",
//     "Adventure",
//     "Honeymoon",
//     "Beach",
//     "Pilgrimage",
//     "Hill Station",
//     "Heritage Tours",
//     "Ayurveda Tours",
//     "Cultural",
//     "Family",
//     "Bachelors",
//     "Women Group",
//     "Special Interest",
//   ];

//   return (
//     <nav
//       style={{ fontFamily: "Arial, sans-serif" }}
//       className="w-full bg-white shadow-md relative z-50"
//     >
//       <div className="max-w-[1400px] mx-auto px-6">
//         <div className="h-[70px] flex items-center justify-between">

//           {/* LOGO */}
//           <NavLink to="/">
//             <img src={logo} alt="logo" className="h-10" />
//           </NavLink>

//           {/* CENTER MENU */}
//           <ul className="hidden md:flex items-center gap-8 text-sm text-gray-800">
//             {[
//               { name: "Home", path: "/" },
//               { name: "Domestic", path: "/domestic" },
//               { name: "International", path: "/international" },
//               { name: "About", path: "/about" },
//               { name: "Blog", path: "/blog" },
//               { name: "Contact", path: "/contact" },
//             ].map((item) => (
//               <li key={item.path} className="relative">
//                 <NavLink
//                   to={item.path}
//                   end={item.path === "/"}
//                   className={({ isActive }) =>
//                     `pb-1 transition ${
//                       isActive
//                         ? "text-black border-b-2 border-red-500"
//                         : "hover:text-black"
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* RIGHT SECTION */}
//           <div className="flex items-center gap-4">

//             {/* CATEGORY DROPDOWN */}
//             <div ref={categoryRef} className="relative">
//               <button
//                 onClick={() => setCategoryOpen(!categoryOpen)}
//                 className="flex items-center gap-1 text-sm text-gray-800 hover:text-black"
//               >
//                 Category
//                 <span
//                   className={`transition-transform ${
//                     categoryOpen ? "rotate-180" : ""
//                   }`}
//                 >
//                   ▲
//                 </span>
//               </button>

//               {categoryOpen && (
//                 <div className="absolute right-0 top-[130%] w-[260px] bg-white rounded-lg shadow-xl border overflow-hidden z-50">

//                   {/* HEADER */}
//                   <div className="bg-blue-700 text-white px-4 py-2 text-sm font-medium">
//                     Holidays by Interest
//                   </div>

//                   {/* LIST */}
//                   <div className="max-h-[300px] overflow-y-auto">
//                     {categories.map((cat) => (
//                       <NavLink
//                         key={cat}
//                         to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition"
//                         onClick={() => setCategoryOpen(false)}
//                       >
//                         {cat}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* ACCOUNT */}
//             <button className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-full text-sm text-gray-800">
//               <span className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center">
//                 👤
//               </span>
//               Account ▼
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// import React, { useState, useEffect, useRef } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import logo from "../assets/images/admire-logo.webp";

// const NavBar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [categoryOpen, setCategoryOpen] = useState(false);
//   const categoryRef = useRef(null);
//   const location = useLocation();

//   // Scroll animation
//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Close dropdown on route change
//   useEffect(() => {
//     setCategoryOpen(false);
//   }, [location.pathname]);

//   // Outside click
//   useEffect(() => {
//     const handler = (e) => {
//       if (categoryRef.current && !categoryRef.current.contains(e.target)) {
//         setCategoryOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const categories = [
//     "Wildlife",
//     "Adventure",
//     "Honeymoon",
//     "Beach",
//     "Pilgrimage",
//     "Hill Station",
//     "Heritage Tours",
//     "Ayurveda Tours",
//     "Cultural",
//     "Family",
//     "Bachelors",
//     "Women Group",
//     "Special Interest",
//   ];

//   return (
//     <nav
//       style={{ fontFamily: "Arial, sans-serif" }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
//         ${
//           scrolled
//             ? "bg-[#2b2b2b]/90 backdrop-blur-md shadow-lg"
//             : "bg-gradient-to-r from-[#1c1c1c]/60 via-[#3b2f2f]/60 to-[#c68642]/60"
//         }`}
//     >
//       <div className="max-w-[1400px] mx-auto px-6">
//         <div className="h-[72px] flex items-center justify-between">

//           {/* LOGO */}
//           <NavLink to="/" className="flex items-center">
//             <img src={logo} alt="Admire" className="h-9 object-contain" />
//           </NavLink>

//           {/* CENTER MENU */}
//           <ul className="hidden md:flex items-center gap-8 text-sm text-white">
//             {[
//               { name: "Home", path: "/" },
//               { name: "Domestic", path: "/domestic" },
//               { name: "International", path: "/international" },
//               { name: "Category", path: "#" },
//               { name: "Blogs", path: "/blogs" },
//               { name: "About Us", path: "/about" },
//               { name: "Contact us", path: "/contact" },
//             ].map((item) => (
//               <li key={item.name} className="relative">
//                 {item.name === "Category" ? (
//                   <button
//                     onClick={() => setCategoryOpen(!categoryOpen)}
//                     className="hover:text-orange-400 transition"
//                   >
//                     Category
//                   </button>
//                 ) : (
//                   <NavLink
//                     to={item.path}
//                     end={item.path === "/"}
//                     className={({ isActive }) =>
//                       `transition hover:text-orange-400 ${
//                         isActive ? "text-orange-400" : ""
//                       }`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* RIGHT */}
//           <div className="flex items-center gap-4">
//             <NavLink
//               to="/login"
//               className="bg-orange-500 hover:bg-orange-600 transition text-white text-xs px-4 py-2 rounded-full"
//             >
//               B2B Login
//             </NavLink>
//           </div>
//         </div>
//       </div>

//       {/* CATEGORY DROPDOWN */}
//       {categoryOpen && (
//         <div
//           ref={categoryRef}
//           className="absolute left-1/2 -translate-x-1/2 top-[72px]
//           w-[280px] bg-white rounded-xl shadow-2xl overflow-hidden animate-fadeDown"
//         >
//           <div className="bg-blue-700 text-white px-4 py-2 text-sm">
//             Holidays by Interest
//           </div>
//           <div className="max-h-[300px] overflow-y-auto">
//             {categories.map((cat) => (
//               <NavLink
//                 key={cat}
//                 to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition"
//                 onClick={() => setCategoryOpen(false)}
//               >
//                 {cat}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;

// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/AdmireLogo.png";
// // import AdmireLogo from "../assets/images/admire-logo.webp";

// const NavBar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [categoryOpen, setCategoryOpen] = useState(false);
//   const categoryRef = useRef(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const handler = (e) => {
//       if (categoryRef.current && !categoryRef.current.contains(e.target)) {
//         setCategoryOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Domestic", path: "/domestic" },
//     { name: "International", path: "/international" },
//     { name: "Category", path: "#" },
//     { name: "Blogs", path: "/blog" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact us", path: "/contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
//         scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-[1400px] mx-auto px-6">
//         <div className="h-[72px] flex items-center justify-between">
//           {/* LOGO */}
//           <NavLink to="/">
//             {/* <img src={logo} alt="Admire" className="h- object-contain" /> */}

//             <img
//               src={logo}
//               alt="Admire"
//               className="h-12 md:h-16 lg:h-20 object-contain"
//             />
//           </NavLink>

//           {/* MENU */}
//           <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
//             {menuItems.map((item) => (
//               <li key={item.name} className="relative group">
//                 {item.name === "Category" ? (
//                   <button
//                     onClick={() => setCategoryOpen(!categoryOpen)}
//                     className={`relative pb-1 ${
//                       scrolled ? "text-gray-800" : "text-white"
//                     } hover:text-orange-500`}
//                   >
//                     Category
//                     {/* hover small underline */}
//                     <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-4"></span>
//                   </button>
//                 ) : (
//                   <NavLink
//                     to={item.path}
//                     end={item.path === "/"}
//                     className={({ isActive }) =>
//                       `relative pb-1 transition ${
//                         isActive
//                           ? "text-orange-500"
//                           : scrolled
//                           ? "text-gray-800 hover:text-orange-500"
//                           : "text-white hover:text-orange-400"
//                       }`
//                     }
//                   >
//                     {({ isActive }) => (
//                       <>
//                         {item.name}

//                         {/* UNDERLINE LOGIC */}
//                         <span
//                           className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-300
//                           ${
//                             isActive
//                               ? "w-full" // ✅ ACTIVE = FULL
//                               : "w-0 left-1/2 -translate-x-1/2 group-hover:w-4" // ✅ HOVER = SMALL
//                           }`}
//                         ></span>
//                       </>
//                     )}
//                   </NavLink>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* RIGHT BUTTON */}
//           <NavLink
//             to="/signin"
//             className="bg-orange-500 hover:bg-orange-600 transition text-white text-xs px-4 py-2 rounded-full shadow"
//           >
//             B2B Login
//           </NavLink>
//         </div>
//       </div>

//       {/* CATEGORY DROPDOWN */}
//       {categoryOpen && (
//         <div
//           ref={categoryRef}
//           className="absolute left-1/2 -translate-x-1/2 top-[72px]
//           w-[280px] bg-white rounded-xl shadow-2xl overflow-hidden"
//         >
//           <div className="bg-orange-500 text-white px-4 py-2 text-sm font-semibold">
//             Holidays by Interest
//           </div>
//           <div className="max-h-[300px] overflow-y-auto">
//             {["Wildlife", "Adventure", "Honeymoon", "Beach"].map((cat) => (
//               <NavLink
//                 key={cat}
//                 to={`/category/${cat.toLowerCase()}`}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50"
//                 onClick={() => setCategoryOpen(false)}
//               >
//                 {cat}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;










import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/AdmireLogo.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Domestic", path: "/domestic" },
    { name: "International", path: "/international" },
    { name: "Category", path: "#" },
    { name: "Blogs", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* 🔑 overflow-visible added */}
        <div className="h-[72px] flex items-center justify-between overflow-visible">
          
          {/* LOGO */}
          <NavLink to="/" className="flex items-center h-full overflow-visible">
            <img
              src={logo}
              alt="Admire"
              className="
                h-14 md:h-16
                object-contain block
                scale-150
                transition-transform duration-300
              "
            />
          </NavLink>

          {/* MENU */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.name === "Category" ? (
                  <button
                    onClick={() => setCategoryOpen(!categoryOpen)}
                    className={`relative pb-1 ${
                      scrolled ? "text-gray-800" : "text-white"
                    } hover:text-orange-500`}
                  >
                    Category
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-4"></span>
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `relative pb-1 transition ${
                        isActive
                          ? "text-orange-500"
                          : scrolled
                          ? "text-gray-800 hover:text-orange-500"
                          : "text-white hover:text-orange-400"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-300
                          ${
                            isActive
                              ? "w-full"
                              : "w-0 left-1/2 -translate-x-1/2 group-hover:w-4"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* RIGHT BUTTON */}
          <NavLink
            to="/signin"
            className="bg-orange-500 hover:bg-orange-600 transition text-white text-xs px-4 py-2 rounded-full shadow"
          >
            B2B Login
          </NavLink>
        </div>
      </div>

      {/* CATEGORY DROPDOWN */}
      {categoryOpen && (
        <div
          ref={categoryRef}
          className="absolute left-1/2 -translate-x-1/2 top-[72px]
          w-[280px] bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="bg-orange-500 text-white px-4 py-2 text-sm font-semibold">
            Holidays by Interest
          </div>
          <div className="max-h-[300px] overflow-y-auto">
            {["Wildlife", "Adventure", "Honeymoon", "Beach"].map((cat) => (
              <NavLink
                key={cat}
                to={`/category/${cat.toLowerCase()}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50"
                onClick={() => setCategoryOpen(false)}
              >
                {cat}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
