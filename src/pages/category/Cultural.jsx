import React from 'react';
import CategoryLayout from '../../Components/CategoryLayout';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const Cultural = () => {
  const culturalPackages = [
    {
      name: "Kerala Cultural Immersion",
      path: "/package/kerala-culture",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      description: "Kathakali performances, temple festivals & backwater villages"
    },
    {
      name: "Rajasthan Folk Experience",
      path: "/package/rajasthan-culture",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
      description: "Traditional music, puppet shows & desert folk dances"
    },
    {
      name: "Punjabi Rural Life Tour",
      path: "/package/punjab-culture",
      image: "https://images.unsplash.com/photo-1580654712603-eb43273aff33",
      description: "Village homestays, bhangra workshops & langar experience"
    },
    {
      name: "Tamil Nadu Temple Culture",
      path: "/package/tamilnadu-culture",
      image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460",
      description: "Ancient temple rituals, classical dance & silk weaving"
    },
    {
      name: "North-East Tribal Journey",
      path: "/package/northeast-culture",
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
      description: "Indigenous tribes, bamboo crafts & traditional festivals"
    },
    {
      name: "Goan-Portuguese Heritage",
      path: "/package/goa-culture",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      description: "Colonial architecture, fado music & Catholic traditions"
    },
    {
      name: "Varanasi Spiritual Culture",
      path: "/package/varanasi-culture",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      description: "Ganga aarti, classical music & ancient learning centers"
    },
    {
      name: "Gujarat Handicraft Trail",
      path: "/package/gujarat-culture",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      description: "Textile villages, folk art & Rann Utsav festival"
    }
  ];

  return (
    <div>
      <NavBar/>
      <CategoryLayout 
        title="Cultural Immersion Tours" 
        categories={culturalPackages} 
      />
      <Footer/>
    </div>
  );
};

export default Cultural;