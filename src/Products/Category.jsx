// Category.js
import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

const Category = () => {
  const { selectedCategory, setSelectedCategory } = useContext(FilterContext);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2">Category</h3>
      <ul>
        {[
          'All',
          'sneakers',
          'flats',
          'heels',
          'sandals'
        ].map((category) => (
          <li key={category} className="mb-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-600"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              <span className="ml-2">{category}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
