// CardGrid.js
import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import Card from './Card';

const CardGrid = ({ data, selectedCategory }) => {
  const { selectedColor } = useContext(FilterContext);

  // Filter data based on selected color and category
  const filteredData = data.filter(product => {
    const matchColor = selectedColor === 'All' || product.color.toLowerCase() === selectedColor.toLowerCase();
    const matchCategory = selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchColor && matchCategory;
  });

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {filteredData.map((product, index) => (
        <div key={index}>
          <Card
            img={product.img}
            title={product.title}
            star={product.star}
            reviews={product.reviews}
            prevPrice={product.prevPrice}
            newPrice={product.newPrice}
            company={product.company}
            color={product.color}
            category={product.category}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
