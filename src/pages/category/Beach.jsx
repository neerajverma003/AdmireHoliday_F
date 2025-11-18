import React from 'react';
import CategoryLayout from '../../Components/CategoryLayout';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const Beach = () => {
  const beachPackages = [
    {
      name: "Goa Beach Vacation",
      path: "/package/goa-beach",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "Sun, sand and vibrant beach shacks on India's west coast"
    },
    {
      name: "Andaman Island Paradise",
      path: "/package/andaman-beach",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      description: "Pristine white sand beaches and crystal clear waters"
    },
    {
      name: "Maldives Island Retreat",
      path: "/package/maldives-beach",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      description: "Luxurious overwater villas in a tropical paradise"
    },
    {
      name: "Kovalam Beach Escape",
      path: "/package/kovalam-beach",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      description: "Palm-fringed beaches and Ayurvedic wellness in Kerala"
    },
    {
      name: "Puri Beach Holiday",
      path: "/package/puri-beach",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      description: "Golden sands and spiritual vibes in Odisha"
    },
    {
      name: "Gokarna Beach Trek",
      path: "/package/gokarna-beach",
      image: "https://images.unsplash.com/photo-1518544866330-95b329c56a82",
      description: "Secluded beaches and coastal hiking trails"
    },
    {
      name: "Lakshadweep Island Getaway",
      path: "/package/lakshadweep-beach",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      description: "Untouched coral islands with turquoise lagoons"
    },
    {
      name: "Pondicherry Beach Stay",
      path: "/package/pondicherry-beach",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
      description: "French colonial charm meets coastal relaxation"
    }
  ];

  return (
    <div>
      <NavBar/>
      <CategoryLayout 
        title="Beach Vacations" 
        categories={beachPackages} 
      />
      <Footer/>
    </div>
  );
};

export default Beach;