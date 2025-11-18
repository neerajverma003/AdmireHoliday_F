import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ 
  placeholder = "Search destinations, packages...", 
  onSearch, 
  className = "",
  size = "default", // "default", "compact", "large"
  showSuggestions = true,
  suggestions = []
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Default suggestions with paths
  const defaultSuggestions = [
    { id: 1, text: "Goa Beach Package", type: "destination", icon: faMapMarkerAlt, path: "/destinations/goa" },
    { id: 2, text: "Kashmir Honeymoon", type: "destination", icon: faMapMarkerAlt, path: "/destinations/kashmir" },
    { id: 3, text: "Kerala Backwaters", type: "destination", icon: faMapMarkerAlt, path: "/destinations/kerala" },
    { id: 4, text: "Rajasthan Tour", type: "destination", icon: faMapMarkerAlt, path: "/destinations/rajasthan" },
    { id: 5, text: "International Packages", type: "category", icon: faGlobe, path: "/international" },
    { id: 6, text: "Domestic Tours", type: "category", icon: faGlobe, path: "/domestic" },
  ];

  const currentSuggestions = suggestions.length > 0 ? suggestions : defaultSuggestions;

  // Filter suggestions based on search query
  const filteredSuggestions = currentSuggestions.filter(suggestion =>
    suggestion.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle click outside to close dropdown
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      searchRef.current && 
      !searchRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
      setIsSearchFocused(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to the destination path if it matches a suggestion
      const matchedSuggestion = currentSuggestions.find(
        suggestion => suggestion.text.toLowerCase() === searchQuery.toLowerCase()
      );
      if (matchedSuggestion) {
        navigate(matchedSuggestion.path);
      } else {
        // Fallback: Navigate to a generic search results page or handle as needed
        navigate(`/destinations/${searchQuery.toLowerCase()}`);
      }
      setShowDropdown(false);
      setIsSearchFocused(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.text);
    // Navigate to the suggestion's path if it exists
    if (suggestion.path) {
      navigate(suggestion.path);
    } else {
      // Fallback: Navigate to a generic path
      navigate(`/destinations/${suggestion.text.toLowerCase()}`);
    }
    setShowDropdown(false);
    setIsSearchFocused(false);
  };

  // Rest of the component remains the same...
  const clearSearch = () => {
    setSearchQuery("");
    setShowDropdown(false);
    searchRef.current?.focus();
  };

  const handleInputFocus = () => {
    setIsSearchFocused(true);
    if (showSuggestions && (searchQuery || filteredSuggestions.length > 0)) {
      setShowDropdown(true);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (showSuggestions && value.length > 0) {
      setShowDropdown(true);
    } else if (showSuggestions && value.length === 0) {
      setShowDropdown(true); // Show all suggestions when empty
    } else {
      setShowDropdown(false);
    }
  };

  // Size variants (unchanged)
  const sizeClasses = {
    compact: "px-3 py-1 pl-8 pr-8 text-sm",
    default: "px-4 py-2 pl-10 pr-10 text-sm",
    large: "px-6 py-3 pl-12 pr-12 text-base"
  };

  const iconSizeClasses = {
    compact: "left-2 text-xs",
    default: "left-3 text-sm",
    large: "left-4 text-base"
  };

  const clearIconSizeClasses = {
    compact: "right-2 text-xs",
    default: "right-3 text-sm",
    large: "right-4 text-base"
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform scale-105' : ''}`}>
          <input
            ref={searchRef}
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder={placeholder}
            className={`w-full ${sizeClasses[size]} text-gray-800 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-500 transition-all duration-200`}
            autoComplete="off"
          />
          
          {/* Search Icon */}
          <button
            type="submit"
            className={`absolute ${iconSizeClasses[size]} top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-800 transition-colors`}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          
          {/* Clear Button */}
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className={`absolute ${clearIconSizeClasses[size]} top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors`}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>
        
        {/* Search Suggestions Dropdown */}
        {showSuggestions && showDropdown && (
          <div 
            ref={dropdownRef}
            className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-[9999] max-h-64 overflow-y-auto"
            style={{ zIndex: 9999 }}
          >
            <div className="p-2">
              {searchQuery && (
                <div className="px-3 py-2 text-gray-600 text-xs font-medium uppercase tracking-wide border-b border-gray-100 mb-2">
                  Search Results
                </div>
              )}
              
              {!searchQuery && (
                <div className="px-3 py-2 text-gray-600 text-xs font-medium uppercase tracking-wide border-b border-gray-100 mb-2">
                  Popular Destinations
                </div>
              )}
              
              <div className="space-y-1">
                {searchQuery && (
                  <button 
                    onClick={() => handleSuggestionClick({ text: searchQuery })}
                    className="w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded text-sm transition-colors flex items-center"
                  >
                    <FontAwesomeIcon icon={faSearch} className="mr-3 text-gray-400" />
                    <span>Search for "<strong>{searchQuery}</strong>"</span>
                  </button>
                )}
                
                {filteredSuggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded text-sm transition-colors flex items-center"
                  >
                    <FontAwesomeIcon 
                      icon={suggestion.icon || faMapMarkerAlt} 
                      className={`mr-3 ${suggestion.type === 'destination' ? 'text-blue-500' : 'text-green-500'}`} 
                    />
                    <span>{suggestion.text}</span>
                    {suggestion.type && (
                      <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                        suggestion.type === 'destination' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {suggestion.type}
                      </span>
                    )}
                  </button>
                ))}
                
                {filteredSuggestions.length === 0 && searchQuery && (
                  <div className="px-3 py-4 text-gray-500 text-sm text-center">
                    No suggestions found for "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;