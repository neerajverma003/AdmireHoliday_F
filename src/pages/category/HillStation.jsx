import React from 'react';
import CategoryLayout from '../../Components/CategoryLayout';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const HillStation = () => {
  const hillStationPackages = [
    {
      name: "Shimla Summer Retreat",
      path: "/package/shimla-holiday",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      description: "Queen of Hills with colonial charm and mountain views"
    },
    {
      name: "Manali Adventure Escape",
      path: "/package/manali-tour",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      description: "Snow-capped peaks and adventure activities in Himalayas"
    },
    {
      name: "Darjeeling Tea Gardens",
      path: "/package/darjeeling-tour",
      image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
      description: "Famous tea estates with views of Kanchenjunga"
    },
    {
      name: "Ooty Hill Station Tour",
      path: "/package/ooty-vacation",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
      description: "Nilgiri mountain resort with botanical gardens"
    },
    {
      name: "Munnar Tea Trails",
      path: "/package/munnar-tour",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      description: "Rolling tea plantations in Kerala's Western Ghats"
    },
    {
      name: "Mussoorie Weekend Getaway",
      path: "/package/mussoorie-trip",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      description: "Scenic views from 'Queen of the Hills' in Uttarakhand"
    },
    {
      name: "Coorg Coffee Plantations",
      path: "/package/coorg-holiday",
      image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460",
      description: "Scotland of India with misty hills and coffee estates"
    },
    {
      name: "Gangtok Himalayan Tour",
      path: "/package/gangtok-tour",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
      description: "Capital of Sikkim with breathtaking Himalayan vistas"
    }
  ];

  return (
    <div>
      <NavBar/>
      <CategoryLayout 
        title="Hill Station Getaways" 
        categories={hillStationPackages} 
      />
      <Footer/>
    </div>
  );
};

export default HillStation;