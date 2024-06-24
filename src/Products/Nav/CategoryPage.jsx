import React from 'react';
import { FilterProvider } from '../../context/FilterContext';
import CardGrid from '../CardGrid';
import Sidebar from '../Sidebar/Sidebar';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const CategoryPage = ({ selectedCategory, data }) => {
  let dataToRender = data; // Start with all data

  if (selectedCategory.toLowerCase() !== 'all') {
    dataToRender = data.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
  }

  // Shuffle data if needed
  dataToRender = shuffleArray(dataToRender);

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
