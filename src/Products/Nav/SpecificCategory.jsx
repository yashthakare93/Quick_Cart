import React from 'react';
import CategoryPage from './CategoryPage';
import all from '../data/all';
import footwear from '../data/footwears';
import headphone from '../data/headphone';

const SpecificCategory = ({ selectedCategory }) => {
  let data;

  switch (selectedCategory.toLowerCase()) {
    case 'footwear':
      data = footwear;
      break;
    case 'headphones':
      data = headphone;
      break;
    default:
      data = all;
      break;
  }

  return <CategoryPage selectedCategory={selectedCategory} data={data} />;
};

export default SpecificCategory;
