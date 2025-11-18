import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./index.css";
import Home from "./pages/Home";
import Domestic from "./pages/Domestic";
import About from "./pages/About";
import Blog from "./pages/Blog";
import International from "./pages/International";
import BlogDetails1 from "./pages/blogDetails/BlogDetails1";
import BlogDetails2 from "./pages/blogDetails/BlogDetails2";
import Contact from "./pages/Contact";
import DestinationDetail from "./Components/DestinationDetail";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomeStickyFormPage from "./pages/HomeStickyFormPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import UserAgreement from "./pages/UserAgreement";
import MyBooking from "./pages/MyBooking";
import PackageDetail from "./Components/packageCardDetails/PackageDetail";
import ExploreNow from "./pages/ExploreNow";
// import ResortDetail from "./Components/ResortDetail";
import ResortDetails from "./Components/ResortDetail";
import PlanMyTripForm from "./forms/PlanMyTripForm";
import LearnMore from "./pages/LearnMore";
import HoneymoonSpecialPackages from "./pages/HoneymoonSpecialPackages";
import PackageDetailsWithBooking from "./pages/OtherPackageDetails";
import TourDetails from "./pages/TourDetails";
import AutoScrollToTop from "./Components/AutoScrollToTop";
import Sitemap from "./pages/Sitemap";
import WildlifeCategory from "./pages/category/WildlifeCategory";
import Adventure from "./pages/category/Adventure";
import Honeymoon from "./pages/category/Honeymoon";
import Beach from "./pages/category/Beach";
import ItineraryDetails from "./pages/ItineraryDetails";
import ChatWidget from "./Components/ChatBot/ChatWidget";
// import HeritageTours from "./pages/category/HeritageTours";
// import AyurvedaTours from "./pages/category/ayurveda-tours";
// import Cultural from "./pages/category/Cultural";
// import HillStation from "./pages/category/HillStation";
// import Pilgrimage from "./pages/category/Pilgrimage";



function App() {
  return (
    <Router>
      <AutoScrollToTop />
      <ScrollToTop />
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorenow" element={<ExploreNow />} />
        <Route path="/learnmore" element={<LearnMore />} />


        <Route path="/domestic" element={<Domestic />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/how-to-customize-your-dream-vacation-package-without-overpaying" element={<BlogDetails1 />} />
        <Route path="/destination/:slug" element={
          <Navigate to={`/destinations/${useParams().slug}`} replace />
        } />
        {/* <Route path="/blog/details" element={<BlogDetails1 />} /> */}
        <Route path="/blog/:id" element={<BlogDetails1 />} />



        <Route path="/international" element={<International />} />
        <Route path="/destinations/:slug" element={<DestinationDetail />} />
        


         <Route path="/HomeStickyFormPage" element={<HomeStickyFormPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/user-agreement" element={<UserAgreement />} />
        <Route path="/sitemap" element={<Sitemap />} />



        {/* <Route path="/destinations/:slug" element={<DestinationDetail />} /> */}


        <Route path="/signin" element={<Login />} />

        <Route path="/signup" element={<Registration />} />
        <Route path="/my-profile/*" element={<MyBooking />} />


        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/destinations/:slug/packages/:packageId" element={<PackageDetail />} />

        <Route path="/resort-detail/:id" element={<ResortDetails />} />
        <Route path="/get-a-quote" element={<PlanMyTripForm />} />

        <Route path="/honeymoon-special-package" element={<HoneymoonSpecialPackages />} />
        <Route path="/destinations/:slug" element={<TourDetails />} />
<Route path="/destinations/:slug/detail" element={<DestinationDetail />} />


<Route path="/itineraries/:id" element={<ItineraryDetails />} />








   {/* category */}
    <Route path="/category/wildlife" element={<WildlifeCategory />} />
    <Route path="/category/adventure" element={<Adventure />} />
    <Route path="/category/honeymoon" element={<Honeymoon />} />
    <Route path="/category/beach" element={<Beach />} />
    {/* <Route path="/category/pilgrimage" element={<Pilgrimage />} /> */}
    {/* <Route path="/category/hill-station" element={<HillStation />} /> */}
    {/* <Route path="/category/heritage-tours" element={<HeritageTours />} /> */}
    {/* <Route path="/category/ayurveda-tours" element={<AyurvedaTours />} />
    <Route path="/category/cultural" element={<Cultural />} /> */}














        
        

      </Routes>
      {/* <Footer /> */}
      <ChatWidget />
    </Router>

    
  );
}

export default App;