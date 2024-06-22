import React from 'react';
import Recommended from '../components/Sidebar/Recommended/Recommended';
import Card from '../components/card';

const Products = () => {
  return (
    <div className="flex-grow px-4">
      <Recommended />
      {/* Add other product components here */}
      <Card/>
    </div>
  );
}

export default Products;
