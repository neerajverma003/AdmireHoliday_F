import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import DestinationGrid from "../Components/destinations/DestinationGrid";
import HeroReusable from "../Components/heroSection/HeroReusable";
import SubscribeUs from "../forms/SubscribeUs";
import VideoTestimonials from "../Components/VideoTestimonials";
// import TravelGallery from "../Components/TravelGallery";
import { getDomesticAndInternationalPage } from "../api/api";

const Domestic = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDomesticDestinations = async () => {
      try {
        const response = await getDomesticAndInternationalPage("domestic");

        if (!Array.isArray(response?.data?.data)) {
          throw new Error("Invalid destination data");
        }

        const formatted = response.data.data
          .filter((d) => d.domestic_or_international === "Domestic")
          .map((d) => ({
            id: d._id,
            slug: d.destination_name.toLowerCase().replace(/\s+/g, "-"),
            name: d.destination_name,
            description: "Explore this destination",
            images: d.title_image || [],
          }));

        setDestinations(formatted);
      } catch (err) {
        console.error(err);
        setError("Failed to load destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDomesticDestinations();
  }, []);

  return (
    <>
      <NavBar />

      <HeroReusable
        pageTitle="domestic"
        heroTitle="Explore The Best Domestic Tour Packages in India"
        heroSubtitle="Discover India's most beautiful destinations"
      />

      <div className="py-12 bg-gray-50">
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <DestinationGrid
            destinations={destinations}
            title="Popular Domestic Destinations"
            type="domestic"
            loading={loading}
          />
        )}
      </div>

      <VideoTestimonials />
      <SubscribeUs />
      {/* <TravelGallery /> */}
      <Footer />
    </>
  );
};

export default Domestic;
