import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ContactUs from '../Components/contact/ContactUs'
import SubscribeUs from '../forms/SubscribeUs'
import StatsAndPartners from '../Components/StatsAndPartners'
import ContactHero from '../Components/contact/ContactHero'
 
const Contact = () => {
  return (
    <div>
        <NavBar/>
        <ContactHero/>
        <ContactUs/>
        <StatsAndPartners/>
        <SubscribeUs/>
        <Footer/>
    </div>
  )
}
 
export default Contact
 