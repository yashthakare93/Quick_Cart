import React from 'react';
import ColorFilter from '../Filters/ColorFilter';
import PriceFilter from '../Filters/PriceFilter';

const Sidebar = () => {
  return (
    <div className="h-screen w-52 flex flex-col p-2 items-center">
    <div className="flex-grow overflow-y-auto">
      <PriceFilter />
      <ColorFilter />
    </div>
  </div>
  );
}

export default Sidebar;
