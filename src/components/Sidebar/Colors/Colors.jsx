import React, { useState } from 'react';

const Color = () => {
  const [selectedColor, setSelectedColor] = useState('All');

  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2">Color</h3>
      <ul>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="color"
              value="All"
              checked={selectedColor === 'All'}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
            <span className="ml-2">All</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="color"
              value="Red"
              checked={selectedColor === 'Red'}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
            <span className="ml-2">Red</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="color"
              value="Blue"
              checked={selectedColor === 'Blue'}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
            <span className="ml-2">Blue</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="color"
              value="Green"
              checked={selectedColor === 'Green'}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
            <span className="ml-2">Green</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="color"
              value="Black"
              checked={selectedColor === 'Black'}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
            <span className="ml-2">Black</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="color"
              value="White"
              checked={selectedColor === 'White'}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
            <span className="ml-2">White</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Color;
