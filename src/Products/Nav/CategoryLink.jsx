// CategoryLink.js
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLink = ({ category, selectedCategory, onClick }) => {
  return (
    <li>
      <Link
        to={`#${category.toLowerCase()}`} // Use hash link for demo purpose
        className={`text-white ${selectedCategory === category ? 'font-bold' : ''}`}
        onClick={() => onClick(category)}
      >
        {category}
      </Link>
    </li>
  );
};

export default CategoryLink;
