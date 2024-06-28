import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    setIsMenuOpen(false);
    navigate({
      pathname: '/products',
      search: category.toLowerCase() === 'all' ? '' : `?category=${category.toLowerCase()}`,
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-950">
      <div className="flex justify-between items-center p-4 sm:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>
      <ul className={`flex-col space-y-2 p-4 sm:flex-row sm:space-y-0 sm:space-x-6 sm:flex ${isMenuOpen ? 'flex' : 'hidden'} sm:flex bg-blue-950 sm:justify-center`}>
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              to={{
                pathname: '/products',
                search: category.toLowerCase() === 'all' ? '' : `?category=${category.toLowerCase()}`,
              }}
              className={`text-white block ${initialCategory.toLowerCase() === category.toLowerCase() ? 'font-bold' : ''}`}
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
