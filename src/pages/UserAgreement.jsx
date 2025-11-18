import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';


const UserAgreement = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Animation for staggered text appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div>
        <NavBar/>
    <div className="w-full min-h-screen overflow-x-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="h-[60vh] w-full bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center flex items-center justify-center relative overflow-hidden"
        style={{ y: backgroundY }}
      >
        <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-white p-8 text-center">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            User Agreement
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl"
          >
            Please read these terms carefully before using our services
          </motion.p>
        </div>
      </motion.div>
      
      {/* Agreement Content */}
      <div className="w-full py-16 px-4 sm:px-8 bg-gray-50" ref={ref}>
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section 
            variants={itemVariants}
            className="mb-12 p-6 bg-white rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the Admire Holidays website, you agree to be bound by these Terms of Service. 
              If you do not agree to all the terms and conditions, you may not access the website or use any services.
            </p>
          </motion.section>
          
          <motion.section 
            variants={itemVariants}
            className="mb-12 p-6 bg-white rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Booking and Reservations</h2>
            <p className="text-gray-700 leading-relaxed">
              All bookings are subject to availability. Prices are subject to change without notice until the booking is confirmed. 
              You must be at least 18 years old to make a booking.
            </p>
          </motion.section>
          
          <motion.section 
            variants={itemVariants}
            className="mb-12 p-6 bg-white rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Full payment is required at the time of booking unless otherwise specified. We accept major credit cards and other payment methods as indicated on our website.
            </p>
          </motion.section>
          
          <motion.section 
            variants={itemVariants}
            className="mb-12 p-6 bg-white rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cancellation Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Cancellations made more than 30 days prior to arrival will receive a full refund. Cancellations made within 30 days are subject to a cancellation fee.
            </p>
          </motion.section>
          
          <motion.section 
            variants={itemVariants}
            className="mb-12 p-6 bg-white rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for details on how we collect, use, and disclose information.
            </p>
          </motion.section>
          
          <motion.section 
            variants={itemVariants}
            className="mb-12 p-6 bg-white rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              Admire Holidays shall not be liable for any damages, including without limitation, direct, indirect, incidental, special, consequential or punitive damages.
            </p>
          </motion.section>
          
          <motion.section 
            variants={itemVariants}
            className="mb-12 p-6 bg-white rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Admire Holidays is registered.
            </p>
          </motion.section>
          
          <motion.div 
            variants={itemVariants}
            className="text-center p-8 bg-white rounded-lg shadow-sm mt-8"
          >
            <p className="text-gray-700 mb-6">By using our website, you acknowledge that you have read, understood, and agree to be bound by these terms.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              I Accept the Terms
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default UserAgreement;