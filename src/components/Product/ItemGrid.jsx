import React from 'react';
import Discount from './Discount';
import SuggestedProduct from './SuggestedProducts';
import RecommendedProduct from './Recommended'
import BestGadgetsAppliance from './BestGagetsAppliance';
import YouMayLike from './YouMayLike';
import BestGiftCollection from './BestGiftCollection';

const ItemGrid = () => {
  return (
    <div>
      <div className="flex w-full gap-4 py-4">
        <div className="w-1/3 ">
          <Discount />
        </div>
        <div className="w-1/3 ">
          <SuggestedProduct />
        </div>
        <div className="w-1/3 ">
          <BestGadgetsAppliance />
        </div>

      </div>
      <div className="flex w-full gap-4">
      <div className="w-1/3 ">
        <RecommendedProduct />
      </div>
      <div className="w-1/3 ">
        <BestGiftCollection />
      </div>
      <div className="w-1/3 ">
        <YouMayLike />
      </div>
      </div>

    </div>

  );
};

export default ItemGrid;
