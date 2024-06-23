import React, { useState } from 'react';
import CategoryNav from '../Products/Nav/CategoryNav';
import SpecificCategory from '../Products/Nav/SpecificCategory';
import Navbar from '../components/Navbar/Navbar';

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="">
      <Navbar />
      <CategoryNav onSelectCategory={handleSelectCategory} />
      <div className="flex-grow p-4">
        <SpecificCategory selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Product;
