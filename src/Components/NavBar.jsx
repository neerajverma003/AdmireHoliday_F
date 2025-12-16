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
        {/* overflow-visible added */}
        <div className="h-[72px] flex items-center justify-between overflow-visible">
          
          {/* LOGO */}
          <NavLink to="/" className="flex items-center h-full overflow-visible">
            <img
              src={logo}
              alt="Admire"
              className="
                h-7 md:h-8
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
