import React from 'react';
import CategoryLayout from '../../Components/CategoryLayout';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const Adventure = () => {
  const adventurePackages = [
    {
      name: "River Rafting in Rishikesh",
      path: "/package/rishikesh-river-rafting",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766",
      description: "Thrilling white water rafting in the Ganges"
    },
    {
      name: "Trekking in Himalayas",
      path: "/package/himalayan-trek",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      description: "Breathtaking treks through Himalayan trails"
    },
    {
      name: "Paragliding in Bir Billing",
      path: "/package/bir-paragliding",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
      description: "Soar through the skies at world's second highest paragliding site"
    },
    {
      name: "Scuba Diving in Andaman",
      path: "/package/andaman-scuba",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      description: "Explore vibrant coral reefs and marine life"
    },
    {
      name: "Desert Safari in Rajasthan",
      path: "/package/rajasthan-desert-safari",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      description: "Camel safaris and camping under the stars"
    },
    {
      name: "Skiing in Gulmarg",
      path: "/package/gulmarg-skiing",
      image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
      description: "World-class skiing in the Kashmir valley"
    },
    {
      name: "Bungee Jumping in Goa",
      path: "/package/goa-bungee",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
      description: "India's highest bungee jumping platform"
    },
    {
      name: "Rock Climbing in Hampi",
      path: "/package/hampi-rock-climbing",
      image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460",
      description: "Scale ancient boulders in this UNESCO world heritage site"
    }
  ];

  return (
    <div>
      <NavBar/>
      <CategoryLayout 
        title="Adventure Tours" 
        categories={adventurePackages} 
      />
      <Footer/>
    </div>
  );
};

export default Adventure;