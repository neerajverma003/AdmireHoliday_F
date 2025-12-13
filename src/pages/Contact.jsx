import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ContactUs from '../Components/contact/ContactUs'
import SubscribeUs from '../forms/SubscribeUs'
import StatsAndPartners from '../Components/StatsAndPartners'
import ContactHero from '../Components/contact/ContactHero'
 import WhyChooseUs from '../Components/WhyChoose'
 import TestimonialSlider from "../Components/TestimonialSlider"
 import TravelGallery from '../Components/TravelGallery'
 import ContactBanner from '../Components/ContactBanner';

const Contact = () => {
  return (
    <div>
        <NavBar/>
        <ContactHero/>
        {/* <SubscribeUs/> */}
        <ContactUs/>
        <WhyChooseUs/>
       
       
        <StatsAndPartners/>
         <TravelGallery/>
         <ContactBanner/>
         <TestimonialSlider />
        <Footer/>
    </div>
  )
}
 
export default Contact
 