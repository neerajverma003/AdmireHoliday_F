import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show confirmation first
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    // Actual logout logic
    console.log("Logging out...");
    // Clear user session/token
    // Redirect to login page
    navigate("/");
    setShowLogoutConfirm(false);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const handleNotifications = () => {
    console.log("Notifications clicked");
  };

  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  };

  return (
    <header className="bg-white shadow">
      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to sign out?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          {/* Notification Button */}
          <button 
            onClick={handleNotifications}
            className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none relative"
          >
            <span className="sr-only">Notifications</span>
            <BellIcon className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                className="h-8 w-8 rounded-full object-cover"
                src={user.avatar}
                alt="User profile"
              />
              <span className="hidden md:inline text-sm font-medium text-gray-700">
                {user.name}
              </span>
              <ChevronDownIcon className="h-4 w-4 text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1" role="menu">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                  
                  
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;