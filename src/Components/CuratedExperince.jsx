import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Luxury Escapes",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Honeymoon Special",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c7",
  },
  {
    title: "City Advantages",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
  },
  {
    title: "Island Holidays",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

const Card = ({ image, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.35 }}
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* heart */}
      {/* <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center"> */}
        {/* <span className="text-orange-500 text-sm">♡</span> */}
      {/* </div> */}

      {/* title */}
      <div className="absolute bottom-4 left-4">
        <p className="text-white font-semibold text-sm md:text-base">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

const CuratedInternationalExperiences = () => {
  return (
    <section className="bg-[#C3C3C3] py-16">
      {/* TITLE */}
      <h2 className="text-center text-xl md:text-2xl font-extrabold text-orange-500  mb-12">
        Curated International Experiences
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-6 h-[500px]">
          {/* LEFT LARGE */}
          <div className="col-span-2 row-span-2">
            <Card {...data[0]} />
          </div>

          {/* TOP RIGHT SMALL */}
          <div className="col-span-1 row-span-1">
            <Card {...data[1]} />
          </div>

          <div className="col-span-1 row-span-1">
            <Card {...data[2]} />
          </div>

          {/* BOTTOM RIGHT WIDE */}
          <div className="col-span-2 row-span-1">
            <Card {...data[3]} />
          </div>
        </div>

        {/* MOBILE */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {data.map((item, i) => (
            <div key={i} className="h-[220px]">
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedInternationalExperiences;
