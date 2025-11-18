import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryLayout = ({ title, categories }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600 mb-8">Explore our curated {title.toLowerCase()} packages</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.path} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryLayout;