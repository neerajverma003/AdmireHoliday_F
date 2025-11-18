import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPhone, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';
import BannerCarousel from './BannerCarousel';
import NavBar from './NavBar';
import Footer from './Footer';
import {getItenary} from "../api/api"
import img1 from '../../src/img2.png';

const DestinationDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Sample data with more destinations and images
  const destinations = [
    {
      id: 1,
      slug: "south-india",
      name: "SOUTH INDIA",
      description: "Experience the rich cultural heritage, beautiful beaches, and lush greenery of South India.",
      mainImage: "https://media.gettyimages.com/id/472909442/photo/backwaters-of-kerala.jpg?s=612x612&w=0&k=20&c=ibwRiZJZGcxG5MLWFUowcXM9XK3nZnklk9ZH1Qus3C4=",
      images: [
        "https://media.gettyimages.com/id/1158112847/vector/houseboat-in-kerala-digital-photo-manipulation.jpg?s=612x612&w=0&k=20&c=bepLZIvGQ9n6vqqZ0hj-prL7hmhDQRyI0d0Q-AiQPsg=",
        "https://media.gettyimages.com/id/172401015/photo/western-railway-headquarters-mumbai.jpg?s=612x612&w=0&k=20&c=krr_DJx1JPtbBioeZuayrVuP9z1VEAXEZ33wHjWsG7A=",
        "https://media.gettyimages.com/id/555341413/photo/munnar-landscape.jpg?s=612x612&w=0&k=20&c=pgAbAh-gfhtP0LpdQpYtNJtObXG8m3RKUxag-PD21eo=",
        "https://media.gettyimages.com/id/2151252265/photo/dramatic-sky-over-guna-caves-at-kodaikanal-mountains-in-tamilnadu.jpg?s=612x612&w=0&k=20&c=8TyoDmpDtp8ZUSsia7rj3_IUhWnHvjlf54hqj3OC1g8=",
        "https://media.gettyimages.com/id/2150669173/photo/tourist-brother-and-sister-tandem-cycling-along-the-kodaikanal-lakeside-tamilnadu.jpg?s=612x612&w=0&k=20&c=CL4dY0tsrl1N0UK7WCxfScQCTFnRTccXJzUlhrSFLf0="
      ],
      packages: [
        {
          id: 'p1',
          name: 'Premium South India Tour',
          duration: '7 Days / 6 Nights',
          price: '₹25,000',
          highlights: ['Chennai', 'Pondicherry', 'Madurai', 'Mysore'],
          description: 'Comprehensive tour covering major cultural and historical sites of South India.'
        },
        {
          id: 'p2',
          name: 'Kerala Backwaters Special',
          duration: '5 Days / 4 Nights',
          price: '₹18,500',
          highlights: ['Alleppey Houseboat', 'Kochi', 'Munnar'],
          description: 'Relax in the serene backwaters and explore tea gardens.'
        }
      ]
    },
    {
  id: 2,
  slug: "kashmir",
  name: "Kashmir",
  description: "Discover the paradise on earth with snow-capped mountains, scenic valleys, and tranquil lakes.",
  mainImage: "https://media.gettyimages.com/id/1133588884/photo/beautiful-kashmir-valley-during-autumn.jpg?s=612x612&w=0&k=20&c=r0Exl9-hmraC6sHtHieFiPz8HRKTdGP5uYeqKJZZ5B4=",
  images: [
    "https://media.gettyimages.com/id/1140249132/photo/dal-lake-srinagar.jpg?s=612x612&w=0&k=20&c=8TjHwlh8kD1ohrGTl7EzIs3AE2AHDd6n7qV8NzCG1j0=",
    "https://media.gettyimages.com/id/1285686243/photo/beautiful-view-of-pahalgam-kashmir.jpg?s=612x612&w=0&k=20&c=iK5zvbR7GqHzfROv2La3JdV6kkkKgRbPMbbILRScs1o=",
    "https://media.gettyimages.com/id/1397744922/photo/shikara-ride-on-dal-lake.jpg?s=612x612&w=0&k=20&c=piGqF9AHQZSPczKkVRXjQEBqxImnSCvqlY8jZCLWgEQ=",
    "https://media.gettyimages.com/id/1397744935/photo/gulmarg-kashmir-snow-landscape.jpg?s=612x612&w=0&k=20&c=kC9jcAmD9BLy37GpLz3MxGe1nbTTt70YVtScKzwVmcQ=",
    "https://media.gettyimages.com/id/1133588570/photo/snow-covered-pine-trees-in-kashmir.jpg?s=612x612&w=0&k=20&c=KMnK6Z1tTBGohKD9xyHfGkIb7NLB_3v7yQk3vUloyT4="
  ],
  packages: [
    {
      id: 'p1',
      name: 'Kashmir Winter Wonderland',
      duration: '6 Days / 5 Nights',
      price: '₹28,000',
      highlights: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
      description: 'Enjoy snowfall, skiing, and mesmerizing landscapes in the snowy valleys of Kashmir.'
    },
    {
      id: 'p2',
      name: 'Romantic Kashmir Retreat',
      duration: '4 Days / 3 Nights',
      price: '₹20,000',
      highlights: ['Dal Lake Shikara Ride', 'Mughal Gardens', 'Local Handicrafts'],
      description: 'Perfect getaway for couples seeking peace, nature, and romance in Kashmir.'
    }
  ]
},

    
    {
      id: 3,
      slug: "rajasthan",
      name: "Rajasthan",
      description: "Discover the royal heritage, magnificent forts, and vibrant culture of Rajasthan.",
      mainImage: "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb5756b2YDpVGy3h.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb575318HrvR4tbl.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb575494mL1Rlbd7.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb5755a8tNIdWcuk.jpg",
        "https://example.com/rajasthan-4.jpg",
        "https://example.com/rajasthan-5.jpg"
      ],
      packages: [
        {
          id: 'p3',
          name: 'Royal Rajasthan Experience',
          duration: '8 Days / 7 Nights',
          price: '₹32,000',
          highlights: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
          description: 'Live like royalty as you explore majestic forts and palaces.'
        }
      ]
    },
    {
  id: 4,
  slug: "kerala",
  name: "Kerala",
  description: "Explore God’s Own Country with its serene backwaters, lush landscapes, and rich traditions.",
  mainImage: "https://images.unsplash.com/photo-1603252110481-3d9a95c940ff?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1600334129128-44f84e032fde?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1628920413393-c891d9a2a95d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1599733580041-11880e8f6dbf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576753894824-50cb4f4e3c09?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1610003453726-26d1b6c50d7e?auto=format&fit=crop&w=800&q=80"
  ],
  packages: [
    {
      id: 'p4',
      name: 'Backwaters & Beaches of Kerala',
      duration: '6 Days / 5 Nights',
      price: '₹22,000',
      highlights: ['Alleppey', 'Varkala Beach', 'Kumarakom', 'Kochi'],
      description: 'Experience houseboat cruises, peaceful beaches, and Ayurvedic bliss.'
    },
    {
      id: 'p5',
      name: 'Munnar & Thekkady Hills Tour',
      duration: '5 Days / 4 Nights',
      price: '₹19,500',
      highlights: ['Munnar Tea Gardens', 'Thekkady Wildlife Sanctuary'],
      description: 'A perfect blend of nature, hills, and adventure in Kerala’s greenest spots.'
    }
  ]
},
{
  id: 5,
  name: 'Leh Ladakh',
  slug: 'leh-ladakh',
  type: 'domestic',
  description: "Explore the rugged beauty of the Himalayas with ancient monasteries, crystal-clear lakes, and thrilling adventures in Leh Ladakh.",
  mainImage: "https://images.unsplash.com/photo-1627991272082-8a10efb0e84e?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1638434522035-dcd794fa0b39?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600508774373-3ac8a3810c57?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1627991272512-0f4ce9bcf6e9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1526112481753-1f1c1f6b8f5f?auto=format&fit=crop&w=800&q=80"
  ],
  packages: [
    {
      id: 'p6',
      name: 'Ultimate Leh Ladakh Adventure',
      duration: '7 Days / 6 Nights',
      price: '₹35,000',
      highlights: ['Leh', 'Nubra Valley', 'Pangong Lake', 'Khardung La'],
      description: 'Experience high-altitude passes, tranquil lakes, and ancient monasteries in this adventurous Ladakh tour.'
    },
    {
      id: 'p7',
      name: 'Scenic Ladakh Retreat',
      duration: '5 Days / 4 Nights',
      price: '₹28,000',
      highlights: ['Leh Local Sightseeing', 'Shanti Stupa', 'Magnetic Hill'],
      description: 'Perfect for first-time travelers looking to explore the beauty and culture of Ladakh.'
    }
  ]
},
{
  id: 6,
  name: 'Mumbai',
  slug: 'mumbai',
  type: 'domestic',
  description: "Experience the vibrant city life of Mumbai — the city that never sleeps, filled with historic landmarks, beaches, street food, and Bollywood glamour.",
  mainImage: "https://images.unsplash.com/photo-1548013146-ec74e5c1c3f9?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1601700968643-8d7c01b8b9f7?auto=format&fit=crop&w=800&q=80", // Marine Drive
    "https://images.unsplash.com/photo-1586179401938-eef3f8be8045?auto=format&fit=crop&w=800&q=80", // Gateway of India
    "https://images.unsplash.com/photo-1593253787226-567eda4ad32d?auto=format&fit=crop&w=800&q=80", // Mumbai streets
    "https://images.unsplash.com/photo-1620903238253-1745a8818a9f?auto=format&fit=crop&w=800&q=80", // City skyline
    "https://images.unsplash.com/photo-1566907175776-7db63b7337a3?auto=format&fit=crop&w=800&q=80"  // Bandra–Worli Sea Link
  ],
  packages: [
    {
      id: 'p8',
      name: 'Classic Mumbai City Tour',
      duration: '3 Days / 2 Nights',
      price: '₹9,999',
      highlights: ['Gateway of India', 'Marine Drive', 'Colaba Causeway', 'Juhu Beach'],
      description: 'Dive into the heart of Mumbai with guided tours to iconic spots, vibrant markets, and local delicacies.'
    },
    {
      id: 'p9',
      name: 'Bollywood & Beaches Special',
      duration: '4 Days / 3 Nights',
      price: '₹14,500',
      highlights: ['Film City', 'Bandra Street Art', 'Versova', 'Local Food Walk'],
      description: 'Explore the film capital of India with exclusive Bollywood experiences and beachside fun.'
    }
  ]
},
{
  id: 8,
  name: 'Jaipur',
  slug: 'jaipur',
  type: 'domestic',
  description: "Step into the Pink City of Jaipur, known for its majestic forts, royal palaces, vibrant bazaars, and rich cultural heritage.",
  mainImage: "https://images.unsplash.com/photo-1583227266026-ecbe99145a41?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1601027834570-e3e6afaf2b4e?auto=format&fit=crop&w=800&q=80", // Hawa Mahal
    "https://images.unsplash.com/photo-1617029405113-3dc2a391ec4f?auto=format&fit=crop&w=800&q=80", // Amber Fort
    "https://images.unsplash.com/photo-1603437873662-43f71e29f82f?auto=format&fit=crop&w=800&q=80", // City view
    "https://images.unsplash.com/photo-1601033481981-3b9cd38121ba?auto=format&fit=crop&w=800&q=80", // City Palace
    "https://images.unsplash.com/photo-1602584106147-f8e4b4d7be05?auto=format&fit=crop&w=800&q=80"  // Local market
  ],
  packages: [
    {
      id: 'p10',
      name: 'Royal Jaipur Getaway',
      duration: '3 Days / 2 Nights',
      price: '₹11,500',
      highlights: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Jantar Mantar'],
      description: 'Explore the regal side of Rajasthan with guided tours through forts, palaces, and traditional bazaars.'
    },
    {
      id: 'p11',
      name: 'Cultural Tour of Jaipur',
      duration: '4 Days / 3 Nights',
      price: '₹15,000',
      highlights: ['Chokhi Dhani', 'Jaipur Bazaars', 'Jal Mahal', 'Albert Hall Museum'],
      description: 'Immerse yourself in the colorful culture, folk music, and authentic Rajasthani cuisine.'
    }
  ]
},
{
  id: 9,
  name: 'Hyderabad',
  slug: 'hyderabad',
  type: 'domestic',
  description: "Discover the charm of Hyderabad — a city where royal heritage meets modern IT hubs, famous for its monuments, biryani, and bustling bazaars.",
  mainImage: "https://images.unsplash.com/photo-1618221461675-4e7162d9935f?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1603262110263-fb0112f64dc8?auto=format&fit=crop&w=800&q=80", // Charminar
    "https://images.unsplash.com/photo-1584967331862-2f6f847fa9fd?auto=format&fit=crop&w=800&q=80", // Golconda Fort
    "https://images.unsplash.com/photo-1588597531634-51499f1748e4?auto=format&fit=crop&w=800&q=80", // Cityscape
    "https://images.unsplash.com/photo-1603366615917-9273a17b1cc3?auto=format&fit=crop&w=800&q=80", // Hussain Sagar Lake
    "https://images.unsplash.com/photo-1603645067360-13ba9a0abdc1?auto=format&fit=crop&w=800&q=80"  // Chowmahalla Palace
  ],
  packages: [
    {
      id: 'p12',
      name: 'Historical Hyderabad Tour',
      duration: '3 Days / 2 Nights',
      price: '₹10,500',
      highlights: ['Charminar', 'Golconda Fort', 'Salar Jung Museum', 'Laad Bazaar'],
      description: 'Explore the historical wonders of Hyderabad, including its grand forts and royal palaces.'
    },
    {
      id: 'p13',
      name: 'Hyderabad Food & Culture Trail',
      duration: '4 Days / 3 Nights',
      price: '₹13,000',
      highlights: ['Hyderabadi Biryani Tour', 'Nightlife at Jubilee Hills', 'Shilparamam'],
      description: 'Enjoy local cuisine, traditional arts, and the cultural essence of Hyderabad in this unique experience.'
    }
  ]
},
{
  id: 10,
  name: 'Chennai',
  slug: 'chennai',
  type: 'domestic',
  description: "Explore Chennai — a coastal city blending ancient temples, colonial architecture, vibrant culture, and the warmth of Tamil tradition.",
  mainImage: "https://images.unsplash.com/photo-1610353302454-16575924cd4b?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1574694761106-829ff6f0b6c4?auto=format&fit=crop&w=800&q=80", // Marina Beach
    "https://images.unsplash.com/photo-1610353003248-3c0b8a1a6ed4?auto=format&fit=crop&w=800&q=80", // Kapaleeshwarar Temple
    "https://images.unsplash.com/photo-1628397664052-6464c6d78d42?auto=format&fit=crop&w=800&q=80", // Colonial architecture
    "https://images.unsplash.com/photo-1574694760917-cfd7ee6cb60b?auto=format&fit=crop&w=800&q=80", // City market
    "https://images.unsplash.com/photo-1631173052351-d19d215b08b2?auto=format&fit=crop&w=800&q=80"  // Cityscape
  ],
  packages: [
    {
      id: 'p14',
      name: 'Classic Chennai Explorer',
      duration: '3 Days / 2 Nights',
      price: '₹9,000',
      highlights: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George', 'Santhome Cathedral'],
      description: 'Get a taste of Chennai’s culture, heritage, and coastal charm with this short and sweet city tour.'
    },
    {
      id: 'p15',
      name: 'Cultural & Temple Tour of Chennai',
      duration: '4 Days / 3 Nights',
      price: '₹12,500',
      highlights: ['Temples of Mylapore', 'Cholamandalam Artists’ Village', 'Local Cuisine Walk'],
      description: 'Perfect for culture lovers and spiritual seekers wanting to experience Chennai’s soul.'
    }
  ]
},

{
  id: 11,
  name: 'Nagpur',
  slug: 'nagpur',
  type: 'domestic',
  description: "Known as the Orange City of India, Nagpur offers a unique blend of heritage, nature, spiritual sites, and regional flavors.",
  mainImage: "https://images.unsplash.com/photo-1622623259021-6a4e694c4a63?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1617469462032-015edcba7060?auto=format&fit=crop&w=800&q=80", // Zero Mile Stone
    "https://images.unsplash.com/photo-1618721404684-cfc5023d6eae?auto=format&fit=crop&w=800&q=80", // Ambazari Lake
    "https://images.unsplash.com/photo-1617469518204-048e6a27f2dc?auto=format&fit=crop&w=800&q=80", // Futala Lake
    "https://images.unsplash.com/photo-1632400850574-3b6492c3bd3e?auto=format&fit=crop&w=800&q=80", // Deekshabhoomi
    "https://images.unsplash.com/photo-1581090700227-1a66f9e2f3e0?auto=format&fit=crop&w=800&q=80"  // City vibe
  ],
  packages: [
    {
      id: 'p16',
      name: 'Spiritual & Heritage Tour of Nagpur',
      duration: '3 Days / 2 Nights',
      price: '₹8,000',
      highlights: ['Deekshabhoomi', 'Zero Mile Stone', 'Sitabuldi Fort', 'Ambazari Garden'],
      description: 'Ideal for a relaxed spiritual and historical getaway in the center of India.'
    },
    {
      id: 'p17',
      name: 'Nagpur Nature & Lakeside Retreat',
      duration: '4 Days / 3 Nights',
      price: '₹10,500',
      highlights: ['Futala Lake', 'Ambazari Lake', 'Japanese Garden', 'Local Street Food'],
      description: 'Perfect for nature lovers looking to unwind with lakeside views and serene gardens.'
    }
  ]
},

{
  id: 13,
  name: 'Cochin',
  slug: 'cochin',
  type: 'domestic',
  description: "A charming port city blending colonial heritage, vibrant markets, and serene backwaters.",
  mainImage: "https://images.unsplash.com/photo-1598106480422-0fc7697f2d3d?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1600509102527-b51dcb94b69f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1592538534965-90b345efc1da?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586089488339-c5f6ec017bc7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1549887534-4b2f8e70b7b8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586298561793-2e8d21fce164?auto=format&fit=crop&w=800&q=80"
  ],
  packages: [
    {
      id: 'p18',
      name: 'Historic Cochin Tour',
      duration: '3 Days / 2 Nights',
      price: '₹9,500',
      highlights: ['Fort Kochi', 'Chinese Fishing Nets', 'Jew Town'],
      description: 'Explore Cochin’s colonial legacy and multicultural roots with local experiences.'
    }
  ]
},

{
  id: 14,
  name: 'Bangalore',
  slug: 'bangalore',
  type: 'domestic',
  description: "India’s Silicon Valley, filled with lush gardens, modern tech hubs, and vibrant nightlife.",
  mainImage: "https://images.unsplash.com/photo-1623318061226-21347c84c005?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1588570600989-51d99f2610e3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1622323679961-7f3dcac18a2f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1594026111024-6592701d13e5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1587049352842-33403c8a52d5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1591689382756-2b598a1f4030?auto=format&fit=crop&w=800&q=80"
  ],
  packages: [
    {
      id: 'p19',
      name: 'Bangalore City Highlights',
      duration: '3 Days / 2 Nights',
      price: '₹8,000',
      highlights: ['Lalbagh', 'Cubbon Park', 'Vidhana Soudha', 'MG Road'],
      description: 'A mix of nature, colonial charm, and urban exploration in Bangalore.'
    }
  ]
},
{
  id: 15,
  name: 'Ahmedabad',
  slug: 'ahmedabad',
  type: 'domestic',
  description: "UNESCO World Heritage City with vibrant textiles, stepwells, and Gujarati culture.",
  mainImage: "https://images.unsplash.com/photo-1587554694700-c389f6c57c6a?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1587554647139-1aa02e8a030f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1613815988306-e3d4c16b3c62?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583073818896-df2b173404ec?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1578730416613-b408d2b53f6c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1578730454220-3b3878d378f3?auto=format&fit=crop&w=800&q=80"
  ],
  packages: [
    {
      id: 'p20',
      name: 'Ahmedabad Heritage Trail',
      duration: '2 Days / 1 Night',
      price: '₹6,000',
      highlights: ['Sabarmati Ashram', 'Adalaj Stepwell', 'Manek Chowk'],
      description: 'A short and sweet heritage-rich journey through the streets of Ahmedabad.'
    }
  ]
},

{
  id: 16,
  name: 'Sikkim',
  slug: 'sikkim',
  type: 'domestic',
  description: "A serene Himalayan state offering pristine mountains, monasteries, and unforgettable views.",
  mainImage: "https://images.unsplash.com/photo-1587474260584-136574528ed4?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1607320538297-1d9a6f1528de?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1608642346694-8402f97b9e14?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1607320413037-945b491b0b78?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1601796707765-bdcb95dc6b4e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=800&q=80"
  ],
  packages: [
    {
      id: 'p21',
      name: 'Scenic Sikkim Escape',
      duration: '6 Days / 5 Nights',
      price: '₹27,000',
      highlights: ['Gangtok', 'Tsomgo Lake', 'Nathula Pass', 'Rumtek Monastery'],
      description: 'Enjoy the tranquil landscapes, spirituality, and clean mountain air of Sikkim.'
    }
  ]
},

{
  id: 17,
  name: 'Uttarakhand',
  slug: 'uttarakhand',
  type: 'domestic',
  description: "A land of pilgrimage and adventure nestled in the Himalayas, famous for its natural beauty and spiritual sites.",
  mainImage: "https://images.unsplash.com/photo-1564749515462-2be7f64407bb?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1573031392704-e84c4ee760af?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583485696321-f559fe8d2e6f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1621440313846-302e2827ac8b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600504292096-fb2d6949a254?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&w=800&q=80"
  ],
  packages: [
    {
      id: 'p22',
      name: 'Spiritual Uttarakhand Yatra',
      duration: '5 Days / 4 Nights',
      price: '₹On Request',
      highlights: ['Haridwar', 'Rishikesh', 'Mussoorie'],
      description: 'Perfect for a peaceful spiritual retreat with nature and yoga.'
    }
  ]
},

{
  id: 19,
  name: 'Haryana',
  slug: 'haryana',
  type: 'domestic',
  description: "A land of history, culture, rural beauty, and rapid urban growth in North India.",
  mainImage: "https://images.unsplash.com/photo-1596464716121-34bc5dc90a62?auto=format&fit=crop&w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1549305218-fcf50b105b06?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583511655937-89f0c942b332?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1601813954735-6e51f088b379?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576861646005-26b979f6a0c1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1611060534311-0e812527ce41?auto=format&fit=crop&w=800&q=80"
  ],
  packages: [
    {
      id: 'p23',
      name: 'Haryana Heritage & Urban Tour',
      duration: '3 Days / 2 Nights',
      price: '₹7,500',
      highlights: ['Kurukshetra', 'Pinjore Gardens', 'Gurugram Cyber Hub'],
      description: 'Enjoy a mix of ancient Indian history and modern lifestyle in Haryana.'
    }
    ,
    {
      id: 'p24',
      name: 'Haryana Heritage',
      duration: '7 Days / 6 Nights',
      price: '₹7,500',
      highlights: ['Kurukshetra', 'Pinjore Gardens', 'Gurugram Cyber Hub'],
      description: 'Enjoy a mix of ancient Indian history and modern lifestyle in Haryana.'
    }
  ]
},

{
  "id": 20,
  "name": "Sri Lanka",
  "slug": "sri-lanka",
  "type": "international",
  "description": "A tropical paradise with golden beaches, ancient temples, lush tea plantations, and vibrant wildlife.",
  "mainImage": "https://images.unsplash.com/photo-1582568888745-88b25b5e3895?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.unsplash.com/photo-1565498255681-4b51a011f8b2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558346648-9757f2fa4474?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598940603846-a1edd0ef2574?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523482589397-3d33397a85a1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598948484349-938219e9a1f3?auto=format&fit=crop&w=800&q=80"
  ],
  "packages": [
    {
      "id": "p25",
      "name": "Sri Lanka Highlights Tour",
      "duration": "5 Days / 4 Nights",
      "price": "₹25,000",
      "highlights": ["Sigiriya Rock Fortress", "Kandy Temple", "Mirissa Beach"],
      "description": "Explore Sri Lanka's iconic landmarks, from ancient ruins to coastal beauty."
    },
    {
      "id": "p26",
      "name": "Sri Lanka Wildlife & Beaches",
      "duration": "7 Days / 6 Nights",
      "price": "₹35,000",
      "highlights": ["Yala National Park", "Galle Fort", "Bentota Beach"],
      "description": "A perfect blend of safari adventures and tropical beach relaxation."
    }
  ]
},


    {
      id: 18,
      slug: "andaman",
      name: "Andaman",
      description: "India's best nesting beaches for three species of marine turtles.",
      mainImage: "https://images.pexels.com/photos/29175703/pexels-photo-29175703/free-photo-of-pristine-beach-in-andaman-and-nicobar-islands.jpeg?auto=compress&cs=tinysrgb&w=600",
      images: [
       img1,
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb575494mL1Rlbd7.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb5755a8tNIdWcuk.jpg",
        "https://example.com/rajasthan-4.jpg",
        "https://example.com/rajasthan-5.jpg"
      ],
      packages: [
        {
          id: 'p18',
          name: 'Emerald, Blue and You',
          duration: '8 Days / 7 Nights',
          price: '₹On Request',
          highlights: ['Radhanagar Beach', 'Cellular Jail', 'scuba diving', 'sea walking'],
          description: 'Where the waters sparkle, the skies stretch endlessly, and every corner whispers you belong here.'
        },
        
        {
          id: 'p18',
          name: 'Andaman Island 2 Star',
          duration: "5 Days / 4 Nights",
          price: '₹On Request',
          highlights: ['Radhanagar Beach', 'Cellular Jail', 'scuba diving', 'sea walking'],
          description: 'Where the waters sparkle, the skies stretch endlessly, and every corner whispers you belong here.'
        }
      ]
    },
    {
  id: 101,
  slug: "goa",
  name: "Goa",
  description: "A vibrant mix of Indian and Portuguese cultures, sun-kissed beaches, and buzzing nightlife.",
  mainImage: "https://images.pexels.com/photos/1468081/pexels-photo-1468081.jpeg?auto=compress&cs=tinysrgb&w=600",
  images: [
    "https://images.pexels.com/photos/1391400/pexels-photo-1391400.jpeg",
    "https://admiredashboard.theholistay.in/destination_images/goa1.jpg",
    "https://admiredashboard.theholistay.in/destination_images/goa2.jpg",
    "https://example.com/goa-3.jpg",
    "https://example.com/goa-4.jpg"
  ],
  packages: [
    {
      id: 'p21a',
      name: 'Weekend Getaway to Goa',
      duration: "2 Days / 1 Night",
      price: '₹On Request',
      highlights: ['Calangute Beach', 'Fort Aguada', 'Dudhsagar Falls', 'Cruise on Mandovi River'],
      description: 'A coastal paradise where the sun never sets on your happiness and every wave tells a story.'
    },
    {
      id: 'p21b',
      name: 'Goa Budget Delight',
      duration: "4 Days / 3 Nights",
      price: '₹On Request',
      highlights: ['Baga Beach', 'Chapora Fort', 'Anjuna Market', 'Goan cuisine'],
      description: 'Explore the spirited side of Goa with comfort and charm on a budget-friendly escape.'
    }
  ]
},
{
  id: 102,
  slug: "shimla",
  name: "Shimla",
  description: "The Queen of Hills, known for its colonial charm, snow-capped peaks, and serene landscapes.",
  mainImage: "https://images.pexels.com/photos/17432362/pexels-photo-17432362/free-photo-of-snow-covered-road-in-shimla.jpeg?auto=compress&cs=tinysrgb&w=600",
  images: [
    "https://images.pexels.com/photos/17432358/pexels-photo-17432358.jpeg",
    "https://admiredashboard.theholistay.in/destination_images/shimla1.jpg",
    "https://admiredashboard.theholistay.in/destination_images/shimla2.jpg",
    "https://example.com/shimla-3.jpg",
    "https://example.com/shimla-4.jpg"
  ],
  packages: [
    {
      id: 'p22a',
      name: 'Shimla Snow Escape',
      duration: '5 Days / 4 Nights',
      price: '₹On Request',
      highlights: ['Mall Road', 'Kufri', 'Jakhoo Temple', 'Toy Train Ride'],
      description: 'Experience the magic of snow, pine forests, and cozy hill-town charm in the lap of the Himalayas.'
    },
    {
      id: 'p22b',
      name: 'Heritage Shimla Tour',
      duration: "3 Days / 2 Nights",
      price: '₹On Request',
      highlights: ['Viceregal Lodge', 'Scandal Point', 'Lakkar Bazaar', 'Christ Church'],
      description: 'Walk through the colonial lanes of Shimla and relive its majestic history with a modern touch.'
    }
  ]
},


    // Add more destinations with similar structure
    {
  id: '20',
  name: 'Paris',
  slug: 'paris',
  type: 'international',
  description: 'Explore the city of love, iconic landmarks like the Eiffel Tower, and indulge in exquisite cuisine and fashion.',
  mainImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1499510318569-49f8870f9f74?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1533674689015-1ff7d1b51020?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1543342386-05f57f48e47b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1533049022227-27f0dd7f8ac2?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p20',
      name: 'Romantic Paris Getaway',
      duration: '6 Days / 5 Nights',
      price: '₹1,25,000',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'Champs-Élysées'],
      description: 'A romantic escape in the heart of France with iconic sights, gourmet cuisine, and luxurious stays.'
    }
  ]
},
{
  id: '21',
  name: 'Tokyo',
  slug: 'tokyo',
  type: 'international',
  description: 'Experience the perfect blend of tradition and futuristic innovation in Japan’s bustling capital city, Tokyo.',
  mainImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36512?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1505063915033-6f73c747470a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1585386959984-a4155222d6d3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1567071942016-7f08a0f3bb15?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p21',
      name: 'Tokyo Explorer Tour',
      duration: '7 Days / 6 Nights',
      price: '₹1,35,000',
      highlights: ['Shibuya Crossing', 'Tokyo Skytree', 'Asakusa Temple', 'Akihabara'],
      description: 'Dive into the heart of Japan with guided tours across Tokyo’s cultural, shopping, and entertainment hotspots.'
    }
  ]
},

{
  id: '22',
  name: 'New York',
  slug: 'new-york',
  type: 'international',
  description: 'Explore the city that never sleeps — from the Statue of Liberty to Times Square and Central Park, New York offers endless excitement.',
  mainImage: 'https://images.unsplash.com/photo-1549921296-3a95a6f2b98d?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1549921296-3a95a6f2b98d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1541855490-da447c68d1ba?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p22',
      name: 'New York Classic Tour',
      duration: '5 Days / 4 Nights',
      price: '₹1,60,000',
      highlights: ['Statue of Liberty', 'Empire State Building', 'Broadway Show', 'Central Park'],
      description: 'Discover the iconic landmarks, cultural diversity, and vibrant life of New York with our curated city tour.'
    }
  ]
},

{
  id: '23',
  name: 'London',
  slug: 'london',
  type: 'international',
  description: 'Experience the charm of London — visit Big Ben, Buckingham Palace, Tower Bridge, and explore rich history and modern culture.',
  mainImage: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1543340713-8c1b1a3be2c3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556909218-31e5c972e3c1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517802588979-02f2370b504b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1549633030-4a77a0c81a79?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p23',
      name: 'London Highlights Tour',
      duration: '6 Days / 5 Nights',
      price: '₹1,85,000',
      highlights: ['Big Ben', 'London Eye', 'Buckingham Palace', 'British Museum'],
      description: 'Explore the vibrant culture and iconic landmarks of London in this unforgettable guided tour experience.'
    }
  ]
},

{
  id: '24',
  name: 'Dubai',
  slug: 'dubai',
  type: 'international',
  description: 'Experience the glitz and glamour of Dubai — a city where futuristic architecture, luxury shopping, and desert adventures await.',
  mainImage: 'https://images.unsplash.com/photo-1573164574239-6f2b3d78ab56?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1602015522453-0213d7e19f1e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559718063-30172661c5c8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611153961749-9e48e2b0fcb3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1500111709600-7761aa8216a6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611573764354-c7288d462f6c?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p24',
      name: 'Dubai Luxury Explorer Package',
      duration: '5 Days / 4 Nights',
      price: '₹1,29,999',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Marina Cruise'],
      description: 'A luxurious Dubai experience featuring iconic skyscrapers, thrilling desert adventures, and world-class shopping.'
    }
  ]
},

{
  id: '25',
  name: 'Singapore',
  slug: 'singapore',
  type: 'international',
  description: 'Explore the vibrant city of Singapore, where modern architecture meets rich culture and world-renowned attractions.',
  mainImage: 'https://images.unsplash.com/photo-1549921296-3a6b5b27c340?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1553663188-dc8e2157a7b7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1549887534-27b1c3063b5f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582201940799-d2422b1c81e3?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p25',
      name: 'Singapore City Explorer Package',
      duration: '4 Days / 3 Nights',
      price: '₹99,999',
      highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Universal Studios'],
      description: 'Discover the magic of Singapore with visits to iconic landmarks, thrilling theme parks, and stunning cityscapes.'
    }
  ]
},

{
  id: '26',
  name: 'Bali',
  slug: 'bali',
  type: 'international',
  description: 'Immerse yourself in the tropical paradise of Bali, renowned for its lush landscapes, serene beaches, and vibrant culture.',
  mainImage: 'https://images.unsplash.com/photo-1546484959-f4460c6bde53?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551313931-0a866fb063de?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1532298488760-970ff6decf61?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1560155016-bd4879bcdedc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542332213-9f56a7e0716d?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p26',
      name: 'Bali Honeymoon Delight Package',
      duration: '5 Days / 4 Nights',
      price: '₹79,999',
      highlights: ['Ubud Tour', 'Tegallalang Rice Terrace', 'Beachside Candlelight Dinner', 'Tanah Lot Temple'],
      description: 'Experience romance and relaxation in Bali with cultural tours, beach retreats, and unforgettable sunset views.'
    }
  ]
},

{
  id: '27',
  name: 'Thailand',
  slug: 'thailand',
  type: 'international',
  description: 'Explore the vibrant street life, tropical beaches, ornate temples, and rich cultural heritage of Thailand.',
  mainImage: 'https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1584096606928-3c2de782bdb0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599361175740-20d8f8a49186?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581012775283-f9d1aa9ff824?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1604908177201-6600e0f9886a?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p27',
      name: 'Thailand Explorer Package',
      duration: '6 Days / 5 Nights',
      price: '₹64,999',
      highlights: ['Bangkok City Tour', 'Phi Phi Islands', 'Coral Island Excursion', 'Thai Cultural Show'],
      description: 'Discover the perfect blend of adventure and relaxation in Thailand with thrilling island tours and vibrant nightlife.'
    }
  ]
},

{
  id: '28',
  name: 'Switzerland',
  slug: 'switzerland',
  type: 'international',
  description: 'Experience the breathtaking beauty of the Swiss Alps, serene lakes, and charming villages. Switzerland offers a perfect blend of nature and culture.',
  mainImage: 'https://images.unsplash.com/photo-1571055107559-3e67626a4cd3?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1528291151371-197166db2830?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1615807711018-b4d1b64856ce?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1603089297100-8024b1d47c5a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p28',
      name: 'Swiss Scenic Escape',
      duration: '7 Days / 6 Nights',
      price: '₹1,49,999',
      highlights: ['Zurich City Tour', 'Mt. Titlis Experience', 'Lake Geneva Cruise', 'Interlaken Excursion'],
      description: 'Embark on a journey through the heart of Europe and witness the awe-inspiring beauty of Switzerland’s natural and cultural wonders.'
    }
  ]
},

{
  id: '29',
  name: 'Australia',
  slug: 'australia',
  type: 'international',
  description: 'Discover the land Down Under with its stunning beaches, iconic landmarks, and diverse wildlife. From the Sydney Opera House to the Great Barrier Reef, Australia has something for everyone.',
  mainImage: 'https://images.unsplash.com/photo-1506976785307-8732e854ad5b?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1580451940861-1cdbdbbcfd1b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542727316-1461a1c7ff79?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1546483797-b289f4f71a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590399431732-5a6b4e2d8be4?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p29',
      name: 'Australia Explorer Tour',
      duration: '10 Days / 9 Nights',
      price: '₹2,29,999',
      highlights: ['Sydney Opera House', 'Great Barrier Reef Cruise', 'Gold Coast Beaches', 'Melbourne City Tour'],
      description: 'Explore the vast landscapes, vibrant cities, and natural wonders of Australia with this comprehensive travel package covering all major highlights.'
    }
  ]
},
{
  id: '30',
  name: 'Italy',
  slug: 'italy',
  type: 'international',
  description: 'Experience the rich history, art, and cuisine of Italy. From the Colosseum in Rome to the romantic canals of Venice, Italy offers timeless beauty and culture.',
  mainImage: 'https://images.unsplash.com/photo-1526129318478-bbac2d2abf6f?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1536861603476-751d8e9f02c7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1587583770271-6b8e0c13f0cb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1612099281174-1be69e11647e?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p30',
      name: 'Romantic Italy Tour',
      duration: '8 Days / 7 Nights',
      price: '₹1,99,999',
      highlights: ['Rome', 'Florence', 'Venice', 'Leaning Tower of Pisa'],
      description: 'Explore the romance and charm of Italy through its historic cities, iconic landmarks, and culinary delights.'
    }
  ]
},

{
  id: '31',
  name: 'Spain',
  slug: 'spain',
  type: 'international',
  description: 'Enjoy the vibrant culture, flamenco music, stunning architecture, and Mediterranean beaches of Spain. A country where tradition and modernity blend beautifully.',
  mainImage: 'https://images.unsplash.com/photo-1528198535492-2bd9bfc4d1e4?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1543340910-89300c6894f8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1545060894-0290f1cf5edb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1594979656293-9420c569580c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=800&q=80'
  ],
  packages: [
    {
      id: 'p31',
      name: 'Classic Spain Vacation',
      duration: '9 Days / 8 Nights',
      price: '₹2,09,999',
      highlights: ['Madrid', 'Barcelona', 'Seville', 'Toledo'],
      description: 'From vibrant cities to rich cultural heritage and scenic coasts, this package offers the best of Spain in one memorable journey.'
    }
  ]
},










    
    {
      id: 32,
      slug: "maldives",
      name: "Maldives",
      description: "The Maldives evokes feelings of paradise.",
      mainImage: "https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
      images: [
        "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGRpdmVzfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1527401850656-0f34108fdb30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGRpdmVzfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGRpdmVzfGVufDB8fDB8fHww"
      ],
      packages: [
        {
          id: 'p20',
          name: 'Royal Paris Experience',
          duration: '8 Days / 7 Nights',
          price: '₹On Request',
          highlights: [' stunning beaches', 'vibrant coral reefs', 'diverse marine life', 'rainforests'],
          description: 'stunning natural beauty, including the crystal-clear waters.'
        }
      ]
    },
    {
      id: 34,
      slug: "vietnam",
      name: "Vietnam",
      description: "Lost in the magic of Vietnamese landscapes ",
      mainImage: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1531737212413-667205e1cda7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1545172538-171a802bd867?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZXRuYW18ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1480996408299-fc0e830b5db1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpZXRuYW18ZW58MHx8MHx8fDA%3D"
      ],
      packages: [
        {
          id: 'p20',
          name: 'Royal Paris Experience',
          duration: '8 Days / 7 Nights',
          price: '₹On Request',
          highlights: [' stunning beaches', 'vibrant coral reefs', 'diverse marine life', 'rainforests'],
          description: 'Finding paradise in Vietnam  hidden corners.'
        }
      ]
    },
  ];

  //  useEffect(() => {
  //   const fetchDomesticData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await getItenary("domesticItinery");
  //       console.log("response", response);
  
  //       if (response.data) {
  //         setDestinations(response.data); // Make sure to set the data to state
  //       }
  //     } catch (error) {
  //       console.error("Error loading domestic data:", error);
  //       // setDestinations(internationalDestinations);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchDomesticData();
  // }, []);
  


  useEffect(() => {
  const found = destinations.find(dest => dest.slug === slug);
  if (!found) {
    navigate('/');
    return;
  }
  setDestination(found);
}, [slug, navigate]);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setVisibleCards(1);
    } else if (window.innerWidth < 1024) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

const nextSlide = () => {
  if (isAnimating) return;
  setIsAnimating(true);
  setCurrentIndex(prev => {
    const nextIndex = prev + visibleCards;
    return nextIndex >= (destination?.packages?.length || 0) ? 0 : nextIndex;
  });
  setTimeout(() => setIsAnimating(false), 500);
};

const prevSlide = () => {
  if (isAnimating) return;
  setIsAnimating(true);
  setCurrentIndex(prev => {
    const prevIndex = prev - visibleCards;
    const total = destination?.packages?.length || 0;
    return prevIndex < 0 ? Math.max(0, total - visibleCards) : prevIndex;
  });
  setTimeout(() => setIsAnimating(false), 500);
};

const getVisiblePackages = () => {
  if (!destination?.packages) return [];
  const totalPackages = destination.packages.length;
  const endIndex = currentIndex + visibleCards;
  
  // If we don't need to wrap around
  if (endIndex <= totalPackages) {
    return destination.packages.slice(currentIndex, endIndex);
  }
  
  // If we need to wrap around, only show remaining packages
  return destination.packages.slice(currentIndex, totalPackages);
};

if (!destination) return <div className="text-center py-20">Loading destination...</div>;

return (
  <div className="bg-gray-50">
    <NavBar />
    
    <section className="pt-28 pb-12">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Destination Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#261F43] md:text-5xl text-3xl font-bold mb-4">{destination.name}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{destination.description}</p>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 h-96 rounded-xl overflow-hidden">
              <img 
                src={destination.images[activeImageIndex]} 
                alt={destination.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {destination.images.slice(0, 4).map((image, index) => (
                <div 
                  key={index} 
                  className={`h-44 rounded-lg overflow-hidden cursor-pointer transition-all ${activeImageIndex === index ? 'ring-4 ring-[#E69233]' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`${destination.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Available Packages</h2>
          
          <div className="relative overflow-hidden">
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition ml-2"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-[#E69233] text-xl" />
            </button>
            
            <div className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-70' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {getVisiblePackages().map((pkg) => (
                  <div 
                    key={pkg.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col border border-gray-200 cursor-pointer"
                    onClick={() => navigate(`/destinations/${slug}/packages/${pkg.id}`)}
                  >
                    <div className="w-full h-64 overflow-hidden relative">
                      <img 
                        alt={pkg.name} 
                        loading="lazy"
                        className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
                        src={destination.mainImage}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center mb-3">
                        <FaCalendarAlt className="text-[#E69233] mr-2" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <FaRupeeSign className="text-[#E69233] mr-2" />
                        <span className="font-bold">{pkg.price}</span>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Highlights:</h4>
                        <ul className="space-y-1">
                          {pkg.highlights.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#E69233] mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-gray-600 mb-4">{pkg.description}</p>
                      <div className="mt-auto flex gap-4 items-center">
                        <button 
                          className="flex-1 px-4 py-3 bg-[#E69233] text-white font-semibold rounded-lg hover:bg-[#d5822b] transition flex items-center justify-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle enquire now action
                          }}
                        >
                          <FaPhone className="mr-2" /> Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition mr-2"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-[#E69233] text-xl" />
            </button>
          </div>
        </div>

        {/* Destination Highlights */}
        <div className="mb-16 bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-6">Why Visit {destination.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#E69233]">Cultural Experiences</h3>
              <p className="text-gray-600">
                Immerse yourself in the rich cultural heritage with traditional performances, 
                local festivals, and authentic cuisine that will leave you mesmerized.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#E69233]">Natural Beauty</h3>
              <p className="text-gray-600">
                From pristine beaches to lush mountains, experience nature at its finest with 
                breathtaking landscapes and diverse wildlife.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <BannerCarousel />
    <Footer />
  </div>
);
};

export default DestinationDetail;