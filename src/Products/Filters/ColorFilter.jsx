import React, { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';

const colors = [
  { name: 'All', imageUrl: 'https://w7.pngwing.com/pngs/334/571/png-transparent-red-blue-green-color-mixing-mix-colour-red-purple-blue-white.png' },
  { name: 'Red', color: '#f56565' },
  { name: 'Blue', color: '#4299e1' },
  { name: 'Green', color: '#48bb78' },
  { name: 'Gray', color: '#a0aec0' },
  { name: 'Black', color: '#2d3748' },
  { name: 'White', color: '#edf2f7' },
];

const ColorFilter = () => {
  const { selectedColor, handleSelectColor } = useContext(FilterContext);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Colors</h3>
      <ul className="flex flex-col space-y-2 p-2">
        {colors.map(color => (
          <li key={color.name} className="flex items-center space-x-2 cursor-pointer" onClick={() => handleSelectColor(color.name.toLowerCase())}>
            {color.name === 'All' ? (
              <img src={color.imageUrl} alt="All" className="w-4 h-4 rounded-full  object-cover" />
            ) : (
              <div className={`w-4 h-4 rounded-full border border-gray-300 ${selectedColor === color.name.toLowerCase() ? `bg-${color.name.toLowerCase()} border-transparent` : 'bg-white'}`} style={{ backgroundColor: color.color }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorFilter;
