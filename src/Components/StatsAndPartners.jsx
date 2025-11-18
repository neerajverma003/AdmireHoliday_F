import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';



import hotel1 from '../assets/resortsimages/1.webp';
import hotel2 from '../assets/resortsimages/2.webp';
import hotel3 from '../assets/resortsimages/3.webp';
import hotel4 from '../assets/resortsimages/4.webp';
import hotel5 from '../assets/resortsimages/5.webp';
import hotel6 from '../assets/resortsimages/6.webp';
import hotel7 from '../assets/resortsimages/7.webp';
import hotel8 from '../assets/resortsimages/8.webp';
import hotel9 from '../assets/resortsimages/9.webp';
import hotel10 from '../assets/resortsimages/10.webp';

const StatsAndPartners = () => {
  // Autoplay plugin
  const AutoPlayPlugin = (slider) => {
    let timeout;
    let mouseOver = false;
    
    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, 3000); 
    }
    
    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  };

  // Keen Slider configuration
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 'auto',
      spacing: 16,
    },
    created: (instance) => {
      AutoPlayPlugin(instance);
    }
  });
  

  // Hotel data for the carousel
  const hotels = [
    { name: 'Royal Heritage', logo: hotel1 },
    { name: 'Pine View', logo: hotel2 },
    { name: 'Pillican', logo: hotel3 },
    { name: 'Reef Valley', logo: hotel4 },
    { name: 'Sangrilla', logo: hotel5 },
    { name: 'Casa Montana', logo: hotel6 },
    { name: 'Munnar Castle', logo: hotel7 },
    { name: 'Bamboo Dale', logo: hotel8 },
    { name: 'Periyar Nest', logo: hotel9 },
    { name: 'Grand Thekaddy', logo: hotel10 },
  ];

  return (
    <div className="space-y-28">
      {/* Milestones Section */}
      <section className="relative bg-gradient-to-br from-[#155146] via-[#1e3a34] to-[#0a1e1c] mt-28 py-20 mb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/stars.svg')] bg-cover pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-14 drop-shadow-lg">
            Milestones That Speak for Themselves
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <MilestoneCard 
              icon={
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-5xl text-[#fffbeb]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"></path>
                </svg>
              }
              value="100,000+"
              label="Packages Booked"
            />
            
            <MilestoneCard 
              icon={
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-5xl text-[#fffbeb]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path>
                </svg>
              }
              value="500+"
              label="Destinations Covered"
            />
            
            <MilestoneCard 
              icon={
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-5xl text-[#fffbeb]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z"></path>
                </svg>
              }
              value="8+"
              label="Years in Business"
            />
            
            <MilestoneCard 
              icon={
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-5xl text-[#fffbeb]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              }
              value="4.9"
              label="Customer Rating"
            />
          </div>
        </div>
      </section>

      {/* Hotel Alliances Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">Our Hotel Partners</h2>
            <p className="mt-4 text-lg text-gray-600">Trusted partners offering unique and comfortable stays worldwide</p>
          </div>
          
          <div className="px-2">
            <div ref={sliderRef} className="keen-slider">
              {hotels.map((hotel, index) => (
                <div 
                  key={index} 
                  className="keen-slider__slide flex items-center justify-center" 
                  style={{ minWidth: '214px', maxWidth: '214px' }}
                >
                  <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-xl overflow-hidden shadow-md bg-white p-3 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                    <img 
                      alt={`${hotel.name} Logo`} 
                      loading="lazy" 
                      width="192" 
                      height="192" 
                      decoding="async" 
                      className="object-contain w-full h-full" 
                      src={hotel.logo}
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// MilestoneCard component
const MilestoneCard = ({ icon, value, label }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center text-white transition-all duration-700 transform opacity-100 translate-y-0 hover:scale-105 hover:shadow-yellow-300/50">
      <div className="mb-4">{icon}</div>
      <div className="text-5xl font-extrabold text-yellow-300">
        <span>{value}</span>
      </div>
      <p className="text-lg mt-3 font-medium text-gray-100 text-center">{label}</p>
    </div>
  );
};

export default StatsAndPartners;