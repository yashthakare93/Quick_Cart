import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CategoryLink = ({ category, selectedCategory, onClick }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={{
          pathname: location.pathname,
          search: `?category=${category.toLowerCase()}`,
        }}
        className={`text-white ${selectedCategory === category ? 'font-bold' : ''}`}
        onClick={() => onClick(category)}
      >
        {category}
      </Link>
    </li>
  );
};

export default CategoryLink;
