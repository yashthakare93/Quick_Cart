// CardGrid.js
import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import Card from './Card';
import { Link } from 'react-router-dom';

const CardGrid = ({ data, selectedCategory }) => {
  const { selectedColor } = useContext(FilterContext);

  // Filter data based on selected color and category
  const filteredData = data.filter(product => {
    const matchColor = selectedColor === 'All' || product.color.toLowerCase() === selectedColor.toLowerCase();
    const matchCategory = selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchColor && matchCategory;
  });

  return (
    <div className="grid grid-cols-5 gap-1 p-4">
      {filteredData.map((product, index) => (
        <div key={index}>
          <Link to={`/products/${product.id}`}>
          <Card
            img={product.imgs && product.imgs.length > 0 ? product.imgs[0] : 'fallback-image-url'} 
            title={product.title}
            star={product.star}
            reviews={product.reviews}
            prevPrice={product.prevPrice}
            newPrice={product.newPrice}
            company={product.company}
            color={product.color}
            category={product.subcategory}
            rating={product.rating}
            imagesByColor={product.imagesByColor}
          /></Link>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
