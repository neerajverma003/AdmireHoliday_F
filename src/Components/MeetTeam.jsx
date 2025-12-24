import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sandeep",
    role: "CEO Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Renu Thakur",
    role: "Admin",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Tanu Sharma",
    role: "HR Head",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Neeraj Verma",
    role: "IT Head",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pt-14 pb-20 text-center bg-white">
      {/* 👆 pt-14 instead of huge padding */}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <span className="text-center text-xl md:text-2xl font-extrabold text-orange-500">
          Meet Our Team
        </span>
        {/* <h2 className="text-2xl md:text-3xl font-bold mt-2">
          The Admire Holidays Team
        </h2> */}
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="bg-gray-50 rounded-xl shadow-sm py-8 px-6 flex flex-col items-center"
          >
            {/* Image */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-md overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-orange-500 font-semibold text-base">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-gray-500 text-sm mt-1">
              {member.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
