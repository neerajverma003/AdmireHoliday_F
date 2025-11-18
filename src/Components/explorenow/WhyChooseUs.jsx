import React from 'react';
import {
  Award,
  Shield,
  Star,
  CheckCircle,
  UserCheck,
  User,
  Eye,
  Headphones,
} from 'lucide-react';
import { motion } from 'framer-motion';
 
const WhyChooseUs = () => {
  const iconItems = [
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: 'Knowledgeable Team',
      desc: 'Our guides bring local stories and practical insights to every trip.',
      bg: 'bg-blue-100',
    },
    {
      icon: <Shield className="w-10 h-10 text-green-600" />,
      title: 'Focused on Safety',
      desc: 'We prioritize secure travel experiences with careful planning.',
      bg: 'bg-green-100',
    },
    {
      icon: <Star className="w-10 h-10 text-amber-600" />,
      title: 'Reliable Assistance',
      desc: 'Questions or concerns? We’re just a message away, ready to help.',
      bg: 'bg-amber-100',
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-purple-600" />,
      title: 'Customized Quotes',
      desc: 'Every journey is unique — we provide tailored plans and pricing based on your preferences.',
      bg: 'bg-purple-100',
    },
  ];
 
  const detailItems = [
    {
      icon: <UserCheck className="w-10 h-10 text-blue-600" />,
      title: 'Trusted Service',
      desc: 'Each traveler is different, so we offer flexible planning that fits your style, budget, and goals.',
      bg: 'bg-blue-100',
    },
    {
      icon: <User className="w-10 h-10 text-green-600" />,
      title: 'Personalized Service',
      desc: 'No two travelers are the same — we listen, adapt, and design bespoke journeys just for you.',
      bg: 'bg-green-100',
    },
    {
      icon: <Eye className="w-10 h-10 text-amber-600" />,
      title: 'Honest Approach',
      desc: 'We keep things simple, clear, and upfront so you always know what to expect.',
      bg: 'bg-amber-100',
    },
    {
      icon: <Headphones className="w-10 h-10 text-purple-600" />,
      title: 'Responsive Support',
      desc: 'We respond quickly and care about your experience before, during, and after your trip.',
      bg: 'bg-purple-100',
    },
  ];
 
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-bold bg-white p-4 mb-4"
          style={{ color: 'rgb(44, 135, 128)' }}
        >
          Why Choose Admire Holidays
        </h2>
 
        <p className="text-xl text-gray-600 mb-12">
          We go beyond bookings — we create experiences that matter.
        </p>
 
        {/* Top Icon Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {iconItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <motion.div
                className={`w-20 h-20 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 transition-shadow duration-300 shadow-md hover:shadow-xl`}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-primaryHeading mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
 
        {/* Bottom Detail Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {detailItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <motion.div
                className={`w-20 h-20 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 transition-shadow duration-300 shadow-md hover:shadow-xl`}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-primaryHeading mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default WhyChooseUs;