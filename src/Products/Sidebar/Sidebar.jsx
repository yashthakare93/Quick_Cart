import React from 'react';
import ColorFilter from '../Filters/ColorFilter';
import PriceFilter from '../Filters/PriceFilter';
import DiscountFilter from '../Filters/DiscountFilter';

const Sidebar = () => {
  return (
    <div className="h-screen w-44 flex flex-col px-4 ">
    <div className="flex-grow overflow-y-auto">
      <PriceFilter />
      <ColorFilter />
      <DiscountFilter/>
    </div>
  </div>
  );
}

export default Sidebar;
