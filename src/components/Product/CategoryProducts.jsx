// src/components/Categories.js
import React from 'react';

const categories = [
  { id: 1, name: 'Electronics', imageUrl: 'https://example.com/electronics.jpg' },
  { id: 2, name: 'Fashion', imageUrl: 'https://example.com/fashion.jpg' },
  { id: 3, name: 'Home & Garden', imageUrl: 'https://example.com/home-garden.jpg' },
];

const Categories = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative">
              <img src={category.imageUrl} alt={category.name} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
