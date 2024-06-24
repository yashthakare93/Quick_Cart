import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const categories = [
  'All',
  'Footwears',
  'Electronics',
  'Home',
  'Kitchens',
  'Fashion',
  'Books',
  'Toys',
  'Gaming'
];

const CategoryNav = ({ onSelectCategory }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get('category') || 'All';

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    navigate({
      pathname: '/products',
      search: category.toLowerCase() === 'all' ? '' : `?category=${category.toLowerCase()}`,
    });
  };

  return (
    <nav className="flex justify-center py-2 bg-blue-950">
      <ul className="flex space-x-6">
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              to={{
                pathname: '/products',
                search: category.toLowerCase() === 'all' ? '' : `?category=${category.toLowerCase()}`,
              }}
              className={`text-white ${initialCategory.toLowerCase() === category.toLowerCase() ? 'font-bold' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;
