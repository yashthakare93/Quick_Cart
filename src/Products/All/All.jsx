import React from 'react';
import CardGrid from '../CardGrid'; 
import Sidebar from '../Sidebar/Sidebar';
import { FilterProvider } from '../../context/FilterContext';


const All = ({ selectedCategory }) => {
  return (
    <FilterProvider>
      <div className="flex flex-row">
        <div className="pt-4">
          <Sidebar selectedCategory={selectedCategory} />
        </div>
        <div className="pl-4">
          <CardGrid selectedCategory={selectedCategory} />
        </div>
      </div>
    </FilterProvider>
  );
};

export default All;
