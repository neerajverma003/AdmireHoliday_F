// import React, { useState, useEffect } from 'react';
// import Footer from '../Components/Footer';
// import NavBar from '../Components/NavBar';
// import HeroReusable from '../Components/heroSection/HeroReusable';
// import SubscribeUs from '../forms/SubscribeUs';
 
// const TermsAndConditions = () => {
//   const [visibleSections, setVisibleSections] = useState(new Set());
//   const [mounted, setMounted] = useState(false);
 
//   // Handle initial mount to prevent flash of invisible content
//   useEffect(() => {
//     setMounted(true);
//   }, []);
 
//   // Improved scroll detection with throttling
//   useEffect(() => {
//     let timeoutId = null;
 
//     const handleScroll = () => {
//       if (timeoutId) clearTimeout(timeoutId);
     
//       timeoutId = setTimeout(() => {
//         const sections = document.querySelectorAll('[data-section]');
//         const newVisibleSections = new Set();
       
//         sections.forEach(section => {
//           const rect = section.getBoundingClientRect();
//           const threshold = window.innerHeight * 0.8; // Show when 80% into viewport
         
//           if (rect.top < threshold && rect.bottom > 0) {
//             newVisibleSections.add(section.dataset.section);
//           }
//         });
       
//         setVisibleSections(newVisibleSections);
//       }, 16); // ~60fps throttling
//     };
 
//     // Initial check
//     handleScroll();
   
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     window.addEventListener('resize', handleScroll, { passive: true });
   
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleScroll);
//       if (timeoutId) clearTimeout(timeoutId);
//     };
//   }, []);
 
//   const SectionCard = ({ sectionId, title, children, delay = 0 }) => {
//     const isVisible = mounted && visibleSections.has(sectionId);
   
//     return (
//       <div
//         data-section={sectionId}
//         className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 transition-all duration-700 ease-out ${
//           isVisible
//             ? 'opacity-100'
//             : 'opacity-0 translate-y-8'
//         }`}
//         style={{
//           transform: isVisible ? 'none' : 'translateY(32px)',
//           transitionDelay: isVisible ? `${delay}ms` : '0ms'
//         }}
//       >
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-blue-500 pb-2">
//           {title}
//         </h2>
//         <div className="space-y-3 text-gray-700">
//           {children}
//         </div>
//       </div>
//     );
//   };
 
//   return (
 
//     <div>
//         <NavBar/>
 
 
       
//     <div className="min-h-screen bg-gray-50 py-12">
//       <section
//         className={`max-w-5xl mx-auto px-6 py-16 transition-opacity duration-1000 ${
//           mounted ? 'opacity-100' : 'opacity-0'
//         }`}
//       >
//         <div className="space-y-16">
//           {/* Header */}
//           <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
//             mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
//           }`}>
//             <h1 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Terms and Conditions of Admire Holidays
//             </h1>
           
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
//           </div>
 
//           <SectionCard sectionId="privacy-policy" title="1. Acceptance of Terms" delay={100}>
//             <p className="leading-relaxed">
//               By accessing or using the services provided by Admire Holidays through our  <a href="https://www.admireholidays.com" target="_blank" rel="noopener noreferrer" class="text-[#E63946] hover:underline">www.admireholidays.com.</a>, you agree to be bound by the following terms and conditions. If you do not agree with any part of these terms and conditions, you may not access or use our services.
//             </p>
           
//           </SectionCard>
 
//           <SectionCard sectionId="information-sharing" title="2. Booking and Payments" delay={150}>
//             <p className="leading-relaxed">
//               <span className="font-bold">2.1.</span> Booking Confirmation: All bookings made through Admire Holidays are subject to availability and confirmation. We reserve the right to accept or reject any booking request.
//             </p>
//             <p className="leading-relaxed">
//               <span className='font-bold'>2.2.</span> Payment: Full payment is required at the time of booking unless otherwise specified. Payment methods accepted are listed on our website. Prices are quoted in the currency specified and are subject to change without notice.
//             </p>
//             <p className="leading-relaxed">
//               <span className="font-bold">2.3.</span> Additional Charges: Any additional charges incurred during your trip, including but not limited to, optional activities, meals, transportation, and personal expenses, are your responsibility.
//             </p>
//           </SectionCard>
 
//           <SectionCard sectionId="data-security" title="3. Cancellations and Refunds" delay={200}>
//             <p className="leading-relaxed">
//               <span className="font-bold">3.1.</span> Cancellation Policy: Cancellation fees may apply depending on the terms and conditions of the service providers (e.g., airlines, hotels, tour operators) and the timing of the cancellation. Details of our cancellation policy are available on our website.
//             </p>
//             <p className="leading-relaxed">
//               <span className="font-bold">3.2.</span> Refunds: Refunds, if applicable, will be processed in accordance with the cancellation policy and may be subject to administrative fees.
//             </p>
//           </SectionCard>
 
//           <SectionCard sectionId="cookies" title="4. Travel Documents and Insurance" delay={250}>
//             <p className="leading-relaxed">
//               <span className="font-bold">4.1.</span> Travel Documents: It is your responsibility to ensure that you possess valid passports, visas, and any other required travel documents for your trip. Admire Holidays is not liable for any consequences resulting from inadequate documentation.
//             </p>
//             <p className="leading-relaxed">
//               <span className="font-bold">4.2.</span> Travel Insurance: We strongly recommend purchasing travel insurance to protect yourself against unforeseen circumstances such as trip cancellations, medical emergencies, and lost luggage.
//             </p>
//           </SectionCard>
 
//           <SectionCard sectionId="third-party-links" title="5. Changes and Amendments" delay={300}>
//             <p className="leading-relaxed">
//               <span className="font-bold">5.1.</span> Changes by You: Any requests for changes or amendments to your booking must be made in writing and are subject to availability and approval by Admire Holidays and the relevant service providers. Additional charges may apply.
//             </p>
//             <p className="leading-relaxed">
//               <span className="font-bold">5.2.</span> Changes by Admire Holidays: We reserve the right to make changes to your itinerary, accommodations, transportation, and other aspects of your trip if necessary due to unforeseen circumstances or events beyond our control. We will make reasonable efforts to notify you of any changes as soon as possible.
//             </p>
//           </SectionCard>
 
//           <SectionCard sectionId="privacy-updates" title="6. Liability" delay={350}>
//             <p className="leading-relaxed">
//               <span className="font-bold">6.1.</span> Limitation of Liability: Admire Holidays acts as an intermediary between you and the service providers (e.g., airlines, hotels, tour operators) and is not liable for any loss, injury, damage, or delay arising from the acts or omissions of these third parties.
//             </p>
//             <p className="leading-relaxed">
//               <span className="font-bold">6.2.</span> Indemnification: You agree to indemnify and hold Admire Holidays harmless from any claims, liabilities, damages, costs, or expenses (including legal fees) arising from your use of our services or your violation of these terms and conditions.
//             </p>
//           </SectionCard>
 
//           <SectionCard sectionId="terms-conditions" title="7. Governing Law and Jurisdiction" delay={400}>
//             <p className="leading-relaxed">
//               These terms and conditions shall be governed by and construed in accordance with the laws of [insert jurisdiction]. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [insert jurisdiction].
//             </p>
//           </SectionCard>
 
//           <SectionCard sectionId="agreement" title="8. Contact Information" delay={450}>
//             <p className="leading-relaxed">
//               If you have any questions or concerns about these terms and conditions, please contact us at [insert contact information].
//             </p>
//             <p className="leading-relaxed">
//               By using the services of Admire Holidays, you acknowledge that you have read, understood, and agreed to abide by these terms and conditions.
//             </p>
//           </SectionCard>
 
         
 
         
//         </div>
//       </section>
//     </div>
 
 
 
 
//     <Footer/>
//     </div>
//   );
// };
 
// export default TermsAndConditions;

import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import HeroReusable from '../Components/heroSection/HeroReusable';
import SubscribeUs from '../forms/SubscribeUs';
 
const TermsAndConditions = () => {
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
              Terms and Conditions of Admire Holidays
            </h1>
           
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>
 
          <SectionCard sectionId="privacy-policy" title="1. Acceptance of Terms" delay={100}>
            <p className="leading-relaxed">
              By accessing or using the services provided by Admire Holidays through our  <a href="https://www.admireholidays.com" target="_blank" rel="noopener noreferrer" class="text-[#E63946] hover:underline">www.admireholidays.com.</a>, you agree to be bound by the following terms and conditions. If you do not agree with any part of these terms and conditions, you may not access or use our services.
            </p>
           
          </SectionCard>
 
          <SectionCard sectionId="information-sharing" title="2. Booking and Payments" delay={150}>
            <p className="leading-relaxed">
              <span className="font-bold">2.1.</span> Booking Confirmation: All bookings made through Admire Holidays are subject to availability and confirmation. We reserve the right to accept or reject any booking request.
            </p>
            <p className="leading-relaxed">
              <span className='font-bold'>2.2.</span> Payment: Full payment is required at the time of booking unless otherwise specified. Payment methods accepted are listed on our website. Prices are quoted in the currency specified and are subject to change without notice.
            </p>
            <p className="leading-relaxed">
              <span className="font-bold">2.3.</span> Additional Charges: Any additional charges incurred during your trip, including but not limited to, optional activities, meals, transportation, and personal expenses, are your responsibility.
            </p>
          </SectionCard>
 
          <SectionCard sectionId="data-security" title="3. Cancellations and Refunds" delay={200}>
            <p className="leading-relaxed">
              <span className="font-bold">3.1.</span> Cancellation Policy: Cancellation fees may apply depending on the terms and conditions of the service providers (e.g., airlines, hotels, tour operators) and the timing of the cancellation. Details of our cancellation policy are available on our website.
            </p>
            <p className="leading-relaxed">
              <span className="font-bold">3.2.</span> Refunds: Refunds, if applicable, will be processed in accordance with the cancellation policy and may be subject to administrative fees.
            </p>
          </SectionCard>
 
          <SectionCard sectionId="cookies" title="4. Travel Documents and Insurance" delay={250}>
            <p className="leading-relaxed">
              <span className="font-bold">4.1.</span> Travel Documents: It is your responsibility to ensure that you possess valid passports, visas, and any other required travel documents for your trip. Admire Holidays is not liable for any consequences resulting from inadequate documentation.
            </p>
            <p className="leading-relaxed">
              <span className="font-bold">4.2.</span> Travel Insurance: We strongly recommend purchasing travel insurance to protect yourself against unforeseen circumstances such as trip cancellations, medical emergencies, and lost luggage.
            </p>
          </SectionCard>
 
          <SectionCard sectionId="third-party-links" title="5. Changes and Amendments" delay={300}>
            <p className="leading-relaxed">
              <span className="font-bold">5.1.</span> Changes by You: Any requests for changes or amendments to your booking must be made in writing and are subject to availability and approval by Admire Holidays and the relevant service providers. Additional charges may apply.
            </p>
            <p className="leading-relaxed">
              <span className="font-bold">5.2.</span> Changes by Admire Holidays: We reserve the right to make changes to your itinerary, accommodations, transportation, and other aspects of your trip if necessary due to unforeseen circumstances or events beyond our control. We will make reasonable efforts to notify you of any changes as soon as possible.
            </p>
          </SectionCard>
 
          <SectionCard sectionId="privacy-updates" title="6. Liability" delay={350}>
            <p className="leading-relaxed">
              <span className="font-bold">6.1.</span> Limitation of Liability: Admire Holidays acts as an intermediary between you and the service providers (e.g., airlines, hotels, tour operators) and is not liable for any loss, injury, damage, or delay arising from the acts or omissions of these third parties.
            </p>
            <p className="leading-relaxed">
              <span className="font-bold">6.2.</span> Indemnification: You agree to indemnify and hold Admire Holidays harmless from any claims, liabilities, damages, costs, or expenses (including legal fees) arising from your use of our services or your violation of these terms and conditions.
            </p>
          </SectionCard>
 
          <SectionCard sectionId="terms-conditions" title="7. Governing Law and Jurisdiction" delay={400}>
            <p className="leading-relaxed">
              These terms and conditions shall be governed by and construed in accordance with the laws of [insert jurisdiction]. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [insert jurisdiction].
            </p>
          </SectionCard>
 
          <SectionCard sectionId="agreement" title="8. Contact Information" delay={450}>
            <p className="leading-relaxed">
              If you have any questions or concerns about these terms and conditions, please contact us at [insert contact information].
            </p>
            <p className="leading-relaxed">
              By using the services of Admire Holidays, you acknowledge that you have read, understood, and agreed to abide by these terms and conditions.
            </p>
          </SectionCard>
        </div>
      </section>
    </div>
 
 
 
 
    <Footer/>
    </div>
  );
};
 
export default TermsAndConditions;