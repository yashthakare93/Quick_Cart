import React, { useState } from 'react';

const Category = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category); // Call the function passed as prop
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2">Category</h3>
      <ul>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="category"
              value="All"
              checked={selectedCategory === 'All '}
              onChange={() => handleCategoryChange('All')}
            />
            <span className="ml-2">All</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="category"
              value="Electronics"
              checked={selectedCategory === 'Electronics'}
              onChange={() => handleCategoryChange('Electronics')}
            />
            <span className="ml-2">Electronics</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="category"
              value="Home"
              checked={selectedCategory === 'Home'}
              onChange={() => handleCategoryChange('Home')}
            />
            <span className="ml-2">Home</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="category"
              value="Smartphone "
              checked={selectedCategory === 'Smartphone '}
              onChange={() => handleCategoryChange('Smartphone ')}
            />
            <span className="ml-2">Smartphone</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="category"
              value="Fashion"
              checked={selectedCategory === 'Fashion'}
              onChange={() => handleCategoryChange('Fashion')}
            />
            <span className="ml-2">Fashion</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="category"
              value="Books, Toys & Gaming"
              checked={selectedCategory === 'Books, Toys & Gaming'}
              onChange={() => handleCategoryChange('Books, Toys & Gaming')}
            />
            <span className="ml-2">Books, Toys & Gaming</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Category;
