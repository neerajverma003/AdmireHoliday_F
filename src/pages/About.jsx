import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import StatsAndPartners from '../Components/StatsAndPartners'
import AboutDetails from '../Components/AboutDetails'
import WhyChoose from '../Components/WhyChoose';
import AboutMission from '../Components/AboutMission';
import MeetTeam from '../Components/MeetTeam';
const About = () => {
  return (
    <div>

        <NavBar/>
        <AboutDetails/>
        <WhyChoose/>
        <AboutMission/>
        <StatsAndPartners/>
        <MeetTeam/>

        
      <Footer/>
    </div>
  )
}

export default About
