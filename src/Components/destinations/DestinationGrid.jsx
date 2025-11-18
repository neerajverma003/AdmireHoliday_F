import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DestinationCard from './DestinationCard';

const DestinationGrid = ({ 
  destinations = [], 
  title = "Explore Destinations",
  type,
  loading = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Safe filtering
  const filteredDestinations = destinations.filter(dest => {
    if (!dest || !dest.name) return false;
    return dest.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">Loading destinations...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{title}</h2>
        <p className="text-lg text-gray-600">
          {type === 'domestic' 
            ? 'Discover beautiful Indian destinations' 
            : 'Explore amazing international locations'}
        </p>
      </div>
      
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder={`Search ${type} destinations...`}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDestinations.map(destination => (
            <DestinationCard 
              key={destination.id || destination._id}
              destination={destination} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {destinations.length === 0 
              ? 'No destinations available.' 
              : 'No destinations found matching your search.'}
          </p>
        </div>
      )}
    </div>
  );
};

DestinationGrid.propTypes = {
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      _id: PropTypes.string,
      name: PropTypes.string.isRequired, // Make name required
      slug: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      type: PropTypes.oneOf(['domestic', 'international'])
    })
  ),
  title: PropTypes.string,
  type: PropTypes.oneOf(['domestic', 'international']).isRequired,
  loading: PropTypes.bool
};

export default DestinationGrid;