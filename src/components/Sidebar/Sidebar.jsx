import React from 'react';
import Category from './Category/Category';
import Price from './Price/Price';
import Color from './Colors/Colors';

const Sidebar = () => {
  return (
    <div className="h-screen w-52 flex flex-col border-r-2 items-center">
      <div className="flex-grow overflow-y-auto">
        {/* Add sidebar components */}
        <Category/>
        <Price/>
        <Color/>
      </div>
    </div>
  );
}

export default Sidebar;
