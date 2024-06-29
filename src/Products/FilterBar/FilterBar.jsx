import React, { useContext, useState } from 'react';
import { FilterContext } from '../../context/FilterContext';

const FilterBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-950 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            Filters
          </button>
        </div>
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          <div className={`flex space-x-2 ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
            <PriceFilter />
            <ColorFilter />
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceFilter = () => {
  const { selectedPrice, handleSelectPrice } = useContext(FilterContext);

  const prices = [
    { label: 'Under ₹1,000', value: 'under1000' },
    { label: '₹1,000 - ₹5,000', value: '1000-5000' },
    { label: '₹5,000 - ₹10,000', value: '5000-10000' },
    { label: '₹10,000 - ₹20,000', value: '10000-20000' },
    { label: 'Over ₹20,000', value: 'over20000' },
  ];

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Price</h3>
      <div className="flex overflow-x-auto scrollbar-hide">
        {prices.map((price) => (
          <button
            key={price.value}
            className={`text-white px-3 py-1 rounded-lg mr-2 focus:outline-none ${
              selectedPrice === price.value ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-600'
            }`}
            onClick={() => handleSelectPrice(price.value)}
          >
            {price.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const ColorFilter = () => {
  const { selectedColor, handleSelectColor } = useContext(FilterContext);

  const colors = [
    { name: 'All', imageUrl: 'https://w7.pngwing.com/pngs/334/571/png-transparent-red-blue-green-color-mixing-mix-colour-red-purple-blue-white.png' },
    { name: 'Red', color: '#f56565' },
    { name: 'Blue', color: '#4299e1' },
    { name: 'Green', color: '#48bb78' },
    { name: 'Gray', color: '#a0aec0' },
    { name: 'Black', color: '#2d3748' },
    { name: 'White', color: '#edf2f7' },
  ];

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Colors</h3>
      {colors.map((color) => (
        <button
          key={color.name}
          className={`text-white px-3 py-1 rounded-lg focus:outline-none ${
            selectedColor === color.name.toLowerCase() ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-600'
          }`}
          onClick={() => handleSelectColor(color.name.toLowerCase())}
        >
          {color.name === 'All' ? (
            <img src={color.imageUrl} alt="All" className="w-6 h-6 object-cover rounded-full" />
          ) : (
            <div
              className={`w-6 h-6 rounded-full ${color.color} ${
                selectedColor === color.name.toLowerCase() ? 'ring-2 ring-white' : ''
              }`}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
