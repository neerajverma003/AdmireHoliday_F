// import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import {
//   FaSun,
//   FaMoon,
//   FaHotel,
//   FaCaretLeft,
//   FaCaretRight,
// } from "react-icons/fa";
// import gsap from "gsap";

// const CLONE_COUNT = 5;

// const ExclusivePackages = ({ title, description, customClass = "" }) => {
//   const [data, setData] = useState([]);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
//   const isManualScrolling = useRef(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/getpackage");
//         const json = await res.json();

//         const exclusive = (json || []).filter(
//           (pkg) =>
//             Array.isArray(pkg.classification) &&
//             pkg.classification.includes("Exclusive")
//         );

//         const formatted = exclusive.map((pkg) => ({
//           id: pkg._id,
//           title: pkg.title,
//           price: pkg.pricing?.standard_price,
//           duration: pkg.duration,
//           description: pkg.destination_detail?.slice(0, 100) + "...",
//           image:
//             pkg.destination_thumbnails?.[0] || "/images/default-package.jpg",
//           link: `/itineraries/${pkg._id}`,
//         }));

//         setData(formatted);
//       } catch (err) {
//         console.error("Package fetch error:", err);
//       }
//     };

//     fetchPackages();
//   }, []);

//   useEffect(() => {
//     // Kill any existing animation first
//     if (animationRef.current) {
//       animationRef.current.kill();
//       animationRef.current = null;
//     }

//     // Don't run GSAP on mobile or if no data
//     if (isMobile || !containerRef.current || data.length === 0) {
//       // Reset transform on mobile
//       if (containerRef.current) {
//         gsap.set(containerRef.current, { clearProps: "all" });
//       }
//       return;
//     }

//     const cardWidth = 280;
//     const totalWidth = cardWidth * data.length;

//     gsap.set(containerRef.current, { x: -totalWidth });

//     animationRef.current = gsap.to(containerRef.current, {
//       x: 0,
//       duration: 110,
//       ease: "none",
//       repeat: -1,
//       modifiers: {
//         x: gsap.utils.unitize((x) => {
//           const val = parseFloat(x);
//           return (((val % totalWidth) + totalWidth) % totalWidth) - totalWidth;
//         }),
//       },
//     });

//     return () => {
//       if (animationRef.current) {
//         animationRef.current.kill();
//         animationRef.current = null;
//       }
//     };
//   }, [data, isMobile]);

//   /* ================= MANUAL SCROLL (DESKTOP) ================= */
//   const handleScroll = (dir) => {
//     if (isMobile || isManualScrolling.current || !containerRef.current) return;

//     isManualScrolling.current = true;
//     animationRef.current?.pause();

//     const cardWidth = 280;
//     const totalWidth = cardWidth * data.length;

//     const currentX = gsap.getProperty(containerRef.current, "x");
//     let newX = currentX + dir * cardWidth;

//     if (newX > 0) newX -= totalWidth;
//     if (newX < -totalWidth) newX += totalWidth;

//     gsap.to(containerRef.current, {
//       x: newX,
//       duration: 0.5,
//       ease: "power2.out",
//       onComplete: () => {
//         isManualScrolling.current = false;
//         setTimeout(() => animationRef.current?.play(), 1500);
//       },
//     });
//   };

//   /* ================= CARD ================= */
//   const Card = (pkg, key) => (
//     <div
//       key={key}
//       className="w-[240px] sm:w-[260px] flex-shrink-0 mx-3 bg-white rounded-2xl border border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300"
//     >
//       <Link to={pkg.link} className="block p-4 no-underline">
//         {/* Image */}
//         <div className="rounded-xl overflow-hidden mb-4">
//           <img
//             src={pkg.image}
//             alt={pkg.title}
//             tour
//             className="w-full h-[200px] sm:h-[230px] object-cover"
//           />
//         </div>

//         {/* Title + Price */}
//         <div className="flex justify-between gap-2 mb-2">
//           <h4 className="text-sm font-extrabold text-gray-800 leading-tight line-clamp-2">
//             {pkg.title}
//           </h4>
//           <p className="text-sm font-extrabold text-gray-900 whitespace-nowrap">
//             ₹{pkg.price}
//           </p>
//         </div>

//         {/* Description */}
//         <p className="text-xs font-medium text-gray-600 leading-relaxed mb-4 line-clamp-3">
//           {pkg.description}
//         </p>

//         {/* Icons */}
//         <div className="flex justify-between text-[11px] font-bold text-gray-500 mb-4">
//           <span className="flex items-center gap-1">
//             <FaSun className="text-orange-400" />
//             {pkg.duration}
//           </span>
//           <span className="flex items-center gap-1">
//             <FaMoon className="text-indigo-400" />
//             Nights
//           </span>
//           <span className="flex items-center gap-1">
//             <FaHotel />
//             Hotel
//           </span>
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <span className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-6 py-2 rounded-md transition">
//             View Package
//           </span>
//         </div>
//       </Link>
//     </div>
//   );

//   return (
//     <section className={`bg-white py-12 md:py-16 ${customClass}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
//         {/* Heading */}
//         {/* <div className="text-center mb-10 md:mb-14">
//           <p className="text-xl md:text-2xl font-extrabold text-orange-500">
//             {title}
//           </p>
         
//         </div> */}
//         <div className="relative mb-10 md:mb-14">
//           {/* Center Title */}
//           <p className="text-center text-xl md:text-2xl font-extrabold text-orange-500">
//             {title}
//           </p>

//           {/* Right Side View All */}
//           <Link
//             to="/packages/exclusive"
//             className="
//       absolute right-0 top-1/2 -translate-y-1/2
//       text-sm md:text-base font-bold
//       text-orange-500
//       hover:text-orange-600
//       transition
//     "
//           >
//             View All →
//           </Link>
//         </div>

//         {/* Slider */}
//         <div className="flex items-center">
//           {/* Left Arrow (Desktop only) */}
//           {/* {!isMobile && (
//             <button
//               onClick={() => handleScroll(1)}
//               className="text-orange-500 text-3xl px-2 hover:text-orange-600 transition"
//               aria-label="Scroll left"
//             >
//               <FaCaretLeft />
              
//             </button>
//           )} */}
//           {/* Slider Container */}
//           <div
//             className={`flex-1 ${
//               isMobile ? "overflow-x-auto" : "overflow-hidden"
//             }`}
//           >
//             <div
//               ref={containerRef}
//               className="flex"
//               style={
//                 isMobile ? { transform: "translate3d(0, 0, 0)" } : undefined
//               }
//             >
//               {/* MOBILE: Show original cards only | DESKTOP: Show clones for infinite scroll */}
//               {isMobile
//                 ? data.map((pkg) => Card(pkg, `mobile-${pkg.id}`))
//                 : Array.from({ length: CLONE_COUNT }).flatMap((_, i) =>
//                     data.map((pkg) => Card(pkg, `desktop-${i}-${pkg.id}`))
//                   )}
//             </div>
//           </div>

//           {/* Right Arrow (Desktop only) */}
//           {/* {!isMobile && (
//             <button
//               onClick={() => handleScroll(-1)}
//               className="text-orange-500 text-3xl px-2 hover:text-orange-600 transition"
//               aria-label="Scroll right"
//             >
//               <FaCaretRight />
//             </button>
//           )} */}
//         </div>
//       </div>
//     </section>
//   );
// };

// ExclusivePackages.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   customClass: PropTypes.string,
// };

// export default ExclusivePackages;


import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FaSun,
  FaMoon,
  FaHotel,
} from "react-icons/fa";
import gsap from "gsap";

const CLONE_COUNT = 5;

const ExclusivePackages = ({ title, description, customClass = "" }) => {
  const [data, setData] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const isManualScrolling = useRef(false);

  /* ================= MOBILE CHECK ================= */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= FETCH API ================= */
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch("http://localhost:5000/getpackage");
        const json = await res.json();

        const exclusive = (json || []).filter(
          (pkg) =>
            Array.isArray(pkg.classification) &&
            pkg.classification.includes("Exclusive")
        );

        const formatted = exclusive.map((pkg) => ({
          id: pkg._id,
          title: pkg.title,
          price: pkg.pricing?.standard_price || "On Request",
          duration: pkg.duration || "3N / 4D",
          description:
            pkg.destination_detail?.slice(0, 100) + "..." || "",
          image:
            pkg.destination_thumbnails?.[0] ||
            pkg.media?.[0] ||
            "/images/default-package.jpg",
          link: `/itineraries/${pkg._id}`,
        }));

        setData(formatted);
      } catch (err) {
        console.error("Exclusive package fetch error:", err);
      }
    };

    fetchPackages();
  }, []);

  /* ================= GSAP AUTO SCROLL (DESKTOP ONLY) ================= */
  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }

    if (isMobile || !containerRef.current || data.length === 0) {
      if (containerRef.current) {
        gsap.set(containerRef.current, { clearProps: "all" });
      }
      return;
    }

    const cardWidth = 280;
    const totalWidth = cardWidth * data.length;

    gsap.set(containerRef.current, { x: -totalWidth });

    animationRef.current = gsap.to(containerRef.current, {
      x: 0,
      duration: 110,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const val = parseFloat(x);
          return (((val % totalWidth) + totalWidth) % totalWidth) - totalWidth;
        }),
      },
    });

    return () => {
      animationRef.current?.kill();
      animationRef.current = null;
    };
  }, [data, isMobile]);

  /* ================= CARD ================= */
  const Card = (pkg, key) => (
    <div
      key={key}
      className="w-[240px] sm:w-[260px] flex-shrink-0 mx-3 bg-white rounded-2xl border border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link to={pkg.link} className="block p-4 no-underline">
        {/* Image */}
        <div className="rounded-xl overflow-hidden mb-4">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-[200px] sm:h-[230px] object-cover"
          />
        </div>

        {/* Title + Price */}
        <div className="flex justify-between gap-2 mb-2">
          <h4 className="text-sm font-extrabold text-gray-800 leading-tight line-clamp-2">
            {pkg.title}
          </h4>
          <p className="text-sm font-extrabold text-gray-900 whitespace-nowrap">
            ₹{pkg.price}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs font-medium text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {pkg.description}
        </p>

        {/* Icons */}
        <div className="flex justify-between text-[11px] font-bold text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <FaSun className="text-orange-400" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <FaMoon className="text-indigo-400" />
            Nights
          </span>
          <span className="flex items-center gap-1">
            <FaHotel />
            Hotel
          </span>
        </div>

        {/* CTA */}
        <div className="text-center">
          <span className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-6 py-2 rounded-md transition">
            View Package
          </span>
        </div>
      </Link>
    </div>
  );

  return (
    <section className={`bg-white py-12 md:py-16 ${customClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* ===== TITLE + VIEW ALL ===== */}
        <div className="relative mb-10 md:mb-14">
          <p className="text-center text-xl md:text-2xl font-extrabold text-orange-500">
            {title}
          </p>

          <Link
            to="/packages/exclusive"
            className="
              absolute right-0 top-1/2 -translate-y-1/2
              text-sm md:text-base font-bold
              text-orange-500 hover:text-orange-600
              transition
            "
          >
            View All →
          </Link>
        </div>

        {/* ===== SLIDER ===== */}
        <div className={`flex-1 ${isMobile ? "overflow-x-auto" : "overflow-hidden"}`}>
          <div
            ref={containerRef}
            className="flex"
            style={isMobile ? { transform: "translate3d(0,0,0)" } : undefined}
          >
            {isMobile
              ? data.map((pkg) => Card(pkg, `m-${pkg.id}`))
              : Array.from({ length: CLONE_COUNT }).flatMap((_, i) =>
                  data.map((pkg) => Card(pkg, `d-${i}-${pkg.id}`))
                )}
          </div>
        </div>
      </div>
    </section>
  );
};

ExclusivePackages.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  customClass: PropTypes.string,
};

export default ExclusivePackages;
