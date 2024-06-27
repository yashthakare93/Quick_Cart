// Path: ../Products/Nav/PriceFilter.js
import React, { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';

const prices = ['All', '< 1000', '< 2000', '< 3000', '< 4000', '< 5000', '> 5000'];

const PriceFilter = () => {
  const { selectedPrice, handleSelectPrice } = useContext(FilterContext);

  return (
    <div className="mt-4">
      <h3 className="text-black font-semibold">Price</h3>
      <ul className="flex flex-col space-y-2 mt-2 p-2">
        {prices.map(price => (
          <li key={price} className="flex items-center space-x-2">
            <input
              type="radio"
              id={price}
              name="priceFilter"
              value={price.toLowerCase().replace(' ', '')}
              checked={selectedPrice === price.toLowerCase().replace(' ', '')}
              onChange={() => handleSelectPrice(price.toLowerCase().replace(' ', ''))}
               className="appearance-none h-3 w-3 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none "
            />
            <label htmlFor={price} className="text-black">
              {price}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceFilter;
