// import axios from 'axios';
// const baseURL=import.meta.env.VITE_API_URL

// const api = axios.create({
//   // baseURL: "https://api.admireholidays.com",

//   baseURL: `${baseURL}/api/v1`,

//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
// console.log('ertyu+' +api.defaults.baseURL)

// // POST: contact form
// export const submitContactForm = (data) => api.post('/contact', data);

// export const submitJourneyEnquiry = (data) => api.post('/planYourJourney', data);
// export const planYourJourneyForm = (data) => api.post('/planYourTrip', data);


// // POST: suggestion or complaint
// export const subscribeForm=(data)=>api.post('/subscribe',data);
// export const submitSuggestionComplaint = (data) => api.post('/suggestionComplain', data);
// export const travelGallery=()=> api.get('/customer-gallery');

// // export const getHeroSection = (title) => api.get(`/hero-section/${title}`);

// export const getHeroSection = () => api.get("/admin/hero");

// export const getTestimonialVideo=()=> api.get('/testimonials');

// export const getBlogDetails=()=> api.get('/blog');

// export const getBlogDetailsPage=()=> api.get('/blog/id');

// export const getHomeDomesticInternational = (type) => api.get(`/destination/home/DomesticAndInternational`);

// export const getItenary = (type) => api.get(`/itineraries/${type}`);

// export const getExclusivePackages=()=> api.get('/destination/classified-itinerary');
// export const getTrendingDestinations=()=> api.get('/destination/home/trending-destination');
// export const getInternationalPackages=()=> api.get('/destination/home/international-packages');


// export const getDomesticAndInternationalPage=(type)=> api.get(`/destination/only-domestic-or-international/${type}`);

// export const getDestinationItenary=()=> api.get('/destination/only-domestic-or-international/domestic');

// export const getItenaryOFDomesticInternationalPages = (id) => api.get(`/itinerary/${id}`);

















// export default api;

import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL || "https://api.admireholidays.com";

// Create the axios instance
const api = axios.create({
  baseURL: `${baseURL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

// POST: contact form
export const submitContactForm = (data) => api.post("/contact", data);

export const submitJourneyEnquiry = (data) =>
  api.post("/planYourJourney", data);
export const planYourJourneyForm = (data) => api.post("/planYourTrip", data);

// POST: suggestion or complaint
export const subscribeForm = (data) => api.post("/subscribe", data);
export const submitSuggestionComplaint = (data) =>
  api.post("/suggestionComplain", data);
export const travelGallery = () => api.get("/customer-gallery");

export const getHeroSection = (title) => api.get(`/hero-section/${title}`);

// export const getHeroSection = () => api.get("/admin/hero");

export const getTestimonialVideo = () => api.get("/testimonials");

export const getBlogDetails = () => api.get("/blog");

export const getBlogDetailsPage = () => api.get("/blog/id");

export const getHomeDomesticInternational = (type) =>
  api.get(`/destination/home/DomesticAndInternational`);

export const getItenary = (type) => api.get(`/itineraries/${type}`);

export const getExclusivePackages = () =>
  api.get("/destination/classified-itinerary");
export const getTrendingDestinations = () =>
  api.get("/destination/home/trending-destination");
export const getInternationalPackages = () =>
  api.get("/destination/home/international-packages");

export const getDomesticAndInternationalPage = (type) =>
  api.get(`/destination/only-domestic-or-international/${type}`);

export const getDestinationItenary = () =>
  api.get("/destination/only-domestic-or-international/domestic");

export const getItenaryOFDomesticInternationalPages = (id) =>
  api.get(`/itinerary/${id}`);

export default api;
