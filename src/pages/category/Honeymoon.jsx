import React from 'react';
import CategoryLayout from '../../Components/CategoryLayout';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const Honeymoon = () => {
  const honeymoonPackages = [
    {
      name: "Romantic Kashmir Getaway",
      path: "/package/kashmir-honeymoon",
      image: "https://images.unsplash.com/photo-1580654712603-eb43273aff33",
      description: "Houseboat stays and shikara rides in Dal Lake"
    },
    {
      name: "Goa Beach Retreat",
      path: "/package/goa-honeymoon",
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
      description: "Private beach villas and candlelight dinners"
    },
    {
      name: "Maldives Paradise",
      path: "/package/maldives-honeymoon",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      description: "Overwater bungalows with crystal clear lagoons"
    },
    {
      name: "Kerala Backwaters Escape",
      path: "/package/kerala-honeymoon",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      description: "Private houseboat cruise through palm-fringed canals"
    },
    {
      name: "Udaipur Royal Experience",
      path: "/package/udaipur-honeymoon",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
      description: "Palace stays and lakeview dinners in Venice of the East"
    },
    {
      name: "Bali Romantic Vacation",
      path: "/package/bali-honeymoon",
      image: "https://images.unsplash.com/photo-1518544866330-95b329c56a82",
      description: "Luxury villas with private pools and ocean views"
    },
    {
      name: "Andaman Island Romance",
      path: "/package/andaman-honeymoon",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      description: "White sand beaches and breathtaking sunsets"
    },
    {
      name: "Mauritius Luxury Escape",
      path: "/package/mauritius-honeymoon",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      description: "All-inclusive resorts with private beach access"
    }
  ];

  return (
    <div>
      <NavBar/>
      <CategoryLayout 
        title="Honeymoon Packages" 
        categories={honeymoonPackages} 
      />
      <Footer/>
    </div>
  );
};

export default Honeymoon;