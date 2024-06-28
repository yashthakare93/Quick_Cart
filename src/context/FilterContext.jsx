import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedDiscount,setSelectedDiscount] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  const handleSelectPrice = (price) => {
    setSelectedPrice(price);
  };

  const handleSelectDiscount = (discount) => {
    setSelectedDiscount(discount);
  };

  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        handleSelectCategory,
        selectedColor,
        handleSelectColor,
        selectedPrice,
        handleSelectPrice,
        selectedDiscount,
        handleSelectDiscount
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
