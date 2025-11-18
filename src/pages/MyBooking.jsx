import { Routes, Route } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';
import Profile from '../Components/Dashboard/Profile';
import Bookings from '../Components/Dashboard/Bookings';
import Header from '../Components/Dashboard/Header';
import NavBar from '../Components/NavBar';
import Review from '../Components/Dashboard/Review';
import Payments from '../Components/Dashboard/Payments';
import Help from '../Components/Dashboard/Help';

const MyBooking = () => {
  return (
    <div>
      <NavBar/>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header/>
          
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route index element={<Profile />} /> {/* This handles /my-profile */}
              <Route path="profile" element={<Profile />} /> 
              <Route path="bookings" element={<Bookings />} /> 
              <Route path="reviews" element={<Review />} />
              <Route path="payments" element={<Payments />} /> 
              <Route path="help" element={<Help />} /> 






            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;