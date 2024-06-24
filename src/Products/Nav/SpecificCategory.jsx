import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import allData from '../ProductData/allData';

const SpecificCategory = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category') || 'All'; // Default to 'All'

  return <CategoryPage selectedCategory={selectedCategory} data={allData} />;
};

export default SpecificCategory;
