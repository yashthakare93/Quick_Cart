import React from 'react';
import { FilterProvider } from '../../context/FilterContext';
import CardGrid from '../CardGrid';
import Sidebar from '../Sidebar/Sidebar';

const CategoryPage = ({ selectedCategory, data }) => {
  let dataToRender = data; // Start with all data

  if (selectedCategory.toLowerCase() !== 'all') {
    dataToRender = data.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
  }

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
