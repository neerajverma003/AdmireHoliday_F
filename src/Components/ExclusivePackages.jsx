import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FaSun,
  FaMoon,
  FaHotel,
  FaCar,
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa";
import gsap from "gsap";

const CLONE_COUNT = 5;

const ExclusivePackages = ({ title, description, customClass = "" }) => {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const isManualScrolling = useRef(false);

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
          price: pkg.pricing?.standard_price,
          duration: pkg.duration,
          description: pkg.destination_detail?.slice(0, 110) + "...",
          image:
            pkg.destination_thumbnails?.[0] || "/images/default-package.jpg",
          link: `/itineraries/${pkg._id}`,
        }));

        setData(formatted);
      } catch (err) {
        console.error("Package fetch error:", err);
      }
    };

    fetchPackages();
  }, []);

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    if (!containerRef.current || data.length === 0) return;

    animationRef.current?.kill();

    const cardWidth = 280;
    const totalWidth = cardWidth * data.length;

    gsap.set(containerRef.current, { x: -totalWidth });

    animationRef.current = gsap.to(containerRef.current, {
      x: 0,
      duration: 7,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const val = parseFloat(x);
          return (((val % totalWidth) + totalWidth) % totalWidth) - totalWidth;
        }),
      },
    });

    return () => animationRef.current?.kill();
  }, [data]);

  /* ================= MANUAL ================= */
  const handleScroll = (dir) => {
    if (isManualScrolling.current) return;

    isManualScrolling.current = true;
    animationRef.current?.pause();

    const cardWidth = 280;
    const totalWidth = cardWidth * data.length;
    const currentX = gsap.getProperty(containerRef.current, "x");
    let newX = currentX + dir * cardWidth;

    if (newX > 0) newX -= totalWidth;
    if (newX < -totalWidth) newX += totalWidth;

    gsap.to(containerRef.current, {
      x: newX,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        isManualScrolling.current = false;
        setTimeout(() => animationRef.current?.play(), 2000);
      },
    });
  };

  /* ================= CARD ================= */
  const Card = (pkg, key) => (
    <div
      key={key}
      className="w-[260px] flex-shrink-0 mx-3 bg-white rounded-2xl border border-orange-300 shadow-sm hover:shadow-lg transition"
    >
      <Link to={pkg.link} className="block p-4">
        {/* Image */}
        <div className="rounded-xl overflow-hidden mb-4">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-[230px] object-cover"
          />
        </div>

        {/* Title + Price */}
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-sm font-extrabold text-gray-800 leading-tight">
            {pkg.title}
          </h4>
          <p className="text-sm font-extrabold text-gray-800">₹{pkg.price}</p>
        </div>

        {/* Description */}
        <p className="text-xs font-semibold text-gray-600 leading-relaxed mb-4">
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
            <FaHotel /> Hotel
          </span>
          {/* <span className="flex items-center gap-1">
            <FaCar /> Transport
          </span> */}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-6 py-2 rounded-md transition">
            View Package
          </button>
        </div>
      </Link>
    </div>
  );

  return (
    <section className={`bg-white py-16 ${customClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-bold mb-2">{title}</p>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
            {description}
          </h2>
        </div>

        {/* Slider */}
        <div className="flex items-center">
          <button
            onClick={() => handleScroll(1)}
            className="text-orange-500 text-3xl px-2"
          >
            <FaCaretLeft />
          </button>

          <div className="flex-1 overflow-hidden">
            <div ref={containerRef} className="flex">
              {Array.from({ length: CLONE_COUNT }).map((_, i) =>
                data.map((pkg, j) => Card(pkg, `${i}-${j}`))
              )}
            </div>
          </div>

          <button
            onClick={() => handleScroll(-1)}
            className="text-orange-500 text-3xl px-2"
          >
            <FaCaretRight />
          </button>
        </div>
      </div>
    </section>
  );
};

ExclusivePackages.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default ExclusivePackages;