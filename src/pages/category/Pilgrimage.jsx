import React from 'react';
import CategoryLayout from '../../Components/CategoryLayout';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const Pilgrimage = () => {
  const pilgrimagePackages = [
    {
      name: "Char Dham Yatra",
      path: "/package/char-dham-yatra",
      image: "https://images.unsplash.com/photo-1580654712603-eb43273aff33",
      description: "Sacred journey to Yamunotri, Gangotri, Kedarnath & Badrinath"
    },
    {
      name: "Varanasi Spiritual Tour",
      path: "/package/varanasi-pilgrimage",
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
      description: "Ganga Aarti and temple visits in India's spiritual capital"
    },
    {
      name: "Amarnath Yatra",
      path: "/package/amarnath-yatra",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      description: "Pilgrimage to the sacred ice Shiva Lingam in Himalayas"
    },
    {
      name: "Golden Temple Darshan",
      path: "/package/golden-temple",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      description: "Visit the holiest shrine of Sikhism in Amritsar"
    },
    {
      name: "Shirdi Sai Baba Pilgrimage",
      path: "/package/shirdi-sai-baba",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
      description: "Darshan at the sacred shrine of Sai Baba"
    },
    {
      name: "Tirupati Balaji Tour",
      path: "/package/tirupati-balaji",
      image: "https://images.unsplash.com/photo-1518544866330-95b329c56a82",
      description: "Visit India's richest temple in Andhra Pradesh"
    },
    {
      name: "Ajmer Sharif Ziyarat",
      path: "/package/ajmer-sharif",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      description: "Pilgrimage to the famous Sufi shrine in Rajasthan"
    },
    {
      name: "Bodh Gaya Meditation Retreat",
      path: "/package/bodh-gaya",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      description: "Visit the site of Buddha's enlightenment"
    }
  ];

  return (
    <div>
      <NavBar/>
      <CategoryLayout 
        title="Pilgrimage Tours" 
        categories={pilgrimagePackages} 
      />
      <Footer/>
    </div>
  );
};

export default Pilgrimage;