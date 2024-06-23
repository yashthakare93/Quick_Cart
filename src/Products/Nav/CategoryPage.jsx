import React from 'react';
import CardGrid from '../CardGrid';
import Sidebar from '../Sidebar/Sidebar';
import { FilterProvider } from '../../context/FilterContext';
import all from '../data/all';
import footwear from '../data/footwears';
import headphone from '../data/headphone';

const categoryData = {
  All: all,
  Footwear: footwear,
  Headphones: headphone,
  // Add other categories as needed
};

const CategoryPage = ({ selectedCategory }) => {
  // Select the correct data set based on selectedCategory
  const dataToRender = categoryData[selectedCategory] || all;

  return (
    <FilterProvider>
      <div className="flex flex-row">
        <div className="pt-4">
          <Sidebar selectedCategory={selectedCategory} />
        </div>
        <div className="pl-4">
          <CardGrid data={dataToRender} selectedCategory={selectedCategory} />
        </div>
      </div>
    </FilterProvider>
  );
};

export default CategoryPage;
