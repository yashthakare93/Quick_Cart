import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ColorFilter from '../Filters/ColorFilter';
import PriceFilter from '../Filters/PriceFilter';
import DiscountFilter from '../Filters/DiscountFilter';

const subcategories = ['Sneakers', 'Boots', 'Sandals'];

const FootwearSidebar = ({ selectedCategory, selectedSubcategory, onClickCategory }) => {
  const location = useLocation();

  return (
    <div className="h-screen w-44 flex flex-col px-4">
      <div className="mb-4">
        <ul>
          <li>
            <Link
              to={{
                pathname: location.pathname,
                search: `?category=footwears`,
              }}
              className={`block py-2 ${selectedCategory && selectedCategory.toLowerCase() === 'footwears' && !selectedSubcategory ? 'font-bold' : ''}`}
              onClick={() => onClickCategory('Footwears')}
            >
              All Footwears
            </Link>
            <ul className="pl-4">
              {subcategories.map((subcategory, index) => (
                <li key={index}>
                  <Link
                    to={{
                      pathname: location.pathname,
                      search: `?category=footwears&subcategory=${subcategory.toLowerCase()}`,
                    }}
                    className={`block py-1 ${selectedSubcategory && selectedSubcategory.toLowerCase() === subcategory.toLowerCase() ? 'font-bold' : ''}`}
                  >
                    {subcategory}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className="flex-grow overflow-y-auto">
        <PriceFilter />
        <ColorFilter />
        <DiscountFilter />
      </div>
    </div>
  );
};

export default FootwearSidebar;
