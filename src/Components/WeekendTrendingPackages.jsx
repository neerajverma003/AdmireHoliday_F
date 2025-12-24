import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import gsap from "gsap";

const CLONE_COUNT = 5;

/* ================= WORD LIMIT FUNCTION ================= */
const truncateWords = (text = "", limit = 20) => {
  const words = text.split(" ");
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + " ...";
};

const WeekendTrendingPackages = ({ title, description, customClass = "" }) => {
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

        const filtered = (json || []).filter(
          (pkg) =>
            Array.isArray(pkg.classification) &&
            pkg.classification.includes("weekend") &&
            pkg.classification.includes("Trending")
        );

        const formatted = filtered.slice(0, 4).map((pkg) => ({
          id: pkg._id,
          title: pkg.title || "Weekend Getaway",
          price:
            typeof pkg.pricing === "object" && pkg.pricing.standard_price
              ? pkg.pricing.standard_price
              : "On Request",
          duration: pkg.duration || "2D / 1N",
          location:
            pkg.days_information?.[0]?.locationDetail ||
            "Popular Destination",
          image:
            pkg.destination_thumbnails?.[0] ||
            "/images/default-package.jpg",
          link: `/itineraries/${pkg._id}`,
          rating: 4.5,
        }));

        setData(formatted);
      } catch (err) {
        console.error(err);
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
      duration: 105,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const val = parseFloat(x);
          return ((val % totalWidth) + totalWidth) % totalWidth - totalWidth;
        }),
      },
    });

    return () => animationRef.current?.kill();
  }, [data]);

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
          <p className="text-sm font-extrabold text-gray-800">
            ₹{pkg.price}
          </p>
        </div>

        {/* DESCRIPTION – 20 WORD LIMIT */}
        <p className="text-xs font-semibold text-gray-600 leading-relaxed mb-4">
          {truncateWords(pkg.location, 20)}
        </p>

        {/* Icons */}
        <div className="flex justify-between text-[11px] font-bold text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <FaClock className="text-orange-400" /> {pkg.duration}
          </span>
          <span>⭐ {pkg.rating}</span>
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
        {/* ===== HEADER ===== */}
        <div className="relative mb-12">
          <p className="text-center text-xl md:text-2xl font-extrabold text-orange-500">
            {title}
          </p>

          <Link
            to="/packages/trending"
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
        <div className="flex items-center">
          <div className="flex-1 overflow-hidden">
            <div ref={containerRef} className="flex">
              {Array.from({ length: CLONE_COUNT }).map((_, i) =>
                data.map((pkg, j) => Card(pkg, `${i}-${j}`))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WeekendTrendingPackages.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  customClass: PropTypes.string,
};

export default WeekendTrendingPackages;
