import React, { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';

const prices = [
  { label: 'Under ₹1,000', value: 'under1000' },
  { label: '₹1,000 - ₹5,000', value: '1000-5000' },
  { label: '₹5,000 - ₹10,000', value: '5000-10000' },
  { label: '₹10,000 - ₹20,000', value: '10000-20000' },
  { label: 'Over ₹20,000', value: 'over20000' },
];

const PriceFilter = () => {
  const { selectedPrice, handleSelectPrice } = useContext(FilterContext);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Price</h3>
      <ul className="flex flex-col space-y-1 font-medium text-gray-500 text-base">
        {prices.map(price => (
          <li
            key={price.value}
            className={`cursor-pointer ${selectedPrice === price.value ? 'text-orange-700' : ''}`}
            onClick={() => handleSelectPrice(price.value)}
          >
            {price.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceFilter;
