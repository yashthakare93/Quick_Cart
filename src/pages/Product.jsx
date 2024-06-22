import React from 'react';
import Products from '../Product/Products';
import Sidebar from '../components/Sidebar/Sidebar';

const Product = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Products />
    </div>
  );
}

export default Product;
