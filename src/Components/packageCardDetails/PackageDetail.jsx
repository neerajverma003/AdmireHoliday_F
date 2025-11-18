import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRupeeSign,
  FaStar,
  FaUtensils,
  FaHotel,
  FaBus,
  FaHiking,
  FaUmbrellaBeach,
} from "react-icons/fa";
import NavBar from "../NavBar";
import Footer from "../Footer";
// import BannerCarousel from './BannerCarousel';
// import { Link } from 'react-router-dom';

const PackageDetail = () => {
  const { slug, packageId } = useParams();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState(null);
  const [destination, setDestination] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data - in a real app, this would come from an API
  const destinations = [
    {
      id: 1,
      slug: "south-india",
      name: "SOUTH INDIA",
      description:
        "Experience the rich cultural heritage, beautiful beaches, and lush greenery of South India.",
      mainImage:
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRjnp3jxCLXIBSsJruIfQwTrrBpmord6VQnB_XtQr_zWNM6oaM6DcnGe2zWwBcw1j9BWXDvlnFCkjdb7Nwa9NOLMvM9hJ8D3HKNxT-fSQ",
      images: [
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRjnp3jxCLXIBSsJruIfQwTrrBpmord6VQnB_XtQr_zWNM6oaM6DcnGe2zWwBcw1j9BWXDvlnFCkjdb7Nwa9NOLMvM9hJ8D3HKNxT-fSQ",
        "https://media.gettyimages.com/id/172401015/photo/western-railway-headquarters-mumbai.jpg?s=612x612&w=0&k=20&c=krr_DJx1JPtbBioeZuayrVuP9z1VEAXEZ33wHjWsG7A=",
        "https://media.gettyimages.com/id/555341413/photo/munnar-landscape.jpg?s=612x612&w=0&k=20&c=pgAbAh-gfhtP0LpdQpYtNJtObXG8m3RKUxag-PD21eo=",
      ],
      packages: [
        {
          id: "p1",
          name: "Premium South India Tour",
          duration: "7 Days / 6 Nights",
          price: "₹25,000",
          highlights: ["Chennai", "Pondicherry", "Madurai", "Mysore"],
          description:
            "Comprehensive tour covering major cultural and historical sites of South India.",
          itinerary: [
            {
              day: 1,
              title: "Arrival in Chennai",
              description:
                "Arrive at Chennai airport and transfer to hotel. Half-day city tour visiting Marina Beach and Kapaleeshwarar Temple.",
            },
            {
              day: 2,
              title: "Chennai to Pondicherry",
              description:
                "Drive to Pondicherry. Visit Auroville, the experimental township and enjoy the French colonial architecture.",
            },
          ],
          inclusions: [
            "6 nights accommodation in 3-star hotels",
            "Daily breakfast",
            "All transfers and sightseeing by AC vehicle",
            "English speaking guide",
            "All applicable taxes",
          ],
          exclusions: [
            "Airfare/train tickets",
            "Lunch and dinner",
            "Personal expenses",
            "Anything not mentioned in inclusions",
          ],
          terms: [
            "30% advance to confirm booking",
            "Cancellation 30 days prior for full refund",
            "No refund for cancellations within 15 days of travel",
          ],
          cancellation: [
  "Free cancellation up to 3 days before the booking.",
  "50% charge for cancellations within 1 days.",
  "No refund for cancellations within 12 hours."
],

paymentModes: [
  "UPI",
  "Credit/Debit Card",
  "Net Banking",
  "Wallets (e.g., Paytm, PhonePe)"
],

        },
        {
          id: "p2",
          name: "Kerala Backwaters Special",
          duration: "5 Days / 4 Nights",
          price: "₹18,500",
          highlights: ["Alleppey Houseboat", "Kochi", "Munnar"],
          description:
            "Relax in the serene backwaters and explore tea gardens.",
        },
      ],
    },
    {
      id: 2,
      slug: "kashmir",
      name: "Kashmir",
      description:
        "Discover the paradise on earth with snow-capped mountains, scenic valleys, and tranquil lakes.",
      mainImage:
        "https://media.gettyimages.com/id/1133588884/photo/beautiful-kashmir-valley-during-autumn.jpg?s=612x612&w=0&k=20&c=r0Exl9-hmraC6sHtHieFiPz8HRKTdGP5uYeqKJZZ5B4=",
      images: [
        "https://media.gettyimages.com/id/1140249132/photo/dal-lake-srinagar.jpg?s=612x612&w=0&k=20&c=8TjHwlh8kD1ohrGTl7EzIs3AE2AHDd6n7qV8NzCG1j0=",
        "https://media.gettyimages.com/id/1285686243/photo/beautiful-view-of-pahalgam-kashmir.jpg?s=612x612&w=0&k=20&c=iK5zvbR7GqHzfROv2La3JdV6kkkKgRbPMbbILRScs1o=",
        "https://media.gettyimages.com/id/1397744922/photo/shikara-ride-on-dal-lake.jpg?s=612x612&w=0&k=20&c=piGqF9AHQZSPczKkVRXjQEBqxImnSCvqlY8jZCLWgEQ=",
        "https://media.gettyimages.com/id/1397744935/photo/gulmarg-kashmir-snow-landscape.jpg?s=612x612&w=0&k=20&c=kC9jcAmD9BLy37GpLz3MxGe1nbTTt70YVtScKzwVmcQ=",
        "https://media.gettyimages.com/id/1133588570/photo/snow-covered-pine-trees-in-kashmir.jpg?s=612x612&w=0&k=20&c=KMnK6Z1tTBGohKD9xyHfGkIb7NLB_3v7yQk3vUloyT4=",
      ],
      packages: [
        {
          id: "p1",
          name: "Kashmir Winter Wonderland",
          duration: "6 Days / 5 Nights",
          price: "₹28,000",
          highlights: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
          description:
            "Enjoy snowfall, skiing, and mesmerizing landscapes in the snowy valleys of Kashmir.",
          itinerary: [
            {
              day: 1,
              title: "Arrival in Srinagar",
              description:
                "Arrive in Srinagar and enjoy a relaxing Shikara ride on Dal Lake. Overnight stay in a houseboat.",
            },
            {
              day: 2,
              title: "Srinagar to Gulmarg",
              description:
                "Proceed to Gulmarg. Enjoy snow activities such as skiing and a ride on the Gondola cable car.",
            },
            {
              day: 3,
              title: "Gulmarg to Pahalgam",
              description:
                "Drive to Pahalgam. Explore the Lidder River, Aru and Betaab Valleys.",
            },
            {
              day: 4,
              title: "Pahalgam to Srinagar",
              description:
                "Return to Srinagar. Visit Mughal Gardens including Nishat Bagh and Shalimar Bagh.",
            },
            {
              day: 5,
              title: "Excursion to Sonmarg",
              description:
                "Take a full-day excursion to Sonmarg. Enjoy the scenic Thajiwas Glacier (pony ride optional).",
            },
            {
              day: 6,
              title: "Departure",
              description:
                "After breakfast, transfer to airport with wonderful memories of Kashmir.",
            },
          ],
          inclusions: [
            "5 nights accommodation in deluxe hotels/houseboat",
            "Daily breakfast and dinner",
            "All sightseeing and transfers by private AC vehicle",
            "Shikara ride on Dal Lake",
            "All applicable taxes",
          ],
          exclusions: [
            "Airfare/train tickets",
            "Lunch",
            "Pony rides, Gondola ride, skiing charges",
            "Personal expenses",
            "Anything not mentioned in inclusions",
          ],
          terms: [
            "30% advance to confirm booking",
            "Cancellation 30 days prior for full refund",
            "No refund for cancellations within 15 days of travel",
          ],
          cancellation: [
  "Free cancellation up to 3 days before the booking.",
  "50% charge for cancellations within 1 days.",
  "No refund for cancellations within 12 hours."
],
paymentModes: [
  "UPI",
  "Credit/Debit Card",
  "Net Banking",
  "Wallets (e.g., Paytm, PhonePe)"
],
        },
        {
          id: "p2",
          name: "Romantic Kashmir Retreat",
          duration: "4 Days / 3 Nights",
          price: "₹20,000",
          highlights: [
            "Dal Lake Shikara Ride",
            "Mughal Gardens",
            "Local Handicrafts",
          ],
          description:
            "Perfect getaway for couples seeking peace, nature, and romance in Kashmir.",
          itinerary: [
            {
              day: 1,
              title: "Arrival in Srinagar",
              description:
                "Arrive in Srinagar. Enjoy Shikara ride and overnight in a romantic houseboat.",
            },
            {
              day: 2,
              title: "Local Sightseeing",
              description:
                "Visit Mughal Gardens, Shankaracharya Temple, and explore local markets.",
            },
            {
              day: 3,
              title: "Excursion to Gulmarg",
              description:
                "Enjoy a day trip to Gulmarg. Experience the Gondola ride and snow activities.",
            },
            {
              day: 4,
              title: "Departure",
              description:
                "Transfer to the airport after breakfast for your onward journey.",
            },
          ],
          inclusions: [
            "3 nights accommodation in deluxe hotel/houseboat",
            "Breakfast and dinner",
            "Shikara ride",
            "Sightseeing and transfers by private vehicle",
            "All applicable taxes",
          ],
          exclusions: [
            "Airfare/train tickets",
            "Lunch",
            "Pony ride, Gondola tickets",
            "Personal expenses",
            "Anything not mentioned in inclusions",
          ],
          terms: [
            "30% advance to confirm booking",
            "Cancellation 15 days prior for full refund",
            "50% refund for cancellations within 7 days of travel",
          ],
          cancellation: [
  "Free cancellation up to 3 days before the booking.",
  "50% charge for cancellations within 1 days.",
  "No refund for cancellations within 12 hours."
],
paymentModes: [
  "UPI",
  "Credit/Debit Card",
  "Net Banking",
  "Wallets (e.g., Paytm, PhonePe)"
],
        },
      ],
    },

    {
      id: 3,
      slug: "rajasthan",
      name: "Rajasthan",
      description:
        "Discover the royal heritage, magnificent forts, and vibrant culture of Rajasthan.",
      mainImage:
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb5756b2YDpVGy3h.jpg",
      images: [
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb575318HrvR4tbl.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb575494mL1Rlbd7.jpg",
        "https://admiredashboard.theholistay.in/destination_images/1745170357_68052fb5755a8tNIdWcuk.jpg",
        "https://example.com/rajasthan-4.jpg",
        "https://example.com/rajasthan-5.jpg",
      ],
      packages: [
        {
          id: "p3",
          name: "Royal Rajasthan Experience",
          duration: "8 Days / 7 Nights",
          price: "₹32,000",
          highlights: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
          description:
            "Live like royalty as you explore majestic forts and palaces.",
          itinerary: [
            {
              day: 1,
              title: "Arrival in Jaipur",
              description:
                "Arrive in Jaipur and check-in to your hotel. Visit the City Palace and local markets in the evening.",
            },
            {
              day: 2,
              title: "Explore Jaipur",
              description:
                "Visit Amber Fort, Hawa Mahal, Jantar Mantar, and enjoy a traditional Rajasthani dinner.",
            },
            {
              day: 3,
              title: "Jaipur to Udaipur",
              description:
                "Drive to Udaipur. En route, visit Chittorgarh Fort. Overnight stay at Udaipur.",
            },
            {
              day: 4,
              title: "Explore Udaipur",
              description:
                "Visit City Palace, Lake Pichola boat ride, Jag Mandir, and Saheliyon Ki Bari.",
            },
            {
              day: 5,
              title: "Udaipur to Jodhpur",
              description:
                "Proceed to Jodhpur. Visit the majestic Mehrangarh Fort and Jaswant Thada.",
            },
            {
              day: 6,
              title: "Jodhpur to Jaisalmer",
              description:
                "Travel to Jaisalmer. Evening visit to local markets and overnight stay.",
            },
            {
              day: 7,
              title: "Explore Jaisalmer",
              description:
                "Visit Jaisalmer Fort, Patwon Ki Haveli, and enjoy a desert safari with cultural evening and dinner at Sam Sand Dunes.",
            },
            {
              day: 8,
              title: "Departure",
              description:
                "After breakfast, transfer to the nearest airport/railway station with royal memories.",
            },
          ],
          inclusions: [
            "7 nights accommodation in 3-star hotels",
            "Daily breakfast and 2 cultural dinners",
            "All transfers and sightseeing in AC vehicle",
            "Desert safari in Jaisalmer",
            "All applicable taxes",
          ],
          exclusions: [
            "Airfare/train tickets",
            "Lunch and additional dinners",
            "Entrance fees at monuments",
            "Personal expenses",
            "Anything not mentioned in inclusions",
          ],
          terms: [
            "30% advance to confirm booking",
            "Cancellation 30 days prior for full refund",
            "No refund for cancellations within 15 days of travel",
          ],
          cancellation: [
  "Free cancellation up to 3 days before the booking.",
  "50% charge for cancellations within 1 days.",
  "No refund for cancellations within 12 hours."
],
paymentModes: [
  "UPI",
  "Credit/Debit Card",
  "Net Banking",
  "Wallets (e.g., Paytm, PhonePe)"
],

        },
      ],
    },

    {
      id: 4,
      slug: "kerala",
      name: "Kerala",
      description:
        "Explore God’s Own Country with its serene backwaters, lush landscapes, and rich traditions.",
      mainImage:
        "https://images.unsplash.com/photo-1603252110481-3d9a95c940ff?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1600334129128-44f84e032fde?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1628920413393-c891d9a2a95d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599733580041-11880e8f6dbf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576753894824-50cb4f4e3c09?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1610003453726-26d1b6c50d7e?auto=format&fit=crop&w=800&q=80",
      ],
      packages: [
        {
          id: "p4",
          name: "Backwaters & Beaches of Kerala",
          duration: "6 Days / 5 Nights",
          price: "₹22,000",
          highlights: ["Alleppey", "Varkala Beach", "Kumarakom", "Kochi"],
          description:
            "Experience houseboat cruises, peaceful beaches, and Ayurvedic bliss.",
          itinerary: [
            {
              day: 1,
              title: "Arrival in Kochi",
              description:
                "Arrive at Kochi. Explore Fort Kochi, Chinese Fishing Nets, and enjoy a Kathakali performance in the evening.",
            },
            {
              day: 2,
              title: "Kochi to Alleppey (Houseboat)",
              description:
                "Transfer to Alleppey and check-in to a private houseboat. Cruise through the serene backwaters with onboard meals.",
            },
            {
              day: 3,
              title: "Alleppey to Kumarakom",
              description:
                "Check-out from houseboat and transfer to Kumarakom. Visit bird sanctuary and relax at the lakeside resort.",
            },
            {
              day: 4,
              title: "Kumarakom to Varkala",
              description:
                "Drive to Varkala. Relax at the cliffside beach and enjoy the sunset views.",
            },
            {
              day: 5,
              title: "Varkala to Kochi",
              description:
                "Return to Kochi and enjoy local shopping or visit Marine Drive. Overnight stay.",
            },
            {
              day: 6,
              title: "Departure",
              description:
                "Transfer to Kochi airport/railway station for departure with sweet memories.",
            },
          ],
          inclusions: [
            "5 nights accommodation in deluxe hotels/houseboat",
            "Daily breakfast, lunch, and dinner on houseboat",
            "Private vehicle for transfers and sightseeing",
            "All applicable taxes",
          ],
          exclusions: [
            "Airfare/train tickets",
            "Personal expenses",
            "Entrance fees at monuments and parks",
            "Anything not mentioned in inclusions",
          ],
          terms: [
            "30% advance to confirm booking",
            "Cancellation 15 days prior for full refund",
            "50% refund for cancellations within 7 days of travel",
          ],
          cancellation: [
  "Free cancellation up to 3 days before the booking.",
  "50% charge for cancellations within 1 days.",
  "No refund for cancellations within 12 hours."
],
paymentModes: [
  "UPI",
  "Credit/Debit Card",
  "Net Banking",
  "Wallets (e.g., Paytm, PhonePe)"
],

        },
        {
          id: "p5",
          name: "Munnar & Thekkady Hills Tour",
          duration: "5 Days / 4 Nights",
          price: "₹19,500",
          highlights: ["Munnar Tea Gardens", "Thekkady Wildlife Sanctuary"],
          description:
            "A perfect blend of nature, hills, and adventure in Kerala’s greenest spots.",
          itinerary: [
            {
              day: 1,
              title: "Arrival in Kochi - Transfer to Munnar",
              description:
                "Drive through scenic hills to reach Munnar. En route, visit waterfalls and spice plantations.",
            },
            {
              day: 2,
              title: "Explore Munnar",
              description:
                "Visit Tea Museum, Mattupetty Dam, Echo Point, and enjoy a walk through tea gardens.",
            },
            {
              day: 3,
              title: "Munnar to Thekkady",
              description:
                "Drive to Thekkady. Enjoy a boat ride in Periyar Lake and optional elephant ride or Kalari show.",
            },
            {
              day: 4,
              title: "Thekkady to Kochi",
              description:
                "Return to Kochi with en route visits to spice gardens and optional shopping.",
            },
            {
              day: 5,
              title: "Departure from Kochi",
              description:
                "Transfer to airport/railway station for your onward journey.",
            },
          ],
          inclusions: [
            "4 nights accommodation in 3-star hotels",
            "Daily breakfast",
            "Private AC vehicle for all transfers and sightseeing",
            "All applicable taxes",
          ],
          exclusions: [
            "Airfare/train tickets",
            "Lunch and dinner",
            "Boating and safari charges",
            "Anything not mentioned in inclusions",
          ],
          terms: [
            "30% advance to confirm booking",
            "Full refund on cancellations 15+ days before travel",
            "25% cancellation charge within 7 days of travel",
          ],
          cancellation: [
  "Free cancellation up to 3 days before the booking.",
  "50% charge for cancellations within 1 days.",
  "No refund for cancellations within 12 hours."
],
paymentModes: [
  "UPI",
  "Credit/Debit Card",
  "Net Banking",
  "Wallets (e.g., Paytm, PhonePe)"
],
        },
      ],
    },

    {
      id: 18,
      slug: "andaman",
      name: "Andaman",
      description:
        "Experience the pristine beaches, crystal-clear waters, and exotic marine life of the Andaman Islands.",
      mainImage:
        "https://media.istockphoto.com/id/837165318/photo/similan-bay-sailing-rock-island-in-andaman-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=3L0uDS2cwIfWjyPpvUssmCrv2kgELuwEM6R6AznrsYw=",
      images: [
        "https://images.unsplash.com/photo-1641719423878-f8b9e4be6320?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1586359716568-3e1907e4cf9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1593202232429-549625b8660d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuZGFtYW4lMjBhbmQlMjBuaWNvYmFyJTIwaXNsYW5kcyUyMGluZGlhfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1587920852757-baf1240ea820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuZGFtYW4lMjBhbmQlMjBuaWNvYmFyJTIwaXNsYW5kcyUyMGluZGlhfGVufDB8fDB8fHww",
      ],
      packages: [
        {
          id: "p18",
          name: "Emerald, Blue and You",
          duration: "8 Days / 7 Nights",
          price: "₹On Request",
          highlights: [
            "Port Blair",
            "Havelock Island",
            "Radhanagar Beach",
            "Elephant Beach",
          ],
          description:
            "Comprehensive tour covering the best beaches and marine experiences in Andaman.",
          itinerary: [
            {
              day: 1,
              title: "Arrival in Port Blair",
              description:
                "Arrive at Veer Savarkar International Airport and transfer to hotel. Visit Cellular Jail for light and sound show in the evening.",
            },
            {
              day: 2,
              title: "Port Blair to Havelock",
              description:
                "Morning ferry to Havelock Island. Visit Radhanagar Beach, rated as Asia's best beach.",
            },
          ],
          inclusions: [
            "5 nights accommodation in 3-star hotels/resorts",
            "Daily breakfast",
            "All transfers and sightseeing by AC vehicle",
            "Ferry tickets to Havelock Island",
            "English speaking guide",
            "All applicable taxes",
          ],
          exclusions: [
            "Airfare",
            "Lunch and dinner",
            "Water sports activities",
            "Personal expenses",
            "Anything not mentioned in inclusions",
          ],
          terms: [
            "30% advance to confirm booking",
            "Cancellation 30 days prior for full refund",
            "No refund for cancellations within 15 days of travel",
          ],
          cancellation: [
  "Free cancellation up to 3 days before the booking.",
  "50% charge for cancellations within 1 days.",
  "No refund for cancellations within 12 hours."
],
paymentModes: [
  "UPI",
  "Credit/Debit Card",
  "Net Banking",
  "Wallets (e.g., Paytm, PhonePe)"
],
        },
        {
          id: "p2",
          name: "Andaman Adventure Package",
          duration: "5 Days / 4 Nights",
          price: "₹25,500",
          highlights: [
            "Scuba Diving",
            "Snorkeling",
            "Jet Ski",
            "Glass Bottom Boat Ride",
          ],
          description:
            "Thrilling water sports and marine adventure in the beautiful Andaman waters.",
        },
      ],
    },
 
    



    {
      id: 34,
      slug: "vietnam",
      name: "Vietnam",
      description: "Lost in the magic of Vietnamese landscapes",
      mainImage:
        "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1531737212413-667205e1cda7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1545172538-171a802bd867?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZXRuYW18ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1480996408299-fc0e830b5db1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpZXRuYW18ZW58MHx8MHx8fDA%3D",
      ],
      packages: [
        {
          id: "p20",
          name: "Royal Vietnam Experience",
          duration: "8 Days / 7 Nights",
          price: "₹On Request",
          highlights: [
            "Stunning beaches",
            "Vibrant coral reefs",
            "Diverse marine life",
            "Rainforests",
          ],
          description: "Finding paradise in Vietnam's hidden corners.",
          itinerary: [
            {
              day: 1,
              title: "Arrival in Hanoi",
              description:
                "Arrive at Hanoi airport and transfer to hotel. Explore the Old Quarter and enjoy a traditional Water Puppet show.",
            },
            {
              day: 2,
              title: "Hanoi City Tour",
              description:
                "Visit Ho Chi Minh Mausoleum, One Pillar Pagoda, Temple of Literature, and the serene Hoan Kiem Lake.",
            },
            {
              day: 3,
              title: "Hanoi to Halong Bay",
              description:
                "Drive to Halong Bay. Board a luxury cruise and explore limestone islands, caves, and enjoy onboard activities.",
            },
            {
              day: 4,
              title: "Halong Bay to Da Nang",
              description:
                "Morning cruise ends. Transfer to Hanoi and take a flight to Da Nang. Relax by the beach.",
            },
            {
              day: 5,
              title: "Ba Na Hills & Golden Bridge",
              description:
                "Excursion to Ba Na Hills. Walk on the famous Golden Bridge and enjoy cable car rides.",
            },
            {
              day: 6,
              title: "Hoi An Heritage Town",
              description:
                "Visit the ancient town of Hoi An, explore lantern-lit streets, local markets, and traditional architecture.",
            },
            {
              day: 7,
              title: "Explore Marine Life",
              description:
                "Day trip to Cham Islands for snorkeling and coral reef viewing. Relax on pristine beaches.",
            },
            {
              day: 8,
              title: "Departure",
              description:
                "Transfer to Da Nang airport for departure with beautiful memories of Vietnam.",
            },
          ],
          inclusions: [
            "7 nights accommodation in 3-star or deluxe hotels",
            "Daily breakfast and 2 lunches on cruise",
            "Luxury cruise in Halong Bay",
            "Domestic flight from Hanoi to Da Nang",
            "All sightseeing and transfers in private AC vehicle",
            "English-speaking guide",
            "All applicable taxes",
          ],
          exclusions: [
            "International flights",
            "Visa fees",
            "Dinner and remaining lunches",
            "Personal expenses",
            "Activities not mentioned in itinerary",
            "Travel insurance",
          ],
          terms: [
            "50% advance to confirm booking",
            "Full refund for cancellations 30 days before travel",
            "25% cancellation fee within 15–30 days",
            "No refund within 14 days of departure",
          ],
          cancellation: [
  "Free cancellation up to 3 days before the booking.",
  "50% charge for cancellations within 1 days.",
  "No refund for cancellations within 12 hours."
],
paymentModes: [
  "UPI",
  "Credit/Debit Card",
  "Net Banking",
  "Wallets (e.g., Paytm, PhonePe)"
],
        },
      ],
    },

    // Add other destinations from your DestinationDetail.jsx here
  ];

  useEffect(() => {
    const foundDestination = destinations.find((dest) => dest.slug === slug);
    if (!foundDestination) {
      navigate("/");
      return;
    }
    setDestination(foundDestination);

    const foundPackage = foundDestination.packages.find(
      (pkg) => pkg.id === packageId
    );
    if (!foundPackage) {
      navigate(`/destinations/${slug}`);
      return;
    }
    setPackageData(foundPackage);
  }, [slug, packageId, navigate]);

  if (!packageData || !destination) {
    return <div className="text-center py-20">Loading package details...</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="bg-gray-50">
        {/* <NavBar /> */}

        <section className="pt-28 pb-12">
          <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm">
              <Link to="/" className="text-[#E69233] hover:underline">
                Home
              </Link>{" "}
              &gt;
              <Link
                to={`/destinations/${slug}`}
                className="text-[#E69233] hover:underline"
              >
                {" "}
                {destination.name}
              </Link>{" "}
              &gt;
              <span className="text-gray-600"> {packageData.name}</span>
            </div>

            {/* Package Header */}
            <div className="mb-8">
              <h1 className="text-[#261F43] text-4xl font-bold mb-2">
                {packageData.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[#E69233] mr-2" />
                  <span>{destination.name}</span>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="text-[#E69233] mr-2" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaRupeeSign className="text-[#E69233] mr-2" />
                  <span className="font-bold">{packageData.price}</span>
                </div>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-600">(24 reviews)</span>
              </div>
            </div>

            {/* Image Gallery */}
            {/* Image Gallery - Redesigned */}
            <div className="mb-12 relative">
              <div className="container mx-auto">
                {/* Main Featured Image */}
                <div className="Banner_featuredImage relative h-96 rounded-xl overflow-hidden">
                  <span className="block overflow-hidden w-full h-full absolute inset-0">
                    <img
                      src={destination.images[activeImageIndex]}
                      alt={packageData.name}
                      className="w-full h-full object-cover transition-all duration-300"
                      style={{
                        position: "absolute",
                        inset: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </span>
                </div>

                {/* Category Images */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  {destination.images.slice(0, 4).map((image, index) => (
                    <div
                      key={index}
                      className={`Banner_categoryImage relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer transition-all ${
                        activeImageIndex === index
                          ? "ring-4 ring-[#E69233]"
                          : ""
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <span className="block overflow-hidden w-full h-full absolute inset-0">
                        <img
                          src={image}
                          alt={`${packageData.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </span>
                      {index === 3 && destination.images.length > 4 && (
                        <div className="Banner_viewAllImagesBtn absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-xs">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-1"
                          >
                            <g clipPath="url(#clip0_420_1971)">
                              <path
                                d="M1.33203 8C1.33203 4.85734 1.33203 3.286 2.30803 2.30934C3.28536 1.33334 4.85603 1.33334 7.9987 1.33334C11.1414 1.33334 12.7127 1.33334 13.6887 2.30934C14.6654 3.28667 14.6654 4.85734 14.6654 8C14.6654 11.1427 14.6654 12.714 13.6887 13.69C12.7134 14.6667 11.1414 14.6667 7.9987 14.6667C4.85603 14.6667 3.2847 14.6667 2.30803 13.69C1.33203 12.7147 1.33203 11.1427 1.33203 8Z"
                                stroke="currentColor"
                              ></path>
                              <path
                                d="M10.6654 6.66667C11.4017 6.66667 11.9987 6.06972 11.9987 5.33334C11.9987 4.59696 11.4017 4 10.6654 4C9.92898 4 9.33203 4.59696 9.33203 5.33334C9.33203 6.06972 9.92898 6.66667 10.6654 6.66667Z"
                                stroke="currentColor"
                              ></path>
                              <path
                                d="M1.33203 8.33334L2.50003 7.31134C2.79279 7.05538 3.17186 6.92023 3.56051 6.93322C3.94916 6.94622 4.31836 7.1064 4.59336 7.38134L7.45336 10.2413C7.6753 10.4632 7.9684 10.5997 8.28106 10.6268C8.59373 10.6539 8.90592 10.5698 9.1627 10.3893L9.36203 10.2493C9.73243 9.98919 10.1801 9.86238 10.6319 9.88963C11.0837 9.91687 11.5129 10.0966 11.8494 10.3993L13.9987 12.3333"
                                stroke="currentColor"
                                strokeLinecap="round"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_420_1971">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <span>View All Images</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Package Details */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-2/3">
                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "overview"
                          ? "border-[#E69233] text-[#E69233]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab("itinerary")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "itinerary"
                          ? "border-[#E69233] text-[#E69233]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Itinerary
                    </button>
                    <button
                      onClick={() => setActiveTab("inclusions")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "inclusions"
                          ? "border-[#E69233] text-[#E69233]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Inclusions/Exclusions
                    </button>
                    <button
                      onClick={() => setActiveTab("terms")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "terms"
                          ? "border-[#E69233] text-[#E69233]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Terms
                    </button>

                    {/* cancellation Policy */}
                    <button
                      onClick={() => setActiveTab("cancellation")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "cancellation"
                          ? "border-[#E69233] text-[#E69233]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Cancellation
                    </button>
                    
                    <button
                      onClick={() => setActiveTab("paymentModes")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "paymentModes"
                          ? "border-[#E69233] text-[#E69233]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Payment modes
                    </button>

                  </nav>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                  {activeTab === "overview" && (
                    <>
                      <h2 className="text-2xl font-bold mb-4 text-[#261F43]">
                        Package Overview
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {packageData.description}
                      </p>

                      <h3 className="text-xl font-semibold mb-3 text-[#E69233]">
                        Highlights
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {packageData.highlights.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#E69233] mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                          <FaHotel className="text-3xl text-[#E69233] mb-2" />
                          <span className="font-medium">Accommodation</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                          <FaUtensils className="text-3xl text-[#E69233] mb-2" />
                          <span className="font-medium">Meals</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                          <FaBus className="text-3xl text-[#E69233] mb-2" />
                          <span className="font-medium">Transport</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                          <FaHiking className="text-3xl text-[#E69233] mb-2" />
                          <span className="font-medium">Activities</span>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "itinerary" && packageData.itinerary && (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
                        Detailed Itinerary
                      </h2>
                      <div className="space-y-6">
                        {packageData.itinerary.map((day, index) => (
                          <div
                            key={index}
                            className="border-l-4 border-[#E69233] pl-6 py-2"
                          >
                            <div className="flex items-center mb-2">
                              <div className="bg-[#E69233] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                                {day.day}
                              </div>
                              <h3 className="text-lg font-semibold">
                                {day.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 pl-12">
                              {day.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {activeTab === "inclusions" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#E69233]">
                          Inclusions
                        </h3>
                        <ul className="space-y-2">
                          {packageData.inclusions?.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#E69233] mr-2">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#E69233]">
                          Exclusions
                        </h3>
                        <ul className="space-y-2">
                          {packageData.exclusions?.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "terms" && packageData.terms && (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
                        Terms & Conditions
                      </h2>
                      <ul className="space-y-3">
                        {packageData.terms.map((term, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#E69233] mr-2">•</span>
                            <span>{term}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {activeTab === "cancellation" && packageData.cancellation && (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
                        Cancellation policy
                      </h2>
                      <ul className="space-y-3">
                        {packageData.cancellation.map((cancellation, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#E69233] mr-2">•</span>
                            <span>{cancellation}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {activeTab === "paymentModes" && packageData.paymentModes && (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
                        Accepted Payment Modes
                      </h2>
                      <ul className="space-y-3">
                        {packageData.paymentModes.map((paymentModes, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#E69233] mr-2">•</span>
                            <span>{paymentModes}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}


                </div>

                {/* Reviews Section */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
                    Customer Reviews
                  </h2>
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                        <span className="ml-2 font-medium">
                          Amazing Experience!
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">
                        "This tour exceeded all our expectations. The hotels
                        were excellent and the itinerary was perfectly planned."
                      </p>
                      <p className="text-sm text-gray-500">
                        - Rajesh Kumar, March 2023
                      </p>
                    </div>
                    <div className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        {[...Array(4)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                        <FaStar className="text-gray-300" />
                        <span className="ml-2 font-medium">Great Value</span>
                      </div>
                      <p className="text-gray-600 mb-2">
                        "For the price we paid, this was an excellent package.
                        The guide was knowledgeable and the transportation was
                        comfortable."
                      </p>
                      <p className="text-sm text-gray-500">
                        - Priya Sharma, January 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {}

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-28">
                  <h3 className="text-xl font-bold mb-4 text-[#261F43]">
                    Book This Package
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price per person</span>
                      <span className="font-bold">{packageData.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span>{packageData.duration}</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>{packageData.price}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 px-6 py-3 bg-[#E69233] text-white font-semibold rounded-lg hover:bg-[#d5822b] transition flex items-center justify-center">
                      <FaPhone className="mr-2" /> Book Now
                    </button>
                    <button
      className="w-full mt-2 px-6 py-3 bg-white text-[#E69233] font-semibold rounded-lg border border-[#E69233] hover:bg-gray-50 transition flex items-center justify-center"
      onClick={() => navigate("/contact")}
    >
      Enquire Now
    </button>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-3">Need help booking?</h4>
                    <p className="text-gray-600 mb-4">
                      Call our customer services team on the number below to
                      speak to one of our advisors who will help you with all of
                      your holiday needs.
                    </p>
                    <div className="flex items-center text-[#E69233] font-medium">
                      <FaPhone className="mr-2" /> 1800-121-4252
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <BannerCarousel /> */}
        {/* <Footer /> */}
      </div>
      <Footer />
    </div>
  );
};

export default PackageDetail;
