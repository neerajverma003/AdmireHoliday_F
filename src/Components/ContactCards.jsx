import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    text: "34, Sewak Park, 1st floor, Dwarka More Metro, Near Metro Pillar No-772, New Delhi - 110059",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    text: "1800-121-4252",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: "info@admireholidays.com",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    text: "Mon - Sat: 10 AM - 6 PM\nSunday: Closed",
  },
];

const ContactInfoCards = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                bg-[#F2F2F2]
                rounded-2xl
                px-6
                py-10
                text-center
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              {/* ICON */}
              <div className="flex justify-center mb-6">
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-orange-200
                    flex
                    items-center
                    justify-center
                    text-orange-500
                    text-xl
                  "
                >
                  {card.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>

              {/* TEXT */}
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
