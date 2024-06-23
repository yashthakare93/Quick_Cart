// FilterContext.js
import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <FilterContext.Provider value={{ selectedColor, setSelectedColor, selectedCategory, setSelectedCategory }}>
      {children}
    </FilterContext.Provider>
  );
};
