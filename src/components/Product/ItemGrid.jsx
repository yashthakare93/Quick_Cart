
import React from 'react';
import Discount from './Discount';
import Recommended from './Recommended';
import SuggestedProducts from './SuggestedProducts';
import BestGagetsAppliance from './BestGagetsAppliance';

const ItemGrid = () => {
  return (
    <div className="flex flex-wrap -mx-2">
      <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
        <Discount/>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
        <Recommended/>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
        <Recommended />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
        <SuggestedProducts />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
        <SuggestedProducts />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
        <BestGagetsAppliance/>
      </div>
    </div>
  );
};

export default ItemGrid;
