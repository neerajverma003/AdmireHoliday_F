import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import HeroReusable from '../Components/heroSection/HeroReusable';
import SubscribeUs from '../forms/SubscribeUs';

const PrivacyAndTerms = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mounted, setMounted] = useState(false);

  // Handle initial mount to prevent flash of invisible content
  useEffect(() => {
    setMounted(true);
  }, []);

  // Improved scroll detection with throttling
  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const sections = document.querySelectorAll('[data-section]');
        const newVisibleSections = new Set();
        
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const threshold = window.innerHeight * 0.8; // Show when 80% into viewport
          
          if (rect.top < threshold && rect.bottom > 0) {
            newVisibleSections.add(section.dataset.section);
          }
        });
        
        setVisibleSections(newVisibleSections);
      }, 16); // ~60fps throttling
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const SectionCard = ({ sectionId, title, children, delay = 0 }) => {
    const isVisible = mounted && visibleSections.has(sectionId);
    
    return (
      <div 
        data-section={sectionId}
        className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          transform: isVisible ? 'none' : 'translateY(32px)',
          transitionDelay: isVisible ? `${delay}ms` : '0ms'
        }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-blue-500 pb-2">
          {title}
        </h2>
        <div className="space-y-3 text-gray-700">
          {children}
        </div>
      </div>
    );
  };

  return (

    <div>
        <NavBar/>


        <HeroReusable 
                videoSrc="src/assets/videos/Hero-blog.mp4"
                title="Privacy Policy"
              />
    <div className="min-h-screen bg-gray-50 py-12">
      <section 
        className={`max-w-5xl mx-auto px-6 py-16 transition-opacity duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="space-y-16">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy & Terms of Service
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <SectionCard sectionId="privacy-policy" title="Privacy Policy" delay={100}>
            <p className="leading-relaxed">
              At AdmireHolidays, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us through our website and services.
            </p>
            <p className="leading-relaxed">
              • We may collect personal information such as your name, contact details, email address, and travel preferences when you make inquiries, bookings, or sign up for our services.
            </p>
            <p className="leading-relaxed">
              • We use this information to personalize your experience, provide the services you request, communicate with you, and improve our offerings.
            </p>
            <p className="leading-relaxed">
              • Your payment information is securely processed through trusted third-party payment processors, and we do not store your payment details.
            </p>
          </SectionCard>

          <SectionCard sectionId="information-sharing" title="Information Sharing" delay={150}>
            <p className="leading-relaxed">
              • We do not sell, trade, or rent your personal information to third parties.
            </p>
            <p className="leading-relaxed">
              • We may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, as long as they agree to keep this information confidential.
            </p>
            <p className="leading-relaxed">
              • We may also share your information when required by law or to protect our rights, property, or safety, or that of others.
            </p>
          </SectionCard>

          <SectionCard sectionId="data-security" title="Data Security" delay={200}>
            <p className="leading-relaxed">
              • We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="leading-relaxed">
              • However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </SectionCard>

          <SectionCard sectionId="cookies" title="Cookies" delay={250}>
            <p className="leading-relaxed">
              • We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.
            </p>
            <p className="leading-relaxed">
              • You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
            </p>
          </SectionCard>

          <SectionCard sectionId="third-party-links" title="Third-Party Links" delay={300}>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites, which have their own privacy policies. We are not responsible for the privacy practices or content of these websites.
            </p>
          </SectionCard>

          <SectionCard sectionId="privacy-updates" title="Updates to Privacy Policy" delay={350}>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time, and any changes will be reflected on this page. We encourage you to review this Policy periodically.
            </p>
            <p className="leading-relaxed">
              By using our website and services, you consent to the collection and use of your information as described in this Privacy Policy.
            </p>
          </SectionCard>

          <SectionCard sectionId="terms-conditions" title="Terms and Conditions" delay={400}>
            <p className="leading-relaxed">
              Please read these Terms and Conditions carefully before using our website or booking our services.
            </p>
          </SectionCard>

          <SectionCard sectionId="agreement" title="1. Agreement" delay={450}>
            <p className="leading-relaxed">
              By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms, you may not use our website or services.
            </p>
          </SectionCard>

          <SectionCard sectionId="booking-payments" title="2. Booking and Payments" delay={500}>
            <p className="leading-relaxed">
              • All bookings are subject to availability and confirmation.
            </p>
            <p className="leading-relaxed">
              • Prices listed on our website are in the currency specified and are subject to change without notice.
            </p>
            <p className="leading-relaxed">
              • Payments must be made in full at the time of booking unless otherwise specified.
            </p>
          </SectionCard>

          <SectionCard sectionId="cancellations-refunds" title="3. Cancellations and Refunds" delay={550}>
            <p className="leading-relaxed">
              • Cancellation policies vary depending on the service booked. Please refer to the specific terms provided at the time of booking.
            </p>
            <p className="leading-relaxed">
              • Refunds, if applicable, will be processed in accordance with our cancellation policy.
            </p>
          </SectionCard>

          <SectionCard sectionId="intellectual-property" title="4. Intellectual Property" delay={600}>
            <p className="leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software, is the property of TripToHoneymoon and is protected by copyright and other intellectual property laws.
            </p>
          </SectionCard>

          <SectionCard sectionId="limitation-liability" title="5. Limitation of Liability" delay={650}>
            <p className="leading-relaxed">
              We are not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our website or services.
            </p>
          </SectionCard>

          <SectionCard sectionId="governing-law" title="6. Governing Law" delay={700}>
            <p className="leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
            </p>
          </SectionCard>

          <SectionCard sectionId="contact-us" title="Contact Us" delay={750}>
            <p className="leading-relaxed">
              • Address: 34, Sewak Park (1st floor), Dwarka more metro, Near metro pillar no772, New Delhi 110059.
            </p>
            <p className="leading-relaxed">
              • Phone: 011-40612834
            </p>
            <p className="leading-relaxed">
              • Email: info@admireholidays.com
            </p>
            <p className="leading-relaxed">
              • Website: https://admireholidays.com
            </p>
            <p className="leading-relaxed">
              • Business Hours: 10:00 AM to 06:00 PM
            </p>
            <p className="leading-relaxed">
              Thank you for choosing Admire Holidays. We look forward to making your honeymoon unforgettable!
            </p>
          </SectionCard>
        </div>
      </section>
    </div>


    <SubscribeUs/>


    <Footer/>
    </div>
  );
};

export default PrivacyAndTerms;