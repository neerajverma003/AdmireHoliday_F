
// import React from "react";
// import {
//   FaGlobeAsia,
//   FaCoins,
//   FaPlane,
//   FaLifeRing,
// } from "react-icons/fa";
// import Whychosse1 from "../assets/images/Whychosse1.png";
// import Whychoose2 from "../assets/images/Whychoose2.png";
// import Whychoose3 from "../assets/images/Whychoose3.png";
// import Whychoose4 from "../assets/images/Whychoose4.png";
// const features = [
//   {
//     icon: <FaGlobeAsia size={50} className="text-blue-500" />,
//     title: "Global vibes",
//     desc: "Authentic experiences Worldwide",
//   },
//   {
//     icon: <FaCoins size={50} className="text-yellow-500" />,
//     title: "Epic Deals",
//     desc: "Unbeatable Value Always",
//   },
//   {
//     icon: <FaPlane size={50} className="text-blue-600" />,
//     title: "Travel Squad",
//     desc: "Unbeatable Support Always",
//   },
//   {
//     icon: <FaLifeRing size={50} className="text-red-500" />,
//     title: "Secure Trips",
//     desc: "Safe & Trusted Always",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="w-full py-20 bg-white">
//       {/* ✅ HEADING */}
//       <div className="text-center mb-14">
//         <p className="text-orange-500 font-semibold text-sm mb-2">
//           Why Choose Admire Holidays
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Why We Are Your Travel Fam
//         </h2>
//       </div>

//       {/* ✅ CARDS */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-2xl shadow-md p-10 text-center hover:shadow-xl transition duration-300"
//             >
//               <div className="flex justify-center mb-6">
//                 {item.icon}
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

// import React from "react";
import Whychosse1 from "../assets/Whychosse1.png";
import Whychoose2 from "../assets/whychoose2.png";
import Whychoose3 from "../assets/whychoose3.png";
import Whychoose4 from "../assets/Whychoose4.png";

const features = [
  {
    img: Whychosse1,
    title: "Global vibes",
    desc: "Authentic experiences Worldwide",
  },
  {
    img: Whychoose2,
    title: "Epic Deals",
    desc: "Unbeatable Value Always",
  },
  {
    img: Whychoose3,
    title: "Travel Squad",
    desc: "Unbeatable Support Always",
  },
  {
    img: Whychoose4,
    title: "Secure Trips",
    desc: "Safe & Trusted Always",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-[#E9E9E987] overflow-x-hidden">
      {/* ===== HEADING ===== */}
      <div className="text-center mb-10 md:mb-14 px-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
          Why Choose Admire Holidays
        </p>
        {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Why We Are Your Travel Fam
        </h2> */}
      </div>

      {/* ===== CARDS ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-gray-50
                rounded-2xl
                shadow-md
                p-6 sm:p-8 md:p-10
                text-center
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
              "
            >
              {/* IMAGE ICON */}
              <div className="flex justify-center mb-5 md:mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
