import React, { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';

const discounts = [
    { label: '10% Off or more', value: '10' },
    { label: '20% Off or more', value: '20' },
    { label: '30% Off or more', value: '30' },
    { label: '40% Off or more', value: '40' },
    { label: '50% Off or more', value: '50' },
    { label: '60% Off or more', value: '60' },
];

const DiscountFilter = () => {
  const { selectedDiscount, handleSelectDiscount } = useContext(FilterContext);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Discount</h3>
      <ul className="flex flex-col space-y-1">
        {discounts.map(discount => (
          <li
            key={discount.value}
            className={`cursor-pointer ${selectedDiscount === discount.value ? 'font-bold' : ''} hover:text-golden-500`}
            onClick={() => handleSelectDiscount(discount.value)}
          >
            {discount.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscountFilter;
