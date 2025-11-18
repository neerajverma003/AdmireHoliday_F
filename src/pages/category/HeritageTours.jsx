import React from 'react';
import CategoryLayout from '../../Components/CategoryLayout';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const HeritageTours = () => {
  const heritagePackages = [
    {
      name: "Golden Triangle Tour",
      path: "/package/golden-triangle",
      image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce",
      description: "Delhi-Agra-Jaipur circuit covering India's iconic monuments"
    },
    {
      name: "Rajasthan Heritage Trail",
      path: "/package/rajasthan-heritage",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
      description: "Explore majestic forts and palaces of Rajasthan"
    },
    {
      name: "Khajuraho Temple Tour",
      path: "/package/khajuraho-temples",
      image: "https://images.unsplash.com/photo-1580654712603-eb43273aff33",
      description: "UNESCO world heritage site with exquisite sculptures"
    },
    {
      name: "Hampi Ruins Exploration",
      path: "/package/hampi-heritage",
      image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460",
      description: "Discover the ruins of Vijayanagara Empire"
    },
    {
      name: "Kolkata Heritage Walk",
      path: "/package/kolkata-heritage",
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
      description: "Colonial architecture and cultural landmarks"
    },
    {
      name: "Ajanta-Ellora Caves",
      path: "/package/ajanta-ellora",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      description: "Ancient rock-cut cave monuments of Maharashtra"
    },
    {
      name: "Mahabalipuram Tour",
      path: "/package/mahabalipuram",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      description: "UNESCO-listed shore temple and stone carvings"
    },
    {
      name: "Konark Sun Temple",
      path: "/package/konark-temple",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      description: "Architectural marvel in Odisha shaped as a chariot"
    }
  ];

  return (
    <div>
      <NavBar/>
      <CategoryLayout 
        title="Heritage & Cultural Tours" 
        categories={heritagePackages} 
      />
      <Footer/>
    </div>
  );
};

export default HeritageTours;