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
              value="All Products"
              checked={selectedCategory === 'All Products'}
              onChange={() => handleCategoryChange('All Products')}
            />
            <span className="ml-2">All Products</span>
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
              value="Home & Kitchen"
              checked={selectedCategory === 'Home & Kitchen'}
              onChange={() => handleCategoryChange('Home & Kitchen')}
            />
            <span className="ml-2">Home & Kitchen</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="category"
              value="Smartphone & Headphones"
              checked={selectedCategory === 'Smartphone & Headphones'}
              onChange={() => handleCategoryChange('Smartphone & Headphones')}
            />
            <span className="ml-2">Smartphone & Headphones</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="category"
              value="Fashion & Beauty"
              checked={selectedCategory === 'Fashion & Beauty'}
              onChange={() => handleCategoryChange('Fashion & Beauty')}
            />
            <span className="ml-2">Fashion & Beauty</span>
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
