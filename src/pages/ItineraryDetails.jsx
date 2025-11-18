import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getExclusivePackages } from "../api/api";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRupeeSign,
  FaStar,
  FaHotel,
  FaUtensils,
  FaBus,
  FaHiking,
  FaPhone
} from "react-icons/fa";

const ItineraryDetails = () => {
  const { id } = useParams();
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await getExclusivePackages();
        console.log(response)
        if (!response?.data?.data) {
          throw new Error("Invalid API response structure");
        }

        const allItineraries = [
          ...(response.data.data.exclusiveItineraryData || []),
          ...(response.data.data.weekendItineraryDetails || [])
        ];

        const found = allItineraries.find(pkg => pkg._id === id);

        if (!found) {
          throw new Error("Itinerary not found");
        }

        setItinerary(found);
        console.log(itinerary);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Loading itinerary...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="bg-gray-50">
        <section className="pt-28 pb-12">
          <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm">
              <Link to="/" className="text-[#E69233] hover:underline">
                Home
              </Link>{" "}
              &gt;
              <Link
                to={`/destinations/${itinerary.selected_destination?.destination_name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[#E69233] hover:underline"
              >
                {" "}
                {itinerary.selected_destination?.destination_name}
              </Link>{" "}
              &gt;
              <span className="text-gray-600"> {itinerary.title}</span>
            </div>

            {/* Package Header */}
            <div className="mb-8">
              <h1 className="text-[#261F43] text-4xl font-bold mb-2">
                {itinerary.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[#E69233] mr-2" />
                  <span>{itinerary.selected_destination?.destination_name}</span>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="text-[#E69233] mr-2" />
                  <span>{itinerary.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaRupeeSign className="text-[#E69233] mr-2" />
                  <span className="font-bold">{itinerary.pricing}</span>
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
            <div className="mb-12 relative">
              <div className="container mx-auto">
                {/* Main Featured Image */}
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <span className="block overflow-hidden w-full h-full absolute inset-0">
                    {itinerary.destination_images && itinerary.destination_images.length > 0 && (
                      <img
                        src={itinerary.destination_images[activeImageIndex]}
                        alt={itinerary.title}
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
                    )}
                  </span>
                </div>

                {/* Category Images */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  {itinerary.destination_images?.slice(0, 4).map((img, index) => (
                    <div
                      key={index}
                      className={`relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer transition-all ${
                        activeImageIndex === index
                          ? "ring-4 ring-[#E69233]"
                          : ""
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <span className="block overflow-hidden w-full h-full absolute inset-0">
                        <img
                          src={img}
                          alt={`${itinerary.title} ${index + 1}`}
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
                      {index === 3 && itinerary.destination_images.length > 4 && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-xs">
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
                        {itinerary.description || "Explore this amazing destination with our carefully crafted itinerary."}
                      </p>

                      {itinerary.itinerary_theme?.length > 0 && (
                        <>
                          <h3 className="text-xl font-semibold mb-3 text-[#E69233]">
                            Themes
                          </h3>
                          <div className="flex flex-wrap gap-3 mb-6">
                            {itinerary.itinerary_theme.map((theme, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                              >
                                {theme}
                              </span>
                            ))}
                          </div>
                        </>
                      )}

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

                  {activeTab === "itinerary" && itinerary.days_information && (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
                        Detailed Itinerary
                      </h2>
                      <div className="space-y-6">
                        {itinerary.days_information.map((day, index) => (
                          <div
                            key={index}
                            className="border-l-4 border-[#E69233] pl-6 py-2"
                          >
                            <div className="flex items-center mb-2">
                              <div className="bg-[#E69233] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                                {day.day}
                              </div>
                              <h3 className="text-lg font-semibold">
                                {day.locationName}
                              </h3>
                            </div>
                            <p className="text-gray-600 pl-12">
                              {day.locationDetail}
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
                          {itinerary.inclusions?.map((item, i) => (
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
                          {itinerary.exclusions?.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "terms" && itinerary.terms_and_conditions && (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
                        Terms & Conditions
                      </h2>
                      <div className="text-gray-600 whitespace-pre-line">
                        {itinerary.terms_and_conditions}
                      </div>
                    </>
                  )}

                  {activeTab === "paymentModes" && itinerary.payment_mode && (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
                        Accepted Payment Modes
                      </h2>
                      <div className="text-gray-600 whitespace-pre-line">
                        {itinerary.payment_mode}
                      </div>
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

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-28">
                  <h3 className="text-xl font-bold mb-4 text-[#261F43]">
                    Book This Package
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price per person</span>
                      <span className="font-bold">{itinerary.pricing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span>{itinerary.duration}</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>{itinerary.pricing}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 px-6 py-3 bg-[#E69233] text-white font-semibold rounded-lg hover:bg-[#d5822b] transition flex items-center justify-center">
                      <FaPhone className="mr-2" /> Book Now
                    </button>
                    <button className="w-full mt-2 px-6 py-3 bg-white text-[#E69233] font-semibold rounded-lg border border-[#E69233] hover:bg-gray-50 transition flex items-center justify-center">
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
      </div>
      <Footer />
    </div>
  );
};

export default ItineraryDetails;