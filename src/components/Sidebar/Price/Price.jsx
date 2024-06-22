import React, { useState } from 'react';

const Price = () => {
  const [selectedPrice, setSelectedPrice] = useState('All');

  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2">Price</h3>
      <ul>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="price"
              value="All"
              checked={selectedPrice === 'All'}
              onChange={(e) => setSelectedPrice(e.target.value)}
            />
            <span className="ml-2">All</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="price"
              value="$0 - $50"
              checked={selectedPrice === '$0 - $50'}
              onChange={(e) => setSelectedPrice(e.target.value)}
            />
            <span className="ml-2">$0 - $50</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="price"
              value="$50 - $100"
              checked={selectedPrice === '$50 - $100'}
              onChange={(e) => setSelectedPrice(e.target.value)}
            />
            <span className="ml-2">$50 - $100</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="price"
              value="$100 - $200"
              checked={selectedPrice === '$100 - $200'}
              onChange={(e) => setSelectedPrice(e.target.value)}
            />
            <span className="ml-2">$100 - $200</span>
          </label>
        </li>
        <li className="mb-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="price"
              value="$200+"
              checked={selectedPrice === '$200+'}
              onChange={(e) => setSelectedPrice(e.target.value)}
            />
            <span className="ml-2">$200+</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Price;
