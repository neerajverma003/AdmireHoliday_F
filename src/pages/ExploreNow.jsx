import React from 'react';
import HeroSection from '../Components/explorenow/HeroSection';
import CompanyStory from '../Components/explorenow/CompanyStory';
import ExploreServices from '../Components/explorenow/ExploreServices';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import MissionValues from '../Components/explorenow/MissionValues';
import WhyChooseUs from '../Components/explorenow/WhyChooseUs';
import TravelGallery from '../Components/TravelGallery';
import SubscribeUs from '../forms/SubscribeUs';
import StatsAndPartners from '../Components/StatsAndPartners';
 
 
const ExploreNow = () =>{
 
    return (
        <div>
            <NavBar />            
            <HeroSection />
            <CompanyStory />
            <ExploreServices />
            <MissionValues />
            <WhyChooseUs />
            <TravelGallery />
            <StatsAndPartners />
            <SubscribeUs />
            <Footer />
        </div>
    )
}
 
export default ExploreNow;