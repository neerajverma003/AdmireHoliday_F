import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const contactData = [
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    text: "34, Sewak Park (1st floor), Dwarka More Metro, Near Metro Pillar No-772, New Delhi - 110059",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone Number",
    text: "1800-121-4252",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    text: "info@admireholidays.com",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    text: "Mon - Sat: 10 AM - 6 PM\nSunday: Closed",
  },
];

const ContactCards = () => {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="
                  bg-[#F1F1F1]
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
                {/* ICON CIRCLE */}
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
                    <Icon />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
