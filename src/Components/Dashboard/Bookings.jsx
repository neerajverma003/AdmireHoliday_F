import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const Bookings = () => {
  // Sample bookings data - you can replace with your actual data
  const [bookings, setBookings] = useState([
    {
      id: 1,
      destination: "Bali, Indonesia",
      date: "Dec 15-22, 2024",
      guests: 2,
      status: "Confirmed",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      destination: "Paris, France",
      date: "Jan 10-17, 2025",
      guests: 1,
      status: "Pending",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300&h=200&fit=crop"
    }
  ]);

  // Toggle between having bookings and no bookings for demo
  const toggleBookings = () => {
    setBookings(bookings.length > 0 ? [] : [
      {
        id: 1,
        destination: "Bali, Indonesia",
        date: "Dec 15-22, 2024",
        guests: 2,
        status: "Confirmed",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop"
      },
      {
        id: 2,
        destination: "Paris, France",
        date: "Jan 10-17, 2025",
        guests: 1,
        status: "Pending",
        image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300&h=200&fit=crop"
      }
    ]);
  };

  const NoTripsImage = () => (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-gray-400">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 4.21l4.5 2.6 4.5-2.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 19.79V14.6L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12l-4.5 2.6v5.19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">No trips booked yet</h3>
      <p className="text-gray-500 text-center mb-4 max-w-sm">
        Start planning your next adventure! Browse our destinations and book your perfect getaway.
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Explore Destinations
      </button>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Bookings</h2>
        <button 
          onClick={toggleBookings}
          className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition-colors"
        >
          {bookings.length > 0 ? 'Clear Bookings' : 'Add Sample Bookings'}
        </button>
      </div>
      
      {bookings.length === 0 ? (
        <NoTripsImage />
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <img 
                  src={booking.image} 
                  alt={booking.destination}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 truncate">{booking.destination}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'Confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{booking.guests} guest{booking.guests > 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;