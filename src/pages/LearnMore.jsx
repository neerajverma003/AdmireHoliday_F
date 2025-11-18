import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import FAQSection from '../Components/learnmore/FAQSection';
import CallToAction from '../Components/learnmore/CallToAction';
import WhoWeAre from '../Components/learnmore/WhoWeAre';
 
 
 
const LearnMore = () =>{
    return(
        <div>
            <NavBar />
            <WhoWeAre/>

            <FAQSection />
            <CallToAction />

            <Footer />
        </div>
    )
}
 
export default LearnMore;