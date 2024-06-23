// CategoryNav.js
import React, { useState } from 'react';
import CategoryLink from './CategoryLink';

const categories = [
  'All',
  'Footwear',
  'Electronics & Accessories',
  'Home & Kitchens',
  'Laptops',
  'Mobile',
  'Fashion',
  'Books, Toys & Gaming',
  'Headphones'
];

const CategoryNav = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <nav className="flex justify-center py-2 bg-blue-950">
      <ul className="flex space-x-6">
        {categories.map((category, index) => (
          <CategoryLink
            key={index}
            category={category}
            selectedCategory={selectedCategory}
            onClick={handleCategoryClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;
