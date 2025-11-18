// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import NavBar from "../Components/NavBar";
// import Footer from "../Components/Footer";

// const DestinationPage = () => {
//   const { destinationId } = useParams();
//   const [destination, setDestination] = useState(null);
//   const [packages, setPackages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch destination data based on destinationId
//     const fetchData = async () => {
//       try {
//         // Replace with your actual API calls
//         const destResponse = await fetch(`/api/destinations/${destinationId}`);
//         const packagesResponse = await fetch(`/api/packages?destination=${destinationId}`);
        
//         const destData = await destResponse.json();
//         const packagesData = await packagesResponse.json();
        
//         setDestination(destData);
//         setPackages(packagesData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [destinationId]);

//   if (loading) return <div>Loading...</div>;
//   if (!destination) return <div>Destination not found</div>;

//   return (
//     <div className="destination-page">
//       <NavBar />
      
//       <main className="py-10 px-5 max-w-7xl mx-auto">
//         {/* Destination Hero Section */}
//         <section className="mb-12">
//           <div className="relative h-96 w-full rounded-xl overflow-hidden">
//             <img
//               src={destination.images[0]}
//               alt={destination.name}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
//               <div>
//                 <h1 className="text-4xl font-bold text-white mb-2">{destination.name}</h1>
//                 <p className="text-xl text-white/90">{destination.description}</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Packages Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold mb-8 text-center">
//             Packages for {destination.name}
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {packages.map((pkg) => (
//               <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={pkg.image}
//                     alt={pkg.name}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
//                   <p className="text-gray-600 mb-4">{pkg.description}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="font-bold text-lg">₹{pkg.price}</span>
//                     <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Gallery Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold mb-8 text-center">
//             Explore {destination.name}
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {destination.images.slice(1).map((image, index) => (
//               <div key={index} className="h-48 rounded-lg overflow-hidden">
//                 <img
//                   src={image}
//                   alt={`${destination.name} ${index + 1}`}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default DestinationPage;