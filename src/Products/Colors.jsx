import React, { useState,useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

const Color = () => {
  const { setSelectedColor } = useContext(FilterContext);
  const [selected, setSelected] = useState('All');

  const handleChange = (e) => {
    setSelected(e.target.value);
    setSelectedColor(e.target.value);
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2">Color</h3>
      <ul>
        {['All', 'Red', 'Blue', 'Green', 'Black', 'White'].map((color) => (
          <li key={color} className="mb-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-600"
                name="color"
                value={color}
                checked={selected === color}
                onChange={handleChange}
              />
              <span className="ml-2">{color}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Color;