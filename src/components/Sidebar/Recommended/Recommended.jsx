import React from 'react';

const Recommended = () => {
  return (
    <div className="px-4 flex-grow">
      <h2 className="text-2x font-semibold mb-4">Recommended</h2>
      <div className="space-x-2">
        <button className="px-4 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100">All Products</button>
        <button className="px-4 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100">Nike</button>
        <button className="px-4 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100">Adidas</button>
        <button className="px-4 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100">Puma</button>
        <button className="px-4 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100">Vans</button>
      </div>
    </div>
  );
}

export default Recommended;
