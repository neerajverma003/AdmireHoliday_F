import React from 'react';
import CategoryLayout from '../../Components/CategoryLayout';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const AyurvedaTours = () => {
  const ayurvedaPackages = [
    {
      name: "Kerala Ayurveda Retreat",
      path: "/package/kerala-ayurveda",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
      description: "Traditional Panchakarma therapies in God's Own Country"
    },
    {
      name: "Rishikesh Yoga & Wellness",
      path: "/package/rishikesh-yoga",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
      description: "Yoga retreat by the Ganges with Ayurvedic treatments"
    },
    {
      name: "Goa Detox Holiday",
      path: "/package/goa-detox",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
      description: "Beachside wellness programs with Ayurvedic nutrition"
    },
    {
      name: "Mysuru Ayurvedic Rejuvenation",
      path: "/package/mysuru-ayurveda",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
      description: "Royal treatment at Karnataka's premier wellness centers"
    },
    {
      name: "Himalayan Herbal Retreat",
      path: "/package/himalayan-retreat",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
      description: "Mountain wellness sanctuary with organic treatments"
    },
    {
      name: "Pondicherry Holistic Healing",
      path: "/package/pondicherry-wellness",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
      description: "Auroville-inspired therapies with French coastal charm"
    },
    {
      name: "Luxury Ayurveda Resort",
      path: "/package/luxury-ayurveda",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
      description: "5-star wellness experience with personalized treatments"
    },
    {
      name: "Weight Loss Program",
      path: "/package/ayurveda-weightloss",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
      description: "Natural slimming therapies and dietary guidance"
    }
  ];

  return (
    <div>
      <NavBar/>
      <CategoryLayout 
        title="Ayurveda & Wellness Retreats" 
        categories={ayurvedaPackages} 
      />
      <Footer/>
    </div>
  );
};

export default AyurvedaTours;