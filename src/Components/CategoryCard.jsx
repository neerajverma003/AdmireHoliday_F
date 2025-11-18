import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={category.path}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
            {category.name}
          </h3>
        </div>
      </Link>
      <div className="p-4">
        <p className="text-gray-600 mb-4">{category.description}</p>
        <Link 
          to={category.path} 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Explore Packages
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;