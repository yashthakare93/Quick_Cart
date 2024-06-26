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
    <div >
      <div className='hidden lg:block'><Navbar />
      
      </div>
      
      <CategoryNav onSelectCategory={handleSelectCategory} />
    
      <SpecificCategory selectedCategory={selectedCategory} />
      
    </div>
  );
};

export default Product;
