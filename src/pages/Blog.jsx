import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import SubscribeUs from "../forms/SubscribeUs";
import BlogHero from '../Components/blog/BlogHero';
import BlogSection from '../Components/blog/BlogSection';


const Blog = () => {
  return (
    <div>
        <NavBar/>
        <BlogHero/>

        <BlogSection/>



       <SubscribeUs/>
        <Footer/>
      
    </div>
  )
}

export default Blog
