import React from 'react';
import CategoryLayout from '../../Components/CategoryLayout';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const WildlifeCategory = () => {
  const wildlifePackages = [
    {
      name: "Ranthambore Safari",
      path: "/package/ranthambore-safari",
      image: "https://images.unsplash.com/photo-1599732675491-2d935d6a0f3d",
      description: "Experience the majestic tigers in their natural habitat"
    },
    {
      name: "Jim Corbett Adventure",
      path: "/package/jim-corbett-adventure",
      image: "https://images.unsplash.com/photo-1581779166113-8186d5d579c9",
      description: "Explore the oldest national park in India"
    },
    {
      name: "Kanha Jungle Retreat",
      path: "/package/kanha-jungle-retreat",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
      description: "Inspired the famous Jungle Book setting"
    },
    {
      name: "Sundarbans Cruise",
      path: "/package/sundarbans-cruise",
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5",
      description: "Unique mangrove forest and Royal Bengal tigers"
    }
  ];

  return (
    <div>
        <NavBar/>
    <CategoryLayout 
      title="Wildlife Tours" 
      categories={wildlifePackages} 
    />
    <Footer/>
    </div>
  );
};

export default WildlifeCategory;